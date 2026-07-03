<!-- src/lib/grammar/chapters/accent-in-compounds-and-affixation.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The prosodic word and accent reapplication" id="prosodic-word">
	<p>
		In all standard-accent dialects of Hokkaido Ainu, high pitch is assigned to σ1 when σ1 is
		closed (has a coda), and to σ2 otherwise — with a memorized set of lexical exceptions (see
		<Xr ch="pitch-accent-placement-rule" />). These rules evaluate the <em>prosodic word</em>
		as their domain: a prefix or compounding element that fuses with a base creates a new
		prosodic word, and the placement rules are reapplied from the new left edge
		<Ref k="nakagawa2024" p="52–54" />; <Ref k="shiraishi2022" p="§5.1–5.2" />;
		<Ref k="sato2008" p="§2.6" />. Prefixation may therefore shift accent inward, and
		compounding suppresses all accent peaks after the first. Affixes divide accordingly: those
		that enter the prosodic word of their base shift its accent; those that remain outside it
		leave the base accent intact. The accent data thereby provide one of the clearest
		phonological diagnostics for the prefix/clitic boundary in the person-affix paradigm. The
		Yakumo irregular system, where 原則2 shifts one position further right, produces different
		surface outputs for the same derivations but applies the same prosodic-word logic; its
		characterization is given in <Xr ch="pitch-accent-placement-rule" />.
	</p>
</S>

<S t="Compound nouns: first-element priority" id="compounds">
	<p>
		When two or more free forms combine as a compound noun, the result carries a single accent
		peak. <Ref k="nakagawa2024" p="54" /> states the general outcome as a first-element
		priority rule: only the front element's lexical accent survives; all syllables belonging
		to rear elements are low. For a polysyllabic front element, the accent it bears in
		isolation — as assigned by the placement rules to that element's own σ1 — is retained
		unchanged.
	</p>

	<table>
		<caption>Compound accent: first-element priority (standard-accent dialects)</caption>
		<thead>
			<tr>
				<th>front element</th>
				<th>accent</th>
				<th>compound</th>
				<th>compound accent</th>
				<th>gloss</th>
				<th>source</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">kamuy</i></td>
				<td><i lang="ain-Latn">kamúy</i></td>
				<td><i lang="ain-Latn">kamuy+nomi</i></td>
				<td><i lang="ain-Latn">kamúynomi</i></td>
				<td>'pray to a deity'</td>
				<td><Ref k="nakagawa2024" p="54" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">horka</i></td>
				<td><i lang="ain-Latn">hórka</i></td>
				<td><i lang="ain-Latn">horka+reye+p</i></td>
				<td><i lang="ain-Latn">hórkareyep</i></td>
				<td>'crayfish'</td>
				<td><Ref k="nakagawa2024" p="54" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">cise</i></td>
				<td><i lang="ain-Latn">cisé</i></td>
				<td><i lang="ain-Latn">cise+kor+kur</i></td>
				<td><i lang="ain-Latn">cisékorkur</i></td>
				<td>'householder'</td>
				<td><Ref k="aynucorporadiscord" /> (nukopoli 2024-12-09)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">kotan</i></td>
				<td><i lang="ain-Latn">kotán</i></td>
				<td><i lang="ain-Latn">kotan+kor+kur</i></td>
				<td><i lang="ain-Latn">kotánkorkur</i></td>
				<td>'village chief'</td>
				<td><Ref k="aynucorporadiscord" /> (nukopoli 2024-12-09)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ni</i> (monosyllabic)</td>
				<td><i lang="ain-Latn">ní</i></td>
				<td><i lang="ain-Latn">ni+tek</i></td>
				<td><i lang="ain-Latn">nítek</i></td>
				<td>'branch'</td>
				<td><Ref k="nakagawa2024" p="54" /></td>
			</tr>
		</tbody>
	</table>

	<p>
		The accent positions follow from the placement rules applied to the front element in
		isolation. <i lang="ain-Latn">kamúy</i> has open σ1 (<i lang="ain-Latn">ka</i>) → 原則2
		→ accent on σ2 <i lang="ain-Latn">mú</i>; that accent is the sole high syllable of
		<i lang="ain-Latn">kamúynomi</i>. <i lang="ain-Latn">hórka</i> has closed σ1
		(<i lang="ain-Latn">hor</i>) → 原則1 → accent on <i lang="ain-Latn">hór</i>; that accent
		survives in <i lang="ain-Latn">hórkareyep</i>. The monosyllabic
		<i lang="ain-Latn">ni</i> carries the single available accent, giving
		<i lang="ain-Latn">nítek</i>.
	</p>

	<p>
		For <i lang="ain-Latn">cisékorkur</i> and <i lang="ain-Latn">kotánkorkur</i>, the community
		reports that both are single words with the front-element accent as their sole peak
		<Ref k="aynucorporadiscord" /> (nukopoli 2024-12-09) ‹corpus-suggested›. The assignments
		follow from the principle: <i lang="ain-Latn">cise</i> 'house' has open σ1
		(<i lang="ain-Latn">ci</i>) → 原則2 → accent on <i lang="ain-Latn">sé</i>, which becomes
		the sole peak of <i lang="ain-Latn">cisékorkur</i> 'householder';
		<i lang="ain-Latn">kotan</i> 'village' has open σ1 (<i lang="ain-Latn">ko</i>) → 原則2 →
		accent on <i lang="ain-Latn">tán</i>, retained in <i lang="ain-Latn">kotánkorkur</i>
		'village chief'.
	</p>

	<p>
		The first-element priority is a strong default. <Ref k="shiraishi2022" p="§5.2" /> notes a
		set of lexicalized compound nouns that carry the iambic pattern even when the front
		element's isolated accent would predict otherwise: <i lang="ain-Latn">hasínaw</i>,
		<i lang="ain-Latn">cepétu</i> 'fish snout', <i lang="ain-Latn">nayétok</i> 'stream
		source' all show accent on σ2 of the compound, as if the form were an underived disyllabic
		root. These represent lexicalized items requiring per-form verification ‹contested›. The
		prosodic-unit question (mora vs syllable) bearing on the weight analysis is addressed in
		<Xr ch="mora-syllable-accent-vs-tone-analysis" />; attested minimal-pair contrasts in
		compound accent are listed in <Xr ch="lexical-contrastive-accent-minimal-pairs" />.
	</p>
