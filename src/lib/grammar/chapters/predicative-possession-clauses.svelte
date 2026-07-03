<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Overview" id="overview">
	<p>
		Hokkaido Ainu encodes predicative possession — 'X has Y' at the clause level — through two
		verb-based strategies. The dominant one deploys the transitive verb <A w="kor" gl="have, hold" />,
		which takes the possessor as its subject (A argument) and the possessed entity as its object:
		<i lang="ain-Latn">kasa ku=kor</i> 'I have an umbrella'. The second strategy, confined to a
		closed class of affiliative body-part and kinship nouns, places the possessed noun in its
		<Xr ch="concept-form-affiliative-form">affiliative (possessed) form</Xr> and predicates it with
		the intransitive existential verb <A w="an" gl="exist" /> (singular) or
		<A w="okay" gl="exist (plural)" /> (plural): <i lang="ain-Latn">a=yup-i an</i> 'one has an elder
		brother'. A third pattern, <i lang="ain-Latn">kor wa an</i>, combines possession with the
		resultative auxiliary to encode stative or resultant possession; it belongs to the intersection
		of predicative possession and the aspect system treated in <Xr ch="existential-aspect-an-oka" />.
	</p>
	<p>
		Adnominal possession — the <i lang="ain-Latn">ku=kor cise</i> genitive-like construction, the
		affiliative double-marking pattern, and the appositive construction — is covered in
		<Xr ch="adnominal-possession-double-marking" /> and <Xr ch="alienable-inalienable-split" />; the
		present chapter treats only predicative (clause-final, copula-free) possession constructions.
		Typologically, the two-strategy system places Hokkaido Ainu in the mixed HAVE/BE category of
		<Ref k="stassen1997" paren />: the HAVE strategy with a dedicated transitive verb covers the
		great majority of cases, while the BE strategy — here the existential <i lang="ain-Latn">an</i>
		— is confined to the inalienable domain ‹corpus-suggested›. Huber's corpus study finds that over
		80% of predicative possession clauses employ the HAVE-type construction <Ref k="huber2025" p="254" />.
		The pedagogical grammar of <Ref k="ijas2023" /> likewise introduces
		<i lang="ain-Latn">kor</i> as the canonical possession verb.
	</p>
</S>

