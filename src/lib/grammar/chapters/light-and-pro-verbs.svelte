<!-- Needed additions: none. All gloss atoms and bibliography keys used here are already registered. -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The support-verb inventory" id="inventory">
	<p>
		Hokkaido Ainu has a small set of high-frequency verbs whose lexical meanings are bleached in
		particular constructions while their ordinary verbal morphology remains visible. The central
		member is <A w="ki" gl="do" />, a transitive verb that supplies a verbal host for a preceding
		event expression; the same support pattern appears in clausal negation, clause linkage under
		negation, and some pro-verbal uses where the lexical content is recovered from context. The
		copula <A w="ne" gl="be, become" /> and the existential <A w="an" gl="exist" /> also serve as
		supports, especially in predicate-nominal, evidential, existential, and aspectual frames <Ref
			k="nakagawa2024"
			p="124–129, 132, 374"
		/>; <Ref k="bugaeva2012" p="492–496" />. The shared condition is structural: the support verb
		supplies the finite predicate position, so person marking, negation, and clause-linking material
		attach to a verb word of the kind described in <Xr ch="verb-word-template" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>support verb</th>
				<th>ordinary valence</th>
				<th>support use</th>
				<th>diagnostic behaviour</th>
				<th>main detail chapter</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">ki</i> / <i lang="ain-Latn">iki</i> 'do'</td>
				<td>transitive; takes transitive-type subject marking</td>
				<td>formal verb with an event or predicate complement; support for <i lang="ain-Latn">somo ki</i></td>
				<td>in <i lang="ain-Latn">V (ka) somo ki</i>, the lexical predicate keeps its person marking while <i lang="ain-Latn">ki</i> is unindexed</td>
				<td><Xr ch="negation-somo-standard-clausal" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ne</i> 'be, become'</td>
				<td>two-place copular verb; the predicate complement is not indexed as an object</td>
				<td>predicate-nominal support; closes formal-noun evidentials and nominalized clauses</td>
				<td>subject affix appears, object affix is excluded</td>
				<td><Xr ch="copula-ne-predicate-nominals" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">an</i> 'exist'</td>
				<td>intransitive existential; plural counterpart <i lang="ain-Latn">oka</i></td>
				<td>existential predicate, component of zero-place weather verbs, and aspectual/evidential support</td>
				<td>indexes its subject as S when a subject is present; zero-place compounds built on <i lang="ain-Latn">an</i> index none</td>
				<td><Xr ch="existential-locational-an-oka" /></td>
			</tr>
		</tbody>
	</table>

	<p>
		The inventory rests on the same valence diagnostics as ordinary verbs. Intransitives take S
		markers, transitives take A/O architecture, and the side-switching first-plural and fourth-person
		forms provide the clearest test <Ref k="nakagawa2024" p="125–128, 165–169" />; <Ref
			k="sato2008"
			p="94–98"
		/>. Nakagawa's arity calculus counts person indexes, derivational prefixes, noun incorporation,
		and base verbs in a single computation; Satō separates argument slots, macrorole transitivity,
		and morphological valence, using <i lang="ain-Latn">ne</i> as a central case where two argument
		slots coexist with only one indexable macrorole <Ref k="nakagawa2024" p="136–139" />; <Ref
			k="sato2023b"
			p="42–52"
		/> ‹contested›. The support verbs preserve ordinary head-marking morphology even where their
		lexical semantics is weak.
	</p>
</S>

