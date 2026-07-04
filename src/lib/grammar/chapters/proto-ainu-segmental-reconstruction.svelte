<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Method and limits of Proto-Ainu reconstruction" id="method">
	<p>
		Ainu is a language isolate: all attempts to establish a genetic relationship with any other
		language or family have failed <Ref k="janhunen2022" p="§2" />. For an isolate, the comparative
		method — which enables deep-time reconstruction by aligning cognate sets across related branches
		— cannot apply when only a single lineage survives. Three instruments remain available
		<Ref k="alonso2022" p="§1" />: <em>internal reconstruction</em>, which Alonso de la Fuente
		calls "by far the most powerful" tool; <em>contact-induced-change analysis</em>, chiefly against
		Japanese and, on Sakhalin, against Nivkh; and <em>typological reasoning</em>, which carries no
		independent probatory weight and must be handled with caution. The reconstruction surveyed here
		is accordingly shallow in time depth: internal evidence licenses proposals reaching roughly a
		thousand years into the past, and the one firm external anchor is the thirteenth-century Great
		Migration that separated the Hokkaido, Sakhalin, and Kuril varieties
		<Ref k="alonso2022" p="§1, §4" />. Deeper pre-history — the Pre-Proto-Ainu stage — is
		reachable only "ad nauseam by internal reconstruction" and cannot be independently validated
		<Ref k="alonso2022" p="§4" />.
	</p>
	<p>
		The two primary sources for this chapter are <Ref k="vovin1993" /> — the monograph-length
		reconstruction of Proto-Ainu, abbreviated RPA — and the critical revision by
		<Ref k="alonso2022" /> (abbreviated "New"). The RPA monograph is not held in the project
		repository; all RPA reconstructions and associated table references are taken from Alonso de la
		Fuente's reproductions, and citations of Vovin 1993 therefore carry the reported-evidence
		status already assigned to that entry. The genetic-isolate question and the failed
		macro-comparisons are treated in <Xr ch="genetic-position-macro-comparison" />;
		grammaticalization pathways for individual morphemes (the affiliative, the applicatives, the
		evidential nominals) are in <Xr ch="internal-reconstruction-and-grammaticalization-pathways" />.
	</p>
</S>

<S t="Periodization: Pre-Proto-Ainu, Proto-Ainu, Common Ainu" id="periodization">
	<p>
		Alonso de la Fuente distinguishes three stages <Ref k="alonso2022" p="§4, Tables 18–19" />,
		drawing an analogy with the Slavic case (Pre-PA ≈ PIE, PA ≈ Proto-Slavic, Common Ainu ≈
		Common Slavic), while noting that only Common Ainu and later can claim anything resembling a
		running comparative method:
	</p>

	<table>
		<thead>
			<tr>
				<th>stage</th>
				<th>diagnostic features</th>
				<th>representative form</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><strong>Pre-Proto-Ainu</strong></td>
				<td>affiliative marker still <i lang="ain-Latn">*CVCVx</i>; classifiers (if real)
				productive; grammaticalization pathways incomplete</td>
				<td><i lang="ain-Latn">*ti=(ʔ)e pe</i> 'what all eat'</td>
			</tr>
			<tr>
				<td><strong>Proto-Ainu (PA)</strong></td>
				<td>a reconstructable node, not a dateable period; the stage targeted by internal
				reconstruction</td>
				<td>PA <i lang="ain-Latn">*/ti-ʔe-p/</i> 'fish'</td>
			</tr>
			<tr>
				<td><strong>Common Ainu (CA)</strong></td>
				<td>immediately pre-Migration; palatalized series collapsed; <i lang="ain-Latn">*l/*ʈ</i>
				merging with <i lang="ain-Latn">*ɾ</i>; trochaic→iambic shift</td>
				<td>CA <i lang="ain-Latn">*/ciʔep/</i> → Saru
				<i lang="ain-Latn">cep</i>, ‹SA› Raiciska <i lang="ain-Latn">ceh</i></td>
			</tr>
		</tbody>
	</table>

	<p>
		The CA innovations listed by Alonso de la Fuente (Table 19) are: merger of <i lang="ain-Latn">*l</i>
		and <i lang="ain-Latn">*ɾ</i> to <i lang="ain-Latn">*ɾ</i>; merger of palatalized and plain
		sibilants (<i lang="ain-Latn">*sʸ, *s > *s</i>); shift of the sibilant before
		<i lang="ain-Latn">*i</i>; aspiration of <i lang="ain-Latn">*h</i>; and the collapse of
		<i lang="ain-Latn">*tʸ, *pʸ</i> to <i lang="ain-Latn">*c</i>. These CA-level changes account
		for the shared features of all attested Hokkaido lects relative to the older reconstructed stage.
		The Hokkaido-internal dialect archaeology built on this foundation is treated in
		<Xr ch="hokkaido-dialect-classification-and-dialectometry" />.
	</p>
