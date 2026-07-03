<!-- src/lib/grammar/chapters/mora-syllable-accent-vs-tone-analysis.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Typological placement: pitch accent, not tone" id="typology">
	<p>
		Hokkaido Ainu has lexical pitch accent: the position of high pitch within a phonological word
		is specified in the lexicon and contrasts meaning. Pitch is not assigned to every mora or
		syllable independently, as in a tone language; a single accent nucleus per word marks the site
		of the rising boundary, and syllables before it are uniformly low <Ref
			k="shiraishi2022"
			p="§5"
		/>; <Ref k="nakagawa2024" p="48–49" />; <Ref k="sato2008" p="§2.6" />. The system involves no
		lexical tone and no vowel reduction correlating with accent position <Ref
			k="shiraishi2022"
			p="§5"
		/>. All three primary sources for Hokkaido Ainu agree on this characterization ‹consensus›.
	</p>
	<p>
		The surface output phonetically resembles Standard Japanese pitch accent — Tamura (1988b: 13)
		remarked on the similarity (reported via <Ref k="shiraishi2022" p="§5" />) — but the two
		systems are organized in structurally opposite ways, as the next section sets out. Within the
		pitch-accent type, the further question of whether the accent nucleus is best formalized as a
		feature of the syllable or of the mora is taken up in
		§&thinsp;<a href="#mora-syllable">Mora or syllable?</a>; the question of whether the system
		could be described as a restricted tone or register system is addressed in
		§&thinsp;<a href="#accent-vs-tone">Accent versus tone</a>.
	</p>
</S>

<S t="The rising-nucleus system" id="rising-nucleus">
	<p>
		The decisive structural difference from Japanese is directional. Standard Japanese is a
		<em>falling-nucleus</em> system (下り核): the nucleus marks the position after which pitch
		drops, and syllables up to and including the nucleus are high. Hokkaido Ainu is a
		<em>rising-nucleus</em> system (上り核アクセント): the nucleus marks the onset of the accented
		syllable, the pitch rises at that point, and syllables following the nucleus remain high without
		further contrast <Ref k="nakagawa2024" p="48–49" />. The same asymmetry was recognized under
		the term 昇り核 'rising kernel' by Hattori (1961) and Tamura (1970), reported via <Ref
			k="shiraishi2022"
			p="§5"
		/>. The consequence is that sustaining or extending the post-accent high plateau does not
		change a word's identity, whereas shifting the pitch rise to a different syllable does.
	</p>
	<p>
		The community illustration of this point is apt: the first-person pronoun
		<i lang="ain-Latn">kuáni</i> may be produced with a flat high plateau after the rise
		(<i lang="ain-Latn">ku↗áni</i>) or with a fall after the peak
		(<i lang="ain-Latn">ku↗á↘ni</i>) without any change of meaning, but a fall before the accent
		(<i lang="ain-Latn">ku↘áni</i>) is perceived as anomalous or contrastive <Ref
			k="aynucorporadiscord"
		/> (nukopoli, 2024-12-09; corroborated by <Ref k="nakagawa2024" p="48–49" />) ‹corpus-confirmed›.
		In the minimal pair <i lang="ain-Latn">nísap</i> 'suddenly' : <i lang="ain-Latn">nisáp</i>
		'shin', only the syllable at which the ↗ rise occurs differs; the high plateau that follows is
		common to both <Ref k="nakagawa2024" p="48–49, 51" />.
	</p>
	<p>
		The accented vowel also tends to lengthen allophonically in polysyllables, particularly in
		north-eastern accent dialects — Kindaichi (1931: 4) noted forms such as
		<i lang="ain-Latn">ˈnuːman</i> 'yesterday' and <i lang="ain-Latn">poˈroː</i> 'big',
		describing the lengthening as "not conducted consciously" (reported via <Ref
			k="shiraishi2022"
			p="§5"
		/>). This allophonic lengthening is distinct from the phonemic vowel length of Sakhalin Ainu
		(§&thinsp;<a href="#diachrony">Diachrony</a> below) and carries no accent-analytical
		implications.
	</p>
</S>

