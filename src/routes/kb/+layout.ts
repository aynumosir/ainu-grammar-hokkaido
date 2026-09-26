import type { LayoutLoad } from './$types';

// The knowledge base is rebuilt often while it grows: short edge cache, long stale window.
export const load: LayoutLoad = ({ setHeaders }) => {
	setHeaders({
		'cache-control': 'public, max-age=0, s-maxage=600, stale-while-revalidate=86400'
	});
};
