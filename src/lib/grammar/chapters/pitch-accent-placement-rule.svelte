<script lang="ts">
	import { S, Ref, Xr } from '$lib/grammar/components';
</script>

<S t="The rising-nucleus system" id="rising-nucleus">
	<p>
		Hokkaido Ainu has a pitch-accent system in which the prominent syllable is marked by a pitch
		<em>rise</em>, not a pitch fall. The theoretical distinction matters because Standard Japanese
		pitch accent is analysed as a <em>falling nucleus</em> (下り核) — the distinctive cue is where
		pitch drops — whereas Ainu has a <em>rising nucleus</em> (上り核アクセント) — the distinctive
		cue is where pitch rises from low to high
		<Ref k="nakagawa2024" p="48–49" />; <Ref k="shiraishi2022" p="§5" />. A word's accent identity
		is therefore fixed by the syllable at which the L→H transition occurs; post-nuclear syllables
		may continue high, or fall at the utterance edge, without changing the word's accent class.
	</p>

	<p>
		The contrast is illustrated by the near-minimal pair
		<i lang="ain-Latn">nísap</i> 'suddenly' (accent on σ1) vs
		<i lang="ain-Latn">nisáp</i> 'shin' (accent on σ2).
		<i lang="ain-Latn">nísap</i> can be produced with both syllables at high pitch (<i lang="ain-Latn">nísáp</i>)
		without changing its identity, because the rising-nucleus cue is already satisfied at σ1; the
		same flat-high production of <i lang="ain-Latn">nisáp</i> would be heard as 'suddenly', since the
		σ2-rise is missing <Ref k="nakagawa2024" p="48–49" />. The Ainu accent system thus records where
		pitch <em>begins</em> to be high; the Japanese system records where it <em>ceases</em> to be high.
	</p>

	<p>
		Accent is marked in this grammar with an acute diacritic on the vowel of the prominent syllable:
		<i lang="ain-Latn">kamúy</i> (accent on σ2), <i lang="ain-Latn">áynu</i> (accent on σ1). The
		same event is representable with a rise arrow: <i lang="ain-Latn">ka↗muy</i>,
		<i lang="ain-Latn">↗áynu</i>. In IPA, a high-tone mark (◌́) on the nucleus of the accented
		syllable expresses the same. Community participants summarize the typological point concisely:
		<i lang="ain-Latn">ku↗a–ni</i> and <i lang="ain-Latn">ku↗a↘ni</i> are equivalent
		pronunciations of the first-person pronoun; <i lang="ain-Latn">ku↘ani</i> is deviant
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-12-09; corroborated by
		<Ref k="nakagawa2024" p="48–49" />). Accent marks appear in citation forms and interlinear
		examples throughout this grammar and are suppressed in running text.
	</p>

	<p>
		The theoretical question of whether the system is better modelled as a culminative accent (one H
		per prosodic word) or as an autosegmental tonal melody (L…LH…) is examined in
		<Xr ch="mora-syllable-accent-vs-tone-analysis" />. Intonation and sentence-level prosody are
		treated in <Xr ch="phrasal-and-utterance-intonation" />.
	</p>
</S>

<S t="Dialect classes" id="dialect-classes">
	<p>
		The pitch-accent placement rules described in this chapter apply to the
		<em>standard-accent</em> dialects. Hokkaido Ainu divides into three prosodic classes
		<Ref k="nakagawafukazawa2022" p="§3.1" />; <Ref k="nakagawa2024" p="49–50" />:
	</p>

	<table>
		<thead>
			<tr>
				<th>class</th>
				<th>dialects</th>
				<th>accent behavior</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Standard accent</td>
				<td>Saru, Chitose, Horobetsu, Asahikawa, Nayoro, Obihiro, Sōya</td>
				<td>Rules 1 and 2 (below) apply as stated</td>
			</tr>
			<tr>
				<td>Irregular accent</td>
				<td>Yakumo, Oshamambe</td>
				<td>Rule 2 shifts one syllable rightward when both σ1 and σ2 are open (σ3 high in that case)</td>
			</tr>
			<tr>
				<td>Unaccented (無アクセント)</td>
				<td>Shizunai, Urakawa, Samani, Bihoro, Kushiro, Shiranuka</td>
				<td>Pitch is not lexically distinctive</td>
			</tr>
		</tbody>
	</table>

	<p>
		Nakagawa (2024: 49–50) includes Bihoro, Shizunai, and the eastern Hidaka localities (Samani,
		Urakawa) among the accentless varieties. Refsing (1986: 73) had earlier classified Shizunai as
		an accent dialect with rules analogous to Saru; archival evidence — scattered accent marks from a
		single Shizunai speaker showing both <i lang="ain-Latn">nisáppone</i> and
		<i lang="ain-Latn">nísappone</i> for 'suddenly' — supports Nakagawa's accentless
		classification ‹contested›. Unaccented varieties and the phonological consequences of
		accent loss are treated in <Xr ch="hokkaido-phonological-microvariation" />.
	</p>
