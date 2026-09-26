import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { CoveragePage } from '$lib/kb/types';
import { kbJson } from '$lib/kb/load';

export const load: PageServerLoad = async ({ fetch, url, platform }) => {
	const coverage = await kbJson<CoveragePage>('/kb/coverage.json', url, fetch, platform);
	if (!coverage) error(404, 'Coverage has not been built');
	return { coverage };
};
