<!-- src/lib/grammar/chapters/citation-vs-combining-stem-shapes.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Overview" id="overview">
	<p>
		In Hokkaido Ainu the shape a morpheme takes when listed in a dictionary — its
		<em>citation form</em> — and the shape it takes when combined with an adjacent morpheme — its
		<em>combining form</em> — frequently differ. The alternations are phonologically conditioned:
		the coda of one morpheme interacts with the onset of the next to produce assimilation,
		deletion, or consonant mutation. Four processes govern the principal alternations treated
		here: (1) the behavior of coda /r/ at morpheme junctions and its vocalic release in
		citation position; (2) the categorical palatalization of coda /t/ before a following onset
		/i/; (3) vowel elision in the person prefixes <i lang="ain-Latn">ku=</i> and
		<i lang="ain-Latn">ci=</i> before vowel-initial stems; and (4) the historical compound
		assimilation visible in the elm-bark robe name
		<i lang="ain-Latn">attus</i> (underlying <i lang="ain-Latn">at-rus</i>).
	</p>

	<p>
		The sandhi rules that propagate across word boundaries are described in
		<Xr ch="coda-r-assimilation-sonorant-sandhi" />; the echo-vowel diagnostics for
		distinguishing /r/-final from /rV/-final words are analyzed in <Xr ch="rhotic-r" />; glide
		epenthesis at vowel hiatus is covered in <Xr ch="glide-epenthesis-hiatus-resolution" />; the
		accent consequences of combining prefixes are treated in
		<Xr ch="accent-in-compounds-and-affixation" />. The affiliative suffix and the support vowels
		it introduces — the /i/, /e/, /we/ alternants in possessed forms such as
		<i lang="ain-Latn">hum-i</i>, <i lang="ain-Latn">tek-e</i>,
		<i lang="ain-Latn">ru-we</i> — constitute a distinct citation/combining opposition routed to
		<Xr ch="concept-form-affiliative-form" /> and
		<Xr ch="affiliative-suffix-morphophonology" />.
	</p>
</S>

<S t="Coda /r/: citation release and combining forms" id="final-r">
	<p>
		The rhotic /r/ is phonologically exceptional because its citation (pre-pausal) realization
		and its realization before a following morpheme diverge in two distinct ways. In citation
		position, coda /r/ releases into a vocalic echo that copies the preceding nucleus:
		<i lang="ain-Latn">kor</i> [koɾ(o)], <i lang="ain-Latn">kur</i> [kuɾ(u)],
		<i lang="ain-Latn">kar</i> [kaɾ(a)]. The echo-vowel carries no accent, does not feed the
		nominalizer allomorphy, and disappears when /r/ resyllabifies before a following
		vowel-initial morpheme
		<Ref k="nakagawa2024" p="30" />; <Ref k="shiraishi2022" p="§3.2" />. In combining position
		before a consonant-initial morpheme, /r/ instead triggers regressive assimilation (r-sandhi):
	</p>

	<table>
		<caption>Coda /r/ in combining position: principal assimilation outcomes</caption>
		<thead>
			<tr>
				<th>underlying</th>
				<th>surface</th>
				<th>rule</th>
				<th>example</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">…r + t…</i></td>
				<td><i lang="ain-Latn">…tt…</i></td>
				<td>/r/ → /t/ / _ /t/</td>
				<td><i lang="ain-Latn">a=kor tar</i> → [aˈkottar] 'his possessions'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">…r + n…</i></td>
				<td><i lang="ain-Latn">…nn…</i></td>
				<td>/r/ → /n/ / _ /n/</td>
				<td><i lang="ain-Latn">a=kor nispa</i> → [akonˈnispa] 'a wealthy man'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">…r + c…</i></td>
				<td><i lang="ain-Latn">…tc…</i></td>
				<td>/r/ → /t/ / _ /c/</td>
				<td><i lang="ain-Latn">retar cikap</i> → [retatˈcikap] 'swan'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">…r + s…</i></td>
				<td><i lang="ain-Latn">…ss…</i></td>
				<td>/r/ → /s/ / _ /s/</td>
				<td><i lang="ain-Latn">ar suy</i> → [asˈsuy] 'once'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">…r + r…</i></td>
				<td><i lang="ain-Latn">…nr…</i></td>
				<td>/r/ → /n/ / _ /r/ (dissimilation)</td>
				<td><i lang="ain-Latn">ku=kor rusuy</i> → [kukonˈrusuy] 'I want it'</td>
			</tr>
		</tbody>
	</table>

	<p>
		Sources: <Ref k="nakagawa2024" p="35–37" />; <Ref k="shiraishi2022" p="§6.1" />;
		<Ref k="kindaichi1936" />. The full assimilation paradigm and its domain conditions — including
		the asymmetry between n-sandhi (bounded by the phrase) and r-sandhi (crossing phrasal and
		sentence boundaries) — are treated in <Xr ch="coda-r-assimilation-sonorant-sandhi" />.
	</p>

	<S t="Casual reduction of word-final /r/ and the koro/kor pair" id="final-r-drop">
		<p>
			In casual connected speech, word-final /r/ is susceptible to deletion, a reduction
			distinct from the productive sandhi above. Attested reductions include
			<i lang="ain-Latn">kur</i> 'person' → [ku] and the combining stem
			<i lang="ain-Latn">kor</i> → [ko]
			<Ref k="aynucorporadiscord" /> (nukopoli, 2024-12-11) ‹corpus-suggested›. Standard
			orthography notates underlying forms and does not write these reductions
			<Ref k="nakagawa2024" p="37–38" />.
		</p>

		<p>
			The independent verb <A w="koro" gl="have, possess" /> behaves differently from the
			combining stem <i lang="ain-Latn">kor-</i>. The /o/ of
			<i lang="ain-Latn">koro</i> is a genuine underlying segment, not an echo-vowel release,
			as confirmed by nominalizer allomorphy: the /r/-final combining stem takes the C-allomorph
			<i lang="ain-Latn">-pe</i> (<i lang="ain-Latn">kor-pe</i> → 'what one has'), whereas a
			genuine /rV/-final base would take the V-allomorph <i lang="ain-Latn">-p</i>. The
			diagnostics for separating /r/-final from /rV/-final words are fully described in
			<Xr ch="rhotic-r" />.
		</p>
	</S>
