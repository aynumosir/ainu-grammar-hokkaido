<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Overview" id="overview">
	<p>
		Hokkaido Ainu combines two properties whose joint presence creates genuine analytical tension.
		The finite verb is clause-final without exception, and every phrase type is head-final: modifier
		precedes head, postposition follows noun, subordinate clause precedes main clause
		<Ref k="nakagawa2024" p="363" />; <Ref k="shibatani1990" p="22–24" />. At the same time,
		within the preverbal field the relative order of noun phrases is controlled by information
		structure rather than grammatical function: the same three-argument verb
		<i lang="ain-Latn">epakasnu</i> 'teach' is attested with its arguments in at least four
		different preverbal sequences in natural speech from a single speaker, and no case particle
		indicates which NP is subject and which is object <Ref k="nakagawa2024" p="363–364" />;
		<Ref k="bugaeva2022" />. What fixes grammatical roles is the verb's obligatory person-index
		system: bound argument-marking affixes appear on every finite predicate, and an overt NP is
		structurally optional — an elaboration on a participant already indexed, not a required
		structural position <Ref k="sato2025a" p="359–361" />; <Ref k="bugaeva2012" p="472" />.
	</p>
	<p>
		These properties place Ainu in the cross-linguistic neighbourhood of head-marking languages such
		as Mohawk and Lakhota, whose argument NPs have been analysed as adjuncts to pronominal argument
		positions inside the verb — the Pronominal-Argument Hypothesis (PAH) as reviewed by
		<Ref k="bugaeva2022" />. Whether that analysis extends to Ainu is a question the accessible
		literature addresses but does not settle; the present chapter sets out the evidence, the
		competing positions, and what Ainu unambiguously does and does not exhibit. The verb-finality
		rule and the head-final NP structure are treated in <Xr ch="constituent-order-head-final" />;
		the person-affix paradigm, alignment typology, and ditransitive indexing cap belong to
		<Xr ch="person-marking-architecture" /> and its sibling chapters.
	</p>
</S>

<S t="Obligatory head-marking and the appositional noun phrase" id="head-marking">
	<p>
		A finite verb in Ainu marks its arguments by means of bound person prefixes and, for some
		persons, suffixes; these affixes are obligatory on every predicate. Satō, following the
		head-marking framework of <Ref k="nichols1986" />, describes the verb as the clausal head that
		bears the central information about which participants fill its valence frame
		<Ref k="sato2025a" p="361" />. A finite verb alone, with no overt NPs at all, is a complete
		and grammatical clause:
	</p>

	<Ex
		m="ku=inkar"
		g="1SG.S=look.around"
		tr="I look around."
		cite="sato2025a:355"
		dial="HK"
		note="Satō ex. 1 (after Tamura 1988: 72). A finite verb carrying only the first-singular subject prefix ku=. No overt subject NP is required; the clause is grammatically complete. The prefix ku= covers both S and A for 1SG; see the person-marking chapters."
	/>

	<p>
		When an overt NP does appear, its relationship to the verb is appositional rather than
		structurally necessary. In Role and Reference Grammar terms, Satō places the person prefix (PRO)
		inside the CORE as the actual argument, with any co-occurring NP outside the CORE as an
		optional, non-obligatory adjunct <Ref k="sato2025a" p="363–365" />. This is the
		Lakhota-type structure: "the same logical structure gives rise to morphologically different
		structures" depending on how many overt NPs are supplied
		<Ref k="sato2025a" p="365" />. The overt object NP in the following example holds precisely
		that adjunct status:
	</p>

	<Ex
		m="cep a=koyki"
		g="fish 4.A=catch"
		tr="We catch fish."
		cite="sato2025a:363"
		dial="HK"
		note="The fourth-person agent prefix a= is the grammatical subject argument; the NP cep 'fish' lexically specifies the zero-indexed object. The clause is complete without cep; the overt NP narrows what is caught but does not fill a structural position."
	/>

	<p>
		Personal pronouns, being informationally redundant with the person index, are used only for
		emphasis or contrast and are rarer in Ainu than their Japanese counterparts
		<Ref k="bugaeva2012" p="472" />; <Ref k="sato2025a" p="360" />. The independent pronoun
		<i lang="ain-Latn">kani</i> 'I' can co-occur with <i lang="ain-Latn">ku=mina</i> 'I laughed',
		but without <i lang="ain-Latn">kani</i> the clause still indexes a specific first-person
		singular subject; the pronoun is emphatic, not anaphoric <Ref k="bugaeva2012" p="472" />.
	</p>
	<p>
		The possessor NP stands in the same appositional relationship to the possessed noun: the
		possessee is obligatorily head-marked by an agreement prefix, so the possessor NP is normally
		omitted and expressed only when referentially new or contrastive
		<Ref k="bugaeva2012" p="486" />. The community observation that the bare verb form with no
		person affix is the third-person form and the citation form of the verb — with the zero-marking
		implicitly conceding a zero third-person affix — is consistent with Satō's formal argument
		that such a zero is required by the two-affix cap on finite verbs
		<Ref k="sato2025a" p="369" /> (nukopoli, aynu-corpora Discord, 2024-12-25, asserted;
		<Ref k="aynucorporadiscord" />) ‹contested›. This debate is developed in
		<Xr ch="person-marking-architecture" s="sao-paradigm" />.
	</p>
