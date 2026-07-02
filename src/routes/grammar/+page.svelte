<script lang="ts">
	import { parts, appendices, chapterNumber } from '$lib/grammar/toc';
	import { CANONICAL_HOSTNAME, BOOK_TITLE } from '$lib/consts';

	const bookJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Book',
		name: BOOK_TITLE,
		url: new URL('/grammar', CANONICAL_HOSTNAME).toString(),
		description:
			'A comprehensive reference grammar of Hokkaido Ainu with corpus-attested interlinear examples.',
		inLanguage: 'en',
		genre: 'Reference grammar',
		about: { '@type': 'Language', name: 'Hokkaido Ainu', alternateName: 'Ainu' }
	};
	const bookJsonLdScript =
		'<' + 'script type="application/ld+json">' + JSON.stringify(bookJsonLd) + '</' + 'script>';
</script>

<svelte:head>
	<title>{BOOK_TITLE}</title>
	<meta
		name="description"
		content="A comprehensive reference grammar of Hokkaido Ainu: phonology, morphology, and syntax, with attested, glossed examples linked to a dictionary and corpus."
	/>
	<meta property="og:title" content={BOOK_TITLE} />
	<meta
		property="og:description"
		content="A reference grammar of Hokkaido Ainu with corpus-attested interlinear examples."
	/>
	<meta property="og:url" content={new URL('/grammar', CANONICAL_HOSTNAME).toString()} />
	<meta property="og:type" content="website" />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- controlled JSON-LD built from constants, never user input -->
	{@html bookJsonLdScript}
</svelte:head>

<article class="grammar-cover">
	<header class="cover-head">
		<p class="cover-kicker">A reference grammar</p>
		<h1>{BOOK_TITLE}</h1>
		<p class="cover-sub">
			A comprehensive, corpus-based reference grammar of Hokkaido Ainu (<i lang="ain">Aynu itak</i>)
			— with interlinear examples drawn from attested texts, glossed morpheme by morpheme and tagged
			for dialect and source.
		</p>
	</header>

	<section class="preface">
		<h2>About this grammar</h2>
		<p>
			This is a reference grammar of Hokkaido Ainu, organised to be consulted rather than read
			straight through. It is built on the descriptive tradition of Kindaichi and Chiri, Tamura,
			Refsing, Satō, Bugaeva, and Nakagawa, and aims to integrate corpus-quantified description,
			typological scoring, and per-chapter diachrony in a single systematic account of the language
			from phonetics to discourse.
		</p>
		<p>
			Every numbered example is glossed morpheme by morpheme following the Leipzig Glossing Rules and
			carries a citation of its source and a dialect tag. The chapters below are placeholders while
			the grammar is being authored; the structure, numbering, and reference apparatus are in place.
		</p>
	</section>

	<section class="toc">
		<h2>Contents</h2>
		{#each parts as part}
			<h3 class="toc-part">{part.title}</h3>
			<ul class="toc-list">
				{#each part.chapters as c}
					<li>
						<a class="toc-row" href={`/grammar/${c.slug}`}>
							<span class="toc-num">{chapterNumber(c.slug)}</span>
							<span class="toc-text">
								<span class="toc-title">{c.title}</span>
								<span class="toc-summary">{c.summary}</span>
							</span>
						</a>
					</li>
				{/each}
			</ul>
		{/each}
		<h3 class="toc-part">Back matter</h3>
		<ul class="toc-list">
			{#each appendices as a}
				<li>
					<a class="toc-row" href={`/grammar/${a.slug}`}>
						<span class="toc-num" aria-hidden="true"></span>
						<span class="toc-text">
							<span class="toc-title">{a.title}</span>
						</span>
					</a>
				</li>
			{/each}
		</ul>
	</section>

	<section class="howto">
		<h2>How to cite</h2>
		<p>
			<cite>{BOOK_TITLE}</cite>. 2026. Online:
			<a href="https://grammar.aynu.org/grammar">https://grammar.aynu.org/grammar</a> (accessed [date]).
		</p>
	</section>
</article>

<style>
	.cover-head {
		margin: 1rem 0 2.5rem;
	}

	.cover-kicker {
		font-variant-caps: all-small-caps;
		letter-spacing: 0.14em;
		color: var(--color-accent);
		margin-bottom: 0.4rem;
	}

	.grammar-cover h1 {
		font-size: 2.3rem;
		line-height: 1.15;
		font-weight: 700;
		margin: 0 0 0.8rem;
	}

	.cover-sub {
		font-size: 1.1rem;
		color: var(--color-muted);
	}

	.toc-part {
		margin: 1.4em 0 0.4em;
		font-variant-caps: all-small-caps;
		letter-spacing: 0.08em;
		font-size: 1.05rem;
		color: var(--color-muted);
	}

	/* Contents as ruled rows (not cards): a faint Mono chapter number, a Sans
	   title, and a muted summary, separated by hairlines. */
	.toc-list {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.toc-list > li {
		border-top: 1px solid var(--color-border);
	}

	.toc-row {
		display: grid;
		grid-template-columns: 2.5rem 1fr;
		gap: 0 1rem;
		padding-block: 0.75rem;
		text-decoration: none;
		color: var(--color-fg);
	}

	.toc-num {
		font-family: var(--font-mono);
		font-size: 0.9rem;
		font-variant-numeric: tabular-nums;
		color: var(--color-faint);
		padding-top: 0.1em;
	}

	.toc-text {
		min-width: 0;
	}

	.toc-title {
		display: block;
		font-family: var(--font-sans);
		font-weight: 600;
		color: var(--color-fg);
	}

	.toc-summary {
		display: block;
		margin-top: 0.15em;
		font-size: 0.9rem;
		color: var(--color-muted);
	}

	.toc-row:hover .toc-title {
		color: var(--color-accent);
		text-decoration: underline;
	}
</style>
