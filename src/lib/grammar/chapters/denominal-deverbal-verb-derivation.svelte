<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Overview" id="overview">
	<p>
		Hokkaido Ainu derives verbal stems from nominal and verbal sources through mechanisms that must
		be distinguished from the valency and voice operations treated in the chapters routed from
		<Xr ch="valency-voice-overview" />. Valency operations — applicatives, causatives, antipassive,
		reflexive, and reciprocal — alter the verb's external argument count in a principled and largely
		productive way. The processes documented below either place a base into an argument class without
		changing that count, or build a new stem whose argument class is determined by the source. They
		include the combination of bound nominal roots with verbal heads, the copula
		<A w="ne" gl="be, become" /> and the transitive verb <A w="kar" gl="make, do" /> as routes for
		nominal predication, adverbial prefixes, and the deverbal stem modifications that alter lexical
		aspect or number without altering argument structure.
	</p>

	<p>
		The architecture is head-marking in the sense of <Ref k="nichols1986" paren />: a derived stem
		must enter one of the four argument-count classes — zero-place ambient predicates, one-place
		intransitives, two-place transitives, or three-place verbs with two bare objects — and the
		person-index set then diagnoses the class of the result. Nakagawa assigns every formative a
		numerical arity value so that the derived form's external argument capacity is computable from
		the visible morphology <Ref k="nakagawa2024" p="136–139" />. Satō accepts the same
		head-marking premise but separates three simultaneously active valency dimensions: an invariant
		argument-slot count, macrorole transitivity, and the morphological class of the derived form;
		the copula <A w="ne" /> and three-place verbs motivate the split <Ref k="sato2023b" p="42–61" />.
		The two accounts are presented together where they produce the same classification and
		distinguished where they diverge ‹contested›.
	</p>

	<table>
		<thead>
			<tr>
				<th>formative or pattern</th>
				<th>arity value (Nakagawa)</th>
				<th>verb-forming role</th>
				<th>chapter route</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>bound nominal root, e.g. <i lang="ain-Latn">me-</i> 'coldness', <i lang="ain-Latn">sir-</i> 'surroundings'</td>
				<td>−1</td>
				<td>denominal base in ambient and compound verbs; often yields a zero-place predicate</td>
				<td>§ below; <Xr ch="noun-incorporation-object" /> for productive object incorporation</td>
			</tr>
			<tr>
				<td>concept-form nominal prefixes (<i lang="ain-Latn">i-</i>, <i lang="ain-Latn">u-</i>, <i lang="ain-Latn">yay-</i>, <i lang="ain-Latn">si-</i>)</td>
				<td>−1</td>
				<td>slot-filling; most are voice or valency operations</td>
				<td><Xr ch="concept-form-affiliative-form" />; voice chapters via <Xr ch="valency-voice-overview" /></td>
			</tr>
			<tr>
				<td>affiliative nominal prefixes (<i lang="ain-Latn">e-</i> 'the head of', <i lang="ain-Latn">o-</i> 'the bottom of')</td>
				<td>0</td>
				<td>add body-part or positional material without changing the slot count</td>
				<td><Xr ch="concept-form-affiliative-form" /></td>
			</tr>
			<tr>
				<td>copula <i lang="ain-Latn">ne</i> with a nominal predicate</td>
				<td>+2 (Nakagawa); Satō: macrorole = 1</td>
				<td>nominal predication and denominal stative or inchoative predicate</td>
				<td>§ below; <Xr ch="copula-ne-predicate-nominals" /></td>
			</tr>
			<tr>
				<td>light verb <i lang="ain-Latn">kar</i> 'make, do' with a nominal complement</td>
				<td>+2 (lexical transitive)</td>
				<td>'make/do N'; the word–phrase boundary is often unsettled</td>
				<td>§ below; <Xr ch="light-and-pro-verbs" /></td>
			</tr>
			<tr>
				<td>adverbial prefixes <i lang="ain-Latn">ar-</i> 'completely', <i lang="ain-Latn">ru-</i> 'slightly'</td>
				<td>0</td>
				<td>modify degree or completeness; argument frame unchanged</td>
				<td><Xr ch="verb-word-template" /></td>
			</tr>
			<tr>
				<td>applicative <i lang="ain-Latn">e-</i>, <i lang="ain-Latn">ko-</i>, <i lang="ain-Latn">o-</i></td>
				<td>+1</td>
				<td>add or promote a non-agent object; valency-increasing</td>
				<td><Xr ch="applicative-system-overview" /></td>
			</tr>
			<tr>
				<td>productive causative <i lang="ain-Latn">-re</i>, <i lang="ain-Latn">-e</i>, <i lang="ain-Latn">-te</i></td>
				<td>+1</td>
				<td>add a causer argument; valency-increasing</td>
				<td><Xr ch="causative-morphological-re-e-te" /></td>
			</tr>
			<tr>
				<td>non-productive transitivity-pair suffixes (<i lang="ain-Latn">-V</i>, <i lang="ain-Latn">-ke</i>, <i lang="ain-Latn">-ka</i>)</td>
				<td>0</td>
				<td>lexical pair formation between stative or inchoative and causative or transitive stems</td>
				<td><Xr ch="transitivizer-ka-valency-pairs" /></td>
			</tr>
			<tr>
				<td>verbal-number suffix <i lang="ain-Latn">-pa</i>, suppletive plural stems, reduplication</td>
				<td>0</td>
				<td>stem alternation for number or aspect; no effect on the argument frame</td>
				<td><Xr ch="suppletive-verbal-number" /></td>
			</tr>
		</tbody>
	</table>
