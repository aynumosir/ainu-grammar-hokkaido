<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The modifier-position template" id="np-template">
	<p>
		All prenominal modifiers in Hokkaido Ainu precede the head noun, and postpositional material
		follows it. No agreement morphology links a modifier to its head; modification is
		juxtapositional throughout <Ref k="nakagawa2024" p="261, 283" />; <Ref
			k="shibatani1990"
			p="17–18"
		/>; <Ref k="ijas2023" />. The position hierarchy for attested modifier types is invariant:
	</p>

	<table>
		<thead>
			<tr>
				<th>Position</th>
				<th>Category</th>
				<th>Representative forms</th>
				<th>Key restrictions</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1</td>
				<td>Demonstrative prenominal</td>
				<td
					><i lang="ain-Latn">tan</i>, <i lang="ain-Latn">toan</i>, <i lang="ain-Latn">ne</i>,
					<i lang="ain-Latn">nea</i></td
				>
				<td>no person affix; does not change form with the head</td>
			</tr>
			<tr>
				<td>2</td>
				<td>Numeral / quantifier prenominal</td>
				<td
					><i lang="ain-Latn">sine</i>, <i lang="ain-Latn">tu</i>, <i lang="ain-Latn">re</i>, <i
						lang="ain-Latn">ine</i
					></td
				>
				<td>no classifiers; nominalized numeral forms cannot modify a noun directly</td>
			</tr>
			<tr>
				<td>3</td>
				<td>Adnoun / property verb</td>
				<td
					><i lang="ain-Latn">pirka</i> 'be good', <i lang="ain-Latn">pon</i> 'be small', <i
						lang="ain-Latn">oar</i
					>, <i lang="ain-Latn">kes</i></td
				>
				<td
					>property verbs appear in their zero-marked (3rd-person) form; adnouns take no person
					affix</td
				>
			</tr>
			<tr>
				<td>4</td>
				<td>Relative-clause VP</td>
				<td><i lang="ain-Latn">apkas</i> 'walks' [in <i lang="ain-Latn">apkas utar</i>]</td>
				<td
					>only common nouns and formal nouns serve as relativized heads; locative nouns and
					pronouns cannot</td
				>
			</tr>
			<tr>
				<td>5</td>
				<td>HEAD NOUN</td>
				<td
					><i lang="ain-Latn">menoko</i>, <i lang="ain-Latn">cise</i>, <i lang="ain-Latn">kamuy</i
					>, <i lang="ain-Latn">utar</i></td
				>
				<td>common, formal, locative, or pronominal noun; affiliative form when possessed</td>
			</tr>
			<tr>
				<td>6</td>
				<td>Postposition (locative noun + case particle)</td>
				<td
					><i lang="ain-Latn">or ta</i>, <i lang="ain-Latn">kasi ta</i>, <i lang="ain-Latn"
						>sam un</i
					></td
				>
				<td
					>locative case particles require a ⟨place⟩ antecedent; the locative noun supplies it</td
				>
			</tr>
		</tbody>
	</table>

	<p>
		Positions need not all be filled; most NPs contain one or two pre-head elements. When multiple
		positions are present, their order is fixed — a demonstrative cannot follow a numeral, nor a
		numeral follow a property verb. The following constructed example fills positions 1, 3, 5,
		and 6:
	</p>

	<Ex
		m="toan pirka cise or ta"
		g="that be.good house place LOC"
		tr="inside that good house"
		constructed
		note="Constructed to show the full template: demonstrative (position 1), property verb (position 3), head noun (position 5), locative noun or 'place/inside' + case particle ta (position 6). Positions 2 and 4 are empty."
	/>

	<p>
		The line between an NP-internal modifier and a compound noun is drawn by four diagnostics
		(person-affix position, affiliative-suffix position, lexicalization, and the concept+concept
		rule) treated in <Xr ch="noun-noun-compounding" /> after <Ref k="kirikae1984" /> (via
		<Ref k="nakagawa2024" p="261–264" />). The subclass properties of the head noun — which nouns
		can serve as argument heads, which can be relativized, and which require a modifier — are in
		<Xr ch="nominal-subclasses-and-bound-nouns" />.
	</p>
</S>