</S>

<S t="The Proto-Ainu vowel system" id="vowels">
	<p>
		Every documented Ainu lect — Hokkaido, Sakhalin, Kuril — has exactly five vowel qualities,
		<i lang="ain-Latn">a e i o u</i>. Vovin posited a seventeen-vowel PA system (twelve short
		plus five long: <i lang="ain-Latn">i ü e ö E a ï ë A O o u</i> plus long counterparts) to
		regularize what he called the "chaotic" distribution of the
		<Xr ch="concept-form-affiliative-form">affiliative suffix</Xr>
		<i lang="ain-Latn">-V</i>: in Vovin's account, the suffix vowel is selected by the last vowel
		of the base according to a vowel-harmony-like table (RPA; reproduced in Alonso 2022, Table 2).
		Alonso rejects the seventeen-vowel system on phonetic and historical grounds: the proposed
		extra vowel qualities leave no trace in the oldest Nara-period loanword layer, and the
		distributional alternations attributed to them are reassignable to the five basic vowels without
		residue <Ref k="alonso2022" p="§2.1" /> ‹contested›.
	</p>
	<p>
		An alternative account of the affiliative <i lang="ain-Latn">-(V)hV</i> shape comes from
		Janhunen's vowel-dropping hypothesis (Janhunen 2020, reported via Alonso 2022 §2.1): the
		marker was originally an undefined final consonant <i lang="ain-Latn">*-x</i>; the synchronic
		shape reflects the lost second vowel of a once-disyllabic base — <i lang="ain-Latn">*CVC.Vx
		> CVC</i>, but <i lang="ain-Latn">*CVC.Vx > CVC-Vx</i> when the marker follows — and the
		sequence later fused with the noun <i lang="ain-Latn">hi</i> 'time, place, thing' to yield
		the current possessive shape. Alonso calls this "a triumph of internal reconstruction"
		<Ref k="alonso2022" p="§2.1" />. Community discussion on the aynu-corpora Discord has
		independently noted this as the more parsimonious account, opposing the introduction of a
		phonemically unmotivated <i lang="ain-Latn">*H</i>
		<Ref k="aynucorporadiscord" /> (antitwilight, 2024-12-23 ‹contested›). The morphophonology
		of the affiliative suffix — its echo vowels, allomorphic conditioning, and distributional
		constraints — is treated in <Xr ch="affiliative-suffix-morphophonology" />.
	</p>
	<p>
		The reconstructed PA vowel system is the same five-quality inventory that all modern lects
		share <Ref k="alonso2022" p="§2.1" /> ‹consensus›. Whether PA also had distinctive vowel
		length is the central suprasegmental dispute, addressed in §6 below.
	</p>
</S>

<S t="The Proto-Ainu consonant system: Vovin's reconstruction" id="consonants-vovin">
	<p>
		For the modern Hokkaido consonant system as a baseline, see <Xr ch="consonant-inventory" />.
		Vovin proposed the following PA inventory (RPA; reproduced in <Ref k="alonso2022" p="Table 3" />):
	</p>

	<table>
		<thead>
			<tr>
				<th></th>
				<th>labial</th>
				<th>coronal</th>
				<th>dorsal</th>
				<th>glottal</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>stop (half-voiced)</td>
				<td><i>*p</i></td>
				<td><i>*t</i></td>
				<td><i>*k</i></td>
				<td><i>*ʔ</i></td>
			</tr>
			<tr>
				<td>voiced stop</td>
				<td></td>
				<td><i>*d</i></td>
				<td><i>*g</i></td>
				<td></td>
			</tr>
			<tr>
				<td>nasal</td>
				<td><i>*m</i></td>
				<td><i>*n</i></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>fricative / glide</td>
				<td></td>
				<td><i>*s  *y</i></td>
				<td></td>
				<td><i>*h  (*H)</i></td>
			</tr>
			<tr>
				<td>flap</td>
				<td></td>
				<td><i>*ɾ</i></td>
				<td></td>
				<td></td>
			</tr>
		</tbody>
	</table>

	<p>
		The half-voicing of <i lang="ain-Latn">*p *t *k</i> is motivated by alternations in
		pre-scientific wordlists — e.g. Dixon (1883) <i>⟨jabush⟩</i> for
		<i lang="ain-Latn">capus</i> 'lip' — which suggest that the stops were phonetically
		intermediate between voiced and voiceless at an earlier period (via
		<Ref k="alonso2022" p="§2.2" />). Contemporary reviews of RPA raised two structural
		objections: the absence of <i lang="ain-Latn">*w</i>, a phoneme present in every attested
		Ainu lect (Sidwell 1996, via Alonso 2022 §2.2.3); and the background assumption of an
		Austroasiatic affiliation that distorted the consonant correspondences (Sidwell 1996,
		Abondolo 1997, Witczak 1999; all via <Ref k="alonso2022" p="§1" />).
	</p>