</S>

<S t="The placement rule" id="placement-rule">
	<p>
		In standard-accent dialects, the position of the accent depends entirely on the structure of
		<strong>σ1</strong> — the first syllable of the prosodic word — regardless of total word length
		<Ref k="nakagawa2024" p="50" />; <Ref k="shiraishi2022" p="§5.1" />; <Ref k="sato2008" p="§2.6" />.
		Two rules cover the system:
	</p>

	<p>
		<strong>Rule 1:</strong> If σ1 is <em>closed</em> — i.e. has the shape (C)VC — σ1 bears the accent.
	</p>

	<p>
		<strong>Rule 2:</strong> If σ1 is <em>open</em> — i.e. has the shape (C)V — σ2 bears the accent.
	</p>

	<p>
		Shiraishi (2022: §5.1) recasts these as an <em>iambic (LH) pattern</em>: a light (open) first
		syllable predicts accent on σ2; a heavy (closed) first syllable predicts accent on σ1.
		Kindaichi and Chiri reached the same characterization: "the iambic rule is dominant" (Kindaichi
		&amp; Chiri 1936: 11, reported via <Ref k="shiraishi2022" p="§5.1" />).
	</p>

	<table>
		<thead>
			<tr>
				<th>σ1 shape</th>
				<th>accent on</th>
				<th>examples</th>
				<th>gloss</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Closed (C)VC</td>
				<td>σ1</td>
				<td>
					<i lang="ain-Latn">áynu</i>, <i lang="ain-Latn">pónno</i>,
					<i lang="ain-Latn">kútci</i>, <i lang="ain-Latn">sínrit</i>,
					<i lang="ain-Latn">téyne</i>
				</td>
				<td>'person', 'much', 'shoes', 'always', 'true/real'</td>
			</tr>
			<tr>
				<td>Open (C)V</td>
				<td>σ2</td>
				<td>
					<i lang="ain-Latn">kamúy</i>, <i lang="ain-Latn">reyé</i>,
					<i lang="ain-Latn">itánki</i>, <i lang="ain-Latn">menóko</i>,
					<i lang="ain-Latn">irámmakaka</i>
				</td>
				<td>'deity', 'younger sibling', 'bowl', 'woman', 'be startled'</td>
			</tr>
		</tbody>
	</table>

	<p>
		The rule is strictly local to σ1: no further syllable weight is consulted. A word of any length
		whose first syllable is closed carries σ1-accent
		(<i lang="ain-Latn">yáykosiramsuypa</i>, nine syllables but σ1 = <i lang="ain-Latn">yay</i>
		[CVC] → σ1-accent); an open σ1 gives σ2-accent regardless of what follows
		<Ref k="nakagawa2024" p="50" />.
	</p>

	<p>
		In <strong>Yakumo</strong>, Rule 2 applies one syllable further rightward when both σ1 and σ2
		are open: standard <i lang="ain-Latn">notákam</i> corresponds to Yakumo
		<i lang="ain-Latn">notakám</i>; standard <i lang="ain-Latn">sinúye</i> to Yakumo
		<i lang="ain-Latn">sinuyé</i>; standard <i lang="ain-Latn">hoyúpu</i> to Yakumo
		<i lang="ain-Latn">hoyupú</i>. When σ2 is closed, Yakumo and standard dialects agree
		(<i lang="ain-Latn">parúnpe</i> in both). Some Yakumo forms are additionally exceptional
		(<i lang="ain-Latn">hopúni</i>, <i lang="ain-Latn">osórusi</i>)
		<Ref k="nakagawa2024" p="50–51" />; <Ref k="nakagawafukazawa2022" p="§3.1" />.
	</p>

	<p>
		Accent placement in compounds and under person-marking prefixes, where the rules reapply over
		the enlarged prosodic word, is covered in <Xr ch="accent-in-compounds-and-affixation" />.
		The syllable shapes that feed these rules — closed vs open, and the consonant-status of coda
		<i lang="ain-Latn">-y</i> and <i lang="ain-Latn">-w</i> — are established in
		<Xr ch="syllable-template" />.
	</p>
