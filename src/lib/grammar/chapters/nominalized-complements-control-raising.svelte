<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Overview" id="overview">
	<p>
		Clausal complements in Hokkaido Ainu are formed through the same nominalization strategy that
		builds relative-clause NPs: a finite, person-marked clause is followed by a formal noun or
		complementizer that turns the whole into a nominal argument of a higher predicate. The verb inside
		the embedded clause keeps its ordinary person affixes, polarity, and aspect morphology; no
		non-finite or participial form exists
		<Ref k="bugaeva2016" p="100, 226–228" />; <Ref k="nakagawa2024" p="503" />. What separates a
		complement clause from a relative clause is a single structural condition, the
		<em>arity</em> of the embedded clause, treated in the section that follows. The inventory of
		complementizers includes the abstract formal noun <A w="hi" gl="thing, fact, time, place" />,
		the sensory possessive forms <A w="siri" gl="appearance" />, <A w="hawe" gl="voice" />, and
		<A w="humi" gl="sound, feeling" />, the concrete nominalizer <A w="p" gl="(thing)" /> ~ <A
			w="pe"
			gl="(thing/person)"
		/>, and the irrealis complementizer <A w="kuni" gl="(purposive/deontic)" />, together with a
		set of indirect-speech markers treated in <Xr ch="quotative-complementation-sekor" />. Their
		grammaticalization from lexical nouns and their role in evidential clause-final constructions are
		set out in <Xr ch="formal-defective-nouns" /> and <Xr ch="evidential-schema-overview" />;
		<A w="p" /> ~ <A w="pe" /> as a headless relative-clause nominalizer is treated in
		<Xr ch="nominalization-p-pe" />, which cross-references the present chapter for the
		complementizer use.
	</p>
</S>

<S t="The arity-0 diagnostic" id="arity-zero">
	<p>
		Nakagawa's <em>arity</em> (アリティ) accounting provides the structural boundary between a
		relative clause and a complement clause. Every NP in the clause contributes −1 to a running
		count; every argument slot required by the verb contributes +1. A formal noun itself has arity
		−1. When the clause before a formal noun has total arity ≥ +1, a participant slot remains open
		and the formal noun fills it as the head of a relative-clause NP. When the clause already has
		arity 0 — every argument slot is satisfied — the formal noun nominalizes the whole clause as an
		event or fact; this is the complement reading
		<Ref k="nakagawa2024" p="261–262, 504, 507" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>arity of the embedded clause</th>
				<th>role of the following formal noun</th>
				<th>construction type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>≥ +1 (a participant slot is unfilled)</td>
				<td>head of the relative clause, fills the open slot</td>
				<td>relative-clause NP → <Xr ch="prenominal-gap-relative-clauses" /></td>
			</tr>
			<tr>
				<td>0 (the clause is fully saturated)</td>
				<td>complementizer, nominalizes the whole clause</td>
				<td>complement clause (this chapter)</td>
			</tr>
		</tbody>
	</table>

	<p>
		Satō's formulation of the same distinction is categorical: a <em>nominalizer</em> (名詞化辞)
		nominalizes a whole content clause and allows no reconstruction of an underlying sentence,
		whereas a <em>formal noun</em> (形式名詞) heading a relative clause can be so reconstructed
		<Ref k="sato2008" p="174–175" />. Nakagawa prefers to treat the formal nouns as a word class and
		the complementizer function as a syntactic role available to some members of that class
		<Ref k="nakagawa2024" p="508" />. The same surface string <i lang="ain-Latn">[clause] hi</i>
		or <i lang="ain-Latn">[clause] p</i> is parsed differently depending on which reading the arity
		yields; examples below illustrate both.
	</p>

	<p>
		The following illustrates the complement reading of <i lang="ain-Latn">hi</i>. The embedded
		clause <i lang="ain-Latn">hekattar tura sinot=an</i> has arity 0:
		<i lang="ain-Latn">sinot</i> 'play' is an intransitive verb (+1) whose S slot is satisfied by
		the fourth-person suffix <i lang="ain-Latn">=an</i> (−1), leaving no gap.
		<i lang="ain-Latn">hi</i> therefore nominalizes the whole clause as a fact:
	</p>

	<Ex
		m="hekattar tura sinot=an hi ka a=onaha kopan"
		g="children COMIT play=4.S NMLZ even 4.A=father refuse"
		tr="My father refused even that I play with the children."
		cite="nakagawa2024:507"
		dial="HK"
		note="The embedded clause hekattar tura sinot=an has arity 0 and hi nominalizes it as a fact-complement. Nakagawa's arity count: sinot (+1) with =an (−1) = 0. hi cannot be a relative-clause head here because there is no open slot to fill."
	/>
