<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Two kinds of subject incorporation" id="overview">
	<p>
		<Xr ch="noun-incorporation-object">Object incorporation</Xr> accounts for the overwhelming
		majority of Ainu noun incorporation, but the language also incorporates subjects. Satō's
		Chitose count places subject incorporation at about 14% of all incorporation tokens, divided
		into three functional subtypes that differ in which noun is incorporated, what happens to the
		verb's valency, and whether an external possessor must be retained
		<Ref k="satoni2022" p="§3" />; <Ref k="sato2016" p="83–84" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>subtype</th>
				<th>Mithun type</th>
				<th>% (Chitose)</th>
				<th><i lang="ain-Latn">n</i></th>
				<th>valency effect</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>natural-force intransitive subject NI</td>
				<td>I</td>
				<td>6.8</td>
				<td>35</td>
				<td>zero-place result; no phrasal counterpart</td>
			</tr>
			<tr>
				<td>possessor-requiring intransitive subject NI</td>
				<td>II</td>
				<td>5.6</td>
				<td>29</td>
				<td>none — possessor promoted to S</td>
			</tr>
			<tr>
				<td>natural-force transitive subject NI</td>
				<td>I</td>
				<td>1.7</td>
				<td>9</td>
				<td>−1; former O surfaces as S</td>
			</tr>
		</tbody>
	</table>

	<p>
		These figures come from the corpus of the late Shirasawa Nabe (Chitose) and reflect one
		idiolect; no pan-Hokkaido NI-type frequency study has been published ‹corpus-suggested›.
		The wordhood diagnostic is the same as for object incorporation: because the person index
		is the outermost element of the verb word, an incorporated noun must sit inside it, and a
		fourth-person S suffix on a normally transitive base is decisive proof of intransitivisation
		<Ref k="nakagawa2024" p="482–483" />; <Ref k="satoni2022" p="§2" />. The broader valency
		architecture is in <Xr ch="valency-voice-overview" />, and object incorporation in
		<Xr ch="noun-incorporation-object" />.
	</p>
</S>

<S t="Natural-force intransitive subject NI" id="natural-force">
	<p>
		The incorporated noun in this subtype is not a full lexical noun but a bound stem denoting
		a natural force or ambient condition. Two such stems are attested in Hokkaido:
		<A w="sir" gl="weather, appearance, land" /> and <A w="me" gl="cold" />
		<Ref k="satoni2022" p="§3.2" />; <Ref k="nakagawa2024" p="489" />. Neither appears as an
		independent subject noun alongside the same predicate — the phrasal counterpart does not
		exist — which distinguishes this subtype sharply from object incorporation, where phrasal
		and incorporated forms often alternate
		<Ref k="satoni2022" p="§3.2" />. Nakagawa groups these predicates among the zero-place
		verbs of the verb-class system; their person-prefix behaviour confirms that status, since
		the zero-arity result takes no person affixes in its basic meteorological use
		<Ref k="nakagawa2024" p="489" />.
	</p>

	<p>
		The weather stem <A w="sir" gl="weather" /> combines with stative predicates to form a set
		of meteorological expressions: <A w="sirpirka" gl="the weather is fine" />,
		<A w="sirkunne" gl="it is dark, night falls" />,
		<A w="sirsesek" gl="the weather is hot" />,
		<A w="sirmeman" gl="the weather is cool" />, and similar. The corpus count for
		<i lang="ain-Latn">sirpirka</i> stands at 102 tokens (rank 1,104), confirming its standing
		as the most frequent member of the set ‹corpus-confirmed›. The cold stem
		<A w="me" gl="cold" /> functions identically: <i lang="ain-Latn">me-an</i> 'it is cold'
		incorporates <i lang="ain-Latn">me</i> as the subject of the existential
		<i lang="ain-Latn">an</i>, again without an independent-noun counterpart
		<Ref k="satoni2022" p="§3.2" />.
	</p>

	<Ex
		m="nisatta anak sir-pirka nankor"
		g="tomorrow TOP weather-be.good INFR"
		tr="The weather will be fine tomorrow."
		cite="satoni2022:§3"
		dial="CHI"
		place="Satō 2022 ch. 16 Appendix (ii)"
		note="The absorbed sir 'weather' is the incorporated zero-argument subject; pirka 'be good' is the predicate. No person index appears because the result is a zero-place predicate; nankor expresses the inferential."
	/>

	<p>
		Nakagawa's subclassification requires that the incorporated noun appear in its concept form
		(裸形), as opposed to the possessed form that characterises the possessor-requiring subtype
		below
		<Ref k="nakagawa2024" p="489" />. The two forms — concept and possessed — are treated in
		<Xr ch="concept-form-affiliative-form" />.
	</p>
