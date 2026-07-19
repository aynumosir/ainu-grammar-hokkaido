<script lang="ts">
	import { S, Ex, Ref, Xr } from '$lib/grammar/components';
</script>

<S t="The verb word as the head of its clause" id="overview">
	<p>
		The Hokkaido Ainu verb word is the head of its clause: every other constituent enters a
		grammatical or semantic relation with it, and it alone carries the bound indexes that identify
		the clause's core participants <Ref k="nakagawa2024" p="124" />. Satō describes the language as
		head-marking in the sense of <Ref k="nichols1986" paren />, with the verb bearing the central
		information about which arguments fill its valence frame; external noun phrases may be absent,
		freely ordered, or arranged for discourse, while the indexes on the verb do the ordinary work of
		tracking who acts on whom <Ref k="sato2023b" p="42" />. Ijäs's classroom image of verb
		<em>pockets</em>, filled before and more obligatorily than free pronouns or full noun phrases,
		names the same head-marking fact for learners <Ref k="ijas2023" />. The personal-index
		architecture itself is the subject of <Xr ch="person-marking-architecture" />; this chapter sets
		out the verb word's morphological template and the order of its position classes, and routes the
		detail of each zone to the chapters that follow.
	</p>

	<p>
		Several properties of the Ainu verb fix the boundaries of that template <Ref
			k="nakagawa2024"
			p="124–125"
		/>. Tense is absent as an inflectional category: a bare verb form is read as past, present, or
		future from context, temporal adverbs, or discourse sequencing <Ref k="nakagawa2024" p="124" />;
		<Ref k="shibatani1990" p="33" />; <Ref k="ijas2023" />. There is no separate adjective class;
		meanings rendered by English or Japanese adjectives are intransitive verbs, and a stative reading
		ordinarily carries an inchoative one — Ijäs presents <i lang="ain-Latn">hure</i> as both 'be red'
		and 'become red', matching Nakagawa's <i lang="ain-Latn">poro</i> 'be big; become big' and the
		imperative evidence Shibatani adduces for the verbal status of quality predicates <Ref
			k="ijas2023"
		/>; <Ref k="nakagawa2024" p="124" />; <Ref k="shibatani1990" p="33–34" />. Property predicates
		are treated as a verb subclass in <Xr ch="property-concept-predication" /> and
		<Xr ch="no-adjective-class-property-verbs" />. Person marking is obligatory while independent
		pronouns are optional, so the language is consistently pro-dropping and verb-final <Ref
			k="ijas2023"
		/>; <Ref k="nakagawa2024" p="125, 363" />. Tense, aspect, mood, evidentiality, and negation are
		assembled outside the lexical verb by auxiliaries, formal nouns, and particles that take an
		already person- and number-inflected verb as their input, and are treated in
		<Xr ch="tam-overview" />, <Xr ch="tenselessness-and-time-reference" />, and the evidential and
		negation parts. The verb word supplies the stem and its argument morphology; the larger predicate
		supplies the rest.
	</p>
</S>

