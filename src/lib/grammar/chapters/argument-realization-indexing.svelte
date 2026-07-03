<!-- src/lib/grammar/chapters/argument-realization-indexing.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Overview" id="overview">
	<p>
		The predicate in Hokkaido Ainu carries obligatory person indexes that identify its core
		arguments: the sole argument S of an intransitive verb, and the agent A and patient O of a
		transitive verb. Overt noun phrases for those same roles are optional and, when present, stand
		in apposition to the index already on the verb rather than filling a case-marked argument slot.
		The result is a <em>head-marking</em> language in the sense of <Ref k="nichols1986" />: the
		predicate head encodes grammatical relations, and the dependent nominal does not.
		<Ref k="sato2025a" p="359–361" /> develops the contrast with dependent-marking languages such
		as Japanese, where the argument NP bears obligatory case particles. <Ref
			k="bugaeva2012"
			p="461, 472"
		/> states the profile concisely: Ainu is agglutinating, polysynthetic, and head-marking, with
		verb-final constituent order and a mixed (basically tripartite) morphological alignment.
	</p>

	<p>
		This chapter asks how S, A, and O are <em>realised</em> at the clause level: through bound
		indexes, through optional overt NPs, or through null. The person-affix paradigm itself — its
		cells, allomorphy, and the S/A/O distinctions — belongs to
		<Xr ch="person-marking-architecture" /> and the chapters that follow it. Morphological
		alignment is pursued in <Xr ch="alignment-hierarchical-and-the-debate" />. Pragmatic word
		order and topic fronting are treated in <Xr ch="constituent-order-head-final" /> and
		<Xr ch="pragmatic-word-order-dislocation" />. Reference tracking across clauses — zero
		anaphora, the fourth person in narrative, the absence of switch-reference morphology — is taken
		up in <Xr ch="reference-tracking" />.
	</p>
</S>

<S t="Obligatory indexing; the verb alone is a complete sentence" id="obligatory-indexing">
	<p>
		Person indexes are not optional agreement controllers: they are the grammatical realisation of
		the argument itself. A finite verb without any overt NP is a complete, well-formed sentence.
		The intransitive <A w="inkar" gl="look around" /> with its first-singular prefix is
		self-sufficient as a one-word utterance:
	</p>

	<Ex
		m="ku=inkar"
		g="1SG.A=look.around"
		tr="I look around."
		cite="sato2025a:355"
		dial="HK"
		note="After Tamura 1988: 72, cited in Satō 2025: 355. No overt pronoun or NP appears; the prefix ku= alone encodes the first-singular agent."
	/>

	<p>
		<Ref k="sato2025a" p="359–360" /> states the principle directly: "grammatical relations
		(subject and object) … are not obligatory elements in Ainu; rather it is the personal affixes
		that are obligatory for the predicates." <Ref k="bugaeva2012" p="472" /> formulates the same
		point as pro-drop with obligatory indexing: the language drops its overt NPs freely because the
		index already encodes the referent. A fuller transitive clause shows the same structure: without
		the NP <i lang="ain-Latn">cep</i> 'fish', <i lang="ain-Latn">a=koyki</i> 'catch' is a
		grammatically complete predication indexing a fourth-person agent and a third-person patient.
	</p>

	<Ex
		m="cep a=koyki"
		g="fish 4.A=catch"
		tr="We catch fish."
		cite="sato2025a:363"
		dial="HK"
		note="Satō 2025: 363. The NP cep 'fish' is an optional appositive specifying the zero-marked third-person patient. The predicate a=koyki is grammatically complete without it."
	/>

	<p>
		Independent personal pronouns — <i lang="ain-Latn">kani</i> 'I',
		<i lang="ain-Latn">eani</i> 'you' — are available for emphasis or contrast but are used more
		sparingly than their Japanese counterparts, since the verbal index already does the referential
		work <Ref k="nakagawa2024" p="163–165" />; <Ref k="bugaeva2012" p="472" />. They are a
		distinct word class from the bound indexes and are treated in
		<Xr ch="independent-personal-pronouns" />.
	</p>
</S>

