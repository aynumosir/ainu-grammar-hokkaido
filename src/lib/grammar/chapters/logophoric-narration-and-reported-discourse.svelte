<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The reported-discourse system in overview" id="overview">
	<p>
		Hokkaido Ainu marks reported discourse with a <em>quotative index</em> (QI): a quotative
		marker that follows the quoted string and is in turn followed by a speech or cognition verb.
		The central marker is <i lang="ain-Latn">sekor</i>, an adverbial conjunction
		<Ref k="bugaeva2008" p="35–36" /> that is obligatory in direct and semi-direct
		constructions. A structurally separate class of constructions uses bound complementizers
		(<i lang="ain-Latn">kunak</i>, <i lang="ain-Latn">yak</i>, <i lang="ain-Latn">kuni</i>)
		with transitive reporting verbs and is treated as a complementation device in
		<Xr ch="quotative-complementation-sekor" /> and
		<Xr ch="kuni-complementizer-purpose-complements" />. This chapter covers the
		<i lang="ain-Latn">sekor</i>-mediated system: the transitivity split among reporting verbs,
		the direct/semi-direct/indirect distinction, the 1st-to-4th-person shift inside quotes, the
		logophoricity debate, the first-person narration convention of yukar and uwepeker, and the
		<i lang="ain-Latn">hawe</i> family of forms that bridges the quotative and evidential systems.
		The evidential architecture within which <i lang="ain-Latn">hawe ne</i> and
		<i lang="ain-Latn">hawe as</i> sit is described in
		<Xr ch="evidential-schema-overview" /> and <Xr ch="hawe-ne-reportative" />.
	</p>
	<p>
		The quotative and evidential systems intersect at the noun <A w="haw" gl="voice" />: the
		intransitive report verb <i lang="ain-Latn">hawean</i> ('a voice exists' → 'say'), the
		reportative evidential <i lang="ain-Latn">hawe ne</i> ('it is a voice/report that'), and the
		hearsay form <i lang="ain-Latn">hawe as</i> ('a voice arises') all derive from the possessed
		form <i lang="ain-Latn">haw-e</i> 'the voice of —' <Ref k="nakagawa2024" p="398, 428" />.
		Reference-tracking across narrative spans, which the quotative machinery helps manage, is
		described in <Xr ch="reference-tracking" />.
	</p>
</S>