<S t="Ki as the formal verb of somo negation" id="ki-negation">
	<p>
		The clearest grammaticalized use of <i lang="ain-Latn">ki</i> is the periphrastic negative frame
		<i lang="ain-Latn">V (ka) somo ki</i>. The notional predicate precedes the negative adverb
		<i lang="ain-Latn">somo</i>, optionally followed by the focus/additive particle
		<i lang="ain-Latn">ka</i>; <i lang="ain-Latn">ki</i> supplies the finite verbal head that
		<i lang="ain-Latn">somo</i> negates. In Bugaeva's formulation, the preceding notional verb
		functions as an object-like complement of <i lang="ain-Latn">ki</i>; Nakagawa describes the same
		configuration as a use of the formal verb <i lang="ain-Latn">ki</i> that verb-phrasifies the
		preceding material <Ref k="bugaeva2012" p="496" />; <Ref k="nakagawa2024" p="374, 407" />. The
		person index belongs to the notional predicate; <i lang="ain-Latn">ki</i> itself is unindexed in
		the periphrasis. The direct frame <i lang="ain-Latn">somo V</i> places the negator before the
		whole person-marked verb and does not split a person prefix from the stem <Ref k="sato2008"
			p="124"
		/>; <Ref k="ijas2023" />. Nakagawa finds no clear semantic difference between the two
		arrangements, and Satō notes that ordinary verbal negation very often uses the periphrastic
		pattern <Ref k="nakagawa2024" p="374" />; <Ref k="sato2008" p="22, 124" />.
	</p>

	<Ex
		m="nep a=nukar ka somo ki korka"
		g="something 4.A=see even NEG do although"
		tr="Although I did not see anything,"
		cite="nakagawa2024:407"
		dial="SAR"
		note="Nakagawa ex. 833. The lexical verb nukar bears the fourth-person A prefix; ki carries no person index. The indefinite nep receives its negative reading inside the scope of the negator."
	/>

	<Ex
		m="eci=yayeymontasa somo ki yakka"
		g="2PL.S=take.revenge NEG do even.if"
		tr="Even if you do not take revenge,"
		cite="nakagawa2024:407"
		dial="SAR"
		note="Nakagawa ex. 834. The same frame without ka; the intransitive predicate keeps its 2PL.S prefix while ki remains unindexed."
	/>

	<p>
		The internal constituency of <i lang="ain-Latn">somo ki</i> is disputed. Bugaeva and Nakagawa
		keep the compositional analysis in which <i lang="ain-Latn">ki</i> is the formal verb and the
		preceding predicate is its complement <Ref k="bugaeva2012" p="496" />; <Ref k="nakagawa2024"
			p="374"
		/>. Satō, in the Chitose description reported by Takahashi, treats
		<i lang="ain-Latn">somo ki</i> as a single auxiliary; Takahashi leaves the historical path open
		<Ref k="sato2008" p="86" />; <Ref k="takahashi2016" p="74" /> ‹contested›. The disagreement
		bears on constituency while both analyses place the construction in the same post-predicate slot.
		The distribution and scope of the negator are developed in
		<Xr ch="negation-somo-standard-clausal" />.
	</p>
</S>

