<!-- src/lib/grammar/chapters/prenominal-gap-relative-clauses.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Overview" id="overview">
	<p>
		The Hokkaido Ainu relative clause is prenominal and head-final: the modifying clause precedes
		its head noun, there is no relative pronoun, and the relativized participant is simply absent
		from the clause — a zero gap <Ref k="nakagawa2024" p="503" />; <Ref k="sato2008" p="168" />;
		<Ref k="shibatani1990" p="39" />; <Ref k="bugaeva2015" p="47" />. Stative property verbs
		modify a following noun directly and without any special marking:
		<i lang="ain-Latn">hure suwop</i> 'red box'. Any verb, stative or dynamic, can head the
		modifying clause; the verb inside the RC carries the same person prefixes, number-sensitive
		suppletion (singular <A w="ek" gl="come" /> vs plural <A w="arki" gl="come (PL)" />),
		polarity, and clause-internal morphology as it would in a main clause
		<Ref k="shibatani1990" p="39–40" />; <Ref k="sato2008" p="168" />. Subordination is
		signalled by the structural position of the clause before its head, not by any morphological
		change to the verb <Ref k="bugaeva2016" p="100" />; <Ref k="nakagawa2024" p="503" />.
	</p>
	<p>
		This architecture — a full finite clause immediately before its head — is shared by the
		headless relative (where a formal noun such as
		<A w="p" gl="thing, person" />~<A w="pe" gl="thing, person" /> supplies the head) and the
		complement clause (where a formal noun nominalizes a saturated clause). The boundary between
		these constructions is governed by Nakagawa's valency (arity) principle, discussed in the
		following section and with worked examples in
		<Xr ch="nominalization-p-pe">the chapter on the nominalizer
		<i lang="ain-Latn">p</i>~<i lang="ain-Latn">pe</i></Xr>. The headless variant is treated
		in <Xr ch="headless-internally-headed-noun-modifying-clauses" />; lexicalized RC-headed
		nominalizations such as <A w="aep" gl="food" /> in
		<Xr ch="lexical-head-formal-noun-nominalization" />.
	</p>
</S>

<S t="The arity ≥ +1 diagnostic" id="arity-diagnostic">
	<p>
		Nakagawa's arity accounting provides the formal test that separates the relative clause from
		the complement clause. Each verb contributes a positive arity value equal to the number of NP
		arguments it requires; each NP present inside the clause subtracts one; a formal noun has
		arity −1. When the summed arity of the embedded clause plus its formal-noun head is still
		positive (≥ +1), one argument slot remains unfilled — that is the gap — and the whole unit
		functions as a relative clause. When the arity reaches zero, the clause is saturated and the
		formal noun nominalizes the whole clause as a complement
		<Ref k="nakagawa2024" p="261–262, 504, 507" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>clause arity before the formal noun</th>
				<th>formal noun arity</th>
				<th>total</th>
				<th>result</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>+2 (transitive verb, both arguments missing)</td>
				<td>−1</td>
				<td>+1</td>
				<td>relative clause (one participant gapped)</td>
			</tr>
			<tr>
				<td>+1 (intransitive verb, subject present)</td>
				<td>−1</td>
				<td>0</td>
				<td>complement clause (<i lang="ain-Latn">hi</i> or <i lang="ain-Latn">p</i> as complementizer)</td>
			</tr>
			<tr>
				<td>0 (clause fully saturated)</td>
				<td>−1</td>
				<td>−1</td>
				<td>ungrammatical as an RC-plus-head combination</td>
			</tr>
		</tbody>
	</table>

	<p>
		The surface string <i lang="ain-Latn">[clause] p/pe</i> is identical in the relative and the
		complementizer readings; only the arity count distinguishes them. Satō's rule of thumb
		for the same distinction is whether the original sentence from which the head noun was
		extracted can be reconstructed: for a relative clause it can, for a nominalizer it cannot
		<Ref k="sato2008" p="174–175" />.
	</p>
</S>

