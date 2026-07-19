<script module lang="ts">
	/**
	 * FormCard — the single hover-lookup popover shared by every `<A>` word on a
	 * chapter page. `A.svelte` reports hover/focus through `form-card.svelte.ts`;
	 * this component (mounted once in the grammar layout) fetches what the
	 * morpheme database and the corpus know about the form and renders the card
	 * next to the anchor. Responses are cached per form for the session.
	 */

	interface MdbEntry {
		id?: string;
		lemma?: string;
		display_lemma?: string;
		variants?: string[];
		allomorphs?: string[];
		category?: string;
		glosses_en?: string[];
		glosses_jp?: string[];
		composition?: string[];
	}

	interface CorpusInfo {
		found: boolean;
		count?: number | null;
		rank?: number | null;
	}

	/** Per-form lookup results; an absent key means that source never answered. */
	interface CardData {
		mdb?: MdbEntry[];
		corpus?: CorpusInfo;
	}

	const dataCache = new Map<string, CardData>();
	const inflight = new Map<string, Promise<unknown>>();

	async function fetchMdb(form: string): Promise<MdbEntry[]> {
		const res = await fetch(
			`https://mdb.aynu.org/api/morphemes?q=${encodeURIComponent(form)}&scope=all&limit=3`
		);
		if (!res.ok) throw new Error(`mdb HTTP ${res.status}`);
		const json = (await res.json()) as { results?: MdbEntry[] };
		return json.results ?? [];
	}

	async function fetchCorpus(form: string): Promise<CorpusInfo> {
		const res = await fetch(
			`https://corpus.aynu.org/v1/freq/word?token=${encodeURIComponent(form)}`
		);
		if (!res.ok) throw new Error(`corpus HTTP ${res.status}`);
		const json = (await res.json()) as { data?: CorpusInfo };
		return json.data ?? { found: false };
	}

	async function loadPart(form: string, part: 'mdb' | 'corpus') {
		const key = `${part}:${form}`;
		let p = inflight.get(key) as Promise<MdbEntry[] | CorpusInfo | undefined> | undefined;
		if (!p) {
			p = (part === 'mdb' ? fetchMdb(form) : fetchCorpus(form)).catch(() => undefined);
			inflight.set(key, p);
			void p.finally(() => inflight.delete(key));
		}
		const v = await p;
		const entry = dataCache.get(form) ?? {};
		if (v !== undefined) {
			if (part === 'mdb') entry.mdb = v as MdbEntry[];
			else entry.corpus = v as CorpusInfo;
			dataCache.set(form, entry);
		}
		return v;
	}

	/** Database surfaces carry morpheme-edge hyphens the printed form may lack. */
	const norm = (s: string) => s.replace(/^-+|-+$/g, '').toLowerCase();

	function matchEntry(results: MdbEntry[] | undefined, form: string): MdbEntry | undefined {
		if (!results) return undefined;
		const target = norm(form);
		return results.find((r) =>
			[r.id, r.lemma, r.display_lemma, ...(r.variants ?? []), ...(r.allomorphs ?? [])]
				.filter((x): x is string => typeof x === 'string')
				.some((x) => norm(x) === target)
		);
	}
</script>

<script lang="ts">
	import { tick } from 'svelte';
	import { cardState, hideCard, keepCard } from '../form-card.svelte';
	import { dictionaryUrl } from '../links';

	const nf = new Intl.NumberFormat('en-US');

	let mdb = $state<MdbEntry[] | undefined>(undefined);
	let corpus = $state<CorpusInfo | undefined>(undefined);
	let shownForm = $state('');
	let pos = $state<{ top: number; left: number } | null>(null);
	let cardEl = $state<HTMLElement | null>(null);

	const entry = $derived(matchEntry(mdb, shownForm));

	// Kick the two lookups the moment an anchor appears — the 220 ms show delay
	// runs in parallel, so data is usually waiting when the card opens.
	$effect(() => {
		const el = cardState.anchor;
		const form = cardState.form;
		if (!el || !form) {
			mdb = undefined;
			corpus = undefined;
			shownForm = '';
			return;
		}
		shownForm = form;
		const cached = dataCache.get(form);
		mdb = cached?.mdb;
		corpus = cached?.corpus;
		if (cached?.mdb === undefined)
			void loadPart(form, 'mdb').then((v) => {
				if (shownForm === form) mdb = v as MdbEntry[] | undefined;
			});
		if (cached?.corpus === undefined)
			void loadPart(form, 'corpus').then((v) => {
				if (shownForm === form) corpus = v as CorpusInfo | undefined;
			});
	});

	// Position next to the anchor (flipped above near the viewport bottom,
	// clamped horizontally). Re-runs as rows arrive and the height changes.
	$effect(() => {
		const el = cardState.anchor;
		if (!cardState.visible || !el) {
			pos = null;
			return;
		}
		mdb;
		corpus;
		const r = el.getBoundingClientRect();
		void tick().then(() => {
			const card = cardEl;
			if (!card || !cardState.visible) return;
			const w = card.offsetWidth;
			const h = card.offsetHeight;
			let top = r.bottom + 6;
			if (top + h > window.innerHeight - 8) top = Math.max(8, r.top - h - 6);
			pos = {
				top,
				left: Math.min(Math.max(8, r.left), Math.max(8, window.innerWidth - w - 8))
			};
		});
	});

	// While open: describe the anchor, close on Escape / scroll.
	$effect(() => {
		const el = cardState.anchor;
		if (!cardState.visible || !el) return;
		el.setAttribute('aria-describedby', 'form-card');
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') hideCard(true);
		};
		const onScroll = () => hideCard(true);
		window.addEventListener('keydown', onKey);
		window.addEventListener('scroll', onScroll, true);
		return () => {
			el.removeAttribute('aria-describedby');
			window.removeEventListener('keydown', onKey);
			window.removeEventListener('scroll', onScroll, true);
		};
	});