<S t="Demonstrative prenominals" id="demonstratives">
	<p>
		The demonstrative system distinguishes two axes that Japanese conflates in a single <span
			lang="ja">この／その／あの</span
		> series: on-site deixis (locating the referent in the shared perceptual field) and
		discourse-anaphoric deixis (tracking a previously mentioned referent) <Ref
			k="nakagawa2024"
			p="281–283"
		/>; <Ref k="nakagawa2022pos" p="480" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>Form (Saru)</th>
				<th>Extended variant</th>
				<th>Deixis type</th>
				<th>Distance / discourse value</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">tan</i></td>
				<td>—</td>
				<td>on-site</td>
				<td>proximal (at or near speaker)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">taan</i></td>
				<td><i lang="ain-Latn">taoka(y)</i></td>
				<td>on-site</td>
				<td>mid-proximal (near speaker, further than <i lang="ain-Latn">tan</i>)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">toan</i></td>
				<td><i lang="ain-Latn">tooka(y)</i></td>
				<td>on-site</td>
				<td>distal (near addressee or at distance)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">toon</i></td>
				<td>—</td>
				<td>on-site</td>
				<td>remote distal</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ne</i></td>
				<td><i lang="ain-Latn">nea</i> / <i lang="ain-Latn">nerok</i></td>
				<td>discourse-anaphoric</td>
				<td>just-mentioned referent</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">newaan</i></td>
				<td><i lang="ain-Latn">newaoka(y)</i></td>
				<td>discourse-anaphoric</td>
				<td>previously-mentioned referent (earlier in discourse)</td>
			</tr>
		</tbody>
	</table>

	<Ex
		m="tan cise e=uni ne ru-we"
		g="this house 2SG=home COP track-POSS"
		tr="Is this house yours?"
		cite="sato2008:131"
		dial="CHI"
		note="The proximal demonstrative tan precedes the head noun cise 'house'. Used here to illustrate the NP tan cise; the evidential frame ruwe and the polar-question reduction are treated in the ruwe-ne-inferential chapter."
	/>

	<p>
		The vowel quality of the initial syllable of the on-site series correlates with distance: the
		narrow front vowel of <i lang="ain-Latn">tan</i> encodes proximity and the wider back vowel of
		<i lang="ain-Latn">toan</i> encodes distance. This has been proposed as sound symbolism in the
		deictic system, with longer forms (<i lang="ain-Latn">taan</i>) encoding more information
		content than shorter ones (<i lang="ain-Latn">tan</i>)
		<Ref k="aynucorporadiscord" /> (nukopoli, 2025-12-27) ‹contested›. The proposal has not been
		evaluated against the full corpus.
	</p>

	<p>
		Non-Saru/Chitose dialects use <i lang="ain-Latn">nean</i> where Saru has
		<i lang="ain-Latn">ne</i>; eastern Shizunai has <i lang="ain-Latn">ikia</i>/<i lang="ain-Latn"
			>ikirok</i
		>
		<Ref k="nakagawa2024" p="282" />. A demonstrative prenominal combined with the formal noun
		<A w="pe" gl="thing" /> or <A w="hi" gl="thing, fact, time" /> yields a demonstrative pronoun:
		<A w="tanpe" gl="this thing" />, <A w="toanpe" gl="that thing" />, <A
			w="neap"
			gl="that aforementioned thing"
		/>
		<Ref k="nakagawa2024" p="287" />. A demonstrative may be followed directly by a locative case
		particle — <i lang="ain-Latn">taan ta</i> 'over there' — because the formal noun
		<i lang="ain-Latn">hi</i> is historically elided in such constructions <Ref
			k="nakagawa2024"
			p="288"
		/>. The full paradigm — including the interrogative <i lang="ain-Latn">ney</i> and anaphora
		functions — is in <Xr ch="demonstratives-anaphora-definiteness" />.
	</p>
</S>

<S t="Numeral and quantifier prenominals" id="numerals">
	<p>
		Numerals occupy position 2, between a demonstrative and any adnoun or property verb. A numeral
		precedes its head noun directly with no intervening classifier — a typological contrast with
		Japanese, which requires a numeral counter between numeral and noun <Ref
			k="nakagawa2024"
			p="461"
		/> ‹consensus›.
	</p>

	<Ex
		m="tu cip"
		g="two boat"
		tr="two boats"
		cite="nakagawa2024:461"
		dial="HK"
	/>

	<Ex
		m="asikne okkayo"
		g="five man"
		tr="five men"
		cite="nakagawa2024:461"
		dial="HK"
	/>

	<p>
		Nominalized numeral forms — <A w="rep" gl="three things (re + pe)" />,
		<A w="sinep" gl="one thing" />, <A w="tup" gl="two things" /> — are pronoun-like count
		expressions, not prenominal quantifiers. They cannot modify a noun directly:
		<i lang="ain-Latn">re mosir</i> 'three worlds' is well-formed, but
		<i lang="ain-Latn">*rep mosir</i> is not, because <i lang="ain-Latn">rep</i> is already the
		nominalized form <i lang="ain-Latn">re</i> + nominalizing enclitic <i lang="ain-Latn">-pe</i>
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-11-09) ‹corpus-confirmed›. The vigesimal
		numeral system, ordinals, and quantifiers are in <Xr ch="vigesimal-numeral-system" /> and
		<Xr ch="numeral-classifiers-ordinals-and-quantifier-syntax" />.
	</p>
