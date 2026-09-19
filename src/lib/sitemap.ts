const escapeXml = (value: string) =>
	value.replace(/[<>&"']/g, (character) => {
		return { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' }[character]!;
	});

export function sitemapXml(urls: readonly string[]): string {
	if (urls.length === 0 || urls.length > 50_000) throw new Error('Invalid sitemap URL count');
	const entries = urls.map((href) => `\t<url>\n\t\t<loc>${escapeXml(href)}</loc>\n\t</url>`);
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`;
	if (new TextEncoder().encode(body).byteLength > 50 * 1024 * 1024) {
		throw new Error('Sitemap exceeds the uncompressed size limit');
	}
	return body;
}

export function sitemapResponse(body: string, url: URL): Response {
	if (url.search || url.pathname !== '/sitemap.xml') {
		return new Response(null, { status: 308, headers: { Location: '/sitemap.xml' } });
	}
	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600'
		}
	});
}
