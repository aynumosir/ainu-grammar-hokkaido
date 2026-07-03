<!-- src/lib/grammar/chapters/concept-form-affiliative-form.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Overview: two forms of the common noun" id="overview">
	<p>
		Every common noun in Hokkaido Ainu potentially has two citation shapes: a
		<em>concept form</em> (概念形) expressing the noun as a free-standing concept, and an
		<em>affiliative form</em> (所属形) expressing it as belonging to something or someone
		<Ref k="nakagawa2024" p="217" />. The concept form is the stem; the affiliative is a
		derivative, produced by a suffix on that stem <Ref k="sato2008" p="152" />. Earlier
		scholarship described the contrast under the labels <span lang="ja">抽象形</span> (abstract
		form) and <span lang="ja">具体形</span> (concrete form) <Ref k="kindaichi1936" />;
		Nakagawa's own earlier work used <span lang="ja">人称形</span> (personal form) for the
		possessed shape <Ref k="nakagawa2024" p="217" />.
	</p>

	<p>
		The alternation underlies Hokkaido Ainu's bifurcated possession system. Inalienable nouns
		— body parts, kinship terms, part–whole pairs, and related classes — take the affiliative
		form when possessed and combine directly with a possessive person-prefix. Alienable nouns
		remain in the concept form as the implicit object of the transitive verb
		<A w="kor" gl="have" /> <Ref k="nakagawa2024" p="218" />; <Ref k="sato2008" p="150–151" />.
		The alienable/inalienable split itself is set out in <Xr ch="alienable-inalienable-split" />;
		the morphophonology of the affiliative suffix — the echo-vowel mechanism and suffix classes
		— belongs to <Xr ch="affiliative-suffix-morphophonology" />; the full double-marking NP
		(person-prefix plus affiliative suffix) is treated in
		<Xr ch="adnominal-possession-double-marking" />; and kinship-term idiosyncrasies appear in
		<Xr ch="kinship-honorific-possession" />.
	</p>
</S>

