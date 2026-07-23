<!-- src/lib/grammar/chapters/glides-w-y.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The analytical question" id="overview">
	<p>
		Hokkaido Ainu words frequently end in sequences pairing a vowel with a following
		<i lang="ain-Latn">y</i> [j] or <i lang="ain-Latn">w</i> [w]:
		<i lang="ain-Latn">áynu</i> 'human', <i lang="ain-Latn">kamúy</i> 'spirit',
		<i lang="ain-Latn">ohaw</i> 'soup', <i lang="ain-Latn">kéwtum</i> 'heart',
		<i lang="ain-Latn">ináw</i> 'prayer-wand'. Two analyses have been proposed for these sequences.
		The first treats the final element as a coda consonant — /y/ or /w/ — parallel to the coda
		stops, nasals, and /r/ of the inventory. The second treats the sequences as falling diphthongs,
		with the final element a non-syllabic vowel ([i̯] or [u̯]), giving bimoraic nuclei
		[ai̯], [au̯], [ei̯], [eu̯], [oi̯], [ui̯]
		<Ref k="aynucorporadiscord" /> (nukopoli, 2023-12-11). Phonetically the two analyses are
		indistinguishable: both produce the same output, and neither predicts any difference in
		production or perception
		<Ref k="aynucorporadiscord" /> (nukopoli, 2023-12-11). The question is whether
		post-vocalic <i lang="ain-Latn">y</i>/<i lang="ain-Latn">w</i> behave morphologically and
		prosodically as consonants or as the second element of a vowel nucleus.
	</p>
	<p>
		This chapter covers the phonemic status of coda <i lang="ain-Latn">y</i> and
		<i lang="ain-Latn">w</i> and the related question of the marginal onset sequences
		<i lang="ain-Latn">yi</i>, <i lang="ain-Latn">wi</i>, and <i lang="ain-Latn">wu</i>.
		The full phoneme inventory is in <Xr ch="consonant-inventory" /> and
		<Xr ch="vowel-inventory" />; the (C)V(C) syllable canon in <Xr ch="syllable-template" />.
		The allophonic glide that appears at morpheme-boundary hiatus — the [j] in
		<i lang="ain-Latn">i-y-ekarkar</i> — is a separate process treated in
		<Xr ch="glide-epenthesis-hiatus-resolution" />.
	</p>
</S>

