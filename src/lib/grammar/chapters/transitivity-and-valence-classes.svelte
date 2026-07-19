<!-- Needed gloss atoms: none. Needed bibliography keys: none. -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Transitivity as a formal property" id="classification">
	<p>
		Hokkaido Ainu classifies its verbs by the number and kind of core arguments each licenses,
		and the classification is decided by structure rather than by the meaning of a translation
		<Ref k="nakagawa2024" p="125–127" />; <Ref k="sato2008" p="96" />. Two diagnostics fix a
		verb's class. The first is the count of core arguments, where a core argument is a bare noun
		phrase carrying no postposition or case particle; a phrase marked by a local postposition is
		adverbial and can be added without altering the count, so that in
		<i lang="ain-Latn">cise or ta menoko hoku tura ipe</i> 'in the house a woman ate with her
		husband' only <i lang="ain-Latn">menoko</i> is an argument of <i lang="ain-Latn">ipe</i>
		<Ref k="nakagawa2024" p="127" />. The second diagnostic is person marking: an intransitive
		verb indexes a single subject, while a transitive verb may index a subject and an object
		<Ref k="nakagawa2024" p="126" />. The indexing system that supports both diagnostics is the
		subject of <Xr ch="person-marking-architecture" />, and the order of indexes inside the verb
		word of <Xr ch="verb-word-template" />.
	</p>

	<p>
		Three descriptive vocabularies coexist in current work and must be kept apart. Nakagawa, with
		Bugaeva and Kobayashi, prefers numeric labels — 0-, 1-, 2-, and 3-argument verb — because the
		bare-noun-phrase count and the intransitive/transitive person-affix fact do not always line up
		and are best named separately; Satō, Tamura, and Ijäs retain the traditional terms
		intransitive, transitive, and ditransitive <Ref k="nakagawa2024" p="128" />;
		<Ref k="bugaevakobayashi2022" p="§3" />; <Ref k="sato2008" p="94–98" />. The abbreviations
		used here are structural labels and carry no claim about semantic agency: an intransitive verb
		may take an agent-like or an affected subject, and both receive the same subject index, a point
		developed in <Xr ch="alignment-split-intransitive" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>class</th>
				<th>core frame</th>
				<th>numeric label (Nakagawa; Bugaeva &amp; Kobayashi)</th>
				<th>traditional label (Satō, Tamura, Ijäs)</th>
				<th>examples</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>v0</td>
				<td>no bare-NP argument</td>
				<td>0-place / 0-argument</td>
				<td>complete / avalent verb</td>
				<td><i lang="ain-Latn">sirpirka</i>, <i lang="ain-Latn">mean</i></td>
			</tr>
			<tr>
				<td>vi</td>
				<td>S</td>
				<td>1-place / 1-argument</td>
				<td>intransitive</td>
				<td><i lang="ain-Latn">inkar</i>, <i lang="ain-Latn">apkas</i>, <i lang="ain-Latn">ipe</i></td>
			</tr>
			<tr>
				<td>vt</td>
				<td>A + O</td>
				<td>2-place / 2-argument</td>
				<td>transitive (including the copula)</td>
				<td><i lang="ain-Latn">nukar</i>, <i lang="ain-Latn">koyki</i>, <i lang="ain-Latn">ne</i></td>
			</tr>
			<tr>
				<td>vc</td>
				<td>A/S + bare locative object</td>
				<td>2- or 3-place subtype</td>
				<td>locative-object verb</td>
				<td><i lang="ain-Latn">oma</i>, <i lang="ain-Latn">osma</i>, <i lang="ain-Latn">kus</i></td>
			</tr>
			<tr>
				<td>vd</td>
				<td>A + O + O</td>
				<td>3-place / 3-argument</td>
				<td>ditransitive</td>
				<td><i lang="ain-Latn">kore</i>, <i lang="ain-Latn">epakasnu</i>, <i lang="ain-Latn">o</i></td>
			</tr>
		</tbody>
	</table>

	<p>
		Ijäs's Lessons 2 and 3 introduce the same inventory for learners as avalent, intransitive,
		transitive, and ditransitive verbs, and present Hokkaido Ainu as a pro-drop, verb-final,
		head-marking language whose verb has argument "pockets" that are filled before, and more
		obligatorily than, any external noun-phrase "slot" <Ref k="ijas2023" />. That image renders
		head-marking in the sense of <Ref k="nichols1986" paren /> and matches Satō's argument-slot
		account of the same fact <Ref k="sato2023b" p="42–46" />. Two background conditions stated in
		the same lessons frame the classification: verb forms carry no tense inflection, and nouns are
		number-neutral unless plurality is supplied lexically or by context, so that
		<i lang="ain-Latn">cep</i> 'fish' may be read as singular or plural <Ref k="ijas2023" />;
		<Ref k="nakagawa2024" p="124–125" />; <Ref k="shibatani1990" p="32–33" />. Number enters the
		verbal system separately, through stem alternation and the plural clitics treated in
		<Xr ch="suppletive-verbal-number" />.
	</p>
