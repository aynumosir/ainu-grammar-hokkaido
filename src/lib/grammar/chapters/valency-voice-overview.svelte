<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The valency system as an arity calculus" id="overview">
	<p>
		Hokkaido Ainu reworks the argument frame of the verb through a dense layer of derivational
		morphology. Nakagawa presents the system as an arithmetic over the verb word: every derivational
		element carries an arity value, the derived verb’s argument capacity is the sum of those values,
		and the person indexes fill whatever argument positions remain <Ref
			k="nakagawa2024"
			p="136–140, 184–212"
		/>. The Handbook covers the same ground as verbal valency and voice — the applicatives, the
		causatives, the reciprocal, the reflexive, the antipassive, the middle, and a set of
		valency-neutral alternations <Ref k="bugaevakobayashi2022" p="§1–5" />.
		<Xr ch="noun-incorporation-object">Noun incorporation</Xr> belongs to this architecture as well,
		since an incorporated nominal satisfies an argument slot inside the verb word and is diagnosed by
		the position of person marking <Ref k="satoni2022" p="§1–2" />; <Ref
			k="shibatani1990"
			p="60–66"
		/>.
	</p>

	<p>
		The diagnostic substrate is the transitivity system of
		<Xr ch="transitivity-and-valence-classes" /> and the four-person paradigm of
		<Xr ch="person-marking-architecture" />. A derived intransitive takes the suffixal S indexes
		<i lang="ain-Latn">=as</i> (first-plural exclusive) and <i lang="ain-Latn">=an</i> (fourth); a
		derived transitive takes the prefixal A indexes <i lang="ain-Latn">ci=</i> and
		<i lang="ain-Latn">a=</i> <Ref k="sato2008" p="96" />; <Ref k="nakagawa2024" p="137, 140" />.
		Placing a verb in the first-person plural is therefore the one operative test of its derived
		transitivity. Satō’s pair <i lang="ain-Latn">pukusa a=ta</i> ‘we dig
		<A w="pukusa" gl="lily bulb" />’ beside <i lang="ain-Latn">pukusa-ta=an</i> makes the point:
		incorporating the object intransitivizes the verb, and the fourth-person S suffix
		<i lang="ain-Latn">=an</i> becomes available <Ref k="satoni2022" p="§2" />. A verb hosts at most
		two person affixes, one subject and one object, so every operation works under a two-slot ceiling
		<Ref k="sato2023b" p="39" />; <Ref k="bugaevakobayashi2022" p="§2" />. Ijäs’s learner image of
		argument “pockets” on the verb beside external “slots” renders the same head-marking intuition
		<Ref k="nichols1986" paren />; her terms are pedagogical and her example sentences constructed
		<Ref k="ijas2023" /> ‹consensus›.
	</p>

	<Ex
		m="numan hekaci cep koyki"
		g="yesterday boy fish catch"
		tr="The boy caught fish yesterday."
		cite="ijas2023"
		constructed
		note="Ijäs Lesson 3 introduces the two-argument transitive frame with constructed sentences of this type; the third-person subject and object are segmentally unmarked."
	/>
</S>

