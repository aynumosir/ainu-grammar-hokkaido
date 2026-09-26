/**
 * validate.ts — schema and reference checks over kb/.
 *
 *   bun scripts/kb/validate.ts
 *
 * Every record is validated against kb/schema/kb.schema.json; ids must be unique
 * within their kind; every reference (broader topics, sentence and example topics,
 * statement sources, assets and topics, doculects) must resolve. Exits 1 on errors.
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import Ajv2020 from 'ajv/dist/2020';
import { KB, readJsonl } from './lib';

const schema = JSON.parse(readFileSync(join(KB, 'schema/kb.schema.json'), 'utf8'));
const ajv = new Ajv2020({ allErrors: false, strict: false });
ajv.addSchema(schema);
const validators = Object.fromEntries(
	Object.keys(schema.$defs).map((k) => [k, ajv.compile({ $ref: `${schema.$id}#/$defs/${k}` })])
);

const errors: string[] = [];
const warnings: string[] = [];

function check(kind: string, rows: Record<string, unknown>[], file: string) {
	const v = validators[kind];
	const ids = new Set<string>();
	rows.forEach((row, i) => {
		if (!v(row)) errors.push(`${file}:${i + 1} ${kind}: ${ajv.errorsText(v.errors)}`);
		const id = String(row.id ?? '');
		if (id) {
			if (ids.has(id)) errors.push(`${file}:${i + 1} duplicate id ${id}`);
			ids.add(id);
		}
	});
	return ids;
}

const topics = readJsonl(join(KB, 'registries/topics.jsonl'));
const sources = readJsonl(join(KB, 'registries/sources.jsonl'));
const doculects = readJsonl(join(KB, 'registries/doculects.jsonl'));
const agents = readJsonl(join(KB, 'registries/agents.jsonl'));
const topicIds = check('topic', topics, 'registries/topics.jsonl');
const sourceIds = check('source', sources, 'registries/sources.jsonl');
const doculectIds = check('doculect', doculects, 'registries/doculects.jsonl');
const agentIds = check('agent', agents, 'registries/agents.jsonl');
const sourceKeys = new Set(sources.map((s) => String(s.key)));

for (const t of topics) {
	for (const b of (t.broader as string[]) ?? []) if (!topicIds.has(b)) errors.push(`topic ${t.id}: broader ${b} unresolved`);
	for (const r of (t.related as string[]) ?? []) if (!topicIds.has(r)) errors.push(`topic ${t.id}: related ${r} unresolved`);
}
for (const d of doculects) {
	if (d.broader && !doculectIds.has(String(d.broader))) errors.push(`doculect ${d.id}: broader ${d.broader} unresolved`);
}

const sentences = readJsonl(join(KB, 'imports/book-v1/sentences.jsonl'));
check('sentence', sentences, 'imports/book-v1/sentences.jsonl');
const missingCiteKeys = new Map<string, number>();
for (const s of sentences) {
	if (!topicIds.has(String(s.topic))) errors.push(`sentence ${s.id}: topic ${s.topic} unresolved`);
	for (const c of (s.citations as { key: string }[]) ?? [])
		if (!sourceKeys.has(c.key)) missingCiteKeys.set(c.key, (missingCiteKeys.get(c.key) ?? 0) + 1);
}
for (const [k, n] of missingCiteKeys) warnings.push(`citation key ${k} not in sources (${n} uses)`);

const exDir = join(KB, 'examples');
if (existsSync(exDir))
	for (const f of readdirSync(exDir).filter((f) => f.endsWith('.jsonl'))) {
		const rows = readJsonl(join(exDir, f));
		check('example', rows, `examples/${f}`);
		for (const e of rows) {
			if (!topicIds.has(String(e.topic))) errors.push(`example ${e.id}: topic ${e.topic} unresolved`);
			const c = e.citation as { key: string } | null;
			if (c && !sourceKeys.has(c.key)) warnings.push(`example ${e.id}: citation key ${c.key} not in sources`);
			if (e.doculect && !doculectIds.has(String(e.doculect))) errors.push(`example ${e.id}: doculect ${e.doculect} unresolved`);
		}
	}

const assetIds = new Set<string>();
const assetDir = join(KB, 'assets');
if (existsSync(assetDir))
	for (const f of readdirSync(assetDir).filter((f) => f.endsWith('.json'))) {
		const row = JSON.parse(readFileSync(join(assetDir, f), 'utf8'));
		check('asset', [row], `assets/${f}`);
		assetIds.add(row.id);
		if (!sourceIds.has(row.source)) errors.push(`asset ${row.id}: source ${row.source} unresolved`);
	}

const stDir = join(KB, 'statements');
let statementCount = 0;
const statementIds = new Set<string>();
if (existsSync(stDir))
	for (const f of readdirSync(stDir).filter((f) => f.endsWith('.jsonl'))) {
		const rows = readJsonl(join(stDir, f));
		statementCount += rows.length;
		check('statement', rows, `statements/${f}`);
		for (const s of rows) {
			statementIds.add(String(s.id));
			if (!sourceIds.has(String(s.source))) errors.push(`statement ${s.id}: source ${s.source} unresolved`);
			if (!assetIds.has(String(s.asset))) errors.push(`statement ${s.id}: asset ${s.asset} unresolved`);
			for (const t of (s.topics as string[]) ?? []) if (!topicIds.has(t)) errors.push(`statement ${s.id}: topic ${t} unresolved`);
			for (const d of ((s.scope as { doculects?: string[] })?.doculects ?? []))
				if (!doculectIds.has(d)) warnings.push(`statement ${s.id}: doculect ${d} unresolved`);
		}
	}

const claimDir = join(KB, 'claims');
let claimCount = 0;
const claimIds = new Set<string>();
const claimRows: { file: string; row: Record<string, unknown> }[] = [];
if (existsSync(claimDir))
	for (const f of readdirSync(claimDir).filter((f) => f.endsWith('.jsonl'))) {
		const rows = readJsonl(join(claimDir, f));
		claimCount += rows.length;
		check('claim', rows, `claims/${f}`);
		for (const c of rows) {
			if (claimIds.has(String(c.id))) errors.push(`claim ${c.id}: id also used in another file`);
			claimIds.add(String(c.id));
			claimRows.push({ file: f, row: c });
		}
	}
const memberSeen = new Map<string, string>();
for (const { row: c } of claimRows) {
	if (!topicIds.has(String(c.topic))) errors.push(`claim ${c.id}: topic ${c.topic} unresolved`);
	for (const t of (c.topics as string[]) ?? []) if (!topicIds.has(t)) errors.push(`claim ${c.id}: topic ${t} unresolved`);
	for (const m of (c.statements as { id: string }[]) ?? []) {
		if (!statementIds.has(m.id)) errors.push(`claim ${c.id}: member ${m.id} unresolved`);
		const prev = memberSeen.get(m.id);
		if (prev) errors.push(`statement ${m.id} is a member of ${prev} and ${c.id}`);
		memberSeen.set(m.id, String(c.id));
	}
	for (const r of (c.relations as { claim: string }[]) ?? []) if (!claimIds.has(r.claim)) errors.push(`claim ${c.id}: relation target ${r.claim} unresolved`);
}

const narrDir = join(KB, 'narrative');
let narrativeCount = 0;
if (existsSync(narrDir)) {
	const narrIds = new Set<string>();
	for (const f of readdirSync(narrDir).filter((f) => f.endsWith('.jsonl'))) {
		const rows = readJsonl(join(narrDir, f));
		narrativeCount += rows.length;
		check('narrative', rows, `narrative/${f}`);
		for (const n of rows) {
			if (narrIds.has(String(n.id))) errors.push(`narrative ${n.id}: id also used`);
			narrIds.add(String(n.id));
			if (!topicIds.has(String(n.topic))) errors.push(`narrative ${n.id}: topic ${n.topic} unresolved`);
			if (n.section != null && !topicIds.has(String(n.section))) errors.push(`narrative ${n.id}: section ${n.section} unresolved`);
			for (const c of (n.claims as string[]) ?? []) if (!claimIds.has(c)) errors.push(`narrative ${n.id}: claim ${c} unresolved`);
			for (const c of (n.uncovered as string[]) ?? []) if (!claimIds.has(c)) errors.push(`narrative ${n.id}: claim ${c} unresolved`);
		}
	}
}

const actDir = join(KB, 'activities');
if (existsSync(actDir))
	for (const f of readdirSync(actDir).filter((f) => f.endsWith('.jsonl'))) {
		const rows = readJsonl(join(actDir, f));
		check('activity', rows, `activities/${f}`);
		for (const a of rows) if (!agentIds.has(String(a.agent))) errors.push(`activity ${a.id}: agent ${a.agent} unresolved`);
	}

console.log(
	`topics ${topics.length}, sources ${sources.length}, doculects ${doculects.length}, sentences ${sentences.length}, assets ${assetIds.size}, statements ${statementCount}, claims ${claimCount}, narrative units ${narrativeCount}`
);
for (const w of warnings.slice(0, 40)) console.log(`warn: ${w}`);
if (warnings.length > 40) console.log(`… ${warnings.length - 40} more warnings`);
for (const e of errors.slice(0, 60)) console.error(`error: ${e}`);
if (errors.length > 60) console.error(`… ${errors.length - 60} more errors`);
console.log(`${errors.length} errors, ${warnings.length} warnings`);
process.exit(errors.length ? 1 : 0);