</S>

<S t="Revisions to the consonant correspondences: Alonso 2022" id="consonants-alonso">
	<p>
		Alonso de la Fuente's revision addresses eleven correspondence classes
		<Ref k="alonso2022" p="§2.2, Table 5" />. The table below lists each class in RPA notation,
		its attested reflexes across the lect sample, and the revised reconstruction
		(all second-hand via Alonso 2022, citing Vovin 1993):
	</p>

	<table>
		<thead>
			<tr>
				<th>#</th>
				<th>RPA</th>
				<th>key reflexes</th>
				<th>Alonso "New"</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1</td>
				<td><i>*d-</i></td>
				<td>HO <i lang="ain-Latn">r-</i>, Nayoro <i lang="ain-Latn">t-</i>,
				‹SA› RA <i lang="ain-Latn">r-</i></td>
				<td><i>*l-</i></td>
			</tr>
			<tr>
				<td>2</td>
				<td><i>*ɾ</i></td>
				<td><i lang="ain-Latn">r-</i> everywhere</td>
				<td><i>*ɾ</i></td>
			</tr>
			<tr>
				<td>3</td>
				<td><i>*tr-</i></td>
				<td>HO <i lang="ain-Latn">r-</i>, Nayoro <i lang="ain-Latn">t-</i>,
				‹SA› RA <i lang="ain-Latn">r-</i></td>
				<td><i>*ʈ-</i> (retroflex)</td>
			</tr>
			<tr>
				<td>4</td>
				<td><i>*g</i></td>
				<td><i lang="ain-Latn">h-</i> / <i lang="ain-Latn">s-</i> before
				<i lang="ain-Latn">i</i></td>
				<td><i>*w</i> (Sc. 1) / <i>*s</i> (Sc. 2)</td>
			</tr>
			<tr>
				<td>5</td>
				<td><i>*hd-</i></td>
				<td><i lang="ain-Latn">w-</i>, ‹KU› <i lang="ain-Latn">v-</i></td>
				<td><i>*kʷ</i> (Sc. 1) / <i>*w</i> (Sc. 2)</td>
			</tr>
			<tr>
				<td>6</td>
				<td><i>*pr-</i></td>
				<td>HO <i lang="ain-Latn">p-</i>, Nayoro <i lang="ain-Latn">c-/p-</i>,
				‹SA› <i lang="ain-Latn">c-</i></td>
				<td><i>*pʸ</i> (palatalized labial)</td>
			</tr>
			<tr>
				<td>7</td>
				<td><i>*hr-</i></td>
				<td>HO <i lang="ain-Latn">h-</i>, ‹SA› RA <i lang="ain-Latn">y-</i></td>
				<td><i>*hʸ</i> (palatalized laryngeal)</td>
			</tr>
			<tr>
				<td>8</td>
				<td><i>*tʸ</i></td>
				<td><i lang="ain-Latn">c-</i> everywhere</td>
				<td><i>*tʸ</i></td>
			</tr>
			<tr>
				<td>9</td>
				<td><i>*h-</i> (initial)</td>
				<td>HO <i lang="ain-Latn">h-</i>, Nayoro ∅,
				‹SA› <i lang="ain-Latn">h-/∅</i></td>
				<td><i>*ʔ-</i></td>
			</tr>
			<tr>
				<td>10</td>
				<td><i>*-ʔ-</i> (medial)</td>
				<td>∅ or <i lang="ain-Latn">-ʔ-</i></td>
				<td><i>*-ʔ-</i></td>
			</tr>
			<tr>
				<td>11</td>
				<td><i>*H-</i></td>
				<td>∅ (Bihoro <i lang="ain-Latn">h-</i>)</td>
				<td>— (rejected)</td>
			</tr>
		</tbody>
	</table>

	<p>The most consequential revisions are summarised in the subsections below.</p>

	<S t="*d- reanalysed as *l-" id="revision-l">
		<p>
			Vovin's word-initial <i lang="ain-Latn">*d-</i> is reinterpreted as a lateral
			<i lang="ain-Latn">*l-</i> <Ref k="alonso2022" p="§2.2.1" />. Ainu synchronically
			lacks <i lang="ain-Latn">/l/</i> — a typological rarity shared in the immediate region
			only with Japanese. The key evidence is the Nairo subdialect of ‹SA›, where this class
			surfaces as <i lang="ain-Latn">t-</i> where all other lects have <i lang="ain-Latn">r-</i>:
			‹SA› Nairo <i lang="ain-Latn">taarak</i> 'smooth' : <i lang="ain-Latn">raarak</i>
			elsewhere; <i lang="ain-Latn">teera</i> 'wind' : <i lang="ain-Latn">rera</i>. A lateral
			that becomes a tap <i lang="ain-Latn">[ɾ]</i> in most environments but a dental stop
			word-initially in Nairo parallels the Korean lateral distribution. Early Ainu-to-Ghilyak
			loans showing Proto-Ghilyak <i lang="ain-Latn">*l-</i> corresponding to RPA
			<i lang="ain-Latn">*d-</i> provide an independent, contact-based check (RPA 160,
			via <Ref k="alonso2022" p="§2.2.1" />; for the Nivkh contact background, see
			<Xr ch="northern-contact-nivkh-tungusic-manchu" />). Community observation on the
			aynu-corpora Discord that <i lang="ain-Latn">retar ~ tretar ~ tetar</i> 'white' shows
			the same initial-consonant split — reconstructing the initial as PA
			<i lang="ain-Latn">*l</i> (Alonso "New") — is consistent with this analysis
			<Ref k="aynucorporadiscord" /> (antitwilight, 2024-11-24 ‹contested›).
		</p>
	</S>

	<S t="*tr- reanalysed as *ʈ-" id="revision-retroflex">
		<p>
			Vovin's cluster notation <i lang="ain-Latn">*tr-</i> is reanalysed as a single retroflex
			stop <i lang="ain-Latn">*ʈ-</i> (or retroflex flap <i lang="ain-Latn">~*ʈɽ</i>)
			<Ref k="alonso2022" p="§2.2.2" />. The cluster form never appears in ‹SA› sources, where
			Dobrotvorskij and Piłsudski recorded <i lang="ain-Latn">[tr]~[r]</i>. Decisive phonetic
			attestation comes from the Bihoro-dialect idiolect of Ginosuke Kikuchi, where the voiced
			retroflex <i lang="ain-Latn">[ɖ]</i> was still audible when Hattori's team collected data
			(Hattori 1964: 34, cited via <Ref k="alonso2022" p="§2.2.2" />). Cognate sets include PA
			<i lang="ain-Latn">*ʈam.u</i> 'soul', <i lang="ain-Latn">*ʈek.e</i> 'drumstick',
			<i lang="ain-Latn">*ʈus</i> 'skin' <Ref k="alonso2022" p="Table 6" />.
		</p>
	</S>

	<S t="The *g / *hd / *s tangle: two scenarios" id="revision-w">
		<p>
			Three RPA classes — <i lang="ain-Latn">*g</i>, <i lang="ain-Latn">*hd</i>, and one reflex
			of <i lang="ain-Latn">*s</i> — converge on <i lang="ain-Latn">h-</i> and
			<i lang="ain-Latn">s-</i> before <i lang="ain-Latn">i</i> in the attested lects,
			reflecting the change <i lang="ain-Latn">*w > *h</i> before front vowels (parallel to
			Greek spiritus asper or Slavic prothetic <i lang="ain-Latn">*h-</i>). Rather than
			adjudicating between the two economical analyses, Alonso presents them side by side
			<Ref k="alonso2022" p="§2.2.3, Table 7" /> ‹contested›:
		</p>
		<ul>
			<li><strong>Scenario 1:</strong> <i lang="ain-Latn">*hd → *kʷ</i>;
			<i lang="ain-Latn">*g → *w</i>; one <i lang="ain-Latn">*s</i> class.</li>
			<li><strong>Scenario 2:</strong> <i lang="ain-Latn">*hd → *w</i>;
			<i lang="ain-Latn">*g → *s</i>; a palatalized sibilant <i lang="ain-Latn">*sʸ</i>
			alongside <i lang="ain-Latn">*s</i>.</li>
		</ul>
		<p>
			Both scenarios restore a <i lang="ain-Latn">*w</i> absent from Vovin's inventory —
			a phoneme present in every attested Ainu lect — which is the principal structural
			advance over RPA.
		</p>
	</S>

	<S t="Initial *h- and medial *-ʔ-: complementary distribution" id="revision-glottal">
		<p>
			Vovin treated word-initial <i lang="ain-Latn">*h-</i> and medial
			<i lang="ain-Latn">*-ʔ-</i> as separate phonemes. Following Shiraishi (1999, via
			Alonso 2022 §2.2.4), Alonso argues they are in complementary distribution: the glottal
			stop has no lexical function, plays no role in morphonology, and is epenthetic in modern
			Hokkaido Ainu <Ref k="alonso2022" p="§2.2.4" />. In most HA dialects the initial
			<i lang="ain-Latn">*h-</i> and <i lang="ain-Latn">*ʔ-</i> merged as laryngeal
			<i lang="ain-Latn">h-</i>, while medial <i lang="ain-Latn">*ʔ</i> was lost or preserved
			as an epenthetic glottal. The phonemic status of the glottal stop in the modern Hokkaido
			system is discussed in <Xr ch="glottal-stop" />.
		</p>
	</S>

	<S t="Bihoro h-prothesis: an independent innovation" id="revision-H">
		<p>
			Vovin posited a PA consonant <i lang="ain-Latn">*H</i> to account for Bihoro prothetic
			<i lang="ain-Latn">h-</i> before original vowel-initial stems: Bihoro
			<i lang="ain-Latn">haspa</i> 'deaf' : <i lang="ain-Latn">aspa</i>,
			<i lang="ain-Latn">ham</i> 'nail' : <i lang="ain-Latn">am</i>. Alonso rejects this:
			prothetic <i lang="ain-Latn">h-</i> in Bihoro is an independent innovation triggered by
			initial-syllable stress (the typologically common <i lang="ain-Latn">#V → hV</i> tendency,
			citing Blevins 2008 via Alonso 2022 §2.2.5), and it functions to disambiguate homophones
			(Bihoro <i lang="ain-Latn">ham</i> 'claw' vs <i lang="ain-Latn">am</i> 'nail',
			Alonso 2022 Table 8) <Ref k="alonso2022" p="§2.2.5" />. Kuril lects show the converse
			pattern independently — prothetic <i lang="ain-Latn">h-</i> alongside loss of original
			<i lang="ain-Latn">h-</i> (Alonso 2022 Table 9) — which further undermines the
			<i lang="ain-Latn">*H</i> analysis. Hokkaido microvariation in word-initial
			<i lang="ain-Latn">h-</i>, including h-elision in eastern standard-accent dialects, is
			treated in <Xr ch="hokkaido-phonological-microvariation" />.
		</p>
	</S>

	<S t="The palatalized series: a Pre-Proto-Ainu hypothesis" id="revision-palatalized">
		<p>
			Alonso proposes a full Pre-PA palatalized consonant set —
			<i lang="ain-Latn">*pʸ *tʸ *kʸ *hʸ *sʸ</i> (and possibly
			<i lang="ain-Latn">*mʸ *nʸ</i>) — which collapsed into modern
			<i lang="ain-Latn">/c/</i> etc., analogously to the Latin palatal series in Spanish
			<Ref k="alonso2022" p="§2.2.6, Tables 10–11" />. The evidence for
			<i lang="ain-Latn">*pʸ</i> comes from correspondence class #6 in the table above:
			southwestern Hokkaido <i lang="ain-Latn">par</i> 'mouth' : northeastern and Kuril
			<i lang="ain-Latn">car</i>, with Nayoro and Asahikawa having both forms. This
			distribution, called the <i lang="ain-Latn">pa-:ca-</i> "pseudo-correspondence" in the
			dialectological literature because it does not extend to words with other vowels, has
			at least four competing analyses <Ref k="nakagawafukazawa2022" p="§3.4" />:
			Kindaichi and Chiri's diachronic change (<i lang="ain-Latn">*pa → ca</i>); Kirikae's
			(1994) two-morpheme-ab-initio account; Nakagawa's (1996) priority for
			<i lang="ain-Latn">ca-</i>; and Fukazawa's (2014/2017) separate-morpheme analysis.
			Alonso reconstructs <i lang="ain-Latn">*pʸaɾ</i> as a fifth account, attributing the
			southwest/northeast split to the collapse of the palatalized labial
			<Ref k="alonso2022" p="§2.2.6" />. The palatalized-series hypothesis is
			explicitly typology-driven — posited because the <i lang="ain-Latn">*s/sʸ</i>
			and <i lang="ain-Latn">*t/tʸ</i> doublets make it typologically expected, not because
			reflex distributions force it ‹speculative›. Shiratori's (2026) proposal of PA
			<i lang="ain-Latn">*ia</i> as a new diagnostic for the palatalized series adds
			independent support for at least <i lang="ain-Latn">*pʸ</i> and
			<i lang="ain-Latn">*tʸ</i> <Ref k="shiratori2026" /> ‹speculative›.
		</p>
	</S>

	<p>
		The two revised PA consonant inventories proposed by Alonso de la Fuente are (Table 14;
		<Ref k="alonso2022" p="Table 14" />):
	</p>

	<table>
		<thead>
			<tr>
				<th>scenario</th>
				<th>PA consonant inventory</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><strong>1</strong></td>
				<td><i lang="ain-Latn">p pʸ t tʸ k &#123;kʸ&#125; kʷ ʔ / m n / s y w [h] [hʸ] / ɾ~l ʈ</i></td>
			</tr>
			<tr>
				<td><strong>2</strong></td>
				<td><i lang="ain-Latn">p pʸ t tʸ k &#123;kʸ&#125; ʔ / m n / s &#123;sʸ&#125; y w [h] [hʸ] / ɾ~l ʈ</i></td>
			</tr>
		</tbody>
	</table>

	<p>
		Items in &#123;curly braces&#125; are motivated by typological reasoning only; items in [square brackets]
		are plausibly allophonic. The choice between the two scenarios depends on resolving the
		<i lang="ain-Latn">*g/*hd/*s</i> tangle in §4.3 and remains open ‹contested›.
	</p>
</S>

<S t="Dialect correspondence sets" id="correspondence-sets">
	<p>
		The cognate sets below illustrate the principal PA reconstructions against the lect sample
		(Alonso 2022, Tables 1–6, 14, 18; via <Ref k="alonso2022" />). Lect abbreviations follow
		Alonso 2022 §0: Y = Yakumo, HO = Horobetsu, SA = Saru (Alonso's convention), B = Bihoro;
		‹SA› RA = Sakhalin Raiciska; ‹KU› KD/KK/KV = Kuril sources (Dybowski/Klaproth/Voznesenskij),
		NA = ‹SA› Nairo:
	</p>

	<table>
		<thead>
			<tr>
				<th>PA (Alonso "New")</th>
				<th>Yakumo</th>
				<th>Horobetsu</th>
				<th>Saru</th>
				<th>Bihoro</th>
				<th>‹SA› RA</th>
				<th>‹KU›</th>
				<th>gloss / note</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i>*leɾa</i></td>
				<td><i lang="ain-Latn">rera</i></td>
				<td><i lang="ain-Latn">rera</i></td>
				<td><i lang="ain-Latn">rera</i></td>
				<td><i lang="ain-Latn">rera</i></td>
				<td><i lang="ain-Latn">reera</i></td>
				<td>KV <i lang="ain-Latn">riera</i></td>
				<td>'wind' (<i>*l- → r-</i>)</td>
			</tr>
			<tr>
				<td><i>*ʈuuh.e</i></td>
				<td><i lang="ain-Latn">ru</i></td>
				<td><i lang="ain-Latn">ru</i></td>
				<td><i lang="ain-Latn">ru</i></td>
				<td><i lang="ain-Latn">ru</i></td>
				<td><i lang="ain-Latn">ruu</i></td>
				<td>NA <i lang="ain-Latn">tuu</i></td>
				<td>'road' (<i>*ʈ-</i>; NA <i lang="ain-Latn">t-</i> retains retroflex)</td>
			</tr>
			<tr>
				<td><i>*sik(-i)</i></td>
				<td><i lang="ain-Latn">sik</i></td>
				<td><i lang="ain-Latn">sik</i></td>
				<td><i lang="ain-Latn">sik</i></td>
				<td><i lang="ain-Latn">sik(-i)</i></td>
				<td><i lang="ain-Latn">sis</i></td>
				<td>KT <i lang="ain-Latn">shik</i></td>
				<td>'eye' (‹SA› debuccalization <i>k → h → s</i> / <i>i_</i>)</td>
			</tr>
			<tr>
				<td><i>*cup</i></td>
				<td><i lang="ain-Latn">cup</i></td>
				<td><i lang="ain-Latn">cup</i></td>
				<td><i lang="ain-Latn">cup</i></td>
				<td><i lang="ain-Latn">cup</i></td>
				<td><i lang="ain-Latn">cuh</i></td>
				<td>KT <i lang="ain-Latn">chup</i></td>
				<td>'sun/moon' (‹SA› <i>p → h</i>)</td>
			</tr>
			<tr>
				<td><i>*pʸaɾ(-o)</i></td>
				<td><i lang="ain-Latn">par</i></td>
				<td><i lang="ain-Latn">par</i></td>
				<td><i lang="ain-Latn">par</i></td>
				<td><i lang="ain-Latn">car</i></td>
				<td><i lang="ain-Latn">caru</i></td>
				<td>KK <i lang="ain-Latn">char</i></td>
				<td>'mouth' (<i>*pʸ → c</i> NE/‹KU›)</td>
			</tr>
			<tr>
				<td><i>*hʸam(-u)</i></td>
				<td><i lang="ain-Latn">ham</i></td>
				<td><i lang="ain-Latn">ham</i></td>
				<td><i lang="ain-Latn">ham</i></td>
				<td><i lang="ain-Latn">ham</i></td>
				<td><i lang="ain-Latn">yam</i></td>
				<td>KV <i lang="ain-Latn">iam</i></td>
				<td>'leaf' (<i>*hʸ → h</i> HA, <i>→ y</i> ‹SA›)</td>
			</tr>
		</tbody>
	</table>

	<p>
		The ‹SA› final-consonant reflexes — <i lang="ain-Latn">sik → sis</i>,
		<i lang="ain-Latn">cup → cuh</i> — are instances of debuccalization: stop codas weaken to
		<i lang="ain-Latn">h</i>, then shift further to <i lang="ain-Latn">s</i> after front vowels
		<Ref k="tangiku2022" p="§2.3" />. The underlying stop resurfaces in the ‹SA›
		<Xr ch="concept-form-affiliative-form">affiliative/possessive form</Xr>
		(<i lang="ain-Latn">sik-ihi</i>, not <i lang="ain-Latn">*sis-ihi</i>), confirming the
		reconstructed coda <Ref k="tangiku2022" p="§2.3, §5" />. The full diachrony of this process
		is treated in <Xr ch="final-h-history-and-sakhalin-length-reflex" /> and
		<Xr ch="sakhalin-and-kuril-ainu-contrast" />.
	</p>

	<p>
		The internal reconstruction of <i lang="ain-Latn">cep</i> 'fish' is Alonso de la Fuente's
		showcase for what internal reconstruction can recover for an isolate
		<Ref k="alonso2022" p="Table 18" />:
	</p>

	<Ex
		m="cep"
		g="fish"
		tr="fish"
		cite="tamura1996"
		dial="SAR"
		note="Reconstructed pre-form: PA */ti-ʔe-p/ (Alonso de la Fuente 2022, Table 18), decomposed as the medial/4th-person prefix *ti-, the verb *ʔe 'eat', and the nominalizer *-p — 'what all eat'. Common Ainu */ciʔep/ gives Horobetsu ciʔep (glottal retained), Saru cep (glottal lost), ‹SA› Raiciska ceh (p debuccalized). Triple-corroborated: Alonso 2022 Table 18, morpheme-db curated decomposition (confidence 1.0), and community discussion (nukopoli, aynu-corpora Discord 2023-12-06)."
	/>

	<Ex
		m="ci=e-p"
		g="4.A=eat-NMLZ"
		tr="(Pre-PA reconstructed form) 'the thing that all eat'"
		constructed
		note="The etymological decomposition underlying Saru cep. The prefix ci= descends from the pre-grammaticalized medial/resultative morpheme *ti=; -p is the nominalizer productive elsewhere in the grammar. See Xr internal-reconstruction-and-grammaticalization-pathways for the full grammaticalization pathway."
	/>
