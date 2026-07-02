<script lang="ts">
	import { bibliography, type BibEntry } from '$lib/grammar/bibliography';
	import { BOOK_TITLE } from '$lib/consts';

	const REGIONS: { id: BibEntry['region']; title: string; blurb: string }[] = [
		{
			id: 'hokkaido',
			title: 'Hokkaidō Ainu',
			blurb: 'Primary sources and studies of the variety this grammar describes.'
		},
		{
			id: 'sakhalin',
			title: 'Sakhalin Ainu',
			blurb: 'Works on Sakhalin varieties, cited for contrast.'
		},
		{ id: 'kuril', title: 'Kuril Ainu', blurb: 'Works on the extinct Kuril varieties.' },
		{
			id: 'general',
			title: 'Pan-Ainu, comparative and methodological works',
			blurb: 'Dialectology, reconstruction, typology, and conventions.'
		}
	];

	const byRegion = REGIONS.map((r) => ({
		...r,
		entries: Object.entries(bibliography)
			.filter(([, e]) => e.region === r.id)
			.sort(([, a], [, b]) => {
				const cmp = a.author.localeCompare(b.author);
				return cmp !== 0 ? cmp : a.year.localeCompare(b.year);
			})
	})).filter((r) => r.entries.length > 0);
</script>

<svelte:head>
	<title>References — {BOOK_TITLE}</title>
	<meta name="description" content="Works cited in the grammar of Hokkaido Ainu." />
</svelte:head>

<article class="grammar-chapter">
	<h1><span class="ch-num">Back matter</span>References</h1>

	<p class="bib-note">
		Entries marked <span class="reported-badge">reported</span> are cited second-hand, through the source
		named in the citation, and were not consulted directly.
	</p>

	{#each byRegion as group (group.id)}
		<h2>{group.title}</h2>
		<p class="bib-blurb">{group.blurb}</p>
		<ul class="bib">
			{#each group.entries as [key, e] (key)}
				<li id={key}>
					{e.author}. {e.year}.
					{#if e.url}
						<cite lang={e.lang ?? 'en'}><a href={e.url}>{e.title}</a></cite>{:else}<cite
							lang={e.lang ?? 'en'}>{e.title}</cite
						>{/if}{#if e.titleTr}
						[{e.titleTr}]{/if}.
					{#if e.container}
						{#if e.editor}In {e.editor} (ed.),{/if}
						<i>{e.container}</i>{#if e.pages}&nbsp;{e.pages}{/if}.
					{:else if e.pages}{e.pages}.
					{/if}
					{#if e.place || e.publisher}
						{[e.place, e.publisher].filter(Boolean).join(': ')}.
					{/if}
					{#if e.note}{e.note}.{/if}
					{#if e.reported}<span class="reported-badge">reported</span>{/if}
				</li>
			{/each}
		</ul>
	{/each}

	<nav class="ch-nav" aria-label="Chapter navigation">
		<span><a href="/grammar/abbreviations">← Abbreviations and conventions</a></span>
		<span><a href="/grammar">Contents →</a></span>
	</nav>
</article>

<style>
	.bib {
		list-style: none;
		padding: 0;
	}

	.bib li {
		margin: 0 0 0.7em;
		padding-left: 2em;
		text-indent: -2em;
	}

	cite {
		font-style: italic;
	}

	.bib-note {
		font-size: 0.92rem;
		color: var(--color-muted);
	}

	.bib-blurb {
		margin-top: -0.4em;
		font-size: 0.92rem;
		color: var(--color-muted);
	}

	.reported-badge {
		display: inline-block;
		text-indent: 0;
		font-size: 0.72em;
		font-variant-caps: all-small-caps;
		letter-spacing: 0.06em;
		border: 1px solid var(--color-border-strong);
		padding: 0 0.5em;
		color: var(--color-muted);
		vertical-align: 0.1em;
	}
</style>