</S>

<S t="The free ordering of preverbal noun phrases" id="free-order">
	<p>
		With intransitive predicates the single preverbal NP is unambiguously the S argument. With
		transitives, the evidence is divided, and the ordering question is the analytical crux of this
		chapter.
	</p>
	<p>
		Shibatani uses the following minimal pair to argue that linear position determines grammatical
		function:
	</p>

	<Ex
		id="shibatani-aov"
		m="kamuy aynu rayke"
		g="bear human kill"
		tr="The bear killed the man."
		cite="shibatani1990:22"
		dial="HK"
		note="Shibatani ex. 23a. Initial NP interpreted as agent; the only role indicator is linear position, since neither NP carries a case suffix and the verb rayke is zero-marked for third-person arguments."
	/>

	<Ex
		id="shibatani-oav"
		m="aynu kamuy rayke"
		g="human bear kill"
		tr="The man killed the bear."
		cite="shibatani1990:22"
		dial="HK"
		note="Shibatani ex. 23b. With order reversed, agent-patient assignment reverses. Shibatani (1990: 22) concludes that word order plays as important a role as in English in determining grammatical function."
	/>

	<p>
		Both NPs are third person, zero-marked; role assignment differs only by position. Shibatani
		concludes that word order "plays as important a role as in English in determining the
		grammatical functions of certain nouns" <Ref k="shibatani1990" p="22" />, allowing object-first
		order only when context or semantics rules out an incorrect reading. Satō's introductory
		description is comparably cautious: the role of an NP is "shown by word order or context"
		<Ref k="sato2008" p="2" />. The pedagogical grammar of <Ref k="ijas2023" /> likewise describes
		Ainu as SOV and explains apparent flexibility by appeal to the zero third-person marker, such
		that "if we put the linguists' zero mark (Ø) in our example sentence … the word order indeed
		is correct." This framing is pedagogically effective but does not engage the evidence for
		genuine order freedom.
	</p>
	<p>
		That evidence comes from Nakagawa's Chitose data. Three utterances by the same speaker
		describing the same scene place the three arguments of <i lang="ain-Latn">epakasnu</i> 'teach'
		in three different preverbal sequences, all translating as 'my wife taught our daughter
		women's work' <Ref k="nakagawa2024" p="363, exx. 700–702" />; reproduced in English at
		<Ref k="nakagawa2022pos" p="exx. 71–73" />:
	</p>

	<table>
		<thead>
			<tr>
				<th>example</th>
				<th>preverbal order</th>
				<th>Ainu (Chitose)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>700</td>
				<td>IO – A – DO</td>
				<td
					><i lang="ain-Latn"
						>menoko ne hike a=macihi menoko monrayke epakasnu</i
					></td
				>
			</tr>
			<tr>
				<td>701</td>
				<td>IO – DO – A</td>
				<td
					><i lang="ain-Latn"
						>menoko ne hike menoko monrayke a=macihi epakasnu</i
					></td
				>
			</tr>
			<tr>
				<td>702</td>
				<td>A – IO – DO</td>
				<td
					><i lang="ain-Latn"
						>a=macihi anakne menoko po menoko monrayke epakasnu</i
					></td
				>
			</tr>
		</tbody>
	</table>

	<p>
		A fourth order (DO – A – IO) is attested in a Saru text
		<Ref k="nakagawa2024" p="363–364, ex. 703" />. Nakagawa's conclusion is explicit: "since the
		noun phrase itself carries no indicator of which is subject and which is object, which one is
		the subject cannot be grammatically determined"; the disambiguation rests on "common sense"
		and knowledge of the scene, not on syntactic position
		<Ref k="nakagawa2024" p="363" />. Bugaeva, drawing on the same data, states that Ainu "does
		not show its subject and object either by case marking or by word order"
		<Ref k="nakagawa2022pos" />. This is the ‹contested› heart of the question: whether role is
		fixed by first-noun default (Shibatani, Satō 2008) or is genuinely free and recoverable only
		via person-indexing and real-world plausibility (Nakagawa, Bugaeva). No corpus-level count of
		A-before-O versus O-before-A frequencies in transitive clauses exists in the literature consulted;
		the Nakagawa triple is the strongest available evidence, but it derives from one speaker in one
		session ‹contested›.
	</p>
	<p>
		The topic particle <i lang="ain-Latn">anak(ne)</i> in example 702 is a distinct confound:
		when a NP is overtly marked as topic it tends to come first regardless of grammatical role
		<Ref k="nakagawa2024" p="364" />; <Ref k="bugaeva2012" p="472" />. The fuller treatment of
		topicalization and left-dislocation belongs to <Xr ch="topic-marking-anakne" /> and
		<Xr ch="pragmatic-word-order-dislocation" />. The community observation that
		<i lang="ain-Latn">anak/anakne</i> is used with far less frequency than Japanese
		<span lang="ja">は</span>, carrying approximately the weight of 'as regards' rather than a
		default topic marker, is consistent with the descriptive literature's picture of a device that
		marks rather than requires left-periphery position (nukopoli, aynu-corpora Discord,
		2024-11-09, asserted; <Ref k="aynucorporadiscord" />; cf. <Ref k="shibatani1990" p="38" />)
		‹corpus-suggested›.
	</p>
	<p>
		A separate class of word-order evidence comes from right-dislocation: some Ainu texts place
		the subject or object NP after the verb, attached via the light verb <i lang="ain-Latn">ki</i>
		'do', providing participant specification after the predicate has already established the
		referential relations <Ref k="bugaeva2022" />. This discourse-level device is a
		processing-driven supplement to verb-final order, not a grammaticalized alternative to it.
	</p>
