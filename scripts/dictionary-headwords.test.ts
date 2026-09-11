import { expect, test } from 'bun:test';
import { dictionaryHeadword } from './dictionary-headwords';

test('Nakagawa noun annotations retain the lexical word for phonotactics', () => {
	for (const suffix of ['-i', '-ke', '-i-ke', '-i=ke', '-si, -ke', 'ke']) {
		expect(dictionaryHeadword('nakagawa1995', `rur, ${suffix}`, '名')).toBe('rur');
	}
	expect(dictionaryHeadword('nakagawa1995', 'rep², -ke', '位名')).toBe('rep');
});

test('phrase continuations never count as bare lexical words', () => {
	for (const heading of ['ka,-si oyki', 'kes,-e anpa', 'nu,-we koan', 'kip, -iniwkes']) {
		expect(dictionaryHeadword('nakagawa1995', heading, '連動')).toBe(heading);
	}
	expect(dictionaryHeadword('nakagawa1995', 'ka,-si oyki')).toBe('ka,-si oyki');
	expect(dictionaryHeadword('nakagawa1995', '-kar³')).toBe('-kar³');
	expect(dictionaryHeadword('tamura1996', 'rur, -i')).toBe('rur, -i');
});
