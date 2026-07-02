<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { CANONICAL_HOSTNAME, BOOK_TITLE } from '$lib/consts';
</script>

<svelte:head>
	<title>{m.site_title()}</title>
	<meta name="description" content={m.site_tagline()} />
	<meta property="og:title" content={m.site_title()} />
	<meta property="og:description" content={m.site_tagline()} />
	<meta property="og:url" content={CANONICAL_HOSTNAME} />
	<meta property="og:type" content="website" />
</svelte:head>

<section
	class="mx-auto flex min-h-[80vh] max-w-2xl flex-col justify-center px-6 py-16 font-serif"
>
	<p class="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent">
		{m.reference_grammar()}
	</p>
	<h1
		class="mt-4 font-sans text-[length:var(--step-4)] font-bold leading-[1.08] tracking-tight text-fg"
	>
		{BOOK_TITLE}
	</h1>
	<p class="mt-6 text-[length:var(--step-1)] leading-relaxed text-muted">{m.site_tagline()}</p>
	<div class="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
		<a
			href="/grammar"
			class="inline-flex items-center gap-2 border border-accent bg-accent px-5 py-2.5 font-sans text-sm font-semibold text-accent-contrast transition hover:bg-transparent hover:text-accent"
			>{m.read_grammar()} <span aria-hidden="true">→</span></a
		>
		<nav class="flex flex-wrap gap-x-6 gap-y-1 font-sans text-sm" aria-label="Secondary">
			<a href="/grammar/references" class="text-accent underline underline-offset-4 hover:decoration-2"
				>{m.references()}</a
			>
			<a
				href="/grammar/abbreviations"
				class="text-accent underline underline-offset-4 hover:decoration-2">{m.abbreviations()}</a
			>
		</nav>
	</div>
</section>
