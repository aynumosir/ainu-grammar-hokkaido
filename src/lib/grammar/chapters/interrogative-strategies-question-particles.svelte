<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Overview" id="overview">
	<p>
		Hokkaido Ainu marks clause-level interrogation through four intersecting mechanisms:
		rising intonation alone, sentence-final particles, a constituent-scoping focus-question
		particle, and the sentence-type alternation on the formal-noun evidential tail.
		Wh-pro-forms remain in their canonical argument or adjunct position throughout —
		there is no wh-movement and no obligatory cleft for question formation
		<Ref k="nakagawa2024" p="409–412" />; <Ref k="sato2008" p="136–138" />.
		The wh-pro-form inventory — <A w="hemanta" gl="what" />, <A w="hunna" gl="who" />,
		<A w="hunak" gl="where" />, <A w="hempara" gl="when" />, and their dialectal
		alternants — is documented in <Xr ch="interrogative-pro-forms" />; this chapter
		describes the clause-level framing strategies, the interrogative particles, and the
		conventions for answering questions.
	</p>
	<p>
		Two particles carry most of the segmental interrogative work.
		<A w="he" /> scopes over the constituent at issue rather than the whole clause,
		placing it closer to a 副助詞 than to a canonical sentence-final particle in its
		distribution ‹contested› <Ref k="fukuda1961" p="§8, §31" />;
		<Ref k="nakagawa2024" p="323–324" />. <A w="ya" /> (post-consonant allomorph
		<A w="a" />) is a true sentence-final particle that also nominalizes a clause as
		'whether …' in embedded questions <Ref k="nakagawa2024" p="332–333" />. The
		deepest structural mechanism, however, is the alternation among the copula
		<A w="ne" />, the existential <A w="an" />, and the ∅-tail on the formal nouns
		<A w="ruwe" gl="track-POSS" />, <A w="hawe" gl="voice-POSS" />,
		<A w="siri" gl="appearance-POSS" />, and <A w="humi" gl="sound-POSS" />: the
		same nominal that closes a declarative as <i lang="ain-Latn">ruwe ne</i> becomes
		a polar question as bare <i lang="ain-Latn">ruwe</i> and a content question as
		<i lang="ain-Latn">ruwe an</i>. The inferential evidential and its frame
		alternations are treated fully in <Xr ch="ruwe-ne-inferential" />; the full
		sentence-final particle inventory is in
		<Xr ch="sentence-final-particles-illocutionary-force" />. A pedagogical overview
		of question formation is in <Ref k="ijas2023" />.
	</p>
</S>