</S>

<S t="Person marking as the transitivity test" id="person-test">
	<p>
		The person rows that make the intransitive/transitive contrast visible in surface form are the
		first-plural exclusive and the fourth (indefinite) person. On an intransitive verb these
		appear as subject suffixes, <i lang="ain-Latn">=as</i> and <i lang="ain-Latn">=an</i>; on a
		transitive verb the corresponding subject markers are prefixes, <i lang="ain-Latn">ci=</i> and
		<i lang="ain-Latn">a=</i>. Satō gives the operational test in these terms: put the verb in the
		first-person plural, and <A w="inkar" gl="look" /> yields <i lang="ain-Latn">inkar=as</i>
		while <A w="nukar" gl="see" /> yields <i lang="ain-Latn">ci=nukar</i> <Ref k="sato2008" p="96" />.
		He notes that this side-switch is highly irregular and still without a convincing explanation
		<Ref k="sato2008" p="96" />. The remaining rows are uninformative: the first singular uses the
		same prefix <i lang="ain-Latn">ku=</i> for subject of either class, the second person is
		neutral across subject and object, and the third person has no overt segment in any role.
	</p>

	<table>
		<thead>
			<tr>
				<th>person</th>
				<th>S (intransitive subject)</th>
				<th>A (transitive subject)</th>
				<th>O (object)</th>
				<th>diagnostic value</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1SG</td>
				<td><i lang="ain-Latn">ku=</i></td>
				<td><i lang="ain-Latn">ku=</i></td>
				<td><i lang="ain-Latn">en=</i></td>
				<td>S and A identical</td>
			</tr>
			<tr>
				<td>1PL.EXCL</td>
				<td><i lang="ain-Latn">=as</i></td>
				<td><i lang="ain-Latn">ci=</i></td>
				<td><i lang="ain-Latn">un=</i></td>
				<td>side-switch: diagnoses transitivity</td>
			</tr>
			<tr>
				<td>2SG</td>
				<td><i lang="ain-Latn">e=</i></td>
				<td><i lang="ain-Latn">e=</i></td>
				<td><i lang="ain-Latn">e=</i></td>
				<td>neutral across roles</td>
			</tr>
			<tr>
				<td>2PL</td>
				<td><i lang="ain-Latn">eci=</i></td>
				<td><i lang="ain-Latn">eci=</i></td>
				<td><i lang="ain-Latn">eci=</i></td>
				<td>neutral across roles</td>
			</tr>
			<tr>
				<td>3</td>
				<td>Ø</td>
				<td>Ø</td>
				<td>Ø</td>
				<td>no overt segment; zero-affix status disputed</td>
			</tr>
			<tr>
				<td>4 / INDEF</td>
				<td><i lang="ain-Latn">=an</i></td>
				<td><i lang="ain-Latn">a=</i></td>
				<td><i lang="ain-Latn">i=</i></td>
				<td>side-switch: diagnoses transitivity</td>
			</tr>
		</tbody>
	</table>

	<p>
		The pair <i lang="ain-Latn">inkar</i> and <i lang="ain-Latn">nukar</i> is the standard
		demonstration that a translation is an unreliable guide to class. Both render English visual
		predicates, but <i lang="ain-Latn">inkar</i> names an intransitive act of directing the gaze
		with no fixed object, whereas <i lang="ain-Latn">nukar</i> takes a specified object. In one
		clause chain the fourth person therefore surfaces as a suffix on the intransitive stem and as a
		prefix on the transitive stem <Ref k="nakagawa2024" p="131" />.
	</p>

	<Ex
		m="inkar=an akus e=an ru-we a=nukar hi kusu"
		g="look=4.S then 2SG.S=exist track-POSS 4.A=see NMLZ because"
		tr="When I looked, since I saw that you were there, ..."
		cite="nakagawa2024:131"
		dial="SAR"
		place="Nakagawa ex. 18"
		note="The intransitive inkar takes the fourth-person S suffix =an; the transitive nukar takes the fourth-person A prefix a=. The possessed formal noun ru-we nominalizes e=an as the object of a=nukar."
	/>

	<p>
		Translation cannot decide class because the verb itself carries the argument structure. Ijäs
		illustrates the ordinary transitive frame with a third-person subject and a third-person
		object: neither is segmentally marked, yet the two bare noun phrases fill the A and O positions
		of a two-place verb <Ref k="ijas2023" />. The verb word indexes at most one subject and one
		object — the two-index cap — even where a clause has more arguments than that, a limit that
		becomes load-bearing for three-place verbs and for the debates of the final section
		<Ref k="sato2023b" p="39" />.
	</p>

	<Ex
		m="numan hekaci cep koyki"
		g="yesterday boy fish catch"
		tr="The boy caught fish yesterday."
		cite="ijas2023"
		constructed
		note="Ijäs, Lesson 3. A two-place transitive frame with two bare noun phrases and a segmentally unmarked third-person verb."
	/>
