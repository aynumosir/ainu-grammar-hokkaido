<!--
Chapter: negation-ability-cognition-predicates — Negative Predicates of Ability and Cognition.
Gloss atoms used are all already in abbreviations.ts (COP, NMLZ, ADV, POSS, LOC, PFV, NEG,
TOP, QUOT, PL, A, S, 1SG, 2SG, 4). One bibliography key added: kanazawa1898 (Kanazawa 1898,
NINJAL topical Ainu conversation dictionary, Saru) — registered in bibliography.ts +
citation-registry.ts.
-->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="A class of lexically negative predicates" id="class">
	<p>
		Most clauses in Hokkaido Ainu are negated analytically, by the preverbal adverb
		<A w="somo" gl="not" /> placed before the predicate (treated in
		<Xr ch="negation-somo-standard-clausal" />). A small set of verbs negates differently: the
		negation is part of the verb's lexical meaning, so the negative clause is built on a verb
		distinct from its affirmative counterpart rather than on <i lang="ain-Latn">somo</i> plus the
		positive verb. The members that express ability and cognition are the most clearly
		auxiliary-like part of this set — <A w="eaykap" gl="cannot" />,
		<A w="koyaykus" gl="cannot (the situation prevents it)" />, <A w="niwkes" gl="cannot finish" />,
		<A w="eramiskari" gl="not know; have never" />, and
		<A w="erampewtek" gl="not understand" />. Nakagawa lists them among the
		<span lang="ja">他動詞起源の助動詞</span> ‘auxiliaries of transitive origin’ (his Table 75); Bugaeva
		describes the same forms as verbs that contain negation as part of their meaning
		<Ref k="nakagawa2024" p="314–315" />; <Ref k="bugaeva2012" p="496" />. The existential and
		privative members of the wider lexical-negative class, <i lang="ain-Latn">isam</i> ‘not exist’
		and <i lang="ain-Latn">sak</i> ‘lack’, are treated in
		<Xr ch="negation-existential-possessive-isam" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>affirmative counterpart</th>
				<th>lexical negative</th>
				<th>predicate sense</th>
				<th>sense as a post-verbal auxiliary</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">easkay</i> ‘be able; be skilled’</td>
				<td><i lang="ain-Latn">eaykap</i></td>
				<td>be unable; be poor at</td>
				<td>cannot V (capacity or circumstance)</td>
			</tr>
			<tr>
				<td>— (no morphological pair)</td>
				<td><i lang="ain-Latn">koyaykus</i></td>
				<td>be unable because the situation prevents it</td>
				<td>cannot V as things stand</td>
			</tr>
			<tr>
				<td>— (no morphological pair)</td>
				<td><i lang="ain-Latn">niwkes</i></td>
				<td>be unable to carry through</td>
				<td>cannot V to completion</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">amkir</i> ‘know, recognize by experience’</td>
				<td><i lang="ain-Latn">eramiskari</i></td>
				<td>not know, not recognize</td>
				<td>have never V-ed</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">eraman</i> / <i lang="ain-Latn">eramuan</i> ‘understand, know’</td>
				<td><i lang="ain-Latn">erampewtek</i></td>
				<td>not understand, not know</td>
				<td>not know how to V</td>
			</tr>
		</tbody>
	</table>

	<p>
		The negatives are well represented in the aligned Hokkaido corpus:
		<i lang="ain-Latn">eaykap</i> occurs 1,082 times, <i lang="ain-Latn">eramiskari</i> 464,
		<i lang="ain-Latn">erampewtek</i> 454, <i lang="ain-Latn">niwkes</i> 177, and
		<i lang="ain-Latn">koyaykus</i> 154, against affirmative <i lang="ain-Latn">easkay</i> 1,324
		and <i lang="ain-Latn">amkir</i> 143. These are lemma-level token totals, normalized across
		dialects with personal affixes stripped, so they measure the salience of each item rather than
		the rate of any one construction; on that measure the class belongs to the core grammar of
		negation and not to an incidental lexical field ‹corpus-confirmed›.
	</p>
