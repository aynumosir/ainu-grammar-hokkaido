/**
 * verify-locators.ts — corpus-wide, LLM-free verification of example locators.
 *
 * For every <Ex place="… ex. N" cite="key:P"> where `key` has a calibrated
 * OCR map: check that numbered example N actually begins on printed page P
 * (allowing ±1 for span/spillover). When it doesn't, search pages P±6 for the
 * true location and propose the corrected locator.
 *
 * Output: .grammar-build/qa/locator-verdicts.json + console summary.
 */

import { readdirSync, readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { loadSourceMap, pageFile } from './retrieve';

const ROOT = join(import.meta.dir, '../..');
const CHAPTER_DIR = join(ROOT, 'src/lib/grammar/chapters');

function findTags(src: string, name: string) {
	const re = new RegExp(`<${name}\\b((?:[^>"]|"[^"]*")*)>`, 'g');
	const out: { attrs: Record<string, string>; line: number }[] = [];
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

const map = loadSourceMap();
const pageCache = new Map<string, string>();
function pageText(key: string, printed: number): string | null {
	const id = `${key}:${printed}`;
	if (pageCache.has(id)) return pageCache.get(id)!;
	const f = pageFile(map[key], printed);
	const t = existsSync(f) ? readFileSync(f, 'utf8') : null;
	if (t !== null) pageCache.set(id, t);
	return t;
}

/** Does numbered example N start on this page? Match "N)" / "N）" / "(N)" / "Na)" at line start. */
function hasExample(text: string, n: number): boolean {
	return new RegExp(`(?:^|\\n)\\s*[（(]?${n}[a-z]?[）)]`, 'm').test(text);
}

interface Verdict {
	chapter: string;
	line: number;
	key: string;
	citedPage: number;
	ex: number;
	verdict: 'supported' | 'citation-defect' | 'not-found';
	actualPage?: number;
}
const verdicts: Verdict[] = [];

for (const f of readdirSync(CHAPTER_DIR).filter((f) => f.endsWith('.svelte'))) {
	const slug = f.replace(/\.svelte$/, '');
	const src = readFileSync(join(CHAPTER_DIR, f), 'utf8');
	for (const t of findTags(src, 'Ex')) {
		const { cite, place } = t.attrs;
		if (!cite || !place) continue;
		const exM = place.match(/ex\.?\s*(\d+)/i);
		if (!exM) continue;
		const first = cite.split(';')[0].trim();
		const key = first.split(':')[0].trim();
		const pageM = first.match(/:\s*(\d+)/);
		if (!pageM || !map[key]?.calibrated) continue;
		const [ex, cited] = [+exM[1], +pageM[1]];

		let verdict: Verdict['verdict'] = 'not-found';
		let actualPage: number | undefined;
		for (const d of [0, 1, -1]) {
			const txt = pageText(key, cited + d);
			if (txt && hasExample(txt, ex)) {
				verdict = d === 0 ? 'supported' : 'citation-defect';
				actualPage = cited + d;
				break;
			}
		}
		if (verdict === 'not-found') {
			for (let d = -6; d <= 6; d++) {
				if (Math.abs(d) <= 1) continue;
				const txt = pageText(key, cited + d);
				if (txt && hasExample(txt, ex)) {
					verdict = 'citation-defect';
					actualPage = cited + d;
					break;
				}
			}
		}
		verdicts.push({ chapter: slug, line: t.line, key, citedPage: cited, ex, verdict, actualPage });
	}
}

const bad = verdicts.filter((v) => v.verdict !== 'supported');
writeFileSync(join(ROOT, '.grammar-build/qa/locator-verdicts.json'), JSON.stringify(verdicts, null, 1));

const n = verdicts.length;
console.log(`locator check: ${n} (source, ex-number, page) triples against calibrated OCR`);
console.log(`  supported: ${n - bad.length}`);
for (const v of bad.sort((a, b) => a.chapter.localeCompare(b.chapter))) {
	console.log(
		`  ✗ ${v.chapter}:${v.line}  ${v.key} ex.${v.ex} cited p.${v.citedPage} → ${v.actualPage ? `actually p.${v.actualPage}` : 'NOT FOUND ±6pp'}`,
	);
}
