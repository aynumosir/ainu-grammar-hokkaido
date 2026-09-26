<script lang="ts">
	import { S, Ex, Ref, Xr } from '$lib/grammar/components';
</script>

<S t="Word classes and their grammatical behavior" id="inventory">
	<p>
		Ainu word classes are distinguished by their behavior in phrases and clauses, their person
		marking, and their capacity to combine with other elements. A translation such as “good,”
		“above,” or “then” gives only part of the information needed to describe that behavior <Ref
			k="nakagawa2024"
			p="115–117"
		/>. The principal descriptions differ in how they group dependent forms and divide the nominal
		domain.
	</p>
	<table>
		<caption>Classification schemes in the principal descriptions</caption>
		<thead><tr><th>Description</th><th>Organization</th></tr></thead>
		<tbody>
			<tr
				><td><Ref k="nakagawa2024" p="116–118" /></td><td
					>Verbs, nouns, adverbs, prenominals, interjections, particles; auxiliaries belong to
					particles.</td
				></tr
			>
			<tr
				><td><Ref k="nakagawa2022pos" p="§1, Table 1" /></td><td
					>Seven classes, with auxiliaries separate from particles.</td
				></tr
			>
			<tr
				><td><Ref k="sato2008" p="3" /></td><td
					>Six major classes; the noun subclasses include pronouns, numeral nouns, formal nouns, and
					nominalizers.</td
				></tr
			>
			<tr
				><td><Ref k="refsing1986" p="74–77, §11" /></td><td
					>Nominals, verbals, and clitics, each with subdivisions.</td
				></tr
			>
			<tr
				><td><Ref k="bugaeva2012" p="469" /></td><td
					>A revised presentation of Tamura's classification, with separate pronoun and conjunction
					labels.</td
				></tr
			>
		</tbody>
	</table>
	<p>
		Refsing's <em>nominals</em> include free conjunctions, interjections, and adverbs as well as
		noun-like forms. Her broad category <em>clitics</em> includes adnouns and affixes <Ref
			k="refsing1986"
			p="74–77"
		/>. These groupings describe several degrees of syntactic and morphological dependence.
	</p>
</S>

<S t="Predicates, arguments, and modifiers" id="diagnostics">
	<S t="Verbs" id="verb-diagnostics">
		<p>
			Verbs head predicates. Their subclasses differ in the arguments they license and the person
			series they take. Intransitives take S marking; transitives use A and O marking; the copula
			has its own combination of properties
			<Ref k="bugaeva2012" p="470–471" />. Zero-argument verbs, such as
			<i lang="ain-Latn">sir-pirka</i> “be good weather,” take no person marking. Third-person
			arguments also have zero marking, so a bare verb need not be zero-argument <Ref
				k="sato2008"
				p="3"
			/>;
			<Ref k="bugaeva2012" p="470–471" />.
		</p>
		<p>
			The person markers of a transitive verb can both precede the stem. Shibatani's
			<i lang="ain-Latn">a-e-koyki</i> “I kill you,” labelled Itadori, illustrates A and O prefixes
			in that order <Ref k="shibatani1990" p="19, example 14a" />. The paradigms are described in <Xr
				ch="person-marking-architecture"
			/>.
		</p>
	</S>
	<S t="Nouns" id="noun-diagnostics">
		<p>
			Nouns head noun phrases that serve as predicate arguments. Common nouns, locative nouns,
			pronouns, and formal nouns differ in their morphology and independence <Ref
				k="nakagawa2024"
				p="214–217"
			/>. Common-noun
			<Xr ch="concept-form-affiliative-form">affiliative forms</Xr> use the A series for possessors; locative
			nouns use the O series for their reference point.
		</p>
		<Ex
			m="ku=tekehe"
			g="1SG.A=hand.POSS"
			tr="my hand"
			cite="nakagawa2024:216"
			place="Hokkaido, dialect not specified"
			note="Published comparison of person marking on common and locative nouns."
		/>
		<Ex
			m="en=ka"
			g="1SG.O=top"
			tr="above me"
			cite="nakagawa2024:216"
			place="Hokkaido, dialect not specified"
		/>
		<p>
			These series names identify the forms shared with verbal person marking. Their function on
			these nouns is to identify a possessor or reference point. The subclass distinctions are
			developed in
			<Xr ch="nominal-subclasses-and-bound-nouns" />.
		</p>
	</S>
	<S t="Formal nouns" id="formal-noun-diagnostics">
		<p>
			Formal nouns require a modifier, with the permitted modifier differing by item. They include <i
				lang="ain-Latn">p/pe</i
			>
			“thing, person” and
			<i lang="ain-Latn">hi</i> “fact, time, place.” They do not take the ordinary possessive person
			marking <Ref k="nakagawa2022pos" p="§§3.2–3.4" />. Their close phonological attachment and
			their ability to follow a whole clause have led to noun, particle, and clitic analyses; see
			<Xr ch="formal-defective-nouns" />.
		</p>
	</S>
	<S t="Adverbs" id="adverb-diagnostics">
		<p>
			Adverbs modify predicates. Postpositional adverbs additionally take a preceding expression or
			person marker specifying their reference. O-series marking is characteristic, but <i
				lang="ain-Latn">opitta</i
			>
			“all” takes A-series
			<i lang="ain-Latn">a=opitta</i> in Nakagawa's Saru example
			<Ref k="nakagawa2024" p="280–282, example 365" />. Person marking therefore distinguishes
			important patterns within the class without determining every member's classification.
		</p>
	</S>
	<S t="Prenominals" id="adnoun-diagnostics">
		<p>
			Prenominals, also called <em>adnouns</em>, precede and modify nouns. They include
			demonstrative and numeral forms. Bugaeva contrasts <i lang="ain-Latn">tan cise</i>
			“this house” with <i lang="ain-Latn">tan pe</i> “this,” where the formal noun provides a
			nominal head <Ref k="bugaeva2012" p="471" />. Nakagawa also records restricted combinations of
			demonstratives with case particles, including <i lang="ain-Latn">taan ta</i>
			<Ref k="nakagawa2024" p="288–289" />. Their distribution is described in
			<Xr ch="demonstratives-anaphora-definiteness" />.
		</p>
	</S>
	<S t="Particles and auxiliaries" id="particle-diagnostics">
		<p>
			Particles express case relations, clause linkage, focus, sentence-final meanings, and other
			grammatical functions. Dependence is a matter of degree:
			<i lang="ain-Latn">yakun</i>, classified as a conjunctive particle, can also begin a sentence
			meaning “then, in that case”
			<Ref k="nakagawa2024" p="294, example 405" />.
		</p>
		<p>
			Auxiliaries are a separate class in Nakagawa's 2022 account and a particle subclass in his
			2024 grammar <Ref k="nakagawa2022pos" p="§1" />;
			<Ref k="nakagawa2024" p="117, 294–295" />. Individual auxiliaries also differ:
			<i lang="ain-Latn">rusuy</i> “want to” can join a preceding verb before its person suffix,
			while the anterior/perfective form <i lang="ain-Latn">a</i>
			remains separate in the latter account <Ref k="nakagawa2024" p="294–295" />.
		</p>
	</S>
	<S t="Interjections" id="interjection-diagnostics">
		<p>
			Interjections function as independent utterances. Some forms also occur as verbs: Nakagawa
			records verbal uses of <i lang="ain-Latn">iokunnure</i> in Saru and Chitose, alongside its
			interjectional use
			<Ref k="nakagawa2024" p="292–293" />. Classification can consequently depend on the
			construction in which a form occurs.
		</p>
	</S>