<S t="The gap strategy and postposition retention" id="gap-and-retention">
	<p>
		The gap is a zero element: no pronoun, resumptive or otherwise, marks the relativized
		position inside the RC <Ref k="bugaeva2015" p="47" />; <Ref k="dalcorso2020" p="51" />.
		When the head noun fills a core argument position (S or O) in the embedded clause, this gap
		is sufficient, because the verb's argument structure and the remaining NPs identify the role
		of the missing participant. When the head fills an oblique position — instrumental, comitative,
		locative, dative — the postposition that governs that oblique remains inside the RC, moved to
		a position at or near the left edge of the embedded clause. This retained postposition is what
		marks the semantic role of the gapped head when that role is not recoverable from the verb's
		argument structure alone
		<Ref k="bugaeva2015" p="47–49" />; <Ref k="nakagawa2024" p="504" />.
	</p>
	<p>
		The practical consequence is that a postposition's presence inside an RC signals an oblique
		head. Conversely, removing the postposition collapses the arity to zero and makes the
		relative-clause reading unavailable. Nakagawa's minimal pair makes this visible:
		<i lang="ain-Latn">nea menoko ani turepta ni</i> is grammatical as an instrumental RC
		('the stick with which that woman dug uba-lilies'), but the postposition-free string
		<i lang="ain-Latn">*nea menoko turepta ni</i> has no gap and cannot relativize the instrument
		<Ref k="nakagawa2024" p="505–506" />.
	</p>
	<Ex
		m="nea menoko ani turepta ni"
		g="that woman INS dig.uba-lily stick"
		tr="the stick with which that woman dug uba-lilies"
		cite="nakagawa2024:506"
		dial="HK"
		note="The instrumental ani must stay in the clause; its removal collapses the arity. The lexicalized compound tureptani 'uba-lily-digging stick' contains the same morphological material but grammatically specifies no instrumental relation."
	/>
	<p>
		Only postpositions that are capable of appearing independently with a zero-anaphoric NP in a
		main clause — <A w="ani" gl="with (instrumental)" />,
		<A w="turano" gl="together with (comitative)" />,
		<A w="eun" gl="to it (dative)" />, <A w="pakno" gl="up to, as far as" /> — undergo this
		retention directly. For locative and allative postpositions that require a case-marking
		particle (<i lang="ain-Latn">ta</i>, <i lang="ain-Latn">un</i>), the relational noun
		<A w="oro" gl="place, there" /> must be inserted before the particle; it serves as the NP
		host for the postposition and as the covert correlate of the gapped head
		<Ref k="bugaeva2015" p="49" />; <Ref k="sato2008" p="172" />;
		<Ref k="nakagawa2024" p="510–511" />.
	</p>
	<Ex
		m="oro ta ku=yamuk cikuni"
		g="there LOC 1SG.A=gather.chestnuts tree"
		tr="the tree at which I gathered chestnuts"
		cite="sato2008:172"
		dial="CHI"
		note="The relational noun oro supplies the NP argument of the locative ta; cikuni 'tree' is the external head. Without oro the particle ta has no host."
	/>
</S>