</S>

<S t="Proto-Ainu suprasegmentals: the length–pitch dispute" id="suprasegmentals">
	<p>
		The most contested area of PA reconstruction concerns the suprasegmental system. Sakhalin and
		Kuril lects have distinctive vowel length (<i lang="ain-Latn">a aa e ee i ii o oo u uu</i>),
		confined to open stressed syllables; Hokkaido Ainu has
		<Xr ch="pitch-accent-placement-rule">pitch accent</Xr> and no distinctive length.
		Hattori (1967, via Alonso 2022 §2.3) first stated the systematic correspondence: ‹SA›/‹KU›
		long vowel ↔ HA high pitch — e.g. HA <i lang="ain-Latn">húre</i> 'red' ↔ ‹SA›
		<i lang="ain-Latn">huure</i>; HA <i lang="ain-Latn">túki</i> 'cup' ↔ ‹SA›
		<i lang="ain-Latn">tuuki</i>; HA <i lang="ain-Latn">sísam</i> 'Japanese person' ↔ ‹SA›
		<i lang="ain-Latn">siisam</i>
		<Ref k="alonso2022" p="§2.3" />; <Ref k="tangiku2022" p="§2.1" />.
		Three reconstructions of this correspondence have been proposed:
	</p>

	<table>
		<thead>
			<tr>
				<th>view</th>
				<th>proponents</th>
				<th>claim</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>(a) length only; no PA pitch</td>
				<td>Hattori (1967); De Boer (2010)</td>
				<td>PA had vowel length; HA pitch accent developed through contact with Japanese
				(via <Ref k="alonso2022" p="§2.3" />)</td>
			</tr>
			<tr>
				<td>(b) both length and pitch</td>
				<td>Vovin (1993); Itabashi (2004); Shimabukuro (2004)</td>
				<td>PA had both; Proto-‹SA› subsequently lost pitch under Amur-Sakhalin contact
				(via <Ref k="alonso2022" p="§2.3" />)</td>
			</tr>
			<tr>
				<td>(c) pitch only; no PA length</td>
				<td>Satō (2015, 2016)</td>
				<td>PA had pitch accent; ‹SA› length is secondary, arising through open-syllable
				phonetic lengthening (via <Ref k="alonso2022" p="§2.3" />)</td>
			</tr>
		</tbody>
	</table>

	<p>
		Alonso de la Fuente's chapter is internally inconsistent on this point: §2.3 sides with
		Satō's pitch-first view (c), while §2.4 endorses Hattori's length-first view (a), and the
		chapter identifies Vovin's mora-counting assumption in RPA as "the source of all problems"
		<Ref k="alonso2022" p="§2.3, §2.4" />. This inconsistency
		cannot be resolved from the sources consulted here; the reconstruction of PA prosody is genuinely
		unsettled ‹contested›.
	</p>
	<p>
		A further complication is the trochaic→iambic shift hypothesis. Satō (2015/2016) and Shiraishi
		(2017) — both via <Ref k="alonso2022" p="§2.3" /> — propose that PA/Common Ainu was
		trochaic and that accent spread rightward to produce the historical iambic pattern visible
		in most Hokkaido dialects. ‹SA› archaisms supply the key diagnostic forms: ‹SA› Nairo
		<i lang="ain-Latn">noociw</i> : HA <i lang="ain-Latn">nocíw</i> 'star', and
		<i lang="ain-Latn">niisew</i> : HA <i lang="ain-Latn">niséw</i> — where ‹SA› length
		corresponds to HA <em>low</em> pitch rather than high, reversing the expected correspondence
		and motivating the rightward-shift analysis. The aynu-corpora Discord has noted this debate
		as an unresolved live question, recognising the Hattori/Satō opposition accurately
		<Ref k="aynucorporadiscord" /> (nukopoli, 2023-12-11 ‹contested›). Itabashi's dedicated study
		of the ‹SA› vowel-length ↔ HA pitch-accent historical relation <Ref k="itabashi2001" /> has
		not yet been incorporated in detail here; the diachrony is captured via Hattori (1967) and Itabashi (2004) as reported
		in Alonso 2022 and Tangiku 2022. The relationship between the accent classes and the
		synchronic accent-placement rules is treated in <Xr ch="pitch-accent-placement-rule" />
		and the prosodic-unit debate in <Xr ch="mora-syllable-accent-vs-tone-analysis" />.
	</p>