<S t="The consonant analysis" id="consonant-analysis">
	<p>
		The standard modern analysis treats post-vocalic <i lang="ain-Latn">y</i> and
		<i lang="ain-Latn">w</i> as coda consonants, assigning syllables like
		<i lang="ain-Latn">ay</i>, <i lang="ain-Latn">muy</i>, <i lang="ain-Latn">haw</i>, and
		<i lang="ain-Latn">kew</i> to the CVC slot of the (C)V(C) canon alongside
		<i lang="ain-Latn">cep</i>, <i lang="ain-Latn">sin</i>, and <i lang="ain-Latn">ker</i>
		<Ref k="nakagawa2024" p="29" />; <Ref k="shiraishi2022" p="§3" />.
		Three diagnostics converge on this position.
	</p>

	<S t="Nominalizer allomorphy" id="nmlz-allomorphy">
		<p>
			The participant/event nominalizer has two allomorphs conditioned by the final segment of the
			base: <i lang="ain-Latn">-p</i> attaches to vowel-final stems and
			<i lang="ain-Latn">-pe</i> to consonant-final stems
			<Ref k="shiraishi2022" p="§3" />; <Ref k="nakagawa2024" p="29" />. The selection is
			phonological and applies without exception across the lexicon. Stems ending in
			<i lang="ain-Latn">y</i> and <i lang="ain-Latn">w</i> consistently take
			<i lang="ain-Latn">-pe</i>, grouping with the consonant-final class. For the full treatment
			of these nominalizers see <Xr ch="nominalization-p-pe" />.
		</p>

		<table>
			<thead>
				<tr>
					<th>stem</th>
					<th>final segment</th>
					<th>nominalizer</th>
					<th>derived form</th>
					<th>approximate gloss</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><i lang="ain-Latn">poro</i> 'big'</td>
					<td>/o/ — vowel</td>
					<td><i lang="ain-Latn">-p</i></td>
					<td><i lang="ain-Latn">poro-p</i></td>
					<td>'the big one'</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">pon</i> 'small'</td>
					<td>/n/ — nasal</td>
					<td><i lang="ain-Latn">-pe</i></td>
					<td><i lang="ain-Latn">pon-pe</i></td>
					<td>'the small one'</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">an</i> 'exist'</td>
					<td>/n/ — nasal</td>
					<td><i lang="ain-Latn">-pe</i></td>
					<td><i lang="ain-Latn">an-pe</i></td>
					<td>'the existing thing'</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">okay</i> 'be (pl.)'</td>
					<td>/y/ — glide</td>
					<td><i lang="ain-Latn">-pe</i></td>
					<td><i lang="ain-Latn">okay-pe</i></td>
					<td>'those who are (pl.)'</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">siw</i> 'jostle'</td>
					<td>/w/ — glide</td>
					<td><i lang="ain-Latn">-pe</i></td>
					<td><i lang="ain-Latn">siw-pe</i></td>
					<td>'the jostling ones'</td>
				</tr>
			</tbody>
		</table>

		<p>
			On the diphthong analysis the final element of <i lang="ain-Latn">okay</i> and
			<i lang="ain-Latn">siw</i> is a non-syllabic vowel, which should trigger the vowel allomorph
			<i lang="ain-Latn">-p</i>; the occurring forms <i lang="ain-Latn">okay-pe</i> and
			<i lang="ain-Latn">siw-pe</i> would then be exceptions requiring an auxiliary stipulation.
			On the consonant analysis they are regular: /y/ and /w/ are consonants, and
			<i lang="ain-Latn">-pe</i> is the expected allomorph <Ref k="shiraishi2022" p="§3" />.
		</p>
	</S>

	<S t="Plural-suffix allomorphy" id="plural-allomorphy">
		<p>
			The same consonant–vowel boundary governs the distributive plural suffix, which surfaces as
			<i lang="ain-Latn">-te</i> after a consonant-final stem and <i lang="ain-Latn">-re</i> after
			a vowel-final stem. The plural of <i lang="ain-Latn">ante</i> is
			<i lang="ain-Latn">okayte</i> (&lt; <i lang="ain-Latn">okay</i> + <i lang="ain-Latn">-te</i>),
			selecting the consonant allomorph on the evidence that stem-final /y/ is a consonant;
			vowel-final stems take <i lang="ain-Latn">-re</i>
			<Ref k="aynucorporadiscord" /> (nukopoli, 2025-12-03) ‹corpus-confirmed›. The pattern
			mirrors the nominalizer allomorphy: /y/ at stem-end triggers the consonant-class allomorph
			in both environments independently.
		</p>
	</S>

	<S t="Syllabification and pitch-accent placement" id="accent-glide">
		<p>
			In the pitch-accent dialects of Hokkaido Ainu (Saru, Chitose, Horobetsu, and related
			varieties), accent placement is determined by the weight of the first syllable: a closed
			(CVC) first syllable bears the rising pitch nucleus (↗), while an open (CV) first syllable
			passes the peak to the second syllable <Ref k="nakagawa2024" p="50" />. The system is
			described in full in <Xr ch="pitch-accent-placement-rule" />. Words whose first syllable
			ends in <i lang="ain-Latn">y</i> or <i lang="ain-Latn">w</i> pattern as CVC-closed
			(Rule 1), not as open syllables followed by an additional vowel:
		</p>

		<table>
			<thead>
				<tr>
					<th>form</th>
					<th>syllabification</th>
					<th>σ1 type</th>
					<th>accent rule</th>
					<th>gloss</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><i lang="ain-Latn">áynu</i></td>
					<td>/áy.nu/</td>
					<td>CVC — closed</td>
					<td>Rule 1: σ1 high</td>
					<td>'human'</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">kéwtum</i></td>
					<td>/kéw.tum/</td>
					<td>CVC — closed</td>
					<td>Rule 1: σ1 high</td>
					<td>'heart'</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">kamúy</i></td>
					<td>/ka.múy/</td>
					<td>CV — open</td>
					<td>Rule 2: σ2 high</td>
					<td>'spirit'</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">ináw</i></td>
					<td>/i.náw/</td>
					<td>CV — open</td>
					<td>Rule 2: σ2 high</td>
					<td>'prayer-wand'</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">ohaw</i></td>
					<td>/o.háw/</td>
					<td>CV — open</td>
					<td>Rule 2: σ2 high</td>
					<td>'soup'</td>
				</tr>
			</tbody>
		</table>

		<p>
			<i lang="ain-Latn">áynu</i> /áy.nu/ has two syllables; the first is CVC-closed and thus
			high under Rule 1. Under the diphthong analysis, <i lang="ain-Latn">ay</i> is a V+V nucleus
			rather than a CVC syllable, and Rule 1 — which keys on the presence of a coda consonant —
			has no basis to apply; an additional rule or stipulation would be required. The consonant
			analysis lets the standard placement rules cover these forms without exception
			<Ref k="nakagawa2024" p="29, 50" />;
			<Ref k="aynucorporadiscord" /> (nukopoli, 2023-12-11). The same simplification holds in
			compounds: <i lang="ain-Latn">kamúy</i> in <i lang="ain-Latn">kamúynomi</i> 'pray to a
			spirit' retains its Rule 2 accent as the first element, the coda /y/ keeping the compound
			syllable count transparent; see <Xr ch="accent-in-compounds-and-affixation" />.
		</p>
	</S>