</S>

<S t="Null arguments and zero anaphora" id="null-arguments">
	<p>
		Null arguments are the default state of Ainu syntax. A verb's person affixes index every
		participant, so overt NPs appear only when they carry additional discourse work — introducing a
		referent, contrasting it, or marking it as topic. Nakagawa formalizes this in his sentence
		template: a NP "need not be present in the sentence as long as it can be supplied meaningfully
		from context, and the sentence still stands" <Ref k="nakagawa2024" p="361" />. Satō, framing
		the same observation under head-marking, writes that "grammatical relations (subject and
		object) … are not obligatory elements in Ainu; rather it is the personal affixes that are
		obligatory for the predicates" <Ref k="sato2025a" p="359–360" />.
	</p>
	<p>
		When a participant is contextually available, the standard strategy is zero anaphora: the
		missing argument triggers no overt substitute, not even an independent pronoun. Bugaeva
		illustrates this for a demoted oblique: in <i lang="ain-Latn">itanki huraye hine (itanki) ani
		Ø=i=ko-i-puni</i> 'she washed a bowl and served me food with (that bowl)', the second mention
		of the bowl "can easily be omitted and the sentence would trigger a zero-anaphora interpretation
		'holding (that bowl)'" <Ref k="bugaeva2012" p="476, ex. 22" />. Ditransitives extend the same
		pattern: the language's two-affix cap means a third argument cannot be indexed, so it is
		expressed as a bare NP whose reference is guaranteed by verbal valency rather than by its own
		person marking <Ref k="sato2025a" p="368–369" />. The cap is treated in
		<Xr ch="person-marking-architecture" s="syncretism" /> and the object-indexing chapters.
	</p>
	<p>
		The following attested clause illustrates how overt possessed-NPs in narrative serve to
		reintroduce participants rather than maintain ongoing reference. Both NPs name the narrator's
		parents, which context would have made recoverable, but appear here to foreground the two
		co-subjects of the embedding:
	</p>

	<Ex
		m="sekor a=onaha a=unuhu haweoka kor i=kimatekka hine"
		g="QUOT 4.POSS=father 4.POSS=mother say.thus CONJ 4.O=encourage CONJ"
		tr="Saying so, my father and my mother encouraged me on and then …"
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, ILCAA Ainu materials, Saru"
		note="ILCAA aa-irc/009#154. Both co-subjects (a=onaha, a=unuhu) are overt; the object of kimatekka is zero, recovered from the 4.O prefix i= (narrator as object in logophoric-narrative context). All other participants in the surrounding passage are null. The fourth-person possessive a= marks the narrator's own kin in oral narrative; see the logophoric chapter."
	/>

	<p>
		Reference continuity in oral narrative depends primarily on the unbroken chain of person
		affixes across linked clauses, not on overt NP repetition. Re-introduction by NP marks a
		scene change or new referential ground, a function treated in the reference-tracking chapter
		(<Xr ch="reference-tracking" />).
	</p>
