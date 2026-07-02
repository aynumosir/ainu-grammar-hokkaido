<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
</script>

<footer class="mt-16 border-t border-hairline font-sans text-sm">
	<div
		class="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-6 text-center text-muted"
	>
		<nav class="flex flex-wrap justify-center gap-x-3 gap-y-1" aria-label="Footer">
			<a href="/grammar" class="hover:text-accent hover:underline">{m.reference_grammar()}</a>
			<span aria-hidden="true">·</span>
			<a href="/grammar/references" class="hover:text-accent hover:underline">{m.references()}</a>
			<span aria-hidden="true">·</span>
			<a href="/grammar/abbreviations" class="hover:text-accent hover:underline">{m.abbreviations()}</a
			>
		</nav>
		<p class="text-xs">© 2026 {m.site_title()}</p>
	</div>
</footer>