<S t="Polar questions: five strategies" id="polar-strategies">
	<p>
		Nakagawa identifies five overlapping strategies for forming polar (yes/no) questions,
		any of which may combine with another <Ref k="nakagawa2024" p="409" />:
	</p>

	<table>
		<thead>
			<tr>
				<th>strategy</th>
				<th>segmental marker</th>
				<th>position</th>
				<th>notes</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>(a) rising intonation</td>
				<td>∅</td>
				<td>clause-final prosody</td>
				<td>unmarked, minimal device; no instrumental pitch-track documentation available</td>
			</tr>
			<tr>
				<td>(b) bare formal noun</td>
				<td><i lang="ain-Latn">ruwe, hawe, siri, humi</i> alone (∅-tail)</td>
				<td>clause-final</td>
				<td>copula <i lang="ain-Latn">ne</i> omitted; see <Xr ch="ruwe-ne-inferential" s="frames">the frame alternations</Xr></td>
			</tr>
			<tr>
				<td>(c) Q-particle <i lang="ain-Latn">ya / a</i></td>
				<td><i lang="ain-Latn">ya</i>, post-consonant <i lang="ain-Latn">a</i></td>
				<td>sentence-final</td>
				<td>bare use may sound too direct; often reinforced by a formal-noun frame</td>
			</tr>
			<tr>
				<td>(d) focus-Q particle <i lang="ain-Latn">he</i></td>
				<td><i lang="ain-Latn">he</i></td>
				<td>after the focused constituent (may be non-final)</td>
				<td>scopes a single constituent; also used for disjunctive alternative questions</td>
			</tr>
			<tr>
				<td>(e) combined frame</td>
				<td><i lang="ain-Latn">ruwe he an</i>, <i lang="ain-Latn">hawe he an</i>, …</td>
				<td>clause-final</td>
				<td>bare formal noun + <i lang="ain-Latn">he</i> + existential; Saru-favoured reinforced form</td>
			</tr>
		</tbody>
	</table>

	<p>
		Strategy (a) — rising intonation without any segmental reflex — is the unmarked
		polar-question device <Ref k="nakagawa2024" p="409" />; <Ref k="sato2008" p="136" />.
		It leaves no trace that would survive in written documentation; Fukuda's treatment
		of sentence melody carefully separates prosodic questioning from the particle
		system <Ref k="fukuda1961" p="§31" />.
		Strategy (b) uses the bare formal noun, the ∅-tail alternant of the evidential
		predicate. The example below shows it with <A w="hawe" gl="voice-POSS" />:
	</p>

	<Ex
		m="e=eraman haw-e"
		g="2SG.A=understand voice-POSS"
		tr="Did you understand?"
		cite="sato2008:136"
		dial="CHI"
		note="Bare formal noun hawe without following ne or an. Adding ne yields a declarative ('you understood'); adding an would open a content question requiring a wh-word."
	/>

	<p>
		The same ∅-tail applies to <A w="ruwe" />, here inside a conditional permission
		request:
	</p>

	<Ex
		m="cip c=o yakka pirka ru-we"
		g="boat 1PL.EXCL.A=board even.if good track-POSS"
		tr="May we board the boat?"
		cite="nakagawa2024:409"
		dial="SAR"
		note="Nakagawa 2024: 409b. The bare ruwe without ne or an marks the polar question. yakka 'even if' frames the conditional premise of a permission request."
	/>

	<p>
		Strategy (e) reinforces the polar question by inserting <A w="he" /> between the
		bare formal noun and the existential <A w="an" />, producing the frame
		<i lang="ain-Latn">ruwe he an</i>:
	</p>

	<Ex
		m="tane pirka ru-we he an"
		g="now good track-POSS Q exist"
		tr="Is it good now?"
		cite="ilcaa1976"
		dial="SHI"
		place="織田ステノ 'reyep kamuy', AA研アイヌ語資料 (静内)"
		note="Combined polar-Q frame ruwe he an. ILCAA Ainu materials; narrator 織田ステノ, document 'reyep kamuy' (静内 dialect)."
	/>
</S>

