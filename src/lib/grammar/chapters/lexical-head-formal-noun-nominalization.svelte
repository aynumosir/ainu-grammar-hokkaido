<!-- src/lib/grammar/chapters/lexical-head-formal-noun-nominalization.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Overview" id="overview">
	<p>
		Hokkaido Ainu forms nominalized clauses by placing a
		<Xr ch="formal-defective-nouns">formal noun</Xr> after a finite predicate. The verb retains its
		ordinary person marking; the formal noun supplies the nominal head and converts the preceding
		material into an NP. The class is closed and its members differ in the semantic profile they
		impose — 'thing', 'person', 'place', 'appearance', 'voice', and so on — and in whether they
		function as relative-clause heads, complementizers, or both
		<Ref k="nakagawa2024" p="257–262, 503–513" />; <Ref k="sato2008" p="174–180" />;
		<Ref k="bugaeva2016" p="226–228" />.
	</p>
	<p>
		The allomorphs <A w="p" gl="thing, person (nominalizer)" /> ~
		<A w="pe" gl="thing, person (nominalizer)" />, their participant-nominalization and
		complementizer functions, and the arity diagnostic that distinguishes the two readings are
		treated in <Xr ch="nominalization-p-pe" />. The gap strategy, accessibility hierarchy, and
		postposition stranding that characterize all relative clauses are covered in
		<Xr ch="prenominal-gap-relative-clauses" />. The clause-final evidential uses of
		<A w="ruwe" gl="the trace of" />, <A w="siri" gl="the appearance of" />,
		<A w="hawe" gl="the voice of" />, and <A w="humi" gl="the sound/feeling of" /> are treated in
		<Xr ch="evidential-schema-overview" />. The present chapter addresses the morphological contrast
		between the <em>concept form</em> and the <em>affiliative (possessed) form</em> of these nouns,
		the semantic profiles that govern head-selection across the formal-noun inventory,
		<A w="hi" gl="thing, place, time" /> in its several uses, the sensory-noun formal nouns as
		non-evidential perception-complement heads, and the cline from clausal nominalization to
		lexicalized noun.
	</p>
</S>

<S t="Concept form and affiliative (possessed) form" id="concept-affiliative">
	<p>
		Each formal noun has two shapes described in <Xr ch="concept-form-affiliative-form" />. The
		bare <em>concept form</em> (概念形) is the citation form of the noun, autonomous in a sentence.
		The <em>affiliative form</em>, or <em>possessed form</em> (所属形), marks the noun as belonging
		to an antecedent; it is the shape in which the sensory-noun formal nouns appear in their
		evidential and perception-complement uses. For the four sensory nouns the two forms are
		distinguished by a possessive suffix <Ref k="nakagawa2024" p="258, 表66" />:
	</p>

	<table>
		<thead>
			<tr>
				<th>concept form</th>
				<th>possessed form</th>
				<th>POSS suffix</th>
				<th>source meaning</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">ru</i></td>
				<td><i lang="ain-Latn">ruwe</i></td>
				<td><i lang="ain-Latn">-(w)e</i></td>
				<td>'track, path'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">sir</i></td>
				<td><i lang="ain-Latn">siri</i></td>
				<td><i lang="ain-Latn">-i</i></td>
				<td>'appearance, state'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">haw</i></td>
				<td><i lang="ain-Latn">hawe</i></td>
				<td><i lang="ain-Latn">-e</i></td>
				<td>'voice'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">hum</i></td>
				<td><i lang="ain-Latn">humi</i></td>
				<td><i lang="ain-Latn">-i</i></td>
				<td>'sound, sensation'</td>
			</tr>
		</tbody>
	</table>

	<p>
		Satō observes that a noun in its possessed form presupposes an antecedent — something it
		belongs to — so that placing a sensory noun in this form after a finite clause grammatically
		encodes that the described situation is already held as given by the speaker
		<Ref k="sato2008" p="135" />. This presupposition distinguishes evidential
		<i lang="ain-Latn">ruwe</i> ('the trace of —', implicating a recognized antecedent event)
		from lexical <i lang="ain-Latn">ru</i> ('a track'). Dialect evidence reinforces the contrast:
		southern Hokkaido (Saru, Chitose) uses the possessed forms in the clause-final evidential
		frame, while Tokachi and Ishikari close the clause with the bare concept forms
		<i lang="ain-Latn">ru</i>, <i lang="ain-Latn">sir</i>, <i lang="ain-Latn">haw</i>,
		<i lang="ain-Latn">hum</i>
		<Ref k="nakagawa2024" p="110, 390" />; <Ref k="takahashi2013" p="129–131" />.
	</p>