<S t="A position-class template" id="template">
	<p>
		The finite verb word can be modelled as an ordered set of position classes. The model is a
		descriptive abstraction over the recurrent linear positions of person indexes, valency-changing
		morphology, the lexical stem, stem-number morphology, derivational suffixes, and the outer plural
		markers. Read from the outer left edge to the outer right edge, the zones are as follows. <Ref k="bugaeva2012" p="§15.4.4.1" />
	</p>

	<table>
		<thead>
			<tr>
				<th>zone (outer → inner → outer)</th>
				<th>typical material</th>
				<th>position and status</th>
				<th>detail chapter</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>external arguments</td>
				<td>bare subject and object noun phrases; case-marked obliques outside the argument frame</td>
				<td>outside the verb word; pragmatically ordered, omissible under person indexing</td>
				<td><Xr ch="transitivity-and-valence-classes" /></td>
			</tr>
			<tr>
				<td>personal prefixes</td>
				<td><i lang="ain-Latn">ku=</i>, <i lang="ain-Latn">ci=</i>, <i lang="ain-Latn">a=</i>, <i lang="ain-Latn">e=</i>, <i lang="ain-Latn">eci=</i>; object <i lang="ain-Latn">en=</i>, <i lang="ain-Latn">un=</i>, <i lang="ain-Latn">i=</i></td>
				<td>outer prefixal layer; at most one subject and one object index (the two-index cap)</td>
				<td><Xr ch="person-marking-architecture" /></td>
			</tr>
			<tr>
				<td>valency prefixes</td>
				<td>applicative <i lang="ain-Latn">e-</i>, <i lang="ain-Latn">ko-</i>, <i lang="ain-Latn">o-</i>; antipassive <i lang="ain-Latn">i-</i>; reflexive <i lang="ain-Latn">yay-</i>, <i lang="ain-Latn">si-</i>; reciprocal <i lang="ain-Latn">u-</i>; incorporated nominal</td>
				<td>closer to the stem than the person indexes; add to or fill argument positions</td>
				<td><Xr ch="valency-voice-overview" /></td>
			</tr>
			<tr>
				<td>stem</td>
				<td>simple roots, derived and incorporated stems, suppletive singular/plural stems</td>
				<td>lexical head; fixes the base valence frame</td>
				<td><Xr ch="transitivity-and-valence-classes" /></td>
			</tr>
			<tr>
				<td>stem-internal suffixes</td>
				<td>plural <i lang="ain-Latn">-pa</i>, transitivity-pair suffixes, causative <i lang="ain-Latn">-re</i> / <i lang="ain-Latn">-e</i> / <i lang="ain-Latn">-te</i>, <i lang="ain-Latn">-yar</i></td>
				<td>inside the person-inflected word; change stem class or valence</td>
				<td><Xr ch="causative-morphological-re-e-te" /></td>
			</tr>
			<tr>
				<td>intransitive S suffixes</td>
				<td><i lang="ain-Latn">=as</i> '1PL.EXCL.S', <i lang="ain-Latn">=an</i> '4.S'</td>
				<td>at the right edge of the inflected stem; the side-switch for these two person rows</td>
				<td><Xr ch="personal-affix-template-and-ordering" /></td>
			</tr>
			<tr>
				<td>outer plural clitic</td>
				<td>western <i lang="ain-Latn">pa</i> (Saru, Chitose, Ishikari); eastern <i lang="ain-Latn">ci</i></td>
				<td>outside the person-inflected verb in the clearest cases</td>
				<td><Xr ch="suppletive-verbal-number" /></td>
			</tr>
		</tbody>
	</table>

	<p>
		Two ordering facts anchor the template. The first is a side-switch by transitivity. The
		first-plural-exclusive and fourth-person subjects appear as <em>suffixes</em> on an intransitive
		stem but as <em>prefixes</em> on a transitive one: <i lang="ain-Latn">inkar=an</i> 'I/one looked'
		and <i lang="ain-Latn">arki=as</i> 'we came' beside <i lang="ain-Latn">a=nukar</i> 'I/one saw it'
		and <i lang="ain-Latn">ci=nukar</i> 'we saw it' <Ref k="nakagawa2024" p="166–169" />; <Ref
			k="sato2008"
			p="96"
		/>. The second is the position of the two homophonous plural <i lang="ain-Latn">pa</i>
		elements. The Type-C plural suffix <i lang="ain-Latn">-pa</i> is root-bound and stands inside the
		person suffix and inside the causative, whereas the outer plural clitic
		<i lang="ain-Latn">pa</i> follows the whole person-inflected verb:
		<i lang="ain-Latn">iki-pa=an</i> with the suffix before <i lang="ain-Latn">=an</i> contrasts with
		<i lang="ain-Latn">iki=an pa</i> with the clitic after it <Ref k="nakagawa2024" p="156–159" />.
		The relative order of these elements is the subject of <Xr
			ch="personal-affix-template-and-ordering"
		/> and <Xr ch="suppletive-verbal-number" />.
	</p>

	<p>
		The template is partly positional and partly scope-driven. Some ordering is fixed by position
		class, but the valency prefixes and suffixes stack in an order that tracks the order of
		derivation: a chain such as <i lang="ain-Latn">ruska</i> 'be angry at' →
		<i lang="ain-Latn">ko-ruska</i> → <i lang="ain-Latn">yay-ko-ruska</i> →
		<i lang="ain-Latn">i-ruska</i> raises and lowers valence step by step, each affix scoping over
		the stem already built <Ref k="bugaevakobayashi2022" p="§4" />; <Ref k="sato2023b" p="40" />.
		Auxiliaries and light verbs such as <i lang="ain-Latn">ki</i> 'do' and the abilitative
		<i lang="ain-Latn">easkay</i> 'can' stand outside this word altogether, and are treated in
		<Xr ch="light-and-pro-verbs" /> and <Xr ch="tam-overview" />.
	</p>
