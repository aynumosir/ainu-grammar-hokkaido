/**
 * verify-deploy.ts — confirm that a deployed site serves this build.
 *
 *   bun scripts/verify-deploy.ts [origin]      (default https://grammar.aynu.org)
 *
 * Run after `wrangler deploy`, from the checkout that was built. The compiled
 * knowledge-base index must match the local static/kb/index.json byte for byte,
 * and the main pages must answer 200. A deploy from a checkout without the
 * knowledge base, or one that the edge has not picked up, fails here.
 * Retries for up to two minutes while the new version propagates.
 */
import { readFileSync } from 'node:fs';

const origin = process.argv[2] ?? 'https://grammar.aynu.org';
const local = readFileSync('static/kb/index.json', 'utf8');
const index = JSON.parse(local) as { parts: { chapters: { slug: string }[] }[] };
const slug = index.parts.flatMap((p) => p.chapters)[0]?.slug;
const pages = ['/', '/grammar', '/kb', '/kb/graph', '/kb/coverage', '/kb/disagreements'];
if (slug) pages.push(`/kb/topics/${slug}`, `/kb/read/${slug}`);

async function problems(): Promise<string[]> {
	const found: string[] = [];
	const res = await fetch(new URL('/kb/index.json', origin), { cache: 'no-store' });
	if (!res.ok) found.push(`/kb/index.json: ${res.status}`);
	else if ((await res.text()) !== local) found.push('/kb/index.json differs from this build');
	for (const path of pages) {
		const page = await fetch(new URL(path, origin), { redirect: 'manual' });
		if (page.status !== 200) found.push(`${path}: ${page.status}`);
	}
	return found;
}

const deadline = Date.now() + 120_000;
let found = await problems();
while (found.length && Date.now() < deadline) {
	await new Promise((r) => setTimeout(r, 10_000));
	found = await problems();
}
if (found.length) {
	console.error(`${origin} does not serve this build:\n  ${found.join('\n  ')}`);
	process.exit(1);
}
console.log(`${origin} serves this build (${pages.length} pages and the knowledge-base index checked)`);
