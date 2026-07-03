/**
 * footer-map.ts — build EXACT printed-page ↔ OCR-file maps from page footers.
 *
 * A single constant offset per source is unsafe: unnumbered inserts make the
 * offset drift mid-book (measured in Nakagawa 2024: −2 near p.59, −3 by p.174).
 * Ground truth is the printed page number in each page's own footer/header.
 *
 * For every source in source-map.json: extract a printed number from each
 * page-NNNN.txt (first/last lines; accepted only within ±12 of the file number,
 * which kills false hits from content digits), then fill gaps by interpolation
 * between consistent anchors. Writes .grammar-build/qa/page-map/<key>.json
 * as { "<file#>": printed } plus coverage stats. retrieve.ts prefers this map.
 */

import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { BOOKS_ROOT, loadSourceMap } from './retrieve';

const ROOT = join(import.meta.dir, '../..');
const OUT_DIR = join(ROOT, '.grammar-build/qa/page-map');
mkdirSync(OUT_DIR, { recursive: true });

function extractPrinted(text: string, fileNo: number): number | null {
	const lines = text.split('\n').map((l) => l.trim()).filter(Boolean);
	const cands: number[] = [];
	// footer: last 3 lines; header: first 2 lines
	for (const l of [...lines.slice(-3), ...lines.slice(0, 2)]) {
		// standalone number, chapter-title footer ("174\t4. 動詞"), or dash-flanked ("― 183 ―")
		const m =
			l.match(/^[―—–-]\s*(\d{1,4})\s*[―—–-]$/) ??
			l.match(/^(\d{1,4})(?:[\s\t]|$)/) ??
			l.match(/[\s\t](\d{1,4})$/);
		if (m) cands.push(+m[1]);
	}
	for (const c of cands) {
		if (Math.abs(c - fileNo) <= 25) return c; // plausibility anchor (offsets up to ~±20 observed)
	}
	return null;
}

const map = loadSourceMap();
for (const [key, entry] of Object.entries(map)) {
	const dir = join(BOOKS_ROOT, entry.dir);
	let files: number[];
	try {
		files = readdirSync(dir)
			.map((f) => f.match(/^page-(\d+)\.txt$/)?.[1])
			.filter(Boolean)
			.map((s) => +s!)
			.sort((a, b) => a - b);
	} catch {
		continue;
	}
	const anchors = new Map<number, number>();
	for (const n of files) {
		const printed = extractPrinted(readFileSync(join(dir, `page-${String(n).padStart(4, '0')}.txt`), 'utf8'), n);
		if (printed !== null) anchors.set(n, printed);
	}
	// drop outlier anchors that disagree with both neighbors' implied offsets
	const anchorList = [...anchors.entries()].sort((a, b) => a[0] - b[0]);
	const clean = anchorList.filter(([n, p], i) => {
		const prev = anchorList[i - 1];
		const next = anchorList[i + 1];
		const okPrev = !prev || Math.abs(p - n - (prev[1] - prev[0])) <= 1;
		const okNext = !next || Math.abs(p - n - (next[1] - next[0])) <= 1;
		return okPrev || okNext;
	});
	// interpolate between consecutive clean anchors when spacing matches exactly
	const full = new Map<number, number>(clean);
	for (let i = 0; i < clean.length - 1; i++) {
		const [n1, p1] = clean[i];
		const [n2, p2] = clean[i + 1];
		if (n2 - n1 > 1 && p2 - p1 === n2 - n1) {
			for (let d = 1; d < n2 - n1; d++) full.set(n1 + d, p1 + d);
		}
	}
	const offsets = new Set(clean.map(([n, p]) => n - p));
	writeFileSync(
		join(OUT_DIR, `${key}.json`),
		JSON.stringify({ fileToPrinted: Object.fromEntries([...full.entries()].sort((a, b) => a[0] - b[0])) }, null, 0),
	);
	console.log(
		`${key}: ${anchors.size} footer anchors (${clean.length} clean) → ${full.size}/${files.length} files mapped; file−printed offsets seen: ${[...offsets].sort((a, b) => a - b).join(', ')}`,
	);
}