</S>

<S t="Zero-place and one-place verbs" id="v0-vi">
	<p>
		The zero-place class contains predicates with no grammatical subject and no object. Most are
		ambient or weather expressions built on a bound element such as <i lang="ain-Latn">sir-</i>
		'surroundings' or a non-free root plus a verb: <i lang="ain-Latn">sirpirka</i> 'be fine
		weather', <i lang="ain-Latn">sirkunne</i> 'get dark', and <i lang="ain-Latn">mean</i> 'be cold
		(weather)', the last analysable as <i lang="ain-Latn">me-</i> 'cold' plus
		<i lang="ain-Latn">an</i> 'exist' <Ref k="nakagawa2024" p="128–130" />; Shibatani analyses the
		type as subject incorporation <Ref k="shibatani1990" p="33" />. Ijäs groups the same
		predicates as avalent and notes that descriptive meanings belong to the verbal system, since
		Hokkaido Ainu has no adjective class distinct from verbs and a stative verb such as
		<i lang="ain-Latn">hure</i> 'be red' carries the inchoative reading 'become red' as well
		<Ref k="ijas2023" />; <Ref k="nakagawa2024" p="124" />; <Ref k="sato2008" p="2" />. Where the
		contributing element is itself a free noun the analysis is open: Ijäs treats
		<i lang="ain-Latn">apto as</i> 'it rains' as a single avalent unit, whereas Nakagawa leaves it
		undecided, since <i lang="ain-Latn">apto</i> 'rain' is an autonomous noun and the string may be
		a two-word subject-plus-verb clause <Ref k="nakagawa2024" p="129–130" />; <Ref k="ijas2023" />
		‹contested›.
	</p>

	<p>
		The boundary between zero-place and one-place verbs is sharpest in the temperature vocabulary.
		Climate predicates take no person index; the felt-temperature counterparts take a subject. <Ref k="nakagawa2024" p="129–130" />
	</p>

	<table>
		<thead>
			<tr>
				<th>semantic field</th>
				<th>v0: ambient predicate</th>
				<th>vi: subject-felt predicate</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>cold</td>
				<td><i lang="ain-Latn">mean</i></td>
				<td><i lang="ain-Latn">merayke</i></td>
			</tr>
			<tr>
				<td>cool</td>
				<td><i lang="ain-Latn">sirmeman</i></td>
				<td><i lang="ain-Latn">meman</i></td>
			</tr>
			<tr>
				<td>warm</td>
				<td><i lang="ain-Latn">sirpopke</i></td>
				<td><i lang="ain-Latn">popke</i></td>
			</tr>
			<tr>
				<td>hot</td>
				<td><i lang="ain-Latn">sirsesek</i></td>
				<td><i lang="ain-Latn">sesek</i></td>
			</tr>
		</tbody>
	</table>

	<Ex
		m="mean cuk ne pe merayke=an ka somo ki no"
		g="be.cold.weather autumn COP NMLZ feel.cold=4.S even NEG do ADV"
		tr="It was a cold autumn, but I did not feel cold."
		cite="nakagawa2024:130"
		dial="SAR"
		place="Nakagawa ex. 15, after Kayano 1974a"
		note="The ambient v0 predicate mean carries no person index; the felt-temperature vi merayke takes the fourth-person S suffix =an, both in one sentence."
	/>

	<p>
		One-place verbs cover agentive activities such as <i lang="ain-Latn">apkas</i> 'walk' and
		<i lang="ain-Latn">ipe</i> 'eat a meal', changes of state such as <i lang="ain-Latn">rewke</i>
		'bend', and properties such as <i lang="ain-Latn">pirka</i> 'be good' and
		<i lang="ain-Latn">pewre</i> 'be young'. The single argument is grammatical and need not be a
		semantic agent: a patientive subject still takes the subject index, as in
		<i lang="ain-Latn">rittursere=an</i> 'I am rolled by the waves' and
		<i lang="ain-Latn">ku=merayke</i> 'I feel cold', where the affected participant is marked with
		the ordinary S set <Ref k="nakagawa2024" p="126–127" />. The active/unaccusative cut does
		resurface, but in derivation and incorporation rather than in the person paradigm, and it does
		not split the intransitive subject marking <Ref k="bugaevakobayashi2022" p="§5" />.
	</p>
