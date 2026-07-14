<!-- src/lib/grammar/chapters/reflexive-yay.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The reflexive yay- in the valency system" id="overview">
	<p>
		The prefix <A w="yay-" gl="reflexive" /> fills the object position of a transitive verb with
		a participant coreferential with the subject, reducing arity by one and converting the base
		transitive to an intransitive <Ref k="nakagawa2024" p="188" />; <Ref
			k="bugaevakobayashi2022"
			p="§4.2.2"
		/>. Placed in the first-person plural, a verb bearing <i lang="ain-Latn">yay-</i> takes the
		intransitive S-suffixes <i lang="ain-Latn">=as</i> (exclusive) or <i lang="ain-Latn">=an</i>
		(fourth-person) rather than the transitive A-prefixes — the person-affix test of the
		derivation described in <Xr ch="valency-voice-overview" />
		<Ref k="sato2008" p="96" />; <Ref k="nakagawa2024" p="137" />. A sister prefix
		<A w="si-" gl="indirect reflexive" /> occupies the same template slot and carries the same
		arity value; its own distribution and the two prefixes' contrast are treated below
		and in <Xr ch="reflexive-possessive-si" />.
	</p>
	<p>
		Nakagawa lists <i lang="ain-Latn">yay-</i> among the 名詞的接頭辞 (nominal prefixes) of the
		verb-derivation chapter alongside <i lang="ain-Latn">si-</i>, the reciprocal
		<A w="u-" gl="reciprocal" />, the antipassive <A w="i-" gl="antipassive" />, and the
		lexical body-region prefixes <A w="he-" gl="head of" />/<A w="ho-" gl="bottom of" />, all
		of them arity −1 and all filling the object slot from the inside of the verb word
		<Ref k="nakagawa2024" p="185–192" />. <Xr ch="antipassive-detransitive-i" /> and
		<Xr ch="reciprocal-u" /> develop the parallel operators. Ijäs's learner lessons (L3 and L9)
		do not cover the reflexive prefixes, as she addresses them in later material
		<Ref k="ijas2023" />.
	</p>
</S>