<S t="Ki as event support and pro-verb" id="ki-event-support">
	<p>
		Outside negation, <i lang="ain-Latn">ki</i> verbalizes event-denoting material and can stand
		where English translations reach for 'do'. The complement may be a predicate stem, an event
		nominal, or a nominalized clause, and its transitive subject is marked by the A-set, as expected
		for a transitive verb. This use provides the bridge between ordinary lexical
		<i lang="ain-Latn">ki</i> and the negative support frame: both build a finite predicate out of
		material whose own syntax is already present.
	</p>

	<Ex
		m="kira=an ka apkas=an ka eaykap no cis patek a=ki kor"
		g="flee=4.S even walk=4.S even cannot ADV cry only 4.A=do while"
		tr="Unable to flee or to walk, doing nothing but cry,"
		cite="nakagawa2024:315"
		dial="SAR"
		place="Nakagawa ex. 492"
		note="The light predicate cis patek a=ki 'do only crying' shows ki with an overt event complement; the fourth-person A prefix appears on ki."
	/>

	<Ex
		m="e=itak haw-e ku=nu hi renkayne itasaytak ku=ki kusu ne na"
		g="2SG.S=speak voice-POSS 1SG.A=hear NMLZ following reply 1SG.A=do PURP COP FIN"
		tr="I will listen to what you say and answer accordingly."
		cite="nakagawa2024:435"
		dial="CHI"
		place="Nakagawa ex. 966"
		note="The event nominal itasaytak 'reply' is made predicative by ku=ki and combines with the future-intentional kusu ne; haw-e is glossed as a possessed noun."
	/>

	<p>
		The positive frame <i lang="ain-Latn">V ka ki</i> also belongs here. Nakagawa cites
		<i lang="ain-Latn">ipe ka a=ki</i> and <i lang="ain-Latn">rok=an ka ki</i> in comparing
		post-predicate and preverbal negative patterns, and treats the event before
		<i lang="ain-Latn">ka ki</i> as the complement verbalized by <i lang="ain-Latn">ki</i> <Ref
			k="nakagawa2024"
			p="374"
		/>. These examples license a restricted pro-verb analysis: <i lang="ain-Latn">ki</i> can carry
		the finite morphology for an event already specified by an adjacent complement ‹consensus›. They
		do not demonstrate an unrestricted substitute for a missing verb phrase; broader VP-substitution
		uses would require a separate corpus study ‹corpus-suggested›.
	</p>

	<p>
		The variant <i lang="ain-Latn">iki</i> is clearest in template diagnostics. The plural suffix
		<i lang="ain-Latn">-pa</i> and the outer plural clitic <i lang="ain-Latn">pa</i> form a minimal
		ordering pair with this verb: <i lang="ain-Latn">iki-pa=an</i> has root-bound
		<i lang="ain-Latn">-pa</i> inside the fourth-person subject suffix, while
		<i lang="ain-Latn">iki=an pa</i> has the clitic after the person-inflected word <Ref
			k="nakagawa2024"
			p="156–159"
		/>. That ordering pair shows why support verbs still count as verbs: they take the ordinary
		person and number morphology when they function as the predicate of a clause, even where their
		lexical content is bleached.
	</p>
</S>

<S t="Ki, somo ki, and clause linkage" id="linkage">
	<p>
		A negated action predicate normally links to a following clause with <i lang="ain-Latn">no</i>,
		yielding the common 'without doing X' reading. Nakagawa and Satō state the rule that stative
		predicates and negated action predicates take <i lang="ain-Latn">no</i>, with
		<i lang="ain-Latn">wa</i> excluded from this environment <Ref k="nakagawa2024" p="340–341" />;
		<Ref k="sato2008" p="44–47" />. The result is a three-level stack:
		<i lang="ain-Latn">ki</i> supplies the predicate of the negated clause,
		<i lang="ain-Latn">somo</i> negates it, and <i lang="ain-Latn">no</i> links the whole to the
		following clause.
	</p>

	<Ex
		m="ku=caranke ka somo ki no ku=hosipi"
		g="1SG.S=complain even NEG do ADV 1SG.S=return"
		tr="I went home without complaining."
		cite="sato2008:44"
		dial="SAR"
		note="The negated action predicate is closed by ki before no links it to the following clause. The clause-linkage system is treated in detail in the clause-linkage overview."
	/>

	<p>
		The same architecture appears below formal-noun nominalization and evidential predicates. A
		negated verb phrase can stand inside the proposition headed by the possessed formal noun
		<i lang="ain-Latn">ruwe</i>; <i lang="ain-Latn">ne</i> then predicates the nominalized
		proposition. The negation is internal to the nominalized clause, while the copular evidential
		frame scopes over it <Ref k="nakagawa2024" p="393" />.
	</p>

	<Ex
		m="sinep ka a=isamka ka somo ki ru-we ne kusu"
		g="one even 4.A=lose even NEG do track-POSS COP because"
		tr="Since I did not lose even a single one,"
		cite="nakagawa2024:393"
		dial="SAR"
		note="Nakagawa ex. 779. The negated support frame a=isamka ka somo ki is embedded below ru-we ne; negation falls inside the evidential while the copular frame scopes over the whole proposition. The particle kusu links the evidential frame as a reason clause."
	/>

	<p>
		This ordering is a useful boundary test. In <i lang="ain-Latn">… somo ki ruwe ne</i> the
		proposition is negated and the evidential remains outside the scope of negation. When
		<i lang="ain-Latn">somo</i> falls on the copula of the formal-noun predicate, as in
		<i lang="ain-Latn">ruwe somo ne</i>, the result is a high-scope rhetorical or convictional
		frame, a reading outside ordinary propositional negation <Ref k="nakagawa2024" p="393" />. The
		details of that outer frame are routed to <Xr ch="ruwe-ne-inferential" /> and
		<Xr ch="negation-somo-standard-clausal" />. For the linking inventory see
		<Xr ch="clause-linkage-overview" />.
	</p>