</S>

<S t="Discontinuous noun phrases" id="discontinuous-nps">
	<p>
		A standard diagnostic for nonconfigurationality is the permissibility of discontinuous NPs:
		two parts of one noun phrase separated by material that is not part of that phrase. Nakagawa
		provides an attested Saru instance in which the head noun <i lang="ain-Latn">toma</i> 'mat'
		and its numeral <i lang="ain-Latn">sinep</i> 'one' are separated by the focus particle
		<i lang="ain-Latn">ka</i> 'even', yet the predicate <i lang="ain-Latn">isam</i> 'be absent'
		is an intransitive verb requiring exactly one S argument:
	</p>

	<Ex
		m="toma ka sinep ka isam"
		g="mat FOC one FOC not.exist"
		tr="There is not a single mat either."
		cite="nakagawa2024:383"
		dial="SAR"
		note="Nakagawa ex. 750 (second clause). Full pair: sintoko utar ka opitta sinep ka isam. toma ka sinep ka isam. 'there is not a single box either; there is not a single mat either.' Nakagawa analyses [toma ka sinep ka] as one discontinuous NP filling the S slot of the intransitive isam; the arity of the verb (one place) rules out reading toma and sinep as separate arguments."
	/>

	<p>
		Nakagawa frames this via verbal arity rather than via the nonconfigurationality literature, but
		structurally it instantiates what that literature treats as quantifier float: the numeral has
		drifted from its host noun into a position that an independent argument would occupy. The
		community observation that the pattern N + adverbial-numeral + V (<i lang="ain-Latn">pasuy sinep uk</i>
		'takes one chopstick') is "perfectly normal, maybe more frequent than in Japanese" is
		consistent with quantifier float being productive in Ainu, though frequency claims remain
		unverified (nukopoli, aynu-corpora Discord, 2024-12-12, proposed;
		<Ref k="aynucorporadiscord" />) ‹corpus-suggested›. The NP-internal ordering of head and
		numeral is treated in <Xr ch="noun-phrase-structure" />.
	</p>
</S>