<S t="sekor and the reporting-verb split" id="sekor-quot">
	<p>
		The etymology of <i lang="ain-Latn">sekor</i> is transparent: it derives from
		<i lang="ain-Latn">se</i> 'make a sound / say' + <i lang="ain-Latn">kor</i> 'while / while
		holding', yielding roughly 'while saying' <Ref k="nakagawa2024" p="470" /> (nukopoli,
		<Ref k="aynucorporadiscord" />, 2024) ‹corpus-confirmed›. In the southern Hokkaido dialects
		it is fully grammaticalized as the quotative particle and no longer carries its compositional
		meaning. The form following <i lang="ain-Latn">sekor</i> is the reporting verb, and its
		transitivity determines the construction type.
	</p>
	<p>
		The constraint was first stated by <Ref k="chiri1942" p="572–573" /> and systematized by
		<Ref k="bugaeva2008" p="36–37" />: <i lang="ain-Latn">sekor</i> co-occurs with
		<em>intransitive</em> reporting verbs because the quoted string is adverbial — it is not the
		object of the reporting verb. The complementizer constructions
		(<i lang="ain-Latn">kunak</i>/<i lang="ain-Latn">yak</i>/<i lang="ain-Latn">kuni</i>) take
		<em>transitive</em> verbs (<i lang="ain-Latn">ye</i> 'say', <i lang="ain-Latn">ramu</i>
		'think') because the complement clause is the object. The community discussion confirms this:
		<i lang="ain-Latn">*sekor a=ramu</i> is ungrammatical — <i lang="ain-Latn">ramu</i> requires
		a nominal object; the correct form is <i lang="ain-Latn">kuni a=ramu</i> or, with the
		intransitive cognate, <i lang="ain-Latn">sekor yaynu=an</i> (nukopoli,
		<Ref k="aynucorporadiscord" />, 2024) ‹corpus-confirmed›.
	</p>
	<p>
		The apparent exception is <i lang="ain-Latn">sekor a=ye</i>: the transitive verb
		<i lang="ain-Latn">ye</i> occurs after <i lang="ain-Latn">sekor</i> in a lexicalized frame
		that is more frequent in the corpus than the intransitive alternative
		<i lang="ain-Latn">sekor itak=an</i> (nukopoli, <Ref k="aynucorporadiscord" />, 2024;
		thegodofneet, <Ref k="aynucorporadiscord" />, 2025) ‹corpus-confirmed›.
		<Ref k="nakagawa2024" p="470" /> acknowledges <i lang="ain-Latn">sekor a=ye</i> as a
		lexicalized exception to the transitivity constraint. <Ref k="ijas2023" /> presents both
		<i lang="ain-Latn">sekor hawean</i> and <i lang="ain-Latn">sekor a=ye</i> as the two
		standard quotative frames in her pedagogical grammar.
	</p>

	<table>
		<thead>
			<tr>
				<th>reporting verb</th>
				<th>transitivity</th>
				<th>gloss</th>
				<th>follows <i lang="ain-Latn">sekor</i></th>
				<th>notes</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">hawean</i></td>
				<td>intransitive</td>
				<td>'say'</td>
				<td>✓</td>
				<td>most frequent DRD/SDRD reporting verb</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">itak</i></td>
				<td>intransitive</td>
				<td>'speak'</td>
				<td>✓</td>
				<td>general 'speak'; less frequent with <i lang="ain-Latn">sekor</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">isoytak</i></td>
				<td>intransitive</td>
				<td>'narrate'</td>
				<td>✓</td>
				<td>oral-narrative register (thegodofneet, <Ref k="aynucorporadiscord" />, 2025)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">yaynu</i></td>
				<td>intransitive</td>
				<td>'think'</td>
				<td>✓</td>
				<td>inner thought-report</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ye</i></td>
				<td>transitive (+2)</td>
				<td>'say'</td>
				<td>✓ (lexicalized exception)</td>
				<td><i lang="ain-Latn">sekor a=ye</i>; commoner than <i lang="ain-Latn">sekor itak=an</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ramu</i></td>
				<td>transitive (+2)</td>
				<td>'think'</td>
				<td>✗</td>
				<td>use <i lang="ain-Latn">kuni a=ramu</i> for indirect thought-report</td>
			</tr>
		</tbody>
	</table>

	<Ex
		m="somo itak=an hi ne sekor haw-e-an=an kor"
		g="NEG speak=4.S NMLZ COP QUOT voice-POSS-exist=4.S while"
		tr="Saying, 'One does not speak.'"
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakamii Matsuko, isoytak 独話1, ILCAA Ainu materials aa-irc/003#57"
		note="The intransitive haw-e-an=an follows sekor; the quoted string ends with the formal noun hi plus the copula ne. The 4th-person suffix =an inside the quote and on the reporting verb haw-e-an=an signals that the quoted speaker is other than the current narrator — a semi-direct shift treated in §3."
	/>
</S>