</S>

<S t="Principal formal nouns as nominal heads" id="inventory">
	<p>
		All formal nouns have arity −1, which allows them to terminate a relative clause (closing an
		arity ≥+1 gap) or a saturated complement clause (arity 0) alike
		<Ref k="nakagawa2024" p="261–262" />. The table below covers those relevant to nominalization;
		the full catalogue with arity derivations appears in <Xr ch="formal-defective-nouns" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>form</th>
				<th>gloss</th>
				<th>as RC head</th>
				<th>as complementizer</th>
				<th>notes</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">p</i> ~ <i lang="ain-Latn">pe</i></td>
				<td>'thing; (pej.) person'</td>
				<td>✓</td>
				<td>✓</td>
				<td>allomorphy by stem-final segment; see <Xr ch="nominalization-p-pe" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">hi</i> (~ <i lang="ain-Latn">i</i> after C)</td>
				<td>'thing, time, place'</td>
				<td>✓</td>
				<td>✓</td>
				<td>maximally abstract; see below</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">hike</i></td>
				<td>'the one/side'</td>
				<td>✓</td>
				<td>borderline</td>
				<td>grammaticalizes toward adversative conjunction <i lang="ain-Latn">hikeka</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">katu</i></td>
				<td>'manner'</td>
				<td>—</td>
				<td>✓</td>
				<td>&lt; <i lang="ain-Latn">kat</i> 'form/shape' + POSS; assertive use</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">usi(ke)</i></td>
				<td>'place, time'</td>
				<td>✓</td>
				<td>✓</td>
				<td>pan-Hokkaido; <i lang="ain-Latn">uske</i> specific to Saru/Chitose/Shizunai</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">kur</i></td>
				<td>'person'</td>
				<td>✓</td>
				<td>—</td>
				<td>&lt; <i lang="ain-Latn">kuru</i> 'person'; honorific/polite register</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">utar</i></td>
				<td>'people, companions'</td>
				<td>✓</td>
				<td>—</td>
				<td>follows a noun as well as a VP; marks a collective</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ruwe / siri / hawe / humi</i></td>
				<td>trace, appearance, voice, sensation</td>
				<td>✓</td>
				<td>✓</td>
				<td>possessed forms; → clause-final evidential in <Xr ch="evidential-schema-overview" /></td>
			</tr>
		</tbody>
	</table>

	<p>
		The pair <i lang="ain-Latn">usi</i> / <i lang="ain-Latn">uske</i> are dialectally distributed:
		<i lang="ain-Latn">uske</i> is attested in Saru, Chitose, and Shizunai; the forms
		<i lang="ain-Latn">usi</i> and <i lang="ain-Latn">usike</i> are more widely spread across
		Hokkaido <Ref k="nakagawa2024" p="258" />. Both head relative clauses without requiring the
		relational noun <i lang="ain-Latn">or</i> that movement-case postpositions need before
		locative complements <Ref k="bugaeva2015" p="47" />.
		Shibatani lists the nominalizers <i lang="ain-Latn">-p(e)</i>, <i lang="ain-Latn">-i</i>,
		<i lang="ain-Latn">-ike</i>, and <i lang="ain-Latn">-kur</i> as productive phrasal and clausal
		nominalizating suffixes in classical/yukar Ainu
		<Ref k="shibatani1990" p="33–34" />, corresponding to the word-class of formal nouns in
		Nakagawa's synchronic description <Ref k="nakagawa2024" p="257–258" />.
	</p>
</S>

