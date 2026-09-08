import type { RequestHandler } from './$types';
import { CANONICAL_HOSTNAME } from '$lib/consts';
import { i18n } from '$lib/i18n';
import { availableLanguageTags } from '$lib/paraglide/runtime';
import { sitemapPaths } from '$lib/grammar/sitemap-paths';
import { sitemapResponse, sitemapXml } from '$lib/sitemap';

const localizedUrl = (path: string, tag: (typeof availableLanguageTags)[number]) =>
	new URL(i18n.resolveRoute(path, tag).replace(/\/$/, ''), CANONICAL_HOSTNAME).href;
const modules = import.meta.glob('$lib/grammar/chapters/*.svelte');
const body = sitemapXml(
	sitemapPaths(Object.keys(modules)).map((path) => [
		...availableLanguageTags.map((tag) => ({
			hreflang: tag,
			href: localizedUrl(path, tag)
		})),
		{
			hreflang: 'x-default',
			href: localizedUrl(path, 'en')
		}
	])
);

export const GET: RequestHandler = ({ url }) => sitemapResponse(body, url);
