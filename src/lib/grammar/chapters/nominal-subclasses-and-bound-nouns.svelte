<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The four noun subclasses" id="four-subclasses">
	<p>
		A noun is defined as a word that can form an NP and serve as a verb's subject or object
		<Ref k="nakagawa2024" p="214" />. Within the class, four subclasses are distinguished by
		two crossing diagnostics: whether the form can stand alone as an NP argument, and whether
		it can serve as the head of a relative-clause structure
		<Ref k="nakagawa2024" p="215–216" />; <Ref k="nakagawa2022pos" p="480–482" />.
		Crossing these two properties against the type of person affix the form takes and its
		status as a locative expression (⟨place⟩) yields a six-row grid.
	</p>

	<table>
		<thead>
			<tr>
				<th>subclass</th>
				<th>form</th>
				<th>stands alone as argument?</th>
				<th>can head a relative clause?</th>
				<th>person affix type</th>
				<th>functions as ⟨place⟩?</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>common noun (普通名詞)</td>
				<td>concept form (概念形)</td>
				<td>○</td>
				<td>○</td>
				<td>—</td>
				<td>no</td>
			</tr>
			<tr>
				<td>common noun</td>
				<td>affiliative/possessed form (所属形)</td>
				<td>○</td>
				<td>○</td>
				<td>nominative (possessive)</td>
				<td>no</td>
			</tr>
			<tr>
				<td>locative noun (位置名詞)</td>
				<td>basic form</td>
				<td>✗ (Type 1) / ○ (Type 2)</td>
				<td>✗</td>
				<td>objective</td>
				<td>yes</td>
			</tr>
			<tr>
				<td>locative noun</td>
				<td>long form</td>
				<td>○</td>
				<td>✗</td>
				<td>objective</td>
				<td>yes</td>
			</tr>
			<tr>
				<td>pronoun (代名詞)</td>
				<td>—</td>
				<td>○</td>
				<td>✗</td>
				<td>—</td>
				<td>some (via formal noun <i lang="ain-Latn">hi</i>)</td>
			</tr>
			<tr>
				<td>formal noun (形式名詞)</td>
				<td>—</td>
				<td>✗</td>
				<td>○</td>
				<td>—</td>
				<td>some (<i lang="ain-Latn">hi</i>, <i lang="ain-Latn">uske</i>, <i lang="ain-Latn">usi</i>…)</td>
			</tr>
		</tbody>
	</table>

	<p>
		The rows fall into an autonomy hierarchy. Common nouns in the concept form are the most
		independent; common nouns in the affiliative form presuppose a possessor relation but can
		still stand as NP arguments. Locative nouns are always ⟨place⟩ and take objective rather
		than nominative person affixes; the Type-1 basic form is the least autonomous among the
		locative forms, requiring an antecedent NP. Pronouns can stand alone but cannot be
		relativised. Formal nouns are the least autonomous of all: they require a preceding
		modifier or clause and cannot appear as bare NP arguments
		<Ref k="nakagawa2024" p="215–216" />.
	</p>
	<p>
		Pronouns and formal nouns receive full treatments in separate chapters:
		<Xr ch="independent-personal-pronouns" /> and <Xr ch="formal-defective-nouns" />.
		Locative nouns are introduced in this chapter and developed in detail in
		<Xr ch="relational-and-spatial-nouns" />.
	</p>
</S>

