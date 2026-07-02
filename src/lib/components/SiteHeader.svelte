<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { page } from '$app/stores';
	import { i18n } from '$lib/i18n';

	// Active when anywhere under /grammar. i18n.route() strips the locale prefix.
	// (Language switcher omitted for now — the grammar is English-only; no ja/Ainu
	// translation of the content exists yet.)
	const onGrammar = $derived(i18n.route($page.url.pathname).startsWith('/grammar'));
</script>

<header class="border-b border-hairline font-sans text-sm">
	<div class="mx-auto flex max-w-6xl items-center gap-x-6 gap-y-2 px-5 py-3">
		<a
			href="/"
			class="whitespace-nowrap text-[15px] font-bold tracking-tight text-fg hover:text-accent"
			>{m.site_title()}</a
		>
		<nav class="ml-1 flex flex-wrap items-center gap-x-5 gap-y-1" aria-label="Primary">
			<a
				href="/grammar"
				aria-current={onGrammar ? 'page' : undefined}
				class="border-b-2 pb-0.5 {onGrammar
					? 'border-accent font-medium text-accent'
					: 'border-transparent text-muted hover:text-fg'}">{m.reference_grammar()}</a
			>
			<a
				href="/grammar/references"
				class="border-b-2 border-transparent pb-0.5 text-muted hover:text-fg">{m.references()}</a
			>
			<a
				href="/grammar/abbreviations"
				class="border-b-2 border-transparent pb-0.5 text-muted hover:text-fg">{m.abbreviations()}</a
			>
		</nav>
	</div>
</header>
