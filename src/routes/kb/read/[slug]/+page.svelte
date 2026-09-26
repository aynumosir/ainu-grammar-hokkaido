<script lang="ts">
	import type { PageData } from './$types';
	import type { ClaimCard, ExampleCard, NarrativeUnit, StatementCard } from '$lib/kb/types';
	let { data }: { data: PageData } = $props();
	const p = $derived(data.page);
	let lang = $state<'en' | 'ja'>('en');

	const labelOf = $derived(new Map(p.sources.map((s) => [s.key, s.label])));
	const examplesById = $derived(new Map(p.examples.map((e) => [e.id, e])));
	const statementsById = $derived(new Map(p.statements.map((s) => [s.id, s])));
	const claimsById = $derived(new Map(p.claims.map((c) => [c.id, c])));
	const sectionClaimIds = $derived(new Set(p.sections.flatMap((s) => s.claims)));
	const sectionStatementIds = $derived(new Set(p.sections.flatMap((s) => s.statements)));
	const opening = $derived(p.claims.filter((c) => !sectionClaimIds.has(c.id)));
	const openingStatements = $derived(p.statements.filter((s) => !sectionStatementIds.has(s.id) && !s.claim));

	/** One sentence of the text: a claim, or a statement no claim covers yet. */
	interface Sentence {
		id: string;
		en: string;
		ja: string;
		cites: { stance: string; refs: Ref[] }[];
		relations: ClaimCard['relations'];
		grouped: boolean;
	}
	const STANCE_ORDER = ['asserts', 'presupposes', 'reports', 'proposes', 'doubts', 'rejects'];
	const STANCE_WORD: Record<string, string> = { asserts: '', presupposes: '', reports: 'reported in', proposes: 'proposed in', doubts: 'doubted in', rejects: 'rejected in' };
	/** One source in a citation, with each distinct page it is cited at. */
	type Ref = { key: string; label: string; href: string; pages: { printed: string | number; href: string }[] };
	type Member = { id: string; key: string | null; printed: string | number | null; stance: string };
	const hrefOf = (m: Member) => `/kb/sources/${m.key}#${encodeURIComponent(m.id)}`;
	/** Members grouped by stance, then by source, so a source is named once per stance. */
	function citeGroups(members: Member[]): Sentence['cites'] {
		return STANCE_ORDER.flatMap((stance) => {
			const refs = new Map<string, Ref>();
			for (const m of members.filter((x) => x.stance === stance)) {
				const key = m.key ?? '?';
				let r = refs.get(key);
				if (!r) refs.set(key, (r = { key, label: labelOf.get(key) ?? key, href: hrefOf(m), pages: [] }));
				if (m.printed != null && !r.pages.some((pg) => String(pg.printed) === String(m.printed))) r.pages.push({ printed: m.printed, href: hrefOf(m) });
			}
			return refs.size ? [{ stance, refs: [...refs.values()] }] : [];
		});
	}
	function fromClaim(c: ClaimCard): Sentence {
		return {
			id: c.id,
			en: c.en,
			ja: c.ja,
			cites: citeGroups(c.members),
			relations: c.relations.filter((r) => r.kind === 'contradicts' || r.kind === 'contrasts'),
			grouped: true
		};
	}
	function fromStatement(st: StatementCard): Sentence {
		return { id: st.id, en: st.en, ja: st.ja, cites: citeGroups([st]), relations: [], grouped: false };
	}
	function sentencesOf(claimIds: string[], statementIds: string[], all = false): Sentence[] {
		const out: Sentence[] = [];
		for (const id of claimIds) {
			const c = claimsById.get(id);
			if (c && (all || !covered.has(id))) out.push(fromClaim(c));
		}
		for (const id of statementIds) {
			const st = statementsById.get(id);
			if (st && !st.claim) out.push(fromStatement(st));
		}
		return out;
	}
	const openingSentences = $derived(sentencesOf(opening.map((c) => c.id), []));
	const openingLoose = $derived(sentencesOf([], openingStatements.map((s) => s.id)));
	const narrativeBySection = $derived(new Map(p.narrative.map((n) => [n.section, n])));
	/** claims some passage already covers: the deterministic text repeats none of them */
	const covered = $derived(new Set(p.narrative.flatMap((n) => n.claims)));
	let showClaims = $state(false);

	/** A passage with claim markers ⟦claim:…⟧ and *italics*, as tokens for rendering. */
	type Token = { t: 'text'; s: string } | { t: 'i'; s: string } | { t: 'cite'; ids: string[] };
	function tokens(text: string): Token[] {
		const out: Token[] = [];
		const re = /⟦([^⟧]+)⟧|\*([^*\n]+)\*/g;
		let last = 0;
		let m: RegExpExecArray | null;
		while ((m = re.exec(text))) {
			if (m.index > last) out.push({ t: 'text', s: text.slice(last, m.index) });
			if (m[1]) {
				const prev = out[out.length - 1];
				if (prev && prev.t === 'cite') prev.ids.push(m[1]);
				else out.push({ t: 'cite', ids: [m[1]] });
			} else out.push({ t: 'i', s: m[2] });
			last = m.index + m[0].length;
		}
		if (last < text.length) out.push({ t: 'text', s: text.slice(last) });
		return out;
	}
	/** citation cluster of the claims behind one sentence */
	function citesOf(ids: string[]): Sentence['cites'] {
		return citeGroups(ids.flatMap((id) => claimsById.get(id)?.members ?? []));
	}
	const exampleOf = (id: string): ExampleCard | undefined => examplesById.get(id);
	const headingTag = (depth: number) => (depth <= 2 ? 'h2' : depth === 3 ? 'h3' : 'h4');
	const total = $derived(p.sections.reduce((n, s) => n + s.claims.length + s.statements.filter((id) => !statementsById.get(id)?.claim).length, openingSentences.length));