</S>

<S t="Two- and three-place verbs" id="vt-vd">
	<p>
		A two-place verb licenses a subject and a single object, both bare noun phrases, whatever the
		translation suggests about patient, goal, or other role. Hokkaido Ainu draws no formal
		distinction between a direct and an indirect object: what a Japanese rendering marks with
		<i lang="ja">を</i> or <i lang="ja">に</i> is the same bare object in Ainu
		<Ref k="nakagawa2024" p="127" />. This is why <i lang="ain-Latn">cep ipe</i> cannot mean 'eat
		fish': <i lang="ain-Latn">ipe</i> is the intransitive 'eat a meal', and a specified food object
		requires a transitive such as <i lang="ain-Latn">e</i> 'eat (something)'
		<Ref k="nakagawa2024" p="127" />. Several near-basic pairs show that close semantic
		correspondence does not entail formal identity; the most basic of them have to be learned as
		distinct stems <Ref k="sato2008" p="97" />; <Ref k="nakagawa2024" p="131" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>meaning</th>
				<th>vi (one-place)</th>
				<th>vt (two-place)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>see / look</td>
				<td><i lang="ain-Latn">inkar</i></td>
				<td><i lang="ain-Latn">nukar</i></td>
			</tr>
			<tr>
				<td>hear</td>
				<td><i lang="ain-Latn">inu</i></td>
				<td><i lang="ain-Latn">nu</i></td>
			</tr>
			<tr>
				<td>steal</td>
				<td><i lang="ain-Latn">ikka</i></td>
				<td><i lang="ain-Latn">eikka</i></td>
			</tr>
			<tr>
				<td>laugh (at)</td>
				<td><i lang="ain-Latn">mina</i></td>
				<td><i lang="ain-Latn">emina</i></td>
			</tr>
			<tr>
				<td>eat</td>
				<td><i lang="ain-Latn">ipe</i></td>
				<td><i lang="ain-Latn">e</i></td>
			</tr>
			<tr>
				<td>say / speak</td>
				<td><i lang="ain-Latn">itak</i></td>
				<td><i lang="ain-Latn">ye</i></td>
			</tr>
			<tr>
				<td>think</td>
				<td><i lang="ain-Latn">yaynu</i></td>
				<td><i lang="ain-Latn">ramu</i></td>
			</tr>
		</tbody>
	</table>

	<p>
		The copula <i lang="ain-Latn">ne</i> belongs with the two-place verbs in argument structure,
		relating a subject to a predicate nominal, and it takes transitive-type subject marking. Its
		person behaviour is exceptional, however: it indexes only the subject and admits no object
		index, so that <i lang="ain-Latn">okkayo ku=ne</i> 'I am a man' is well formed while an
		object-indexed <i lang="ain-Latn">*en=ne</i> is not <Ref k="nakagawa2024" p="132" />;
		<Ref k="shibatani1990" p="50" />. Predicate-nominal syntax is treated in
		<Xr ch="copula-ne-predicate-nominals" />, and the copula reappears in the final section as
		Satō's central case for distinguishing several measures of valence.
	</p>

	<Ex
		m="okkayo ku=ne"
		g="man 1SG.A=COP"
		tr="I am a man."
		cite="nakagawa2024:132"
		dial="SAR"
		place="Nakagawa ex. 23"
		note="The copula is two-place but indexes only its subject, and with transitive-type marking; an object index such as *en=ne is excluded."
	/>

	<p>
		Three-place verbs license a subject and two bare objects, both omissible and without a fixed
		grammatical order between them. With <i lang="ain-Latn">kore</i> 'give', the theme and the
		recipient are both bare third-person phrases and only the subject is indexed below. Almost all
		three-place verbs are derived, by an applicative such as <i lang="ain-Latn">ko-</i> or the
		causative <i lang="ain-Latn">-re</i>, the chief base-form member being the locative
		<i lang="ain-Latn">o</i> 'put X into a place' <Ref k="bugaevakobayashi2022" p="§4.2" />;
		<Ref k="nakagawa2024" p="134" />. Satō analyses the object index on
		<i lang="ain-Latn">kore</i> as tracking the recipient, a secundative pattern, a point on which
		Bugaeva's account differs; the indexing options are set out in
		<Xr ch="object-indexing-monotransitive" /> and <Xr ch="argument-realization-indexing" />
		‹contested›.
	</p>

	<Ex
		m="topenpe hekattar ku=kore"
		g="sweets children 1SG.A=give"
		tr="I gave the children sweets."
		cite="nakagawa2024:127"
		dial="SAR"
		place="Nakagawa ex. 11a"
		note="Both non-subject arguments are bare third-person noun phrases; only the 1SG.A subject is indexed. topenpe ku=kore and hekattar ku=kore are identical in form, the を/に contrast belonging to the Japanese translation."
	/>

	<p>
		Ijäs presents the ditransitive frame as subject, indirect object, and direct object, with the
		recipient placed before the theme <Ref k="ijas2023" />. Nakagawa's examples of
		<i lang="ain-Latn">epakasnu</i> 'teach' show the two objects and the subject in several
		preverbal orders with one set of argument roles, so the recipient-before-theme sequence is a
		teaching convention rather than a grammatical requirement <Ref k="nakagawa2024" p="363–365" />.
		The productive operations that build and rearrange these frames are surveyed in
		<Xr ch="valency-voice-overview" />.
	</p>
