<script lang="ts">
	import { S, Ex, Ref, Xr } from '$lib/grammar/components';
</script>

<S t="Person markers and their phonological neighbors" id="overview">
	<p>
		Person markers can affect the vowels, syllables, and accent of the form to which they attach.
		Southern Hokkaido descriptions distinguish prefix-vowel loss, the conversion of stem-initial /i/
		to /y/, and the preservation or relocation of stem accent
		<Ref k="nakagawa2024" p="52–53" />; <Ref k="sato2008" p="110–111" />. Suffixes introduce their
		own patterns at the following boundary.
	</p>
	<p>
		The effects differ by marker and dialect. This chapter describes the phonological combinations;
		the grammatical functions and combined-person paradigms are treated in
		<Xr ch="person-marking-architecture" />.
	</p>
</S>

<S t="Vowel loss in ku= and ci=" id="vowel-deletion">
	<p>
		Before a stem beginning with /a, e, o, u/, <i lang="ain-Latn">ku=</i> can appear as
		<i lang="ain-Latn">k=</i>, and <i lang="ain-Latn">ci=</i> as
		<i lang="ain-Latn">c=</i>. Nakagawa identifies this contraction in Saru, Chitose, and Mukawa,
		while most other dialects retain the prefix vowel
		<Ref k="nakagawa2024" p="52" />. Satō describes the corresponding Chitose forms
		<Ref k="sato2008" p="110–111" />.
	</p>
	<table>
		<thead><tr><th>Prefix</th><th>Before /a, e, o, u/</th><th>Nakagawa's example</th></tr></thead>
		<tbody>
			<tr
				><td lang="ain-Latn">ku=</td><td lang="ain-Latn">k=</td><td lang="ain-Latn"
					>ku=ómare → k=ómare</td
				></tr
			>
			<tr
				><td lang="ain-Latn">ci=</td><td lang="ain-Latn">c=</td><td lang="ain-Latn"
					>ci=étu → c=étu</td
				></tr
			>
		</tbody>
	</table>
	<p>
		The examples mean “I put something into something” and “our nose,” respectively
		<Ref k="nakagawa2024" p="52" />. The prefix retains its person-marking function when its vowel
		disappears.
	</p>
	<Ex
		m="k=ómare"
		g="1SG.A=put.into"
		tr="I put something into something."
		cite="nakagawa2024:52"
		place="Saru and Chitose"
		note="Nakagawa derives the contracted form from ku=ómare. English glosses make the two unspecified object roles explicit."
	/>
</S>

<S t="The separate treatment of initial /i/" id="i-block">
	<p>
		The contraction rule excludes /i/. With <i lang="ain-Latn">ku=</i> or
		<i lang="ain-Latn">e=</i>, an initial /i/ in an open stem syllable can instead become the coda
		/y/ of the preceding syllable. Nakagawa gives
		<i lang="ain-Latn">ku=ipe</i> as <i lang="ain-Latn">kúype</i> “I eat” and
		<i lang="ain-Latn">e=itak</i> as <i lang="ain-Latn">éytak</i> “you speak”
		<Ref k="nakagawa2024" p="52" />. The prefix vowel remains in these forms.
	</p>
	<p>
		Weakening is blocked when it would create an inadmissible consonant sequence. With <i
			lang="ain-Latn">inkar</i
		>
		“look,” Nakagawa gives
		<i lang="ain-Latn">kuínkar</i>; with <i lang="ain-Latn">ikka</i> “steal,”
		<i lang="ain-Latn">kuíkka</i>
		<Ref k="nakagawa2024" p="53" />. Satō gives the same restriction for <i lang="ain-Latn">ku-</i>
		and
		<i lang="ain-Latn">e-</i> before <i lang="ain-Latn">inkar</i>
		<Ref k="sato2008" p="110–111" />.
	</p>
	<p>
		Satō treats <i lang="ain-Latn">ci-</i> before initial /i/ separately. He reports no examples in
		his description and tentatively predicts a sequence
		<i lang="ain-Latn">cii</i>
		<Ref k="sato2008" p="111, point 4" /> ‹speculative›. His documented <i lang="ain-Latn">ku-</i>
		and <i lang="ain-Latn">e-</i> patterns therefore leave this combination unresolved.
	</p>
</S>