</S>

<S t="Property verbs and adnouns as modifiers" id="adnouns-property-verbs">
	<p>
		Property-meaning words —
		<A w="pirka" gl="be good" />, <A w="pon" gl="be small" />, <A w="wen" gl="be bad" />,
		<A w="tanne" gl="be long" />, <A w="poro" gl="be big" /> — are intransitive verbs in Ainu. In
		attributive position they immediately precede the head noun with no morphological change
		relative to their predicative form: the same <i lang="ain-Latn">pirka</i> that takes a subject
		person index as a predicate appears zero-marked (third person) before the noun as its modifier
		<Ref k="nakagawa2022pos" p="474–476" />; <Ref k="shibatani1990" p="19" />. The word-class
		analysis and the adjective controversy are in <Xr ch="word-class-inventory-and-diagnostics" />.
	</p>

	<Ex
		m="pon hekaci"
		g="be.small child"
		tr="a small child"
		cite="nakagawa2022pos:475"
		dial="HK"
		note="The property verb pon 'be small' modifies hekaci 'child' with no morphological change. In predicative function the same pon takes a subject person index."
	/>

	<p>
		Beyond property verbs, a closed set of <em>adnouns</em> (連体詞, prenominals) occupies the
		same position. Adnouns differ from property verbs in having no predicative use without the
		copula and in taking no person affix at all. The Saru inventory includes gender specifiers
		(<i lang="ain-Latn">pinne</i> 'male', <i lang="ain-Latn">matne</i> 'female'), the
		pair-selector <i lang="ain-Latn">oar</i> 'one of a pair', the universal quantifier
		<i lang="ain-Latn">kes</i> 'every', and epistemic adnouns (<i lang="ain-Latn">sonno</i>/<i
			lang="ain-Latn">sino</i
		> 'true/genuine', <i lang="ain-Latn">yayan</i> 'ordinary', <i lang="ain-Latn">oya</i> 'other')
		<Ref k="nakagawa2024" p="283" />.
	</p>

	<p>
		A property verb or adnoun at position 3 scopes over the entire nominal complex to its right,
		including a following formal noun such as <i lang="ain-Latn">utar</i>:
	</p>

	<Ex
		m="wen cikap-po utar"
		g="be.bad bird-DIM people"
		tr="bad little birds"
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matuko, uwepeker minwa 15, [aa-irc/022#23]"
		note="The property verb wen modifies a head that is itself a diminutive compound (cikap 'bird' + -po DIM) followed by the plural formal noun utar. The full sentence hinak wa arki wen cikappo utar, 'the bad little birds that came from somewhere', also shows a relative-clause modifier (hinak wa arki) at position 4 preceding wen."
	/>
</S>

<S t="Relative-clause modifiers" id="relative-clauses">
	<p>
		A full VP, including its person marking and aspectual material, can immediately precede a head
		noun and function as its modifier. No relative pronoun or dedicated relative-clause morphology
		marks the construction; the head noun simply appears to the right of the modifying VP
		<Ref k="nakagawa2022pos" p="475" />; <Ref k="shibatani1990" p="17" />:
	</p>

	<Ex
		m="apkas utar arki ru-we ne"
		g="walk people come.PL track-POSS COP"
		tr="The people who were walking came."
		cite="nakagawa2022pos:475"
		dial="HK"
		note="The VP apkas 'walk' (zero-marked third person) modifies the head utar 'people'. The main-clause verb arki is the suppletive plural of ek 'come'. No relative marker appears between the modifying VP and its head."
	/>

	<p>
		Relativizability is restricted by noun subclass (表47,
		<Ref k="nakagawa2024" p="215" />): common nouns can be relativized; formal nouns head
		argument-saturated nominalizations; locative nouns cannot be relativized; pronouns cannot be
		relativized
		<Ref k="nakagawa2022pos" p="482" /> ‹consensus›.
	</p>

	<p>
		The arity account in <Ref k="nakagawa2024" p="503–504" /> distinguishes the relative-clause
		construction — which leaves an argument gap in the modifying VP that the head noun fills —
		from nominalization with <i lang="ain-Latn">-p~-pe</i>, which nominalizes a VP without
		reducing its argument count. A community analysis converges on the same point: relativization
		reduces the modifying clause's arity by one, whereas <i lang="ain-Latn">-p(e)</i> nominalizes
		the entire clause without creating a gap
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-11-09) ‹contested›. The construction and its
		gap types are in <Xr ch="prenominal-gap-relative-clauses" />; headless and
		internally-headed varieties are in <Xr ch="headless-internally-headed-noun-modifying-clauses"
		/>; argument-saturated nominalization is in <Xr ch="nominalization-p-pe" />.
	</p>
