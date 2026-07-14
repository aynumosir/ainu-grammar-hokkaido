<!-- src/lib/grammar/chapters/transitivizer-ka-valency-pairs.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Overview" id="overview">
	<p>
		Three morphological mechanisms build transitive verb forms from intransitive bases in
		Hokkaido Ainu, all operating within the arity calculus set out in
		<Xr ch="valency-voice-overview" />. The oldest layer consists of stem-specific
		<em>forming suffixes</em> — a vowel suffix <i lang="ain-Latn">-V</i> or the suffix
		<i lang="ain-Latn">-ke</i> — that produce lexically listed transitivity pairs; these are
		non-productive and the intransitive and transitive members are recorded as separate
		dictionary entries <Ref k="nakagawa2024" p="198–199" />. A second suffix,
		<i lang="ain-Latn">-ka</i>, overlaps in function with the forming suffixes but extends to
		stative and property bases and to derived stems, placing it on the boundary between the
		forming-suffix category and the productive direct causative; the literature has not settled
		its classification <Ref k="bugaeva2014" p="129–130, 143" />;
		<Ref k="kobayashi2015" p="33" /> ‹contested›. The third mechanism, the transitivizer
		<i lang="ain-Latn">-kar</i>, productively adds an object to any intransitive base
		(arity +1) and must be distinguished from two surface-identical strings: a verse-filler
		<i lang="ain-Latn">-kar</i> appended to transitives with no arity effect, and the verb
		<A w="kar" gl="make, do" /> that appears as the head of incorporated-object constructions
		such as <i lang="ain-Latn">cise-kar</i> 'build a house'
		<Ref k="nakagawa2024" p="209–210" />.
	</p>
	<p>
		The productive indirect causative <i lang="ain-Latn">-re/-te/-e</i>, which supplies the
		default transitivizing strategy and gradually displaces
		<i lang="ain-Latn">-ka</i> in the more southerly dialects, is treated separately in
		<Xr ch="causative-morphological-re-e-te" />. The valency classes and the transitivity
		test that diagnoses derived verb type are discussed in
		<Xr ch="transitivity-and-valence-classes" />.
	</p>
</S>