<S t="The sentence-type alternation on formal-noun tails" id="sfp-alternation">
	<p>
		When a clause is nominalized by one of the four formal nouns, the predicate following
		the nominal determines sentence type. Satō documents the three-way pattern for all
		four formal nouns <Ref k="sato2008" p="136–137" />, confirmed in detail by
		Nakagawa <Ref k="nakagawa2024" p="394–396" />:
	</p>

	<table>
		<thead>
			<tr>
				<th>sentence type</th>
				<th>formal-noun tail</th>
				<th>source</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>declarative</td>
				<td>NMLZ + <i lang="ain-Latn">ne</i> (copula)</td>
				<td><Ref k="sato2008" p="136" />; <Ref k="nakagawa2024" p="394" /></td>
			</tr>
			<tr>
				<td>content (wh) question</td>
				<td>NMLZ + <i lang="ain-Latn">an</i> (existential); expanded NMLZ + <i lang="ain-Latn">an hi an</i></td>
				<td>wh-word required; <Ref k="sato2008" p="136" />; <Ref k="nakagawa2024" p="410" /></td>
			</tr>
			<tr>
				<td>polar (yes/no) question</td>
				<td>bare NMLZ (∅-tail; copula omitted)</td>
				<td><Ref k="sato2008" p="136" />; <Ref k="nakagawa2024" p="409" /></td>
			</tr>
			<tr>
				<td>exclamative</td>
				<td>NMLZ + <i lang="ain-Latn">an</i> (<i lang="ain-Latn">an</i> optional)</td>
				<td><Ref k="sato2008" p="137" />; <Ref k="nakagawa2024" p="395" /></td>
			</tr>
		</tbody>
	</table>

	<p>
		Satō proposes a structural motivation: the copula <A w="ne" /> predicates the nature
		of the subject, so the declarative asserts what something <em>is</em>; the existential
		<A w="an" /> asserts that a situation exists while its nature remains open to the
		wh-word in a content question; and the bare formal noun without either predicate
		treats even the existence of the described state as the open question — the polar
		reading <Ref k="sato2008" p="137" /> ‹speculative›. The account is Satō's own
		working hypothesis, not a derivation shared across the read sources.
	</p>
	<p>
		Nakagawa gives the content question an additional expansion:
		<i lang="ain-Latn">NMLZ an hi an</i> — existential, then the formal noun
		<A w="hi" gl="time, place, fact (formal noun)" />, then existential again —
		emphasizes the facthood of the unknown element <Ref k="nakagawa2024" p="410" />.
		The alternation also disambiguates near-identical wh-clauses:
		<i lang="ain-Latn">hemanta an?</i> = 'what (is there)?' versus
		<i lang="ain-Latn">hemanta ne?</i> = 'what is it?' / 'why?' — the choice of
		<A w="an" /> vs <A w="ne" /> after a wh-word marks open-existence question vs
		identification <Ref k="nakagawa2024" p="412" />. The evidential-tail system and
		the semantics of <A w="ne" /> vs <A w="an" /> are set out in
		<Xr ch="ruwe-ne-inferential" s="frames">the frames section</Xr> and in
		<Xr ch="evidential-schema-overview" />.
	</p>
</S>

<S t="The he particle: scope and category" id="he-particle">
	<p>
		Fukuda classifies <A w="he" /> as a 副助詞 on distributional grounds: it attaches
		after any constituent — noun, postpositional phrase, verb, adjective, or conditional
		clause — and marks that constituent as the locus of uncertainty, so it may stand
		inside the clause rather than at the sentence boundary
		<Ref k="fukuda1961" p="§8" />; <Ref k="nakagawa2024" p="323–324" />.
		When it happens to fall at the clause end Fukuda notes a category straddle toward
		the sentence-final class <Ref k="fukuda1961" p="§31" /> ‹contested›;
		Nakagawa and Satō describe it functionally rather than categorially, emphasizing
		its constituent-scoping behaviour
		<Ref k="nakagawa2024" p="323–324" />; <Ref k="sato2008" p="63" />.
	</p>
	<p>
		The following example places <A w="he" /> after a conditional clause, making the
		conditional — not the final adjective — the questioned element:
	</p>

	<Ex
		m="a=rayke ciki he pirka"
		g="4.A=kill COND Q good"
		tr="Is it OK if I (rather than you) kill it?"
		cite="nakagawa2024:409"
		dial="SAR"
		note="Nakagawa 2024: 409d. he follows the conditional clause a=rayke ciki 'if I kill it'; the focus of the question is the conditional premise, not the final predicate pirka 'good'."
	/>

	<p>
		When placed after a postpositional phrase, <A w="he" /> turns that phrase into
		a focused confirmation request, even as a fragment without a full predicate:
	</p>

	<Ex
		m="keman hi ta he"
		g="famine NMLZ LOC Q"
		tr="At the time of the famine?"
		cite="nakagawa2024:409"
		dial="SAR"
		note="Nakagawa 2024: 409d. he scopes the locative phrase keman hi ta 'at the time of the famine' as a fragment confirmation request."
	/>

	<p>
		In content questions, <A w="he" /> marks the wh-adjunct cluster as the focal
		unknown and can combine with the wh-word in the adjunct slot:
	</p>

	<Ex
		m="hnta kusu somo e=ipe he"
		g="where because NEG 2SG.S=eat Q"
		tr="Why aren't you eating?"
		cite="nakagawa2024:407"
		dial="SAR"
		note="Nakagawa ex. 855. The Saru wh-adverb hnta (= hunak 'where'; used here adverbially as 'why') plus the reason marker kusu stay in the adjunct slot; he marks the reason cluster as the focal unknown."
	/>

	<p>
		Satō notes that the most characteristic use of <A w="he" /> is the disjunctive
		frame <i lang="ain-Latn">X he … Y he …</i>, which poses an either/or choice between
		two alternatives <Ref k="sato2008" p="63" />; this overlaps with the
		alternative-question strategy described below.
	</p>
	<p>
		Three dialect-restricted particles cover overlapping territory.
		<A w="hetap" /> (<A w="henta" /> in some sources) marks formal or dubitative polar
		questions in the area west of Shizunai. <A w="enta" /> (Shizunai-area) marks the
		specific element in doubt, paralleling <A w="he" /> in narrow scoping.
		<A w="omoun" /> (Shizunai-area) signals a conjectural question
		<Ref k="nakagawa2024" p="324, 326" />. All three coexist with the pan-dialectal
		<A w="he" />, which carries no dialect restriction.
	</p>