<S t="Configurationality diagnostics assessed" id="configurationality-diagnostics">
	<p>
		The standard diagnostics for nonconfigurationality, as applied to Ainu in
		<Ref k="bugaeva2022" /> and <Ref k="sato2025a" />, pattern as follows:
	</p>

	<table>
		<thead>
			<tr>
				<th>diagnostic</th>
				<th>Ainu status</th>
				<th>key sources</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Obligatory bound argument-marking (head-marking)</td>
				<td>Yes — person affixes on every finite predicate</td>
				<td
					><Ref k="sato2025a" p="359–361" />; <Ref k="bugaeva2012" p="472" /></td
				>
			</tr>
			<tr>
				<td>Overt NPs structurally optional</td>
				<td>Yes — NPs are appositional to the verbal index, not required positions</td>
				<td
					><Ref k="sato2025a" p="363–365" />; <Ref k="nakagawa2024" p="361" /></td
				>
			</tr>
			<tr>
				<td>Pragmatically free order of overt NPs</td>
				<td>Yes, ‹contested› — multi-order variation attested; recovery by context and index</td>
				<td
					><Ref k="nakagawa2024" p="363" />; <Ref k="bugaeva2022" /></td
				>
			</tr>
			<tr>
				<td>Null anaphora without pronominalization</td>
				<td>Yes — missing arguments are zero, not pronominalized</td>
				<td
					><Ref k="bugaeva2012" p="476" />; <Ref k="nakagawa2024" p="361" /></td
				>
			</tr>
			<tr>
				<td>Discontinuous NPs / quantifier float</td>
				<td>Yes — attested (Nakagawa 2024: 383)</td>
				<td><Ref k="nakagawa2024" p="383" /></td>
			</tr>
			<tr>
				<td>No case flagging on core S/A/O NPs</td>
				<td>Yes — postpositions mark obliques only; core NPs are bare</td>
				<td
					><Ref k="bugaeva2012" p="472" />; <Ref k="shibatani1990" p="22" /></td
				>
			</tr>
			<tr>
				<td>Verb positionally free (verb can appear anywhere)</td>
				<td>
					<strong>No</strong> — verb is rigidly clause-final; this is the one firm constituent-order
					rule
				</td>
				<td
					><Ref k="nakagawa2024" p="363" />; <Ref k="shibatani1990" p="22" /></td
				>
			</tr>
		</tbody>
	</table>

	<p>
		Six of the seven diagnostics are positive. The seventh — rigid verb-finality — is a
		counter-signal. In the best-described nonconfigurational languages (Warlpiri, Jiwarli), the
		verb can appear in any position among the free NPs. Ainu's verb-finality is absolute:
		every adverbial, every NP, every negative <i lang="ain-Latn">somo</i> precedes the verb
		phrase, but the verb phrase itself does not move. Nichols notes that head-marking languages
		achieve word-order freedom through either verb-initial or verb-final strategies with equal ease
		<Ref k="nichols1986" p="104" paren />; Ainu takes the verb-final option. Its preverbal field is
		pragmatically ordered but bounded by the clause edge.
	</p>
	<p>
		The combination — verb-final, head-marking, caseless core arguments, free preverbal NP order —
		is typologically rare. Nakagawa observes that languages with SOV order that mark neither
		subject nor object by case nor by fixed position "are probably relatively rare"; he cites Nivkh
		as the nearest geographic neighbour and notes that Nivkh compensates with obligatory
		immediately-preverbal object position plus a consonant-mutation dependency, while Ainu does
		neither <Ref k="nakagawa2022pos" />.
	</p>
</S>