</S>

<S t="Transitivity as the organizing axis" id="transitivity">
	<p>
		Transitivity is a formal property of the verb word, decided by structure and not by the meaning
		of the translation <Ref k="nakagawa2024" p="125–127" />; <Ref k="sato2008" p="96" />. Two
		diagnostics define it. A verb requires a fixed number of bare noun-phrase arguments — noun
		phrases without a case particle or postposition — and case-marked phrases are adverbial additions
		outside that count; one bare argument marks an intransitive verb, two or more a transitive verb
		<Ref k="nakagawa2024" p="126–127" />. An intransitive verb indexes only its subject (S), while a
		transitive verb indexes subject (A) and object (O) <Ref k="nakagawa2024" p="126" />. The surest
		operational test puts the verb in the first-person plural: an intransitive takes the suffix
		<i lang="ain-Latn">=as</i> (exclusive) or <i lang="ain-Latn">=an</i> (fourth person), a
		transitive the prefix <i lang="ain-Latn">ci=</i> or <i lang="ain-Latn">a=</i>, the other person
		cells being uninformative — a side-switch Satō calls irregular and still unexplained <Ref
			k="sato2008"
			p="96"
		/>.
	</p>

	<table>
		<thead>
			<tr>
				<th>person</th>
				<th>S (intransitive subject)</th>
				<th>A (transitive subject)</th>
				<th>O (object)</th>
				<th>template consequence</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1SG</td>
				<td><i lang="ain-Latn">ku=</i></td>
				<td><i lang="ain-Latn">ku=</i></td>
				<td><i lang="ain-Latn">en=</i></td>
				<td>prefixal throughout; S = A, distinct O</td>
			</tr>
			<tr>
				<td>1PL.EXCL</td>
				<td><i lang="ain-Latn">=as</i></td>
				<td><i lang="ain-Latn">ci=</i></td>
				<td><i lang="ain-Latn">un=</i></td>
				<td>suffix on S, prefix on A: the side-switch</td>
			</tr>
			<tr>
				<td>2SG</td>
				<td><i lang="ain-Latn">e=</i></td>
				<td><i lang="ain-Latn">e=</i></td>
				<td><i lang="ain-Latn">e=</i></td>
				<td>one prefix across roles</td>
			</tr>
			<tr>
				<td>2PL</td>
				<td><i lang="ain-Latn">eci=</i></td>
				<td><i lang="ain-Latn">eci=</i></td>
				<td><i lang="ain-Latn">eci=</i></td>
				<td>one prefix across roles</td>
			</tr>
			<tr>
				<td>3</td>
				<td>—</td>
				<td>—</td>
				<td>—</td>
				<td>no overt segment; zero-affix analysis disputed</td>
			</tr>
			<tr>
				<td>4 / INDEF</td>
				<td><i lang="ain-Latn">=an</i></td>
				<td><i lang="ain-Latn">a=</i></td>
				<td><i lang="ain-Latn">i=</i></td>
				<td>suffix on S, prefix on A: the side-switch</td>
			</tr>
		</tbody>
	</table>

	<p>
		The minimal pair <i lang="ain-Latn">inkar</i> 'look' and <i lang="ain-Latn">nukar</i> 'see' shows
		why an English translation is an unreliable guide. <i lang="ain-Latn">inkar</i> is an
		intransitive activity of directing the gaze with no fixed object; <i lang="ain-Latn">nukar</i> is
		transitive and takes a specified object. A fourth-person subject therefore surfaces as the suffix
		<i lang="ain-Latn">=an</i> after the intransitive stem and as the prefix
		<i lang="ain-Latn">a=</i> before the transitive stem in one sentence <Ref
			k="nakagawa2024"
			p="131"
		/>:
	</p>

	<Ex
		m="inkar=an akus e=an ru-we a=nukar hi kusu"
		g="look=4.S then 2SG.S=exist track-POSS 4.A=see NMLZ because"
		tr="When I looked, since I saw that you were there, ..."
		cite="nakagawa2024:131"
		dial="SAR"
		place="Nakagawa ex. 18"
		note="The intransitive inkar takes the S-suffix =an; the transitive nukar takes the A-prefix a=. The same side-switch is the template's first ordering diagnostic."
	/>

	<p>
		Both arguments of a transitive verb are bare, and Ainu draws no formal distinction between a
		direct and an indirect object: what a Japanese translation marks as 〜を or 〜に is the same bare
		object in Ainu <Ref k="nakagawa2024" p="127" />. A three-place verb such as
		<i lang="ain-Latn">kore</i> 'give' takes a subject and two bare objects, all omissible, yet only
		two participants can be indexed on the verb — the two-index cap holds even where the clause has
		three arguments <Ref k="nakagawa2024" p="127" />; <Ref k="sato2023b" p="39" />. When a non-third
		person is indexed it is the human recipient that the object affix tracks, a secundative pattern
		taken up in <Xr ch="object-indexing-monotransitive" /> <Ref k="sato2023b" p="41" />.
	</p>

	<Ex
		m="topenpe hekattar ku=kore"
		g="sweets children 1SG.A=give"
		tr="I gave the children sweets."
		cite="nakagawa2024:127"
		dial="SAR"
		place="Nakagawa ex. 11a"
		note="Both non-subject arguments are bare third-person noun phrases; only the 1SG.A subject is indexed."
	/>

	<p>
		Ijäs's learner grammar reaches the same architecture through the contrast of verb pockets and
		external slots: the arguments are cross-referenced on the verb first, and a bare clause such as
		<i lang="ain-Latn">numan hekaci cep koyki</i> presents both participants as bare noun phrases with
		an unmarked third-person verb <Ref k="ijas2023" />. Her further statement that the indirect
		object of a three-place clause stands between subject and object is a classroom simplification;
		the two objects and the subject of <i lang="ain-Latn">epakasnu</i> 'teach' occur in several
		orders with one valence frame and no fixed position <Ref k="nakagawa2024" p="363–365" />.
	</p>

	<Ex
		m="numan hekaci cep koyki"
		g="yesterday boy fish catch"
		tr="The boy caught fish yesterday."
		cite="ijas2023"
		constructed
		note="Ijäs, Lesson 3. A two-argument transitive frame with two bare noun phrases and an unmarked third-person verb."
	/>
