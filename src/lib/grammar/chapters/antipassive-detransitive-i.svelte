<!-- src/lib/grammar/chapters/antipassive-detransitive-i.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Form and function in the arity calculus" id="overview">
	<p>
		The prefix <A w="i-" gl="antipassive / detransitivizing prefix" /> occupies the object
		position of a transitive verb with a semantically generic 'thing, someone, people', reducing
		the verb's arity by one and rendering it intransitive. In Nakagawa's arity calculus the
		operation is a standard −1 step: a two-place transitive yields a one-place intransitive, and a
		three-place ditransitive yields a two-place transitive <Ref k="nakagawa2024" p="190–192" />;
		<Ref k="bugaevakobayashi2022" p="§4.2.3" />. The resulting intransitive takes suffixal S
		indexes — <i lang="ain-Latn">=as</i> (1PL.EXCL.S) and <i lang="ain-Latn">=an</i> (4.S) —
		where the base transitive had taken prefixal A indexes such as <i lang="ain-Latn">ci=</i> and
		<i lang="ain-Latn">a=</i>. This person-affix shift is the single operative diagnostic for the
		detransitivization <Ref k="sato2008" p="96" />; <Ref k="nakagawa2024" p="137, 140" />. The
		place of the operation in the wider valency system is set out in
		<Xr ch="valency-voice-overview" />.
	</p>

	<p>
		The prefix sits immediately before the verb root, inside the person-index layer. Under
		Nakagawa's position-class template it occupies the same slot as the other valency-decreasing
		prefixes <i lang="ain-Latn">yay-</i>, <i lang="ain-Latn">si-</i>, and <i lang="ain-Latn"
			>u-</i
		>, and it combines freely with applicatives outside it and causative suffixes after the stem:
		<i lang="ain-Latn">ko-i-ruska</i> (APPL-ANTIP-be.angry at), a re-transitivized applicative
		of the antipassive <i lang="ain-Latn">i-ruska</i> 'be angry', is well-formed, and so is the
		further reflexivized <i lang="ain-Latn">si-ko-i-ruska</i>
		<Ref k="bugaevakobayashi2022" p="§4.2.3" />. The derivational chain
		<i lang="ain-Latn">ruska</i> (vt) → <i lang="ain-Latn">i-ruska</i> (vi) → <i lang="ain-Latn"
			>ko-i-ruska</i
		> (vt) → <i lang="ain-Latn">si-ko-i-ruska</i> (vi) → <i lang="ain-Latn">i-ruska-re</i> (vt,
		'make sb angry') → <i lang="ain-Latn">ko-i-ruska-re</i> (vd) shows that
		<i lang="ain-Latn">i-</i> is not a terminal derivation but a mid-chain element and that the
		arity bookkeeping remains coherent at every step <Ref k="bugaevakobayashi2022" p="§4.2.3" />.
		In the corpus, <i lang="ain-Latn">iruska</i> 'be angry' appears 655 times (rank 264), making
		it among the most frequent antipassive derivatives ‹corpus-confirmed›.
	</p>

	<Ex
		m="i-ri=an wa or-o wa sini=an na"
		g="ANTIP-skin=4.S CONJ place-POSS from rest=4.S FIN"
		tr="I will skin the catch and then rest."
		cite="bugaevakobayashi2022:§4.2.3"
		dial="SHI"
		place="Shizunai Board of Education 1991–1995, O0130054_6; Handbook ex. 24b"
		note="The intransitive suffix =an on i-ri confirms that the antipassive has intransitivized ri 'skin sth'; the Patient — the catch — is outside the argument frame. Both clause-final =an tokens carry fourth-person S reference."
	/>
</S>