<S t="Formation of the affiliative form" id="formation">
	<p>
		The affiliative suffix attaches to the noun stem. Its shape is conditioned by the final
		segment of the stem <Ref k="nakagawa2024" p="226–228" />; <Ref k="sato2008" p="152–153" />.
		Three types are recognised, each with a short and a long variant.
	</p>

	<ul>
		<li>
			<strong>Type ① — vowel-final stems.</strong> The short affiliative is identical to the
			concept form; the long affiliative adds <i lang="ain-Latn">-hV₁</i> where V₁ repeats the
			stem's final vowel: <A w="sapa" gl="head" /> → <i lang="ain-Latn">sapa</i> /
			<i lang="ain-Latn">sapa-ha</i>.
		</li>
		<li>
			<strong>Type ② — stems in -y or -w.</strong> The suffix is <i lang="ain-Latn">-e(-he)</i>:
			<A w="haw" gl="voice" /> → <i lang="ain-Latn">haw-e(-he)</i>;
			<A w="patoy" gl="lip" /> → <i lang="ain-Latn">patoy-e(-he)</i>.
		</li>
		<li>
			<strong>Type ③ — other consonant-final stems.</strong> The basic (Type ③-1) suffix is
			<i lang="ain-Latn">-i(-hi)</i>: <A w="sik" gl="eye" /> → <i lang="ain-Latn">sik-i(-hi)</i>.
			Lexically listed subsets take an echo vowel matching the stem's last vowel (Type ③-2):
			<A w="tek" gl="hand" /> → <i lang="ain-Latn">tek-e(-he)</i>;
			<A w="kisar" gl="ear" /> → <i lang="ain-Latn">kisar-a(-ha)</i>. A small group with final
			<i>a</i> takes <i lang="ain-Latn">-u(-hu)</i> (Type ③-3):
			<A w="nan" gl="face" /> → <i lang="ain-Latn">nan-u(-hu)</i>. Types ③-2 and ③-3 must be
			memorised individually; Satō notes that the exceptions are numerous and must be learned
			one by one <Ref k="sato2008" p="153" />.
		</li>
	</ul>

	<table>
		<thead>
			<tr>
				<th>Type</th>
				<th>Concept form</th>
				<th>Short affiliative</th>
				<th>Long affiliative</th>
				<th>Gloss</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>① (vowel-final)</td>
				<td><i lang="ain-Latn">sapa</i></td>
				<td><i lang="ain-Latn">sapa</i></td>
				<td><i lang="ain-Latn">sapa-ha</i></td>
				<td>head</td>
			</tr>
			<tr>
				<td>① (vowel-final)</td>
				<td><i lang="ain-Latn">etu</i></td>
				<td><i lang="ain-Latn">etu</i></td>
				<td><i lang="ain-Latn">etu-hu</i></td>
				<td>nose</td>
			</tr>
			<tr>
				<td>② (-w coda)</td>
				<td><i lang="ain-Latn">haw</i></td>
				<td><i lang="ain-Latn">haw-e</i></td>
				<td><i lang="ain-Latn">haw-e-he</i></td>
				<td>voice</td>
			</tr>
			<tr>
				<td>② (-y coda)</td>
				<td><i lang="ain-Latn">patoy</i></td>
				<td><i lang="ain-Latn">patoy-e</i></td>
				<td><i lang="ain-Latn">patoy-e-he</i></td>
				<td>lip</td>
			</tr>
			<tr>
				<td>③-1 (basic)</td>
				<td><i lang="ain-Latn">sik</i></td>
				<td><i lang="ain-Latn">sik-i</i></td>
				<td><i lang="ain-Latn">sik-i-hi</i></td>
				<td>eye</td>
			</tr>
			<tr>
				<td>③-1</td>
				<td><i lang="ain-Latn">otop</i></td>
				<td><i lang="ain-Latn">otop-i</i></td>
				<td><i lang="ain-Latn">otop-i-hi</i></td>
				<td>hair</td>
			</tr>
			<tr>
				<td>③-2 (lexical echo)</td>
				<td><i lang="ain-Latn">tek</i></td>
				<td><i lang="ain-Latn">tek-e</i></td>
				<td><i lang="ain-Latn">tek-e-he</i></td>
				<td>hand</td>
			</tr>
			<tr>
				<td>③-2</td>
				<td><i lang="ain-Latn">kisar</i></td>
				<td><i lang="ain-Latn">kisar-a</i></td>
				<td><i lang="ain-Latn">kisar-a-ha</i></td>
				<td>ear</td>
			</tr>
			<tr>
				<td>③-3 (V₁=a → -uhu)</td>
				<td><i lang="ain-Latn">nan</i></td>
				<td><i lang="ain-Latn">nan-u</i></td>
				<td><i lang="ain-Latn">nan-u-hu</i></td>
				<td>face</td>
			</tr>
		</tbody>
	</table>

	<p>
		Monosyllabic open stems ending in <i>i</i> or <i>u</i> behave as Type ② rather than ③,
		taking <i lang="ain-Latn">-e(-he)</i>:
		<A w="ru" gl="track, path" /> → <i lang="ain-Latn">ru-we(-he)</i>
		<Ref k="nakagawa2024" p="229–230" />. The affiliative <i lang="ain-Latn">ruwe</i> of
		<i lang="ain-Latn">ru</i> is the same form that serves as the evidential formal noun,
		and the possessed-noun origin underlies all four evidential nominalizers treated in
		<Xr ch="ruwe-ne-inferential" /> <Ref k="nakagawa2024" p="258–259" />.
	</p>

	<p>
		When a consonant-final noun appears as the second element of a compound, it reverts to the
		③-1 pattern regardless of its isolated affiliative class:
		<A w="at" gl="cord" /> → <i lang="ain-Latn">at-u(-hu)</i> (③-2) in isolation, but
		<i lang="ain-Latn">tar-at → tar-ac-i(-hi)</i> 'carrying-rope cord' inside a compound
		<Ref k="nakagawa2024" p="228" />. The distinction between an affiliative-suffixed noun in an
		NP and a phonologically similar compound link is discussed in
		<Xr ch="affiliative-suffix-morphophonology" />.
	</p>