</S>

<S t="Valence classes and what counts as a verb word" id="valence-classes">
	<p>
		The argument count runs from zero to three, with a contested fourth. Nakagawa and Bugaeva and
		Kobayashi use the numeric labels 0-, 1-, 2-, and 3-argument verb precisely to keep the
		noun-phrase count apart from the person-affix fact of intransitive versus transitive; Satō,
		Tamura, and Ijäs keep the traditional intransitive/transitive/ditransitive terms <Ref
			k="nakagawa2024"
			p="128"
		/>; <Ref k="bugaevakobayashi2022" p="§3" />; <Ref k="ijas2023" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>valence</th>
				<th>label</th>
				<th>verb-word behaviour</th>
				<th>examples</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>0</td>
				<td>zero-place / avalent</td>
				<td>no subject or object index</td>
				<td><i lang="ain-Latn">mean</i> 'be cold (weather)', <i lang="ain-Latn">sirpirka</i> 'be fine weather'</td>
			</tr>
			<tr>
				<td>1</td>
				<td>intransitive</td>
				<td>S index only, prefixal or suffixal by person</td>
				<td><i lang="ain-Latn">apkas</i> 'walk', <i lang="ain-Latn">ipe</i> 'eat a meal', <i lang="ain-Latn">pirka</i> 'be good'</td>
			</tr>
			<tr>
				<td>2</td>
				<td>transitive (incl. copula)</td>
				<td>A and O positions; the two-index cap applies</td>
				<td><i lang="ain-Latn">nukar</i> 'see', <i lang="ain-Latn">koyki</i> 'catch', <i lang="ain-Latn">ne</i> 'be'</td>
			</tr>
			<tr>
				<td>3</td>
				<td>three-place / ditransitive</td>
				<td>three bare arguments possible; only two fit on the verb</td>
				<td><i lang="ain-Latn">kore</i> 'give', <i lang="ain-Latn">epakasnu</i> 'teach', locative <i lang="ain-Latn">o</i> 'put in'</td>
			</tr>
			<tr>
				<td>4</td>
				<td>four-place</td>
				<td>rare causativized ditransitives; contested as a class</td>
				<td><i lang="ain-Latn">omarere</i> 'make someone put something in'</td>
			</tr>
		</tbody>
	</table>

	<p>
		The zero-place class is built from non-autonomous roots: weather and ambient predicates such as
		<i lang="ain-Latn">mean</i> 'be cold' (&lt; <i lang="ain-Latn">me-</i> 'cold' +
		<i lang="ain-Latn">an</i> 'exist') and <i lang="ain-Latn">sirpirka</i> 'be fine weather' take no
		participant index <Ref k="nakagawa2024" p="128–129" />. Ijäs presents these as avalent verbs with
		the same examples, including the analysis of <i lang="ain-Latn">sir-</i> 'surroundings' and a
		non-free <i lang="ain-Latn">me-</i> 'cold' <Ref k="ijas2023" />. Where the contributing element is
		itself a free noun, the analysis is genuinely open: Ijäs treats <i lang="ain-Latn">apto as</i>
		'it rains' as a single avalent unit, but Nakagawa leaves it undecided, since
		<i lang="ain-Latn">apto</i> 'rain' is an autonomous noun and the string may be a two-word clause
		<Ref k="nakagawa2024" p="128–130" />; <Ref k="ijas2023" /> ‹contested›. The same root that gives a
		weather predicate often has an intransitive counterpart that does take a subject — climatic
		<i lang="ain-Latn">mean</i> 'it is cold' beside experiential <i lang="ain-Latn">merayke</i> 'feel
		cold' — a contrast Ijäs marks and Nakagawa lays out as a paired paradigm <Ref
			k="nakagawa2024"
			p="127"
		/>; <Ref k="ijas2023" />.
	</p>

	<Ex
		m="mean cuk ne pe merayke=an ka somo ki no"
		g="be.cold.weather autumn COP NMLZ feel.cold=4.S even NEG do ADV"
		tr="It was a cold autumn, but I did not feel cold."
		cite="nakagawa2024:130"
		dial="SAR"
		place="Nakagawa ex. 15, after Kayano 1974a"
		note="Zero-place mean indexes nothing; the experiential intransitive merayke indexes its subject with =an."
	/>

	<p>
		The copula <i lang="ain-Latn">ne</i> shows that valence is not reducible to the number of person
		indexes. It is two-place in the relation 'X is Y' and takes transitive-type subject marking, yet
		it admits no object index: <i lang="ain-Latn">okkayo ku=ne</i> 'I am a man' is well formed while
		an object-indexed alternative is not <Ref k="nakagawa2024" p="132" />; <Ref
			k="shibatani1990"
			p="50"
		/>. The copula and predicate nominals are developed in <Xr ch="copula-ne-predicate-nominals" />.
		Three-place verbs are mostly derived, by the applicative <i lang="ain-Latn">ko-</i> or the
		causative <i lang="ain-Latn">-re</i>, the one common base-form member being the locative
		<i lang="ain-Latn">o</i> 'put X into a place' <Ref k="nakagawa2024" p="134" />; <Ref
			k="bugaevakobayashi2022"
			p="§4"
		/>. The valence classes, the small locative-object subclass, and ambitransitivity are the matter
		of <Xr ch="transitivity-and-valence-classes" />.
	</p>
