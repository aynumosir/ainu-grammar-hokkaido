<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The predicate slot is invariably verbal" id="predicate-verbal">
	<p>
		Hokkaido Ainu has essentially no verbless predication at the structural level. As Nakagawa states
		in the Handbook chapter on parts of speech, "the element that occupies the predicate position in
		Ainu is invariably a verb phrase and the head of the verb phrase is a verb or an auxiliary verb"
		<Ref k="nakagawa2022pos" p="474" />. A bare nominal or oblique phrase cannot stand as the main
		predicate of a sentence. What looks verbless in discourse is always one of four things: an
		ambient verb with an incorporated nominal root and no overt subject; an insubordinated
		formal-noun clause reduced to its nominalizer; a vocative or exclamative fragment that is not a
		predication at all; or genuine ellipsis of a recoverable predicate under discourse conditions
		that license it. These are the phenomena organized in this chapter. The three productive
		structural predicate types — copular, existential/locational, and property-concept — are treated
		in <Xr ch="copula-ne-predicate-nominals" />, <Xr ch="existential-locational-an-oka" />, and
		<Xr ch="property-concept-predication" /> respectively; the present chapter maps their borders.
	</p>

	<table>
		<caption>Minor predicate and non-predicate patterns covered in this chapter</caption>
		<thead>
			<tr>
				<th>construction type</th>
				<th>surface form</th>
				<th>underlying structure</th>
				<th>notes</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>ambient (0-place) predicate</td>
				<td><i lang="ain-Latn">mean</i>, <i lang="ain-Latn">sirpirka</i>, <i lang="ain-Latn">hawas</i></td>
				<td>incorporated-noun + existential/posture verb</td>
				<td>fully verbal; no subject slot</td>
			</tr>
			<tr>
				<td>locational predicate</td>
				<td><i lang="ain-Latn">[NP] [loc or ta] an/oka</i></td>
				<td>existential verb + oblique adjunct</td>
				<td>no PP-predicate type; oblique is always an adjunct</td>
			</tr>
			<tr>
				<td>labelling/specificational copular</td>
				<td><i lang="ain-Latn">[clause] hawe ne</i></td>
				<td>formal-noun nominalization + copula</td>
				<td>the naming/quoting use of the formal-noun frame</td>
			</tr>
			<tr>
				<td>formal-noun polar question / exclamative</td>
				<td>bare <i lang="ain-Latn">ruwe? / hawe? / siri?</i></td>
				<td>insubordinated nominalized clause</td>
				<td>without the following <i lang="ain-Latn">ne</i> or <i lang="ain-Latn">an</i></td>
			</tr>
			<tr>
				<td>elliptical VP answer</td>
				<td>verb repeated from question</td>
				<td>predicate-only clause under ellipsis</td>
				<td>dialect variation on yes/no affirmation particles</td>
			</tr>
			<tr>
				<td>vocative fragment</td>
				<td>bare nominal</td>
				<td>address utterance; no predication</td>
				<td>illocutionary, not propositional</td>
			</tr>
			<tr>
				<td>nominal-frame conditional</td>
				<td><i lang="ain-Latn">[Subj] [Compl] ne yakun</i></td>
				<td>copular predicate + conditional particle</td>
				<td>antecedent of a condition on class membership or identity</td>
			</tr>
		</tbody>
	</table>
</S>