</S>

<S t="Short and long affiliative forms" id="short-long">
	<p>
		For all three types, the suffix has a short and a long variant. For consonant-final stems,
		the short form ends in the echo vowel alone (<i lang="ain-Latn">teke</i>) and the long form
		adds a further syllable (<i lang="ain-Latn">tekehe</i>). The two variants carry no
		semantic difference; Satō writes that "the difference in meaning seems absent — how they
		are distributed remains unclear" <Ref k="sato2008" p="152–153" />; Nakagawa confirms
		that the split follows prosodic and rhythmic preference rather than grammar
		<Ref k="nakagawa2024" p="219" />. The long form is more frequent in oral-narrative verse
		<Ref k="nakagawa2022pos" p="484" />.
	</p>
</S>

<S t="The possessive person-prefix system" id="person-prefix">
	<p>
		When a common noun appears in the affiliative construction, it combines with a possessive
		person-prefix drawn from the transitive-subject (A) affix set
		<Ref k="nakagawa2024" p="215–216" />; <Ref k="sato2008" p="154" />;
		<Ref k="bugaeva2021poss" p="52" />. The possessor is thus grammatically encoded as the
		agent-like argument of the noun. Satō captures the counterintuitive direction with a literal
		gloss: <i lang="ain-Latn">e=paro</i> 'your mouth' parses as 'you [A] mouth', the
		possessor marked with the same form that marks a transitive subject on a verb
		<Ref k="sato2008" p="150" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>Person</th>
				<th>Prefix</th>
				<th>With <i lang="ain-Latn">sapa</i> 'head' (Type ①)</th>
				<th>With <i lang="ain-Latn">sik</i> 'eye' (Type ③-1)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1SG</td>
				<td><i lang="ain-Latn">ku=</i></td>
				<td><i lang="ain-Latn">ku=sapa(ha)</i></td>
				<td><i lang="ain-Latn">ku=siki(hi)</i></td>
			</tr>
			<tr>
				<td>1PL.EXCL</td>
				<td><i lang="ain-Latn">ci=</i></td>
				<td><i lang="ain-Latn">ci=sapa(ha)</i></td>
				<td><i lang="ain-Latn">ci=siki(hi)</i></td>
			</tr>
			<tr>
				<td>2SG</td>
				<td><i lang="ain-Latn">e=</i></td>
				<td><i lang="ain-Latn">e=sapa(ha)</i></td>
				<td><i lang="ain-Latn">e=siki(hi)</i></td>
			</tr>
			<tr>
				<td>2PL</td>
				<td><i lang="ain-Latn">eci=</i></td>
				<td><i lang="ain-Latn">eci=sapa(ha)</i></td>
				<td><i lang="ain-Latn">eci=siki(hi)</i></td>
			</tr>
			<tr>
				<td>4/INDEF</td>
				<td><i lang="ain-Latn">a=</i></td>
				<td><i lang="ain-Latn">a=sapa(ha)</i></td>
				<td><i lang="ain-Latn">a=siki(hi)</i></td>
			</tr>
			<tr>
				<td>3 (sg/pl)</td>
				<td>Ø</td>
				<td><i lang="ain-Latn">sapa(ha)</i></td>
				<td><i lang="ain-Latn">siki(hi)</i></td>
			</tr>
		</tbody>
	</table>

	<p>
		Before vowel-initial stems, <i lang="ain-Latn">ku=</i> reduces to
		<i lang="ain-Latn">k=</i> and <i lang="ain-Latn">ci=</i> to <i lang="ain-Latn">c=</i>;
		accent falls on the syllable following the prefix for <i lang="ain-Latn">ku=</i> and
		<i lang="ain-Latn">e=</i> (e.g., <i lang="ain-Latn">ku-sápa</i>) but not for
		<i lang="ain-Latn">a=</i> or <i lang="ain-Latn">eci=</i>
		<Ref k="sato2008" p="154" />. The complete person-prefix system across all argument roles
		— intransitive-subject, transitive-subject, and object — is documented in
		<Xr ch="person-marking-architecture" />. Relational (locative) nouns such as
		<A w="or" gl="place, interior" /> and <A w="sam" gl="vicinity" /> take the
		<em>objective</em> (O) affix set rather than the A-set; their possessed forms are treated
		in <Xr ch="relational-and-spatial-nouns" />.
	</p>

	<Ex
		m="ku=kema-ha ka arka ku=teke-he ka arka"
		g="1SG.POSS=leg-POSS also hurt 1SG.POSS=hand-POSS also hurt"
		tr="My leg hurts too; my hand hurts too."
		cite="utari1994"
		dial="HK"
		place="Akor Itak textbook, ch. 5, no. 8"
		note="Both body-part nouns take the 1SG possessive prefix ku= and the affiliative suffix. The intransitive predicate arka takes each body-part personal form as its subject; the verb itself carries no person-marking (third-person zero on the body-part NP)."
	/>
