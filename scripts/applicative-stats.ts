/** Recount MDB annotations. Use --check to verify the published aggregate. */
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

export const prefixes = ['e-', 'ko-', 'o-'] as const;
export const roles = [
	'content',
	'theme',
	'instrument',
	'cause',
	'location',
	'range',
	'purpose',
	'manner',
	'path',
	'addressee',
	'goal',
	'place-goal',
	'comitative',
	'benefactive',
	'malefactive',
	'recipient',
	'source',
	'other'
] as const;
const confidences = ['high', 'medium', 'low'] as const;
type Prefix = (typeof prefixes)[number];
type Role = (typeof roles)[number];
type Confidence = (typeof confidences)[number];
export type Word = {
	lemma: string;
	verb_lemma: string;
	base_lemma: string;
	prefix: Prefix;
	role: Role;
	confidence: Confidence;
	status: 'attested' | 'coined' | 'uncertain' | 'excluded';
	form: 'verb' | 'nominalization';
};

export function countApplicatives(words: Word[]) {
	const seen = new Set<string>();
	const excluded: { lemma: string; reason: string }[] = [];
	const groups = new Map<string, Word[]>();
	for (const w of words) {
		if (
			!w.lemma ||
			!w.verb_lemma ||
			!w.base_lemma ||
			!prefixes.includes(w.prefix) ||
			!roles.includes(w.role) ||
			!confidences.includes(w.confidence) ||
			!['attested', 'coined', 'uncertain', 'excluded'].includes(w.status) ||
			!['verb', 'nominalization'].includes(w.form)
		) {
			throw new Error('Invalid MDB annotation');
		}
		if (seen.has(w.lemma)) throw new Error('Duplicate MDB entry');
		seen.add(w.lemma);
		if (w.status !== 'attested' || w.form !== 'verb') {
			excluded.push({ lemma: w.lemma, reason: w.status !== 'attested' ? w.status : w.form });
			continue;
		}
		const key = `${w.prefix}|${w.verb_lemma}`;
		groups.set(key, [...(groups.get(key) ?? []), w]);
	}
	const members = [...groups.values()]
		.map((ws) => {
			if (
				new Set(ws.map((w) => w.role)).size !== 1 ||
				new Set(ws.map((w) => w.base_lemma)).size !== 1
			) {
				throw new Error('Conflicting annotations for one applicative verb lemma');
			}
			return {
				prefix: ws[0].prefix,
				verb: ws[0].verb_lemma,
				role: ws[0].role,
				// Retain the least confident annotation when citation forms collapse.
				confidence: confidences[Math.max(...ws.map((w) => confidences.indexOf(w.confidence)))],
				entries: ws.map((w) => w.lemma).sort()
			};
		})
		.sort((a, b) => (a.verb < b.verb ? -1 : a.verb > b.verb ? 1 : 0));
	return {
		inputEntries: words.length,
		eligibleEntries: words.length - excluded.length,
		verbLemmas: members.length,
		excluded: Object.fromEntries(
			['coined', 'uncertain', 'excluded', 'nominalization'].map((reason) => [
				reason,
				excluded.filter((w) => w.reason === reason).length
			])
		),
		prefixes: prefixes.map((prefix) => {
			const pool = members.filter((w) => w.prefix === prefix);
			return {
				prefix,
				denominator: pool.length,
				roles: roles.flatMap((role) => {
					const matches = pool.filter((w) => w.role === role);
					return matches.length
						? [
								{
									role,
									count: matches.length,
									percent: Math.round((1000 * matches.length) / pool.length) / 10,
									confidence: Object.fromEntries(
										confidences.map((c) => [c, matches.filter((w) => w.confidence === c).length])
									)
								}
							]
						: [];
				})
			};
		})
	};
}

const outputPath = 'src/lib/grammar/data/mdb-applicative-stats.json';

if (import.meta.main) {
	try {
		const args = process.argv.slice(2);
		const check = args.includes('--check');
		const rest = args.filter((a) => a !== '--check');
		if (rest.length && (rest.length !== 2 || rest[0] !== '--mdb-root')) {
			throw new Error('Invalid arguments');
		}
		const root = rest[1] ?? process.env.AINU_MDB_ROOT ?? '../ainu-morpheme-database';
		const path = 'morpheme_db/applicatives.json';
		const bytes = readFileSync(join(root, path));
		const revision = execFileSync('git', ['rev-parse', 'HEAD'], {
			cwd: root,
			encoding: 'utf8',
			stdio: 'pipe'
		}).trim();
		const committed = execFileSync('git', ['show', `${revision}:${path}`], {
			cwd: root,
			stdio: 'pipe'
		});
		if (!bytes.equals(committed)) throw new Error('Uncommitted MDB annotations');
		const source = {
			url: 'https://mdb.aynu.org/applicatives',
			revision,
			path,
			sha256: createHash('sha256').update(bytes).digest('hex')
		};
		const stats = countApplicatives(JSON.parse(bytes.toString()).words);
		const report = JSON.stringify({ source, ...stats }, null, 2) + '\n';
		if (check) {
			if (report !== readFileSync(outputPath, 'utf8'))
				throw new Error('Source or counts differ from published report');
		} else {
			mkdirSync(dirname(outputPath), { recursive: true });
			writeFileSync(outputPath, report);
		}
		console.log(
			`MDB applicatives: ${stats.inputEntries} entries, ${stats.verbLemmas} distinct attested verb lemmas${check ? ' (report reproduced)' : ''}`
		);
	} catch {
		// Filesystem and subprocess exceptions can contain private home paths.
		console.error(
			'Applicative statistics failed: check arguments, committed MDB input, and agreement with the published report.'
		);
		process.exitCode = 1;
	}
}