<S t="Morphological range and the possessive yay-" id="morphological-range">
	<p>
		<i lang="ain-Latn">yay-</i> is nearly unrestricted in base selection: it attaches to
		transitives and ditransitives of any semantic class, and to derived transitives
		(causativized or applicativized stems) <Ref k="nakagawa2024" p="188" />. The prefix also
		attaches to nominals, where arity is unchanged because a noun carries no object slot to
		absorb — the reading is then possessive, 'one's own':
		<A w="yay-kotan" gl="one's own village" /> (<i lang="ain-Latn">yay-</i> +
		<A w="kotan" gl="village" />) is a representative form
		<Ref k="nakagawa2024" p="188" />.
	</p>
	<p>
		A productive subtype is the <em>quasi-possessive reflexive</em>
		<Ref k="bugaevakobayashi2022" p="§4.2.2"
		/>: where an incorporated body-part noun is interpreted as belonging to the subject,
		<i lang="ain-Latn">yay-</i> supplies the possessor rather than filling the object slot
		directly. In <A w="yay-par-oyki" gl="feed oneself" /> (literally 'do about one's own
		mouth'), <A w="par" gl="mouth" /> is incorporated as the object of
		<A w="oyki" gl="do about, handle" />, while <i lang="ain-Latn">yay-</i> identifies the
		subject as the possessor of that mouth. The arity is still reduced by one because the
		incorporated noun absorbs the object slot; the reflexive element determines whose body
		part is implicated. This intersects with the object-incorporation system treated in
		<Xr ch="noun-incorporation-object" />.
	</p>
	<p>
		The accent of <i lang="ain-Latn">yay-</i> is stable: the prefix carries primary stress
		as <i lang="ain-Latn">yáy-</i> regardless of the following segment, unless lexicalization
		has displaced it <Ref k="nakagawa2024" p="188" />. Forms such as
		<i lang="ain-Latn">yáyesiru</i> confirm that the accent falls on
		<i lang="ain-Latn">yáy</i> even before a vowel-initial stem; this accent pattern is
		corroborated by community corpus observation (nukopoli, aynu-corpora Discord 2024,
		<Ref k="aynucorporadiscord" />) ‹corpus-confirmed›.
	</p>
	<p>
		<i lang="ain-Latn">si-</i> is more restricted than <i lang="ain-Latn">yay-</i> in base
		selection, and when both co-occur the ordering is fixed:
		<i lang="ain-Latn">yay-si-turi-re</i> 'lay oneself down stretching' places
		<i lang="ain-Latn">yay-</i> outside <i lang="ain-Latn">si-</i>, while the reverse
		<i lang="ain-Latn">*si-yay-</i> is unattested <Ref k="nakagawa2024" p="189" />.
		Nakagawa infers that <i lang="ain-Latn">si-</i> sits closer to the root, behaving more
		like a forming element than an independent prefix.
	</p>
</S>

<S t="Self-affecting verb classes: grooming, emotion, and self-transformation" id="verb-classes">
	<p>
		Three semantic fields attract <i lang="ain-Latn">yay-</i> most productively. Body-treatment
		and grooming verbs form the first: <A w="yay-kara" gl="treat oneself, attend to oneself" />
		builds on <A w="kara" gl="treat, handle" />, the same verb that underlies
		<A w="cise-kar" gl="build a house" /> and related compounds
		(see <Xr ch="denominal-deverbal-verb-derivation" />). Community corpus work independently
		documents <i lang="ain-Latn">-kar</i> as productive for 'handle/treat' operations —
		<i lang="ain-Latn">nimawe-kar</i> (treat with a bark compress),
		<i lang="ain-Latn">osoro-kar</i> — making <i lang="ain-Latn">yay-kara</i> 'treat
		oneself' the expected reflexive of that class (nukopoli, aynu-corpora Discord 2024,
		<Ref k="aynucorporadiscord" />) ‹corpus-suggested›. A rolling-about verb in the Saru
		narrative corpus shows causative stacking on a grooming-motion base:
	</p>

	<Ex
		ain="asinuma ka nusa sam ta yaykarkarsere=an kor paraparak"
		m="asinuma ka nusa sam ta yay-karkarse-re=an kor paraparak"
		g="1SG.EMPH even altar beside LOC REFL-roll-CAUS=4.S CONJ wail"
		tr="I too rolled about by the altar, wailing."
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, uwepeker 民話11; ILCAA materials aa-irc/013#377"
		note="yay-karkarse-re 'roll oneself / roll about': yay- fills the object slot of karkarse-re 'cause to roll (something)'; the fourth-person S suffix =an on the derived intransitive confirms the detransitivization."
	/>

	<p>
		A community decomposition of <i lang="ain-Latn">yayhonokka</i> 'educate, discipline' as
		<i lang="ain-Latn">yay-ho-nok-ka</i> (REFL-bottom.body.region-CAUS) would show
		<i lang="ain-Latn">yay-</i> stacking over the body-region prefix
		<i lang="ain-Latn">ho-</i> and a causative suffix, with cross-dialectal support from Saru
		and Shizunai forms
		(<i lang="ain-Latn">ku=yayhonokka</i>; <i lang="ain-Latn">ci=honokka</i>;
		<i lang="ain-Latn">taan hanokka</i>)
		(nukopoli, aynu-corpora Discord 2026, <Ref k="aynucorporadiscord" />) ‹contested›.
		The decomposition has not been verified against the analytic literature.
	</p>
	<p>
		Emotion and mental-state verbs make up a second field. Ainu transitive verbs of feeling
		take a stimulus as their object; <i lang="ain-Latn">yay-</i> reflexivizes that position,
		yielding an intransitive of self-directed affect. The minimal pair
		<i lang="ain-Latn">yay-rayke</i> 'commit suicide' vs
		<i lang="ain-Latn">si-rayke</i> 'be destroyed by misfortune', both from
		<A w="rayke" gl="kill" />, shows how the same base divides between the two prefixes; the
		opposition is examined in the yay-/si- section below
		<Ref k="nakagawa2024" p="188–189" />.
	</p>
	<p>
		Self-transformation verbs form the third class. With <A w="kar" gl="make, do" />, the
		prefix yields <i lang="ain-Latn">yay-kar</i> 'transform oneself, take on a different form':
	</p>

	<Ex
		m="aynu ne yay-kar wa kamuy ko-sunke wa an ru-we ne"
		g="human COP REFL-make CONJ deity APPL-lie CONJ exist track-POSS COP"
		tr="He had taken on human form and was deceiving the deity."
		cite="bugaevakobayashi2022:§4.1.1"
		dial="SAR"
		place="Nakagawa corpus K8007292UP; Bugaeva &amp; Kobayashi ex. 4b"
		note="yay-kar 'transform oneself': yay- fills the object slot of kar 'make', turning the transitive 'make X into Y' into an intransitive of self-directed change. an in an ruwe ne is the existential/copular verb 'be (in that state)', not a person suffix."
	/>