</S>

<S t="The postpositional phrase" id="postpositions">
	<p>
		Postpositional material follows the head noun and forms the outer boundary of the NP. The
		postpositional layer consists of a <em>locative noun</em> in its basic or long form, optionally
		followed by a <em>locative case particle</em> (<i lang="ain-Latn">ta</i> locative,
		<i lang="ain-Latn">wa</i> ablative, <i lang="ain-Latn">un</i> allative,
		<i lang="ain-Latn">peka</i> perlative) <Ref k="nakagawa2024" p="294–296" />. The four locative
		case particles require a ⟨place⟩ antecedent; for a common noun, a locative noun must mediate:
	</p>

	<Ex
		m="sike-he kasi ta"
		g="luggage-POSS top LOC"
		tr="on top of the luggage"
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matuko, uwepeker minwa 8 (sono 1), [aa-irc/006#143]"
		note="The head noun sike 'luggage' is in affiliative form sikehe. The locative noun kasi (long form of ka 'on top of') follows it, and the case particle ta closes the postpositional phrase. The common noun sike does not satisfy ⟨place⟩ by itself; kasi provides the locative head."
	/>

	<p>
		Type-2 locative nouns (<i lang="ain-Latn">kim</i> 'mountain-ward place',
		<i lang="ain-Latn">soy</i> 'outside', <i lang="ain-Latn">ra</i> 'low place') are inherently
		⟨place⟩ and take a case particle directly without a preceding common-noun antecedent:
		<i lang="ain-Latn">kim ta arpa=an</i> 'I went to the mountains' <Ref
			k="nakagawa2024"
			p="245–246"
		/>. The full inventory of locative and relational nouns, their basic and long forms, and the
		case-particle restrictions are in <Xr ch="relational-and-spatial-nouns" />.
	</p>
</S>

<S t="Apposition and attributive juxtaposition" id="apposition">
	<p>
		Two nouns in their concept forms placed in sequence yield either apposition or an
		attributive-scope construction — both realizations of the same N(concept)+N(concept) surface
		pattern <Ref k="nakagawa2022pos" p="486–487" />; <Ref k="nakagawa2024" p="218" />. In the
		<em>attributive</em> use, the first noun specifies the type, quality, or scope of the second:
		<i lang="ain-Latn">kamuy rus</i> means 'a pelt of the bear type' —
		<i lang="ain-Latn">kamuy</i> functions as an attribute, not a possessor. The diagnostic is
		substitution: an N₁ that is a true possessor can be replaced by a transitive-subject person
		prefix (<i lang="ain-Latn">a=kor cip</i> 'my boat'), but an N₁ that is a mere attribute
		cannot — <i lang="ain-Latn">kamuy rus</i> admits no person-prefix substitute for the bear
		<Ref k="nakagawa2022pos" p="486–487" />. When a specific animal's pelt is meant, the
		affiliative form marks the inalienable relation:
		<i lang="ain-Latn">kamuy rusihi</i> (where <i lang="ain-Latn">rus-i-hi</i> is the affiliative
		form of <i lang="ain-Latn">rus</i> 'pelt').
	</p>

	<p>
		Apposition in the narrower sense — two NPs coreferential with the same individual — uses the
		same juxtaposed structure without a copular linker. The boundary with compound nouns runs
		through the four formal diagnostics in <Xr ch="noun-noun-compounding" />: a phrase allows
		person-affix placement and affiliative-suffix placement internal to the second noun, whereas a
		compound moves both to the outermost boundary. The contrast between attributive juxtaposition,
		the inalienable affiliative construction, and the <i lang="ain-Latn">kor</i>-construction is
		central to <Xr ch="concept-form-affiliative-form" />.
	</p>
</S>

<S t="The possessor slot" id="possessor-slot">
	<p>
		Three constructions express possession within the NP, selected according to the alienability of
		the relationship <Ref k="nakagawa2024" p="217–219" />; <Ref k="nakagawa2022pos" p="484–485" />:
	</p>

	<table>
		<thead>
			<tr>
				<th>Construction</th>
				<th>Surface form</th>
				<th>Semantic relation</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Alienable</td>
				<td>N₁ <i lang="ain-Latn">kor</i> N₂(concept)</td>
				<td>owner controls or owns N₂; N₂ in concept form</td>
			</tr>
			<tr>
				<td>Inalienable</td>
				<td>N₁ N₂(affiliative)</td>
				<td>inherent relation: body parts, kinship, part-whole, material→product; N₂ in affiliative form</td>
			</tr>
			<tr>
				<td>Attributive juxtaposition</td>
				<td>N₁(concept) N₂(concept)</td>
				<td>attribute or scope, not possession; N₁ cannot be replaced by a person prefix</td>
			</tr>
		</tbody>
	</table>

	<Ex
		m="a=kor cip"
		g="4.A=have boat"
		tr="my/one's boat"
		cite="nakagawa2024:218"
		dial="HK"
		note="Alienable construction: the transitive-subject person prefix (here fourth-person a=, which in narrative contexts typically encodes the speaker) attaches to kor 'have'; the possessed noun cip is in concept form. Any transitive-subject prefix may substitute for a= to encode a different possessor."
	/>

	<Ex
		m="ku=teke-he"
		g="1SG.A=hand-POSS"
		tr="my hand"
		cite="nakagawa2024:219"
		dial="HK"
		note="Inalienable construction: the 1SG transitive-subject prefix ku= and the affiliative suffix -he combine on the possessed noun teke 'hand'. Body parts require the inalienable construction."
	/>

	<p>
		Pronominal possessors are expressed through the transitive-subject (A) person prefix — on
		<i lang="ain-Latn">kor</i> in the alienable construction, or on the head noun in its
		affiliative form in the inalienable construction. The possessive morphology — the
		affiliative-form paradigm, semantic classes of inalienable nouns, kinship-term dialect
		variation, and the double-marking construction — belongs to Part VII: <Xr
			ch="adnominal-possession-double-marking"
		/>, <Xr ch="kinship-honorific-possession" />, and <Xr ch="concept-form-affiliative-form" />.
	</p>
</S>

<S t="NP-internal agreement" id="np-agreement">
	<p>
		Hokkaido Ainu has no agreement morphology within the NP. Demonstratives, property verbs,
		adnouns, and numerals do not change form as a function of any grammatical property of the head
		noun: there is no gender, case, or number agreement <Ref k="nakagawa2024" p="259, 283" />;
		<Ref k="corbett2000" paren /> ‹consensus›. A modifier at positions 1–4 appears in its
		uninflected citation form regardless of whether the head denotes one or many entities, whether
		it is animate or inanimate, or whether the NP occupies subject, object, or oblique position.
	</p>

	<p>
		The plural marker <A w="utar" gl="people; plural associates" /> is a postposed formal noun,
		not an agreement enclitic on the head or its modifiers. It follows the entire nominal complex
		and is itself uninflected: <i lang="ain-Latn">wen cikappo utar</i> and
		<i lang="ain-Latn">wen cikappo</i> differ only in whether <i lang="ain-Latn">utar</i> is
		present; the property verb <i lang="ain-Latn">wen</i> is unchanged either way. Community
		analysis confirms that Ainu plural is semantic addition rather than obligatory morphological
		agreement, and that verse can add or omit <i lang="ain-Latn">utar</i> freely for syllable
		count <Ref k="aynucorporadiscord" /> (nukopoli, 2024-11-23) ‹corpus-confirmed›. Number, where
		grammatically encoded, surfaces on the finite verb through suppletive stem alternation
		(<i lang="ain-Latn">ek</i>/<i lang="ain-Latn">arki</i> 'come.SG/come.PL',
		<i lang="ain-Latn">arpa</i>/<i lang="ain-Latn">paye</i> 'go.SG/go.PL') — see
		<Xr ch="suppletive-verbal-number" />. The semantics and animacy conditions of
		<i lang="ain-Latn">utar</i>, and the transnumeral character of Hokkaido nouns, are in
		<Xr ch="nominal-number-utar-transnumerality" />. Pronominal NPs are in
		<Xr ch="independent-personal-pronouns" />, and derivation within the NP is in
		<Xr ch="deverbal-denominal-noun-derivation" /> and <Xr ch="denominal-deverbal-verb-derivation" />.
	</p>
</S>