</S>

<S t="Denominal ambient predicates" id="zero-place-denominal">
	<p>
		The most clearly documented denominal verbs in the Hokkaido evidence are ambient zero-place
		predicates built from bound nominal roots. Nakagawa classifies
		<A w="sirpirka" gl="be fine weather" /> (&lt; <A w="sir" gl="surroundings, weather" /> +
		<A w="pirka" gl="be good" />), <A w="mean" gl="be cold (weather)" /> (&lt; <i lang="ain-Latn">me-</i>
		'coldness root' + <A w="an" gl="exist" />), <A w="hawas" gl="it is said" /> (&lt;
		<A w="haw" gl="voice" /> + <A w="as" gl="stand" />), <A w="sirkunne" gl="get dark" />, and
		<A w="sitcuk" gl="become autumn" /> as zero-place verbs: they take neither a subject nor an
		object, and therefore no person index appears on them <Ref k="nakagawa2024" p="128–130" />.
		Shibatani describes the same ambient and weather predicates as a form of subject incorporation,
		with the nominal element supplying the domain that an ordinary intransitive would predicate of
		an external subject <Ref k="shibatani1990" p="33" />. The fuller treatment of the incorporative
		analysis is in <Xr ch="noun-incorporation-subject-possessor-stranding" />.
	</p>

	<p>
		The autonomy of the source noun determines whether the string constitutes a single word or a
		two-word sequence. The roots <i lang="ain-Latn">sir-</i> and <i lang="ain-Latn">me-</i> cannot
		stand as ordinary nouns in the relevant predicates — <i lang="ain-Latn">*sir anak pirka</i> and
		<i lang="ain-Latn">*me ka an</i> are ungrammatical — so <i lang="ain-Latn">sirpirka</i> and
		<i lang="ain-Latn">mean</i> are single zero-place verbs. The noun <A w="apto" gl="rain" />,
		by contrast, is free, and Nakagawa leaves <i lang="ain-Latn">apto as</i> 'it rains' undecided
		between a zero-place compound and a two-word noun-plus-verb clause
		<Ref k="nakagawa2024" p="129–130" /> ‹contested›. The same bound-vs-free diagnostic applies
		to other weather-like expressions.
	</p>

	<p>
		A set of temperature terms shows the zero-place and one-place contrast side by side. The
		zero-place member describes the ambient climate and carries no person index; the one-place member
		describes a felt bodily state and carries the intransitive subject index.
	</p>

	<table>
		<thead>
			<tr>
				<th>semantic domain</th>
				<th>zero-place climate predicate</th>
				<th>one-place felt-state predicate</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>cold</td>
				<td><i lang="ain-Latn">me-an</i></td>
				<td><i lang="ain-Latn">me-rayke</i></td>
			</tr>
			<tr>
				<td>cool</td>
				<td><i lang="ain-Latn">sir-me-man</i></td>
				<td><i lang="ain-Latn">me-man</i></td>
			</tr>
			<tr>
				<td>warm</td>
				<td><i lang="ain-Latn">sir-popke</i></td>
				<td><i lang="ain-Latn">popke</i></td>
			</tr>
			<tr>
				<td>hot</td>
				<td><i lang="ain-Latn">sir-sesek</i></td>
				<td><i lang="ain-Latn">sesek</i></td>
			</tr>
		</tbody>
	</table>

	<Ex
		m="me-an cuk ne pe me-rayke=an ka somo ki no"
		g="coldness-exist autumn COP NMLZ coldness-kill=4.S even NEG do CONJ"
		tr="It was a cold autumn, but I did not feel cold."
		cite="nakagawa2024:130"
		dial="SAR"
		place="Nakagawa ex. 15, after Kayano 1974a"
		note="The zero-place climate predicate me-an carries no person index. The one-place felt-state predicate me-rayke carries the fourth-person S suffix =an. Both contain the coldness root me-, but they belong to different argument classes."
	/>

	<p>
		Property predicates — forms such as <A w="poro" gl="be big; become big" /> and
		<A w="pirka" gl="be good; become good" /> — are intransitive verbs with no separate adjective
		class; a stative reading ordinarily carries an inchoative one as well <Ref k="nakagawa2024"
			p="124"
		/>; <Ref k="shibatani1990" p="33–34" />. Their clausal behaviour is treated as a subclass in
		<Xr ch="no-adjective-class-property-verbs" /> and <Xr ch="property-concept-predication" />.
		The denominal ambient predicates above are their zero-place counterpart: the nominal root takes
		the same finite-verb template but licenses no external argument.
	</p>