</S>

<S t="Semantic classes of affiliative nouns" id="semantic-classes">
	<p>
		Nakagawa identifies five groupings of nouns that enter the affiliative construction when
		possessed <Ref k="nakagawa2024" p="219–221" />:
	</p>

	<ul>
		<li>
			<strong>Body parts and habitually worn items.</strong> The canonical inalienable class:
			<A w="sik" gl="eye" />, <A w="tek" gl="hand" />, <A w="kema" gl="leg, foot" />, tears,
			nasal mucus, and so on. Clothing and footwear normally worn on the body, and even
			commonly carried tools, are treated grammatically like body parts:
			<i lang="ain-Latn">ku=tesma-ha</i> 'my snowshoes',
			<i lang="ain-Latn">a=tasiro-ho</i> 'my mountain-knife'.
		</li>
		<li>
			<strong>Part–whole relations.</strong> The part belongs inherently to the whole:
			<i lang="ain-Latn">sayo rur-i(-hi)</i> 'the broth of the gruel';
			<i lang="ain-Latn">nit op nic-i(-hi)</i> 'the shaft of a spear'.
		</li>
		<li>
			<strong>Material-product relations.</strong> The output belongs to its source:
			<i lang="ain-Latn">ikaray ohaw-e(-he)</i> 'nettle stew';
			<i lang="ain-Latn">top cise(-he)</i> 'bamboo house'.
		</li>
		<li>
			<strong>Kinship terms</strong> — a large subset whose allocation between the affiliative
			and the <A w="kor" gl="have" /> construction varies by term and dialect; see
			<Xr ch="kinship-honorific-possession" />.
		</li>
		<li>
			<strong>Miscellaneous inalienables</strong> whose belonging is inherent or relational:
			<A w="atay" gl="price, value" />, <A w="hura" gl="smell, scent" />,
			<A w="tokuy" gl="close friend" />, <A w="asur" gl="rumour" />,
			<A w="kotan" gl="village" /> (variable; see below).
		</li>
	</ul>

	<p>
		The classification is grammatically fixed: the noun's class membership determines the
		construction, not a speaker's inference about the nature of the possession
		<Ref k="bugaeva2021poss" p="47" />. A sword or dog is experientially "owned" but
		grammatically non-possessible and must take <A w="kor" gl="have" />. The contrast is
		sharpest in minimal pairs. Satō's diagnostic example — <i lang="ain-Latn">ku=kor
		kani</i> 'my money' (alienable; <i lang="ain-Latn">*ku=kanihi</i> is ungrammatical)
		versus <i lang="ain-Latn">ku=teke-he</i> 'my hand' (inalienable) — shows that the split
		cannot be inferred from semantics alone <Ref k="sato2008" p="150–151" />.
	</p>

	<p>
		Two nouns sit on the boundary. <A w="kotan" gl="village" /> takes both constructions
		roughly equivalently: <i lang="ain-Latn">a=kor kotan</i> ~
		<i lang="ain-Latn">a=kotanu(hu)</i>. <A w="mosir" gl="world, land" /> is restricted
		to the concept construction in prose (<i lang="ain-Latn">a=kor mosir</i>;
		<i lang="ain-Latn">*a=mosirihi</i> unattested in prose, though
		<i lang="ain-Latn">mosiri</i> appears in verse)
		<Ref k="nakagawa2024" p="220–221" />. <A w="cise" gl="house" /> is dialect-split: in
		Saru, Chitose, and Horobetsu prose the affiliative <i lang="ain-Latn">cisehe</i> is not
		used for 'X's house', but verse and some other dialects allow it, and the verse-compound
		<i lang="ain-Latn">uncise</i> 'home' is always affiliative
		(<i lang="ain-Latn">a=uncise</i>, never <i lang="ain-Latn">*kor uncise</i>)
		<Ref k="nakagawa2024" p="220–221" />. Cultural construal can also shift the construction
		for the same referent: a trap-bow (<A w="ku" gl="bow (trap-bow)" />) is usually alienable
		(<i lang="ain-Latn">ku=kor ku</i>), but when the bow belongs existentially to whoever the
		prey chooses, the same object takes the affiliative <i lang="ain-Latn">kuwehe</i>
		<Ref k="nakagawa2024" p="229" />. The inalienable/alienable line is therefore
		construal-sensitive for certain nouns, not fixed by the referent alone ‹contested›.
	</p>

	<p>
		Community member thegodofneet (aynu-corpora Discord, 2025-09-17) proposed that
		<i lang="ain-Latn">utari(-hi)</i> is the affiliative of
		<A w="utar" gl="family, companions, kin" />, with the suffixed form narrowing the sense
		to 'X's companions/kin', on the grounds that companions belonging to no one are
		conceptually difficult to realise and the form consistently presupposes a possessor
		<Ref k="aynucorporadiscord" /> ‹contested›. The corpus count for
		<i lang="ain-Latn">utari</i> is 1,501 tokens. The analysis extends — rather than
		contradicts — Nakagawa's observation that <i lang="ain-Latn">k=utari</i> 'my family'
		is attested alongside the concept form <Ref k="nakagawa2024" p="251–252" />; the
		semantic narrowing under affiliation is the community's addition.
	</p>

	<Ex
		m="ku=teke-he piro hi ta ku=kor totto noya ham uk wa"
		g="1SG.POSS=hand-POSS be.wounded NMLZ LOC 1SG.A=have mother wormwood leaf take CONJ"
		tr="When my hand was wounded, my mother would take wormwood leaves and …"
		cite="ainukoraci1991"
		dial="CHI"
		place="Yokoyama Hiroyuki, Ainu Times no. 24"
		note="The body-part noun tekehe takes the 1SG possessive prefix (affiliative construction); the kinship term totto 'mother/breast' takes ku=kor (alienable construction). The two constructions co-occur within one sentence."
	/>
