<!-- src/lib/grammar/chapters/katakana-and-small-kana-codas.svelte -->
<script lang="ts">
	import { S, Ref, Xr } from '$lib/grammar/components';
</script>

<S t="Katakana in Ainu writing" id="overview">
	<p>
		Katakana functions alongside the Latin phonemic transcription as one of two
		co-primary scripts for Hokkaido Ainu. Most community publications, pedagogical
		materials, and digital media produced in Hokkaido use katakana as their default
		form, while the Latin transcription defined in <Xr ch="latin-phonemic-transcription" />
		prevails in the academic literature and in this grammar. Both scripts represent the same
		underlying phonological system; the correspondence between them is described in
		<Xr ch="latin-phonemic-transcription" /> and summarized in the coda correspondence
		table below.
	</p>
	<p>
		The katakana syllabary handles the open (CV) core of the Ainu syllable with standard
		Japanese kana. The structural challenge lies in the closed (CVC) syllable: Ainu
		allows a wide coda-consonant inventory — /p t k s m n r w y h/ — most of which
		Japanese kana provides no dedicated symbol for in coda position. The solution is a
		set of reduced-size katakana characters placed after the preceding CV mora to
		represent the coda consonant. The modern normative form of this system derives from
		the 1994 Hokkaido Utari Kyōkai textbook <i lang="ain-Kana">アコㇿイタㇰ</i>
		<Ref k="utari1994" />, whose title (<i lang="ain-Latn">Akor Itak</i>, 'our language')
		already illustrates the convention: ㇿ for coda /r/ and ㇰ for coda /k/. Nakagawa's
		extensive grammar follows the same assignments throughout <Ref k="nakagawa2024" />.
	</p>
</S>

<S t="The standard CV syllabary" id="cv-syllabary">
	<p>
		For open syllables, Ainu uses the inherited katakana inventory without structural
		modification. The five vowels are ア /a/, イ /i/, ウ /u/, エ /e/, オ /o/; the
		consonant-plus-vowel mora grid follows the Japanese kana table, but the phonemic
		values of several cells diverge from modern Japanese reading conventions. ツ
		corresponds to Ainu /tu/ and チ to /ti/ — reflecting the phonemically straightforward
		/t/ plus the respective vowel, without the Japanese phonetic shifting of /tu/ to
		[tsɯ] or /ti/ to [tɕi] <Ref k="nakagawa2024" />. Similarly, ス = /su/ without
		the Japanese fronting of /s/ before /u/; the allophonic conditions on /s/ and /c/
		in Ainu are described in <Xr ch="consonant-inventory" />.
	</p>
	<p>
		The affricate /c/ and its katakana representation carry an orthographic history.
		Kindaichi's early grammars and text editions introduced contracted kana
		(yōon: チャ, チュ, チェ) for /ca/, /cu/, /ce/, treating Ainu /c/ as parallel to
		Japanese /tʃ/ <Ref k="kindaichi1936" />. This practice conflicted with the writing
		habits of Ainu speakers themselves, who transcribed /c/ without the contracted
		syllable convention: Kirikae documents that writers such as Sunazawa, Yamamoto, and
		Nabewasawa consistently avoided yōon for /c/ <Ref k="kirikae1997" />, and
		Nakagawa interprets this uniformity as reflecting a shared native-speaker phonological
		intuition <Ref k="nakagawa2006" />. The normative standard dropped yōon for /c/
		<Ref k="utari1994" />; community discussion has confirmed the consensus
		<Ref k="aynucorporadiscord" /> (nukopoli, aynu-corpora Discord, 2024-11-17) ‹consensus›.
		The full convergence history belongs to <Xr ch="orthographic-standardization-and-word-division" />.
	</p>
	<p>
		The Ainu coda inventory and phonotactic constraints on coda position are defined in
		<Xr ch="syllable-template" />; the phonemes themselves are described in
		<Xr ch="consonant-inventory" />.
	</p>
</S>

