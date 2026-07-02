<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="sekor in the complementizer system" id="overview">
	<p>
		Hokkaido Ainu reports speech and thought by placing the invariable particle
		<i lang="ain-Latn">sekor</i> at the right edge of the quoted string, before the matrix
		verb of saying or thinking. This mechanism occupies a distinct slot in Refsing's
		four-way clause-embedding typology: conjunctionalization, nominalization,
		<em>quotationalization</em>, and adnominalization — with quotationalization, realized by
		<i lang="ain-Latn">sekor</i> (and its variant <i lang="ain-Latn">ari</i>), forming a
		separate category from the nominalized-complementizer system
		<Ref k="refsing1986" p="§14.14" />. The nominalized complementizers —
		<i lang="ain-Latn">kuni</i>, <i lang="ain-Latn">kunak</i>, <i lang="ain-Latn">yak</i>,
		<i lang="ain-Latn">kusu</i> — that Nakagawa treats in his indirect-speech section
		operate through the formal-noun nominalizing machinery described in
		<Xr ch="nominalization-p-pe" /> and
		<Xr ch="nominalized-complements-control-raising" />;
		<i lang="ain-Latn">sekor</i> does not nominalize — it quotes directly
		<Ref k="nakagawa2024" p="475–480" />.
	</p>

	<p>
		The matrix verbs that take <i lang="ain-Latn">sekor</i> overlap substantially with
		those that select the indirect-speech markers: <A w="ye" gl="say" />,
		<A w="itak" gl="speak, say" />, <A w="haweok" gl="speak up" />, and
		<A w="ramu" gl="think" />. The choice between the quotative and the nominalizing
		complementizers encodes the direct-vs-indirect distinction and controls the
		person-marking pattern in the embedded clause
		<Ref k="nakagawa2024" p="475" />; <Ref k="bugaeva2008" p="31–35" />. How the
		formal-noun class that enables nominalized complementation is constituted is set out
		in <Xr ch="formal-defective-nouns" />.
	</p>
</S>

<S t="Form and position" id="form">
	<p>
		<i lang="ain-Latn">sekor</i> is morphologically invariant: it carries no person
		affixes, no TAM morphology, and no allomorphic alternation conditioned by the shape
		of the preceding clause. Its canonical position is immediately after the last element
		of the quoted string and before the matrix verb:
		[quoted clause] <i lang="ain-Latn">sekor</i> [matrix verb]. Refsing identifies a
		variant <i lang="ain-Latn">ari</i> with the same quotative function in the Shizunai
		dialect; both are treated as "quotationalizers" forming a class distinct from the
		nominalized-complementizer inventory <Ref k="refsing1986" p="§14.14" />.
	</p>

	<p>
		The quoted clause preserves all features of a main clause: person affixes, polarity,
		TAM markers, and clause-internal particles are intact inside the quotation.
		Sentence-final particles (<i lang="ain-Latn">na</i>, <i lang="ain-Latn">wa</i>, etc.)
		may appear within the quoted string but not between <i lang="ain-Latn">sekor</i> and
		the matrix verb — a distributional restriction shared with the indirect-speech markers,
		whose embedded clauses also exclude final particles
		<Ref k="nakagawa2024" p="475–476" />.
	</p>

	<Ex
		m="pirka sekor a=ye"
		g="be.good QUOT 4.A=say"
		tr="He/she said, 'It is good.'"
		constructed
		dial="HK"
		note="Minimal sekor frame: an unmodified stative predicate quoted before the fourth-person matrix verb a=ye 'say'."
	/>

	<Ex
		m="ek=an sekor ku=ramu"
		g="come=4.S QUOT 1SG.A=think"
		tr="I thought, 'He/she will come.'"
		constructed
		dial="HK"
		note="sekor with the thought verb ramu: the fourth-person intransitive suffix =an on ek 'come' marks the referent of the thought inside the quote. The matrix ku=ramu carries the first-person speaker-agent."
	/>
</S>

