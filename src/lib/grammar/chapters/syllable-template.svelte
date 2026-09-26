<script lang="ts">
	import { S, Ref, Xr } from '$lib/grammar/components';
</script>

<S t="The syllable template" id="template">
	<p>
		A Hokkaido Ainu syllable contains one vowel, with at most one consonant before it and one after
		it. This can be written <strong>(C)V(C)</strong>, where parentheses mark optional positions <Ref
			k="nakagawa2024"
			p="41"
		/>;
		<Ref k="sato2008" p="11" />; <Ref k="shiraishi2022" p="§4.1" />.
	</p>
	<table>
		<thead><tr><th>Shape</th><th>Example</th><th>Meaning</th></tr></thead>
		<tbody>
			<tr><td>V</td><td lang="ain-Latn">a</td><td>sit</td></tr>
			<tr><td>CV</td><td lang="ain-Latn">ku</td><td>bow</td></tr>
			<tr><td>VC</td><td lang="ain-Latn">at</td><td>cord</td></tr>
			<tr><td>CVC</td><td lang="ain-Latn">cep</td><td>fish</td></tr>
		</tbody>
	</table>
	<p>
		These examples follow Nakagawa <Ref k="nakagawa2024" p="41" />. An analysis that assigns a
		glottal consonant /ʔ/ to every vowel-initial syllable reduces the list to CV and CVC, as in
		Bugaeva's description <Ref k="bugaeva2012" p="467" />. The difference depends on the treatment
		of glottal closure described in <Xr ch="glottal-stop" />
		‹contested›.
	</p>
</S>

<S t="Finding syllable boundaries" id="syllabification">
	<p>
		Consonant clusters cross syllable boundaries. Thus <i lang="ain-Latn">aynu</i> “person” divides
		as <span lang="ain-Latn">ay.nu</span>, and
		<i lang="ain-Latn">cepkoyki</i> “fish” as a verb divides as
		<span lang="ain-Latn">cep.koy.ki</span>. Between vowels, a single consonant ordinarily begins
		the following syllable: <i lang="ain-Latn">kamuy</i> “deity” divides as
		<span lang="ain-Latn">ka.muy</span>
		<Ref k="nakagawa2024" p="42–43" />.
	</p>
	<p>
		Consecutive vowel nuclei belong to separate syllables in the Hokkaido analysis. Nakagawa divides <i
			lang="ain-Latn">teeta</i
		>
		“long ago” as
		<span lang="ain-Latn">te.e.ta</span>, with a glottal interruption possible between the vowels <Ref
			k="nakagawa2024"
			p="42–43"
		/>. A written double vowel does not therefore automatically represent a single long vowel.
	</p>
	<p>
		Morphological composition can change syllable boundaries. A final consonant may join a following
		vowel, as in <i lang="ain-Latn">sik-o</i> “open the eyes,” pronounced with the division
		<span lang="ain-Latn">si.ko</span>. Resyllabification can also be blocked at certain boundaries
		or by accent <Ref k="shiraishi2022" p="§4.4" />. The hyphen in a morphological analysis and the
		dot in a syllable analysis consequently need not occur in the same place.
	</p>
</S>

<S t="Consonants in the coda" id="coda">
	<p>
		Hokkaido syllable codas admit /p, t, k, s, m, n, r, y, w/. The consonants /c/ and /h/ are
		restricted to onset position; /ʔ/, when included in the inventory, is also excluded from the
		coda <Ref k="nakagawa2024" p="27" />;
		<Ref k="bugaeva2012" p="467" />. Final stops are unreleased, while /r/ may have a vowel-like
		release; see <Xr ch="consonant-inventory" /> and <Xr ch="rhotic-r" />.
	</p>
	<p>
		Sakhalin permits a different set of codas, including /h/, and has phonemic vowel length. Those
		patterns require their own dialect qualification
		<Ref k="tangiku2022" p="§§2.1–2.4" />. They are compared with Hokkaido forms in
		<Xr ch="sakhalin-and-kuril-ainu-contrast" />.
	</p>
</S>

<S t="Syllable structure and word length" id="lexical-statistics">
	<p>
		A short syllable template allows long words made from several such syllables. Nakagawa describes
		most roots as one or two syllables and notes that longer words often contain derivational or
		compound structure <Ref k="nakagawa2024" p="47" />. His examples include two-syllable
		<i lang="ain-Latn">puni</i>
		“lift” and three-syllable
		<i lang="ain-Latn">hopuni</i> “fly up,” formed with a prefix.
	</p>
	<p>
		Word length alone does not establish a segmentation. Nakagawa also discusses words whose
		internal structure cannot confidently be recovered <Ref k="nakagawa2024" p="47" />.
		Morphological analysis requires evidence about the proposed parts.
	</p>
</S>

<S t="Restrictions within the template" id="gaps">
	<p>
		The template describes possible positions, with further restrictions on their occupants. The
		sequences /ti/, /yi/, /wi/, /wu/, /iy/, and /uw/ are excluded from monomorphemic forms in
		Shiraishi's account <Ref k="shiraishi2022" p="§4.2" />. Nakagawa similarly restricts /yi, wi,
		wu/ to morphological boundaries and excludes /ti/
		<Ref k="nakagawa2024" p="44–45" />.
	</p>
	<p>
		Morphological combinations can yield sequences absent from simple roots. Shiraishi gives
		examples involving resyllabification across /y+i/ and /w+u/ boundaries
		<Ref k="shiraishi2022" p="§4.2" />. Consequently, a restriction stated for roots should retain
		that scope. The evidence for glides and their boundary behavior is examined in
		<Xr ch="glides-w-y" />.
	</p>
</S>

<S t="Vowels, glides, and syllable count" id="cvvc">
	<p>
		Ordinary Hokkaido syllables do not have the shape CVVC. A final glide occupies the consonant
		position in CVC, while two vowel nuclei belong to two syllables. Nakagawa analyzes <i
			lang="ain-Latn">toop</i
		>
		“far away” as
		<span lang="ain-Latn">to.op</span>
		<Ref k="nakagawa2024" p="42" />.
	</p>
	<p>
		When a vowel becomes a glide in a morphological combination, syllable count can change. A
		surface pronunciation and an underlying morphological division may then look different. These
		alternations are described in <Xr ch="glide-epenthesis-hiatus-resolution" /> and
		<Xr ch="personal-affix-sandhi-connected-speech-reduction" />.
	</p>
</S>

<S t="Borrowed forms" id="loanwords">
	<p>
		Borrowings provide evidence about how unfamiliar sequences are accommodated. Nakagawa notes that
		Japanese palatalized consonant sequences can be expanded into two syllables, illustrating this
		with the pronunciation represented as
		<span lang="ain-Latn">tookiyo</span> for Tokyo. He also notes that Japanese affricates can
		correspond to Ainu /c/ <Ref k="nakagawa2024" p="45" />.
	</p>
	<p>
		A quoted Japanese expression, a conventional loan, and a fully adapted Ainu form need not have
		the same phonological behavior. The source and the use of the particular form are therefore part
		of the evidence for a borrowing claim.
	</p>
</S>