<S t="Semantic domains and lexicalization" id="lexicalization">
	<p>
		The antipassive is productive across a restricted range of semantic classes. Bugaeva, working
		from Nakagawa's corpus, identifies 48 verbal lexemes that form antipassive derivatives,
		concentrated in Perception/Cognition, Ingesting, Interaction, Communication, Grooming, and
		Traditional-Activity verbs <Ref k="bugaevakobayashi2022" p="§4.2.3" />. Absent from the set
		are Creation, Transformation, and Contact-by-Impact verbs — a distribution consistent with the
		typological generalization that antipassives in non-ergative languages preferentially target
		low-transitivity predicates ‹contested›.
	</p>

	<table>
		<caption
			>Selected antipassive derivatives by semantic class (primary Saru/Chitose data; <Ref
				k="nakagawa2024"
				p="190–192"
			/>; <Ref k="bugaevakobayashi2022" p="§4.2.3" />)</caption
		>
		<thead>
			<tr>
				<th>base (transitive)</th>
				<th>antipassive form</th>
				<th>approximate meaning</th>
				<th>semantic class</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">nu</i> 'hear sth'</td>
				<td><i lang="ain-Latn">i-nu</i></td>
				<td>listen (generally)</td>
				<td>Perception</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">nukar</i> 'see/look at sth'</td>
				<td><i lang="ain-Latn">inkar</i> (&lt; <i lang="ain-Latn">i-nukar</i>)</td>
				<td>gaze, look</td>
				<td>Perception (lexicalized)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ku</i> 'drink sth'</td>
				<td><i lang="ain-Latn">i-ku</i></td>
				<td>drink alcohol (euphemism)</td>
				<td>Ingesting</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">e</i> 'eat sth'</td>
				<td><i lang="ain-Latn">ipe</i> (&lt; <i lang="ain-Latn">i-e</i>)</td>
				<td>food; eat a meal</td>
				<td>Ingesting (lexicalized)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">kasuy</i> 'help sb'</td>
				<td><i lang="ain-Latn">i-kasuy</i></td>
				<td>help (do helping)</td>
				<td>Interaction</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">huraye</i> 'wash sth'</td>
				<td><i lang="ain-Latn">i-huraye</i></td>
				<td>do the washing</td>
				<td>Grooming</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ri</i> 'skin sth'</td>
				<td><i lang="ain-Latn">i-ri</i></td>
				<td>skin the catch</td>
				<td>Traditional Activity</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">omante</i> 'send off sb'</td>
				<td><i lang="ain-Latn">i-omante</i></td>
				<td>send off the bear-god's spirit</td>
				<td>Traditional Activity (lexicalized)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">carpa</i> 'offer sth'</td>
				<td><i lang="ain-Latn">i-carpa</i></td>
				<td>make ancestral offerings</td>
				<td>Traditional Activity (lexicalized)</td>
			</tr>
		</tbody>
	</table>

	<p>
		Many antipassive derivatives have lexicalized to a fixed, conventionalized object reading.
		<i lang="ain-Latn">i-ku</i> no longer simply means 'drink something' but specifically 'drink
		alcohol' — a euphemistic narrowing noted by Nakagawa as <span lang="ja">婉曲</span> (indirect
		expression) — while <i lang="ain-Latn">i-omante</i> and <i lang="ain-Latn">i-carpa</i> are
		restricted to ritual contexts <Ref k="nakagawa2024" p="191–192" />; <Ref
			k="bugaevakobayashi2022"
			p="§4.2.3"
		/>. At the extreme of lexicalization the morphological boundary is no longer transparent:
		<i lang="ain-Latn">inkar</i> 'gaze' (&lt; <i lang="ain-Latn">i-nukar</i>) and
		<i lang="ain-Latn">ipe</i> 'food; eat a meal' (&lt; <i lang="ain-Latn">i-e</i>) have undergone
		phonological fusion and are synchronically nominal or verbal roots in their own right <Ref
			k="nakagawa2024"
			p="192"
		/>. Bugaeva and Kobayashi further report that <i lang="ain-Latn">i-</i> is fossilized
		residually on the adverb <i lang="ain-Latn">i-mak</i> 'behind' and the particle
		<i lang="ain-Latn">i-y-os(no)</i> 'afterward, later', where the original Patient-incorporating
		reading is entirely opaque <Ref k="bugaevakobayashi2022" p="§4.2.3" />.
	</p>

	<Ex
		m="ene wa poka a=reka hi ka isam menoko i-huraye kor an na"
		g="thus CONJ even 4.A=praise NMLZ even not.exist woman ANTIP-wash while exist FIN"
		tr="A woman of incomparable beauty was doing the laundry."
		cite="nakagawa2024:190"
		dial="CHI"
		place="Nakagawa ex. 170"
		note="The antipassive i-huraye 'do the washing' is intransitive; the specific object (laundry) is inferrable from context but suppressed from the argument frame. The embedding clause ene wa poka a=reka hi ka isam means literally 'there is no way to praise her' — the conventional formula for incomparable beauty."
	/>

	<p>
		The discourse motivation for the antipassive parallels what Bugaeva identifies typologically:
		<i lang="ain-Latn">i-</i> is preferred when discourse focus falls on the Agent or the activity
		as a whole rather than on a specific, individuated Patient <Ref
			k="bugaevakobayashi2022"
			p="§4.2.3"
		/>. Bugaeva also notes that the prefix can antipassivize a Recipient or a direct Causee, as in
		<i lang="ain-Latn">i-newsar-ka</i> 'amuse people' and <i lang="ain-Latn">i-oripak-ka</i>
		'make people feel humble' — an antipassivization of the causee rare across languages
		<Ref k="bugaevakobayashi2022" p="§4.2.3" />.
	</p>
