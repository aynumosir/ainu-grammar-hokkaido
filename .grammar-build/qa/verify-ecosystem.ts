/**
 * verify-ecosystem.ts — Cross-verify chapter claims against the ecosystem.
 *
 * Data sources:
 *   1. ainu-corpora/data.jsonl        — 210K attested sentences (text + translation)
 *   2. ainu-morpheme-database         — 14,244 morpheme forms, 15,984 lexemes
 *   3. .grammar-build/attestation-cache.json — pre-computed form→corpus mapping
 *   4. bibliography.ts                — cited sources
 *
 * Verification tasks:
 *   A. Form attestation: Ainu forms in <A w="..."> or m="..." checked against corpus + morpheme DB
 *   B. Citation existence: <Ref k="..." p="..."> keys checked against bibliography.ts
 *   C. Citation page: page citations to prior-analysis sources checked for page presence
 *   D. Morpheme analysis: claims about morpheme structure checked against morpheme_db
 *
 * Usage: bun run .grammar-build/qa/verify-ecosystem.ts [--chapter <slug>] [--task A|B|C|D]
 * Output: .grammar-build/qa/verification-report.json
 */

import { readdirSync, readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { createReadStream } from 'fs';
import { createInterface } from 'readline';

const ROOT = join(import.meta.dir, '..', '..');
const AINU_ROOT = join(ROOT, '..');
const CHAPTER_DIR = join(ROOT, 'src/lib/grammar/chapters');
const CORPUS_PATH = join(AINU_ROOT, 'ainu-corpora/data.jsonl');
const FORMS_PATH = join(AINU_ROOT, 'ainu-morpheme-database/morpheme_db/output/forms.json');
const LEXEME_PATH = join(AINU_ROOT, 'ainu-morpheme-database/lexeme_db/output/lexeme_bank.json');
const BIB_PATH = join(ROOT, 'src/lib/grammar/bibliography.ts');
const CACHE_PATH = join(ROOT, '.grammar-build/attestation-cache.json');
const REPORT_PATH = join(ROOT, '.grammar-build/qa/verification-report.json');

// ------------------------------------------------------------------ types

interface Finding {
	id: string;
	chapter: string;
	line: number;
	task: 'A' | 'B' | 'C' | 'D';
	severity: 'high' | 'medium' | 'low';
	type: string;
	detail: string;
	form?: string;
	citation?: string;
	evidence?: string;
}

interface Report {
	generated: string;
	corpus_size: number;
	morpheme_forms: number;
	lexemes: number;
	summary: Record<string, number>;
	findings: Finding[];
}

// ------------------------------------------------------------------ load ecosystem data

const args = process.argv.slice(2);
const chapterFilter = args.includes('--chapter') ? args[args.indexOf('--chapter') + 1] : null;
const taskFilter = args.includes('--task') ? args[args.indexOf('--task') + 1] : null;

console.log('Loading ecosystem data...');

// 1. Load morpheme forms (fast — JSON)
let morphemeSurfaces = new Set<string>();
let morphemeAnalyses: Record<string, string> = {};
if (existsSync(FORMS_PATH)) {
	const forms: any[] = JSON.parse(readFileSync(FORMS_PATH, 'utf8'));
	for (const f of forms) {
		if (f.surface) {
			const s = f.surface.toLowerCase().replace(/[-=]/g, '');
			morphemeSurfaces.add(s);
			if (f.analysis) morphemeAnalyses[s] = f.analysis;
		}
	}
}
console.log(`  morpheme_db: ${morphemeSurfaces.size} surface forms`);

// 2. Load lexeme bank (fast — JSON)
let lexemeSurfaces = new Set<string>();
if (existsSync(LEXEME_PATH)) {
	try {
		const lexemes: any[] = JSON.parse(readFileSync(LEXEME_PATH, 'utf8'));
		for (const l of lexemes) {
			if (l.surface) lexemeSurfaces.add(l.surface.toLowerCase().replace(/[-=]/g, ''));
			if (l.lemma) lexemeSurfaces.add(l.lemma.toLowerCase().replace(/[-=]/g, ''));
		}
	} catch {}
}
console.log(`  lexeme_db: ${lexemeSurfaces.size} surfaces`);

// 3. Load attestation cache
let attestedForms = new Set<string>();
if (existsSync(CACHE_PATH)) {
	try {
		const cache = JSON.parse(readFileSync(CACHE_PATH, 'utf8'));
		const forms = cache.forms || {};
		for (const [form, entry] of Object.entries<any>(forms)) {
			if (entry.via !== null && entry.via !== undefined) {
				attestedForms.add(form.toLowerCase().replace(/[-=]/g, ''));
			}
		}
	} catch {}
}
console.log(`  attestation-cache: ${attestedForms.size} attested forms`);

// 4. Load bibliography keys
let bibKeys = new Set<string>();
if (existsSync(BIB_PATH)) {
	const bibContent = readFileSync(BIB_PATH, 'utf8');
	const keyMatches = bibContent.matchAll(/['"]([a-z0-9]+)['"]\s*:/g);
	for (const m of keyMatches) bibKeys.add(m[1]);
	// Also match bare keys like nakagawa2024:
	const bareMatches = bibContent.matchAll(/^\s*([a-z][a-z0-9]*)\s*:/gm);
	for (const m of bareMatches) bibKeys.add(m[1]);
}
console.log(`  bibliography: ${bibKeys.size} keys`);

// 5. Load corpus index (build a simple token→doc index for targeted lookups)
// We don't load the full 210K sentences into memory — instead we build a
// lightweight inverted index of Ainu tokens for O(1) attestation checks.
console.log('  Building corpus token index (streaming)...');
let corpusTokens = new Set<string>();
let corpusSize = 0;

async function buildCorpusIndex() {
	if (!existsSync(CORPUS_PATH)) {
		console.log('  corpus: NOT FOUND');
		return;
	}
	const rl = createInterface({
		input: createReadStream(CORPUS_PATH),
		crlfDelay: Infinity,
	});
	for await (const line of rl) {
		corpusSize++;
		try {
			const doc = JSON.parse(line);
			if (doc.text) {
				// Tokenize Ainu text: split on whitespace and punctuation boundaries
				const tokens = doc.text.split(/[\s,;:!?。，、；：！？]+/);
				for (const tok of tokens) {
					if (!tok) continue;
					// Normalize: strip person markers (=), hyphens, lowercase
					const norm = tok.toLowerCase()
						.replace(/^[aeioukkmnprstwy']+=/, '') // strip person prefix
						.replace(/[-=]/g, '')
						.replace(/[.。]+$/, '');
					if (norm.length >= 2 && /^[aeioukkmnprstwy'']+$/.test(norm)) {
						corpusTokens.add(norm);
					}
				}
			}
		} catch {}
	}
	console.log(`  corpus: ${corpusSize} sentences, ${corpusTokens.size} unique tokens`);
}

await buildCorpusIndex();

// ------------------------------------------------------------------ verify chapters

const findings: Finding[] = [];
let findingCounter = 0;

function addFinding(chapter: string, line: number, task: 'A'|'B'|'C'|'D', severity: 'high'|'medium'|'low', type: string, detail: string, extra?: Partial<Finding>) {
	if (taskFilter && task !== taskFilter) return;
	findingCounter++;
	findings.push({
		id: `${chapter}#ver-${String(findingCounter).padStart(4, '0')}`,
		chapter, line, task, severity, type, detail,
		...extra,
	});
}

const files = readdirSync(CHAPTER_DIR)
	.filter(f => f.endsWith('.svelte'))
	.sort();

for (const file of files) {
	const slug = file.replace(/\.svelte$/, '');
	if (chapterFilter && slug !== chapterFilter) continue;

	// Skip generated apparatus chapters
	if (slug.startsWith('index-of-') || slug === 'consolidated-references-bibliography') continue;

	const content = readFileSync(join(CHAPTER_DIR, file), 'utf8');
	const lines = content.split('\n');

	// Task A: Form attestation
	// Extract Ainu forms from <A w="..."> and m="..." attributes
	const formRegex = /(?:<A\s+[^>]*w="([^"]*)"|m="([^"]*)")/g;
	let fm;
	while ((fm = formRegex.exec(content)) !== null) {
		const rawForm = (fm[1] || fm[2] || '').trim();
		if (!rawForm || rawForm.length < 2) continue;
		const lineNum = content.slice(0, fm.index).split('\n').length;

		// Skip single-letter prefixes like "e-" (applicative) — these are morpheme labels, not forms
		if (/^[aeioukkmnprstwy']{1}[-=]?$/.test(rawForm)) continue;

		// Normalize for lookup: lowercase, strip separators
		const norm = rawForm.toLowerCase().replace(/[-=]/g, '');

		// Skip if it looks like an English word or a gloss (must be Ainu phonotactics)
		if (!/^[aeioukkmnprstwy'']+$/.test(norm)) continue;
		if (norm.length > 30) continue; // too long to be a single word

		// Check attestation — try multiple normalizations for polysynthetic words
		const fullNorm = norm;
		// Strip leading person/antipassive prefixes (ku=, e=, ci=, a=, i=, etc.)
		const strippedRoot = norm.replace(/^(?:ku|eci|ci|e|a|i|as|ka|ta)(?=[aeioukkmnprstwy'])/, '');
		// Also split into morpheme segments on the raw form's hyphens
		const segments = rawForm.toLowerCase().split(/[-=]/).filter(s => s.length >= 2);

		const checkForm = (f: string) =>
			corpusTokens.has(f) || morphemeSurfaces.has(f) ||
			lexemeSurfaces.has(f) || attestedForms.has(f);

		const inFull = checkForm(fullNorm);
		const inRoot = strippedRoot !== fullNorm && checkForm(strippedRoot);
		const inSegments = segments.length >= 1 && segments.some(s =>
			/^[aeioukkmnprstwy'']+$/.test(s) && checkForm(s));

		const attested = inFull || inRoot || inSegments;

		if (!attested) {
			addFinding(slug, lineNum, 'A', 'medium', 'unattested-form',
				`Form "${rawForm}" not found in corpus, morpheme DB, lexeme bank, or attestation cache (full, root, or segment match)`,
				{ form: rawForm });
		}
	}

	// Task B: Citation key existence
	const refRegex = /<Ref\s+k="([^"]*)"/g;
	let rm;
	while ((rm = refRegex.exec(content)) !== null) {
		const key = rm[1];
		const lineNum = content.slice(0, rm.index).split('\n').length;
		if (!bibKeys.has(key)) {
			addFinding(slug, lineNum, 'B', 'high', 'missing-bib-key',
				`Citation key "${key}" not found in bibliography.ts`,
				{ citation: key });
		}
	}

	// Task C: Pageless citations to prior-analysis sources
	const pagelessRefRegex = /<Ref\s+k="([^"]*)"(?!\s[^>]*p=)[^>]*\/>/g;
	let pm;
	while ((pm = pagelessRefRegex.exec(content)) !== null) {
		const key = pm[1];
		const lineNum = content.slice(0, pm.index).split('\n').length;
		// Only flag for prior-analysis sources (not field notes or corpus data)
		// Prior-analysis sources typically have author-year keys like nakagawa2024, bugaeva2016
		if (/^[a-z]+\d{4}/.test(key)) {
			addFinding(slug, lineNum, 'C', 'low', 'pageless-citation',
				`Citation to "${key}" has no page number — consider adding p="§..." for verifiability`,
				{ citation: key });
		}
	}

	// Task D: Morpheme structure claims
	// Look for claims like "X derives from Y" or "X is composed of Y+Z"
	// and verify against morpheme_db analyses.
	// Only flag forms that look Ainu (phonotactics) AND are wrapped in <i> or have
	// Ainu-specific structure (hyphens, person prefixes). English linguistic terms
	// like "locative", "inverse", "copula" are filtered out by the phonotactics test.
	const derivationRegex = /(?:derives?\s+from|composed\s+of|analy[sz]ed\s+as|segment(?:ed|s)?\s+as)\s+(?:the\s+)?(?:bound\s+)?(?:morpheme|pronoun|prefix|suffix|root|stem)?\s*(?:<i[^>]*>)?([a-z][a-z0-9'=]*(?:-[a-z][a-z0-9'=]*)*)(?:<\/i>)?/gi;
	let dm;
	while ((dm = derivationRegex.exec(content)) !== null) {
		const raw = dm[1];
		const lineNum = content.slice(0, dm.index).split('\n').length;

		// Strip morpheme boundaries for lookup
		const claimedForm = raw.toLowerCase().replace(/[-=]/g, '');

		// Must look like an Ainu form: only Ainu phonemes, multi-morphemic (has - or =),
		// OR short enough to be a root. This excludes English terms like "locative",
		// "inverse", "copula", "verbal", "nominal", "Dal", "Ainu", "true", "verbs".
		const looksAinu = /^[aeioukkmnprstwy'']+$/.test(claimedForm)
			&& claimedForm.length >= 3
			&& claimedForm.length <= 15
			// Exclude common English linguistic / grammatical terms
			&& !/^(locative|inverse|copula|verbal|nominal|adverb|noun|verb|root|stem|prefix|suffix|ainu|dal|true|verbs|logophoric|onne|case|tense|aspect|mood|voice|person|number|gender|clitic|affix|morpheme|lexeme|token|type|word|phrase|clause|sentence|subject|object|agent|patient|one|two|three|four|five|six|seven|eight|nine|ten)$/.test(claimedForm);

		// Also require that the form actually contains Ainu-typical structure
		// (a hyphen, an =, or a vowel-initial morpheme) to catch real morphological claims
		const hasStructure = /[-=]/.test(raw) || /^[aeiou]/.test(claimedForm);

		// Skip CITED derivations — morphology attributed to a source is scholarship,
		// not a hallucination risk. Only UNcited derivational claims in the grammar's
		// own voice are genuine verification targets. Citations appear as <Ref> tags
		// OR as a `cite="..."` attribute on an <Ex>/<Ex2> element (often with the
		// analysis in a `note=` attribute). Check both the trailing and leading windows.
		const window = content.slice(dm.index, dm.index + 260);
		const windowBefore = content.slice(Math.max(0, dm.index - 220), dm.index);
		const span = windowBefore + window;
		const isCited = /<Ref\b/.test(span) || /\bcite\s*=\s*["']/.test(span);

		if (looksAinu && hasStructure && !isCited && !morphemeSurfaces.has(claimedForm) && !lexemeSurfaces.has(claimedForm)) {
			addFinding(slug, lineNum, 'D', 'medium', 'unverified-derivation',
				`UNcited derivation claim references "${raw}" which is not in morpheme_db or lexeme_db`,
				{ form: raw });
		}
	}
}

// ------------------------------------------------------------------ output

const summary: Record<string, number> = {};
for (const f of findings) {
	const key = `${f.task}:${f.type}`;
	summary[key] = (summary[key] || 0) + 1;
}

const report: Report = {
	generated: new Date().toISOString(),
	corpus_size: corpusSize,
	morpheme_forms: morphemeSurfaces.size,
	lexemes: lexemeSurfaces.size,
	summary,
	findings: findings.sort((a, b) => {
		const sev = { high: 0, medium: 1, low: 2 };
		return sev[a.severity] - sev[b.severity];
	}),
};

writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));

console.log(`\nverification: ${findings.length} findings across ${files.length} chapters`);
console.log('Summary by task:type:');
for (const [key, count] of Object.entries(summary).sort((a, b) => b[1] - a[1])) {
	console.log(`  ${key}: ${count}`);
}
console.log(`\nReport written to: ${REPORT_PATH}`);