</S>

<S t="Complement-taking predicates" id="complement-predicates">
	<p>
		The matrix predicates that select a nominalized complement fall into three semantic groups:
		cognition, perception, and speech/directive. A verb's argument structure places an upper bound
		on the number of person affixes it can carry — typically one for the agent (A) and one for the
		object (O); the complement clause then occupies the single object slot
		<Ref k="nakagawa2024" p="503–509" />. This is directly related to the
		<Xr ch="person-marking-architecture">two-affix cap on the verb template</Xr>.
	</p>

	<table>
		<thead>
			<tr>
				<th>predicate</th>
				<th>gloss</th>
				<th>preferred complementizer(s)</th>
				<th>semantic class</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">nukar</i></td>
				<td>see</td>
				<td><i lang="ain-Latn">sir-i</i>, <i lang="ain-Latn">hi</i></td>
				<td>visual perception</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">nu</i></td>
				<td>hear, ask about</td>
				<td><i lang="ain-Latn">haw-e</i>, <i lang="ain-Latn">hum-i</i>, <i lang="ain-Latn">hi</i></td>
				<td>auditory/non-visual perception</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ramu</i></td>
				<td>think</td>
				<td><i lang="ain-Latn">kuni</i>, <i lang="ain-Latn">kunak</i>, <i lang="ain-Latn">yak</i>, <i lang="ain-Latn">sir-i</i>, <i lang="ain-Latn">hum-i</i></td>
				<td>cognition</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">eramiskari</i> / <i lang="ain-Latn">eramuskari</i></td>
				<td>not know, not understand</td>
				<td><i lang="ain-Latn">hi</i>, <i lang="ain-Latn">p</i> ~ <i lang="ain-Latn">pe</i></td>
				<td>cognition (negative)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">eraman</i> / <i lang="ain-Latn">eramuan</i></td>
				<td>understand, know</td>
				<td><i lang="ain-Latn">hi</i>, <i lang="ain-Latn">p</i> ~ <i lang="ain-Latn">pe</i></td>
				<td>cognition</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">kopan</i></td>
				<td>refuse, not want</td>
				<td><i lang="ain-Latn">hi</i></td>
				<td>volition</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ye</i></td>
				<td>say, tell</td>
				<td><i lang="ain-Latn">kuni</i>, <i lang="ain-Latn">kunak</i>, <i lang="ain-Latn">yak</i>, <i lang="ain-Latn">kusu</i></td>
				<td>speech</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">eyam</i></td>
				<td>worry</td>
				<td><i lang="ain-Latn">yak</i></td>
				<td>emotive</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">takar</i></td>
				<td>dream</td>
				<td><i lang="ain-Latn">yak</i></td>
				<td>emotive/cognitive</td>
			</tr>
		</tbody>
	</table>

	<p>
		The list above is drawn from Nakagawa and Satō and is not exhaustive
		<Ref k="nakagawa2024" p="475–480, 503–513" />; <Ref k="sato2008" p="175–178" />. The
		complementizer preferences are typical but not always categorical: <i lang="ain-Latn">ramu</i>,
		for instance, co-occurs with <i lang="ain-Latn">kuni</i> for future and wished content, with
		<i lang="ain-Latn">yak</i> for past or ongoing content, and with the sensory heads
		<i lang="ain-Latn">sir-i</i> and <i lang="ain-Latn">hum-i</i> when thought involves a
		quasi-perceptual quality ‹corpus-suggested›.
	</p>
