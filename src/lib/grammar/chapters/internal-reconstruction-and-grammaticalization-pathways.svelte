<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The scope and tools of internal reconstruction" id="scope-tools">
	<p>
		Ainu is a language isolate (<Xr ch="genetic-position-macro-comparison" />): the comparative
		method, which requires a set of related languages with regular correspondences, is unavailable.
		Three tools remain for recovering Ainu prehistory: <em>internal reconstruction</em>, which
		exploits alternations, paradigm irregularities, and dialect differences within Ainu itself;
		<em>contact-induced-change analysis</em>, drawing on the documented Japanese, Nivkh, and
		Tungusic contact layers; and <em>typological inference</em>, useful as a heuristic but carrying
		no independent probatory value <Ref k="alonso2022" p="§1" />. Internal reconstruction is by
		far the most powerful of the three, accounting for essentially all dialectal differences that
		can be connected to recoverable earlier forms. The time depth it can reach is shallow — roughly
		1,000 years — bounded by the 13th-century Great Migration that separated Common Ainu into its
		Hokkaido and Sakhalin branches <Ref k="alonso2022" p="§1, §4" />.
	</p>
	<p>
		The reconstructible ancestor of the modern Hokkaido varieties is termed <em>Proto-Ainu (PA)</em>;
		the immediate pre-Migration common ancestor is <em>Common Ainu (CA)</em>; what internal
		reconstruction reaches beyond PA through recursive application is termed <em>Pre-Proto-Ainu</em>
		(Pre-PA). The segmental inventory and the contested suprasegmental reconstruction (length versus
		pitch) are treated in <Xr ch="proto-ainu-segmental-reconstruction" />; the SA/KU contrast
		arising from the 13th-century split is treated in <Xr ch="sakhalin-and-kuril-ainu-contrast" />.
		This chapter focuses on grammatical morphology: what the alternation patterns within Hokkaido
		Ainu, together with the SA contrast, allow us to infer about the diachronic sources of bound
		morphemes and the grammaticalization clines that produced them.
	</p>
</S>

<S t="Grammaticalization pathways — an inventory" id="inventory">
	<p>
		The etymology of Hokkaido Ainu functional morphology is, by comparative standards, unusually
		transparent. As Alonso observes, "when it comes to functional words and TAM formatives, the
		etymology is still transparent" <Ref k="alonso2022" p="§3.1" />. The major pathways fall into
		four structural types. The theoretical framework for grammaticalization clines, layering, and
		renewal drawn on here is <Ref k="hoppertraugott2003" paren />.
	</p>

	<table>
		<thead>
			<tr>
				<th>grammaticalized morpheme(s)</th>
				<th>synchronic function</th>
				<th>lexical source</th>
				<th>pathway</th>
				<th>status</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">-(V)hV</i> (affiliative suffix)</td>
				<td>possessed/affiliative form of nouns</td>
				<td><A w="hi" gl="thing, time, place" /></td>
				<td>lost base-final vowel + noun hi → fused suffix</td>
				<td>‹contested› (two analyses, §<Xr ch="internal-reconstruction-and-grammaticalization-pathways" s="affiliative-hV">below</Xr>)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ruwe, hawe, siri, humi</i></td>
				<td>clause-final evidential formal nouns</td>
				<td>
					<A w="ru" gl="track, path" />, <A w="haw" gl="voice" />,
					<A w="sir" gl="appearance, land" />, <A w="hum" gl="sound, sensation" />
				</td>
				<td>sensory noun → possessed form → evidential marker</td>
				<td>partial grammaticalization; ‹corpus-confirmed›</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">e-, o-, ko-</i> (applicative prefixes)</td>
				<td>oblique-argument-introducing applicatives</td>
				<td>locative/relational nouns (specific sources unclear)</td>
				<td>relational noun → applicative prefix</td>
				<td>‹speculative›</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">-an, -as, -kar, -kor, -ne, -sak</i></td>
				<td>verbalizing/valency-changing suffixes</td>
				<td>
					free verbs <A w="an" gl="be, exist (SG)" />, <A w="as" gl="stand" />,
					<A w="kar" gl="make" />, <A w="kor" gl="have" />, <A w="ne" gl="be (COP)" />,
					<A w="sak" gl="lack" />
				</td>
				<td>free verb → bound verbalizer/valency suffix</td>
				<td>‹consensus›</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">an</i> (existential and aspectual)</td>
				<td>existential predicate; durative/progressive aspect</td>
				<td>posture verb 'sit (SG)' (<A w="a" gl="sit down" />; plural <A w="rok" gl="sit down (PL)" />)</td>
				<td>posture verb → existential → aspect auxiliary</td>
				<td>‹contested›</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">-p/-pe</i> (nominalizer)</td>
				<td>participant/thing nominalizer</td>
				<td><A w="pe" gl="thing, object" /></td>
				<td>free noun → clause-final nominalizer</td>
				<td>‹consensus›</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ne</i> (copula)</td>
				<td>copula in predicate-nominal clauses</td>
				<td>anaphoric pronoun <i lang="ain-Latn">ne</i></td>
				<td>anaphoric pronoun → copula</td>
				<td>‹speculative›</td>
			</tr>
		</tbody>
	</table>