<S t="The Keenan–Comrie accessibility hierarchy" id="accessibility-hierarchy">
	<p>
		Bugaeva maps Hokkaido Ainu relativization against the noun phrase accessibility hierarchy of
		<Ref k="keenancomrie1977" paren /> and finds that HA relativizes all core and most oblique
		positions; the only positions that resist are the alienable possessor and, directly, the
		standard of comparison <Ref k="bugaeva2015" p="45, 47–49" />. These findings are confirmed
		for southern Hokkaido data by <Ref k="dalcorso2020" p="51" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>position in K&amp;C hierarchy</th>
				<th>attested in HA</th>
				<th>strategy</th>
				<th>grade</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>S (intransitive subject)</td>
				<td>yes</td>
				<td>gap</td>
				<td>‹consensus›</td>
			</tr>
			<tr>
				<td>A (transitive agent, 2-place)</td>
				<td>yes</td>
				<td>gap</td>
				<td>‹consensus›</td>
			</tr>
			<tr>
				<td>O (transitive patient, 2-place)</td>
				<td>yes</td>
				<td>gap</td>
				<td>‹consensus›</td>
			</tr>
			<tr>
				<td>O of 3-place verb (Recipient or Theme)</td>
				<td>yes</td>
				<td>gap</td>
				<td>‹consensus›</td>
			</tr>
			<tr>
				<td>A of 3-place verb (ditransitive subject)</td>
				<td>no examples attested</td>
				<td>gap (expected)</td>
				<td>‹corpus-confirmed (as gap)›</td>
			</tr>
			<tr>
				<td>oblique — instrumental</td>
				<td>yes</td>
				<td><i lang="ain-Latn">ani</i> retained</td>
				<td>‹consensus›</td>
			</tr>
			<tr>
				<td>oblique — comitative</td>
				<td>yes</td>
				<td><i lang="ain-Latn">turano</i> retained</td>
				<td>‹consensus›</td>
			</tr>
			<tr>
				<td>oblique — dative</td>
				<td>yes</td>
				<td><i lang="ain-Latn">eun</i> retained</td>
				<td>‹consensus›</td>
			</tr>
			<tr>
				<td>oblique — locative/allative</td>
				<td>yes</td>
				<td><i lang="ain-Latn">oro</i> + particle retained</td>
				<td>‹consensus›</td>
			</tr>
			<tr>
				<td>inalienable possessor</td>
				<td>yes</td>
				<td>POSS suffix on possessee retained</td>
				<td>‹consensus›</td>
			</tr>
			<tr>
				<td>alienable possessor</td>
				<td>no</td>
				<td>island constraint (see below)</td>
				<td>‹consensus›</td>
			</tr>
			<tr>
				<td>standard of comparison (direct)</td>
				<td>no (workaround exists)</td>
				<td>degree-adjunct construction</td>
				<td>‹corpus-suggested›</td>
			</tr>
		</tbody>
	</table>

	<S t="Core argument positions" id="core-positions">
		<p>
			Subject (S) relativization leaves a gap in the single argument position of an intransitive
			verb:
		</p>
		<Ex
			m="cise soy pakno arki utar"
			g="house outside up.to come.PL people"
			tr="the men who came up to the doorway"
			cite="bugaeva2015:47"
			dial="HK"
			note="arki is the suppletive plural of ek 'come'. The S (the men) is gapped; the directional adjunct cise soy pakno 'up to outside the house' stays in the clause. utar 'people' is the external head."
		/>
		<p>
			Agent (A) relativization gaps the subject of a transitive verb while leaving the object
			inside the RC. A minimal pair from Bugaeva illustrates two parallel A-relativizations
			under the same verb:
		</p>
		<Ex
			m="kem sawot pe tumi sawot pe"
			g="famine flee NMLZ war flee NMLZ"
			tr="people fleeing famine, people fleeing war"
			cite="bugaeva2015:48"
			dial="HK"
			note="sawot 'flee, escape' is transitive; kem 'famine' and tumi 'war' are the retained O arguments. The A (the fleeing people) is gapped and the formal noun pe supplies the generic head 'person'. In the corpus, O-relativization is more frequent than A-relativization (Bugaeva 2015: 48)."
		/>
		<p>
			Object (O) relativization is the most frequent type in the corpus
			<Ref k="bugaeva2015" p="48" />. The head noun fills the O slot:
		</p>
		<Ex
			m="ku=nukar kanpisos"
			g="1SG.A=see book"
			tr="the book I read"
			cite="ijas2023"
			constructed
			dial="HK"
			note="Ijäs Lesson 11. The O (the book) is gapped; ku= is the 1SG agent prefix on the transitive verb nukar 'see, read'. The gap strategy is identical when the head is a bound noun rather than a common noun."
		/>
	</S>

	<S t="Three-place verbs" id="three-place">
		<p>
			For three-place (ditransitive) predicates, either the Recipient or the Theme may be in O
			position and relativized. Which argument occupies the O position is determined by the
			object-indexing conventions treated in <Xr ch="object-indexing-monotransitive" />;
			relativization follows that indexing. Bugaeva attests the Recipient as head with the
			applicative <A w="e-" gl="applicative" /> prefix (on the applicative system,
			<Xr ch="applicative-e" />):
		</p>
		<Ex
			m="kampi a=e-pakasnu hekattar"
			g="paper 4.A=APPL-teach children"
			tr="children who have been taught to read"
			cite="bugaeva2015:48"
			dial="HK"
			note="hekattar 'children' is the Recipient-O head; kampi 'paper/literacy' is the retained Theme. The applicative e- licenses the Recipient in the O position. The A of the three-place verb (the teacher) is not the gapped position; it is simply unrealized (generic)."
		/>
		<p>
			No attested example of the A of a three-place verb serving as RC head has been reported.
			Bugaeva states the absence explicitly — "no examples attested so far" — without deciding
			whether the position is grammatically excluded or merely rare
			<Ref k="bugaeva2015" p="48" /> ‹corpus-confirmed (as gap)›.
		</p>
	</S>

	<S t="Oblique positions" id="oblique-positions">
		<p>
			The instrument, comitative, and dative are all relativizable with their postpositions
			retained.
		</p>
		<Ex
			m="ani usey a=ku p"
			g="INS hot.water 4.A=drink NMLZ"
			tr="a thing to drink hot water with"
			cite="nakagawa2024:504"
			dial="HK"
			note="The instrumental ani is retained at the clause edge. The formal noun p is the generic instrument head. The indefinite fourth-person a= gives a generic reading."
		/>
		<Ex
			m="turano ku=yupo kamuy cotca acapo"
			g="COMIT 1SG=older.brother bear shoot uncle"
			tr="the uncle my brother shot the bear with"
			cite="bugaeva2015:48"
			dial="HK"
			note="turano 'together with' is the retained comitative postposition. ku=yupo 'my older brother' is the A of cotca 'shoot'; kamuy 'bear' is the O. acapo 'uncle' is the external head — the gapped comitative co-participant."
		/>
		<Ex
			m="eun a=nu usi ka isam"
			g="to.it 4.A=ask place even not.exist"
			tr="there was no place to ask about it"
			cite="bugaeva2015:49"
			dial="HK"
			note="eun is the retained dative postposition. usi 'place' is the formal-noun head; it fills the dative position. nu has the meaning 'ask, inquire about' here (Bugaeva 2015: 49 fn.9)."
		/>
		<p>
			Locative and allative RC heads require the relational noun <A w="oro" gl="place, there" />
			before the case particle; the <i lang="ain-Latn">oro</i> hosts the particle and serves as
			the implicit correlate of the gap:
		</p>
		<Ex
			m="oro un ku=arpa ipeusi"
			g="there ALLAT 1SG.S=go restaurant"
			tr="the restaurant I went to"
			cite="ijas2023"
			constructed
			dial="HK"
			note="Ijäs Lesson 11. oro un 'to there' is the retained allative phrase. Without oro the allative un has no NP host and the sentence is ill-formed. ipeusi 'restaurant' is the external head."
		/>
	</S>

	<S t="Inalienable possessor" id="inalienable-possessor">
		<p>
			An inalienable possessor can be relativized. The possessed noun inside the RC retains its
			possessive suffix, which serves as the morphological trace of the possessor-possessee
			relation; the head noun fills the gapped possessor position
			<Ref k="bugaeva2015" p="49" />; <Ref k="shibatani1990" p="41" />.
		</p>
		<Ex
			m="cikir-ihi tanne kikir"
			g="leg-POSS long insect"
			tr="an insect whose legs are long"
			cite="bugaeva2015:49"
			dial="HK"
			note="cikir-ihi is the possessed form of cikir 'leg'; the POSS suffix -ihi remains inside the RC and identifies the possessor as the gapped position. kikir 'insect' is the external head — the gapped possessor. tanne 'long' is the stative predicate."
		/>
	</S>