</S>

<S t="The copula ne as a denominal predicate head" id="ne-denominal">
	<p>
		The copula <A w="ne" gl="be, become" /> is the primary path from a nominal expression to a
		finite predicate. A noun or noun phrase precedes <i lang="ain-Latn">ne</i> as a predicate
		nominal, and the result is a two-place construction with a subject and a predicate nominal
		argument. Nakagawa classifies <i lang="ain-Latn">ne</i> as a two-place verb, yet it admits
		only the subject person index: the object-indexed form <i lang="ain-Latn">*en=ne</i> is
		excluded in his diagnostic example, while the subject takes the transitive-subject prefix set
		<Ref k="nakagawa2024" p="132" />; <Ref k="shibatani1990" p="49–50" />.
	</p>

	<Ex
		m="okkayo ku=ne"
		g="man 1SG.A=COP"
		tr="I am a man."
		cite="nakagawa2024:132"
		dial="HK"
		place="Nakagawa ex. 23"
		note="The subject carries the prefixal transitive-subject form ku=; no object index appears. Nakagawa contrasts this with the ungrammatical *en=ne in the same passage."
	/>

	<p>
		Satō uses this pattern to motivate the separation of three valency dimensions. The
		argument-slot count of <i lang="ain-Latn">ne</i> is two, since the construction predicates a
		class or identity; its macrorole transitivity is one, since the predicate nominal is not a
		referential undergoer and therefore licenses no object affix; its morphological valency is
		transitive, which explains the transitive-subject-prefix pattern. Lexicalized denominal
		compounds such as <i lang="ain-Latn">nispa a=ne</i> 'I am a master' and
		<i lang="ain-Latn">inne</i> 'be numerous' (&lt; <i lang="ain-Latn">ir-ne</i>) follow the
		same transitive-prefix pattern <Ref k="sato2023b" p="52" /> ‹contested›. Nakagawa's surface
		observation that <i lang="ain-Latn">ne</i> never takes an object index and Satō's principled
		account of why it does not are two descriptions of the same morphological fact.
	</p>

	<p>
		Because Ainu property verbs carry an inchoative reading alongside their stative one, a noun plus
		<i lang="ain-Latn">ne</i> can similarly express both 'be X' and, in the appropriate aspectual
		context, 'become X'. A productive denominal suffix <i lang="ain-Latn">-ne</i> detached from
		the copular construction has no independent support in the available evidence; lexicalized forms
		such as <i lang="ain-Latn">inne</i> are best analysed as the copula incorporated into a compound
		stem rather than as the output of an autonomous verbalizing suffix ‹corpus-suggested›. The
		syntax and semantics of predicate-nominal constructions are treated in
		<Xr ch="copula-ne-predicate-nominals" />.
	</p>
