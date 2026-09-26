import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { DisagreementsPage } from '$lib/kb/types';
import { kbJson } from '$lib/kb/load';

export const load: PageServerLoad = async ({ fetch, url, platform }) => {
	const disagreements = await kbJson<DisagreementsPage>('/kb/disagreements.json', url, fetch, platform);
	if (!disagreements) error(404, 'Disagreements have not been built');
	return { disagreements };
};
