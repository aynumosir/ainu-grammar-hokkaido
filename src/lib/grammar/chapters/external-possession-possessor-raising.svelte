<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Overview" id="overview">
	<p>
		External possession (EP) refers to a construction in which the possessor of a noun
		appears as a core argument of the main predicate rather than as a modifier inside
		the possessed NP; the possessor is thereby assigned a grammatical function —
		typically subject or object — by the verb rather than by the nominal head
		<Ref k="nichols1986" p="56–70" paren />. Hokkaido Ainu lacks a dative-shift EP
		construction of the type common in European languages ('the wave hit <em>him</em> on
		the shoulder'). The constructions available instead belong to three morphosyntactic
		domains: (1) body-part noun incorporation (NI) that promotes the possessor to
		intransitive-subject position; (2) natural-force NI that promotes the former object
		to intransitive subject; and (3) the applicative prefixes, which raise a possessor
		or beneficiary into direct-object position. No read source applies the term
		"external possession" to Hokkaido Ainu directly; the label "possessor raising"
		(所有者の主語への昇格) enters the literature with <Ref k="sato2016" /> and is
		restated in <Ref k="kobayashi2025" p="166–167, 173–175" /> ‹contested›.
	</p>

	<table>
		<thead>
			<tr>
				<th>mechanism</th>
				<th>result</th>
				<th>primary source</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>body-part NI</td>
				<td>possessor → intransitive subject</td>
				<td>
					<Ref k="kobayashi2025" p="173–175" />; Satō (2012: 8, cited in
					<Ref k="kobayashi2025" p="173" />)
				</td>
			</tr>
			<tr>
				<td>natural-force NI</td>
				<td>patient/object → intransitive subject</td>
				<td><Ref k="kobayashi2025" p="166–167" /></td>
			</tr>
			<tr>
				<td>applicative (<i lang="ain-Latn">ko-</i> / <i lang="ain-Latn">e-</i> /
					<i lang="ain-Latn">o-</i>)</td>
				<td>possessor/beneficiary → object</td>
				<td>
					<Ref k="nakagawa2024" p="189, 424" />; <Ref k="bugaeva2010" p="749–801" />;
					<Ref k="kaiser1998" p="157–178" />
				</td>
			</tr>
			<tr>
				<td>antipassive <i lang="ain-Latn">i-</i> (inverse: possessor suppression)</td>
				<td>unspecified possessor absorbed; bare NI enabled</td>
				<td><Ref k="bugaeva2021poss" p="53–54" /></td>
			</tr>
		</tbody>
	</table>

	<p>
		The constructional background lies in the possession system. Body-part and kinship
		nouns are <Xr ch="nominal-subclasses-and-bound-nouns">obligatorily possessed</Xr>
		and take the <Xr ch="concept-form-affiliative-form">affiliative form</Xr> with the
		A-set person prefix whenever they occur with a specified possessor (see
		<Xr ch="alienable-inalienable-split" />). When such a noun is incorporated into a
		predicate, the possessor — normally indexed on the noun — may migrate to a
		subject or object slot of the derived complex verb.
	</p>
</S>

<S t="Body-part noun incorporation and possessor-to-subject raising" id="body-part-ni">
	<p>
		The most documented EP-equivalent in Hokkaido Ainu arises through body-part NI.
		When a body-part noun in its affiliative (possessed) form is incorporated into an
		intransitive verb, the resulting stem loses the person prefix on the noun; that
		person — the possessor — resurfaces as the intransitive subject of the derived verb
		<Ref k="kobayashi2025" p="173" />. The derivational contrast is between the base
		clause, where the body-part affiliative carries an overt person prefix, and the
		incorporated clause, where the possessor appears only as the verb's subject suffix.
	</p>

	<Ex
		m="ku=kema-ha ka arka"
		g="1SG.POSS=foot-POSS even hurt"
		tr="My foot hurts, too."
		cite="utari1994"
		dial="HK"
		place="アコㇿイタㇰ Ch. 5, no. 8"
		note="Body-part affiliative kemaha (①-type: kema + -ha) as free clause argument of the intransitive predicate arka 'hurt'. The person prefix ku= marks the possessor on the noun directly — the base construction that feeds body-part NI."
	/>

	<p>
		After NI, the possessor prefix detaches from the body-part noun and surfaces instead
		as the subject suffix of the complex predicate. Satō (2012: 8, cited in
		<Ref k="kobayashi2025" p="173" />) and <Ref k="kobayashi2025" p="173" /> give the
		following contrast:
	</p>

	<Ex
		m="tek-e-pase=an"
		g="hand-POSS-be.heavy=4.S"
		tr="We became infirm in our hands."
		lit="hand-heavy we-became"
		cite="kobayashi2025:173"
		dial="CHI"
		note="The body-part tek 'hand' takes its short affiliative suffix -e (type ③-2: tek→teke) and is incorporated into pase 'be heavy'. The 4th-person intransitive subject =an surfaces as the subject of the derived verb, not as a prefix on the body-part noun. The reading is 'our/the-relevant-persons' hands became heavy/infirm': possessor raised to subject."
	/>

	<p>
		<Ref k="kobayashi2025" p="173" /> characterises the promoting force as the higher
		discourse salience of the possessor relative to the body part, citing Satō's
		observation that "body-part nouns are prone to backgrounding because the possessor
		is felt to be more salient" (Satō 2012: 20–21, as quoted in
		<Ref k="kobayashi2025" p="173" />). This promoting force is NI-internal rather
		than a separate syntactic operation. The construction overlaps with the
		possessor-stranding cases treated in
		<Xr ch="noun-incorporation-subject-possessor-stranding" />, where the possessor NP
		remains in the clause while the body-part noun is incorporated.
	</p>