</S>

<S t="The diphthong analysis" id="diphthong-analysis">
	<p>
		Kindaichi &amp; Chiri <Ref k="kindaichi1936" /> (cited via
		<Ref k="shiraishi2022" p="§3" />) analysed post-vocalic <i lang="ain-Latn">y</i> and
		<i lang="ain-Latn">w</i> as the second elements of falling diphthongs. Early romanization and
		katakana transcription followed this view: <i lang="ain-Latn">kamuy</i> was written カムイ
		(four kana), treating the final element as a full vowel; <i lang="ain-Latn">aynu</i> appeared
		as アイノ, reflecting the approximate quality of the rounded unstressed second element
		<Ref k="nakagawa2024" p="26, 29" />. The orthographic reform that Chiri Yukie
		(知里幸恵, c. 1923) introduced — <i lang="ain-Latn">kamuy</i>, <i lang="ain-Latn">ohaw</i>,
		<i lang="ain-Latn">kewtum</i> for カムイ, オハウ, ケウトゥム — was motivated by exactly the
		morphological and prosodic evidence set out in §2, not by any change in phonetic realization
		<Ref k="nakagawa2024" p="29" />.
	</p>
	<p>
		Phonetically the diphthong analysis is accurate. The sequences are realized as falling
		diphthongs — [ai̯], [au̯], [ei̯], [eu̯], [oi̯], [ui̯] — in which the second element is
		non-syllabic <Ref k="aynucorporadiscord" /> (nukopoli, 2023-12-11). Nothing in the acoustic
		signal distinguishes a coda consonant from a non-syllabic vowel in this position: the two
		analyses predict identical phonetic outputs. The diphthong analysis is a coherent phonetic
		description; its weakness is at the morpho-phonological level, where it forces the statement
		that a "non-syllabic vowel" triggers the consonant-class allomorphs of both the nominalizer
		and the plural suffix.
	</p>
	<p>
		The fullest structuralist defence of the diphthong view is Simeon's, who classes /w y/ as
		"nonsyllabic vowels" on four grounds: phonetic similarity to /u i/, a clustering pattern
		unlike that of the consonants, the narrow allophonic range they share with the vowels, and
		their undergoing the same elision as syllabic vowels <Ref k="simeon1968" p="14–15" />. The
		cost of the analysis shows in his inventory of units: alongside rising and falling
		diphthongs he must admit a triphthong <i lang="ain-Latn">yay</i> and a "geminate
		diphthong" <i lang="ain-Latn">ayay</i> 'baby' <Ref k="simeon1968" p="18" /> — sequences
		the coda analysis parses without any new unit types, as <i lang="ain-Latn">yay</i> (CVC)
		and <i lang="ain-Latn">a.yay</i> (V.CVC). His own morphophonemics also lists the elision
		and clustering behavior that the consonant analysis takes as diagnostic, so the same data
		sorted by modern criteria land on the opposite conclusion.
	</p>
