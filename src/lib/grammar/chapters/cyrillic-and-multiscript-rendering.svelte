<script lang="ts">
	import { S, Ref, Xr } from '$lib/grammar/components';
</script>

<S t="Three transcriptional traditions" id="traditions">
	<p>
		Scholarly and documentary work on Ainu has operated in three transcriptional traditions. The
		<em>Latin phonemic transcription</em> developed by the twentieth-century descriptive tradition
		is the primary script of the major reference grammars <Ref k="tamura1996" />;
		<Ref k="refsing1986" />; <Ref k="nakagawa2024" /> and of modern corpus annotation. The
		<em>katakana syllabary</em>, extended with small-kana coda characters, is the dominant script
		of native-speaker writing and of modern Hokkaido institutional materials; Nakagawa's annotated
		text editions and the NINJAL oral-literature corpus present Ainu in katakana. A third body of
		material, the output of the <em>Russian scholarly tradition</em> on Sakhalin Ainu from the
		early twentieth century onward, uses a Cyrillic-based transcription modelled on Russian
		phonographic conventions.
	</p>
	<p>
		All Ainu forms in this grammar appear in the Latin system, normalized from whatever source
		script they originate in. The phoneme-to-grapheme mapping is documented in
		<Xr ch="latin-phonemic-transcription" />; the katakana syllabary and its small-kana
		extensions are the subject of <Xr ch="katakana-and-small-kana-codas" />.
	</p>
</S>