</S>

<S t="Obligatory possession and the non-possessed-noun form" id="obligatory-possession">
	<p>
		Body parts and kinship terms are <em>obligatorily possessed</em>: they almost never
		occur without a possessive prefix and affiliative suffix in natural speech
		<Ref k="bugaeva2021poss" p="52–54" />. When elicited in isolation — and in riddles,
		where no specific possessor is named — speakers supply the fourth-person (indefinite)
		prefix <i lang="ain-Latn">a=</i>: <i lang="ain-Latn">a=sik-i-hi</i> 'eyes (one's/
		people's eyes)', not the bare stem <i lang="ain-Latn">sik</i>
		<Ref k="bugaeva2021poss" p="53" />. These nouns function as bound stems in the sense
		defined in <Xr ch="nominal-subclasses-and-bound-nouns" />.
	</p>

	<p>
		When an obligatorily-possessed noun is incorporated into a verb and the possessor is
		non-coreferential with any core argument, the derivational prefix
		<A w="i-" gl="antipassive / unspecified-possessor prefix" /> encodes the unspecified
		possessor: <i lang="ain-Latn">i-sapa-kar usi</i> 'a barber shop' (lit. 'a place where
		one does someone's head') <Ref k="bugaeva2021poss" p="53–54" />. This is the
		non-possessed-noun (NPN) marker, distinct from the antipassive
		<i lang="ain-Latn">i-</i> that demotes the transitive object; the two homophonous
		prefixes are treated together in <Xr ch="antipassive-detransitive-i" />. The
		fourth-person prefix <i lang="ain-Latn">a=</i> (which retains affiliative morphology
		on the free noun) and the NPN <i lang="ain-Latn">i-</i> (which enables possessor-less
		incorporation) are two distinct de-specifiers
		<Ref k="bugaeva2021poss" p="54, 81" />.
	</p>
