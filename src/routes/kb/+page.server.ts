import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { KbIndex } from '$lib/kb/types';
import { kbJson } from '$lib/kb/load';

export const load: PageServerLoad = async ({ fetch, url, platform }) => {
	const index = await kbJson<KbIndex>('/kb/index.json', url, fetch, platform);
	if (!index) error(500, 'The knowledge base has not been built');
	return { index };
};
