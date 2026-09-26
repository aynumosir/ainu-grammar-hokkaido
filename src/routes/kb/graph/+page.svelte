<script lang="ts">
	import Graph from '$lib/kb/Graph.svelte';
	import Legend from '$lib/kb/Legend.svelte';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();

	let hidden = $state<string[]>([]);
	let hiddenRels = $state<string[]>([]);
	let query = $state('');
	let part = $state(0);
	let labels = $state<'auto' | 'all' | 'none'>('auto');
	let height = $state(640);

	const counts = $derived.by(() => {
		const c: Record<string, number> = {};
		for (const n of data.graph.nodes) c[n.kind] = (c[n.kind] ?? 0) + 1;
		return c;
	});
	const relCounts = $derived.by(() => {
		const c: Record<string, number> = {};
		for (const l of data.graph.links) c[l.rel] = (c[l.rel] ?? 0) + 1;
		return c;
	});
	const REL: Record<string, string> = { in: 'chapter in part', cites: 'chapter cites source', xref: 'cross-reference' };
	function toggleRel(rel: string) {
		hiddenRels = hiddenRels.includes(rel) ? hiddenRels.filter((r) => r !== rel) : [...hiddenRels, rel];
	}
	$effect(() => {
		const update = () => {
			height = Math.max(420, window.innerHeight - 200);
		};
		update();
		window.addEventListener('resize', update);
		return () => window.removeEventListener('resize', update);
	});
</script>

<svelte:head>
	<title>Network view · Knowledge base</title>
	<meta name="description" content="Parts, chapter topics and sources of the Hokkaido Ainu grammar as a force-directed network." />
</svelte:head>

<p class="kicker"><a href="/kb">Knowledge base</a> · network view</p>
<h1>Topics, sources and their links</h1>
<p>
	Chapter topics sit inside their parts; a chapter is linked to every source it cites (line width follows
	the count) and to the chapters it cross-references. Click a topic or a source to open its page; hover
	for counts. Statements extracted from the sources appear on the topic pages, each with its own local
	network.
</p>

<div class="layout">
	<aside class="panel">
		<label class="field">
			<span class="k">Find</span>
			<input type="search" bind:value={query} placeholder="topic or source" autocomplete="off" />
		</label>
		<label class="field">
			<span class="k">Part</span>
			<select bind:value={part}>
				<option value={0}>All parts</option>
				{#each data.index.parts as p (p.id)}
					<option value={p.order}>{p.label.replace(/^Part [IVXL]+ — /, '')}</option>
				{/each}
			</select>
		</label>
		<label class="field">
			<span class="k">Labels</span>
			<select bind:value={labels}>
				<option value="auto">Parts and large nodes</option>
				<option value="all">All</option>
				<option value="none">None</option>
			</select>
		</label>
		<p class="k">Kinds</p>
		<Legend {counts} bind:hidden />
		<p class="k">Links</p>
		<ul class="rels">
			{#each Object.keys(relCounts) as rel (rel)}
				<li>
					<label>
						<input type="checkbox" checked={!hiddenRels.includes(rel)} onchange={() => toggleRel(rel)} />
						{REL[rel] ?? rel} <span class="muted">{relCounts[rel]}</span>
					</label>
				</li>
			{/each}
		</ul>
	</aside>
	<div class="canvas">
		<Graph data={data.graph} {height} hiddenKinds={hidden} {hiddenRels} {query} {part} {labels} />
	</div>
</div>

<style>
	.layout {
		display: grid;
		grid-template-columns: 15rem minmax(0, 1fr);
		gap: var(--space-4);
		align-items: start;
	}
	.panel {
		position: sticky;
		top: var(--space-4);
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		padding: var(--space-3);
		border: 1px solid var(--color-border);
		background: var(--color-surface);
	}
	.field {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	.k {
		font-size: 0.75rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--color-muted);
		margin: var(--space-2) 0 0;
	}
	input[type='search'],
	select {
		font: inherit;
		font-size: 0.875rem;
		padding: 4px 6px;
		border: 1px solid var(--color-border-strong);
		background: var(--color-canvas);
		color: var(--color-fg);
	}
	input[type='search']:focus-visible,
	select:focus-visible {
		outline: 2px solid var(--color-accent);
		outline-offset: 1px;
	}
	.rels {
		list-style: none;
		margin: 0;
		padding: 0;
		font-size: 0.875rem;
	}
	.rels label {
		display: flex;
		gap: 6px;
		align-items: center;
		padding: 2px 0;
	}
	.canvas {
		min-width: 0;
	}
	@media (max-width: 760px) {
		.layout {
			grid-template-columns: minmax(0, 1fr);
		}
		.panel {
			position: static;
		}
	}
</style>