<S t="Division of labour across the inventory" id="division-of-labour">
	<p>
		The formal-noun head selected for a nominalized clause is determined primarily by the semantic
		category of the reference being expressed. <i lang="ain-Latn">p</i> ~ <i lang="ain-Latn">pe</i>
		and <i lang="ain-Latn">hi</i> cover the widest range but along different dimensions:
		<i lang="ain-Latn">p</i> ~ <i lang="ain-Latn">pe</i> profiles a concrete entity — a thing
		or person that can be encountered or handled — while <i lang="ain-Latn">hi</i> is maximally
		abstract, covering fact, time, and place readings alike
		<Ref k="nakagawa2024" p="257" />; <Ref k="sato2008" p="174" />. Where the referent is
		specifically a person and an honorific register is required,
		<i lang="ain-Latn">kur</i> (from <A w="kuru" gl="person" />) is used;
		<i lang="ain-Latn">utar</i> extends this person head to a group. The place nouns
		<i lang="ain-Latn">usi(ke)</i> and <i lang="ain-Latn">uske</i> head nominalizations that
		refer to a location or time without the concrete/abstract ambiguity of
		<i lang="ain-Latn">hi</i>.
	</p>
	<p>
		Satō's diagnostic sharpens the contrast between the relative-clause use and the complementizer
		use for any formal noun. A formal noun functioning as a <em>relative-clause head</em> heads a
		clause from which a participant has been gapped; the original sentence can be reconstructed by
		reinserting that participant. A formal noun functioning as a <em>complementizer</em>
		nominalizes the whole clause as a proposition, and no such reconstruction is possible
		<Ref k="sato2008" p="174–175" />. Both <i lang="ain-Latn">p</i> ~
		<i lang="ain-Latn">pe</i> and <i lang="ain-Latn">hi</i> fill either role depending on
		the arity of the clause they follow; the sensory-noun heads serve both functions as well,
		though their complement use is semantically restricted to perception contexts.
	</p>
	<p>
		Person formal noun <i lang="ain-Latn">kur</i> produces nominalizations whose referent is a
		specific individual. In classical and epic texts these regularly lexicalize:
		<i lang="ain-Latn">kotan kor-kur</i> 'chief' (lit. 'person who has a village'),
		<i lang="ain-Latn">ray-kur</i> 'the dead' (lit. 'person(s) who die')
		<Ref k="shibatani1990" p="34" />. Compound nominalizations of this type remain analytically
		transparent even after lexicalization, illustrating the continuity between productive RC
		nominalization and the lexicalized stratum treated in the final section.
	</p>
</S>