</S>

<S t="The label debate: antipassive or derivational prefix?" id="label-debate">
	<p>
		The functional description is uncontroversial; the grammatical label is not. The traditional
		analysis, associated with Tamura and reported through Bugaeva and Kobayashi, treats
		<i lang="ain-Latn">i-</i> as a generalised object marker — a derivational prefix introducing
		an unspecified object 'someone, thing' — without applying the voice category
		<em>antipassive</em> <Ref k="bugaevakobayashi2022" p="§4.2.3" />. Satō's textbook grammar
		follows this line, describing the identical prefix as derivational <i lang="ain-Latn">i-</i>
		'人を' (people-as-object) and listing no antipassive in its voice inventory <Ref
			k="sato2008"
			p="232–233"
		/>. On this account <i lang="ain-Latn">i-</i> is a lexical derivational element that selects a
		generic reading rather than a voice morpheme that restructures argument relations.
	</p>

	<p>
		Bugaeva's antipassive reanalysis argues from three converging criteria that
		<i lang="ain-Latn">i-</i> meets the typological definition of an antipassive: it
		systematically demotes the Patient/Theme/Recipient from a core object position; its output
		always carries an unspecified or generic object reading; and it is discourse-conditioned,
		appearing precisely where the speaker defocuses the Patient to foreground the Agent or the
		activity <Ref k="bugaeva2021antip" p="232–237" />; <Ref k="bugaevakobayashi2022" p="§4.2.3" />.
		Nakagawa endorses this reanalysis, noting that the term 逆受動態 (antipassive) has become
		standard in recent work following Bugaeva, and adopts it while acknowledging the derivational
		tradition <Ref k="nakagawa2024" p="192" />. Ijäs's learner grammar also uses the antipassive
		label; her characterization — the prefix 'takes the place of the object and fills it with a
		generic meaning of thing/place' — renders Bugaeva's substance accurately <Ref k="ijas2023" />
		‹contested›.
	</p>

	<p>
		The two positions share substantial common ground: both agree that the prefix occupies the
		object position, that its semantic contribution is generic and unspecified, and that the verb
		becomes intransitive by the person-affix test. The disagreement is whether this slot-filling
		constitutes a grammaticalized voice alternation or a lexical derivation that happens to
		intransitivize. The width of the prefix's semantic scope — extending to Recipient and Causee
		demotion, not only Patient — and its discourse conditioning give the antipassive account
		stronger typological grounding. This chapter adopts Bugaeva's label while registering Tamura's
		and Satō's derivational reading as the earlier, still-maintained alternative <Ref k="sato2008" p="§29.2" /> ‹contested›.
	</p>
</S>

