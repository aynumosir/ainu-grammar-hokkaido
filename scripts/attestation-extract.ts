/**
 * attestation-extract.ts — extraction + normalisation shared by
 * gen-attestation.ts and audit-attestation.ts.
 *
 * Pulls every Ainu form printed in a chapter out of exactly three site kinds
 * (see AUTHORING.md §3 bar 13):
 *
 *   A      — `<A w="FORM">` (error-level: a dead dictionary link by construction)
 *   Ex     — `<Ex m="…">` (words by whitespace; each word checked whole AND
 *             split on `-` into morphemes)
 *   inline — `<i lang="ain-Latn">…</i>` (split on whitespace)
 *
 * Both scripts must agree on what "a printed form" is, so the logic lives here
 * exactly once.
 */

export type SiteKind = 'A' | 'Ex' | 'inline';

export interface Occurrence {
	/** Normalised form, as resolved against corpus + database. */
	form: string;
	/** The token as printed, before normalisation. */
	raw: string;
	site: SiteKind;
	chapter: string;
	line: number;
}

interface Tag {
	attrs: Record<string, string>;
	line: number;
}

/** Find all `<Name …>` tags; attr values may span lines. Mirrors audit-chapters.ts. */
function findTags(src: string, name: string): Tag[] {
	const re = new RegExp(`<${name}\\b((?:[^>"]|"[^"]*")*)>`, 'g');
	const out: Tag[] = [];
	let m: RegExpExecArray | null;
	while ((m = re.exec(src))) {
		const attrs: Record<string, string> = {};
		const attrRe = /([\w-]+)\s*=\s*"([^"]*)"/g;
		let a: RegExpExecArray | null;
		while ((a = attrRe.exec(m[1]))) attrs[a[1]] = a[2];
		out.push({ attrs, line: src.slice(0, m.index).split('\n').length });
	}
	return out;
}

const LEAD_STRIP = /^[('"‘’“”[]+/;
const TAIL_STRIP = /[)'"‘’“”\].,;:!?]+$/;
const PERSON_CLITIC = /^(ku|a|e|ci|an|un|eci|i)=/;

/**
 * Normalise a candidate token; returns null when the token is out of scope
 * (ungrammatical/reconstructed, gloss atoms, proper nouns, too short…).
 */
export function normalizeToken(tok: string): string | null {
	// 1. surrounding quotes/brackets/punctuation
	let t = tok.replace(LEAD_STRIP, '').replace(TAIL_STRIP, '');
	// 2. ungrammatical/reconstructed, digits, gloss atoms, proper nouns
	if (/[\d*‹⟨〈]/.test(t) || t.includes('.') || /^[A-Z]/.test(t)) return null;
	// 3. leading person clitic, then any remaining clitic boundaries
	t = t.replace(PERSON_CLITIC, '').replace(/=/g, '');
	// 4. morpheme-edge hyphens
	t = t.replace(/^-+|-+$/g, '');
	// 5. lowercase + charset (an internal hyphen here means the token was not
	//    split earlier — those are never checked whole)
	t = t.toLowerCase();
	if (t.length < 2 || !/^[a-z']+$/.test(t)) return null;
	return t;
}

/** Extract every Ainu-form occurrence from one chapter source. */
export function extractOccurrences(src: string, chapter: string): Occurrence[] {
	const out: Occurrence[] = [];
	const push = (raws: string[], site: SiteKind, line: number) => {
		for (const raw of raws) {
			const form = normalizeToken(raw);
			if (form) out.push({ form, raw, site, chapter, line });
		}
	};

	for (const t of findTags(src, 'A')) {
		if (t.attrs.w) push([t.attrs.w], 'A', t.line);
	}

	for (const t of findTags(src, 'Ex')) {
		const m = t.attrs.m;
		if (!m) continue;
		const toks: string[] = [];
		for (const word of m.trim().split(/\s+/)) {
			toks.push(word, ...word.split('-'));
		}
		push(toks, 'Ex', t.line);
	}

	const inlineRe = /<i\b(?=[^>]*\blang="ain-Latn")[^>]*>([\s\S]*?)<\/i>/g;
	let m: RegExpExecArray | null;
	while ((m = inlineRe.exec(src))) {
		const text = m[1].replace(/<[^>]+>/g, ' ');
		push(text.split(/\s+/).filter(Boolean), 'inline', src.slice(0, m.index).split('\n').length);
	}

	return out;
}
