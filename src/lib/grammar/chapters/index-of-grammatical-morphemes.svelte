<script lang="ts">
	import { S, Xr } from '$lib/grammar/components';
	import { chapters } from '$lib/grammar/toc';
	type Entry = { form: string; topic: string; chapters: number[] };
	const person: Entry[] = [
		{
			form: 'ku=, e=, en=',
			topic: 'First- and second-person singular marking',
			chapters: [63, 66]
		},
		{ form: 'ci=, =as', topic: 'Exclusive plural forms and narrative uses', chapters: [64, 150] },
		{ form: 'eci=', topic: 'Second plural and interaction forms', chapters: [65, 69] },
		{
			form: 'a=, =an, i=',
			topic: 'Fourth-person paradigms and contextual reference',
			chapters: [67, 68, 70]
		},
		{
			form: 'kani, eani, coka, aoka',
			topic: 'Independent pronouns and regional paradigms',
			chapters: [49]
		}
	];
	const nominal: Entry[] = [
		{ form: '-V, -VhV', topic: 'Affiliative noun forms and suffix patterns', chapters: [44, 45] },
		{ form: '-po', topic: 'Diminutive and affective noun formation', chapters: [38] },
		{ form: 'utar', topic: 'Plural and group expressions', chapters: [41] },
		{ form: 'kor', topic: 'Possessive predicates and noun phrases', chapters: [43, 46, 98] },
		{
			form: 'or, ka, pok',
			topic: 'Spatial nouns and their grammatical behavior',
			chapters: [52, 53]
		},
		{
			form: 'ta, un, wa, ani',
			topic: 'Locative, directional, source, and instrumental expressions',
			chapters: [53]
		},
		{ form: 'tan, toan, nea', topic: 'Demonstratives and reference', chapters: [50] },
		{
			form: 'nep, nen, hemanta, hunna',
			topic: 'Interrogative and indefinite expressions',
			chapters: [51]
		},
		{ form: '-p/-pe, -n/-iw', topic: 'Numeral formations and counting', chapters: [54, 55] },
		{ form: '-no', topic: 'Adverbial formation', chapters: [61] }
	];
	const predicates: Entry[] = [
		{ form: '-pa', topic: 'Verbal number and repeated action', chapters: [58] },
		{ form: '-re/-e/-te', topic: 'Causative formation and allomorphy', chapters: [74, 76] },
		{ form: '-ka, -ke', topic: 'Lexical valency pairs and their suffixes', chapters: [75] },
		{ form: 'yar', topic: 'Permissive and sociative causation', chapters: [77] },
		{ form: 'e-', topic: 'Applicative constructions', chapters: [79] },
		{ form: 'ko-', topic: 'Applicative constructions', chapters: [80] },
		{ form: 'o-', topic: 'Applicative constructions', chapters: [81] },
		{ form: 'i-', topic: 'Unspecified-object and antipassive analyses', chapters: [83] },
		{
			form: 'yay-, si-',
			topic: 'Reflexive, possessive, and related derivations',
			chapters: [84, 85]
		},
		{ form: 'u-', topic: 'Reciprocal and lexical formations', chapters: [86] },
		{ form: 'ci-', topic: 'Middle and related analyses', chapters: [87] },
		{
			form: 'N + V; locative noun + particle',
			topic: 'Incorporation, quasi-incorporation, and wordhood',
			chapters: [88, 89, 90]
		},
		{ form: 'ne', topic: 'Copular predication', chapters: [96] },
		{ form: 'an, oka(y)', topic: 'Existential and aspectual constructions', chapters: [97, 110] }
	];
	const clause: Entry[] = [
		{
			form: 'p/pe, hi/i, h(e), usi',
			topic: 'Nominal heads and nominalizing constructions',
			chapters: [101, 102, 106]
		},
		{ form: 'sekor', topic: 'Quotation and reported discourse', chapters: [105, 150] },
		{ form: 'kuni', topic: 'Complement and purpose constructions', chapters: [107] },
		{ form: 'a, rok, aan', topic: 'Earlier situations, aspect, and discovery', chapters: [111] },
		{
			form: 'kane, kor, wa',
			topic: 'Continuation and sustained states',
			chapters: [110, 112, 134]
		},
		{ form: 'yan, ya', topic: 'Imperatives and invitation endings', chapters: [114, 143] },
		{ form: 'ro, rok', topic: 'Hortative and optative expressions', chapters: [115] },
		{ form: 'rusuy', topic: 'Desire constructions', chapters: [116] },
		{ form: 'easkay, eaykap', topic: 'Ability and inability', chapters: [117, 128] },
		{
			form: 'ruwe, siri, hawe, humi',
			topic: 'Evidential constructions and competing analyses',
			chapters: [120, 121, 122, 123, 124]
		},
		{ form: 'somo, ka somo ki', topic: 'Clausal negation', chapters: [126, 129] },
		{ form: 'isam', topic: 'Negative existence and possession', chapters: [127] },
		{ form: 'iteki', topic: 'Prohibitions', chapters: [130] },
		{
			form: 'wa, hine, akusu',
			topic: 'Sequential clauses and narrative linkage',
			chapters: [132, 133, 138]
		},
		{ form: 'yak, yakun, yakka', topic: 'Conditional and concessive clauses', chapters: [135] },
		{ form: 'kusu', topic: 'Reason and purpose', chapters: [136] },
		{
			form: 'anak, anakne, ka, patek',
			topic: 'Topic, focus, and related discourse uses',
			chapters: [139, 140]
		}
	];
</script>

<S t="Finding a form or construction" id="using-index">
	<p>
		This index selects grammatical forms and constructions discussed in the chapters. A spelling may
		have several functions: person
		<i lang="ain-Latn">i=</i> and derivational
		<i lang="ain-Latn">i-</i>, for example, have separate entries. The topic labels guide lookup;
		the linked chapters give analyses, restrictions, regional forms, and examples.
	</p>
	<p>
		Some entries are words or multiword constructions. Their inclusion here does not classify them
		all as affixes. In normalized examples,
		<code>=</code> separates person marking and <code>-</code>
		marks analyzed word-internal boundaries. See
		<Xr ch="abbreviations-glossing-symbols" /> for source conventions.
	</p>
</S>

{#snippet table(entries: Entry[])}
	<table>
		<thead><tr><th>Form</th><th>Discussion</th><th>Chapters</th></tr></thead>
		<tbody>
			{#each entries as entry}
				<tr>
					<td><i lang="ain-Latn">{entry.form}</i></td><td>{entry.topic}</td>
					<td
						>{#each entry.chapters as number, i}{#if i > 0},
							{/if}<a
								href={`/grammar/${chapters[number - 1].slug}`}
								title={chapters[number - 1].title}>{number}</a
							>{/each}</td
					>
				</tr>
			{/each}
		</tbody>
	</table>
{/snippet}

<S t="Person forms" id="person">{@render table(person)}</S>
<S t="Nominal and adverbial forms" id="nominal">{@render table(nominal)}</S>
<S t="Predicates and derivation" id="predicates">{@render table(predicates)}</S>
<S t="Clause structure, aspect, and discourse" id="clause">{@render table(clause)}</S>
