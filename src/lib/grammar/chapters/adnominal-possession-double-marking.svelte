<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The two possessive constructions" id="overview">
	<p>
		Hokkaido Ainu encodes adnominal possession without a genitive case particle or possessive
		adposition. Two constructions divide the nominal lexicon by alienability. Inalienable nouns —
		body parts, kinship terms, and a defined range of relational objects — carry a personal
		possessive prefix and an
		<Xr ch="affiliative-suffix-morphophonology">affiliative suffix</Xr>
		directly on the possessed noun: <i lang="ain-Latn">ku=tek-ehe</i> 'my hand'. Alienable nouns
		— tools, animals, places — are possessed via the transitive verb
		<A w="kor" gl="have, hold" />, which takes the possessor as its A-argument:
		<i lang="ain-Latn">ku=kor seta</i> 'my dog'. The choice of construction is fixed by the noun
		class, not by the speaker's construal of ownership in a given context
		<Ref k="nakagawa2024" p="218" />; <Ref k="bugaeva2021poss" p="47" /> ‹consensus›.
	</p>

	<table>
		<thead>
			<tr>
				<th>type</th>
				<th>template</th>
				<th>example</th>
				<th>gloss</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>inalienable (affiliative)</td>
				<td>[POSSESSOR] POSS.PREFIX=N-AFF</td>
				<td><i lang="ain-Latn">ku=tek-ehe</i></td>
				<td>'my hand'</td>
			</tr>
			<tr>
				<td>alienable (<i lang="ain-Latn">kor</i>)</td>
				<td>[POSSESSOR] POSS.PREFIX=kor N</td>
				<td><i lang="ain-Latn">ku=kor seta</i></td>
				<td>'my dog'</td>
			</tr>
		</tbody>
	</table>

	<p>
		The morphophonology of the affiliative suffix is treated in
		<Xr ch="affiliative-suffix-morphophonology" />; the concept/affiliative functional distinction
		in
		<Xr ch="concept-form-affiliative-form" />; the bound-noun status of obligatorily-possessed
		nouns in <Xr ch="nominal-subclasses-and-bound-nouns" />; kinship terms and their irregular
		affiliative forms in <Xr ch="kinship-honorific-possession" />; predicative possession in
		<Xr ch="predicative-possession-clauses" />. The present chapter addresses the NP-internal
		structure: the personal-prefix paradigm, the configuration in which both an overt possessor NP
		and a head-marked possessum appear together, nested possession, and the appositive
		<i lang="ain-Latn">kor</i> construction.
	</p>
</S>