<S t="Homophony: antipassive i- and the fourth-person object i=" id="homophony">
	<p>
		Two surface strings <i lang="ain-Latn">i-</i> must be kept distinct. The antipassive prefix
		<i lang="ain-Latn">i-</i> is a derivational element in the slot immediately before the verb
		root; the <Xr ch="indefinite-fourth-person-paradigm">fourth-person</Xr> object marker
		<i lang="ain-Latn">i=</i> is a person index belonging to the transitive object paradigm. Both
		are segmentally identical, and both can appear on the same verb surface, but their
		distributional profiles diverge <Ref k="bugaeva2021antip" />; <Ref k="nam2021" p="62–63" />.
	</p>

	<p>
		The antipassive prefix satisfies the object slot derivationally and renders the verb
		intransitive: the derived verb takes S suffixes and cannot simultaneously host a separate
		object marker. The fourth-person marker, by contrast, leaves the verb transitive and is
		cross-referenced by a prefixal A index alongside the <i lang="ain-Latn">i=</i> object marker.
		A minimal diagnostic: <i lang="ain-Latn">i-nu=an</i> (ANTIP-hear=4.S) is intransitive, proven
		by the suffixal <i lang="ain-Latn">=an</i>; while <i lang="ain-Latn">a=i=nu</i>
		(4.A=4.O=hear) is transitive and the <i lang="ain-Latn">i=</i> there is the object marker, not
		the antipassive prefix <Ref k="nakagawa2024" p="190–191" />. The arity computation — the same
		instrument that distinguishes applicative <i lang="ain-Latn">e-</i> from affiliative
		<i lang="ain-Latn">e-</i> and from the second-person marker <i lang="ain-Latn">e=</i> — is the
		sole disambiguating tool in both cases <Ref k="nakagawa2024" p="192–193" />.
	</p>
</S>

<S t="Syntactic diagnostics and re-applicativization" id="syntax">
	<p>
		The antipassive instantiates an S=A alternation: the Agent argument of the transitive base
		surfaces as the sole argument of the antipassive intransitive, cross-referenced by the same
		person indexes that mark the transitive A. The alternation is illustrated by Bugaeva and
		Kobayashi's minimal pair: <i lang="ain-Latn">nea kamuy a=ri</i> 'I skin that bear'
		(transitive, specific Patient) versus <i lang="ain-Latn">i-ri=an</i> '(I will) skin the catch'
		(antipassive, Patient removed from the frame) <Ref k="bugaevakobayashi2022" p="§4.2.3" />. In
		the antipassive the prefixal <i lang="ain-Latn">a=</i> is absent because there is no object
		slot to fill; the suffixal <i lang="ain-Latn">=an</i> carries logophoric first-person-singular
		reference in the narrative context.
	</p>

	<p>
		The 1PL.EXCL intransitive suffix <i lang="ain-Latn">=as</i> cannot attach to a transitive
		verb, so its presence on <i lang="ain-Latn">i-nu=as</i> and
		<i lang="ain-Latn">i-ku=as</i> 'we drank (alcohol)' unambiguously proves the intransitive
		status of these antipassive derivatives <Ref k="nam2021" p="62" />. The latter form is
		attested in a Saru oral narrative (Tamura 1993[1979]: 6, cited via Bugaeva 2021: 219 in Nam
		2021: 62) and constitutes the core corpus evidence that the Person-Affix test extends to real
		discourse contexts, not only constructed elicitation.
	</p>

	<p>
		The antipassive can be re-applicativized: the applicative prefix <i lang="ain-Latn">e-</i>
		reintroduces a content or instrument object to the now-intransitive stem, raising arity by one
		and yielding a transitive again. The result is that <i lang="ain-Latn">e-</i> and
		<i lang="ain-Latn">i-</i> cancel each other's arity effects while changing the
		<em>type</em> of object expressed:
	</p>

	<Ex
		m="tokaci wa ek pewre kur monrayke e-i-kasuy"
		g="Tokachi from come young man matter APPL-ANTIP-help"
		tr="A young man who came from Tokachi helped with the work."
		cite="bugaevakobayashi2022:§4.2.3"
		dial="SAR"
		place="Sunazawa 1983: 160; Handbook ex. 25c"
		note="e-i-kasuy combines the content applicative e- (+1) with the antipassive i- (−1), netting zero arity change relative to the base kasuy 'help sb'. The applied object monrayke 'matter, work' specifies what the helping is directed at, while the human Patient-person remains suppressed and unindexed."
	/>

	<p>
		This pattern, where an applicative overlays an antipassive to shift the object type without
		restoring the suppressed Patient, is productive and has a direct structural parallel in the
		re-applicativization of other arity-decreasing prefixes. The derivational chain through
		<i lang="ain-Latn">ruska</i> documented in <Xr ch="valency-voice-overview" /> traces the same
		logic: the arity decrements and increments compose arithmetically, and each step is attested in
		the corpus.
	</p>