</script>

{#if cardState.visible && cardState.anchor}
	<!-- Pointer-affordance popover, not a dialog: the anchor link carries the
	     keyboard path, and it gets aria-describedby="form-card" while open. -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		bind:this={cardEl}
		id="form-card"
		class="form-card"
		style:top={pos ? `${pos.top}px` : '0px'}
		style:left={pos ? `${pos.left}px` : '0px'}
		style:visibility={pos ? 'visible' : 'hidden'}
		onmouseenter={keepCard}
		onmouseleave={() => hideCard()}
	>
		<div class="fc-head">
			<span class="fc-form" lang="ain">{shownForm}</span>
			{#if entry?.category}<span class="fc-cat">{entry.category}</span>{/if}
		</div>

		{#if entry}
			{#if entry.glosses_en?.length}
				<p class="fc-gloss">{entry.glosses_en.slice(0, 3).join(', ')}</p>
			{/if}
			{#if entry.glosses_jp?.length}
				<p class="fc-gloss" lang="ja">{entry.glosses_jp.slice(0, 3).join('、')}</p>
			{/if}
			{#if entry.composition?.length}
				<p class="fc-comp">{entry.composition.join(' + ')}</p>
			{/if}
		{:else if mdb}
			<p class="fc-none">no entry found</p>
		{/if}

		{#if corpus}
			<p class="fc-corpus" class:missing={!corpus.found}>
				{#if corpus.found && corpus.count != null}
					{nf.format(corpus.count)} tokens in the corpus{#if corpus.rank != null}&nbsp;· rank
						{nf.format(corpus.rank)}{/if}
				{:else if corpus.found}
					in the corpus
				{:else}
					not in the corpus
				{/if}
			</p>
		{/if}

		<p class="fc-links">
			<a href={`https://mdb.aynu.org/?q=${encodeURIComponent(shownForm)}`} target="_blank" rel="noopener">Database</a>
			<a href={`https://corpus.aynu.org/?q=${encodeURIComponent(shownForm)}`} target="_blank" rel="noopener">Corpus</a>
			<a href={dictionaryUrl(shownForm)} target="_blank" rel="noopener">Dictionary</a>
		</p>
	</div>
{/if}

<style>
	.form-card {
		position: fixed;
		z-index: 40;
		max-width: 22rem;
		padding: 0.55rem 0.7rem 0.5rem;
		background: var(--color-surface);
		color: var(--color-fg);
		border: 1px solid var(--color-border-strong);
		box-shadow: var(--shadow-popover);
		font-family: var(--font-sans);
		font-size: 0.8rem;
		line-height: 1.45;
	}

	.fc-head {
		display: flex;
		align-items: baseline;
		gap: 0.5rem;
	}

	.fc-form {
		font-family: var(--font-mono);
		font-size: 0.85rem;
		font-weight: 600;
	}

	.fc-cat {
		font-size: 0.68rem;
		font-variant-caps: all-small-caps;
		letter-spacing: 0.05em;
		color: var(--color-muted);
		border: 1px solid var(--color-border);
		padding: 0.05rem 0.35rem;
	}

	.fc-gloss {
		margin: 0.3rem 0 0;
	}

	.fc-comp {
		margin: 0.25rem 0 0;
		font-family: var(--font-mono);
		font-size: 0.74rem;
		color: var(--color-muted);
	}

	.fc-none {
		margin: 0.3rem 0 0;
		color: var(--color-faint);
		font-style: italic;
	}

	.fc-corpus {
		margin: 0.3rem 0 0;
		font-variant-numeric: tabular-nums;
	}

	.fc-corpus.missing {
		color: var(--color-faint);
	}

	.fc-links {
		display: flex;
		gap: 0.8rem;
		margin: 0.45rem 0 0;
		padding-top: 0.35rem;
		border-top: 1px solid var(--color-border);
		font-size: 0.74rem;
	}

	.fc-links a {
		color: var(--color-accent);
		text-decoration: none;
	}

	.fc-links a:hover {
		text-decoration: underline;
	}
</style>