<S t="Personal possessive prefixes on inalienable nouns" id="personal-prefixes">
	<p>
		The possessive prefix on an inalienable noun is the same form set as the transitive-subject
		(A) prefix documented in <Xr ch="person-marking-architecture" />. On a noun, the prefix
		indexes the possessor as the "subject" of the possessive relation — the same morphological slot
		that marks the agent of a transitive verb
		<Ref k="sato2008" p="150" />; <Ref k="nakagawa2024" p="215–216" />. Satō notes the
		"backwards" feel: <i lang="ain-Latn">e=paro</i> 'your mouth' is literally 'you-SUBJ mouth',
		the possessor marked by what looks like a nominative subject affix
		<Ref k="sato2008" p="150" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>person</th>
				<th>prefix</th>
				<th><i lang="ain-Latn">tek</i> 'hand'</th>
				<th><i lang="ain-Latn">otop</i> 'hair'</th>
				<th><i lang="ain-Latn">sapa</i> 'head'</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1SG</td>
				<td>
					<i lang="ain-Latn">ku=</i> (<i lang="ain-Latn">k=</i> before V)
				</td>
				<td><i lang="ain-Latn">ku=tek-ehe</i></td>
				<td><i lang="ain-Latn">k=otop-i</i></td>
				<td><i lang="ain-Latn">ku=sápa(ha)</i></td>
			</tr>
			<tr>
				<td>1PL.EXCL</td>
				<td>
					<i lang="ain-Latn">ci=</i> (<i lang="ain-Latn">c=</i> before V)
				</td>
				<td><i lang="ain-Latn">ci=tek-ehe</i></td>
				<td><i lang="ain-Latn">c=otop-i</i></td>
				<td><i lang="ain-Latn">ci=sápa(ha)</i></td>
			</tr>
			<tr>
				<td>2SG</td>
				<td><i lang="ain-Latn">e=</i></td>
				<td><i lang="ain-Latn">e=tek-ehe</i></td>
				<td><i lang="ain-Latn">e=otop-i</i></td>
				<td><i lang="ain-Latn">e=páro(ho)</i></td>
			</tr>
			<tr>
				<td>2PL</td>
				<td><i lang="ain-Latn">eci=</i></td>
				<td><i lang="ain-Latn">eci=tek-ehe</i></td>
				<td><i lang="ain-Latn">eci=otop-i</i></td>
				<td><i lang="ain-Latn">eci=sapá(ha)</i></td>
			</tr>
			<tr>
				<td>4 / INDEF</td>
				<td>
					<i lang="ain-Latn">a=</i> (dial. <i lang="ain-Latn">an=</i>)
				</td>
				<td><i lang="ain-Latn">a=tek-ehe</i></td>
				<td><i lang="ain-Latn">a=otop-i</i></td>
				<td><i lang="ain-Latn">a=sapá(ha)</i></td>
			</tr>
			<tr>
				<td>3SG/PL</td>
				<td>Ø</td>
				<td><i lang="ain-Latn">tek-ehe</i></td>
				<td><i lang="ain-Latn">otop-i</i></td>
				<td><i lang="ain-Latn">sapá(ha)</i></td>
			</tr>
		</tbody>
	</table>

	<p>
		Accent shift and allomorphy follow the same rules as on verbs. The prefixes
		<i lang="ain-Latn">ku=</i> and <i lang="ain-Latn">e=</i> move the pitch accent to the
		syllable immediately after the prefix: <i lang="ain-Latn">ku=sápa</i>,
		<i lang="ain-Latn">e=páro</i>. The prefixes <i lang="ain-Latn">eci=</i> and
		<i lang="ain-Latn">a=</i> do not shift the accent: <i lang="ain-Latn">a=sapá</i>,
		<i lang="ain-Latn">eci=sapá</i>. Before a vowel-initial stem, <i lang="ain-Latn">ku=</i>
		reduces to <i lang="ain-Latn">k=</i> and <i lang="ain-Latn">ci=</i> to
		<i lang="ain-Latn">c=</i>, with the accent on the first stem vowel:
		<i lang="ain-Latn">k=ótop-i</i>
		<Ref k="sato2008" p="154" />.
	</p>

	<p>
		Each inalienable noun has two affiliative shapes: a <em>short</em> form (the base with the
		minimal vowel-copy suffix) and a <em>long</em> form (short + <i lang="ain-Latn">-hV₁</i>).
		The two carry no semantic difference; the choice is prosodically conditioned and for many
		nouns is simply lexically inherited <Ref k="nakagawa2024" p="219" />; <Ref k="sato2008"
			p="152–153"
		/>. In the paradigm above, parenthesised endings mark the optional long-form extension:
		<i lang="ain-Latn">teke(he)</i>, <i lang="ain-Latn">sapa(ha)</i>, <i lang="ain-Latn"
			>otopi(hi)</i
		>.
	</p>

	<p>
		The prefix-plus-affiliative complex is what Satō calls the <em>personal form</em>
		(人称形 in his account): a noun form that presupposes and indexes a possessor
		<Ref k="sato2008" p="155" />. A third-person personal form such as
		<i lang="ain-Latn">sik-ihi</i> is referentially complete on its own —
		'his/her/their eye(s)' — because the affiliative suffix alone signals the existence of a
		possessor in discourse context; the possessor NP can be omitted without ambiguity
		<Ref k="bugaeva2021poss" p="52, 80–81" />. The same paradigm is presented in the Ijäs
		(2023) learner grammar under the label "possessive prefixes", with the A-set identity made
		explicit for learners <Ref k="ijas2023" />.
	</p>
	<p>
		A minimal illustration of the 2SG prefix in the possessed-noun slot: the noun
		<A w="haw" gl="voice" /> has the affiliative <A w="hawe" gl="voice-POSS" />
		(<i lang="ain-Latn">haw-e</i>, type ②). In
		<i lang="ain-Latn">iteki [[e=haw-e] aste]</i> — proposed as 'don't raise your voice' —
		<i lang="ain-Latn">e=haw-e</i> is parsed as the 2SG-possessed noun 'your voice' serving
		as the object of <A w="aste" gl="raise" /> ‹contested›
		<Ref k="aynucorporadiscord" /> (nukopoli, aynu-corpora Discord, 2025-12-03, proposed
		parse; the affiliative <i lang="ain-Latn">haw-e</i> is independently attested as a
		plain possessed noun at <Ref k="nakagawa2024" p="258" />).
	</p>

	<Ex
		m="ku=kema-ha ka arka ku=tek-ehe ka arka"
		g="1SG.POSS=leg-POSS even be.sore 1SG.POSS=hand-POSS even be.sore"
		tr="My leg hurts, and my hand hurts too."
		cite="utari1994"
		dial="HK"
		place="Akor Itak ch. 5, sentence 8"
		note="Two 1SG-possessed body-part nouns, each as the intransitive subject of arka 'be.sore'. kema 'leg/foot' is type-① (vowel-final stem) with the long affiliative suffix -ha; tek 'hand' is type-③-2 with affiliative -ehe."
	/>
