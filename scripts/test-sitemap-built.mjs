import assert from 'node:assert/strict';
import { Server } from '../.svelte-kit/output/server/index.js';
import { manifest } from '../.svelte-kit/output/server/manifest.js';
import { readdirSync } from 'node:fs';
import { sitemapPaths } from '../src/lib/grammar/sitemap-paths.ts';

const origin = 'https://grammar.aynu.org';
const server = new Server(manifest);
await server.init({ env: {} });
const get = (path) =>
	server.respond(
		new Request(new URL(path, origin), {
			headers: { 'accept-language': 'ja', cookie: 'paraglide_lang=ja' }
		}),
		{ getClientAddress: () => '127.0.0.1' }
	);
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
const locales = ['en', 'ja', 'ain-Latn', 'ain-Kana'];
const expected = paths.flatMap((path) =>
	locales.map((locale) => `${origin}/${locale}${path === '/' ? '' : path}`)
);
const locations = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
assert.deepEqual([...locations].sort(), expected.sort());
assert.equal(new Set(locations).size, locations.length);
for (const block of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
	const location = block[1].match(/<loc>(.*?)<\/loc>/)[1];
	const path = new URL(location).pathname.split('/').slice(2).join('/');
	const href = (locale) => `${origin}/${locale}${path ? `/${path}` : ''}`;
	const actual = [
		...block[1].matchAll(/<xhtml:link rel="alternate" hreflang="(.*?)" href="(.*?)" \/>/g)
	].map((match) => [match[1], match[2]]);
	assert.deepEqual(
		actual,
		[...locales.map((locale) => [locale, href(locale)]), ['x-default', href('en')]],
		location
	);
}
for (const location of locations) {
	const page = await get(location);
	assert.equal(page.status, 200, location);
	assert.match(page.headers.get('content-type'), /text\/html/);
	const html = await page.text();
	const locale = new URL(location).pathname.split('/')[1];
	assert.equal(html.match(/<html[^>]*\blang="([^"]+)"/)[1], locale, location);
	assert.equal(html.match(/<link rel="canonical" href="([^"]+)"/)[1], location, location);
}
for (const path of ['/sitemap.xml?test=1', '/ja/sitemap.xml']) {
	const redirect = await get(path);
	assert.equal(redirect.status, 308);
	assert.equal(redirect.headers.get('location'), '/sitemap.xml');
}
const robots = await get('/robots.txt');
assert.equal(robots.status, 200);
assert.match(robots.headers.get('content-type'), /text\/plain/);
assert.ok((await robots.text()).includes(`Sitemap: ${origin}/sitemap.xml`));
console.log(
	`Sitemap integration passed: ${locations.length} URLs, ${Buffer.byteLength(xml)} bytes; every URL returns 200.`
);
