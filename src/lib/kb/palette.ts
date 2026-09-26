/**
 * Node colours of the knowledge-base network, one hue per record kind, in a fixed
 * order validated for colour-vision deficiency on the site's light (#f8fafc) and
 * dark (#0b1120) canvases. Text and legends use the site's text tokens; the hue
 * only marks identity.
 */
export const KINDS = ['chapter', 'source', 'section', 'example', 'form', 'statement', 'part', 'claim'] as const;
export type Kind = (typeof KINDS)[number];

const LIGHT: Record<Kind, string> = {
	chapter: '#2a78d6',
	source: '#eb6834',
	section: '#1baf7a',
	example: '#eda100',
	form: '#e87ba4',
	statement: '#008300',
	part: '#4a3aa7',
	claim: '#e34948'
};
const DARK: Record<Kind, string> = {
	chapter: '#3987e5',
	source: '#d95926',
	section: '#199e70',
	example: '#c98500',
	form: '#d55181',
	statement: '#008300',
	part: '#9085e9',
	claim: '#e66767'
};

export const KIND_LABEL: Record<Kind, string> = {
	chapter: 'Topic (chapter)',
	source: 'Source',
	section: 'Topic (section)',
	example: 'Example',
	form: 'Form',
	statement: 'Statement',
	part: 'Part',
	claim: 'Claim'
};

export function kindColor(kind: string, dark: boolean): string {
	const k = (KINDS as readonly string[]).includes(kind) ? (kind as Kind) : 'chapter';
	return dark ? DARK[k] : LIGHT[k];
}

export const REL_LABEL: Record<string, string> = {
	in: 'belongs to',
	cites: 'cites',
	xref: 'cross-reference',
	form: 'form mentioned in',
	states: 'statement routed to',
	claims: 'claim under',
	asserts: 'asserts',
	proposes: 'proposes',
	doubts: 'doubts',
	rejects: 'rejects',
	reports: 'reports',
	presupposes: 'presupposes',
	contradicts: 'contradicts',
	refines: 'refines',
	contrasts: 'contrasts with',
	supports: 'supports'
};