</S>

<S t="Assessment" id="assessment">
	<p>
		The consonant analysis is adopted by Nakagawa <Ref k="nakagawa2024" p="29" />, Shiraishi
		<Ref k="shiraishi2022" p="§3" />, and Satō <Ref k="sato2008" p="§2.2" />, and is the
		working assumption of this grammar ‹consensus›. The three diagnostics in §2 — nominalizer
		allomorphy, plural-suffix allomorphy, and pitch-accent placement — all turn on the same
		categorical distinction (consonant vs. vowel-final stem), and all place /y/ and /w/ in the
		consonant class without exception. The diphthong analysis requires an auxiliary rule
		reclassifying the non-syllabic vowels as consonant-class triggers in three separate
		morpho-phonological environments; no evidence favours this stipulation over the simpler
		consonant phonemicization ‹contested›.
	</p>
	<p>
		The community formulation captures the symmetry: reading /y/ and /w/ as consonants makes the
		consonant-like morphological behaviour fall out; reading them as vowels makes the phonetic
		falling-diphthong character explicit; neither reading misrepresents the phonetics
		<Ref k="aynucorporadiscord" /> (nukopoli, 2023-12-11). Post-vocalic
		<i lang="ain-Latn">y</i> and <i lang="ain-Latn">w</i> are phonological coda consonants /y/
		and /w/; their surface realization as the non-syllabic elements [i̯] and [u̯] of falling
		diphthongs is their expected phonetic output in that position.
	</p>
</S>

<S t="Onset glides" id="onset-glides">
	<p>
		Word-initial and post-consonantal <i lang="ain-Latn">y</i> [j] and
		<i lang="ain-Latn">w</i> [w] are onset consonants without analytical controversy:
		<A w="yuk" gl="deer" />, <A w="yam" gl="potato" />, <A w="wakka" gl="water" />,
		<A w="wen" gl="bad" />. Their onset and coda realizations are phonetically identical —
		onset [j] = coda [i̯], onset [w] = coda [u̯] — which is consistent with a single
		phoneme appearing in both positions, parallel to /m n r/ in Hokkaido Ainu
		<Ref k="nakagawa2024" p="27–29" />; <Ref k="shiraishi2022" p="§3" />.
	</p>
</S>