</S>

<S t="The personal form and its syntax" id="personal-form-syntax">
	<p>
		The combination of person-prefix plus affiliative-marked noun constitutes what Satō calls
		the <em>personal form</em> (人称形): the form the noun takes when it is related to a
		particular possessor <Ref k="sato2008" p="155" />. Because the possessor is indexed on
		the noun itself, the personal form functions as an autonomous NP. The third-person form
		<i lang="ain-Latn">siki(-hi)</i> alone means 'his/her/their eye(s)' without any overt
		possessor pronoun — unlike Japanese <span lang="ja">目</span>, which requires
		<span lang="ja">彼の</span> to express the same content
		<Ref k="sato2008" p="155" />.
	</p>

	<p>
		A consequence of this indexical autonomy is that the possessor NP and the possessed noun
		form a looser constituent than a Japanese genitive phrase. Satō demonstrates that they
		can be separated by particles and intervening words, with the personal form presupposing
		only that some possessor NP is accessible in the discourse context
		<Ref k="sato2008" p="155–156" />. Bugaeva's formulation is parallel: the possessive
		suffix "registers a possessor but does not index its properties", and "the possessor NP
		can easily be omitted without ambiguity as the possessed suffix signals its presence"
		<Ref k="bugaeva2021poss" p="52" />. Stacking of personal forms — where the possessor of
		one is itself a personal form — is structurally transparent, as the third-person (zero)
		prefix on the inner noun is sufficient to license retrieval of the outer personal form as
		its possessor.
	</p>

	<Ex
		m="makan uske ta a=teke-he ani makan uske ta"
		g="somehow place LOC 4.A=hand-POSS INS somehow place LOC"
		tr="Somehow [the elder brother] took hold of my hand and …"
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, uwepeker folktale 11, ILCAA Ainu materials (aa-irc/013), sent. 11"
		note="In oral-narrative convention the fourth-person prefix a= identifies the narrator as the possessor of tekehe 'hand'."
	/>

	<Ex
		m="a=yup-ihi tures-ihi"
		g="4.A=elder.brother-POSS younger.sister-POSS"
		tr="that elder brother's younger sister"
		cite="nakagawa2024:224"
		dial="SAR"
		note="Nakagawa ex. 259, Saru. Two kinship personal forms stack: a=yupihi 'my/the elder brother' (4th-person A-prefix, Type ③-1 long affiliative -ihi) and turesihi 'his younger sister' (zero 3rd-person prefix, same affiliative class). The second personal form presupposes the first as its possessor via the zero prefix."
	/>
</S>