</S>

<S t="The yay-/si- distinction: competing analyses" id="yay-si-distinction">
	<p>
		The functional boundary between <i lang="ain-Latn">yay-</i> and
		<i lang="ain-Latn">si-</i> has produced several accounts that remain in tension
		<Ref k="bugaevakobayashi2022" p="§4.2.2" />; <Ref k="nakagawa2024" p="187–189" />;
		<Ref k="sato2007" />. The four most developed positions are set out in the table below;
		the sources for the first two and third are cited second-hand through the works that
		survey them.
	</p>

	<table>
		<thead>
			<tr>
				<th>analysis</th>
				<th><i lang="ain-Latn">yay-</i></th>
				<th><i lang="ain-Latn">si-</i></th>
				<th>source(s)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>intentional vs unintentional</td>
				<td>intentional, volitional action on self</td>
				<td>unintentional; self undergoes without volition</td>
				<td>Kindaichi (1931), Tamura (1988a, 1996: 622) — via
					<Ref k="nakagawa2024" p="188" />; <Ref k="sato2007" /></td>
			</tr>
			<tr>
				<td>agentive vs patientive self</td>
				<td>agentive self: subject acts on itself</td>
				<td>patientive self: subject undergoes the action</td>
				<td>Kirikae (1994: 316) — via <Ref k="bugaevakobayashi2022" p="§4.2.2" /></td>
			</tr>
			<tr>
				<td>Theme/Patient restriction</td>
				<td>no restriction on the role of the reflexive participant</td>
				<td>reflexive participant must be Theme or Patient; causee impossible</td>
				<td>Kobayashi (2008: 140) — via <Ref k="bugaevakobayashi2022" p="§4.2.2" /></td>
			</tr>
			<tr>
				<td>direct vs indirect reflexive</td>
				<td>subject acts directly on itself, without mediation</td>
				<td>subject is involved only indirectly: through others, through circumstance, or through social perception</td>
				<td><Ref k="sato2007" />; adopted by <Ref k="nakagawa2024" p="189" />; <Ref
						k="bugaevakobayashi2022"
						p="§4.2.2"
					/></td>
			</tr>

			<tr>
				<td>Bugaeva diachronic split</td>
				<td>REFL proper retained as the main function of <i lang="ain-Latn">yay-</i></td>
				<td>REFL &gt; AUTOC &gt; ANTIC pathway; synchronically chiefly autocausative, with emerging anticausative uses</td>
				<td><Ref k="bugaeva2025" p="§3.1.2, §5" /></td>
			</tr>
		</tbody>
	</table>

	<p>
		For the grammar's glossing practice, Bugaeva's 2025 diachronic formulation is the
		most useful high-level distinction: <i lang="ain-Latn">yay-</i> is REFL proper, while
		verbal <i lang="ain-Latn">si-</i> has shifted along the common path from reflexive to
		autocausative and only secondarily to anticausative. The older direct/indirect
		terminology remains important for explaining individual examples, but it is no
		longer the primary glossing distinction used in the morpheme database
		<Ref k="bugaeva2025" p="§3.1.2" />.
	</p>

	<p>
		Satō's direct/indirect account, developed for Chitose, is adopted by Nakagawa and the
		Handbook as the current best analysis ‹contested›
		<Ref k="sato2007" />; <Ref k="nakagawa2024" p="189" />; <Ref
			k="bugaevakobayashi2022"
			p="§4.2.2"
		/>. It holds that <i lang="ain-Latn">yay-</i> marks an action the subject performs
		directly on itself, without requiring any mediating agent or social condition.
		<i lang="ain-Latn">si-</i> marks a situation where the subject's involvement is indirect:
		the outcome is achieved through another participant's action, through circumstances
		beyond the subject's control, or through a state that holds only because others
		perceive it as holding.
	</p>
	<p>
		The canonical Chitose minimal pair is <i lang="ain-Latn">yay-pusu</i> 'pop up by
		swimming (volitionally)' vs <i lang="ain-Latn">si-pusu</i> 'float of itself
		(spontaneously)', both from <A w="pusu" gl="float something up" />
		<Ref k="sato2007" />. The <i lang="ain-Latn">si-</i> form applies to a physical property
		of spruce:
	</p>

	<Ex
		m="sunku anakne peka ta si-pusu wa mom pe ne"
		g="spruce TOP surface LOC ANTIC-float CONJ drift thing COP"
		tr="Spruce floats on the water and drifts — that is its nature."
		cite="sato2007"
		dial="CHI"
		place="Satō ex. 4; narrator 白沢ナベ, Chitose"
		note="si-pusu 'float of itself': buoyancy is a property of the wood, not a directed self-act. The spruce has no volition, showing that the si-/yay- distinction is not intentional vs unintentional but direct vs indirect involvement. The contrast with yay-pusu 'pop up by swimming' is Satō's primary minimal pair."
	/>

	<p>
		The <i lang="ain-Latn">si-</i> class also covers a productive 'pretend' construction:
		<i lang="ain-Latn">si-mokor-e</i> 'feign sleep',
		<i lang="ain-Latn">si-kamuy-ne-re</i> 'pretend to be a deity',
		<i lang="ain-Latn">si-ranpewtek-ka</i> 'pretend to know nothing'
		<Ref k="nakagawa2024" p="189" />; <Ref k="sato2007" />. In each case the subject's
		performed state depends on how others perceive her — a condition that cannot hold
		without an audience, hence the indirect marking:
	</p>

	<Ex
		m="ku=ko-si-ranpewtek-ka wa ki=an"
		g="1SG.A=APPL-REFL-know-CAUS CONJ do=4.S"
		tr="I was pretending to know nothing about it."
		cite="sato2007"
		dial="CHI"
		place="Satō ex. 6; Chitose"
		note="ko- promotes the object-of-pretence to applied object; si- marks that the unknowing-state depends on others' belief; -ka causativizes the resulting stative. ki=an (do=4.S) marks the ongoing activity as intransitive, confirming the final vi status of the complex."
	/>

	<p>
		From Nakagawa, a parallel emotional pair: <i lang="ain-Latn">yay-rayke</i> 'commit
		suicide' (direct, deliberate self-directed action) vs <i lang="ain-Latn">si-rayke</i>
		'be destroyed, come to ruin (by misfortune)' (the outcome is brought about by external
		forces) <Ref k="nakagawa2024" p="188–189" />. Bugaeva and Kobayashi add
		<i lang="ain-Latn">yay-etaye</i> 'draw oneself out (actively)' vs
		<i lang="ain-Latn">si-etaye</i> 'withdraw, pull oneself back in (in response to
		something)' <Ref k="bugaevakobayashi2022" p="§4.2.2" />. The Shizunai corpus
		supplies an attested instance of <i lang="ain-Latn">si-etaye</i> where the withdrawal
		is triggered by being seen:
	</p>

	<Ex
		m="i=nukar rok pe si-etaye wa isam"
		g="4.O=see PRF thing AUTOC-withdraw CONJ be.absent"
		tr="On seeing me, it withdrew and was gone."
		cite="ilcaa1976"
		dial="SHI"
		place="Oda Suteno, reyep kamuy; ILCAA materials aa-irc/027#108"
		note="si-etaye: withdrawal triggered by the act of being seen — an externally caused, indirect involvement of the subject in its own motion. Its yay- counterpart yay-etaye 'draw oneself out' involves no external trigger."
	/>

	<p>
		Satō himself notes that the direct/indirect analysis has not reached consensus
		(<span lang="ja">定説ではない</span>) <Ref k="sato2007" />; <Ref
			k="nakagawa2024"
			p="189"
		/>. The earlier intentional/unintentional framing (Kindaichi, Tamura) remains in
		pedagogical use ‹contested›. A community reformulation characterizes
		<i lang="ain-Latn">yay-</i> as 'by one's own power' (reflexive) and
		<i lang="ain-Latn">si-</i> as 'happens to / gets through others' (anticausative), with
		<i lang="ain-Latn">yaykaopiwki</i> 'save oneself by one's own action' cited as a
		diagnostic (nukopoli, aynu-corpora Discord 2024, <Ref k="aynucorporadiscord" />)
		‹contested›. This formulation is consistent with Satō's account while aligning the
		<i lang="ain-Latn">si-</i> end with anticausative typology. The hypothesis that the
		two prefixes represent historically distinct voice categories rather than two subtypes
		of reflexive (aomidori_cs_, aynu-corpora Discord 2023, <Ref k="aynucorporadiscord" />)
		‹speculative› — no diachronic evidence bearing on a pre-reflexive function of either
		prefix has been identified in the sources consulted for this grammar. Bugaeva and
		Kobayashi note that no other reported language encodes the distinction between
		dependence-on-others vs absence-of-such-dependence through a pair of reflexive
		prefixes, making the Ainu opposition typologically unusual
		<Ref k="bugaevakobayashi2022" p="§4.2.2" />.
	</p>
	<p>
		The full treatment of <i lang="ain-Latn">si-</i> — including its unaccusative uses,
		its possessive-reflexive function with incorporated body-part nouns
		(<i lang="ain-Latn">si-etu-uyna</i> 'hold one's own nose'), and the pretend-to
		constructions — is in <Xr ch="reflexive-possessive-si" />.
	</p>
</S>

<S t="Stacking with applicatives and the verb-word template" id="ordering-stacking">
	<p>
		<i lang="ain-Latn">yay-</i> combines freely with the applicative prefixes
		<i lang="ain-Latn">e-</i>, <i lang="ain-Latn">ko-</i>, and
		<i lang="ain-Latn">o-</i> (see <Xr ch="applicative-system-overview" />). Since an
		applicative raises arity by one (+1) and <i lang="ain-Latn">yay-</i> lowers it by
		one (−1), their combination on a transitive base preserves the original transitivity
		while shifting which object position holds the reflexive participant. On a base that
		already has an outer applicative-object, <i lang="ain-Latn">yay-</i> fills the inner
		original-object slot with 'self'; the outer applicative slot remains available for an
		external NP.
	</p>
	<p>
		The combination <i lang="ain-Latn">ko-yay-irayke</i> 'be grateful to someone for
		something one has experienced oneself' is attested in the Saru narrative corpus — here
		<i lang="ain-Latn">ko-</i> promotes the deity as the addressee-goal, and
		<i lang="ain-Latn">yay-</i> fills the inner object of
		<A w="irayke" gl="be grateful" /> with the subject:
	</p>

	<Ex
		ain="petkorkamuy kamuy katkemat a=koyayrayke hi a=ye a a=ye a kor"
		m="petkorkamuy kamuy katkemat a=ko-yay-irayke hi a=ye a a=ye a kor"
		g="river.deity deity woman 4.A=APPL-REFL-be.grateful NMLZ 4.A=say PFV 4.A=say PFV CONJ"
		tr="Again and again giving thanks to the river-deity woman, as she was telling it …"
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, uwepeker 民話9; ILCAA materials aa-irc/009#289"
		note="Surface koyayrayke: the phonological sequence yay-irayke surfaces as yayrayke at the morpheme boundary (dialectal and orthographic variants yayirayke ~ yairayke reflect the same junction). ko- = addressee applicative; yay- = reflexive on the inner object slot."
	/>

	<p>
		The derivational chain through <A w="ruska" gl="be angry at" /> demonstrates the
		calculus across further steps: <i lang="ain-Latn">ruska</i> (vt) →
		<i lang="ain-Latn">ko-ruska</i> (vd, 'be angry toward') →
		<i lang="ain-Latn">yay-ko-ruska</i> (vt, 'be angry at oneself') →
		<i lang="ain-Latn">i-ruska</i> (vi, 'be angry', object defocused) — each step
		changes arity by exactly one unit <Ref k="nakagawa2024" p="212" />; <Ref
			k="sato2023b"
			p="40"
		/> ‹consensus›. The antipassive <i lang="ain-Latn">i-</i> in the same chain
		is treated in <Xr ch="antipassive-detransitive-i" />.
	</p>
	<p>
		The verb template places reflexive and applicative prefixes inside the person-index
		layer and outside the root: person-index — reflexive/applicative — root —
		forming-suffix — causative — person-index
		<Ref k="nakagawa2024" p="210–212" />. Two reflexive prefixes and two applicatives can
		co-occur on a single root, as in the showcase word
		<i lang="ain-Latn">a=e-yay-ko-tuyma-si-ram-suy-pa</i> discussed in
		<Xr ch="valency-voice-overview" s="template" />
		<Ref k="shibatani1990" p="73" />; <Ref k="bugaeva2014" />.
		A community-proposed decomposition of
		<i lang="ain-Latn">yaykipniwkes</i> as <i lang="ain-Latn">yay-ki-p-niwkes</i> —
		with <i lang="ain-Latn">ki</i> 'do' as a light verb and
		<i lang="ain-Latn">niwkes</i> as the state predicate (nukopoli, aynu-corpora Discord
		2024, <Ref k="aynucorporadiscord" />) ‹contested› — illustrates the opaque prefix
		stacking that occurs in this zone; the analysis awaits verification against primary
		morphological descriptions. The reciprocal <i lang="ain-Latn">u-</i>, which parallels
		<i lang="ain-Latn">yay-</i> in its arity value while filling both S and O slots
		simultaneously, is in <Xr ch="reciprocal-u" />.
	</p>
</S>
