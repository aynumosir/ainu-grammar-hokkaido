/**
 * fix-locators.ts — apply machine-verified locator corrections from
 * .grammar-build/qa/locator-verdicts.json (verdict=citation-defect only).
 *
 * Rewrites `key:oldPage` → `key:newPage` inside the <Ex> cite attribute on the
 * recorded line only, and only when the page section is exactly the single
 * cited number (multi-page cites are skipped for manual review). not-found
 * verdicts are never touched. Idempotent. Run verify-locators.ts afterwards.
 */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const ROOT = join(import.meta.dir, '../..');
const CHAPTER_DIR = join(ROOT, 'src/lib/grammar/chapters');
const verdicts = JSON.parse(readFileSync(join(ROOT, '.grammar-build/qa/locator-verdicts.json'), 'utf8'));

const byChapter = new Map<string, any[]>();
for (const v of verdicts) {
	if (v.verdict !== 'citation-defect' || !v.actualPage) continue;
	if (!byChapter.has(v.chapter)) byChapter.set(v.chapter, []);
	byChapter.get(v.chapter)!.push(v);
}

let applied = 0;
let skipped = 0;

for (const [slug, list] of byChapter) {
	const path = join(CHAPTER_DIR, `${slug}.svelte`);
	const lines = readFileSync(path, 'utf8').split('\n');
	// find the cite attr on/near the recorded tag-start line (attrs may span lines)
	for (const v of list.sort((a: any, b: any) => b.line - a.line)) {
		let done = false;
		for (let ln = v.line - 1; ln < Math.min(v.line + 14, lines.length); ln++) {
			const re = new RegExp(`(cite="[^"]*${v.key}):${v.citedPage}(["\\s;,])`);
			if (re.test(lines[ln])) {
				lines[ln] = lines[ln].replace(re, `$1:${v.actualPage}$2`);
				applied++;
				done = true;
				break;
			}
		}
		if (!done) {
			skipped++;
			console.log(`skip (no single-page cite match): ${slug}:${v.line} ${v.key} ${v.citedPage}→${v.actualPage}`);
		}
	}
	writeFileSync(path, lines.join('\n'));
}

console.log(`locator fixes: ${applied} applied, ${skipped} skipped for manual review`);