</S>

<S t="Property predicates" id="no-adjective">
	<p>
		Modern descriptions generally include property predicates among verbs. They take verbal person
		marking and appear directly as predicates
		<Ref k="nakagawa2022pos" p="§§2.1–2.2" />;
		<Ref k="sato2008" p="2–3" />; <Ref k="bugaeva2012" p="470" />. Nakagawa's Saru example
		<i lang="ain-Latn">ku-pon hi ta</i>
		“when I was small” contains first-person S marking on <i lang="ain-Latn">pon</i> “small”
		<Ref k="nakagawa2022pos" p="§2.2, example 3" />.
	</p>
	<p>
		Kindaichi and Chiri's 1936 grammar uses an adjective category while recognizing the shared
		inflectional behavior <Ref k="kindaichi1936" p="92, §129" />. The history and diagnostics of
		this analysis are discussed in
		<Xr ch="no-adjective-class-property-verbs" />.
	</p>
</S>

<S t="Conversion and disputed category boundaries" id="boundaries">
	<S t="Verbs used as nouns" id="verb-noun-continuum">
		<p>
			Nakagawa describes nominal uses of intransitive verbs, diagnosed by their occurrence as
			objects and by the modifiers they take
			<Ref k="nakagawa2024" p="120–123" />. A verb before a noun can also remain the predicate of a
			modifying clause. Nominal conversion and clause modification therefore require separate
			descriptions; see
			<Xr ch="deverbal-denominal-noun-derivation" /> and
			<Xr ch="prenominal-gap-relative-clauses" />.
		</p>
	</S>
	<S t="Conjunctions" id="conjunctions">
		<p>
			Satō and Nakagawa distribute conjunction-like forms among adverbs and conjunctive particles <Ref
				k="sato2008"
				p="3"
			/>;
			<Ref k="nakagawa2024" p="117–118" />. Refsing groups free conjunctions with nominals, and
			Bugaeva's inventory gives conjunctions a separate label
			<Ref k="refsing1986" p="75–76" />; <Ref k="bugaeva2012" p="469" />. The accounts differ in the
			categories they use for forms of varying independence ‹contested›.
		</p>
	</S>
	<S t="Nominalizers and evidential forms" id="nominalizer-debate">
		<p>
			Satō provisionally separates nominalizers introducing content clauses from formal nouns <Ref
				k="sato2008"
				p="175, 180"
			/>. Nakagawa describes formal nouns and their complementizer functions, while Bugaeva
			classifies the evidential uses of
			<i lang="ain-Latn">ruwe</i>, <i lang="ain-Latn">hawe</i>,
			<i lang="ain-Latn">siri</i>, and <i lang="ain-Latn">humi</i> as particles
			<Ref k="nakagawa2024" p="258–259" />;
			<Ref k="bugaeva2012" p="470" /> ‹contested›. The constructions and their interpretations are treated
			in <Xr ch="lexical-head-formal-noun-nominalization" />
			and <Xr ch="evidential-schema-overview" />.
		</p>
	</S>
</S>
