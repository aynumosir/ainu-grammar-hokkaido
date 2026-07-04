<!-- src/lib/grammar/chapters/personal-affix-sandhi-connected-speech-reduction.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Overview" id="overview">
	<p>
		The person markers of Hokkaido Ainu undergo systematic phonological changes at their
		juncture with a following verb or noun stem. The most salient is the deletion of the vowel
		of <i lang="ain-Latn">ku=</i> and <i lang="ain-Latn">ci=</i> before stem-initial vowels
		other than /i/, a feature of the southern varieties (Saru, Chitose, Mukawa). This deletion
		interacts with the prosodic-word formation and accent rules treated in
		<Xr ch="accent-in-compounds-and-affixation" /> and with the vowel-weakening mechanism
		described in <Xr ch="glide-epenthesis-hiatus-resolution" />. The general sandhi processes
		that operate across all morpheme junctures — coda-/r/ assimilation, nasal-place assimilation
		— are the subject of <Xr ch="coda-r-assimilation-sonorant-sandhi" />; the person-marker
		inventory and its morphosyntactic analysis are laid out in
		<Xr ch="person-marking-architecture" />.
	</p>
</S>

<S t="The ku= and ci= vowel-deletion rule" id="vowel-deletion">
	<p>
		In Saru, Chitose, and Mukawa, the /u/ of <i lang="ain-Latn">ku=</i> (first-person singular
		agent/subject) deletes before a stem-initial /a/, /e/, /u/, or /o/; correspondingly, the
		/i/ of <i lang="ain-Latn">ci=</i> (first-person plural exclusive agent/subject) deletes in
		the same environments <Ref k="nakagawa2024" p="33, 52" />; <Ref k="sato2008" p="xii" />.
		The vowel /i/ is excluded from the deletion domain: before a stem beginning with /i/, a
		distinct vowel-weakening process applies (§3 below). Outside the southern zone, most
		Hokkaido dialects preserve the full marker forms without deletion
		<Ref k="nakagawa2024" p="52" />; <Ref k="nakagawafukazawa2022" p="§3" />.
	</p>

	<p>The two deletion rules can be stated as:</p>

	<ul>
		<li>/u/ → ∅ / <i lang="ain-Latn">ku=</i> __ &#123;a, e, u, o&#125;…</li>
		<li>/i/ → ∅ / <i lang="ain-Latn">ci=</i> __ &#123;a, e, u, o&#125;…</li>
	</ul>

	<table>
		<caption>
			Table 1. Deletion and weakening at the ku= / ci= juncture, Saru/Chitose/Mukawa
		</caption>
		<thead>
			<tr>
				<th>stem-initial vowel</th>
				<th>underlying</th>
				<th>surface</th>
				<th>process</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>/a/</td>
				<td><i lang="ain-Latn">ku=a…</i></td>
				<td><i lang="ain-Latn">k=a…</i></td>
				<td>/u/ deletion</td>
			</tr>
			<tr>
				<td>/o/</td>
				<td><i lang="ain-Latn">ku=omare</i></td>
				<td><i lang="ain-Latn">k=omare</i></td>
				<td>/u/ deletion</td>
			</tr>
			<tr>
				<td>/e/ (with <i lang="ain-Latn">ci=</i>)</td>
				<td><i lang="ain-Latn">ci=etu</i></td>
				<td><i lang="ain-Latn">c=etu</i></td>
				<td>/i/ deletion</td>
			</tr>
			<tr>
				<td>/i/ — open σ1</td>
				<td><i lang="ain-Latn">ku=ipe</i></td>
				<td><i lang="ain-Latn">ku=ype</i> [kuˈype]</td>
				<td>stem /i/ → [j]; NO marker deletion (§3)</td>
			</tr>
			<tr>
				<td>/i/ — closed σ1</td>
				<td><i lang="ain-Latn">ku=ikra</i></td>
				<td><i lang="ain-Latn">ku=ikra</i></td>
				<td>no change; both processes blocked (§3)</td>
			</tr>
		</tbody>
	</table>

	<p>
		Learners of Saru and Chitose frequently overgeneralize the deletion to /i/-initial stems,
		producing ungrammatical *<i lang="ain-Latn">k=ipe</i>; the restriction to &#123;a, e, u, o&#125; is
		the corrective <Ref k="aynucorporadiscord" /> (nukopoli, 2024-11-28) ‹corpus-confirmed›.
	</p>

	<Ex
		m="ku=omare"
		ain="k=omare"
		g="1SG.A=exit"
		tr="I go out."
		note="Underlying ku=omare; in the Saru and Chitose dialects the /u/ of ku= deletes before the /o/-initial stem, yielding the spoken form k=omare [koˈmaɾe]. Standard romanized orthography writes the underlying form."
		constructed
	/>