</S>

<S t="Natural-force noun incorporation and object-to-subject promotion" id="natural-force-ni">
	<p>
		A second incorporation pathway produces an unaccusative from a transitive by
		incorporating the natural-force subject (wave, wind, current) of the base verb.
		Once incorporated, the natural force no longer occupies the subject position; the
		base object is promoted to intransitive subject of the derived verb
		<Ref k="kobayashi2025" p="166–167" />.
	</p>

	<Ex
		m="ku=koy-yanke"
		g="1SG.S=wave-lift"
		tr="The wave lifted me."
		lit="I wave-got-lifted"
		cite="kobayashi2025:167"
		dial="CHI"
		note="Base transitive: koy (wave, A) yanke (lift) en= (me, O). After koy is incorporated, en= is promoted to intransitive subject; the 1SG.S form ku= surfaces on the derived unaccusative koy-yanke. Satō (2012: 8, cited in Kobayashi 2025: 167)."
	/>

	<Ex
		m="konam rera-paru"
		g="leaf wind-blow"
		tr="The leaf is blown by the wind."
		cite="kobayashi2025:174"
		dial="CHI"
		note="Kobayashi 2025: ex. 4. rera 'wind' is incorporated into paru 'blow/fan'; the former object konam 'leaf' surfaces as the 3rd-person (zero) intransitive subject of the derived unaccusative rera-paru."
	/>

	<p>
		<Ref k="kobayashi2025" p="175–176" /> shows that the derived unaccusatives from
		natural-force NI feed the affiliative-type prefixes <i lang="ain-Latn">e-</i> and
		<i lang="ain-Latn">o-</i> (treated in the following section), because those
		prefixes select exclusively for unaccusative hosts. The two NI sub-types are
		therefore connected: body-part NI makes the erstwhile possessor the subject of a
		new intransitive; natural-force NI makes the erstwhile patient the subject of a
		new unaccusative that can undergo further derivation ‹corpus-confirmed›.
	</p>
</S>

