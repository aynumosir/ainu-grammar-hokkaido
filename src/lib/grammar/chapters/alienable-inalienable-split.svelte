<!-- src/lib/grammar/chapters/alienable-inalienable-split.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Two dimensions and three constructions" id="overview">
	<p>
		Hokkaido Ainu has no genitive case-particle, no possessive preposition or postposition, and
		no adjectival inflection for possession. Possession is instead expressed either by
		head-marking on the possessed noun itself or by a verb-based attributive clause using
		<A w="kor" gl="have, possess" />. The language is "predominantly head-marking, exhibiting …
		polysynthesis, and having a robust alienability opposition"
		<Ref k="bugaeva2021poss" p="52" />.
	</p>

	<p>
		Bugaeva, Nichols &amp; Bickel identify two independent grammatical dimensions that should not
		be conflated <Ref k="bugaeva2021poss" p="46–47, 58–60, 81–82" />. The first is
		<em>possessibility</em> — whether a noun's argument structure includes a possessor slot at
		all (optionally, obligatorily, or not at all). The second is the <em>coding strategy</em> —
		whether the relationship, when licensed, is expressed by head-marking on the possessed noun
		or by a verbal attributive clause with <i lang="ain-Latn">kor</i>. These dimensions
		correlate with the traditional alienability distinction but the correlation is fixed
		grammatically rather than speaker-chosen: "a speaker does not decide to convey whether an
		item can be owned … the choice of a noun determines the possessive construction"
		<Ref k="bugaeva2021poss" p="47" />.
	</p>

	<table>
		<caption>The two grammatical dimensions of Hokkaido Ainu possession</caption>
		<thead>
			<tr>
				<th>dimension</th>
				<th>values</th>
				<th>Hokkaido Ainu realisation</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><strong>possessibility</strong></td>
				<td>optionally possessible / obligatorily possessed / non-possessible</td>
				<td>
					body parts and kin = obligatorily possessed; artefacts, animals, places =
					optionally possessible; wild fauna and flora = typically non-possessible
				</td>
			</tr>
			<tr>
				<td><strong>coding strategy</strong></td>
				<td>inalienable (head-marked) / alienable (verbal attributive)</td>
				<td>affiliative construction vs. <i lang="ain-Latn">kor</i> construction</td>
			</tr>
		</tbody>
	</table>

	<p>
		Three surface patterns cover "N₁'s N₂" in Hokkaido Ainu. The first two are possession
		constructions; the third is a modifier–head relation (quality, material, or kind) and is not
		possession <Ref k="nakagawa2024" p="217–218" />; <Ref k="sato2008" p="150–151" />:
	</p>

	<table>
		<thead>
			<tr>
				<th>#</th>
				<th>construction</th>
				<th>template</th>
				<th>relation</th>
				<th>example</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1</td>
				<td>alienable (<i lang="ain-Latn">kor</i>)</td>
				<td>
					N₁ <i lang="ain-Latn">kor</i> N₂<sub>concept</sub>
				</td>
				<td>transferable possession</td>
				<td>
					<i lang="ain-Latn">a=kor cip</i> 'my canoe'
				</td>
			</tr>
			<tr>
				<td>2</td>
				<td>inalienable (affiliative)</td>
				<td>A-prefix=N₂<sub>affiliative</sub></td>
				<td>non-transferable possession</td>
				<td>
					<i lang="ain-Latn">ku=tek-ehe</i> 'my hand'
				</td>
			</tr>
			<tr>
				<td>3</td>
				<td>modifier (non-possessive)</td>
				<td>
					N₁<sub>concept</sub> N₂<sub>concept</sub>
				</td>
				<td>quality / material / kind</td>
				<td>
					<i lang="ain-Latn">kane cise</i> 'metal house'
				</td>
			</tr>
		</tbody>
	</table>

	<p>
		The diagnostic that pattern (3) is not possession is person-substitutability: in patterns
		(1) and (2) the possessor N₁ can be replaced by a person-marking affix
		(<i lang="ain-Latn">ku=kor cip</i>, <i lang="ain-Latn">ku=tek-ehe</i>); in (3) it cannot —
		<i lang="ain-Latn">*ku=ru</i> 'my footprint' is impossible, even though
		<i lang="ain-Latn">seta ru</i> 'a dog's footprint' is well-formed
		<Ref k="nakagawa2024" p="218" />. The two possession constructions are in complementary
		distribution per noun: the construction is determined by noun-class membership, not by the
		speaker's choice at utterance time <Ref k="nakagawa2024" p="218" />;
		<Ref k="bugaeva2021poss" p="47" />. Where that membership is gradient or
		construal-sensitive, the picture is more complex (§4 below). The morphophonology of the
		affiliative suffix is detailed in <Xr ch="affiliative-suffix-morphophonology" />, and the
		concept/affiliative distinction as a noun-class parameter in
		<Xr ch="concept-form-affiliative-form" />.
	</p>