<S t="Syllable weight and the placement rule" id="placement">
	<p>
		Accent placement in the standard accent dialects (Saru, Chitose, and their neighbors) follows a
		two-rule system sensitive exclusively to the syllable structure of σ1 <Ref
			k="nakagawa2024"
			p="50"
		/>:
	</p>

	<table>
		<thead>
			<tr>
				<th>Shape of σ1</th>
				<th>Weight</th>
				<th>Accent on</th>
				<th>Examples</th>
				<th>Rule</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>(C)VC — closed</td>
				<td>heavy</td>
				<td>σ1</td>
				<td
					><i lang="ain-Latn">áynu</i>, <i lang="ain-Latn">pónno</i>,
					<i lang="ain-Latn">kútci</i>, <i lang="ain-Latn">yáykosiramsuypa</i></td
				>
				<td>原則1</td>
			</tr>
			<tr>
				<td>(C)V — open</td>
				<td>light</td>
				<td>σ2</td>
				<td
					><i lang="ain-Latn">kamúy</i>, <i lang="ain-Latn">reyé</i>,
					<i lang="ain-Latn">itánki</i>, <i lang="ain-Latn">irámmakaka</i></td
				>
				<td>原則2</td>
			</tr>
		</tbody>
	</table>

	<p>
		Only σ1's shape matters; word length beyond two syllables is irrelevant to placement. Shiraishi
		reformulates the same pattern as an <em>iambic (LH) foot</em>: accent on σ2 when σ1 is light,
		on σ1 when σ1 is heavy — a weight-sensitive rhythmic pattern widespread across languages <Ref
			k="shiraishi2022"
			p="§5.1"
		/>. Kindaichi and Chiri (1936: 11) concluded from their materials that "the iambic rule is
		dominant" (reported via <Ref k="shiraishi2022" p="§5.1" />).
	</p>
	<p>
		A class of lexical exceptions breaks the default: when σ1 is open yet accent falls on σ1, the
		word must be memorized. Nakagawa lists around twenty such items, including
		<i lang="ain-Latn">cápe</i> 'cat', <i lang="ain-Latn">húci</i> 'grandmother',
		<i lang="ain-Latn">húre</i> 'red', <i lang="ain-Latn">kéra</i> 'taste',
		<i lang="ain-Latn">míci</i> 'father', <i lang="ain-Latn">mína</i> 'laugh',
		<i lang="ain-Latn">nísap</i> 'suddenly', <i lang="ain-Latn">páse</i> 'heavy',
		<i lang="ain-Latn">sísam</i> 'Japanese person', <i lang="ain-Latn">síno</i> 'really',
		<i lang="ain-Latn">túki</i> 'cup', <i lang="ain-Latn">túnas</i> 'fast', and
		<i lang="ain-Latn">yúpo</i> 'elder brother' <Ref k="nakagawa2024" p="51" />. These exceptions
		produce minimal accent pairs:
	</p>

	<table>
		<thead>
			<tr>
				<th>Exception form</th>
				<th>Gloss</th>
				<th>Regular form</th>
				<th>Gloss</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">nísap</i></td>
				<td>'suddenly'</td>
				<td><i lang="ain-Latn">nisáp</i></td>
				<td>'shin'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">nína</i></td>
				<td>'gather firewood'</td>
				<td><i lang="ain-Latn">niná</i></td>
				<td>'crush'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">útur</i></td>
				<td>'western side of a house'</td>
				<td><i lang="ain-Latn">utúr</i></td>
				<td>'between'</td>
			</tr>
		</tbody>
	</table>

	<p>
		These pairs establish that accent position is phonemically contrastive and that the weight rule,
		though dominant, does not determine accent in the exception class. The full inventory of such
		pairs is the subject of <Xr ch="lexical-contrastive-accent-minimal-pairs" />; accent behavior
		under compounding and affixation is treated in <Xr ch="accent-in-compounds-and-affixation" />.
	</p>
</S>