</S>

<S t="The /i/-initial block and vowel weakening" id="i-block">
	<p>
		When the stem begins with /i/, deletion of <i lang="ain-Latn">ku=</i>'s /u/ is blocked; the
		stem-initial /i/ instead undergoes 母音弱化 (vowel weakening), becoming the glide [j]:
		<i lang="ain-Latn">ku=ipe</i> → <i lang="ain-Latn">ku=ype</i> /kuˈype/, while
		*<i lang="ain-Latn">k=ipe</i> is ungrammatical <Ref k="nakagawa2024" p="52" />;
		<Ref k="sato2008" p="xii" />. The same process operates with <i lang="ain-Latn">e=</i>:
		<i lang="ain-Latn">e=itak</i> → <i lang="ain-Latn">eytak</i> [ejˈtak] 'your words / you
		speak' <Ref k="nakagawa2024" p="40" />. The weakening process (/i/ → [j] after a
		vowel-final prefix) is described in broader scope in
		<Xr ch="glide-epenthesis-hiatus-resolution" />.
	</p>

	<p>
		A second environment blocks weakening: when the stem's first syllable is closed (CVC), the
		result of weakening would produce an illicit consonant cluster. The stem
		<i lang="ain-Latn">ikra</i> has σ1 = <i lang="ain-Latn">ik</i> (coda /k/); weakening
		would yield the onset sequence /k-jk-/, which violates the (C)V(C) syllable canon
		(<Xr ch="syllable-template" />). Accordingly <i lang="ain-Latn">ku=ikra</i> is the only
		licit form: neither *<i lang="ain-Latn">ku=ykra</i> nor *<i lang="ain-Latn">k=ikra</i>
		arises <Ref k="nakagawa2024" p="53" />;
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-11-28) ‹corpus-confirmed›. By contrast,
		stems with an open /i/-initial syllable do undergo weakening:
		<i lang="ain-Latn">eytasa</i> (&lt; <i lang="ain-Latn">e=</i> + <i lang="ain-Latn">itasa</i>)
		and <i lang="ain-Latn">eywanke</i> (&lt; <i lang="ain-Latn">e=</i> +
		<i lang="ain-Latn">iwanke</i>) both show the [j] glide
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-11-28) ‹corpus-confirmed›.
	</p>

	<Ex
		m="ku=ipe"
		ain="ku=ype"
		g="1SG.A=eat"
		tr="I eat."
		note="Underlying ku=ipe; the /u/ of ku= is retained (deletion is blocked before /i/), and the stem-initial /i/ weakens to the glide [j], giving ku=ype [kuype]. The form *k=ipe is ungrammatical."
		constructed
	/>
</S>