</S>

<S t="Ne as copular support" id="ne-support">
	<p>
		The copula <i lang="ain-Latn">ne</i> is formally transitive in valence classification, yet only
		its subject is indexed. Nakagawa gives <i lang="ain-Latn">okkayo ku=ne</i> 'I am a man' with a
		transitive-type subject prefix and rejects object indexing on the predicate complement <Ref
			k="nakagawa2024"
			p="132"
		/>; Shibatani likewise describes the copula as taking transitive subject morphology <Ref
			k="shibatani1990"
			p="50"
		/>. Satō's three-valency analysis accounts for the pattern by separating the two-place predicate
		relation from indexable macroroles: the predicate nominal is a complement of the copular
		relation, while only the subject is available for person indexing <Ref k="sato2023b" p="52" />
		‹contested›.
	</p>

	<table>
		<thead>
			<tr>
				<th>frame</th>
				<th>shape</th>
				<th>support function of <i lang="ain-Latn">ne</i></th>
				<th>routing</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>predicate nominal</td>
				<td>NP <i lang="ain-Latn">ne</i></td>
				<td>class-membership or identity predicate</td>
				<td><Xr ch="copula-ne-predicate-nominals" /></td>
			</tr>
			<tr>
				<td>clausal nominalization</td>
				<td>[clause] <i lang="ain-Latn">p/pe ne</i></td>
				<td>predicates a nominalized event, fact, or participant</td>
				<td><Xr ch="nominalization-p-pe" /></td>
			</tr>
			<tr>
				<td>formal-noun evidential</td>
				<td>[clause] <i lang="ain-Latn">ruwe/hawe/siri/humi ne</i></td>
				<td>turns a formal-noun nominalization into a clause-final evidential predicate</td>
				<td><Xr ch="ruwe-ne-inferential" /></td>
			</tr>
			<tr>
				<td>copular negation</td>
				<td>NP (<i lang="ain-Latn">ka</i>) <i lang="ain-Latn">somo ne</i></td>
				<td>gives the negated nonverbal predicate a verbal host</td>
				<td><Xr ch="negation-somo-standard-clausal" /></td>
			</tr>
		</tbody>
	</table>

	<Ex
		m="okkayo ku=ne"
		g="man 1SG.A=COP"
		tr="I am a man."
		cite="nakagawa2024:132"
		dial="HK"
		note="Nakagawa ex. 23. The first-person prefix is the transitive-subject form; the predicate nominal okkayo is not indexed as an object."
	/>

	<p>
		Because <i lang="ain-Latn">ne</i> is the ordinary support for predicate nominals, the negative
		frame of copular clauses is <i lang="ain-Latn">NP (ka) somo ne</i>. Satō notes that
		<i lang="ain-Latn">ne ka somo ki</i>, expected if the copula simply fed the ordinary
		<i lang="ain-Latn">somo ki</i> frame, is almost unattested <Ref k="sato2008" p="22" />. The
		copular construction keeps its own negation architecture, detailed in
		<Xr ch="copula-ne-predicate-nominals" /> and <Xr ch="negation-somo-standard-clausal" />.
	</p>

	<p>
		The evidential example below combines both support verbs in a single sentence.
		<i lang="ain-Latn">Ne</i> predicates a zero-place weather verb in the first clause, while
		<i lang="ain-Latn">ki</i> hosts the support negation in the second. The layering makes it a
		useful diagnostic for the whole support system.
	</p>

	<Ex
		m="mean cuk ne pe merayke=an ka somo ki no"
		g="be.cold.weather autumn COP NMLZ feel.cold=4.S even NEG do ADV"
		tr="It was a cold autumn, but I did not feel cold."
		cite="nakagawa2024:127"
		dial="SAR"
		place="Nakagawa ex. 15, after Kayano 1974a"
		note="The first clause uses ne in a predicate-nominal frame over the zero-place weather predicate mean; the second uses the support-verb negation merayke=an ka somo ki closed by no."
	/>
