<!-- src/lib/grammar/chapters/latin-phonemic-transcription.svelte -->
<script lang="ts">
	import { S, Ref, Xr } from '$lib/grammar/components';
</script>

<S t="The phonemic principle" id="phonemic-principle">
	<p>
		The Latin romanization used throughout this grammar is a <em>phonemic</em> transcription: one
		grapheme per phoneme, with no attempt to represent predictable allophonic detail. It does not
		attempt a phonetic (IPA-narrow) record of every surface variant, nor does it reflect the
		abstract underlying representations required for morphophonological rules. Where a predictable
		alternation is at issue — such as the realization of /s/ as [ɕ] before /i/, or the voicing of
		stops in intervocalic position — the transcription writes the phoneme and the allophonic detail
		is described in the relevant phonology chapter. The consonant inventory and its phonetic
		realization are treated in <Xr ch="consonant-inventory" />; the vowel system in
		<Xr ch="vowel-inventory" />.
	</p>
	<p>
		This transcription is the standard now used in Hokkaido Ainu descriptive linguistics and in the
		major reference works that underpin this grammar: <Ref k="nakagawa2024" />,
		<Ref k="sato2008" />, <Ref k="bugaeva2022" />, and <Ref k="tamura1996" />. The same system
		is employed in the present grammar's interlinear glosses and in all Ainu-language inline forms.
		The parallel katakana orthography is documented in <Xr ch="katakana-and-small-kana-codas" />;
		Sakhalin-tradition Cyrillic transcription, used only for contrast, is described in
		<Xr ch="cyrillic-and-multiscript-rendering" />.
	</p>
</S>

<S t="Phoneme-to-grapheme correspondences" id="correspondences">
	<p>
		The inventory comprises five vowels and twelve consonants, listed in the table below alongside
		their IPA equivalents and the primary allophonic notes that bear on the transcription.
	</p>

	<table>
		<thead>
			<tr>
				<th>Grapheme</th>
				<th>IPA</th>
				<th>Category</th>
				<th>Notes</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">a</i></td>
				<td>/a/</td>
				<td>vowel</td>
				<td>low central; the most frequent vowel in the Hokkaido corpus</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">e</i></td>
				<td>/e/</td>
				<td>vowel</td>
				<td>mid front; realized approximately [e̞]~[ɛ̝], comparable to Japanese /e/</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">i</i></td>
				<td>/i/</td>
				<td>vowel</td>
				<td>high front; conditions the palatalization of /s/ and /c/</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">o</i></td>
				<td>/o/</td>
				<td>vowel</td>
				<td>mid back rounded; realized approximately [o̞]~[ɔ̝]</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">u</i></td>
				<td>/u/</td>
				<td>vowel</td>
				<td>high back; fully rounded (strong labiality reported by some speakers)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">p</i></td>
				<td>/p/</td>
				<td>stop</td>
				<td>voiceless bilabial; intervocalic lenition to [b] in some dialects/registers</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">t</i></td>
				<td>/t/</td>
				<td>stop</td>
				<td>voiceless dental/alveolar; intervocalic lenition to [d] in some environments</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">k</i></td>
				<td>/k/</td>
				<td>stop</td>
				<td>voiceless velar; intervocalic lenition to [ɡ] in some environments</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">c</i></td>
				<td>/t͡ʃ/</td>
				<td>affricate</td>
				<td>
					voiceless palato-alveolar affricate; the single grapheme <i lang="ain-Latn">c</i> replaces
					earlier <em>ch</em>, <em>č</em>, and <em>ts</em> variants in the literature
				</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">s</i></td>
				<td>/s/</td>
				<td>fricative</td>
				<td>
					voiceless alveolar fricative; realized as [ɕ] (palato-alveolar) before /i/ and in
					word-final position in some dialects; replaces earlier <em>sh</em> and <em>š</em>
					variants
				</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">m</i></td>
				<td>/m/</td>
				<td>nasal</td>
				<td>bilabial nasal; neutralizes with /n/ before bilabial consonants in some dialects</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">n</i></td>
				<td>/n/</td>
				<td>nasal</td>
				<td>alveolar nasal; realized as [ŋ] before /k/</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">r</i></td>
				<td>/r/</td>
				<td>rhotic</td>
				<td>alveolar flap [ɾ]; devoiced after voiceless stops; not a lateral</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">w</i></td>
				<td>/w/</td>
				<td>glide</td>
				<td>
					labio-velar approximant; phonemic in onset position; also appears as a predictable
					transitional glide at certain vowel-hiatus sites (see §<a href="#glide-notation"
						>glide-notation</a
					>)
				</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">y</i></td>
				<td>/j/</td>
				<td>glide</td>
				<td>
					palatal approximant; phonemic in onset position; also a predictable transitional glide (see
					§<a href="#glide-notation">glide-notation</a>)
				</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">h</i></td>
				<td>/h/</td>
				<td>laryngeal</td>
				<td>
					glottal fricative in onset; word-final <i lang="ain-Latn">-h</i> (the coda laryngeal) is a
					special case — its phonemic status and historical origin are discussed in
					<Xr ch="glottal-stop" />
				</td>
			</tr>
		</tbody>
	</table>

	<p>
		The system has no length distinction in vowels: Hokkaido Ainu does not contrast short and long
		vowels phonemically (a property that distinguishes it from the Sakhalin varieties, where vowel
		length is phonemic and corresponds diachronically to the Hokkaido word-final
		<i lang="ain-Latn">-h</i> <Ref k="itabashi2001" />). Hokkaido vowel sequences across morpheme
		boundaries are sequences of two distinct vowel phonemes and are treated in
		<Xr ch="glides-w-y" />.
	</p>