</S>

<S t="Morphology and derivation" id="morphology">
	<p>
		The ability pair is morphologically transparent. <i lang="ain-Latn">Easkay</i> is
		<i lang="ain-Latn">e-askay</i>, the
		<Xr ch="applicative-e">applicative</Xr> <i lang="ain-Latn">e-</i> on
		<i lang="ain-Latn">askay</i> ‘be skilled’, and <i lang="ain-Latn">eaykap</i> is
		<i lang="ain-Latn">e-aykap</i>, the same prefix on <i lang="ain-Latn">aykap</i> ‘be
		unskilful’ <Ref k="tamura1996" p="s.v. eaykap" />; <Ref k="kayano1996" p="s.v. easkay" />;
		<Ref k="ijas2023" />. The negation therefore resides in the root: <i lang="ain-Latn">askay</i>
		and <i lang="ain-Latn">aykap</i> are themselves a lexical antonym pair ‘skilled’ versus
		‘unskilful’, differentiated by <i lang="ain-Latn">s</i> ~ <i lang="ain-Latn">y</i> and not by a
		productive negating morpheme. The applicative <i lang="ain-Latn">e-</i> supplies the slot for
		the thing or event one is or is not able to do, which is what makes both verbs transitive and
		lets them take a clause as their object.
	</p>

	<p>
		The cognition negatives are lexicalized as wholes. <i lang="ain-Latn">Eramiskari</i> stands as
		the negative of <i lang="ain-Latn">amkir</i>, and <i lang="ain-Latn">erampewtek</i> as the
		negative of <i lang="ain-Latn">eraman</i> / <i lang="ain-Latn">eramuan</i>; Tamura classes all
		four as transitive verbs and tags <i lang="ain-Latn">eramiskari</i> and
		<i lang="ain-Latn">erampewtek</i> explicitly as <span lang="ja">否定動詞</span> ‘negative
		verbs’ <Ref k="tamura1996" p="s.v. eramiskari, erampewtek" />. The two negatives share the
		element <i lang="ain-Latn">eram(u)-</i> ‘mind, understanding’ with their affirmative
		counterparts, but neither segments into a recognizable negator, and the accessible grammars do
		not analyse them further. <i lang="ain-Latn">Koyaykus</i> and <i lang="ain-Latn">niwkes</i>
		are likewise treated as unanalyzed units; <i lang="ain-Latn">koyaykus</i> attaches as a whole
		after a verb, as in the dictionary forms <i lang="ain-Latn">mokor koyaykus</i> ‘be unable to
		sleep’ and <i lang="ain-Latn">hunara koyaykus</i> ‘be unable to find’
		<Ref k="kayano1996" p="s.v. koyaykus" />.
	</p>

	<p>
		The cognition negatives carry minor dialect variants. Saru has
		<i lang="ain-Latn">eramiskari</i>, with <i lang="ain-Latn">eramuskari</i> recorded for a single
		Nibutani speaker and <i lang="ain-Latn">eramuskare</i> in Ishikari;
		<i lang="ain-Latn">erampewtek</i> appears as <i lang="ain-Latn">erampetek</i> elsewhere
		<Ref k="tamura1996" p="s.v. eramiskari" />; <Ref k="nakagawa2024" p="314–315" />.
	</p>
</S>

