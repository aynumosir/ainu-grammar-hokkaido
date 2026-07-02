<script lang="ts">
	import { page } from '$app/stores';
	import * as m from '$lib/paraglide/messages.js';
</script>

<svelte:head>
	<title>{$page.status} · {m.site_title()}</title>
</svelte:head>

<div class="mx-auto my-24 max-w-screen-sm px-4 text-center font-sans">
	<p class="text-7xl font-bold text-faint">{$page.status}</p>
	{#if $page.error?.message}
		<p class="mt-4 text-lg text-fg">{$page.error.message}</p>
	{/if}
	<a href="/" class="mt-8 inline-block text-accent hover:underline">← {m.site_title()}</a>
</div>