</S>

<S t="Overt possessor NPs and the double-marking configuration" id="double-marking">
	<p>
		When the possessor is expressed as an overt noun phrase it is juxtaposed immediately before
		the possessed noun. Ainu has no genitive case suffix or possessive adposition to mark the
		possessor constituent <Ref k="nakagawa2024" p="217–218" />. The result is a configuration
		in which the possessum bears both the person prefix and the affiliative suffix — the
		morphological load is carried entirely by the head noun — while the possessor NP is present
		but structurally unmatched. This is head-marking in the sense of <Ref k="nichols1986"
			paren />: the head of the NP, not the dependent, bears the relational morphology.
	</p>

	<Ex
		m="sisam kotan-u"
		g="Wajin village-POSS"
		tr="the Wajin's village"
		constructed
		note="The third-person (zero) prefix on the possessed noun is phonologically null; the affiliative suffix -u (short form of kotan 'village', type-③-3) is the sole overt possessive morpheme on the head. The possessor noun sisam 'non-Ainu, Wajin' is juxtaposed with no case marker."
	/>

	<Ex
		m="Ikuresuye nispa santek-ehe situri"
		g="Ikuresuye lord descendant-POSS prosper"
		tr="The descendants of Lord Ikuresuye will prosper."
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, uwepeker tale 7 (aa-irc/005#114)"
		note="The possessor phrase Ikuresuye nispa 'Lord Ikuresuye' is juxtaposed before the affiliative head santekehe 'descendants' (santek + affiliative -ehe). Third-person zero prefix leaves the possessive agreement slot phonologically silent; the affiliative suffix is the sole marker of the possessive relation on the head noun."
	/>

	<p>
		The following table summarises the semantic classes of nouns whose grammatical class requires
		the affiliative construction, following <Ref k="nakagawa2024" p="219–221" />:
	</p>

	<table>
		<thead>
			<tr>
				<th>class</th>
				<th>description</th>
				<th>examples (concept : affiliative)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>body parts and worn items</td>
				<td>anatomical parts; clothing normally worn; certain carried tools</td>
				<td>
					<i lang="ain-Latn">sik : sikihi</i> 'eye'; <i lang="ain-Latn">tek : tekehe</i> 'hand';
					<i lang="ain-Latn">tusa : tusaha</i> 'sleeve'; <i lang="ain-Latn">tasiro : tasiroho</i>
					'mountain-knife'
				</td>
			</tr>
			<tr>
				<td>part–whole</td>
				<td>a part that belongs to a larger whole</td>
				<td>
					<i lang="ain-Latn">nit : nicihi</i> 'spear shaft'; <i lang="ain-Latn">at : atuhu</i>
					'cord'; <i lang="ain-Latn">rur : rurihi</i> 'broth'
				</td>
			</tr>
			<tr>
				<td>kinship</td>
				<td
					>kin terms whose grammatical class demands the affiliative (see
					<Xr ch="kinship-honorific-possession" />)</td
				>
				<td>
					<i lang="ain-Latn">yup : yupihi</i> 'elder brother'; <i lang="ain-Latn">mat : macihi</i>
					'wife'; <i lang="ain-Latn">po : poho</i> 'son'
				</td>
			</tr>
			<tr>
				<td>material or origin</td>
				<td>a product identified by its material constituent or place</td>
				<td>
					<i lang="ain-Latn">ohaw : ohawe</i> 'nettle stew'; <i lang="ain-Latn">cise : cisehe</i>
					'house (in verse and some dialects)'
				</td>
			</tr>
			<tr>
				<td>inherently relational</td>
				<td>nouns whose sense is relational: prices, smells, villages</td>
				<td>
					<i lang="ain-Latn">atay : ataye</i> 'price'; <i lang="ain-Latn">hura : huraha</i>
					'smell'; <i lang="ain-Latn">kotan : kotanuhu</i> 'village'
				</td>
			</tr>
		</tbody>
	</table>

	<p>
		Class membership is grammatical rather than purely semantic. The same object can fall into
		either class depending on cultural construal: a regular bow (<i lang="ain-Latn">ku</i>) is
		typically alienable and takes <i lang="ain-Latn">kor</i>, but a trap-bow is affiliative
		(<i lang="ain-Latn">kuwehe</i>) because Ainu cosmology treats the prey's choice of whose bow
		to fall to as inalienable — yet the same trap-bow can also be expressed with
		<i lang="ain-Latn">kor</i> when framed as an ordinary transferable object
		<Ref k="nakagawa2024" p="229" /> ‹contested›. Whether the triggering condition for
		affiliative marking is the specificity of the possessor or the grammatical demands of the
		construction (a person prefix or relative-clause structure) is itself a live debate:
		the older analysis requires a specific referential possessor
		<Ref k="tamura2000" paren />, while Nakagawa 2024: 227–233 argues the constraint is
		structural — the affiliative appears wherever a person prefix or relative-clause configuration
		demands it, regardless of possessor specificity ‹contested›.
	</p>

	<p>
		The possessor NP and the possessed personal form are not tightly bracketed as a constituent.
		Satō documents cases in which the possessor NP and the possessed noun are separated by topic
		particles or other intervening material, with the personal form functioning as a signal that a
		possessor NP exists somewhere in the discourse context rather than as part of a closely-bound
		syntactic constituent <Ref k="sato2008" p="155–156" />. Bugaeva's parallel formulation is
		that the possessed suffix "registers a possessor but does not index its properties", so the
		overt possessor NP can be omitted without loss of grammaticality
		<Ref k="bugaeva2021poss" p="52, 80–81" />.
	</p>

	<p>
		Community discussion in the aynu-corpora Discord (thegodofneet, 2025-09-17;
		<Ref k="aynucorporadiscord" />) proposes that the companion/group noun
		<A w="utar" gl="family, kin, companions" /> has an affiliative form
		<i lang="ain-Latn">utari(hi)</i> — 'someone's companions/kin' — on the grounds that a group
		of companions is hard to conceive without a relational anchor, making it pragmatically
		obligatorily possessed like body-part and kin terms. This is consistent with Nakagawa 2024:
		251–252 on the behaviour of <i lang="ain-Latn">utar</i> in narrative ‹contested›.
	</p>
</S>

<S t="Nested possession" id="nested">
	<p>
		When the possessor is itself a personal form — an inalienable noun bearing its own person
		prefix and affiliative suffix — the result is a chain of possessed nouns, each indexed for its
		own possessor. The innermost noun carries an overt person prefix; the next noun takes the
		innermost noun's referent as its possessor, which is then marked by a zero third-person
		prefix. Nakagawa 2024: 224 (ex. 259) illustrates this in a Saru narrative passage:
	</p>

	<Ex
		m="a=yup-ihi tures-ihi"
		g="4.POSS=elder.brother-POSS younger.sister-POSS"
		tr="my elder brother's younger sister"
		cite="nakagawa2024:225"
		dial="SAR"
		place="Nakagawa ex. 259; embedded in the clause nea a=tura a=yupihi turesihi, ne Iskar emko wa a=tura okkaypo a=eutannere"
		note="The 4th-person prefix a= on yupihi indexes the narrator's elder brother; the following turesihi carries a zero (3rd-person) prefix whose referent is that elder brother. Each noun enters the affiliative construction independently: yup 'elder brother' with affiliative -ihi (type-③-1); tures 'younger sister' with affiliative -ihi (type-③-1)."
	/>

	<p>
		Each noun in the chain takes its own personal prefix, and the chain as a whole is not
		syntactically tight: topic particles can interrupt it, as with the simpler two-noun case
		above. Possessor-raising through noun incorporation — where the possessor of an incorporated
		body-part noun is promoted to the clause subject position — is a related but distinct
		phenomenon treated in <Xr ch="noun-incorporation-subject-possessor-stranding" />.
	</p>
</S>

<S t="The kor appositive construction" id="kor-appositive">
	<p>
		Alienable nouns cannot receive the person prefix and affiliative suffix directly. The
		transitive verb <A w="kor" gl="have, hold, carry" /> intervenes between possessor and
		possessum: the possessor fills the A-slot of <i lang="ain-Latn">kor</i> as a person prefix;
		the possessed noun follows as the implicit relativised object, remaining in the concept
		(uninflected) form
		<Ref k="nakagawa2024" p="218" />; <Ref k="sato2008" p="151" />.
	</p>

	<Ex
		m="ku=kor seta hure toan kur kor cape retar"
		g="1SG.A=have dog be.red that person have cat be.white"
		tr="My dog is red; that person's cat is white."
		cite="utari1994"
		dial="HK"
		place="Akor Itak ch. 5, sentence 9"
		note="A minimal alienable pair: 1SG possessor ku=kor vs the zero-prefix kor (3rd-person possessor). Both seta 'dog' and cape 'cat' are non-possessible alienable nouns and cannot carry a person prefix directly."
	/>

	<p>
		Bugaeva's analysis, based on the Pacific-wide typology of appositive possession, treats the
		<i lang="ain-Latn">kor</i> construction as a finite relative clause headed by the transitive
		verb <i lang="ain-Latn">kor</i>, with the possessum as the gapped object:
		<i lang="ain-Latn">[__ ku=kor] seta</i> = 'the dog that I have'
		<Ref k="bugaeva2021poss" p="55" />. Evidence that <i lang="ain-Latn">kor</i> retains full
		verbal syntax includes the availability of perfective marking
		(<i lang="ain-Latn">a=kor a kotan</i> 'my former village'), plural suffixes, mirativity, and
		free stacking of relative clauses over the same head
		<Ref k="bugaeva2021poss" p="57–58" />. The construction is therefore classified as an
		<em>appositive-verbal classifier</em> — a Circum-Pacific possessive type in which a
		finite verb serves as the possessive head rather than a case affix
		<Ref k="bugaeva2021poss" p="52, 80–82" />.
	</p>

	<p>
		With a third-person possessor, <i lang="ain-Latn">kor</i> loses its overt A-prefix and can
		cliticise phonologically to the following head noun, yielding units such as
		<i lang="ain-Latn">kor-ninkari</i> 'X's earrings'. Bugaeva (2021) reads this as an in-progress
		shift from the dependent-marking pattern of the full verbal construction toward a head-marking
		configuration in which <i lang="ain-Latn">kor</i> has become a clitic on the possessed noun
		<Ref k="bugaeva2021poss" p="59" /> ‹corpus-suggested›.
		This trajectory — verbal appositive classifier to head-marking clitic — parallels the path
		already completed in the inalienable system, where the affiliative suffix now sits squarely on
		the head.
	</p>

	<p>
		The set of nouns attested in the <i lang="ain-Latn">kor</i> construction is limited.
		Tamura's Saru lexicon lists approximately fifty-seven such nouns, distributed across people
		(24), places and environment (11), food and drink (7), tools and ritual objects (7), domestic
		animals (1), and human attributes (7); wild animals and plants, owned by no one in the Ainu
		world, are largely absent <Ref k="bugaeva2021poss" p="55–56" />; <Ref k="tamura1996" paren />.
		The affective extension of <i lang="ain-Latn">kor</i> — as in
		<i lang="ain-Latn">a=kor pon menoko</i> 'my (dear) young girl' — adds a further function in
		oral literature beyond straightforward ownership
		<Ref k="bugaeva2021poss" p="56" />.
	</p>

	<p>
		Typologically, the inalienable affiliative construction is head-marking in the sense of
		<Ref k="nichols1986" paren />: the relational morphology (person prefix plus affiliative
		suffix) is borne entirely by the head noun, with no case or adposition marking the possessor
		dependent. The <i lang="ain-Latn">kor</i> construction differs in placing the possessor index
		on the intervening verb rather than on the possessed noun head, a configuration that Huber
		(2025) places in a separate appositive-verbal column within her four-way attributive typology
		(head-marking / dependent-marking / zero-marking / double-marking)
		<Ref k="huber2025" p="248" />. The broader Circum-Pacific context and its diachronic
		implications are laid out in <Ref k="bugaeva2021poss" p="80–82" />. Noun incorporation of
		possessed body-part nouns and the interaction with the <i lang="ain-Latn">kor</i> set
		(alienable nouns cannot be incorporated in their possessed forms) are treated in
		<Xr ch="noun-incorporation-object" />.
	</p>
</S>
