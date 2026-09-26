<script lang="ts">
	import Graph from '$lib/kb/Graph.svelte';
	import type { PageData } from './$types';
	import type { ClaimCard, ExampleCard, StatementCard } from '$lib/kb/types';
	let { data }: { data: PageData } = $props();
	const p = $derived(data.page);
	const examplesById = $derived(new Map(p.examples.map((e) => [e.id, e])));
	const statementsById = $derived(new Map(p.statements.map((s) => [s.id, s])));
	const claimsById = $derived(new Map(p.claims.map((c) => [c.id, c])));
	const sectionClaimIds = $derived(new Set(p.sections.flatMap((s) => s.claims)));
	const chapterLevelClaims = $derived(p.claims.filter((c) => !sectionClaimIds.has(c.id)));
	const sectionStatementIds = $derived(new Set(p.sections.flatMap((s) => s.statements)));
	const chapterLevelStatements = $derived(p.statements.filter((s) => !sectionStatementIds.has(s.id) && !s.claim));
	let openSentences = $state(false);
	let openStatements = $state(false);

	const exampleOf = (id: string): ExampleCard | undefined => examplesById.get(id);
	const statementOf = (id: string): StatementCard | undefined => statementsById.get(id);
	const claimOf = (id: string): ClaimCard | undefined => claimsById.get(id);
	const STANCE_ORDER = ['asserts', 'proposes', 'presupposes', 'reports', 'doubts', 'rejects'];
	function supportLine(c: ClaimCard): { stance: string; keys: string[] }[] {
		return STANCE_ORDER.filter((s) => c.support[s]?.length).map((s) => ({ stance: s, keys: c.support[s] }));
	}
</script>

<svelte:head>
	<title>{p.topic.title} · Knowledge base</title>
	<meta name="description" content={p.topic.question?.en ?? p.topic.summary} />
</svelte:head>

