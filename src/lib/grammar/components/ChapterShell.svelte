<script lang="ts">
	import { setContext, type Component } from 'svelte';
	import { SvelteSet } from 'svelte/reactivity';
	import { GRAMMAR_CTX, SECTION_CTX, type GrammarContext, type SectionContext } from '../context';
	import { bibliography } from '../bibliography';

	let {
		num,
		title,
		summary = '',
		component: C
	}: {
		num: number;
		title: string;
		/** One-paragraph abstract shown under the chapter title. */
		summary?: string;
		component: Component;
	} = $props();

	const cited = new SvelteSet<string>();
	setContext<GrammarContext>(GRAMMAR_CTX, { chapter: num, ex: { v: 0 }, cited });
	setContext<SectionContext>(SECTION_CTX, { path: [], counter: { v: 0 } });

	// Works cited in this chapter, in alphabetical order, for the chapter-final
	// reference list (the on-page counterpart of a print grammar's per-chapter
	// bibliography).
	const citedEntries = $derived(
		[...cited]
			.filter((k) => k in bibliography)
			.map((k) => [k, bibliography[k]] as const)
			.sort(([, a], [, b]) => {
				const cmp = a.citeAuthor.localeCompare(b.citeAuthor);
				return cmp !== 0 ? cmp : a.year.localeCompare(b.year);
			})
	);
</script>

<article class="grammar-chapter">
	<h1><span class="ch-num">Chapter {num}</span>{title}</h1>
	{#if summary}
		<p class="ch-abstract">{summary}</p>
	{/if}
	<C />

	{#if citedEntries.length}
		<section class="ch-refs" aria-label="References cited in this chapter">
			<h2 class="ch-refs-title">References cited in this chapter</h2>
			<p class="ch-refs-list">
				{#each citedEntries as [key, e], i (key)}<a href={`/grammar/references#${key}`}
						>{e.citeAuthor} ({e.year})</a
					>{#if i < citedEntries.length - 1}&nbsp;·
					{/if}{/each}
			</p>
		</section>
	{/if}
</article>

<style>
	.ch-abstract {
		font-size: 0.98rem;
		color: var(--color-muted);
		border-left: 3px solid var(--color-border);
		padding: 0.1em 1.1em;
		margin: -0.6rem 0 1.6rem;
	}

	.ch-refs {
		margin-top: 2.5rem;
		padding-top: 0.9rem;
		border-top: 1px solid var(--color-border);
	}

	.ch-refs-title {
		font-size: 0.85rem !important;
		font-variant-caps: all-small-caps;
		letter-spacing: 0.08em;
		color: var(--color-muted);
		margin: 0 0 0.3em !important;
	}

	.ch-refs-list {
		font-size: 0.88rem;
		color: var(--color-muted);
		line-height: 1.7;
	}

	.ch-refs-list a:hover {
		text-decoration: underline;
	}
</style>
