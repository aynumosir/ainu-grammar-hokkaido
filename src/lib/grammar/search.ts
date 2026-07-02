/**
 * Client-side full-text search over the reference grammar.
 *
 * The index (static/grammar-search.json) is built at build time by
 * scripts/gen-grammar-search.ts. It is fetched lazily — only once the reader
 * actually engages the search box — so it never weighs on the initial bundle.
 *
 * The matcher is a compact hand-rolled token index (no runtime dependency):
 * case-insensitive, multi-term AND, weighting title and section-heading hits
 * above body hits, with a highlighted snippet around the first match.
 */

import { base } from '$app/paths';

export interface SearchSection {
	title: string;
	id: string;
}

export interface SearchDoc {
	slug: string;
	num: number;
	title: string;
	part: string;
	summary: string;
	sections: SearchSection[];
	text: string;
}

/** A run of snippet text, flagged when it is part of a query match. */
export interface Segment {
	text: string;
	hit: boolean;
}

export interface SearchResult {
	slug: string;
	num: number;
	part: string;
	/** Where the result links: chapter, deep-linked to the matching section. */
	href: string;
	sectionId?: string;
	titleSegments: Segment[];
	sectionSegments?: Segment[];
	snippet: Segment[];
	score: number;
}

const FIELD_WEIGHT = { title: 12, section: 7, summary: 4, part: 2, text: 1 } as const;
const STUB_PREFIX = '— chapter in preparation';

let indexPromise: Promise<SearchDoc[]> | null = null;

/** Fetch and memoize the search index. Safe to call repeatedly. */
export function loadIndex(fetchFn: typeof fetch = fetch): Promise<SearchDoc[]> {
	if (!indexPromise) {
		indexPromise = fetchFn(`${base}/grammar-search.json`).then((r) => {
			if (!r.ok) throw new Error(`Failed to load search index: ${r.status}`);
			return r.json() as Promise<SearchDoc[]>;
		});
	}
	return indexPromise;
}

export function tokenize(query: string): string[] {
	return query
		.toLowerCase()
		.split(/\s+/)
		.map((t) => t.trim())
		.filter(Boolean);
}

function escapeRe(s: string): string {
	return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Split `text` into hit/non-hit runs for every case-insensitive term match. */
function buildSegments(text: string, terms: string[]): Segment[] {
	if (!terms.length) return [{ text, hit: false }];
	const re = new RegExp(`(${terms.map(escapeRe).join('|')})`, 'gi');
	const out: Segment[] = [];
	let last = 0;
	for (const m of text.matchAll(re)) {
		const i = m.index ?? 0;
		if (i > last) out.push({ text: text.slice(last, i), hit: false });
		out.push({ text: m[0], hit: true });
		last = i + m[0].length;
	}
	if (last < text.length) out.push({ text: text.slice(last), hit: false });
	return out.length ? out : [{ text, hit: false }];
}

/** A windowed, ellipsised, highlighted snippet around the first matching term. */
function snippet(text: string, terms: string[], maxLen = 160): Segment[] {
	const lower = text.toLowerCase();
	let first = -1;
	for (const t of terms) {
		const i = lower.indexOf(t);
		if (i !== -1 && (first < 0 || i < first)) first = i;
	}

	let start = first < 0 ? 0 : Math.max(0, first - 50);
	if (start > 0) {
		const sp = text.indexOf(' ', start);
		if (sp !== -1 && sp - start < 20) start = sp + 1;
	}
	let end = Math.min(text.length, start + maxLen);
	if (end < text.length) {
		const sp = text.lastIndexOf(' ', end);
		if (sp > start) end = sp;
	}

	const segs: Segment[] = [];
	if (start > 0) segs.push({ text: '… ', hit: false });
	segs.push(...buildSegments(text.slice(start, end), terms));
	if (end < text.length) segs.push({ text: ' …', hit: false });
	return segs;
}

/**
 * Rank chapters against a query. Every term must appear somewhere in the
 * chapter (AND); a chapter's score is the sum, over terms, of the heaviest
 * field the term hits, plus a bonus for an exact phrase in the title/heading.
 */
export function search(query: string, docs: SearchDoc[], limit = 25): SearchResult[] {
	const terms = tokenize(query);
	if (!terms.length) return [];
	const phrase = terms.join(' ');
	const results: SearchResult[] = [];

	for (const doc of docs) {
		const titleL = doc.title.toLowerCase();
		const summaryL = doc.summary.toLowerCase();
		const partL = doc.part.toLowerCase();
		const textL = doc.text.toLowerCase();
		const sectionsL = doc.sections.map((s) => s.title.toLowerCase());

		let score = 0;
		let matchedAll = true;
		for (const term of terms) {
			let best = 0;
			if (titleL.includes(term)) best = FIELD_WEIGHT.title;
			else if (sectionsL.some((s) => s.includes(term))) best = FIELD_WEIGHT.section;
			else if (summaryL.includes(term)) best = FIELD_WEIGHT.summary;
			else if (partL.includes(term)) best = FIELD_WEIGHT.part;
			else if (textL.includes(term)) best = FIELD_WEIGHT.text;
			if (best === 0) {
				matchedAll = false;
				break;
			}
			score += best;
		}
		if (!matchedAll) continue;

		if (titleL.includes(phrase)) score += 8;
		if (sectionsL.some((s) => s.includes(phrase))) score += 4;

		// Deep-link to the first section whose heading matches a term.
		const section = doc.sections.find((s) => {
			const sl = s.title.toLowerCase();
			return terms.some((t) => sl.includes(t));
		});

		// Snippet from the richest field that actually contains a term.
		let source: string;
		if (terms.some((t) => textL.includes(t)) && !doc.text.startsWith(STUB_PREFIX)) source = doc.text;
		else if (terms.some((t) => summaryL.includes(t))) source = doc.summary;
		else if (section) source = section.title;
		else source = doc.summary || doc.text;

		results.push({
			slug: doc.slug,
			num: doc.num,
			part: doc.part,
			href: `/grammar/${doc.slug}${section?.id ? `#${section.id}` : ''}`,
			sectionId: section?.id,
			titleSegments: buildSegments(doc.title, terms),
			sectionSegments: section ? buildSegments(section.title, terms) : undefined,
			snippet: snippet(source, terms),
			score
		});
	}

	results.sort((a, b) => b.score - a.score || a.num - b.num);
	return results.slice(0, limit);
}
