import { appendices, chapters } from './toc';

export function sitemapPaths(modulePaths: readonly string[]): string[] {
	const available = new Set(modulePaths);
	return [
		'/',
		'/grammar',
		...appendices.map(({ slug }) => `/grammar/${slug}`),
		...chapters
			.filter(({ slug }) => available.has(`/src/lib/grammar/chapters/${slug}.svelte`))
			.map(({ slug }) => `/grammar/${slug}`)
	];
}