<S t="Common nouns: concept form and affiliative form" id="common-nouns">
	<p>
		Every common noun has two forms. The concept form (概念形) presents the referent without
		anchoring it relationally to anything else. The
		<Xr ch="concept-form-affiliative-form">affiliative form</Xr> (所属形) presents it in
		relation to a possessor or reference point, and it is the form that carries a personal
		prefix indexing that possessor. Kindaichi &amp; Chiri used the terms 抽象形 (abstract
		form) and 具体形 (concrete form) for the same distinction
		<Ref k="kindaichi1936" p="16" />; the current terminology, following Nakagawa and the
		Bugaeva Handbook, replaces those labels without changing the underlying analysis
		<Ref k="nakagawa2024" p="217" />; <Ref k="nakagawa2022pos" p="484" />.
	</p>
	<p>
		Three possession constructions are built on this opposition
		<Ref k="nakagawa2024" p="217–219" />:
	</p>

	<table>
		<thead>
			<tr>
				<th>#</th>
				<th>construction</th>
				<th>N₂ form</th>
				<th>relation expressed</th>
				<th>example</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>(1)</td>
				<td>N₁ <i lang="ain-Latn">kor</i> N₂ / affix=<i lang="ain-Latn">kor</i> N₂</td>
				<td>concept form</td>
				<td>alienable</td>
				<td><i lang="ain-Latn">a=kor cip</i> 'my/his boat'</td>
			</tr>
			<tr>
				<td>(2)</td>
				<td>N₁ N₂<sub>-affix</sub> / affix=N₂<sub>-affix</sub></td>
				<td>affiliative form</td>
				<td>inalienable</td>
				<td><i lang="ain-Latn">ku=tekehe</i> 'my hand'</td>
			</tr>
			<tr>
				<td>(3)</td>
				<td>N₁ N₂ (juxtaposition, no affix)</td>
				<td>concept form</td>
				<td>attributive (not possession)</td>
				<td><i lang="ain-Latn">menoko tek</i> 'a woman's hand'</td>
			</tr>
		</tbody>
	</table>

	<Ex
		m="a=kor cip"
		g="4.A=have boat"
		tr="my/his boat"
		note="Alienable possession: the possessed noun cip 'boat' stays in the concept form; the possessor prefix a= (4th person, here functioning as a generic 'my/his') attaches to the possession verb kor."
		constructed
	/>

	<Ex
		m="ku=teke-he"
		g="1SG.A=hand-POSS"
		tr="my hand"
		note="Inalienable possession: the affiliative suffix -he attaches to the root teke, and the 1SG possessive prefix ku= marks the possessor. The concept form *ku=tek with a direct prefix is ungrammatical in this possessive sense."
		constructed
	/>

	<Ex
		m="menoko tek"
		g="woman hand"
		tr="a woman's hand (attributive, not possessed)"
		note="Attributive juxtaposition, construction (3): menoko 'woman' specifies the attribute of tek 'hand' but is not its possessor in the grammatical sense. No person prefix can substitute for menoko here: *ku=tek is ungrammatical as a possessive."
		constructed
	/>

	<p>
		The decisive diagnostic distinguishing (2) from (3) is the person-prefix substitution
		test: the first NP of an inalienable construction can be replaced by a person prefix
		(<i lang="ain-Latn">ku=sikihi</i> 'my eye' — concept form <i lang="ain-Latn">sik</i>,
		affiliative <i lang="ain-Latn">sikihi</i>), whereas the first noun of an attributive
		construction cannot (<i lang="ain-Latn">*ku=rus</i> for 'bear-pelt'; only
		<i lang="ain-Latn">kamuy rus</i> or <i lang="ain-Latn">kamuy rusihi</i> 'that specific
		bear's pelt' is possible) <Ref k="nakagawa2024" p="218" />. The morphophonology of
		affiliative-form formation — the vowel-copy and echo-vowel suffixes — is treated in
		<Xr ch="affiliative-suffix-morphophonology" />. The full semantics of the
		concept/affiliative opposition, including its non-possessive (anaphoric and definiteness)
		uses, are developed in <Xr ch="concept-form-affiliative-form" />.
	</p>
</S>

