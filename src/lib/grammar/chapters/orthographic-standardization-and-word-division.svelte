<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The two writing systems" id="two-scripts">
	<p>
		Two writing systems serve Hokkaido Ainu in current practice. The Latin phonemic romanization is
		the primary medium of academic grammars, dictionaries, and text editions; the katakana syllabary,
		extended with small-kana coda letters to accommodate Ainu's closed syllables, is the standard of
		classroom instruction, signage, and revitalization materials. Neither rests on an officially
		imposed norm. What exists is a convergence of practice: academic romanizations have stabilized
		around a shared phonemic base since the 1970s, and the Hokkaidō Utari Kyōkai's pedagogical
		series <em>Akor Itak</em> <Ref k="utari1994" /> established the katakana norm for the modern
		teaching tradition. The phoneme-to-grapheme details of the romanization are documented in
		<Xr ch="latin-phonemic-transcription" />, and the katakana mapping — including Unicode coverage
		of the small-kana coda letters — in <Xr ch="katakana-and-small-kana-codas" />. For the Sakhalin
		tradition and its Cyrillic transcription, which lies outside the Hokkaido scope of this grammar,
		see <Xr ch="cyrillic-and-multiscript-rendering" />.
	</p>
	<p>
		The present chapter addresses three questions those chapters leave aside: how the current
		academic romanization came to prevail over its predecessors; what principles govern the boundary
		between an inflectional clitic, a derivational affix, and an independent word in the written
		form; and which conventions this grammar adopts where the literature is still divided. The
		institutional context of standardization and revitalization is taken up in
		<Xr ch="sociolinguistic-situation-revitalization" />.
	</p>
</S>

<S t="From early romanizations to the modern standard" id="history">
	<p>
		The oldest systematic romanizations of Hokkaido Ainu were phonetically oriented rather than
		phonemically principled. Batchelor's dictionaries <Ref k="batchelor1905" />;
		<Ref k="batchelor1938" /> and the grammar of Kindaichi and Chiri <Ref k="kindaichi1936" />
		used digraphs — <i>ch</i>, <i>sh</i> — to capture what were perceived as palatalized
		realizations before front vowels, and variant spellings of the same phoneme appear across
		sources because stop allophones and their voiced intervocalic counterparts were sometimes
		represented as separate letters. Batchelor's system, in particular, drew heavily on English
		letter values, leading to notations difficult to reconcile with later phonemic analysis
		<Ref k="shibatani1990" p="§2" />.
	</p>
	<p>
		The shift to a phonemic approach was gradual. Chiri Yukie's 1923 collection of divine epics
		<Ref k="chiri1923" /> is an early instance of romanization by an Ainu speaker, made possible
		by her training at Batchelor's mission school in Hakodate, where she received instruction in
		English and the Latin alphabet <Ref k="aynucorporadiscord" /> (nukopoli, 2024–11–17). Through
		the postwar period, fieldwork-based descriptions produced romanizations that moved progressively
		toward phonemic consistency. Tamura's Saru dictionary <Ref k="tamura1996" /> and the grammars
		that followed — Refsing on Shizunai <Ref k="refsing1986" />, Satō's foundational description
		<Ref k="sato2008" />, Bugaeva on southern Hokkaido <Ref k="bugaeva2012" />, and Nakagawa's
		extensive grammar <Ref k="nakagawa2024" /> — share the same twelve-consonant, five-vowel
		phonemic framework: /p t k c s m n r w y h/ and /a i u e o/, each with a single Roman-letter
		correspondent.
	</p>
	<p>
		The pivotal choices within this shared framework concern the affricate and the sibilant. The
		modern standard writes <i>c</i> for the affricate /c/ and <i>s</i> for the sibilant /s/,
		abandoning the digraphs <i>ch</i>/<i>sh</i>, the diacriticized forms <i>č</i>/<i>š</i>, and
		the phonetically motivated <i>ts</i>. Usage of <i>ch</i>/<i>sh</i> now survives mainly in
		reprints of pre-standardization materials and in writing by authors outside the academic Ainu
		linguistics community <Ref k="aynucorporadiscord" /> (nukopoli, 2023–12–08) ‹consensus›.
		Community and native-speaker orthographic practices across the twentieth century, including the
		tension between academic romanization and community-developed writing styles, are surveyed in
		<Ref k="kirikae1997" /> and <Ref k="nakagawa2006" />. Ijäs's online pedagogical grammar
		<Ref k="ijas2023" /> represents the most accessible English-medium resource for learners, and
		it applies the modern romanization throughout. The broader revitalization context — the role of
		the FRPAC, Upopoy, and language-teaching infrastructure in norm diffusion — is documented by
		<Ref k="ono2022" />.
	</p>
