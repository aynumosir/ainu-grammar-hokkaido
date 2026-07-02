<!-- src/lib/grammar/chapters/causative-morphological-re-e-te.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Place in the causative inventory" id="overview">
	<p>
		Hokkaido Ainu marks causation with a small set of verb-final suffixes. The productive
		majority is one underlying form realized as three phonologically conditioned allomorphs:
		<i lang="ain-Latn">-re</i> after a vowel or the glides <i lang="ain-Latn">y</i>,
		<i lang="ain-Latn">w</i>; <i lang="ain-Latn">-te</i> after any consonant other than
		<i lang="ain-Latn">r</i>; and <i lang="ain-Latn">-e</i> after <i lang="ain-Latn">r</i>
		<Ref k="nakagawa2024" p="200–201" />; <Ref k="bugaeva2014" p="134" />. In Nakagawa's
		arity calculus it carries the value <strong>+1</strong>: the original subject of the
		base verb is reassigned to the object position of the derived verb, and a new causer
		participant fills the subject position <Ref k="nakagawa2024" p="200–201, 431" />.
	</p>

	<p>
		Three further suffix types occupy the same post-stem slot: the forming suffixes
		<i lang="ain-Latn">-V</i> and <i lang="ain-Latn">-ke</i> that build transitivity pairs,
		the direct-causative / transitivizer <i lang="ain-Latn">-ka</i>, and the valency-neutral
		indefinite causative <i lang="ain-Latn">-yar</i> / <i lang="ain-Latn">-ar</i>. The
		indefinite causative, which leaves the causee unexpressed and unindexed, is treated in
		<Xr ch="permissive-sociative-causative-yar" />; the forming suffixes and
		<i lang="ain-Latn">-ka</i> are covered in <Xr ch="transitivizer-ka-valency-pairs" />.
		Causee marking, the double-object frame, and double causatives are developed in
		<Xr ch="causee-marking-ditransitive-double-causative" />. The present chapter concerns
		<i lang="ain-Latn">-re</i> / <i lang="ain-Latn">-te</i> / <i lang="ain-Latn">-e</i>
		alone: their allomorphy, their arity effect, the productive versus non-productive split,
		and the direct/indirect and coercive/permissive distinctions.
	</p>
</S>