</S>

<S t="The affiliative suffix -(V)hV: two accounts" id="affiliative-hV">
	<p>
		The <Xr ch="concept-form-affiliative-form">affiliative (possessed) suffix</Xr> surfaces in
		modern Hokkaido dialects as <i lang="ain-Latn">-(V)hV</i>, where both vowels vary with the
		base in complex ways. Two analyses of this distribution have been proposed, and the choice
		between them has direct consequences for the PA vowel inventory.
	</p>
	<p>
		Vovin (1993, via <Ref k="alonso2022" p="§2.1" />) attributed the distributional complexity to
		a 17-vowel PA system: the suffix vowel was selected through vowel harmony with the final vowel
		of the base. The machinery was extensive — twelve short and six long vowels — but all three
		major reviewers of the 1993 monograph found it unmotivated by the available evidence (Sidwell
		1996; Abondolo 1997; Witczak 1999, all via <Ref k="alonso2022" p="§1" />).
	</p>
	<p>
		Janhunen (2020, via <Ref k="alonso2022" p="§2.1" />) offers a more economical account via
		internal reconstruction. Pre-PA nouns were disyllabic: stem <i lang="ain-Latn">*CVC.V#</i>.
		When the second syllable reduced and was eventually lost, the lost vowel was reanalysed as an
		incipient affiliative marker. Subsequently, the common noun <A w="hi" gl="thing, time, place" />
		fused with this stranded vowel: base vowel + <i lang="ain-Latn">hi</i> → <i lang="ain-Latn">-(V)hV</i>.
		The word <A w="tek" gl="hand" /> illustrates the pathway: PA <i lang="ain-Latn">*tek.e</i>
		(disyllabic) → <i lang="ain-Latn">tek</i> with loss of second syllable; lost <i lang="ain-Latn">e</i>
		+ <i lang="ain-Latn">hi</i> → affiliative <i lang="ain-Latn">-ehe</i>. Alonso calls this "a
		triumph of internal reconstruction" and adopts it as the preferred account, concluding that the
		PA vowel system contained only the modern five vowels <Ref k="alonso2022" p="§2.1" />.
	</p>

	<Ex
		m="tek-ehe"
		g="hand-POSS"
		tr="(one's) hand (affiliative/possessed form)"
		cite="tamura1996"
		dial="SAR"
		note="Affiliative form of tek 'hand'. In the Janhunen–Alonso analysis, -ehe = lost base-final vowel e + noun hi 'thing'. The SA cognate shows tek-ihi (vowel i by analogy): Janhunen (2020, via Alonso 2022 §2.1)."
	/>

	<p>
		Convergent evidence from the ‹SA› varieties supports the underlying <i lang="ain-Latn">hi</i>
		analysis: in ‹SA›, the base consonant resurfaces in the affiliative form even when it is
		otherwise debuccalized — <i lang="ain-Latn">sik-ihi</i> 'eye-<small>POSS</small>' rather than
		the expected <i lang="ain-Latn">*sis-ihi</i>, which would follow from ‹SA›'s regular
		<i lang="ain-Latn">k → s/&#95;i</i> rule (see <Xr ch="final-h-history-and-sakhalin-length-reflex" />).
		The affiliative suffix must therefore preserve access to the underlying base consonant that is
		otherwise hidden by final debuccalization <Ref k="tangiku2022" p="§2.3, §5" />. Community
		discussion records the same pattern: ‹SA› <i lang="ain-Latn">san + hi = sanihi</i>,
		<i lang="ain-Latn">makan + hi = makanihi</i> (nukopoli, aynu-corpora Discord, 2024-12-16)
		<Ref k="aynucorporadiscord" />, consistent with the <i lang="ain-Latn">hi</i>-fusion account
		‹corpus-confirmed›. The morphophonological details of the modern affiliative paradigm are
		treated in <Xr ch="affiliative-suffix-morphophonology" />.
	</p>
	<p>
		The debate between the two accounts is ultimately ‹contested› rather than resolved: the
		five-vowel reconstruction has the stronger case given the reviewers' response to Vovin's system,
		but the internal reconstruction of a lost disyllabic base rests on inferences that cannot be
		confirmed without a comparative method.
	</p>
