// Screenshots of the knowledge-base pages in light and dark.
// Usage: dev server running, then `BASE=http://localhost:5181 OUT=/path bun scripts/kb/shoot.ts`
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const BASE = process.env.BASE ?? 'http://localhost:5173';
const OUT = process.env.OUT ?? '/tmp/kb-shots';
await mkdir(OUT, { recursive: true });

const routes = [
	{ name: 'kb-index', path: '/en/kb' },
	{ name: 'kb-graph', path: '/en/kb/graph', settle: 6000 },
	{ name: 'kb-topic', path: '/en/kb/topics/applicative-e', settle: 4500 },
	{ name: 'kb-source', path: '/en/kb/sources/nakagawa2024' },
	{ name: 'kb-coverage', path: '/en/kb/coverage' },
	{ name: 'kb-disagreements', path: '/en/kb/disagreements' },
	{ name: 'kb-read', path: '/en/kb/read/applicative-e' },
	{ name: 'kb-read-narrative', path: '/en/kb/read/imperative-and-prohibitive' },
	{ name: 'kb-topic-claims', path: '/en/kb/topics/constituent-order-head-final', settle: 4500 }
];

// ONLY=kb-index,kb-graph limits the run to those routes
const only = (process.env.ONLY ?? '').split(',').filter(Boolean);
const browser = await chromium.launch();
try {
	for (const scheme of ['light', 'dark'] as const) {
		const ctx = await browser.newContext({ colorScheme: scheme, viewport: { width: 1360, height: 900 }, deviceScaleFactor: 1 });
		const page = await ctx.newPage();
		page.on('pageerror', (e) => console.error(`pageerror ${scheme}: ${e.message}`));
		for (const r of routes) {
			if (only.length && !only.includes(r.name)) continue;
			await page.goto(BASE + r.path, { waitUntil: 'load', timeout: 60000 });
			await page.waitForTimeout(r.settle ?? 800);
			await page.screenshot({ path: `${OUT}/${r.name}-${scheme}.png` });
			if (r.name === 'kb-topic' || r.name === 'kb-source') await page.screenshot({ path: `${OUT}/${r.name}-${scheme}-full.png`, fullPage: true, timeout: 120000 });
			console.log(`shot ${r.name}-${scheme}`);
		}
		await ctx.close();
	}
} finally {
	await browser.close();
}
console.log('shots written to', OUT);