</S>

<S t="Possessor-requiring intransitive subject NI and possessor stranding" id="possessor-stranding">
	<p>
		The second intransitive subtype incorporates a body-part or relational noun that
		grammatically requires a possessor. Because the incorporated noun carries its possessive
		morphology into the verb word, that possessor must surface as an external argument — the
		phenomenon Satō terms <em>possessor stranding</em>
		<Ref k="satoni2022" p="§3.3" />; <Ref k="sato2016" p="87–89" />. This corresponds to
		Mithun's Type II: the construction rearranges grammatical relations rather than merely
		lexically compounding
		<Ref k="mithun1984" paren />; <Ref k="satoni2022" p="§3.3" />.
	</p>

	<p>
		The mechanism is this: a stative intransitive verb whose S argument is a body-part noun
		takes that noun in its <Xr ch="concept-form-affiliative-form">possessed form</Xr>
		(所属形) and incorporates it. The possessed form grammatically encodes that the noun belongs
		to someone; that possessor must therefore be supplied from outside the incorporated complex,
		and it is promoted to the S of the whole predicate. Overall arity does not decrease: the
		promoted possessor fills exactly the slot that the incorporated noun's argument position
		vacated
		<Ref k="satoni2022" p="§3.3" />; <Ref k="nakagawa2024" p="489–490" />.
	</p>

	<Ex
		m="ku=tek-e-pase"
		g="1SG.S=hand-POSS-heavy"
		tr="My hands feel heavy (I feel I've aged)."
		cite="satoni2022:§3"
		dial="CHI"
		place="Satō 2022 ch. 16 §3.3"
		note="tek-e is the possessed form of tek 'hand', with -e as the possession suffix (distinct from the applicative e-). The stative base is pase 'be heavy'. The possessor of the hands — the speaker — is promoted to S of the whole predicate and indexed by ku=."
	/>

	<p>
		The possessed-form noun appearing as an incorporated subject is itself the structural
		signature of this type and distinguishes it from the natural-force type, where the
		incorporand is in concept form. A further example shows the possessor-stranding structure
		in context: Satō's Chitose Appendix (iii) gives
		<i lang="ain-Latn">ku=ram-u-tuy wa ku=si-y-etu-esikari</i> 'I was startled and grabbed at
		my own nose'
		<Ref k="satoni2022" p="§3" />. The first clause incorporates
		<A w="ram" gl="heart, mind" /> in its possessed form as the subject of
		<i lang="ain-Latn">u-tuy</i> (RECP-cut, intransitive); the possessor of the heart, the
		speaker, surfaces as S indexed by <i lang="ain-Latn">ku=</i>. The second clause uses the
		indirect reflexive <i lang="ain-Latn">si-</i> as the quasi-possessive of the incorporated
		<A w="etu" gl="nose" /> — a pattern treated in <Xr ch="reflexive-possessive-si" />.
	</p>

	<p>
		What licenses the stranded possessor is a reflexive interpretation: the possessor must be
		understood as coreferential with the subject of the predication — that is, the body-part
		is read as belonging reflexively to whoever occupies S. Satō formalizes this as a
		<em>reflexive-interpretation rescue</em> that offsets most of the markedness penalty that
		stranding would otherwise attract
		<Ref k="satoni2022" p="§5" />; <Ref k="sato2016" p="87–90" />.
	</p>
</S>