<S t="Mora or syllable as the accent domain?" id="mora-syllable">
	<p>
		In Japanese pitch accent the mora is the accent-bearing unit: a CVC syllable may, in principle,
		bear accent on either of its two moras. For Hokkaido Ainu the evidence points to the
		<em>syllable</em> as the relevant domain.
	</p>
	<p>
		Three observations converge on this conclusion. First, the placement rule
		(§&thinsp;<a href="#placement">above</a>) is stated entirely in terms of whether σ1 is open or
		closed — syllable weight rather than mora count. No sub-syllabic accent position within a CVC
		syllable is ever distinctive; all coda consonants (/p t k m n r s y w/) are equivalent in
		their weight-conferring effect. Second, the phonetic realization — the pitch rise — is timed to
		the onset of the accented syllable, not to an internal mora boundary. Third, the analysis of
		coda /-y/ and /-w/ as consonants rather than as the second element of a diphthong (argued
		independently in <Xr ch="glides-w-y" /> on morphological and phonotactic grounds) is
		consistent with syllable-based accent:
		<i lang="ain-Latn">ka.muy</i> 'deity' (two syllables, σ2 = CVC) receives accent on σ2 as an
		undivided unit; there is no evidence that the internal /-y/ constitutes a separate
		accent-bearing mora <Ref k="nakagawa2024" p="29" />; <Ref k="shiraishi2022" p="§3, §5.1" />.
	</p>
	<p>
		Person-prefix accent shift provides additional evidence. The prefixes
		<i lang="ain-Latn">ku=</i>, <i lang="ain-Latn">e=</i>, and <i lang="ain-Latn">ci=</i>
		integrate with the stem as a single phonological word; the weight of σ1 in the new word is
		recalculated with the prefix included. A stem whose open σ1 would otherwise take σ2 accent by
		原則2 shifts its accent one syllable toward the word boundary
		<Ref k="nakagawa2024" p="52" />; <Ref k="shiraishi2022" p="§5.1" />:
	</p>

	<Ex
		m="ku=hopuni"
		g="1SG.A=rise"
		tr="I get up."
		note="Stem hopúni: σ1 = ho- (open, CV), accent on σ2 (pu-) by 原則2. Under ku=, σ1 of the phonological word becomes ku- (open, CV); σ2 is the stem's ho-; accent shifts to ho-: ku=hópuni. Paradigm from Nakagawa (2024: 52) and Shiraishi (2022: §5.1)."
		constructed
		dial="SAR"
	/>

	<p>
		The contrasting prefixes <i lang="ain-Latn">a=</i> and <i lang="ain-Latn">eci=</i> do not
		trigger the shift: <i lang="ain-Latn">omáre</i> → <i lang="ain-Latn">a=omáre</i> retains the
		stem's accent <Ref k="nakagawa2024" p="53" />. These two prefixes are prosodically less
		integrated with the stem, a gradient that parallels their position in the person-affix paradigm
		(see <Xr ch="person-marking-architecture" /> and <Xr ch="accent-in-compounds-and-affixation" />).
	</p>
	<p>
		A moraic restatement of 原則1/2 is formally possible: a closed σ1 has two moras (CV + C), so
		accent could be described as associating with the second mora of the word — belonging to σ1
		when σ1 is heavy, to σ2 when σ1 is light. This restatement covers the same data but posits
		mora-counting that is not independently evidenced elsewhere in Ainu phonology. The read sources
		do not argue for it: Shiraishi characterizes the pattern as iambic and syllable-based <Ref
			k="shiraishi2022"
			p="§5.1"
		/>, and Nakagawa states the rule in syllable-structure terms <Ref k="nakagawa2024" p="50" />
		‹contested›.
	</p>
</S>

