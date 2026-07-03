<!-- src/lib/grammar/chapters/epistemic-irrealis-modality.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The epistemic and irrealis modal field" id="overview">
	<p>
		Hokkaido Ainu expresses epistemic modality — the speaker's calibration of the probability or
		certainty of a proposition — and irrealis modality — marking that an event has not yet been
		actualized — through periphrastic auxiliaries that follow the lexical verb in the auxiliary
		frame. In this frame the lexical verb carries person agreement while the auxiliary remains
		morphologically unmarked, the same pattern as the perfective <i lang="ain-Latn">a</i> and
		the admirative <i lang="ain-Latn">aan</i> treated in <Xr ch="perfective-anterior-a" />.
		Eight forms occupy this domain, ranging from epistemic probability to volitional commitment
		to reportative hedging <Ref k="nakagawa2024" p="306–319" />; <Ref k="bugaeva2012" p="493–494" />.
		Across the typological literature on grammaticalization, the path from lexical verb to modal
		auxiliary is well documented, and in Ainu most of these forms retain visible lexical identities
		in the auxiliary set <Ref k="bybee1994" paren />.
	</p>

	<table>
		<thead>
			<tr>
				<th>form</th>
				<th>label</th>
				<th>core value</th>
				<th>full treatment</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">nankor</i></td>
				<td>epistemic probability</td>
				<td>
					probability / conjecture; 2nd person +
					<i lang="ain-Latn">na</i> → softened expectation or indirect command
				</td>
				<td>this chapter</td>
			</tr>
			<tr>
				<td>
					<i lang="ain-Latn">kusu ne</i> (often <i lang="ain-Latn">kus ne</i>)
				</td>
				<td>prospective intentional</td>
				<td>
					1st-person intention, scheduled future; 2nd person +
					<i lang="ain-Latn">na</i> → near-command
				</td>
				<td>this chapter</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">oasi</i></td>
				<td>future certainty</td>
				<td>
					surely will; with <i lang="ain-Latn">tane</i> 'now' → immediate future
				</td>
				<td>this chapter</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">etokus</i></td>
				<td>imminence</td>
				<td>be about to</td>
				<td>this chapter</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">etokoyki</i></td>
				<td>preparatory</td>
				<td>be getting ready to</td>
				<td>this chapter</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">rusuy</i></td>
				<td>desiderative</td>
				<td>want to; often incorporated into the preceding verb stem</td>
				<td><Xr ch="desiderative-rusuy" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">kuni</i></td>
				<td>expectation / should</td>
				<td>should, be supposed to; also a formal noun and subordinating particle</td>
				<td><Xr ch="deontic-necessity" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">manu</i></td>
				<td>reportative hedge</td>
				<td>reportedly, so-called; predicates the proposition as attributed or named</td>
				<td>this chapter</td>
			</tr>
		</tbody>
	</table>

	<p>
		The TAM architecture that houses these auxiliaries — the distinction between the auxiliary
		frame, the pair-verb frame, and the transitive-verb-auxiliary frame — is mapped in
		<Xr ch="tam-overview" />. The four strategies Ainu employs to recover temporal reference
		without grammatical tense, among which the prospective auxiliaries play a central role, are
		treated in <Xr ch="tenselessness-and-time-reference" />. Deontic obligation and permission
		(<i lang="ain-Latn">easirki</i>,
		<i lang="ain-Latn">yak pirka</i>,
		<i lang="ain-Latn">yakka pirka</i>) belong to <Xr ch="deontic-necessity" />.
	</p>
</S>