<S t="Forming suffixes and lexical transitivity pairs" id="forming-suffixes">
	<p>
		Nakagawa's paradigm tables 表38 and 表39 set out two structural patterns
		<Ref k="nakagawa2024" p="198–199" />. In the first, the intransitive is the bare root and
		the transitive adds a final vowel (a suffix <i lang="ain-Latn">-V</i> that assimilates to
		the stem shape). In the second, the intransitive already carries
		<i lang="ain-Latn">-ke</i> and the transitive replaces it with the vowel suffix. For the
		motion-verb class the pattern reverses: the bare root is intransitive and
		<i lang="ain-Latn">-ke</i> marks the transitive. Table 1 samples all three patterns,
		ending with the <i lang="ain-Latn">-ka</i> pair discussed in the following section.
	</p>

	<table>
		<caption>Table 1. Selected Hokkaido Ainu transitivity pairs (Nakagawa 2024: 198–203)</caption>
		<thead>
			<tr>
				<th>intransitive</th>
				<th>transitive</th>
				<th>transitive suffix</th>
				<th>approximate sense</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">tuy</i></td>
				<td><i lang="ain-Latn">tuy-e</i></td>
				<td><i lang="ain-Latn">-V</i></td>
				<td>'be severed' / 'cut sth'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">kay</i></td>
				<td><i lang="ain-Latn">kay-e</i></td>
				<td><i lang="ain-Latn">-V</i></td>
				<td>'go around' / 'go around sth'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">as</i></td>
				<td><i lang="ain-Latn">as-i</i></td>
				<td><i lang="ain-Latn">-V</i></td>
				<td>'stand' / 'erect sth'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">rew-ke</i></td>
				<td><i lang="ain-Latn">rew-e</i></td>
				<td><i lang="ain-Latn">-ke</i> on intr. / <i lang="ain-Latn">-V</i> on tr.</td>
				<td>'come out' / 'let sth out'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">yas-ke</i></td>
				<td><i lang="ain-Latn">yas-a</i></td>
				<td><i lang="ain-Latn">-ke</i> on intr. / <i lang="ain-Latn">-V</i> on tr.</td>
				<td>'run' / 'send sth'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">per-ke</i></td>
				<td><i lang="ain-Latn">per-e</i></td>
				<td><i lang="ain-Latn">-ke</i> on intr. / <i lang="ain-Latn">-V</i> on tr.</td>
				<td>'split (vi)' / 'split sth'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ran</i></td>
				<td><i lang="ain-Latn">ran-ke</i></td>
				<td><i lang="ain-Latn">-ke</i></td>
				<td>'descend' / 'lower sth'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ahun</i></td>
				<td><i lang="ain-Latn">ahun-ke</i></td>
				<td><i lang="ain-Latn">-ke</i></td>
				<td>'enter' / 'put sth in'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">yan</i></td>
				<td><i lang="ain-Latn">yan-ke</i></td>
				<td><i lang="ain-Latn">-ke</i></td>
				<td>'come ashore' / 'land sth'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">rikin</i></td>
				<td><i lang="ain-Latn">rikin-ka</i></td>
				<td><i lang="ain-Latn">-ka</i></td>
				<td>'go up' / 'raise sth'</td>
			</tr>
		</tbody>
	</table>

	<p>
		Bugaeva's 387-verb Saru sample counts 111 verbs with <i lang="ain-Latn">-V</i> and 9
		with <i lang="ain-Latn">-ke</i>, classifying all as direct causatives on semantic grounds
		<Ref k="bugaeva2014" p="130, 143" />. The <i lang="ain-Latn">-V</i> set is closed and
		non-productive; no new pairs of this type are formed, and the members are listed
		separately in the dictionaries <Ref k="tamura1996" />. The three motion verbs that take
		<i lang="ain-Latn">-ke</i> as their transitive suffix (<i lang="ain-Latn">ran</i>,
		<i lang="ain-Latn">ahun</i>, <i lang="ain-Latn">yan</i>) have plural counterparts formed
		with the productive suffix <i lang="ain-Latn">-te</i> instead
		<Ref k="nakagawa2024" p="202–203" />.
	</p>

	<Ex
		m="ran=an"
		g="descend=4.S"
		tr="I went down."
		constructed
		note="Intransitive base; the fourth-person S suffix =an confirms intransitive status."
	/>

	<Ex
		m="ku=ran-ke"
		g="1SG.A=descend-CAUS"
		tr="I lowered it."
		constructed
		note="Transitive counterpart of ran via the motion-verb forming suffix -ke. The 1SG.A prefix ku= marks the verb as transitive. The suffix -ke here selects non-agentive, inanimate objects; agentive human causees take the productive -te (compare Nakagawa 2024: 202–203, exx. 196–197 on ahun-ke vs ahun-te)."
	/>
</S>