</script>

<svelte:head>
	<title>{p.topic.title} · Reading path</title>
	<meta name="description" content={p.topic.question?.en ?? p.topic.summary} />
</svelte:head>

<div class="read">
	<p class="kicker"><a href="/kb">Knowledge base</a> · {p.part.label} · <a href={`/kb/topics/${p.topic.slug}`}>this topic as a network</a></p>
	<h1>{p.topic.num}. {p.topic.title}</h1>
	{#if p.topic.question}
		<p class="question">{lang === 'ja' && p.topic.question.ja ? p.topic.question.ja : p.topic.question.en}</p>
	{/if}
	<div class="controls">
		<span class="muted small">{total} sentences from {p.counts.sources} sources · every sentence names the pages it rests on</span>
		<span class="lang" role="group" aria-label="Language of the text">
			<button type="button" class:on={lang === 'en'} onclick={() => (lang = 'en')}>English</button>
			<button type="button" class:on={lang === 'ja'} onclick={() => (lang = 'ja')} lang="ja">日本語</button>
		</span>
	</div>

	{#snippet prose(list: Sentence[])}
		{#if list.length}
			<p class="text">
				{#each list as s (s.id)}
					<span class="s" id={s.id} class:single={!s.grouped}>
						<span lang={lang}>{lang === 'ja' && s.ja ? s.ja : s.en}</span>
						{@render cites(s.cites)}
					</span>
					{' '}
				{/each}
			</p>
			{#each list.filter((s) => s.relations.length) as s (s.id)}
				<aside class="differ">
					{#each s.relations as r, i (i)}
						<p>
							<b>{r.kind === 'contradicts' ? 'The sources contradict each other here' : 'The sources analyse this differently'}</b>{#if r.differs_in} <span class="muted">(in {r.differs_in})</span>{/if}:
							“{s.en}” against “{claimsById.get(r.claim)?.en ?? r.en ?? r.claim}”{#if r.note} <span class="muted">— {r.note}</span>{/if}
						</p>
					{/each}
				</aside>
			{/each}
		{/if}
	{/snippet}

	{#snippet cites(list: Sentence['cites'])}
		<span class="cite">({#each list as c, i (c.stance)}{#if i}{'; '}{/if}{#if STANCE_WORD[c.stance]}{STANCE_WORD[c.stance]}{' '}{/if}{#each c.refs as r, j (r.key)}{#if j}{', '}{/if}{#if r.pages.length}{r.label}: {#each r.pages as pg, k (k)}{#if k}{', '}{/if}<a href={pg.href}>{pg.printed}</a>{/each}{:else}<a href={r.href}>{r.label}</a>{/if}{/each}{/each})</span>
	{/snippet}

	{#snippet passage(n: NarrativeUnit, fallback: Sentence[])}
		<p class="text narrative" id={n.id} lang={lang}>
			{#each tokens(lang === 'ja' && n.ja ? n.ja : n.en) as tk, i (i)}
				{#if tk.t === 'text'}{tk.s}{:else if tk.t === 'i'}<i>{tk.s}</i>{:else}{@render cites(citesOf(tk.ids))}{/if}
			{/each}
		</p>
		<p class="muted small unit">
			<span class="chip status">{n.status}</span>
			{n.claims.length} claims{#if n.uncovered.length}, {n.uncovered.length} not covered{/if}{#if n.unsupported}, {n.unsupported} sentences without a claim{/if}
			· <button type="button" class="linkish" onclick={() => (showClaims = !showClaims)}>{showClaims ? 'hide the claims' : 'show the claims one by one'}</button>
		</p>
		{#if showClaims}{@render prose(fallback)}{/if}
	{/snippet}

	{#snippet examples(ids: string[])}
		{#each ids as exId (exId)}
			{@const e = exampleOf(exId)}
			{#if e}
				<div class="ex">
					<div class="ain">{e.text}</div>
					<div class="gloss">{e.gloss}</div>
					<div>‘{e.translation}’</div>
					<div class="meta muted small">
						{#each e.citations as ct, i (i)}<a href={`/kb/sources/${ct.key}`}>{labelOf.get(ct.key) ?? ct.key}{ct.pages ? `: ${ct.pages}` : ''}</a>{#if i < e.citations.length - 1}; {/if}{/each}
						{#if e.constructed} · constructed{/if}{#if e.dialect_tag} · {e.dialect_tag}{/if}
					</div>
				</div>
			{/if}
		{/each}
	{/snippet}

	{#if narrativeBySection.get(null)}
		{@render passage(narrativeBySection.get(null)!, sentencesOf(narrativeBySection.get(null)!.claims, [], true))}
	{:else}
		{@render prose(openingSentences)}
	{/if}

	{#each p.sections as s (s.id)}
		{@const list = sentencesOf(s.claims, [])}
		{@const loose = sentencesOf([], s.statements)}
		{#if list.length || loose.length || s.examples.length || narrativeBySection.get(s.id)}
			<svelte:element this={headingTag(s.depth)} id={s.sid}>{s.label}</svelte:element>
			{#if s.question}<p class="muted sq">{lang === 'ja' && s.question.ja ? s.question.ja : s.question.en}</p>{/if}
			{#if narrativeBySection.get(s.id)}
				{@render passage(narrativeBySection.get(s.id)!, sentencesOf(narrativeBySection.get(s.id)!.claims, [], true))}
			{:else}
				{@render prose(list)}
			{/if}
			{@render examples(s.examples)}
			{#if loose.length}
				<details class="loose">
					<summary class="muted small">{loose.length} further statement{loose.length === 1 ? '' : 's'} of single sources, not yet grouped into claims</summary>
					{@render prose(loose)}
				</details>
			{/if}
		{/if}
	{/each}

	{#if openingLoose.length}
		<details class="loose">
			<summary class="muted small">{openingLoose.length} further statement{openingLoose.length === 1 ? '' : 's'} on this topic, not placed in a section or grouped into claims</summary>
			{@render prose(openingLoose)}
		</details>
	{/if}

	{#if !total}
		<p class="muted">No source has been read on this topic yet. The first edition's text is on the <a href={`/kb/topics/${p.topic.slug}`}>topic page</a>.</p>
	{/if}

	<nav class="pager" aria-label="Reading path">
		{#if p.neighbours.prev}<a href={`/kb/read/${p.neighbours.prev.slug}`}>← {p.neighbours.prev.title}</a>{:else}<span></span>{/if}
		{#if p.neighbours.next}<a href={`/kb/read/${p.neighbours.next.slug}`}>{p.neighbours.next.title} →</a>{/if}
	</nav>
</div>

<style>
	.read {
		max-width: 46rem;
	}
	.question {
		font-size: var(--step-1);
		line-height: 1.45;
	}
	.controls {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--space-3);
		flex-wrap: wrap;
		margin: var(--space-3) 0 var(--space-6);
		padding-bottom: var(--space-3);
		border-bottom: 1px solid var(--color-border);
	}
	.lang button {
		font: inherit;
		font-size: 0.85rem;
		padding: 2px 10px;
		border: 1px solid var(--color-border);
		background: var(--color-surface-subtle);
		color: inherit;
		cursor: pointer;
	}
	.lang button:first-child {
		border-radius: 4px 0 0 4px;
	}
	.lang button:last-child {
		border-radius: 0 4px 4px 0;
		margin-left: -1px;
	}
	.lang button.on {
		background: var(--color-accent);
		color: var(--color-bg, #fff);
		border-color: var(--color-accent);
	}
	.text {
		max-width: none;
		line-height: 1.7;
		font-size: var(--step-0);
	}
	.s:target {
		background: color-mix(in srgb, var(--color-accent) 14%, transparent);
	}
	.cite {
		font-size: 0.78em;
		color: var(--color-muted);
		white-space: normal;
	}
	.cite a {
		color: var(--color-muted);
		text-decoration: none;
	}
	.cite a:hover {
		text-decoration: underline;
	}
	.differ {
		margin: var(--space-2) 0 var(--space-4);
		padding: 8px 12px;
		border-left: 3px solid var(--color-accent);
		font-size: 0.9rem;
	}
	.differ p {
		margin: 0;
	}
	.sq {
		font-size: 0.95rem;
		margin-top: calc(-1 * var(--space-2));
	}
	.ex {
		margin: var(--space-3) 0 var(--space-3) var(--space-4);
		font-size: 0.95rem;
	}
	.ain {
		font-style: italic;
	}
	.gloss {
		font-size: 0.85rem;
		color: var(--color-muted);
	}
	.small {
		font-size: 0.8rem;
	}
	.unit {
		margin-top: calc(-1 * var(--space-2));
	}
	.linkish {
		font: inherit;
		color: var(--color-accent);
		background: none;
		border: 0;
		padding: 0;
		cursor: pointer;
		text-decoration: underline;
	}
	.loose {
		margin: var(--space-2) 0 var(--space-4);
	}
	.loose summary {
		cursor: pointer;
	}
	.loose .text {
		font-size: 0.92rem;
	}
	.pager {
		display: flex;
		justify-content: space-between;
		gap: var(--space-4);
		margin-top: var(--space-8);
		padding-top: var(--space-3);
		border-top: 1px solid var(--color-border);
	}
</style>