</S>

<S t="Locative-object verbs" id="locative-object">
	<p>
		A small closed class takes a place as a bare object, with no <i lang="ain-Latn">ta</i> or
		<i lang="ain-Latn">or ta</i>. These locative-object verbs cut across the two- and three-place
		distinction: <i lang="ain-Latn">oma</i> 'be in, enter a place', <i lang="ain-Latn">osma</i>
		'plunge into a place', and <i lang="ain-Latn">kus</i> 'pass through a place' are two-place,
		while <i lang="ain-Latn">o</i> 'put X into a place' is three-place and is the chief base-form
		ditransitive of the language <Ref k="nakagawa2024" p="212–213" />. The defining property is the
		absence of a local postposition, so that <i lang="ain-Latn">*cise or ta osma</i> is
		ungrammatical against intransitive <i lang="ain-Latn">cise or ta ahun</i> 'enter into the
		house', where <i lang="ain-Latn">ta</i> is required <Ref k="nakagawa2024" p="128" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>verb</th>
				<th>meaning</th>
				<th>arity</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">oma</i></td>
				<td>be in / enter a place</td>
				<td>+2</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">osma</i></td>
				<td>plunge into a place</td>
				<td>+2</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">kus</i></td>
				<td>pass through a place</td>
				<td>+2</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">o</i></td>
				<td>put something into a place</td>
				<td>+3</td>
			</tr>
		</tbody>
	</table>

	<Ex
		m="upas tum a=oma wa karkarse=an"
		g="snow inside 4.A=enter CONJ roll=4.S"
		tr="I sank into the snow and rolled."
		cite="nakagawa2024:212"
		dial="CHI"
		place="Nakagawa ex. 221"
		note="The place expression upas tum is the bare object of oma; the following intransitive karkarse takes the fourth-person S suffix =an."
	/>

	<p>
		The place noun within such a frame works like a covert case marker. With
		<i lang="ain-Latn">omare</i> 'put X into a place', <i lang="ain-Latn">ikayop omare</i> is read
		as 'put the quiver somewhere', since a quiver is a theme, while
		<i lang="ain-Latn">ikayop or omare</i> is read as 'put something into the quiver', with
		<i lang="ain-Latn">or</i> supplying the locative object <Ref k="nakagawa2024" p="213" />. The
		applicative <i lang="ain-Latn">o-</i> derives further locative-object verbs from non-locative
		bases, and the local-postposition system that these verbs bypass is treated in
		<Xr ch="postpositions-local-case-and-motion-events" /> and <Xr ch="applicative-o" />.
	</p>