</S>

<S t="The ya/a question particle" id="ya-particle">
	<p>
		<A w="ya" /> is a sentence-final particle that marks the clause as a question —
		polar or content — without scoping any particular constituent
		<Ref k="nakagawa2024" p="332–333" />; <Ref k="fukuda1961" p="§29" />. Its
		post-consonant allomorph <A w="a" /> is not merely phonological reduction:
		Nakagawa treats it as a genuine second particle form <Ref k="nakagawa2024" p="333" />.
	</p>
	<p>
		Satō observes that <A w="ya" /> alone on a bare verb can sound abrupt or overly
		direct; it frequently accompanies a formal-noun frame or a softening particle
		<Ref k="sato2008" p="74" />. The particle marks polar questions:
	</p>

	<Ex
		m="e=pirka ya"
		g="2SG.S=good Q"
		tr="Are you well?"
		constructed
		note="Minimal polar question with sentence-final Q-particle ya. In practice, bare-verb questions with ya alone are often felt as too direct; a formal-noun frame (strategy b or e) is common in polite speech."
	/>

	<p>
		<A w="ya" /> also closes content questions where the wh-word and a nominalized
		predicate already supply the interrogative content. The Tokachi allomorph
		<A w="a" /> appears in a recognizable dialectal content-question frame:
	</p>

	<Ex
		m="taan pe nep tap an a"
		g="this thing what just exist Q"
		tr="What is this?"
		cite="nakagawa2024:412"
		dial="TOK"
		note="Nakagawa ex. 879 (citing Takahashi via Nakagawa 2024: 412). The Q-particle a (post-consonant allomorph of ya) closes the Tokachi content-question frame nep tap an; taan pe 'this thing' is the topic."
	/>

	<p>
		Beyond its SFP use, <A w="ya" /> nominalizes a clause as 'whether …' when embedded
		under a verb of knowing or investigating; in that function it is a complementizer,
		not a sentence-final particle, and the embedded polar question is the object
		complement of the matrix verb <Ref k="nakagawa2024" p="333" />;
		<Ref k="sato2008" p="74" />. The complementizer function is addressed in the
		section on embedded questions below.
	</p>
	<p>
		A community analysis proposes that the disjunctive conjunction
		<A w="neya" gl="or" /> is historically <i lang="ain-Latn">ne + ya</i>
		('be' + Q-particle → 'or'), the Q-particle supplying the alternative reading
		‹contested› <Ref k="aynucorporadiscord" /> (aomidori_cs_, 2023-12-12).
		This etymology is consistent with the pattern but is not independently documented
		in the read sources.
	</p>
</S>