</S>

<S t="The t + i → ci rule at morpheme junctions" id="t-i-junction">
	<p>
		The palatalization rule /t/ → /c/ [ʨ] before a following onset /i/ is the one sandhi
		alternation that applies categorically in all Hokkaido dialects without exception
		<Ref k="nakagawa2024" p="36" />; <Ref k="shiraishi2022" p="§6.1" />;
		<Ref k="kindaichi1936" />. Its formal statement:
	</p>

	<p>
		<strong>t → c / _ i</strong> (at a morpheme junction, where /t/ is the coda of morpheme 1 and
		/i/ is the onset of morpheme 2)
	</p>

	<p>
		Resyllabification is prerequisite: the morphemic sequence …V.ti… resyllabifies to give …V.C,
		placing the erstwhile coda /t/ in onset position before the /i/ syllable; the resulting /ti/
		then palatalizes to /ci/ [ʨi]
		<Ref k="kindaichi1936" />; <Ref k="shiraishi2022" p="§5.2" />. The rule applies at compound
		boundaries, derivational boundaries, and inflectional (possessive) boundaries alike.
	</p>

	<table>
		<caption>t + i → ci: selected attested alternations</caption>
		<thead>
			<tr>
				<th>morpheme 1</th>
				<th>morpheme 2</th>
				<th>underlying</th>
				<th>surface</th>
				<th>gloss</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">mat</i> 'woman'</td>
				<td><i lang="ain-Latn">ikor</i> 'treasure'</td>
				<td><i lang="ain-Latn">mat-ikor</i></td>
				<td><i lang="ain-Latn">macikor</i></td>
				<td>'women's treasure'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">nit</i> 'tooth'</td>
				<td><i lang="ain-Latn">-ihi</i> (POSS suffix)</td>
				<td><i lang="ain-Latn">nit-ihi</i></td>
				<td><i lang="ain-Latn">nicihi</i></td>
				<td>'his/her tooth'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">rekut</i> 'throat'</td>
				<td><i lang="ain-Latn">-i</i> (POSS suffix)</td>
				<td><i lang="ain-Latn">rekut-i</i></td>
				<td><i lang="ain-Latn">rekuci</i></td>
				<td>'his/her throat'</td>
			</tr>
		</tbody>
	</table>

	<p>
		Sources: <Ref k="nakagawa2024" p="36" />; <Ref k="shiraishi2022" p="§6.1" />;
		<Ref k="kindaichi1936" />.
	</p>

	<p>
		The derivation of <i lang="ain-Latn">macikor</i> from
		<A w="mat" gl="woman" /> + <A w="ikor" gl="treasure, goods" /> illustrates the two-step
		process:
	</p>

	<ol>
		<li>
			Underlying: <i lang="ain-Latn">/mat-ikor/</i> — coda /t/ of
			<i lang="ain-Latn">mat</i> at the left edge of the /i/-initial morpheme
			<i lang="ain-Latn">ikor</i>
		</li>
		<li>
			Resyllabification: /maˈtikor/ — coda /t/ moves to onset of the /i/ syllable,
			giving the sequence /ti/
		</li>
		<li>
			Palatalization: /ti/ → /ci/ [ʨi] → <i lang="ain-Latn">macikor</i>
		</li>
	</ol>

	<p>
		The compound is well attested in Saru narrative speech:
	</p>

	<Ex
		m="usa mat-ikor usa tamasay"
		ain="usa macikor usa tamasay"
		g="various woman-treasure various bead.necklace"
		tr="women's treasures and bead-necklaces"
		cite="biratori1969"
		dial="SAR"
		place="川上まつ子, アイヌ語アーカイブ「ワシ神の化身と人間の娘 (1986)」[nam-archive/kawakami-minwa/09#465]"
		note="macikor is the surface form of the compound mat 'woman' + ikor 'treasure'; the coda /t/ of mat resyllabifies before the /i/-initial ikor and palatalizes to /c/."
	/>

	<p>
		The rule is subject to one phonotactic constraint: if the /i/-initial morpheme begins a
		closed syllable whose onset would create an impermissible three-consonant sequence, the
		resyllabification is blocked and palatalization does not apply. See
		<Xr ch="syllable-template" /> for the (C)V(C) canon and
		<Xr ch="glide-epenthesis-hiatus-resolution" /> for the parallel blocking of glide weakening
		before closed /i/-initial syllables. The possessive-boundary instances of the same rule are
		documented in <Xr ch="affiliative-suffix-morphophonology" />.
	</p>
