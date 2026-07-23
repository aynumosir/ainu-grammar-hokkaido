<!-- src/lib/grammar/chapters/historical-orthographies-and-the-batchelor-tradition.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The Hepburn-derived tradition" id="hepburn-tradition">
	<p>
		Before the phonemic romanization documented in <Xr ch="latin-phonemic-transcription" /> took
		hold in the 1950s and 1960s, Hokkaido Ainu was written in Latin script mainly in orthographies
		derived from the Hepburn romanization of Japanese. The system that fixed this tradition in
		print is John Batchelor's. His <em>An Ainu–English–Japanese Dictionary</em> appeared in 1889
		and went through a second (1905), third (1926), and fourth edition (1938)
		<Ref k="batchelor1905" />; <Ref k="batchelor1938" />; <Ref k="nakagawa2024" p="90" />, and his
		Bible translations — above all the 1897 New Testament <span lang="ja">チコロ・ウタラパ</span>
		(<i lang="ain-Latn">Chikoro utarapa</i>), transmitted together with the Psalms and Jonah —
		constitute the largest body of connected Ainu text in this orthography
		<Ref k="batchelor1897" />; <Ref k="refsing1986" p="18" />. Batchelor wrote
		<i lang="ain-Latn">ch</i> for the affricate and <i lang="ain-Latn">sh</i> for the palatalized
		sibilant, on the model of the Hepburn values for Japanese, and until phonemic transcription
		displaced it this style was the ordinary way of romanizing Ainu <Ref k="nakagawa2024" p="53" />;
		<Ref k="nakagawa2006" p="3" />; <Ref k="kirikae1997" />.
	</p>
	<p>
		The tradition was transmitted to the Ainu writers whose texts anchor the modern corpus.
		Kannari Matsu, whose notebooks preserve a vast corpus of heroic epics, was a
		graduate of <span lang="ja">愛隣学校</span>, the mission school Batchelor founded in Hakodate,
		where she was taught English and the Latin alphabet; her correspondence with her sister was
		conducted entirely in romaji <Ref k="nakagawa2006" p="24" />. Chiri Yukie's
		<span lang="ja">アイヌ神謡集</span> <Ref k="chiri1923" />, the collection of divine epics that
		became the model for later Ainu-authored writing, is likewise written in a Hepburn-style
		orthography, and Kirikae judges the romanization of both women to be a direct continuation of
		Batchelor's practice, nurtured by his publications and by the aunt–niece connection between
		them <Ref k="kirikae1997" /> ‹consensus›. On the academic side the same conventions passed to
		Kindaichi Kyōsuke and his students; Kubodera Itsuhiko retained the Hepburn style throughout
		his career <Ref k="nakagawa2006" p="3" />; <Ref k="kirikae1997" />.
	</p>
	<p>
		Batchelor was a missionary who learned the language for evangelical work, and his
		transcription reflects the ear and habits of an English speaker rather than an analysis of
		the sound system <Ref k="refsing1986" p="18" />. Contemporary and later assessments diverge
		sharply. Chiri Mashiho's <span lang="ja">アイヌ語入門</span> devotes some fifteen pages to
		mistranslations, phantom words, and wrong forms in the dictionary and concludes that "it would
		be closer to the truth to say that it consists solely of flaws"
		<Ref k="chiri1956nyumon" /> (translation from <Ref k="refsing1986" p="18–19" />). Laufer had
		already written that Batchelor "almost neglected" the sound system and that his transcription
		was "no more than an attempt at adopting the English alphabet to the writing of Ainu"
		<Ref k="laufer1917" p="198" />, quoted in <Ref k="majewicz2022" p="§5" />. Refsing's
		assessment is more measured: the dictionary and the grammar bound with it are too inaccurate
		to serve as a primary source, yet given the scarcity of early materials they retain value when
		used critically, the English glosses often being closer to the mark than the Japanese ones
		<Ref k="refsing1986" p="18–19" />. Nakagawa notes that after Chiri's critique researchers
		stopped citing the dictionary openly, while judging it still highly usable for its period and
		coverage <Ref k="nakagawa2024" p="90" />. In this grammar Batchelor's works are treated as
		philological witnesses: their forms are cited for what they attest about nineteenth-century
		usage, and every form is read through the correspondence rules of the next section. The place
		of these works in the source base is set out in <Xr ch="written-sources-grammars-dictionaries" />.
	</p>