<S t="Ambient predicates: the 0-place (完全動詞) verb class" id="ambient">
	<p>
		The nearest Ainu equivalent to an 'impersonal' or 'ambient' clause is the
		<em>zero-place verb</em> (<span lang="ja">完全動詞</span>), in which a nominal root is
		incorporated into an existential or posture verb to form a word that predicates an ambient
		state with no subject slot and no person indexing
		<Ref k="nakagawa2024" p="126–128" />; <Ref k="sato2008" p="21" />; <Ref k="shibatani1990" p="19" />.
		The most transparent example is <A w="mean" gl="be cold (of weather)" />, etymologically
		<A w="me" gl="coldness" />
		+ the existential <A w="an" gl="exist" /> — 'coldness exists' — which Shibatani explicitly
		analyses as noun incorporation <Ref k="shibatani1990" p="19" />. The same <A w="sir" gl="scene, weather, land" />
		root combines with property verbs to make weather predicates:
		<A w="sirpirka" gl="be fine weather" /> (= <A w="sir" />&#8288;-<A w="pirka" gl="be good" />),
		<A w="sirsesek" gl="be hot (weather)" /> (= <A w="sir" />&#8288;-<A w="sesek" gl="be hot" />),
		<A w="sirkunne" gl="become dark, night falls" /> (= <A w="sir" />&#8288;-<A w="kunne" gl="be dark" />).
		The posture verb <A w="as" gl="stand" /> forms the parallel 'voice' ambient:
		<A w="hawas" gl="there is a sound, it is said" /> (= <A w="haw" gl="voice" />&#8288;-<A w="as" />).
	</p>

	<Ex
		m="me-an"
		g="coldness-exist"
		tr="It is cold."
		cite="nakagawa2024:126; shibatani1990:19"
		dial="SAR"
		note="Zero-place ambient predicate: the incorporated nominal me 'coldness' + existential an. No subject NP; no person index. Nakagawa's §4.2.2 lists this as the type-① 完全動詞."
	/>

	<Ex
		m="sir-pirka"
		g="scene-be.good"
		tr="The weather is fine."
		cite="nakagawa2024:126"
		dial="HK"
		note="The sir- prefix incorporates the ambient-domain noun into the property verb."
	/>

	<Ex
		m="haw-as"
		g="voice-stand"
		tr="There is a sound; it is said (an utterance is occurring)."
		cite="nakagawa2024:127–128"
		dial="HK"
		note="Nakagawa exx. 16–17 distinguish 0-place hawas (no subject) from 1-place hawean 'X says' (= haw- + -ean with 1sg/4-person suffix), showing the 0-place / 1-place minimal pair in the voice domain."
	/>

	<p>
		The grammar-diagnostic pair is the contrast between a 0-place ambient and a 1-place
		experiential verb with the same root. <A w="mean" gl="be cold (of weather)" /> 'the weather is
		cold' takes no person affix and no subject, while <A w="merayke" gl="feel cold" /> 'feel cold'
		takes the standard intransitive subject index:
	</p>

	<Ex
		m="merayke=an ka somo ki no"
		g="feel.cold=4.S even NEG do ADV"
		tr="Without even feeling cold…"
		cite="nakagawa2024:127"
		dial="SAR"
		place="Nakagawa ex. 15"
		note="The 1-place merayke indexes the experiencer via the fourth-person S suffix =an, as opposed to 0-place mean, which takes no index."
	/>

	<p>
		The parallel 0-place / 1-place split holds for <i lang="ain-Latn">hawas</i> 'there is a sound'
		vs <A w="hawean" gl="say" /> 'X says'; a single nominal root surfaces in both, but the 0-place
		member predicates an ambient event in the scene, while the 1-place member requires an indexed
		agent-experiencer <Ref k="nakagawa2024" p="127–128" />. The zero-place class is small and
		largely lexicalized (weather, atmospheric light, acoustic ambiance); productivity is limited
		<Ref k="nakagawa2024" p="126" />. The noun-incorporation mechanism that creates them is treated
		in <Xr ch="noun-incorporation-object" />; the existential <i lang="ain-Latn">an</i> in the
		aspect-auxiliary role is treated in <Xr ch="existential-aspect-an-oka" />.
	</p>
</S>

<S t="Oblique adjuncts and the locational predicate gap" id="oblique-adjuncts">
	<p>
		There is no clause type in Hokkaido Ainu in which a bare oblique phrase — a postpositional
		phrase, a locational NP, a temporal adverb — functions as the predicate of a main clause.
		Nakagawa's clause-constituent analysis (§10.1) treats adverbs, case-marked NPs, and
		postpositional adverbs uniformly as adjuncts on the verb phrase, never predicate heads
		<Ref k="nakagawa2024" p="359–361" />. Refsing states the complementary positive requirement:
		locational and existential meanings are expressed with the existential verb, not with a bare
		PP — she lists no 'locational copula' type separate from <i lang="ain-Latn">an</i>/<i lang="ain-Latn">oka(y)</i>
		in the Shizunai grammar <Ref k="refsing1986" p="272–273" />.
	</p>

	<p>
		The practical consequence is that a Japanese-style bare 'topic–locative' sentence
		(<span lang="ja">トキヨには大きな家が多い</span>) is dispreferred in Ainu: the intransitive
		existential <i lang="ain-Latn">an</i> cannot take a bare second NP because it is strictly
		one-argument. The natural pattern marks the location as an oblique with
		<i lang="ain-Latn">or ta</i> 'in the place of' (or bare <i lang="ain-Latn">ta</i>), leaving
		the existential as the predicate head <Ref k="sato2008" p="3–4" />. The community discussion
		of this constraint, confirmed against Satō's account, gives the rule concisely: <i lang="ain-Latn">an</i>
		is intransitive, so the frame is <i lang="ain-Latn">A B or ta an</i> 'A is at B', while the
		transitive <A w="un" gl="be at (transitive locative)" /> licenses a bare nominal complement
		<i lang="ain-Latn">A B un</i> without
		<i lang="ain-Latn">or ta</i>
		<Ref k="aynucorporadiscord" /> (nukopoli, aynu-corpora Discord, 2024-11-09, confirmed against
		<Ref k="sato2008" p="3–4" />) ‹corpus-confirmed›.
	</p>

	<Ex
		m="iwor or ta an wa"
		g="mountains inside.of LOC exist.S CONJ"
		tr="being in the mountains …"
		cite="ilcaa1976"
		dial="SAR"
		place="川上まつ子, uwepeker 民話8, AA研アイヌ語資料 [aa-irc/006#128]"
		note="The locational or ta is an oblique adjunct on the existential an; the NP iwor 'mountains' is the subject of the existential, not a second argument."
	/>

	<Ex
		m="e=kor iwatarap apunno hon or ta anakne apunno an wa"
		g="2SG.A=have infant gently womb inside.of LOC TOP gently exist.S CONJ"
		tr="your infant, peacefully in your womb …"
		cite="ilcaa1976"
		dial="SAR"
		place="川上まつ子, uwepeker 民話13, AA研アイヌ語資料 [aa-irc/016#166]"
		note="Locational predication: hon or ta is the locational oblique 'in the womb', anakne is the topic marker, apunno 'gently/peacefully' an adverb, and an is the predicate head. The subject of an is the infant (e=kor iwatarap 'your infant'), which is the topic of the wider discourse."
	/>

	<p>
		Because obliques never head a predicate, a phrase like <i lang="ain-Latn">kotan ta</i> 'in the
		village' requires <i lang="ain-Latn">an</i> or <i lang="ain-Latn">oka</i> to form a complete
		predication: <i lang="ain-Latn">kotan ta an</i> 'is in the village', not bare
		<i lang="ain-Latn">*kotan ta</i>. This parallels the constraint that the copula <i lang="ain-Latn">ne</i>
		is needed for predicate-nominal clauses (a Japanese-style bare-nominal predicate is also
		excluded). In both cases the verbal head is obligatory, and what reads as a 'nominal predicate'
		or 'locational predicate' in English always has a verb beneath it.
	</p>
</S>

<S t="Labelling, naming, and specificational uses of the copular frame" id="labelling-naming">
	<p>
		The copular frame <i lang="ain-Latn">A B ne</i> serves not only to classify (see
		<Xr ch="copula-ne-predicate-nominals" /> for its full paradigm) but also to label and name
		referents in discourse. The specificational pattern — where a nominalized clause is the subject
		and a name or title is the complement — is particularly frequent in naming contexts and in
		traditional oral narrative when a deity or character is formally introduced. Nakagawa's
		example of this frame comes from the formal-noun-headed subject:
	</p>

	<Ex
		m="tap a=ye katu Piratur sekor a=ye hawe ne"
		g="now 4.A=say way Piratur QUOT 4.A=say NMLZ COP"
		tr="The way it is now called is 'Piratur'."
		cite="nakagawa2024:392"
		dial="SAR"
		place="Nakagawa ex. 779"
		note="Specificational copular: the nominalized clause tap a=ye katu 'the way of now saying' is the subject; the quoted name Piratur sekor a=ye hawe 'the formal-noun report of calling it Piratur' is the complement before ne. The formal noun hawe (voice-NMLZ) nominates the whole quotation as the complement."
	/>

	<p>
		In this pattern the formal noun <i lang="ain-Latn">hawe</i> 'voice, utterance' functions as
		the
		<Xr ch="concept-form-affiliative-form">possessed-form</Xr> nominalizer that packages the
		quotative clause as a referential NP, and the copula <i lang="ain-Latn">ne</i> predicates
		identity between the subject and the named referent. This is not a separate construction from
		the ordinary copular clause; it is the same frame with a nominalized complement. The formal
		nouns that head these nominalized clauses are defined in <Xr ch="formal-defective-nouns" />;
		the quotative particle <i lang="ain-Latn">sekor</i> belongs to the
		<Xr ch="quotative-complementation-sekor">quotative complementation chapter</Xr>.
	</p>

	<p>
		The <i lang="ain-Latn">sekor a=ye hawe ne</i> frame is also the canonical 'it is called X'
		formula for introducing traditional names of places, deities, and artefacts in oral narrative,
		functioning as a specificational-naming copular in the context of cultural transmission. The
		constituent structure — <i lang="ain-Latn">[[sekor a=ye] hawe] ne</i> — keeps the copula
		<i lang="ain-Latn">ne</i> as the single predicate head; there is no head-stacking and no
		verbless portion. The copula's person marking follows the standard transitive-subject set on
		the nominative argument (see
		<Xr ch="person-marking-architecture">the person-marking architecture chapter</Xr>); the
		absence of an object person index on <i lang="ain-Latn">ne</i>, despite its two-place
		semantics, is the diagnostic idiosyncrasy noted by Nakagawa: the complement NP takes no
		object affix on the copula <Ref k="nakagawa2024" p="132" />.
	</p>
</S>

<S t="Formal-noun fragments: polar questions, exclamatives, and answers" id="formal-noun-fragments">
	<p>
		Nakagawa 2024 lays out a four-member paradigm for the sentence-final formal-noun frame, in
		which the choice of predicate after the nominalizer encodes illocutionary force
		<Ref k="nakagawa2024" p="392–396" />. The declarative and content-question members take the
		copula <i lang="ain-Latn">ne</i> and the existential <i lang="ain-Latn">an</i> respectively
		(treated in the evidential chapters for <Xr ch="ruwe-ne-inferential" />,
		<Xr ch="siri-ne-situational" />, <Xr ch="hawe-ne-reportative" />, and
		<Xr ch="humi-ne-sensory" />); what concerns this chapter is the reduction of that frame to a
		bare formal noun — without either <i lang="ain-Latn">ne</i> or <i lang="ain-Latn">an</i> —
		which functions as a polar question or exclamative:
	</p>

	<table>
		<caption>The formal-noun illocutionary paradigm (after Nakagawa 2024: 392–396)</caption>
		<thead>
			<tr>
				<th>frame</th>
				<th>illocutionary value</th>
				<th>example</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">NMLZ + ne</i></td>
				<td>declarative (recognized fact)</td>
				<td><i lang="ain-Latn">… ruwe ne</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">NMLZ + an?</i></td>
				<td>content question (with a wh-expression)</td>
				<td><i lang="ain-Latn">… ruwe an?</i></td>
			</tr>
			<tr>
				<td>bare <i lang="ain-Latn">NMLZ?</i></td>
				<td>polar question / exclamative</td>
				<td><i lang="ain-Latn">e=eraman hawe?</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">NMLZ + un</i></td>
				<td>affirmative reply</td>
				<td><i lang="ain-Latn">ku=nu ruwe un</i></td>
			</tr>
		</tbody>
	</table>

	<p>
		The bare-nominalizer polar question is an instance of <em>insubordination</em>: a nominalized
		clause that would ordinarily be embedded under the copula or existential stands instead as a
		main clause, retaining the illocutionary force of a question or exclamation from prosodic and
		contextual cues rather than from any grammatical marker. The sentence
		<i lang="ain-Latn">e=eraman hawe?</i> 'you understood?' is a polar question in Saru without
		the following <i lang="ain-Latn">ne</i> or <i lang="ain-Latn">an</i>
		<Ref k="nakagawa2024" p="395, 409" />. The same shape can function as an exclamative —
		expressing surprise or emphatic assertion — again distinguished from the declarative only by
		intonation. Nakagawa notes the Saru reinforced form
		<i lang="ain-Latn">ruwe he an?</i> (with the particle <i lang="ain-Latn">he</i> and the
		existential) as a more explicit polar-question variant <Ref k="nakagawa2024" p="395" />.
	</p>

	<Ex
		m="e=eraman hawe"
		g="2SG.S=understand NMLZ"
		tr="You understood? / You understood!"
		cite="nakagawa2024:395, 409"
		dial="SAR"
		note="The bare formal noun hawe (voice-nominalizer) without a following copula or existential; polar question or exclamative depending on intonation and context. This is the reduced/insubordinated frame of the hawe ne declarative."
	/>

	<p>
		The affirmative-answer member <i lang="ain-Latn">NMLZ + un</i> likewise reduces the
		declarative frame by replacing the copula with the final particle <i lang="ain-Latn">un</i>,
		forming a minimally marked confirmation. The formal-noun head is retained, making the
		affirmative answer morphologically kin to the declarative without being one:
	</p>

	<Ex
		m="ku=nu ru-we un"
		g="1SG.A=hear track-POSS FIN"
		tr="Yes, I heard it."
		cite="nakagawa2024:396"
		dial="HK"
		place="Nakagawa ex. 794"
		note="The final particle un forms the affirmative-reply frame while the formal noun ruwe is retained. Compare the declarative ku=nu ruwe ne 'I (certainly) heard it' and the content-question frame ku=nu ruwe an? 'did I hear [what]?'."
	/>

	<p>
		An additional bare-predicate use of <i lang="ain-Latn">isam</i> functions as the full
		predicate of a content question in the corpus. Nakagawa's example shows
		<i lang="ain-Latn">isam, isam?</i> 'it's gone, gone?' functioning as the rhetorical pivot of
		a question where the missing entity is already established in discourse:
	</p>

	<Ex
		m="mak ne hine nea CAWAN isam isam"
		g="how COP CONJ that bowl NEG.exist NEG.exist"
		tr="How can that bowl be gone, gone?"
		cite="nakagawa2024:410"
		dial="SAR"
		place="Nakagawa ex. 849"
		note="The negative existential isam stands as the predicate of a rhetorical question; its repetition is a discourse-emphatic pattern in oral narrative rather than a distinct construction."
	/>

	<p>
		These fragment-like patterns are not structurally verbless: the formal noun is nominalized
		from a full clause and the bare-NMLZ frame still has a verbal predicate implicit in the
		nominalization. Predicationally, the clause is complete; it is only the
		final copula or existential that is elided under the reduced illocutionary frames. This is
		therefore ellipsis at the right edge of the clause, conditioned by illocutionary force, rather
		than an absence of predication. The full treatment of the evidential paradigm and its
		illocutionary differentiation is in <Xr ch="evidential-schema-overview" />; sentence-final
		particles that interact with these frames are treated in
		<Xr ch="sentence-final-particles-illocutionary-force" />.
	</p>
</S>

<S t="Elliptical answers and minimal clauses" id="elliptical-answers">
	<p>
		In response to a content question the standard strategy is to repeat the relevant verb phrase,
		matching the morphology of the questioned predicate. There are no dedicated 'yes' and 'no'
		words in the affirmation/negation sense that English uses for all questions
		<Ref k="aynucorporadiscord" /> (nukopoli, aynu-corpora Discord, 2024-12-04, asserted; reported
		across multiple dialects; confirmed against the affirmative-frame <i lang="ain-Latn">ruwe un</i>
		of Nakagawa 2024: 396) ‹corpus-confirmed›.
	</p>

	<p>
		For polar questions (yes/no questions), there is notable dialect variation. In the Saru
		dialect the answer pattern mirrors Japanese: the respondent targets the propositional content
		of the question and affirms or denies it ('no, I am not going' in reply to 'are you not
		going?'). In other dialects — attested for Yakumo, Horobetsu, Tokachi, Bibai, Asahikawa, and
		Sōya among others — the respondent avoids a simple yes/no particle altogether and instead
		repeats the relevant verb phrase. To a negative polar question like
		<i lang="ain-Latn">somo e=oman ya?</i> 'are you not going?', a speaker from these dialects
		would reply with the verb alone, such as <i lang="ain-Latn">somo ku=oman</i> 'I am not going'
		or <i lang="ain-Latn">ku=oman kus ne</i> 'I am going (because)', rather than with an
		affirmation or denial particle
		<Ref k="aynucorporadiscord" /> (nukopoli, aynu-corpora Discord, 2024-12-04, asserted ✔;
		reported across eight dialect localities: Yakumo, Horobetsu, Saru, Tokachi, Bibai, Asahikawa,
		Nayoro, and Sōya) ‹corpus-confirmed›.
	</p>

	<Ex
		m="somo ku=oman"
		g="NEG 1SG.S=go"
		tr="I am not going."
		constructed
		note="Constructed elliptical reply to a polar yes/no question. In non-Saru dialects, the VP is repeated without a yes/no affirmation particle; the negative particle somo is part of the predicate being affirmed, not a sentential denial-word."
	/>

	<p>
		The forms <i lang="ain-Latn">e</i>, <i lang="ain-Latn">ho</i>, and
		<i lang="ain-Latn">m</i> that superficially resemble affirmation/agreement particles are
		response-to-call utterances, used when a speaker is addressed by name or summoned — not
		as affirmations of propositional content
		<Ref k="aynucorporadiscord" /> (nukopoli, aynu-corpora Discord, 2024-12-04, asserted ✔)
		‹corpus-confirmed›. They are treated under <Xr ch="sentence-final-particles-illocutionary-force" />.
	</p>

	<p>
		The minimal answer clause is therefore a predicate-only utterance: the subject is entirely
		omitted and the verb phrase — including any person indexes that anchor the participants — is
		the complete response. This is predicate ellipsis (the subject NP and topic marker are
		recoverable from the question), not absence of predication. Interrogative strategies and the
		full polar-question morphosyntax are treated in <Xr ch="interrogative-strategies-question-particles" />.
	</p>
</S>

<S t="Vocative fragments and address utterances" id="vocatives">
	<p>
		Direct address in Hokkaido Ainu uses bare nominal forms — personal names, kin terms, or title
		nouns — with no predicate. These are not propositions and not even elliptical predications;
		they are illocutionary acts of calling or summoning a participant. Their grammatical content
		is entirely addressee-targeting: the utterance indexes who is being addressed, not what is
		being said about them. In that sense vocative fragments are structurally parallel to the
		response-to-call particles above — both are non-propositional speech acts that lack a
		predicate by virtue of their illocutionary type, not by virtue of any structural anomaly.
		Kin terms used in vocative address may appear in the plain uninflected (non-possessed) form
		rather than the
		<Xr ch="concept-form-affiliative-form">possessed/affiliative form</Xr> that the same term
		would take when used referentially inside a clause, since the affiliative suffix presupposes a
		possessor argument that is not relevant in a direct address. The illocutionary inventory of
		Hokkaido Ainu, including the interaction of address, register, and honorific speech, is the
		subject of <Xr ch="sentence-final-particles-illocutionary-force" /> and
		<Xr ch="honorific-ritual-and-taboo-registers" />.
	</p>
</S>

<S t="Nominal-frame conditionals: B ne yakun" id="ne-yakun">
	<p>
		One productive minor construction builds on the copula by adding the conditional particle
		<A w="yakun" gl="if, when (conditional)" />: the frame <i lang="ain-Latn">[Subject] [Complement]
		ne yakun</i> expresses a condition on class membership or identity — 'if (S) is (C), then
		…' <Ref k="nakagawa2024" />;
		<Ref k="sato2009" />. Ijäs treats the construction as a standard conditional antecedent in her
		pedagogical grammar, noting that the copula in the conditional takes the same transitive-subject
		person indexes as in the declarative
		<Ref k="ijas2023" />. In the factual sense the construction is just a copular clause with
		<i lang="ain-Latn">yakun</i> in the conditional-particle slot that the clause-linkage system
		places at the right edge of a dependent clause (see <Xr ch="conditional-temporal-concessive-clauses" />
		for the full conditional system).
	</p>

	<Ex
		m="aynu ku=ne yakun"
		g="Ainu 1SG.S=COP COND"
		tr="if I am an Ainu …"
		constructed
		note="The copular conditional frame: the copula ne takes the 1SG transitive-subject prefix ku= and is followed by the conditional particle yakun. The whole antecedent is a dependent clause; the consequent follows in the main clause."
	/>

	<Ex
		m="nispa ne yakun"
		g="chief COP COND"
		tr="if (he) is a chief …"
		constructed
		note="Third-person subject: the copula ne takes no person affix (zero = 3rd person). The nominal complement nispa precedes ne in the standard V-final order."
	/>

	<p>
		The frame is especially frequent in discourse framing, where a speaker conditionally asserts
		the identity of a referent as a premise for what follows. The negative counterpart places the
		standard copula negator before <i lang="ain-Latn">ne</i>:
		<i lang="ain-Latn">X ka somo ne yakun</i> 'if (S) is not (C)' (see
		<Xr ch="nonverbal-predicate-tam-negation" /> for the
		<i lang="ain-Latn">ka somo ne</i> copula negation pattern, and
		<Xr ch="negation-existential-possessive-isam" /> for the existential counterpart). The
		person-marking behaviour is the same as in the declarative copular clause, including the
		idiosyncrasy whereby the copula takes no object-person affix even though it is semantically
		two-place <Ref k="nakagawa2024" p="132" />.
	</p>

	<p>
		One micro-fact about <i lang="ain-Latn">ne</i> in the <i lang="ain-Latn">ka somo ne</i>
		negation frame and sporadically in other contexts is that the copula appears without a subject
		affix — the person marking is absent in a way not predicted by the zero-marking of third
		person <Ref k="aynucorporadiscord" /> (nukopoli, aynu-corpora Discord, 2023-12-25, speculative;
		"reason unclear") ‹speculative›. This is an open gap in the description: no read primary source
		addresses the pattern systematically, and no structural account of the affix loss has been
		proposed. It may reflect the frozen or idiom-like status of the
		<i lang="ain-Latn">ka somo ne</i> string, but this remains without structural support.
	</p>

	<p>
		The copula also participates in the inchoative 'become' reading when followed by the
		existential <i lang="ain-Latn">an</i> (the <i lang="ain-Latn">ne an</i> sequence discussed by
		community members as the Ainu equivalent of Japanese <span lang="ja">〜になる</span>)
		<Ref k="aynucorporadiscord" /> (thegodofneet, aynu-corpora Discord, 2024-11-13, proposed;
		consistent with Refsing 1986: 145 and Nakagawa 2024: 118–119) ‹contested›. That inchoative
		construction is the interface between the copula and the TAM system and is treated in
		<Xr ch="nonverbal-predicate-tam-negation" /> and <Xr ch="tam-overview" />.
	</p>
</S>

<S t="The predicate-omission environment: a unified account" id="predicate-omission">
	<p>
		Across the constructions in this chapter, a common thread is the conditions under which the
		predicate — or its final element — is absent from the surface string. Three environments
		license predicate-omission or predicate-reduction in Hokkaido Ainu:
	</p>
	<ol>
		<li>
			<strong>Illocutionary reduction</strong> (formal-noun fragments, §<em>above</em>): the
			copula or existential that ordinarily closes the formal-noun frame is elided when the
			illocutionary force is polar-interrogative or exclamative. The nominalizer is retained; only
			the predicate over it is absent. The licensing condition is a specific illocutionary type, not
			a general ellipsis rule.
		</li>
		<li>
			<strong>Discourse-anaphoric ellipsis</strong> (elliptical answers, §<em>above</em>): in
			responses to polar and content questions, the subject NP and topic material are omitted under
			identity with the antecedent question; what remains is the predicate alone (or predicate +
			negator). This is VP-only predication, not verblessness.
		</li>
		<li>
			<strong>Non-propositional use</strong> (vocatives, address particles): the utterance is not a
			predication at all, so no predicate is expected. These are illocutionary primitives, outside
			the scope of clausal syntax.
		</li>
	</ol>

	<p>
		In none of these environments does an oblique phrase, a bare noun, or a bare adjective
		function as a predicate head — the environment in which Japanese and many SOV languages
		routinely omit the copula in informal speech has no structural counterpart in Hokkaido Ainu.
		The copula <i lang="ain-Latn">ne</i> and the existential <i lang="ain-Latn">an</i>/<i lang="ain-Latn">oka</i>
		are obligatory in their respective predication environments and cannot be structurally omitted
		to yield a bare-nominal or bare-locative predicate <Ref k="nakagawa2022pos" p="474" />;
		<Ref k="nakagawa2024" p="359–361" />; <Ref k="sato2008" p="20–21" />. The discourse conditions
		that govern when topic NPs and subject indices may be absent — a separate phenomenon — are
		treated in <Xr ch="topic-marking-anakne" />, <Xr ch="constituent-order-head-final" />, and
		<Xr ch="argument-realization-indexing" />.
	</p>
</S>
