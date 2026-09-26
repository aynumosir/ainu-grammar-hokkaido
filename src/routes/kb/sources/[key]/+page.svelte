<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
	const p = $derived(data.page);
	const s = $derived(p.source);
	const byTopic = $derived.by(() => {
		const m = new Map<string, typeof p.statements>();
		for (const st of p.statements) {
			const t = st.topics[0] ?? 'unrouted';
			const list = m.get(t) ?? [];
			list.push(st);
			m.set(t, list);
		}
		return m;
	});
	const topicTitle = (id: string) => p.statement_topics.find((t) => t.id === id);
	const claimsByTopic = $derived.by(() => {
		const m = new Map<string, typeof p.claims>();
		for (const c of p.claims) {
			const k = c.topic.slug ?? c.topic.title;
			const list = m.get(k) ?? [];
			list.push(c);
			m.set(k, list);
		}
		return m;
	});
</script>

<svelte:head>
	<title>{s.label} · Knowledge base</title>
	<meta name="description" content={`${s.author} (${s.year}). ${s.title}`} />
</svelte:head>

<p class="kicker"><a href="/kb">Knowledge base</a> · source</p>
<h1>{s.label}</h1>
<p>
	{s.author} ({s.year}). <span lang={String(s.lang ?? 'en')}>{s.title}</span>{#if s.title_tr}
		<span class="muted"> [{s.title_tr}]</span>{/if}{#if s.container}. {s.container}{/if}{#if s.pages}, {s.pages}{/if}{#if s.publisher}. {s.publisher}{/if}{#if s.place}, {s.place}{/if}.
</p>
<p>
	{#if s.db_slug}<a class="chip" href={`https://db.aynu.org/sources/${s.db_slug}`} rel="noopener" target="_blank">db.aynu.org/{s.db_slug}</a>{/if}
	{#if s.role}<span class="chip status">{s.role}</span>{/if}
	{#if s.region}<span class="chip status">{s.region}</span>{/if}
	{#if s.held_locally}<span class="chip status">text held locally</span>{/if}
	{#if p.asset}<span class="chip status">OCR {p.asset.engine}: {p.asset.leaves} leaves, {p.asset.mapped} with a printed page</span>{/if}
</p>

<div class="stats" aria-label="Counts">
	<div class="stat"><span class="v">{p.counts.cited_by}</span><span class="k">chapters citing</span></div>
	<div class="stat"><span class="v">{p.counts.citations}</span><span class="k">citing sentences</span></div>
	<div class="stat"><span class="v">{p.counts.examples}</span><span class="k">examples</span></div>
	<div class="stat"><span class="v">{p.counts.statements}</span><span class="k">statements extracted</span></div>
	<div class="stat"><span class="v">{p.counts.claims}</span><span class="k">claims with a stance</span></div>
</div>

{#if p.claims.length}
	<h2>Claims this source takes a position on</h2>
	<p class="muted">
		Grouped by topic. The stance is this source's; the other sources that assert, propose, doubt or reject the
		same claim are listed after it.
	</p>
	{#each [...claimsByTopic.entries()] as [slug, list] (slug)}
		<h3>
			{#if list[0].topic.slug}<a href={`/kb/topics/${list[0].topic.slug}`}>{list[0].topic.title}</a>{:else}{list[0].topic.title}{/if}
			<span class="muted small">{list.length}</span>
		</h3>
		<ol class="statements">
			{#each list as c (c.id)}
				<li class="statement">
					<div><a href={`/kb/topics/${c.topic.slug}#${c.id}`}>{c.en}</a></div>
					{#if c.ja}<div class="muted" lang="ja">{c.ja}</div>{/if}
					<div class="meta">
						{#each c.stances as stance (stance)}<span class="chip status">{stance}</span>{/each}
						{#each Object.entries(c.support) as [stance, keys] (stance)}
							{#if keys.some((k) => k !== s.key)}<span class="chip status">{stance}: {keys.filter((k) => k !== s.key).join(', ')}</span>{/if}
						{/each}
						{#if c.members > 1}<span class="chip status">{c.members} statements</span>{/if}
					</div>
				</li>
			{/each}
		</ol>
	{/each}
{/if}

{#if p.statements.length}
	<h2>Statements extracted from this source</h2>
	<p class="muted">
		Each statement is what the source commits to at one place, in normalised wording, with its type, stance
		and scope; the page number comes from the page footer of the OCR dump. Status tells how far a statement
		has been checked.
	</p>
	{#each [...byTopic.entries()] as [topicId, list] (topicId)}
		{@const t = topicTitle(topicId)}
		<h3>
			{#if t?.slug}<a href={`/kb/topics/${t.slug}${t.section ? `#${t.section}` : ''}`}>{t.title}</a>{:else}{topicId}{/if}
			<span class="muted small">{list.length}</span>
		</h3>
		<ol class="statements">
			{#each list as st (st.id)}
				<li class="statement" id={st.id}>
					<div>{st.en}</div>
					{#if st.ja}<div class="muted" lang="ja">{st.ja}</div>{/if}
					<div class="meta">
						<span class="chip">{st.printed != null ? `p. ${st.printed}` : `leaf ${st.leaf}`}</span>
						<span class="chip status">{st.type}</span>
						<span class="chip status">{st.stance}</span>
						<span class="chip status">{st.status}{st.match != null ? ` · anchor ${Math.round(st.match * 100)}%` : ''}</span>
						{#each st.scope.doculects ?? [] as d, i (i)}<span class="chip status">{d.replace(/^doculect:/, '')}</span>{/each}
						{#each st.forms.slice(0, 8) as f, i (i)}<span class="chip">{f}</span>{/each}
					</div>
				</li>
			{/each}
		</ol>
	{/each}
{/if}

<h2>Chapters citing this source</h2>
<div class="table-wrap">
	<table>
		<thead><tr><th>Chapter topic</th><th class="num">Citations</th></tr></thead>
		<tbody>
			{#each p.cited_by as c (c.slug)}
				<tr><td><a href={`/kb/topics/${c.slug}`}>{c.title}</a></td><td class="num">{c.count}</td></tr>
			{/each}
		</tbody>
	</table>
</div>

{#if p.examples.length}
	<h2>Examples cited from this source</h2>
	{#each p.examples as e (e.id)}
		<div class="ex">
			<div class="ain">{e.text}</div>
			<div class="gloss">{e.gloss}</div>
			<div>‘{e.translation}’</div>
			<div class="meta muted">
				{#each e.citations.filter((ct) => ct.key === p.source.key && ct.pages) as ct, i (i)}<span class="chip">p. {ct.pages}</span>{/each}
				{#each e.citations.filter((ct) => ct.key !== p.source.key) as ct, i (i)}<a class="chip" href={`/kb/sources/${ct.key}`}>{ct.key}{ct.pages ? `:${ct.pages}` : ''}</a>{/each}
				{#if e.dialect_tag}<span class="chip status">{e.dialect_tag}</span>{/if}
				{#if e.constructed}<span class="chip status">constructed</span>{/if}
				<a href={`/kb/topics/${e.id.replace(/^ex:book-v1\//, '').split('#')[0]}`}>{e.id.replace(/^ex:book-v1\//, '').split('#')[0]}</a>
			</div>
		</div>
	{/each}
{/if}

{#if p.citations.length}
	<h2>Sentences of the first edition citing this source</h2>
	<ol class="sentences">
		{#each p.citations as c (c.id)}
			<li>
				<span>{c.text}</span>
				<span class="chip">{c.pages.filter(Boolean).join('; ') || 'no page'}</span>
				<a class="chip status" href={`/kb/topics/${c.chapter}#${c.section}`}>{c.chapter_title}</a>
			</li>
		{/each}
	</ol>
{/if}

<style>
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
		margin: 0 0 6px;
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
	.statements {
		margin: 0 0 var(--space-4);
		padding-left: 1.4rem;
	}
	.statement {
		margin: 0 0 var(--space-3);
		padding: var(--space-2) 0;
		border-bottom: 1px solid var(--color-border);
	}
</style>
