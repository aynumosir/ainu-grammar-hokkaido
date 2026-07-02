<script lang="ts">
	import { getContext, setContext, type Snippet } from 'svelte';
	import { GRAMMAR_CTX, SECTION_CTX, type GrammarContext, type SectionContext } from '../context';

	let {
		t,
		id,
		children
	}: {
		/** Section title. */
		t: string;
		/** Anchor id for cross-references. */
		id?: string;
		children?: Snippet;
	} = $props();

	const g = getContext<GrammarContext>(GRAMMAR_CTX);
	const parent = getContext<SectionContext>(SECTION_CTX);
	parent.counter.v += 1;
	const path = [...parent.path, parent.counter.v];
	setContext<SectionContext>(SECTION_CTX, { path, counter: { v: 0 } });

	const label = [g.chapter, ...path].join('.');
	const level = `h${Math.min(path.length + 1, 4)}`;
</script>

<section {id}>
	<svelte:element this={level}>
		<span class="sec-num">{label}</span>
		{t}
	</svelte:element>
	{@render children?.()}
</section>
