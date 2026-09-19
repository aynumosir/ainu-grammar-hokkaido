<script lang="ts">
	import { page } from '$app/stores';
	import { BOOK_TITLE } from '$lib/consts';

	// Active when anywhere under /grammar.
	const onGrammar = $derived($page.url.pathname.startsWith('/grammar'));
</script>

<header class="border-b border-hairline font-sans text-sm">
	<div class="mx-auto flex max-w-6xl items-center gap-x-6 gap-y-2 px-5 py-3">
		<a
			href="/"
			class="whitespace-nowrap text-[15px] font-bold tracking-tight text-fg hover:text-accent"
			>{BOOK_TITLE}</a
		>
		<nav class="ml-1 flex flex-wrap items-center gap-x-5 gap-y-1" aria-label="Primary">
			<a
				href="/grammar"
				aria-current={onGrammar ? 'page' : undefined}
				class="border-b-2 pb-0.5 {onGrammar
					? 'border-accent font-medium text-accent'
					: 'border-transparent text-muted hover:text-fg'}">Reference Grammar</a
			>
			<a
				href="/grammar/references"
				class="border-b-2 border-transparent pb-0.5 text-muted hover:text-fg">References</a
			>
			<a
				href="/grammar/abbreviations"
				class="border-b-2 border-transparent pb-0.5 text-muted hover:text-fg">Abbreviations</a
			>
		</nav>
	</div>
</header>