<p class="kicker"><a href="/kb">Knowledge base</a> · {p.part.label}</p>
<h1>{p.topic.num}. {p.topic.title}</h1>
{#if p.topic.question}
	<p class="question">{p.topic.question.en}</p>
	{#if p.topic.question.ja}<p class="question-ja muted" lang="ja">{p.topic.question.ja}</p>{/if}
{/if}
<p>{p.topic.summary}</p>
<p>
	<span class="chip status">candidate topic from the first edition</span>
	<span class="chip status">{p.topic.id}</span>
	<a class="chip" href={`/kb/read/${p.topic.slug}`}>read this topic as text</a>
</p>

<div class="stats" aria-label="Counts">
	<div class="stat"><span class="v">{p.counts.claims}</span><span class="k">claims</span></div>
	<div class="stat"><span class="v">{p.counts.statements}</span><span class="k">statements</span></div>
	<div class="stat"><span class="v">{p.counts.sources}</span><span class="k">sources</span></div>
	<div class="stat"><span class="v">{p.counts.examples}</span><span class="k">examples</span></div>
	<div class="stat"><span class="v">{p.counts.sections}</span><span class="k">sections</span></div>
	<div class="stat"><span class="v">{p.counts.sentences}</span><span class="k">first-edition sentences</span></div>
</div>

<h2>Local network</h2>
<p class="muted">
	The chapter, its sections, the sources it cites, the chapters it cross-references, the forms it mentions
	most, and the claims grouped under it with the sources that assert, propose, doubt or reject each.
</p>
<Graph data={p.graph} height={460} />

<div class="columns">
	<div>
		<h2>Sources</h2>
		<div class="table-wrap">
			<table>
				<thead>
					<tr><th>Source</th><th class="num">Citations</th><th class="num">Without page</th><th class="num">Statements</th></tr>
				</thead>
				<tbody>
					{#each p.sources as s (s.key)}
						<tr>
							<td>{#if s.known}<a href={`/kb/sources/${s.key}`}>{s.label}</a>{:else}<span class="ain">{s.key}</span> <span class="muted">(no record)</span>{/if}</td>
							<td class="num">{s.count}</td>
							<td class="num">{s.pageless || ''}</td>
							<td class="num">{s.statements || ''}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
	<div>
		<h2>Related chapters</h2>
		<ul class="plain">
			{#each p.related.slice(0, 20) as r (r.slug)}
				<li><a href={`/kb/topics/${r.slug}`}>{r.title}</a> <span class="muted">×{r.w}</span></li>
			{/each}
		</ul>
		{#if p.forms.length}
			<h2>Forms mentioned</h2>
			<p>
				{#each p.forms.slice(0, 40) as f (f.form)}
					<a class="chip" href={`https://mdb.aynu.org/search?q=${encodeURIComponent(f.form)}`} rel="noopener" target="_blank">{f.form} <span class="muted">{f.count}</span></a>
				{/each}
			</p>
		{/if}
	</div>
</div>

{#if p.claims.length}
	<h2>Claims</h2>
	<p class="muted">
		A claim is one proposition; under it stand the statements of each source, with the stance that source
		takes. Claims are grouped by a model from the extracted statements and carry that status until reviewed.
	</p>
	{#if chapterLevelClaims.length}
		<ol class="claims">
			{#each chapterLevelClaims as c (c.id)}{@render claim(c)}{/each}
		</ol>
	{/if}
{/if}

<h2>Sections</h2>
<p class="muted">
	<label><input type="checkbox" bind:checked={openSentences} /> show the first edition's sentence records</label>
	·
	<label><input type="checkbox" bind:checked={openStatements} /> show statements not yet grouped into claims</label>
</p>
{#if p.intro.length && openSentences}
	<section class="sec">
		<h3>Introduction</h3>
		{@render sentences(p.intro)}
	</section>
{/if}
{#each p.sections as s (s.id)}
	<section class="sec" id={s.sid} style:margin-left={`${Math.max(0, s.depth - 2) * 1.25}rem`}>
		<h3>
			{s.label}
			<span class="muted small">{#if s.claims.length}{s.claims.length} claims · {/if}{s.sentences.length} sentences{#if s.examples.length} · {s.examples.length} examples{/if}</span>
		</h3>
		{#if s.question}<p class="question-sec">{s.question.en}</p>{/if}
		{#if s.claims.length}
			<ol class="claims">
				{#each s.claims as clId (clId)}
					{@const c = claimOf(clId)}
					{#if c}{@render claim(c)}{/if}
				{/each}
			</ol>
		{/if}
		{#if openSentences}{@render sentences(s.sentences)}{/if}
		{#each s.examples as exId (exId)}
			{@const e = exampleOf(exId)}
			{#if e}
				<div class="ex">
					<div class="ain">{e.text}</div>
					<div class="gloss">{e.gloss}</div>
					<div>‘{e.translation}’</div>
					<div class="meta muted">
						{#each e.citations as ct, i (i)}<a class="chip" href={`/kb/sources/${ct.key}`}>{ct.key}{ct.pages ? `:${ct.pages}` : ''}</a>{/each}
						{#if e.constructed}<span class="chip status">constructed</span>{/if}
						{#if e.dialect_tag}<span class="chip status">{e.dialect_tag}</span>{/if}
						{#if e.place}<span>{e.place}</span>{/if}
					</div>
				</div>
			{/if}
		{/each}
		{#if openStatements && s.statements.length}
			<ol class="statements">
				{#each s.statements as stId (stId)}
					{@const st = statementOf(stId)}
					{#if st && !st.claim}{@render statement(st)}{/if}
				{/each}
			</ol>
		{/if}
	</section>
{/each}

{#if openStatements && chapterLevelStatements.length}
	<h2>Statements at chapter level, not yet grouped</h2>
	<ol class="statements">
		{#each chapterLevelStatements as st (st.id)}{@render statement(st)}{/each}
	</ol>
{/if}

<nav class="pager">
	{#if p.neighbours.prev}<a href={`/kb/topics/${p.neighbours.prev.slug}`}>← {p.neighbours.prev.title}</a>{/if}
	{#if p.neighbours.next}<a href={`/kb/topics/${p.neighbours.next.slug}`}>{p.neighbours.next.title} →</a>{/if}
</nav>

{#snippet claim(c: ClaimCard)}
	<li class="claim" id={c.id}>
		<div class="claim-en">{c.en}</div>
		{#if c.ja}<div class="muted" lang="ja">{c.ja}</div>{/if}
		<div class="meta">
			<span class="chip status">{c.type}</span>
			{#each c.scope.doculects ?? [] as d, i (i)}<span class="chip status">{d.replace(/^doculect:/, '')}</span>{/each}
			{#if c.scope.quantifier && c.scope.quantifier !== 'unstated'}<span class="chip status">{c.scope.quantifier}</span>{/if}
			{#each c.forms.slice(0, 6) as f, i (i)}<span class="chip">{f}</span>{/each}
		</div>
		<div class="support">
			{#each supportLine(c) as s (s.stance)}
				<span class="stance"><b>{s.stance}</b> {s.keys.join(', ')}</span>
			{/each}
		</div>
		<ul class="members">
			{#each c.members as m (m.id)}
				<li>
					<a class="chip" href={`/kb/sources/${m.key}#${encodeURIComponent(m.id)}`}>{m.key}{m.printed != null ? `:${m.printed}` : ''}</a>
					<span class="chip status">{m.stance}</span>
					{#if m.status}<span class="chip status">{m.status}</span>{/if}
				</li>
			{/each}
		</ul>
		{#if c.relations.length}
			<ul class="relations">
				{#each c.relations as r, i (i)}
					<li><b>{r.kind}</b>{#if r.differs_in} <span class="muted">(differs in {r.differs_in})</span>{/if}: <a href={`#${r.claim}`}>{r.en ?? r.claim}</a>{#if r.note} <span class="muted">— {r.note}</span>{/if}</li>
				{/each}
			</ul>
		{/if}
	</li>
{/snippet}

{#snippet sentences(list: typeof p.intro)}
	<ol class="sentences">
		{#each list as s (s.id)}
			<li>
				<span>{s.text}</span>
				{#each s.citations as ct, i (i)}
					<a class="chip" href={`/kb/sources/${ct.key}`}>{ct.key}{ct.pages ? `:${ct.pages}` : ''}</a>
				{/each}
				{#each s.grades as g, i (i)}<span class="chip grade">{g}</span>{/each}
				{#each s.xrefs as x, i (i)}<a class="chip status" href={`/kb/topics/${x}`}>→ {x}</a>{/each}
			</li>
		{/each}
	</ol>
{/snippet}

{#snippet statement(st: StatementCard)}
	<li class="statement" id={st.id}>
		<div>{st.en}</div>
		{#if st.ja}<div class="muted" lang="ja">{st.ja}</div>{/if}
		<div class="meta">
			<a class="chip" href={`/kb/sources/${st.key}#${encodeURIComponent(st.id)}`}>{st.key}{st.printed != null ? `:${st.printed}` : ''}</a>
			<span class="chip status">{st.type}</span>
			<span class="chip status">{st.stance}</span>
			<span class="chip status">{st.status}{st.match != null ? ` · anchor ${Math.round(st.match * 100)}%` : ''}</span>
			{#each st.scope.doculects ?? [] as d, i (i)}<span class="chip status">{d.replace(/^doculect:/, '')}</span>{/each}
			{#each st.forms.slice(0, 6) as f, i (i)}<span class="chip">{f}</span>{/each}
		</div>
	</li>
{/snippet}

<style>
	.question {
		font-family: var(--font-serif);
		font-size: var(--step-1);
		margin: 0 0 4px;
	}
	.question-ja {
		margin: 0 0 var(--space-3);
	}
	.question-sec {
		font-family: var(--font-serif);
		margin: 0 0 var(--space-2);
	}
	.columns {
		display: grid;
		grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
		gap: var(--space-6);
	}
	@media (max-width: 760px) {
		.columns {
			grid-template-columns: minmax(0, 1fr);
		}
	}
	.plain {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.plain li {
		padding: 3px 0;
		border-bottom: 1px solid var(--color-border);
	}
	.sec {
		margin: 0 0 var(--space-6);
	}
	.small {
		font-size: 0.8rem;
		font-weight: 400;
	}
	.sentences {
		margin: 0 0 var(--space-3);
		padding-left: 1.4rem;
		font-family: var(--font-serif);
		font-size: 0.95rem;
		line-height: 1.55;
	}
	.sentences li {
		margin: 0 0 4px;
	}
	.ex {
		margin: var(--space-3) 0;
		padding: var(--space-2) var(--space-3);
		background: var(--color-surface-subtle);
		border-left: 3px solid var(--color-border-strong);
		font-size: 0.95rem;
	}
	.gloss {
		font-family: var(--font-mono);
		font-size: 0.85rem;
		color: var(--color-muted);
	}
	.meta {
		margin-top: 4px;
		font-size: 0.85rem;
	}
	.statements,
	.claims {
		margin: 0 0 var(--space-4);
		padding-left: 1.4rem;
	}
	.statement,
	.claim {
		margin: 0 0 var(--space-3);
		padding: var(--space-2) 0;
		border-bottom: 1px solid var(--color-border);
	}
	.claim-en {
		font-size: 1.02rem;
	}
	.support {
		margin-top: 4px;
		font-size: 0.85rem;
		display: flex;
		flex-wrap: wrap;
		gap: 4px 14px;
	}
	.support b {
		font-weight: 600;
		color: var(--color-muted);
	}
	.members {
		list-style: none;
		margin: 4px 0 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 2px 10px;
		font-size: 0.85rem;
	}
	.relations {
		margin: 6px 0 0;
		padding-left: 1.2rem;
		font-size: 0.85rem;
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