</S>

<S t="An between existential verb and support" id="an-support">
	<p>
		The existential <i lang="ain-Latn">an</i> remains an intransitive verb when it predicates
		existence or location, and it enters support constructions from that source. One pathway is
		lexical compounding into zero-place ambient predicates. Nakagawa derives
		<i lang="ain-Latn">mean</i> 'be cold (weather)' from a non-free root
		<i lang="ain-Latn">me-</i> plus <i lang="ain-Latn">an</i>; such predicates take no person index
		because no subject slot remains <Ref k="nakagawa2024" p="128–129" />. Shibatani analyses these
		as subject-incorporation, and Ijäs teaches them as avalent weather verbs <Ref k="shibatani1990"
			p="33"
		/>; <Ref k="ijas2023" />. Where the first element is a free noun, the boundary is unsettled:
		Ijäs treats <i lang="ain-Latn">apto as</i> 'it rains' as an avalent unit, while Nakagawa leaves
		the analysis open because <i lang="ain-Latn">apto</i> is an autonomous noun ‹contested› <Ref
			k="nakagawa2024"
			p="129–130"
		/>.
	</p>

	<table>
		<thead>
			<tr>
				<th>domain</th>
				<th>zero-place predicate</th>
				<th>subject-taking intransitive counterpart</th>
				<th>diagnostic</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>cold</td>
				<td><i lang="ain-Latn">mean</i></td>
				<td><i lang="ain-Latn">merayke</i></td>
				<td>climate predicate vs. felt temperature</td>
			</tr>
			<tr>
				<td>cool</td>
				<td><i lang="ain-Latn">sirmeman</i></td>
				<td><i lang="ain-Latn">meman</i></td>
				<td>ambient state vs. experiencer state</td>
			</tr>
			<tr>
				<td>warm</td>
				<td><i lang="ain-Latn">sirpopke</i></td>
				<td><i lang="ain-Latn">popke</i></td>
				<td>ambient state vs. experiencer state</td>
			</tr>
			<tr>
				<td>hot</td>
				<td><i lang="ain-Latn">sirsesek</i></td>
				<td><i lang="ain-Latn">sesek</i></td>
				<td>ambient state vs. experiencer state</td>
			</tr>
		</tbody>
	</table>

	<p>
		The v0/vi pairing in this table is directly grounded in Nakagawa's analysis: the
		<i lang="ain-Latn">sir-</i> prefix and the <i lang="ain-Latn">me-</i> root are non-autonomous
		elements that fuse with <i lang="ain-Latn">an</i> into a zero-place compound, whereas the
		felt-temperature verbs take a subject marked by the ordinary S-set <Ref k="nakagawa2024"
			p="127"
		/> ‹consensus›.
	</p>

	<p>
		A second pathway keeps <i lang="ain-Latn">an</i> as an overt support verb. Existential and
		locational clauses are described in <Xr ch="existential-locational-an-oka" />; aspectual frames
		such as <i lang="ain-Latn">kor an</i> and <i lang="ain-Latn">wa an</i> are treated in
		<Xr ch="existential-aspect-an-oka" />. In evidential constructions, the alternation between
		copular <i lang="ain-Latn">ne</i> and existential <i lang="ain-Latn">an</i> contributes to the
		direct/indirect opposition of formal-noun predicates, with <i lang="ain-Latn">siri an</i> and
		related forms routed to the evidential chapters. These support uses preserve the intransitive
		origin of <i lang="ain-Latn">an</i> while extending it into TAM and information-source
		constructions ‹consensus› <Ref k="nakagawa2024" p="390–393, 446–449" />.
	</p>