<S t="Direct, semi-direct, and indirect reported discourse" id="rd-continuum">
	<p>
		<Ref k="bugaeva2008" p="34–35" /> identifies three construction types for Hokkaido Ainu,
		distinguished by the treatment of person inside the quote and by the syntactic integration of
		the complement. The table organizes the system:
	</p>

	<table>
		<thead>
			<tr>
				<th>type</th>
				<th>quotative frame</th>
				<th>1st person inside the quote</th>
				<th>reporting verb</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Direct (DRD)</td>
				<td><i lang="ain-Latn">sekor</i></td>
				<td>as originally uttered</td>
				<td>intransitive</td>
			</tr>
			<tr>
				<td>Semi-direct (SDRD)</td>
				<td><i lang="ain-Latn">sekor</i></td>
				<td>shifted to 4th/INDEF (<i lang="ain-Latn">asinuma</i>, <i lang="ain-Latn">a=</i>, <i lang="ain-Latn">=an</i>)</td>
				<td>intransitive or lexicalized <i lang="ain-Latn">ye</i></td>
			</tr>
			<tr>
				<td>Indirect (IRD)</td>
				<td><i lang="ain-Latn">kunak / yak / kuni</i></td>
				<td>fully shifted to the reporter's deixis</td>
				<td>transitive</td>
			</tr>
		</tbody>
	</table>

	<p>
		The DRD/SDRD distinction rests on person: when the current narrator quotes herself, 1st-person
		forms inside the quote are retained, and the construction is direct. When she quotes a
		different speaker, the original 1st-person of the quoted speaker is replaced by the
		4th/indefinite person — the pronoun <i lang="ain-Latn">asinuma</i> for the singular
		logophoric-like reference, the prefix <i lang="ain-Latn">a=</i> on transitive stems, and the
		suffix <i lang="ain-Latn">=an</i> on intransitive stems — and the result is semi-direct
		<Ref k="tamura2000" p="75" />; <Ref k="bugaeva2008" p="37–40" />. The free pronoun
		<i lang="ain-Latn">asinuma</i> and the 4th-person affix paradigm are described in
		<Xr ch="independent-personal-pronouns" /> and
		<Xr ch="indefinite-fourth-person-paradigm" />.
	</p>

	<Ex
		m="asinuma arpa=an kusu ne sekor haw-e-an"
		g="4.SG go.SG=4.S PURP COP QUOT voice-POSS-exist"
		tr="She said, 'I [self] will go.'"
		cite="bugaeva2008:38"
		dial="SAR"
		place="Tamura 1972: 377 ex. 9a, as cited in Bugaeva 2008: 38"
		note="The quoted speaker is a third party. The pronoun asinuma 'self' and the suffix =an mark the quoted speaker's 1st person via the 4th-person form — the semi-direct shift. A self-quotation by the same narrator would retain the 1SG prefix k= inside the quote."
	/>

	<Ex
		m="kani k=arpa sekor ku=haw-e-an"
		g="1SG 1SG.A=go.SG QUOT 1SG.S=voice-POSS-exist"
		tr="I said, 'I will go.'"
		constructed
		dial="SAR"
		note="Self-quotation retains the 1SG prefix k= (reduced form of ku= before a vowel-initial stem) inside the quote. The reporting verb ku=haw-e-an marks the narrator as the 1SG subject of the intransitive hawean. Contrast the preceding example, where the same quoted content attributed to a third party takes asinuma arpa=an."
	/>

	<p>
		<Ref k="tamura2000" p="75" /> is explicit that the 4th-person-in-quote is not indirect
		narration. <Ref k="bugaeva2008" p="38–43" /> formalizes a semi-direct category: the syntax of
		the quote is direct, but the person form signals that the source of the quoted content is a
		participant other than the current narrator. <Ref k="nikitina2021" /> sharpen the analysis:
		across languages, logophoric speech shares its syntax with direct speech and none with
		indirect; the Ainu semi-direct construction is syntactically direct-like and its person shift
		is a logophoric device, not a symptom of syntactic subordination ‹contested›. The
		clause-integration mechanics of the three types are treated in
		<Xr ch="clause-linkage-overview" />.
	</p>
</S>

<S t="The logophoricity debate" id="logophoricity">
	<p>
		Two analyses of the 4th-person-in-quote compete. <Ref k="tamura1972" /> calls it the
		'quotative first person' (引用の1人称), treating it as a sub-use of the 4th person alongside
		the inclusive, impersonal, and honorific uses.
		<Ref k="nakagawa2024" p="179" /> lists the quotative use as use ⑤ of the 4th person without
		positing a dedicated logophoric category. <Ref k="bugaeva2008" p="40–43" /> argues for a
		genuinely logophoric analysis: the pronoun <i lang="ain-Latn">asinuma</i> (literally
		<i lang="ain-Latn">a=sinuma</i> 'the self of one') is the singular logophoric form, invariably
		glossed by the speaker Mrs. Ito Oda as <span lang="ja">じぶん</span> 'self' rather than
		<span lang="ja">わたし</span> 'I'; it tracks the original speaker of the quoted discourse, not
		the current narrator ‹contested›.
	</p>
	<p>
		<Ref k="sato2008" p="259–262" /> and <Ref k="sato2004" p="179–184" /> treat the same forms
		as polysemous, deriving the narrative-first-person use from a first-person-plural (inclusive)
		strategy in which the 4th-person affixes index both protagonist and audience. The whole-range
		of the 4th person and the competing analyses of its referential extent are laid out in
		<Xr ch="fourth-person-honorific" />.
	</p>
	<p>
		The factbase is candid about what the available evidence does not settle. The logophoric
		analysis is based on Saru–Chitose data (Mrs. Ito Oda, Biratori); whether
		<i lang="ain-Latn">asinuma</i> carries the same dedicated 'original speaker' meaning in other
		Hokkaido dialects is unverified ‹speculative›. <Ref k="nakagawa2024" p="471" /> notes the
		same dialect gap. The best-supported claim is: in southern Hokkaido, when a narrator quotes a
		speaker other than herself, the quoted speaker's 1st-person morphology is systematically
		replaced by the 4th-person set, and this replacement is not optional ‹corpus-confirmed›.
		Whether the replacing forms constitute a grammaticalized logophoric subsystem or are a
		deployment of the general 4th person is the contested analytical choice.
	</p>
</S>

