<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Principles and the class inventory" id="inventory">
	<p>
		Word class in Hokkaido Ainu is determined by two converging criteria: grammatical role in the
		clause and formal (morphological) behaviour. Meaning is explicitly excluded from the
		classification — words designating properties are verbs, words denoting events can be nouns, and
		the same root may function in more than one class without derivation
		<Ref k="nakagawa2024" p="115–116" />; <Ref k="nakagawa2022pos" p="473" />. Classes are
		prototype-based and their boundaries are gradient; between canonical members and the periphery
		lies a continuum of items sharing some but not all defining properties
		<Ref k="nakagawa2024" p="115–116" />.
	</p>

	<p>
		Three schemes dominate the modern literature. Nakagawa's <Ref k="nakagawa2024" p="116–117" />
		recognises six classes, distributing auxiliary verbs under particles and treating nominalizers as
		a grammatical role rather than a separate class. His English Handbook chapter
		<Ref k="nakagawa2022pos" p="473" /> adds a seventh by splitting auxiliary verbs out of
		particles. Satō <Ref k="sato2008" p="2–3" />, following Tamura's scheme, also arrives at six
		but subdivides noun to accommodate nominalizers and numeral nouns as distinct subclasses. Ijäs
		<Ref k="ijas2023" /> follows the six-class scheme in her pedagogical grammar. Refsing's
		Shizunai grammar <Ref k="refsing1986" p="74–76" /> collapses the inventory into three
		macro-classes (Nominals, Verbals, Clitics), treating adnouns as clitics and grouping
		conjunctions, interjections, and adverbs together ‹contested›.
	</p>

	<table>
		<thead>
			<tr>
				<th>class</th>
				<th>Nakagawa 2024 (6)</th>
				<th>Handbook ch. 14 (7)</th>
				<th>Satō 2008 (6)</th>
				<th>primary diagnostic</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><em>verb</em> 動詞</td>
				<td>✓</td>
				<td>Verb ✓</td>
				<td>動詞 ✓</td>
				<td>heads predicate; takes 1–2 person affixes</td>
			</tr>
			<tr>
				<td><em>noun</em> 名詞</td>
				<td>✓</td>
				<td>Noun ✓</td>
				<td>名詞 ✓</td>
				<td>heads NP; serves as verb argument; ≤1 person affix (possessive)</td>
			</tr>
			<tr>
				<td><em>adverb</em> 副詞</td>
				<td>✓</td>
				<td>Adverb ✓</td>
				<td>副詞 ✓</td>
				<td>modifies VP; not predicate, not argument; objective affix only</td>
			</tr>
			<tr>
				<td><em>adnoun / prenominal</em> 連体詞</td>
				<td>✓</td>
				<td>Prenominal ✓</td>
				<td>連体詞 ✓</td>
				<td>modifies NP; not predicate, not argument; <em>no</em> person affix</td>
			</tr>
			<tr>
				<td><em>interjection</em> 間投詞</td>
				<td>✓</td>
				<td>Interjection ✓</td>
				<td>間投詞 ✓</td>
				<td>no syntactic relation; stands alone as a complete sentence</td>
			</tr>
			<tr>
				<td><em>auxiliary verb</em> 助動詞</td>
				<td>(under particle)</td>
				<td>Auxiliary verb ✓</td>
				<td>(under particle)</td>
				<td>heads predicate but cannot be an independent word</td>
			</tr>
			<tr>
				<td><em>particle</em> 助詞</td>
				<td>✓</td>
				<td>Particle ✓</td>
				<td>助詞 ✓</td>
				<td>attaches to autonomous element; expresses grammatical relation</td>
			</tr>
		</tbody>
	</table>

	<p>
		The consensus at the macro level is solid: six or seven classes, with the treatment of auxiliary
		verbs as the only top-level disagreement. Two deeper disputes — whether property-meaning words
		form an adjective class, and where nominalizers belong — are taken up in the no-adjective
		section and the nominalizer section below.
	</p>
</S>

