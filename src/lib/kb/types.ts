/** Shapes of the static projections written by scripts/kb/build.ts. */

export interface Label {
	en: string;
	ja?: string;
}
export interface GraphNode {
	id: string;
	kind: string;
	label: string;
	part?: number;
	n: number;
	statements?: number;
	claims?: number;
	lang?: string;
	href?: string;
	center?: boolean;
	depth?: number;
}
export interface GraphLink {
	source: string;
	target: string;
	rel: string;
	w: number;
}
export interface GraphData {
	nodes: GraphNode[];
	links: GraphLink[];
}

export interface Citation {
	key: string;
	pages: string | null;
}
export interface SentenceCard {
	id: string;
	para: number;
	index: number;
	text: string;
	citations: Citation[];
	grades: string[];
	xrefs: string[];
	forms: string[];
}
export interface ExampleCard {
	id: string;
	section: string;
	text: string;
	gloss: string;
	translation: string;
	kana: string | null;
	literal: string | null;
	citations: Citation[];
	constructed: boolean;
	dialect_tag: string | null;
	doculect: string | null;
	place: string | null;
	note: string | null;
}
export interface Scope {
	doculects?: string[];
	quantifier?: string;
	modality?: string;
	conditions?: string[];
}
export interface StatementCard {
	id: string;
	source: string;
	key: string;
	leaf: number | null;
	printed: number | string | null;
	en: string;
	ja: string;
	type: string;
	stance: string;
	scope: Scope;
	forms: string[];
	topics: string[];
	match: number | null;
	status: string;
	verification: Record<string, unknown> | null;
	claim: string | null;
}
export interface ClaimMember {
	id: string;
	key: string | null;
	printed: number | string | null;
	stance: string;
	status: string | null;
}
export interface ClaimRelation {
	kind: string;
	claim: string;
	differs_in: string | null;
	note: string | null;
	en: string | null;
}
export interface ClaimCard {
	id: string;
	en: string;
	ja: string;
	type: string;
	scope: Scope;
	forms: string[];
	section: string | null;
	section_label: string | null;
	support: Record<string, string[]>;
	members: ClaimMember[];
	relations: ClaimRelation[];
	status: string;
}
export interface NarrativeUnit {
	id: string;
	section: string | null;
	en: string;
	ja: string;
	claims: string[];
	uncovered: string[];
	unsupported: number;
	sentences: number;
	model: string;
	status: string;
}
export interface TopicPage {
	topic: { id: string; slug: string; num: number; title: string; summary: string; home: string; question: Label | null; status: string };
	part: { id: string; label: string };
	neighbours: { prev: { slug: string; title: string } | null; next: { slug: string; title: string } | null };
	intro: SentenceCard[];
	sections: { id: string; sid: string; label: string; question: Label | null; depth: number; sentences: SentenceCard[]; examples: string[]; statements: string[]; claims: string[] }[];
	examples: ExampleCard[];
	sources: { key: string; known: boolean; label: string; title: string; count: number; pageless: number; statements: number }[];
	related: { slug: string; id: string; title: string; w: number }[];
	forms: { form: string; count: number }[];
	statements: StatementCard[];
	claims: ClaimCard[];
	narrative: NarrativeUnit[];
	counts: { sections: number; sentences: number; examples: number; statements: number; claims: number; sources: number; cited: number };
	graph: GraphData;
}
export interface SourceClaim {
	id: string;
	en: string;
	ja: string;
	stances: string[];
	members: number;
	support: Record<string, string[]>;
	topic: { slug: string | null; title: string };
}
export interface SourcePage {
	source: Record<string, string | boolean | null> & { key: string; label: string; title: string };
	asset: { id: string; engine: string; leaves: number; mapped: number; calibration: Record<string, unknown> } | null;
	cited_by: { slug: string; title: string; count: number }[];
	citations: { id: string; chapter: string; chapter_title: string; section: string; pages: (string | null)[]; text: string }[];
	examples: ExampleCard[];
	statements: StatementCard[];
	statement_topics: { id: string; slug: string | null; section: string | null; title: string; count: number }[];
	claims: SourceClaim[];
	counts: { cited_by: number; citations: number; examples: number; statements: number; claims: number };
}
export interface KbIndex {
	generated: string;
	book_revision: string | null;
	counts: Record<string, number>;
	parts: {
		id: string;
		label: string;
		home: string;
		order: number;
		chapters: { id: string; slug: string; num: number; title: string; summary: string; question: Label | null; sections: number; sentences: number; examples: number; statements: number; claims: number; sources: number }[];
	}[];
	sources: { key: string; label: string; title: string; year: string; lang: string; role: string | null; db_slug: string | null; cited_by: number; citations: number; statements: number; claims: number }[];
	assets: { id: string; source: string; engine: string; leaves: number; mapped: number }[];
}

export interface CoverageSection {
	id: string;
	sid: string;
	label: string;
	depth: number;
	sentences: number;
	statements: number;
	claims: number;
}
export interface CoverageChapter {
	slug: string;
	num: number;
	title: string;
	statements: number;
	chapter_level: number;
	claims: number;
	sources: string[];
	sections: CoverageSection[];
	covered: number;
}
export interface CoveragePage {
	generated: string;
	totals: { sections: number; covered: number; chapters: number; chapters_covered: number };
	parts: { id: string; label: string; chapters: CoverageChapter[] }[];
}
export interface DisagreementSide {
	id: string;
	en: string;
	ja: string;
	support: Record<string, string[]>;
}
export interface DisagreementRow {
	kind: string;
	differs_in: string | null;
	note: string | null;
	topic: { slug: string | null; title: string; order: number };
	a: DisagreementSide;
	b: DisagreementSide;
}
export interface DisagreementsPage {
	generated: string;
	count: number;
	rows: DisagreementRow[];
}