<S t="Direct and indirect quotation" id="direct-indirect">
	<p>
		The clearest evidence for the <i lang="ain-Latn">sekor</i> vs indirect-complementizer
		distinction is person marking. Under <i lang="ain-Latn">sekor</i>, the original
		speaker's person forms are preserved unchanged inside the quote. Under
		<i lang="ain-Latn">kuni</i>, <i lang="ain-Latn">kunak</i>, and
		<i lang="ain-Latn">yak</i>, the embedded clause's person is adjusted to the reporting
		narrator's viewpoint: an original first person shifts to the fourth, the
		indefinite/logophoric person
		<Ref k="nakagawa2024" p="475" />. The indirect-speech markers also differ among
		themselves in the temporal or semantic value they impose on the embedded proposition
		<Ref k="nakagawa2024" p="475–480" />; <Ref k="sato2008" p="176–177" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>type</th>
				<th>particle</th>
				<th>temporal / semantic value</th>
				<th>person shift</th>
				<th>typical matrix verb</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>direct quotation</td>
				<td>
					<i lang="ain-Latn">sekor</i> (or <i lang="ain-Latn">ari</i>)
				</td>
				<td>any</td>
				<td>none — original person preserved</td>
				<td>
					<i lang="ain-Latn">ye</i>, <i lang="ain-Latn">itak</i>,
					<i lang="ain-Latn">ramu</i>
				</td>
			</tr>
			<tr>
				<td>indirect, future/directive</td>
				<td><i lang="ain-Latn">kuni</i></td>
				<td>future, inferred, wished, directive</td>
				<td>1 → 4</td>
				<td><i lang="ain-Latn">ye</i>, <i lang="ain-Latn">ramu</i></td>
			</tr>
			<tr>
				<td>indirect, inferred</td>
				<td><i lang="ain-Latn">kunak</i></td>
				<td>future, inferred</td>
				<td>1 → 4</td>
				<td><i lang="ain-Latn">ye</i>, <i lang="ain-Latn">ramu</i></td>
			</tr>
			<tr>
				<td>indirect, past/general</td>
				<td><i lang="ain-Latn">yak</i></td>
				<td>already happened; ongoing; general truth</td>
				<td>1 → 4</td>
				<td>
					<i lang="ain-Latn">ye</i>, <i lang="ain-Latn">ramu</i>,
					<i lang="ain-Latn">takar</i>
				</td>
			</tr>
			<tr>
				<td>directive complement</td>
				<td><i lang="ain-Latn">kusu</i></td>
				<td>causative-directive 'that X do Y'</td>
				<td>—</td>
				<td><i lang="ain-Latn">ye</i></td>
			</tr>
			<tr>
				<td>embedded question</td>
				<td><i lang="ain-Latn">ya</i></td>
				<td>polar or content question ('whether, what')</td>
				<td>—</td>
				<td>
					<i lang="ain-Latn">eramiskari</i>, <i lang="ain-Latn">eraman</i>
				</td>
			</tr>
		</tbody>
	</table>

	<p>
		The person contrast between <i lang="ain-Latn">sekor</i> and
		<i lang="ain-Latn">kuni</i> is illustrated by the following pair. The proposition
		'I will return' appears first as a direct quotation (constructed), then under the
		indirect-speech complementizer <i lang="ain-Latn">kuni</i> (attested in Nakagawa's
		grammar):
	</p>

	<Ex
		id="sekor-hosipi"
		m="ku=hosipi sekor a=ye"
		g="1SG.S=return QUOT 4.A=say"
		tr="He/she said, 'I will return.'"
		constructed
		dial="HK"
		note="Direct quotation under sekor: the first-person intransitive prefix ku= on hosipi 'return' is the original speaker's own form, intact inside the quote. The matrix a=ye carries the fourth-person narrator-agent."
	/>

	<Ex
		id="kuni-hosipi"
		m="hosipi=an kuni a=ye"
		g="return=4.S COMP 4.A=say"
		tr="I said I would return."
		cite="nakagawa2024:476"
		dial="HK"
		note="Indirect quotation under kuni: the original first-person subject is shifted to the fourth-person intransitive suffix =an, adopting the narrator's viewpoint. kuni nominalizes the embedded clause as the nominal object of a=ye 'say'."
	/>

	<p>
		The temporal contrast between <i lang="ain-Latn">kunak</i> (future proposition,
		reported as ongoing) and <i lang="ain-Latn">yak</i> (past or general proposition) runs
		in parallel within the indirect system. Satō's <i lang="ain-Latn">kunak</i> example
		combines the indirect-speech marker with the ongoing-aspect phrase
		<i lang="ain-Latn">kor an</i>:
	</p>

	<Ex
		m="ku=matnepo tanto ek kunak ye kor an"
		g="1SG.POSS=daughter today come COMP say CONJ exist"
		tr="My daughter says she will come today."
		cite="sato2008:177"
		dial="CHI"
		note="kunak frames the future proposition ek 'come.SG'; kor an 'while/is' marks the report as ongoing. The embedded subject of ek is the shifted fourth person (the daughter). The possessive ku=matnepo 'my daughter' is the topic of the whole utterance."
	/>

	<p>
		The directive use of <i lang="ain-Latn">kuni</i> — 'tell X to do Y' — appears
		frequently in folktale dialogue and marks the complement as a directed action rather
		than a proposition:
	</p>

	<Ex
		m="a ahun kuni a=ye akusu toykooripak"
		g="PFV enter COMP 4.A=say CONJ be.abashed"
		tr="When I told them to enter, they were very abashed."
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, uwepeker 民話8 (その2) [aa-irc/007#213]"
		note="kuni follows the directed action ahun 'enter'; a=ye 'say/tell' is the fourth-person matrix verb. akusu marks the sequential relation to the consequent clause. The perfective a closes the speech event before the consequence."
	/>

	<p>
		The purposive and deontic extensions of <i lang="ain-Latn">kuni</i> beyond the
		reported-speech domain are treated in
		<Xr ch="kuni-complementizer-purpose-complements" />.
	</p>
</S>

<S t="hawe and itak as framing elements" id="hawe-itak">
	<p>
		The formal noun <i lang="ain-Latn">hawe</i> — possessed form of
		<A w="haw" gl="voice" />, 'the voice/report of' — extends the quotative architecture
		in two directions. As a bare complementizer it nominalizes a speech event and supplies
		it as the perceptual object of verbs like <A w="nu" gl="hear, learn of" />: the
		complement clause becomes "the voice/talk of" the event
		<Ref k="sato2008" p="175–178" />. Combined with the copula, <i lang="ain-Latn">hawe ne</i>
		forms the reportative evidential frame; when <i lang="ain-Latn">sekor</i> precedes it,
		the compound <i lang="ain-Latn">sekor hawe ne</i> attributes a quoted proposition to
		an unspecified external source ‹corpus-suggested›:
	</p>

	<Ex
		m="ek sekor haw-e ne"
		g="come QUOT voice-POSS COP"
		tr="It is said that he/she came."
		constructed
		dial="HK"
		note="sekor hawe ne: the quotative particle sekor intervenes between the embedded clause ek 'come' and the reportative frame haw-e ne. The internal morphology haw-e shows the source noun haw 'voice' plus the possessed ending -e."
	/>

	<p>
		The clause-final reportative evidential <i lang="ain-Latn">hawe ne</i> standing alone —
		where it marks information acquired through speech without framing an embedded quotation —
		is treated in <Xr ch="hawe-ne-reportative" />, and the four-way evidential paradigm
		to which it belongs in <Xr ch="evidential-schema-overview" />.
	</p>

	<p>
		<A w="itak" gl="speak, say, talk" /> is the most frequent speech verb in narrative
		dialogue — narrators routinely use it to introduce character utterances — while
		<A w="ye" gl="say" /> appears predominantly in indirect-speech and complementizer
		frames. Both appear after <i lang="ain-Latn">sekor</i> and both select
		<i lang="ain-Latn">kuni</i>/<i lang="ain-Latn">kunak</i> for indirect complements
		<Ref k="nakagawa2024" p="476" />; <Ref k="sato2008" p="176" />. A stable semantic or
		register distinction between the two verbs in quotative syntax is not established in
		the read sources ‹corpus-suggested›.
	</p>
</S>

<S t="The logophoric fourth person in speech reports" id="logophoric">
	<p>
		Person adjustment in the indirect-speech complementizer frames reflects what Bugaeva
		identifies as logophoricity in Southern Hokkaido Ainu. The fourth-person markers
		<i lang="ain-Latn">a=</i>/<i lang="ain-Latn">ci=</i> on transitives and
		<i lang="ain-Latn">=an</i> on intransitives replace an original first person in the
		embedded clause, reanchoring it to the reporting narrator's viewpoint. Nakagawa
		formulates this as a categorical rule: under the indirect-speech markers, "final
		particles cannot be embedded; the speaker's-viewpoint person shifts 1→3/4"
		<Ref k="nakagawa2024" p="475" />.
	</p>

	<p>
		Bugaeva's study of reported discourse and logophoricity in Southern Hokkaido Ainu
		provides the analytical framework: the fourth person here is not a simple third-person
		referential shift but a logophoric device, indexing the embedded protagonist — the
		original speaker or thinker — whose perspective the narrator temporarily adopts
		<Ref k="bugaeva2008" />. The surface form is identical to the generic/indefinite fourth
		person (also <i lang="ain-Latn">a=</i>/<i lang="ain-Latn">=an</i>); the logophoric
		reading is determined by the presence of a complementizer frame and by contextual
		co-reference with the matrix subject ‹contested›. The full fourth-person paradigm and
		its logophoric distribution across narrative genres are treated in
		<Xr ch="fourth-person-honorific" /> and <Xr ch="indefinite-fourth-person-paradigm" />.
	</p>

	<p>
		Nikitina and Bugaeva develop a stronger claim: the construction is better characterized
		as <em>logophoric speech</em> rather than indirect speech in the conventional theoretical
		sense, because the person system encodes the narrator's perspective adoption, not a
		syntactic binding of the embedded subject to a matrix controller
		<Ref k="nikitina2021" />. The discourse contexts — first-person narration in uwepeker
		and yukar — where this perspective adoption is most systematic are examined in
		<Xr ch="logophoric-narration-and-reported-discourse" /> ‹contested›.
	</p>

	<p>
		Under <i lang="ain-Latn">sekor</i> direct quotation, no person shift applies: the
		original speaker's person forms are preserved inside the quote, and the logophoric
		reanchoring does not arise in the embedded clause. This is the morphological correlate
		of the direct/indirect boundary:
		<i lang="ain-Latn">sekor</i> preserves the perspective of the original utterance;
		the indirect-speech markers reanchor it to the narrator's viewpoint
		<Ref k="bugaeva2008" p="31–35" />; <Ref k="nikitina2021" />.
	</p>
</S>

<S t="Analyses and open questions" id="analyses">
	<p>
		The descriptions converge on the categorical point. Refsing separates quotationalization
		from nominalization as coordinate clause-embedding types, placing
		<i lang="ain-Latn">sekor</i>/<i lang="ain-Latn">ari</i> outside the nominalizer class
		<Ref k="refsing1986" p="§14.14" />. Nakagawa's §18.2, which treats the indirect-speech
		markers extensively as nominalization-based complementizers that take a nominal-object
		slot, is consistent with keeping <i lang="ain-Latn">sekor</i> as a non-nominalizing
		quotative; his account of the person shift and the final-particle ban applies to
		<i lang="ain-Latn">kuni</i>/<i lang="ain-Latn">kunak</i>/<i lang="ain-Latn">yak</i>
		and not to <i lang="ain-Latn">sekor</i>
		<Ref k="nakagawa2024" p="475–480" />. Shibatani, whose treatment foregrounds the
		formal-noun complementizer system, does not single out a quotative particle in the
		dialect data he covers <Ref k="shibatani1990" p="83–84" />.
	</p>

	<p>
		Three questions remain open in the read sources. First, the geographical and register
		distribution of <i lang="ain-Latn">sekor</i> vs <i lang="ain-Latn">ari</i> across
		Hokkaido dialects is documented only by Refsing's Shizunai attestation of both
		<Ref k="refsing1986" p="§14.14" />; whether <i lang="ain-Latn">ari</i> carries any
		semantic or pragmatic distinction from <i lang="ain-Latn">sekor</i> or is a
		register/lexical variant is not established ‹speculative›. Second, the
		grammaticalization status of the compound <i lang="ain-Latn">sekor hawe ne</i> frame
		is not settled: whether the sequence is transparently compositional (quotative + reportative
		evidential) or a lexicalized reportative formula cannot be decided from the sources
		read here ‹speculative›. Third, the logophoricity analysis of Nikitina and Bugaeva
		awaits corpus-level testing at construction level; whether the person-shift pattern
		under <i lang="ain-Latn">kunak</i>/<i lang="ain-Latn">yak</i> distributes differently
		from the generic fourth-person use is not settled by evidence in the read sources
		‹contested›.
	</p>

	<p>
		Ijäs's pedagogical grammar covers relative clauses and the formal-noun nominalizer
		system in Lesson 11 — the material banked for this grammar's nominalization domain —
		but her treatment of direct and indirect speech falls in a separate lesson not included
		in the factbase read for this domain <Ref k="ijas2023" />. No Ijäs claims on
		<i lang="ain-Latn">sekor</i> or quotative framing are available for grading here.
	</p>
</S>