<S t="The HAVE-construction: transitive kor" id="have-kor">
	<p>
		The verb <A w="kor" gl="have, hold" /> is a two-place transitive verb (2項動詞) with the
		possessor as its A argument and the possessed entity as its O argument
		<Ref k="refsing1986" p="160–161" />. It takes the standard S/A/O personal-affix paradigm
		described in <Xr ch="person-marking-architecture" />: the possessor is indexed by the
		A-series (transitive subject) prefixes, while a third-person possessed noun carries no person
		index. Refsing analyses <i lang="ain-Latn">kor</i> as an "attributive postposition" when it
		appears inside a noun phrase (<i lang="ain-Latn">ku=kor cise</i> 'my house') and as a
		predicative verb when it closes a clause <Ref k="refsing1986" p="160–161" />; Nakagawa treats
		both uses as the same transitive verb <Ref k="nakagawa2024" p="§4.2.2" />.
	</p>

	<Ex
		m="kasa ku=kor"
		g="umbrella 1SG.A=have"
		tr="I have an umbrella."
		cite="refsing1986:160–161"
		dial="SHI"
		note="Canonical HAVE-type predicative possession. Community discussion confirms the same form for Saru: kasa kor 'hold an umbrella', first-person kasa ku=kor (nukopoli, aynu-corpora Discord 2025-12-31; Ref aynucorporadiscord)."
	/>

	<p>
		One caution on homonymy: <i lang="ain-Latn">kor</i> also functions as the conjunctive particle
		'while', marking simultaneous or background events in a clause chain. The two uses are
		distinguished by their syntactic position — predicative <i lang="ain-Latn">kor</i> is
		clause-final, conjunctive <i lang="ain-Latn">kor</i> occurs between two verbal clauses — and
		are treated separately in <Xr ch="simultaneous-kor-clauses" />. The corpus rank-5 frequency of
		30,389 tokens for <i lang="ain-Latn">kor</i> folds both functions together ‹corpus-suggested›.
	</p>

	<S t="Person marking on predicative kor" id="kor-paradigm">
		<p>
			As a transitive verb, <i lang="ain-Latn">kor</i> takes the A-series prefix for the possessor
			and no prefix for a third-person possessed NP. The table shows the possessor-A cells for the
			standard Saru–Chitose baseline <Ref k="nakagawa2024" p="165–169" />; the 1SG cell is attested,
			the remaining cells are illustrative (constructed from the paradigm):
		</p>

		<table>
			<thead>
				<tr>
					<th>possessor (A)</th>
					<th>prefix</th>
					<th>example</th>
					<th>translation</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1SG</td>
					<td><i lang="ain-Latn">ku=</i></td>
					<td><i lang="ain-Latn">kasa ku=kor</i></td>
					<td>'I have an umbrella' (attested)</td>
				</tr>
				<tr>
					<td>2SG</td>
					<td><i lang="ain-Latn">e=</i></td>
					<td><i lang="ain-Latn">kasa e=kor</i></td>
					<td>'you (sg) have an umbrella'</td>
				</tr>
				<tr>
					<td>3</td>
					<td>Ø</td>
					<td><i lang="ain-Latn">kasa kor</i></td>
					<td>'he / she / it has an umbrella'</td>
				</tr>
				<tr>
					<td>4 / INDEF</td>
					<td><i lang="ain-Latn">a=</i></td>
					<td><i lang="ain-Latn">kasa a=kor</i></td>
					<td>'one has an umbrella'</td>
				</tr>
				<tr>
					<td>1PL.EXCL</td>
					<td><i lang="ain-Latn">ci=</i></td>
					<td><i lang="ain-Latn">kasa ci=kor</i></td>
					<td>'we (excl.) have an umbrella'</td>
				</tr>
			</tbody>
		</table>

		<p>
			The 1SG prefix <i lang="ain-Latn">ku=</i> and the 2SG prefix <i lang="ain-Latn">e=</i> are
			the same A-series forms they carry on any transitive verb. The 1PL.EXCL prefix
			<i lang="ain-Latn">ci=</i> is the standard tripartite-cell A form. In adnominal use the same
			prefixes appear within the noun phrase: <i lang="ain-Latn">a=kor kamuy</i> 'the god who holds
			the sea' (cf. <Xr ch="adnominal-possession-double-marking" />).
		</p>
	</S>

	<S t="The animacy restriction on kor" id="kor-animacy">
		<p>
			No published primary source states a categorical animacy ban on <i lang="ain-Latn">kor</i>,
			but community intuition reported in discussion (nukopoli,
			<Ref k="aynucorporadiscord" />, 2024-11-10) holds that an inanimate subject cannot serve as
			the possessor of <i lang="ain-Latn">kor</i>: 'a religion has three books' is judged
			ungrammatical with <i lang="ain-Latn">kor</i> and is instead paraphrased with the existential
			— <i lang="ain-Latn">… sekor a=ye re kampisos an</i> 'there exist three books called …'. This
			pattern is consistent with the cross-linguistic HAVE(animate)/BE(existential) split documented
			by <Ref k="stassen1997" paren /> and with Huber's finding that inanimate-possession contexts
			shift toward the existential strategy <Ref k="huber2025" paren /> ‹contested›.
		</p>
	</S>
</S>

<S t="BE-type: existential possession with affiliative nouns" id="be-possession">
	<p>
		A second strategy is restricted to nouns that carry an
		<Xr ch="concept-form-affiliative-form">affiliative (possessed) form</Xr> — primarily body-part
		and kinship nouns. The possessed noun appears in its affiliative form (root plus suffix
		<i lang="ain-Latn">-i</i>, <i lang="ain-Latn">-he</i>, <i lang="ain-Latn">-ke</i>, etc.),
		and the possessor is encoded by the appropriate person prefix on that noun itself. The predicate
		is then the intransitive existential verb <A w="an" gl="exist" /> (singular) or
		<A w="okay" gl="exist (plural)" /> (plural), making the literal structure 'one's X exists'
		<Ref k="huber2025" p="251–253" />:
	</p>

	<Ex
		m="a=yup-i an"
		g="4.POSS=elder.brother-POSS exist"
		tr="One has an elder brother."
		cite="huber2025:251–253"
		dial="HK"
		note="Story-opening family introduction. The noun yupi 'elder brother' takes the affiliative suffix -i; the 4th-person possessive prefix a= on the noun encodes the story protagonist as possessor."
	/>

	<Ex
		m="a=sa-ha an"
		g="4.POSS=younger.sister-POSS exist"
		tr="One has a younger sister."
		cite="huber2025:251–253"
		dial="HK"
		note="Parallel BE-type form; sa 'younger sister' takes the affiliative suffix -ha."
	/>

	<Ex
		m="a=po-ho ka an"
		g="4.POSS=child-POSS even exist"
		tr="One even has a son / child."
		cite="huber2025:251–253"
		dial="HK"
		note="ka 'even' is the additive focus particle. The noun po 'child, son' takes the affiliative suffix -ho."
	/>

	<p>
		This is the same existential <i lang="ain-Latn">an</i> that appears in bare existential and
		locational clauses (see <Xr ch="existential-locational-an-oka" />), here pressed into possessive
		service by the inherent person prefix on the possessed noun itself. Because the possessor is
		already encoded on the noun, no additional verbal person marking is needed: the construction is
		entirely intransitive from the verb's perspective. The number suppletion
		<i lang="ain-Latn">an</i> (sg) / <i lang="ain-Latn">okay</i>~<i lang="ain-Latn">oka</i> (pl)
		tracks the number of the possessed entity, following the same agreement pattern as in all other
		existential clauses <Ref k="nakagawa2024" p="146" />. The kinship and honorific dimensions of
		this construction — including which kin terms carry affiliative forms — are developed in
		<Xr ch="kinship-honorific-possession" />; the morphophonology of the affiliative suffix itself
		is in <Xr ch="affiliative-suffix-morphophonology" />.
	</p>