<S t="Allomorphy" id="allomorphy">
	<p>
		The three surface forms are phonologically predictable from the stem-final segment
		<Ref k="nakagawa2024" p="201" />; <Ref k="bugaeva2014" p="134" />; <Ref k="tamura2000" paren />.
		Tamura's Saru dictionary and Bugaeva's 387-verb Saru/HSW corpus sample converge on the
		same conditioning environments. Satō's Chitose textbook gives the same three allomorphs
		with the qualification "大体 by stem-final sound, but with exceptions", acknowledging a
		residue of forms that resist the phonological prediction
		<Ref k="sato2008" p="234–238" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>environment</th>
				<th>allomorph</th>
				<th>base</th>
				<th>derived</th>
				<th>meaning</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>after vowel; after <i lang="ain-Latn">y</i>, <i lang="ain-Latn">w</i></td>
				<td><i lang="ain-Latn">-re</i></td>
				<td><i lang="ain-Latn">nu</i> 'hear'</td>
				<td><i lang="ain-Latn">nu-re</i></td>
				<td>'make/let hear, tell'</td>
			</tr>
			<tr>
				<td>after vowel; after <i lang="ain-Latn">y</i>, <i lang="ain-Latn">w</i></td>
				<td><i lang="ain-Latn">-re</i></td>
				<td><i lang="ain-Latn">siknu</i> 'live, be alive'</td>
				<td><i lang="ain-Latn">siknu-re</i></td>
				<td>'keep alive'</td>
			</tr>
			<tr>
				<td>after vowel; after <i lang="ain-Latn">y</i>, <i lang="ain-Latn">w</i></td>
				<td><i lang="ain-Latn">-re</i></td>
				<td><i lang="ain-Latn">tuy</i> 'cut (vi)'</td>
				<td><i lang="ain-Latn">tuy-re</i></td>
				<td>'make (sb) cut'</td>
			</tr>
			<tr>
				<td>after consonant other than <i lang="ain-Latn">r</i></td>
				<td><i lang="ain-Latn">-te</i></td>
				<td><i lang="ain-Latn">sinot</i> 'play'</td>
				<td><i lang="ain-Latn">sinot-te</i></td>
				<td>'make/let play'</td>
			</tr>
			<tr>
				<td>after consonant other than <i lang="ain-Latn">r</i></td>
				<td><i lang="ain-Latn">-te</i></td>
				<td><i lang="ain-Latn">ek</i> 'come (SG)'</td>
				<td><i lang="ain-Latn">ek-te</i></td>
				<td>'bring (SG), fetch'</td>
			</tr>
			<tr>
				<td>after <i lang="ain-Latn">r</i></td>
				<td><i lang="ain-Latn">-e</i></td>
				<td><i lang="ain-Latn">nukar</i> 'see'</td>
				<td><i lang="ain-Latn">nukar-e</i></td>
				<td>'show'</td>
			</tr>
		</tbody>
	</table>

	<p>
		One phonological property separates the productive suffix from the non-productive cluster:
		it does not shift the pitch-accent kernel of the stem —
		<i lang="ain-Latn">kú-re</i> and <i lang="ain-Latn">sinót-te</i>, not
		<i lang="ain-Latn">*ku-ré</i> or <i lang="ain-Latn">*sinot-té</i>
		<Ref k="bugaeva2014" p="130–131" />.
	</p>

	<p>
		The analysis of <i lang="ain-Latn">siknu-re</i> 'keep alive' — intransitive
		<A w="siknu" gl="live, be alive" /> plus <i lang="ain-Latn">-re</i> — is corroborated
		in community linguistic discussion <Ref k="aynucorporadiscord" /> (nukopoli, aynu-corpora
		Discord, 2026): the vowel-final stem takes the predicted allomorph without irregularity
		‹corpus-confirmed›. A related community observation notes that lexicalized forms such
		as <i lang="ain-Latn">iyairaykere</i> ({'<'} <i lang="ain-Latn">i=yairayke-re</i>,
		lit. 'makes people grateful') and <i lang="ain-Latn">irankarapte</i>
		({'<'} <i lang="ain-Latn">i=rankarap-te</i>, lit. 'makes people greet') may carry an
		"obligatory" or "deserving-of" reading, analogous to participial active/passive contrasts
		in other languages <Ref k="aynucorporadiscord" /> (nukopoli, aynu-corpora Discord, 2024)
		‹speculative›. The allomorphic conditioning in these forms follows the regular pattern;
		the proposed extended reading of the construction is not confirmed in the primary literature.
	</p>
</S>