</S>

<S t="Valency-changing morphology in the template" id="valency-morphology">
	<p>
		The valency prefixes and the stem-internal suffixes are the positions that alter the argument
		count. Their syntax and semantics belong to the voice part; in the template the relevant fact is
		the position each occupies and the direction in which it moves the count <Ref
			k="nakagawa2024"
			p="137–139"
		/>; <Ref k="bugaevakobayashi2022" p="§4" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>operation</th>
				<th>forms</th>
				<th>template position</th>
				<th>valence effect</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>applicative</td>
				<td><i lang="ain-Latn">e-</i>, <i lang="ain-Latn">ko-</i>, <i lang="ain-Latn">o-</i></td>
				<td>prefix before the stem</td>
				<td>adds or promotes a non-agent object</td>
			</tr>
			<tr>
				<td>productive causative</td>
				<td><i lang="ain-Latn">-re</i>, <i lang="ain-Latn">-e</i>, <i lang="ain-Latn">-te</i></td>
				<td>suffix after the stem</td>
				<td>adds a causer</td>
			</tr>
			<tr>
				<td>permissive / sociative causative</td>
				<td><i lang="ain-Latn">-yar</i></td>
				<td>suffix after the stem</td>
				<td>adds an indirect causer or permits an event</td>
			</tr>
			<tr>
				<td>antipassive / detransitive</td>
				<td><i lang="ain-Latn">i-</i></td>
				<td>prefix before the stem</td>
				<td>fills the object slot, making a transitive stem intransitive</td>
			</tr>
			<tr>
				<td>reflexive / reciprocal</td>
				<td><i lang="ain-Latn">yay-</i>, <i lang="ain-Latn">si-</i>, <i lang="ain-Latn">u-</i></td>
				<td>prefix before the stem</td>
				<td>fills or identifies the object slot</td>
			</tr>
			<tr>
				<td>noun incorporation</td>
				<td>nominal root plus verb</td>
				<td>inside the stem complex</td>
				<td>fills an argument slot and may detransitivize</td>
			</tr>
		</tbody>
	</table>

	<p>
		A reflexive or reciprocal prefix occupies the object position itself, so a subject index and an
		object index for the same participant never co-occur <Ref k="nakagawa2024" p="183" />, and the
		antipassive <i lang="ain-Latn">i-</i> absorbs the object of a transitive stem, as in
		<i lang="ain-Latn">ruska</i> 'be angry at' → <i lang="ain-Latn">i-ruska</i> 'be angry' <Ref
			k="bugaevakobayashi2022"
			p="§4"
		/>; <Ref k="nam2021" p="62–64" />. The prefix <i lang="ain-Latn">e-</i> is a standing warning
		against reading the template off shapes alone: it can be the second-person index, an applicative,
		or an affiliative nominal prefix, and only the valence computation and the surrounding morphology
		identify it in a given word <Ref k="nakagawa2024" p="138–139" />. The applicatives are developed
		in <Xr ch="applicative-system-overview" />, the causatives in
		<Xr ch="causative-morphological-re-e-te" />, <Xr ch="causee-marking-ditransitive-double-causative" />,
		and <Xr ch="permissive-sociative-causative-yar" />, the detransitive in
		<Xr ch="antipassive-detransitive-i" />, the reflexives and reciprocal in <Xr ch="reflexive-yay" />,
		<Xr ch="reflexive-possessive-si" />, and <Xr ch="reciprocal-u" />, and incorporation in
		<Xr ch="noun-incorporation-object" />. Derivation that builds a verb stem without changing its
		valence — denominal and deverbal verb formation, and the adverb-forming <i lang="ain-Latn">-no</i>
		that turns a property verb into an adverb (<i lang="ain-Latn">poro</i> → <i lang="ain-Latn">poronno</i>)
		— is treated in <Xr ch="denominal-deverbal-verb-derivation" /> and <Xr ch="adverbializer-no" />.
	</p>