<S t="Satō's markedness calculus and the systematic gap" id="markedness">
	<p>
		Satō ranks all incorporation subtypes by a constraint-and-rescue scoring system, where
		each restriction adds penalty points and each licensing factor subtracts them
		<Ref k="satoni2022" p="§5" />; <Ref k="sato2016" p="88" />. Penalty values differ between
		the 2022 Handbook chapter and the 2016 paper (alternative scores in parentheses), but the
		rank order and frequency proportions are identical.
	</p>

	<table>
		<thead>
			<tr>
				<th>subtype</th>
				<th>restrictions (+)</th>
				<th>rescues (−)</th>
				<th>net (2022 / 2016)</th>
				<th>% Chitose</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>object NI</td>
				<td>—</td>
				<td>—</td>
				<td>0</td>
				<td>85.9</td>
			</tr>
			<tr>
				<td>nat.-force intr. subject NI</td>
				<td>Subject +10</td>
				<td>Backgrounding −5 / −8</td>
				<td>5 / 2</td>
				<td>6.8</td>
			</tr>
			<tr>
				<td>possessor-req. intr. subject NI</td>
				<td>Subject +10, Stranding +15 / +10</td>
				<td>Backgrounding −5 / −8, Reflexive −14 / −9</td>
				<td>6 / 3</td>
				<td>5.6</td>
			</tr>
			<tr>
				<td>nat.-force tr. subject NI</td>
				<td>Subject +10, Ambiguity +4 / +7</td>
				<td>Backgrounding −5 / −8</td>
				<td>9</td>
				<td>1.7</td>
			</tr>
			<tr>
				<td>possessor-req. object NI</td>
				<td>Stranding +15 / +10, Ambiguity +4 / +7</td>
				<td>— (no reflexive rescue)</td>
				<td>10</td>
				<td>0 (ungrammatical)</td>
			</tr>
		</tbody>
	</table>

	<p>
		The Backgrounding rescue applies to natural-force and body-part nouns because their low
		referential salience makes incorporation semantically unobtrusive. The Reflexive rescue
		applies only where the stranded possessor is coreferential with the predicate's subject —
		possible for subject-incorporated body-parts (possessor = experiencer = S) but not for
		possessed object nouns, because the inflectional possessor <i lang="ain-Latn">i=</i> there
		makes the noun definite and blocks any reflexive reading
		<Ref k="satoni2022" p="§4–5" />.
	</p>

	<p>
		The final row exposes the systematic gap: possessor-requiring <em>object</em> NI is
		ungrammatical because no available rescue reduces the net penalty sufficiently. The slot is
		instead filled by quasi-incorporation — Satō's third verb class of idiomatic tight phrasal
		constructions such as <i lang="ain-Latn">par oyki</i> 'feed' and
		<i lang="ain-Latn">aske uk</i> 'invite' — treated in
		<Xr ch="noun-incorporation-oblique-polysynthesis-debate" />
		<Ref k="satoni2022" p="§6–7" />.
	</p>
</S>

<S t="The agentivity restriction" id="agentivity">
	<p>
		Shibatani observed that Ainu subjects do not incorporate freely: only the patient-subject
		of an intransitive — not the agent — incorporates, and he proposed that this tracks
		unaccusativity
		<Ref k="shibatani1988" p="210–211" />; <Ref k="shibatani1990" p="62" />. On that account,
		the incorporable subjects are those that originate as the underlying object of an unaccusative
		base, while agents of unergative predicates cannot incorporate.
	</p>

	<p>
		Satō accepts the empirical restriction but rejects unaccusativity as the defining criterion,
		on the grounds that the natural-force transitive subtype — in which the original A of a
		transitive predicate incorporates — cannot be captured by the unaccusative account
		<Ref k="sato2008" p="226" />; <Ref k="satoni2022" p="§1" />. The property that covers all
		subtypes is <em>low degree of agentivity</em>: a noun is incorporable as subject when it
		denotes a force or body-part acting without volition, intention, or independent agency. Waves,
		rain, wind, cold, and body-parts all meet this criterion; human or animal agents do not.
		Unaccusativity then becomes a sufficient condition for incorporability — all unaccusative
		subjects qualify — but not a necessary one ‹contested›.
	</p>

	<p>
		The connection to the <Xr ch="alignment-split-intransitive">split-intransitive alignment</Xr>
		is direct: the distinction between patient-like and agent-like S arguments is already
		grammaticalized in Hokkaido Ainu person marking, and the class of incorporable subjects maps
		onto the patient-like side of that split. The theoretical debate between the unaccusativity
		account and the low-agentivity account is not settled in the sources surveyed here ‹contested›.
	</p>
</S>