</S>

<S t="The evidential nominals: sensory nouns to clause-final markers" id="evidential-nominals">
	<p>
		The four formal nouns that build the Hokkaido evidential system — <i lang="ain-Latn">ruwe</i>,
		<i lang="ain-Latn">hawe</i>, <i lang="ain-Latn">siri</i>, <i lang="ain-Latn">humi</i> — are
		the <Xr ch="concept-form-affiliative-form">possessed forms</Xr> of four sensory nouns, each
		of which has grammaticalized into a clause-final evidential predication marker. The
		grammaticalization path in each case runs: sensory noun → possessed formal noun → clause-final
		evidential marker <Ref k="alonso2022" p="§3.1" />; <Ref k="kindaichi1936" />;
		<Ref k="hirosawa2026" p="65" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>formal noun</th>
				<th>source noun</th>
				<th>possessed form</th>
				<th>evidential value</th>
				<th>approx. Hokkaido corpus tokens</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">ruwe</i></td>
				<td><A w="ru" gl="track, path" /></td>
				<td><i lang="ain-Latn">ru-we(he)</i> 'the trace of —'</td>
				<td>direct / knowledge-based recognized fact</td>
				<td>c. 16,350</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">siri</i></td>
				<td><A w="sir" gl="appearance, land, weather" /></td>
				<td><i lang="ain-Latn">sir-i</i> 'the visible state of —'</td>
				<td>direct perception / situational</td>
				<td>c. 607</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">hawe</i></td>
				<td><A w="haw" gl="voice" /></td>
				<td><i lang="ain-Latn">haw-e(he)</i> 'the voice of —'</td>
				<td>reportative / hearsay</td>
				<td>c. 796</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">humi</i></td>
				<td><A w="hum" gl="sound, sensation" /></td>
				<td><i lang="ain-Latn">hum-i(hi)</i> 'the sound/feeling of —'</td>
				<td>non-visual sensory</td>
				<td>c. 200</td>
			</tr>
		</tbody>
	</table>

	<p>
		The grammaticalization is not complete: the lexical source meaning remains recoverable, and the
		formal nouns retain nominal properties (they take the full affiliative suffix:
		<i lang="ain-Latn">ruwehe</i>, <i lang="ain-Latn">humihi</i>) while losing others (they do
		not accept demonstrative or attributive modification in their evidential function)
		<Ref k="dalcorso2018" p="24–25" />. This partial grammaticalization is reflected in synchronic
		dialect layering: Tokachi and Ishikari use the bare concept forms
		<i lang="ain-Latn">ru / sir / haw / hum</i> where Saru and Chitose use the possessed forms,
		and Horobetsu has extended the possessed forms into conjunctive and adverbial-clause roles
		<Ref k="takahashi2018" p="107–112" />; <Ref k="takahashi2013" p="129–131" />. Chiri (1936,
		via <Ref k="hirosawa2026" p="65" />) already noted the cline from 'there is a trace of X' to
		'there is a fact of X' for <i lang="ain-Latn">ruwe</i>.
	</p>
	<p>
		The dialect distribution encodes the grammaticalization timeline as a spatial stratigraphy: bare
		concept forms (Tokachi) represent the least grammaticalized stage; possessed forms (Saru) the
		next; conjunction/adverbial function (Horobetsu) the most advanced. All three stages coexist
		synchronically across the Hokkaido dialect space — a textbook case of layering
		<Ref k="hoppertraugott2003" paren /> ‹corpus-confirmed› (corpus token counts above from string
		search on the Hokkaido 167,890-sentence corpus). The full semantics and synchronic distribution
		of each form belong to the evidential chapters: <Xr ch="ruwe-ne-inferential" />,
		<Xr ch="siri-ne-situational" />, <Xr ch="hawe-ne-reportative" />,
		<Xr ch="humi-ne-sensory" />; the overall schema is in <Xr ch="evidential-schema-overview" />;
		the formal defective noun class is defined in <Xr ch="formal-defective-nouns" />.
	</p>
	<p>
		The copula <A w="ne" gl="be, copula" /> that closes the evidential predication also has a
		grammaticalization history: Alonso identifies it as an anaphoric pronoun that developed a
		copular function <Ref k="alonso2022" p="§3.1" />. This shift is treated in
		<Xr ch="copula-ne-predicate-nominals" /> ‹speculative›.
	</p>