<S t="Argument structure and the auxiliary frame" id="syntax">
	<p>
		Because they are transitive in origin, these predicates can stand as the main verb of their
		clause, indexing an experiencer or agent as subject and taking the event as object, or they can
		follow another verb as an auxiliary. In the auxiliary use the lexical verb keeps its personal
		marking and the negative auxiliary adds none, exactly as the formal verb
		<A w="ki" gl="do" /> does in the <i lang="ain-Latn">somo ki</i> periphrasis: the negation sits
		in the auxiliary, while person stays on the predicate it scopes over
		<Ref k="nakagawa2024" p="314, 360, 372" />.
	</p>

	<Ex
		m="k=apkas eaykap"
		g="1SG.S=walk cannot"
		tr="I cannot walk."
		cite="kanazawa1898"
		dial="SAR"
		place="NINJAL ed., 4#16"
		note="The simplest frame: apkas ‘walk’ carries the first-person subject, and eaykap follows it person-unmarked."
	/>

	<p>
		The transitive origin remains active: the auxiliary may instead carry its own personal prefix,
		with the preceding clause as its object. In the next example the indefinite person
		<i lang="ain-Latn">a=</i> attaches to <i lang="ain-Latn">eaykap</i>, not to the verb
		<i lang="ain-Latn">paye</i> ‘go’, so that <i lang="ain-Latn">eaykap</i> predicates ‘one cannot
		[go further upstream]’.
	</p>

	<Ex
		m="na hepera paye a=eaykap ru-we an"
		g="more upstream go.PL 4.A=cannot track-POSS exist"
		tr="Is it that one cannot go any further upstream?"
		cite="kanazawa1898"
		dial="SAR"
		place="NINJAL ed., 61#71"
		note="a= indexes the subject of eaykap, and the embedded event paye ‘go (PL)’ is its object; ruwe an is the content-question frame of the evidential."
	/>

	<p>
		The auxiliary may be preceded by the particle <A w="ka" gl="even, at all" />, in the frame V
		<i lang="ain-Latn">ka eaykap</i> (also V <i lang="ain-Latn">ka eramiskari</i>), with no clear
		difference in meaning from the plain frame. Nakagawa notes that this
		<i lang="ain-Latn">ka</i> slot is available to the transitive-origin auxiliaries but is lacking
		for the native auxiliaries, which makes it a diagnostic of the class
		<Ref k="nakagawa2024" p="314" />. The strengthening that Ijäs assigns to the slot pedagogically
		is the ordinary scalar contribution of <i lang="ain-Latn">ka</i>, not a separate negative
		morphology <Ref k="ijas2023" />.
	</p>

	<Ex
		m="a=tekehe ka a=epuni ka eaykap pe ne kusu"
		g="4=hand.POSS even 4.A=raise even cannot NMLZ COP because"
		tr="Because I could not even raise my hand,"
		cite="nakagawa2024:323"
		dial="SAR"
		place="Nakagawa ex. 532"
		note="The possessor prefix a= on the possessed noun tekehe is glossed by person alone; the verb epuni keeps its agentive a=, and eaykap follows the predicate after the scalar ka."
	/>

	<Ex
		m="kira=an ka apkas=an ka eaykap no cis patek a=ki kor"
		g="flee=4.S even walk=4.S even cannot ADV cry only 4.A=do while"
		tr="Unable to flee or to walk, doing nothing but cry,"
		cite="nakagawa2024:315"
		dial="SAR"
		place="Nakagawa ex. 492"
		note="Two coordinated intransitive verbs each carry the fourth-person subject =an under one eaykap; the negated event links to what follows with no, not wa (see below)."
	/>

	<p>
		The shared post-verbal slot identifies these predicates with the auxiliary zone rather than with
		immediately preverbal <i lang="ain-Latn">somo</i>. Satō treats
		<i lang="ain-Latn">eaykap</i> as an auxiliary occupying the same position as
		<i lang="ain-Latn">somo ki</i>; the difference is that <i lang="ain-Latn">somo ki</i> negates
		through the formal verb <i lang="ain-Latn">ki</i>, whereas <i lang="ain-Latn">eaykap</i> and its
		peers are themselves the negative predicate, so <i lang="ain-Latn">somo</i> is not added to them
		<Ref k="sato2008" p="124" />; <Ref k="bugaeva2012" p="496" />.
	</p>
</S>

