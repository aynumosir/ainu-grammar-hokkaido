/**
 * retrieve.ts — resolve `citeKey:pages` to local OCR page text.
 *
 * Source map lives in .grammar-build/qa/source-map.json:
 *   { "nakagawa2024": { "dir": "books/2024_Nakagawa/….ocr/openrouter_google_gemini-3.5-flash",
 *                       "offset": 4, "calibrated": true } }
 * ocrPage = printedPage + offset. Use calibrate-offsets.ts to measure offsets;
 * an uncalibrated source must never produce a "contradicted" verdict (P0 rule:
 * bad page maps manufacture false findings).
 */

import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

const ROOT = join(import.meta.dir, '../..');
export const BOOKS_ROOT = join(ROOT, '../ainu-grammar');
const MAP_PATH = join(ROOT, '.grammar-build/qa/source-map.json');

export interface SourceMapEntry {
	dir: string; // relative to ../ainu-grammar
	offset: number; // ocrPage = printedPage + offset
	calibrated: boolean;
	note?: string;
}

export function loadSourceMap(): Record<string, SourceMapEntry> {
	return existsSync(MAP_PATH) ? JSON.parse(readFileSync(MAP_PATH, 'utf8')) : {};
}

/** "175", "62, 66", "170–173", "314-319" → list of printed page numbers (bounded spans). */
export function parsePages(spec: string): number[] {
	const out = new Set<number>();
	for (const part of spec.split(/[,;]/)) {
		const m = part.trim().match(/^(\d+)\s*[–—-]\s*(\d+)$/);
		if (m) {
			const [a, b] = [+m[1], +m[2]];
			for (let p = a; p <= Math.min(b, a + 30); p++) out.add(p);
		} else {
			const n = part.trim().match(/^\d+$/);
			if (n) out.add(+n[0]);
		}
	}
	return [...out].sort((a, b) => a - b);
}

export function pageFile(entry: SourceMapEntry, printedPage: number): string {
	return join(BOOKS_ROOT, entry.dir, `page-${String(printedPage + entry.offset).padStart(4, '0')}.txt`);
}

/** Fetch the OCR text for cited printed pages (±context). Returns null if unmapped. */
export function retrieve(
	key: string,
	pagesSpec: string,
	context = 1,
): { pages: { printed: number; text: string }[]; calibrated: boolean } | null {
	const map = loadSourceMap();
	const entry = map[key];
	if (!entry) return null;
	const printed = parsePages(pagesSpec);
	const want = new Set<number>();
	for (const p of printed) for (let d = -context; d <= context; d++) want.add(p + d);
	const pages: { printed: number; text: string }[] = [];
	for (const p of [...want].sort((a, b) => a - b)) {
		const f = pageFile(entry, p);
		if (existsSync(f)) pages.push({ printed: p, text: readFileSync(f, 'utf8') });
	}
	return { pages, calibrated: entry.calibrated };
}