</S>

<S t="kar and the word–phrase boundary" id="kar-boundary">
	<p>
		The transitive verb <A w="kar" gl="make, do" /> supplies a second denominal route. A noun or
		nominalized expression may function as the object of <i lang="ain-Latn">kar</i>, and frequent
		collocations may lexicalize as single verb stems. The synchronic default is that
		<i lang="ain-Latn">kar</i> is an independent lexical transitive verb. Nakagawa's example
		<i lang="ain-Latn">tanpe kar pe en=ne</i>, cited to show the copula's blocked object index,
		shows <i lang="ain-Latn">kar</i> functioning as the verb of a relative clause 'the one who
		made this'; it takes ordinary transitive morphology and is clearly separate from
		<i lang="ain-Latn">ne</i> <Ref k="nakagawa2024" p="132" />. Horobetsu
		<i lang="ain-Latn">kar-ici</i> 'make, do' — with the eastern plural suffix
		<i lang="ain-Latn">ci</i> inside the person index — is a verbal-number fact about the stem
		itself, not evidence for a productive denominal verbalizer <Ref k="nakagawa2024" p="154–155" />.
	</p>

	<p>
		A transparent <i lang="ain-Latn">N kar</i> sequence is therefore a two-word clause with
		<i lang="ain-Latn">kar</i> as its verb. A single derived verb stem arises only where
		morphological diagnostics confirm it: fixed wordhood, phonological fusion, or person and
		number morphology showing that the nominal element has been incorporated into the verb word
		rather than occupying an external object slot. Nakagawa applies the same bound-vs-free
		diagnostic to the weather predicates: bound roots such as <i lang="ain-Latn">me-</i> and
		<i lang="ain-Latn">sir-</i> support a single-word analysis, while free nouns leave the
		boundary unsettled <Ref k="nakagawa2024" p="129–130" />. Without those independent tests,
		the default analysis of <i lang="ain-Latn">N kar</i> is a two-word clause ‹corpus-suggested›.
		The light-verb and pro-verb uses of <i lang="ain-Latn">kar</i>, including its behaviour with
		incorporated objects, are treated in <Xr ch="light-and-pro-verbs" /> and
		<Xr ch="noun-incorporation-object" />.
	</p>
</S>