</S>

<S t="Stative possession: kor wa an" id="kor-wa-an">
	<p>
		The periphrasis <i lang="ain-Latn">kor wa an</i> — possessive verb <i lang="ain-Latn">kor</i>
		+ conjunctive <i lang="ain-Latn">wa</i> + existential <i lang="ain-Latn">an</i> — encodes
		stative or resultant possession: the possessor is in a persisting state of holding something as
		the result of a prior obtaining event. This pattern is an instance of the wider resultative
		<i lang="ain-Latn">V wa an</i> construction analysed in <Xr ch="existential-aspect-an-oka" />;
		in the possession domain it specifies that a possession relation has been established and
		continues to hold.
	</p>
	<p>
		The pattern extends to incorporated nominals, where a body-part or object noun is fused into
		<i lang="ain-Latn">kor</i> as a compound before the resultative tail:
	</p>

	<Ex
		m="ramat-kor wa an"
		g="soul-have CONJ exist"
		tr="having gained a soul; being in possession of a soul"
		cite="ilcaa1976"
		dial="SAR"
		place="川上まつ子, AA研アイヌ語資料 民話21 [aa-irc/021#530]"
		note="Noun incorporation: ramat 'soul' incorporated into kor yields the compound ramatkor 'soul-have'. The wa an resultative marks the ongoing state of being ensouled."
	/>

	<p>
		The same frame with the 4th-person intransitive suffix
		<i lang="ain-Latn">=an</i> — <i lang="ain-Latn">a=kohon-kor wa an=an</i> 'was pregnant with
		(lit. hold-belly-have, one-exists)' <Ref k="ilcaa1976" /> (川上まつ子, 民話23
		[aa-irc/023#74]) — shows noun incorporation, possessive predication, resultative aspect, and
		4th-person marking interacting in a single verb complex. The incorporation and valency dimensions
		are treated in <Xr ch="noun-incorporation-subject-possessor-stranding" />.
	</p>
</S>

<S t="Negation of possession" id="negation-possession">
	<p>
		The two possession strategies negate by different means, each recruiting a suppletive lexical
		negative rather than ordinary clausal negation <Ref k="bugaeva2012" p="496" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>possession type</th>
				<th>positive predicate</th>
				<th>primary negation</th>
				<th>secondary negation</th>
				<th>source</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>HAVE-type</td>
				<td><i lang="ain-Latn">kor</i> (vt)</td>
				<td>
					<i lang="ain-Latn">sak</i> (vt) 'lack' — suppletive
				</td>
				<td><i lang="ain-Latn">somo kor</i> — clausal</td>
				<td>Nakagawa 2024: 323; Bugaeva 2012: 496</td>
			</tr>
			<tr>
				<td>BE-type</td>
				<td><i lang="ain-Latn">an</i> / <i lang="ain-Latn">okay</i> (vi)</td>
				<td>
					<i lang="ain-Latn">isam</i> (vi) 'not exist' — suppletive
				</td>
				<td>—</td>
				<td>Bugaeva 2012: 496</td>
			</tr>
		</tbody>
	</table>

	<p>
		For the HAVE-type, the transitive verb <A w="sak" gl="lack, be without" /> takes the same
		A/O argument frame as <i lang="ain-Latn">kor</i>: the possessor is the subject and the lacked
		entity is the object <Ref k="bugaeva2012" p="496" />. Ordinary clausal negation
		<i lang="ain-Latn">somo kor</i> is also possible but less frequent than the suppletive
		<i lang="ain-Latn">sak</i> <Ref k="nakagawa2024" p="323" /> (see
		<Xr ch="negation-somo-standard-clausal" />):
	</p>

	<Ex
		m="tamasay ka sak"
		g="necklace even lack"
		tr="(one) has no necklace even"
		cite="nakagawa2024:323"
		dial="HK"
		note="The transitive sak 'lack' is the suppletive negative of kor; tamasay 'necklace' is the object (lacked possession) and the possessor is third-person (zero-marked A)."
	/>

	<Ex
		m="ona sak pe"
		g="father lack NMLZ"
		tr="one who has no father"
		cite="bugaeva2012:496"
		dial="HK"
		note="Nominalized negative-possession clause. sak is transitive: ona 'father' is the O argument, and the possessor is third-person (zero). pe nominalizes the whole clause."
	/>

	<p>
		For the BE-type, the negative existential <A w="isam" gl="not exist, be absent" /> — the
		suppletive lexical negative of <i lang="ain-Latn">an</i>/<i lang="ain-Latn">okay</i> — follows
		directly from the structure: if the possessed noun in affiliative form fails to exist, the
		possessor lacks it. The possessive reading ('has no X') is thus the automatic negative of
		'X exists (as one's possession)'. The full description of <i lang="ain-Latn">isam</i> is in
		<Xr ch="negation-existential-possessive-isam" />.
	</p>
	<p>
		The asymmetry — both possession strategies using suppletive, lexical negatives rather than the
		plain <i lang="ain-Latn">somo</i> operator — parallels the negation of the copula
		(<i lang="ain-Latn">ka somo ne</i>) and of the existential (<i lang="ain-Latn">isam</i>)
		documented in <Xr ch="nonverbal-predicate-tam-negation" />. The interaction of these negators
		with TAM, evidential tails, and scope is treated there.
	</p>