</S>

<S t="Systematic features of Batchelor's orthography" id="features">
	<p>
		Batchelor's spellings deviate from the modern standard in recurrent, largely rule-governed
		ways. The table gathers the correspondences; the subsections below document each group from
		the published comparisons — Kirikae <Ref k="kirikae1997" />, Nakagawa's orthographic surveys
		<Ref k="nakagawa2006" p="3–5" />; <Ref k="nakagawa2024" p="53–54" />, and the Sakaguchi–Watanabe
		re-edition of Batchelor's 1924 <em>Ainu Fireside Stories</em>
		<Ref k="sakaguchi2019" p="243–245" /> — and from the 1897 New Testament
		<Ref k="batchelor1897" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>Feature</th>
				<th>Batchelor's practice</th>
				<th>Modern standard</th>
				<th>Example (Batchelor ~ modern)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Affricate /c/</td>
				<td><code>ch</code> (Hepburn value)</td>
				<td><code>c</code></td>
				<td>
					<i lang="ain-Latn">chep</i> ~ <A w="cep" gl="fish" />,
					<i lang="ain-Latn">chikap</i> ~ <A w="cikap" gl="bird" />
				</td>
			</tr>
			<tr>
				<td>/s/ before <i>i</i> and in coda</td>
				<td><code>sh</code></td>
				<td><code>s</code></td>
				<td>
					<i lang="ain-Latn">moshiri</i> ~ <A w="mosir" gl="land" />,
					<i lang="ain-Latn">ash</i> ~ <A w="as" gl="stand" />
				</td>
			</tr>
			<tr>
				<td>Allophonic voicing</td>
				<td><code>b d g</code> written alongside <code>p t k</code></td>
				<td><code>p t k</code> only</td>
				<td>
					<i lang="ain-Latn">tambe gusu</i> ~ <i lang="ain-Latn">tanpe kusu</i>,
					<i lang="ain-Latn">guru</i> ~ <A w="kur" gl="person" />
				</td>
			</tr>
			<tr>
				<td>Echo vowels after codas, esp. <i>-r</i></td>
				<td>coda + copied vowel</td>
				<td>bare coda consonant</td>
				<td>
					<i lang="ain-Latn">koro</i> ~ <A w="kor" gl="have" />,
					<i lang="ain-Latn">pirika</i> ~ <A w="pirka" gl="good" />,
					<i lang="ain-Latn">mokoro</i> ~ <A w="mokor" gl="sleep" />
				</td>
			</tr>
			<tr>
				<td>Coda glides /y w/</td>
				<td><code>i</code>, <code>u</code></td>
				<td><code>y</code>, <code>w</code></td>
				<td>
					<i lang="ain-Latn">ainu</i> ~ <A w="aynu" gl="person" />,
					<i lang="ain-Latn">kamui</i> ~ <A w="kamuy" gl="spirit" />,
					<i lang="ain-Latn">hau</i> ~ <A w="haw" gl="voice" />
				</td>
			</tr>
			<tr>
				<td>Spurious <code>ei</code> for /e/</td>
				<td><code>ei</code></td>
				<td><code>e</code></td>
				<td>
					<i lang="ain-Latn">chisei</i> ~ <A w="cise" gl="house" />,
					<i lang="ain-Latn">heikachi</i> ~ <A w="hekaci" gl="boy" />
				</td>
			</tr>
			<tr>
				<td>Fourth-person marking</td>
				<td>fused into the verb, unsegmented</td>
				<td>segmented <code>a=</code> / <code>=an</code></td>
				<td>
					<i lang="ain-Latn">ae</i> ~ <i lang="ain-Latn">a=e</i>,
					<i lang="ain-Latn">ingarʼan</i> ~ <i lang="ain-Latn">inkar=an</i>
				</td>
			</tr>
			<tr>
				<td>1st/2nd-person marking</td>
				<td>separate words, capitalized sentence-initially</td>
				<td>attached by <code>=</code></td>
				<td>
					<i lang="ain-Latn">Ku goro Michi</i> ~ <i lang="ain-Latn">ku=kor mici</i> 'my father'
				</td>
			</tr>
			<tr>
				<td>Apostrophe as elision mark</td>
				<td><code>ʼ</code> before "vowel-less" affixes</td>
				<td>not used</td>
				<td>
					<i lang="ain-Latn">Ingarʼan</i>, <i lang="ain-Latn">gurʼanak</i>,
					<i lang="ain-Latn">moshirʼun</i>
				</td>
			</tr>
			<tr>
				<td>Postpositional groups</td>
				<td>fused</td>
				<td>spaced</td>
				<td>
					<i lang="ain-Latn">otta</i> ~ <i lang="ain-Latn">or ta</i>,
					<i lang="ain-Latn">moshirʼotta</i> ~ <i lang="ain-Latn">mosir or ta</i>
				</td>
			</tr>
			<tr>
				<td>Univerbated particles</td>
				<td>split</td>
				<td>solid</td>
				<td>
					<i lang="ain-Latn">anak ne</i> ~ <A w="anakne" gl="topic particle" />,
					<i lang="ain-Latn">son no</i> ~ <A w="sonno" gl="truly" />
				</td>
			</tr>
			<tr>
				<td>Pitch accent</td>
				<td>unmarked</td>
				<td>unmarked in running text; acute in citation forms where relevant</td>
				<td>—</td>
			</tr>
		</tbody>
	</table>

	<S t="Digraphs, voiced letters, and spurious vowels" id="segments">
		<p>
			The digraphs <i lang="ain-Latn">ch</i> and <i lang="ain-Latn">sh</i> continue the Hepburn
			values for Japanese and carry no contrast in Ainu, which has a single affricate and a single
			sibilant phoneme; Nakagawa's correspondence table for the Hepburn style pairs
			<i lang="ain-Latn">shik</i> with <A w="sik" gl="eye" /> and <i lang="ain-Latn">achapo</i>
			with <A w="acapo" gl="uncle" /> <Ref k="nakagawa2024" p="53–54" />; <Ref k="kirikae1997" />.
			Batchelor, Kindaichi, and Chiri Yukie all also wrote the voiced letters
			<i lang="ain-Latn">b d g</i> beside <i lang="ain-Latn">p t k</i>, although voicing is not
			contrastive in Ainu <Ref k="nakagawa2024" p="54" />. In Batchelor's hands the voiced
			spellings are unstable: the dictionary enters both <i lang="ain-Latn">arage</i> and
			<i lang="ain-Latn">arake</i> as headwords for what is one word, modern
			<A w="arke" gl="one of a pair" /> <Ref k="kirikae1997" />. The Fireside Stories texts write
			invariant <i lang="ain-Latn">tambe gusu</i> for <i lang="ain-Latn">tanpe kusu</i> 'therefore'
			and show the spurious <i lang="ain-Latn">ei</i> spellings <i lang="ain-Latn">chisei</i> for
			<A w="cise" gl="house" /> and <i lang="ain-Latn">heikachi</i> for
			<A w="hekaci" gl="boy" /> <Ref k="sakaguchi2019" p="244" />.
		</p>

		<Ex
			orig="Eani pirika chep shomo ne."
			origLang="ain-Latn"
			m="eani pirka cep somo ne"
			g="2SG good fish NEG COP"
			tr="You are not a good fish."
			cite="sakaguchi2019:245–246"
			id="ex-pirika-chep"
		/>

		<Ex
			orig="Tambe gusu tam moshiri ka ta okai ruwe ne."
			origLang="ain-Latn"
			m="tanpe kusu tan mosir ka ta okay ruw-e ne"
			g="this.thing because this land surface LOC exist.PL track-POSS COP"
			tr="That is why they are in this land."
			cite="sakaguchi2019:245–246"
			id="ex-tambe-gusu"
		/>

		<p>
			The second example compresses most of the segmental rules into one clause: voiced
			<i lang="ain-Latn">b</i> and <i lang="ain-Latn">g</i> for /p/ and /k/, the digraph
			<i lang="ain-Latn">sh</i>, an echo vowel on <i lang="ain-Latn">moshiri</i>, and
			<i lang="ain-Latn">i</i> for the coda glide of <i lang="ain-Latn">okai</i> ~
			<A w="okay" gl="exist (plural)" />. The coda-glide rule — syllable-final
			<i lang="ain-Latn">i</i> and <i lang="ain-Latn">u</i> where the modern standard writes
			<i lang="ain-Latn">y</i> and <i lang="ain-Latn">w</i> — is likewise regular:
			<i lang="ain-Latn">kamui</i> ~ <A w="kamuy" gl="spirit" />, <i lang="ain-Latn">kaukau</i> ~
			<A w="kawkaw" gl="hail" /> <Ref k="nakagawa2024" p="53–54" />.
		</p>
	</S>

	<S t="Echo vowels and syllable-final r" id="echo-vowels">
		<p>
			The most consequential deviation is the paragogic vowel written after closed syllables,
			above all after /r/: Batchelor's dictionary has <i lang="ain-Latn">koro</i>,
			<i lang="ain-Latn">kara</i>, <i lang="ain-Latn">mokoro</i> where the modern standard writes
			<A w="kor" gl="have" />, <A w="kar" gl="make" />, <A w="mokor" gl="sleep" />
			<Ref k="kirikae1997" />; <Ref k="nakagawa2024" p="54" />. Phonetically the flap [ɾ] releases
			into a short vocalic offglide echoing the preceding vowel, and Kirikae locates the error in
			taking that offglide for an intended vowel <Ref k="kirikae1997" />. Refsing adds a filter on
			the transcriber's side: all speakers of the period were bilingual, Japanese phonotactics
			supply no final consonants, and every earlier record had been written in kana, so recorded
			final vowels — especially after <i lang="ain-Latn">r</i> — reflect Japanese influence on the
			transcription as much as on the speech <Ref k="refsing1986" p="55–56" />.
		</p>
		<p>
			The recognition that <i lang="ain-Latn">-r</i>-final syllables contrast with
			<i lang="ain-Latn">-rV</i> sequences is credited by Nakagawa to Chiri Yukie: her
			<span lang="ja">神謡集</span> spellings distinguish <i lang="ain-Latn">nukar</i> and
			<i lang="ain-Latn">pirka</i> from Batchelor's <i lang="ain-Latn">nukara</i> and
			<i lang="ain-Latn">pirika</i>, and Kindaichi changed his own practice under her influence
			from the 1923 <span lang="ja">アイヌ聖典</span> onward <Ref k="nakagawa2024" p="54" />
			‹consensus›. Kindaichi's testimony, quoted by Kirikae, is that Yukie owned the second
			edition of Batchelor's dictionary and had gone through it erasing the final vowels of the
			<i lang="ain-Latn">koro</i>-type entries one by one; Kirikae traces today's
			<i lang="ain-Latn">arke</i>-type spellings to her practice <Ref k="kirikae1997" />. Before
			the change, Kindaichi analysed the verb of <i lang="ain-Latn">inkar’an awa</i> 'when I
			looked' as a lemma <i lang="ain-Latn">inkara</i> whose final syllable lost its vowel before
			the person marker, and wrote an apostrophe as the elision mark — a notation that survives
			throughout Batchelor's own texts (next subsection) <Ref k="kirikae1997" />. The phonemic
			status of the coda is treated in <Xr ch="consonant-inventory" />.
		</p>
	</S>

	<S t="Person marking and word division" id="person-word-division">
		<p>
			Batchelor's orthography segments no
			<Xr ch="personal-affix-template-and-ordering">person markers</Xr>. The fourth-person
			prefix is written solid with the verb, so that <i lang="ain-Latn">a=e</i> '4.A=eat' appears
			as <i lang="ain-Latn">ae</i> and <i lang="ain-Latn">a=ye</i> '4.A=say' as
			<i lang="ain-Latn">aye</i>:
		</p>

		<Ex
			orig="Shomo ae ya!"
			origLang="ain-Latn"
			m="somo a=e ya"
			g="NEG 4.A=eat Q"
			tr="Is it not eaten?"
			cite="sakaguchi2019:245–246"
			id="ex-ae"
		/>

		<p>
			The first- and second-person markers, by contrast, are written as separate words and take
			sentence-initial capitals like English pronouns: the New Testament has
			<i lang="ain-Latn">Ku goro Michi</i> for <i lang="ain-Latn">ku=kor mici</i> 'my Father'
			<Ref k="batchelor1897" p="John 20:17" />, and phrase-internal
			<i lang="ain-Latn">echi otta ku ek</i> for <i lang="ain-Latn">eci=or ta ku=ek</i> 'I came
			to you' <Ref k="batchelor1897" p="1 Cor. 2:1" />. Where a person marker follows an
			<i lang="ain-Latn">r</i>-final stem, the apostrophe of the false-lemma analysis appears:
			Batchelor's lemma for 'to look' was <i lang="ain-Latn">ingara</i>, so the fourth-person form
			is spelled <i lang="ain-Latn">Ingarʼan</i>, with <code>ʼ</code> marking the "elided" vowel
			of the lemma rather than any phonological event:
		</p>

		<Ex
			orig="Ingarʼan"
			origLang="ain-Latn"
			m="inkar=an"
			g="look=4.S"
			tr="Behold! (lit. one looks)"
			cite="batchelor1897:Rev. 1:7"
			id="ex-ingaran"
		/>

		<p>
			The same mark recurs in <i lang="ain-Latn">gurʼanak</i> (<i lang="ain-Latn">kur anak</i>),
			<i lang="ain-Latn">eramʼan-hi</i> (a misparse of <A w="eraman" gl="know" /> as
			<i lang="ain-Latn">eram</i> + <i lang="ain-Latn">an</i>), and
			<i lang="ain-Latn">moshirʼun</i> (<i lang="ain-Latn">mosir un</i>)
			<Ref k="batchelor1897" p="Matt. 13:11; 1 Cor. 2:6" />. Word division is idiosyncratic in
			both directions. Postpositional groups are fused — <i lang="ain-Latn">otta</i> for
			<i lang="ain-Latn">or ta</i>, and with a preceding noun
			<i lang="ain-Latn">moshirʼotta</i> for <i lang="ain-Latn">mosir or ta</i>:
		</p>

		<Ex
			orig="Echipt moshirʼotta ekira"
			origLang="ain-Latn"
			m="Ecipt mosir or ta e=kira"
			g="Egypt land place LOC 2SG.S=flee"
			tr="flee to the land of Egypt"
			cite="batchelor1897:Matt. 2:13"
			id="ex-moshirotta"
		/>

		<p>
			Univerbated particles are conversely split: <i lang="ain-Latn">anak ne</i> for
			<A w="anakne" gl="topic particle" /> and <i lang="ain-Latn">son no</i> for
			<A w="sonno" gl="truly" /> <Ref k="sakaguchi2019" p="245–246" />. Hyphens join the
			nominalizing <A w="hi" gl="place/time/thing" /> to its verb (<i lang="ain-Latn"
				>ene itak-hi</i
			> for <i lang="ain-Latn">ene itak hi</i> 'thus he spoke')
			<Ref k="batchelor1897" p="Matt. 2:13" />; <Ref k="sakaguchi2019" p="245" />, without being
			applied consistently elsewhere. The principles that govern the modern segmentation are
			given in <Xr ch="orthographic-standardization-and-word-division" s="word-spacing" />.
		</p>
	</S>

	<S t="Dialect mixture" id="dialect-mixture">
		<p>
			A Batchelor text is not a dialectally uniform record. In the Fireside Stories the quotative
			appears as <A w="ari" gl="thus (quotative)" /> in the first tale but as
			<A w="sekor" gl="thus (quotative)" /> — the Saru–Ishikari form — in others, both occur
			within a single tale elsewhere in the collection, and six of the fifty tales are
			transpositions of Sakhalin material from Piłsudski <Ref k="pilsudski1912" /> into a
			nominally Hokkaido corpus; the lexical profile makes single authorship of the texts
			implausible, and one tale is attributed to a Shizunai writer
			<Ref k="sakaguchi2019" p="243–244" /> ‹consensus›. Batchelor's own grammatical framework
			compounds the problem: he treated the person markers as pronouns, an analysis not corrected
			until Kindaichi <Ref k="refsing1986" p="22–23" />. Forms cited from this corpus in the
			present grammar are therefore identified by source, never by dialect tag.
		</p>
		<p>
			Two independent checks on Batchelor's material come from Simeon's 1967 fieldwork
			<Ref k="simeon1968" p="2–4" />. His Horobetsu informant, Itaku Haru (b. c. 1883),
			had worked in Batchelor's household for eight years from age sixteen and identified
			one of the missionary's principal informants as a speaker of the
			<strong>Niikappu</strong> dialect — a rare direct datum on where Batchelor's forms
			came from, and consistent with the southern-Hokkaido character of his corpus. Simeon
			also ran an accuracy test: he translated Batchelor's English glosses into Japanese,
			elicited the Ainu from his own informants, and found the responses "either similar to
			or exactly the same as what Batchelor had transcribed", allowing for dialect
			differences <Ref k="simeon1968" p="3" />. The transcriptions themselves are thus more
			trustworthy than the grammatical framework built on them.
		</p>
	</S>