<S t="Inventory of operations" id="inventory">
	<p>
		The working inventory for the part is given below. The values in the first column are arity
		effects in Nakagawa’s sense, and they predict the person-marking diagnostics used by Satō and the
		Handbook. Several surface strings recur across rows, so the arity and the host verb class settle
		how a given occurrence is glossed. Each operation is developed in its own chapter, listed in the
		final column. <Ref k="bugaeva2012" p="§15.4.4.1" />
	</p>

	<table>
		<thead>
			<tr>
				<th>direction</th>
				<th>operation</th>
				<th>marker or material</th>
				<th>typical output</th>
				<th>detail</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>+1</td>
				<td>productive causative</td>
				<td><i lang="ain-Latn">-re</i>, <i lang="ain-Latn">-te</i>, <i lang="ain-Latn">-e</i></td>
				<td>causer added as subject; old subject becomes object</td>
				<td><Xr ch="causative-morphological-re-e-te" /></td>
			</tr>
			<tr>
				<td>+1</td>
				<td>applicative</td>
				<td><i lang="ain-Latn">e-</i>, <i lang="ain-Latn">ko-</i>, <i lang="ain-Latn">o-</i></td>
				<td>a peripheral participant becomes a core object</td>
				<td><Xr ch="applicative-system-overview" /></td>
			</tr>
			<tr>
				<td>+1</td>
				<td>transitivizer</td>
				<td><i lang="ain-Latn">-kar</i> on an intransitive</td>
				<td>an object is added</td>
				<td><Xr ch="transitivizer-ka-valency-pairs" /></td>
			</tr>
			<tr>
				<td>+1 / 0</td>
				<td>direct causative, transitivity-pair formation</td>
				<td><i lang="ain-Latn">-V</i>, <i lang="ain-Latn">-ke</i>, <i lang="ain-Latn">-ka</i></td>
				<td>lexical or direct-causative alternation</td>
				<td><Xr ch="transitivizer-ka-valency-pairs" /></td>
			</tr>
			<tr>
				<td>0</td>
				<td>indefinite causative</td>
				<td><i lang="ain-Latn">-yar</i>, <i lang="ain-Latn">-ar</i></td>
				<td>causer added while the causee stays unexpressed and unindexed</td>
				<td><Xr ch="permissive-sociative-causative-yar" /></td>
			</tr>
			<tr>
				<td>0</td>
				<td>sociative</td>
				<td><i lang="ain-Latn">uko-</i>, <i lang="ain-Latn">uwe-</i></td>
				<td>joint participation, no net arity change</td>
				<td><Xr ch="reciprocal-u" /></td>
			</tr>
			<tr>
				<td>0</td>
				<td>affiliative part prefix</td>
				<td><i lang="ain-Latn">e-</i> ‘head of’, <i lang="ain-Latn">o-</i> ‘bottom of’</td>
				<td>fills a part slot but requires its own possessor</td>
				<td><Xr ch="applicative-system-overview" /></td>
			</tr>
			<tr>
				<td>−1</td>
				<td>antipassive / indefinite object</td>
				<td><i lang="ain-Latn">i-</i></td>
				<td>generic object absorbed; transitive becomes intransitive</td>
				<td><Xr ch="antipassive-detransitive-i" /></td>
			</tr>
			<tr>
				<td>−1</td>
				<td>reflexive</td>
				<td><i lang="ain-Latn">yay-</i>, <i lang="ain-Latn">si-</i></td>
				<td>object position filled by a self participant</td>
				<td><Xr ch="reflexive-yay" />; <Xr ch="reflexive-possessive-si" /></td>
			</tr>
			<tr>
				<td>−1</td>
				<td>reciprocal</td>
				<td><i lang="ain-Latn">u-</i></td>
				<td>object position filled by reciprocal participants; plural subject</td>
				<td><Xr ch="reciprocal-u" /></td>
			</tr>
			<tr>
				<td>−1</td>
				<td>middle / object-resultative</td>
				<td><i lang="ain-Latn">ci-</i></td>
				<td>the affected participant becomes the sole argument</td>
				<td><Xr ch="middle-anticausative-passive" /></td>
			</tr>
			<tr>
				<td>−1</td>
				<td>lexical body-region prefix</td>
				<td><i lang="ain-Latn">he-</i> ‘head’, <i lang="ain-Latn">ho-</i> ‘bottom’</td>
				<td>body-region object supplied by the prefix</td>
				<td><Xr ch="middle-anticausative-passive" /></td>
			</tr>
			<tr>
				<td>−1 (×N)</td>
				<td>noun incorporation</td>
				<td>bare noun stem, and in places adverbial material</td>
				<td>an argument or adjunct joins the verb word</td>
				<td><Xr ch="noun-incorporation-object" /></td>
			</tr>
		</tbody>
	</table>

	<p>
		The inventory also marks the homophony hazards that run through the part. Applicative
		<i lang="ain-Latn">e-</i> and <i lang="ain-Latn">o-</i> add an object; affiliative
		<i lang="ain-Latn">e-</i> and <i lang="ain-Latn">o-</i> fill a part slot while keeping a
		possessor; second-person <i lang="ain-Latn">e=</i> is a person index. The prefix
		<i lang="ain-Latn">ci-</i> may be the middle, while <i lang="ain-Latn">ci=</i> is the
		first-plural-exclusive A index. The suffix <i lang="ain-Latn">-kar</i> transitivizes on an
		intransitive base, while a homophonous <i lang="ain-Latn">-kar</i> on transitives is a
		verse-filler with no arity effect <Ref k="nakagawa2024" p="190–193, 209–210" />. None of these
		can be glossed without first reading off the arity.
	</p>
</S>

