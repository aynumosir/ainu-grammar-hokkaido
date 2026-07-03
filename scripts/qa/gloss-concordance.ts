/**
 * gloss-concordance.ts — deterministic cross-chapter gloss-consistency report.
 *
 * For every bound morpheme token in every <Ex m= g=> pair (aligned word-by-word,
 * split morpheme-by-morpheme on -/= boundaries), accumulate the set of glosses
 * used for it corpus-wide. A morpheme glossed one way in chapter A and another
 * way in chapter B (e.g. i= as 4.O vs 1SG.O) surfaces here mechanically.
 *
 * Output: .grammar-build/qa/gloss-concordance.json + console report of the
 * most-inconsistent morphemes. Lexical stems are skipped (only tokens attached
 * by = or -, plus a small closed set of free particles, carry conventions).
 */

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const ROOT = join(import.meta.dir, '../..');
const CHAPTER_DIR = join(ROOT, 'src/lib/grammar/chapters');

/** Free particles whose gloss should also be convention-stable. */
const PARTICLES = new Set(['anak', 'anakne', 'ka', 'wa', 'ta', 'un', 'or', 'kor', 'yak', 'na', 'ne', 'hi', 'pe', 'kusu', 'ruwe', 'siri', 'hawe', 'humi']);

function findTags(src: string, name: string) {
	const re = new RegExp(`<${name}\\b((?:[^>"]|"[^"]*")*)>`, 'g');
	const out: { attrs: Record<string, string>; line: number }[] = [];
	let m: RegExpExecArray | null;
	while ((m = re.exec(src))) {
		const attrs: Record<string, string> = {};
		const attrRe = /([\w-]+)\s*=\s*"([^"]*)"/g;
		let a: RegExpExecArray | null;
		while ((a = attrRe.exec(m[1]))) attrs[a[1]] = a[2];
		out.push({ attrs, line: src.slice(0, m.index).split('\n').length });
	}
	return out;
}

/** Split a word into [piece, boundaryBefore] pairs: "i=rewsi-re" → i(=), rewsi(), re(-). */
function pieces(word: string): { text: string; sep: string }[] {
	const parts = word.split(/([=-])/);
	const out: { text: string; sep: string }[] = [];
	let sep = '';
	for (const p of parts) {
		if (p === '=' || p === '-') sep = p;
		else if (p) {
			out.push({ text: p, sep });
			sep = '';
		}
	}
	return out;
}

// morphKey → gloss → [{chapter, line, word}]
const conc = new Map<string, Map<string, { chapter: string; line: number; word: string }[]>>();

const strip = (s: string) => s.replace(/[()[\]?.,!'"‘’“”…*]/g, '');

for (const f of readdirSync(CHAPTER_DIR).filter((f) => f.endsWith('.svelte'))) {
	const slug = f.replace(/\.svelte$/, '');
	const src = readFileSync(join(CHAPTER_DIR, f), 'utf8');
	for (const t of findTags(src, 'Ex')) {
		const { m, g } = t.attrs;
		if (!m || !g) continue;
		const mw = m.trim().split(/\s+/);
		const gw = g.trim().split(/\s+/);
		if (mw.length !== gw.length) continue;
		for (let i = 0; i < mw.length; i++) {
			const mp = pieces(strip(mw[i]));
			const gp = pieces(strip(gw[i]));
			if (mp.length !== gp.length) continue; // boundary mismatch — audit reports those
			for (let j = 0; j < mp.length; j++) {
				const isBound = mp[j].sep !== '' || (j === 0 && mp.length > 1 && gp.length > 1 && mw[i].startsWith(mp[j].text + (mp[1]?.sep ?? '')));
				const isParticle = mp.length === 1 && PARTICLES.has(mp[j].text.toLowerCase());
				if (!isBound && !isParticle) continue;
				// key encodes position: "i=" proclitic, "=an" enclitic, "-re" suffix, "e-" prefix
				let key: string;
				const txt = mp[j].text.toLowerCase();
				if (j === 0 && mp.length > 1) key = txt + (mp[1].sep === '=' ? '=' : '-');
				else if (mp[j].sep) key = mp[j].sep === '=' ? '=' + txt : '-' + txt;
				else key = txt;
				const gloss = gp[j].text;
				if (!conc.has(key)) conc.set(key, new Map());
				const byGloss = conc.get(key)!;
				if (!byGloss.has(gloss)) byGloss.set(gloss, []);
				byGloss.get(gloss)!.push({ chapter: slug, line: t.line, word: mw[i] });
			}
		}
	}
}

// report: morphemes with >1 distinct gloss, sorted by (glossCount, totalUses)
const report: any[] = [];
for (const [key, byGloss] of conc) {
	if (byGloss.size < 2) continue;
	const total = [...byGloss.values()].reduce((n, v) => n + v.length, 0);
	report.push({
		morpheme: key,
		distinctGlosses: byGloss.size,
		totalUses: total,
		glosses: Object.fromEntries(
			[...byGloss.entries()]
				.sort((a, b) => b[1].length - a[1].length)
				.map(([gl, uses]) => [gl, { count: uses.length, chapters: [...new Set(uses.map((u) => u.chapter))].slice(0, 8), example: uses[0] }]),
		),
	});
}
report.sort((a, b) => b.distinctGlosses - a.distinctGlosses || b.totalUses - a.totalUses);

writeFileSync(join(ROOT, '.grammar-build/qa/gloss-concordance.json'), JSON.stringify(report, null, 1));

console.log(`gloss-concordance: ${conc.size} bound morphemes/particles tracked, ${report.length} with ≥2 distinct glosses\n`);
for (const r of report.slice(0, 25)) {
	const gl = Object.entries(r.glosses as Record<string, any>)
		.map(([g, v]) => `${g}×${v.count}`)
		.join('  ');
	console.log(`${r.morpheme.padEnd(12)} ${gl}`);
}