</S>

<S t="The pitch contour" id="contour">
	<p>
		The phonetic realization of the accent in standard-accent dialects follows a consistent contour:
		syllables preceding the accent syllable are at low pitch; from the accent syllable onward pitch
		is high. In connected speech a fall at the utterance boundary is typical, but this is a phrasal
		boundary effect and is not the cue that identifies the accent class. What is contrastive is
		solely the location of the L→H transition
		<Ref k="nakagawa2024" p="48–49" />; <Ref k="shiraishi2022" p="§5" />.
	</p>

	<p>
		For a two-syllable word with σ2-accent, such as <i lang="ain-Latn">kamúy</i> [ka(L) ↗muy(H)],
		the first syllable is produced at a low pitch and the rise occurs at the onset of σ2. For a
		word with σ1-accent, such as <i lang="ain-Latn">áynu</i> [↗áy(H) nu(H or ↘)], the pitch is
		high from the start of the word. The community characterization of the overall pattern —
		syllables before the nucleus are low; from the nucleus onward pitch stays high; a fall occurs
		toward the end of the prosodic phrase — contrasts with the Tokyo Japanese pattern in which the
		diagnostic event is a drop after the nucleus
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-12-09;
		corroborated by <Ref k="nakagawa2024" p="48–49" />) ‹corpus-suggested›.
	</p>

	<p>
		In some northeastern dialects, the accented vowel is slightly lengthened, an observation that
		underlies earlier romanization conventions such as ユーカラ for
		<i lang="ain-Latn">yukar</i> (accent on <i lang="ain-Latn">yu</i>, hence formerly written with
		a long vowel: Nakagawa 2024: 26, reported via <Ref k="nakagawa2024" p="26" />). Phonemic vowel
		length is not otherwise contrastive in Hokkaido Ainu; the vowel inventory is discussed in
		<Xr ch="vowel-inventory" />.
	</p>
</S>