<S t="Natural-force transitive subject NI" id="transitive-natural-force">
	<p>
		The rarest subtype incorporates the subject of a transitive verb. The incorporated noun is
		always a natural-force concept — wave, rain, snow, wind, light, deity — and must appear in
		concept form, not possessed form, which is the same morphological criterion that applies in
		the natural-force intransitive subtype
		<Ref k="nakagawa2024" p="489–491" />; <Ref k="satoni2022" p="§3.4" />.
	</p>

	<p>
		The structural result is passive-like: the incorporated noun was the A of the transitive
		base; after incorporation the arity drops by one and the former O surfaces as the new S,
		taking S person suffixes. The intransitive suffix <i lang="ain-Latn">=an</i> (fourth-person
		S) on the derived verb is the diagnostic
		<Ref k="nakagawa2024" p="489–491" />.
	</p>

	<Ex
		m="rir-tursere=an kor mom=an"
		g="wave-tumble=4.S CONJ drift=4.S"
		tr="I was rolled by waves and drifted."
		cite="nakagawa2024:490"
		dial="CHI"
		place="Nakagawa ex. 1119 (excerpt)"
		note="rir 'wave' is the incorporated former A subject of tursere 'roll/tumble'; the original O (the speaker) now surfaces as S, indexed by =an. The parallel mom=an 'drift' is a separate intransitive clause."
	/>

	<Ex
		m="apto as kor apto-kar=an upas as kor upas-kar=an rera-kar=an"
		g="rain fall CONJ rain-strike=4.S snow fall CONJ snow-strike=4.S wind-strike=4.S"
		tr="I was rained on, snowed on, and struck by wind."
		cite="nakagawa2024:490"
		dial="SAR"
		place="Nakagawa ex. 1121, after Chiba University Ainu oral-literature materials 2015: 190"
		note="apto 'rain', upas 'snow', and rera 'wind' are the incorporated former A subjects of kar 'strike/do'; =an on each compound proves the derived intransitive. The parallel phrases apto as and upas as present the same nouns as free subjects in coreferential adverbial clauses."
	/>

	<p>
		The attested incorporands for this subtype include
		<A w="kamuy" gl="deity" />, <A w="koy" gl="wave" />, <A w="rir" gl="wave, billow" />,
		<A w="me" gl="cold" />, <A w="nis" gl="cloud" />, <A w="rera" gl="wind" />,
		<A w="sukus" gl="light" />, <A w="apto" gl="rain" />, and <A w="upas" gl="snow" />
		<Ref k="nakagawa2024" p="489–491" />. All denote ambient natural forces with minimal
		agentivity. Satō notes that this subtype is "probably impossible in many languages", which
		makes it one of the more typologically distinctive features of Ainu noun incorporation
		<Ref k="satoni2022" p="§3.4" />.
	</p>
</S>

<S t="The ko- applicative inside sir- verbs" id="sir-ko-applicative">
	<p>
		The zero-argument meteorological predicates built on <i lang="ain-Latn">sir-</i> can host
		the <Xr ch="applicative-stacking-relativization-feeding">applicative</Xr>
		<i lang="ain-Latn">ko-</i>, which adds a beneficiary or experiencer and promotes it to the
		verb's sole indexed argument. Forms like <i lang="ain-Latn">sir-ko-kunne</i> 'it darkens
		for X / night falls for X' and <i lang="ain-Latn">ku=sir-ko-peker</i> 'the weather
		brightens for me / I experience daybreak' are current in Chitose and Saru
		<Ref k="nakagawa2024" p="489" />.
	</p>

	<p>
		A community-proposed analysis (nukopoli, aynu-corpora Discord 2024-12-05) reads
		<i lang="ain-Latn">ku=sir-ko-peker</i> as follows: the base meteorological verb
		<i lang="ain-Latn">sirpeker</i> 'the weather brightens' is a closed stem in which
		<i lang="ain-Latn">sir-</i> is already incorporated; the applicative
		<i lang="ain-Latn">ko-</i> inserts into this closed stem between the incorporated noun
		and the root rather than attaching to the outside of the compound. The
		<i lang="ain-Latn">ko-</i> object — the experiencer — is then promoted to the overall
		subject, indexed by <i lang="ain-Latn">ku=</i>. Parallel structures proposed in the same
		discussion include <i lang="ain-Latn">maw-ko-wen</i> 'the mist becomes bad for X' and
		<i lang="ain-Latn">kur-ko-tunas</i> 'it becomes cold for someone'
		<Ref k="aynucorporadiscord" /> ‹contested›.
	</p>

	<p>
		A related morphological observation from the same source concerns ordering. The attested
		form is <i lang="ain-Latn">sir-ko-kunne</i>, not the hypothetical
		<i lang="ain-Latn">*ko-sir-kunne</i>. This ordering — where the incorporated subject
		<i lang="ain-Latn">sir-</i> precedes the applicative <i lang="ain-Latn">ko-</i> — is
		consistent with subject incorporation occupying the pre-applicative, pre-root slot of the
		verb template, not a position inside the applicative layer, and is proposed as evidence
		that subject incorporation is structurally distinct from other prefix types
		<Ref k="aynucorporadiscord" /> ‹contested›. The verb-word template is treated in
		<Xr ch="valency-voice-overview" />, and the feeding relation between applicatives and
		incorporation in <Xr ch="applicative-stacking-relativization-feeding" />.
	</p>
</S>