</S>

<S t="From Batchelor to the modern standard" id="comparative-ladder">
	<p>
		Nakagawa tracks the passage from the Hepburn tradition to the modern standard through one
		example set — <A w="aynu" gl="person" />, <A w="horkew" gl="wolf" />, <A w="cis" gl="cry" />,
		<i lang="ain-Latn">cis=an</i> 'we cry' — respelled across the successive systems
		<Ref k="nakagawa2006" p="3–5" />:
	</p>

	<table>
		<thead>
			<tr>
				<th>System</th>
				<th>'person'</th>
				<th>'wolf'</th>
				<th>'cry'</th>
				<th>'we cry'</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Hepburn style (Batchelor; Kindaichi; Kubodera)</td>
				<td><i lang="ain-Latn">ainu</i></td>
				<td><i lang="ain-Latn">horkeu</i></td>
				<td><i lang="ain-Latn">chish</i></td>
				<td><i lang="ain-Latn">chisan</i></td>
			</tr>
			<tr>
				<td>Chiri Mashiho (1942)</td>
				<td><i lang="ain-Latn">ajnu</i></td>
				<td><i lang="ain-Latn">horkeŭ</i></td>
				<td><i lang="ain-Latn">čiš</i></td>
				<td><i lang="ain-Latn">čisan</i></td>
			</tr>
			<tr>
				<td>Chiri Mashiho (1950s)</td>
				<td><i lang="ain-Latn">aynu</i></td>
				<td><i lang="ain-Latn">horkew</i></td>
				<td><i lang="ain-Latn">chis</i></td>
				<td><i lang="ain-Latn">chisan</i></td>
			</tr>
			<tr>
				<td>Phonemic, dialect-dictionary style (Hattori–Tamura)</td>
				<td><i lang="ain-Latn">ʼaynu</i></td>
				<td><i lang="ain-Latn">horkew</i></td>
				<td><i lang="ain-Latn">cis</i></td>
				<td><i lang="ain-Latn">cisan</i></td>
			</tr>
			<tr>
				<td>Phonemic, <em>Akor Itak</em> style (the modern standard)</td>
				<td><i lang="ain-Latn">aynu</i></td>
				<td><i lang="ain-Latn">horkew</i></td>
				<td><i lang="ain-Latn">cis</i></td>
				<td><i lang="ain-Latn">cis=an</i></td>
			</tr>
		</tbody>
	</table>

	<p>
		Each row resolves one layer of the Hepburn inheritance. Chiri Mashiho, who had used the
		Hepburn style in the 1936 grammar co-authored with Kindaichi <Ref k="kindaichi1936" />, moved
		in 1942 to one-letter-per-phoneme spellings for the glides and the affricate
		(<i lang="ain-Latn">j ŭ č</i>), while still splitting /s/ between <i lang="ain-Latn">s</i> and
		<i lang="ain-Latn">š</i> by position; in his 1950s work he abandoned the diacritic letters —
		Nakagawa attributes the retreat to printing costs — leaving <i lang="ain-Latn">ch</i> as the
		one remaining digraph <Ref k="nakagawa2006" p="3–4" />; <Ref k="nakagawa2024" p="55–56" />.
		The phonemic system established in the 1950s by Hattori and Tamura, and disseminated through
		the 1964 dialect dictionary <Ref k="hattori1964" />, completed the one-phoneme-one-letter
		principle with <i lang="ain-Latn">c</i>, wrote the glottal onset <code>ʼ</code> as a phoneme,
		and wrote transitional glides (<i lang="ain-Latn">ʼuwepeker</i>); the style codified in
		<em>Akor Itak</em> <Ref k="utari1994" /> drops both and segments the person markers with
		<code>=</code> <Ref k="nakagawa2006" p="4–5" />; <Ref k="nakagawa2024" p="56–57" />. The
		resulting standard, its remaining points of variation, and the boundary-marking conventions
		are documented in <Xr ch="latin-phonemic-transcription" s="other-romanizations" /> and
		<Xr ch="orthographic-standardization-and-word-division" s="history" />; the parallel kana
		tradition, which the same writers used alongside romanization, is treated in
		<Xr ch="katakana-and-small-kana-codas" />.
	</p>