</S>

<S t="The kor construction" id="kor-construction">
	<p>
		In the alienable construction the possessed noun (N₂) remains in the concept form and is
		preceded by the transitive verb <A w="kor" gl="have, possess" />; the possessor (N₁ or a
		person-marking prefix) is the transitive subject of that verb:
		<i lang="ain-Latn">a=kor cip</i> 'my canoe',
		<i lang="ain-Latn">a=kor makiri</i> 'my knife',
		<i lang="ain-Latn">a=kor hayokpe</i> 'my armour'
		<Ref k="nakagawa2024" p="218" />. The semantics are those of alienable (transferable)
		possession: the possessed entity's existence is independent of the possessor's, and transfer
		to another person makes it theirs <Ref k="nakagawa2024" p="218" />. The negative counterpart
		replaces <i lang="ain-Latn">kor</i> with <A w="sak" gl="lack" />; predicative HAVE and BE
		schemas are treated in <Xr ch="predicative-possession-clauses" />, and the particle
		<i lang="ain-Latn">kor</i> 'while' that is homophonous with the verb in
		<Xr ch="simultaneous-kor-clauses" />.
	</p>

	<Ex
		m="ku=kor seta hure toan kur kor cape retar"
		g="1SG.A=have dog be.red DIST.DEM person have cat be.white"
		tr="My dog is red; that person's cat is white."
		note="Minimal alienable pair: 1SG subject prefix ku= (first kor) vs. overt third-person possessor NP toan kur 'that person' (second kor). Both seta 'dog' and cape 'cat' remain in the concept form."
		cite="utari1994"
		dial="HK"
	/>

	<p>
		Bugaeva et al. analyse the <i lang="ain-Latn">kor</i> construction as an
		<em>appositive possessive with a verbal modifier</em>: the attributive is a finite relative
		clause with <i lang="ain-Latn">kor</i> whose object is gapped and coreferential with the
		head noun <Ref k="bugaeva2021poss" p="55" />. The construction retains relative-clause
		properties: <i lang="ain-Latn">kor</i> can carry perfective and plural morphology and
		supports relative-clause stacking
		<Ref k="bugaeva2021poss" p="55–58" />. With a third-person possessor,
		<i lang="ain-Latn">kor</i> loses overt person-marking and cliticises to the head noun —
		<i lang="ain-Latn">Anna katkemat kor-ninkari</i> — a step toward head-marking that
		Bugaeva et al. characterise as ongoing grammaticalisation
		<Ref k="bugaeva2021poss" p="59" /> ‹speculative›.
	</p>

	<p>
		The <i lang="ain-Latn">kor</i> construction also extends to <em>belonging</em> and
		<em>social dominion</em>, not only transferable ownership. When lexicalised in the compound
		N-<i lang="ain-Latn">kor</i>-<i lang="ain-Latn">kur</i> 'the one who holds N', it yields
		titles of authority such as <i lang="ain-Latn">kotan kor kur</i> 'village chief' (lit.
		'village-holding person') and the divine epithet
		<i lang="ain-Latn">nupuri kor kamuy</i> 'the god who owns the mountain'
		<Ref k="nakagawa2024" p="218–219" />; <Ref k="bugaeva2021poss" p="56" />:
	</p>

	<Ex
		m="wa kotan kor kur a=ne wa an=an"
		g="CONJ village have person 4.A=COP CONJ exist=4.S"
		tr="I was the village chief."
		note="Narrator uses narrative fourth person (a=, =an) for first-person reference throughout the text. kotan kor kur marks social dominion rather than transferable ownership of the village."
		cite="ilcaa1976"
		dial="SAR"
	/>

	<p>
		The set of nouns attested in the <i lang="ain-Latn">kor</i> construction is lexically
		bounded. Drawing on Tamura's dictionary, Bugaeva et al. identify six classes of alienable
		nouns: people and kin (the largest class, 24 items including
		<i lang="ain-Latn">aynu</i>, <i lang="ain-Latn">hapo</i>,
		<i lang="ain-Latn">nispa</i>), place and environment (11:
		<i lang="ain-Latn">kotan</i>, <i lang="ain-Latn">mosir</i>,
		<i lang="ain-Latn">pet</i>), food and drink (7), tools and ritual objects (7:
		<i lang="ain-Latn">emus</i> 'sword', <i lang="ain-Latn">ikor</i> 'treasures'), domestic
		animals (including <i lang="ain-Latn">seta</i> 'dog' and
		<i lang="ain-Latn">pewrep</i> 'bear cub'), and human attributes (7:
		<i lang="ain-Latn">isoytak</i> 'story', <i lang="ain-Latn">itak</i> 'language',
		<i lang="ain-Latn">rametok</i> 'bravery'). Wild animals and uncultivated plants are absent
		— nothing in the world is their owner
		<Ref k="bugaeva2021poss" p="55–56" />; <Ref k="tamura2000" p="88" />. A further affective
		use of <i lang="ain-Latn">kor</i> with people nouns adds a nuance of endearment:
		<i lang="ain-Latn">a-kor pon menoko</i> 'my dear young girl'
		<Ref k="bugaeva2021poss" p="56" />.
	</p>
