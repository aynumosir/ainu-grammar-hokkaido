<!-- src/lib/grammar/chapters/deverbal-denominal-noun-derivation.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Scope: lexical word-formation and the syntactic cut" id="scope">
	<p>
		Hokkaido Ainu has no separate class of deverbal suffixes standing apart from the rest of the
		morphology. The same formal elements that nominalise whole verbal phrases at the syntactic
		level also operate at the word-formation level to produce stable lexical nouns. Three
		morphemes dominate the lexical deverbal layer: the nominalizer
		<i lang="ain-Latn">-p/-pe</i>, the possessive/affiliative suffix
		<i lang="ain-Latn">-i/-hi</i> (with its vowel-harmonic variants
		<i lang="ain-Latn">-e/-we</i>), and the lexical class-noun heads
		<A w="kur" gl="person" /> 'person' and <A w="usi" gl="place, time" /> 'place/time'. The
		diminutive <i lang="ain-Latn">-po</i> and the full range of noun-to-noun compounding belong
		to <Xr ch="nominal-derivation-diminutive-augmentative" /> and
		<Xr ch="noun-noun-compounding" />; the reverse direction — noun-to-verb conversion — belongs
		to <Xr ch="denominal-deverbal-verb-derivation" />.
	</p>
	<p>
		The boundary between a lexical deverbal nominal and a syntactic nominalized phrase turns on
		the arity of the base. When all argument slots of a transitive verb are filled by bound
		person morphology, the resulting <i lang="ain-Latn">-p</i>-final form has no open
		relativizable gap and is reanalysable as a dictionary-listed noun. When a gap remains —
		when one slot is left open for the matrix argument — the construction is a syntactic relative
		clause or complement, treated in <Xr ch="nominalization-p-pe" />. Nakagawa formalizes this
		with an arity calculus: a clause whose arity sums to zero supplies a complement; one summing
		to +1 heads a relative clause <Ref k="nakagawa2024" p="503–504" />. The
		<Xr ch="formal-defective-nouns">formal-noun subclass</Xr> that these heads belong to, and
		the full complementizer syntax, are developed there and in
		<Xr ch="lexical-head-formal-noun-nominalization" />.
	</p>
</S>