</S>

<S t="The = sign and the clitic–affix boundary" id="equals-sign">
	<p>
		Among the innovations of the modern academic romanization, the most analytically consequential
		is the use of two distinct boundary markers: the hyphen <code>-</code> for derivational
		prefixes and suffixes, and the equals sign <code>=</code> for inflectional person affixes.
		This distinction is now standard in published grammars and text transcriptions.
	</p>
	<p>
		Nakagawa traces its origin to his own data-management practice in the early 1980s: working on
		Ainu texts, he used hyphens for derivational morphemes such as <i lang="ain-Latn">yay-</i>
		'self/reflexive' and <i lang="ain-Latn">-re</i> 'causative' and equals signs for person affixes
		such as <i lang="ain-Latn">ku=</i> '1<span class="sc">sg</span> transitive subject' and
		<i lang="ain-Latn">=an</i> 'fourth-person intransitive subject'. The notation entered print in
		the orthographic principles section of the 1986 publication
		<span lang="ja">語りの中の生活誌</span>, from where it spread to other researchers and became
		the accepted practice <Ref k="nakagawa2024" />; <Ref k="aynucorporadiscord" /> (nukopoli,
		2024–11–09) ‹consensus›.
	</p>
	<p>
		The distinction the notation encodes is morphological: person affixes are inflectional —
		every finite predication indexes its arguments through them — while derivational affixes change
		the verb's argument structure or create lexical categories. A verb form carrying both types
		displays both boundary markers simultaneously:
	</p>

	<Ex
		m="ku=yay-e"
		g="1SG.A=REFL-eat"
		tr="I eat (a meal)."
		constructed
	/>

	<p>
		The person clitic <i lang="ain-Latn">ku=</i> marks the first-person transitive agent; the
		derivational prefix <i lang="ain-Latn">yay-</i> is a reflexive, here producing the idiomatic
		reading 'eat a meal'. The morphological system behind this layering — the full paradigm of
		person affixes and their template positions — is described in
		<Xr ch="personal-affix-template-and-ordering" />, and the reflexive
		<i lang="ain-Latn">yay-</i> in <Xr ch="reflexive-yay" />.
	</p>
	<p>
		Older texts and some pedagogical materials use hyphens for all bound morphemes, leaving the
		inflectional–derivational distinction unmarked in the written form. The <em>Akor Itak</em>
		textbook and related classroom materials apply spacing conventions designed for readability
		that do not always track the = / - distinction. The present grammar uses = throughout for person
		affixes and - for derivational morphemes; the gloss line follows the same boundary symbols, so
		the morphemic form and its gloss align symbol-for-symbol. The full gloss abbreviation list is
		given in <Xr ch="glossing-abbreviations-and-citation" />.
	</p>
</S>

<S t="Word spacing and compound boundaries" id="word-spacing">
	<p>
		The most debated segmentation level is the space: where does one orthographic word end and the
		next begin? Hokkaido Ainu morphology offers no fully decisive test, since the language's
		polysynthetic character allows a verb complex with incorporated noun, multiple derivational
		layers, and person clitics to be parsed, in principle, as one word or as several.
	</p>
	<p>
		A case where the written boundary carries semantic weight is the pair
		<i lang="ain-Latn">sisam itak</i> and <i lang="ain-Latn">sisamitak</i>. Written as two words,
		<i lang="ain-Latn">sisam itak</i> is a phrase meaning 'the language of the Wajin (Japanese
		person)'; written solid, <i lang="ain-Latn">sisamitak</i> is a lexicalized compound that
		functions as the proper name for the Japanese language. The accent pattern reinforces the
		distinction: the phrase carries independent accentual domains on each member, while the
		compound exhibits a unified domain. Writing the compound solid also avoids the misreading
		<i>si.sa.mi.tak</i> that the concatenated form can produce and aids morphological processing
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024–11–05; 2024–12–20) ‹contested›. The compound
		phonology is analyzed in <Xr ch="accent-in-compounds-and-affixation" /> and the morphology of
		noun-noun compounding in <Xr ch="noun-noun-compounding" />.
	</p>
	<p>
		A related area of variation concerns particles and light verbs in aspectual and possessive
		constructions. In the construction <i lang="ain-Latn">kor an</i> 'be in a state of having',
		<i lang="ain-Latn">kor</i> and the existential <i lang="ain-Latn">an</i> are standardly
		written as two separate words. In the possessive complex <i lang="ain-Latn">ku=kor cise</i>
		'my house', the cliticized verb is written attached to the person prefix by the = sign. Satō
		<Ref k="sato2008" p="85–90" /> and Nakagawa <Ref k="nakagawa2024" /> apply this practice
		consistently without making the underlying analysis fully explicit; the relevant morphosyntactic
		analysis is taken up in <Xr ch="concept-form-affiliative-form" />. A further dimension concerns
		the middle-dot sometimes found in the romanization of the language name
		(<em>Aynu·itak</em>): this derives from a 2007 Japanese Wikipedia entry that used the dot as
		a reading aid for Japanese readers, not as an Ainu orthographic feature, and its subsequent
		spread into digital platforms gave it the appearance of a convention it is not
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024–11–05).
	</p>