</S>

<S t="Vowel elision in the combining forms of ku= and ci=" id="prefix-elision">
	<p>
		The first-person singular agent prefix <i lang="ain-Latn">ku=</i> and the first-person plural
		agent prefix <i lang="ain-Latn">ci=</i> each have a reduced combining form before
		vowel-initial stems. In the Saru, Chitose, and Mukawa dialects, the rule is:
	</p>

	<p>
		<strong>/u/ → ∅ / ku= _ &#123;a, e, u, o&#125;</strong>
		(the prefix vowel elides before a stem-initial /a/, /e/, /u/, or /o/;
		parallel rule for ci=)
	</p>

	<p>
		Before a stem-initial /i/, elision does not apply. Instead, the stem /i/ weakens to the
		glide [y], giving the combining form ku=ype (from underlying ku=ipe) rather than *k=ipe
		<Ref k="nakagawa2024" p="52" />; <Ref k="sato2008" p="notation p. xii" />;
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-11-28) ‹corpus-confirmed›.
	</p>

	<table>
		<caption>Combining forms of ku= before vowel-initial stems (Saru/Chitose/Mukawa)</caption>
		<thead>
			<tr>
				<th>stem-initial vowel</th>
				<th>rule</th>
				<th>underlying</th>
				<th>surface</th>
				<th>gloss</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>/a/</td>
				<td>ku= → k= (elision)</td>
				<td><i lang="ain-Latn">ku=oman</i></td>
				<td><i lang="ain-Latn">k=oman</i></td>
				<td>'I go'</td>
			</tr>
			<tr>
				<td>/e/</td>
				<td>ku= → k= (elision)</td>
				<td><i lang="ain-Latn">ku=e</i></td>
				<td><i lang="ain-Latn">k=e</i></td>
				<td>'I eat'</td>
			</tr>
			<tr>
				<td>/o/</td>
				<td>ku= → k= (elision)</td>
				<td><i lang="ain-Latn">ku=omare</i></td>
				<td><i lang="ain-Latn">k=omare</i></td>
				<td>'I am sent'</td>
			</tr>
			<tr>
				<td>/u/</td>
				<td>ku= → k= (elision)</td>
				<td><i lang="ain-Latn">ku=uske</i></td>
				<td><i lang="ain-Latn">k=uske</i></td>
				<td>'my place'</td>
			</tr>
			<tr>
				<td>/i/</td>
				<td>no elision; stem /i/ → [y]</td>
				<td><i lang="ain-Latn">ku=ipe</i></td>
				<td><i lang="ain-Latn">ku=ype</i> [kúype]</td>
				<td>'I eat a meal'</td>
			</tr>
		</tbody>
	</table>

	<p>
		Sources: <Ref k="nakagawa2024" p="52–53" />; <Ref k="sato2008" p="notation" />;
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-11-28).
	</p>

	<p>
		The block on elision before /i/ is phonotactic. If the prefix /u/ were deleted before a
		closed syllable beginning in /i/ (e.g. <i lang="ain-Latn">ikra</i>), the result
		*k=ikra would require a three-consonant onset, violating the (C)V(C) syllable canon.
		Nakagawa (2024: 52–53) confirms the ungrammatical forms
		*<i lang="ain-Latn">k=ipe</i> and *<i lang="ain-Latn">ku=ykra</i> and
		*<i lang="ain-Latn">k=ikra</i> alike, with only
		<i lang="ain-Latn">ku=ikra</i> grammatical before the closed /i/-initial stem.
	</p>

	<Ex
		m="k=oman"
		g="1SG.S=go"
		tr="I go / I am going."
		note="Saru/Chitose combining form: ku= elides its /u/ before the /o/-initial stem oman. Underlying /ku=oman/ → surface k=oman."
		constructed
	/>

	<Ex
		m="ku=iunin"
		ain="kuyunin"
		g="1SG.S=ache"
		tr="I ache."
		note="Before the /i/-initial stem iunin, ku= retains its vowel; the stem-initial /i/ weakens to the glide [y], giving ku=yunin (Chitose; Nakagawa 2024: 40). *kuyyunin is ungrammatical because the glide is not an underlying phoneme."
		constructed
	/>

	<p>
		The same elision process accounts historically for the pronoun <A w="kani" gl="I (pronoun)" />.
		Community analysis traces <i lang="ain-Latn">kani</i> to an underlying
		<i lang="ain-Latn">ku=an-hi</i> (first-person + existential root + nominal suffix), with the
		prefix vowel /u/ elided before the /a/-initial stem — parallel to the reduction
		<i lang="ain-Latn">ci=ep</i> → <i lang="ain-Latn">cep</i> 'fish'
		<Ref k="aynucorporadiscord" /> (gengojiro, 2024-02-05) ‹speculative›. On this account the
		historical combining form and the present-day independent pronoun are related by the same
		morphophonological rule, now lexicalized in <i lang="ain-Latn">kani</i>.
	</p>

	<p>
		The elision rule is restricted to southern Hokkaido (Saru, Chitose, Mukawa); most other
		dialects retain <i lang="ain-Latn">ku=</i> and <i lang="ain-Latn">ci=</i> uncontracted
		before all vowels <Ref k="nakagawa2024" p="52" />. For the personal-affix accent
		interactions triggered by prefix integration into the prosodic word, see
		<Xr ch="accent-in-compounds-and-affixation" /> and
		<Xr ch="personal-affix-sandhi-connected-speech-reduction" />.
	</p>
