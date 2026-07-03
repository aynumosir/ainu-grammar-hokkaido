<!-- src/lib/grammar/chapters/tenselessness-and-time-reference.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The absence of a tense category" id="tense-absence">
	<p>
		Hokkaido Ainu has no grammatical tense. No alternation in verb form encodes whether an event
		precedes, coincides with, or follows the moment of speech. Nakagawa states the finding plainly:
		past, present, and future reference "cannot be expressed by any change of verb form, and normally
		need not be" <Ref k="nakagawa2024" p="434" />. Bugaeva draws the same conclusion twice: "there
		are no pure tense markers" and the verb "may be marked for aspect, modality, and evidentiality"
		<Ref k="bugaeva2012" p="491, 493" />. Takahashi adds that even aspect and evidentiality are not
		obligatory grammatical categories in Ainu <Ref k="takahashi2022" />; Yoshikawa reports that a
		clear perfective–imperfective opposition is absent both lexically and grammatically
		<Ref k="yoshikawa2022" />. A finite verb, unmarked for any of these, yields whatever temporal
		interpretation its event type and discourse context allow.
	</p>

	<p>
		Nakagawa draws a typological parallel with Mandarin Chinese, which likewise recovers temporal
		reference from adverbs, aspect particles, and contextual position rather than from verb
		inflection <Ref k="nakagawa2024" p="434" />. The grammatical categories the Hokkaido Ainu verb
		does engage — aspect, mood, modality, and evidentiality — form a periphrastic system of complex
		predicates whose architecture is mapped in <Xr ch="tam-overview" />. The present chapter
		focuses on the theoretical status of the tense absence and the mechanisms through which temporal
		reference is achieved in its place.
	</p>
</S>

<S t="The tenselessness debate and the status of a" id="tenselessness-debate">
	<p>
		Whether Ainu is best described as radically tenseless, as implicitly past, or as encoding a
		covert two-way tense opposition through the auxiliary <A w="a" gl="perfective auxiliary" /> was
		debated across most of the twentieth century and remains contested at one point. Four positions
		have been held.
	</p>

	<table>
		<thead>
			<tr>
				<th>position</th>
				<th>holder</th>
				<th>core claim</th>
				<th>grade</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>"everything is past"</td>
				<td>Kindaichi (1931, via <Ref k="refsing1986" />)</td>
				<td>
					The language makes no temporal distinction but expresses everything in the past; the
					present moment is too transient to locate linguistically
				</td>
				<td>‹contested›</td>
			</tr>
			<tr>
				<td>split by Aktionsart</td>
				<td><Ref k="chiri1942" p="96–97" /> (via <Ref k="refsing1986" />)</td>
				<td>
					Only change and action predicates require a past translation; stative predicates
					translate as Japanese <span lang="ja">-te iru</span> (present progressive)
				</td>
				<td>‹contested›</td>
			</tr>
			<tr>
				<td>truly tenseless</td>
				<td><Ref k="refsing1986" p="§14.9.1" /></td>
				<td>
					A language without the category of tense does not order events on a linear timeline; no
					translation tense is more correct than another, and calling the past "more proper" is
					incorrect
				</td>
				<td>‹contested›</td>
			</tr>
			<tr>
				<td>no pure tense markers</td>
				<td>
					<Ref k="bugaeva2012" p="491, 493" />; <Ref k="nakagawa2024" p="434" />;
					<Ref k="takahashi2022" />; <Ref k="yoshikawa2022" />
				</td>
				<td>
					There are no tense markers; the verb engages aspect, modality, and evidentiality
					optionally; temporal interpretation follows from these categories and from context
				</td>
				<td>consensus</td>
			</tr>
		</tbody>
	</table>

	<p>
		Kindaichi's claim that Ainu "expresses everything in the past" rested on the observation that
		finite forms in oral narrative translate with past-tense equivalents. This describes a discourse
		default of the narrative register: events are ordered against a temporal frame set at the
		opening, so a bare verb reads as past by pragmatic inference, not by inflection. Chiri's
		refinement — that the past reading is obligatory only for predicates denoting change or action,
		while stative predicates prefer a present-progressive translation — anticipates the modern
		aspectual classification (treated in <Xr ch="existential-aspect-an-oka" />) but treats a
		discourse-aspectual tendency as a grammatical rule. Refsing's position is the sharpest
		departure: a language without the category of tense has no grammatical linear time ordering
		and so admits no preferred translation tense; calling the past "more proper" misapplies a
		European temporal grid to a system that lacks the category altogether
		<Ref k="refsing1986" p="§14.9.1" /> ‹contested›.
	</p>

	<p>
		The auxiliary <A w="a" gl="perfective auxiliary" /> (plural <A w="rok" gl="perfective auxiliary, plural" />)
		is the form closest to a tense marker, and its analysis is genuinely unsettled
		<Ref k="nakagawa2024" p="306–307" />. Kindaichi and Tamura read it as
		<span class="sc">past</span>, which would produce a covert two-way opposition: marked
		<i lang="ain-Latn">a</i> = past, unmarked = non-past. Bugaeva and Satō treat it as an actional
		perfect — a past event with present relevance — which yields a past reading but is not a tense
		category <Ref k="bugaeva2012" p="493" />; <Ref k="sato2006" p="63" />. Nakagawa, following
		Yoshikawa's reanalysis, denies that <i lang="ain-Latn">a</i> encodes tense or aspect at all,
		taking it to mark an event set in contrast to what follows rather than to locate that event in
		past time <Ref k="nakagawa2024" p="306–307" />; <Ref k="yoshikawa2022" /> ‹contested›. The
		full debate is developed in <Xr ch="perfective-anterior-a" />; what this chapter records is
		that even the form most likely to encode tense is not analysed as a tense marker by the modern
		descriptive consensus.
	</p>