</S>

<S t="The choice of c, and s before i" id="c-and-s">
	<p>
		The grapheme <i lang="ain-Latn">c</i> for the palato-alveolar affricate /t͡ʃ/ is the letter
		that has become standard in Hokkaido Ainu linguistics. Older transcriptions — including
		missionary-era works and earlier twentieth-century philological writing — employed
		<em>ch</em>, <em>č</em>, or occasionally <em>ts</em> for the same segment; these variants
		survive in reprints and in writers unfamiliar with the modern scholarly standard
		<Ref k="aynucorporadiscord" /> (nukopoli, aynu-corpora Discord 2023). The unambiguity of
		<i lang="ain-Latn">c</i> rests on a phonological fact: Hokkaido Ainu has no contrast between a
		palatal and a non-palatal affricate, so a single letter covers the full distribution of the
		phoneme without risk of collision with other segments <Ref k="kirikae1997" />.
	</p>
	<p>
		Native-speaker writing, from Chiri Yukie <Ref k="chiri1923" /> to the Ainu kana orthographies
		documented by Kirikae <Ref k="kirikae1997" /> and Nakagawa <Ref k="nakagawa2006" />, does not
		write <i lang="ain-Latn">ca cu ce</i> with contracted kana (チャ チュ チェ) but with the
		straight syllabary forms. Kirikae attributes this to the absence of any phonological contrast
		between a palatal and non-palatal series in Ainu: the affricate is uniformly palato-alveolar
		regardless of the following vowel, and the kana typography that distinguishes large from small
		character would imply a distinction that Ainu phonology does not make
		<Ref k="kirikae1997" /> ‹speculative›.
	</p>
	<p>
		The fricative <i lang="ain-Latn">s</i> is written uniformly throughout, even though its
		phonetic realization is [ɕ] (palato-alveolar) before /i/ and in certain coda environments.
		Earlier transcriptions sometimes employed <em>sh</em> or <em>š</em> for the coda or pre-/i/
		variant; the modern standard writes <i lang="ain-Latn">s</i> in all positions and treats [ɕ]
		as a predictable allophone <Ref k="sato2008" />; <Ref k="nakagawa2024" />. The phonetics of
		the alternation and its morphophonological consequences are developed in
		<Xr ch="consonant-inventory" />.
	</p>
</S>

