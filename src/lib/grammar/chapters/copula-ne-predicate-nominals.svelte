<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Overview" id="overview">
	<p>
		<A w="ne" gl="be, become (copula)" /> ranks as the second most frequent token in the Hokkaido
		corpus of nearly 1.6 million running words, behind only the existential
		<A w="an" gl="exist, be (located)" />
		<Ref k="nakagawa2024" p="§4.2.2" />. The count conflates several homophones — the predicate-nominal
		copula, a mutative case postposition, and anaphoric/interrogative roots — but the copular use
		accounts for a substantial share. Predicate-nominal clauses are accordingly among the most
		pervasive structures in the language.
	</p>
	<p>
		When the predicate of a finite clause is a noun phrase, the copula
		<i lang="ain-Latn">ne</i> must appear after it. Without <i lang="ain-Latn">ne</i>, a sequence
		of two noun phrases does not constitute a grammatical clause; the element occupying the
		predicate position in Ainu is always a verbal head
		<Ref k="nakagawa2022pos" p="474" />. This sets the construction apart from the other two
		major non-dynamic predicate types: the <Xr ch="existential-locational-an-oka">existential
		<i lang="ain-Latn">an</i> / <i lang="ain-Latn">oka(y)</i></Xr>, which handle existential and
		locational predication, and the
		<Xr ch="property-concept-predication">property-concept verbs</Xr> (<i lang="ain-Latn">pirka</i>
		'be good', <i lang="ain-Latn">poro</i> 'be big'), which predicate directly without any copula.
		The distribution is determined by argument structure: <i lang="ain-Latn">ne</i> is required
		when and only when the predicate is a nominal
		<Ref k="sato2008" p="20–21" />; <Ref k="refsing1986" p="145" />. Ijäs's pedagogical grammar
		covers the copula in its treatment of basic clause types <Ref k="ijas2023" />.
	</p>
</S>

<S t="Clause template" id="clause-template">
	<p>
		The predicate-nominal clause has the shape
		<strong>[Subject] [Complement-NP] <i lang="ain-Latn">ne</i></strong>. The complement takes
		no case marker and immediately precedes the copula. Satō isolates the three-constituent
		structure as 主語 + 補語 + 指定詞 <i lang="ain-Latn">ne</i>
		<Ref k="sato2008" p="20" />:
	</p>

	<Ex
		m="toan kur arikinne wen pe ne"
		g="that person very bad thing COP"
		tr="That person is a very bad one."
		cite="sato2008:20"
		dial="SAR"
	/>

	<p>
		The complement may be a bare noun, a noun modified by an adnominalised verb, or itself a
		nominalised clause <Ref k="refsing1986" p="145, 272" />. Refsing states that
		<i lang="ain-Latn">ne</i> "cannot form a sentence by itself" and "always needs a nominal
		complement" <Ref k="refsing1986" p="272" />. Nakagawa's constituent parse of a copular
		sentence — <i lang="ain-Latn">[Adverbial][Complement-NP][ne VP][ruwe ne clause-final]</i> —
		confirms that the copula heads the verb phrase with everything to its left serving as
		complement or adverbial <Ref k="nakagawa2024" p="361" />.
	</p>
</S>

