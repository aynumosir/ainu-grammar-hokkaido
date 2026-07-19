<script lang="ts">
	import type { Snippet } from 'svelte';
	import { dictionaryUrl } from '../links';
	import { showCard, hideCard } from '../form-card.svelte';

	let {
		w,
		gl,
		children
	}: {
		/** The Ainu word, also used as the dictionary query. */
		w: string;
		/** Optional gloss shown in quotes after the word. */
		gl?: string;
		/** Optional display text differing from the query. */
		children?: Snippet;
	} = $props();
</script>

<i lang="ain" class="ain"
	><a
		href={dictionaryUrl(w)}
		target="_blank"
		rel="noopener"
		title={`Look up ${w} in the dictionary`}
		onmouseenter={(e) => showCard(e.currentTarget, w)}
		onfocus={(e) => showCard(e.currentTarget, w)}
		onmouseleave={() => hideCard()}
		onblur={() => hideCard()}
		>{#if children}{@render children()}{:else}{w}{/if}</a
	></i
>{#if gl}&nbsp;‘{gl}’{/if}