</S>

<S t="Free verbs grammaticalized as bound suffixes" id="free-verb-to-suffix">
	<p>
		The most transparent set of grammaticalization events in Ainu involves free verbs reanalysed as
		derivational suffixes on nouns and verbs. Alonso documents six such suffixes with unambiguous
		lexical sources (Alonso 2022 §3.1, Table 16; drawing on Dettmer 1989): <Ref k="alonso2022" />
	</p>

	<table>
		<thead>
			<tr>
				<th>suffix</th>
				<th>function</th>
				<th>attested example</th>
				<th>lexical source</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">-an</i></td>
				<td>inchoative verbalizer ('become N')</td>
				<td><i lang="ain-Latn">cuk-an</i> 'become autumn'</td>
				<td><A w="an" gl="be, exist (SG)" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">-as</i></td>
				<td>non-agentive verbalizer</td>
				<td><i lang="ain-Latn">ruyanpe-as</i> 'rain (vi.)'</td>
				<td><A w="as" gl="stand, be present" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">-kar</i></td>
				<td>action verbalizer ('make/do')</td>
				<td><i lang="ain-Latn">sake-kar</i> 'brew wine'</td>
				<td><A w="kar" gl="make, do" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">-kor</i></td>
				<td>possessive stative verbalizer</td>
				<td><i lang="ain-Latn">hon-kor</i> 'be pregnant'</td>
				<td><A w="kor" gl="have, hold, possess" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">-ne</i></td>
				<td>dynamic verbalizer ('become, go')</td>
				<td><i lang="ain-Latn">soy-ne</i> 'go outside'</td>
				<td><A w="ne" gl="be (copula)" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">-sak~-nak</i></td>
				<td>privative verbalizer ('be without')</td>
				<td><i lang="ain-Latn">tum-sak</i> 'be weak'</td>
				<td><A w="sak" gl="lack, be absent" /></td>
			</tr>
		</tbody>
	</table>
	<Ref k="alonso2022" p="§3.1, Table 16" />

	<p>
		The same free verbs continue in full predication and in compound verb constructions,
		maintaining a synchronic continuum between free and bound use rather than a categorical split.
		The morpheme database (mdb.aynu.org) corroborates the overlap: <i lang="ain-Latn">honkor</i> =
		<i lang="ain-Latn">hon</i> 'stomach' + <i lang="ain-Latn">kor</i> 'have' (conf. 0.85), and
		the compound verb <i lang="ain-Latn">kor an</i> (progressive) shows the same root in its free
		form <Ref k="alonso2022" p="§3.1" />. Community discussion adds evidence for ongoing productivity
		of the <i lang="ain-Latn">-kar</i> suffix in action-verbalizer derivations
		(<i lang="ain-Latn">nimawekar, osorokar, sikayekar, yaykara</i>; nukopoli, aynu-corpora
		Discord, 2024-11-12) <Ref k="aynucorporadiscord" /> ‹corpus-confirmed›.
	</p>

	<Ex
		m="hon-kor"
		g="stomach-have"
		tr="be pregnant"
		constructed
		note="Morphological illustration. The suffix -kor 'have' derives possessive stative verbs from body-part nouns. Alonso (2022 Table 16, §175); mdb decomposition conf. 0.85."
	/>

	<p>
		Related pathways in the functional vocabulary follow the same template: <A w="ani" gl="hold" />
		> instrumental/comitative particle 'with, by'; <A w="kusu" gl="reason, cause" /> > causal
		conjunction 'because'; <i lang="ain-Latn">hon + tom</i> 'belly + middle' > locative 'in the
		middle of' <Ref k="alonso2022" p="§3.1" />. These are treated in the postposition and
		clause-linkage chapters; they confirm that the free-to-bound pathway is an ongoing mechanism,
		not a closed Pre-PA residue.
	</p>