</S>

<S t="Temporal adverbs and discourse anchoring" id="temporal-adverbs">
	<p>
		When explicit temporal location is required, the primary device is a free temporal adverb.
		<A w="numan" gl="yesterday" /> and <A w="nisatta" gl="tomorrow" /> are the basic past- and
		future-anchoring items; comparable expressions specify this morning, last year, and other
		reference points <Ref k="nakagawa2024" p="434–435" />. The adverb occurs freely in
		clause-initial or preverbal position, and the bare verb it modifies requires no additional
		tense marking. Temporal information is distributed across the clause: the adverb locates the
		event, and the verb contributes its aspectual character.
	</p>

	<Ex
		m="nisatta kunneywa tunas soyne=an nankor kusu"
		g="tomorrow morning early go.out=4.S probably because"
		tr="Tomorrow morning I will probably go out early —"
		cite="nakagawa2024:310"
		dial="SAR"
		place="Nakagawa ex. 468"
		note="The temporal adverb nisatta 'tomorrow' supplies the future anchor; the epistemic auxiliary nankor adds probability. The verb soyne=an 'go out' carries no future inflection."
	/>

	<p>
		In narrative, discourse position does the anchoring work that temporal adverbs do in speech. A
		story-world frame established at the opening locates subsequent bare verbs as past without any
		overt marker; transitions in scene or topic are often marked by the completive
		<i lang="ain-Latn">a</i>, which places the preceding event in the background before the shift
		<Ref k="nakagawa2024" p="306–307" />; <Ref k="yoshikawa2022" />. This relative,
		discourse-anchored time reference — where temporal interpretation tracks a reference point
		established in prior context rather than the absolute speech moment — is the dominant mode of
		temporal location in Hokkaido Ainu <Ref k="nakagawa2024" p="436" />.
	</p>
</S>

