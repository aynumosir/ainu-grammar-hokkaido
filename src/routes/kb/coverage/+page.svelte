<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
	const cov = $derived(data.coverage);
	const pct = (a: number, b: number) => (b ? Math.round((100 * a) / b) : 0);
</script>

<svelte:head>
	<title>Coverage · Knowledge base · A Grammar of Hokkaido Ainu</title>
	<meta name="description" content="Which section topics of the grammar the extracted sources speak to, and which remain gaps." />
</svelte:head>

<p class="kicker"><a href="/kb">Knowledge base</a></p>
<h1>Where the sources have been read</h1>
<p>
	Every section topic of the grammar, with the number of statements the extracted sources make about it.
	A section without statements is a gap: the sources read so far say nothing about it, or the sources that
	do have not been extracted yet. Statements that fit a chapter but none of its sections count at chapter
	level.
</p>

<div class="stats" aria-label="Totals">
	<div class="stat"><span class="v">{cov.totals.covered}<span class="of">/{cov.totals.sections}</span></span><span class="k">section topics with statements</span></div>
	<div class="stat"><span class="v">{cov.totals.chapters_covered}<span class="of">/{cov.totals.chapters}</span></span><span class="k">chapter topics with statements</span></div>
</div>

{#each cov.parts as part (part.id)}
	<h2>{part.label}</h2>
	<div class="table-wrap">
		<table>
			<thead>
				<tr>
					<th class="num">No.</th>
					<th>Chapter topic</th>
					<th>Sections with statements</th>
					<th class="num">Statements</th>
					<th class="num">Claims</th>
					<th>Sources read</th>
				</tr>
			</thead>
			<tbody>
				{#each part.chapters as ch (ch.slug)}
					{@const gaps = ch.sections.filter((s) => s.statements === 0)}
					<tr>
						<td class="num">{ch.num}</td>
						<td>
							<a href={`/kb/topics/${ch.slug}`}>{ch.title}</a>
							{#if gaps.length}
								<details class="gaps">
									<summary class="muted">{gaps.length} of {ch.sections.length} sections without statements</summary>
									<ul>
										{#each gaps as s (s.id)}
											<li><a href={`/kb/topics/${ch.slug}#${s.sid}`}>{s.label}</a> <span class="muted">· {s.sentences} first-edition sentences</span></li>
										{/each}
									</ul>
								</details>
							{/if}
						</td>
						<td class="cov">
							<div class="bar" role="img" aria-label={`${ch.covered} of ${ch.sections.length} sections`}><span style={`width:${pct(ch.covered, ch.sections.length)}%`}></span></div>
							<span class="muted small">{ch.covered}/{ch.sections.length}{#if ch.chapter_level}{' · '}{ch.chapter_level} at chapter level{/if}</span>
						</td>
						<td class="num">{ch.statements}</td>
						<td class="num">{ch.claims}</td>
						<td class="srcs">{#each ch.sources as k (k)}<a class="chip" href={`/kb/sources/${k}`}>{k}</a>{/each}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/each}

<style>
	.of {
		font-size: 0.6em;
		color: var(--color-muted);
		font-weight: 400;
	}
	.cov {
		min-width: 9rem;
	}
	.bar {
		height: 6px;
		border-radius: 3px;
		background: var(--color-surface-subtle);
		border: 1px solid var(--color-border);
		overflow: hidden;
		margin: 4px 0 2px;
	}
	.bar span {
		display: block;
		height: 100%;
		background: var(--color-accent);
	}
	.small {
		font-size: 0.8rem;
	}
	.srcs {
		display: flex;
		flex-wrap: wrap;
		gap: 2px 4px;
		max-width: 18rem;
	}
	.gaps {
		margin-top: 4px;
		font-size: 0.85rem;
	}
	.gaps summary {
		cursor: pointer;
	}
	.gaps ul {
		margin: 4px 0 0;
		padding-left: 1.2rem;
	}
</style>