</S>

<S t="The stem zone and verbal number" id="stem-number">
	<p>
		The stem zone holds the lexical root together with any suppletive or suffixal singular/plural
		alternation. Number in Hokkaido Ainu sits on the verb, not the noun: nouns are number-neutral and
		read as singular or plural by context — Ijäs notes that <i lang="ain-Latn">cep</i> 'fish' may be
		either — while a minority of verbs have distinct singular and plural stems <Ref
			k="nakagawa2024"
			p="124–125, 140–142"
		/>; <Ref k="ijas2023" />. The alternation takes three shapes: outright suppletion
		(<i lang="ain-Latn">ek</i> / <i lang="ain-Latn">arki</i> 'come', <i lang="ain-Latn">an</i> /
		<i lang="ain-Latn">oka</i> 'exist'), the <i lang="ain-Latn">-n</i> / <i lang="ain-Latn">-p</i>
		pattern of directed-motion verbs (<i lang="ain-Latn">san</i> / <i lang="ain-Latn">sap</i> 'go
		down'), and the vowel-to-<i lang="ain-Latn">-pa</i> pattern of change-of-state transitives
		(<i lang="ain-Latn">tuye</i> / <i lang="ain-Latn">tuypa</i> 'cut') <Ref
			k="nakagawa2024"
			p="146–150"
		/>; <Ref k="sato2008" p="99–106" />.
	</p>

	<p>
		The two transitivity classes index plurality differently. For intransitives the alternation is
		close to agreement with S: a plural subject normally selects the plural stem and a singular
		subject the singular stem <Ref k="nakagawa2024" p="145" />. For transitives the plural stem marks
		a plural object or a pluralized or repeated event, with the singular stem remaining the default
		even where the object is plural; Shibatani, following Durie, treats the alternation as a
		selectional restriction on the principally affected argument — S of an intransitive, O of a
		transitive — rather than as agreement <Ref k="nakagawa2024" p="142–145" />; <Ref
			k="sato2008"
			p="101"
		/>; <Ref k="shibatani1990" p="51–53" />. Numerals and quantifiers show why the slot resists a
		simple agreement rule: a subject numerically specified as two, three, or sometimes four ordinarily
		takes a singular intransitive stem, against counterpatterns with <i lang="ain-Latn">iwan</i> 'six'
		and with <i lang="ain-Latn">poronno</i> 'many' that vary by dialect and speaker <Ref
			k="nakagawa2024"
			p="160–162"
		/> ‹contested›. The full inventory, the corpus frequencies, and the agreement-versus-selection
		debate are the subject of <Xr ch="suppletive-verbal-number" />, and the interaction with person
		of <Xr ch="person-number-interactions" />.
	</p>

	<Ex
		m="ine nispa ek ru-we ne"
		g="four rich.man come track-POSS COP"
		tr="Four rich men came."
		cite="nakagawa2024:161"
		dial="SAR"
		place="Nakagawa ex. 90"
		note="A numeral-quantified plural subject takes the singular stem ek; the numeral-to-number relation is variable across dialects and speakers."
	/>
</S>

<S t="Debates that shape the template" id="debates">
	<p>
		Four analytical questions bear on how the template is read, and none is settled. The first is the
		mechanism behind the valence calculus. Nakagawa's arity assigns every element — base verb, each
		derivational affix, each person index — a positive, negative, or zero value, the sum predicting
		the verb's remaining bare-noun-phrase positions <Ref k="nakagawa2024" p="136–139" />. Satō argues
		that a single arity value fails for the copula, for auxiliaries, and for ditransitives, and
		replaces it with three simultaneous layers — an invariant argument-slot count, a macrorole
		valency in the sense of <Ref k="foleyvanvalin1984" paren /> that the person affixes index, and the
		morphological valency of the derived word — while flagging his own scheme as something still to be
		justified <Ref k="sato2023b" p="42–52" />; <Ref k="sato2025b" p="22–26" /> ‹contested›. The
		template here records position and valence effect without committing to either mechanism.
	</p>

	<p>
		The second question is the third-person zero. Nakagawa assigns the third person no overt affix and
		no arity value, so that the calculus balances; Satō holds that a zero third-person affix is needed
		to explain the two-index cap and the impossibility of certain three-participant combinations <Ref
			k="nakagawa2024"
			p="137"
		/>; <Ref k="sato2023b" p="39" />; <Ref k="sato2025b" p="23–24" /> ‹contested›. The transitivity
		table above leaves the third-person cells empty and routes the analysis to
		<Xr ch="person-marking-architecture" />.
	</p>

	<p>
		The third question is the outer plural <i lang="ain-Latn">pa</i>. Nakagawa and the Handbook treat
		the postposed <i lang="ain-Latn">pa</i>, eastern <i lang="ain-Latn">ci</i>, and the Sakhalin
		cognate as a single clitic class distinct from the root-bound suffix; Satō's Chitose data make the
		clitic analysis doubtful, since postposed <i lang="ain-Latn">-an pa</i> is rare and a speaker
		rejects <i lang="ain-Latn">*yaynu-as pa</i> in favour of <i lang="ain-Latn">yaynupa-as</i> <Ref
			k="nakagawa2024"
			p="156–159"
		/>; <Ref k="sato2025b" p="25–26" /> ‹contested›. The fourth question is the four-place class:
		Nakagawa lists causativized ditransitives such as <i lang="ain-Latn">omarere</i> as four-place
		verbs, while Satō warns that the type is too marginal to support a regular category <Ref
			k="nakagawa2024"
			p="135"
		/>; <Ref k="sato2025b" p="22–23" /> ‹contested›.
	</p>

	<p>
		These debates leave the linear template stable while its interpretation is open. Ainu has very few
		bare stems that serve as both intransitive and transitive without overt marking, with
		<i lang="ain-Latn">roski</i> 'stand' effectively the sole instance, so valence alternation is almost always coded by the
		derivational positions catalogued above rather than by lability <Ref k="sato2008" p="97" />; <Ref
			k="bugaevakobayashi2022"
			p="§5"
		/>. The valence classes and ambitransitivity are pursued in
		<Xr ch="transitivity-and-valence-classes" />, and the productive derivation in
		<Xr ch="valency-voice-overview" />.
	</p>
</S>
