/**
 * import-assets.ts — OCR dumps as asset records with page maps.
 *
 *   bun scripts/kb/import-assets.ts   →  kb/assets/<key>.json
 *
 * Two inputs:
 *   .grammar-build/qa/source-map.json + .grammar-build/qa/page-map/<key>.json
 *       the book dumps the QA campaign calibrated (page maps read from footers there)
 *   kb/registries/asset-map.jsonl   {key, dir}
 *       article dumps matched to bibliography keys; their page maps are read here from
 *       the printed page number in each page's own header or footer, kept where the
 *       numbers read in order; a page whose number cannot be read keeps no label
 *
 * An offset constant is never stored: a leaf either has a printed label or none.
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, join } from 'node:path';
import { BOOKS_ROOT, KB, ROOT, readJsonl, writeJson } from './lib';

interface SourceMapEntry {
	dir: string;
	offset: number;
	calibrated: boolean;
	note?: string;
}

function leavesOf(dir: string): number[] {
	return readdirSync(dir)
		.map((f) => f.match(/^page-(\d+)\.txt$/)?.[1])
		.filter((s): s is string => !!s)
		.map((s) => +s)
		.sort((a, b) => a - b);
}

/**
 * Printed page number read from a page's header or footer lines. `side` says where the
 * number stood: at the start of a running head (the left page of a spread), at its end
 * (the right page), or centred between dashes (a single page).
 */
interface Printed {
	p: number;
	side: 'left' | 'right' | null;
}
function extractPrinted(text: string): Printed | null {
	const lines = text.split('\n').map((l) => l.trim()).filter(Boolean);
	for (const l of [...lines.slice(-3), ...lines.slice(0, 2)]) {
		let m = l.match(/^[―—–-]\s*(\d{1,4})\s*[―—–-]$/);
		if (m) return { p: +m[1], side: null };
		m = l.match(/^(\d{1,4})(?:[\s\t]|$)/);
		if (m) return { p: +m[1], side: l.length > m[0].length ? 'left' : null };
		m = l.match(/[\s\t](\d{1,4})$/);
		if (m) return { p: +m[1], side: 'right' };
	}
	return null;
}

/** Leaf → printed page label from the numbers read on the leaves themselves. */
function footerMap(dir: string, leaves: number[]): Record<string, number | string> {
	const anchors: [number, number][] = [];
	const sides = new Map<number, Printed['side']>();
	for (const n of leaves) {
		const r = extractPrinted(readFileSync(join(dir, `page-${String(n).padStart(4, '0')}.txt`), 'utf8'));
		if (r) {
			anchors.push([n, r.p]);
			sides.set(n, r.side);
		}
	}
	// the page map is the longest chain of anchors that read in order: from one anchor to
	// the next the printed number must rise, by at most two pages per leaf plus one (a
	// scan of spreads carries two pages on a leaf); a running head misread as a number,
	// a footnote mark or a table-of-contents entry falls outside every long chain
	const plausible = (a: [number, number], b: [number, number]) => b[1] > a[1] && b[1] - a[1] <= 2 * (b[0] - a[0]) + 1;
	const best = anchors.map(() => 1);
	const prevOf = anchors.map(() => -1);
	for (let i = 0; i < anchors.length; i++)
		for (let j = 0; j < i; j++)
			if (plausible(anchors[j], anchors[i]) && best[j] + 1 > best[i]) {
				best[i] = best[j] + 1;
				prevOf[i] = j;
			}
	let end = best.indexOf(Math.max(...best, 0));
	const trusted: [number, number][] = [];
	for (let i = end; i >= 0; i = prevOf[i]) trusted.unshift(anchors[i]);
	if (trusted.length < 2) trusted.length = 0;
	if (process.env.KB_DEBUG) console.log(`${dir}\n  anchors ${JSON.stringify(anchors)}\n  chain ${JSON.stringify(trusted)}`);
	// a scan of spreads shows two printed pages per leaf: the chain then climbs by two per
	// leaf, and the leaf is labelled with both pages, the number read placing the pair
	const steps = trusted.slice(1).map((a, i) => (a[1] - trusted[i][1]) / (a[0] - trusted[i][0]));
	const spread = steps.length >= 3 && steps.filter((s) => s === 2).length > steps.length / 2;
	const map: Record<string, number | string> = {};
	for (const [n, p] of trusted) {
		const side = sides.get(n);
		map[n] = spread && side === 'left' ? `${p}–${p + 1}` : spread && side === 'right' ? `${p - 1}–${p}` : p;
	}
	return map;
}