<S t="Content questions: wh in situ" id="content-questions">
	<p>
		Content questions retain the wh-pro-form in its canonical argument or adjunct
		position. Nothing moves. When a formal-noun tail is present, the copula is
		replaced by the existential <A w="an" />, producing <i lang="ain-Latn">ruwe an</i>
		/ <i lang="ain-Latn">hawe an</i> etc., or the expanded
		<i lang="ain-Latn">NMLZ an hi an</i> frame
		<Ref k="nakagawa2024" p="410" />; <Ref k="sato2008" p="136–137" />.
		Without a formal-noun tail, any of the polar-question devices — rising intonation,
		<A w="ya" />, or <A w="he" /> on the focal wh-element — also marks a content
		question.
	</p>

	<Ex
		m="hemanta ne kusu ene sir-an hi an"
		g="what COP because like.this appear-4.S NMLZ exist"
		tr="Why is it like this?"
		cite="nakagawa2024:407"
		dial="SAR"
		note="Nakagawa ex. 856. The wh-expression hemanta ne kusu 'what because = why' stays in the clause-initial adjunct position; sir-an is the fourth-person intransitive of the verb 'appear, seem'; hi an is the expanded content-question frame (formal noun + existential)."
	/>

	<p>
		The wh-pro-form inventory has a two-way split between question-word shapes
		(<A w="hunna" gl="who" />, <A w="hemanta" gl="what" />,
		<A w="hunak" gl="where" />, <A w="makanak" gl="how" />) and indefinite shapes
		(<A w="nen" gl="someone" />, <A w="nep" gl="something" />,
		<A w="ney" gl="somewhere" />, <A w="neun" gl="somehow" />). The indefinite
		shapes combine with the additive particle <A w="ka" gl="also, even" /> to produce
		'someone/something/somewhere' in positive contexts and 'no one/nothing/nowhere'
		under negation <Ref k="sato2008" p="137" />;
		<Ref k="nakagawa2024" p="322–323" />. The full paradigm and its dialectal variants
		are in <Xr ch="interrogative-pro-forms" /> and
		<Xr ch="indefinite-fourth-person-paradigm" />.
	</p>
	<p>
		The constraint on the formal-noun tail means that the <A w="ne" /> / <A w="an" />
		choice disambiguates otherwise similar clauses. The declarative
		<i lang="ain-Latn">hemanta ne?</i> = 'what is it?' / 'why?' (copula, identifying)
		contrasts with the existential content question
		<i lang="ain-Latn">hemanta an?</i> = 'what is there?', and the obligatory
		existential tail in the presence of a wh-word (<i lang="ain-Latn">*hemanta ne kusu
		ene siran hi ne</i> is ungrammatical as a question) follows from the sentence-type
		alternation described in the preceding section
		<Ref k="sato2008" p="136–137" />; <Ref k="nakagawa2024" p="412" />.
	</p>
</S>