<S t="Deverbal derivation without valency change" id="deverbal-nonvalency">
	<p>
		Several deverbal processes change the shape or the lexical-aspect profile of a verb stem without
		altering its argument frame. Nakagawa assigns arity 0 to adverbial prefixes such as
		<i lang="ain-Latn">ar-</i> 'completely' and <i lang="ain-Latn">ru-</i> 'slightly': they modify
		the degree or thoroughness of the denoted event and leave the external argument count unchanged
		<Ref k="nakagawa2024" p="137" />. Their position in the verb template and their interaction
		with person indexing are set out in <Xr ch="verb-word-template" />.
	</p>

	<p>
		Reduplication adds iterativity, continuity, or intensity without altering the argument count.
		Nakagawa distinguishes root reduplication, partial-stem reduplication, and full-stem
		reduplication: <A w="turi" gl="stretch (sth)" /> yields <i lang="ain-Latn">tutturi</i>
		(root-reduplicated, marking repeated action), <i lang="ain-Latn">turiri</i>
		(partial, marking result-state persistence), and <i lang="ain-Latn">turituri</i> (full, marking
		sustained repetition). He treats reduplication as encoding lexical aspect rather than verbal
		number, though the two interact at the surface <Ref k="nakagawa2024" p="151–153" />;
		<Ref k="nakagawa2022" p="§1" />.
	</p>

	<p>
		The Type-C vowel-replacement alternation creates plural stems from singular ones without
		changing argument count: <A w="tuye" gl="cut (sg)" /> / <A w="tuypa" gl="cut (pl)" />,
		<A w="yasa" gl="tear (sg)" /> / <A w="yaspa" gl="tear (pl)" />. Nakagawa assigns arity 0 to
		the suffix <i lang="ain-Latn">-pa</i> in this pattern, so the plural stem enters the same
		argument class as the singular source <Ref k="nakagawa2024" p="137, 149–150" />. The full
		verbal-number system — Types A (suppletive), B (<i lang="ain-Latn">-n/-p</i>), and C
		(<i lang="ain-Latn">-V/-pa</i>), the auxiliary <i lang="ain-Latn">pa</i>, and the relationship
		between subject vs object plurality and stem choice — is treated in
		<Xr ch="suppletive-verbal-number" />.
	</p>

	<p>
		Derived intransitives formed by prefixes such as <i lang="ain-Latn">si-</i>,
		<i lang="ain-Latn">he-</i>, and <i lang="ain-Latn">ho-</i> on transitive bases inherit the
		verbal-number type of their source. Nakagawa lists <i lang="ain-Latn">si-turi</i> /
		<i lang="ain-Latn">si-turpa</i> 'stretch (intr)', <i lang="ain-Latn">ho-puni</i> /
		<i lang="ain-Latn">ho-punpa</i> 'get up, fly up', and <i lang="ain-Latn">ho-yupu</i> /
		<i lang="ain-Latn">ho-yuppa</i> 'run' as derived intransitives that still undergo the
		Type-C alternation <Ref k="nakagawa2024" p="150–151" />. Number agreement in these forms
		follows the subject — the single argument of the intransitive — because the prefix has
		converted the transitive base to an intransitive. The argument class of the output, not
		the source, determines the number-agreement target <Ref k="nakagawa2024" p="145–146" />.
		The prefixes themselves, insofar as they create anticausative or middle-like readings, are
		treated in the voice chapters via <Xr ch="valency-voice-overview" />.
	</p>
</S>