</S>

<S t="hi as complementizer" id="hi-complementizer">
	<p>
		The formal noun <A w="hi" gl="thing, fact, time, place" /> is the maximally abstract
		complementizer. Satō describes it as carrying "almost no concrete meaning" and functioning to
		nominalize the entire clause before it
		<Ref k="sato2008" p="169, 174" />; Nakagawa calls it a 補文標識 (complementizer) when its
		preceding clause has arity 0
		<Ref k="nakagawa2024" p="507" />. In this role it appears most frequently as the object of
		cognition predicates such as <i lang="ain-Latn">eramiskari</i> 'not understand' and
		<i lang="ain-Latn">kopan</i> 'refuse':
	</p>

	<Ex
		m="a=ye hi ka a=kar hi ka a=eramiskari"
		g="4.A=say NMLZ even 4.A=do NMLZ even 4.A=not.understand"
		tr="not knowing what to say or what to do"
		cite="ninjal2003"
		dial="CHI"
		place="Oda Ito, アイヌ語口承文芸コーパス (NINJAL) [ninjal-folklore/026#61]"
		note="Two parallel hi complements coordinated with ka 'even/also': a=ye hi 'the saying-thing' and a=kar hi 'the doing-thing' both serve as objects of a=eramiskari. Each embedded clause has arity 0 (the 4th-person agent a= fills the A slot of a transitive verb)."
	/>

	<p>
		A nominalized clause headed by <i lang="ain-Latn">hi</i> can also serve as the grammatical
		subject of a stative predication. Bugaeva cites (after Tamura) a clausal-subject construction
		in which a coordinated VP is nominalized by <i lang="ain-Latn">hi</i> and predicated as 'best':
	</p>

	<Ex
		m="ku=kemeyki kor ku=itak hi iyotta pirka"
		g="1SG.A=sew while 1SG.A=speak NMLZ most be.good"
		tr="Speaking while sewing is best."
		cite="bugaeva2016:261"
		dial="SAR"
		note="After Tamura (2000: 126). hi nominalizes the saturated coordinated clause ku=kemeyki kor ku=itak (arity 0: each transitive verb has its A slot filled by ku=). The nominalized NP is the clausal subject of the predication iyotta pirka 'is best'."
	/>

	<p>
		The Okuda–Nakagawa analysis of <i lang="ain-Latn">hi</i> distinguishes a 'place where' reading
		(arity ≥ +1, RC head, requires a case postposition such as <i lang="ain-Latn">oro ta</i>) from
		a 'time/thing/fact' reading (arity 0, complementizer, no postposition required)
		<Ref k="nakagawa2024" p="510–511" />. This distinction is a tendency, not absolute: the
		Horobetsu example <i lang="ain-Latn">seta utar osoma hi</i> 'the dogs' privy' (literally 'the
		place dogs defecate') lacks <i lang="ain-Latn">oro ta</i> yet takes the 'place' reading
		<Ref k="nakagawa2024" p="511" /> ‹contested›. The 'place' analysis rests on Okuda (1989), read
		only second-hand via Nakagawa here.
	</p>
</S>