<S t="Prosodic integration and rule ordering" id="prosodic-integration">
	<p>
		The markers <i lang="ain-Latn">ku=</i>, <i lang="ain-Latn">e=</i>, and
		<i lang="ain-Latn">ci=</i> form a single prosodic word with the following stem, so that the
		pitch-accent placement rules (原則1 / 原則2; <Xr ch="pitch-accent-placement-rule" />) are
		reapplied to the whole unit. The crucial ordering point is that the accent shift occurs
		<em>before</em> vowel deletion: the surface accent is computed from the prefixed word, not
		re-derived from the contracted form <Ref k="nakagawa2024" p="52" />;
		<Ref k="shiraishi2022" p="§5.1" />.
	</p>

	<p>
		The derivation of <i lang="ain-Latn">k=ómare</i> illustrates the two-step ordering:
	</p>

	<table>
		<caption>
			Table 2. Rule ordering: accent shift precedes deletion
		</caption>
		<thead>
			<tr>
				<th>stage</th>
				<th>form</th>
				<th>syllable structure and accent</th>
				<th>operation</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>underlying</td>
				<td><i lang="ain-Latn">omáre</i></td>
				<td>o|má|re — σ1 = V (open) → 原則2: accent on σ2</td>
				<td>—</td>
			</tr>
			<tr>
				<td>after marker attachment</td>
				<td><i lang="ain-Latn">ku=ómare</i></td>
				<td>ku|ó|ma|re — new σ1 = CV (open) → 原則2: accent on new σ2</td>
				<td>prosodic-word formation; accent reapplied</td>
			</tr>
			<tr>
				<td>surface (Saru/Chitose/Mukawa)</td>
				<td><i lang="ain-Latn">k=ómare</i> [kómaɾe]</td>
				<td>kó|ma|re — σ1 now CVC; accent fixed</td>
				<td>/u/ deletion; σ1–σ2 merge</td>
			</tr>
		</tbody>
	</table>

	<p>
		The same ordering holds with <i lang="ain-Latn">ci=</i>: <i lang="ain-Latn">etú</i> →
		<i lang="ain-Latn">ci=étu</i> (accent on σ2 of the new unit) →
		<i lang="ain-Latn">c=étu</i> [ˈcetu] <Ref k="nakagawa2024" p="52" />. For consonant-initial
		stems, deletion does not apply; only the accent shift operates:
		<i lang="ain-Latn">hopúni</i> → <i lang="ain-Latn">ku=hópuni</i> 'I rise'
		<Ref k="nakagawa2024" p="52" />.
	</p>

	<p>
		The markers <i lang="ain-Latn">a=</i> (fourth-person agent/subject) and
		<i lang="ain-Latn">eci=</i> (second-person plural agent/subject) behave differently: they do
		not form a single prosodic word with the stem, so the stem retains its underlying accent
		without shift. Thus <i lang="ain-Latn">omáre</i> → <i lang="ain-Latn">a=omáre</i> (accent
		unchanged) <Ref k="nakagawa2024" p="53" />; <Ref k="shiraishi2022" p="§5.1" />.
	</p>

	<table>
		<caption>
			Table 3. Accent-class split among person markers
		</caption>
		<thead>
			<tr>
				<th>marker</th>
				<th>prosodic-word formation</th>
				<th>accent shift on V-initial stem</th>
				<th>vowel deletion before &#123;a, e, u, o&#125;</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">ku=</i> (1sg A/S)</td>
				<td>yes (inner class)</td>
				<td>yes</td>
				<td>yes (Saru/Chitose/Mukawa)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">e=</i> (2sg A/S)</td>
				<td>yes (inner class)</td>
				<td>yes</td>
				<td>/e/ not subject to deletion rule</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ci=</i> (1pl excl. A/S)</td>
				<td>yes (inner class)</td>
				<td>yes</td>
				<td>yes (Saru/Chitose/Mukawa)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">a=</i> (4th person A/S)</td>
				<td>no (outer class)</td>
				<td>no</td>
				<td>no</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">eci=</i> (2pl A/S)</td>
				<td>no (outer class)</td>
				<td>no</td>
				<td>no</td>
			</tr>
		</tbody>
	</table>
</S>