<S t="The structural status of overt NPs" id="appositional-np">
	<p>
		When an overt NP does appear for a core role, its structural position relative to the verb is
		not that of a case-flagged argument filling a valency slot. <Ref k="sato2025a" p="363–365" />,
		working within Role and Reference Grammar, places the person index as the PRO inside the clausal
		CORE — the actual argument — and positions the co-referential NP <em>outside</em> the CORE as
		an optional, non-obligatory element. The Lakhota-parallel structure he gives for
		<i lang="ain-Latn">cep a=koyki</i> has the same logical structure (LS) whether the NP is
		present or absent; the NP adds lexical specification without changing the underlying argument
		count.
	</p>

	<p>
		An immediate formal consequence is that no case particle marks the S/A/O distinction on the NP
		itself. Ainu carries no markers corresponding to Japanese <i lang="ja">が</i> or
		<i lang="ja">を</i> for core roles <Ref k="nakagawa2024" p="363" />; <Ref
			k="bugaeva2012"
			p="472"
		/>; <Ref k="shibatani1990" p="22" />. Two NPs in the same clause — say, an agent and a patient
		— bear no formal distinction between them on the nominal. Role is readable from the verbal index
		and from contextual plausibility; a consequence explored in
		<Xr ch="constituent-order-head-final" /> is that the preverbal NPs may appear in any sequence.
	</p>

	<p>
		The same appositive status holds for possessor NPs: the possessee is obligatorily head-marked
		by a person prefix, so "pronominal possessor NPs are normally not used and even nominal
		possessor NPs may easily be omitted if contextually recoverable" <Ref
			k="bugaeva2012"
			p="486"
		/>. <Ref k="ijas2023" /> captures the same pattern pedagogically, describing the verb as
		having obligatory "pockets" for its arguments and the overt NP as redundant: "you would need
		to convey the same information twice but that would be very uneconomical."
	</p>
</S>

<S t="Null and zero arguments" id="null-arguments">
	<p>
		"It is not necessary in Ainu for a noun phrase that is clear from the context to appear in a
		sentence, and such a noun phrase is not even represented by a pronoun; even if a verb takes two
		objects, it is normal for only one of them to be present" — <Ref k="bugaeva2022" /> (ch.14,
		before ex.75). <Ref k="nakagawa2024" p="361" /> formalises this in the sentence template: a
		NP "need not be present in the sentence as long as it can be supplied meaningfully from
		context." The missing argument is read as a zero anaphor — not a phonologically null pronoun
		alongside the index, but the index itself satisfying the valency slot with no additional NP
		exponency.
	</p>

	<p>
		A particularly clear case arises with three-place verbs. A verb hosts at most one subject index
		and one object index (<Xr ch="person-marking-architecture" />; <Xr
			ch="object-indexing-monotransitive"
		/>), so the third argument of a ditransitive — typically the theme — is never indexed and
		appears only as an optional bare NP or is null. Its reference remains unambiguous: "verbal
		valency guarantees the interpretation of anaphoric reference without any personal affix"
		<Ref k="sato2025a" p="368–369" />. The following clause is the second in a two-sentence
		passage; the preceding clause establishes the theme (a sweet). The second clause drops it
		entirely, leaving only the human recipient and the first-singular agent overt or indexed:
	</p>

	<Ex
		m="ekasi ku=kore na"
		g="old.man 1SG.A=give FIN"
		tr="I'll give it to the old man."
		cite="sato2025a:368"
		dial="HK"
		note="Satō 2025 ex. 21 (second clause). The theme — a sweet, established in the preceding clause tanpe topenpe ne na 'this is a sweet' — is null. The verb kore 'give' is three-place; valency alone guarantees the theme's interpretation. Only the human recipient ekasi 'old man' and the 1SG agent ku= are expressed."
	/>

	<p>
		The third person is zero-marked throughout the paradigm: the bare verb stem without any affix
		expresses a third-person argument. <Ref k="sato2025a" p="369" /> argues that recognising a
		possessive prefix <i lang="ain-Latn">a=</i> (fourth person) already commits the analyst to a
		zero third-person affix in the slot that <i lang="ain-Latn">a=</i> contrasts with.
		<Ref k="nakagawa2024" p="169" /> describes the same paradigm without explicitly positing a
		zero affix ‹contested›; the status of the zero is examined in
		<Xr ch="person-marking-architecture" />. A community observation corroborates the
		zero-3rd-person analysis: "the bare verb form = 3SG = citation/dictionary form" and "using a
		possessive already concedes a zero 3rd person" (nukopoli, aynu-corpora Discord, 2024-12-25,
		asserted) <Ref k="aynucorporadiscord" /> ‹corpus-confirmed›.
	</p>
</S>