<S t="Accent versus tone: the analytical question" id="accent-vs-tone">
	<p>
		The pitch-accent label is used in two overlapping senses in the Japanological tradition: as a
		cover term for any system in which pitch is phonemic, and in the narrower sense of a system
		with one positionally specified nucleus per word. All three primary sources use it in the
		narrow sense as applied to Hokkaido Ainu. Pre-nuclear syllables are uniformly low;
		post-nuclear syllables are uniformly high; no syllable-by-syllable tonal specification is
		posited. Ainu is not a tone language in the cross-linguistic typological sense ‹consensus›.
	</p>
	<p>
		Two analytical positions on the structure of the exception class merit explicit grading.
	</p>
	<p>
		<strong>Position A — gradient weight-sensitive accent with a lexical exception class</strong>
		‹consensus›. The system is weight-sensitive iambic accent; the exception class is a bounded set
		of forms with lexically specified initial accent. The default rule accounts for the vast
		majority of the lexicon; exceptions must be memorized individually. This is the position of
		Nakagawa <Ref k="nakagawa2024" p="50–51" />, Shiraishi <Ref k="shiraishi2022" p="§5.1" />,
		and Satō <Ref k="sato2008" p="§2.6" />, as well as Kindaichi and Chiri (1936: 11) (reported
		via <Ref k="shiraishi2022" p="§5.1" />).
	</p>
	<p>
		<strong>Position B — two prosodic word-classes</strong> ‹speculative›. The exception class
		(open σ1, initial accent) and the default class (weight-conditioned accent) could be reframed
		as two lexical register classes: Class I words carry a lexical feature placing accent on σ1
		regardless of weight; Class II words are unspecified and realize weight-determined accent. This
		account is structurally parallel to two-register systems described for some East Japanese and
		Ryukyuan pitch-accent varieties. The Sakhalin vowel-length correspondence
		(§&thinsp;<a href="#diachrony">Diachrony</a> below) supplies a diachronic motive: the HA
		exception class corresponds systematically to SA long-vowel forms, suggesting the two HA
		classes may reflect a former segmental length distinction rather than a discrete tonal
		specification. This reanalysis has not been proposed in the read sources; the synchronic data
		do not require it; it is noted here as a possible alternative formalization ‹speculative›.
	</p>
	<p>
		Community discussion noted a phonetic resemblance between Hachijō-language intonation and Ainu
		pitch contours <Ref k="aynucorporadiscord" /> (nukopoli, 2024-12-08). No systematic published
		comparison of the two systems has been consulted here; the significance of any resemblance —
		intonational, accentual, or areal — cannot be assessed from the read sources ‹speculative›.
	</p>
</S>

<S t="Accent dialects, irregular dialects, and accentless varieties" id="dialect-split">
	<p>
		Not all Hokkaido varieties have contrastive pitch. Nakagawa and Fukazawa classify Hokkaido
		dialects into three prosodic types <Ref k="nakagawafukazawa2022" p="§3.1" />;
		<Ref k="nakagawa2024" p="49–50" />:
	</p>

	<table>
		<thead>
			<tr>
				<th>Prosodic type</th>
				<th>Dialects</th>
				<th>Behavior</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Standard accent</td>
				<td>Saru, Chitose, Horobetsu, Asahikawa, Nayoro, Obihiro, Sōya</td>
				<td>原則1/2 apply as described</td>
			</tr>
			<tr>
				<td>Irregular accent</td>
				<td>Yakumo, Oshamambe</td>
				<td>When both σ1 and σ2 are open, accent falls on σ3; when σ2 is closed, σ2 is accented</td>
			</tr>
			<tr>
				<td>Accentless (無アクセント)</td>
				<td>Shizunai, Urakawa, Samani, Bihoro, Kushiro, Shiranuka</td>
				<td>Pitch not phonemically distinctive</td>
			</tr>
		</tbody>
	</table>

	<p>
		The irregular accent of Yakumo shifts the iambic peak one position right when both σ1 and σ2
		are open: compare Yakumo <i lang="ain-Latn">notakám</i> vs Saru
		<i lang="ain-Latn">notákam</i>, Yakumo <i lang="ain-Latn">sinuyé</i> vs Saru
		<i lang="ain-Latn">sinúye</i>, Yakumo <i lang="ain-Latn">hoyupú</i> vs Saru
		<i lang="ain-Latn">hoyúpu</i>; but when σ2 is closed both varieties agree:
		<i lang="ain-Latn">parúnpe</i> in both <Ref k="nakagawa2024" p="50–51" />;
		<Ref k="nakagawafukazawa2022" p="§3.1" />.
	</p>
	<p>
		The accentless status of Shizunai is contested. Refsing (1986: 73) treated it as an accent
		dialect with rules parallel to Saru <Ref k="refsing1986" p="73" />. Nakagawa argues from
		museum-archive recordings that the same word appears in both accent patterns across tokens from
		one speaker — <i lang="ain-Latn">nisáppone</i> five times vs
		<i lang="ain-Latn">nísappone</i> twice — and reads this as accent-neutralization, not a stable
		system <Ref k="nakagawa2024" p="50" /> ‹contested›. One phonological consequence of Shizunai's
		accentless status: the contrast between glide [w] and glottal stop [ʔ] at a hiatus position
		must carry the functional load that pitch contrast carries elsewhere, as argued for the pair
		<i lang="ain-Latn">suwat</i> 'pothook' vs <i lang="ain-Latn">suʔat</i> 'pot bail' in <Ref
			k="okuda2025"
		/>; see <Xr ch="glides-w-y" />.
	</p>
	<p>
		The accentless dialects differ in their accentless origin. Bihoro, Kushiro, and Shiranuka lost
		the pitch contrast without a compensatory change. Sakhalin Ainu is also accentless but
		preserves a vowel-length opposition where Hokkaido developed pitch; neither opposition has
		neutralized in Sakhalin <Ref k="nakagawafukazawa2022" p="§3.1" />. Dialect-level consonant
		features that intersect with accent — including eastern <i lang="ain-Latn">h</i>-elision when
		accent falls on σ2 — are treated in <Xr ch="hokkaido-phonological-microvariation" />.
	</p>