<S t="Alternative and disjunctive questions" id="alternative-disjunctive">
	<p>
		Disjunctive alternatives use the particle
		<A w="hene" gl="or; for instance" /> repeated after each alternative member
		<Ref k="nakagawa2024" p="323–324" />; <Ref k="fukuda1961" p="§6" />.
		Tokachi and some eastern varieties use <A w="ene" /> in this function
		<Ref k="nakagawa2024" p="323" />. For an alternative question, the same
		<A w="hene" /> disjunction frame receives a polar-question marking — rising
		intonation, <A w="ya" />, or <A w="he" /> after each alternative:
	</p>

	<Ex
		m="nisatta hene oyasim hene e=arpa"
		g="tomorrow or day.after or 2SG.S=go"
		tr="Are you going tomorrow or the day after?"
		constructed
		note="The NP-disjunction nisatta hene oyasim hene 'tomorrow or the day after' follows Nakagawa 2024: 323–324 (ex. 534); the polar-Q framing by rising intonation is constructed here. In natural speech ya or a final he may close the sentence instead."
	/>

	<p>
		The <i lang="ain-Latn">X he … Y he …</i> frame identified by Satō as
		<A w="he" />'s most characteristic use <Ref k="sato2008" p="63" /> extends the
		same logic to alternative verbal predicates: placing <A w="he" /> after each
		alternative focuses the question on the choice between them.
		<A w="hene" /> also heads listing alternatives in declarations ('for instance,
		tomorrow or the day after'); intonation and context distinguish the question
		reading from the declarative listing.
	</p>
</S>

<S t="Embedded questions" id="embedded-questions">
	<p>
		Embedded polar questions use <A w="ya" /> as a nominalizing complementizer: the
		clause ending in <A w="ya" /> is treated as a nominal 'whether [proposition]'
		and functions as the complement of a verb of knowing or asking
		<Ref k="nakagawa2024" p="333" />; <Ref k="sato2008" p="74" />. This
		complementizer function is formally parallel to the nominalizers
		<A w="p" gl="thing, fact (nominalizer)" /> and
		<A w="hi" gl="time, place, fact (formal noun)" /> treated in
		<Xr ch="nominalization-p-pe" />.
	</p>
	<p>
		Embedded content questions use a different frame. The complementizers
		<A w="kunak" />, <A w="yak" />, and <A w="kuni" /> introduce indirect-speech and
		indirect-question complements under transitive reporting verbs such as
		<A w="ramu" gl="think" /> or <A w="ye" gl="say" />
		<Ref k="bugaeva2008" p="35–37" />; <Ref k="nakagawa2024" p="470–472" />.
		These contrast with the quotative particle <A w="sekor" />, which introduces
		direct and semi-direct speech under intransitive verbs; the transitivity split
		(<A w="sekor" /> ⇒ intransitive reporter, <A w="kuni" /> ⇒ transitive reporter)
		is confirmed by community observation
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-11-09) ‹asserted›.
		The direct/semi-direct/indirect speech continuum, person-switching in logophoric
		speech, and the <A w="sekor" /> / <A w="kuni" /> contrast are treated in
		<Xr ch="clause-linkage-overview" />.
	</p>
</S>

<S t="Answer and response strategies" id="answer-strategies">
	<p>
		Hokkaido Ainu has no grammaticalized 'yes' and 'no' particles used crosslinguistically
		to confirm or deny a proposition directly. The standard response to a polar or
		content question repeats the relevant verb — in its positive form to confirm, or
		with negation <A w="somo" /> to deny — and may add a reason clause
		<Ref k="nakagawa2024" p="396" />. Community documentation from across several
		dialects corroborates this: in most dialects outside Saru, bare affirmative or
		negative interjections are not used to answer a question, and the verb-repetition
		strategy is employed exclusively. Saru aligns more closely with Japanese-style
		polarity responses. Forms such as <i lang="ain-Latn">e</i>,
		<i lang="ain-Latn">ho</i>, and <i lang="ain-Latn">m</i> are responses to being
		addressed or called, not affirmation/denial particles
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-12-04) ‹asserted›.
	</p>
	<p>
		One attested affirmative-response frame retains the formal noun and adds the
		sentence-final particle <A w="un" />:
	</p>

	<Ex
		m="ku=nu ru-we un"
		g="1SG.A=hear track-POSS FIN"
		tr="Yes, I heard it."
		cite="nakagawa2024:396"
		dial="HK"
		note="Nakagawa ex. 794. The formal noun ruwe is retained in the affirmative answer; the final particle un (a soft-affirmation sentence-final particle, not the existential verb) closes the clause in a confirmatory register."
	/>

	<p>
		The particle <A w="wa" /> (soft assertive) also frequently closes replies,
		softening the declarative force of a repeated or corrective statement
		<Ref k="nakagawa2024" p="334" />; <Ref k="fukuda1961" p="§21" />. Neither the
		Q-particles nor the response particles are gender-restricted: HA has no
		sentence-final particle specific to men or women <Ref k="sato2008" p="72" />.
		The male-register skew noted for <i lang="ain-Latn">ruwe ne</i> in oral narrative
		is a property of the evidential class, not of the SFP class, and the two systems
		should not be conflated ‹corpus-suggested›; see
		<Xr ch="gendered-register-speech" /> for oral-register distinctions and
		<Xr ch="ruwe-ne-inferential" s="semantics">the semantics of ruwe ne</Xr> for
		the gendered-register side of the evidential.
	</p>
</S>