</S>

<S t="Arity and the derivational calculus" id="arity">
	<p>
		Nakagawa generalizes valence into an arithmetic over the verb word. Every element — the base
		verb, each derivational affix, an incorporated noun, and each person index — carries an arity
		value, and the sum predicts how many bare external arguments the surface predicate still
		licenses <Ref k="nakagawa2024" p="136–140" />. A base intransitive contributes +1, a base
		transitive +2, and a base ditransitive +3; applicatives and the productive causative add +1; a
		noun root or a concept-form prefix that fills an argument slot subtracts 1; a single person
		index subtracts 1 and a subject-plus-object pair subtracts 2.
	</p>

	<table>
		<thead>
			<tr>
				<th>element</th>
				<th>examples</th>
				<th>arity</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>base vi</td>
				<td><i lang="ain-Latn">apkas</i>, <i lang="ain-Latn">mokor</i></td>
				<td>+1</td>
			</tr>
			<tr>
				<td>base vt</td>
				<td><i lang="ain-Latn">kik</i>, <i lang="ain-Latn">yasa</i></td>
				<td>+2</td>
			</tr>
			<tr>
				<td>base vd</td>
				<td><i lang="ain-Latn">o</i> 'put X into a place'</td>
				<td>+3</td>
			</tr>
			<tr>
				<td>applicative prefix</td>
				<td><i lang="ain-Latn">e-</i>, <i lang="ain-Latn">ko-</i>, <i lang="ain-Latn">o-</i></td>
				<td>+1</td>
			</tr>
			<tr>
				<td>productive causative</td>
				<td><i lang="ain-Latn">-re</i>, <i lang="ain-Latn">-e</i>, <i lang="ain-Latn">-te</i></td>
				<td>+1</td>
			</tr>
			<tr>
				<td>noun root or concept-form prefix</td>
				<td><i lang="ain-Latn">me-</i>, <i lang="ain-Latn">i-</i>, <i lang="ain-Latn">yay-</i>, <i lang="ain-Latn">u-</i></td>
				<td>−1</td>
			</tr>
			<tr>
				<td>affiliative part prefix</td>
				<td><i lang="ain-Latn">e-</i> 'the head of', <i lang="ain-Latn">o-</i> 'the bottom of'</td>
				<td>0</td>
			</tr>
			<tr>
				<td>adverbial prefix or plural suffix</td>
				<td><i lang="ain-Latn">ar-</i>, <i lang="ain-Latn">ru-</i>, <i lang="ain-Latn">-pa</i></td>
				<td>0</td>
			</tr>
			<tr>
				<td>one person index</td>
				<td><i lang="ain-Latn">ku=</i>, <i lang="ain-Latn">en=</i>, <i lang="ain-Latn">=an</i></td>
				<td>−1</td>
			</tr>
			<tr>
				<td>subject plus object indexes</td>
				<td><i lang="ain-Latn">a=en=</i>, <i lang="ain-Latn">a=i=</i></td>
				<td>−2</td>
			</tr>
		</tbody>
	</table>

	<p>
		The calculus earns its keep where one segment has several functions. Built on intransitive
		<i lang="ain-Latn">itak</i> 'speak' (+1), the applicative <i lang="ain-Latn">ko-</i> gives
		<i lang="ain-Latn">ko-itak</i> 'speak to' (+2), the subject index in
		<i lang="ain-Latn">ku=ko-itak</i> brings the count back to +1, and the reflexive
		<i lang="ain-Latn">yay-</i> in <i lang="ain-Latn">ku=yay-ko-itak</i> fills the object position
		to leave 0, so that a further bare object is excluded
		<Ref k="nakagawa2024" p="138" />. The same arithmetic separates the three uses of prefixal
		<i lang="ain-Latn">e-</i>: it must be the applicative (+1) in
		<i lang="ain-Latn">a=ureepunpa</i> 'I kicked it up with my foot' for the count to admit a bare
		object, and the affiliative prefix (0) in <i lang="ain-Latn">a=koinawepunpa</i> 'we offered
		inau' <Ref k="nakagawa2024" p="138–139" />. Satō credits this arity concept as Nakagawa's
		central theoretical contribution <Ref k="sato2025b" p="20" />. The valency-changing operations
		that feed the calculus — the applicatives, the causatives, the antipassive
		<i lang="ain-Latn">i-</i>, and the reflexive and reciprocal prefixes — are catalogued in
		<Xr ch="valency-voice-overview" />, <Xr ch="causative-morphological-re-e-te" />,
		<Xr ch="applicative-system-overview" />, <Xr ch="antipassive-detransitive-i" />,
		<Xr ch="reflexive-yay" />, and <Xr ch="reciprocal-u" />
		<Ref k="bugaevakobayashi2022" p="§4" />; <Ref k="bugaeva2021antip" />; <Ref k="nam2021" />.
	</p>

	<p>
		One commitment of the system bears directly on the debates below. Third person contributes no
		affix and therefore no negative value; assigning −1 to an unpronounced third-person affix would
		throw off the arithmetic, so Nakagawa treats third person as having arity 0
		<Ref k="nakagawa2024" p="137" />. Number morphology is likewise arity-neutral, while
		causatives and applicatives change the verb's class, so the verbal-number system can be kept
		apart from valence and is developed in <Xr ch="suppletive-verbal-number" />
		<Ref k="nakagawa2024" p="137, 140" />.
	</p>