<S t="Valency-increasing morphology" id="increasing">
	<p>
		The productive causative is one suffix with three principal allomorphs: <i lang="ain-Latn">-re</i>
		after a vowel or glide, <i lang="ain-Latn">-te</i> after most consonants, and
		<i lang="ain-Latn">-e</i> after <i lang="ain-Latn">r</i> <Ref k="nakagawa2024" p="200–201" />;
		<Ref k="bugaeva2014" p="134" />. It raises arity by one. On an intransitive base the original S
		becomes the object of the causative verb; on a transitive base the result is a double-object verb,
		and double causatives are admitted as well, both of which are taken up in
		<Xr ch="causee-marking-ditransitive-double-causative" />. The suffix covers coercive and
		permissive causation alike, and Bugaeva’s Saru sample shows it as the productive default, taking
		in many direct-causative uses that older descriptions assigned to non-productive transitivizing
		suffixes <Ref k="bugaeva2014" p="130, 139–144" />.
	</p>

	<Ex
		m="matkaci sinot"
		g="girl play"
		tr="The girl played."
		cite="nakagawa2024:431"
		dial="SAR"
		place="Nakagawa ex. 954, after Tamura 1984"
	/>

	<Ex
		m="hapo matkaci sinot-te"
		g="mother girl play-CAUS"
		tr="Mother made the girl play."
		cite="nakagawa2024:431"
		dial="SAR"
		place="Nakagawa ex. 954′"
		note="The base subject matkaci ‘girl’ is the object of the derived causative."
	/>

	<p>
		The older, less productive direct-causative suffixes <i lang="ain-Latn">-V</i>,
		<i lang="ain-Latn">-ke</i>, and <i lang="ain-Latn">-ka</i> build many valency pairs and are split
		out into <Xr ch="transitivizer-ka-valency-pairs" />. Bugaeva analyzes most of this morphology as
		direct causative in function, where Nakagawa keeps the forming suffixes, the productive causative,
		and the special motion-verb causatives distinct by their distribution <Ref
			k="nakagawa2024"
			p="198–203"
		/>; <Ref k="bugaeva2014" p="129–144" /> ‹contested›. The indefinite causative
		<i lang="ain-Latn">-yar</i>, which adds a causer while leaving the causee unexpressed and
		unindexed, is valency-neutral and is treated separately in
		<Xr ch="permissive-sociative-causative-yar" />. Ijäs’s Lesson 9 statement that
		<i lang="ain-Latn">-re</i> “turns intransitive verbs into transitive verbs” gives the right entry
		intuition but states no allomorphy and conflates causation with transitivization <Ref
			k="ijas2023"
		/>; <Ref k="sato2008" p="234–238" /> ‹consensus›.
	</p>

	<p>
		The applicatives <i lang="ain-Latn">e-</i>, <i lang="ain-Latn">ko-</i>, and
		<i lang="ain-Latn">o-</i> add a non-agent participant to the object set, turning an intransitive
		into a transitive and a transitive into a double-object verb <Ref k="bugaeva2006" p="188" />;
		<Ref k="nakagawa2024" p="194" />. Their applied objects range well beyond a narrow instrumental
		or benefactive: Bugaeva’s role tables cover content, theme-patient, instrument, location, range,
		addressee, goal, comitative, benefactive, malefactive, recipient, source, and purpose <Ref
			k="bugaeva2006"
			p="188–196"
		/>. The three prefixes, the diagnostics, and the older
		<span lang="ja">充当相</span> and case-relation-prefix labels they displace are set out in
		<Xr ch="applicative-system-overview" />, with the individual prefixes in
		<Xr ch="applicative-e" />, <Xr ch="applicative-ko" />, and <Xr ch="applicative-o" />.
	</p>

	<Ex
		m="sirkorkamuy emus e-tuye"
		g="standing.tree sword APPL-cut"
		tr="He cut a standing tree with a sword."
		cite="nakagawa2024:193"
		dial="SAR"
		place="Nakagawa ex. 173, after Monbetsu-chō 1969: 237"
		note="The instrument emus ‘sword’ is the applied object licensed by e-, which raises tuye ‘cut’ from a two-place to a three-place verb."
	/>
</S>