</S>

<S t="at-rus → attus: a compound assimilation" id="at-rus-attus">
	<p>
		The elm-bark robe name <i lang="ain-Latn">attus</i> (アットゥシ) derives from a compound
		<i lang="ain-Latn">at-rus</i>, with <i lang="ain-Latn">at</i> designating the elm-bark cloth.
		Two dialect reflexes are reported:
	</p>

	<ul>
		<li>
			<strong>General Hokkaido: <i lang="ain-Latn">attus</i></strong> — the onset /r/ of
			<i lang="ain-Latn">rus</i> assimilates progressively to the preceding coda /t/ of
			<i lang="ain-Latn">at</i>, producing a geminate /tt/ and collapsing the /t.r/ cluster:
			<i lang="ain-Latn">/at + rus/</i> → /at.tus/ → <i lang="ain-Latn">attus</i>. The form
			<i lang="ain-Latn">attus</i> is corpus-confirmed (24 tokens) ‹corpus-confirmed›.
		</li>
		<li>
			<strong>Saru dialect: <i lang="ain-Latn">ahrus</i></strong> — a different outcome where
			the coda /t/ of <i lang="ain-Latn">at</i> weakens to /h/ rather than geminating, while
			the /r/ is preserved. This Saru form is reported by the community and has not been
			independently verified in a read primary source ‹speculative›.
		</li>
	</ul>

	<p>
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-12-26). The progressive assimilation
		/t + r/ → /tt/ producing <i lang="ain-Latn">attus</i> is consistent with the cluster-
		simplification isoglosses documented in eastern dialects by
		<Ref k="nakagawafukazawa2022" p="§3.3" /> (e.g. <i lang="ain-Latn">tupte</i> →
		<i lang="ain-Latn">tutte</i> in Bihoro; <i lang="ain-Latn">hotke</i> →
		<i lang="ain-Latn">hokke</i> 'lie down'). <Ref k="nakagawa2024" p="36" /> treats such
		changes as historical word-form changes rather than synchronic alternations — a
		classification that applies equally to the lexicalized <i lang="ain-Latn">attus</i>. Broader
		dialect consonant-assimilation correspondences are treated in
		<Xr ch="hokkaido-phonological-microvariation" />.
	</p>

	<Ex
		m="hangan attus mi wa"
		g="magistrate attus.robe wear CONJ"
		tr="The magistrate put on an attus robe and …"
		cite="ainukoraci1991"
		dial="SAR"
		place="小松哲郎, Ainu Times vol. 12 (沙流・千歳) [ainu-times/012/2#5]"
		note="attus is the standard Hokkaido form of the compound at-rus; the /t + r/ cluster has assimilated to /tt/. Corpus count: 24 tokens."
	/>