<S t="hi — semantic range and the place/time split" id="hi-semantic">
	<p>
		<A w="hi" gl="thing, place, time" /> is the most abstract formal noun in the inventory; its
		gloss covers 'thing, matter, fact', 'time when', and 'place where'. After a consonant it
		surfaces as <i lang="ain-Latn">-i</i> — as in the lexicalized
		<i lang="ain-Latn">ape-o-i</i> 'hearth', treated in the next section
		<Ref k="nakagawa2024" p="257" />; <Ref k="sato2008" p="169" />.
	</p>
	<p>
		In the 'thing/fact' and 'time' readings, <i lang="ain-Latn">hi</i> nominalizes a saturated
		clause (arity 0) and functions as a complementizer. The nominalized clause may serve as the
		grammatical subject of a matrix predicate:
	</p>

	<Ex
		m="ku=kemeyki kor ku=itak hi iyotta pirka"
		g="1SG.A=sew CONJ 1SG.A=talk NMLZ most good"
		tr="it is best to talk while sewing"
		lit="my talking-while-sewing is most good"
		cite="bugaeva2016:261"
		dial="SAR"
		note="After Tamura 2000: 126. hi takes two person-marked, fully specified clauses and nominalizes the whole as the grammatical subject of iyotta pirka 'is most good'."
	/>

	<p>
		Or as the object of a complement-taking predicate. In the following example,
		<i lang="ain-Latn">hi</i> appears twice: as the object-head of
		<i lang="ain-Latn">a=ye</i> 'say' (arity +1, 'what to say') and of
		<i lang="ain-Latn">a=kar</i> 'do' (arity +1, 'what to do'). In each case the clause before
		<i lang="ain-Latn">hi</i> has an open slot, so <i lang="ain-Latn">hi</i> fills the head
		rather than the complementizer role:
	</p>

	<Ex
		m="a=ye hi ka a=kar hi ka a=eramiskari"
		g="4.A=say NMLZ even 4.A=do NMLZ even 4.A=not.know"
		tr="not knowing what to say or what to do"
		cite="ninjal2003"
		place="Oda Ito, NINJAL corpus of Ainu oral literature (Chitose) [ninjal-folklore/026#61]"
		dial="CHI"
	/>

	<p>
		The 'place' reading calls for a different structure: the governing postposition is retained
		inside the relative clause, marking <i lang="ain-Latn">hi</i> as the locative head (arity +1
		because the location slot is gapped):
	</p>

	<Ex
		m="oro ta cise kar hi"
		g="place LOC house build NMLZ"
		tr="the place where someone built a house"
		cite="nakagawa2024:511"
		dial="HK"
		note="ta (LOC) retained inside the RC signals the locative role of hi; compare the time reading below, where no postposition is present."
	/>

	<p>
		With the time and abstract-fact readings, the clause is saturated and
		<i lang="ain-Latn">hi</i> nominalizes it whole. The postposition that follows
		<i lang="ain-Latn">hi</i> is not part of the RC but a postposition governing the entire
		nominalized clause:
	</p>

	<Ex
		m="pon=an hi wano"
		g="be.small=4.S NMLZ since"
		tr="since I was small"
		cite="nakagawa2024:510"
		dial="HK"
		note="hi nominalizes the intransitive clause pon=an (arity 0); wano 'since/from' governs the nominalized clause as a temporal adverbial."
	/>

	<p>
		Nakagawa frames the place/non-place split as a tendency. The 'place' reading is more concrete
		and closer to an ordinary noun, so the grammatical relation requires overt expression; the
		'time/fact' reading is abstract and freely nominalizes the whole clause. Okuda (1989), quoted
		and refined by <Ref k="nakagawa2024" p="510–511" />, first systematized this contrast. An
		attested exception — <i lang="ain-Latn">seta utar osoma hi</i> 'the dogs' privy', from
		知里幸恵's kamuy yukar collection (Horobetsu), which uses a 'place' reading without a retained
		postposition — shows the constraint does not hold categorically
		<Ref k="nakagawa2024" p="511" /> ‹corpus-suggested›.
	</p>
	<p>
		The locative formal nouns <i lang="ain-Latn">usi</i> and <i lang="ain-Latn">uske</i> offer an
		alternative to <i lang="ain-Latn">hi</i> for the 'place' reading. Because they are inherently
		locative, they require no retained movement-case postposition. The directional
		postposition <i lang="ain-Latn">eun</i> 'toward' is instead retained for the oblique head:
	</p>

	<Ex
		m="eun a=nu usi ka isam"
		g="toward 4.A=ask place even not.exist"
		tr="there was no place to ask about it"
		cite="bugaeva2015:49"
		dial="HK"
		note="Bugaeva ex. 16. nu 'hear, ask about'; eun 'toward' retained inside the RC signals the directional role; usi 'place' is the formal-noun head. The NP is the argument of isam 'not exist'."
	/>

	<p>
		Ijäs observes that <i lang="ain-Latn">usi</i>-headed compound nouns — such as
		<i lang="ain-Latn">ipeusi</i> 'restaurant' (lit. 'eating-place') — are historical RC
		nominalizations, and that <i lang="ain-Latn">usi</i>-words require no relational noun
		<i lang="ain-Latn">or</i> before movement-case postpositions
		<Ref k="ijas2023" /> ‹consensus›. A locative relative clause with a plain common noun head
		does require the relational noun:
	</p>

	<Ex
		m="oro ta k=an kotan"
		g="place LOC 1SG.S=exist village"
		tr="the village I live in"
		cite="ijas2023"
		constructed
		dial="HK"
		note="Ijäs Lesson 11. oro 'place/vicinity' (relational noun) fronts before ta (LOC). With a usi-type head no oro would be needed."
	/>
</S>

