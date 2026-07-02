<script lang="ts">
	import ChapterShell from '$lib/grammar/components/ChapterShell.svelte';
	import { chapterNumber, appendices } from '$lib/grammar/toc';
	import { CANONICAL_HOSTNAME, BOOK_TITLE } from '$lib/consts';
	import { page } from '$app/stores';

	let { data } = $props();

	const ogTitle = $derived(`${data.num}. ${data.meta.title} — ${BOOK_TITLE}`);

	const canonicalUrl = $derived(new URL($page.url.pathname, CANONICAL_HOSTNAME).toString());
	const grammarUrl = new URL('/grammar', CANONICAL_HOSTNAME).toString();
	const jsonLd = $derived(
		'<' +
			'script type="application/ld+json">' +
			JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'TechArticle',
				headline: `${data.num}. ${data.meta.title}`,
				description: data.meta.summary,
				inLanguage: 'en',
				url: canonicalUrl,
				isPartOf: { '@type': 'Book', name: BOOK_TITLE, url: grammarUrl },
				breadcrumb: {
					'@type': 'BreadcrumbList',
					itemListElement: [
						{ '@type': 'ListItem', position: 1, name: BOOK_TITLE, item: grammarUrl },
						{
							'@type': 'ListItem',
							position: 2,
							name: `${data.num}. ${data.meta.title}`,
							item: canonicalUrl
						}
					]
				}
			}) +
			'</' +
			'script>'
	);
</script>

<svelte:head>
	<title>{ogTitle}</title>
	<meta name="description" content={data.meta.summary} />
	<meta property="og:title" content={ogTitle} />
	<meta property="og:description" content={data.meta.summary} />
	<meta property="og:type" content="article" />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- controlled JSON-LD built from chapter metadata -->
	{@html jsonLd}
</svelte:head>

{#key data.meta.slug}
	<ChapterShell
		num={data.num}
		title={data.meta.title}
		summary={data.meta.summary}
		component={data.component}
	/>
{/key}

<nav class="ch-nav" aria-label="Chapter navigation">
	<span>
		{#if data.prev}
			<a href={`/grammar/${data.prev.slug}`}
				>← {chapterNumber(data.prev.slug)}. {data.prev.short ?? data.prev.title}</a
			>
		{/if}
	</span>
	<span>
		{#if data.next}
			<a href={`/grammar/${data.next.slug}`}
				>{chapterNumber(data.next.slug)}. {data.next.short ?? data.next.title} →</a
			>
		{:else}
			<a href={`/grammar/${appendices[0].slug}`}>{appendices[0].title} →</a>
		{/if}
	</span>
</nav>
