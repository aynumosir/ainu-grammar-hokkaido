/**
 * gen-attestation.ts — resolve every Ainu form printed in the grammar against
 * the corpus and the morpheme database, writing a local attestation cache.
 *
 *   bun run attest:gen            # reuse cached entries, fetch only new forms
 *   bun run attest:gen --refresh  # re-resolve everything
 *
 * Extraction is shared with the audit (attestation-extract.ts). Each distinct
 * normalised form is resolved in order (first hit wins):
 *
 *   1. corpus    https://corpus.aynu.org/v1/freq/word?token=<form>
 *   2. database  https://mdb.aynu.org/api/morphemes?q=<form>&scope=all&limit=8
 *                (exact match on id/lemma/display_lemma/variants/allomorphs)
 *
 * Output: .grammar-build/attestation-cache.json — a cache, not an artifact;
 * delete it any time and re-run. The cache is only overwritten on a clean run:
 * if >20% of requests fail the network is lying about "unattested", so the
 * script exits 1 and leaves any existing cache untouched.
 */

import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { extractOccurrences } from './attestation-extract';

const ROOT = join(import.meta.dir, '..');
const CHAPTER_DIR = join(ROOT, 'src/lib/grammar/chapters');
const CACHE_PATH = join(ROOT, '.grammar-build/attestation-cache.json');

const CONCURRENCY = 6;
const MAX_ERROR_RATE = 0.2;

export interface CacheEntry {
	via: 'corpus' | 'mdb' | null;
	count?: number | null;
	rank?: number | null;
	id?: string;
	category?: string;
}

interface Cache {
	generatedAt: string;
	forms: Record<string, CacheEntry>;
}

// ------------------------------------------------------------------ collect forms

const files = readdirSync(CHAPTER_DIR).filter((f) => f.endsWith('.svelte')).sort();
const forms = new Set<string>();
for (const f of files) {
	const src = readFileSync(join(CHAPTER_DIR, f), 'utf8');
	for (const o of extractOccurrences(src, f.replace(/\.svelte$/, ''))) forms.add(o.form);
}

const refresh = process.argv.includes('--refresh');
const old: Cache = !refresh && existsSync(CACHE_PATH)
	? JSON.parse(readFileSync(CACHE_PATH, 'utf8'))
	: { generatedAt: '', forms: {} };

const todo = [...forms].filter((f) => !(f in old.forms)).sort();
console.log(
	`attest:gen — ${forms.size} distinct forms across ${files.length} chapters; ` +
		`${forms.size - todo.length} cached, ${todo.length} to resolve`
);

// ------------------------------------------------------------------ resolution

let requests = 0;
let errored = 0;

async function fetchJson(url: string): Promise<unknown> {
	let lastErr: unknown;
	for (let attempt = 0; attempt < 2; attempt++) {
		requests++;
		try {
			const res = await fetch(url);
			if (!res.ok) throw new Error(`HTTP ${res.status}`);
			return await res.json();
		} catch (e) {
			lastErr = e;
		}
	}
	errored++;
	throw lastErr;
}

/** Strip morpheme-edge hyphens + lowercase — the database's own surface convention. */
function surface(s: unknown): string {
	return typeof s === 'string' ? s.replace(/^-+|-+$/g, '').toLowerCase() : '';
}

async function resolveForm(form: string): Promise<CacheEntry> {
	// 1. corpus
	const c = (await fetchJson(
		`https://corpus.aynu.org/v1/freq/word?token=${encodeURIComponent(form)}`
	)) as { data?: { found?: boolean; count?: number | null; rank?: number | null } };
	if (c?.data?.found === true) {
		return { via: 'corpus', count: c.data.count ?? null, rank: c.data.rank ?? null };
	}
	// 2. database
	const m = (await fetchJson(
		`https://mdb.aynu.org/api/morphemes?q=${encodeURIComponent(form)}&scope=all&limit=8`
	)) as {
		results?: {
			id?: string;
			lemma?: string;
			display_lemma?: string;
			variants?: string[];
			allomorphs?: string[];
			category?: string;
		}[];
	};
	for (const r of m?.results ?? []) {
		const candidates = [r.id, r.lemma, r.display_lemma, ...(r.variants ?? []), ...(r.allomorphs ?? [])];
		if (candidates.some((x) => surface(x) === form)) return { via: 'mdb', id: r.id, category: r.category };
	}
	return { via: null };
}

const results = new Map<string, CacheEntry>();
let done = 0;
let cursor = 0;
await Promise.all(
	Array.from({ length: Math.min(CONCURRENCY, todo.length) }, async () => {
		while (cursor < todo.length) {
			const form = todo[cursor++];
			try {
				results.set(form, await resolveForm(form));
			} catch {
				// network error after retry — leave the form uncached so the next
				// run tries again; never record it as unattested
			}
			if (++done % 100 === 0 || done === todo.length) {
				console.log(`  … ${done}/${todo.length} resolved (${errored} failed requests so far)`);
			}
		}
	})
);

// ------------------------------------------------------------------ write cache

if (requests > 0 && errored / requests > MAX_ERROR_RATE) {
	console.error(
		`\nattest:gen — ${errored}/${requests} requests failed (> ${MAX_ERROR_RATE * 100}%): ` +
			`the network is too flaky to trust "unattested" results. ` +
			`Existing cache left untouched; re-run when the connection is stable.`
	);
	process.exit(1);
}

const merged: Record<string, CacheEntry> = {};
for (const f of forms) {
	const entry = results.get(f) ?? old.forms[f];
	if (entry) merged[f] = entry;
}

mkdirSync(join(ROOT, '.grammar-build'), { recursive: true });
writeFileSync(CACHE_PATH, JSON.stringify({ generatedAt: new Date().toISOString(), forms: merged } satisfies Cache, null, 1));

const attested = Object.values(merged).filter((e) => e.via !== null);
console.log(
	`\nattest:gen — ${attested.length} attested ` +
		`(${attested.filter((e) => e.via === 'corpus').length} corpus, ` +
		`${attested.filter((e) => e.via === 'mdb').length} database), ` +
		`${Object.keys(merged).length - attested.length} unattested, ` +
		`${errored}/${requests} requests failed → ${CACHE_PATH}`
);