<S t="The extended small-kana coda system" id="small-kana-codas">
	<p>
		A coda consonant in Ainu katakana is written as a small (subscript-sized) katakana
		character placed immediately after the kana of the preceding mora. These characters
		occupy the Katakana Phonetic Extensions block, U+31F0–U+31FF, added to the Unicode
		Standard in version 3.2 (2002) specifically to support Ainu orthography. The block
		encodes sixteen positions, each derived from the syllable kana in the same consonant
		row as the coda value it encodes. The table below gives the standard coda
		assignments; variants and special cases are discussed in the subsections that follow.
	</p>

	<table id="lat-kana-table">
		<thead>
			<tr>
				<th>Latin coda</th>
				<th>Katakana</th>
				<th>Unicode position(s)</th>
				<th>Notes</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">k</i></td>
				<td lang="ain-Kana">ㇰ</td>
				<td>U+31F0 (small ku)</td>
				<td></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">s</i></td>
				<td lang="ain-Kana">ㇱ</td>
				<td>U+31F1 (small si)</td>
				<td>standard; ㇲ (U+31F2, small su) found in some older or variant texts</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">t</i></td>
				<td lang="ain-Kana">ㇳ</td>
				<td>U+31F3 (small to)</td>
				<td></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">n</i></td>
				<td lang="ain-Kana">ン</td>
				<td>U+30F3 (full-size N)</td>
				<td>full-size ン; the small ン (𛅧 U+1B167) has been proposed but has limited font support — discussed in the /n/ subsection below</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">p</i></td>
				<td lang="ain-Kana">ㇷ゚</td>
				<td>U+31F7 + U+309A (two code points)</td>
				<td>composite: small hu (ㇷ) plus combining semi-voiced mark (゚); no pre-composed single character exists — discussed in the /p/ subsection below</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">m</i></td>
				<td lang="ain-Kana">ㇺ</td>
				<td>U+31FA (small mu)</td>
				<td></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">r</i></td>
				<td lang="ain-Kana">ㇻ ㇼ ㇽ ㇾ ㇿ</td>
				<td>U+31FB–U+31FF (small ra ri ru re ro)</td>
				<td>standard system selects by preceding vowel: ㇻ after /a/, ㇼ after /i/, ㇽ after /u/, ㇾ after /e/, ㇿ after /o/ — discussed in the /r/ subsection below</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">w</i></td>
				<td lang="ain-Kana">ウ</td>
				<td>U+30A6 (full-size U)</td>
				<td>no dedicated small kana; full ウ follows the preceding mora in glide sequences</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">y</i></td>
				<td lang="ain-Kana">イ</td>
				<td>U+30A4 (full-size I)</td>
				<td>no dedicated small kana; full イ follows the preceding mora in glide sequences</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">h</i></td>
				<td lang="ain-Kana">ㇵ ㇶ ㇷ ㇸ ㇹ</td>
				<td>U+31F5–U+31F9 (small ha hi hu he ho)</td>
				<td>member selected by preceding vowel; phonemic status of coda /h/ is disputed — discussed in the /h/ subsection below</td>
			</tr>
		</tbody>
	</table>

	<S t="The bilabial coda ㇷ゚" id="bilabial-p">
		<p>
			Coda /p/ has no pre-composed Unicode character in the Katakana Phonetic Extensions
			block. The standard encoding combines small hu (ㇷ, U+31F7) with the combining
			katakana-hiragana semi-voiced sound mark (゚, U+309A), yielding the two-code-point
			grapheme cluster ㇷ゚. This parallels the pre-composed semi-voiced syllable kana
			of Japanese (パ = U+30D1; プ = U+30D7, etc.), but no pre-composed equivalent exists
			for the small form. Text-processing operations that count code points rather than
			grapheme clusters will report ㇷ゚ as two characters; software producing Ainu katakana
			must normalize the sequence at input and search time. Fonts that support the full
			Katakana Phonetic Extensions block generally render the combination correctly
			<Ref k="aynucorporadiscord" /> (toracatman, aynu-corpora Discord, 2024-03-28).
		</p>
	</S>

	<S t="The /r/ coda series" id="r-coda">
		<p>
			Coda /r/ is distributed across five small kana — ㇻ ㇼ ㇽ ㇾ ㇿ (small ra, ri,
			ru, re, ro; U+31FB–U+31FF) — one for each of the five Ainu vowels. The standard
			convention selects the member whose vowel matches the vowel of the preceding
			syllable: the title <i lang="ain-Kana">アコㇿイタㇰ</i> illustrates ㇿ (small ro)
			for the coda /r/ of <i lang="ain-Latn">kor</i>, following the /o/ of
			<i lang="ain-Kana">コ</i> <Ref k="utari1994" />.
		</p>
		<p>
			The five-way choice is not universally observed. The Upopoy National Ainu Museum
			uses full-size ル (U+30EB) for all coda /r/ positions, without the small-kana form
			<Ref k="aynucorporadiscord" /> (thegodofneet, aynu-corpora Discord, 2024-11-16).
			Some pedagogical and digital materials use ㇽ (small ru) invariably regardless of
			preceding vowel ‹contested›. The morphophonological behavior of coda /r/ — its
			assimilation triggers and the echo-vowel phenomenon — is described in
			<Xr ch="coda-r-assimilation-sonorant-sandhi" />; the echo vowel mechanism
			associated with the affiliative suffix is treated in
			<Xr ch="affiliative-suffix-morphophonology" />.
		</p>
	</S>

	<S t="Coda /n/ and the small-ン question" id="n-coda">
		<p>
			Coda /n/ is written with full-size ン (U+30F3), the same character as the Japanese
			moraic nasal. The borrowing is typographically convenient but phonologically
			imperfect: Japanese ン is an independent mora that contributes its own weight to
			the prosodic system, whereas Ainu coda /n/ is a non-moraic appendix in the same
			CVC syllable as its preceding vowel <Ref k="nakagawa2024" />; <Ref k="shiraishi2022" />.
			To mark this difference, Unicode 12.0 (2019) added a small ン, 𛅧 (U+1B167,
			KATAKANA LETTER SMALL N), in the Small Kana Extensions block (U+1B130–U+1B16F);
			it has also been advocated in community discussions as the typographically appropriate
			form for the Ainu coda nasal
			<Ref k="aynucorporadiscord" /> (toracatman, aynu-corpora Discord,
			2023-12-08). Font support for U+1B167 remains sparse as of the mid-2020s and the
			character is not in common use; full-size ン remains the practical standard
			‹corpus-suggested›.
		</p>
	</S>

	<S t="Coda /h/ in katakana" id="h-coda">
		<p>
			The five small h-row kana (ㇵ ㇶ ㇷ ㇸ ㇹ; U+31F5–U+31F9; small ha, hi, hu, he,
			ho) are encoded for coda /h/ notation and follow the same vowel-agreement principle
			as the /r/ series: ㇵ after /a/, ㇶ after /i/, ㇷ after /u/, ㇸ after /e/, ㇹ
			after /o/. In practice, coda /h/ is the most orthographically variable member of
			the Hokkaido system: the phonemic status of word-final /h/ remains disputed
			<Ref k="nakagawa2024" />, and many katakana-based texts either omit final /h/
			entirely or mark it only where affixation causes its resurfacing as a full onset
			consonant. The phonemic-status argument is treated in <Xr ch="glottal-stop" />.
		</p>
	</S>

	<S t="Glide codas /w/ and /y/" id="glide-codas">
		<p>
			The glides /w/ and /y/ in coda position are written with the corresponding vowel
			kana — ウ and イ respectively — at full size and without a small-kana reduction.
			These sequences arise in the surface forms that descriptive grammars analyze as
			coda-glide syllables (ay, uy, oy, aw, iw, ew and their cognates), rather than as
			true diphthongs with a phonemically distinct glide nucleus
			<Ref k="nakagawa2024" />. Whether the underlying segment is a vowel, a phonemic
			glide, or an epenthetic transition is a phonological question treated in
			<Xr ch="glides-w-y" />. No dedicated small-kana form exists for either position.
		</p>
	</S>