</S>

<S t="The Sakhalin length–Hokkaido accent diachrony" id="diachrony">
	<p>
		The correspondence between HA accent class and SA vowel length runs through the lexicon
		systematically: HA exception-class words (open σ1, initial accent despite the weight rule)
		correspond to SA long-vowel forms; HA regular-class words (weight-conditioned accent)
		correspond to SA short-vowel forms <Ref k="nakagawa2024" p="27, 51" />;
		<Ref k="nakagawafukazawa2022" p="§3.1" />:
	</p>

	<table>
		<thead>
			<tr>
				<th>HA form</th>
				<th>HA accent class</th>
				<th>SA cognate [‹SA›]</th>
				<th>Gloss</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">húre</i></td>
				<td>initial (exception)</td>
				<td><i lang="ain-Latn">huure</i></td>
				<td>'red'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">sísam</i></td>
				<td>initial (exception)</td>
				<td><i lang="ain-Latn">siisam</i></td>
				<td>'Japanese person'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">túki</i></td>
				<td>initial (exception)</td>
				<td><i lang="ain-Latn">tuuki</i></td>
				<td>'cup'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">mína</i></td>
				<td>initial (exception)</td>
				<td><i lang="ain-Latn">miina</i></td>
				<td>'laugh'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">nísap</i></td>
				<td>initial (exception)</td>
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
		Hattori (1967) reconstructed vowel length as the earlier contrast: Proto-Ainu had a
		long-vowel/short-vowel distinction, Hokkaido replaced it with accent while Sakhalin retained
		length (reported via <Ref k="nakagawa2024" p="27" />; <Ref k="nakagawafukazawa2022" p="§3.1" />).
		On this account the HA exception class reflects historically long syllables; the weight-conditioned
		default (原則2) is a Hokkaido innovation. Satō dissents on the directionality in his contribution
		to the Handbook (reported via <Ref k="nakagawafukazawa2022" p="§3.1" />) ‹contested›. Itabashi
		(2001) argues the length–pitch diachrony in detail <Ref k="itabashi2001" />; that study was not
		read directly for this grammar and the claims attributed to it here rest on its treatment in
		Nakagawa (2024) and Nakagawa and Fukazawa (2022).
	</p>
	<p>
		The correspondence also supplies diachronic motivation for Position B
		(§&thinsp;<a href="#accent-vs-tone">above</a>): if the HA exception class reflects historically
		long vowels rather than a distinct tonal category, then the two HA accent classes may be the
		synchronic residue of a former segmental opposition rather than evidence of a register system
		in Proto-Ainu. Whether this warrants a formal two-class reconstruction is a question for the
		comparative work in <Xr ch="proto-ainu-segmental-reconstruction" /> and
		<Xr ch="final-h-history-and-sakhalin-length-reflex" /> ‹speculative›.
	</p>
</S>