</S>

<S t="Aspectual an and the posture-verb pathway" id="aspectual-an">
	<p>
		The existential verb <A w="an" gl="be, exist (SG)" /> derives from a posture verb meaning 'sit
		down (SG)'; the suppletive plural <A w="rok" gl="sit down (PL)" /> corroborates the source,
		since the SG/PL suppletion retains the posture semantics <Ref k="alonso2022" p="§3.1" />.
		From existential predication, <i lang="ain-Latn">an</i> extends to durative and progressive
		aspect in the constructions <i lang="ain-Latn">kor an</i> and <i lang="ain-Latn">wa an</i>
		(see <Xr ch="existential-aspect-an-oka" />).
	</p>
	<p>
		A contested question is whether the personal suffix <i lang="ain-Latn">=an</i> (4th-person
		intransitive subject; also the inchoative <i lang="ain-Latn">-an</i> in the table above)
		derives from the same <i lang="ain-Latn">a=~an</i> root. Nakagawa and Itabashi treat
		<i lang="ain-Latn">an=</i> as the historically older form from which the reduced
		<i lang="ain-Latn">a=</i> prefix descends <Ref k="nakagawa2024" p="§person" />;
		<Ref k="itabashi2001" />. This derivation is disputed: nukopoli (aynu-corpora Discord,
		2026-04-29) notes that the high productivity of <i lang="ain-Latn">a=</i> as an independent
		prefix weighs against deriving it from the longer <i lang="ain-Latn">an=</i> form, and proposes
		an independent origin from the existential/aspectual root <Ref k="aynucorporadiscord" />
		‹contested›. The synchronic person paradigm, where the question bears on its distribution, is
		treated in <Xr ch="indefinite-fourth-person-paradigm" />.
	</p>
</S>

<S t="The nominalizers -p/-pe and the cep case" id="nominalizers">
	<p>
		The nominalizer suffix <i lang="ain-Latn">-p/-pe</i> derives participant nouns and thing-nouns
		from predicates. Its lexical source is the free noun <A w="pe" gl="thing, object" />, which
		shifted from independent nominal to clause-final derivational suffix by the same pathway as the
		evidential formal nouns above <Ref k="alonso2022" p="§3.2" />. The synchronic distribution of
		<i lang="ain-Latn">-p/-pe</i> and the co-occurring event/place nominalizer
		<i lang="ain-Latn">-i/-hi</i> (&lt; <i lang="ain-Latn">hi</i> 'thing, place') is treated in
		<Xr ch="nominalization-p-pe" />.
	</p>
	<p>
		The word <A w="cep" gl="fish" /> provides the most completely reconstructible example of this
		pathway and of internal reconstruction in Ainu generally. Its morphological analysis is:
	</p>

	<Ex
		m="ci=e-p"
		g="RES=eat-NMLZ"
		tr="fish (lit. 'the thing eaten [by all]')"
		ain="cep"
		cite="alonso2022"
		dial="SAR"
		note="Morphological reconstruction. Pre-PA *ti=(ʔ)e pe > PA */ti-ʔe-p/ > CA */ciʔep/ > Saru cep (glottal stop lost), Horobetsu ciʔep (glottal stop retained as an archaism), SA ceh (final stop debuccalized). Triple-corroborated: Alonso (2022 §4 / Table 18); mdb curated decomposition (ci=, e 'eat', -p NMLZ; conf. 1.0); community analysis (nukopoli, aynu-corpora Discord, 2023-12-06). The prefix ci= is glossed RES (resultative/inclusive) following Alonso 2022; a community alternative (nukopoli, 2023-12-21) proposes middle-voice for ci= here, parallel to the ci= discussed in the anticausative chapter."
	/>

	<p>
		The three-way comparison — Saru <i lang="ain-Latn">cep</i>, Horobetsu <i lang="ain-Latn">ciʔep</i>,
		SA <i lang="ain-Latn">ceh</i> — is Alonso's flagship illustration of the CA→dialect split
		<Ref k="alonso2022" p="§4, Table 18" />. Horobetsu retains the glottal stop
		<i lang="ain-Latn">*ʔ</i> from CA <i lang="ain-Latn">*/ciʔep/</i>, Saru has lost it, and the
		SA debuccalization (final <i lang="ain-Latn">p > h</i>) is the regular ‹SA› reflex. That three
		independent phonological processes left distinct residues corroborates the reconstruction in a
		way that a single-dialect analysis could not.
	</p>
	<p>
		A community refinement (nukopoli, aynu-corpora Discord, 2023-12-21) proposes that the
		<i lang="ain-Latn">ci=</i> prefix in this reconstruction reflects a middle/anticausative rather
		than resultative function — the same <i lang="ain-Latn">ci=</i> that produces
		intransitive/middle stems in modern Ainu (see <Xr ch="middle-anticausative-passive" />) — with
		the semantic reading 'the thing that gets-eaten (by itself)' rather than 'the thing that all
		eat' <Ref k="aynucorporadiscord" /> ‹speculative›. Both readings yield 'fish'; the
		middle-voice alternative is of interest because <i lang="ain-Latn">ci=</i> as a middle prefix
		is otherwise well-attested in the modern grammar, whereas the resultative/inclusive reading
		presupposes a PA function of <i lang="ain-Latn">ci=</i> that is less clearly distinct in the
		modern system.
	</p>