<S t="Aspect and completion forms as temporal anchors" id="aspect-temporal">
	<p>
		Three of the four overt strategies for temporal location recruit grammatical forms whose
		primary value is aspectual, modal, or evidential; the temporal reading is an inference
		<Ref k="nakagawa2024" p="434–436" />. The situational evidential <i lang="ain-Latn">siri</i>
		anchors a visible, ongoing event in the present: a clause closed by
		<i lang="ain-Latn">siri ne</i> profiles an event the speaker observes unfolding at the moment
		of speech <Ref k="nakagawa2024" p="435" />; its own description belongs to
		<Xr ch="siri-ne-situational" />.
	</p>

	<p>
		The progressive <A w="kor an" gl="progressive" /> and resultative <A w="wa an" gl="resultative" />
		do not specify tense, but in narrative context they deliver recognizable temporal orientations.
		<i lang="ain-Latn">kor an</i> presents an action as ongoing within the story frame and so
		reads as past from the perspective of the outside hearer; <i lang="ain-Latn">wa an</i>
		presents the state left after a change and reads similarly. The example below illustrates both
		the progressive and the bare existential in a narrative setting where the past reading is
		entirely a function of discourse context.
	</p>

	<Ex
		m="apeoy anak an hine ape ruyruy kor an"
		g="hearth TOP exist CONJ fire burn.vigorously while exist"
		tr="The hearth was there, and the fire was burning vigorously."
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, uwepeker 7 [aa-irc/005#52]"
		note="Neither the bare an 'exist' nor the kor an progressive carries a tense morpheme; the past reading comes from the narrative reference frame. Both an tokens are zero-marked third person."
	/>

	<p>
		The completion forms — <i lang="ain-Latn">a</i>/<i lang="ain-Latn">rok</i>, the recent perfect
		<A w="nisa" gl="recent perfect" />, and the pair verbs <i lang="ain-Latn">wa isam</i> and
		<i lang="ain-Latn">wa okere</i> — carry the strongest past-temporal implicature, because a
		completed event is canonically prior to the speech moment. Nakagawa notes the limit explicitly:
		these forms yield a temporal reading "only relative to the utterance moment" and "are not, in
		themselves, tense forms"; context can override the default past reading
		<Ref k="nakagawa2024" p="436" />. A past English gloss for a bare verb or a
		<i lang="ain-Latn">kor an</i> clause renders the discourse context, not a grammatical tense
		feature.
	</p>
</S>

<S t="Prospective and future reference" id="prospective">
	<p>
		Future reference draws on modal forms rather than a future tense.
		<Xr ch="epistemic-irrealis-modality">The prospective–intentive</Xr>
		<A w="kusu ne" gl="intend to; be scheduled to" /> marks the speaker's intention or a scheduled
		event; <A w="oasi" gl="surely will" /> marks an event as certainly forthcoming;
		<A w="etokus" gl="be about to" /> indicates imminence; and
		<A w="etokoyki" gl="be getting ready to" /> marks incipient preparation
		<Ref k="nakagawa2024" p="435" />; <Ref k="sato2008" p="85–86" />. Each carries its modal
		value — intention, scheduled certainty, imminence — and the future temporal reading follows
		as pragmatic inference.
	</p>

	<Ex
		m="an epitta paye=an kusu ne na"
		g="one throughout go=4.S PURP COP FIN"
		tr="I intend to travel through the night."
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, isoytak monologue 2 [aa-irc/004#51]"
		note="kusu ne supplies the intentive reading; the future temporal implication follows from the modal value. The verb paye=an 'go' carries no future inflection."
	/>

	<p>
		Ijäs's pedagogical grammar covers the same set under 'be going to, intend to, plan to',
		correctly grouping them as modal rather than tense, and observes that
		<i lang="ain-Latn">nankor</i> with a future-oriented proposition yields a probability reading
		<Ref k="ijas2023" />. The <i lang="ain-Latn">nisatta … nankor</i> example above illustrates
		the modal–adverb combination that together delivers an unambiguous future reading without any
		future tense marker. The segmentation of <i lang="ain-Latn">kusu ne</i> as the conjunction
		<i lang="ain-Latn">kusu</i> plus the copula <i lang="ain-Latn">ne</i> — rather than a single
		morpheme — is followed here in preference to the one-word pedagogical spelling
		<i lang="ain-Latn">kusune</i> <Ref k="nakagawa2024" p="435" />; <Ref k="sato2008" p="85–86" />;
		<Ref k="ijas2023" />.
	</p>
</S>

<S t="Typological placement" id="typology">
	<p>
		Tenseless languages — in which tense is not a grammaticalized, obligatory category of the verb
		— are well attested cross-linguistically, and the universality of tense is not confirmed by the
		typological record. Bybee, Perkins, and Pagliuca, surveying tense, aspect, and modality across
		76 languages, find that many languages mark temporal reference optionally or through aspect
		alone, encoding it in the same formal position as mood and evidentiality rather than through a
		dedicated tense paradigm <Ref k="bybee1994" paren />. Comrie's foundational account of aspect
		explicitly separates the aspectual category from tense precisely because many languages
		grammaticalize the former without the latter <Ref k="comrie1976" paren />. Hokkaido Ainu falls
		in this class: its verb's grammatical categories are aspect, modality, and evidentiality, none
		of which is tense.
	</p>

	<p>
		Within the typological space of tenseless systems, Ainu's aspect-prominent profile is
		characteristic: the verb's grammatical distinctions map onto aspectual, modal, and evidential
		values, and temporal reference is delegated to peripheral adverbs and contextual inference.
		The grammaticalization sources of the aspect forms — the existential
		<A w="an" gl="exist" /> feeding the progressive and resultative frames, the posture verb
		<A w="a" gl="sit" /> feeding the perfective auxiliary — are intransitive verbs that carry no
		tense meaning and acquire none through grammaticalization. The system as a whole confirms that
		the absence of tense is a primary fact about the language rather than a surface disguise for a
		covert category <Ref k="nakagawa2024" p="306–308, 439–443" />; <Ref k="yoshikawa2022" />;
		<Ref k="bybee1994" paren />.
	</p>
</S>