</S>

<S t="Contested notational choices" id="contested-choices">

	<S t="Nasal neutralization before labials" id="nasal-labial">
		<p>
			Before the labial obstruents /p/ and /m/, the contrast between underlying /n/ and /m/ is
			neutralized: both surface as [m] in connected speech. Published descriptions handle this
			differently. Tamura's practice is etymological: where the underlying morpheme is recoverable
			from alternations, the historical form is written; where it cannot be determined, she used
			a macron-n (<i>n̄</i>) as a neutral symbol
			<Ref k="tamura1996" />. Nakagawa and Satō write the morphologically determined form —
			<i lang="ain-Latn">m</i> or <i lang="ain-Latn">n</i> as the morphemic composition
			warrants — rather than introducing a separate neutral symbol
			<Ref k="nakagawa2024" />; <Ref k="sato2008" />. The community archive records further
			variation: some writers use consistent surface <i lang="ain-Latn">m</i>, others
			Japanese-influenced surface <i lang="ain-Latn">n</i>, and others the etymological split;
			the assimilation of the nasal in loanwords like
			<i lang="ain-Latn">kampi</i> 'paper' (← Japanese <span lang="ja">紙</span> <i>kaNbi</i>)
			presents a particularly intricate case where different analytical stances yield different
			spellings <Ref k="aynucorporadiscord" /> (nukopoli, 2024–03–23; 2024–11–16) ‹contested›.
			The phonological rule is analyzed in <Xr ch="coda-r-assimilation-sonorant-sandhi" />.
			This grammar follows the etymological-morphological convention: <A w="kamuy" gl="spirit, deity" />
			is written with <i lang="ain-Latn">m</i> because the morpheme is underlyingly labial-nasal,
			while a form whose underlying nasal is <i lang="ain-Latn">n</i> and which happens to precede
			a labial in a complex is written with <i lang="ain-Latn">n</i> where alternation evidence
			supports the underlying form.
		</p>
	</S>

	<S t="Glide notation in hiatus" id="glide-notation">
		<p>
			A second unsettled area is the treatment of glides between adjacent vowels. Tamura's
			romanization — and the practice of many scholars working on Saru — inserts an explicit
			<i>w</i> or <i>y</i> between a vowel-final and a vowel-initial element: hence
			<i lang="ain-Latn">uwepeker</i> (not <i lang="ain-Latn">uepeker</i>) and
			<i lang="ain-Latn">iyomante</i> (not <i lang="ain-Latn">iomante</i>)
			<Ref k="tamura1996" />. Nakagawa's more recent practice suppresses the inserted segment on
			the grounds that the [w] and [j] realizations in these positions are phonologically
			predictable and need not be marked orthographically; analogous hiatus-bridging glides are
			left unwritten in the romanization of many other languages
			<Ref k="nakagawa2024" />; <Ref k="aynucorporadiscord" /> (nukopoli, 2024–11–26) ‹contested›.
			Whether the glide is phonemically present or allophonic is a separate question, addressed
			in <Xr ch="glides-w-y" />. This grammar adopts the simplified notation:
			<i lang="ain-Latn">uepeker</i>, <i lang="ain-Latn">iomante</i>, and related forms appear
			without the inserted glide.
		</p>
	</S>

	<S t="The glottal stop" id="glottal-onset">
		<p>
			Earlier articles by Tamura, written in the 1950s and 1960s, marked the glottal onset on
			vowel-initial words with a preceding apostrophe: <i>'a</i>, <i>'i</i>, and so on. By the
			1980s this notation had been almost universally abandoned for Hokkaido Ainu. Modern grammars
			— including Nakagawa <Ref k="nakagawa2024" /> and Satō <Ref k="sato2008" /> — do not mark
			the glottal onset in the standard romanization; the typographic overhead was regarded as
			disproportionate to its analytic contribution, and the notation was inconsistently applied
			in the very sources that introduced it <Ref k="aynucorporadiscord" /> (nukopoli,
			2023–12–08) ‹consensus›. The phonological status of word-initial glottalization —
			whether a phonemic glottal stop is present, absent, or conditioned by prosodic environment —
			is discussed in <Xr ch="glottal-stop" />.
		</p>
	</S>

