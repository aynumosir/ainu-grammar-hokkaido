<script lang="ts">
	import { CANONICAL_HOSTNAME, BOOK_TITLE, SITE_TAGLINE } from '$lib/consts';
</script>

<svelte:head>
	<title>{BOOK_TITLE}</title>
	<meta name="description" content={SITE_TAGLINE} />
	<meta property="og:title" content={BOOK_TITLE} />
	<meta property="og:description" content={SITE_TAGLINE} />
	<meta property="og:url" content={CANONICAL_HOSTNAME} />
	<meta property="og:type" content="website" />
</svelte:head>

<section
	class="mx-auto flex min-h-[80vh] max-w-2xl flex-col justify-center px-6 py-16 font-serif"
>
	<p class="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent">
		Reference Grammar
	</p>
	<h1
		class="mt-4 font-sans text-[length:var(--step-4)] font-bold leading-[1.08] tracking-tight text-fg"
	>
		{BOOK_TITLE}
	</h1>
	<p class="mt-6 text-[length:var(--step-1)] leading-relaxed text-muted">{SITE_TAGLINE}</p>
	<div class="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
		<a
			href="/grammar"
			class="inline-flex items-center gap-2 border border-accent bg-accent px-5 py-2.5 font-sans text-sm font-semibold text-accent-contrast transition hover:bg-transparent hover:text-accent"
			>Read the grammar <span aria-hidden="true">→</span></a
		>
		<nav class="flex flex-wrap gap-x-6 gap-y-1 font-sans text-sm" aria-label="Secondary">
			<a href="/grammar/references" class="text-accent underline underline-offset-4 hover:decoration-2"
				>References</a
			>
			<a
				href="/grammar/abbreviations"
				class="text-accent underline underline-offset-4 hover:decoration-2">Abbreviations</a
			>
		</nav>
	</div>
</section>