</S>

<S t="The applicative prefixes — a disputed diachrony" id="applicatives">
	<p>
		The applicative prefixes <i lang="ain-Latn">e-</i>, <i lang="ain-Latn">o-</i>, and
		<i lang="ain-Latn">ko-</i> introduce oblique arguments as core verbal arguments. They are
		treated functionally in <Xr ch="applicative-system-overview" /> and individually in
		<Xr ch="applicative-e" />, <Xr ch="applicative-ko" />, <Xr ch="applicative-o" />;
		<Ref k="bugaeva2006" /> and <Ref k="bugaeva2010" /> remain the primary analytical references.
		Their diachronic origin Alonso assigns to the grammaticalization of locative/relational nouns
		into verb prefixes, a widespread pathway typologically <Ref k="alonso2022" p="§3.1" />;
		<Ref k="peterson2007" paren />. The correspondence is transparent in type — relational nouns
		shifting into applicative prefixes — but the specific source nouns for
		<i lang="ain-Latn">e-</i> and <i lang="ain-Latn">o-</i> have not been individually identified
		with confidence, making the claim ‹speculative› for those two prefixes.
	</p>
	<p>
		A more structurally ambitious proposal appears in the community discussion. Antitwilight
		(aynu-corpora Discord, 2026-06-04) argues that the applicative prefixes were originally
		<em>pre-nominal</em>, not pre-verbal: certain compound nouns and fixed adverbs of the form
		<i lang="ain-Latn">*e-ka-nok</i>, <i lang="ain-Latn">*ka-o-suy</i> would then be nominal
		collocations later reanalysed as verb-prefix constructions when the prefix migrated leftward
		to the verbal host <Ref k="aynucorporadiscord" /> ‹speculative›. The hypothesis draws on the
		well-attested presence of applicative-prefix forms inside nominal compounds in the modern
		language (see <Xr ch="noun-incorporation-oblique-polysynthesis-debate" />) but has no direct
		support in the Handbook sources read for this chapter. It is noted here as a community-generated
		lead that warrants investigation of the old compound-noun record before further evaluation.
	</p>
</S>