<S t="The Pronominal-Argument Hypothesis and the Ainu counter-evidence" id="pah">
	<p>
		The Pronominal-Argument Hypothesis holds that in head-marking languages the bound affixes are
		the actual grammatical arguments and the free NPs are adjuncts — lexical specifications of what
		the pronominal arguments refer to, with no direct argument status of their own. This position
		is associated with the work of Jelinek and of Baker, as reviewed in
		<Ref k="bugaeva2022" /> and in <Ref k="foleyvanvalin1984" />. The logical consequence for
		syntax is that there are no argument positions for NPs to fill, which is why they can appear
		discontinuously and in any order: they are not in the phrase structure at all. Ainu's profile
		— obligatory affixes, optional NPs, free preverbal order, null anaphora, discontinuous NPs, no
		case — fits this description wherever the accessible data bear on it ‹contested›.
	</p>
	<p>
		Bugaeva presents the hypothesis explicitly and then argues against the pure appositive reading
		for Ainu:
	</p>

	<blockquote>
		<p>
			"There remains an important theoretical issue of whether NPs in head-marking languages are
			arguments or clause constituents of any kind at all. A number of researchers consider them
			mere appositives that lexically specify or qualify the actual arguments, which are on the
			verb. … However, a more widely accepted view is that argumenthood is shared between bound
			pronouns and coreferential NPs. <strong>As to Ainu, the latter view seems to fit better</strong>
			because there is an extra &lt;location&gt; elaboration on the noun …"
			<Ref k="bugaeva2022" />
		</p>
	</blockquote>

	<p>
		The Ainu-specific counter-argument turns on a subset of nouns with inherent locative semantics.
		When two third-person arguments of a three-place verb are both zero-marked, the locative-noun
		class — nouns such as <i lang="ain-Latn">or</i> 'place (of)', <i lang="ain-Latn">sam</i>
		'near', <i lang="ain-Latn">ka</i> 'above', <i lang="ain-Latn">corpok</i> 'below', as well as
		the category of place-role nouns (<i lang="ain-Latn">kim</i> 'mountain-area',
		<i lang="ain-Latn">pis</i> 'beach-area') — distinguishes the Location argument from the Theme.
		Nakagawa's Chitose example <i lang="ain-Latn">[ci a=e-p] [saranip or] oma-re</i> 'she put the
		cooked food into the basket' shows the mechanism: the NP <i lang="ain-Latn">saranip or</i>
		(basket + locative <i lang="ain-Latn">or</i>) is unambiguously the Goal because it contains a
		locative noun, leaving the other NP as Theme; without <i lang="ain-Latn">or</i>, the two
		basket-and-food NPs would be ambiguous <Ref k="nakagawa2022pos" />. Bugaeva reads this as
		evidence that the noun carries grammatically relevant information about its own argument role,
		which a purely appositive / PAH NP would not need to do
		<Ref k="bugaeva2022" />.
	</p>
	<p>
		The counter-argument has two acknowledged limits. First, it applies only when one argument is a
		Location: in the many transitive clauses where neither argument is locative — including the
		<i lang="ain-Latn">kamuy aynu rayke</i> pair — the disambiguation rests on plausibility and
		world knowledge, not on lexical noun class. Nakagawa is explicit that in those cases it falls
		back on "common sense" <Ref k="nakagawa2024" p="363" />. Second, the argument rests on a small
		number of illustrative examples and has not been tested against a quantified corpus of
		three-argument clauses with two zero-marked third-person NPs ‹contested›.
	</p>
	<p>
		Satō's analysis, using Role and Reference Grammar, reaches a structurally PAH-like result —
		person affixes fill the argument positions inside the CORE, NPs sit outside it as optional
		adjuncts — but within a framework that does not endorse the PAH label, and it explicitly
		rejects the head-movement analysis of <Ref k="baker1988" /> as unable to handle the attested
		subject incorporation in Ainu (<i lang="ain-Latn">koy-yanke</i> 'the waves wash [me] ashore',
		where the A argument is incorporated into the verb)
		<Ref k="sato2025a" p="366–367" />; <Ref k="sato2016" />. Noun incorporation and its
		implications for argument structure are the subject of <Xr ch="noun-incorporation-object" />
		and <Xr ch="noun-incorporation-oblique-polysynthesis-debate" />.
	</p>
	<p>
		The three positions — PAH-type (NPs as adjuncts, affixes as sole arguments), shared
		argumenthood (Bugaeva), and RRG-structural (Satō) — produce near-identical empirical
		predictions for the phenomena described in this chapter; they differ in theoretical
		commitments about what counts as an argument. No Ainu specialist has published a study
		dedicated to the PAH or the nonconfigurationality hypothesis as such; the framing reaches Ainu
		through Bugaeva's and Satō's typological discussions. Chapter authors should present the
		classification as a live framing question rather than an established result <Ref k="bugaeva2022" /> ‹contested›.
	</p>
</S>

<S t="What Ainu does not exhibit" id="what-ainu-does-not-show">
	<p>
		Several properties typical of the best-described nonconfigurational languages are absent from
		or unattested in Hokkaido Ainu, and these absences limit the scope of any nonconfigurationality
		claim.
	</p>
	<p>
		<strong>No morphological switch-reference.</strong> Warlpiri and many Australian languages
		deploy dedicated same-subject / different-subject morphology on non-finite verb forms (converbs).
		Ainu has no converbs and no morphological switch-reference
		(<Xr ch="clause-linkage-overview" />; <Xr ch="hine-akusu-switch-reference" />). Reference
		continuity across linked clauses is maintained by the obligatory person affixes on each finite
		predicate, by zero anaphora, and by the fourth-person logophoric device — functional
		substitutes, not formal equivalents of switch-reference morphology
		<Ref k="bugaeva2012" p="498" />.
	</p>
	<p>
		<strong>No wh-movement.</strong> Content-question words remain in situ:
		<i lang="ain-Latn">hunna</i> 'who', <i lang="ain-Latn">hemanta</i> 'what',
		<i lang="ain-Latn">hunak</i> 'where' occupy the same position they would hold in a
		corresponding declarative, with no movement to a left-peripheral question position
		<Ref k="bugaeva2012" p="498" />. This is consistent with a head-marking typology but is shared
		with many language types that are not nonconfigurational.
	</p>
	<p>
		<strong>Verb-finality is rigid.</strong> Unlike Warlpiri, where the finite verb participates in
		the general NP-scrambling freedom, the Ainu verb does not leave clause-final position. This
		is the one reliable constituent-order fact: every preverbal element — NPs, adverbials, negative
		<i lang="ain-Latn">somo</i>, topic-marked constituents — is ordered by discourse and pragmatics,
		but the verb-phrase occupies clause-final position without exception
		<Ref k="nakagawa2024" p="363" />; <Ref k="shibatani1990" p="22" />. The verb-final constraint
		is the one point on which all sources, across the dispute about whether order is otherwise free,
		agree.
	</p>
	<p>
		<strong>No dedicated person-tracking morphology on the NP.</strong> Case suffixes on NPs exist
		only for obliques (postpositional adverbs and case particles); core S/A/O NPs are bare. There
		is no obviation morphology on the NP, no "obviative" nominal suffix marking a secondary
		third-person referent. The fourth-person prefix set on the verb does analogous work for first-
		and fourth-person participants in discourse, but it is verbal morphology, not nominal, and it
		targets person, not rank-in-discourse ‹contested› (<Xr ch="indefinite-fourth-person-paradigm" />).
	</p>