<S t="Ability: eaykap, koyaykus, niwkes" id="ability">
	<p>
		<i lang="ain-Latn">Eaykap</i> is the broad negative of <i lang="ain-Latn">easkay</i>. Nakagawa
		defines its range as inability in a wide sense, covering both a lack of capacity and a situation
		that does not permit the event, and Tamura adds the further reading ‘be poor at’
		<Ref k="nakagawa2024" p="315" />; <Ref k="tamura1996" p="s.v. eaykap" />. The modal semantics of
		the <i lang="ain-Latn">easkay</i> / <i lang="ain-Latn">eaykap</i> pair as a category of ability
		and possibility are developed in <Xr ch="abilitative-easkay-eaykap" />.
	</p>

	<p>
		<i lang="ain-Latn">Koyaykus</i> narrows the same space to circumstantial inability: the subject
		cannot do the event because the situation or the moment is against it, rather than for want of
		skill. Tamura draws the contrast directly — <i lang="ain-Latn">koyaykus</i> for what outside
		factors prevent, <i lang="ain-Latn">eaykap</i> for what is beyond one's ability or generally
		impossible <Ref k="tamura1996" p="s.v. koyaykus" />; <Ref k="nakagawa2024" p="314" />.
	</p>

	<Ex
		m="ukuran ku=mokor koyaykus"
		g="last.night 1SG.S=sleep cannot"
		tr="Last night I could not sleep."
		cite="kanazawa1898"
		dial="SAR"
		place="NINJAL ed., 17#63"
		note="The inability is situational — sleep would not come — which is the domain of koyaykus rather than eaykap."
	/>

	<p>
		<i lang="ain-Latn">Niwkes</i> is more specific again, ‘be unable to carry an action through to
		completion’ <Ref k="nakagawa2024" p="314" />. The lexicon of ability pairs it with
		<i lang="ain-Latn">eaykap</i> as a doublet, the two glossed together as ‘cannot do’ and ‘cannot
		manage’ <Ref k="kanazawa1898" />. The articulation of the field has a consequence for glossing:
		a negative ability clause is rarely a bare ‘not able’, since the predicate chosen also
		classifies where the impossibility comes from ‹consensus›.
	</p>
</S>

<S t="Cognition: experience and understanding" id="cognition">
	<p>
		The cognition negatives split a domain that English often keeps together. The pair
		<i lang="ain-Latn">amkir</i> / <i lang="ain-Latn">eramiskari</i> concerns knowledge by
		acquaintance or experience. As a main verb <i lang="ain-Latn">eramiskari</i> is ‘not know, not
		recognize’; after a verb phrase it gives an experiential negative, ‘have never V-ed’
		<Ref k="tamura1996" p="s.v. eramiskari" />; <Ref k="nakagawa2024" p="314–315" />.
	</p>

	<Ex
		m="cip a=o ka eramiskari p ne korka"
		g="boat 4.A=board even never NMLZ COP although"
		tr="Although I had never been in a boat,"
		cite="nakagawa2024:315"
		dial="SAR"
		place="Nakagawa ex. 486"
		note="The event cip a=o ‘board a boat’ is the experiential domain of eramiskari; p ne korka frames it as a concessive nominalized clause."
	/>

	<Ex
		m="an=cise soyke ta asip=an ka eramuskare"
		g="4=house outside LOC go.out=4.S even never"
		tr="I had never even gone outside my house."
		cite="nakagawa2024:315"
		dial="ISH"
		place="Nakagawa ex. 488, after Otsuka 1990: 259"
		note="Eramuskare is the Ishikari variant of eramiskari in the banked source."
	/>

	<p>
		The pair <i lang="ain-Latn">eraman</i> / <i lang="ain-Latn">eramuan</i> versus
		<i lang="ain-Latn">erampewtek</i> concerns understanding and knowing how. As a main verb
		<i lang="ain-Latn">erampewtek</i> is ‘not understand, not know’; after a verb phrase it means
		that the subject does not know how to carry the event out, and so cannot
		<Ref k="tamura1996" p="s.v. erampewtek" />; <Ref k="bugaeva2012" p="496" />. Tamura keeps the
		two cognition negatives apart by source of knowledge: failure to recognize a person or thing is
		<i lang="ain-Latn">eramiskari</i>, while failure to understand or to have the knowledge is
		<i lang="ain-Latn">erampewtek</i> <Ref k="tamura1996" p="s.v. eramiskari, erampewtek" />. Ijäs's
		pedagogical contrast between experiential knowledge and understanding follows this same source
		split <Ref k="ijas2023" /> ‹consensus›.
	</p>

	<Ex
		m="ku=nukar korka k=erampewtek"
		g="1SG.A=see although 1SG.A=not.understand"
		tr="I looked at it, but I do not understand."
		cite="kanazawa1898"
		dial="SAR"
		place="NINJAL ed., 40#58"
		note="Affirmative perception nukar contrasts directly with the cognition negative erampewtek in one clause."
	/>