<S t="Glottal stop, vowel-initial words, and onset representation" id="glottal-stop-notation">
	<p>
		Every syllable in Hokkaido Ainu has a consonantal onset. Words written with an initial vowel
		letter — <i lang="ain-Latn">ek</i> 'come', <i lang="ain-Latn">arki</i> 'come (plural)',
		<i lang="ain-Latn">opitta</i> 'all' — have an underlying glottal stop [ʔ] as their onset, but
		the modern romanization does not write this stop. Tamura's earlier analytical papers
		represented it with an apostrophe (<i lang="ain-Latn">'a</i>, <i lang="ain-Latn">'i</i>, etc.),
		and the Kotobai no kenkyū variant and some early descriptive materials similarly mark
		vowel-initial onsets; from roughly the 1980s onward, however, the apostrophe has been
		systematically omitted in published Hokkaido Ainu linguistics, the convention followed here
		<Ref k="aynucorporadiscord" /> (nukopoli, aynu-corpora Discord 2023). The suppression of the
		apostrophe reflects a practical consensus rather than a settled phonemic analysis: whether the
		glottal stop is a separate phoneme or a default onset-filler is a genuine analytical question
		addressed in <Xr ch="glottal-stop" />.
	</p>
	<p>
		Word-final <i lang="ain-Latn">-h</i> — which appears on many verbal and nominal stems in their
		citation form (e.g. <i lang="ain-Latn">nupurh</i> 'mountain god' in some dialects) — is a
		distinct phenomenon: it is not a surface fricative but a laryngeal element that triggers
		morphophonological alternations and corresponds to Sakhalin vowel length. Its treatment is
		fully separated from the onset-glottal-stop question and is given in <Xr ch="glottal-stop" />.
	</p>
</S>

<S t="Pitch-accent diacritics: when and how accent is marked" id="accent-diacritics">
	<p>
		Hokkaido Ainu has a lexically contrastive pitch-accent system. In citation forms and in
		paradigm cells where the accentual distinction is under discussion, an acute diacritic marks the
		first vowel of the accented mora: <i lang="ain-Latn">síne</i> 'one',
		<i lang="ain-Latn">tú</i> 'two'. When accent is not relevant to the point being made, forms
		are written without diacritics throughout. Running Ainu text — narrative examples, interlinear
		glosses, and ordinary in-text citations — is unaccented unless the prosodic pattern is the
		object of description; the pitch-accent chapters are the exception, not the rule
		<Ref k="nakagawa2024" />.
	</p>
	<p>
		This policy mirrors the convention of <Ref k="nakagawa2024" /> and departs slightly from some
		pedagogical materials that mark accent more systematically. Most reference works in the
		literature — including <Ref k="tamura1996" />, <Ref k="sato2008" />, and
		<Ref k="bugaeva2022" /> — do not mark accent on forms cited in grammatical discussion, and the
		present grammar follows that tradition in its non-prosodic chapters. The accentual system, its
		placement rule, and the accentless-dialect split are developed in
		<Xr ch="pitch-accent-placement-rule" />.
	</p>
</S>

<S t="Morpheme and person-marker boundary notation" id="boundary-markers">
	<p>
		Two punctuation marks segment the internal structure of Ainu words in this grammar and in the
		interlinear glosses documented in <Xr ch="glossing-abbreviations-and-citation" />:
	</p>
	<ul>
		<li>
			The <strong>equals sign</strong> <code>=</code> marks the boundary between a person marker
			and its stem: <i lang="ain-Latn">ku=kor</i> '1<span class="sc">sg.a</span>=have',
			<i lang="ain-Latn">a=nu</i> '4.<span class="sc">a</span>=hear'. This is an orthographic
			device of the Nakagawa lineage — expressly <em>not</em> the general-linguistic use of
			<code>=</code> for phrasal clitics <Ref k="nakagawa2024" p="58–60" />: it keeps
			inflectional person marking visually distinct from derivation and makes the dictionary
			headword recoverable. The markers' actual affix-versus-clitic status is mixed and
			contested (see <Xr ch="personal-affix-template-and-ordering" s="boundary-status" />).
		</li>
		<li>
			The <strong>hyphen</strong> <code>-</code> marks derivational morpheme boundaries and
			stem-internal junctures: <i lang="ain-Latn">yay-nu</i> 'self-hear (listen)', <i
				lang="ain-Latn">e-nu</i
			> '<span class="sc">appl</span>-hear'. Derivational prefixes and suffixes form part of the
			derived stem, which the person markers attach outside of.
		</li>
	</ul>
	<p>
		The distinction between <code>=</code> and <code>-</code> originates in Nakagawa's personal
		data-management notation of the early 1980s and entered print in the 1986 publication
		『語りの中の生活誌』, from where it spread through Hokkaido Ainu teaching and descriptive
		materials <Ref k="nakagawa2024" p="58–60" />; <Ref k="aynucorporadiscord" /> (nukopoli,
		aynu-corpora Discord 2024). It has never been universal: Tamura's dictionary and papers
		print inflected forms solid or hyphenated, Refsing <Ref k="refsing1986" /> and Satō
		<Ref k="sato2008" /> use hyphens for all bound morphemes (<i lang="ain-Latn">ku-kor wa
		k-ek</i>), and Ijäs <Ref k="ijas2023" /> follows the hyphen practice; Nakagawa
		<Ref k="nakagawa2024" /> and the Handbook tradition <Ref k="bugaeva2022" /> use
		<code>=</code>, and it is adopted here. The morphological and syntactic status of the
		person markers is developed throughout Part V.
	</p>
	<p>
		Word-division decisions — how compounds, incorporating forms, and postpositional groups are
		spaced — are a separate question from morpheme-boundary notation and are treated in
		<Xr ch="orthographic-standardization-and-word-division" />.
	</p>
