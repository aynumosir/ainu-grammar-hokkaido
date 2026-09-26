import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { GraphData, KbIndex } from '$lib/kb/types';
import { kbJson } from '$lib/kb/load';

export const load: PageServerLoad = async ({ fetch, url, platform }) => {
	const [graph, index] = await Promise.all([
		kbJson<GraphData>('/kb/graph.json', url, fetch, platform),
		kbJson<KbIndex>('/kb/index.json', url, fetch, platform)
	]);
	if (!graph || !index) error(500, 'The knowledge base has not been built');
	return { graph, index };
};