<S t="The suffix -ka: hosts, dialect distribution, and semantics" id="ka">
	<p>
		Among the motion-verb set, <A w="rikin" gl="go up (vi)" /> takes
		<i lang="ain-Latn">-ka</i> as its transitive suffix in most Hokkaido dialects. Nakagawa's
		表43 also lists a further set of verbs to which <i lang="ain-Latn">-ka</i> attaches
		without belonging to the motion-verb class: <A w="retar" gl="be white" />,
		<A w="us" gl="go out" />, <A w="iunin" gl="settle (vi)" />, and several
		dialect-restricted forms (<i lang="ain-Latn">teyne</i> in Ishikari;
		<i lang="ain-Latn">een</i> in Yakumo, Saru, and Bihoro). The distribution across this
		second group is a lexical property of the individual verbs, not a regional feature
		<Ref k="nakagawa2024" p="203" />.
	</p>
	<p>
		In Saru, the pair <i lang="ain-Latn">nam-te ~ nam-ka</i> 'make cold' shows
		intra-dialectal competition between the productive suffix <i lang="ain-Latn">-te</i> and
		<i lang="ain-Latn">-ka</i> on the same base
		<Ref k="kobayashi2015" p="33" />; the analytical implications are taken up in the debate
		section below. Cross-dialectally,
		<i lang="ain-Latn">-ka</i> covers a broader verb class in northeastern Hokkaido; the
		replacement of <i lang="ain-Latn">-ka</i> by <i lang="ain-Latn">-re/-te/-e</i> is most
		advanced in Saru, as Bugaeva's sample of 38 <i lang="ain-Latn">-ka</i> verbs against
		190 <i lang="ain-Latn">-re/-e/-te</i> verbs shows
		<Ref k="bugaeva2014" p="135–136, 143–144" />.
	</p>

	<Ex
		m="rikin=an"
		g="go.up=4.S"
		tr="I went up."
		constructed
		note="Intransitive base; =an is the fourth-person S suffix."
	/>

	<Ex
		m="ku=rikin-ka"
		g="1SG.A=go.up-CAUS"
		tr="I raised it."
		constructed
		note="Transitive counterpart via -ka. The 1SG.A prefix ku= marks transitive status."
	/>

	<p>
		The semantic boundary between the forming-suffix causatives and the productive
		<i lang="ain-Latn">-te/-re</i> is visible on verbs that admit both: for
		<A w="ahun" gl="enter" />, <i lang="ain-Latn">ahun-ke</i> encodes direct causation with
		a non-agentive, inanimate causee (putting luggage inside), while
		<i lang="ain-Latn">ahun-te</i> or <i lang="ain-Latn">ahun-re</i> is used when the causee
		is an agentive human brought inside
		<Ref k="nakagawa2024" p="202–203" />. The parallel holds for
		<i lang="ain-Latn">-ka</i>: it signals that the causee is treated as a highly affected
		patient (direct causation), contrasting with the indirect or permissive readings
		accessible to <i lang="ain-Latn">-re/-te/-e</i>
		<Ref k="bugaeva2014" p="130, 139" />.
	</p>
	<p>
		The suffix <i lang="ain-Latn">-ka</i> also attaches outside the indirect reflexive prefix
		<i lang="ain-Latn">si-</i> to produce a 'pretend to' reading. Satō (2007) analyses this
		construction within his account of <i lang="ain-Latn">si-</i> as marking indirect
		self-involvement: a pretense is only effective through others' perception, which is
		precisely the situation the indirect reflexive encodes
		<Ref k="sato2007" p="36" />.
	</p>

	<Ex
		m="ku=ko-si-ranpewtek-ka wa k=an"
		g="1SG.A=APPL-AUTOC-know.nothing-CAUS CONJ 1SG.S=exist"
		tr="I pretended not to know about it."
		cite="sato2007"
		dial="CHI"
		note="Satō ex. 6, approximately p. 36 (the OCR of Satō 2007 carries no per-page running heads; the location is approximate within the pp. 31–39 article). The APPL prefix ko- supplies the semantic object (the thing one pretends not to know); si- contributes the autocausative/indirect self-involvement reading; -ka is the causative suffix. The following wa k=an reports the resulting state."
	/>
</S>

