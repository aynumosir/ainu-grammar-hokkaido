import assert from 'node:assert/strict';
import { Server } from '../.svelte-kit/output/server/index.js';
import { manifest } from '../.svelte-kit/output/server/manifest.js';
import { readdirSync } from 'node:fs';
import { sitemapPaths } from '../src/lib/grammar/sitemap-paths.ts';

const origin = 'https://grammar.aynu.org';
const server = new Server(manifest);
await server.init({ env: {} });
const get = (path) =>
	server.respond(new Request(new URL(path, origin)), { getClientAddress: () => '127.0.0.1' });
const response = await get('/sitemap.xml');
assert.equal(response.status, 200);
assert.equal(response.headers.get('content-type'), 'application/xml; charset=utf-8');
assert.equal(response.headers.get('cache-control'), 'public, max-age=3600');
const xml = await response.text();
const paths = sitemapPaths(
	readdirSync(new URL('../src/lib/grammar/chapters/', import.meta.url)).map(
		(name) => `/src/lib/grammar/chapters/${name}`
	)
);
const expected = paths.map((path) => `${origin}${path}`);
const locations = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
assert.deepEqual([...locations].sort(), expected.sort());
assert.equal(new Set(locations).size, locations.length);
assert.ok(!xml.includes('hreflang'));
for (const location of locations) {
	const page = await get(location);
	assert.equal(page.status, 200, location);
	assert.match(page.headers.get('content-type'), /text\/html/);
	const html = await page.text();
	assert.equal(html.match(/<html[^>]*\blang="([^"]+)"/)[1], 'en', location);
	assert.equal(html.match(/<link rel="canonical" href="([^"]+)"/)[1], location, location);
	assert.ok(!/<link rel="alternate" hreflang=/.test(html), location);
}
for (const path of ['/sitemap.xml?test=1']) {
	const redirect = await get(path);
	assert.equal(redirect.status, 308);
	assert.equal(redirect.headers.get('location'), '/sitemap.xml');
}
for (const [path, target] of [
	['/en', '/'],
	['/ja/', '/'],
	['/en/grammar/references', '/grammar/references'],
	['/ain-Kana/grammar/references?x=1', '/grammar/references?x=1'],
	['/ja/sitemap.xml', '/sitemap.xml']
]) {
	const redirect = await get(path);
	assert.equal(redirect.status, 301, path);
	assert.equal(redirect.headers.get('location'), target, path);
}
const robots = await get('/robots.txt');
assert.equal(robots.status, 200);
assert.match(robots.headers.get('content-type'), /text\/plain/);
assert.ok((await robots.text()).includes(`Sitemap: ${origin}/sitemap.xml`));
console.log(
	`Sitemap integration passed: ${locations.length} URLs, ${Buffer.byteLength(xml)} bytes; every URL returns 200.`
);
