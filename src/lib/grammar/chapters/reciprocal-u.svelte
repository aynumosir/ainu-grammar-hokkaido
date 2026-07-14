<!-- src/lib/grammar/chapters/reciprocal-u.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The prefix u- and its arity effect" id="overview">
	<p>
		The prefix <A w="u-" gl="reciprocal" /> is a valency-decreasing derivational morpheme with
		arity −1: it fills the object slot of a transitive verb with a mutual or collective
		participant, detransitivizing the verb <Ref k="nakagawa2024" p="187–188" />;
		<Ref k="bugaevakobayashi2022" p="§4.2.1" />. The derived verb always takes a plural or
		collective subject — only two or more participants can stand in a mutual relation. The
		person-marking diagnostic (the operative test of derived transitivity set out in
		<Xr ch="valency-voice-overview" />) confirms the intransitivization: a verb that takes the
		prefixal A-indexes <i lang="ain-Latn">a=</i> or <i lang="ain-Latn">ci=</i> shifts to the
		suffixal S-indexes <i lang="ain-Latn">=an</i> or <i lang="ain-Latn">=as</i> after
		<i lang="ain-Latn">u-</i> <Ref k="bugaevakobayashi2022" p="§4.2.1" />;
		<Ref k="sato2008" p="232–233" />.
	</p>

	<p>
		The slot <i lang="ain-Latn">u-</i> occupies is the same nominal/applicative position as the
		<Xr ch="reflexive-yay">reflexive prefix</Xr> <A w="yay-" gl="REFL" />,
		<A w="si-" gl="AUTOC/ANTIC; REFL.POSS" />, and the
		<Xr ch="antipassive-detransitive-i">antipassive</Xr> <A w="i-" gl="antipassive" />; these
		prefixes all decrease or rearrange valency, but their semantic domains differ —
		self-directed action, verbal autocausative/anticausative or reflexive possession, object defocusing, and mutual participation, respectively. The prefix
		is highly productive: it attaches to base transitive verbs, to applicative-prefixed stems,
		and to causativized forms, with the arity calculus predicting the transitivity of each output
		(see <Xr ch="valency-voice-overview" s="inventory" />). A further complication is that
		<i lang="ain-Latn">u-</i> covers not only canonical bilateral reciprocal meaning ('each
		other') but also joint or associative participation ('together'), and the two readings are not
		always distinguishable without context.
	</p>
</S>

<S t="The canonical reciprocal" id="canonical-reciprocal">
	<p>
		In its canonical use, <i lang="ain-Latn">u-</i> expresses mutual action: each participant in
		the plural subject simultaneously acts on and is acted on by the others. The paradigm pair
		<A w="koyki" gl="fight, attack sb" /> (transitive) →
		<A w="u-koyki" gl="fight each other" /> (intransitive), and
		<A w="siru" gl="rub sth" /> → <A w="u-siru" gl="rub each other" />, illustrates the
		productive base pattern <Ref k="nakagawa2024" p="187–188" />.
	</p>

	<Ex
		m="nea nispa utar u-koyki kor oka sir-i a=nukar"
		g="DEM chief ASS RECP-fight CONJ exist.PL appearance-POSS 4.A=see"
		tr="I saw the chiefs fighting each other."
		cite="bugaevakobayashi2022:§4.2.1"
		dial="SAR"
		place="Nakagawa corpus K8010281UP.168"
		note="Bugaeva & Kobayashi 2022 ex. 11a. u-koyki is intransitive and takes no A-prefix; the clause sir-i a=nukar ('the appearance of which was seen') frames the event as a witnessed scene."
	/>

	<p>
		<i lang="ain-Latn">u-</i> also operates on ditransitive (three-argument) bases. When the
		Addressee or Recipient of a ditransitive is the argument filled by the mutual relation, the
		construction is termed indirect reciprocal <Ref k="bugaevakobayashi2022" p="§4.2.1" />. The
		epenthetic glide <i lang="ain-Latn">w</i> surfaces between <i lang="ain-Latn">u-</i> and a
		following vowel-initial prefix:
	</p>

	<Ex
		m="u-w-e-pakasnu"
		g="RECP-EP-APPL-teach"
		tr="teach each other"
		cite="tamura1996:808"
		dial="SAR"
		note="Indirect reciprocal: the Addressee of e-pakasnu 'teach sb sth' is reciprocalized; the Theme content remains as the surviving object. The epenthetic glide w surfaces between u- and the vowel-initial applicative e-."
	/>

	<p>
		The learner grammar of <Ref k="ijas2023" /> (Lesson 9-10) also lists
		<A w="unukar" gl="meet each other" /> (from <A w="nukar" gl="see sb" />) as a standard
		reciprocal, and gives the pair
		<A w="u-hekote" gl="be a married couple (singular)" /> /
		<A w="u-hekotpa" gl="be a married couple (plural suppletive)" />; both are confirmed by the
		primary sources ‹consensus› <Ref k="nakagawa2024" p="187–188" />.
	</p>
</S>

<S t="Joint-participation and collective readings" id="collective-readings">
	<p>
		Several forms with <i lang="ain-Latn">u-</i> do not yield a strictly bilateral 'each other'
		reading. Here <i lang="ain-Latn">u-</i> signals joint involvement or a two-party social
		relation without requiring symmetric action between every pair of participants
		<Ref k="nakagawa2024" p="187–188" />.
	</p>

	<p>
		The clearest instance is <A w="u-tures-kor" gl="be siblings" />, which incorporates the noun
		<A w="tures" gl="sibling of the same sex" /> and the verb <A w="kor" gl="have" />. The
		surface subject may be syntactically singular — a young man described in terms of having a
		sister — yet the verb carries <i lang="ain-Latn">u-</i> because the sibling relation
		inherently involves two parties:
	</p>

	<Ex
		m="Iskar emko ta u-tures-kor okkaypo okay pe"
		g="Ishikari upper LOC RECP-sibling-have young.man exist.PL NMLZ"
		tr="A young man with a sister, up the Ishikari River."
		cite="nakagawa2024:187"
		dial="SAR"
		note="Nakagawa ex. 164. The singular okkaypo 'young man' is the surface subject, yet u-tures-kor carries u- because having a sibling is an inherently two-party relation. The plural existential okay reflects the broader story context."
	/>

	<p>
		Similarly, <A w="u-mina-re" gl="laugh together" /> does not mean 'make each other laugh' but
		'all laugh together' — a sociative reading arising from the arity calculus:
		<i lang="ain-Latn">u-</i> (−1) prefixed to the already-causativized intransitive
		<i lang="ain-Latn">mina-re</i> (arity 2) yields net arity 1 (intransitive), encoding
		collective action rather than imposing a new causer slot <Ref k="nakagawa2024" p="188" />.
		This <i lang="ain-Latn">u-</i> + causative-on-intransitive path to a sociative reading is
		treated further in <Xr ch="reciprocal-u" s="sociative" /> below.
	</p>
</S>

<S t="Semantic types" id="semantic-types">
	<p>
		Bugaeva and Kobayashi identify five constructional types for <i lang="ain-Latn">u-</i>
		reciprocals, organized by the nature of the mutual relation and the morphosyntactic base
		<Ref k="bugaevakobayashi2022" p="§4.2.1" />:
	</p>

	<table>
		<thead>
			<tr>
				<th>type</th>
				<th>base</th>
				<th>example</th>
				<th>translation</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>canonical (subject-oriented)</td>
				<td>2-arg transitive</td>
				<td><i lang="ain-Latn">u-tumam-an</i></td>
				<td>'we held each other'</td>
			</tr>
			<tr>
				<td>indirect (Recipient reciprocalized)</td>
				<td>3-arg ditransitive</td>
				<td><i lang="ain-Latn">u-w-e-pakasnu</i></td>
				<td>'teach each other'</td>
			</tr>
			<tr>
				<td>object-oriented (causativized)</td>
				<td>intransitive reciprocal + <i lang="ain-Latn">-re</i></td>
				<td><i lang="ain-Latn">u-koyki-re</i></td>
				<td>'make them fight each other'</td>
			</tr>
			<tr>
				<td>joining-type</td>
				<td>2-arg transitive with applicative</td>
				<td><i lang="ain-Latn">u-ko-sina</i></td>
				<td>'tie (bow and arrow) together'</td>
			</tr>
			<tr>
				<td>quasi-possessive</td>
				<td><i lang="ain-Latn">u-</i> + [possessed noun + verb]</td>
				<td><i lang="ain-Latn">u-oruspe-nu</i></td>
				<td>"hear each other's stories"</td>
			</tr>
		</tbody>
	</table>

	<p>
		The quasi-possessive type distributes each participant's possessed noun across the group:
		<i lang="ain-Latn">u-tek-kisma</i> 'shake hands' (lit. 'shake each other's hand') and
		<i lang="ain-Latn">u-oruspe-nu</i> are further instances
		<Ref k="bugaevakobayashi2022" p="§4.2.1" />. For the parallel reflexive construction in
		which a possessed noun is incorporated with <i lang="ain-Latn">yay-</i> or
		<i lang="ain-Latn">si-</i>, see <Xr ch="reflexive-possessive-si" />.
	</p>

	<Ex
		m="u-oruspe-nu=an kor oka=an ayne"
		g="RECP-story-hear=4.S CONJ exist.PL=4.S CONJ"
		tr="listening to each other's stories, living on"
		cite="bugaevakobayashi2022:§4.2.1"
		dial="SAR"
		place="Nakagawa corpus K8010291UP.517"
		note="Excerpt from Bugaeva & Kobayashi 2022 ex. 13. u-oruspe-nu: oruspe 'story' is the possessed noun distributed across the participants; nu 'hear' is detransitivized by u-, taking the 4th-person S suffix =an."
	/>
</S>

<S t="The causativized reciprocal" id="causativized">
	<p>
		When the productive causative suffix <i lang="ain-Latn">-re</i> is added to an already-reciprocalized
		intransitive, arity rises by one, and the construction means 'cause sb to do X to each other'.
		The chain is: base transitive (arity 2) → add <i lang="ain-Latn">u-</i> (−1) → intransitive
		(1) → add <i lang="ain-Latn">-re</i> (+1) → transitive (2), with a new causer as subject:
	</p>

	<Ex
		m="u-koyki-re"
		g="RECP-fight-CAUS"
		tr="make them fight each other"
		constructed
		note="Object-oriented causativized reciprocal. Arity: koyki (2) + u- (−1) = 1 (vi); then u-koyki (1) + -re (+1) = 2 (vt). After Bugaeva & Kobayashi 2022 §4.2.1."
	/>

	<p>
		The contrasting sociative reading — 'all do X together' — arises when <i lang="ain-Latn">u-</i>
		is prefixed to a form already causativized from an intransitive base, so that the net arity is
		1 − 1 = 0:
		<A w="u-horip-pa-re" gl="all dance/exorcise together" />,
		<A w="u-kira-re" gl="all escape together" />
		<Ref k="bugaevakobayashi2022" p="§4.3.2" />. The arity of the base verb and the order of
		operations determine which reading obtains; surface form alone is insufficient
		<Ref k="nakagawa2024" p="188" /> ‹corpus-suggested›.
	</p>
</S>

<S t="Lexicalized forms and extension to non-verbal bases" id="lexicalized">
	<p>
		A range of forms with <i lang="ain-Latn">u-</i> have undergone semantic specialization to
		the point where the mutual motivation is conventional. Kin- and social-relation verbs such as
		<A w="u-tures-kor" gl="be siblings" /> and <A w="u-hekote" gl="be a married couple" />
		encode relational membership. <A w="unukar" gl="meet each other" /> is the standard word for
		'meet' in Saru <Ref k="nakagawa2024" p="187–188" />.
	</p>

	<p>
		The prefix extends beyond the verb paradigm to locative nouns, postpositions, and adverbs:
		<A w="u-sam" gl="near each other" />, <A w="u-tura" gl="together" />,
		<A w="u-neno" gl="similar to each other" />
		<Ref k="bugaevakobayashi2022" p="§4.2.1" />.
	</p>

	<p>
		Two further forms show opacity. <A w="uwanpare" gl="gaze intently" /> decomposes as
		<i lang="ain-Latn">u-anpa-re</i> (RECP-carry-CAUS), but the semantic path from 'cause each
		other to carry' to 'observe intently' is unresolved in the sources ‹contested›
		<Ref k="aynucorporadiscord" /> (nukopoli, aynu-corpora Discord, 2024).
		<A w="uwatte" gl="multiply, breed (of animals)" /> has been analysed as
		<i lang="ain-Latn">u-w-at-te</i> (RECP-EP-attach-CAUS); the semantic path 'cause each other
		to cling/pair' → 'breed' is plausible for a verb restricted to animal populations, and its
		complement <A w="uwaste" gl="increase (of humans, plants)" /> is semantically differentiated
		<Ref k="aynucorporadiscord" /> (gengojiro, aynu-corpora Discord, 2024) ‹corpus-suggested›.
	</p>
</S>

<S t="The sociative uko- and uwe-" id="sociative">
	<p>
		The prefixes <A w="uko-" gl="together, mutually" /> and <A w="uwe-" gl="together, mutually" />
		are synchronically unitary markers but decompose as
		<i lang="ain-Latn">u-</i> + <Xr ch="applicative-ko"><i lang="ain-Latn">ko-</i></Xr> and
		<i lang="ain-Latn">u-</i> + <Xr ch="applicative-e"><i lang="ain-Latn">e-</i></Xr>
		respectively <Ref k="nakagawa2024" p="208, 211–212" />;
		<Ref k="bugaevakobayashi2022" p="§4.3.2" />. Because the applicative contributes arity +1 and
		<i lang="ain-Latn">u-</i> contributes −1, the net arity is zero: the sociative is
		valency-neutral. The minimal pair <A w="u-kor" gl="marry (lit. have each other)" /> (arity −1,
		intransitive) versus <A w="u-ko-kor" gl="have together" /> (arity 0, transitive) makes this
		decisive <Ref k="nakagawa2024" p="208" />:
	</p>

	<Ex
		m="matkaci a=maci turano a=u-ko-kor hine oka=an wa"
		g="girl 4.POSS=wife together 4.A=RECP-APPL-have CONJ exist.PL=4.S CONJ"
		tr="Together with my wife, I had a daughter, and we went on living."
		cite="nakagawa2024:208"
		dial="SAR"
		note="Nakagawa ex. 218. a=u-ko-kor is transitive (arity 0 preserves the base kor's transitivity): the 4.A prefix a= (narrative first person) on the verb confirms this. The plain reciprocal u-kor 'marry each other' is intransitive and takes =an."
	/>

	<Ex
		m="kamuy-utar opitta uko-yay-kopuntek"
		g="spirit-ASS all RECP.APPL-REFL-rejoice"
		tr="All the spirits rejoiced together."
		cite="bugaevakobayashi2022:§4.3.2"
		dial="HK"
		place="Nakagawa corpus OI990423KY.066"
		note="Bugaeva & Kobayashi 2022 ex. 34. uko- (= u- + ko-) combines with the reflexive yay-; the whole form is intransitive (arity: uko- = 0, then yay- = −1)."
	/>

	<p>
		<i lang="ain-Latn">uko-</i> is commoner than <i lang="ain-Latn">uwe-</i> in Saru texts,
		reflecting the higher productivity of <i lang="ain-Latn">ko-</i> as an applicative
		<Ref k="bugaeva2006" p="188" />. The two are partially interchangeable in derivationally
		transparent forms (<i lang="ain-Latn">uko-yaykopuntek</i> ~
		<i lang="ain-Latn">uwe-yaykopuntek</i> 'rejoice together'), but
		<i lang="ain-Latn">ko-</i>'s comitative and goal-directed semantics give it the advantage
		where joint orientation toward shared participants is foregrounded
		<Ref k="bugaevakobayashi2022" p="§4.3.2" />. For the full applicative semantics of
		<i lang="ain-Latn">ko-</i> and <i lang="ain-Latn">e-</i>, see
		<Xr ch="applicative-system-overview" />; for their stacking with other prefixes,
		<Xr ch="applicative-stacking-relativization-feeding" />.
	</p>
</S>