</S>

<S t="Open questions and honest gaps" id="gaps">
	<p>
		Several questions bearing on PA segments cannot be settled from the sources consulted. The choice
		between Alonso's two consonant scenarios (§4.3) turns on evidence that neither phonological
		typology nor the attested reflex distribution yet settles decisively. The palatalized-series
		proposal (§4.5) rests entirely on typological reasoning and is not required by the philological
		data; Shiratori 2026 adds some support, but the hypothesis remains speculative. The RPA
		monograph (Vovin 1993) is not in the project repository, so every page reference to RPA
		is second-hand via Alonso 2022, and load-bearing RPA citations should be verified against
		the original before finalization <Ref k="vovin1993" />. The Hattori (1967) length-pitch
		correspondence paper, Hattori and Chiri (1960), Asai (1974), and the Satō (2015/2016)
		accent papers are all cited second-hand via the Handbook chapters read.
	</p>
	<p>
		The three-stage model (§2) is heuristic. Pre-Proto-Ainu is a theoretical construct reached
		only by sustained internal inference, without external validation; the thirteenth-century
		Great Migration provides the one firm absolute anchor. The comparison with PIE/Slavic stages,
		while structurally illuminating, cannot import the evidential standards that the comparative
		method sustains in well-attested families — a limitation intrinsic to isolate reconstruction
		<Ref k="alonso2022" p="§1, §4" />; <Ref k="janhunen2022" p="§2" />.
	</p>
</S>
