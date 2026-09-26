<script lang="ts">
	import type { PageData } from './$types';
	import type { DisagreementRow } from '$lib/kb/types';
	let { data }: { data: PageData } = $props();
	const d = $derived(data.disagreements);
	const groups = $derived.by(() => {
		const m = new Map<string, DisagreementRow[]>();
		for (const r of d.rows) {
			const k = r.topic.slug ?? r.topic.title;
			const list = m.get(k) ?? [];
			list.push(r);
			m.set(k, list);
		}
		return [...m.values()];
	});
	const supportText = (s: Record<string, string[]>) =>
		Object.entries(s)
			.map(([stance, keys]) => `${keys.join(', ')} ${stance}`)
			.join(' · ');
</script>

<svelte:head>
	<title>Disagreements · Knowledge base · A Grammar of Hokkaido Ainu</title>
	<meta name="description" content="Claims about Hokkaido Ainu grammar that the sources make incompatibly or analyse differently, with the dimension in which they differ." />
</svelte:head>

<p class="kicker"><a href="/kb">Knowledge base</a></p>
<h1>Where the sources disagree</h1>
<p>
	Pairs of claims that stand against each other: two claims are marked <b>contradicts</b> when the sources
	commit to incompatible propositions over the same scope, and <b>contrasts</b> when they analyse the same
	matter in different terms or for different dialects, periods or registers. Each pair names the
	dimension in which the claims differ and the sources behind each side.
</p>

<div class="stats" aria-label="Totals">
	<div class="stat"><span class="v">{d.count}</span><span class="k">pairs</span></div>
	<div class="stat"><span class="v">{groups.length}</span><span class="k">chapter topics</span></div>
</div>

{#if !d.count}
	<p class="muted">No pairs yet: claims are grouped from the extracted statements, and no grouping has run over this build.</p>
{/if}

{#each groups as g (g[0].topic.slug ?? g[0].topic.title)}
	<h2>{#if g[0].topic.slug}<a href={`/kb/topics/${g[0].topic.slug}`}>{g[0].topic.title}</a>{:else}{g[0].topic.title}{/if}</h2>
	{#each g as r, i (i)}
		<div class="pair">
			<div class="head">
				<span class="chip status">{r.kind}</span>
				{#if r.differs_in}<span class="chip">differs in {r.differs_in}</span>{/if}
			</div>
			<div class="sides">
				{#each [r.a, r.b] as side (side.id)}
					<div class="side">
						<a href={`/kb/topics/${r.topic.slug ?? ''}#${side.id}`}>{side.en}</a>
						<div class="ja" lang="ja">{side.ja}</div>
						<div class="muted small">{supportText(side.support)}</div>
					</div>
				{/each}
			</div>
			{#if r.note}<p class="muted small note">{r.note}</p>{/if}
		</div>
	{/each}
{/each}

<style>
	.pair {
		padding: var(--space-3) 0;
		border-bottom: 1px solid var(--color-border);
	}
	.head {
		display: flex;
		gap: 6px;
		flex-wrap: wrap;
		margin-bottom: 6px;
	}
	.sides {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
		gap: var(--space-3);
	}
	.side {
		padding: 8px 10px;
		border-left: 3px solid var(--color-border);
	}
	.ja {
		font-size: 0.9rem;
		margin-top: 2px;
	}
	.small {
		font-size: 0.8rem;
	}
	.note {
		margin: 6px 0 0;
	}
</style>