<S t="Modes of argument realisation" id="realization-modes">
	<p>
		<Ref k="sato2025a" p="371, 373–374" /> provides the master inventory of how a core argument
		can be realised in a head-marking Ainu clause. The five modes are not mutually exclusive —
		noun incorporation combines bound morphology with what would otherwise be an NP slot — but
		they represent the primary structural options:
	</p>

	<table>
		<thead>
			<tr>
				<th>#</th>
				<th>mode</th>
				<th>example (Satō 2025)</th>
				<th>gloss</th>
				<th>note</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1</td>
				<td><strong>person affix alone</strong></td>
				<td><i lang="ain-Latn">ku=kore</i></td>
				<td>'I give it'</td>
				<td>default; the PRO in the clausal CORE is the argument</td>
			</tr>
			<tr>
				<td>2</td>
				<td><strong>person affix + optional NP</strong></td>
				<td><i lang="ain-Latn">cep a=koyki</i></td>
				<td>'we catch fish'</td>
				<td>NP appositional, outside CORE; redundant with the index</td>
			</tr>
			<tr>
				<td>3</td>
				<td><strong>nominal prefix / noun incorporation</strong></td>
				<td><i lang="ain-Latn">cep-koyki-an</i></td>
				<td>'we fish'</td>
				<td>argument fused into the verb stem; treated in <Xr ch="noun-incorporation-object" /></td>
			</tr>
			<tr>
				<td>4</td>
				<td><strong>valency-guaranteed NP, no index</strong></td>
				<td><i lang="ain-Latn">wakka eci=ta-re</i></td>
				<td>'I make you dip water'</td>
				<td>unindexed theme; reference guaranteed by three-place valency alone</td>
			</tr>
			<tr>
				<td>5</td>
				<td><strong>pseudo-incorporation (auxiliary)</strong></td>
				<td><i lang="ain-Latn">a=e rusuy</i></td>
				<td>'we want to eat it'</td>
				<td>
					auxiliary <A w="rusuy" gl="want" /> takes no person marker; the lexical verb carries
					the index
				</td>
			</tr>
		</tbody>
	</table>

	<p>
		<Ref k="sato2025a" p="371" /> draws a theoretical conclusion from this inventory: because
		argument fulfilment is "sometimes by syntactic means and sometimes by morphological means," the
		syntax/morphology boundary "is blurred in Ainu," a consequence of its head-marking character.
		Mode 4 in particular — the theme as bare NP without an index — "partly shows a
		dependent-marking characteristic" while remaining under head-marking control.
		<Ref k="sato2025a" p="366–367" /> further uses the attested A-incorporation pattern
		(<i lang="ain-Latn">ku=koy-yanke</i> 'the waves wash me ashore') to argue against Baker's
		(<Ref k="baker1988" p="229–232" paren />) syntactic head-movement theory of incorporation:
		since the person index already anchors the argument inside the verb, incorporation need not be
		derived by NP movement.
	</p>
</S>

<S t="Are overt NPs arguments? The appositional-NP debate" id="argumenthood-debate">
	<p>
		Whether overt NPs that co-occur with verbal indexes should be analysed as true arguments of
		the verb or as appositives to pronominal arguments already residing on the verb is an open
		analytical question that the literature on Ainu explicitly engages ‹contested›.
	</p>

	<p>
		The <em>pronominal-argument</em> position (associated with Jelinek 1984 and Baker 1988/1996,
		as framed in <Ref k="bugaeva2022" /> ch.1 §4.3) holds that in head-marking languages the
		bound indexes are the clause's actual arguments and co-referential NPs are mere appositives
		that lexically qualify them — adjuncts, not arguments. Applied to Ainu, this analysis predicts
		that an overt NP should be freely omissible (attested), freely ordered (attested), uncased
		(attested), and potentially discontinuous (attested for floating quantifiers;
		<Xr ch="constituent-order-head-final" />). As a theoretical classification it would place Ainu
		in the nonconfigurational company of Mohawk or Lakhota. The full battery of diagnostics is
		examined in <Xr ch="nonconfigurationality-pronominal-argument" />.
	</p>

	<p>
		<Ref k="bugaeva2022" /> (ch.1 §4.3) names and entertains the pronominal-argument position but
		does not adopt it for Ainu. Her preferred account, aligned with Mithun (2003, cited in Bugaeva
		2022 ch.1 §4.3), is <em>shared argumenthood</em>: bound pronouns and coreferential NPs jointly
		share argumenthood, neither alone being the sole argument. The Ainu-specific evidence she
		marshals is the location-class noun (see §6 below): when both A and O are third-person and
		therefore zero-indexed, what disambiguates the two roles is the semantic class of one of the
		NPs — specifically whether it is a locative-type noun. If NPs were pure appositives with no
		grammatical traction, their semantic class would have no leverage on role assignment; the fact
		that it does points toward retained argumenthood.
	</p>

	<p>
		<Ref k="sato2025a" p="363–365" />, working in Role and Reference Grammar, gives a third
		structural description: the person index is the PRO inside the clausal CORE, and the
		co-referential NP sits outside the CORE — architecturally close to the pronominal-argument
		analysis but without endorsing the PAH label or a nonconfigurational classification. Satō does
		not invoke Jelinek's Pronominal Argument Hypothesis or describe Ainu as nonconfigurational; the
		account is head-marking with an optional external appositive.
	</p>

	<p>
		The current consensus is partial. That Ainu is head-marking, pro-drop, without core case, and
		with freely ordered optional overt NPs is <strong>uncontested</strong>. Whether those NPs are
		appositive adjuncts to pronominal arguments (Jelinek/Baker line) or share argumenthood with
		the indexes (Mithun/Bugaeva line) is <strong>contested</strong>, and no Ainu specialist has
		published a dedicated pronominal-argument study; the framing reaches Ainu only through
		Bugaeva's and Satō's typological treatments, and Bugaeva's own preferred position argues
		against the pure appositive reading. The chapter-length treatment is in
		<Xr ch="nonconfigurationality-pronominal-argument" />.
	</p>