<S t="Transitivity pairs" id="transitivity-pairs">
	<p>
		Hokkaido Ainu has almost no productive lability: a single stem serving as both intransitive and
		transitive is extremely rare. Satō reports only <A w="roski" gl="stand (pl) / stand sth up (pl)" />
		as the standard case of a form that fills both slots, and he presents it as an exception rather
		than a productive pattern <Ref k="sato2008" p="97" />. The near-absence of lability means that
		most intransitive–transitive correspondences are lexical pairs, partial derivations, or
		suppletive-looking forms that require separate learning <Ref k="sato2008" p="97" />;
		<Ref k="nakagawa2024" p="131–132" />.
	</p>

	<p>
		Three formal correspondence types occur. First, identical surface forms: only
		<i lang="ain-Latn">roski</i>. Second, partial formal similarity, as in
		<A w="nunpa" gl="strain, wring" /> (vt) and <A w="inunpa" gl="strain liquor for ritual offering" />
		(vi), where the intransitive member is analyzable as the antipassive prefix
		<i lang="ain-Latn">i-</i> attached to the transitive base, though the pair has lexicalized to
		distinct meanings <Ref k="sato2008" p="97" />. Third, no formal similarity at all — suppletive-looking
		pairs of basic vocabulary where the relationship between the two stems is not synchronically
		derivational <Ref k="nakagawa2024" p="131" />. Selected pairs of the third type are listed below.
	</p>

	<table>
		<thead>
			<tr>
				<th>meaning area</th>
				<th>intransitive (1-place)</th>
				<th>transitive (2-place)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>look / see sth</td>
				<td><i lang="ain-Latn">inkar</i></td>
				<td><i lang="ain-Latn">nukar</i></td>
			</tr>
			<tr>
				<td>hear / hear sth</td>
				<td><i lang="ain-Latn">inu</i></td>
				<td><i lang="ain-Latn">nu</i></td>
			</tr>
			<tr>
				<td>steal (as activity) / steal sth</td>
				<td><i lang="ain-Latn">ikka</i></td>
				<td><i lang="ain-Latn">eikka</i></td>
			</tr>
			<tr>
				<td>laugh / laugh at sth</td>
				<td><i lang="ain-Latn">mina</i></td>
				<td><i lang="ain-Latn">emina</i></td>
			</tr>
			<tr>
				<td>eat a meal / eat sth specific</td>
				<td><i lang="ain-Latn">ipe</i></td>
				<td><i lang="ain-Latn">e</i></td>
			</tr>
			<tr>
				<td>speak / say sth</td>
				<td><i lang="ain-Latn">itak</i></td>
				<td><i lang="ain-Latn">ye</i></td>
			</tr>
			<tr>
				<td>think (intr) / think of sth</td>
				<td><i lang="ain-Latn">yaynu</i></td>
				<td><i lang="ain-Latn">ramu</i></td>
			</tr>
		</tbody>
	</table>

	<p>
		The class membership of a form is diagnosed formally, not semantically. A vi takes the
		suffixal fourth-person subject marker (<i lang="ain-Latn">=an</i>) and the suffixal
		first-person-plural exclusive marker (<i lang="ain-Latn">=as</i>); a vt takes the
		corresponding prefixal forms (<i lang="ain-Latn">a=</i>, <i lang="ain-Latn">ci=</i>).
		The contrast between <i lang="ain-Latn">inkar</i> and <i lang="ain-Latn">nukar</i> —
		glossed by the same Japanese verb 見る — appears within a single sentence:
	</p>

	<Ex
		m="inkar=an akus e=an ru-we a=nukar"
		g="look=4.S then 2SG.S=exist track-POSS 4.A=see"
		tr="When I looked, I saw that you were there."
		cite="nakagawa2024:131"
		dial="SAR"
		place="Nakagawa ex. 18"
		note="The vi stem inkar carries the fourth-person S suffix =an. The vt stem nukar carries the fourth-person A prefix a=. Both index the same narrative first person, but their different morphological position reveals the grammatical transitivity distinction."
	/>

	<p>
		Bugaeva and Kobayashi identify a related pattern of uncoded role alternation. Certain one-place
		verbs may take either an agent-like or a theme-like subject without any change in form:
		<A w="as" gl="stand" /> can express both 'stand there (agent subject)' and 'stand upright
		(theme subject)'. The alternation becomes visible under causativization — an agent subject
		yields the indirect 'make sb stand' formation, a theme subject the direct 'stand sth up'
		formation <Ref k="bugaevakobayashi2022" p="§5" />. That distinction intersects with the
		<Xr ch="transitivizer-ka-valency-pairs">transitivity-pair suffix system</Xr>, where the
		inventory of <i lang="ain-Latn">-V</i>, <i lang="ain-Latn">-ke</i>, and
		<i lang="ain-Latn">-ka</i> formations and their productivity are treated in detail.
	</p>
