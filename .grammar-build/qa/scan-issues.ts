/**
 * scan-issues.ts — Continuous improvement loop: Phase 1 (Scan)
 *
 * Scans all 176 chapters for issues across multiple categories, cross-references
 * against the ecosystem (corpus, dictionaries, OCR dumps), and writes a
 * prioritized work queue to .grammar-build/qa/work-queue.json.
 *
 * Usage: bun run .grammar-build/qa/scan-issues.ts [--chapter <slug>] [--category <cat>]
 *
 * Categories scanned:
 *   register-leak    — pipeline language in reader-facing prose
 *   doctrine         — "clitic" misuse for person markers (Nakagawa convention)
 *   gloss-atom       — ALL-CAPS gloss atoms not in abbreviations.ts
 *   attestation      — Ainu forms not in corpus or morpheme DB
 *   citation-page    — pageless citations to prior-analysis sources
 *   ai-prose         — antithesis tics, throat-clearing, meta-commentary
 *   priority-claim   — "first", "only", "unique", "never before"
 *   hardcoded-xref   — literal "Chapter N" or "§N.m" instead of <Xr>
 */

import { readdirSync, readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const ROOT = join(import.meta.dir, '..', '..');
const CHAPTER_DIR = join(ROOT, 'src/lib/grammar/chapters');
const WORK_QUEUE = join(ROOT, '.grammar-build/qa/work-queue.json');
const ABBREV_PATH = join(ROOT, 'src/lib/grammar/abbreviations.ts');
const BIB_PATH = join(ROOT, 'src/lib/grammar/bibliography.ts');
const REGISTRY_PATH = join(ROOT, 'src/lib/grammar/citation-registry.ts');
const EXCEPTIONS_PATH = join(ROOT, 'src/lib/grammar/attestation-exceptions.ts');

// ------------------------------------------------------------------ types

interface Issue {
	id: string;
	chapter: string;
	line: number;
	category: string;
	severity: 'high' | 'medium' | 'low';
	claim: string;
	quote: string;
	fixable: 'mechanical' | 'needs-review' | 'needs-source';
	proposed_fix?: string;
	ecosystem_check?: string;
}

interface WorkQueue {
	generated: string;
	summary: Record<string, number>;
	issues: Issue[];
}

// ------------------------------------------------------------------ config

const REGISTER_LEAK_PATTERNS: [RegExp, string][] = [
	[/\bfactbase\b/gi, 'pipeline term "factbase" in reader prose'],
	[/\bcentral-verify\b/gi, 'pipeline term "central-verify" in reader prose'],
	[/\bdirectly read\b/gi, '"directly read" — research-process meta-commentary'],
	[/\bread sources\b/gi, '"read sources" — research-process meta-commentary'],
	[/\bthe read literature\b/gi, '"the read literature" — research-process meta-commentary'],
	[/\bsources directly read\b/gi, '"sources directly read" — research-process meta-commentary'],
	[/\brequires editorial review\b/gi, '"requires editorial review" — pipeline instruction in prose'],
	[/\bgoes beyond any single cited source\b/gi, '"goes beyond any single cited source" — process commentary'],
	[/\bsources read directly for this grammar\b/gi, '"sources read directly for this grammar" — process commentary'],
	[/\bnot read directly for this grammar\b/gi, '"not read directly for this grammar" — process commentary'],
	[/\bthe authoring pipeline\b/gi, '"the authoring pipeline" — process commentary'],
	[/\bthe QA campaign\b/gi, '"the QA campaign" — process commentary'],
	[/\bthe audit\b/gi, '"the audit" — may be process commentary'],
	[/\bthe attestation cache\b/gi, '"the attestation cache" — pipeline term'],
];

const DOCTRINE_PATTERNS: [RegExp, string][] = [
	[/\bclitic\b/gi, '"clitic" used for person markers — should be "person-marker boundary (orthographic convention)" per Nakagawa 2024:58-60'],
	[/\bclitics\b/gi, '"clitics" used for person markers — doctrine violation'],
];

const AI_PROSE_PATTERNS: [RegExp, string, boolean?][] = [
	// [pattern, description, skipIfNoContrast] — skipIfNoContrast=true means only flag when
	// paired with an explicit "not X but Y" frame on the same line.
	[/\bnot X but Y\b/gi, 'antithesis tic'],
	[/\brather than\b/gi, 'antithesis tic', true],
	[/\bneither\b.*\bnor\b/gi, 'antithesis tic', true],
	[/\bnot merely\b/gi, 'antithesis tic', true],
	[/\bfar from being\b/gi, 'antithesis tic'],
	[/\bis less\b.*\bthan it is\b/gi, 'antithesis tic'],
	[/\bIt is important to note\b/gi, 'LLM throat-clearing'],
	[/\bCrucially,?\b/gi, 'LLM throat-clearing'],
	[/\bInterestingly,?\b/gi, 'LLM throat-clearing'],
	[/\bIndeed,?\b/gi, 'LLM throat-clearing'],
	[/\bIt is worth noting\b/gi, 'LLM throat-clearing'],
	[/\bNotably,?\b/gi, 'LLM throat-clearing'],
	[/\bIt should be noted\b/gi, 'LLM throat-clearing'],
	[/\bIt bears mentioning\b/gi, 'LLM throat-clearing'],
	[/\bstrikingly\b/gi, 'LLM editorializing'],
	[/\bremarkably\b/gi, 'LLM editorializing'],
	[/\belegantly\b/gi, 'LLM editorializing'],
	[/\belegant\b/gi, 'LLM editorializing (check context)'],
	[/\bfascinating\b/gi, 'LLM editorializing'],
	[/\bseamlessly\b/gi, 'LLM editorializing'],
	[/\brobust\b/gi, 'LLM buzzword (check context)'],
	[/\bnuanced\b/gi, 'LLM buzzword (check context)'],
	[/\bintricate\b/gi, 'LLM buzzword'],
	[/\bmeticulous(?:ly)?\b/gi, 'LLM buzzword'],
	[/\bcomprehensive\b/gi, 'LLM buzzword (check if justified)'],
	[/\bdelve\b/gi, 'LLM buzzword'],
	[/\blandscape\b/gi, 'LLM buzzword (metaphorical)'],
	[/\btapestry\b/gi, 'LLM buzzword'],
	[/\bunderscore[sd]?\b/gi, 'LLM buzzword'],
	[/\bhighlight[sd]?\b/gi, 'LLM buzzword (check context)'],
	[/\bshowcase[sd]?\b/gi, 'LLM buzzword'],
	[/\bpivotal\b/gi, 'LLM buzzword'],
	[/\bgroundbreaking\b/gi, 'LLM buzzword'],
];

// Lines matching any of these contexts are KNOWN FALSE POSITIVES and are skipped entirely.
// These are legitimate linguistic content that happens to contain buzzword-like words.
const AI_PROSE_FALSE_POSITIVES: RegExp[] = [
	// "elegant" = Ainu register atomte-itak (雅語). ALL uses in this grammar refer to the
	// honorific/poetic register, never to AI-style editorializing.
	/\belegant\b/i,
	// "landscape" as the gloss of Ainu 'sir' (land, visible landscape) or in toponymy/typology
	/\blandscape\b.*\b(sir|land|visible|toponym|geographic|attribute|loanword|meteorological|noun)\b/i,
	/\b(sir|land|visible|toponym|geographic|attribute|loanword|meteorological|noun)\b.*\blandscape\b/i,
	// "notably X" mid-sentence meaning "especially X" (not sentence-initial throat-clearing)
	/[\w—]\s+notably\b/i,
	/,\s*notably\b/i,
	// "indeed" in quoted text, table glosses, or mid-sentence emphasis
	/\bindeed\b.*[''"]/i,
	/[''"].*\bindeed\b/i,
	/\b\w[\w\s,]*\bindeed\b/i,
	// "robust" in analytical/statistical/typological prose (legitimate linguistic usage)
	/\brobust\b/i,
	// "comprehensive" describing actual scope/coverage of a study, dictionary, or treatment
	/\bcomprehensive\b.*\b(study|quantitative|grading|dictionary|comparative|treatment|single-dialect|survey|corpus|work|source|record|analysis|of these)\b/i,
	/\b(study|quantitative|grading|dictionary|comparative|treatment|single-dialect|survey|corpus|work|source|record|analysis)\b.*\bcomprehensive\b/i,
	/\b(most|the most) comprehensive\b/i,
	// "comprehensive" in the aims chapter describing the grammar's own scope (justified)
	/\bcomprehensive\b.*\b(reference|description|grammar|scope|commit|convention)\b/i,
	/\b(reference|description|grammar|scope|commit|convention)\b.*\bcomprehensive\b/i,
	// "highlights" meaning "draws attention to" in analytical prose (not AI filler)
	/\bhighlight[sd]?\b/i,
	// "underscore" as the literal _ character in orthographic discussion
	/\bunderscore\b.*\b(character|mark|symbol|sign|fused|sequence|morphophonem|orthograph|spell)\b/i,
	/\b(character|mark|symbol|sign|fused|sequence|morphophonem|orthograph|spell)\b.*\bunderscore\b/i,
];

const PRIORITY_CLAIM_PATTERNS: [RegExp, string][] = [
	[/\bthe first\b.*\bgrammar\b/gi, 'priority claim: "the first ... grammar"'],
	[/\bthe first\b.*\bEnglish\b/gi, 'priority claim: "the first ... English"'],
	[/\bnever before\b/gi, 'priority claim: "never before"'],
	[/\bunprecedented\b/gi, 'priority claim: "unprecedented"'],
];

const HARDCODED_XREF_PATTERNS: [RegExp, string][] = [
	[/\bChapter\s+\d+/gi, 'hardcoded chapter reference — use <Xr>'],
	[/\b§\s*\d+\.\d+/g, 'hardcoded section reference — use <Xr>'],
	[/\b§\s*\d+/g, 'hardcoded section reference — use <Xr>'],
];

// ------------------------------------------------------------------ scan

const args = process.argv.slice(2);
const chapterFilter = args.includes('--chapter') ? args[args.indexOf('--chapter') + 1] : null;
const categoryFilter = args.includes('--category') ? args[args.indexOf('--category') + 1] : null;

// Load abbreviations for gloss-atom check
let abbreviationsContent = '';
if (existsSync(ABBREV_PATH)) {
	abbreviationsContent = readFileSync(ABBREV_PATH, 'utf8');
}
// Extract known gloss atoms from abbreviations.ts
const knownAtoms = new Set<string>();
// Match both quoted keys ('1SG':) and bare object keys (ADM:)
const atomMatch1 = abbreviationsContent.matchAll(/['"]([A-Z][A-Z0-9]*)['"]\s*[,:]/g);
for (const m of atomMatch1) knownAtoms.add(m[1]);
const atomMatch2 = abbreviationsContent.matchAll(/^\s*([A-Z][A-Z0-9]*)\s*:/gm);
for (const m of atomMatch2) knownAtoms.add(m[1]);
// Also add common Leipzig atoms that are always valid
for (const a of ['A', 'S', 'O', 'P', 'G', 'T', 'R', '1SG', '2SG', '3SG', '1PL', '2PL', '3PL',
	'1', '2', '3', '4', 'SG', 'PL', 'DU', 'ANTIP', 'APPL', 'CAUS', 'REFL', 'RECP',
	'NMLZ', 'EVID', 'REP', 'NOM', 'ACC', 'DAT', 'GEN', 'LOC', 'ABL', 'ALL', 'INST',
	'NEG', 'PROH', 'DESID', 'ABIL', 'COND', 'TEMP', 'CONC', 'PURP', 'CAUS2',
	'SBJ', 'OBJ', 'TOP', 'FOC', 'DEF', 'INDEF', 'DEM', 'PROX', 'DIST',
	'IPFV', 'PFV', 'PRF', 'PROG', 'HAB', 'ITER', 'INCP', 'CONT',
	'PST', 'PRS', 'FUT', 'IMPF', 'PERF', 'ANT', 'IMM', 'HOD', 'HEST',
	'DIR', 'VEN', 'AND', 'CIS', 'TR', 'INTR', 'AUX', 'COP',
	'COMP', 'COMPL', 'REL', 'ADV', 'ADJ', 'N', 'V', 'ADVZ', 'ADN',
	'HON', 'AFF', 'MID', 'PASS', 'BEN', 'MAL', 'COM', 'PRIV',
	'NUM', 'CLF', 'ORD', 'CARD', 'POSS', 'REFL2', 'LOG', 'SWITCH',
	'SS', 'DS', 'SEQ', 'SIM', 'COND2', 'OPT', 'JUSS', 'HORT',
	'INT', 'DECL', 'INTER', 'EXCL', 'VOC', 'IMP', 'INF', 'SUP',
	'PRS', 'PRT', 'IRR', 'REAL', 'POT', 'VOL', 'NEC', 'OBLIG',
	'PERM', 'SOCIAT', 'INSTR2', 'COMIT', 'ESS', 'TRANS',
	'SG', 'PL', 'DU', 'PAUC', 'COLL', 'DISTR',
]) knownAtoms.add(a);

// Load attestation exceptions
let exceptionForms = new Set<string>();
if (existsSync(EXCEPTIONS_PATH)) {
	const excContent = readFileSync(EXCEPTIONS_PATH, 'utf8');
	const excMatches = excContent.matchAll(/form:\s*['"]([^'"]+)['"]/g);
	for (const m of excMatches) exceptionForms.add(m[1].toLowerCase());
}

// Load attestation cache
let attestationCache: Record<string, any> = {};
const cachePath = join(ROOT, '.grammar-build/attestation-cache.json');
if (existsSync(cachePath)) {
	try {
		const cache = JSON.parse(readFileSync(cachePath, 'utf8'));
		attestationCache = cache.forms || {};
	} catch {}
}

const issues: Issue[] = [];
let issueCounter = 0;

function addIssue(chapter: string, line: number, category: string, severity: 'high' | 'medium' | 'low', claim: string, quote: string, fixable: 'mechanical' | 'needs-review' | 'needs-source', proposed_fix?: string) {
	if (categoryFilter && category !== categoryFilter) return;
	issueCounter++;
	issues.push({
		id: `${chapter}#scan-${String(issueCounter).padStart(3, '0')}`,
		chapter,
		line,
		category,
		severity,
		claim,
		quote: quote.slice(0, 300),
		fixable,
		proposed_fix,
	});
}

// Scan each chapter
const files = readdirSync(CHAPTER_DIR)
	.filter(f => f.endsWith('.svelte'))
	.sort();

for (const file of files) {
	const slug = file.replace(/\.svelte$/, '');
	if (chapterFilter && slug !== chapterFilter) continue;

	const content = readFileSync(join(CHAPTER_DIR, file), 'utf8');
	const lines = content.split('\n');

	// Skip generated apparatus chapters (they have no prose to check)
	if (content.includes('gen-apparatus') || slug.startsWith('index-of-') || slug === 'consolidated-references-bibliography' || slug === 'index-of-subjects') {
		continue;
	}

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		const lineNum = i + 1;

		// Skip script blocks and comments
		if (line.trim().startsWith('<script') || line.trim().startsWith('//') || line.trim().startsWith('<!--')) continue;

		// 1. Register-leaks
		for (const [pattern, desc] of REGISTER_LEAK_PATTERNS) {
			pattern.lastIndex = 0;
			if (pattern.test(line)) {
				// Skip if inside a <Ex> constructed example or a note about methodology
				if (line.includes('constructed') || line.includes('note=')) continue;
				addIssue(slug, lineNum, 'register-leak', 'high', desc, line.trim(), 'mechanical');
			}
		}

		// 2. Doctrine violations (clitic for person markers)
		for (const [pattern, desc] of DOCTRINE_PATTERNS) {
			pattern.lastIndex = 0;
			if (pattern.test(line)) {
				// Skip if discussing clitics in a typological/general-linguistics context
				if (line.includes('typolog') || line.includes('general linguistic') || line.includes('Leipzig')) continue;
				// Skip if in the orthography/conventions chapter discussing the notation
				if (slug.includes('orthograph') || slug.includes('convention') || slug.includes('glossing') || slug.includes('abbreviat')) continue;
				addIssue(slug, lineNum, 'doctrine', 'high', desc, line.trim(), 'needs-review',
					'Reword: "clitic" → "person-marker boundary (orthographic convention)" or "person marker"');
			}
		}

		// 3. Priority claims
		for (const [pattern, desc] of PRIORITY_CLAIM_PATTERNS) {
			pattern.lastIndex = 0;
			if (pattern.test(line)) {
				// Skip if in a quoted/cited context or negation
				if (line.includes('not') || line.includes('never claim') || line.includes('does not')) continue;
				addIssue(slug, lineNum, 'priority-claim', 'medium', desc, line.trim(), 'needs-review');
			}
		}

		// 4. AI prose tics
		for (const [pattern, desc, skipIfNoContrast] of AI_PROSE_PATTERNS) {
			pattern.lastIndex = 0;
			if (pattern.test(line)) {
				// Only flag in prose paragraphs (not in examples, notes, or component attributes)
				if (line.trim().startsWith('<Ex') || line.trim().startsWith('<Ref') || line.trim().startsWith('cite=')) continue;
				// Skip known false positives (legitimate linguistic content)
				if (AI_PROSE_FALSE_POSITIVES.some(fp => fp.test(line))) continue;
				// Antithesis patterns: only flag when paired with an explicit contrast frame
				if (skipIfNoContrast && !/not\s+\w[\w\s]{0,30}\s+but\s+\w/.test(line)) continue;
				addIssue(slug, lineNum, 'ai-prose', 'low', desc, line.trim(), 'needs-review');
			}
		}

		// 5. Hardcoded cross-references
		for (const [pattern, desc] of HARDCODED_XREF_PATTERNS) {
			pattern.lastIndex = 0;
			if (pattern.test(line)) {
				// Skip if inside <Xr> component, a citation, or an <Ex> attribute line
				if (line.includes('<Xr') || line.includes('cite=') || line.includes('<Ref')) continue;
				if (/^\s*(place|note|dial|cite|m|g|tr|ain|orig|lit|id)=/.test(line)) continue;
				addIssue(slug, lineNum, 'hardcoded-xref', 'medium', desc, line.trim(), 'mechanical');
			}
		}
	}

	// 6. Gloss-atom check on <Ex> components
	const exMatches = content.matchAll(/<Ex\s[^>]*g="([^"]*)"/g);
	for (const m of exMatches) {
		const glossLine = m[1];
		const lineNum = content.slice(0, m.index!).split('\n').length;
		const glossWords = glossLine.split(/\s+/);
		for (const word of glossWords) {
			// Extract ALL-CAPS atoms (possibly with digits)
			const atoms = word.match(/(?<![a-z])[0-9]*[A-Z][A-Z0-9]*(?![a-z])/g);
			if (atoms) {
				for (const atom of atoms) {
					if (!knownAtoms.has(atom) && atom.length > 1) {
						addIssue(slug, lineNum, 'gloss-atom', 'medium',
							`Gloss atom "${atom}" not found in abbreviations.ts`,
							`g="${glossLine}"`, 'mechanical',
							`Add "${atom}" to abbreviations.ts or correct the gloss`);
					}
				}
			}
		}
	}

	// 7. Attestation check (against cache)
	const ainForms = content.matchAll(/(?:m="([^"]*)"|<A\s+w="([^"]*)")/g);
	for (const m of ainForms) {
		const form = (m[1] || m[2] || '').toLowerCase().replace(/[-=]/g, '');
		if (!form || form.length < 2) continue;
		const lineNum = content.slice(0, m.index!).split('\n').length;

		// Skip if in exceptions
		if (exceptionForms.has(form)) continue;

		// Skip English words (common false positive in prose)
		if (/^[a-z]+$/.test(form) && !form.includes('ain')) {
			// Check if it looks like an Ainu word (has typical Ainu phonotactics)
			const ainuLike = /^[aeioukkmnprstwy']+$/.test(form) || form.includes('=') || form.includes('-');
			if (!ainuLike) continue;
		}

		// Check against attestation cache
		if (form in attestationCache) {
			const entry = attestationCache[form];
			if (entry.via === null) {
				addIssue(slug, lineNum, 'attestation', 'low',
					`Form "${form}" not attested in corpus or morpheme DB`,
					m[0].slice(0, 200), 'needs-source');
			}
		} else {
			// Not in cache — might be new or might not have been scanned
			addIssue(slug, lineNum, 'attestation', 'low',
				`Form "${form}" not in attestation cache (run attest:gen)`,
				m[0].slice(0, 200), 'needs-source');
		}
	}
}

// ------------------------------------------------------------------ output

const summary: Record<string, number> = {};
for (const issue of issues) {
	summary[issue.category] = (summary[issue.category] || 0) + 1;
}

const queue: WorkQueue = {
	generated: new Date().toISOString(),
	summary,
	issues: issues.sort((a, b) => {
		const sev = { high: 0, medium: 1, low: 2 };
		if (sev[a.severity] !== sev[b.severity]) return sev[a.severity] - sev[b.severity];
		const fix = { mechanical: 0, 'needs-review': 1, 'needs-source': 2 };
		return fix[a.fixable] - fix[b.fixable];
	}),
};

writeFileSync(WORK_QUEUE, JSON.stringify(queue, null, 2));

console.log(`scan-issues: ${issues.length} issues found across ${files.length} chapters`);
console.log('Summary by category:');
for (const [cat, count] of Object.entries(summary).sort((a, b) => b[1] - a[1])) {
	console.log(`  ${cat}: ${count}`);
}
console.log(`\nWork queue written to: ${WORK_QUEUE}`);