</S>

<S t="koré: two analyses of a lexicalized junction" id="kore">
	<p>
		The verb <A w="koré" gl="give (to someone)" /> presents a case where the synchronic
		combining-form analysis and a competing historical account remain unsettled.
	</p>

	<p>
		<strong>Nakagawa's morphological analysis</strong>
		<Ref k="nakagawa2024" p="53" />: <i lang="ain-Latn">koré</i> is the combining stem
		<i lang="ain-Latn">kor</i> 'have' plus the causative suffix <i lang="ain-Latn">-e</i>,
		parallel to <i lang="ain-Latn">kay-e</i> 'break (tr.)', <i lang="ain-Latn">tuy-e</i>
		'sell'. The surface accent <i lang="ain-Latn">koré</i> (σ2 high) rather than
		*<i lang="ain-Latn">kóre</i> (σ1 high) follows from the iambic placement rule
		reapplying to the whole as if monomorphemic once lexicalization has obscured the morpheme
		boundary: /CV + CVC/ → σ2 accent. The same accent pattern holds for the parallel lexicalized
		causatives treated in <Xr ch="causative-morphological-re-e-te" />
		<Ref k="shiraishi2022" p="§5.2" />.
	</p>

	<p>
		<strong>The community contraction account</strong>: <i lang="ain-Latn">koré</i> is a
		contraction of <i lang="ain-Latn">korpare</i>, the ditransitive root 'give to sb' (corpus
		frequency 153)
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-12-26). Both
		<i lang="ain-Latn">koré</i> and <i lang="ain-Latn">korpare</i> are productive in attested
		narrative speech; the accent <i lang="ain-Latn">koré</i> (not
		*<i lang="ain-Latn">kóre</i>) is agreed under both accounts. The corpus attests
		<i lang="ain-Latn">koré</i> (accent-marked) 30 times and <i lang="ain-Latn">kore</i>
		(unaccented, orthographic variant) 3120 times; the disparity reflects editorial marking
		practice rather than speaker frequency ‹contested›.
	</p>

	<p>
		The two analyses make different predictions about the combining system:
		Nakagawa's account treats <i lang="ain-Latn">kor-e</i> as a still-productive, if now
		lexicalized, causative combination; the contraction account treats
		<i lang="ain-Latn">koré</i> as an opaque form derived from
		<i lang="ain-Latn">korpare</i> by phonological reduction, making the
		<i lang="ain-Latn">kor</i> + suffix boundary morphologically inert in this lexical item.
		Neither is settled by the accessible sources.
	</p>
</S>