</S>

<S t="Unattested and blocked positions" id="hard-cases">
	<S t="Alienable possessor" id="alienable-possessor">
		<p>
			Alienable possession in Hokkaido Ainu is itself expressed by a gapped prenominal relative
			clause: <i lang="ain-Latn">ku=kor cep</i> 'my fish' is literally '[the fish that I have]',
			with <A w="kor" gl="have, possess" /> as the transitive verb and <i lang="ain-Latn">ku=</i>
			as the 1SG agent <Ref k="bugaeva2022" p="ch. 1" />; <Ref k="bugaeva2015" p="49" />.
			Extracting a possessor from this structure would require relativization from inside a
			relative clause — an island constraint — and the construction is accordingly unavailable
			<Ref k="bugaeva2015" p="49" /> ‹consensus›.
		</p>
	</S>

	<S t="Standard of comparison" id="comparison-standard">
		<p>
			Direct relativization of the standard of comparison is not attested. What Bugaeva
			documents is a degree-adjunct workaround: a clause of the type 'a rich man [to whose
			degree of wealth no rich man exists]' places the degree comparison inside the RC as a
			modifier on the head, rather than gapping the standard participant from a transitive clause
			<Ref k="bugaeva2015" p="45, 49" />:
		</p>
		<Ex
			m="a=ona pakno nispa isam nispa ne"
			g="4.A=father equal rich.man not.exist rich.man COP"
			tr="my father was a rich man with no equal"
			cite="bugaeva2015:49"
			dial="HK"
			note="Bugaeva's discovery example. The prenominal RC [pakno nispa isam] 'to whose degree of wealth no rich man exists' is a degree-adjunct modifier on the second nispa (the head). The standard of comparison is expressed as the negated content of the RC, not as a gapped participant."
		/>
		<p>
			Whether this is a grammaticalized equivalent to comparison-standard relativization or a
			pragmatic repair is not settled ‹corpus-suggested›.
		</p>
	</S>

	<S t="Ablative and mutative heads" id="ablative-mutative">
		<p>
			Heads corresponding to ablative <i lang="ain-Latn">wa(no)</i> 'from which' and mutative
			<i lang="ain-Latn">ne</i> 'as which' are absent from Bugaeva's inventory of retainable
			postpositions and are not attested in any source read here
			<Ref k="bugaeva2015" p="48–49" />. Ijäs reports the same absence and explicitly withholds
			constructed examples for these positions <Ref k="ijas2023" />. They are not presented as
			established ‹corpus-suggested›.
		</p>
	</S>
