<script lang="ts">
	import { BOOK_TITLE } from '$lib/consts';
</script>

<footer class="mt-16 border-t border-hairline font-sans text-sm">
	<div
		class="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-6 text-center text-muted"
	>
		<nav class="flex flex-wrap justify-center gap-x-3 gap-y-1" aria-label="Footer">
			<a href="/grammar" class="hover:text-accent hover:underline">Reference Grammar</a>
			<span aria-hidden="true">·</span>
			<a href="/grammar/references" class="hover:text-accent hover:underline">References</a>
			<span aria-hidden="true">·</span>
			<a href="/grammar/abbreviations" class="hover:text-accent hover:underline">Abbreviations</a
			>
		</nav>
		<p class="text-xs">© 2026 {BOOK_TITLE}</p>
	</div>
</footer>