<S t="Lexical exceptions" id="exceptions">
	<p>
		A set of words with open σ1 carry accent on σ1 despite the prediction of Rule 2 (open σ1 →
		σ2-accent). These must be stored in the lexicon; they cannot be derived from the placement
		rule. Nakagawa (2024: 51) lists the following as the principal exceptions in Saru/Chitose:
	</p>

	<p>
		<i lang="ain-Latn">cápe</i> 'cat', <i lang="ain-Latn">húci</i> 'grandmother',
		<i lang="ain-Latn">húra</i> 'smell', <i lang="ain-Latn">húre</i> 'red',
		<i lang="ain-Latn">káni</i> 'I (free pronoun)', <i lang="ain-Latn">kéra</i> 'taste',
		<i lang="ain-Latn">míci</i> 'father', <i lang="ain-Latn">mína</i> 'laugh',
		<i lang="ain-Latn">nína</i> 'gather firewood', <i lang="ain-Latn">nísap</i> 'suddenly',
		<i lang="ain-Latn">núman</i> 'yesterday', <i lang="ain-Latn">páse</i> 'heavy',
		<i lang="ain-Latn">sápo</i> 'elder sister', <i lang="ain-Latn">sések</i> 'hot',
		<i lang="ain-Latn">síno</i> 'really', <i lang="ain-Latn">sísam</i> 'Japanese person',
		<i lang="ain-Latn">túki</i> 'cup', <i lang="ain-Latn">túnas</i> 'fast',
		<i lang="ain-Latn">úsey</i> 'hot water', <i lang="ain-Latn">yúpo</i> 'elder brother'.
	</p>

	<p>
		Several exceptions pair minimally or near-minimally with regular-rule forms:
	</p>

	<table>
		<thead>
			<tr>
				<th>form</th>
				<th>accent</th>
				<th>gloss</th>
				<th>type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">nísap</i></td>
				<td>σ1</td>
				<td>'suddenly'</td>
				<td>exception</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">nisáp</i></td>
				<td>σ2</td>
				<td>'shin'</td>
				<td>regular</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">nína</i></td>
				<td>σ1</td>
				<td>'gather firewood'</td>
				<td>exception</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">niná</i></td>
				<td>σ2</td>
				<td>'crush'</td>
				<td>regular</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">útur</i></td>
				<td>σ1</td>
				<td>'west side of the house'</td>
				<td>exception</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">utúr</i></td>
				<td>σ2</td>
				<td>'between'</td>
				<td>regular</td>
			</tr>
		</tbody>
	</table>

	<p>
		(<Ref k="nakagawa2024" p="51" />; <Ref k="shiraishi2022" p="§5.1" />.)
	</p>

	<p>
		The exceptions are not random: each corresponds to a Sakhalin Ainu form with a long first vowel
		(see the following section), and as a group they reflect the older vowel-length contrast that
		has been restructured as lexical accent in Hokkaido. A quantitative analysis of the
		exception set and its contrastive residue against the rule-conforming majority is given in
		<Xr ch="lexical-contrastive-accent-minimal-pairs" />.
	</p>
</S>

<S t="The Sakhalin vowel-length correspondence" id="sa-correspondence">
	<p>
		Hokkaido Ainu pitch accent stands in a systematic correspondence with Sakhalin Ainu vowel
		length: a Hokkaido word with accent on σ1 (including exceptions to Rule 2) has a long vowel in
		σ1 in Sakhalin; a Hokkaido word with accent on σ2 (regular Rule 2 output) has a short vowel in
		σ1 in Sakhalin
		<Ref k="nakagawa2024" p="27, 51" />; <Ref k="nakagawafukazawa2022" p="§3.1" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>Hokkaido (HA)</th>
				<th>accent</th>
				<th>Sakhalin (SA)</th>
				<th>gloss</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">húre</i></td>
				<td>σ1 (exception)</td>
				<td><i lang="ain-Latn">huure</i></td>
				<td>'red'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">sísam</i></td>
				<td>σ1 (exception)</td>
				<td><i lang="ain-Latn">siisam</i></td>
				<td>'Japanese person'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">túki</i></td>
				<td>σ1 (exception)</td>
				<td><i lang="ain-Latn">tuuki</i></td>
				<td>'cup'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">nísap</i></td>
				<td>σ1 (exception)</td>
				<td><i lang="ain-Latn">niisah</i></td>
				<td>'suddenly'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">nisáp</i></td>
				<td>σ2 (regular)</td>
				<td><i lang="ain-Latn">nisah</i></td>
				<td>'shin'</td>
			</tr>
		</tbody>
	</table>

	<p>
		(SA forms from <Ref k="nakagawa2024" p="27, 51" />.)
	</p>

	<p>
		Hattori (1967, reported via <Ref k="nakagawa2024" p="27" /> and
		<Ref k="nakagawafukazawa2022" p="§3.1" />) interprets the Sakhalin vowel-length
		opposition as diachronically prior, with Hokkaido pitch accent having developed from it; the
		diachronic relationship is argued in detail by <Ref k="itabashi2001" /> (not consulted
		directly). Satō dissents on the direction of the change
		(<Ref k="nakagawafukazawa2022" p="§3.1" paren />) ‹contested›. The Hokkaido accentless
		varieties listed in the preceding section represent a third path: they have lost the length
		opposition without acquiring pitch contrast, and are not converging on the standard-accent
		system (Nakagawa &amp; Fukazawa 2022 §3.1, reported via
		<Ref k="nakagawafukazawa2022" p="§3.1" />). Sakhalin vowel length and its relationship
		to the Hokkaido vowel inventory are discussed in <Xr ch="vowel-inventory" />.
	</p>
</S>
