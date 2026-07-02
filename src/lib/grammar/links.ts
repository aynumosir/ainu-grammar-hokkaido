/**
 * This grammar has no internal dictionary, so Ainu words and morphemes in
 * examples link out to the Itak-uoeroskip dictionary (itak.aynu.org). Centralised
 * here so the lookup target can be changed in one place.
 */
export const DICTIONARY_QUERY_BASE = 'https://itak.aynu.org/?q=';

/** Build a dictionary lookup URL for a (already-cleaned) query string. */
export function dictionaryUrl(query: string): string {
	return DICTIONARY_QUERY_BASE + encodeURIComponent(query);
}