</S>

<S t="Capitalization, proper names, and punctuation" id="capitalization">
	<p>
		Ainu words are written in lower case throughout, including in the Ainu-language line of
		interlinear glosses. Sentence-initial capitalization does not apply to the Ainu line; only the
		free-translation line follows ordinary English sentence capitalization. Personal names and
		place names are capitalized when they appear in English running prose but retain lower case in
		glossed lines and in in-text Ainu citations: <i lang="ain-Latn">sisam mosir</i> 'Japan
		(Wajin-land)', <i lang="ain-Latn">pirika menoko</i> 'a beautiful woman'.
	</p>
	<p>
		Punctuation within Ainu text follows the source when a text is being cited; the grammar's own
		prose interpolations and constructed examples carry no internal Ainu punctuation. The
		discrepancy between comma-period (<span lang="ja">，．</span>) and Japanese-style pause-stop
		(<span lang="ja">、。</span>) conventions in different Hokkaido Ainu publications is a
		document-production variable, not a linguistic distinction, and is not discussed further here.
	</p>
</S>

<S t="Glide transcription and vowel hiatus" id="glide-notation">
	<p>
		Sequences of two vowels from different morphemes — <i lang="ain-Latn">a=e</i> '4.<span
			class="sc">a</span>=eat', <i lang="ain-Latn">u-epeker</i> 'mutual.storytelling',
		<i lang="ain-Latn">i-omante</i> 'send (with 4.<span class="sc">o</span>)' — are written as
		bare vowel sequences in this grammar, following Nakagawa's modern convention. An older style
		associated with Tamura's publications from the 1970s onward inserts a transitional glide at the
		hiatus site: <i lang="ain-Latn">uwepeker</i>, <i lang="ain-Latn">iyomante</i>
		<Ref k="aynucorporadiscord" /> (nukopoli, aynu-corpora Discord 2024) ‹contested›. The choice
		has phonological consequences: whether the transitional [w] and [j] are phonemic or predictable
		epenthetic segments determines whether they should be written. The analysis adopted here treats
		them as predictable and omits them in the romanization; the underlying analysis is developed in
		<Xr ch="glides-w-y" />. Phonemic /w/ and /y/ in onset position are always written (e.g.
		<i lang="ain-Latn">wakka</i> 'water', <i lang="ain-Latn">yuk</i> 'deer').
	</p>
</S>