</S>

<S t="Origin: the three-way reconstruction debate" id="diachrony">
	<p>
		Three accounts of the historical source of antipassive <i lang="ain-Latn">i-</i> are in active
		competition, and none is settled in the sources consulted directly for this grammar. The dispute
		turns on the direction of the relationship between the antipassive prefix and the fourth-person
		object marker <i lang="ain-Latn">i=</i>, and on what the ultimate etymon of both might be.
	</p>

	<p>
		The traditional view, associated with Kindaichi, Tamura, and Shibatani and reported through
		Nam, derives the antipassive from the bound fourth-person pronoun: the clitic was
		grammaticalized into a derivational voice prefix as its object-demoting function became
		conventionalized <Ref k="nam2021" p="64" /> ‹contested›.
	</p>

	<p>
		Bugaeva reverses the direction. In her 2021 analysis the antipassive <i lang="ain-Latn">i-</i>
		arose from object-incorporation of a generic noun 'thing / place / time', in the same way that
		the body-part prefixes <i lang="ain-Latn">he-</i> 'head' and <i lang="ain-Latn">ho-</i>
		'bottom' arose from incorporated body-part nouns. Once the incorporated generic noun
		grammaticalized into a Patient-demoting voice morpheme, the antipassive form — superficially
		resembling the pronoun — extended to unspecified speech-act participants, and this extension
		gave rise to the person index <i lang="ain-Latn">i=</i>. The antipassive thus preceded the pronoun
		<Ref k="bugaevakobayashi2022" p="§4.2.3" />; <Ref k="bugaeva2021antip" p="235–239" />
		‹contested›.
	</p>

	<p>
		Nam's 2021 reconstruction agrees with Bugaeva that the antipassive is older than the pronoun
		but proposes a different etymon. Drawing on the parallel between the antipassive prefix, the
		clause-final nominalizer <i lang="ain-Latn">-i</i> (&lt; *<i lang="ain-Latn">ihi</i>), and
		the possessed suffix <i lang="ain-Latn">-hV</i>/<i lang="ain-Latn">-VhV</i>, he reconstructs
		the source as Proto-Ainu *<i lang="ain-Latn">hi</i> / *<i lang="ain-Latn">ihi</i> 'thing,
		place, time'. The initial consonant was lost through the accumulated phonological effect of a
		long incorporation history: incorporated noun-stems that are word-initial rarely follow a
		vowel, which would have preserved the h, and word-initial *<i lang="ain-Latn">h</i> was
		subsequently lost in that position. Cross-linguistic parallels include Winnebago
		<i lang="ain-Latn">wa-</i> and Bantawa <i lang="ain-Latn">kha</i>, both generic-noun-origin
		antipassive markers <Ref k="nam2021" p="65–74" /> ‹contested›.
	</p>

	<p>
		A single fossilized form bears directly on all three positions. The transitive verb
		<A w="ikka" gl="steal, take by stealth" /> has been analyzed as
		<i lang="ain-Latn">i-kV-ka</i> (ANTIP-steal-CAUS), a frozen antipassive re-transitivized by
		the direct causative suffix <i lang="ain-Latn">-ka</i>, synchronically opaque but historically
		preserving the derivational layer. This analysis is attributed to Bugaeva (2010) by nukopoli in
		the aynu-corpora Discord community (nukopoli, aynu-corpora Discord 2026-05-19) <Ref
			k="aynucorporadiscord"
		/>; <Ref k="bugaeva2010" />. Since Bugaeva (2010) is not consulted directly for this grammar, and
		since the competing segmentation <i lang="ain-Latn">ik-ka</i> vs.
		<i lang="ain-Latn">i-kV-ka</i> cannot be decided from the surface form alone, the fossil
		analysis is graded ‹contested›. Vovin's competing reconstruction of Proto-Ainu *<i
			lang="ain-Latn">ihka</i
		> for the same root implies no antipassive layer (reported via the same Discord discussion).
		If the Bugaeva/community segmentation is correct, <i lang="ain-Latn">ikka</i> parallels the
		lexicalized antipassives <i lang="ain-Latn">inkar</i> and <i lang="ain-Latn">ipe</i> at a
		deeper historical stratum where the causative has since merged with the root ‹speculative›.
	</p>

	<p>
		The width of the antipassive's semantic scope — extending to non-human objects and to ritual
		'thing/place' readings (<i lang="ain-Latn">i-omante</i>, <i lang="ain-Latn">i-mak</i>
		'behind') — fits the generic-noun hypothesis better than the pronoun-first account, since a
		grammaticalized human pronoun would be expected to bias the antipassive toward human Patients
		rather than generating the observed range <Ref k="nam2021" p="§4.1" /> ‹speculative›. The
		residual-distribution evidence and Nam's phonological argument converge on this conclusion.
	</p>