<S t="Affiliative-type prefixes e- and o-" id="affiliative-type">
	<p>
		Alongside the full applicative system, <Ref k="kobayashi2025" p="171" /> identifies
		a set of <em>affiliative-type prefixes</em> (所属形的接頭辞):
		<A w="e-" gl="its tip/head of —" /> and <A w="o-" gl="its base/tail-end of —" />.
		These prefixes attach to a verb and function like the affiliative form of a possessed
		noun: they presuppose a contextual possessor without altering the verb's valence
		(valence impact: [0]). The following forms are documented in
		<Ref k="kobayashi2025" p="171" />:
	</p>

	<table>
		<thead>
			<tr>
				<th>prefixed form</th>
				<th>base verb</th>
				<th>reading</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">e-kay</i></td>
				<td><i lang="ain-Latn">kay</i> 'break'</td>
				<td>'its tip is broken'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">e-en</i></td>
				<td><i lang="ain-Latn">en</i> 'be pointed'</td>
				<td>'its tip is pointed'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">o-asin</i></td>
				<td><i lang="ain-Latn">asin</i> 'go out'</td>
				<td>'it slips out (from the end)'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">o-uhuy</i></td>
				<td><i lang="ain-Latn">uhuy</i> 'burn'</td>
				<td>'its end is scorched'</td>
			</tr>
		</tbody>
	</table>

	<p>
		Crucially, <i lang="ain-Latn">e-</i> and <i lang="ain-Latn">o-</i> in this
		function attach only to unaccusative intransitives — verbs whose sole argument
		is a theme or patient — not to unergatives (agent-subject intransitives)
		<Ref k="kobayashi2025" p="171" /> ‹corpus-confirmed›. This selectional
		restriction links the affiliative-type prefix to natural-force NI: a transitive
		that undergoes natural-force NI becomes unaccusative and can then receive
		<i lang="ain-Latn">e-/o-</i>.
	</p>

	<p>
		The strings <i lang="ain-Latn">e-</i> and <i lang="ain-Latn">o-</i> are
		homophonous with the <Xr ch="applicative-e">e- applicative</Xr> and the
		<Xr ch="applicative-o">o- applicative</Xr>, which increase arity by one. The two
		uses are synchronically distinct in valence behaviour — the applicative adds an
		argument; the affiliative-type prefix does not — but this distinction requires
		verb-by-verb analysis and is not always surface-transparent
		<Ref k="kobayashi2025" p="167" /> ‹contested›. The diagnostics for disambiguation
		are set out in <Xr ch="applicative-e" /> and <Xr ch="applicative-o" />.
	</p>
</S>

<S t="The applicative route to external possession" id="applicative">
	<p>
		The applicative prefixes <A w="ko-" />, <A w="e-" />, and <A w="o-" /> each
		increase a verb's arity by one, promoting a peripheral participant — possessor,
		beneficiary, goal, or source — into the direct-object position
		<Ref k="nakagawa2024" p="189, 424" />; <Ref k="bugaeva2006" p="813" />;
		<Ref k="bugaeva2010" p="749–751" />. When the promoted participant is the possessor
		of an NP already present in the clause, the result is a construction in which the
		possessor occupies object position rather than sitting inside the possessed NP — the
		closest Ainu structural equivalent of dative EP.
	</p>

	<p>
		<Ref k="kaiser1998" p="157–158" /> analyses a subset of these configurations as
		the interaction of NI with applicative formation: a body-part noun is incorporated
		while the applicative slot is filled by the body-part's possessor, yielding a
		complex predicate in which the possessor is the new object. Hokkaido Ainu tolerates
		such NI-plus-applicative stacks; their ordering and feeding relations are treated in
		<Xr ch="applicative-stacking-relativization-feeding" />. In
		<Ref k="bugaeva2010" p="756–760" />'s typological survey (within the framework of
		<Ref k="peterson2007" paren />), the <i lang="ain-Latn">ko-</i> applicative is the
		primary beneficiary/possessor-promotion prefix; <i lang="ain-Latn">e-</i> adds a
		locative or goal; <i lang="ain-Latn">o-</i> adds a source or endpoint. The
		per-applicative EP readings are documented in <Xr ch="applicative-ko" />,
		<Xr ch="applicative-e" />, and <Xr ch="applicative-o" />, with the system-level
		typological placement in <Xr ch="applicative-system-overview" />.
	</p>
</S>

