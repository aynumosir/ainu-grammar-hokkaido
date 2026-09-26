/**
 * Shared helpers for the knowledge-base scripts: paths, JSONL io, and the
 * fixed mappings (part → home domain, first-edition dialect tag → doculect).
 */
import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

export const ROOT = join(import.meta.dir, '../..');
export const KB = join(ROOT, 'kb');
export const STATIC_KB = join(ROOT, 'static/kb');
export const BOOKS_ROOT = join(ROOT, '../ainu-grammar');

export function readJsonl<T = Record<string, unknown>>(path: string): T[] {
	if (!existsSync(path)) return [];
	return readFileSync(path, 'utf8')
		.split('\n')
		.filter((l) => l.trim())
		.map((l) => JSON.parse(l) as T);
}

/** Write through a temporary file and rename, so an interrupted run never leaves a truncated file. */
function writeAtomic(path: string, text: string): void {
	mkdirSync(dirname(path), { recursive: true });
	const tmp = `${path}.${process.pid}.tmp`;
	writeFileSync(tmp, text);
	renameSync(tmp, path);
}

export function writeJsonl(path: string, rows: unknown[]): void {
	writeAtomic(path, rows.map((r) => JSON.stringify(r)).join('\n') + (rows.length ? '\n' : ''));
}

export function writeJson(path: string, value: unknown, pretty = false): void {
	writeAtomic(path, pretty ? JSON.stringify(value, null, '\t') + '\n' : JSON.stringify(value));
}

/** Home domain of each part of the first edition, in part order (naming metadata only). */
export const PART_DOMAIN = [
	'sources', // I  The language and its setting
	'sources', // II Sources, conventions, glossing, orthography
	'phon', // III Segmental phonetics, phonology, phonotactics
	'prosody', // IV Prosody and pitch accent
	'phon', // V  Morphophonology and sandhi
	'nominal', // VI Word classes and nominal morphology
	'nominal', // VII Possession and the affiliative system
	'nominal', // VIII Pronouns, demonstratives, postpositions, numerals
	'verb', // IX The verb: structure, transitivity, verbal number
	'person', // X  The personal-affix system and alignment
	'valency', // XI Valency, voice, noun incorporation
	'clause', // XII The simple clause and nonverbal predication
	'complex', // XIII Nominalization, relativization, complementation
	'tam', // XIV Tense, aspect, mood, modality
	'evidential', // XV Evidentiality and mirativity
	'negation', // XVI Negation
	'complex', // XVII Clause linkage and adverbial subordination
	'discourse', // XVIII Information structure, sentence-final particles, minor classes
	'register', // XIX Discourse and the grammar of oral literature
	'diachrony', // XX Diachrony, reconstruction, dialectology
	'contact', // XXI Language contact and the lexicon
	'texts', // XXII Glossed texts
	'apparatus' // XXIII Reference apparatus
];

/** First-edition dialect tags (`dial="SAR"`) → doculect ids. */
export const DIALECT_DOCULECT: Record<string, string> = {
	HK: 'doculect:hokkaido',
	SAR: 'doculect:hokkaido/southwest/saru',
	CHI: 'doculect:hokkaido/chitose',
	ISH: 'doculect:hokkaido/central/ishikari',
	TOK: 'doculect:hokkaido/central/tokachi',
	HOR: 'doculect:hokkaido/southwest/horobetsu',
	SHI: 'doculect:hokkaido/southwest/shizunai',
	ASA: 'doculect:hokkaido/central/asahikawa',
	YAK: 'doculect:hokkaido/southwest/yakumo',
	SA: 'doculect:sakhalin',
	KU: 'doculect:kuril'
};

export const partTopicId = (domain: string, partIndex1: number) =>
	`topic:${domain}/part-${String(partIndex1).padStart(2, '0')}`;
export const chapterTopicId = (domain: string, slug: string) => `topic:${domain}/${slug}`;
export const sectionTopicId = (domain: string, slug: string, sid: string) =>
	`topic:${domain}/${slug}--${sid}`;

/** Parse the attributes of one Svelte component tag: `k="v"`, `k={expr}` and bare flags. */
export function parseAttrs(s: string): Record<string, string | true> {
	const out: Record<string, string | true> = {};
	const re = /([A-Za-z_][\w-]*)(?:=(?:"([^"]*)"|'([^']*)'|\{([^}]*)\}))?/g;
	let m: RegExpExecArray | null;
	while ((m = re.exec(s))) {
		const key = m[1];
		if (m[2] !== undefined) out[key] = m[2];
		else if (m[3] !== undefined) out[key] = m[3];
		else if (m[4] !== undefined) out[key] = m[4].trim();
		else out[key] = true;
	}
	return out;
}

export function decodeEntities(s: string): string {
	return s
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
		.replace(/&nbsp;/g, ' ');
}

/** Strip tags and collapse whitespace. */
export function plainText(s: string): string {
	return decodeEntities(s.replace(/<[^>]+>/g, ''))
		.replace(/\s+/g, ' ')
		.trim();
}

export function gitHead(): string {
	const r = Bun.spawnSync(['git', 'rev-parse', 'HEAD'], { cwd: ROOT });
	return r.stdout.toString().trim();
}
