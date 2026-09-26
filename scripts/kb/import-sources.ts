/**
 * import-sources.ts — the bibliography and the citation registry as one source registry.
 *
 *   bun scripts/kb/import-sources.ts   →  kb/registries/sources.jsonl
 *
 * The bibliography key stays the source key; the db.aynu.org slug, the evidentiary
 * role and the local OCR path come from the citation registry.
 */
import { join } from 'node:path';
import { bibliography } from '../../src/lib/grammar/bibliography';
import { citationRegistry } from '../../src/lib/grammar/citation-registry';
import { KB, writeJsonl } from './lib';

const rows = Object.entries(bibliography)
	.sort(([a], [b]) => a.localeCompare(b))
	.map(([key, b]) => {
		const r = citationRegistry[key];
		const row: Record<string, unknown> = {
			id: `source:${key}`,
			key,
			db_slug: r?.dbSlug ?? null,
			cite_author: b.citeAuthor,
			author: b.author,
			year: b.year,
			title: b.title
		};
		if (b.titleTr) row.title_tr = b.titleTr;
		if (b.container) row.container = b.container;
		if (b.pages) row.pages = b.pages;
		if (b.publisher) row.publisher = b.publisher;
		if (b.place) row.place = b.place;
		if (b.url) row.url = b.url;
		row.lang = b.lang ?? 'en';
		row.region = b.region;
		if (r?.sourceRole) row.role = r.sourceRole;
		row.held_locally = r?.heldLocally ?? false;
		if (r?.path) row.path = r.path;
		if (b.note) row.note = b.note;
		return row;
	});

writeJsonl(join(KB, 'registries/sources.jsonl'), rows);
console.log(`${rows.length} sources, ${rows.filter((r) => r.db_slug).length} with a db.aynu.org slug`);
