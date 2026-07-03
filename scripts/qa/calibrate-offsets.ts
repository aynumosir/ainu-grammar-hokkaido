/**
 * calibrate-offsets.ts — measure printed-page → OCR-page offsets per source.
 *
 * For each source in the candidates table, take every <Ex cite="key:page">
 * whose m-text is Latin-script, and search that text (first words, whitespace-
 * flexible, punctuation-stripped) in OCR pages printed+δ for δ ∈ [-10, +14].
 * The modal δ wins; agreement ratio is the confidence. Writes/updates
 * .grammar-build/qa/source-map.json (calibrated=true when ≥5 votes and ≥60% agree).
 */

import { readdirSync, readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { BOOKS_ROOT, loadSourceMap, type SourceMapEntry } from './retrieve';

const ROOT = join(import.meta.dir, '../..');
const CHAPTER_DIR = join(ROOT, 'src/lib/grammar/chapters');
const MAP_PATH = join(ROOT, '.grammar-build/qa/source-map.json');

/** Book dirs per source key (relative to ../ainu-grammar/books). OCR variant resolved below. */
const BOOK_DIRS: Record<string, string> = {
	nakagawa2024: '2024_Nakagawa',
	sato2008: '2008_Sato',
	kindaichi1936: '1936_Kindaichi',
	refsing1986: '1986_Refsing',
	tamura1996: '1996_Tamura', // NB: this dump is アイヌ語入門, not the Saru dictionary
	murasaki2025: '2025_Murasaki',
	shibatani1990: '1990_Shibatani',
	chiri1942: '1942_Chiri',
	kayano1987: '1987_Kayano',
	kindaichi1933: '1933_Kindaichi',
};

/** Resolve `<book>.ocr/<best variant>` inside a book dir. */
function resolveOcrDir(bookDir: string): string | null {
	const abs = join(BOOKS_ROOT, 'books', bookDir);
	if (!existsSync(abs)) return null;
	const ocr = readdirSync(abs).find((d) => d.endsWith('.ocr'));
	if (!ocr) return null;
	// prefer the variant with the most page-NNNN.txt files (some variants are partial)
	const variants = readdirSync(join(abs, ocr))
		.filter((d) => !d.endsWith('.json') && !d.endsWith('.txt'))
		.map((v) => {
			let pages = 0;
			try {
				pages = readdirSync(join(abs, ocr, v)).filter((f) => /^page-\d+\.txt$/.test(f)).length;
			} catch {}
			return { v, pages };
		})
		.sort((a, b) => b.pages - a.pages);
	const pick = variants[0]?.pages ? variants[0].v : undefined;
	return pick ? join('books', bookDir, ocr, pick) : null;
}

const CANDIDATES: Record<string, string> = {};
for (const [key, bookDir] of Object.entries(BOOK_DIRS)) {
	const dir = resolveOcrDir(bookDir);
	if (dir) CANDIDATES[key] = dir;
	else console.log(`${key}: no OCR variant found under books/${bookDir}`);
}

function findTags(src: string, name: string) {
	const re = new RegExp(`<${name}\\b((?:[^>"]|"[^"]*")*)>`, 'g');
	const out: Record<string, string>[] = [];
	let m: RegExpExecArray | null;
	while ((m = re.exec(src))) {
		const attrs: Record<string, string> = {};
		const attrRe = /([\w-]+)\s*=\s*"([^"]*)"/g;
		let a: RegExpExecArray | null;
		while ((a = attrRe.exec(m[1]))) attrs[a[1]] = a[2];
		out.push(attrs);
	}
	return out;
}

const norm = (s: string) => s.toLowerCase().replace(/[^a-záéíóú]+/g, '');

// gather (key, printedPage, probe) samples
const samples = new Map<string, { page: number; probe: string }[]>();
for (const f of readdirSync(CHAPTER_DIR).filter((f) => f.endsWith('.svelte'))) {
	const src = readFileSync(join(CHAPTER_DIR, f), 'utf8');
	for (const t of findTags(src, 'Ex')) {
		if (!t.cite || !t.m) continue;
		const first = t.cite.split(';')[0].trim();
		const [key, pagesSpec] = [first.split(':')[0].trim(), first.split(':')[1]];
		if (!(key in CANDIDATES) || !pagesSpec) continue;
		const pm = pagesSpec.match(/\d+/);
		if (!pm) continue;
		// probe: first ≥12 normalized chars of the m-line
		const probe = norm(t.m).slice(0, 24);
		if (probe.length < 12) continue;
		if (!samples.has(key)) samples.set(key, []);
		samples.get(key)!.push({ page: +pm[0], probe });
	}
}

const map = loadSourceMap();

for (const [key, dir] of Object.entries(CANDIDATES)) {
	const abs = join(BOOKS_ROOT, dir);
	if (!existsSync(abs)) {
		console.log(`${key}: OCR dir missing — ${dir}`);
		continue;
	}
	const list = (samples.get(key) ?? []).slice(0, 60);
	const votes = new Map<number, number>();
	let usable = 0;
	for (const s of list) {
		for (let d = -10; d <= 14; d++) {
			const f = join(abs, `page-${String(s.page + d).padStart(4, '0')}.txt`);
			if (!existsSync(f)) continue;
			if (norm(readFileSync(f, 'utf8')).includes(s.probe)) {
				votes.set(d, (votes.get(d) ?? 0) + 1);
				usable++;
				break; // first (closest-to-cited) hit wins for this sample
			}
		}
	}
	const ranked = [...votes.entries()].sort((a, b) => b[1] - a[1]);
	if (!ranked.length) {
		console.log(`${key}: 0/${list.length} probes matched — cannot calibrate (script/OCR mismatch?)`);
		continue;
	}
	// bracket vote: a citation's example may start on the cited page or spill onto
	// the next, so δ and δ+1 are the same physical offset. Retrieval fetches ±1.
	const [best, n] = ranked[0];
	const bracket = n + (votes.get(best + 1) ?? 0) > n + (votes.get(best - 1) ?? 0)
		? n + (votes.get(best + 1) ?? 0)
		: n + (votes.get(best - 1) ?? 0);
	const conf = bracket / usable;
	const ok = bracket >= 4 && conf >= 0.7;
	map[key] = {
		dir,
		offset: best,
		calibrated: ok,
		note: `votes ${n}/${usable} of ${list.length} samples (conf ${(conf * 100).toFixed(0)}%)${ok ? '' : ' — NOT trusted'}`,
	} satisfies SourceMapEntry;
	console.log(`${key}: offset ${best >= 0 ? '+' : ''}${best}  (${n}/${usable} votes, ${list.length} samples) ${ok ? '✓ calibrated' : '✗ below threshold'}`);
	if (ranked.length > 1) console.log(`    runners-up: ${ranked.slice(1, 4).map(([d, v]) => `${d >= 0 ? '+' : ''}${d}×${v}`).join(' ')}`);
}

writeFileSync(MAP_PATH, JSON.stringify(map, null, 1));
console.log(`\nsource map → ${MAP_PATH}`);