</S>

<S t="somo and somósomo as a prosodic diagnostic" id="somo">
	<p>
		The negative adverb <A w="somo" gl="not" /> illustrates the prosodic-word boundary
		transparently. As an independent word, <i lang="ain-Latn">somo</i> has open σ1
		(<i lang="ain-Latn">so</i>) and thus accent on σ2 by 原則2:
		<i lang="ain-Latn">somó</i>. This is its accent in phrases such as
		<i lang="ain-Latn">ka somó ki</i> 'does not do even', where
		<i lang="ain-Latn">somo</i> is a separate prosodic word. When doubled to form the
		intensified negation <i lang="ain-Latn">somosomo</i> 'not at all, definitely not', the
		pair becomes a single prosodic word: only the front element's accent survives, giving
		<i lang="ain-Latn">somósomo</i> with a single high syllable on <i lang="ain-Latn">mó</i>
		<Ref k="aynucorporadiscord" /> (nukopoli 2024-12-09) ‹corpus-suggested›. The contrast
		<i lang="ain-Latn">ka somó ki</i> (two prosodic words) versus
		<i lang="ain-Latn">somósomo</i> (one prosodic word) instantiates the same mechanism as
		the compound table above. The negation system and <A w="somo" /> are treated in
		<Xr ch="negation-somo-standard-clausal" />.
	</p>
</S>