</S>

<S t="Reference tracking across clauses" id="reference-tracking">
	<p>
		Reference continuity in Ainu oral narrative is maintained primarily by the verbal person-index
		system combined with zero anaphora. A participant introduced by an overt NP in one clause is
		reidentified in later clauses by the recurrence of the same person index on the finite
		predicate, with no overt NP required. Re-mention by NP signals reintroduction, scene change,
		or contrastive foregrounding — not ordinary anaphoric continuity.
	</p>
	<p>
		The fourth-person form-set (<Xr ch="indefinite-fourth-person-paradigm" />) performs additional
		tracking work in oral narrative. It marks the protagonist's viewpoint and first-person reference
		inside the reported world, distinct from both the narrating speaker's first person
		(<i lang="ain-Latn">ku=</i>) and the unmarked third (zero). In performance, narrators alternate
		<i lang="ain-Latn">a=</i> (fourth-person agent) and <i lang="ain-Latn">ku=</i> (first-singular
		agent) to distinguish the in-story protagonist's speech from the narrator speaking as herself;
		this alternation has been observed in attested uwepeker performance (thegodofneet,
		aynu-corpora Discord, 2024-07-04, asserted; <Ref k="aynucorporadiscord" />; consistent with
		<Ref k="bugaeva2008" p="40–43" />) ‹corpus-suggested›. The logophoric analysis of the
		fourth-person narration device is in <Xr ch="logophoric-narration-and-reported-discourse" />.
	</p>
	<p>
		For clauses with two zero-marked third-person arguments, the locative-noun class provides a
		lexical disambiguation device. When one argument is a locative noun or a noun modified by a
		locative element (<i lang="ain-Latn">or</i>, <i lang="ain-Latn">sam</i>, etc.), it is
		unambiguously the Location argument, leaving the other NP as Theme or Patient
		<Ref k="nakagawa2022pos" />. Outside that subset, disambiguation rests on plausibility. Ainu
		therefore substitutes a combination of person-index transparency, lexical semantics, and
		discourse context for the case-marking and fixed-position strategies that other SOV languages
		use to track grammatical role across clauses <Ref k="bugaeva2022" />.
	</p>
	<p>
		Verbal number contributes independently in some environments: the transitive plural stems mark
		object plurality — <i lang="ain-Latn">rayke</i> → <i lang="ain-Latn">ronnu</i> 'kill' — an
		ergative-like S≈O≠A pattern in the number system that disambiguates S and O for zero-marked
		third persons when the count of participants differs
		<Ref k="bugaeva2022" /> (consistent with the community observation by nukopoli, aynu-corpora
		Discord, 2023-12-12, asserted; <Ref k="aynucorporadiscord" />). The fuller treatment of verbal
		number as a grammatical resource is in <Xr ch="suppletive-verbal-number" /> and
		<Xr ch="alignment-hierarchical-and-the-debate" />.
	</p>
	<p>
		Clause-linkage particles pattern with participant continuity statistically but not
		morphologically: <i lang="ain-Latn">wa</i> correlates with same-subject sequences in Refsing's
		Shizunai count, but the correlation is not grammatically enforced and carries no formal
		same-subject / different-subject encoding
		<Ref k="refsing1986" />. This is treated in full in
		<Xr ch="sequential-wa-and-clause-chaining" /> and
		<Xr ch="hine-akusu-switch-reference" />.
	</p>
</S>