<S t="The sensory nominalizers as perception complements" id="sensory-complementizers">
	<p>
		The four possessed-form nominalizers <i lang="ain-Latn">ru-we</i>, <i lang="ain-Latn">sir-i</i>,
		<i lang="ain-Latn">haw-e</i>, and <i lang="ain-Latn">hum-i</i> function primarily as
		clause-final evidential heads (treated in <Xr ch="evidential-schema-overview" /> and
		<Xr ch="ruwe-ne-inferential" />), but Satō shows that three of them — <i lang="ain-Latn">sir-i</i>,
		<i lang="ain-Latn">haw-e</i>, and <i lang="ain-Latn">hum-i</i> — also nominalize embedded
		clauses as perception-object NPs under <i lang="ain-Latn">nukar</i> 'see' and
		<i lang="ain-Latn">nu</i> 'hear/ask', with a semantic specialization:
		<i lang="ain-Latn">sir-i</i> marks an event in progress at reference time (visual perception),
		<i lang="ain-Latn">haw-e</i> a speech event heard, and
		<i lang="ain-Latn">hum-i</i> a non-visual sensation
		<Ref k="sato2008" p="175–178" />; <Ref k="nakagawa2024" p="508" />.
	</p>

	<p>
		In this use the possessed-form nominalizer takes a saturated clause as its implicit possessor:
		the 'appearance/voice/feeling of [the embedded event]'. The whole
		<i lang="ain-Latn">[clause] sir-i</i> or
		<i lang="ain-Latn">[clause] haw-e</i> then fills the O slot of the perception verb:
	</p>

	<Ex
		m="hekaci apkas sir-i ku=nukar"
		g="child walk appearance-POSS 1SG.A=see"
		tr="I saw the child walking."
		constructed
		dial="HK"
		note="sir-i (< sir 'appearance' + POSS suffix -i) nominalizes the saturated arity-0 clause hekaci apkas ('child walks': apkas +1, hekaci −1 = 0). The whole [clause sir-i] is the object of ku=nukar. Constructed to illustrate the pattern; the semantic profile of siri (ongoing, visually accessible event) is established by Satō (2008: 178)."
	/>

	<Ex
		m="hekaci itak haw-e ku=nu"
		g="child speak voice-POSS 1SG.A=hear"
		tr="I heard the child speaking."
		constructed
		dial="HK"
		note="haw-e (< haw 'voice' + POSS -e) nominalizes the auditory event as the object of nu 'hear/ask about'. Constructed to illustrate the pattern; the hawe + nu pairing is established by Satō (2008: 176–177) and Nakagawa (2024: 508)."
	/>

	<p>
		Nakagawa observes that these four evidential nominalizers constitute "one type of complementizer"
		alongside the non-evidential complementizers; the clause-final 文末句 use (where they are closed
		by the copula <i lang="ain-Latn">ne</i> or existential <i lang="ain-Latn">an</i>) is the same
		construction extended to main-clause predication
		<Ref k="nakagawa2024" p="508" />. The Dal Corso debate about whether these structures are
		biclausal or partially grammaticalized monoclausal predicates applies equally here and is taken
		up in the constituency section below.
	</p>
</S>