<S t="Inalienable nouns and the bound class" id="bound-nouns">
	<p>
		The inalienable construction (construction 2) covers several semantic fields. Nakagawa
		identifies five main classes that favour the affiliative form when possessed:
		(a) body parts and items typically worn or carried
		(<i lang="ain-Latn">ku=tekehe</i> 'my hand',
		<i lang="ain-Latn">a=tesmaha</i> 'my snowshoes');
		(b) part-of-whole nouns
		(<i lang="ain-Latn">op nicihi</i> 'spear-shaft',
		<i lang="ain-Latn">sayo rurihi</i> 'gruel broth');
		(c) a subset of kinship terms (see below);
		(d) material-to-product nouns
		(<i lang="ain-Latn">ikaray ohawe</i> 'nettle stew',
		<i lang="ain-Latn">top cise</i> 'bamboo house');
		and (e) a miscellaneous set including
		<i lang="ain-Latn">ataye</i> 'price',
		<A w="hura" gl="smell" /> (affiliative <i lang="ain-Latn">huraha</i>), and
		<i lang="ain-Latn">kotanu</i> 'village'
		<Ref k="nakagawa2024" p="219–220" />.
	</p>
	<p>
		Within the broader inalienable class, a distinction can be drawn by degree of boundness.
		Common nouns in the body-part and part-whole classes retain an independent concept form
		that can appear in generic or classifier-like contexts: <i lang="ain-Latn">tek</i>
		'hand' can appear as a bare NP argument. By contrast, the Type-1 basic forms of locative
		nouns (§ <Xr ch="relational-and-spatial-nouns" />) cannot appear at all as NP arguments
		without an immediately preceding antecedent, and formal nouns cannot appear without a
		preceding clause or prenominal modifier. These two groups represent the strictly bound
		end of a gradient from "tends to be possessed" to "cannot appear without an antecedent"
		<Ref k="nakagawa2024" p="238–240, 257" />.
	</p>

	<S t="Conditions on the affiliative form" id="affiliative-conditions">
		<p>
			A long-standing descriptive question concerns what triggers the affiliative form
			specifically. Tamura (1988a: 27–28, as reported by Nakagawa 2024: 228) proposed a
			specificity condition: N₂ appears in the affiliative form only when N₁ is specific
			and individuated (<i lang="ain-Latn">kamuy rusihi</i> 'that specific bear's pelt' vs
			<i lang="ain-Latn">kamuy rus</i> 'bear-pelt in general', which is almost a compound)
			‹contested›. Satō objects that the affiliative does appear with non-specific possessors
			— <i lang="ain-Latn">aynu opitta honihi kor</i> 'all humans have a belly' — which
			would be excluded by a strict specificity condition
			<Ref k="nakagawa2024" p="228–229" /> ‹contested›. Nakagawa's 2024 account resolves
			the tension by placing the conditioning in morphosyntax rather than semantics: whenever
			a person prefix is present, the affiliative form is required; specificity then emerges
			as a tendency rather than a categorical trigger, because inalienable possession of an
			individuated entity is simply the most common context for person-prefix use
			<Ref k="nakagawa2024" p="228–230" />.
		</p>
		<p>
			Nakagawa further notes that the sharp "has/lacks affiliative form" dichotomy, sometimes
			presented as a fixed lexical property, is overstated: given an appropriate relational
			context, most common nouns can in principle take an affiliative form
			<Ref k="nakagawa2024" p="227" />. The noun
			<A w="utar" gl="plural marker / people / family" /> illustrates the gradient: as a
			formal-noun plural marker <i lang="ain-Latn">utar</i> is uninflected, but as a common
			noun 'relatives, companions' it has an affiliative form
			<i lang="ain-Latn">utari(hi)</i>. Community discussion has noted that, because it is
			hard to conceive of 'companions not belonging to anyone', this common noun surfaces
			almost exclusively in its affiliative form as 'N's family/companions'
			<Ref k="aynucorporadiscord" /> (thegodofneet, 2025-09-17) ‹contested›, extending
			Nakagawa's account of the same ambiguity at <Ref k="nakagawa2024" p="251–252" />.
		</p>
	</S>

	<S t="Kinship terms: two grammatical classes" id="kinship-subclasses">
		<p>
			Kinship terms split into two sets with different possession constructions, and the
			assignment is lexically specified. Terms using the
			<i lang="ain-Latn">kor</i>-construction (concept form): <i lang="ain-Latn">ku=kor
			hapo</i> 'my mother', <i lang="ain-Latn">ku=kor mici</i> 'my father'. Terms using
			the affiliative construction: <i lang="ain-Latn">ku=turesi</i> 'my younger sister
			(sister's viewpoint)', <i lang="ain-Latn">ku=yupihi</i> 'my elder brother'
			<Ref k="nakagawa2024" p="221–222" />. Within Hokkaido there is considerable dialect
			variation in the assignment of individual kinship terms to one set or the other
			<Ref k="nakagawa2024" p="219–222" />.
		</p>
		<p>
			A further division concerns address vs reference. Several kinship terms — among them
			<i lang="ain-Latn">ona</i> 'father', <i lang="ain-Latn">unu</i> 'mother',
			<i lang="ain-Latn">yup</i> 'elder brother', and <i lang="ain-Latn">sa</i> 'elder
			sister' — are restricted to third-person reference and cannot be used in direct
			address; each has an address counterpart. The restriction correlates with the
			grammatical pattern: only the affiliative form combines with a person prefix, so a
			term that cannot be addressed directly tends not to appear with first- or
			second-person possessor marking
			<Ref k="nakagawa2024" p="221–223" />. Kinship possession in full, including
			suppletive address forms and the dialect-by-dialect distributions, is treated in
			<Xr ch="kinship-honorific-possession" />.
		</p>
	</S>

	<S t="Membership, gradience, and dialect variation" id="boundness-gradience">
		<p>
			Inalienable-class membership is partly dialect-specific and partly lexeme-specific.
			<A w="kotan" gl="village, settlement" /> takes both the
			<i lang="ain-Latn">kor</i>-construction and the affiliative construction equally in
			Saru; <A w="mosir" gl="world, land" /> uses only the
			<i lang="ain-Latn">kor</i>-construction (<i lang="ain-Latn">a=kor mosir</i>;
			<i lang="ain-Latn">*a=mosirihi</i> is ungrammatical)
			<Ref k="nakagawa2024" p="220" />. These lexeme-specific idiosyncrasies are part of the
			lexical entry and are not predictable from semantics alone. Refsing notes comparable
			fluctuation in Shizunai, where some body-part stems allow either construction
			<Ref k="refsing1986" p="74–76" />.
		</p>
		<p>
			The full alienable/inalienable distinction, adnominal possession constructions,
			and the interaction of possession with nominal number and person marking are
			developed in <Xr ch="alienable-inalienable-split" />,
			<Xr ch="concept-form-affiliative-form" />, and
			<Xr ch="adnominal-possession-double-marking" />.
		</p>
	</S>
</S>

<S t="Locational and relational nouns" id="locative-nouns">
	<p>
		Locative nouns form a small, closed subclass expressing spatial and temporal relations
		('above', 'below', 'in front of', 'beside', 'inside'). Four properties set them apart
		from common nouns <Ref k="nakagawa2024" p="238–240" />; <Ref k="nakagawa2022pos" p="490–491" />:
	</p>
	<ol>
		<li>
			<strong>The basic form cannot stand alone as an NP.</strong> Type-1 locative nouns
			require an immediately preceding antecedent NP (the spatial reference point). Without
			it, <i lang="ain-Latn">*ka wa ran</i> 'came down from above' with bare
			<i lang="ain-Latn">ka</i> is ungrammatical; only the long form can head a clause
			independently (§ below).
		</li>
		<li>
			<strong>Long-form derivation differs from the common-noun affiliative.</strong>
			Common nouns use a vowel-copy suffix (the <i lang="ain-Latn">-hV</i> mechanism)
			predictable from the stem's final vowel; locative long forms use a distinct suffix
			set — <i lang="ain-Latn">-ke</i>, <i lang="ain-Latn">-V</i>,
			<i lang="ain-Latn">-si</i> — that is lexically specified per item and follows
			different morphophonological patterns. The overlap between the two systems may be
			historical: Nakagawa hypothesises that common-noun type-③-2 morphology was borrowed
			from the locative system <Ref k="nakagawa2024" p="226, 247" /> ‹speculative›.
		</li>
		<li>
			<strong>Both forms take the objective person affix.</strong> Common nouns in the
			affiliative construction take the nominative (possessive) prefix; locative nouns take
			the objective prefix:
			<i lang="ain-Latn">en=sam un</i> 'to beside me'
			(1SG.O prefix <i lang="ain-Latn">en=</i> on <A w="sam" gl="beside" />)
			vs <i lang="ain-Latn">ku=tekehe</i> 'my hand'
			(1SG.A/possessive prefix <i lang="ain-Latn">ku=</i> on <A w="tek" gl="hand" />)
			<Ref k="nakagawa2024" p="241" />.
		</li>
		<li>
			<strong>Both forms always function as ⟨place⟩.</strong> Locative nouns can be
			directly followed by the locative particle
			<i lang="ain-Latn">ta</i>: <i lang="ain-Latn">kasi ta</i> 'on top of it'. A
			common noun cannot do this: <i lang="ain-Latn">*nupuri ta</i> is ungrammatical;
			'at the mountain' requires an intervening locative noun,
			<i lang="ain-Latn">nupuri or ta</i> ('at [the inside of] the mountain')
			<Ref k="nakagawa2024" p="216, 241" />.
		</li>
	</ol>

	<S t="Type-1 and Type-2 locative nouns" id="locative-types">
		<p>
			Nakagawa further divides locative nouns into two types
			<Ref k="nakagawa2024" p="241–246" />. Type-1 nouns require an immediately preceding
			antecedent NP in the basic form; in the long form they can head a clause alone.
			Type-2 nouns can stand in the basic form without naming a reference point, making them
			syntactically closer to common nouns, though they retain the locative-noun properties
			of ⟨place⟩ status and objective-affix agreement.
		</p>

		<table>
			<thead>
				<tr>
					<th>basic form</th>
					<th>long form</th>
					<th>meaning</th>
					<th>type</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><i lang="ain-Latn">ka</i></td>
					<td><i lang="ain-Latn">kasi(ke)(he)</i></td>
					<td>above (in contact)</td>
					<td>1</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">enka</i></td>
					<td><i lang="ain-Latn">enkasi(ke)(he)</i></td>
					<td>above (at a distance)</td>
					<td>1</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">kurka</i></td>
					<td><i lang="ain-Latn">kurkasi(ke)(he)</i></td>
					<td>over a spread-out surface</td>
					<td>1</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">corpok</i></td>
					<td><i lang="ain-Latn">corpok(i)ke(he)</i></td>
					<td>below (root <i lang="ain-Latn">pok</i>)</td>
					<td>1</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">etok</i></td>
					<td><i lang="ain-Latn">etokoho</i></td>
					<td>front of a moving/linear thing; temporal 'before'</td>
					<td>1</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">kotca</i></td>
					<td><i lang="ain-Latn">kotcake(he)</i></td>
					<td>front of a stationary thing</td>
					<td>1</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">oka</i></td>
					<td><i lang="ain-Latn">okake(he)</i></td>
					<td>back of a moving/linear thing; temporal 'after'</td>
					<td>1</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">osmak</i></td>
					<td><i lang="ain-Latn">osmake(he)</i></td>
					<td>back of a stationary thing</td>
					<td>1</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">sam</i></td>
					<td><i lang="ain-Latn">samake(he)</i></td>
					<td>beside</td>
					<td>1</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">utur</i></td>
					<td><i lang="ain-Latn">uturu(hu)</i> / <i lang="ain-Latn">uturke(he)</i></td>
					<td>between</td>
					<td>1</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">or</i></td>
					<td><i lang="ain-Latn">oro</i> / <i lang="ain-Latn">orke(he)</i></td>
					<td>inside, at the location of</td>
					<td>1</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">oske</i></td>
					<td><i lang="ain-Latn">oskehe</i></td>
					<td>inside (general)</td>
					<td>1</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">tum</i></td>
					<td>
						<i lang="ain-Latn">tumuke(he)</i>; contracted
						<i lang="ain-Latn">tumke</i> ‹corpus-confirmed›
					</td>
					<td>inside a homogeneous mass</td>
					<td>1</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">noski</i></td>
					<td><i lang="ain-Latn">noskie / noskike(he)</i></td>
					<td>middle</td>
					<td>1</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">soy</i></td>
					<td>—</td>
					<td>outside</td>
					<td>2</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">rik</i></td>
					<td>—</td>
					<td>high place</td>
					<td>2</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">kim</i></td>
					<td>—</td>
					<td>mountain-ward</td>
					<td>2</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">pis</i></td>
					<td>—</td>
					<td>beach-ward</td>
					<td>2</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">ya</i></td>
					<td>—</td>
					<td>shore, land-side</td>
					<td>2</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">mak</i></td>
					<td>—</td>
					<td>inner / temporal-after</td>
					<td>2</td>
				</tr>
			</tbody>
		</table>

		<p>
			The distinction between <i lang="ain-Latn">etok</i> (front of a moving entity or
			linear path; temporal 'before') and <i lang="ain-Latn">kotca</i> (front of a
			stationary entity) carries real semantic weight:
			<i lang="ain-Latn">i=etok omare</i> 'placed in front of me [as a moving being]'
			means the referent was set ahead on the path, not merely in the visual field
			<Ref k="nakagawa2024" p="243" />. Similarly, <i lang="ain-Latn">oka</i> (back of
			a moving entity; temporal 'after') and <i lang="ain-Latn">osmak</i> (back of a
			stationary entity) form a paired contrast.
		</p>
		<p>
			The locative noun <A w="or" gl="inside, at the location of" /> has developed an
			extended use in several Hokkaido dialects, functioning as a broad oblique marker;
			its grammaticalization in Chitose is documented in <Ref k="sato2021" />.
		</p>

		<Ex
			m="kasi ta as=an"
			g="above LOC stand=4.S"
			tr="I stood on top of it."
			cite="nakagawa2024:239"
			dial="CHI"
			place="Nakagawa ex. 278"
			note="The long form kasi (ka + -si, extendable to kasike(he)) of Type-1 locative ka heads the clause alone; the basic form *ka could not appear here without a preceding antecedent NP. The fourth-person suffix =an carries narrative-first-person reference."
		/>

		<Ex
			m="en=sam un tup kor oka"
			g="1SG.O=beside ALLAT enter while exist"
			tr="It has come to settle beside me."
			cite="nakagawa2024:241"
			dial="CHI"
			place="Nakagawa ex. 281"
			note="Objective prefix en= (1SG.O) attaches directly to the Type-1 locative sam 'beside'. The allative particle un follows, as sam is ⟨place⟩. Contrast the nominative/possessive prefix ku= that would appear on a common-noun affiliative."
		/>

		<Ex
			m="pet oske oma wa ray na"
			g="river inside enter CONJ die FIN"
			tr="It entered the river and died."
			cite="nakagawa2024:245"
			dial="HK"
			place="Nakagawa ex. 299, Samani (様似)"
			note="Type-1 locative oske 'inside (hollow space)' immediately follows its antecedent pet 'river', as required for the basic form. The basic form cannot head a clause alone."
		/>

		<Ex
			m="kim ta arpa=an akusu"
			g="mountain.ward LOC go=4.S CONJ"
			tr="When I went to the mountain…"
			cite="nakagawa2024:246"
			dial="CHI"
			place="Nakagawa ex. 300"
			note="Type-2 locative kim 'mountain-ward' heads the clause in basic form with no antecedent. The common noun nupuri 'mountain' is not ⟨place⟩ and requires nupuri or ta to express the same location."
		/>
	</S>

	<S t="The Type-2 classification controversy" id="type2-controversy">
		<p>
			Some researchers classify Type-2 locative nouns — <i lang="ain-Latn">kim</i>,
			<i lang="ain-Latn">soy</i>, <i lang="ain-Latn">rik</i>, and the like — as common
			nouns on the grounds that they appear independently in the basic form, a property
			otherwise confined to common nouns. Nakagawa retains them as locative nouns on two
			grounds: their long-form morphology follows the locative-noun pattern rather than the
			common-noun affiliative system, and their obligatory ⟨place⟩ status distinguishes them
			from any common noun, which would require a locative noun to mediate its use with
			<i lang="ain-Latn">ta</i> <Ref k="nakagawa2024" p="245–246" /> ‹contested›.
		</p>
		<p>
			One community observation proposes that the long forms of locative nouns carry a
			definiteness or high-specificity marking, which might explain why first- and
			second-person pronominal reference is expressed on the long form rather than the basic
			form <Ref k="aynucorporadiscord" /> (antitwilight, 2024-11-17) ‹speculative›.
			This hypothesis is not attested in the primary-source grammars; it awaits
			cross-dialectal elicitation.
		</p>
		<p>
			The directional adverbs derived from Type-2 forms
			(<i lang="ain-Latn">ekimne</i> 'toward the mountains',
			<i lang="ain-Latn">okimne</i> 'from the mountains';
			<i lang="ain-Latn">esoyne</i> 'outward') and the full locative-noun
			possessive paradigm are treated in <Xr ch="relational-and-spatial-nouns" />.
		</p>
	</S>
</S>

<S t="Common vs proper nouns" id="proper-nouns">
	<p>
		Proper nouns form no grammatically distinct class in Hokkaido Ainu: they are an open
		subset of common nouns, distinguished by reference type rather than by any morphological
		marker, case distinction, or definiteness operator
		<Ref k="nakagawa2024" p="233" />; <Ref k="nakagawa2022pos" p="483–484" />.
		Many place names are transparently compositional:
		<i lang="ain-Latn">Poropet</i> 'big river' (<i lang="ain-Latn">poro</i> + <A w="pet" gl="river" />),
		<i lang="ain-Latn">Siretoko</i> 'tip of the land'
		(<A w="sir" gl="land, appearance" /> + <i lang="ain-Latn">etoko</i>)
		<Ref k="nakagawa2024" p="233" />.
	</p>
	<p>
		One property that distinguishes proper nouns from common nouns in practice: Hokkaido
		personal and place names do not appear in affiliative forms under normal conditions,
		unlike many common nouns
		<Ref k="nakagawa2024" p="233" />. Sakhalin Ainu permits affiliative forms of personal
		names — <span lang="ain-Latn">ku=Harumihi</span> 'my Harumi' is attested
		<Ref k="murasaki1979" /> — but this pattern is absent from the Hokkaido data.
	</p>
	<p>
		Personal-name avoidance, the practice of late and deliberately unflattering naming to
		deflect malevolent attention, and the classification of kamuy names as proper vs common
		reflect cultural conventions rather than grammatical rules
		<Ref k="nakagawa2024" p="234–236" />.
	</p>
</S>

<S t="Pronouns and formal nouns in the subclass system" id="pronouns-formals-overview">
	<p>
		Personal pronouns — <i lang="ain-Latn">kani</i> 'I', <i lang="ain-Latn">eani</i> 'you
		(2SG)', <i lang="ain-Latn">coka</i> 'we (exclusive)' — share the
		common-noun property of standing alone as NP arguments but differ from common nouns in
		that they cannot head relative clauses: there is no grammatical Ainu equivalent of
		English 'the I who is sleeping' <Ref k="nakagawa2022pos" p="482" />. Their paradigms,
		dialect variants, and the fourth-person forms are treated in
		<Xr ch="independent-personal-pronouns" />.
	</p>
	<p>
		Formal nouns — also glossed as noun particles (名助詞) — occupy the bottom of the
		autonomy hierarchy. Unable to appear as bare NP arguments, they nominalise a preceding
		clause or prenominal element into an NP head
		<Ref k="nakagawa2024" p="257–258" />. The class includes
		<A w="p" gl="thing (after vowel)" /> ~ <A w="pe" gl="thing (after consonant)" />,
		<A w="hi" gl="thing, matter, time, place" />,
		<A w="katu" gl="state, manner" />,
		<A w="kur" gl="person" />,
		<A w="utar" gl="plural marker / people" />, and the evidential nominalizers
		<A w="ruwe" gl="trace, track (possessed form: the trace of —)" />,
		<A w="siri" gl="appearance (possessed form: the appearance of —)" />,
		<A w="hawe" gl="voice (possessed form: the voice of —)" />, and
		<A w="humi" gl="sound, sensation (possessed form: the sensation of —)" />,
		whose possessed forms build the evidential paradigm
		<Ref k="nakagawa2024" p="258" />.
		The class is defined and its membership criteria set out in
		<Xr ch="formal-defective-nouns" />; the nominalization function of
		<i lang="ain-Latn">p/pe</i> and <i lang="ain-Latn">hi</i> in relative-clause and
		complement constructions is treated in <Xr ch="nominalization-p-pe" />; the four
		evidential nominalizers are treated in <Xr ch="evidential-schema-overview" />,
		<Xr ch="ruwe-ne-inferential" />, <Xr ch="siri-ne-situational" />,
		<Xr ch="hawe-ne-reportative" />, and <Xr ch="humi-ne-sensory" />.
	</p>
</S>
