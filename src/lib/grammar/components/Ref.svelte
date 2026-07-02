<script lang="ts">
	import { getContext } from 'svelte';
	import { bibliography } from '../bibliography';
	import { GRAMMAR_CTX, type GrammarContext } from '../context';

	let {
		k,
		p,
		paren = false
	}: {
		/** Bibliography key. */
		k: string;
		/** Page(s) or section, e.g. '45', '45–48', '§3.2'. */
		p?: string;
		/** Render fully parenthesised: (Author Year: p) instead of Author (Year: p). */
		paren?: boolean;
	} = $props();

	const e = bibliography[k];
	if (!e) throw new Error(`Unknown bibliography key in <Ref>: "${k}"`);
	const href = `/grammar/references#${k}`;

	// Register with the chapter's per-chapter reference list, when inside one.
	getContext<GrammarContext | undefined>(GRAMMAR_CTX)?.cited.add(k);
</script>

{#if paren}(<a class="ref" {href}>{e.citeAuthor} {e.year}</a>{#if p}: {p}{/if}){:else}<a
		class="ref"
		{href}>{e.citeAuthor}</a
	>
	({e.year}{#if p}: {p}{/if}){/if}
