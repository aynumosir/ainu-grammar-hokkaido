import type { RequestHandler } from './$types';
import { CANONICAL_HOSTNAME } from '$lib/consts';
import { sitemapPaths } from '$lib/grammar/sitemap-paths';
import { sitemapResponse, sitemapXml } from '$lib/sitemap';

const modules = import.meta.glob('$lib/grammar/chapters/*.svelte');
const body = sitemapXml(
	sitemapPaths(Object.keys(modules)).map((path) => new URL(path, CANONICAL_HOSTNAME).href)
);

export const GET: RequestHandler = ({ url }) => sitemapResponse(body, url);