<S t="Marginal sequences: yi, wi, wu" id="marginal-syllables">
	<p>
		Three onset–vowel sequences are absent from Hokkaido Ainu monomorphemic roots:
		<i lang="ain-Latn">yi</i>, <i lang="ain-Latn">wi</i>, and <i lang="ain-Latn">wu</i>.
		Nakagawa states that no root has any of these as its initial syllable, and that syllables of
		the shape <i lang="ain-Latn">yi-C</i>, <i lang="ain-Latn">wi-C</i>,
		<i lang="ain-Latn">wu-C</i> do not exist in the language <Ref k="nakagawa2024" p="43–45" />;
		the same point is made in Shiraishi <Ref k="shiraishi2022" p="§4.2" />, with attribution to
		Kindaichi 1931:13 and Tamura 1988b:14. A palatal glide before a high front vowel ([ji]) and a
		labio-velar glide before a high back rounded vowel ([wu], [wi]) are articulatorily
		near-redundant transitions, and similar restrictions are typologically common. The phonotactic
		constraint is parallel to the absence of the onset <i lang="ain-Latn">ti</i> from Ainu roots —
		its place in the table is empty, not filled by a rare allophone
		<Ref k="nakagawa2024" p="43–44" />.
	</p>

	<S t="Boundary-derived occurrences" id="boundary-yi-wi-wu">
		<p>
			The sequences [ji] and [wu] arise at morpheme boundaries through resyllabification. When
			a /y/-final coda immediately precedes an /i/-initial syllable across a morpheme or compound
			boundary, the coda resyllabifies as the onset of the following syllable, producing surface
			[ji]; the analogous process generates [wu] at a /w/–/u/ juncture.
			Shiraishi <Ref k="shiraishi2022" p="§4.2" /> cites
			<i lang="ain-Latn">yayirwakikor</i> (&lt; <i lang="ain-Latn">yay irwaki kor</i>) as a compound
			containing surface [ji] at an internal boundary, and
			<i lang="ain-Latn">awun mimtar</i> (&lt; <i lang="ain-Latn">aw un mimtar</i>) as containing
			[wu]. These are boundary-derived occurrences, not root-internal.
		</p>
	</S>

	<S t="The Tamura–Nakagawa dispute on yi/wi/wu phonemic status" id="yi-wi-wu-dispute">
		<p>
			Whether <i lang="ain-Latn">yi</i>, <i lang="ain-Latn">wi</i>, and
			<i lang="ain-Latn">wu</i> should be recognized as phonemic onset sequences — rare but not
			impossible — is genuinely disputed ‹contested›. Nakagawa
			<Ref k="nakagawa2024" p="43–45" /> treats them as categorically restricted to morpheme
			boundaries and derives their surface occurrences entirely from resyllabification. The
			position attributed to Tamura in community discussion holds that they are independent onsets
			comparable in phonemic status to word-initial [j] in English <i>year</i> or [w] in
			<i>would</i>, and that the rarity of roots with these onsets is a phonotactic gap rather
			than a categorical exclusion <Ref k="aynucorporadiscord" /> (nukopoli, 2024-11-28).
		</p>
		<p>
			The dispute partly tracks the glottal-stop question. On Nakagawa's no-glottal-stop analysis,
			vowel-initial syllables begin with a bare syllable boundary; a /y/-final coda abutting
			an /i/-initial syllable produces boundary-derived [ji] by resyllabification. On the
			glottal-stop analysis (Hattori, Tamura), a contrast between /y/-onset and /ʔ/-onset is
			available at precisely those positions, which in principle licenses phonemic onset status for
			[ji], [wi], and [wu] <Ref k="aynucorporadiscord" /> (nukopoli, 2024-11-28);
			<Ref k="nakagawa2024" p="31–33, 43–45" />. The glottal-stop debate is developed in
			<Xr ch="syllable-template" />.
		</p>
		<p>
			The minimal pair <i lang="ain-Latn">yayráyke</i> 'commit suicide' (three syllables,
			/yay.ray.ke/) vs. <i lang="ain-Latn">yaírayke</i> 'give thanks' (four syllables,
			/ya.i.ray.ke/) illustrates the practical stakes of syllabification at this juncture
			<Ref k="nakagawa2024" p="42" />: the two words differ in syllable count and in whether the
			reflexive morpheme <i lang="ain-Latn">yay-</i> is present, but neither read source provides
			acoustic data bearing on whether the <i lang="ain-Latn">i</i> in
			<i lang="ain-Latn">yaírayke</i> ever surfaces as [ji] in connected speech.
		</p>
	</S>