<S t="The defining diagnostics" id="diagnostics">

	<S t="Verbs" id="verb-diagnostics">
		<p>
			A verb can function as the head of a predicate without a copula and indexes its arguments with
			person affixes. An intransitive verb takes one affix (the sole argument S), a transitive verb
			takes up to two (the transitive subject A and the object O), placed on different sides of the
			stem <Ref k="nakagawa2024" p="116" />. Verbs subclassify by valency: 0-argument
			existential (<A w="an" gl="exist" />), 1-argument intransitive (<A w="arpa" gl="go" />),
			2-argument transitive (<A w="e" gl="eat" />), and 3-argument ditransitive
			(<A w="kore" gl="give" />). The full taxonomy is in <Xr ch="verbal-subclasses-taxonomy" />,
			the valency system in <Xr ch="transitivity-and-valence-classes" />, and the person-affix
			paradigm in <Xr ch="person-marking-architecture" />.
		</p>

		<p>
			Property-meaning words form no separate adjective class: they take the same S affix as action
			verbs, occur as bare predicates with no copula, and accept verbal derivational morphology.
			The two examples below illustrate bare property-verb predicates:
		</p>

		<Ex
			m="Toan nupuri ri."
			g="DEM mountain be.high"
			tr="That mountain is high."
			cite="shibatani1990:19"
			dial="HK"
		/>

		<Ex
			m="Rera ruy."
			g="wind be.strong"
			tr="The wind is strong."
			cite="shibatani1990:19"
			dial="HK"
		/>

		<p>
			The same 1SG intransitive-subject prefix <i lang="ain-Latn">ku=</i> that marks the action
			verb <i lang="ain-Latn">ku=mina</i> 'I laugh' marks the property verb
			<i lang="ain-Latn">ku=pewre</i> 'I am young' <Ref k="nakagawa2024" p="118" />.
			The full argument for dissolving the adjective class is in
			<Xr ch="no-adjective-class-property-verbs" />.
		</p>
	</S>

	<S t="Nouns" id="noun-diagnostics">
		<p>
			A noun heads a noun phrase serving as a verb argument, does not occupy the predicate slot on
			its own, and carries at most one person affix — the possessive (transitive-subject) affix,
			not the nominative affix of verbs <Ref k="nakagawa2024" p="116, 214–216" />;
			<Ref k="nakagawa2022pos" p="473, 480" />. Four subclasses differ in independence, in
			relativisation potential, and in the type of person affix they admit:
		</p>

		<table>
			<thead>
				<tr>
					<th>subclass</th>
					<th>stands alone as S/O</th>
					<th>relativised by a clause</th>
					<th>person affix type</th>
					<th>is a <em>place</em> argument</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>common noun — concept form</td>
					<td>○</td>
					<td>○</td>
					<td>none</td>
					<td>no</td>
				</tr>
				<tr>
					<td>common noun — affiliative form</td>
					<td>○</td>
					<td>○</td>
					<td>possessive (A-type)</td>
					<td>no</td>
				</tr>
				<tr>
					<td>locative noun — long form</td>
					<td>○</td>
					<td>✗</td>
					<td>objective (O-type)</td>
					<td>always</td>
				</tr>
				<tr>
					<td>locative noun — basic form</td>
					<td>✗ (requires antecedent)</td>
					<td>✗</td>
					<td>objective (O-type)</td>
					<td>always</td>
				</tr>
				<tr>
					<td>pronoun</td>
					<td>○</td>
					<td>✗</td>
					<td>none</td>
					<td>no</td>
				</tr>
				<tr>
					<td>formal (defective) noun</td>
					<td>✗ (requires modifier)</td>
					<td>○</td>
					<td>none</td>
					<td>only <i lang="ain-Latn">hi</i>, <i lang="ain-Latn">uske</i></td>
				</tr>
			</tbody>
		</table>

		<p>
			The table synthesises Nakagawa's 表47–48 <Ref k="nakagawa2024" p="215–216" />. The
			person-affix asymmetry is the sharpest diagnostic: the
			<Xr ch="concept-form-affiliative-form">affiliative form</Xr> of a common noun takes the
			possessive (A-type) affix — <i lang="ain-Latn">ku=tekehe</i> 'my hand' — whereas a locative
			noun takes the objective (O-type) affix — <i lang="ain-Latn">en=sam</i> 'my side'
			<Ref k="nakagawa2024" p="215–216, 241" />. An affix cannot appear on a bare concept-form
			noun: <i lang="ain-Latn">*ku=tek</i> is ungrammatical as a possessive.
		</p>

		<p>
			Common nouns split by possession type: alienable possession uses a
			<A w="kor" gl="have" />-construction (<i lang="ain-Latn">a=kor cip</i> 'my boat');
			inalienable possession uses the affiliative form (<i lang="ain-Latn">ku=tekehe</i> 'my
			hand'); an appositive N₁ N₂(concept) construction marks attribute or scope rather than
			ownership (<i lang="ain-Latn">menoko tek</i> 'a woman's hand', not replaceable by a
			possessive prefix) <Ref k="nakagawa2024" p="217–219" />. These constructions are developed
			in <Xr ch="alienable-inalienable-split" /> and <Xr ch="concept-form-affiliative-form" />.
		</p>

		<p>
			Locative nouns (位置名詞) are a small, closed set expressing relative position ('on, beside,
			inside, behind'). Their basic forms require a preceding antecedent NP; their long forms can
			head a clause independently. Both take the objective affix and always function as place
			arguments, distinguishing them formally from common nouns <Ref k="nakagawa2024" p="238–248" />.
			The following example shows the Type-1 locative noun <A w="sam" gl="beside" /> with the
			first-singular objective affix:
		</p>

		<Ex
			m="en=sam un tup kor oka."
			g="1SG.O=beside ALLAT move.across CONJ exist"
			tr="(she) has come over to my side"
			cite="nakagawa2024:241"
			dial="CHI"
			note="Nakagawa ex. 281, Chitose. The locative noun sam takes the objective prefix en= (first-singular O), contrasting with the possessive prefix ku= that would appear on an affiliative common noun. Type-2 locative nouns (kim 'mountain-ward', soy 'outside') stand at clause-head without an antecedent."
		/>

		<p>
			The full inventory of locative nouns, their long-form morphology, and the Type-1/Type-2 divide
			are in <Xr ch="relational-and-spatial-nouns" />.
		</p>

		<p>
			Hokkaido Ainu nouns carry no grammatical number: the same form serves for one or many, and
			number marking is never obligatory <Ref k="nakagawa2024" p="259" />;
			<Ref k="kindaichi1936" p="30–31" />. The formal noun <A w="utar" gl="companions, people" />
			can optionally mark a plural or associative group; in the Saru dialects its range extends to
			inanimates on animist grounds, since all things carry a spirit in the Ainu worldview
			<Ref k="nakagawa2024" p="259" />:
		</p>

		<Ex
			m="a=kor rus utar"
			g="4.A=have fur ASS"
			tr="my furs"
			cite="biratori1969"
			dial="SAR"
			place="川上まつ子 '和人になった兄' (1986), NAM database nam-archive/kawakami-minwa/13, line 226"
			note="utar marks an inanimate noun (furs); the 4th-person transitive prefix a= encodes the narrative first person. Kindaichi & Chiri 1936: 31 restrict utar to animates unless personified — a genuine descriptive disagreement with Nakagawa's Saru data ‹contested›."
		/>

		<p>
			Community members have elaborated that <A w="utari" /> (formally the affiliative form of
			<A w="utar" />) carries a distinct semantic range — 'family, kinship companions' — with the
			possessed form implying a specific relational anchor in a way the bare plural marker does not
			(thegodofneet, aynu-corpora Discord 2025; <Ref k="aynucorporadiscord" />; corroborated by
			<Ref k="nakagawa2024" p="251–252" />) ‹contested›. Transnumerality, the animacy-scope
			dispute, and the interaction with verb number are in
			<Xr ch="nominal-number-utar-transnumerality" />; the four noun subclasses are in
			<Xr ch="nominal-subclasses-and-bound-nouns" />.
		</p>
	</S>

	<S t="Formal (defective) nouns" id="formal-noun-diagnostics">
		<p>
			Formal nouns (形式名詞, also called 名助詞 noun-particles) cannot head an NP without a
			preceding modifier and supply the nominal head of a nominalised clause
			<Ref k="nakagawa2024" p="257–258" />; <Ref k="nakagawa2022pos" p="480–482" />. Canonical
			members include <A w="p" gl="thing, one (after V)" />/<A w="pe" gl="thing, one (after C)" />,
			<A w="hi" gl="fact, time, place" />, <A w="katu" gl="manner, state" />,
			<A w="kur" gl="person" />, <A w="uske" gl="place" />, and
			<A w="utar" gl="people, companions" />. The allomorphy
			<i lang="ain-Latn">p</i> after a vowel / <i lang="ain-Latn">pe</i> after a consonant is
			phonologically conditioned <Ref k="sato2008" p="177" />.
		</p>

		<Ex
			m="tan-pe anak su sekor a=ye p ne."
			g="DEM-NMLZ TOP pot QUOT 4.A=say NMLZ COP"
			tr="This is what is called a pot."
			cite="nakagawa2024:287"
			dial="SAR"
			note="Nakagawa ex. 389, Saru. The demonstrative prenominal tan fuses with pe to yield the demonstrative pronoun tanpe; the second formal noun p nominalises the quotative VP su sekor a=ye 'is called a pot', supplying the predicate complement of the copula ne."
		/>

		<p>
			Four formal nouns grammaticalise further into the evidential system:
			<A w="ruwe" />, <A w="siri" />, <A w="hawe" />, and <A w="humi" /> are
			<Xr ch="concept-form-affiliative-form">affiliative forms</Xr> of the sensory nouns
			<A w="ru" gl="track, path" />, <A w="sir" gl="appearance, land" />,
			<A w="haw" gl="voice" />, and <A w="hum" gl="sound, feeling" /> that become the
			inferential, situational, reportative, and sensory evidentials; the full architecture is in
			<Xr ch="evidential-schema-overview" />. A productive instrument-nominalisation pattern makes
			the clause-head role of formal nouns visible: <i lang="ain-Latn">ani</i> 'with' plus a
			transitivised verb plus <A w="p" /> yields 'the thing for X-ing with' —
			<i lang="ain-Latn">ani e=kanpinuye p</i> 'pencil' (nukopoli, aynu-corpora Discord 2026;
			<Ref k="aynucorporadiscord" />). The full inventory is in <Xr ch="formal-defective-nouns" />
			and the nominalizing function in <Xr ch="nominalization-p-pe" />.
		</p>
	</S>

	<S t="Adverbs and postpositional adverbs" id="adverb-diagnostics">
		<p>
			Adverbs modify verb phrases without entering the predicate slot or argument structure. They
			take neither the nominative person affix nor the possessive affix. Formation types include
			bare underived forms (<A w="ramma" gl="always" />, <A w="earkinne" gl="very" />);
			intransitive verbs plus the adverbialiser <A w="-no" gl="-ly" />
			(<A w="pirkano" gl="well" />, <A w="tunasno" gl="quickly" />); and directionals built from
			locative-noun stems (<A w="ekimne" gl="mountain-ward" />,
			<A w="esoyne" gl="to the outside" />) <Ref k="nakagawa2024" p="273–282" />. The
			adverbialiser and the degree/comparison system are in <Xr ch="adverbializer-no" /> and
			<Xr ch="adverbs-degree-comparison" />.
		</p>

		<p>
			A subclass of <em>postpositional adverbs</em> (後置副詞) takes an antecedent NP and
			functions like a postposition while remaining adverb in syntax: it can stand clause-initially
			and does not require its argument to be a place NP, unlike a locative case particle
			<Ref k="nakagawa2024" p="280–282" />. When the antecedent is pronominal, a postpositional
			adverb takes the objective person affix. Canonical members include
			<A w="sekor" gl="thus, quotative" />, <A w="pak" gl="until" />,
			<A w="osi" gl="after" />, <A w="ani" gl="with, by means of" />, and
			<A w="tura" gl="together with" /> <Ref k="nakagawa2024" p="280–281" />. Their relationship to
			the case system is in <Xr ch="postpositions-local-case-and-motion-events" />.
		</p>
	</S>

	<S t="Adnouns and prenominals" id="adnoun-diagnostics">
		<p>
			Adnouns (連体詞, also called prenominals) modify noun phrases directly and share none of the
			verbal properties: they do not head predicates, do not appear as arguments, and take no person
			affix. The sole distributional privilege of the adnoun is that a case particle can attach to
			it directly, without an intervening formal noun — <i lang="ain-Latn">toan ta</i> 'over there'
			joins a demonstrative prenominal with the locative particle directly, while a common noun
			requires a formal noun first <Ref k="nakagawa2024" p="283, 288" />. Subclasses include
			demonstratives (<A w="tan" gl="this" />, <A w="toan" gl="that" />), numeric
			(<A w="sine" gl="one" />, <A w="tu" gl="two" />), interrogative
			(<A w="hemanta" gl="what kind of" />), indefinite, and general prenominals
			(<A w="pinne" gl="male" />, <A w="matne" gl="female" />, <A w="sonno" gl="true, real" />)
			<Ref k="nakagawa2024" p="283" />. A prenominal followed by the formal noun
			<A w="pe" gl="thing" /> yields a demonstrative pronoun
			(<A w="tanpe" gl="this thing" />, <A w="toanpe" gl="that thing" />);
			the demonstrative system is in <Xr ch="demonstratives-anaphora-definiteness" />.
		</p>

		<p>
			The property verb <A w="pon" gl="be small" /> occupies the same pre-noun position as an
			adnoun but retains full verbal morphology in the predicate, illustrating the verb/noun
			continuum developed further below:
		</p>

		<Ex
			m="pon hekaci"
			g="be.small child"
			tr="a small child"
			cite="nakagawa2022pos:475"
			note="pon 'be small' precedes the noun without morphological change, in the same attributive position as a true prenominal; in predicate position it takes person affixes and verbal derivational morphology like any intransitive verb."
		/>
	</S>

	<S t="Particles and auxiliary verbs" id="particle-diagnostics">
		<p>
			Particles attach to autonomous clause elements and express grammatical relations without
			entering the predicate slot or argument structure. Nakagawa
			<Ref k="nakagawa2024" p="295" /> recognises five subtypes: case particles (格助詞 —
			<A w="ta" gl="at/in" />, <A w="wa" gl="from" />, <A w="un" gl="to" />,
			<A w="peka" gl="via" />, <A w="ne" gl="become (translative)" />), auxiliary particles
			(助動詞), adverbial/focus particles (副助詞), final particles (終助詞), and conjunctive
			particles (接続助詞). Ainu has no nominative or accusative case particles: subject and object
			are identified through word order, person affixes, and context
			<Ref k="sato2008" p="3" />; <Ref k="nakagawa2024" p="296" />. The four locative case
			particles all require a place argument and are distinct from postpositional adverbs that can
			stand clause-initially <Ref k="nakagawa2024" p="296, 281–282" />.
		</p>

		<p>
			The Handbook chapter <Ref k="nakagawa2022pos" p="473" /> splits auxiliary verbs into a
			seventh class on the grounds that they head predicates but cannot stand as independent words.
			Items such as <A w="rusuy" gl="want to" /> and <A w="easkay" gl="be able to" /> typically
			fuse with the preceding verb (<i lang="ain-Latn">arpa-rusuy=an</i> 'I want to go'), while
			the perfective particle <A w="a" gl="PFV" /> never does; the boundary is gradient rather
			than sharp <Ref k="nakagawa2024" p="291–292" /> ‹contested›.
		</p>
	</S>

	<S t="Interjections" id="interjection-diagnostics">
		<p>
			Interjections stand alone as complete sentences with no syntactic relation to a surrounding
			clause <Ref k="nakagawa2024" p="290" />. They form a large and dialect-specific inventory of
			greetings (<A w="irankarapte" gl="greetings" />), calls, acknowledgements, and emotional
			expressions. The class is treated in <Xr ch="interjections-ideophones-sound-symbolism" />.
		</p>
	</S>
</S>

<S t="The no-adjective analysis" id="no-adjective">
	<p>
		The most consequential classification decision in modern Hokkaido Ainu description is the
		absence of an adjective class. Words translating English adjectives —
		<A w="hure" gl="be red" />, <A w="tanne" gl="be long" />, <A w="poro" gl="be big" />,
		<A w="pirka" gl="be good/healthy" />, <A w="wen" gl="be bad" />,
		<A w="mea" gl="be cold" /> — are all intransitive verbs
		<Ref k="nakagawa2024" p="118" />; <Ref k="nakagawa2022pos" p="474" />;
		<Ref k="sato2008" p="2" />; <Ref k="shibatani1990" p="19" />; <Ref k="refsing1986" p="76" />.
		Historically, Kindaichi &amp; Chiri <Ref k="kindaichi1936" p="123–124" /> still posited a
		形容詞 class with its own person-inflected paradigm; Chiri's later work
		<Ref k="chiri1942" /> rejected the verb/adjective distinction and coined the unified term 用詞
		for the merged class; all subsequent description has inherited that move — historically contested, now the
		consensus of the modern literature ‹consensus›.
	</p>

	<p>
		Three arguments converge <Ref k="nakagawa2022pos" p="474–477" />.
		<strong>Syntactically</strong>, property words occupy the predicate slot with no copula, in
		exactly the same frame as action verbs. <strong>Morphologically</strong>, causative
		(<i lang="ain-Latn">-re/-e/-ka</i>) and applicative (<i lang="ain-Latn">e-/o-/ko-</i>)
		affixes attach to property words under the same semantic conditions as to action verbs —
		<i lang="ain-Latn">i-ruska</i> 'be angry at something' uses the applicative on
		<A w="ruska" gl="be angry" /> <Ref k="nakagawa2022pos" p="476" />.
		<strong>Semantically</strong>, the same form serves both the stative reading ('be X') and the
		inchoative reading ('become X'): <A w="poro" /> = 'be big' and 'become big'. This
		stative/inchoative identity is general to Ainu intransitive verbs —
		<A w="ne" gl="be; become" />, <A w="siknu" gl="be alive; revive" /> — and does not
		distinguish property words from action verbs
		<Ref k="nakagawa2024" p="118–119" />; <Ref k="shibatani1990" p="19" />. The inchoative
		reading surfaces in imperatives:
	</p>

	<Ex
		m="tunasno pirka"
		g="quickly be.good"
		tr="Get well quickly!"
		cite="nakagawa2024:119"
		dial="SAR"
		note="pirka means both 'be good/healthy' and 'become good/healthy'; the bare imperative form receives the inchoative reading here. *pirka ne for 'become good' is ungrammatical because the copula ne cannot add an inchoative value — pirka already encodes change-of-state as an intransitive verb."
	/>

	<p>
		In attributive position, property words precede the noun with no morphological change, in the
		same slot occupied by relative-clause verbs: <i lang="ain-Latn">pon hekaci</i> 'small child'
		has the same surface structure as <i lang="ain-Latn">arki utar</i> 'people who came', where
		<A w="arki" gl="come.PL" /> is unambiguously a verb <Ref k="nakagawa2022pos" p="475" />. The
		residual adjective-like behaviour — the split between the linkers
		<i lang="ain-Latn">wa</i> and <i lang="ain-Latn">no</i> in conjoined VPs — reduces to a
		semantic (static vs dynamic) distinction in the whole VP, not a difference in the part of speech
		of its head <Ref k="nakagawa2022pos" p="479" />. The full argument with all diagnostics is in
		<Xr ch="no-adjective-class-property-verbs" />.
	</p>
</S>

<S t="Three disputed boundaries" id="boundaries">

	<S t="The verb–noun continuum" id="verb-noun-continuum">
		<p>
			Intransitive verbs convert to nouns without morphological change: the same form is a predicate
			in one clause and a noun-modifier or compound-noun constituent in another, so the verb/noun
			boundary is positional and relational rather than marked on the word itself
			<Ref k="nakagawa2024" p="267–272" />. Compound-noun formation makes this visible: Nakagawa's
			arity-based analysis after <Ref k="kirikae1984" /> shows that many items classed as N+N
			compounds have a verbal non-head — <i lang="ain-Latn">onture-p</i> 'strawberry' (literally
			'that which swims upstream') has a 1-argument-verb head
			<Ref k="nakagawa2024" p="267–268" />. Community observation has noted that Ainu has very few
			coordinate or exocentric pure-noun compounds (<i lang="ain-Latn">haca-hapo</i> 'parents',
			<i lang="ain-Latn">po-at</i> 'womb'); most nominal compound formation is verb-centred, in
			keeping with the near-universal convertibility of intransitives to nouns (antitwilight,
			aynu-corpora Discord 2026; <Ref k="aynucorporadiscord" />) ‹contested›. Compound structure
			is in <Xr ch="noun-noun-compounding" />; nominal and verbal derivation in
			<Xr ch="denominal-deverbal-verb-derivation" />.
		</p>
	</S>

	<S t="Conjunctions: a distributed category" id="conjunctions">
		<p>
			No independent conjunction class (接続詞) is set up. Items glossed as conjunctions in earlier
			work — <A w="akusu" gl="then, when" />, <A w="yakun" gl="if" />,
			<A w="oraun" gl="after that" />, <A w="kusu" gl="because" />,
			<A w="yakne" gl="as for, if" /> — are distributed between conjunctive particles and adverbs
			on the basis of their primary function <Ref k="nakagawa2024" p="116–117" />;
			<Ref k="sato2008" p="3" />. Even Tamura, who had set up a conjunction category, noted that
			it was handled as conjunctive particles for convenience
			<Ref k="nakagawa2024" p="117" />. Refsing <Ref k="refsing1986" p="76" /> keeps
			conjunctions, interjections, and adverbs together in one macro-class — the counterpart of the
			modern distributed analysis ‹contested›. The same item (<i lang="ain-Latn">oraun</i>,
			<i lang="ain-Latn">kusu</i>) receives the label conjunction, conjunctive particle, or
			postpositional adverb depending on the analytical framework, a terminological split with no
			consequence for the forms themselves. The discourse-connective system is in
			<Xr ch="conjunctions-discourse-connectives" />.
		</p>
	</S>

	<S t="Nominalizers: subclass or grammatical role?" id="nominalizer-debate">
		<p>
			The status of nominalizers is the deepest terminological split in the literature. Satō
			<Ref k="sato2008" p="174–182" /> distinguishes 名詞化辞 (nominalizer) — producing an
			internally complete content clause — from 形式名詞 (formal noun) — the head of a relative
			clause with a gap; both are noun subclasses in his system. Nakagawa
			<Ref k="nakagawa2024" p="503–504" /> retains 形式名詞 as the word-class label and uses 補文標識
			(complementizer) for the grammatical role a formal noun plays in certain clausal contexts, so
			that nominalising a VP and heading a relative clause are two uses of one class, not two
			classes. Refsing <Ref k="refsing1986" p="259–264" /> uses "nominalizer" more broadly to
			cover what Chiri treated as mood morphemes (<A w="ruwe" />, <A w="siri" />,
			<A w="hawe" />) as one of four sentence-conversion types. The three analyses are incompatible
			at the word-class level, though they agree on the inventory of forms involved ‹contested›.
		</p>

		<p>
			A diachronic proposal that the affiliative suffix <i lang="ain-Latn">-i</i> derives from
			the formal noun <A w="hi" /> is Nakagawa's own and flagged as a hypothesis
			<Ref k="nakagawa2022pos" p="493" /> ‹speculative›. Community discussion has noted that the
			absence of a true infinitive in Hokkaido Ainu — where head-marking and
			nominalisation-dependent grammar leave no role for a bare verbal noun — means that
			<A w="pe" />, <A w="hi" />, and <A w="kuni" /> nominalisations with auxiliary-like
			predicates handle what many languages express with infinitives or purpose clauses (nukopoli,
			aynu-corpora Discord 2024; <Ref k="aynucorporadiscord" />) ‹contested›. The formal-noun
			inventory is in <Xr ch="formal-defective-nouns" /> and the nominalizing function in
			<Xr ch="nominalization-p-pe" />.
		</p>
	</S>
</S>