<S t="Juncture tightness and the =an boundary" id="juncture-tightness">
	<p>
		Within the person-marker class as a whole, the degree of phonological integration with the
		host stem varies beyond the binary inner/outer accent-class split. Community phonetic
		observation — uncorroborated by instrumental study in the sources read for this grammar —
		reports that the marker group binds more tightly to its host than a compound constituent
		does: <i lang="ain-Latn">a=kor itak</i> 'speech one has' surfaces as [akorəʔitak], with a
		glottal catch at the word boundary after <i lang="ain-Latn">kor</i>, rather than
		resyllabifying the coda /r/ across the compound juncture to *[ako.ri.tak]
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-03-18) ‹speculative›. Within the marker
		paradigm, the inner-class markers (<i lang="ain-Latn">ku=</i>, <i lang="ain-Latn">e=</i>)
		are reported to be phonetically tighter than the outer-class markers
		(<i lang="ain-Latn">a=</i>, <i lang="ain-Latn">=an</i>), the latter tending to be realized
		more independently in measured speech
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-03-18) ‹speculative›.
	</p>

	<p>
		The suffix <i lang="ain-Latn">=an</i> (fourth-person S) shows a juncture pattern distinct
		from that of derivational suffixes: after a consonant-final stem, the coda does not
		resyllabify onto the following /a/ by the regular resyllabification rule of
		<Xr ch="syllable-template" />. Instead the boundary is marked by a glottal stop or tense
		onset: <i lang="ain-Latn">sap=an</i> → [sapʔan], not *[sa.pan]
		<Ref k="aynucorporadiscord" /> (nukopoli, 2023-12-27) ‹speculative›. This contrasts with the
		morpheme-internal resyllabification seen in true derivational junctures such as
		<i lang="ain-Latn">sik-o</i> → [si.ko] <Ref k="nakagawa2024" p="38–39" />;
		<Ref k="shiraishi2022" p="§4.4" />. The
		<i lang="ain-Latn">=an</i> suffix also carries a secondary accent when the verb stem closes
		with a CV(+) syllable: <i lang="ain-Latn">iˈruska-ˌan</i> 'one is angry' retains both
		accents. This secondary accent disappears when the stem ends in a CVC syllable:
		<i lang="ain-Latn">ˈcis-an</i> 'one cries', <i lang="ain-Latn">ˈsap-an</i>
		<Ref k="shiraishi2022" p="§5.1" />.
	</p>
</S>

<S t="Connected-speech reductions" id="connected-speech">
	<p>
		In fast or casual speech, the vowel-deletion process extends to sequences that have become
		partially lexicalized. The independent pronoun <i lang="ain-Latn">kuani</i> 'I' (analysed in
		<Xr ch="independent-personal-pronouns" />) reduces to <i lang="ain-Latn">kani</i> by the
		same /u/-deletion that yields <i lang="ain-Latn">ciep</i> → <i lang="ain-Latn">cep</i>
		'food (eaten thing)'
		<Ref k="aynucorporadiscord" /> (gengojiro, 2024-02-05) ‹corpus-suggested›. Both
		<i lang="ain-Latn">kani</i> and <i lang="ain-Latn">cep</i> are the standard Saru/Chitose
		dictionary entries, showing that these contractions have become conventionalized rather than
		remaining casual variants.
	</p>

	<p>
		The romanized orthography writes underlying (etymological) forms throughout —
		<i lang="ain-Latn">ku=omare</i> rather than <i lang="ain-Latn">k=omare</i>;
		<i lang="ain-Latn">ran wa</i> rather than <i lang="ain-Latn">ram ma</i> — while katakana
		practice tends to follow the phonetic output more closely
		<Ref k="nakagawa2024" p="37–38" />;
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-07-09) ‹corpus-confirmed›. The sandhi forms
		are produced in speech but not written in standard transcription, so corpus searches for
		assimilated person-marker forms typically return nothing; the spoken distribution of the
		rule is consequently under-documented in the written record
		<Ref k="nakagawa2024" p="37–38" />. The wider romanization policy and its divergence from
		katakana practice are discussed in
		<Xr ch="orthographic-standardization-and-word-division" />.
	</p>

	<p>
		The coda /r/ of a verb stem can interact with person-marker sandhi when a /r/-final stem
		precedes a vowel-initial marker or suffix. The regressive assimilation rules of
		<Xr ch="coda-r-assimilation-sonorant-sandhi" /> operate on the coda /r/ first and produce
		the form that then serves as input to person-marker juncture rules. The fast-speech
		deletion of word-final /r/ itself (<i lang="ain-Latn">kur</i> →
		<i lang="ain-Latn">ku</i>, <i lang="ain-Latn">kor</i> → <i lang="ain-Latn">ko</i>) is
		treated in <Xr ch="rhotic-r" />.
	</p>