</S>

<S t="Ambitransitivity and lability" id="lability">
	<p>
		Hokkaido Ainu has little productive ambitransitivity of the English type. A single bare form
		serving as both intransitive and transitive is vanishingly rare; Satō's inventory of
		correspondence types yields effectively one identical-form pair, the plural
		<i lang="ain-Latn">roski</i> 'stand' and 'stand something up'. The other pairs show either
		partial derivational relatedness, as with transitive <i lang="ain-Latn">nunpa</i> 'wring'
		beside intransitive <i lang="ain-Latn">inunpa</i>, or no formal resemblance at all, as in the
		basic vocabulary of the preceding table <Ref k="sato2008" p="97" />. Valence alternation is
		thus coded by derivation, incorporation, or a separate lexical stem rather than by lability.
	</p>

	<p>
		What looks like lability is in most cases an uncoded alternation of semantic role within a
		fixed argument count. Bugaeva and Kobayashi, after Kobayashi's work on valency, reduce the
		roles to agent, theme, and space-location, and observe that some intransitives admit either an
		agent or a theme as their single argument: <i lang="ain-Latn">as</i> 'stand' takes a standing
		person or a standing tree, whereas <i lang="ain-Latn">apkas</i> 'walk' is agentive only and
		<i lang="ain-Latn">tuy</i> 'be cut' theme-like only <Ref k="bugaevakobayashi2022" p="§5.1.1" />.
		The alternation becomes visible in causativization, where a role-flexible intransitive forms
		two causatives: the direct <i lang="ain-Latn">asi</i> 'stand something up' for the theme
		reading and the indirect <i lang="ain-Latn">aste</i> 'make someone stand' for the agent reading
		<Ref k="bugaevakobayashi2022" p="§5" />. The same active/theme split governs which noun a verb
		can incorporate, a domain pursued in <Xr ch="noun-incorporation-object" />.
	</p>

	<p>
		Verbal number gives a further reflex of the formal nature of transitivity. The intransitive
		plural stem tracks the number of the subject and behaves much like agreement in Nakagawa's
		description, while the transitive plural stem tracks the plurality of the object or of the
		event, the singular remaining the default even when a plural object is overt; Shibatani,
		following Durie, treats the alternation as a selectional restriction on the principally
		affected argument — subject of an intransitive, object of a transitive
		<Ref k="nakagawa2024" p="142–145" />; <Ref k="sato2008" p="101" />;
		<Ref k="shibatani1990" p="51–53" />. A small set of cognition transitives is exceptional in
		that the plural stem tracks the subject instead, as in the plural understanding verb below.
	</p>

	<Ex
		m="uomano eci=eramuoka ya"
		g="all 2PL.A=understand.PL Q"
		tr="Do you all understand?"
		cite="nakagawa2024:142"
		dial="SAR"
		place="Nakagawa ex. 45"
		note="The transitive plural stem eramuoka (singular eramuan) here agrees with the plural subject, an exceptional subject-sensitive transitive plural noted by Nakagawa."
	/>
