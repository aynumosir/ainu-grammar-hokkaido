import type { RequestHandler } from './$types';
import { CANONICAL_HOSTNAME } from '$lib/consts';

export const GET: RequestHandler = ({ url }) => {
	if (url.search || url.pathname !== '/robots.txt') {
		return new Response(null, { status: 308, headers: { Location: '/robots.txt' } });
	}
	return new Response(
		`User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', CANONICAL_HOSTNAME).href}\n`,
		{
			headers: {
				'Content-Type': 'text/plain; charset=utf-8',
				'Cache-Control': 'public, max-age=3600'
			}
		}
	);
};
