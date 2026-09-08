import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync } from 'node:fs';
import { sitemapResponse, sitemapXml } from './sitemap.ts';
import { sitemapPaths } from './grammar/sitemap-paths.ts';
import { chapters } from './grammar/toc.ts';

const alternates = [
	{ hreflang: 'en', href: 'https://example.org/en?a=1&b=2' },
	{ hreflang: 'ja', href: 'https://example.org/ja?a=1&b=2' },
	{ hreflang: 'x-default', href: 'https://example.org/en?a=1&b=2' }
];

describe('sitemap XML', () => {
	it('emits every locale with the same alternate cluster and escapes XML', () => {
		const xml = sitemapXml([alternates]);
		assert.equal((xml.match(/<url>/g) ?? []).length, 2);
		assert.equal((xml.match(/<xhtml:link /g) ?? []).length, 6);
		assert.equal((xml.match(/hreflang="x-default"/g) ?? []).length, 2);
		assert.ok(xml.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'));
		assert.ok(xml.includes('?a=1&amp;b=2'));
		assert.ok(!xml.includes('<lastmod>'));
	});

	it('rejects empty and oversized URL inventories', () => {
		assert.throws(() => sitemapXml([]), /URL count/);
		assert.throws(() => sitemapXml([[alternates[2]]]), /URL count/);
		assert.throws(() => sitemapXml(Array(25_001).fill(alternates)), /URL count/);
	});

	it('serves XML and canonicalizes query variants', () => {
		const response = sitemapResponse(
			sitemapXml([alternates]),
			new URL('https://preview.test/sitemap.xml')
		);
		assert.equal(response.status, 200);
		assert.equal(response.headers.get('Content-Type'), 'application/xml; charset=utf-8');
		assert.match(response.headers.get('Cache-Control'), /public/);
		const redirect = sitemapResponse('', new URL('https://preview.test/sitemap.xml?q=1'));
		assert.equal(redirect.status, 308);
		assert.equal(redirect.headers.get('Location'), '/sitemap.xml');
	});
});

describe('grammar sitemap inventory', () => {
	it('includes only chapters with route modules and the four static pages', () => {
		const modulePaths = readdirSync(new URL('./grammar/chapters/', import.meta.url))
			.filter((name) => name.endsWith('.svelte'))
			.map((name) => `/src/lib/grammar/chapters/${name}`);
		const paths = sitemapPaths(modulePaths);
		const published = chapters.filter(({ slug }) =>
			modulePaths.includes(`/src/lib/grammar/chapters/${slug}.svelte`)
		);
		assert.equal(paths.length, published.length + 4);
		assert.equal(new Set(paths).size, paths.length);
		assert.deepEqual(sitemapPaths([]), [
			'/',
			'/grammar',
			'/grammar/abbreviations',
			'/grammar/references'
		]);
		assert.deepEqual(
			sitemapPaths([`/src/lib/grammar/chapters/${chapters[0].slug}.svelte`]).slice(4),
			[`/grammar/${chapters[0].slug}`]
		);
	});
});