</S>

<S t="Arity against the three-valency analysis" id="debates">
	<p>
		What kind of valence the grammar should count is the central open question of this domain, and
		the two leading positions are to be held side by side rather than adjudicated. Nakagawa's arity
		is a single surface-computable property: the value of the final form predicts how many bare
		noun phrases remain and how person indexes reduce that capacity, and it disambiguates
		homophonous prefixes, incorporated nouns, and person indexes in the same calculation
		<Ref k="nakagawa2024" p="136–140" />.
	</p>

	<p>
		Satō argues that one number collapses distinctions a head-marking language needs to keep, and
		proposes three valencies operating at once. The first is the argument-slot count, an invariant
		abstract property of the lexical or derived verb, filled equally by a person affix, a
		nominal-derivational prefix, or an incorporated noun — so that incorporation is slot-filling
		and needs no head-movement analysis of the kind associated with <Ref k="baker1988" paren />.
		The second is M-transitivity, the number of macroroles available for person indexing in the
		sense of <Ref k="foleyvanvalin1984" paren />, capped at two. The third is morphological
		valency, the intransitive or transitive behaviour of the final form
		<Ref k="sato2023b" p="42–52" />. The copula displays all three: its argument-slot count is two,
		but the predicate-nominal term is not a referential undergoer, so its M-transitivity is one and
		it takes no object index, while its morphological valency is transitive, as the incorporating
		<i lang="ain-Latn">nispa a=ne</i> 'I am a master' shows. This derives the excluded
		<i lang="ain-Latn">*en=ne</i> from a principle <Ref k="sato2023b" p="52" />. Satō notes that
		his own scheme is complex and remains to be justified <Ref k="sato2023b" p="61" /> ‹contested›.
	</p>

	<p>
		Two narrower disputes follow from the same divide. Nakagawa records a marginal four-place
		category from causativized ditransitives such as <i lang="ain-Latn">epakasnure</i> 'make
		someone teach someone something', <i lang="ain-Latn">korere</i>, and a textual
		<i lang="ain-Latn">omarere</i> 'made someone put something into something'
		<Ref k="nakagawa2024" p="135" />. Satō declines to raise so rare a configuration to a regular
		class, given that the ordinary three-place verb already exceeds the two-index cap and is
		syntactically special on its own <Ref k="sato2025b" p="22–23" /> ‹contested›. The second
		dispute is the third-person zero. Nakagawa's arity excludes any third-person affix, while Satō
		holds that a zero third-person affix is required to explain why a verb cannot host three person
		indexes — why, for instance, <i lang="ain-Latn">*en-e-raykere</i> 'he makes me kill you' is
		impossible, the two overt affixes having already filled the cap with no room for the
		third-person causer <Ref k="nakagawa2024" p="137" />; <Ref k="sato2023b" p="39" />;
		<Ref k="sato2025b" p="23–24" /> ‹contested›. Ijäs's zero sign for the unmarked third person is
		compatible with either side if it is read as the absence of an overt segment
		<Ref k="ijas2023" />.
	</p>

	<p>
		The observable diagnostics remain bare-noun-phrase valence, person-index behaviour, and
		derivational morphology, and these are stable across the analyses. Arity serves as the working
		calculation for stem formation and argument realization; Satō's three-valency account is the
		reference wherever the copula, the ditransitives, incorporation, or the zero-affix question
		make a single count inadequate. The realization of overt and omitted arguments continues in
		<Xr ch="argument-realization-indexing" />, and the voice operations that alter these frames in
		<Xr ch="valency-voice-overview" />.
	</p>
</S>