</S>

<S t="Historical development" id="history">
	<p>
		The earliest sustained katakana transcriptions of Ainu, from the Meiji period onward,
		used standard Japanese kana with no provision for coda consonants. Kindaichi Kyōsuke,
		whose grammars and yukar editions from the 1930s established the classical
		transcriptional tradition in Ainu linguistics
		<Ref k="kindaichi1936" />, rendered Ainu in full-size kana and introduced yōon
		contractions (チャ, ショ, etc.) for palatalized syllables. Coda consonants in this
		framework were typically indicated by writing the following syllable's onset kana in
		the same position or were left unmarked, producing representations that obscured
		syllable structure <Ref k="kirikae1997" />.
	</p>
	<p>
		The development of a systematic small-kana coda notation emerged from the work of
		Ainu speakers and linguists in the postwar decades. Kirikae documents writing
		practices that predate the Unicode standardization, including variant assignments
		for individual coda positions <Ref k="kirikae1997" />. Nakagawa traces the parallel
		development of Ainu-authored phonemic transcription traditions, situating the kana
		system in the broader history of Ainu-language literacy <Ref k="nakagawa2006" />.
		The 1994 Hokkaido Utari Kyōkai textbook consolidated the current standard assignments
		and provided their widest early distribution <Ref k="utari1994" />;
		<Ref k="ono2022" />. Unicode 3.2 (2002) then gave the system stable, interoperable
		code points across platforms and operating systems.
	</p>
	<p>
		Font coverage followed at varying rates. As of the mid-2020s the Katakana Phonetic
		Extensions block is supported by BIZ UDゴシック/UDMinchō, MS Gothic/Minchō, Meiryo,
		and Yu Gothic/Minchō; some educational fonts such as UDデジタル教科書体 do not cover
		it <Ref k="aynucorporadiscord" /> (toracatman, aynu-corpora Discord, 2024-03-28).
		The toc-chapter for multi-script rendering and font interoperability is
		<Xr ch="cyrillic-and-multiscript-rendering" />.
	</p>
