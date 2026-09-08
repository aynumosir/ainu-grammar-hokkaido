import { describe, expect, test } from 'bun:test';
import { countApplicatives, type Word } from './applicative-stats';
import generated from '../src/lib/grammar/data/mdb-applicative-stats.json';

const word = (overrides: Partial<Word> = {}): Word => ({
	lemma: 'etest',
	verb_lemma: 'etest',
	base_lemma: 'test',
	prefix: 'e-',
	role: 'content',
	confidence: 'high',
	status: 'attested',
	form: 'verb',
	...overrides
});

describe('MDB applicative counts', () => {
	test('excludes uncertain, coined, rejected and nominalized entries before counting', () => {
		const result = countApplicatives([
			word(),
			word({ lemma: 'uncertain', status: 'uncertain' }),
			word({ lemma: 'coined', status: 'coined' }),
			word({ lemma: 'rejected', status: 'excluded' }),
			word({ lemma: 'nominalized', form: 'nominalization' })
		]);
		expect(result.verbLemmas).toBe(1);
		expect(result.excluded).toEqual({ uncertain: 1, coined: 1, excluded: 1, nominalization: 1 });
		expect(result.prefixes[0].roles[0].percent).toBe(100);
	});

	test('counts citation variants once, preserving the weaker confidence', () => {
		const result = countApplicatives([word(), word({ lemma: 'aetest', confidence: 'medium' })]);
		expect(result.eligibleEntries).toBe(2);
		expect(result.verbLemmas).toBe(1);
		expect(result.prefixes[0].roles[0].confidence).toEqual({ high: 0, medium: 1, low: 0 });
	});

	test('rejects role conflicts instead of silently selecting a representative', () => {
		expect(() =>
			countApplicatives([word(), word({ lemma: 'aetest', role: 'instrument' })])
		).toThrow('Conflicting');
		expect(() => countApplicatives([word(), word()])).toThrow('Duplicate');
	});

	test('uses a separate denominator for each prefix and accepts an empty pool', () => {
		const result = countApplicatives([
			word(),
			word({ lemma: 'esecond', verb_lemma: 'esecond', role: 'instrument' }),
			word({ lemma: 'kotest', verb_lemma: 'kotest', prefix: 'ko-', role: 'addressee' })
		]);
		expect(result.prefixes.map((p) => p.denominator)).toEqual([2, 1, 0]);
		expect(result.prefixes[0].roles.map((r) => r.percent)).toEqual([50, 50]);
		expect(result.prefixes[1].roles[0].percent).toBe(100);
		expect(result.prefixes[2].roles).toEqual([]);
	});

	test('published aggregate retains consistent counts and denominators', () => {
		expect(
			generated.inputEntries - Object.values(generated.excluded).reduce((a, b) => a + b, 0)
		).toBe(generated.eligibleEntries);
		expect(generated.prefixes.reduce((n, p) => n + p.denominator, 0)).toBe(generated.verbLemmas);
		expect(generated.prefixes.map((p) => p.denominator)).toEqual([43, 34, 14]);
		for (const p of generated.prefixes) {
			for (const row of p.roles) {
				expect(row.percent).toBe(Math.round(1000 * row.count / p.denominator) / 10);
			}
			expect(p.roles.reduce((sum, r) => sum + r.count, 0)).toBe(p.denominator);
			expect(
				p.roles.reduce((sum, r) => sum + Object.values(r.confidence).reduce((a, b) => a + b, 0), 0)
			).toBe(p.denominator);
		}
	});
});