<S t="Arity and the argument-frame shift" id="arity">
	<p>
		On an intransitive base the productive causative yields a transitive verb: the base's
		sole argument (S) is reassigned to the object position (O), and the new causer argument
		fills the subject position (A). The person-marking diagnostics of
		<Xr ch="person-marking-architecture" /> confirm the output class: a derived transitive
		takes the prefixal A indexes, while the base intransitive takes suffixal S indexes.
		Nakagawa positions the causative suffix after the forming and plural material and before
		the outer person index, placing it in the penultimate layer of the verb-word template
		<Ref k="nakagawa2024" p="210–212" />.
	</p>

	<p>
		The base-and-derived pair for <A w="sinot" gl="play" /> makes the argument-frame shift
		visible. In the base clause <i lang="ain-Latn">matkaci</i> 'girl' is the intransitive
		subject; in the causative clause she is the object (causee), while the causer
		<i lang="ain-Latn">hapo</i> 'mother' takes the subject position:
	</p>

	<Ex
		m="matkaci sinot"
		g="girl play"
		tr="The girl played."
		cite="nakagawa2024:431"
		dial="SAR"
		place="Nakagawa ex. 954, after Tamura 1984"
	/>

	<Ex
		m="hapo matkaci sinot-te"
		g="mother girl play-CAUS"
		tr="Mother made the girl play."
		cite="nakagawa2024:431"
		dial="SAR"
		place="Nakagawa ex. 954′"
		note="The base intransitive subject matkaci becomes the causee object; hapo is the new causer subject. The -te allomorph follows the consonant-final stem sinot."
	/>

	<p>
		When the causee is cross-referenced on the verb by a person index, the argument
		reassignment is morphologically explicit. Where the first person is the intransitive
		subject (<i lang="ain-Latn">ku=sinot</i> 'I play'), causativization realigns the same
		participant as the object <i lang="ain-Latn">en=</i>:
	</p>

	<Ex
		m="hapo en=sinot-te"
		g="mother 1SG.O=play-CAUS"
		tr="Mother made me play."
		cite="nakagawa2024:431"
		dial="SAR"
		place="Nakagawa ex. 955"
		note="The first-person argument shifts from the subjective index ku= to the objective en=, diagnosing the arity increase from vi to vt."
	/>

	<p>
		On a transitive base, the productive causative yields a double-object verb (vd): the
		original A becomes the O causee, the original O is retained as an inner object, and the
		new causer is the derived A. The attested form
		<i lang="ain-Latn">a=e=tuy-e-re</i> 'I made you cut (the grapevines)' —
		<i lang="ain-Latn">tuy-e</i> 'cut' [vt] with <i lang="ain-Latn">-re</i> added —
		carries two simultaneous person indexes and is cited by Bugaeva and Kobayashi as evidence
		that causativization of transitives is both licensed and productive
		<Ref k="bugaevakobayashi2022" p="§4.1.2" />. Double causatives — the productive suffix
		added to an already causativized base — are also attested, yielding a four-place verb;
		the attested <i lang="ain-Latn">kor-e-re</i> 'cause to give' is one such form
		<Ref k="bugaeva2014" p="142–143" />. Both the double-object frame and double causatives
		are treated in <Xr ch="causee-marking-ditransitive-double-causative" />.
	</p>
</S>

<S t="Productive vs. non-productive causatives" id="productivity">
	<p>
		Bugaeva's 387-verb Saru/HSW corpus sample provides the most comprehensive quantitative
		treatment of the suffix inventory <Ref k="bugaeva2014" p="130, 143–144" />. The four
		suffix types divide by count, base-class, and causation type:
	</p>

	<table>
		<thead>
			<tr>
				<th>suffix</th>
				<th>sample (n)</th>
				<th>vi / vt base</th>
				<th>causation type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">-V</i></td>
				<td>111</td>
				<td>109 vi / 2 vt</td>
				<td>direct (lexical)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">-ke</i></td>
				<td>9</td>
				<td>9 vi / 0 vt</td>
				<td>direct</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">-ka</i></td>
				<td>38</td>
				<td>33 vi / 5 vt</td>
				<td>direct</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">-re</i> / <i lang="ain-Latn">-te</i> / <i lang="ain-Latn">-e</i></td>
				<td>190</td>
				<td>113 vi / 16 vt (+ 61 indirect)</td>
				<td>direct (129) + indirect (61)</td>
			</tr>
		</tbody>
	</table>

	<p>
		At 190 tokens, the productive suffix outnumbers the three non-productive types combined
		and is the only one that covers both direct and indirect causation from both vi and vt
		bases <Ref k="bugaeva2014" p="143" />. It also attaches freely to derived stems — those
		prefixed by applicatives or reciprocal <i lang="ain-Latn">u-</i> — while the
		non-productive suffixes do not <Ref k="kobayashi2015" p="33" />. This combinatorial
		range marks it as the productive default of Hokkaido Ainu causation ‹consensus›.
	</p>

	<p>
		Nakagawa separates the forming suffixes <i lang="ain-Latn">-V</i> and
		<i lang="ain-Latn">-ke</i> as 形成接尾辞 ('forming suffixes') building lexical
		transitivity pairs, distinct in status from the grammatical causative
		<Ref k="nakagawa2024" p="198–203" />. Bugaeva's analysis subsumes even these under
		'direct causative', treating the entire cluster as a valency-increasing operator set
		with differing scopes <Ref k="bugaeva2014" p="129–130, 143" />;
		<Ref k="bugaevakobayashi2022" p="§4.1.2" />. The classification of the forming suffixes
		as lexical versus grammatical causatives is ‹contested›; the relevant forms are
		developed in <Xr ch="transitivizer-ka-valency-pairs" />.
	</p>