<S t="The transitivizer -kar" id="kar">
	<p>
		The suffix <i lang="ain-Latn">-kar</i> productively transitivizes intransitive verbs
		(arity +1): <A w="peray" gl="fish (vi)" /> → <A w="peray-kar" gl="catch (a fish)" />;
		<A w="cis" gl="cry (vi)" /> → <A w="cis-kar" gl="cry over sth" />;
		<A w="hotuye" gl="shout (vi)" /> → <A w="hotuye-kar" gl="call sb" />
		<Ref k="nakagawa2024" p="209" />. Its productivity range is wider than that of
		<i lang="ain-Latn">-ka</i>: no restriction to a semantic class or phonological stem shape
		applies, and derived forms can be created from any intransitive base.
	</p>
	<p>
		Three surface-identical strings require disambiguation through the arity computation
		<Ref k="nakagawa2024" p="209–210" />. First, the transitivizer
		<i lang="ain-Latn">-kar</i> itself, raising arity by one on an intransitive base. Second,
		a homophonous verse-filler <i lang="ain-Latn">-kar</i> that appends to transitive stems
		with no arity change and no semantic contribution — a poetic register device extending
		syllable count: <i lang="ain-Latn">kocari</i> (a three-place verb) remains three-place as
		<i lang="ain-Latn">kocari-kar</i>. Third, the verb <i lang="ain-Latn">kar</i> 'make, do'
		that appears as the head of incorporated-object constructions: in
		<i lang="ain-Latn">cise-kar</i> 'build a house', the noun <i lang="ain-Latn">cise</i>
		'house' fills the object slot of the two-place verb <i lang="ain-Latn">kar</i>, and the
		arity is that of <i lang="ain-Latn">kar</i> itself
		<Ref k="satoni2022" p="§3.1" />.
	</p>
	<p>
		Community observation identifies a productive 'treat-verb' pattern within the third
		type: forms such as <i lang="ain-Latn">nimaw-e-kar</i> 'treat a wound with medicinal
		bark', <i lang="ain-Latn">osoro-kar</i> 'wipe', and <i lang="ain-Latn">sikaye-kar</i>
		'hammer in a peg' each incorporate an instrument or body-part noun into
		<i lang="ain-Latn">kar</i> 'do'
		<Ref k="aynucorporadiscord" /> (nukopoli, aynu-corpora Discord 2024).
		These are incorporated-object constructions and belong to the account in
		<Xr ch="noun-incorporation-object" />, not to the transitivizer suffix ‹corpus-suggested›.
	</p>

	<Ex
		m="ku=hotuye-kar"
		g="1SG.A=shout-TRVZ"
		tr="I called someone."
		constructed
		note="The transitivizer -kar adds an object slot to the intransitive hotuye 'shout'. The 1SG.A prefix ku= marks the derived verb as transitive."
	/>
</S>

