import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { SourcePage } from '$lib/kb/types';
import { kbJson } from '$lib/kb/load';

export const load: PageServerLoad = async ({ fetch, url, platform, params }) => {
	if (!/^[a-z0-9-]+$/.test(params.key)) error(404, 'No such source');
	const page = await kbJson<SourcePage>(`/kb/sources/${params.key}.json`, url, fetch, platform);
	if (!page) error(404, 'No such source');
	return { page };
};