<S t="Valency-decreasing and rearranging voices" id="decreasing">
	<p>
		The prefix <i lang="ain-Latn">i-</i> fills the object position of a transitive verb with a generic
		‘thing’ or ‘someone’ and intransitivizes it, so that <A w="huraye" gl="wash something" /> yields
		<i lang="ain-Latn">i-huraye</i> ‘do the washing’ and <A w="ku" gl="drink something" /> yields
		<i lang="ain-Latn">i-ku</i> ‘drink alcohol’ <Ref k="nakagawa2024" p="190–192" />. Its label
		divides the literature. Bugaeva analyzes it as an antipassive on syntactic, semantic, and
		discourse grounds, and Nakagawa adopts the term after her; Ijäs follows the same usage in Lesson
		9. Satō’s textbook treats the identical prefix as a derivational <i lang="ain-Latn">i-</i>
		‘people, someone’ and uses no antipassive label <Ref k="bugaeva2021antip" />; <Ref
			k="bugaevakobayashi2022"
			p="§4.2.3"
		/>; <Ref k="ijas2023" />; <Ref k="sato2008" p="232–233" /> ‹contested›. Its origin is a separate
		dispute: the older line relates it to the fourth-person object index <i lang="ain-Latn">i=</i>;
		Bugaeva derives the antipassive from incorporation of a generic noun and then the pronoun from the
		antipassive; Nam reconstructs the source as <i lang="ain-Latn">*hi</i> or
		<i lang="ain-Latn">*ihi</i> ‘thing, place, time’, the generic noun he also ties to the nominalizer
		and the possessed suffix <Ref k="nam2021" p="63–74" /> ‹contested›. Ijäs’s further suggestion that
		<i lang="ain-Latn">isam</i> ‘not exist’ contains this <i lang="ain-Latn">i-</i> over a lost
		<i lang="ain-Latn">*sam</i> is idiosyncratic and unverified.
	</p>

	<Ex
		m="i-ri=an wa or-o wa sini=an na"
		g="ANTIP-skin=4.S CONJ place-POSS from rest=4.S FIN"
		tr="I will skin the catch and then rest."
		cite="bugaevakobayashi2022:§4.2.3"
		dial="SHI"
		place="Shizunai Board of Education 1991–1995, O0130054_6; Handbook ex. 24b"
		note="The intransitive S suffix =an shows that i-ri ‘do skinning’ is intransitive; the patient ‘catch’ is left out of the argument frame."
	/>

	<p>
		The reflexives <i lang="ain-Latn">yay-</i> and <i lang="ain-Latn">si-</i> both mean ‘self’ and
		both reduce arity by filling the object slot <Ref k="nakagawa2024" p="188–189" />. Their division
		of labour is among the most disputed points in Ainu derivation. Earlier accounts split them by
		intentionality or by an agentive against a patientive self; Satō’s Chitose analysis, adopted by
		Nakagawa and the Handbook, separates direct self-involvement, marked by
		<i lang="ain-Latn">yay-</i>, from indirect involvement or dependence on another participant,
		marked by <i lang="ain-Latn">si-</i>, so that <i lang="ain-Latn">yay-rayke</i> ‘commit suicide’
		stands against <i lang="ain-Latn">si-rayke</i> ‘be ruined by ill fortune’ <Ref
			k="sato2007"
			p="31–39"
		/>; <Ref k="nakagawa2024" p="188–189" />; <Ref k="bugaevakobayashi2022" p="§4.2.2" />
		‹contested›. The two prefixes are treated in <Xr ch="reflexive-yay" />, and the possessive use of
		the same morphology, where <i lang="ain-Latn">si-</i> supplies a subject-coreferent possessor to
		an incorporated noun, in <Xr ch="reflexive-possessive-si" />.
	</p>

	<p>
		Reciprocal <i lang="ain-Latn">u-</i> fills the object slot with reciprocal participants and yields
		an intransitive verb with a plural subject. Its readings reach past ‘each other’:
		<i lang="ain-Latn">u-tures-kor</i> means ‘have a sister, be siblings’ and
		<i lang="ain-Latn">u-mina-re</i> ‘laugh together’, with no causative-reciprocal sense <Ref
			k="nakagawa2024"
			p="187–188"
		/>; <Ref k="bugaevakobayashi2022" p="§4.2.1" />. Ijäs’s Lesson 9 gloss ‘mutually, each other’
		captures the core reciprocal <Ref k="ijas2023" /> ‹consensus›. The valency-neutral sociative
		<i lang="ain-Latn">uko-</i> / <i lang="ain-Latn">uwe-</i>, built from <i lang="ain-Latn">u-</i>
		plus an applicative, is taken up with the reciprocal in <Xr ch="reciprocal-u" />.
	</p>

	<Ex
		m="nea nispa utar u-koyki kor oka siri a=nukar"
		g="that rich.man PL RECP-attack while exist.PL appearance 4.A=see"
		tr="I saw those rich men fighting each other."
		cite="bugaevakobayashi2022:§4.2.1"
		dial="SAR"
		place="Nakagawa corpus K8010281UP.168; Handbook ex. 11a"
	/>

	<p>
		The middle <i lang="ain-Latn">ci-</i> presents an event from its affected side and yields an
		intransitive: <A w="cari" gl="scatter something" /> gives <i lang="ain-Latn">ci-cari</i> ‘be
		scattered’, with the affected noun as subject, against <i lang="ain-Latn">a=cari</i>, which keeps
		that noun as the object of a transitive clause with an indefinite agent <Ref
			k="nakagawa2024"
			p="190–191, 429–430"
		/>; the Handbook glosses this <i lang="ain-Latn">ci-</i> object-resultative <Ref
			k="bugaevakobayashi2022"
			p="§4.2.4"
		/>. It is normally restricted to third-person participants, which keeps it apart from the
		first-plural-exclusive index <i lang="ain-Latn">ci=</i>.
	</p>

	<Ex
		m="aynu kam ka upas ka ta ci-cari"
		g="human flesh even snow even LOC RES-scatter"
		tr="Human flesh and snow too lay scattered on the ground."
		cite="nakagawa2024:189"
		dial="CHI"
		place="Nakagawa ex. 167"
	/>

	<p>
		Hokkaido Ainu has no subject-promoting passive. The work of a passive is carried by the
		fourth, indefinite transitive subject <i lang="ain-Latn">a=</i>, dialectally
		<i lang="ain-Latn">an=</i>: the agent is defocused while the patient stays the object of a
		transitive verb, and a demoted agent may appear in an <i lang="ain-Latn">or wa</i> ‘from’ phrase
		<Ref k="nakagawa2024" p="428–429" />; <Ref k="bugaevakobayashi2022" p="§1" />. Satō’s subjecthood
		test confirms the structure: a ‘want to be loved’ clause cannot treat the patient as an
		intransitive subject and instead requires a nominalized, object-marked frame <Ref
			k="sato2008"
			p="205–206"
		/> ‹consensus›. The middle, the anticausative patterns that overlap it, and the boundary with
		this indefinite-agent construction are pursued in <Xr ch="middle-anticausative-passive" />.
	</p>

	<Ex
		m="seta or wa aynu a=kupapa"
		g="dog place from person 4.A=bite"
		tr="A person was bitten by a dog."
		cite="nakagawa2024:428"
		dial="SAR"
		place="Nakagawa ex. 945″"
		note="The dog appears in an or wa ‘from’ phrase; the indefinite transitive subject a= stays on the verb and the patient aynu ‘person’ stays the object."
	/>
