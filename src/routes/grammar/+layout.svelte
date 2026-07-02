<script lang="ts">
	import { page } from '$app/stores';
	import { parts, appendices, chapterNumber } from '$lib/grammar/toc';
	import SectionOutline from '$lib/grammar/components/SectionOutline.svelte';
	import GrammarSearch from '$lib/grammar/components/GrammarSearch.svelte';
	let { children } = $props();

	let current = $derived($page.url.pathname.replace(/^\/grammar\/?/, '').replace(/\/$/, ''));
	let isBackMatter = $derived(appendices.some((a) => a.slug === current));
</script>

<div class="grammar-root">
	<div class="g-shell">
		<aside class="g-sidebar" aria-label="Grammar navigation">
			<GrammarSearch />
			<SectionOutline />
			<nav class="g-toc" aria-label="Table of contents">
				<p class="g-toc-title">Contents</p>
				{#each parts as part}
					{@const isCurrentPart = part.chapters.some((c) => c.slug === current)}
					<details class="g-part-group" open={isCurrentPart}>
						<summary class="g-part">{part.title}</summary>
						<ul>
							{#each part.chapters as c}
								<li class:current={current === c.slug}>
									<a
										href={`/grammar/${c.slug}`}
										aria-current={current === c.slug ? 'page' : undefined}
									>
										<span class="g-chnum">{chapterNumber(c.slug)}</span>
										{c.short ?? c.title}
									</a>
								</li>
							{/each}
						</ul>
					</details>
				{/each}
				<details class="g-part-group" open={isBackMatter}>
					<summary class="g-part">Back matter</summary>
					<ul>
						{#each appendices as a}
							<li class:current={current === a.slug}>
								<a href={`/grammar/${a.slug}`} aria-current={current === a.slug ? 'page' : undefined}
									>{a.title}</a
								>
							</li>
						{/each}
					</ul>
				</details>
			</nav>
		</aside>

		<main class="g-main">
			{@render children()}
		</main>
	</div>
</div>

<style>
	.grammar-root {
		font-family: var(--font-serif);
		color: var(--color-fg);
		background: var(--color-canvas);
	}

	.g-shell {
		max-width: 82rem;
		margin: 0 auto;
		display: flex;
		gap: 2.5rem;
		padding: 1.5rem 1rem 3rem;
		width: 100%;
		flex: 1;
		align-items: flex-start;
	}

	.g-sidebar {
		width: 17rem;
		flex-shrink: 0;
		position: sticky;
		top: 1rem;
		max-height: calc(100vh - 2rem);
		overflow-y: auto;
		font-family: var(--font-sans);
		font-size: 0.85rem;
		line-height: 1.45;
		/* Calm, borderless navigation — separated from the article by the column
		   gap alone, so there are no hard surface edges. */
		padding-right: 1.5rem;
	}

	.g-toc-title {
		margin: 0 0 0.5rem;
		font-weight: 700;
		font-size: 0.95rem;
		color: var(--color-fg);
	}

	.g-part-group {
		border-top: 1px solid var(--color-border);
	}

	.g-part-group[open] {
		padding-bottom: 0.4rem;
	}

	.g-part {
		cursor: pointer;
		list-style: none;
		margin: 0.55rem 0 0.25rem;
		font-variant-caps: all-small-caps;
		letter-spacing: 0.06em;
		color: var(--color-muted);
	}

	.g-part::-webkit-details-marker {
		display: none;
	}

	.g-part::before {
		content: '▸';
		display: inline-block;
		width: 1em;
		margin-left: -0.1em;
		font-size: 0.7em;
		color: var(--color-faint);
		transition: transform 0.15s ease;
	}

	.g-part-group[open] > .g-part::before {
		transform: rotate(90deg);
	}

	.g-part:hover {
		color: var(--color-fg);
	}

	.g-toc ul {
		list-style: none;
		margin: 0 0 0.3rem;
		padding: 0;
	}

	.g-toc li {
		margin: 0.15rem 0;
		padding-left: 0.4rem;
		border-left: 2px solid transparent;
	}

	.g-toc li.current {
		border-left-color: var(--color-accent);
	}

	.g-toc li.current > a {
		color: var(--color-accent);
		font-weight: 600;
	}

	.g-toc a {
		color: var(--color-fg);
		text-decoration: none;
	}

	.g-toc a:hover {
		color: var(--color-accent);
		text-decoration: underline;
	}

	.g-chnum {
		display: inline-block;
		min-width: 1.3em;
		color: var(--color-faint);
		font-variant-numeric: tabular-nums;
	}

	.g-main {
		flex: 1;
		min-width: 0;
		max-width: 50rem;
		font-size: 1.05rem;
		line-height: 1.7;
	}

	/* The article reads directly on the page background — no framed card, so
	   there are no white card edges. Structure comes from typography and rhythm. */
	.g-main :global(.grammar-chapter),
	.g-main :global(.grammar-cover) {
		padding: 0;
	}

	@media (max-width: 50rem) {
		.g-shell {
			flex-direction: column;
			gap: 1rem;
		}

		.g-sidebar {
			width: 100%;
			position: static;
			max-height: none;
		}
	}

	/* ——— Book typography for chapter content ——— */

	.g-main :global(h1) {
		font-size: var(--step-4);
		line-height: 1.2;
		font-weight: 700;
		margin: 0 0 var(--space-6);
	}

	.g-main :global(h1 .ch-num) {
		display: block;
		font-size: 0.95rem;
		font-weight: 400;
		font-variant-caps: all-small-caps;
		letter-spacing: 0.12em;
		color: var(--color-accent);
		margin-bottom: 0.3rem;
	}

	.g-main :global(h2),
	.g-main :global(h3),
	.g-main :global(h4) {
		font-weight: 700;
		line-height: 1.3;
		margin: var(--space-8) 0 var(--space-3);
	}

	.g-main :global(h2) {
		font-size: var(--step-2);
	}

	.g-main :global(h3) {
		font-size: var(--step-1);
	}

	.g-main :global(h4) {
		font-size: var(--step-0);
		font-style: italic;
	}

	/* Standardized vertical rhythm: extra air between sibling sections. The
	   section's top margin collapses with its leading heading's margin, so this
	   sets the gap without compounding it. */
	.g-main :global(section + section) {
		margin-top: var(--space-12);
	}

	.g-main :global(.sec-num) {
		color: var(--color-accent);
		font-weight: 600;
		margin-right: 0.45em;
		font-variant-numeric: tabular-nums;
	}

	.g-main :global(p) {
		margin: 0 0 var(--space-4);
		text-align: justify;
		hyphens: auto;
	}

	.g-main :global(ul),
	.g-main :global(ol) {
		margin: 0 0 var(--space-4);
		padding-left: 1.6em;
	}

	.g-main :global(ul) {
		list-style: disc;
	}

	.g-main :global(ol) {
		list-style: decimal;
	}

	.g-main :global(li) {
		margin: 0.25em 0;
	}

	.g-main :global(i[lang^='ain']),
	.g-main :global(.ain) {
		font-style: italic;
	}

	.g-main :global(a) {
		text-decoration: none;
		color: inherit;
	}

	/* Scholarly link affordance: accent colour with a thin, low-offset underline
	   that reads as a reference apparatus rather than a stripped-down link. The
	   decoration strengthens on hover/focus. */
	.g-main :global(p a),
	.g-main :global(li a),
	.g-main :global(td a),
	.g-main :global(a.ref),
	.g-main :global(a.xr) {
		color: var(--color-accent);
		text-decoration-line: underline;
		text-decoration-thickness: 0.06em;
		text-underline-offset: 0.18em;
		text-decoration-color: color-mix(in srgb, var(--color-accent) 45%, transparent);
	}

	.g-main :global(p a:hover),
	.g-main :global(li a:hover),
	.g-main :global(td a:hover),
	.g-main :global(a.ref:hover),
	.g-main :global(a.xr:hover),
	.g-main :global(p a:focus-visible),
	.g-main :global(li a:focus-visible),
	.g-main :global(td a:focus-visible),
	.g-main :global(a.ref:focus-visible),
	.g-main :global(a.xr:focus-visible) {
		text-decoration-thickness: 0.12em;
		text-decoration-color: var(--color-accent);
	}

	.g-main :global(blockquote) {
		margin: 1em 0;
		padding: 0.1em 1.2em;
		border-left: 3px solid var(--color-border);
		color: var(--color-fg);
		font-size: 0.98rem;
	}

	/* Tables behave as their own scroll region on narrow viewports (display:block
	   + overflow-x; the inner anonymous table still aligns the columns). Row
	   hairlines only — no vertical rules — with a subtle header band and zebra. */
	.g-main :global(table) {
		display: block;
		width: 100%;
		overflow-x: auto;
		border-collapse: collapse;
		margin: var(--space-6) 0;
		font-size: 0.9375rem;
	}

	.g-main :global(caption) {
		caption-side: top;
		text-align: left;
		font-style: italic;
		margin-bottom: 0.4em;
		color: var(--color-muted);
	}

	.g-main :global(th),
	.g-main :global(td) {
		border-bottom: 1px solid var(--color-border);
		padding: 0.4em 0.85em;
		text-align: left;
		vertical-align: top;
	}

	.g-main :global(thead) {
		background: var(--color-surface-subtle);
	}

	.g-main :global(th) {
		font-family: var(--font-sans);
		font-weight: 600;
	}

	.g-main :global(thead th) {
		border-bottom: 1px solid var(--color-border-strong);
	}

	.g-main :global(tbody tr:nth-child(even)) {
		background: color-mix(in srgb, var(--color-surface) 70%, var(--color-canvas));
	}

	/* ——— Interlinear examples ——— */

	/* Scholarly example block: framed against the surrounding prose with a subtle
	   fill and an accent rule, and made its own horizontal scroll region so wide
	   interlinear rows never blow out the reading column. */
	.g-main :global(.ex) {
		display: flex;
		gap: 0.8em;
		background: var(--color-surface-subtle);
		border-left: 3px solid var(--color-accent);
		padding: 0.875rem 1rem;
		margin: var(--space-6) 0;
		overflow-x: auto;
	}

	.g-main :global(.ex-num) {
		flex-shrink: 0;
		min-width: 2.2em;
		color: var(--color-muted);
		font-variant-numeric: tabular-nums;
	}

	.g-main :global(.ex-body) {
		min-width: 0;
	}

	.g-main :global(.ex-orig) {
		margin: 0 0 0.2em;
		color: var(--color-fg);
	}

	.g-main :global(.ex-surface) {
		margin: 0 0 0.2em;
		font-style: italic;
		color: var(--color-fg);
	}

	.g-main :global(.ex-il) {
		display: flex;
		flex-wrap: wrap;
		column-gap: 1.1em;
		row-gap: 0.5em;
		margin-bottom: 0.25em;
		min-width: max-content;
	}

	.g-main :global(.ex-w) {
		display: flex;
		flex-direction: column;
	}

	/* Mono genuinely helps the morpheme↔gloss columns line up. */
	.g-main :global(.ex-m) {
		font-family: var(--font-mono);
		font-style: italic;
	}

	.g-main :global(.ex-m a:hover) {
		text-decoration: underline dotted;
	}

	.g-main :global(.ex-g) {
		font-family: var(--font-mono);
		font-size: 0.84em;
		color: var(--color-muted);
	}

	.g-main :global(.ex-g abbr) {
		font-variant-caps: all-small-caps;
		letter-spacing: 0.03em;
		text-decoration: none;
		cursor: help;
	}

	.g-main :global(.ex-tr) {
		margin: 0.15em 0 0;
	}

	.g-main :global(.ex-lit) {
		color: var(--color-muted);
	}

	.g-main :global(.ex-src) {
		margin: 0.1em 0 0;
		font-size: 0.85em;
		color: var(--color-muted);
	}

	.g-main :global(.ex-src a:hover) {
		text-decoration: underline;
	}

	.g-main :global(.ex-constructed) {
		font-style: italic;
	}

	.g-main :global(.ex-note) {
		margin: 0.5em 0 0;
		padding-top: 0.45em;
		border-top: 1px solid var(--color-border);
		font-size: 0.9em;
		color: var(--color-muted);
	}

	/* Chapter navigation footer */
	.g-main :global(.ch-nav) {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		margin-top: 3rem;
		padding-top: 1rem;
		border-top: 1px solid var(--color-border);
		font-family: var(--font-sans);
		font-size: 0.92rem;
	}

	.g-main :global(.ch-nav a) {
		color: var(--color-accent);
	}

	.g-main :global(.ch-nav a:hover) {
		text-decoration: underline;
	}

	/* Placeholder note for chapters still in preparation */
	.g-main :global(.ch-stub) {
		color: var(--color-faint);
		font-size: 0.95rem;
	}
</style>