<S t="Sensory-noun formal nouns as perception-complement heads" id="sensory-complements">
	<p>
		Apart from their clause-final evidential function (treated in <Xr ch="evidential-schema-overview" />
		and <Xr ch="ruwe-ne-inferential">the inferential <i lang="ain-Latn">ruwe ne</i></Xr>), the
		possessed-form sensory nouns <i lang="ain-Latn">ruwe</i>, <i lang="ain-Latn">siri</i>,
		<i lang="ain-Latn">hawe</i>, and <i lang="ain-Latn">humi</i> function as nominal heads of
		complement clauses whose matrix predicate is a perception or cognition verb. In this
		intra-sentence use, the matrix verb follows the formal noun rather than closing the clause
		<Ref k="sato2008" p="175–178" />.
	</p>
	<p>
		Each formal noun is selected by a specific subset of perception predicates:
		<i lang="ain-Latn">nukar</i> 'see' takes <i lang="ain-Latn">siri</i> (the visual scene) or
		<i lang="ain-Latn">hi</i> (an abstract perceived content);
		<i lang="ain-Latn">nu</i> 'hear, ask about' takes <i lang="ain-Latn">hawe</i> (verbal
		content), <i lang="ain-Latn">humi</i> (a non-verbal sensation), or
		<i lang="ain-Latn">hi</i>; cognition predicates <i lang="ain-Latn">eramiskari</i>
		'not know' and <i lang="ain-Latn">eraman</i> 'understand' take <i lang="ain-Latn">hi</i>
		or <i lang="ain-Latn">p</i> ~ <i lang="ain-Latn">pe</i>
		<Ref k="sato2008" p="175–178" />. The complement-taking predicates and the structural
		properties of these complements are treated in <Xr ch="nominalized-complements-control-raising" />.
	</p>
	<p>
		Within the visual domain, Satō distinguishes the two available heads:
		<i lang="ain-Latn">siri</i> applies to an action or situation in progress at reference time
		— a scene being witnessed — while <i lang="ain-Latn">ruwe</i> applies to an already-existing
		state or non-progressive action asserted as recognized fact
		<Ref k="sato2008" p="178" />. In the following example the speaker uses
		<i lang="ain-Latn">siri</i> to frame the visible absence of large trees as the scene that
		prompted anger:
	</p>

	<Ex
		m="poro cikuni oar isam sir-i ku=nukar wa sonno ku=iruska"
		g="big tree at.all not.exist appearance-POSS 1SG.A=see CONJ truly 1SG.A=be.angry"
		tr="I saw that there were no big trees at all, and was truly angry."
		cite="ainukoraci1991"
		place="Kanzaki Masayoshi, Ainu Times (ainu-times/015/3#7)"
		dial="SAR"
		note="sir-i = sir 'appearance/state' + possessed suffix -i. siri heads the complement of ku=nukar 'I saw'; ku=iruska follows wa (CONJ) as a second, main-clause predicate."
	/>

	<p>
		The shift from this intra-sentence perception complement (matrix verb follows
		<i lang="ain-Latn">siri</i>) to the clause-final evidential frame (copula
		<i lang="ain-Latn">ne</i> follows) instantiates Bugaeva's Stage II grammaticalization path:
		the nominal head that was an argument of a perception predicate becomes the terminal element
		of an evidential construction <Ref k="bugaeva2016" p="229–304" />. The two uses remain
		synchronically productive and distinct; the evidential use is the more grammaticalized
		endpoint ‹consensus›.
	</p>
	<p>
		The constituency of the whole construction — whether it is biclausal (a possessed noun heading
		the preceding finite clause, closed by the copula) or is grammaticalizing toward a monoclausal
		complex predicate — is unsettled. The biclausal analysis is held by Tamura, Okuda, and Satō,
		and is endorsed by Nakagawa under the label 補文標識 'complementizer'
		<Ref k="nakagawa2024" p="508" />; <Ref k="sato2008" p="175" />. Bugaeva argues that the
		erstwhile nouns are considerably grammaticalized and the construction is moving toward a
		monoclausal complex predicate, supported by the fact that the formal noun no longer heads a
		full NP (<i lang="ain-Latn">*pirka ruwe ne kewtum</i> is ungrammatical — no determiner or
		attributive modifier can attach)
		<Ref k="bugaeva2016" p="306–315" />; <Ref k="dalcorso2018" p="24–25" /> ‹contested›.
	</p>
</S>