<S t="Yukar and uwepeker: narration in the protagonist's voice" id="yukar-narration">
	<p>
		The narrative first-person convention of yukar (heroic and divine epic) and uwepeker (prose
		tale) consists in the reciter voicing the protagonist through the 4th/indefinite person forms
		(<i lang="ain-Latn">a=</i>, <i lang="ain-Latn">=an</i>, <i lang="ain-Latn">i=</i>) rather
		than the narrator's own 1st-person forms <Ref k="nakagawa2024" p="174–179" />;
		<Ref k="sato2004" p="179–184" />. The mechanism is structurally parallel to the semi-direct
		shift in §3: the protagonist's perspective is indexed by the 4th-person set throughout the
		tale, while any stepping-out narrator commentary, where it appears, uses the 1st person.
		The oral-literature genres and their registers are described in
		<Xr ch="oral-literature-genre-taxonomy" />, and the TAM and evidential patterns by genre in
		<Xr ch="narrative-tam-evidential-patterning-by-genre" />.
	</p>
	<p>
		The analytical question is whether the convention is a genre-bound pragmatic device or a
		grammaticalized logophoric system. Several observations favour a convention-first reading:
		(a) the 4th-person forms are identical to those marking indefinite agents in everyday speech;
		(b) the distribution skews heavily by genre — the pattern is densest in yukar, lighter in
		uwepeker, lighter still in everyday quoted speech <Ref k="nakagawa2024" p="176–177" />
		‹corpus-suggested›; (c) <Ref k="sato2004" p="183" /> derives the narrative use from the
		inclusive reading, on which the protagonist is voiced as 'we' (protagonist and audience
		together). Against this, <Ref k="bugaeva2008" p="42–43" /> notes occurrences of
		<i lang="ain-Latn">asinuma</i> as the logophoric form outside oral literature, which would
		push toward a grammatical analysis that is not genre-defined ‹contested›. The chapter's
		conclusion is that a genre-convention analysis accounts for the distribution but does not
		preclude a logophoric analysis of the form: the two claims are compatible if the logophoric
		device originated in the narrative genre and extended into everyday quotation ‹speculative›.
	</p>
</S>

<S t="The hawe family: report verb, reportative evidential, and hearsay" id="hawe-family">
	<p>
		All three members of the <A w="haw" gl="voice" /> family derive from the possessed form
		<i lang="ain-Latn">haw-e</i> 'the voice of —'. They differ in the predicate that follows the
		possessed noun and, correspondingly, in what they assert about the source of information:
	</p>

	<table>
		<thead>
			<tr>
				<th>form</th>
				<th>structure</th>
				<th>function</th>
				<th>notes</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">hawean</i></td>
				<td><i lang="ain-Latn">haw-e-an</i> (voice-<span class="sc">poss</span>-exist)</td>
				<td>intransitive report verb 'say'</td>
				<td>quotative system; follows <i lang="ain-Latn">sekor</i> in DRD/SDRD</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">hawe ne</i></td>
				<td><i lang="ain-Latn">haw-e ne</i> (voice-<span class="sc">poss cop</span>)</td>
				<td>reportative evidential 'it is a word/report that'</td>
				<td>clause-final; limited to verbal information <Ref k="nakagawa2024" p="398" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">hawe as</i></td>
				<td><i lang="ain-Latn">haw-e as</i> (voice-<span class="sc">poss</span> arise)</td>
				<td>hearsay 'there is talk that, one hears that'</td>
				<td>ambient or overheard information; corpus count 395 tokens ‹corpus-confirmed›</td>
			</tr>
		</tbody>
	</table>

	<p>
		The reportative evidential <i lang="ain-Latn">hawe ne</i> differs from the quotative frame in
		scope: <i lang="ain-Latn">sekor … hawean</i> presents a specific attributed speech event,
		while <i lang="ain-Latn">hawe ne</i> predicates the whole proposition as something the
		speaker knows through words, without identifying a specific utterer
		<Ref k="nakagawa2024" p="398" />. The hearsay form <i lang="ain-Latn">hawe as</i> extends
		further: it reports ambient or indirectly received information, the 'sound' of something being
		said rather than a specific attributed utterance:
	</p>

	<Ex
		m="inne topaha i=kesanpa wa arki haw-e as"
		g="large herd 4.O=chase CONJ come.PL voice-POSS arise"
		tr="There arose the sound of a large herd chasing me and coming."
		cite="nakagawa2024:428"
		dial="SAR"
		note="hawe as marks hearsay: the narrator reports a perceived event as ambient sound/speech rather than a specific attributed utterance. The 4th-person object i= references the narrator in the oral-narrative first person (cf. §5)."
	/>

	<p>
		The naming cleft <i lang="ain-Latn">X sekor a=ye hawe ne</i> 'it is what is called X — so it
		is said' layers both systems. The inner <i lang="ain-Latn">sekor a=ye</i> lexicalized frame
		embeds the name; the outer <i lang="ain-Latn">hawe ne</i> frames the whole as a
		conventionally reported fact:
	</p>

	<Ex
		m="tap a=ye katu Piratur sekor a=ye haw-e ne"
		g="now 4.A=say manner Piratur QUOT 4.A=say voice-POSS COP"
		tr="The current way of calling it is 'Piratur' — that is what is said."
		cite="nakagawa2024:392"
		dial="SAR"
		place="Nakagawa ex. 778, after Kawamura 1985: 30"
		note="The sekor a=ye frame attributes the name; the outer hawe ne predicates the whole naming as conventionally/verbally reported fact. The 4th-person agent a= is used throughout because the name-givers are indefinite."
	/>
