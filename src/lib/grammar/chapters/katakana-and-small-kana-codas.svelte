<script lang="ts">
	import { S, Ref, Xr } from '$lib/grammar/components';
</script>

<S t="Writing Ainu in katakana" id="overview">
	<p>
		Katakana has a long history in Ainu writing. Its conventions vary among authors and
		publications, particularly in the representation of syllable-final consonants. The textbook <em
			>Akor Itak</em
		>
		helped establish a widely used set of conventions, while speakers and linguists continued to use
		other systems <Ref k="nakagawa2024" p="61–69" />. An unfamiliar spelling should therefore be
		read with the source's own explanation of its kana.
	</p>
	<p>
		The central problem is the closed syllable. A full-size kana usually suggests a consonant
		followed by a vowel, whereas Ainu permits syllables ending in consonants. Small kana make that
		distinction visible. In a small-kana spelling, the character following the vowel can represent a
		final consonant without adding another vowel to the word
		<Ref k="sato2008" p="15–16" />.
	</p>
</S>

<S t="Vowels and open syllables" id="cv-syllabary">
	<p>
		The five vowel letters correspond to <span lang="ain-Kana">ア、イ、ウ、エ、オ</span>. Many
		consonant–vowel syllables use familiar kana, such as
		<span lang="ain-Kana">カ</span> for <span lang="ain-Latn">ka</span> and
		<span lang="ain-Kana">マ</span> for <span lang="ain-Latn">ma</span>. Several combinations
		require particular attention. Satō gives the following spellings
		<Ref k="sato2008" p="16" />:
	</p>
	<table>
		<thead><tr><th>Latin</th><th>Katakana</th><th>Reading</th></tr></thead>
		<tbody>
			<tr
				><td lang="ain-Latn">tu</td><td lang="ain-Kana">トゥ</td><td
					>A single open syllable with /t/ and /u/</td
				></tr
			>
			<tr
				><td lang="ain-Latn">ye</td><td lang="ain-Kana">イェ</td><td>A glide followed by /e/</td
				></tr
			>
			<tr
				><td lang="ain-Latn">we</td><td lang="ain-Kana">ウェ</td><td>A glide followed by /e/</td
				></tr
			>
			<tr
				><td lang="ain-Latn">wo</td><td lang="ain-Kana">ウォ</td><td>A glide followed by /o/</td
				></tr
			>
		</tbody>
	</table>
	<p>
		The syllable <span lang="ain-Latn">tu</span> has also been written with
		<span lang="ain-Kana">ヅ、ド</span>, and kana bearing a handakuten. These are documented Ainu
		spelling conventions; interpreting them simply as their ordinary Japanese sound values can give
		the wrong reading <Ref k="nakagawa2024" p="66–67" />.
	</p>
</S>

<S t="Small kana for final consonants" id="small-kana-codas">
	<p>
		The table summarizes the small-kana conventions described by Satō, with the alternatives for
		final /t/ and /r/ discussed by Nakagawa <Ref k="sato2008" p="16" />;
		<Ref k="nakagawa2024" p="63, 68–69" />. It is a guide to reading these systems; individual
		editions may choose differently.
	</p>
	<table>
		<thead><tr><th>Final consonant</th><th>Kana</th><th>Variation</th></tr></thead>
		<tbody>
			<tr><td>/p/</td><td lang="ain-Kana">ㇷ゚</td><td>Small hu with handakuten</td></tr>
			<tr
				><td>/t/</td><td lang="ain-Kana">ッ, ㇳ</td><td
					>The two conventions treat consonant sequences differently.</td
				></tr
			>
			<tr><td>/k/</td><td lang="ain-Kana">ㇰ</td><td>Small ku</td></tr>
			<tr
				><td>/s/</td><td lang="ain-Kana">ㇱ, ㇲ</td><td
					>The choice depends on the source's convention.</td
				></tr
			>
			<tr><td>/m/</td><td lang="ain-Kana">ㇺ</td><td>Small mu</td></tr>
			<tr
				><td>/n/</td><td lang="ain-Kana">ン</td><td
					>Usually full-size in the systems described here</td
				></tr
			>
			<tr
				><td>/r/</td><td lang="ain-Kana">ㇽ; ㇻ, ㇼ, ㇽ, ㇾ, ㇿ</td><td
					>A fixed letter or a series selected by the preceding vowel</td
				></tr
			>
			<tr
				><td>/y/, /w/</td><td lang="ain-Kana">ィ, ゥ</td><td
					>Some systems use full-size イ and ウ.</td
				></tr
			>
		</tbody>
	</table>
	<p>
		The <a href="https://www.unicode.org/charts/PDF/U31F0.pdf"
			>Unicode Katakana Phonetic Extensions chart</a
		> includes small kana used for Ainu. Its character repertoire provides the letters needed to reproduce
		several conventions; the chart does not prescribe which orthography a writer should use.
	</p>
</S>