<S t="Accent and the order of changes" id="prosodic-integration">
	<p>
		Nakagawa derives contracted forms by applying accent relocation before vowel loss. The
		unprefixed verb <i lang="ain-Latn">omáre</i> receives stem-initial accent with
		<i lang="ain-Latn">ku=</i>, producing <i lang="ain-Latn">ku=ómare</i>. Contraction then gives
		<i lang="ain-Latn">k=ómare</i>
		<Ref k="nakagawa2024" p="52" />.
	</p>
	<table>
		<thead><tr><th>Stage in Nakagawa's analysis</th><th>Syllables and accent</th></tr></thead>
		<tbody>
			<tr><td>Unprefixed form</td><td lang="ain-Latn">o.má.re</td></tr>
			<tr><td>Prefixed form, accent relocated</td><td lang="ain-Latn">ku.ó.ma.re</td></tr>
			<tr><td>Prefix vowel lost</td><td lang="ain-Latn">kó.ma.re</td></tr>
		</tbody>
	</table>
	<p>
		The surface initial syllable <span lang="ain-Latn">kó</span> is open. Its accent reflects the order
		of operations in this account, so it cannot be predicted by applying the ordinary open-first-syllable
		rule only to the final contracted shape.
	</p>
	<p>
		<i lang="ain-Latn">A=</i> and <i lang="ain-Latn">eci=</i> preserve the stem's accent:
		<i lang="ain-Latn">a=omáre</i>
		and <i lang="ain-Latn">eci=etú</i>
		<Ref k="nakagawa2024" p="53" />. Shiraishi describes the same contrast between person-prefix
		classes <Ref k="shiraishi2022" p="§5.1" />. See
		<Xr ch="accent-in-compounds-and-affixation" /> for complex forms more generally.
	</p>
</S>

<S t="The boundary before person suffixes" id="juncture-tightness">
	<p>
		Satō reports that <i lang="ain-Latn">-an</i> and <i lang="ain-Latn">-as</i>
		can be preceded by a glottal stop after a consonant other than /n/. His example is
		<i lang="ain-Latn">sap-an</i>, pronounced [sapʔan]. After /n/, he describes joined pronunciation
		as usual: <i lang="ain-Latn">san-an</i> is [sanan]
		<Ref k="sato2008" p="111, point 9" />.
	</p>
	<Ex
		m="sap-an"
		g="go.down.PL-4.S"
		tr="We go downstream."
		cite="sato2008:111"
		dial="CHI"
		note="Satō's inclusive example, with optional [ʔ] before the suffix. The fourth-person gloss identifies the form series; the source's hyphenation is retained."
	/>
	<Ex
		m="san-an"
		g="go.down.SG-4.S"
		tr="I go downstream."
		cite="sato2008:111"
		dial="CHI"
		note="Satō identifies this as literary first-person reference and gives the pronunciation [sanan]. The source's hyphenation is retained."
	/>
	<p>
		The suffix boundary can thus remain audible in some environments while allowing close phonetic
		joining in others. Shiraishi's account of resyllabification likewise recognizes morphological
		and accentual conditions on its application
		<Ref k="shiraishi2022" p="§4.4" />.
	</p>
	<p>
		Secondary accent supplies another distinction. Shiraishi gives
		<span lang="ain-Latn">iˈruska-ˌan</span> “we, including you, are angry,” but no secondary accent
		in <span lang="ain-Latn">ˈsap-an</span> or
		<span lang="ain-Latn">ˈcis-an</span>, whose stems are closed monosyllables
		<Ref k="shiraishi2022" p="§5.1, examples 20–21" />. The accent and glottal patterns concern
		different aspects of the suffix boundary.
	</p>
</S>

<S t="Connected speech, dialect forms, and spelling" id="connected-speech">
	<p>
		Lexical person forms also vary by dialect. Nakagawa and Fukazawa contrast Saru and Chitose
		<i lang="ain-Latn">kani</i> “I” with <i lang="ain-Latn">kuani</i> elsewhere
		<Ref k="nakagawafukazawa2022" p="§4.1" />. The full and shortened pronouns have this regional
		distribution.
	</p>
	<p>
		Transcriptions also vary. Nakagawa explicitly compares spellings such as
		<i lang="ain-Latn">komap</i>, <i lang="ain-Latn">k omap</i>,
		<i lang="ain-Latn">k-omap</i>, and <i lang="ain-Latn">k=omap</i>
		<Ref k="nakagawa2024" p="59–61" />. Contracted forms can therefore appear in Roman-letter texts,
		with different representations of the boundary. The conventions are discussed in <Xr
			ch="orthographic-standardization-and-word-division"
		/>.
	</p>
</S>

<S t="Phonology and the status of person markers" id="clitic-affix-cline">
	<p>
		Bugaeva combines accent behavior with separability in classifying person markers. She treats <i
			lang="ain-Latn">ku=</i
		>
		and the other accent-affecting prefixes as affixes, <i lang="ain-Latn">a=</i> and
		<i lang="ain-Latn">eci=</i>
		as clitics, and discusses word-like properties of the person suffixes
		<Ref k="bugaeva2012" p="472–473" />. This is a structural analysis of several properties, beyond
		the vowel alternations alone.
	</p>
	<p>
		Nakagawa's equals sign has a more limited purpose: it identifies person markers without deciding
		their word or clitic status, and does not specify a pronunciation boundary
		<Ref k="nakagawa2024" p="52, 59–61" />. The notation can consequently remain the same across
		markers whose phonological behavior differs.
	</p>
</S>