</S>

<S t="The sekor a=ye p ne naming cleft" id="naming-cleft">
	<p>
		A related but structurally distinct naming frame is <i lang="ain-Latn">X sekor a=ye p ne</i>
		'it is the thing that is called X'. Here <i lang="ain-Latn">p</i> is the nominalizer 'thing /
		the one', and <i lang="ain-Latn">ne</i> is the copula (see
		<Xr ch="nominalization-p-pe" />). The community discussion raises a valency point: in this
		frame the nominalizer <i lang="ain-Latn">p</i> is zero-valent — it is not the object of
		<i lang="ain-Latn">ye</i>. The transitive verb <i lang="ain-Latn">ye</i> (+2) has its two
		valency slots filled by the agent <i lang="ain-Latn">a=</i> (−1) and the implicit 3rd-person
		zero-object (−1), and <i lang="ain-Latn">p</i> then nominalizes the whole clause from outside
		(nukopoli, <Ref k="aynucorporadiscord" />, 2024) ‹contested›. If correct, the frame has the
		same underlying structure as the general predicate-nominalization cleft described in
		<Xr ch="nominalization-p-pe" />, with <i lang="ain-Latn">sekor</i> embedded inside.
	</p>
</S>

<S t="Dialect variation: sekor and ari/ani" id="dialect-variation">
	<p>
		<i lang="ain-Latn">Sekor</i> is the quotative marker of the southern Hokkaido dialects. Other
		Hokkaido varieties use <i lang="ain-Latn">ari</i> or <i lang="ain-Latn">ani</i> in the same
		quotative slot. <Ref k="nakagawa2024" p="471–472" /> notes the dialect distribution. The
		community discussion proposes that <i lang="ain-Latn">ari</i>/<i lang="ain-Latn">ani</i> is
		the older pan-Ainu quotative and that <i lang="ain-Latn">sekor</i> is a Saru-region
		innovation: an analytical form built from <i lang="ain-Latn">se</i> + <i lang="ain-Latn">kor</i>
		that replaced <i lang="ain-Latn">ari</i>/<i lang="ain-Latn">ani</i> as the Saru dialect grew
		as the cultural centre (nukopoli, <Ref k="aynucorporadiscord" />, 2024) ‹contested›. The
		directionality of change is not independently datable from the available sources, and the
		claim rests on internal evidence (the composition of <i lang="ain-Latn">sekor</i>) and the
		dialect distribution, not comparative-historical reconstruction. The equivalent in Sakhalin
		varieties (<i lang="ain-Latn">nah</i>), occupying the same functional slot, is cited for
		typological contrast only; its morphology and distribution belong to the Sakhalin contrast
		chapter.
	</p>
</S>

<S t="Honest gaps" id="gaps">
	<p>
		Three significant uncertainties bear on the analysis of this chapter. First, the logophoric
		vs. 4th-person debate (§4) remains open: the key evidence for a dedicated logophoric
		pronoun <i lang="ain-Latn">asinuma</i> comes from Saru–Chitose (Mrs. Ito Oda), and no study
		has verified that the same 'self / original speaker' reading is obligatory in other dialects
		<Ref k="bugaeva2008" p="42–43" />. Second, the distributional boundary between the
		genre-bound narration convention (§5) and a grammaticalized logophoric device is not resolved:
		quantified evidence of <i lang="ain-Latn">asinuma</i> in everyday versus oral-literary speech
		is not available in the read sources ‹speculative›. Third, the non-Saru dialect behaviour of
		the quotative system — what role <i lang="ain-Latn">ari</i>/<i lang="ain-Latn">ani</i> plays
		in the DRD/SDRD/IRD split, and whether the same transitivity constraint holds — has not been
		described at the same level of detail as the Saru–Chitose baseline in
		<Ref k="bugaeva2008" /> and <Ref k="tamura2000" />.
	</p>
</S>
