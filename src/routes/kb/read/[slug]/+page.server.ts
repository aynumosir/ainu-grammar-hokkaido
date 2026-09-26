import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { TopicPage } from '$lib/kb/types';
import { kbJson } from '$lib/kb/load';

export const load: PageServerLoad = async ({ fetch, url, platform, params }) => {
	if (!/^[a-z0-9-]+$/.test(params.slug)) error(404, 'No such topic');
	const page = await kbJson<TopicPage>(`/kb/topics/${params.slug}.json`, url, fetch, platform);
	if (!page) error(404, 'No such topic');
	return { page };
};