<S t="kuni as complement marker" id="kuni-complementizer">
	<p>
		The complementizer <A w="kuni" gl="(purposive/deontic)" /> nominalizes the preceding clause and
		expresses content that is future-oriented, inferred, desired, or directed: what the matrix
		subject says must happen, thinks should happen, or intends to happen
		<Ref k="nakagawa2024" p="476" />. Nakagawa classifies <i lang="ain-Latn">kuni</i> as a
		conjunction with formal-noun-like use (接続助詞の形式名詞的な用法); Bugaeva analyses the complex
		<i lang="ain-Latn">kuni-p</i> as deontic 'what should be'
		<Ref k="bugaeva2016" p="294" />. The purpose and adverbial uses of <i lang="ain-Latn">kuni</i>
		are treated in <Xr ch="kuni-complementizer-purpose-complements" />; the focus here is on the
		complement-of-speech and complement-of-cognition uses.
	</p>

	<p>
		With <i lang="ain-Latn">ye</i> 'say', <i lang="ain-Latn">kuni</i> marks a directive or an
		anticipated future event reported in speech:
	</p>

	<Ex
		m="hosipi=an kuni a=ye"
		g="return=4.S PURP 4.A=say"
		tr="I said I would return."
		cite="nakagawa2024:476"
		dial="HK"
		note="kuni nominalizes the saturated clause hosipi=an (intransitive 'return', +1 with =an −1 = 0) as the object of a=ye. The kuni complement presents the speaker's stated intention — a future event in the speaker's assertion."
	/>

	<Ex
		m="ahun kuni a=ye akusu toykooripak"
		g="enter PURP 4.A=say when be.very.abashed"
		tr="When I told them to enter, they were very abashed."
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, uwepeker 8 (part 2) [aa-irc/007#213]"
		note="The directive use: the matrix subject (4th-person narrator) tells the addressees to enter. The complement's agent (the addressees) differs from the matrix S. akusu 'thereupon/when' links to the consequence clause."
	/>

	<p>
		With <i lang="ain-Latn">ramu</i> 'think', <i lang="ain-Latn">kuni</i> expresses a wished or
		expected state of affairs:
	</p>

	<Ex
		m="pirka kuni ku=ramu"
		g="be.good PURP 1SG.A=think"
		tr="I think it would be good."
		constructed
		dial="HK"
		note="Constructed to illustrate the kuni + ramu pattern. pirka 'be.good' is a stative intransitive (arity +1); without an overt S it has arity +1 — but in this context the subject is pragmatically recoverable. For the complementizer reading, the argument is that the speaker's kuni-complement expresses wished or inferred content, not a specific participant gap. Compare the analysis of arity in Nakagawa (2024: 476)."
	/>

	<p>
		The combination <i lang="ain-Latn">kuni p</i> forms a deontic or purposive nominal
		<Ref k="bugaeva2016" p="294" />. The embedded clause is nominalized by <i lang="ain-Latn">kuni</i>
		and then a second formal noun <i lang="ain-Latn">p</i> further nominalizes the resulting
		complex as 'a thing one should / will do':
	</p>

	<Ex
		m="míre kuni p ére kuni p nepki ne ki wa"
		g="clothe PURP NMLZ feed PURP NMLZ be.work COP do CONJ"
		tr="making things to clothe (the grandchild) and things to feed (her) her work,"
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, uwepeker 7 [aa-irc/005#355]"
		note="Two parallel kuni p nominals ('thing to clothe', 'thing to feed') coordinate as the content of nepki ne ki wa 'making (it) one's work'. Each kuni p packages the action as a purposive-deontic event-nominal."
	/>

	<p>
		The corpus count of <i lang="ain-Latn">kuni</i> is 6,113 tokens (rank 36), a figure that
		conflates the complementizer, purposive, and adverbial uses; no per-function count is derivable
		from word-frequency data alone ‹corpus-suggested›.
	</p>
</S>

<S t="Other indirect-speech complementizers" id="indirect-speech-complementizers">
	<p>
		Beyond <i lang="ain-Latn">kuni</i>, four elements function as complementizers in indirect
		speech and thought contexts, each encoding a different epistemic or temporal profile
		<Ref k="nakagawa2024" p="475–480" />; <Ref k="sato2008" p="176–177" />:
	</p>

	<table>
		<thead>
			<tr>
				<th>complementizer</th>
				<th>content-type</th>
				<th>typical matrix predicate</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">kuni</i></td>
				<td>future, wished, directed</td>
				<td><i lang="ain-Latn">ye</i>, <i lang="ain-Latn">ramu</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">kunak</i></td>
				<td>future, inferred (in speech)</td>
				<td><i lang="ain-Latn">ye</i>, <i lang="ain-Latn">ramu</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">yak</i></td>
				<td>past, ongoing, general truth</td>
				<td><i lang="ain-Latn">ye</i>, <i lang="ain-Latn">ramu</i>, <i lang="ain-Latn">takar</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">kusu</i></td>
				<td>causative-directive 'that X do'</td>
				<td><i lang="ain-Latn">ye</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ya</i></td>
				<td>polar or content question embedded</td>
				<td><i lang="ain-Latn">eramiskari</i>, <i lang="ain-Latn">eraman</i></td>
			</tr>
		</tbody>
	</table>

	<p>
		A shared diagnostic: all of these elements nominalize the preceding VP and make it the object of
		the matrix transitive. The form <i lang="ain-Latn">yakne</i> is not an indirect-speech marker —
		it is a conditional conjunction, distinct from the complementizer <i lang="ain-Latn">yak</i>
		<Ref k="nakagawa2024" p="477" />. Final particles of the type used in main clauses cannot
		appear inside these embedded complements, and person marking shifts from the original
		speaker's viewpoint to the narrator's
		<Ref k="nakagawa2024" p="475" />. The kunak and yak complementizers, and the quotative
		<i lang="ain-Latn">sekor</i>, are treated in detail in
		<Xr ch="quotative-complementation-sekor" />.
	</p>

	<Ex
		m="ku=matnepo tanto ek kunak ye kor an"
		g="1SG.A=daughter today come COMP say while exist"
		tr="My daughter is saying she will come today."
		cite="sato2008:177"
		dial="CHI"
		note="kunak nominalizes the prospective clause ek 'come' as the content of ye 'say'. The periphrastic ye kor an ('is saying') marks ongoing speech. Person marking in the embedded clause (3rd person zero-marked ek) reflects the narrator's viewpoint, not the daughter's."
	/>

	<p>
		The embedded question complementizer <i lang="ain-Latn">ya</i> introduces content questions and
		polar questions as the object of cognition predicates such as
		<i lang="ain-Latn">eramiskari</i> 'not know'. Nakagawa distinguishes the polar-question use
		('whether') from the content-question use ('what/where/when'), both employing
		<i lang="ain-Latn">ya</i>
		<Ref k="nakagawa2024" p="510" />.
	</p>
</S>

<S t="Bare complementation" id="bare-complementation">
	<p>
		A small residue of complement constructions in the corpus involves no overt nominalizer: the
		embedded clause appears without a following formal noun, directly as the argument of the matrix
		predicate. Bugaeva identifies this as Stage I of her diachronic typology of Ainu nominalization
		— the oldest stratum, in which a bare finite clause functions nominally without a nominalizing
		word
		<Ref k="bugaeva2016" p="196–200, 229" />. Refsing similarly notes cases in Shizunai Ainu that
		she tentatively treats as "ellipsis of the nominalizer"
		<Ref k="refsing1986" />. The construction is residual in the Hokkaido attested record
		and not systematically documented for modern Saru or Chitose ‹corpus-suggested›. Its
		relationship to compounding and to the lexicalized nominalization cline (where
		<i lang="ain-Latn">p</i> ~ <i lang="ain-Latn">pe</i> has contracted into lexical items such as
		<A w="aep" gl="food" />) is treated in <Xr ch="nominalization-p-pe" /> and
		<Xr ch="lexical-head-formal-noun-nominalization" />.
	</p>
</S>

<S t="Participant identity across the clause boundary" id="participant-sharing">
	<p>
		Because complement clauses in Hokkaido Ainu are finite and carry their own person morphology,
		the embedded subject is always expressible: the verb inside the complement bears its own person
		affixes independently of the matrix clause. No PRO or empty-category mechanism is posited by the
		read sources, and no formal control or raising analysis of HA complements appears in the
		literature surveyed here.
	</p>

	<p>
		Nevertheless, patterns of participant identity are observable. With cognition predicates
		(<i lang="ain-Latn">ramu</i>, <i lang="ain-Latn">eramiskari</i>), the person marking of the
		embedded clause in the corpus tends to match the matrix subject: the one who thinks or fails to
		understand is also the agent of the thought or the one about whom the proposition holds. The
		examples above show this — <i lang="ain-Latn">ku=ramu</i> 'I think' with an embedded clause
		about a state of affairs the speaker cares about, <i lang="ain-Latn">a=eramiskari</i> 'one
		does not understand' with an embedded clause about what that same person ought to say or do.
		The regularity, however, follows from the semantics of cognition verbs, not from a grammatical
		control mechanism, and divergent persons are possible where the content demands it ‹corpus-suggested›.
	</p>

	<p>
		With the directive use of <i lang="ain-Latn">ye</i> + <i lang="ain-Latn">kuni</i>, the pattern
		runs in the opposite direction: the matrix subject (the one who speaks) addresses the matrix
		object (the addressee), and the embedded clause's agent is typically that addressee, not the
		speaker. The corpus example from Kawakami Matsuko above — 'when I told them to enter' — shows
		the fourth-person speaker (<i lang="ain-Latn">a=ye</i>) directing a different group (the
		addressees) toward an action (<i lang="ain-Latn">ahun</i> 'enter') whose agent goes unmarked in
		the embedded clause because it is recoverable from discourse
		<Ref k="ilcaa1976" /> ‹corpus-suggested›. The indirect-speech analysis that best captures this
		is given in Nakagawa's treatment of indirect speech perspective shifts
		<Ref k="nakagawa2024" p="475–476" />.
	</p>

	<p>
		The term <em>raising</em> (movement of an embedded subject to a matrix position) has no
		attestation in the analytical literature on Hokkaido Ainu clausal complementation, and the
		available data supply no diagnostic that would motivate such an analysis. The embedded clause
		remains a nominalized finite clause whose internal arguments are expressed by the embedded verb's
		own person affixes ‹speculative›.
	</p>
</S>

<S t="The constituency of the nominalized clause" id="constituency">
	<p>
		Whether the structure <i lang="ain-Latn">[clause] NMLZ ne</i> is biclausal or a grammaticalizing
		monoclausal complex predicate is a live debate that cuts across complement clauses, evidential
		constructions, and the formal noun system generally. The two positions are:
	</p>

	<p>
		The <em>biclausal external-RC analysis</em> treats the nominalized clause as a full NP whose
		head is a possessed formal noun. The copula <i lang="ain-Latn">ne</i> then closes the outer
		predication. Tamura, Okuda, and Satō take this position
		<Ref k="tamura2000" p="227" />; <Ref k="sato2008" p="175" />.
	</p>

	<p>
		The <em>grammaticalization-to-monoclausal</em> analysis holds that the erstwhile noun is
		considerably bleached and the construction is moving toward a complex predicate. The diagnostic
		is that a fully lexical noun can take demonstratives and attributive modifiers
		(<i lang="ain-Latn">pirka menoko</i> 'a beautiful woman'), whereas the evidential formal noun
		cannot: <i lang="ain-Latn">*pirka ruwe ne kewtum</i> is ungrammatical
		<Ref k="bugaeva2016" p="306–315" />; <Ref k="dalcorso2018" p="24–25" />. No read source
		provides a constituency proof — a bracket test or movement diagnostic — that decides between
		these ‹contested›. The same unresolved question is noted in the dedicated treatments of
		<i lang="ain-Latn">ruwe ne</i> in <Xr ch="ruwe-ne-inferential" /> and of
		<i lang="ain-Latn">p</i> ~ <i lang="ain-Latn">pe</i> in <Xr ch="nominalization-p-pe" />.
	</p>

	<p>
		For the complement constructions treated in this chapter, the practical consequence is that the
		formal nouns function synchronically as clause-final markers that package a finite clause as a
		nominal argument. The diachronic source in lexical nouns remains transparent (Bugaeva's
		nominalization-cline stages, <Ref k="bugaeva2016" p="229–304" paren />), and partial
		grammaticalization explains why the same forms build RC heads, complement clauses, evidential
		assertions, and — at the furthest end of the cline — conjunctions and adverbial-clause markers
		<Ref k="nakagawa2024" p="515–516" />; <Ref k="takahashi2018" p="107–112" />.
	</p>

	<p>
		Ijäs's pedagogical grammar introduces relative clauses and notes that formal nouns such as
		<i lang="ain-Latn">uske</i> 'place/time' are best understood as nouns that have historically
		originated from relative-clause constructions, without committing to a formal analysis of the
		biclausal-vs-monoclausal debate
		<Ref k="ijas2023" />. This aligns with the historical-cline view and is graded as
		consistent with the consensus on diachrony ‹consensus›.
	</p>
</S>