</S>

<S t="Interaction with somo, and the question of blocking" id="somo-interaction">
	<p>
		Two facts show that the lexical negatives do not stand in complementary distribution with
		standard negation. First, although <i lang="ain-Latn">somo</i> is not added to the lexical
		negative itself, it freely negates a different predicate in the same clause:
	</p>

	<Ex
		m="e=erampewtek yakka somo ku=iruska"
		g="2SG.A=not.understand even.if NEG 1SG.S=be.angry"
		tr="Even if you do not understand, I will not be angry."
		cite="kanazawa1898"
		dial="SAR"
		place="NINJAL ed., 40#11"
		note="The cognition negative erampewtek and the standard negator somo co-occur, each over its own verb."
	/>

	<p>
		Second, the lexical negative may sit inside a clause whose outer frame is itself negative. In
		Nakagawa's example the experiential negative <i lang="ain-Latn">a=eramiskari</i> falls within
		the proposition, while the rhetorical <i lang="ain-Latn">ru-we somo ne</i> is the outer
		conviction frame of the <Xr ch="evidential-schema-overview">evidential</Xr>, not a second
		analytic negation of <i lang="ain-Latn">eramiskari</i> <Ref k="nakagawa2024" p="393" />. The
		layering of negation with the formal-noun evidentials is treated in
		<Xr ch="nonverbal-predicate-tam-negation" />.
	</p>

	<Ex
		m="sir-kunne kor soyne hi a=eramiskari aan ru-we somo ne"
		g="land-be.dark when go.out NMLZ 4.A=not.know PFV track-POSS NEG COP"
		tr="I had not known that he went out when night fell."
		cite="nakagawa2024:393"
		dial="SAR"
		place="Nakagawa ex. 780"
		note="ruwe somo ne here is the rhetorical/convictional frame ‘was I not unaware’, i.e. emphatic ‘I really did not know’, with the lexical negative eramiskari inside it."
	/>

	<p>
		Whether the lexical negative outright <em>blocks</em> standard negation of the corresponding
		positive verb is a genuine question. Ijäs states the rule categorically: where a lexical
		negative exists, <i lang="ain-Latn">somo</i> plus the positive verb is not normally possible, so
		that one says <i lang="ain-Latn">k=erampewtek</i> and not
		<i lang="ain-Latn">*somo k=eraman</i> <Ref k="ijas2023" />. For at least one pair this is borne
		out by a primary source: Tamura's entry for <i lang="ain-Latn">amkir</i> states that negation
		with <i lang="ain-Latn">somo</i> is not formed, and the negative verb
		<i lang="ain-Latn">eramiskari</i> is used instead <Ref k="tamura1996" p="s.v. amkir" />. The
		generalization does not hold across the whole class, however. Dal Corso records southern
		Hokkaido <i lang="ain-Latn">somo kor</i> ‘not have’ beside privative
		<i lang="ain-Latn">sak</i>, with a distinct pragmatic value, and Bugaeva describes these verbs
		only as containing negation in their meaning, not as barring
		<i lang="ain-Latn">somo</i> <Ref k="dalcorso2025neg" p="41" />; <Ref k="bugaeva2012" p="496" />.
		The blocking is best stated as graded: near-obligatory for the cognition pair
		<i lang="ain-Latn">amkir</i> / <i lang="ain-Latn">eramiskari</i>, a strong preference for the
		ability verbs, but not a categorical rule, so that Ijäs's blanket statement overstates it
		‹contested›.
	</p>

	<p>
		The lexical negatives license the same polarity-sensitive environment as
		<i lang="ain-Latn">somo</i> and <i lang="ain-Latn">isam</i>. Nakagawa groups the
		<i lang="ain-Latn">ka</i>-indefinites such as <i lang="ain-Latn">nep ka</i> ‘anything, and under
		negation nothing’ with <i lang="ain-Latn">eaykap</i> alongside the standard and existential
		negators <Ref k="nakagawa2024" p="323" />; the licensing and scope of these items are treated in
		<Xr ch="negation-polarity-items-scope" />. In clause linkage they pattern with negative
		predicates: Takahashi shows that a negated subordinate clause selects the stative linker
		<i lang="ain-Latn">no</i> rather than successive <i lang="ain-Latn">wa</i>, and the
		lexical-negative auxiliaries take <i lang="ain-Latn">no</i> in the same way, even without
		<i lang="ain-Latn">somo</i> <Ref k="takahashi2016" p="75–77" />; <Ref k="nakagawa2024" p="340" />
		‹consensus›.
	</p>