</S>

<S t="The clitic–affix cline" id="clitic-affix-cline">
	<p>
		Nakagawa's standard romanization applies the equals sign to all person markers at the
		left or right edge of the verb: <i lang="ain-Latn">ku=</i>,
		<i lang="ain-Latn">e=</i>, <i lang="ain-Latn">a=</i>, <i lang="ain-Latn">ci=</i>,
		<i lang="ain-Latn">eci=</i>, <i lang="ain-Latn">en=</i>, <i lang="ain-Latn">un=</i>,
		<i lang="ain-Latn">=an</i>, and <i lang="ain-Latn">=as</i>
		<Ref k="nakagawa2024" p="33" />. The <code>=</code> is an orthographic device — Nakagawa
		states expressly that it is unrelated to the linguistic convention of marking clitics with
		an equals sign <Ref k="nakagawa2024" p="58–60" /> — so the notation itself carries no claim
		about clitic as against affix status. The orthographic policy is discussed in
		<Xr ch="orthographic-standardization-and-word-division" s="equals-sign" />.
	</p>

	<p>
		The phonological evidence surveyed in this chapter shows that the personal markers — written
		uniformly with <code>=</code> — occupy different positions along the clitic-to-affix
		cline. Three independent diagnostics converge on the same two-way split:
	</p>

	<ul>
		<li>
			<strong>Accent shift</strong>: the inner class (<i lang="ain-Latn">ku=</i>,
			<i lang="ain-Latn">e=</i>, <i lang="ain-Latn">ci=</i>) triggers prosodic-word formation
			and reapplication of accent rules; the outer class (<i lang="ain-Latn">a=</i>,
			<i lang="ain-Latn">eci=</i>) does not (§4 above;
			<Ref k="nakagawa2024" p="52–53" paren />; <Ref k="shiraishi2022" p="§5.1" paren />).
		</li>
		<li>
			<strong>Vowel deletion</strong>: only <i lang="ain-Latn">ku=</i> and
			<i lang="ain-Latn">ci=</i> lose their vowels before non-/i/ stems in the southern
			dialects, marking them as the most tightly bonded members of the marker paradigm (§2
			above; <Ref k="nakagawa2024" p="52" paren />).
		</li>
		<li>
			<strong>Juncture opacity</strong>: the <i lang="ain-Latn">=an</i> boundary blocks the
			resyllabification that is otherwise permitted at morpheme-internal junctures, placing it
			above the level of a derivational suffix in phonological independence (§5 above;
			<Ref k="aynucorporadiscord" /> nukopoli, 2023-12-27, ‹speculative›).
		</li>
	</ul>

	<p>
		The three criteria jointly define a gradient: inner clitics &gt; outer clitics &gt;
		independent words, with <i lang="ain-Latn">ku=</i> and <i lang="ain-Latn">ci=</i> the most
		tightly integrated members and <i lang="ain-Latn">=an</i> the loosest. A parallel gradation
		in morphophonological tightness across person-marking sub-classes has been documented for
		Sakhalin Ainu <Ref k="sakaguchi2024" paren />, providing a comparative point for the
		Hokkaido two-way split. The morphosyntactic diagnostics for the Hokkaido system are taken up
		in <Xr ch="person-marking-architecture" /> and the template position of each marker in
		<Xr ch="personal-affix-template-and-ordering" />.
	</p>
</S>