</S>

<S t="The affiliative construction" id="affiliative-construction">
	<p>
		In the inalienable construction the possessed noun takes the
		<Xr ch="concept-form-affiliative-form">affiliative (possessed) form</Xr>, derived from the
		concept form by a suffix that copies or echoes a vowel of the stem, and simultaneously
		carries a person-marking prefix drawn from the transitive-subject (A) set:
		<i lang="ain-Latn">ku=</i> (1SG), <i lang="ain-Latn">e=</i> (2SG),
		<i lang="ain-Latn">a=</i> or <i lang="ain-Latn">an=</i> (4th/indefinite), zero (3rd)
		<Ref k="nakagawa2024" p="215–216" />; <Ref k="sato2008" p="151, 154" />. Relational and
		spatial nouns deviate from this pattern by taking the <em>objective</em> (O) prefix set
		instead; they are treated in <Xr ch="relational-and-spatial-nouns" />. The A-prefix
		paradigm as a whole is set out in <Xr ch="person-marking-architecture" />. The possessor
		is thus encoded as a grammatical subject: Satō notes that
		<i lang="ain-Latn">e=paro</i> 'your mouth' is literally
		'you-<em>subject</em> mouth-in-relation', which reads oddly when translated word-for-word
		but reflects exactly the head-marking logic of the language
		<Ref k="sato2008" p="150" />.
	</p>

	<Ex
		m="ku=kema-ha ka arka ku=tek-ehe ka arka"
		g="1SG.POSS=leg-POSS even hurt 1SG.POSS=hand-POSS even hurt"
		tr="My leg hurts too, and my hand hurts too."
		note="kema 'leg' is vowel-final (type I) and takes the affiliative suffix -ha; tek 'hand' is type III-2 and takes -ehe. Both carry the 1SG possessive prefix ku=. The possessed body-part NP is the single argument of the intransitive verb arka 'hurt'."
		cite="utari1994"
		dial="HK"
	/>

	<p>
		The semantic classes of nouns that take the affiliative construction span five groups
		<Ref k="nakagawa2024" p="219–221" />:
	</p>

	<ul>
		<li>
			<strong>Body parts and normally worn or carried items.</strong>
			<A w="sik" gl="eye" /> → <i lang="ain-Latn">sik-ihi</i>;
			<A w="par" gl="mouth" /> → <i lang="ain-Latn">par-o</i> (irregular);
			<A w="tek" gl="hand" /> → <i lang="ain-Latn">tek-ehe</i>;
			<A w="kema" gl="leg, foot" /> → <i lang="ain-Latn">kema-ha</i>. Clothing normally
			worn is treated analogously (<i lang="ain-Latn">a=tesma-ha</i> 'my snowshoes') and
			carried tools in some contexts (<i lang="ain-Latn">a=tasiro-ho</i> 'my mountain-knife')
			<Ref k="nakagawa2024" p="219" />.
		</li>
		<li>
			<strong>Part–whole relations.</strong>
			<i lang="ain-Latn">at sinta atu-hu</i> 'cradle cord';
			<i lang="ain-Latn">rur sayo ruri-hi</i> 'gruel broth'
			<Ref k="nakagawa2024" p="219–220" />.
		</li>
		<li>
			<strong>Kinship.</strong> A subset of kin terms takes the affiliative construction and
			obligatory person-marking; the full paradigm, the address/reference contrast, and
			dialect variation in kin-term assignment are set out in
			<Xr ch="kinship-honorific-possession" />
			<Ref k="nakagawa2024" p="221–225" />; <Ref k="sato2008" p="151" />.
		</li>
		<li>
			<strong>Material-to-product.</strong>
			<i lang="ain-Latn">ohaw ihawe-he</i> 'the taste/essence of the soup'
			<Ref k="nakagawa2024" p="220" />.
		</li>
		<li>
			<strong>Miscellaneous relational.</strong>
			<i lang="ain-Latn">atay-e-he</i> 'price';
			<i lang="ain-Latn">hura-ha</i> 'smell';
			<i lang="ain-Latn">tokuy-e-he</i> 'best friend';
			<i lang="ain-Latn">asuru-hu</i> 'rumour'
			<Ref k="nakagawa2024" p="220" />.
		</li>
	</ul>

	<p>
		The sensory nouns <A w="haw" gl="voice" />, <A w="sir" gl="appearance, situation" />,
		<A w="hum" gl="sound, feeling" />, and <A w="ru" gl="track, path" /> participate in the
		affiliative construction as ordinary possessed nouns before their possessed forms
		grammaticalised as evidential formal nouns (treated in
		<Xr ch="evidential-schema-overview" />
		<Ref k="nakagawa2024" p="258–259" />). The possessive use of
		<i lang="ain-Latn">hawe</i> 'voice' is attested in ILCAA oral-literature texts
		<Ref k="ilcaa1976" />. Community analysis of the form
		<i lang="ain-Latn">e=hawe aste</i> 'raise your voice' similarly parses
		<i lang="ain-Latn">e=hawe</i> as the possessed noun '2SG.POSS=voice' under the verb
		<i lang="ain-Latn">aste</i>, confirming that <i lang="ain-Latn">hawe</i> remains a
		productive possessed form alongside its evidential use
		(nukopoli, aynu-corpora Discord, 2025-12-03; <Ref k="aynucorporadiscord" />)
		‹corpus-confirmed›.
	</p>

	<p>
		The collective noun <A w="utar" gl="companions, kin, community members" /> provides a
		further illustrative case. A community-proposed analysis holds that
		<i lang="ain-Latn">utari(hi)</i> is the affiliative form of
		<i lang="ain-Latn">utar</i>, narrowing the sense toward '(someone's) companions / kin' in
		the same way the affiliative form generally specifies a relational reading against the more
		general concept form (thegodofneet, aynu-corpora Discord, 2025-09-17;
		<Ref k="aynucorporadiscord" />). This is consistent with Nakagawa's treatment of
		<i lang="ain-Latn">k=utari</i> as a possessed kin-group NP
		<Ref k="nakagawa2024" p="251–252" /> ‹contested›.
	</p>

	<p>
		A related set of <em>affiliative-type prefixes</em> — <i lang="ain-Latn">e-</i>
		'its tip/head of' and <i lang="ain-Latn">o-</i> 'its end/base of' — prefix to verbs and
		behave analogously to affiliative nouns in requiring a possessive antecedent
		<Ref k="kobayashi2025" p="171" />. These are homophonous with the applicative prefixes
		<i lang="ain-Latn">e-/o-</i> that increase valency by one; Kobayashi distinguishes them by
		valency neutrality and by restriction to unaccusative intransitive hosts
		<Ref k="kobayashi2025" p="171" /> ‹contested›. The applicative prefixes and the overlap
		with relational nouns are taken up in <Xr ch="relational-and-spatial-nouns" />.
	</p>