</S>

<S t="Noun incorporation and wordhood" id="incorporation">
	<p>
		Noun incorporation forms one verb word from a nominal stem and a verb <Ref
			k="nakagawa2024"
			p="480"
		/>; <Ref k="satoni2022" p="§1" />. The wordhood diagnostic is again the outer position of the
		person index. With a phrasal object the index sits on the verb,
		<i lang="ain-Latn">cep ku=koyki</i> ‘I catch fish’; under incorporation it precedes the whole
		noun-verb complex, <i lang="ain-Latn">ku=cep-koyki</i> ‘I fish-catch’; and with a fourth-person
		subject the test is decisive, because the intransitive suffix <i lang="ain-Latn">=an</i> cannot
		attach to a transitive verb <Ref k="nakagawa2024" p="482–483" />; <Ref k="satoni2022" p="§2" />.
	</p>

	<Ex
		m="pet or ta ran=an wa suy cep-koyki=an rok ayne"
		g="river place LOC descend.SG=4.S CONJ again fish-catch=4.S PL.PRF then"
		tr="I went down to the river and caught fish again, and at last …"
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, uwepeker 13; ILCAA materials aa-irc/016#14"
		note="The intransitive suffix =an on cep-koyki proves that the incorporated cep ‘fish’ has detransitivized koyki ‘catch’; the whole noun-verb sequence is one word."
	/>

	<p>
		Object incorporation is the unmarked, lexical type and the overwhelming majority in Satō’s
		Chitose count; it answers to Mithun’s Type I compounding <Ref k="mithun1984" paren />; <Ref
			k="sato2016"
			p="83–84"
		/>; <Ref k="satoni2022" p="§3" />. Subject incorporation is marked and divides into natural-force
		and possessor-requiring subtypes, the latter stranding a possessor that the subject recovers — the
		material of <Xr ch="noun-incorporation-subject-possessor-stranding" />. Oblique nouns do not
		incorporate directly: an instrument or a location first becomes an object through
		<i lang="ain-Latn">e-</i>, <i lang="ain-Latn">ko-</i>, or <i lang="ain-Latn">o-</i>, and only the
		derived object incorporates <Ref k="shibatani1990" p="62, 66–67" />; <Ref
			k="nakagawa2024"
			p="484"
		/>, the feeding relation pursued in <Xr ch="applicative-stacking-relativization-feeding" />.
	</p>

	<p>
		The status of incorporation is contested. Shibatani argues that a purely grammatical-relation
		account and a purely semantic-role account each fall short, and that Ainu incorporation must
		reference both the incorporated noun’s low agentivity and its grammatical position <Ref
			k="shibatani1988"
			p="210–211"
		/>; <Ref k="shibatani1990" p="60–66" />. Satō revises the unaccusative account because transitive
		natural-force subjects also incorporate, and takes low agentivity as the defining property,
		ranking the four types by a markedness calculus <Ref k="sato2008" p="221–227" />; <Ref
			k="satoni2022"
			p="§5–6"
		/>. Bugaeva places Ainu among the polysynthetic languages in Baker’s sense while recording where
		it departs from the Mohawk prototype — its word order, its in-situ <i lang="ain-Latn">wh</i>, and
		its unrestricted morphological causatives <Ref k="baker1988" paren />; <Ref k="bugaeva2014" />
		‹contested›. These questions are developed in <Xr ch="noun-incorporation-object" /> and
		<Xr ch="noun-incorporation-oblique-polysynthesis-debate" />.
	</p>
