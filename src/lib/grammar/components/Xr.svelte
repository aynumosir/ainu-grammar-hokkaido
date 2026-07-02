<script lang="ts">
	import type { Snippet } from 'svelte';
	import { chapterBySlug, chapterNumber } from '../toc';

	let {
		ch,
		s,
		children
	}: {
		/** Target chapter slug. */
		ch: string;
		/** Optional section anchor id within the chapter. */
		s?: string;
		/** Link text; defaults to 'Chapter N (Title)'. */
		children?: Snippet;
	} = $props();

	const meta = chapterBySlug(ch);
	if (!meta) throw new Error(`Unknown chapter slug in <Xr>: "${ch}"`);
	const num = chapterNumber(ch);
	const href = `/grammar/${ch}${s ? `#${s}` : ''}`;
</script>

<a class="xr" {href}
	>{#if children}{@render children()}{:else}Chapter {num} ({meta.title}){/if}</a
>