<S t="Relation to the IPA and to other romanizations in the literature" id="other-romanizations">
	<p>
		The table below maps this grammar's graphemes to the IPA and to the conventions used in the
		four main reference works: Tamura <Ref k="tamura1996" />, Satō <Ref k="sato2008" />, Nakagawa
		<Ref k="nakagawa2024" />, and the <em>Handbook of the Ainu Language</em>
		<Ref k="bugaeva2022" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>This grammar</th>
				<th>IPA</th>
				<th>Tamura (1996)</th>
				<th>Satō (2008)</th>
				<th>Nakagawa (2024)</th>
				<th>Bugaeva (2022)</th>
				<th>Older variants</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">a e i o u</i></td>
				<td>/a e i o u/</td>
				<td>a e i o u</td>
				<td>a e i o u</td>
				<td>a e i o u</td>
				<td>a e i o u</td>
				<td>—</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">p t k</i></td>
				<td>/p t k/</td>
				<td>p t k</td>
				<td>p t k</td>
				<td>p t k</td>
				<td>p t k</td>
				<td>—</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">c</i></td>
				<td>/t͡ʃ/</td>
				<td>c</td>
				<td>c</td>
				<td>c</td>
				<td>c</td>
				<td><em>ch</em>, <em>č</em></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">s</i></td>
				<td>/s/ ([ɕ] before /i/)</td>
				<td>s</td>
				<td>s</td>
				<td>s</td>
				<td>s</td>
				<td><em>sh</em>, <em>š</em> (for coda/pre-<em>i</em> variants)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">m n r w y h</i></td>
				<td>/m n r w j h/</td>
				<td>m n r w y h</td>
				<td>m n r w y h</td>
				<td>m n r w y h</td>
				<td>m n r w y h</td>
				<td>—</td>
			</tr>
			<tr>
				<td>∅ (vowel-initial)</td>
				<td>[ʔ] onset</td>
				<td>∅ (earlier: <em>ʼa</em>)</td>
				<td>∅</td>
				<td>∅</td>
				<td>∅</td>
				<td>apostrophe <em>ʼ</em> before vowels</td>
			</tr>
			<tr>
				<td><code>=</code> (person-marker boundary)</td>
				<td>—</td>
				<td>— (unsegmented or <em>-</em>)</td>
				<td>— (uses <em>-</em> for all)</td>
				<td>=</td>
				<td>=</td>
				<td>hyphen <em>-</em> for all morpheme types</td>
			</tr>
			<tr>
				<td>Hiatus written bare: <i lang="ain-Latn">uepeker</i></td>
				<td>—</td>
				<td><i lang="ain-Latn">uwepeker</i></td>
				<td>varies</td>
				<td>bare (uepeker)</td>
				<td>varies</td>
				<td>glide insertion: <em>uwepeker</em>, <em>iyomante</em></td>
			</tr>
		</tbody>
	</table>

	<p>
		Across the four main sources, the segmental inventory is identical and the letter choices for
		the consonants and vowels are uniform ‹consensus›. The differences are notational conventions:
		the treatment of the glottal stop onset (suppressed everywhere in modern practice), the use of
		<code>=</code> versus <code>-</code> for the person markers, and the insertion or suppression
		of transitional glides at vowel hiatus. Tamura's 1996 dictionary uses only hyphens and inserts
		glides; Satō likewise hyphenates the person markers; Nakagawa and the Handbook use
		<code>=</code>; the sources are divided on glide insertion.
		These differences are confined to morpheme-boundary notation and to the analysis of hiatus; they
		do not affect the phonemic letter values.
	</p>
	<p>
		The Shiraishi chapter in the Handbook provides a systematic phonetic description alongside
		phonemic notation <Ref k="shiraishi2022" />; where that chapter uses IPA symbols for phonetic
		detail this grammar cites the relevant IPA and maps it to its own grapheme. Older grammars and
		dictionaries — Batchelor <Ref k="batchelor1905" />, Chamberlain <Ref k="chamberlain1887" />,
		and the Kindaichi–Chiri tradition <Ref k="kindaichi1936" /> — use substantially different
		letter choices that are not systematically enumerated here; readers encountering those sources
		should be aware that their <em>ch</em> and <em>sh</em> renderings are equivalent to this
		grammar's <i lang="ain-Latn">c</i> and <i lang="ain-Latn">s</i>, and that their morpheme
		boundary conventions differ throughout.
	</p>
	<p>
		The relation between the Latin romanization and the katakana orthography — including the
		systematic letter-to-kana mapping, the extended small-kana coda letters, and round-trip
		conversion issues — is documented in <Xr ch="katakana-and-small-kana-codas" />.
	</p>
</S>