</S>

<S t="Latin–katakana correspondence and round-tripping" id="lat-kana-roundtrip">
	<p>
		The two scripts represent the same phonological system and conversion between them is
		in principle mechanical, but several coda positions admit variant katakana realizations
		that require a convention choice. Coda /s/ may appear as ㇱ or ㇲ; coda /r/ may use
		any of the five members of the ra-series or the full-size ル; coda /h/ may be absent
		or written with any of the five h-series members; and the punctuation and spacing
		conventions differ between the 「，．」 style of <Ref k="utari1994" paren /> and the
		「、。」 style more common in Nakagawa's materials <Ref k="nakagawa2024" />. These
		ambiguities mean that Latin-to-katakana conversion requires explicit convention
		declarations, while katakana-to-Latin conversion is more consistently deterministic.
		The word-spacing and boundary conventions that further complicate round-tripping are
		addressed in <Xr ch="orthographic-standardization-and-word-division" />.
	</p>
	<p>
		From a typological perspective, the katakana system for Ainu sits in an unusual
		structural position: the combination of a full CV baseline kana plus a subordinate
		coda kana within a single syllable unit resembles an abugida — a semi-syllabic system
		in which a base character carries an inherent vowel and a secondary mark modifies the
		coda — more than a pure syllabary or an alphabet. This characterization has been
		proposed in community discussion
		<Ref k="aynucorporadiscord" /> (nukopoli, aynu-corpora Discord, 2024-03-30) ‹contested›;
		no formal typological classification has been assigned to Ainu katakana in the
		published linguistic literature.
	</p>
</S>
