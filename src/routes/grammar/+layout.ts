import type { LayoutLoad } from './$types';

// The grammar is server-rendered (not prerendered). The chapter content is
// build-time constant, so cache the rendered HTML hard at the CDN edge.
export const load: LayoutLoad = ({ setHeaders }) => {
	setHeaders({
		'cache-control': 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800'
	});
};