<S t="Lexicalized formal-noun nominalizations and the RC–compound boundary" id="lexicalized">
	<p>
		A relative-clause NP of the form <i lang="ain-Latn">[(NP…) V nmz]</i> can crystallize into a
		single lexical noun when the constituent parts are reproduced as a unit with a conventional,
		fixed meaning. Bugaeva traces a grammaticalization cline from productive RC nominalization to
		lexicalized noun in the Hokkaido data, placing Hokkaido at Stage II of a broader areal
		typology (Stage I = zero-nominalization; Stage II = nominalizing word; Stage III–IV in
		Sakhalin = possessed verbal forms)
		<Ref k="bugaeva2016" p="240–251, 385–397" />. The lexicalized products are morphologically
		transparent but synchronically function as ordinary nouns.
	</p>
	<p>
		Two items illustrate the pattern with allomorphs of different formal nouns:
	</p>

	<Ex
		m="ci=ronnu-p"
		g="1PL.A=kill-NMLZ"
		tr="fox"
		lit="thing(s) that we kill"
		cite="bugaeva2016:245"
		dial="HK"
		note="ci= (1PL.A) + ronnu 'kill' + -p (NMLZ = formal noun p/pe, 'thing'). The generic patient 'things we kill' has been conventionalized as the species name for fox."
	/>

	<Ex
		m="ape-o-i"
		g="fire-enter-NMLZ"
		tr="hearth"
		lit="the place where fire enters"
		cite="bugaeva2016:245"
		dial="HK"
		note="-i is the allomorph of formal noun hi after a consonant, giving the 'place' reading. ape 'fire' is incorporated; o 'enter'. Contrast aep (4.A=eat-NMLZ) 'food', where -p gives the concrete 'thing' reading of p/pe."
	/>

	<p>
		The allomorph split across these two items reflects the same head-selection principle visible
		in productive clausal nominalizations: <i lang="ain-Latn">-p</i> ~ <i lang="ain-Latn">-pe</i>
		yields a concrete entity ('thing killed', 'thing cooked'), while
		<i lang="ain-Latn">-i</i> (allomorph of <i lang="ain-Latn">hi</i>) yields a location
		('place where fire enters'). The semantic specialization survives lexicalization.
	</p>
	<p>
		A relative-clause NP and a compound noun are superficially similar — both consist of a
		predicate-like element preceding a noun — but the arity test separates them
		<Ref k="nakagawa2024" p="506–507" />. The compound
		<i lang="ain-Latn">tureptani</i> 'uba-lily digging-stick' juxtaposes
		<i lang="ain-Latn">turep</i> 'uba-lily' and <i lang="ain-Latn">tani</i> 'digging-stick'
		without marking the semantic relation between them; the RC reading 'the stick with which that
		woman dug uba-lilies' requires the instrumental postposition
		<i lang="ain-Latn">ani</i> 'with' to be retained inside the clause, making the instrument
		role explicit:
	</p>

	<Ex
		m="nea menoko ani turepta ni"
		g="that woman INS dig.uba.lily stick"
		tr="the stick with which that woman dug uba-lilies"
		cite="nakagawa2024:506"
		dial="HK"
		note="ani (INS) is retained inside the RC because ni 'stick/wood' fills the instrument role. The compound tureptani suppresses the grammatical relation; the RC must express it."
	/>

	<p>
		The diagnostic generalizes: in an RC nominalization the semantic relation between the
		formal-noun head and the predicate is grammatically specified — via a retained postposition,
		the verb's argument structure, or an applicative prefix. In a compound noun, that relation
		is implicit. Lexicalized RC nominalizations such as <i lang="ain-Latn">ci=ronnu-p</i> and
		<i lang="ain-Latn">ape-o-i</i> were once transparent RC structures; the grammatical marking
		has become inert but remains recoverable from the morphology.
	</p>
	<p>
		Ijäs's observation that <i lang="ain-Latn">usi</i>-words such as
		<i lang="ain-Latn">ipeusi</i> 'restaurant' ('eating-place') descend historically from RC
		structures aligns with Bugaeva's Stage II account and with Shibatani's finding that
		<i lang="ain-Latn">-p(e)</i>, <i lang="ain-Latn">-i</i>, <i lang="ain-Latn">-ike</i>, and
		<i lang="ain-Latn">-kur</i> function as both phrasal and lexical nominalizers
		<Ref k="ijas2023" />; <Ref k="shibatani1990" p="33–34" />; <Ref k="bugaeva2016" p="240–251" />
		‹consensus›. The productive and lexical levels are not sharply bounded; what counts as a new
		RC formation versus a lexicalized item depends on the frequency and semantic
		conventionalization of the combination.
	</p>
</S>