</S>

<S t="Relation to the middle ci- and the A/P split in arity-decreasing voices" id="ci-relation">
	<p>
		The middle prefix <i lang="ain-Latn">ci-</i>, treated in full in
		<Xr ch="middle-anticausative-passive" />, likewise reduces arity by one but from the affected
		side: it presents an event as experienced by the Patient rather than suppressing the Patient
		from the frame. The paired minimal set in Nakagawa is:
		<i lang="ain-Latn">a=cari</i> 'I scatter (something)' (transitive, Patient as object, agent
		indefinite) versus <i lang="ain-Latn">ci-cari</i> 'it is scattered' (middle, affected noun as
		sole subject, agent absent) <Ref k="nakagawa2024" p="190–191" />. Both operators are arity −1,
		but <i lang="ain-Latn">i-</i> foregrounds the Agent as S while leaving the Patient unindexed,
		while <i lang="ain-Latn">ci-</i> foregrounds the Patient as S while leaving the Agent
		unindexed. The two are therefore the A-perspective and P-perspective members of a single arity
		layer, and the Handbook glosses the latter object-resultative (<span class="sc">RES</span>)
		where this chapter's analysis uses <span class="sc">ANTIP</span>
		<Ref k="bugaevakobayashi2022" p="§4.2.4" />.
	</p>

	<p>
		A community-proposed analysis identifies a productive series of middle-voice derivatives in
		which <i lang="ain-Latn">ci-</i> takes a transitive or causative base and produces an
		intransitive middle/anticausative: <i lang="ain-Latn">cikarkarpe</i> 'made thing',
		<i lang="ain-Latn">copirasa</i> 'spread (intr)', <i lang="ain-Latn">ceosmare</i> 'rush forward'
		(nukopoli, aynu-corpora Discord 2023-12-08) <Ref k="aynucorporadiscord" />. This extends the
		picture in <Ref k="bugaevakobayashi2022" p="§4.2.4" /> and is graded ‹contested› pending
		systematic corpus verification. The <i lang="ain-Latn">ci-</i>/<i lang="ain-Latn">i-</i> split
		documented here aligns with the reflexive split treated in <Xr ch="reflexive-yay" /> and
		<Xr ch="reflexive-possessive-si" />: multiple arity-decreasing operations target different
		argument roles, and the arity calculus in <Xr ch="valency-voice-overview" /> provides the
		unifying framework.
	</p>
</S>