</S>

<S t="Class membership: gradient and construal-sensitive" id="class-membership">
	<p>
		The core of the noun-class split is unambiguous. Body parts, genealogical kin terms, and
		inalienable relational concepts are obligatorily possessed and take the affiliative
		construction; artefacts, domestic animals, and transferable resources take
		<i lang="ain-Latn">kor</i> and cannot take a person-marking prefix directly
		<Ref k="bugaeva2021poss" p="52, 55" />. Satō's diagnostic is exact: 'money'
		(<i lang="ain-Latn">kane</i>) takes only <i lang="ain-Latn">ku=kor kane</i>; the form
		<i lang="ain-Latn">*ku=kane</i> is impossible. 'Mouth' (<i lang="ain-Latn">par</i>) takes
		only <i lang="ain-Latn">e=paro</i>; <i lang="ain-Latn">*e=kor par</i> is impossible
		<Ref k="sato2008" p="150–151" />. The two-construction distinction is documented in all
		major descriptive and pedagogical accounts
		<Ref k="nakagawa2024" p="217–221" />; <Ref k="sato2008" p="149–156" />;
		<Ref k="ijas2023" />.
	</p>

	<p>
		Obligatorily-possessed nouns are <em>bound</em>: they almost never appear without possessive
		morphology. When cited in isolation, speakers give the 3rd-person (zero-prefix) affiliative
		form — <i lang="ain-Latn">sik-ihi</i> 'eye(s), his/her eye', never bare
		<i lang="ain-Latn">sik</i>. In riddles, where no specific possessor is identified, the
		4th-person (indefinite) A-prefix takes over:
		<i lang="ain-Latn">a=sik-ihi</i> 'people's eyes'
		<Ref k="bugaeva2021poss" p="53" />. These bound-noun properties, and the difference between
		nominal subclasses with and without obligatory possession, are developed in
		<Xr ch="nominal-subclasses-and-bound-nouns" />.
	</p>

	<p>
		When an obligatorily-possessed noun is incorporated with a non-coreferential possessor, the
		<Xr ch="antipassive-detransitive-i">antipassive prefix <i lang="ain-Latn">i-</i></Xr>
		encodes the unspecified possessor and allows the bare noun root to incorporate:
		<i lang="ain-Latn">i-sapa-kar</i> 'cut someone's head',
		<i lang="ain-Latn">i-rekut-tuye</i> 'cut someone's throat'
		<Ref k="bugaeva2021poss" p="53–54" />. Hokkaido Ainu thus has two distinct
		de-specifying strategies: the indefinite A-prefix <i lang="ain-Latn">a=</i>, which retains
		possessive morphology and keeps the noun as a free NP, and the antipassive
		<i lang="ain-Latn">i-</i>, which suppresses the possessor and licences incorporation.
		These are treated in
		<Xr ch="noun-incorporation-subject-possessor-stranding" />
		<Ref k="bugaeva2021poss" p="54, 81" />.
	</p>

	<p>
		Several nouns fall outside the clean bipartition. The noun
		<A w="kotan" gl="village" /> takes both constructions approximately equally:
		<i lang="ain-Latn">a=kor kotan</i> ~ <i lang="ain-Latn">a=kotanu</i>. The noun
		<A w="mosir" gl="world, land, island" /> takes only the <i lang="ain-Latn">kor</i>
		construction in prose (<i lang="ain-Latn">*a=mosirihi</i> is unattested, though
		<i lang="ain-Latn">mosiri</i> appears in verse). The noun
		<A w="cise" gl="house" /> is dialect-split: Saru, Chitose, and Horobetsu prose uses only
		<i lang="ain-Latn">kor</i> for 'so-and-so's house', but verse and other dialects allow the
		affiliative <i lang="ain-Latn">cisehe</i>; the compound
		<i lang="ain-Latn">uncise</i> 'home, dwelling-place' takes the affiliative exclusively
		across dialects <Ref k="nakagawa2024" p="220–221" />.
	</p>

	<p>
		The clearest evidence for construal-sensitivity in class assignment comes from Nakagawa's
		discussion of the trap-bow (<i lang="ain-Latn">ku</i>). In the Ainu worldview, the prey
		animal chooses whose trap-bow to fall to, so the bow always pre-belongs to a specific
		person: it is construed as inalienable and takes the affiliative form
		<Ref k="nakagawa2024" p="229" />:
	</p>

	<Ex
		m="tan pe a=po-ho ku-wehe ne"
		g="this thing 4.A=son-POSS bow-POSS COP"
		tr="This is my son's (bow)."
		note="Inalienable (affiliative) construction for the trap-bow. ku-wehe is the affiliative of ku 'bow'; poho is the affiliative of po 'son'. The possessor a=poho 'my son' is itself in the affiliative form."
		cite="nakagawa2024"
		dial="HK"
	/>

	<p>
		The same bow, framed as an ordinary transferable object, takes the
		<i lang="ain-Latn">kor</i> construction <Ref k="nakagawa2024" p="229" />:
	</p>

	<Ex
		m="tan ku a=po-ho kor ku ne"
		g="this bow 4.A=son-POSS have bow COP"
		tr="This is a bow that my son has."
		note="Alienable (kor) construction for the same referent. The concept form ku appears twice: as the topic NP and as the gapped object of kor. Nakagawa uses the pair to show that the construction choice is construal-sensitive, not fixed by the referent."
		cite="nakagawa2024"
		dial="HK"
	/>

	<p>
		The inalienable frame foregrounds that the bow has a pre-assigned owner in a cosmological
		sense; the alienable frame treats it as a tool in ordinary human hands. This pair is the
		strongest available evidence that the noun-class split, while grammatical in its effects,
		is not wholly referent-determined ‹contested›. A parallel diachronic observation runs in the
		same direction: Bugaeva et al. note that loanwords such as
		<i lang="ain-Latn">kosonde</i> 'kimono' enter as non-possessible and take
		<i lang="ain-Latn">kor</i>, suggesting that unfamiliarity is the default entry point for
		new nouns and that possessibility can be acquired over time
		<Ref k="bugaeva2021poss" p="57, 76–77" /> ‹speculative›.
	</p>