</S>

<S t="Glide phonemicity in Shizunai: a dialect-specific contrast" id="dialect-shizunai">
	<p>
		In the accent dialects — Saru, Chitose, and related varieties — the accentual contrast between
		fossilized and transparent compounds renders the question of /w/ phonemicity at hiatus
		redundant: pitch, not glide presence, carries the contrast. In Shizunai (east Hidaka), an
		accentless dialect, this alternative is unavailable. Okuda <Ref k="okuda2025" /> reports a
		minimal pair from a Shizunai speaker (Oda Steno) that is unique in the Hokkaido documentation:
	</p>

	<table>
		<thead>
			<tr>
				<th>form</th>
				<th>IPA</th>
				<th>gloss</th>
				<th>structural character</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">suwat</i></td>
				<td>[suwat]</td>
				<td>'pothook' (炉かぎ)</td>
				<td>fossilized compound; /w/ phonemic, contrast with [ʔ] below</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">su'at</i></td>
				<td>[suʔat]</td>
				<td>'pot bail' (鍋のつる)</td>
				<td>transparent <i lang="ain-Latn">su</i> 'pot' + <i lang="ain-Latn">at</i>; boundary [ʔ]</td>
			</tr>
		</tbody>
	</table>

	<p>
		<i lang="ain-Latn">suwat</i> [suwat] and <i lang="ain-Latn">su'at</i> [suʔat] are
		phonetically distinct. In an accent dialect this contrast would be carried by pitch — the
		fossilized compound would have a fixed accent pattern differing from the transparent form; in
		Shizunai, where pitch is not distinctive, the glide vs. glottal-stop difference bears the
		entire lexical distinction. Parallel contrasts for /y/ at front-vowel hiatus in Shizunai —
		/u'a/ ~ /uwa/, /i'o/ ~ /iyo/, /i'e/ ~ /iye/ — extend the argument beyond this single pair
		<Ref k="okuda2025" />. Okuda's conclusion: "one cannot say, without specifying the dialect,
		that the glides <i lang="ain-Latn">y</i>/<i lang="ain-Latn">w</i> are non-phonemic"
		<Ref k="okuda2025" /> ‹contested›.
	</p>
	<p>
		The Shizunai data do not overturn the Nakagawa–Shiraishi analysis of Saru and Chitose, where
		accent carries the contrast the glide would otherwise mark. They demonstrate that /y/ and /w/
		phonemicity at hiatus is a dialect-dependent property: phonemic in accentless Shizunai,
		non-phonemic in the accent dialects
		<Ref k="okuda2025" />; <Ref k="nakagawafukazawa2022" p="§3.1" />. For the classification of
		Shizunai as accentless and its implications, see <Xr ch="pitch-accent-placement-rule" />.
	</p>
</S>

<S t="Interaction with person-affix accent" id="accent-person-affix">
	<p>
		The coda-consonant status of /y/ and /w/ has one further prosodic consequence. When
		<i lang="ain-Latn">ku=</i> or <i lang="ain-Latn">e=</i> prefixes to a stem beginning with /i/
		or /u/, vowel-weakening converts the vowel to a glide, producing a CVC-closed first syllable:
		<i lang="ain-Latn">ku=</i> + <i lang="ain-Latn">ipe</i> →
		<i lang="ain-Latn">ku=ype</i> /kúype/ (σ1 = /kuy/, closed, Rule 1: accent on σ1)
		<Ref k="nakagawa2024" p="52–53" />. The derived coda /y/ is treated by the accent system in
		exactly the same way as root-internal coda /y/ in <i lang="ain-Latn">áynu</i>. The full
		treatment of vowel-weakening and person-prefix accent shifts is in
		<Xr ch="personal-affix-sandhi-connected-speech-reduction" /> and
		<Xr ch="accent-in-compounds-and-affixation" />.
	</p>
</S>