<S t="Direct causative or forming suffix: the analytical debate" id="debate">
	<p>
		Nakagawa treats the forming suffixes (<i lang="ain-Latn">-V</i>,
		<i lang="ain-Latn">-ke</i>) as 形成接尾辞 listed in 表38–39, a distinct category from the
		causative suffixes of 表41–43, which include <i lang="ain-Latn">-re/-te/-e</i>,
		<i lang="ain-Latn">-ke</i> for motion verbs, and <i lang="ain-Latn">-ka</i>
		<Ref k="nakagawa2024" p="198–203" />. The category distinction rests on closed membership
		and the absence of productive alternation: the <i lang="ain-Latn">-V</i> and
		<i lang="ain-Latn">-ke</i> pairs are dictionary-listed lexical alternants.
	</p>
	<p>
		Bugaeva (2014: 129–130, 143) unifies <i lang="ain-Latn">-V</i>,
		<i lang="ain-Latn">-ke</i>, and <i lang="ain-Latn">-ka</i> as direct causatives,
		opposing them as a group to the indirect causative <i lang="ain-Latn">-re/-te/-e</i> by
		the non-agentive, highly-affected causee they encode. The 387-verb Saru count — 111 verbs
		under <i lang="ain-Latn">-V</i>, 9 under <i lang="ain-Latn">-ke</i>, 38 under
		<i lang="ain-Latn">-ka</i> — establishes the proportions but does not settle the
		morphological-status question independently
		<Ref k="bugaeva2014" p="130, 143" />.
	</p>
	<p>
		Kobayashi (2015: 33) adduces evidence for separating
		<i lang="ain-Latn">-ka</i> from the most lexicalized forming suffixes. Two properties
		distinguish it: intra-dialectal alternation with <i lang="ain-Latn">-re/-e/-te</i>
		(the <i lang="ain-Latn">nam-te ~ nam-ka</i> Saru pair noted above), and attachment to
		derived stems — <i lang="ain-Latn">ar-us-tek-ka</i> 'annihilate' and
		<i lang="ain-Latn">ipe-rusuy-ka</i> 'make hungry' both show
		<i lang="ain-Latn">-ka</i> appended to a multi-morpheme derived stem, a combinatorial
		freedom the closed <i lang="ain-Latn">-V</i> and <i lang="ain-Latn">-ke</i> forming
		suffixes do not share <Ref k="kobayashi2015" p="33" />. The
		<i lang="ain-Latn">si-…-ka</i> 'pretend' construction described above
		provides a further case: <i lang="ain-Latn">-ka</i> attaches outside the reflexive prefix
		<i lang="ain-Latn">si-</i>, which has already reconfigured the argument frame.
	</p>
	<p>
		Satō (2008: 235–238) includes <i lang="ain-Latn">-ka</i> in the causative allomorphy list
		alongside <i lang="ain-Latn">-re</i>, <i lang="ain-Latn">-te</i>,
		<i lang="ain-Latn">-ke</i>, and <i lang="ain-Latn">-e</i>, stating that it tends to
		follow stems in <i lang="ain-Latn">m</i> or <i lang="ain-Latn">y</i> — "大体 as a
		tendency, with exceptions." The qualifier matters: a pure phonological allomorph would
		show regular conditioning; the exceptions reflect a lexical residue that fits neither a
		clean allomorphy account nor a uniform forming-suffix categorisation. Satō also notes that
		some <i lang="ain-Latn">-ke</i> and <i lang="ain-Latn">-e</i> forms are bleached
		transitivizers with no causative semantics
		(<i lang="ain-Latn">san-ke</i> 'put out a fine' from <i lang="ain-Latn">san</i> 'go
		out'), which aligns with Nakagawa's forming-suffix category and places the
		productive/lexical boundary inside, not between, these suffixes
		<Ref k="sato2008" p="235–238" />.
	</p>
	<p>
		Ijäs's Lesson 9 states that <i lang="ain-Latn">-re</i> 'turns intransitive verbs into
		transitive verbs', which captures the right intuition for the valency-increasing set as a
		whole but supplies no allomorphy and does not distinguish
		<i lang="ain-Latn">-ka</i>, <i lang="ain-Latn">-ke</i>, or the lexical forming-suffix
		pairs as separate sub-types <Ref k="ijas2023" /> ‹consensus› (the source gives no
		allomorphy detail).
	</p>
</S>

<S t="Attachment to the base stem: rikinka and the absence of rikipka" id="reduplication">
	<p>
		The verb <A w="rikin" gl="go up (vi)" /> belongs to a class of Hokkaido Ainu
		motion-verb intransitives showing a <i lang="ain-Latn">-n</i>/<i lang="ain-Latn">-p</i>
		stem alternation in reduplication and some plural contexts, paralleling
		<i lang="ain-Latn">san</i>/<i lang="ain-Latn">sap</i>,
		<i lang="ain-Latn">yan</i>/<i lang="ain-Latn">yap</i>, and
		<i lang="ain-Latn">ahun</i>/<i lang="ain-Latn">ahup</i>
		<Ref k="aynucorporadiscord" /> (nukopoli, aynu-corpora Discord 2026) ‹speculative›.
		In reduplication contexts <i lang="ain-Latn">rikin</i> alternates with
		<i lang="ain-Latn">rikip</i>.
	</p>
	<p>
		When <i lang="ain-Latn">-ka</i> attaches, only <i lang="ain-Latn">rikin-ka</i> is
		attested; the form <i lang="ain-Latn">*rikip-ka</i> is absent from the corpus
		<Ref k="aynucorporadiscord" /> (nukopoli, aynu-corpora Discord 2026) ‹corpus-suggested›.
		The distribution shows that <i lang="ain-Latn">-ka</i> targets the citation form of the
		stem — the singular <i lang="ain-Latn">-n</i> variant — not the alternate
		<i lang="ain-Latn">-p</i> shape that arises in reduplicated environments. The attachment
		point is the lexical base, prior to any stem alternation, a property shared by other
		causative suffixes that affix to the verb stem before verbal-number morphology applies.
		This behavior is consistent with Kobayashi's evidence that
		<i lang="ain-Latn">-ka</i> operates at the same morphological level as the productive
		causative rather than with the most lexicalized forming suffixes
		<Ref k="kobayashi2015" p="33" />.
	</p>
	<p>
		The diachronic account of the <i lang="ain-Latn">-V</i> and
		<i lang="ain-Latn">-ke</i>/<i lang="ain-Latn">-ka</i> pairs as anticausatives in
		origin is explored in <Ref k="bugaeva2025" paren />. The middle and anticausative patterns
		that overlap synchronically with the transitivity pairs are treated in
		<Xr ch="middle-anticausative-passive" />, and deverbal derivation more broadly in
		<Xr ch="denominal-deverbal-verb-derivation" />.
	</p>
</S>
