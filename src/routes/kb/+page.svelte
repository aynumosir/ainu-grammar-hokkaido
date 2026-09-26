<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
	const idx = $derived(data.index);
	const topSources = $derived(idx.sources.filter((s) => s.citations > 0).slice(0, 40));
	const anchorOf = (id: string) => id.split('/').pop() ?? id;
</script>

<svelte:head>
	<title>Knowledge base · A Grammar of Hokkaido Ainu</title>
	<meta
		name="description"
		content="The grammar of Hokkaido Ainu as a network of topics, sources, examples and statements, explorable as a graph." />
</svelte:head>

<p class="kicker">Knowledge base</p>
<h1>Hokkaido Ainu grammar as a network</h1>
<p>
	What the sources say about Hokkaido Ainu grammar, as records with identifiers: topics (the questions a
	grammar answers), sources, interlinear examples, and statements extracted from the sources at the page
	where they are made. The first edition of the book is loaded as an inventory of sentence records
	attached to its chapters and sections; it is a work queue and a coverage measure, never evidence.
</p>
<p class="views">
	<a href="/kb/graph">Open the network view</a>
	<a href="/kb/coverage">Coverage of the section topics</a>
	<a href="/kb/disagreements">Where the sources disagree</a>
	<a href={`/kb/read/${idx.parts[0]?.chapters[0]?.slug ?? ''}`}>Start the reading path</a>
</p>

<div class="stats" aria-label="Counts">
	<div class="stat"><span class="v">{idx.counts.chapters}</span><span class="k">chapter topics</span></div>
	<div class="stat"><span class="v">{idx.counts.sections}</span><span class="k">section topics</span></div>
	<div class="stat"><span class="v">{idx.counts.sources}</span><span class="k">sources</span></div>
	<div class="stat"><span class="v">{idx.counts.examples}</span><span class="k">examples</span></div>
	<div class="stat"><span class="v">{idx.counts.sentences}</span><span class="k">first-edition sentences</span></div>
	<div class="stat"><span class="v">{idx.counts.statements}</span><span class="k">source statements</span></div>
	<div class="stat"><span class="v">{idx.counts.claims}</span><span class="k">claims</span></div>
</div>

<h2>Topics by part</h2>
{#each idx.parts as part (part.id)}
	<h3 id={anchorOf(part.id)}>{part.label}</h3>
	<div class="table-wrap">
		<table>
			<thead>
				<tr>
					<th class="num">No.</th>
					<th>Chapter topic</th>
					<th class="num">Sections</th>
					<th class="num">Sentences</th>
					<th class="num">Examples</th>
					<th class="num">Sources</th>
					<th class="num">Statements</th>
					<th class="num">Claims</th>
				</tr>
			</thead>
			<tbody>
				{#each part.chapters as ch (ch.slug)}
					<tr>
						<td class="num">{ch.num}</td>
						<td><a href={`/kb/topics/${ch.slug}`}>{ch.title}</a>{#if ch.question}<div class="muted q">{ch.question.en}</div>{/if}</td>
						<td class="num">{ch.sections}</td>
						<td class="num">{ch.sentences}</td>
						<td class="num">{ch.examples}</td>
						<td class="num">{ch.sources}</td>
						<td class="num">{ch.statements}</td>
						<td class="num">{ch.claims}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/each}

<h2>Sources most cited</h2>
<div class="table-wrap">
	<table>
		<thead>
			<tr>
				<th>Source</th>
				<th>Title</th>
				<th class="num">Chapters</th>
				<th class="num">Citations</th>
				<th class="num">Statements</th>
				<th class="num">Claims</th>
			</tr>
		</thead>
		<tbody>
			{#each topSources as s (s.key)}
				<tr>
					<td><a href={`/kb/sources/${s.key}`}>{s.label}</a></td>
					<td lang={s.lang}>{s.title}</td>
					<td class="num">{s.cited_by}</td>
					<td class="num">{s.citations}</td>
					<td class="num">{s.statements}</td>
					<td class="num">{s.claims}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<p class="muted">
	Build of {idx.generated}{#if idx.book_revision}, first edition at revision {idx.book_revision.slice(0, 10)}{/if}.
	Records live in <code>kb/</code>; the design is described in <code>docs/knowledge-base/PLAN.md</code>.
</p>

<style>
	.views {
		display: flex;
		flex-wrap: wrap;
		gap: 4px 16px;
	}
</style>