<S t="The affiliative constraint: specificity, grammar, and non-possessive uses" id="affiliative-constraint">
	<p>
		Tamura identified the trigger for the affiliative as the specificity of the possessor N₁:
		<i lang="ain-Latn">kamuy rusihi</i> 'that specific bear's pelt' (affiliative) versus
		<i lang="ain-Latn">kamuy rus</i> 'bear-pelt in general' (concept form, approaching a
		compound) <Ref k="nakagawa2024" p="231" />. Satō challenged this with the counter-example
		<i lang="ain-Latn">aynu opitta honihi kor wa okay pe ne</i> 'all humans have a belly'
		(<i lang="ain-Latn">honi-hi</i> affiliative; possessor 'all humans' = non-specific)
		<Ref k="sato2008" p="155–156" /> ‹contested›.
	</p>

	<p>
		Nakagawa argues that the constraint is grammatical rather than semantic: the affiliative
		appears wherever a person-prefix or a relative-clause structure demands it, regardless of
		the possessor's specificity <Ref k="nakagawa2024" p="227, 230–233" />. Three classes
		of evidence bear on this.
	</p>

	<ul>
		<li>
			<strong>General-warning contexts.</strong>
			<i lang="ain-Latn">a=teke munin pe ne na</i> 'your hand will rot' (a warning about
			touching rainbows) uses the affiliative <i lang="ain-Latn">teke</i> with the
			fourth-person prefix even though no specific person is addressed; the prefix alone
			forces the affiliative <Ref k="nakagawa2024" p="231" />.
		</li>
		<li>
			<strong>Relative-clause structure.</strong> 'A dog with a long tail' requires
			<i lang="ain-Latn">sara-ha tanne seta</i> (affiliative <i lang="ain-Latn">sara(ha)</i>),
			not <i lang="ain-Latn">*sar tanne seta</i>, even with an indefinite dog: the NP
			structure in which the dog possesses its tail forces the affiliative on
			<i lang="ain-Latn">sar</i> <Ref k="nakagawa2024" p="231–232" />.
		</li>
		<li>
			<strong>Quantifier and pro-form triggers.</strong> The quantifier
			<i lang="ain-Latn">usa</i> 'various' and the pro-form <i lang="ain-Latn">nep</i>
			'what, whatever' independently induce the affiliative:
			<i lang="ain-Latn">usa kamihi usa cepihi</i> 'meat and fish of various kinds'
			(Chitose); <i lang="ain-Latn">nep aynuhu e=ne</i> 'whatever human you are'
			(<i lang="ain-Latn">aynuhu</i> = affiliative of <i lang="ain-Latn">aynu</i>)
			<Ref k="nakagawa2024" p="232–233" />.
		</li>
	</ul>

	<p>
		Nakagawa concludes that the received claim — that only some nouns possess an affiliative
		form — is overstated: given the right relational structure, potentially any common noun
		can take one <Ref k="nakagawa2024" p="227, 230" /> ‹contested›. The phonological
		boundary between a suffixed affiliative and a bare compound second element is discussed
		in <Xr ch="affiliative-suffix-morphophonology" />. The possessed form also feeds
		noun incorporation as discussed in <Xr ch="noun-incorporation-subject-possessor-stranding" />.
	</p>

	<p>
		Community member nukopoli (aynu-corpora Discord, 2025-12-03) parsed
		<i lang="ain-Latn">iteki e=hawe aste</i> 'don't raise your voice' as
		<i lang="ain-Latn">[iteki [[e=hawe] aste]]</i>, with
		<i lang="ain-Latn">e=hawe</i> (2SG possessive prefix + Type ② affiliative of
		<i lang="ain-Latn">haw</i> 'voice') serving as a plain possessed-noun argument of
		<i lang="ain-Latn">aste</i> 'raise' <Ref k="aynucorporadiscord" /> ‹contested›.
		The analysis is consistent with the attested non-evidential, lexical use of
		<i lang="ain-Latn">hawehe</i> in the example below.
	</p>

	<Ex
		m="nekon ne wa a=yup-ihi an=sa-ha hawe-he ka isam ruwe ene an hi an"
		g="why COP CONJ 4.A=elder.brother-POSS 4.A=elder.sister-POSS voice-POSS even be.absent track-POSS thus exist NMLZ exist"
		tr="How is it that neither my elder brother's nor elder sister's voice is to be heard?"
		cite="ilcaa1976"
		dial="SHI"
		place="Oda Suteno, uwepeker 'Moyuk (part 1)', ILCAA Ainu materials (aa-irc/017), sent. 52"
		note="hawehe is the long affiliative of haw 'voice' (Type ②: haw-e + -he); it serves here as the subject of the negative existential isam. Both kinship personal forms yupihi and saha carry affiliative suffixes stacked in the same clause. an= is a Shizunai dialectal variant of the 4th-person A-prefix a=. The clause-final ruwe ene an hi an is an indirect evidential frame; the trace-noun ruwe here is the same affiliative of ru discussed in the Formation section above."
	/>
</S>