<S t="The final p spelling" id="bilabial-p">
	<p>
		The character sequence <span lang="ain-Kana">ㇷ゚</span> represents final /p/. It combines small
		<span lang="ain-Kana">ㇷ</span>
		with the circular handakuten. The small size matters: it distinguishes a syllable-final
		consonant from the full open syllable written
		<span lang="ain-Kana">プ</span> in a system that uses size consistently
		<Ref k="sato2008" p="16" />. Older typography may use full-size characters, so the same visual
		distinction cannot be assumed in every edition.
	</p>
</S>

<S t="The final r spellings" id="r-coda">
	<p>
		One convention selects <span lang="ain-Kana">ㇻ、ㇼ、ㇽ、ㇾ、ㇿ</span> according to the
		preceding vowel /a, i, u, e, o/. Another uses <span lang="ain-Kana">ㇽ</span> throughout. Satō
		adopts the fixed spelling as his default and allows the vowel-matched forms when needed <Ref
			k="sato2008"
			p="16"
		/>. Nakagawa traces the alternatives through Kindaichi's and Chiri Mashiho's writing <Ref
			k="nakagawa2024"
			p="62–63"
		/>.
	</p>
	<p>
		The five written variants do not represent five distinct rhotic consonants. They concern how a
		writer represents the vowel-like release of final /r/. Its phonetic variation and its contrast
		with /r/ followed by a full vowel are discussed in <Xr ch="rhotic-r" />.
	</p>
</S>

<S t="Final n" id="n-coda">
	<p>
		Satō uses ordinary <span lang="ain-Kana">ン</span> for final /n/, even though other final
		consonants take small kana <Ref k="sato2008" p="16" />. A small katakana n is also encoded in
		Unicode as U+1B167, listed in the
		<a href="https://www.unicode.org/charts/PDF/U1B130.pdf">Small Kana Extension chart</a>. The
		existence of that character does not make it part of every Ainu writing system.
	</p>
</S>

<S t="Final h in Sakhalin material" id="h-coda">
	<p>
		The small h-series becomes relevant when reading Sakhalin forms with final /h/. Nakagawa
		describes Chiri Mashiho's use of vowel-matched h-kana for the consonant he transcribed
		<em>x</em>
		<Ref k="nakagawa2024" p="63–64" />. This is a Sakhalin comparison. The presence of these
		characters in an Ainu kana table does not establish final /h/ as part of the ordinary Hokkaido
		inventory.
	</p>
</S>

<S t="Final glides" id="glide-codas">
	<p>
		The small letters <span lang="ain-Kana">ィ</span> and <span lang="ain-Kana">ゥ</span>
		can distinguish final /y/ and /w/ from the vowels /i/ and /u/. Chiri Mashiho used this distinction
		in his 1953 botanical dictionary, and Satō adopts it in his grammar
		<Ref k="nakagawa2024" p="62–63" />; <Ref k="sato2008" p="16" />. Other sources use full-size
		kana. The interpretation depends on the writing system and syllable structure.
	</p>
</S>

<S t="How the conventions developed" id="history">
	<p>
		Small kana for consonant endings were already used in Nagata Hōsei's 1891 place-name work. Later
		authors refined the representation of final /r/, glides, and accent. Nakagawa's survey also
		documents the orthographic work of Ainu writers, including Yamamoto Tasuke, Nabesawa Motozō,
		Sunazawa Kura, Kuzuno Tatsujirō, and Kayano Shigeru
		<Ref k="nakagawa2024" p="61–66" />.
	</p>
	<p>
		<em>Akor Itak</em>, published in 1994, provided a shared reference for teaching materials.
		Nakagawa stresses that publications invoking its conventions still vary in practice. He also
		explains their pedagogical purpose and the trade-offs involved in using familiar Japanese
		spelling habits <Ref k="nakagawa2024" p="66–69" />. These choices are part of the history of
		Ainu literacy and teaching, described further in
		<Xr ch="sociolinguistic-situation-revitalization" />.
	</p>
</S>

<S t="Converting between Latin and kana" id="lat-kana-roundtrip">
	<p>
		Conversion requires knowledge of the source's conventions. In the <em>Akor Itak</em>
		system, <span lang="ain-Kana">ッ</span> can represent both /t/ before another consonant and the
		first member of a doubled consonant. Nakagawa's example
		<span lang="ain-Kana">ミッポ</span> can therefore correspond to
		<i lang="ain-Latn">mitpo</i> or <i lang="ain-Latn">mippo</i> “grandchild”
		<Ref k="nakagawa2024" p="68" />. The kana string alone does not select between them.
	</p>
	<p>
		A source spelling and a Latin analysis can be displayed together when the distinction matters.
		The original preserves what the edition prints; the analysis states how that spelling is being
		read. This is particularly useful for consonant sequences and older texts; see
		<Xr ch="cyrillic-and-multiscript-rendering" />.
	</p>
</S>