</S>

<S t="The location-class noun as role disambiguation" id="location-class">
	<p>
		When both the agent and the patient of a transitive clause are third person — zero-indexed, no
		case marking, no fixed order — the verbal indexes supply nothing to distinguish agent from
		patient. This is the empirical gap at the centre of Bugaeva's counter-argument to the pure
		appositive analysis. <Ref k="nakagawa2022pos" /> (ch.14) documents the resolution: what
		disambiguates the roles is the <em>location-class</em> status of a noun. Locative relational
		nouns such as <A w="or" gl="place of" />, <A w="ka" gl="surface of" />, and
		<A w="corpok" gl="below" /> — attached after an NP — mark that NP as a Location argument,
		leaving the other NP unambiguously as the theme or patient.
	</p>

	<Ex
		m="ci a=e-p saranip or oma-re"
		g="cooked.food 4.A=eat-NMLZ basket LOC be.in-CAUS"
		tr="She put the cooked food into the basket."
		cite="nakagawa2022pos"
		dial="SAR"
		note="Nakagawa 2022 ch.14 ex. 74 (Saru). The locative relational noun or 'place of' on saranip marks the basket as the goal (Location argument); ci a=e-p 'the cooked food' is therefore unambiguously the theme. Without or, the two NPs would be structurally indistinguishable from a third-person agent and patient."
	/>

	<p>
		The disambiguation is lexical and semantic, not morphological: it depends on the inherent or
		augmented location-class status of one NP, not on a separate case affix. As
		<Ref k="bugaeva2022" /> (ch.1 §4.4) notes, the mechanism is "particularly relevant when one
		of the arguments is omitted" — when the non-location NP is null, the locative NP's class alone
		tells the listener what role the missing argument fills. The contrast with Nivkh is instructive:
		Nivkh also lacks case on S/O but fixes the object immediately preverbal and signals it by a
		consonant mutation; Ainu uses neither device, relying on indexing and the location class
		instead <Ref k="nakagawa2022pos" />. The locative noun system and its postpositional
		extensions are treated in <Xr ch="relational-and-spatial-nouns" /> and
		<Xr ch="postpositions-local-case-and-motion-events" />.
	</p>
</S>

<S t="Reference tracking: zero anaphora and the fourth person" id="ref-tracking">
	<p>
		Because arguments are indexed on the verb and overt NPs are optional, participant continuity
		across a narrative rests primarily on zero anaphora plus the verbal indexes themselves; pronouns
		are not routinely redeployed to maintain reference. Overt NP re-mention is reserved for
		(re)introduction, contrast, or scene change <Ref k="bugaeva2022" /> (ch.14);
		<Ref k="nakagawa2024" p="361" />.
	</p>

	<p>
		The <Xr ch="indefinite-fourth-person-paradigm">fourth person</Xr> does additional tracking
		work in narrative. In oral texts it marks the protagonist's or quoted speaker's first person as
		distinct from both the plain third-person cast and the narrating speaker's first singular,
		functioning as an obviative-like "other first person" <Ref k="nakagawa2024" p="177–179" />;
		<Ref k="bugaeva2008" p="40–43" />. An observed instance: in an uwepeker telling, the narrator
		alternates <i lang="ain-Latn">a=</i> and <i lang="ain-Latn">ku=</i> to keep the in-story
		protagonist's speech separate from the narrator's own voice (thegodofneet, aynu-corpora
		Discord, 2024-07-04, asserted) <Ref k="aynucorporadiscord" />. This alternation is consistent
		with <Ref k="bugaeva2008" p="40–43" />'s logophoric analysis of the fourth-person quotation
		use and with <Ref k="nakagawa2024" p="174–179" />'s narrative first-person account. The fourth
		person's full referential range and its interaction with topic-marking
		<A w="anakne" gl="as for" /> are treated in <Xr ch="indefinite-fourth-person-paradigm" />,
		<Xr ch="fourth-person-honorific" />, and <Xr ch="logophoric-narration-and-reported-discourse" />;
		the wider reference-tracking apparatus — zero anaphora, clause chaining, and the absence of
		morphological switch-reference — is taken up in <Xr ch="reference-tracking" /> and
		<Xr ch="clause-linkage-overview" />.
	</p>
</S>
