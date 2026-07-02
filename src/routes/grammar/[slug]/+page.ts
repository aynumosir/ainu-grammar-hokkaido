import { error } from '@sveltejs/kit';
import { chapters, chapterBySlug, chapterNumber } from '$lib/grammar/toc';
import type { PageLoad, EntryGenerator } from './$types';

const modules = import.meta.glob('$lib/grammar/chapters/*.svelte');

export const entries: EntryGenerator = () =>
	chapters
		.filter((c) => modules[`/src/lib/grammar/chapters/${c.slug}.svelte`])
		.map((c) => ({ slug: c.slug }));

export const load: PageLoad = async ({ params }) => {
	const meta = chapterBySlug(params.slug);
	const loader = modules[`/src/lib/grammar/chapters/${params.slug}.svelte`];
	if (!meta || !loader) error(404, 'No such chapter');
	const mod = (await loader()) as { default: import('svelte').Component };
	const num = chapterNumber(params.slug);
	const i = num - 1;
	return {
		meta,
		num,
		component: mod.default,
		prev: i > 0 ? chapters[i - 1] : undefined,
		next: i < chapters.length - 1 ? chapters[i + 1] : undefined
	};
};
