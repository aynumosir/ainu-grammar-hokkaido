<script lang="ts">
	import { getContext } from 'svelte';
	import { GRAMMAR_CTX, type GrammarContext } from '../context';
	import { abbreviations, dialectLabels } from '../abbreviations';
	import { bibliography } from '../bibliography';
	import { dictionaryUrl } from '../links';

	let {
		m,
		g,
		ain,
		orig,
		origLang,
		tr,
		lit,
		cite,
		dial,
		place,
		note,
		id,
		constructed = false
	}: {
		/** Morphemic line: words separated by spaces, morphemes by `-`, clitics by `=`. */
		m: string;
		/** Gloss line: one gloss word per morphemic word. */
		g: string;
		/** Surface line, when it differs from the morphemic segmentation. */
		ain?: string;
		/** Line in the original orthography of the source (e.g. Cyrillic, katakana). */
		orig?: string;
		/** Language/script tag for the `orig` line, e.g. 'ain-Kana'. Defaults to 'ain'. */
		origLang?: string;
		/** Free translation (English). */
		tr: string;
		/** Literal translation, shown after the free translation. */
		lit?: string;
		/**
		 * Source citation(s): 'bibKey', 'bibKey:pages', or several separated by '; '.
		 * Required for attested examples; omit only for constructed illustrations.
		 */
		cite?: string;
		/** Dialect tag, e.g. SAR (Saru), CHI (Chitose), HK (general). */
		dial?: keyof typeof dialectLabels;
		/** Locality or speaker detail appended to the dialect tag, e.g. 'Nibutani'. */
		place?: string;
		note?: string;
		id?: string;
		/** Mark a constructed (non-attested) illustration. */
		constructed?: boolean;
	} = $props();

	const ctx = getContext<GrammarContext>(GRAMMAR_CTX);
	ctx.ex.v += 1;
	const n = ctx.ex.v;

	const mWords = m.trim().split(/\s+/);
	const gWords = g.trim().split(/\s+/);
	if (mWords.length !== gWords.length) {
		throw new Error(
			`Example (${n}) "${m}": morpheme line has ${mWords.length} words but gloss line has ${gWords.length}`
		);
	}

	// Validate gloss abbreviations: every ALL-CAPS atom must be documented.
	// Lookarounds keep capitalised lexical glosses like 'Russian' from matching.
	const ATOM = /(?<![A-Za-z])[0-9]*[A-Z][A-Z0-9]*(?![a-z])/g;
	for (const w of gWords) {
		for (const match of w.matchAll(ATOM)) {
			const atom = match[0];
			if (!(atom in abbreviations) && !/^[0-9]+$/.test(atom)) {
				throw new Error(`Example (${n}) "${m}": unknown gloss abbreviation "${atom}" in "${w}"`);
			}
		}
	}

	interface CiteRef {
		key: string;
		pages?: string;
	}
	const citeRefs: CiteRef[] = (cite ?? '')
		.split(';')
		.map((s) => s.trim())
		.filter(Boolean)
		.map((s) => {
			const i = s.indexOf(':');
			const key = i === -1 ? s : s.slice(0, i);
			const pages = i === -1 ? undefined : s.slice(i + 1).trim();
			if (!(key in bibliography)) {
				throw new Error(`Example (${n}) "${m}": unknown bibliography key "${key}"`);
			}
			ctx.cited.add(key);
			return { key, pages };
		});

	/** Split a gloss word into segments, marking documented abbreviations. */
	function glossSegments(w: string): { text: string; abbr?: string }[] {
		const out: { text: string; abbr?: string }[] = [];
		let last = 0;
		for (const match of w.matchAll(ATOM)) {
			const i = match.index ?? 0;
			if (i > last) out.push({ text: w.slice(last, i) });
			const atom = match[0];
			out.push(abbreviations[atom] ? { text: atom, abbr: abbreviations[atom] } : { text: atom });
			last = i + atom.length;
		}
		if (last < w.length) out.push({ text: w.slice(last) });
		return out;
	}

	/** Morpheme pieces of a word, with dictionary queries for linkable ones. */
	function morphLinks(w: string): { text: string; q?: string }[] {
		return w.split(/([-=])/).map((part) => {
			const clean = part.replace(/[*()[\]?.,!'"‘’“”…]/g, '');
			if (part === '-' || part === '=' || clean.length < 2 || /\d/.test(clean)) {
				return { text: part };
			}
			return { text: part, q: clean };
		});
	}

	const dialLabel = dial ? dialectLabels[dial] : undefined;
</script>

<div class="ex" {id}>
	<span class="ex-num">({n})</span>
	<div class="ex-body">
		{#if orig}
			<p class="ex-orig" lang={origLang ?? 'ain'}>{orig}</p>
		{/if}
		{#if ain}
			<p class="ex-surface" lang="ain">{ain}</p>
		{/if}
		<div class="ex-il">
			{#each mWords as w, i}
				<div class="ex-w">
					<span class="ex-m" lang="ain"
						>{#each morphLinks(w) as piece}{#if piece.q}<a
									href={dictionaryUrl(piece.q)}
									hreflang="en"
									target="_blank"
									rel="noopener"
									title={`Look up ${piece.q} in the dictionary`}>{piece.text}</a
								>{:else}{piece.text}{/if}{/each}</span
					>
					<span class="ex-g"
						>{#each glossSegments(gWords[i]) as seg}{#if seg.abbr}<abbr title={seg.abbr}
									>{seg.text}</abbr
								>{:else}{seg.text}{/if}{/each}</span
					>
				</div>
			{/each}
		</div>
		<p class="ex-tr">
			‘{tr}’{#if lit}&nbsp;<span class="ex-lit">(lit. ‘{lit}’)</span>{/if}
		</p>
		{#if citeRefs.length || dialLabel || constructed}
			<p class="ex-src">
				{#if constructed}<span class="ex-constructed">constructed example</span
					>{#if citeRefs.length || dialLabel};&nbsp;{/if}{/if}{#each citeRefs as c, i}<a
						href={`/grammar/references#${c.key}`}
						>{bibliography[c.key].citeAuthor}
						{bibliography[c.key].year}</a
					>{#if c.pages}:&nbsp;{c.pages}{/if}{#if i < citeRefs.length - 1};&nbsp;{/if}{/each}{#if dialLabel};
					{dialLabel}{#if place}, {place}{/if}{:else if place};
					{place}{/if}
			</p>
		{/if}
		{#if note}
			<p class="ex-note">{note}</p>
		{/if}
	</div>
</div>
