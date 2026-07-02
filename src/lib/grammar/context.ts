/** Shared context keys for chapter-internal numbering. */

import type { SvelteSet } from 'svelte/reactivity';

export const GRAMMAR_CTX = 'grammar';
export const SECTION_CTX = 'grammar-sec';

export interface GrammarContext {
	/** Chapter number (1-based). */
	chapter: number;
	/** Running example counter for the chapter. */
	ex: { v: number };
	/**
	 * Bibliography keys cited anywhere in the chapter (via <Ref> or <Ex cite>).
	 * Collected reactively so the chapter can render its own reference list.
	 */
	cited: SvelteSet<string>;
}

export interface SectionContext {
	/** Section number path above this level, e.g. [2, 1] inside §N.2.1. */
	path: number[];
	/** Counter for child sections at this level. */
	counter: { v: number };
}