<S t="Layering, renewal, and what the dialect record shows" id="layering">
	<p>
		Internal reconstruction in Ainu proceeds primarily through the synchronic dialect record, where
		different dialects have advanced different distances along the same grammaticalization clines,
		leaving stages of a single pathway distributed across the Hokkaido dialect space. Two
		contrasting patterns emerge: layering (coexistence of older and newer forms with overlapping
		function) and renewal (the newer form replaces, rather than supplements, the older).
	</p>
	<p>
		The evidential nominals are the clearest layering case. The Tokachi bare concept forms
		<i lang="ain-Latn">ru / sir / haw / hum</i>, the Saru possessed forms
		<i lang="ain-Latn">ruwe / siri / hawe / humi</i>, and the Horobetsu conjunctive extensions
		of the same possessed forms coexist synchronically as three stages of one cline. The forms at
		each stage are not synonymous across all contexts, and the distributional differences between
		stages reveal the grammaticalization constraints: the possessed form (<i lang="ain-Latn">ruwe</i>)
		has wider contextual distribution than the bare concept form (<i lang="ain-Latn">ru</i>), and
		the bare form retains combinatorial restrictions that the possessed form has shed
		<Ref k="takahashi2013" p="129–131" />; <Ref k="takahashi2018" p="107–112" />.
	</p>
	<p>
		The plural marker in the Saru/Ishikari region illustrates renewal rather than layering. The
		older plural form <i lang="ain-Latn">ci</i> (surviving in Horobetsu, Shizunai, Shiranuka)
		was replaced in the Saru/Ishikari core by an innovated <i lang="ain-Latn">pa</i>, which spread
		and displaced the older form in those dialects rather than accumulating beside it
		<Ref k="nakagawafukazawa2022" p="§4.2" />. The corresponding ‹SA› form <i lang="ain-Latn">(a)hci</i>
		is likely the archaic stage, placing <i lang="ain-Latn">ci</i> as intermediate
		<Ref k="tangiku2022" p="§7.5" />.
	</p>
	<p>
		The free-verb-to-bound-suffix pathways (§ above) offer the purest layering: the root
		<A w="kor" gl="have, hold" /> functions simultaneously as a free transitive verb, as a
		compound element in the progressive <i lang="ain-Latn">kor an</i>, and as the bound
		possessive-verbalizer suffix <i lang="ain-Latn">-kor</i>. No Hokkaido dialect has lost any of
		these uses; the layers accumulated without replacement. Reconstruction of a relative chronology
		for these layers — which function is oldest, and when the bound use separated from the free —
		remains out of reach given the approximately 1,000-year horizon of reliable internal
		reconstruction and the absence of any direct chronological evidence internal to Hokkaido Ainu
		<Ref k="alonso2022" p="§1, §4" />.
	</p>
</S>

<S t="Classifier relics — a cautionary assessment" id="classifiers">
	<p>
		Alonso (2022 §3.2), following Austerlitz, Kindaichi, and Chiri (1936), considers whether
		certain final consonants of body-part and nature nouns are relics of an earlier classifier or
		noun-class system in Pre-PA. The proposed class markers include: <i lang="ain-Latn">*k</i>
		(body/round: <i lang="ain-Latn">tek</i> 'hand', <i lang="ain-Latn">sik</i> 'eye',
		<i lang="ain-Latn">nok</i> 'egg'); <i lang="ain-Latn">*t</i> (long/rolling:
		<i lang="ain-Latn">pet</i> 'river', <i lang="ain-Latn">not</i> 'chin',
		<i lang="ain-Latn">at</i> 'cord'); <i lang="ain-Latn">*m</i> (long/small:
		<i lang="ain-Latn">kem</i> 'needle', <i lang="ain-Latn">yam</i> 'chestnut'); and
		<i lang="ain-Latn">*r</i> (elongated: <i lang="ain-Latn">ker</i> 'footwear',
		<i lang="ain-Latn">sir</i> 'rock') <Ref k="alonso2022" p="§3.2, Table 17–18" />.
	</p>
	<p>
		Alonso himself rejects the hypothesis on diagnostic grounds: classifier systems typically
		require that the class marker occur independently as a free morpheme or in some derivational
		use beyond noun-final position. Ainu's proposed class-final consonants fail this test — they
		are invariably noun-final and never function as independent words or derivational triggers. He
		concludes that the pattern "illustrates the dangers of wishing to see too much in the data"
		(Alonso 2022 §3.2). The word-final consonant inventory of Hokkaido Ainu is phonologically
		constrained (see <Xr ch="consonant-inventory" /> and <Xr ch="hokkaido-phonological-microvariation" />)
		but does not cross-classify nouns in any grammatically active synchronic sense. The productive
		numeral classifiers of modern Hokkaido Ainu — <i lang="ain-Latn">-p~-pe</i> (things) and
		<i lang="ain-Latn">-n~-iw</i> (people, from <A w="aynu" gl="human being" />) — derive from
		the common nouns <i lang="ain-Latn">pe</i> and <i lang="ain-Latn">aynu</i> through the
		noun-to-nominalizer pathway already attested in the <i lang="ain-Latn">-p/-pe</i> nominalizer
		above; they are treated in <Xr ch="numeral-classifiers-ordinals-and-quantifier-syntax" />
		‹speculative›.
	</p>
</S>