</S>

<S t="Stacking, ordering, and the verb-word template" id="template">
	<p>
		The valency prefixes sit inside the person-index layer and before the root, while the causative
		suffixes follow the stem and its forming material. Nakagawa’s position table gives the order as
		person index, nominal or applicative prefix, root, forming and plural suffix, causative suffix,
		and suffixal person index <Ref k="nakagawa2024" p="210–212" />, the template developed in
		<Xr ch="verb-word-template" /> and <Xr ch="personal-affix-template-and-ordering" />. Because the
		person index is the outermost shell, any element standing outside it begins a new word, which is
		the same fact that underlies the incorporation diagnostic above.
	</p>

	<p>
		Stacking is extensive and bounded by the template. A single verb may carry up to two applicatives,
		two causatives, two incorporated objects, and a lexical prefix, alongside a reciprocal, reflexive,
		or antipassive and the agreement indexes <Ref k="bugaeva2014" />. The classic showcase loads an
		incorporated object (<A w="ram" gl="heart" />), an adverbial element
		(<A w="tuyma" gl="far" />), one reflexive proper, one reflexive-possessive prefix, and two applicatives onto one transitive root:
	</p>

	<Ex
		m="usa-oruspe a=e-yay-ko-tuyma-si-ram-suy-pa"
		g="various-rumor 4.A-APPL-REFL-APPL-far-REFL.POSS-heart-sway-PL"
		tr="We keep swaying our hearts afar over various rumours."
		lit="we sway our hearts about ourselves far over various rumours"
		cite="shibatani1990:73; bugaeva2014"
		dial="HK"
		place="after Chiri 1936: 169; Shibatani ex. 131 / Bugaeva ex. 1"
		note="One transitive root suy-pa ‘sway (PL)’ carries an incorporated object, an adverbial, an outer reflexive proper, an inner reflexive-possessive si- before ram ‘heart’, and two applicatives; the whole reads ‘we wonder about various rumours’."
	/>

	<p>
		The Handbook’s <i lang="ain-Latn">yay-ipe-e-ko-sunke</i> ‘eat meagre meals’ shows the converse, a
		three-object applicative frame re-intransitivized by incorporating one object and reflexivizing
		another <Ref k="bugaevakobayashi2022" p="§4.1.1" />. Valency morphology also interacts with verbal
		number, since what a plural stem or the plural <i lang="ain-Latn">-pa</i> tracks depends on
		transitivity: an intransitive plural tracks subject number, a transitive plural tracks object or
		event number <Ref k="ijas2023" />; <Ref k="nakagawa2024" p="142–159" /> ‹consensus›. That system
		belongs to <Xr ch="suppletive-verbal-number" /> and <Xr ch="person-number-interactions" />, and
		a valency operation can shift which participant a plural form tracks.
	</p>
</S>