</S>

<S t="Direct and indirect causation; coercive and permissive use" id="direct-indirect">
	<p>
		When the base intransitive has an agentive subject, the productive causative yields an
		indirect causative: the causee acts on its own in response to the causer's enabling,
		permission, or direction. When the base is stative or non-agentive, the direct reading
		predominates, with the causee as a highly affected non-volitional patient
		<Ref k="bugaeva2014" p="130, 139" />. The non-productive suffixes are limited to the
		direct reading; the productive suffix spans both.
	</p>

	<p>
		An earlier analysis by Fukuda (Tamura) restricted the productive suffix to coercive
		causation; Bugaeva corrects this, citing Satō 2008, and documents permissive readings
		from corpus data <Ref k="bugaeva2014" p="139, 141–142" />. A verb of ingestion such as
		<A w="e" gl="eat" /> → <i lang="ain-Latn">e-re</i> carries both coercive ('feed a
		child') and permissive ('let an adult eat') readings contextually, following the
		crosslinguistic pattern for ingestive verbs observed by Shibatani and Pardeshi (cited
		in <Ref k="bugaeva2014" p="141–142" />). Satō 2008 lesson 30 presents the same
		coercive/permissive ambiguity and derives it from the same form
		<Ref k="sato2008" p="237" />. The following attested example shows the causative of
		<A w="ipe" gl="eat a meal" /> — <i lang="ain-Latn">ipe-re</i> 'feed' — in a Saru
		narrative with an indefinite-agent fourth-person prefix:
	</p>

	<Ex
		m="un=ipe-re wa i=kore kur un=osura noyne sioran"
		g="1PL.EXCL.O=eat-CAUS CONJ 4.O=give person 1PL.EXCL.O=abandon like seem"
		tr="The person who had fed us then abandoned us, it seemed."
		cite="ainukoraci1991"
		dial="SAR"
		place="Hamada Takashi, 'pon cape asiknep'; Ainu Times no. 24, p. 3 (ainu-times/024/3#3), extract"
		note="un= is 1PL.EXCL object (us); ipe-re shows -re after the vowel-final stem ipe 'eat a meal'. The verb heads a relative clause (kur un=ipe-re 'the person who fed us'). sioran = siri + an, visual-evidential existential."
	/>

	<p>
		Ijäs's Lesson 9 formulation that <i lang="ain-Latn">-re</i> "simply turns intransitive
		verbs into transitive verbs" is a workable approximation for the basic indirect
		causative; it omits the allomorphic detail, the permissive reading, the causativization
		of transitives, and the direct-causative uses <Ref k="ijas2023" /> ‹consensus›.
	</p>
</S>

<S t="Motion verbs and restrictions" id="motion-verbs">
	<p>
		A subset of singular motion verbs takes <i lang="ain-Latn">-ke</i> as their primary
		causative suffix, and Nakagawa documents a semantic split within this class: when a
		non-volitional object (cargo, luggage) is caused to move, the suffix
		<i lang="ain-Latn">-ke</i> is standard; when a volitional person is caused to move,
		the productive <i lang="ain-Latn">-te</i> is used instead
		<Ref k="nakagawa2024" p="202–203" />. The minimal contrast for
		<A w="ahun" gl="enter (SG)" /> at Nakagawa's examples 196–197:
	</p>

	<Ex
		m="i=teke uk hine i=ahun-te ruwe ne akus"
		g="4.O=hand take CONJ 4.O=enter-CAUS track-POSS COP then"
		tr="He took my hand and brought me inside."
		cite="nakagawa2024:202"
		dial="SAR"
		place="Nakagawa ex. 197"
		note="ahun-te with a volitional human causee, cross-referenced by the logophoric 4th-person prefix i=. Contrast ahun-ke (Nakagawa ex. 196), used when the causee is non-volitional cargo. The -te allomorph follows the consonant-final stem ahun."
	/>

	<p>
		The <i lang="ain-Latn">-ke</i> / productive-suffix alternation applies to
		<A w="ran" gl="descend (SG)" /> (<i lang="ain-Latn">ran-ke</i> for objects,
		<i lang="ain-Latn">ran-te</i> for persons) and
		<A w="yan" gl="come ashore (SG)" /> (<i lang="ain-Latn">yan-ke</i> for objects)
		<Ref k="nakagawa2024" p="202–203" />. The verb <A w="rikin" gl="go up (SG)" /> takes
		<i lang="ain-Latn">-ka</i> (<i lang="ain-Latn">rikin-ka</i>) in most dialects; its
		reduplicated plural allomorph <i lang="ain-Latn">rikip</i> does not feed a causative
		<i lang="ain-Latn">*rikip-ka</i>, the causative being formed on the singular stem
		only <Ref k="aynucorporadiscord" /> (nukopoli, aynu-corpora Discord, 2026)
		‹corpus-confirmed›, consistent with the motion-verb causative paradigm documented by
		Nakagawa <Ref k="nakagawa2024" p="202–203" />.
	</p>

	<p>
		One restriction spans all causative suffix types: zero-place meteorological verbs resist
		any causativization, because there is no subject argument to reassign to the object
		position. <i lang="ain-Latn">sir-pirka</i> 'the weather is good' has no causative
		<i lang="ain-Latn">*sirpirka-re</i>
		<Ref k="bugaeva2014" p="139" />; <Ref k="bugaevakobayashi2022" p="§4.1.2" />.
		Among the non-productive suffixes, <i lang="ain-Latn">-ke</i> additionally requires a
		one-argument base; the productive suffix and <i lang="ain-Latn">-ka</i> accept both
		one- and two-argument bases <Ref k="bugaeva2014" p="139" />.
	</p>
</S>

<S t="Dialect variation, the -ka → -re/-te shift, and the Horobetsu switch-reference function" id="diachrony">
	<p>
		The productive suffix is encroaching on <i lang="ain-Latn">-ka</i> territory across
		Hokkaido dialects, with the shift most advanced in Saru and the southwest. Many verbs
		that take <i lang="ain-Latn">-ka</i> in northeastern Hokkaido appear with
		<i lang="ain-Latn">-re/-te/-e</i> in Saru; intra-dialectal doublets such as
		<i lang="ain-Latn">nam-te</i> ~ <i lang="ain-Latn">nam-ka</i> in Saru document the
		change in progress <Ref k="bugaeva2014" p="135–136, 143–144" />;
		<Ref k="kobayashi2015" p="33" />. Sakhalin varieties (‹SA›) preserve
		<i lang="ain-Latn">-ka</i> more broadly
		<Ref k="bugaeva2014" p="135–136" />.
	</p>

	<p>
		The <i lang="ain-Latn">-ka</i> suffix straddles the transitivizer and direct-causative
		functions in a way the productive suffix does not. Satō 2008 flags some
		<i lang="ain-Latn">-ke</i> and <i lang="ain-Latn">-e</i> forms as bleached
		transitivizations — <i lang="ain-Latn">san</i> → <i lang="ain-Latn">san-ke</i>
		'put out a fine', where no causer argument is introduced — distinct from the grammatical
		causative <Ref k="sato2008" p="237–238" />. The productive suffix is unambiguously
		causative in function ‹consensus›.
	</p>

	<p>
		In the Horobetsu dialect, Takahashi documents an extension of the productive causative
		suffix into a switch-reference function: in coordinated clauses it marks that the
		subject of the following predicate differs from that of the preceding one (different
		subject), while in subordinated clauses it marks same-subject continuity
		<Ref k="takahashi2017" p="102–106" />. The attested Horobetsu forms —
		<i lang="ain-Latn">é-re</i> 'make eat', <i lang="ain-Latn">kasuy-re</i> 'make help',
		<i lang="ain-Latn">cis-te</i> 'make cry', <i lang="ain-Latn">wen-te</i> 'make bad' —
		show the same allomorphic distribution as Saru and Chitose
		<Ref k="takahashi2017" p="99–104" />. Whether the switch-reference function is an
		independent grammaticalization or a secondary extension of the causative meaning is not
		settled in the accessible sources; no equivalent use is documented for Saru or Chitose
		‹contested›.
	</p>
</S>