</S>

<S t="Analytical perspectives" id="analytical-perspectives">
	<p>
		The affiliative trigger has been debated in terms of both what the formal condition is and
		what typological category it instantiates.
	</p>

	<p>
		The oldest question in the descriptive literature is whether the affiliative form is licensed
		by the <em>specificity</em> of the possessor or by a strictly <em>grammatical</em>
		condition. Tamura held that N₂ takes the affiliative only when N₁ is specific: the contrast
		between <i lang="ain-Latn">kamuy rus-ihi</i> 'the specific bear's pelt' and
		<i lang="ain-Latn">kamuy rus</i> 'bear-pelt in general' was the key datum, the latter
		approaching the status of a compound
		<Ref k="nakagawa2024" p="231" />. Satō objected that the affiliative appears with
		non-specific possessors:
		<i lang="ain-Latn">aynu opitta hon-ihi kor wa okay pe ne</i>
		'all humans have a belly' — where <i lang="ain-Latn">aynu opitta</i> 'all people' is
		maximally non-specific — carries the affiliative form <i lang="ain-Latn">hon-ihi</i>
		<Ref k="sato2008" p="155" />; <Ref k="nakagawa2024" p="231" /> ‹contested›.
		Nakagawa's analysis shifts the frame entirely: the affiliative form appears wherever the
		noun carries a person-marking A-prefix <em>or</em> occupies the modifier slot of a
		relative-clause structure, regardless of possessor specificity
		<Ref k="nakagawa2024" p="230–233" />. Three constructions support this: the
		indefinite-person affiliative (<i lang="ain-Latn">a=teke munin pe ne na</i>
		'one's hand will rot', a general warning); affiliatives inside relative clauses (the
		modifier 'with a long tail' requires <i lang="ain-Latn">sara-ha tanne</i>, not
		<i lang="ain-Latn">*sar tanne</i>, because the modifier slot is a relative-clause
		position); and affiliatives triggered by quantifiers
		<i lang="ain-Latn">usa</i> 'various' and <i lang="ain-Latn">nep</i> 'whatever'
		<Ref k="nakagawa2024" p="231–233" /> ‹contested›.
	</p>

	<p>
		Satō's <em>personal-form</em> (人称形) analysis, developed in
		<Xr ch="concept-form-affiliative-form" />, addresses a different aspect. Once a
		person-marking prefix combines with the affiliative form to create a personal form, the
		result is a highly autonomous NP: <i lang="ain-Latn">Ø=sik-ihi</i> alone — without any
		overt possessor NP — is a complete noun phrase 'his/her eye'. At the same time, the
		possessor NP and its personal form need not be adjacent: the noun phrase
		<i lang="ain-Latn">menoko … anakne … kaskamuye</i> 'the woman's guardian spirit' has the
		topic particle <i lang="ain-Latn">anakne</i> intervening. The personal form signals the
		presence of a possessor somewhere in context rather than forming a tight N-N genitive
		<Ref k="sato2008" p="155–156" />. Bugaeva et al. converge on the same point: the
		possessed suffix "marks a noun as requiring a possessor (which is then indexed with a
		possessive prefix)" and "the possessor N₁ can easily be omitted without ambiguity as
		the possessed suffix signals its presence"
		<Ref k="bugaeva2021poss" p="52" />.
	</p>

	<p>
		Bugaeva et al.'s typological framing, drawing on <Ref k="nichols1986" paren />, places
		the Hokkaido system within the Circum-Pacific appositive possessive type but distinguishes
		it by the fact that the modifier is a finite verbal clause (<i lang="ain-Latn">kor</i>)
		rather than a nominal appositive
		<Ref k="bugaeva2021poss" p="58–60, 80–82" />. The two constructions together give the
		language a mixed locus-of-marking profile: inalienable possession is head-marked on the
		possessed noun (A-prefix + affiliative suffix), while alienable possession is encoded as a
		verbal modifier. The adnominal double-marking and appositive constructions that arise at
		the interface of these two strategies are examined in
		<Xr ch="adnominal-possession-double-marking" />; the external-possession and
		possessor-raising phenomena are treated in
		<Xr ch="external-possession-possessor-raising" />.
	</p>

	<p>
		Huber's subjectivity analysis applies Ikegami's HAVE/BE-language typology and finds that
		Ainu patterns with English (a HAVE-type language where the possessor is foregrounded as
		subject) rather than Japanese (a BE-type language where the possessed entity is
		topicalised) <Ref k="huber2025" p="254–257" />. Even in the inalienable construction the
		possessor is overtly indexed by the A-prefix —
		<i lang="ain-Latn">ku=tek-ehe ku=kikkik</i> 'I clapped my hands' — unlike the dropped
		possessor of Japanese 「手を叩いた」. Huber proposes treating inalienability as a
		subjectivity index and the possession-schema inventory as a gradient scale rather than a
		binary; this proposal is explicitly framed as preliminary in her paper
		<Ref k="huber2025" p="257" /> ‹speculative›.
	</p>
</S>