<S t="Derivational prefixes" id="derivational">
	<S t="The reflexive prefix yay-" id="yay">
		<p>
			The reflexive prefix <A w="yay-" gl="self, reflexive" /> always opens the prosodic word
			as σ1. <i lang="ain-Latn">yay</i> is a closed syllable (CVC), so 原則1 places the
			accent on σ1 — on <i lang="ain-Latn">yáy</i> — regardless of the shape of the following
			stem <Ref k="nakagawa2024" p="53" />. The published example is
			<i lang="ain-Latn">yáykoytak</i> 'talk to oneself' (&lt;
			<i lang="ain-Latn">yay-ko-itak</i>). The community additionally reports
			<i lang="ain-Latn">yáyesiru</i> 'concentrate (on oneself)' as a further illustration
			that <i lang="ain-Latn">yáy</i> holds the accent whether the following syllable is
			consonant-initial or vowel-initial
			<Ref k="aynucorporadiscord" /> (nukopoli 2024-11-10, attributed to
			<Ref k="nakagawa2024" />). Lexicalized <i lang="ain-Latn">yay-</i> derivatives may
			deviate and require per-form verification. The distribution of
			<i lang="ain-Latn">yay-</i> and the co-reflexive <i lang="ain-Latn">si-</i> in Chitose
			is examined in <Ref k="sato2007" />; the morphosyntax of both reflexive prefixes is set
			out in <Xr ch="applicative-system-overview" />.
		</p>
	</S>

	<S t="Applicative prefixes as prosodic-word heads" id="applicatives">
		<p>
			The applicative prefixes <A w="e-" gl="APPL (body-part/location)" />,
			<A w="ko-" gl="APPL (goal/recipient)" />, and <A w="o-" gl="APPL (path)" /> open the
			prosodic word as a light (CV) σ1 when they attach to a base
			<Ref k="nakagawa2024" p="53" />; <Ref k="bugaeva2006" paren />. Because σ1 is open,
			原則2 shifts the accent to σ2 of the new prosodic word, which is the σ1 of the original
			base. The result is that prefixation moves the high syllable one position earlier in the
			string compared with the free base.
		</p>

		<table>
			<caption>Accent shift under the applicative e- (standard-accent dialects)</caption>
			<thead>
				<tr>
					<th>free / phrasal form</th>
					<th>accent</th>
					<th>e- form</th>
					<th>accent</th>
					<th>gloss (e- form)</th>
					<th>source</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><i lang="ain-Latn">puni</i></td>
					<td><i lang="ain-Latn">púni</i></td>
					<td><i lang="ain-Latn">e=puni</i></td>
					<td><i lang="ain-Latn">epúni</i></td>
					<td>'lift up (something)'</td>
					<td><Ref k="nakagawa2024" p="53" /></td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">kotan ne</i> (phrase)</td>
					<td><i lang="ain-Latn">kotán ne</i></td>
					<td><i lang="ain-Latn">e=kotan-ne</i></td>
					<td><i lang="ain-Latn">ekótanne</i></td>
					<td>'belong to a village, be a villager'</td>
					<td><Ref k="aynucorporadiscord" /> (nukopoli 2024-11-10)</td>
				</tr>
			</tbody>
		</table>

		<p>
			In <i lang="ain-Latn">ekótanne</i>, the prefix <i lang="ain-Latn">e-</i> creates a new
			light σ1 → 原則2 → accent on σ2 (<i lang="ain-Latn">kó</i>). The free word
			<i lang="ain-Latn">kotán</i> accents σ2 (<i lang="ain-Latn">tán</i>) by the same rule;
			in the applicative form the high syllable has moved one position to the left. The
			<i lang="ain-Latn">ekótanne</i> example is a community extrapolation from the general
			one-word analysis of applicative-prefixed forms
			<Ref k="aynucorporadiscord" /> (nukopoli 2024-11-10), consistent with the published
			<i lang="ain-Latn">epúni</i> <Ref k="nakagawa2024" p="53" /> ‹corpus-suggested›. The
			morphology and syntax of the applicative prefixes are treated in
			<Xr ch="applicative-system-overview" />.
		</p>
	</S>

	<S t="Causative suffixes and the lexicalized koré" id="causative-kore">
		<p>
			Derivational suffixes generally do not displace accent in Hokkaido Ainu
			<Ref k="nakagawa2024" p="53" />. The causative suffixes <i lang="ain-Latn">-re</i>,
			<i lang="ain-Latn">-te</i>, <i lang="ain-Latn">-e</i> attached to monosyllabic bases
			retain the base accent: <i lang="ain-Latn">e</i> → <i lang="ain-Latn">ére</i>;
			<i lang="ain-Latn">ku</i> → <i lang="ain-Latn">kúre</i>;
			<i lang="ain-Latn">kar</i> → <i lang="ain-Latn">káre</i>.
		</p>

		<p>
			The verb <i lang="ain-Latn">koré</i> 'give' is a well-attested departure. A regular
			causative derivation from <i lang="ain-Latn">kor</i> 'have' +
			<i lang="ain-Latn">-e</i> would yield <i lang="ain-Latn">*kóre</i> (σ1
			<i lang="ain-Latn">kor</i> = CVC → 原則1 → σ1 accented); the attested form is
			<i lang="ain-Latn">koré</i>, with accent on σ2
			<Ref k="nakagawa2024" p="53" />; <Ref k="shiraishi2022" p="§5.2" />. Nakagawa's account
			is that the morpheme boundary between <i lang="ain-Latn">kor</i> and
			<i lang="ain-Latn">-e</i> has eroded sufficiently for the form to be treated as a
			monomorphemic disyllabic root, whereupon σ1 <i lang="ain-Latn">ko</i> is open → 原則2
			→ accent on <i lang="ain-Latn">ré</i>. The community proposes alternatively that
			<i lang="ain-Latn">koré</i> is a phonological contraction of
			<i lang="ain-Latn">korpare</i> 'give to someone', which independently yields σ2 accent
			<Ref k="aynucorporadiscord" /> (nukopoli 2024-12-26) ‹contested›. Both accounts predict
			the same surface accentuation; the accent <i lang="ain-Latn">koré</i> is attested in the
			Saru corpus:
		</p>

		<Ex
			m="topenpe atay poka ka somo a=kore"
			ain="tópenpe atay póka ka somo a=koré"
			g="sweet price even also NEG 4.A=give"
			tr="She couldn't even be given the price of one sweet."
			cite="ilcaa1976"
			dial="SAR"
			place="川上まつ子, isoytak 独話2, AA研アイヌ語資料 [aa-irc/004#105]"
			note="The σ2 accent of koré reflects the iambic pattern of a lexicalized open-initial disyllable (σ1 ko = CV, open → 原則2). The co-existent ditransitive korpare 'give to someone' is attested alongside it in the Saru corpus."
		/>
	</S>
