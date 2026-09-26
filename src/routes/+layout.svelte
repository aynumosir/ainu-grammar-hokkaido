<script lang="ts">
	import { page } from '$app/stores';
	import { CANONICAL_HOSTNAME, BOOK_TITLE } from '$lib/consts';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import SiteNotice from '$lib/components/SiteNotice.svelte';

	// Self-hosted IBM Plex superfamily — no network/external fetch at build or run.
	// Serif = prose body; Sans = UI/headings/nav; Mono = interlinear example lines.
	import '@fontsource/ibm-plex-serif/400.css';
	import '@fontsource/ibm-plex-serif/400-italic.css';
	import '@fontsource/ibm-plex-serif/600.css';
	import '@fontsource/ibm-plex-serif/700.css';
	import '@fontsource/ibm-plex-sans/400.css';
	import '@fontsource/ibm-plex-sans/500.css';
	import '@fontsource/ibm-plex-sans/600.css';
	import '@fontsource/ibm-plex-sans/700.css';
	import '@fontsource/ibm-plex-mono/400.css';
	import '@fontsource/ibm-plex-mono/400-italic.css';
	import '@fontsource/ibm-plex-mono/500.css';

	import '../app.css';
	let { children } = $props();

	// Self-referencing canonical for the current page.
	const canonicalUrl = $derived(new URL($page.url.pathname, CANONICAL_HOSTNAME).toString());

	const websiteJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: BOOK_TITLE,
		url: CANONICAL_HOSTNAME,
		description:
			'A comprehensive, corpus-based reference grammar of Hokkaido Ainu with glossed, attested examples.',
		inLanguage: 'en'
	};
	const websiteJsonLdScript =
		'<' + 'script type="application/ld+json">' + JSON.stringify(websiteJsonLd) + '</' + 'script>';
</script>

<svelte:head>
	<link rel="canonical" href={canonicalUrl} />
	<meta property="og:site_name" content={BOOK_TITLE} />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- controlled JSON-LD built from constants, never user input -->
	{@html websiteJsonLdScript}
</svelte:head>

<div class="flex min-h-screen flex-col">
	<a
		href="#main-content"
		class="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:bg-accent focus:px-3 focus:py-2 focus:font-sans focus:text-accent-contrast"
		>Skip to content</a
	>
	<SiteNotice />
	<SiteHeader />
	<main id="main-content" tabindex="-1" class="flex-1">
		{@render children()}
	</main>
	<SiteFooter />
</div>
