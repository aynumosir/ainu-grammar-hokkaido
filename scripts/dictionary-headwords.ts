/** Separate Nakagawa's abbreviated forms from a single-word lexical heading.
 * Phrase notation remains intact so the single-word filter can exclude it. */
export function dictionaryHeadword(source: string, heading: string, pos = ''): string {
	if (source !== 'nakagawa1995') return heading;
	const parts = heading.trim().split(/[,，、]\s*/);
	if (parts.length > 1 && !pos.includes('連動')
		&& parts.slice(1).every(part => /^(?:-[^\s,，、]+|[aeiou]|ke)\??$/.test(part))) {
		return parts[0].replace(/[¹²³⁴⁵⁶⁷⁸⁹⁰]/g, '').trim();
	}
	return heading;
}