</S>

<S t="Ijäs and the learner-grammar claims" id="ijas">
	<p>
		Ijäs's treatment foregrounds the learner's problem: Ainu negation and auxiliary-like meanings
		are built with independent verbs, so the person marker stays with the predicate that supplies the
		argument frame. Her rule that <i lang="ain-Latn">somo</i> precedes the verb and cannot split a
		person marker from its stem matches Satō's and Nakagawa's description ‹consensus› <Ref
			k="ijas2023"
		/>; <Ref k="sato2008" p="124" />; <Ref k="nakagawa2024" p="407" />. Her identification of
		<i lang="ain-Latn">ki</i> as a dummy 'do' verb that fills the required verb position because
		<i lang="ain-Latn">somo</i> cannot stand as the predicate of a clause also matches the
		compositional account in Bugaeva and Nakagawa ‹consensus› <Ref k="ijas2023" />; <Ref
			k="bugaeva2012"
			p="496"
		/>; <Ref k="nakagawa2024" p="374" />.
	</p>

	<Ex
		m="niskur an ka somo ki"
		g="cloud exist even NEG do"
		tr="It is not cloudy."
		constructed
		cite="ijas2023"
		note="Ijäs negates the existential niskur an 'there are clouds' with the ka somo ki periphrasis; ki supplies the verb position because somo cannot head a clause on its own. Constructed pedagogical example."
	/>

	<p>
		Two Ijäs claims carry caveats. Her suggestion that postverbal
		<i lang="ain-Latn">ka somo ki</i> reflects Japanese influence on word order is not supported by
		the read Hokkaido grammars and should be attributed to Ijäs alone ‹speculative› <Ref
			k="ijas2023"
		/>; <Ref k="dalcorso2025neg" p="41–42" />. Her presentation of lexical negative verbs as
		blocking <i lang="ain-Latn">somo</i> plus an affirmative counterpart also states a tendency too
		strongly; the primary sources describe lexicalized negative predicates and preferences, while
		coexistence with <i lang="ain-Latn">somo</i> is independently attested in some environments
		‹contested› <Ref k="ijas2023" />.
	</p>
</S>

<S t="Analytical boundaries" id="boundaries">
	<p>
		The support-verb system is outside the verb word proper, whose person indexes, valency prefixes,
		incorporated nouns, and stem-internal suffixes are ordered in <Xr ch="verb-word-template" />.
		Valency-changing derivation — applicative, causative, antipassive — changes the argument frame
		of the lexical stem; <i lang="ain-Latn">ki</i>, <i lang="ain-Latn">ne</i>, and
		<i lang="ain-Latn">an</i> provide a higher predicate host above the already-built stem. The
		lexical semantics of the copula and existential are treated in
		<Xr ch="copula-ne-predicate-nominals" /> and <Xr ch="existential-locational-an-oka" />.
	</p>

	<p>
		The degree of grammaticalization differs across the three verbs.
		<i lang="ain-Latn">Somo ki</i> may be analysed as a compositional support-verb construction or
		as a single auxiliary; <i lang="ain-Latn">kor an</i> and <i lang="ain-Latn">wa an</i> behave
		aspectually while still showing clause-chain morphology; <i lang="ain-Latn">ne</i> is a
		verb-like copula whose object indexing is blocked. These disagreements affect analysis, not the
		descriptive ordering: person-marked lexical predicate first, support predicate above or after it,
		and clause-level operators outside that support layer ‹contested›.
	</p>
</S>