<S t="The -p/-pe nominalizer at word level" id="p-pe">
	<S t="Allomorphy" id="allomorphy">
		<p>
			The nominalizer appears as <i lang="ain-Latn">p</i> after a vowel-final form and as
			<i lang="ain-Latn">pe</i> after a consonant-final one
			<Ref k="sato2008" p="177" />; <Ref k="ijas2023" />. The conditioning is phonological and
			holds across Hokkaido dialects ‹consensus›.
		</p>

		<table>
			<thead>
				<tr>
					<th>VP-final segment</th>
					<th>allomorph</th>
					<th>example</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>vowel</td>
					<td><i lang="ain-Latn">p</i></td>
					<td>
						<i lang="ain-Latn">ipe yakne pirka <strong>p</strong></i> — 'if you ate it, good'
					</td>
				</tr>
				<tr>
					<td>consonant</td>
					<td><i lang="ain-Latn">pe</i></td>
					<td>
						<i lang="ain-Latn">rok=an <strong>pe</strong> ne na</i> — 'one ought to sit quietly'
					</td>
				</tr>
			</tbody>
		</table>

		<Ex
			m="huci na ipe yakne pirka p"
			g="grandmother FIN eat COND good NMLZ"
			tr="Grandmother, it would be nice if you ate more!"
			cite="sato2008:177"
			dial="SAR"
			note="Satō §22.1. The clause ipe yakne pirka ends in a vowel-final form; the nominalizer surfaces as p. The construction expresses an unfulfilled wish."
		/>

		<Ex
			m="ratcitara rok=an pe ne na"
			g="quietly sit.PL=4.S NMLZ COP FIN"
			tr="One ought to sit quietly."
			cite="sato2008:177"
			dial="SAR"
			note="Satō §22.1. The verb rok=an ends in a nasal; the nominalizer surfaces as pe. The construction carries a normative or prescriptive nuance."
		/>
	</S>

	<S t="Lexicalized agent/patient nominals" id="lexicalized">
		<p>
			The most common word-formation output of <i lang="ain-Latn">-p/-pe</i> at the lexical
			level is a patient or agent nominal produced when both argument slots of a transitive verb
			are filled by bound person morphology. <A w="aep" gl="food" /> 'food' is the canonical
			illustration: synchronically a common noun listed as a dictionary headword
			<Ref k="tamura1996" p="s.v. aep" />, its morphological shape is
			<i lang="ain-Latn">a=e-p</i> — the indefinite fourth-person agent
			<i lang="ain-Latn">a=</i>, the transitive verb <A w="e" gl="eat (transitively)" />, and
			the nominalizer — 'that which one eats'.
		</p>

		<Ex
			m="a=e-p"
			ain="aep"
			g="4.A=eat-NMLZ"
			tr="food"
			lit="that which one eats"
			constructed
			note="Patient-nominal type. The subject slot is filled by the indefinite fourth-person agent a= and the patient slot is closed by -p; the result is a stable common noun with no open argument gap. The morphemic analysis is the standard decomposition; the surface form is aep."
		/>

		<p>
			When a gap is not lexically filled and one slot remains open, the form heads a syntactic
			relative clause rather than a stable noun. Nakagawa's example makes the contrast:
		</p>

		<Ex
			m="kani ku=respa p anakne"
			g="1SG 1SG.A=raise NMLZ TOP"
			tr="those whom I raised"
			cite="nakagawa2024:214"
			dial="SAR"
			note="Nakagawa ex. 230. Here p heads a relative clause with an accessible object gap (the raised persons); this is the syntactic use. The lexicalized aep differs by having no gap and a conventionalized meaning. Both shapes are morphologically identical; the distinction is arity and degree of reanalysis."
		/>

		<p>
			The lexicalized forms are patient nominals when the subject slot is filled and the
			nominalizer closes the object position, and agent nominals when the object is lexically
			saturated and the subject supplied by a person prefix. The instrument or manner reading —
			'the thing associated with this action' — arises when neither argument is left open but the
			predication describes an activity rather than a state; it is determined by the semantics of
			the verb, not by morphological marking ‹consensus›.
		</p>
	</S>

	<S t="Arity-slot nominalizations: ci= and a= with -p" id="arity-slot">
		<p>
			A set of lexicalized nominals was formed when both argument slots of a transitive base were
			filled — the subject slot by the first-person exclusive prefix
			<i lang="ain-Latn">ci=</i>, the patient slot by <i lang="ain-Latn">-p</i> — before the
			form stabilized as a dictionary entry. The word <A w="cep" gl="fish" /> is the
			most-discussed example: nukopoli (aynu-corpora Discord, 2023-12-06;
			<Ref k="aynucorporadiscord" />) proposes the analysis <i lang="ain-Latn">ci=e-p</i>
			'the thing that we (exclusive) eat', with phonological reduction
			<i lang="ain-Latn">cie-p</i> → <i lang="ain-Latn">cep</i> on a par with the attested
			contraction <i lang="ain-Latn">kuani</i> → <i lang="ain-Latn">kani</i> ‹contested›. No
			primary source states the etymology directly; Tamura's Saru dictionary lists
			<i lang="ain-Latn">cep</i> without internal analysis
			<Ref k="tamura1996" p="s.v. cep" />. The same community discussion (nukopoli, 2023-12-08;
			<Ref k="aynucorporadiscord" />) identifies <i lang="ain-Latn">cikarkarpe</i>
			'manufactured thing, handcraft' as <i lang="ain-Latn">ci=kar-kar-pe</i> — exclusive
			subject, reduplicated stem <i lang="ain-Latn">kar-kar</i> 'make', nominalizer
			<i lang="ain-Latn">pe</i> after the consonant-final stem — consistent with the allomorphy
			and the compositional meaning ‹contested›.
		</p>
		<p>
			A denominal analysis for <A w="canup" gl="teaching, moral precept" /> 'teaching, lesson'
			rests on the same skeleton: nukopoli (aynu-corpora Discord, 2024-11-10;
			<Ref k="aynucorporadiscord" />) reads <i lang="ain-Latn">ca-nu-p</i>, with
			<i lang="ain-Latn">ca</i> 'mouth' as the base, an associative element
			<i lang="ain-Latn">-nu</i>, and <i lang="ain-Latn">-p</i> as nominalizer — 'the thing
			one gives with the mouth, moral precept'. The compound verb
			<i lang="ain-Latn">ecanupkar</i> 'to teach' supports the noun status of
			<i lang="ain-Latn">canup</i>; the internal segmentation remains unconfirmed in the
			accessible grammars ‹contested›.
		</p>
		<p>
			Alongside the <i lang="ain-Latn">ci=</i>-initial type, the fourth-person agent prefix
			<i lang="ain-Latn">a=</i> fills the subject slot to produce indefinite-subject nominals:
			<i lang="ain-Latn">a=e-p</i> → <i lang="ain-Latn">aep</i> 'food'. The alternation between
			<i lang="ain-Latn">ci=</i> (exclusive: we-not-you) and <i lang="ain-Latn">a=</i>
			(indefinite: one in general) reflects the person system described in
			<Xr ch="word-class-inventory-and-diagnostics" />, not a difference in the nominalization
			itself.
		</p>
	</S>

	<S t="Instrument nominalization: ani X p" id="instrument">
		<p>
			A productive word-formation pattern builds instrument nouns via the postpositional adverb
			<A w="ani" gl="with, by means of" /> followed by a verbal stem and the nominalizer:
			<i lang="ain-Latn">ani</i> [V] <i lang="ain-Latn">p/pe</i> = 'the thing with which one
			V-s'. Nukopoli (aynu-corpora Discord, 2026-05-29; <Ref k="aynucorporadiscord" />)
			documents this as a regular instrument-nominalization frame: <i lang="ain-Latn">ani
			e=kanpinuye p</i> 'pencil' (lit. 'the thing to write characters with'),
			<i lang="ain-Latn">ani humi a=aste p</i> 'musical instrument' (lit. 'the thing to make
			sound with') ‹corpus-confirmed›. In each form the verb's argument slots are filled and
			<i lang="ain-Latn">p</i> closes the zero-arity predication; the instrument reading is
			contributed by <i lang="ain-Latn">ani</i>. The construction shows that the word-level
			nominalizer can co-occur with adverbial adjuncts — not only with person prefixes — to
			saturate the argument frame before nominalization.
		</p>
	</S>

	<S t="The lexical–syntactic boundary" id="lexical-syntactic">
		<p>
			Two criteria distinguish a lexical nominal from a syntactic one.
			<strong>Argument opacity</strong>: a lexicalized form has all slots filled and admits no
			modification by a relativizing matrix argument; a syntactic form projects an accessible
			gap. <strong>Compositionality</strong>: the meaning of a syntactic nominalization follows
			from the predicate and the gap's role; a lexicalized item may carry conventionalized
			meaning that has drifted from any compositional reading — 'fish' is not synchronically
			recoverable as 'what we eat'.
		</p>
		<p>
			The community observation (nukopoli, 2024-11-09; <Ref k="aynucorporadiscord" />) that
			<i lang="ain-Latn">-p(e)</i> nominalizes without dropping an argument, unlike relativized
			clauses, aligns with Nakagawa's arity account
			<Ref k="nakagawa2024" p="503–504" />: <i lang="ain-Latn">a=i=ye p</i> 'the thing that
			one says' is well-formed because both the subject slot (<i lang="ain-Latn">a=</i>) and the
			object slot (<i lang="ain-Latn">i=</i>) are filled, whereas substituting a bare head noun
			is impossible (<i lang="ain-Latn">*a=i=ye kamuy</i>) ‹consensus›. The full syntax of the
			construction — the headless-relative and complement continuum, TAM marking inside the
			nominalized clause, insubordination in Tokachi — belongs to
			<Xr ch="nominalization-p-pe" />.
		</p>

		<Ex
			m="hoka e=o p ne na"
			g="fire 2SG.A=put.in NMLZ COP FIN"
			tr="It is the thing to put on the fire!"
			cite="nakagawa2024:505"
			dial="SAR"
			note="Nakagawa ex. 1165. Both argument slots of e=o are filled via person morphology; p closes the zero-arity predication with a patient reading. The directive force is contextual, not contributed by p itself."
		/>
	</S>
</S>

<S t="The affiliative suffix as nominalizer: -i/-hi and -e/-we" id="affiliative-nmlz">
	<p>
		The suffix that forms the <Xr ch="concept-form-affiliative-form">affiliative (possessed)
		form</Xr> of common nouns — <i lang="ain-Latn">-i/-hi</i> in general notation, with
		<i lang="ain-Latn">-e/-we</i> as the shape after certain base types — also operates as a
		derivational morpheme when applied to sensory and perceptual noun bases, producing formal
		nouns capable of nominalizing a preceding clause. The resulting form is morphologically a
		possessed nominal: <i lang="ain-Latn">ru-we</i> is 'the trace of —', its implicit possessor
		being the event described by the nominalized clause. The same possessed-noun morphology
		underlies all four members of the Hokkaido evidential set
		<Ref k="nakagawa2024" p="258, 392" />;
		<Ref k="tamura1996" p="s.v. ru, sir, hum, haw" />.
	</p>

	<S t="Conditioning of the suffix allomorphs" id="conditioning">
		<p>
			The possessed-form suffix follows the same five-type conditioning that governs the general
			affiliative paradigm <Ref k="nakagawa2024" p="223–227" />;
			<Ref k="nakagawa2022pos" p="484" />. The short form and the long form carry no semantic
			difference; the choice is prosodic <Ref k="nakagawa2024" p="219" />. For the four
			sense-noun bases that grammaticalize as evidential formal nouns, the suffix type follows
			directly from the base-final segment:
		</p>

		<table>
			<thead>
				<tr>
					<th>base (concept form)</th>
					<th>base shape</th>
					<th>affix type (Nakagawa 表51)</th>
					<th>formal noun</th>
					<th>grammaticalized information source</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><i lang="ain-Latn">ru</i> 'track, path'</td>
					<td>CV open</td>
					<td>③-like → <i lang="ain-Latn">+we(he)</i></td>
					<td><i lang="ain-Latn">ru-we</i></td>
					<td>inferred / recognized fact</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">sir</i> 'appearance, scene'</td>
					<td>CVC (C ≠ y, w)</td>
					<td>③-1 → <i lang="ain-Latn">+i(hi)</i></td>
					<td><i lang="ain-Latn">sir-i</i></td>
					<td>directly visible situation</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">hum</i> 'sound, sensation'</td>
					<td>CVC (C ≠ y, w)</td>
					<td>③-1 → <i lang="ain-Latn">+i(hi)</i></td>
					<td><i lang="ain-Latn">hum-i</i></td>
					<td>non-visual sensation</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">haw</i> 'voice'</td>
					<td>CVCw → type ②</td>
					<td>② → <i lang="ain-Latn">+e(he)</i></td>
					<td><i lang="ain-Latn">haw-e</i></td>
					<td>verbal report, hearsay</td>
				</tr>
			</tbody>
		</table>

		<p>
			Each short form (<i lang="ain-Latn">ruwe, siri, humi, hawe</i>) is the form that heads the
			evidential construction; the corresponding long forms (<i lang="ain-Latn">ruwehe, sirihi,
			humihi, hawehe</i>) exist as ordinary lexical possessed nouns but are blocked from the
			evidential slot — Tamura marks this explicitly for each item
			<Ref k="tamura1996" p="s.v. ruwe" />. The blocking of the long form from the evidential
			slot shows that the formal-noun use has been grammaticalized beyond the general affiliative
			paradigm ‹corpus-confirmed›.
		</p>
		<p>
			Refsing, from Shizunai, reanalyses the same set as <em>nominalizers</em> rather than
			possessed nouns, treating them as one of four sentence-conversion types alongside
			conjunctionalization, quotationalization, and adnominalization
			<Ref k="refsing1986" p="259–264" />. Nakagawa retains the formal-noun word-class label
			and treats the evidential role as a grammatical function (complementizer) that certain
			formal nouns fill when arity is zero <Ref k="nakagawa2024" p="503–505" />. The two
			framings are compatible at the descriptive level, differing in whether the category label
			or the functional role is foregrounded ‹contested›. Full treatment of the evidential
			semantics and syntax belongs to <Xr ch="ruwe-ne-inferential" /> and the sibling evidential
			chapters; what matters here is that the deverbal process is the possessive-suffix
			morphology, and the evidential construction is the grammaticalization endpoint of a path
			that begins at lexical word-formation.
		</p>
	</S>
</S>

<S t="Lexical class-noun heads: kur and usi/uske" id="class-noun-heads">
	<p>
		Two common nouns operate as productive denominative heads:
		<A w="kur" gl="person" /> 'person' and
		<A w="usi" gl="place, time" /> (also <i lang="ain-Latn">usike</i>) /
		<A w="uske" gl="place" />. Neither is an agreement morpheme; Hokkaido Ainu has no numeral
		classifier system <Ref k="nakagawa2024" p="461" />. They are ordinary common nouns that
		follow a modifier (NP or VP) and supply a semantic class specification for the resulting
		compound.
	</p>
	<p>
		<i lang="ain-Latn">kur</i> forms person-denoting nominals from place names via the allative
		particle <i lang="ain-Latn">un</i>: <i lang="ain-Latn">Sar un kur</i> 'a Saru person',
		<i lang="ain-Latn">Iyoci un kur</i> 'a Yoichi person' <Ref k="nakagawa2024" p="234" />.
		Corpus rank 98 (2,456 tokens in the Hokkaido texts) reflects how productively it combines.
		The word-class diagnostics that distinguish <i lang="ain-Latn">kur</i> from the formal-noun
		subclass — it heads an independent NP, takes attributive modifiers, and takes possession
		marking — are set out in <Xr ch="formal-defective-nouns" />.
	</p>

	<Ex
		m="Sar un kur"
		g="Saru ALLAT person"
		tr="a Saru person"
		cite="nakagawa2024:234"
		dial="SAR"
		note="Nakagawa §5.2.6. Place name + allative particle un + class-noun head kur; the pattern is productive across place names."
	/>

	<p>
		<i lang="ain-Latn">usi(ke)</i> and <i lang="ain-Latn">uske</i> head locational nominals from
		a verbal phrase. Nakagawa lists them under the formal-noun inventory (2024: 257–258;
		<Ref k="nakagawa2024" p="257–258" />); their full syntax as heads of VP nominalization
		constructions belongs to <Xr ch="lexical-head-formal-noun-nominalization" />. The example
		below shows <i lang="ain-Latn">usi</i> nominalizing a VP to produce a location noun that
		serves as goal of a motion-verb sequence:
	</p>

	<Ex
		m="nanu memke usi ku=oman wa ek ruwe ne"
		g="face shave place 1SG.S=go CONJ come track-POSS COP"
		tr="I went (and came back) to the face-shaving place."
		cite="nakagawa2024:258"
		dial="HK"
		place="Kushiro"
		note="Nakagawa ex. 330, citing Yaegashi 2001: 13. The VP nanu memke 'shave the face' is nominalized by usi to produce 'the face-shaving place (barber's)', which then heads the goal argument of the motion-verb sequence ku=oman wa ek. The ruwe ne closes the matrix clause as inferential evidential."
	/>
</S>

<S t="Zero-conversion and the verb–noun interface" id="zero-conversion">
	<p>
		Many Hokkaido Ainu nouns have corresponding intransitive verbs with no overt marking of the
		class difference. Property words like <A w="poro" gl="be big" /> 'be big' serve as noun
		modifiers — <i lang="ain-Latn">poro cep</i> 'a big fish' — without any derivational suffix;
		word-class membership is assigned by the syntactic slot, not the form
		<Ref k="nakagawa2024" p="115–116" />; <Ref k="nakagawa2022pos" p="473" />. This
		zero-conversion is the default mechanism in compound nouns where an intransitive verb appears
		as the first element: Nakagawa's taxonomy of compound types (2024: 267–272) — 1-arg-verb+N,
		N+1-arg-verb, and 1-arg-verb+1-arg-verb — all reduce to N+N because the verbal element is
		freely reanalyzed as nominal in the modifier position
		<Ref k="nakagawa2024" p="267–272" />.
	</p>
	<p>
		<A w="inonno-itak" gl="prayer discourse, liturgical speech" /> 'prayer discourse' (compound of
		<A w="inonno" gl="pray, offer prayers" /> + <A w="itak" gl="word, speech" />) illustrates
		this path: the intransitive verb <i lang="ain-Latn">inonno</i> 'pray' modifies
		<i lang="ain-Latn">itak</i> 'speech' as the first element of a V+N compound with no
		nominalizing suffix. What signals the nominal reanalysis is the compound's function as a
		common-noun argument and the person-affix position outside the whole compound, not between
		its elements. The formal diagnostics for whether a sequence is a compound or two syntactic
		words belong to <Xr ch="noun-noun-compounding" />.
	</p>
	<p>
		Antitwilight (aynu-corpora Discord, 2026-06-02; <Ref k="aynucorporadiscord" />) observes
		that Ainu has very few pure-noun coordinate compounds or exocentric N+N combinations, because
		noun-formation is verb-centred — nearly every noun can also serve as an intransitive verb, so
		N+N and V+N compounds are morphologically indistinguishable at the surface
		‹contested›. This sharpens Nakagawa's (2024: 116) principle that word-class membership is
		defined by syntactic role rather than form. The verbal-number suppletion patterns that some
		deverbal nominals feed (e.g. singular <i lang="ain-Latn">ek</i> vs. plural
		<i lang="ain-Latn">arki</i> 'come') belong to <Xr ch="suppletive-verbal-number" />.
	</p>
</S>

<S t="Grammaticalization cline and the Sakhalin contrast" id="grammaticalization">
	<p>
		The morphemes treated here as word-formation devices extend along a grammaticalization cline
		into clause-level nominalization and then into evidential and sentence-final positions.
		Takahashi's study of the Horobetsu dialect shows that the formal-noun nominalizers — including
		<i lang="ain-Latn">p/pe</i> and the possessive-suffix set — undergo a further stage in
		Horobetsu, functioning as adverbial clause markers and conjunction-like linkers in contexts
		that the better-documented southern dialects (Saru, Chitose) handle with other strategies
		<Ref k="takahashi2018" />. The lexicalized deverbal nominals treated here are the initial
		pole of the cline; the Horobetsu data mark the far end within Hokkaido ‹corpus-suggested›.
	</p>
	<p>
		Bugaeva's comparison of Hokkaido and Sakhalin nominalization
		<Ref k="bugaeva2016" /> identifies Sakhalin Ainu as having innovated in the nominalization
		system relative to the common ancestor. One index of this difference is the treatment of the
		evidential formal nouns: in Sakhalin varieties the long possessed form
		(<i lang="ain-Latn">ruwehe</i>, <i lang="ain-Latn">sirihi</i>) is used in the evidential
		slot, whereas Hokkaido restricts that slot to the short forms and blocks the long form from
		evidential use (see the conditioning table above). Whether this blocking is a Hokkaido
		retention or an innovation is an open question; the Sakhalin data frame it as a candidate
		for Hokkaido-internal change ‹speculative›. Full comparative treatment is in
		<Xr ch="ruwe-ne-inferential" /> and the sibling evidential chapters.
	</p>
</S>