</S>

<S t="Person-affix accent" id="person-affix">
	<S t="The shifting class: ku=, e=, ci=, en=" id="shifting">
		<p>
			The person-marking prefixes <i lang="ain-Latn">ku=</i> (1SG agent/subject),
			<i lang="ain-Latn">e=</i> (2SG), and <i lang="ain-Latn">ci=</i> (inclusive 1PL) form
			a single prosodic word with their base
			<Ref k="nakagawa2024" p="52" />; <Ref k="shiraishi2022" p="§5.1" />;
			<Ref k="sato2008" p="§2.6" />. Each prefix contributes a light (CV) σ1; 原則2 applies
			and the accent falls on σ2 of the new word — one position earlier than the base accent
			when the base's own σ1 was open:
		</p>

		<table>
			<caption>Accent shift under person prefixes of the shifting class</caption>
			<thead>
				<tr>
					<th>base</th>
					<th>accent</th>
					<th>prefixed form</th>
					<th>accent</th>
					<th>gloss</th>
					<th>source</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><i lang="ain-Latn">hopuni</i></td>
					<td><i lang="ain-Latn">hopúni</i></td>
					<td><i lang="ain-Latn">ku=hopuni</i></td>
					<td><i lang="ain-Latn">ku=hópuni</i></td>
					<td>'I rise'</td>
					<td><Ref k="nakagawa2024" p="52" /></td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">nanu</i></td>
					<td><i lang="ain-Latn">nanú</i></td>
					<td><i lang="ain-Latn">e=nanu</i></td>
					<td><i lang="ain-Latn">e=nánu</i></td>
					<td>'your face'</td>
					<td><Ref k="nakagawa2024" p="52" /></td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">yupihi</i></td>
					<td><i lang="ain-Latn">yupíhi</i></td>
					<td><i lang="ain-Latn">ku=yupihi</i></td>
					<td><i lang="ain-Latn">ku=yúpihi</i></td>
					<td>'my elder brother'</td>
					<td><Ref k="shiraishi2022" p="§5.1" /></td>
				</tr>
			</tbody>
		</table>

		<p>
			In each case the base has open σ1 and accents σ2; after the CV prefix is added, σ1 of
			the new prosodic word is the prefix itself (open) and σ2 — which is the original σ1 of
			the base — receives the high pitch.
		</p>

		<p>
			In Saru and Chitose, <i lang="ain-Latn">ku=</i> and <i lang="ain-Latn">ci=</i>
			additionally lose their vowel before a base-initial vowel other than
			<i lang="ain-Latn">i</i>. The conditions for this vowel deletion are described in
			<Xr ch="personal-affix-sandhi-connected-speech-reduction" /> and
			<Xr ch="glides-w-y" />. The accent shift precedes deletion, so the shifted accent
			survives in the contracted surface form: <i lang="ain-Latn">ku=</i> +
			<i lang="ain-Latn">omáre</i> → accent shift → <i lang="ain-Latn">ku=ómáre</i> → vowel
			deletion → <i lang="ain-Latn">k=ómare</i>; <i lang="ain-Latn">ci=</i> +
			<i lang="ain-Latn">etú</i> → <i lang="ain-Latn">c=étu</i>
			<Ref k="nakagawa2024" p="52" />.
		</p>

		<p>
			Before a base-initial <i lang="ain-Latn">i</i>, vowel deletion is blocked and glide
			formation (<i lang="ain-Latn">i</i> → <i lang="ain-Latn">y</i>) substitutes; the accent
			shift still applies: <i lang="ain-Latn">ku=ipe</i> → <i lang="ain-Latn">ku=ýpe</i> /
			<i lang="ain-Latn">kúype</i>. When the base-initial <i lang="ain-Latn">i</i> is in a
			closed syllable, glide formation is itself blocked by the phonotactic constraint against
			CCC clusters: <i lang="ain-Latn">ku=</i> + <i lang="ain-Latn">inkar</i> →
			<i lang="ain-Latn">ku=ínkar</i> with no glide and accent on σ2
			<Ref k="nakagawa2024" p="52–53" />.
		</p>

		<p>
			The 1SG object prefix <i lang="ain-Latn">en=</i> behaves analogously: it opens the
			prosodic word as a closed σ1 (<i lang="ain-Latn">en</i>, CVC), so 原則1 places the
			accent on σ1. In Nakagawa's textbook the phrase
			<i lang="ain-Latn">wa én=kore</i> shows the accent on <i lang="ain-Latn">én</i>,
			consistent with this rule
			<Ref k="aynucorporadiscord" /> (nukopoli 2024-11-10, attributed to
			<Ref k="nakagawa2024" />) ‹corpus-suggested›.
		</p>
	</S>

	<S t="The non-shifting class: a=, eci=" id="non-shifting">
		<p>
			The indefinite-person prefix <i lang="ain-Latn">a=</i> and the 2PL prefix
			<i lang="ain-Latn">eci=</i> leave the accent of the base unchanged
			<Ref k="nakagawa2024" p="53" />; <Ref k="shiraishi2022" p="§5.1" />;
			<Ref k="sato2008" p="§2.6" />. They attach outside the prosodic word of the stem:
		</p>

		<table>
			<caption>Accent retention under person prefixes of the non-shifting class</caption>
			<thead>
				<tr>
					<th>base</th>
					<th>accent</th>
					<th>a= / eci= form</th>
					<th>accent</th>
					<th>gloss</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><i lang="ain-Latn">omare</i></td>
					<td><i lang="ain-Latn">omáre</i></td>
					<td><i lang="ain-Latn">a=omare</i></td>
					<td><i lang="ain-Latn">a=omáre</i></td>
					<td>'was put (somewhere)' (4th/indef.)</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">etu</i></td>
					<td><i lang="ain-Latn">etú</i></td>
					<td><i lang="ain-Latn">eci=etu</i></td>
					<td><i lang="ain-Latn">eci=etú</i></td>
					<td>'your (pl.) nose'</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">onaha</i></td>
					<td><i lang="ain-Latn">onáha</i></td>
					<td><i lang="ain-Latn">a=onaha</i></td>
					<td><i lang="ain-Latn">a=onáha</i></td>
					<td>'his/her mother' (4th/indef.)</td>
				</tr>
			</tbody>
		</table>

		<p>
			<i lang="ain-Latn">a=</i> and <i lang="ain-Latn">eci=</i> also do not trigger the vowel
			contraction that the shifting prefixes undergo in Saru and Chitose after the accent
			shift. The combined phonological evidence — no shift, no contraction — aligns with the
			morphosyntactic assessment in <Xr ch="person-marking-architecture" /> that
			<i lang="ain-Latn">a=</i> and <i lang="ain-Latn">eci=</i> are prosodic clitics, while
			<i lang="ain-Latn">ku=</i>, <i lang="ain-Latn">e=</i>, <i lang="ain-Latn">ci=</i>, and
			<i lang="ain-Latn">en=</i> are prefixes proper. The position-class arrangement of person
			affixes in the verb word is set out in <Xr ch="verb-word-template" />.
		</p>
	</S>

	<S t="Secondary accent on personal-number suffixes" id="secondary">
		<p>
			When a personal-number suffix (<i lang="ain-Latn">=an</i>,
			<i lang="ain-Latn">=as</i>) attaches to a vowel-final verb stem, the suffix carries a
			secondary (lower-level) accent alongside the primary stem accent
			<Ref k="shiraishi2022" p="§5.1" />. The verb <i lang="ain-Latn">iruska</i> 'be angry'
			with the plural suffix gives <i lang="ain-Latn">irúska=àn</i> (primary accent á on
			<i lang="ain-Latn">rú</i>, secondary accent à on <i lang="ain-Latn">àn</i>);
			<i lang="ain-Latn">ipe</i> 'eat' with <i lang="ain-Latn">=an</i> gives
			<i lang="ain-Latn">ipé=àn</i>. When the stem ends in a consonant, the secondary accent
			on the suffix is lost: <i lang="ain-Latn">cis=an</i> 'we cry' and
			<i lang="ain-Latn">sap=an</i> 'we go out' carry only the primary accent on σ1 (both
			stems have closed σ1 → 原則1) with no secondary peak on
			<i lang="ain-Latn">=an</i> <Ref k="shiraishi2022" p="§5.1" />. The number-suffix
			paradigm is described in <Xr ch="verb-word-template" /> and
			<Xr ch="person-marking-architecture" />.
		</p>
	</S>