</S>

<S t="Boundaries and dialect evidence" id="limits">
	<p>
		The class is narrow, and an ordinary antonym is not a member of it. Ijäs lists lexical opposites
		such as <i lang="ain-Latn">eese</i> ‘agree’ / <i lang="ain-Latn">kopan</i> ‘refuse’ and
		<i lang="ain-Latn">pa</i> ‘find’ / <i lang="ain-Latn">turaynu</i> ‘lose’, which remain ordinary
		verbs and take <i lang="ain-Latn">somo</i> in the normal way <Ref k="ijas2023" />. The source
		check treats this as plausible but not separately verified for every pair, so the grammatical
		generalization is confined to the well-described negatives in the table above ‹corpus-suggested›.
	</p>

	<p>
		The secure baseline for the class is the Saru description of Nakagawa and Tamura, with Ishikari
		and Tokachi variants where the examples mark them. Takahashi documents the Tokachi auxiliary use
		of the experiential negative:
	</p>

	<Ex
		m="kuani anakne pu ari an cise ku=nukar eramuskare"
		g="1SG TOP storehouse QUOT exist house 1SG.A=see never"
		tr="I have never seen a building called a storehouse."
		cite="takahashi2016:74"
		dial="TOK"
		place="Honbetsu; consultant Sawai Tomeno"
		note="The Tokachi variant eramuskare follows the person-marked verb ku=nukar as the experiential negative ‘have never seen’; pu ari an cise is ‘a building called a pu (storehouse)’."
	/>

	<p>
		Refsing's Shizunai description confirms that <i lang="ain-Latn">eaykap</i> and
		<i lang="ain-Latn">somo ki</i> both occur in Shizunai, but the available text for the relevant
		pages is too damaged to support Shizunai-specific claims <Ref k="refsing1986" p="214–215" />.
		Dal Corso's history of Sakhalin negation bears on the class only diachronically: his proposal
		that negative-existential material underlies wider Ainu negation helps explain why the lexical
		negatives and standard <i lang="ain-Latn">somo</i> form one connected domain, but the ability
		and cognition predicates described here are analysed from Hokkaido sources, and that history
		remains a hypothesis rather than a settled Hokkaido-internal fact
		<Ref k="dalcorso2025neg" p="41–42" /> ‹speculative›.
	</p>
</S>