</S>

<S t="Conventions adopted in this grammar" id="conventions-table">
	<p>
		The following table summarizes the decisions made above, drawn together for ready reference.
		The entries cover features where published sources diverge and where a reader moving between
		this grammar and other descriptions may encounter different practice.
	</p>

	<table>
		<thead>
			<tr>
				<th>Feature</th>
				<th>Convention in this grammar</th>
				<th>Alternatives in the literature</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Primary script</td>
				<td>Latin phonemic romanization</td>
				<td>Katakana (pedagogical and revitalization materials)</td>
			</tr>
			<tr>
				<td>Affricate /c/</td>
				<td><code>c</code></td>
				<td>
					<code>ch</code> (Batchelor, pre-standardization); <code>č</code>; <code>ts</code>
				</td>
			</tr>
			<tr>
				<td>Sibilant /s/</td>
				<td><code>s</code></td>
				<td><code>sh</code> (pre-standardization)</td>
			</tr>
			<tr>
				<td>Person-affix boundary</td>
				<td>
					<code>=</code> (e.g. <i lang="ain-Latn">ku=</i>, <i lang="ain-Latn">=an</i>)
				</td>
				<td><code>-</code> for all bound morphemes (older texts, some pedagogical materials)</td>
			</tr>
			<tr>
				<td>Derivational-affix boundary</td>
				<td>
					<code>-</code> (e.g. <i lang="ain-Latn">yay-</i>, <i lang="ain-Latn">-re</i>,
					<i lang="ain-Latn">i-</i>)
				</td>
				<td>Unmarked / concatenated (some pedagogical texts)</td>
			</tr>
			<tr>
				<td>Neutralized nasal before labials</td>
				<td>Etymological <code>n</code> or <code>m</code> per morpheme</td>
				<td>
					Surface <code>m</code> (phonetic convention); surface <code>n</code>
					(Japanese-influenced); macron-n <code>n̄</code> (Tamura's indeterminate cases)
				</td>
			</tr>
			<tr>
				<td>Glide in hiatus (<i lang="ain-Latn">u_e</i>, <i lang="ain-Latn">i_o</i>, etc.)</td>
				<td>
					Omitted: <i lang="ain-Latn">uepeker</i>, <i lang="ain-Latn">iomante</i>
				</td>
				<td>
					Explicit: <i lang="ain-Latn">uwepeker</i>, <i lang="ain-Latn">iyomante</i>
					(Tamura and much post-Tamura Saru scholarship)
				</td>
			</tr>
			<tr>
				<td>Glottal onset on vowel-initial words</td>
				<td>Not marked</td>
				<td>Apostrophe <code>'</code> (Tamura pre-1980s; a few other sources)</td>
			</tr>
			<tr>
				<td>Lexicalized compounds vs phrases</td>
				<td>
					Solid for lexicalized items (e.g. <i lang="ain-Latn">sisamitak</i> 'Japanese
					language'); spaced for syntactic phrases (e.g. <i lang="ain-Latn">sisam itak</i>
					'the Wajin's language')
				</td>
				<td>Variable; not systematically distinguished in most sources</td>
			</tr>
		</tbody>
	</table>

	<p>
		For the katakana correspondence and the Unicode encoding of the small-kana coda letters
		(including the semi-voiced <i>pu</i> coda), see <Xr ch="katakana-and-small-kana-codas" />.
		For the complete gloss abbreviation list and the interlinear-example format, see
		<Xr ch="glossing-abbreviations-and-citation" />. Person-affix allomorphy and connected-speech
		reduction affecting the written forms are treated in
		<Xr ch="personal-affix-sandhi-connected-speech-reduction" />.
	</p>
</S>