</S>

<S t="Accent-neutral suffixes: -pa and the affiliative -hV" id="neutral-suffixes">
	<p>
		The plural suffix <i lang="ain-Latn">-pa</i> and the affiliative (possessed) suffix
		<i lang="ain-Latn">-hV</i> — realizing as <i lang="ain-Latn">-hi</i>,
		<i lang="ain-Latn">-he</i>, <i lang="ain-Latn">-ha</i> etc. according to the vowel-copy
		rule — are both accent-neutral: the stem's placement-rule accent survives into the
		suffixed form without adjustment <Ref k="nakagawa2024" p="53" />;
		<Ref k="tamura1996" />. They attach outside the prosodic word of the stem and do not
		produce the reapplication that the prefixal and applicative morphology triggers. The
		morphophonology of the affiliative suffix and the echo-vowel alternation are treated in
		<Xr ch="affiliative-suffix-morphophonology" />.
	</p>
</S>

<S t="Prosodic-word status as a morphological diagnostic" id="diagnostics">
	<p>
		The accent patterns reviewed in this chapter offer a phonological diagnostic for
		grammatical category that is independent of morphological segmentation. A morpheme that
		enters the prosodic word of its host and shifts the accent is a prefix in the prosodic
		sense; a morpheme that leaves the host accent untouched is a clitic or a non-incorporating
		suffix. Applied to the Hokkaido Ainu person-affix paradigm, the test produces: prefixes —
		<i lang="ain-Latn">ku=</i>, <i lang="ain-Latn">e=</i>, <i lang="ain-Latn">ci=</i>,
		<i lang="ain-Latn">en=</i>; clitics — <i lang="ain-Latn">a=</i>,
		<i lang="ain-Latn">eci=</i>
		<Ref k="nakagawa2024" p="52–53" />; <Ref k="shiraishi2022" p="§5.1" />. The same
		prosodic-word criterion distinguishes compound-internal structure (a single prosodic word,
		one accent peak) from phrasal juxtaposition (two prosodic words with independent accent
		peaks).
	</p>

	<p>
		The compound formation discussed here and the sandhi processes of Part V share the same
		domain boundary. Coda assimilation (<i lang="ain-Latn">r+t→tt</i>,
		<i lang="ain-Latn">n+s→ys</i>, etc.) applies most consistently within the prosodic word;
		the accent test provides an independent means of determining which phonological domain a
		given morpheme occupies before examining the assimilation data. These interactions are
		taken up in <Xr ch="coda-r-assimilation-sonorant-sandhi" /> and
		<Xr ch="personal-affix-sandhi-connected-speech-reduction" />. The underlying prosodic unit
		and the weight analysis are addressed in
		<Xr ch="mora-syllable-accent-vs-tone-analysis" />.
	</p>
</S>