</S>

<S t="Valency-changing derivation routed outward" id="valency-routing">
	<p>
		Productive valency-changing operations form a separate system whose paradigms are documented in
		the voice and valency chapters. Applicatives <i lang="ain-Latn">e-</i>,
		<i lang="ain-Latn">ko-</i>, and <i lang="ain-Latn">o-</i> add or promote an object and raise
		the verb's arity by one; the productive causatives <i lang="ain-Latn">-re</i>,
		<i lang="ain-Latn">-e</i>, and <i lang="ain-Latn">-te</i> add a causer argument; antipassive
		<i lang="ain-Latn">i-</i> absorbs the object and yields an intransitive; reflexives
		<i lang="ain-Latn">yay-</i> / <i lang="ain-Latn">si-</i> and reciprocal
		<i lang="ain-Latn">u-</i> fill the object slot internally so that a subject and an object of
		the same person are not both indexed by person affixes <Ref k="bugaevakobayashi2022" p="§4" />;
		<Ref k="nakagawa2024" p="137–139, 183" />. Their paradigms are in
		<Xr ch="applicative-system-overview" />, <Xr ch="causative-morphological-re-e-te" />,
		<Xr ch="antipassive-detransitive-i" />, <Xr ch="reflexive-yay" />,
		<Xr ch="reflexive-possessive-si" />, and <Xr ch="reciprocal-u" />.
	</p>

	<p>
		The homophony of the prefix <i lang="ain-Latn">e-</i> shows why holding these categories apart
		matters. In one derived verb it is the applicative with arity +1 (adding an object); in another
		it is the affiliative nominal prefix with arity 0 (contributing a body-part relation); in another
		it is a second-person object index with arity −1. Nakagawa's worked examples
		<i lang="ain-Latn">a=ureepunpa</i> 'I kicked it up with my foot' (applicative, arity +1) and
		<i lang="ain-Latn">a=koinawepunpa</i> 'we offered inau' (affiliative, arity 0) are
		distinguished only by the arity computation, since the resulting argument count differs
		<Ref k="nakagawa2024" p="138–139" />. The affiliative nominal prefix is defined in
		<Xr ch="concept-form-affiliative-form" />.
	</p>

	<p>
		Locative-object verbs form a small class whose distinguishing property is that their object is
		a bare place expression. Nakagawa lists <A w="oma" gl="be in / enter a place" />,
		<A w="osma" gl="plunge into a place" />, and <A w="kus" gl="pass through a place" /> as
		two-place verbs of this type. The single base-form three-place verb in his inventory is
		<A w="o" gl="put X into a place" />; derived three-place locative-object verbs such as
		<A w="omare" gl="put into" />, <A w="osmare" gl="plunge into" />, and
		<A w="kuste" gl="pass through" /> are formed by applicative or causative processes from
		non-locative bases <Ref k="nakagawa2024" p="212–213" />.
	</p>

	<Ex
		m="upas tum a=oma wa karkarse=an"
		g="snow midst 4.A=enter CONJ roll=4.S"
		tr="I sank into the snow and rolled."
		cite="nakagawa2024:212"
		dial="CHI"
		place="Nakagawa ex. 221"
		note="The locative-object verb oma takes the bare place expression upas tum as its object; no case marker intervenes. The conjunctive particle wa links the clause to the following intransitive karkarse, which carries the fourth-person S suffix =an."
	/>

	<p>
		The derivational chain that Satō documents on the base <A w="ruska" gl="be angry at" />
		illustrates the regularity of the full valency system: applicative <i lang="ain-Latn">ko-</i>
		raises the base to a three-place verb (<i lang="ain-Latn">ko-ruska</i>); reflexive
		<i lang="ain-Latn">yay-</i> reduces it (<i lang="ain-Latn">yay-ko-ruska</i>); antipassive
		<i lang="ain-Latn">i-</i> yields a one-place intransitive (<i lang="ain-Latn">i-ruska</i>);
		applicative <i lang="ain-Latn">ko-</i> re-applies (<i lang="ain-Latn">ko-i-ruska</i>); and
		causative <i lang="ain-Latn">-re</i> raises that in turn (<i lang="ain-Latn">i-ruska-re</i>,
		<i lang="ain-Latn">ko-i-ruska-re</i>, and further) <Ref k="sato2023b" p="40" /> ‹consensus›.
		Each step alters the verb's argument class by a calculable amount; the individual formatives
		are treated in the chapters named above.
	</p>