let n = 0;
const sourceMapPath = join(ROOT, '.grammar-build/qa/source-map.json');
const sourceMap = existsSync(sourceMapPath) ? (JSON.parse(readFileSync(sourceMapPath, 'utf8')) as Record<string, SourceMapEntry>) : {};
for (const [key, entry] of Object.entries(sourceMap)) {
	const dir = join(BOOKS_ROOT, entry.dir);
	if (!existsSync(dir)) {
		console.warn(`missing OCR dir for ${key}: ${entry.dir}`);
		continue;
	}
	const engine = basename(entry.dir).replace(/^openrouter_google_/, '');
	const leaves = leavesOf(dir);
	const mapPath = join(ROOT, '.grammar-build/qa/page-map', `${key}.json`);
	const pagemap = existsSync(mapPath)
		? ((JSON.parse(readFileSync(mapPath, 'utf8')) as { fileToPrinted?: Record<string, number> }).fileToPrinted ?? {})
		: footerMap(dir, leaves);
	writeJson(
		join(KB, 'assets', `${key}.json`),
		{
			id: `asset:${key}@${engine}`,
			source: `source:${key}`,
			kind: 'scan-ocr',
			dir: entry.dir,
			engine,
			leaves: leaves.length,
			pagemap,
			calibration: { offset: entry.offset, calibrated: entry.calibrated, note: entry.note ?? '', pagemap_method: existsSync(mapPath) ? 'page footers (scripts/qa/footer-map.ts)' : 'page footers (import-assets.ts)' }
		},
		true
	);
	n++;
	console.log(`${key}: ${leaves.length} leaves, ${Object.keys(pagemap).length} mapped, engine ${engine}`);
}

const assetMap = readJsonl<{ key: string; dir: string; method: string }>(join(KB, 'registries/asset-map.jsonl'));
for (const row of assetMap) {
	if (existsSync(join(KB, 'assets', `${row.key}.json`))) continue;
	const base = join(BOOKS_ROOT, row.dir);
	if (!existsSync(base)) {
		console.warn(`missing OCR dir for ${row.key}: ${row.dir}`);
		continue;
	}
	const engines = readdirSync(base).filter((f) => f.startsWith('openrouter_') || f === 'pdftotext');
	const engineDir = engines.find((e) => e.includes('gemini')) ?? engines[0];
	if (!engineDir) {
		console.warn(`no OCR engine dir for ${row.key}`);
		continue;
	}
	const dir = join(base, engineDir);
	let leaves = leavesOf(dir);
	let assetDir = `${row.dir}/${engineDir}`;
	let root: 'books' | 'kb' = 'books';
	let engine = engineDir.replace(/^openrouter_google_/, '');
	let pagemap: Record<string, number | string> = {};
	let note = `matched by ${row.method}`;
	if (leaves.length) {
		pagemap = footerMap(dir, leaves);
	} else if (existsSync(join(dir, 'all.txt'))) {
		// a text dump without page breaks: cut into pieces of about 3,000 characters at
		// paragraph boundaries, kept under kb/, so that anchors still resolve to a leaf
		const text = readFileSync(join(dir, 'all.txt'), 'utf8');
		const pieces: string[] = [];
		let cur = '';
		for (const para of text.split(/\n\s*\n/)) {
			if (cur.length + para.length > 3000 && cur) {
				pieces.push(cur);
				cur = '';
			}
			cur += (cur ? '\n\n' : '') + para;
		}
		if (cur.trim()) pieces.push(cur);
		const outDir = join(KB, 'imports/ocr', row.key);
		mkdirSync(outDir, { recursive: true });
		pieces.forEach((piece, i) => writeFileSync(join(outDir, `page-${String(i + 1).padStart(4, '0')}.txt`), piece.trim() + '\n'));
		leaves = pieces.map((_, i) => i + 1);
		assetDir = `imports/ocr/${row.key}`;
		root = 'kb';
		engine = 'pdftotext-pieces';
		note += '; the dump has no page breaks, so leaves are pieces of about 3,000 characters and carry no printed page';
	} else {
		console.warn(`no pages for ${row.key} in ${engineDir}`);
		continue;
	}
	writeJson(
		join(KB, 'assets', `${row.key}.json`),
		{
			id: `asset:${row.key}@${engine}`,
			source: `source:${row.key}`,
			kind: 'scan-ocr',
			root,
			dir: assetDir,
			engine,
			leaves: leaves.length,
			pagemap,
			calibration: { offset: null, calibrated: false, note, pagemap_method: root === 'kb' ? 'none (no page breaks in the dump)' : 'page headers and footers (import-assets.ts)' }
		},
		true
	);
	n++;
	console.log(`${row.key}: ${leaves.length} leaves, ${Object.keys(pagemap).length} mapped, engine ${engine} (article)`);
}
console.log(`${n} assets`);