<S t="Person marking and verbal status" id="verbal-status">
	<p>
		<i lang="ain-Latn">ne</i> takes the transitive-subject (A) person affixes and never the
		object (O) affixes. The three primary sources state the same morphological fact in different
		analytical terms. Nakagawa classes it as a 2-place verb (2項動詞), sub-typed コピュラ
		<Ref k="nakagawa2024" p="132" />. Satō treats it as a distinct subclass 指定詞 (designative),
		separated from ordinary transitives because it inflects and negates differently
		<Ref k="sato2008" p="21" />. Shibatani characterises it as taking "the same personal affixes
		as do transitive verbs" on the grounds that it requires a complement to be semantically
		complete <Ref k="shibatani1990" p="19" />. Refsing and Tamura file it as a fourth verbal
		subclass, the copula <Ref k="refsing1986" p="145" />. For the earlier tradition, Kindaichi
		called it an "incomplete intransitive" glossed 'become', and neither Kindaichi nor Chiri
		applied the concept of copula to it — Tamura first identified it as such, as Refsing
		documents <Ref k="refsing1986" p="145" />; <Ref k="kindaichi1936" /> ‹contested›. All
		analyses agree on the morphological reflex: the 1SG prefix on
		<i lang="ain-Latn">ne</i> is <i lang="ain-Latn">ku=</i> (A set), not
		<i lang="ain-Latn">en=</i> (O set).
	</p>

	<Ex
		m="aynu ku=ne"
		g="Ainu 1SG.A=COP"
		tr="I am (an) Ainu."
		cite="nakagawa2024:132"
		dial="SAR"
	/>

	<p>
		Nakagawa's minimal pair establishes the constraint directly.
		<i lang="ain-Latn">okkayo ku=ne</i> 'I am a man' is grammatical; the restructured
		<i lang="ain-Latn">*tanpe kar pe en=ne</i>, which places the object prefix
		<i lang="ain-Latn">en=</i> on the copula, is ungrammatical. The intended reading ('it is
		me who made this') requires a different clause: <i lang="ain-Latn">kani tanpe ku=kar</i>
		<Ref k="nakagawa2024" p="132" />. The complement noun phrase receives no person prefix;
		only the subject position does. The person paradigm is set out in
		<Xr ch="person-marking-architecture" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>person (Saru/Chitose)</th>
				<th>prefix on <i lang="ain-Latn">ne</i></th>
				<th>attested form</th>
				<th>source</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1SG</td>
				<td><i lang="ain-Latn">ku=</i></td>
				<td><i lang="ain-Latn">aynu ku=ne</i> 'I am an Ainu'</td>
				<td><Ref k="nakagawa2024" p="132" /></td>
			</tr>
			<tr>
				<td>2SG</td>
				<td><i lang="ain-Latn">e=</i></td>
				<td><i lang="ain-Latn">repunkur e=ne</i> 'you are a foreigner'</td>
				<td><Ref k="refsing1986" p="145" /></td>
			</tr>
			<tr>
				<td>3 (zero)</td>
				<td>Ø</td>
				<td><i lang="ain-Latn">Taanpe seta ne</i> 'this is a dog'</td>
				<td><Ref k="refsing1986" p="145" /></td>
			</tr>
			<tr>
				<td>4 / indefinite</td>
				<td><i lang="ain-Latn">a=</i></td>
				<td><i lang="ain-Latn">atuy kor kamuy a=ne</i> 'he is the sea-god'</td>
				<td><Ref k="nakagawa2024" p="132" /></td>
			</tr>
		</tbody>
	</table>

	<p>
		The copula does not supplete for number: a single form <i lang="ain-Latn">ne</i> serves both
		singular and plural subjects <Ref k="nakagawa2024" p="146" />. This distinguishes it sharply
		from the existential <i lang="ain-Latn">an</i> (sg) / <i lang="ain-Latn">oka(y)</i> (pl),
		which shows obligatory number suppletion tracking the subject
		<Ref k="nakagawa2024" p="146" />; <Ref k="refsing1986" p="145" />. Number suppletion in the
		existential is treated in <Xr ch="existential-locational-an-oka" />; the claim that the copula
		suppletively has a plural form is addressed in §<em>Competing analyses</em> below.
	</p>
</S>

<S t="Semantic readings" id="semantic-readings">
	<p>
		Refsing describes the copula as covering "the equative and attributive meanings of the copula"
		without filling existential or locative roles
		<Ref k="refsing1986" p="145" />; <Ref k="nakagawa2022pos" p="474" />. The attested uses fall
		into three functional types. The sources consulted do not apply the Higgins four-way
		classificational/specificational/identificational grid; the following typology is editorial
		synthesis from the attested data, not a claim drawn from any single source
		‹speculative›.
	</p>

	<p>
		<strong>Classificational</strong> (class-membership): the subject is assigned to a category;
		the complement is non-referential, denoting a kind. This is the default and most frequent use
		<Ref k="nakagawa2024" p="132" />; <Ref k="sato2008" p="20" />:
	</p>

	<Ex
		m="Taanpe seta ne"
		g="this dog COP"
		tr="This is a dog."
		cite="refsing1986:145"
		dial="SHI"
	/>

	<p>
		<strong>Equative / identificational</strong>: both subject and complement are referential noun
		phrases placed in an identity relation <Ref k="refsing1986" p="145" />:
	</p>

	<Ex
		m="Eani anak repunkur ne"
		g="2SG TOP foreigner COP"
		tr="You are a foreigner."
		cite="refsing1986:145"
		dial="SHI"
	/>

	<p>
		<strong>Specificational / naming</strong>: the subject is a nominalised clause and the
		complement supplies the label. The formal-noun evidential constructions
		(<i lang="ain-Latn">hawe ne</i>, <i lang="ain-Latn">ruwe ne</i>) are structurally of this
		type — the formal noun nominalises a clause and <i lang="ain-Latn">ne</i> predicates the
		result. A naming instance at Nakagawa 2024: 392 exemplifies the pattern:
		<i lang="ain-Latn">tap a=ye katu Piratur sekor a=ye hawe ne</i> 'the way it is now said is
		"Piratur"' <Ref k="nakagawa2024" p="392" />. Whether Hokkaido Ainu morphosyntactically
		distinguishes specificational from identificational readings is not addressed by any read
		source ‹speculative›.
	</p>
</S>

<S t="The stative–inchoative duality" id="inchoative">
	<p>
		<i lang="ain-Latn">ne</i> carries no morphological mark for change of state: it covers both
		'be X' and 'become X', a duality shared by other Ainu verbs including the existential
		<i lang="ain-Latn">an</i> <Ref k="nakagawa2022pos" p="477" />. The same sentence
		<i lang="ain-Latn">Tan-kur poro nispa ne</i> can mean 'this person is a great chief' or
		'this person became a great chief'; context determines the reading
		<Ref k="shibatani1990" p="19" />:
	</p>

	<Ex
		m="Tan-kur poro nispa ne"
		g="this-person big chief COP"
		tr="This person is / became a great chief."
		cite="shibatani1990:19"
		dial="ISH"
		note="Shibatani ex. 15c. The same form is felicitous under both the stative ('is a chief') and the inchoative ('became a chief') readings; temporal context disambiguates."
	/>

	<p>
		The stative/inchoative range does not extend to property-concept verbs:
		<i lang="ain-Latn">*hure ne</i> 'become red' and <i lang="ain-Latn">*poro ne</i> 'become big'
		are ungrammatical. Property words already predicate inchoatively without a copula; inserting
		<i lang="ain-Latn">ne</i> after them is the classic learner error
		<Ref k="nakagawa2024" p="119" />. See <Xr ch="property-concept-predication" /> and
		<Xr ch="no-adjective-class-property-verbs" />.
	</p>
</S>

<S t="Attributive ne in noun-noun compounds" id="attributive-ne">
	<p>
		Between two nouns, <i lang="ain-Latn">ne</i> establishes identity or class membership within
		the noun phrase — what Refsing classes as an attributive postposition alongside
		<i lang="ain-Latn">un</i> and <i lang="ain-Latn">kor</i>
		<Ref k="refsing1986" p="160–161" />:
	</p>

	<Ex
		m="okkay ne po"
		g="man COP child"
		tr="boy (lit. 'a child that is a man')"
		cite="refsing1986:160"
		dial="SHI"
	/>

	<Ex
		m="mat ne unma"
		g="woman COP horse"
		tr="mare (lit. 'a horse that is a woman')"
		cite="refsing1986:160"
		dial="SHI"
	/>

	<p>
		A third Refsing example: <i lang="ain-Latn">sapa ne kur</i> 'chief' (lit. 'person who is a
		head') <Ref k="refsing1986" p="160–161" />. The construction is the attributive counterpart
		of the predicative copular clause; <i lang="ain-Latn">ne</i> is the same item in an
		NP-internal position. For the concept-form and possessed morphology of noun heads in such
		compounds, see <Xr ch="concept-form-affiliative-form" /> and
		<Xr ch="adnominal-possession-double-marking" />.
	</p>
</S>

<S t="The mutative ne" id="mutative-ne">
	<p>
		The inchoative 'become' reading of <i lang="ain-Latn">ne</i> grammaticalises further into a
		mutative/translative case postposition marking the result of a change, glossed
		<span class="sc">transl</span>:
	</p>

	<Ex
		m="unma ne kar"
		g="horse TRANSL make"
		tr="make (it) into a horse"
		cite="refsing1986:145"
		dial="SHI"
	/>

	<p>
		Refsing notes that the dynamic 'become' use is the same <i lang="ain-Latn">ne</i> that
		functions elsewhere as the copula, now in a result-marking role
		<Ref k="refsing1986" p="145" />. A community discussion (thegodofneet, aynu-corpora Discord
		2024-11-13) characterises this as 転成格 '〜に（なる）' (mutative case) and observes that
		<i lang="ain-Latn">~ne an</i> — mutative <i lang="ain-Latn">ne</i> plus the existential
		<i lang="ain-Latn">an</i> — corresponds transparently to 'become X', while
		<i lang="ain-Latn">~ne kor</i> is awkward because Japanese 'に持つ' ('hold as') is not a
		natural expression <Ref k="aynucorporadiscord" /> ‹contested›. The grammaticalization
		pathway from 'be' to a translative/result marker is cross-linguistically well attested
		<Ref k="hoppertraugott2003" paren />. The conjunctive particle
		<i lang="ain-Latn">hine</i> (&lt; <i lang="ain-Latn">hi</i> + <i lang="ain-Latn">ne</i>) is
		a further grammaticalised descendant; see <Xr ch="clause-linkage-overview" />.
	</p>
</S>

<S t="Negation: X ka somo ne" id="negation">
	<p>
		Copular predicates are negated by the idiom <i lang="ain-Latn">X ka somo ne</i>: the scalar
		particle <i lang="ain-Latn">ka</i> 'even' and the negative adverb
		<i lang="ain-Latn">somo</i> are inserted between the complement and the copula. The
		alternative <i lang="ain-Latn">*ne ka somo ki</i> does not occur
		<Ref k="sato2008" p="22" />; <Ref k="nakagawa2024" p="407" />:
	</p>

	<Ex
		m="tan pe anak seta ka somo ne wa"
		g="this thing TOP dog even NEG COP CONJ"
		tr="This thing is not a dog, and …"
		cite="sato2008:22"
		dial="SAR"
	/>

	<p>
		This pattern sets the copula apart from property-concept verbs, which use standard clausal
		negation (<i lang="ain-Latn">somo V</i> / <i lang="ain-Latn">V ka somo ki</i>), and from the
		existential, which is negated by the suppletive lexical negative
		<i lang="ain-Latn">isam</i>:
	</p>

	<table>
		<thead>
			<tr>
				<th>predicate type</th>
				<th>negation pattern</th>
				<th>example</th>
				<th>source</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>copula <i lang="ain-Latn">ne</i></td>
				<td><i lang="ain-Latn">X ka somo ne</i></td>
				<td><i lang="ain-Latn">seta ka somo ne</i> 'is not a dog'</td>
				<td><Ref k="sato2008" p="22" />; <Ref k="nakagawa2024" p="407" /></td>
			</tr>
			<tr>
				<td>existential <i lang="ain-Latn">an</i> / <i lang="ain-Latn">oka</i></td>
				<td>suppletive <i lang="ain-Latn">isam</i>, or <i lang="ain-Latn">somo an</i></td>
				<td><i lang="ain-Latn">nep ka isam</i> 'there is nothing'</td>
				<td><Ref k="nakagawa2024" p="450" /></td>
			</tr>
			<tr>
				<td>property verb</td>
				<td><i lang="ain-Latn">somo V</i> / <i lang="ain-Latn">V ka somo ki</i></td>
				<td><i lang="ain-Latn">merayke=an ka somo ki</i> 'I am not cold'</td>
				<td><Ref k="nakagawa2024" p="127" /></td>
			</tr>
		</tbody>
	</table>

	<p>
		Full treatments are in <Xr ch="negation-somo-standard-clausal" /> and
		<Xr ch="negation-existential-possessive-isam" />.
	</p>

	<p>
		One under-described feature is that <i lang="ain-Latn">ne</i> in
		<i lang="ain-Latn">ka somo ne</i> frequently carries no subject-person prefix —
		and this prefix-drop also occurs, less regularly, outside negation. No read grammar catalogues
		the behaviour; Satō 2008: 22 attests the idiom without commenting on its person-marking
		pattern. A community observation (nukopoli, aynu-corpora Discord, 2023-12-25) flags it as a
		genuine micro-gap in the description, noting only that the reason is unclear
		<Ref k="aynucorporadiscord" /> ‹speculative›. The interaction of copula negation with
		TAM and the formal-noun tail is treated in <Xr ch="nonverbal-predicate-tam-negation" />.
	</p>
</S>

<S t="The formal-noun evidential tail" id="formal-noun-tail">
	<p>
		At the right edge of a clause, <i lang="ain-Latn">ne</i> closes the formal-noun evidential
		construction: a clause is nominalised by one of four bound formal nouns
		(<i lang="ain-Latn">ruwe</i>, <i lang="ain-Latn">siri</i>, <i lang="ain-Latn">hawe</i>,
		<i lang="ain-Latn">humi</i>), and the result is predicated with the copula. Structurally this
		is the predicate-nominal clause described above, with a nominalised-clause subject. The copula
		here is systematically opposed to the existential <i lang="ain-Latn">an</i>: formal-noun +
		<i lang="ain-Latn">ne</i> marks the declarative; formal-noun + <i lang="ain-Latn">an</i>
		marks the content question <Ref k="nakagawa2024" p="392–395" />:
	</p>

	<table>
		<thead>
			<tr>
				<th>frame</th>
				<th>illocution</th>
				<th>note</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">NMLZ + ne</i></td>
				<td>declarative</td>
				<td>copula predicates the nominalised clause as recognized fact</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">NMLZ + an?</i></td>
				<td>content question</td>
				<td>existential replaces copula; a question word opens the clause</td>
			</tr>
			<tr>
				<td>bare <i lang="ain-Latn">NMLZ</i></td>
				<td>polar question / exclamation</td>
				<td>copula absent; insubordinated nominalized clause</td>
			</tr>
		</tbody>
	</table>

	<Ex
		m="Aynu ku=ne ru-we ne"
		g="Ainu 1SG.A=COP track-POSS COP"
		tr="I am an Ainu."
		cite="ainukoraci1991"
		dial="SAR"
		place="横山裕之, アイヌタイムズ 51, p. 1"
		note="The copular clause ku=ne is nominalised by the formal noun ruwe (the possessed form of ru 'track') and the outer copula ne predicates the whole as recognized fact."
	/>

	<p>
		The construction further cannot modify a common noun
		(<i lang="ain-Latn">*pirka ruwe ne kewtum</i> is ungrammatical), and its interaction with
		clause-linking material is ordered — <i lang="ain-Latn">kusu ne ruwe ne</i> is well-formed
		but <i lang="ain-Latn">*ruwe ne kusu ne</i> is not <Ref k="nakagawa2024" p="393" />.
		A community discussion (nukopoli, aynu-corpora Discord, 2024-11-09) confirms both constraints
		<Ref k="aynucorporadiscord" />. The formal nouns that make the construction possible are
		defined in <Xr ch="formal-defective-nouns" />; the evidential system as a whole is in
		<Xr ch="evidential-schema-overview" />; and <i lang="ain-Latn">ruwe ne</i> specifically in
		<Xr ch="ruwe-ne-inferential" />.
	</p>
</S>

<S t="Competing analyses of ne" id="competing-analyses">
	<p>
		Four analytical disputes run through the literature and bear directly on how
		<i lang="ain-Latn">ne</i> is characterised.
	</p>

	<p>
		<strong>Copula vs. 2-place verb vs. special subclass.</strong> The positions are surveyed in
		§<em>Person marking and verbal status</em> above ‹contested›. Practically, all analyses
		converge on the same morphological facts: A-set prefixes only, no O prefix, no sentence-final
		use without a complement. The terminological disagreement — whether to call
		<i lang="ain-Latn">ne</i> a copula subtype of the verb, a distinct 指定詞, or simply a
		transitive-type verb — has no consequence for the glossing conventions used in this grammar
		(which follow <Ref k="nakagawa2024" p="132" /> in treating it as a 2-place verb sub-typed COP).
	</p>

	<p>
		<strong>Copula vs. existential — separation or overlap.</strong> Refsing states the division
		most clearly: <i lang="ain-Latn">ne</i> covers equative and attributive meanings while
		<i lang="ain-Latn">an</i> / <i lang="ain-Latn">oka</i> covers existential and locative ones,
		with no overlap <Ref k="refsing1986" p="145" />. Nakagawa and Satō maintain the same
		two-way partition: <i lang="ain-Latn">ne</i> is 2-place, <i lang="ain-Latn">an</i> is
		1-place <Ref k="nakagawa2024" p="132, 146" />; <Ref k="sato2008" p="3–4, 20–21" />.
		Shibatani, by contrast, files the locational clause
		<i lang="ain-Latn">ku-kor kotan ta oray-as</i> 'we were in my village' under "Copular
		sentences" and labels <i lang="ain-Latn">oray</i> a "plural suppletive copula form"
		<Ref k="shibatani1990" p="19" /> — conflating the existential plural with the copula ‹contested›.
		The form <i lang="ain-Latn">oray</i> does not appear in the Hokkaido corpus as a copula and
		is unattested in that function in any other read source ‹corpus-suggested›; the Shibatani
		example is most plausibly an existential locational clause.
	</p>

	<p>
		<strong>Number invariance of the copula.</strong> On the Nakagawa/Refsing account, the copula
		shows no number suppletion — one form <i lang="ain-Latn">ne</i> for both singular and plural
		subjects — in contrast to the existential pair <i lang="ain-Latn">an</i> /
		<i lang="ain-Latn">oka(y)</i> <Ref k="nakagawa2024" p="146" />. The only apparent
		counterevidence is Shibatani's <i lang="ain-Latn">oray</i>, dismissed under the preceding
		point ‹consensus›.
	</p>

	<p>
		<strong>Classificational/specificational typology.</strong> The sources consulted use "equative"
		and "attributive/class-membership" as the descriptive labels for the semantic range of
		<i lang="ain-Latn">ne</i> <Ref k="refsing1986" p="145" />; <Ref k="nakagawa2022pos" p="474" />.
		No source applies the Higgins-style four-way grid to Ainu, and no read source tests whether
		Hokkaido Ainu morphosyntactically distinguishes a specificational from an identificational
		reading. The three-way table in §<em>Semantic readings</em> is editorial synthesis
		‹speculative›.
	</p>

	<p>
		<strong>The pronominal-argument question.</strong> Whether the overt complement NP is a
		syntactic argument or an adjunct on a pronominal-argument head is unresolved. Refsing's
		observation that <i lang="ain-Latn">ne</i> "always needs a nominal complement" and "cannot
		form a sentence by itself" <Ref k="refsing1986" p="272" /> points toward argument status, but
		because the complement is never person-indexed, it occupies the same formally indeterminate
		position as other non-pronominalised objects in a head-marking language
		<Ref k="nakagawa2024" p="132" />. The broader question is pursued in
		<Xr ch="person-marking-architecture" /> ‹contested›.
	</p>
</S>