</S>

<S t="RC heads: common nouns and bound nouns" id="rc-heads">
	<p>
		The external head of an HA relative clause may be a common noun or a
		<Xr ch="formal-defective-nouns">formal (bound) noun</Xr>. Among the formal nouns,
		<A w="kur" gl="person (honorific)" />, <A w="utar" gl="people" />,
		<A w="p" gl="thing, person" />~<A w="pe" gl="thing, person" />,
		<A w="uske" gl="place, time" />, and <A w="hi" gl="thing, time, place (abstract)" /> are,
		in Bugaeva's account, "even more common" as RC heads than common nouns
		<Ref k="bugaeva2015" p="47" />. The bound noun supplies a generic semantic category —
		person, people, thing, place — while the RC clause provides all the identifying content.
	</p>
	<p>
		When the formal noun is <i lang="ain-Latn">p</i>~<i lang="ain-Latn">pe</i>, the
		construction shades into the headless relative. That continuum is the subject of
		<Xr ch="nominalization-p-pe" /> and <Xr ch="headless-internally-headed-noun-modifying-clauses" />.
		The lexicalized end — former RC-plus-formal-noun combinations frozen into compound nouns
		such as <A w="aep" gl="food" /> (<i lang="ain-Latn">a=e-p</i>, 'thing one eats') — is
		treated in <Xr ch="lexical-head-formal-noun-nominalization" />. The interaction of
		relativization with noun incorporation, where a patient argument merges into the verb stem
		and changes the arity count, is treated in <Xr ch="noun-incorporation-object" />.
	</p>
</S>