<S t="The antipassive i- as a possessor-suppressor" id="antipassive-i">
	<p>
		When the possessor of an obligatorily possessed body-part or kinship noun is absent
		or non-coreferential with any clause argument, Hokkaido Ainu offers two morphological
		strategies <Ref k="bugaeva2021poss" p="53–54" />. The first is the fourth-person
		(indefinite) A-prefix <A w="a=" gl="4.A / unspecified possessor" />, which keeps
		the noun in its full affiliative form and indexes an unspecified possessor
		(<i lang="ain-Latn">a=tekehe</i> 'someone's hand'). The second is the derivational
		antipassive prefix <A w="i-" gl="antipassive / NPN-marker" />, which enables the
		body-part noun to be incorporated without possessive morphology — functioning as a
		non-possessed-noun (NPN) marker, comparable in function to a nominal absolutive
		<Ref k="bugaeva2021poss" p="53–54, 81" />; <Ref k="nam2021" p="62–74" />.
	</p>

	<Ex
		m="i-sapa-kar usi"
		g="ANTIP-head-do place"
		tr="a barber shop"
		lit="a place where one does someone's head"
		cite="tamura1996:247"
		dial="SAR"
		note="Tamura (1996: 247), cited in Bugaeva et al. (2021: 53, ex. 16). The antipassive i- absorbs the possessor of sapa 'head', allowing bare incorporation without a person prefix on the noun. The possessor is unspecified and non-coreferential with any surface argument."
	/>

	<Ex
		m="i-rekut-tuye"
		g="ANTIP-throat-cut"
		tr="(someone) cuts a/someone's throat"
		cite="bugaeva2021poss:53"
		dial="HK"
		note="Bugaeva et al. (2021: 53, ex. 17), citing Okuda (1999). The possessor of rekut 'throat' is unspecified; i- licenses possessor-free incorporation of the body-part noun into the transitive tuye 'cut'."
	/>

	<p>
		The two strategies differ in what they encode about the possessor. The
		<i lang="ain-Latn">a=</i> strategy retains affiliative morphology and implies a
		vague but retrievable possessor; <i lang="ain-Latn">i-</i> suppresses the possessor
		argument entirely, producing what <Ref k="bugaeva2021poss" p="81" /> terms a
		non-possessible reading of the incorporated noun. In EP terms,
		<i lang="ain-Latn">i-</i> is the inverse operation to possessor-raising: it removes
		the possessor from the noun's argument frame rather than promoting it to clause
		level, enabling fully possessor-free NI. For the broader function of
		<i lang="ain-Latn">i-</i> as antipassive and detransitiviser, see
		<Xr ch="antipassive-detransitive-i" />. A related use of
		<i lang="ain-Latn">i=</i> as the fourth-person object clitic — homophonous with
		the antipassive prefix but distinct in status — is documented in
		<Xr ch="person-marking-architecture" />.
	</p>
</S>

<S t="Competing analyses" id="debate">
	<p>
		The three mechanisms surveyed above have been described in distinct analytical
		vocabularies, and the descriptive literature does not converge on a unified
		formal account of "external possession" in Ainu.
	</p>

	<p>
		<Ref k="kobayashi2025" p="173–175" />, following <Ref k="sato2016" />, treats
		body-part NI possessor-raising as an NI-internal process: the incorporated noun's
		possessor is promoted to clause subject by virtue of the body-part's relative
		discourse-salience deficit, and the result is an unaccusative predicate. This
		account is accurate at the descriptive level but does not determine whether the
		promotion is syntactic movement or base-generation of the subject.
		<Ref k="bugaeva2021poss" p="53–54" /> approaches the same facts through the
		lens of obligatory possession and argument structure: the inalienable body-part
		noun requires a possessor as its argument, and when that possessor is suppressed
		(by <i lang="ain-Latn">i-</i>) or left unspecified (by <i lang="ain-Latn">a=</i>),
		the possessor slot is de-activated rather than raised. She does not frame the
		resulting construction as possessor-raising. The applicative account in
		<Ref k="kaiser1998" /> treats the EP reading as the product of the applicative
		operation alone, with NI as an independent feeding process ‹contested›.
	</p>

	<p>
		Whether these three routes — body-part NI promotion, natural-force NI promotion,
		and applicative object-promotion — constitute instances of a unified Ainu EP
		construction, or three typologically distinct processes that happen to yield
		similar interpretations, has not been resolved in the accessible literature
		‹contested›. Placing the Ainu facts within <Ref k="mithun1984" p="863–866" />'s
		typology of NI types, body-part incorporation with possessor promotion would fall
		at the boundary between Type II (lexical-level compounding) and Type III
		(manipulation of discourse referents), but assigning the Ainu data precisely
		requires corpus evidence on whether an independent possessor NP can co-occur with
		the incorporated body-part noun — a question the read sources leave open
		‹speculative›. The natural-force and applicative mechanisms sit closer to Type I
		(simple argument reduction) and to applicative constructions respectively; their
		co-existence in a polysynthetic head-marking language
		<Ref k="nichols1986" paren /> is typologically expected
		<Ref k="bugaeva2021poss" p="80–82" />.
	</p>
</S>
