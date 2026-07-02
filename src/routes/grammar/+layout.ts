import type { LayoutLoad } from './$types';

// The grammar is server-rendered (not prerendered) so every locale-prefixed URL
// — /en/grammar/…, /ja/grammar/…, etc., which the language switcher links to —
// actually resolves instead of 404ing. The chapter content is build-time
// constant, so cache the rendered HTML hard at the CDN edge: this gives
// prerender-like performance while keeping all locales valid.
export const load: LayoutLoad = ({ setHeaders }) => {
	setHeaders({
		'cache-control': 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800'
	});
};