<S t="Ijäs Lesson 11 — graded claims" id="ijas-lesson-11">
	<p>
		Ijäs's English-language grammar guide covers relative clauses in Lesson 11
		<Ref k="ijas2023" />. Her examples are constructed teaching material; none are corpus-attested.
		Her core grammatical claims — prenominal head-final order, absence of a relative pronoun,
		gap strategy for core arguments, postposition retention for obliques (including the
		<i lang="ain-Latn">oro</i>-insertion rule for locatives/allatives) — align precisely with the
		primary sources ‹consensus›. Her demonstration that
		<i lang="ain-Latn">ku=kor cep</i> 'my fish' is itself a relative clause ('the fish that I
		have') follows the Handbook's alienable-possession analysis
		<Ref k="bugaeva2022" p="ch. 1" /> ‹consensus›. And her identification of the ditransitive
		subject as a problematic head position matches Bugaeva's "no examples attested so far"
		<Ref k="bugaeva2015" p="48" />; she is consistent in flagging it as an open question rather
		than asserting ungrammaticality ‹corpus-confirmed (as gap)›.
	</p>
	<p>
		Two of her claims need a hedge. Her report that the ordering of multiple stative modifiers
		is free (<i lang="ain-Latn">poro retar seta</i> ~ <i lang="ain-Latn">retar poro seta</i>
		'big red dog, red big dog') is her own inference from the absence of counter-examples; she
		acknowledges this explicitly. Modifier stacking is attested — Shibatani gives
		<i lang="ain-Latn">ampene pirka sukup aynu</i> from yukar data
		<Ref k="shibatani1990" p="39" /> — but a free-order generalization across dialects exceeds
		what the sources establish ‹corpus-suggested›. Her inability to locate attested examples of
		ablative <i lang="ain-Latn">wa(no)</i> or mutative <i lang="ain-Latn">ne</i> as RC heads is
		shared by all sources read here; the forms she cautiously suggests for these positions should
		not be treated as established <Ref k="ijas2023" /> ‹corpus-suggested›.
	</p>
</S>

<S t="Analyses and open questions" id="analyses">
	<p>
		All major descriptive accounts converge on the externally-headed, prenominal gap strategy:
		<Ref k="shibatani1990" p="39–42" />, <Ref k="refsing1986" p="259–264" />,
		<Ref k="sato2008" p="168–173" />, <Ref k="nakagawa2024" p="503–511" />, and
		<Ref k="bugaeva2015" p="47–49" /> all describe the construction in these terms. The
		differences among them are terminological — Refsing calls the process "adnominalization",
		Nakagawa uses "関係文", Bugaeva "gapped prenominal relative clause" — rather than empirical.
	</p>
	<p>
		Dal Corso 2020 proposes that certain southern Hokkaido indirect-evidential constructions
		(<i lang="ain-Latn">siri ki</i>, <i lang="ain-Latn">hawe as</i>,
		<i lang="ain-Latn">humi as</i>) show a layout reminiscent of internally-headed relative
		clauses, instantiated through what he calls classificatory noun incorporation
		<Ref k="dalcorso2020" p="51–52" />. This proposal covers the indirect-evidential
		constructions specifically; it has not been adopted by Bugaeva, Satō, or Nakagawa; and its
		claim of classificatory NI remains unconfirmed in the wider literature ‹contested›. The
		relativization system described in this chapter is the externally-headed construction; the
		IHRC/CNI question bears on the evidential construction and is addressed in
		<Xr ch="headless-internally-headed-noun-modifying-clauses" />.
	</p>
	<p>
		Three gaps in the accessible evidence remain open. First, whether the ditransitive subject
		position is grammatically excluded or merely unattested is not decided: the absence is
		systematic — reported independently by Bugaeva 2015: 48 and by Ijäs — but no source
		provides a grammaticality judgment supported by speaker elicitation ‹contested›. Second,
		ablative and mutative RC heads are unconfirmed in any source read here ‹corpus-suggested›.
		Third, the accessibility-hierarchy findings rest primarily on Saru and Chitose data
		<Ref k="bugaeva2015" />; whether all Hokkaido dialects relativize the same positions has not
		been systematically tested ‹speculative›.
	</p>
</S>
