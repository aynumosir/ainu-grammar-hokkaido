/**
 * verify-deploy.ts — confirm that a deployed site serves this build.
 *
 *   bun scripts/verify-deploy.ts [origin]      (default https://grammar.aynu.org)
 *
 * Run after `wrangler deploy`, from the checkout that was built. The compiled
 * knowledge-base index must match the local static/kb/index.json byte for byte,
 * the main pages must answer 200, and every script and stylesheet a knowledge-base
 * page references must load. A page cached before the deploy points at bundles
 * the deploy removed and cannot hydrate. The /kb layout caches pages for 600 s,
 * so the check retries for twelve minutes before it fails.
 */
import { readFileSync } from 'node:fs';

const origin = process.argv[2] ?? 'https://grammar.aynu.org';
const local = readFileSync('static/kb/index.json', 'utf8');
const index = JSON.parse(local) as {
	parts: { chapters: { slug: string }[] }[];
	sources: { key: string; claims: number }[];
};
const slug = index.parts.flatMap((p) => p.chapters)[0]?.slug;
// The source with the most claims has the largest source page.
const source = [...index.sources].sort((a, b) => b.claims - a.claims)[0]?.key;
const kbPages = ['/kb', '/kb/graph', '/kb/coverage', '/kb/disagreements'];
if (slug) kbPages.push(`/kb/topics/${slug}`, `/kb/read/${slug}`);
if (source) kbPages.push(`/kb/sources/${source}`);
const pages = ['/', '/grammar', ...kbPages];

async function problems(): Promise<string[]> {
	const found: string[] = [];
	const res = await fetch(new URL('/kb/index.json', origin), { cache: 'no-store' });
	if (!res.ok) found.push(`/kb/index.json: ${res.status}`);
	else if ((await res.text()) !== local) found.push('/kb/index.json differs from this build');
	for (const path of pages) {
		const page = await fetch(new URL(path, origin), { redirect: 'manual' });
		if (page.status !== 200) {
			found.push(`${path}: ${page.status}`);
			continue;
		}
		if (!kbPages.includes(path)) continue;
		const html = await page.text();
		for (const ref of new Set(html.match(/\/_app\/immutable\/[^"'\s)]+\.(?:js|css)/g) ?? [])) {
			const asset = await fetch(new URL(ref, origin), { method: 'HEAD' });
			if (!asset.ok) found.push(`${path} references ${ref}: ${asset.status}`);
		}
	}
	return found;
}

const deadline = Date.now() + 720_000;
let found = await problems();
while (found.length && Date.now() < deadline) {
	await new Promise((r) => setTimeout(r, 30_000));
	found = await problems();
}
if (found.length) {
	console.error(`${origin} does not serve this build:\n  ${found.join('\n  ')}`);
	process.exit(1);
}
console.log(`${origin} serves this build (${pages.length} pages and the knowledge-base index checked)`);
