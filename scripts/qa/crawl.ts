/**
 * crawl.ts — page-render smoke test for every chapter route.
 *
 * The only way to catch what SSR throws (bad gloss/cite → request-time 500,
 * invisible to `bun run check` and to `vite build`). Checks HTTP 200 AND
 * content sanity: the chapter title is present and at least one section
 * rendered — a 200 error-shell must fail.
 *
 * Usage: bun scripts/qa/crawl.ts [--base http://localhost:5179] [--only slug,…]
 */

import { readFileSync } from 'fs';
import { join } from 'path';

const ROOT = join(import.meta.dir, '../..');
const argv = process.argv.slice(2);
const base = argv.includes('--base') ? argv[argv.indexOf('--base') + 1] : 'http://localhost:5179';
const only = argv.includes('--only') ? argv[argv.indexOf('--only') + 1].split(',') : null;

const toc = JSON.parse(readFileSync(join(ROOT, 'toc-final.json'), 'utf8'));
let chapters: { slug: string; title: string }[] = toc.parts.flatMap((p: any) =>
	p.chapters.map((c: any) => ({ slug: c.slug, title: c.title })),
);
if (only) chapters = chapters.filter((c) => only.includes(c.slug));

let failed = 0;
const CONC = 8;
const queue = [...chapters];

async function probe(c: { slug: string; title: string }) {
	const url = `${base}/en/grammar/${c.slug}`;
	try {
		const res = await fetch(url);
		if (res.status !== 200) {
			failed++;
			console.error(`✗ ${c.slug}: HTTP ${res.status}`);
			return;
		}
		const html = await res.text();
		// content sanity: title words present + a rendered section heading
		const titleStem = c.title.split(/[:—(]/)[0].trim().slice(0, 40);
		if (!html.includes(titleStem.slice(0, 25))) {
			failed++;
			console.error(`✗ ${c.slug}: 200 but title stem missing ("${titleStem.slice(0, 25)}")`);
		} else if (!/<h[23]/.test(html)) {
			failed++;
			console.error(`✗ ${c.slug}: 200 but no section headings rendered`);
		}
	} catch (e: any) {
		failed++;
		console.error(`✗ ${c.slug}: ${e.message}`);
	}
}

await Promise.all(
	Array.from({ length: CONC }, async () => {
		while (queue.length) await probe(queue.shift()!);
	}),
);

console.log(`crawl: ${chapters.length - failed}/${chapters.length} ok (${base})`);
if (failed) process.exit(1);