</S>

<S t="Division of labour and diachrony" id="division-diachrony">
	<p>
		The choice between HAVE-type and BE-type tracks the semantic relationship between possessor and
		possessed. Alienable possession — objects, tools, animals, goods — takes <i lang="ain-Latn">kor</i>
		exclusively. Inalienable possession, where the possessed entity (body part or kinship relation)
		is inherently indexed to a possessor through the affiliative morphology, admits the BE-type
		construction in addition to <i lang="ain-Latn">kor</i>
		<Ref k="huber2025" p="251–254" />; <Ref k="refsing1986" p="160–161" />. The BE-type is further
		restricted to those inalienable nouns that actually carry an affiliative suffix form (see
		<Xr ch="nominal-subclasses-and-bound-nouns" /> and <Xr ch="alienable-inalienable-split" /> for
		the full taxonomy).
	</p>
	<p>
		Typologically, this profile maps onto the mixed HAVE/BE type in <Ref k="stassen1997" paren />:
		a language with a dedicated transitive HAVE verb as the default and an existential BE construction
		for inalienable possession. The inalienable-domain restriction of the BE type is expected under
		the cross-linguistic generalisation that languages permitting both strategies tend to use the
		existential for possession relations that are encoded also in the morphology of the possessed
		noun itself ‹consensus›.
	</p>
	<p>
		A diachronic note: an early modern source (もしほ草, ca. 1806) records possessive expressions
		where <i lang="ain-Latn">kor</i> is absent and the possessor is instead encoded by a person
		prefix on an existential verb — <i lang="ain-Latn">ci=oro okay kotan</i> 'our village' (lit.
		'our-in existing village'), <i lang="ain-Latn">ci=okay cas</i> 'our castle' — suggesting that
		<i lang="ain-Latn">kor</i> had not yet grammaticalized as the dominant possessive predicate in
		that textual register. This may reflect an earlier stage in which various existential strategies
		were available before <i lang="ain-Latn">kor</i> extended its possessive scope
		<Ref k="aynucorporadiscord" /> (nukopoli, aynu-corpora Discord 2024-11-23) ‹speculative›. The
		current dominance of <i lang="ain-Latn">kor</i> (>80% of predicative possession in Huber's
		data <Ref k="huber2025" p="254" />) would then represent the outcome of that grammaticalization
		trajectory, though the textual evidence is thin and the comparison of registers is uncontrolled.
	</p>
</S>