<S t="nankor — epistemic probability and conjecture" id="nankor">
	<p>
		The auxiliary <A w="nankor" gl="probably" /> follows the person-marked lexical verb and
		indicates that the speaker regards the proposition as probable, likely, or to-be-expected
		without asserting it as established fact: <span lang="ja">推量「〜だろう」</span>
		<Ref k="nakagawa2024" p="311" />. Bugaeva characterizes it as
		"conjective probabilistic mood" <Ref k="bugaeva2012" p="493" />. With a future or
		present-state predicate the reading is probability ('probably will', 'is probably'); with a
		past-referenced predicate it yields epistemic necessity ('must have'). In the corpus the
		form returns 1,977 tokens at rank 108 — the highest frequency among the modal auxiliaries
		— and it appears in narrative, spoken monologue, and chained clauses alike.
	</p>

	<Ex
		m="oro ta ek nankor kusu"
		g="there LOC come probably because"
		tr="because he will probably come there,"
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, uwepeker 7 [aa-irc/005#106]"
		note="First clause of a longer utterance; the continuation is 'let us live together for two or three years.' kusu here is the reason conjunction 'because', not part of the prospective construction kusu ne."
	/>

	<p>
		With a second-person subject and the sentence-final particle
		<i lang="ain-Latn">na</i>, <i lang="ain-Latn">nankor</i> shifts from probability to a
		softened expectation or indirect command — <span lang="ja">「〜だろうよ」</span> — functioning
		as a milder alternative to the bare imperative
		<Ref k="nakagawa2024" p="311, 423" />; <Ref k="ijas2023" />.
		The same reading surfaces in prohibitive contexts: <i lang="ain-Latn">iteki … somo eci=ki nankor na</i>
		'you had better not not do it'
		<Ref k="nakagawa2024" p="425" />.
	</p>

	<Ex
		m="kari e=arpa nankor na"
		g="that.way 2SG.S=go probably FIN"
		tr="You should go that way then."
		cite="nakagawa2024:311"
		dial="SAR"
		note="Nakagawa ex. 469. With a second-person subject and final na, nankor functions as a softened directive rather than a probability statement."
	/>

	<p>
		Phonologically, the string <i lang="ain-Latn">nankor na</i> frequently assimilates to
		<i lang="ain-Latn">nankonna</i> in running speech <Ref k="nakagawa2024" p="311" />.
		The auxiliary can additionally appear after <i lang="ain-Latn">ruwe ne</i> in the
		post-evidential slot, where it hedges an already-evidentialized proposition as merely
		probable; this post-nominal position — shared with the perfective <i lang="ain-Latn">a</i>
		and final particles — is part of the frame inventory for <i lang="ain-Latn">ruwe ne</i>
		detailed in
		<Xr ch="ruwe-ne-inferential" s="frames">the clause-final frames section</Xr>
		<Ref k="nakagawa2024" p="393" />.
	</p>

	<p>
		Ijäs (Lesson 10) proposes that the modal <i lang="ain-Latn">nankor</i> derives from a
		lexical verb <i lang="ain-Latn">nankor</i> 'be trustworthy', but marks this derivation as
		probable rather than established <Ref k="ijas2023" /> ‹speculative›. No grammar consulted
		for this chapter traces the auxiliary to that lexical source, and the connection remains
		unverified.
	</p>
</S>

<S t="kus(u) ne — prospective intentional" id="kusu-ne">
	<p>
		The prospective construction consists of the purposive conjunction
		<A w="kusu" gl="in order to, so that" /> — phonologically reduced to
		<i lang="ain-Latn">kus</i> in running speech — followed by the copula
		<i lang="ain-Latn">ne</i>. Person agreement falls on the lexical verb and the
		<i lang="ain-Latn">kusu ne</i> string is morphologically frozen: the copula is not
		separately inflected <Ref k="nakagawa2024" p="435" />; <Ref k="sato2008" p="85–86" />.
		As one of the four strategies for recovering future time reference without grammatical tense
		(→ <Xr ch="tenselessness-and-time-reference" />), it marks an event as unrealized at the
		moment of speaking. Three situational readings emerge from person and discourse context:
	</p>

	<ul>
		<li>
			<strong>First-person intention:</strong> 'I intend to / I plan to' — the speaker commits
			to an unrealized future action.
		</li>
		<li>
			<strong>Scheduled future:</strong> 'it is to happen / it will happen' — the event is
			foreseen as certain without necessarily implying personal volition.
		</li>
		<li>
			<strong>Second-person near-command:</strong> with <i lang="ain-Latn">na</i> → 'you
			should / you're going to' — a directive softer than the bare imperative
			(→ <Xr ch="imperative-and-prohibitive" />).
		</li>
	</ul>

	<p>
		Nakagawa documents all three at 2024: 435, §14.1.2 (exx.966–969); Satō at 2008: 85–86.
	</p>

	<Ex
		m="an epitta paye=an kusu ne na"
		g="one entire go.PL=4.S PURP COP FIN"
		tr="I intend to go, spending a whole night."
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, isoytak 2 [aa-irc/004#51]"
		note="paye is the plural stem of arpa 'go'; =an is the fourth-person single argument, used here as the narrative first person. kusu ne na expresses the speaker's commitment to an unrealized future action."
	/>

	<Ex
		m="nisatta arpa=an kusu ne na"
		g="tomorrow go=4.S PURP COP FIN"
		tr="I will go tomorrow."
		constructed
		note="Constructed illustration of the scheduled-future reading with an overt time adverb. The form is neutral between volitional intention and an event foreseen as certain."
	/>

	<p>
		Ijäs writes the sequence as a single orthographic word, <i lang="ain-Latn">kusune</i>,
		and tags it AUX or PRT-FIN; the analysis followed here retains the two-morpheme parse —
		conjunction <i lang="ain-Latn">kusu</i> plus copula <i lang="ain-Latn">ne</i> — treating
		the one-word spelling as a pedagogical convention rather than a morphological claim
		<Ref k="nakagawa2024" p="435" />; <Ref k="ijas2023" />.
		The element <i lang="ain-Latn">kusu</i> functions independently as a reason or purpose
		clause conjunction (→ <Xr ch="conditional-temporal-concessive-clauses" />); the prospective
		auxiliary is the specific combination <i lang="ain-Latn">kusu</i> +
		<i lang="ain-Latn">ne</i>, with the copula predication turning an unrealized purpose into a
		future-directed commitment.
	</p>

	<p>
		The scope of <i lang="ain-Latn">kusu ne</i> is strictly clause-internal: it sits below the
		evidential frame, so <i lang="ain-Latn">kusu ne ruwe ne</i> is well-formed ('it is a fact
		that one intends to') while <i lang="ain-Latn">*ruwe ne kusu ne</i> is ungrammatical
		<Ref k="nakagawa2024" p="393" />. The interaction with the evidential system is developed
		in the scope section below.
	</p>
</S>

<S t="Near-future auxiliaries: oasi, etokus, etokoyki" id="near-future">
	<p>
		Three additional auxiliaries extend the prospective periphery beyond
		<i lang="ain-Latn">kusu ne</i>
		<Ref k="nakagawa2024" p="316–318, 435" />:
	</p>

	<ul>
		<li>
			<strong><A w="oasi" gl="will certainly happen" /></strong> — 'surely will happen'
			(<span lang="ja">将来確実に〜が起こる</span>); a stronger certainty than the merely
			probable <i lang="ain-Latn">nankor</i>. With <i lang="ain-Latn">tane</i> 'now' it
			yields an imminent reading, 'is just about to' <Ref k="nakagawa2024" p="318" />.
		</li>
		<li>
			<strong><A w="etokus" gl="be about to" /></strong> — 'be about to (do)': the event is
			on the point of beginning <Ref k="nakagawa2024" p="316" />.
		</li>
		<li>
			<strong><A w="etokoyki" gl="be getting ready to" /></strong> — 'be getting ready to':
			the agent is actively in the preparatory stage for the action
			<Ref k="nakagawa2024" p="435" />.
		</li>
	</ul>

	<Ex
		m="tane paye=an oasi"
		g="now go.PL=4.S will.certainly"
		tr="I am just about to go."
		constructed
		note="Constructed illustration of oasi with tane 'now', giving the imminent reading. Nakagawa (2024: 318, exx.500–501) documents this combination."
	/>

	<Ex
		m="arki etokus na"
		g="come.PL be.about.to FIN"
		tr="They are about to arrive."
		constructed
		note="Constructed illustration of etokus; arki is the plural stem of ek 'come'."
	/>

	<p>
		All three are catalogued in Nakagawa's 表74 (本来的な助動詞, the primary Saru-dialect auxiliary
		inventory) and in Bugaeva's English inventory
		<Ref k="nakagawa2024" p="306, 316–318, 435" />;
		<Ref k="bugaeva2012" p="493–494" />.
		No banked corpus examples are currently available for these three forms beyond the grammar
		descriptions; the claim that they carry the stated meanings rests on Nakagawa's documented
		paradigm ‹corpus-suggested›.
	</p>
</S>

<S t="Desiderative rusuy and expectation kuni" id="desiderative-expectation">
	<p>
		<A w="rusuy" gl="want to" /> is the desiderative auxiliary: 'want to do'. The lexical verb
		takes the person affix and <i lang="ain-Latn">rusuy</i> follows unmarked; a strong tendency
		toward phonological incorporation produces forms such as
		<i lang="ain-Latn">arparusuy</i> 'want to go' and
		<i lang="ain-Latn">iperusuy</i> 'want to eat'
		<Ref k="nakagawa2024" p="312–313" />; <Ref k="bugaeva2012" p="493" />.
		Argument structure, distribution with negation, and the incorporated variants are treated
		fully in <Xr ch="desiderative-rusuy" />.
	</p>

	<p>
		A typological comparison has been proposed in the community: nukopoli
		(aynu-corpora Discord, 2024-11-29) observes that <i lang="ain-Latn">rusuy</i> parallels
		Mandarin Chinese <span lang="zh">要</span> (<em>yào</em>), which similarly covers both
		desiderative ('want to') and near-future readings, while
		<i lang="ain-Latn">kusu ne</i> resembles English <em>will</em> in combining intentionality
		with temporal commitment <Ref k="aynucorporadiscord" /> ‹speculative›. No grammar read for
		this chapter develops this typological comparison.
	</p>

	<p>
		<A w="kuni" gl="should, be supposed to" /> straddles the epistemic and deontic domains.
		As an auxiliary it marks expectation or obligation ('should, be supposed to, it is expected
		that'); as a subordinating particle it introduces complement clauses; and as a formal noun it
		heads nominalized purpose structures — <i lang="ain-Latn">a=an kuni uske</i> 'a place where
		one should be' (Nakagawa 2024: 310, ex.461). The deontic uses and the
		nominalized-complement function are treated in
		<Xr ch="deontic-necessity" /> and
		<Xr ch="nominalized-complements-control-raising" /> respectively.
	</p>
</S>

<S t="manu — reportative hedging" id="manu">
	<p>
		<A w="manu" gl="reportedly, so-called" /> is listed among the primary auxiliaries
		(本来的な助動詞) at Nakagawa 2024: 310–311 (exx.464–467). Its core value is attributive or
		reportative hedging: 'the so-called, reportedly, it is said that' — the speaker presents
		the proposition as attributed, named, or received rather than directly asserted.
	</p>

	<Ex
		m="onne ne manu p"
		g="be.old COP reportedly NMLZ"
		tr="the thing called old age"
		cite="nakagawa2024:310"
		dial="SAR"
		note="Nakagawa ex. 464. manu predicates the nominalized clause as attributed or named: the speaker presents the concept 'old age' as a received designation rather than a directly asserted fact."
	/>

	<p>
		Nakagawa observes that <i lang="ain-Latn">manu</i> approximates the Sakhalin
		sentence-final hearsay marker — the cognate form in Sakhalin Ainu — while remaining a
		distinct Hokkaido auxiliary, not a particle <Ref k="nakagawa2024" p="311" />.
		Within the Hokkaido system it sits on the boundary between the epistemic modals treated here
		and the reportative evidential centered on <i lang="ain-Latn">hawe ne</i>
		(→ <Xr ch="hawe-ne-reportative" />). Unlike <i lang="ain-Latn">hawe ne</i>, which
		nominalizes a full clause and predicates it as verbal report,
		<i lang="ain-Latn">manu</i> inserts inside the predication and signals attribution of a
		name or inherited category rather than a cited information channel. Corpus token counts are
		currently unreliable for <i lang="ain-Latn">manu</i> given surface-form homophony; it is
		treated as infrequent in the Saru record.
	</p>
</S>

<S t="Scope and the evidential interface" id="scope">
	<p>
		The epistemic and irrealis auxiliaries treated in this chapter all occupy clause-internal
		scope — below the evidential frame. The ordering constraint is strict:
		<i lang="ain-Latn">kusu ne ruwe ne</i> is well-formed (the prospective claim is nominalized
		and predicated as established fact), while <i lang="ain-Latn">*ruwe ne kusu ne</i> is
		ungrammatical because the prospective auxiliary cannot appear in the post-evidential position
		<Ref k="nakagawa2024" p="393" />. Negation belongs inside the frame in the same way:
		<i lang="ain-Latn">somo ki ruwe ne</i> negates the verb before the formal noun, not after
		it. The full account of this layering appears in
		<Xr ch="ruwe-ne-inferential" s="scope">the scope and finiteness section</Xr>.
	</p>

	<p>
		Members of the aynu-corpora community have independently noted the same asymmetry: nukopoli
		(aynu-corpora Discord, 2024-11-09) observes that while
		<i lang="ain-Latn">ruwe ne kusu</i> (reason clause: 'because it is a fact that…') remains
		well-formed, <i lang="ain-Latn">*ruwe ne kusu ne</i> as a prospective construction after an
		evidential is ruled out, attributing this to a clause hierarchy in which modality must remain
		inside the outer scope of the evidential <Ref k="aynucorporadiscord" />;
		<Ref k="nakagawa2024" p="393" />.
	</p>

	<p>
		Corpus data supply chains that make the scope layering concrete. The most common
		multi-auxiliary configuration places the prospective inside the admirative
		<i lang="ain-Latn">aan</i>, which is in turn nominalized by
		<i lang="ain-Latn">ruwe ne</i> — a three-level stack in the order
		prospective ≺ mirative ≺ evidential.
	</p>

	<Ex
		m="kotan wente kus arki kus ne aan ru-we ne wa"
		g="village ravage PURP come.PL PURP COP PRF.MIR track-POSS COP CONJ"
		tr="and it had turned out that they were going to come to ravage the village,"
		cite="biratori1969"
		dial="SAR"
		place="Kaizawa Tsurushino, Biratori [biratori/004/002#40]"
		note="The inner purpose clause kotan wente kus arki 'come to ravage the village' is followed by kus ne (prospective: they intended to), then aan (admirative: the speaker realizes this after the fact), then ruwe ne (evidential: presented as established fact). wa closes the clause and chains it to the following predication."
	/>

	<p>
		<i lang="ain-Latn">nankor</i> behaves differently from <i lang="ain-Latn">kusu ne</i> in
		this respect. As an epistemic auxiliary it can appear either before
		<i lang="ain-Latn">ruwe ne</i> — inside the evidentialized proposition ('it is a fact that
		X probably…') — or after it, in the post-evidential slot where it hedges the evidentialized
		claim as merely probable rather than fully asserted <Ref k="nakagawa2024" p="393" />.
		This dual positional freedom is shared by the perfective
		<i lang="ain-Latn">a</i> and final particles, both of which may follow
		<i lang="ain-Latn">ruwe ne</i> without being embedded inside the proposition; the full
		inventory of post-nominal elements is set out in
		<Xr ch="ruwe-ne-inferential" s="frames">the clause-final frames section</Xr>.
	</p>

	<p>
		The conjunction <i lang="ain-Latn">kusu</i> in conditional, purpose, and reason clauses
		— as distinct from the prospective <i lang="ain-Latn">kusu ne</i> — is treated in
		<Xr ch="conditional-temporal-concessive-clauses" />. The full interface between the modal
		auxiliaries and the evidential paradigm, including stacking patterns and the
		evidential-to-mirative cline, belongs to <Xr ch="mirativity-scope-grammaticalization" />.
	</p>
</S>
