// Browser screenshot harness for visual design iteration.
// Usage: start the dev server (`bun run dev`), then `bun scripts/shoot.ts`.
// Captures the key pages in light + dark to the scratch shots dir.
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const BASE = process.env.BASE ?? 'http://localhost:5173';
const OUT =
	process.env.OUT ??
	'/tmp/claude-1000/-home-mkpoli-projects-Ainu-ainu-grammar-hokkaido/2a128b0a-47e2-413c-bd19-59b43f62314c/scratchpad/shots';

await mkdir(OUT, { recursive: true });

const routes = [
	{ name: 'home', path: '/en' },
	{ name: 'grammar-toc', path: '/en/grammar' },
	{ name: 'chapter', path: '/en/grammar/ruwe-ne-inferential' }
];

const browser = await chromium.launch();
try {
	for (const scheme of ['light', 'dark'] as const) {
		const ctx = await browser.newContext({
			colorScheme: scheme,
			viewport: { width: 1280, height: 900 },
			deviceScaleFactor: 1
		});
		const page = await ctx.newPage();
		for (const r of routes) {
			await page.goto(BASE + r.path, { waitUntil: 'load', timeout: 45000 });
			await page.waitForTimeout(700); // let fonts + layout settle
			// top-of-page shot (navbar + hero) and a full-page shot
			await page.screenshot({ path: `${OUT}/${r.name}-${scheme}-top.png` });
			await page.screenshot({ path: `${OUT}/${r.name}-${scheme}-full.png`, fullPage: true });
			console.log(`shot ${r.name}-${scheme}`);
		}
		await ctx.close();
	}
} finally {
	await browser.close();
}
console.log('shots written to', OUT);
