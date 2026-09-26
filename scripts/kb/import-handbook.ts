/**
 * import-handbook.ts — the Handbook of the Ainu Language (Bugaeva ed. 2022) as assets.
 *
 *   bun scripts/kb/import-handbook.ts
 *
 * The dump is one pandoc text of the EPUB, without print folios. Chapters are found
 * by their titles as the bibliography records them; the numbered headings inside a
 * chapter are its sections. Every section becomes one pseudo-leaf under
 * kb/imports/handbook-2022/pages/page-NNNN.txt, and the page map gives each leaf its
 * locus label "chapter.section". One asset is written per chapter that has its own
 * bibliography key, so that statements are attributed to the chapter's authors, and
 * one asset for the volume key covers the chapters without a key of their own.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { BOOKS_ROOT, KB, readJsonl, writeJson } from './lib';

const TEXT = join(BOOKS_ROOT, 'books/ocr/Bugaeva Anna (ed.) - Handbook of the Ainu Language.pandoc.txt');
const OUT = 'imports/handbook-2022/pages';
const lines = readFileSync(TEXT, 'utf8').split('\n');
const norm = (s: string) =>
	s
		.normalize('NFKC')
		.toLowerCase()
		.replace(/[–—-]/g, ' ')
		.replace(/[^a-z0-9 ]+/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();

interface Chapter {
	num: number;
	title: string;
	key: string | null;
	start: number;
}
/** chapter number → bibliography key; titles come from sources.jsonl */
const sources = readJsonl<{ key: string; title: string; container?: string }>(join(KB, 'registries/sources.jsonl'));
const chapterKeys = sources.filter((s) => (s.container ?? '').includes('Handbook of the Ainu'));
// a numbered heading: a number, spaces, a title that starts with a letter; a table row
// ("28   33   29") or a numbered example is never one
const headingRe = /^(\d{1,2})[\s\u2002\u3000]+((?=[A-Za-zÀ-ɏ“‘(])\S.{4,160})$/;
const headings: { line: number; n: number; title: string }[] = [];
lines.forEach((l, i) => {
	const m = l.trim().match(headingRe);
	if (m && !/ {3,}|\t/.test(l.trim())) headings.push({ line: i, n: +m[1], title: m[2].trim() });
});
// chapters: a numbered heading whose title matches a chapter title of the bibliography,
// or, for chapters without a key, the known titles of the volume
const knownTitles: { title: string; key: string | null }[] = [
	...chapterKeys.map((s) => ({ title: s.title, key: s.key })),
	{ title: 'Ainu: A head-marking language of the Pacific Rim', key: null },
	{ title: 'Major old documents of Ainu and some problems in the historical study of Ainu', key: null },
	{ title: 'An uwepeker “Retar Katak, Kunne Katak” and kamuy yukar “Amamecikappo” narrated in the Hokkaido Ainu dialect of Chitose by Ito Oda', key: null }
];
const chapters: Chapter[] = [];
for (const h of headings) {
	const nt = norm(h.title);
	const hit = knownTitles.find((k) => {
		const kt = norm(k.title);
		return kt === nt || (kt.length > 20 && (nt.startsWith(kt.slice(0, 40)) || kt.startsWith(nt.slice(0, 40))));
	});
	if (!hit) continue;
	if (chapters.some((c) => c.title === h.title || (hit.key && c.key === hit.key))) continue; // one heading per chapter
	chapters.push({ num: h.n, title: h.title, key: hit.key, start: h.line });
}
chapters.sort((a, b) => a.start - b.start);
// the running text of a chapter starts at the last occurrence of its heading (the first is the TOC)
const chapterStarts = chapters.map((c) => {
	const occ = headings.filter((h) => h.title === c.title).map((h) => h.line);
	return { ...c, start: Math.max(...occ) };
});
chapterStarts.sort((a, b) => a.start - b.start);
console.log(`${chapterStarts.length} chapters found`);
for (const c of chapterStarts) console.log(`  ${String(c.num).padStart(2)} ${c.key ?? '(volume)'}  ${c.title.slice(0, 70)}  @${c.start}`);

mkdirSync(join(KB, OUT), { recursive: true });
let leaf = 0;
const pagemapAll: Record<string, string> = {};
const rangesByKey = new Map<string, [number, number][]>();
const push = (key: string, a: number, b: number) => {
	const list = rangesByKey.get(key) ?? [];
	list.push([a, b]);
	rangesByKey.set(key, list);
};
for (let ci = 0; ci < chapterStarts.length; ci++) {
	const c = chapterStarts[ci];
	const end = chapterStarts[ci + 1]?.start ?? lines.length;
	// the sections of a chapter are numbered 1, 2, 3 … in order; any other numbered line is text
	const inner: typeof headings = [];
	for (const h of headings) if (h.line > c.start && h.line < end && h.n === inner.length + 1) inner.push(h);
	const bounds = [c.start, ...inner.map((h) => h.line), end];
	const first = leaf + 1;
	for (let si = 0; si + 1 < bounds.length; si++) {
		const text = lines.slice(bounds[si], bounds[si + 1]).join('\n').trim();
		if (text.length < 200) continue; // a chapter title alone is no leaf
		leaf++;
		const secNo = si === 0 ? 0 : inner[si - 1].n;
		writeFileSync(join(KB, OUT, `page-${String(leaf).padStart(4, '0')}.txt`), text + '\n');
		pagemapAll[leaf] = si === 0 ? `ch.${c.num}` : `${c.num}.${secNo}`;
	}
	push(c.key ?? 'bugaeva2022', first, leaf);
}
for (const [key, ranges] of rangesByKey) {
	const pagemap: Record<string, string> = {};
	for (const [a, b] of ranges) for (let n = a; n <= b; n++) if (pagemapAll[n]) pagemap[n] = pagemapAll[n];
	writeJson(
		join(KB, 'assets', `${key}.json`),
		{
			id: `asset:${key}@handbook-epub`,
			source: `source:${key}`,
			kind: 'epub',
			root: 'kb',
			dir: OUT,
			engine: 'handbook-epub',
			leaves: Object.keys(pagemap).length,
			leaf_ranges: ranges,
			pagemap,
			calibration: { offset: null, calibrated: true, note: 'loci are chapter.section numbers of the EPUB; the printed edition has no page map here', pagemap_method: 'section headings (import-handbook.ts)' }
		},
		true
	);
	console.log(`${key}: ${Object.keys(pagemap).length} section leaves, ranges ${JSON.stringify(ranges)}`);
}
console.log(`${leaf} section leaves written to kb/${OUT}`);