<S t="The affiliative suffix as a support-vowel paradigm" id="affiliative-note">
	<p>
		A further class of citation/combining opposition involves the suffix vowel that consonant-final
		nouns receive when they take the possessed (affiliative) form:
		<i lang="ain-Latn">hum</i> → <i lang="ain-Latn">hum-i</i> 'his/her sound',
		<i lang="ain-Latn">haw</i> → <i lang="ain-Latn">haw-e</i> 'his/her voice',
		<i lang="ain-Latn">ru</i> → <i lang="ain-Latn">ru-we</i> 'the trace of —',
		<i lang="ain-Latn">tek</i> → <i lang="ain-Latn">tek-e</i> 'his/her hand'. The vowel that
		appears after the root consonant is conditioned by the root's final vowel, following
		co-occurrence restrictions that are not simple spreading
		<Ref k="shiraishi2022" p="§4.5" />; <Ref k="nakagawa2024" p="226–230" />. This constitutes
		a systematic citation/combining opposition — the citation form is the bare noun, the
		combining (possessed) form adds the suffix vowel — and is treated in
		<Xr ch="concept-form-affiliative-form" /> and <Xr ch="affiliative-suffix-morphophonology" />.
	</p>

	<p>
		An additional morphologically restricted /h/-insertion between a vowel-final root and a
		following possessive vowel — <i lang="ain-Latn">ona-a</i> → <i lang="ain-Latn">ona-h-a</i>
		'his father', <i lang="ain-Latn">siki-i</i> → <i lang="ain-Latn">siki-h-i</i> 'his eyes'
		(Kindaichi &amp; Chiri 1936: 14, reported via <Ref k="shiraishi2022" p="n. 8" />) — is also
		treated in <Xr ch="affiliative-suffix-morphophonology" />.
	</p>
</S>

<S t="Summary of combining-form alternations" id="summary">
	<p>
		The table below collects the principal citation/combining alternations documented in this
		chapter. For each rule, the underlying and surface forms are given; chapters treating the
		full paradigm are indicated. <Ref k="nakagawa2024" p="§1.2.1" />
	</p>

	<table>
		<caption>Combining-form alternations in Hokkaido Ainu: summary</caption>
		<thead>
			<tr>
				<th>rule</th>
				<th>environment</th>
				<th>underlying</th>
				<th>surface</th>
				<th>see</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>/t/ → /c/ (palatalization)</td>
				<td>coda /t/ + onset /i/</td>
				<td><i lang="ain-Latn">mat-ikor</i></td>
				<td><i lang="ain-Latn">macikor</i></td>
				<td>§<Xr ch="citation-vs-combining-stem-shapes" s="t-i-junction">above</Xr></td>
			</tr>
			<tr>
				<td>/u/ → ∅ (prefix elision)</td>
				<td>ku= + stem-initial &#123;a, e, u, o&#125;</td>
				<td><i lang="ain-Latn">ku=oman</i></td>
				<td><i lang="ain-Latn">k=oman</i></td>
				<td>§<Xr ch="citation-vs-combining-stem-shapes" s="prefix-elision">above</Xr></td>
			</tr>
			<tr>
				<td>/i/ → [y] (vowel weakening)</td>
				<td>ku= + stem-initial /i/</td>
				<td><i lang="ain-Latn">ku=iunin</i></td>
				<td><i lang="ain-Latn">kuyunin</i></td>
				<td>§<Xr ch="citation-vs-combining-stem-shapes" s="prefix-elision">above</Xr>; <Xr ch="glide-epenthesis-hiatus-resolution" /></td>
			</tr>
			<tr>
				<td>/r/ → assimilate (r-sandhi)</td>
				<td>coda /r/ + onset /t n c s r/</td>
				<td><i lang="ain-Latn">kor-tar</i></td>
				<td><i lang="ain-Latn">kottar</i></td>
				<td><Xr ch="coda-r-assimilation-sonorant-sandhi" /></td>
			</tr>
			<tr>
				<td>/r/ → ∅ (casual reduction)</td>
				<td>word-final /r/ in casual speech</td>
				<td><i lang="ain-Latn">kur</i></td>
				<td>[ku] ‹corpus-suggested›</td>
				<td><Xr ch="rhotic-r" /></td>
			</tr>
			<tr>
				<td>/t + r/ → /tt/ (compound assimilation, historical)</td>
				<td>coda /t/ + onset /r/ in compound</td>
				<td><i lang="ain-Latn">at-rus</i></td>
				<td><i lang="ain-Latn">attus</i></td>
				<td>§<Xr ch="citation-vs-combining-stem-shapes" s="at-rus-attus">above</Xr></td>
			</tr>
			<tr>
				<td>root + suffix vowel (affiliative)</td>
				<td>consonant-final noun + POSS suffix</td>
				<td><i lang="ain-Latn">hum</i></td>
				<td><i lang="ain-Latn">hum-i</i></td>
				<td><Xr ch="affiliative-suffix-morphophonology" /></td>
			</tr>
		</tbody>
	</table>
</S>