</S>

<S t="Ijäs's L2–L3 framework" id="ijas">
	<p>
		Ijäs's Basic Lessons 2 and 3 supply a pedagogical framing of the same system. Her zero-place,
		one-place, two-place, and three-place classes correspond to Nakagawa's N-place inventory, Satō's
		argument-slot count, and the Handbook valency chapter <Ref k="ijas2023" />;
		<Ref k="nakagawa2024" p="125–139" />; <Ref k="bugaevakobayashi2022" p="§§2–3" />. Her
		"pockets" image — person markers fill positions on the verb itself before and more obligatorily
		than free noun phrases — is a learner-facing rendering of head-marking, and is especially close
		to Satō's argument-slot language <Ref k="sato2023b" p="42–51" />. Her statements that bare
		verb forms carry no tense and that nouns are number-neutral agree with all primary sources
		<Ref k="nakagawa2024" p="124–125" />; <Ref k="shibatani1990" p="33" />.
	</p>

	<p>
		Her Lesson 2 zero-place weather verbs match Nakagawa's zero-place category and correctly include
		the inchoative reading of descriptive predicates such as <A w="hure" gl="be red; become red" />.
		One qualification on her treatment: she presents <i lang="ain-Latn">apto as</i> alongside the
		bound-root zero-place forms, but <A w="apto" gl="rain" /> is a free noun and Nakagawa leaves
		the word-boundary status of the expression unresolved <Ref k="nakagawa2024" p="129–130" />
		‹contested›.
	</p>

	<Ex
		m="numan hekaci cep koyki"
		g="yesterday boy fish catch"
		tr="The boy caught fish yesterday."
		cite="ijas2023"
		constructed
		note="Ijäs Lesson 3. A constructed two-place transitive frame; subject and object are third-person and carry no segmental person marker. The example is pedagogical and is not corpus-attested."
	/>

	<p>
		Two Ijäs simplifications require a caveat from the primary sources. Third person is segmentally
		zero in all attested forms, and her explicit <i lang="ain-Latn">Ø-</i> notation is descriptively
		harmless; the theoretical status of that zero is nonetheless disputed, with Nakagawa treating it
		as the absence of an affix and Satō positing a zero third-person affix to preserve the two-index
		cap <Ref k="nakagawa2024" p="137" />; <Ref k="sato2023b" p="39" />; <Ref k="sato2025b"
			p="23–24"
		/> ‹contested›. Her presentation of the indirect object of a three-place verb in a fixed
		position between subject and direct object reflects a teaching default; Nakagawa's examples
		with <A w="epakasnu" gl="teach" /> show that the two objects and the subject are freely
		ordered by discourse conditions <Ref k="nakagawa2024" p="363–365" /> ‹consensus›.
	</p>

	<p>
		Her forward reference to verbs with distinct singular and plural stems belongs with
		<Xr ch="suppletive-verbal-number" />; her adverbial <i lang="ain-Latn">-no</i> examples with
		<Xr ch="adverbializer-no" />. Neither stem alternation nor the adverbializer alters the argument
		structure of the base.
	</p>
</S>