</S>

<S t="Reading Batchelor materials today" id="reading-today">
	<p>
		The working method for making a Batchelor-orthography text usable is the paired re-edition:
		the original spelling is reproduced intact and a modern respelling (<span lang="ja"
			>表記変更</span
		>) is printed beside it. Sakaguchi and Watanabe's edition of the Fireside Stories states the
		policy explicitly: capitalization of the original is retained; where the text's
		<i lang="ain-Latn">rV</i> spelling leaves it undecidable whether a vowel is present, the vowel
		is bracketed rather than silently resolved (<i lang="ain-Latn">or(o)wano</i>); and the
		respelled text marks morphophonemically fused sequences with an underscore
		(<i lang="ain-Latn">or_ ta</i>, <i lang="ain-Latn">itak h_i</i>), keeping the underlying words
		recoverable while recording the sandhi <Ref k="sakaguchi2019" p="245–247" />. The same
		principles transfer to the New Testament and the dictionary citations.
	</p>
	<p>
		Most of the distance between the two orthographies is mechanical. The segmental
		correspondences of the features table are exceptionless rewrite rules, and the echo vowels
		resolve against a lexicon of coda-final stems. A rule-plus-lexicon conversion of the 1897 New
		Testament, checked against respelling practice of the Sakaguchi–Watanabe type, resolves
		roughly seven-eighths of tokens; the residue is concentrated where conversion stops being
		orthographic — the segmentation and placement of person markers, which depend on
		morphological analysis of the clause rather than on spelling ‹corpus-confirmed›. Reading
		Batchelor therefore means re-doing the person-marking analysis that his orthography never
		encoded; the analysis itself is given in
		<Xr ch="personal-affix-template-and-ordering" />, and the citation conventions for examples
		drawn from pre-phonemic sources in <Xr ch="glossing-abbreviations-and-citation" />.
	</p>
</S>