<S t="The Latin phonemic transcription" id="latin-layer">
	<p>
		The Latin conventions followed here match the modern Hokkaido descriptive standard. The
		affricate phoneme is written <i lang="ain-Latn">c</i>, not <i>ch</i>; the fricative phoneme
		<i lang="ain-Latn">s</i>, not <i>sh</i> — a normalisation reflecting the absence of a
		palatal-vs-non-palatal phonemic contrast and now standard in scholarly and community usage
		<Ref k="kirikae1997" />; <Ref k="nakagawa2006" />; community discussion (nukopoli,
		aynu-corpora Discord, 2023) <Ref k="aynucorporadiscord" paren />. Native-speaker writers
		and the major descriptive grammars converge on this choice: Kirikae's survey of Ainu-authored
		orthographic practice shows that speakers who wrote their language themselves consistently
		avoided the yōon spellings <Ref k="kirikae1997" />.
	</p>
	<p>
		Prevocalic glottal onset is not marked in the modern literature; earlier transcriptions by
		Tamura and others marked it with an apostrophe (e.g. <i lang="ain-Latn">'a</i>), and an
		apostrophe notation persists in some corpus metadata, but the omission has been standard since
		the 1980s <Ref k="shiraishi2022" />; community discussion (nukopoli, aynu-corpora Discord,
		2023) <Ref k="aynucorporadiscord" paren />. The boundary markers <i lang="ain-Latn">=</i>
		and <i lang="ain-Latn">-</i> carry a specific contrast introduced by Nakagawa:
		<i lang="ain-Latn">=</i> marks personal-index boundaries and <i lang="ain-Latn">-</i> marks
		derivational boundaries. Nakagawa adopted this device in his 1986 text collection
		<Ref k="nakagawa2024" p="49" />, after which its use became general; community record
		(nukopoli, aynu-corpora Discord, 2024) <Ref k="aynucorporadiscord" paren />. The
		morphological implications of the distinction — whether individual indexes are clitics or
		affixes — are examined in <Xr ch="orthographic-standardization-and-word-division" />.
	</p>
</S>

<S t="Katakana as a parallel notation" id="katakana">
	<p>
		For sources in katakana, the katakana surface form is displayed alongside the Latin morphemic
		analysis; the Latin form drives the interlinear glossing. Standard Japanese katakana covers
		most Ainu CV syllables directly. The coda consonants of closed Ainu syllables — a structural
		feature with no equivalent in standard Japanese orthography — are represented by small-kana
		characters added in the Unicode Katakana Phonetic Extensions block (U+31F0–U+31FF). The table
		below gives the vowel correspondences and the coda-consonant assignments; the full CV-syllable
		mapping, including variant representations for the affricate <i lang="ain-Latn">c</i> and the
		handling of nasal assimilation, is documented in <Xr ch="katakana-and-small-kana-codas" />.
	</p>

	<table>
		<caption>Latin–katakana correspondences: vowels and coda consonants</caption>
		<thead>
			<tr>
				<th>Latin</th>
				<th>Katakana</th>
				<th>Notes</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td colspan="3"><em>Vowels</em></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">a</i></td>
				<td lang="ain-Kana">ア</td>
				<td></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">i</i></td>
				<td lang="ain-Kana">イ</td>
				<td></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">u</i></td>
				<td lang="ain-Kana">ウ</td>
				<td></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">e</i></td>
				<td lang="ain-Kana">エ</td>
				<td></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">o</i></td>
				<td lang="ain-Kana">オ</td>
				<td></td>
			</tr>
			<tr>
				<td colspan="3"><em>Coda consonants (small kana appended to the syllable kana)</em></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">-k</i></td>
				<td lang="ain-Kana">ㇰ</td>
				<td>U+31F0; <i lang="ain-Latn">sik</i> 'eye' → <span lang="ain-Kana">シㇰ</span></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">-m</i></td>
				<td lang="ain-Kana">ㇺ</td>
				<td>U+31FA; <i lang="ain-Latn">hum</i> 'sound' → <span lang="ain-Kana">フㇺ</span></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">-n</i></td>
				<td lang="ain-Kana">ン</td>
				<td>Full-size ン; a dedicated small ン (<span lang="ain-Kana">𛅧</span>, U+1B167) exists
					for the non-moraic nasal coda but has limited font support; community discussion
					(toracatman, aynu-corpora Discord, 2023) <Ref k="aynucorporadiscord" paren /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">-p</i></td>
				<td lang="ain-Kana">ㇷ゚</td>
				<td>Composed of <span lang="ain-Kana">ㇷ</span> (U+31F7) + combining semi-voiced mark
					(U+309A); <i lang="ain-Latn">nep</i> 'what' → <span lang="ain-Kana">ネㇷ゚</span></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">-r</i></td>
				<td lang="ain-Kana">ㇻ ㇼ ㇽ ㇾ ㇿ</td>
				<td>Vowel-indexed: <span lang="ain-Kana">ㇻ</span> after <i lang="ain-Latn">a</i>,
					<span lang="ain-Kana">ㇼ</span> after <i lang="ain-Latn">i</i>,
					<span lang="ain-Kana">ㇽ</span> after <i lang="ain-Latn">u</i>,
					<span lang="ain-Kana">ㇾ</span> after <i lang="ain-Latn">e</i>,
					<span lang="ain-Kana">ㇿ</span> after <i lang="ain-Latn">o</i>; e.g.
					<i lang="ain-Latn">sir</i> 'appearance' → <span lang="ain-Kana">シㇼ</span>,
					<i lang="ain-Latn">kor</i> 'have' → <span lang="ain-Kana">コㇿ</span></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">-s</i></td>
				<td lang="ain-Kana">ㇱ</td>
				<td>U+31F1</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">-t</i></td>
				<td lang="ain-Kana">ㇳ</td>
				<td>U+31F3</td>
			</tr>
		</tbody>
	</table>

	<p>
		The coda <i lang="ain-Latn">-r</i> is the only one whose small-kana character encodes the
		colour of the preceding vowel; the other codas each have a single character regardless of
		vowel context. Font support for the full Unicode coda set, including the two-character
		sequence <span lang="ain-Kana">ㇷ゚</span> for <i lang="ain-Latn">-p</i>, varies across
		platforms; the practical rendering situation is surveyed in
		<Xr ch="katakana-and-small-kana-codas" />.
	</p>
</S>

<S t="The Cyrillic tradition in Sakhalin scholarship" id="cyrillic">
	<p>
		Russian-language academic work on Sakhalin Ainu, beginning with fieldwork by linguists such
		as Nikolai Nevsky in the early twentieth century, transcribed the language in Cyrillic modelled
		on Russian phonographic conventions, with additional characters accommodating sounds absent from
		Russian — a pattern familiar from Soviet minority-language orthographic policy; asserted by
		nukopoli (aynu-corpora Discord, 2024) <Ref k="aynucorporadiscord" paren />. The dominant
		accessible sources on Sakhalin Ainu consulted in this grammar arrive in Latin or katakana rather
		than Cyrillic: Piłsudski's 1912 materials use a Latin-based Romanist transcription
		<Ref k="pilsudski1912" />, Murasaki's grammar and her later introductory volume present
		Sakhalin Ainu in katakana <Ref k="murasaki1979" />; <Ref k="murasaki2025" />, and Dal Corso's
		re-edition of Murasaki's material and his study of the Piłsudski-corpus phonology apply the
		Latin system <Ref k="dalcorso2021" />; <Ref k="dalcorso2024" />.
	</p>
	<p>
		Community members in the aynu-corpora orthographic discussions have proposed systematic Cyrillic
		correspondence tables for a normalized Sakhalin Ainu Cyrillic orthography, modelling the system
		on Soviet minority-language conventions (scheuewsuiski and nukopoli, aynu-corpora Discord,
		December 2024) <Ref k="aynucorporadiscord" paren /> ‹speculative›. No such system has entered
		formal institutional use. Forms from Cyrillic-script sources are transliterated to the Latin
		system before they appear in any example or inline context in this grammar; the structural and
		phonological contrasts that motivate citing Sakhalin material are treated in
		<Xr ch="sakhalin-and-kuril-ainu-contrast" />.
	</p>
</S>

<S t="Script policy" id="policy">
	<p>
		The following conventions apply to all Ainu forms in this grammar:
	</p>
	<ul>
		<li>
			<strong>Latin is canonical.</strong> Every Ainu form — whether cited from a Latin-script
			source, from a katakana source, or transliterated from a Cyrillic source — appears in the
			Latin phonemic transcription, in the morphemic line of an interlinear example or as an
			italicised inline form.
		</li>
		<li>
			<strong>Katakana is a parallel surface layer.</strong> For sources in katakana, the
			katakana surface form is shown above the Latin morphemic analysis; the Latin line drives
			the interlinear glossing.
		</li>
		<li>
			<strong>Cyrillic is excluded from the text.</strong> No Cyrillic characters appear in this
			grammar. Forms from Cyrillic-script sources are transliterated to the Latin system before
			any citation; the source is then cited in the normal way.
		</li>
		<li>
			<strong>Sakhalin and Kuril provenance is marked by the dialect tag.</strong> The
			<i lang="ain-Latn">SA</i> or <i lang="ain-Latn">KU</i> tag on an example — drawn from
			the fixed dialect-label set documented in
			<Xr ch="glossing-abbreviations-and-citation" /> — is the sole in-text indicator that a
			form is from Sakhalin or Kuril Ainu rather than Hokkaido. Japanese glosses and source
			titles carry Japanese attribution and are not subject to the Ainu-script conventions above.
		</li>
	</ul>
</S>
