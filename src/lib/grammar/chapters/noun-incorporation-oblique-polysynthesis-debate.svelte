<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Oblique incorporation via the applicative" id="overview">
	<p>
		The basic architecture of <Xr ch="noun-incorporation-object">noun incorporation</Xr> in
		Hokkaido Ainu is the person-affix diagnostic: when a nominal stem merges with a verb, the
		person index moves to precede the entire noun-verb complex, making the incorporation a
		one-word structure <Ref k="nakagawa2024" p="482–483" />; <Ref k="satoni2022" p="§2" />.
		Object (patient) and patient-like subject incorporation — the overwhelming majority —
		follow this path directly. The route for oblique participants is different: an instrument, a
		location, a source, a purpose, or a comitative argument cannot incorporate until an
		<Xr ch="applicative-system-overview">applicative</Xr> prefix has first promoted it to
		core-object status <Ref k="shibatani1990" p="62, 66" />; <Ref k="nakagawa2024" p="484" />;
		<Ref k="satoni2022" p="§1" />. The further details of how applicatives stack and feed
		relativization belong to <Xr ch="applicative-stacking-relativization-feeding" />; the
		present chapter develops the oblique-to-incorporated derivation itself and the theoretical
		debate over what that derivation implies.
	</p>

	<p>
		Shibatani (1990: 67) traces the derivation through three steps, illustrated with the verb
		<A w="kuykuy" gl="bite" />. In the source phrase, the comitative participant
		<i lang="ain-Latn">pone tura</i> ('bone' + comitative postposition
		<i lang="ain-Latn">tura</i> 'with') is a peripheral argument:
		<i lang="ain-Latn">nea cep pone tura a=kuykuy</i> 'I bit the fish with its bones'. The
		applicative <A w="ko-" gl="applicative (goal / comitative)" /> promotes
		<i lang="ain-Latn">pone</i> to an additional core object, dropping the postposition and
		yielding the intermediate <i lang="ain-Latn">nea cep pone a=ko-kuykuy</i>. The newly
		created object then incorporates: the person prefix <i lang="ain-Latn">a=</i> moves
		outside the whole complex.
	</p>

	<Ex
		id="pone-ko-kuykuy"
		m="nea cep a=pone-ko-kuykuy"
		g="that fish 4.A=bone-APPL-bite"
		tr="I bit the fish with its bones."
		cite="shibatani1990:67"
		dial="HK"
		note="Shibatani ex. 122, stage 3 of the three-step derivation. The person prefix a= (4th person transitive agent) sits outermost, proving that pone-ko-kuykuy is a single word. The original patient nea cep 'that fish' remains as the surface transitive object."
	/>

	<p>
		Two properties of the result bear on the theoretical debate in §<Xr
			ch="noun-incorporation-oblique-polysynthesis-debate"
			s="debate"
		/>. First, the affix ordering is not arbitrary: the incorporated noun sits outside the
		applicative, which sits inside the verb root — the order applicative-inside /
		incorporated-noun-outside mirrors the derivational history, consistent with what Baker
		(1988) terms the Mirror Principle <Ref k="baker1988" paren />; <Ref k="shibatani1990"
			p="70–71"
		/>. Second, the entire sequence remains a single verb word, because no person index
		intervenes between the incorporated noun and the root.
		<Ref k="kaiser1998" /> examines the applicative–incorporation interaction in Ainu
		systematically; the constraints she identifies align with the analysis in Shibatani
		(1990) and Nakagawa (2024: 484).
	</p>
</S>

<S t="Postposition–applicative correspondences" id="correspondences">
	<p>
		Each postposition or case relation that can be expressed obliquely has a corresponding
		applicative encoding the same relation as a core object, and only through that applicative
		can the noun incorporate. Nakagawa (2024: 484) summarises the pairings; the table below
		assembles them alongside the relevant applicative prefix and an incorporated-form gloss.
	</p>

	<table>
		<thead>
			<tr>
				<th>oblique marker / case</th>
				<th>applicative</th>
				<th>semantic role</th>
				<th>incorporated form</th>
				<th>meaning</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">ani</i> 'with (instrument)'</td>
				<td><i lang="ain-Latn">e-</i></td>
				<td>instrument</td>
				<td><i lang="ain-Latn">at-e-uk</i></td>
				<td>'catch with a net' (cf. <i lang="ain-Latn">at ani uk</i>)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">or ta / un</i> 'at / to'</td>
				<td><i lang="ain-Latn">e-</i> / <i lang="ain-Latn">ko-</i></td>
				<td>locative / allative</td>
				<td><i lang="ain-Latn">pira-ko-hokuste</i></td>
				<td>'fall toward a cliff' (cf. <i lang="ain-Latn">pira or un hokuste</i>)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">kusu</i> 'for (purpose)'</td>
				<td><i lang="ain-Latn">e-</i></td>
				<td>purpose</td>
				<td><i lang="ain-Latn">turepta-e-arpa</i></td>
				<td>'go to dig lily-bulbs' (cf. <i lang="ain-Latn">turepta kusu arpa</i>)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">tura</i> 'with (comitative)'</td>
				<td><i lang="ain-Latn">ko-</i></td>
				<td>comitative</td>
				<td><i lang="ain-Latn">mun-ko-tata</i></td>
				<td>'chop with grass/scraps'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">or un</i> 'to (place)'</td>
				<td><i lang="ain-Latn">o-</i></td>
				<td>goal (place only)</td>
				<td><i lang="ain-Latn">o-tumi-osma</i></td>
				<td>'war arose there' (cf. ambiguous <i lang="ain-Latn">tumi osma</i> 'war began')</td>
			</tr>
		</tbody>
	</table>

	<p>
		Sources: <Ref k="nakagawa2024" p="484" />; <Ref k="shibatani1990" p="62–66" />;
		<Ref k="satoni2022" p="§1" />. The <A w="o-" gl="applicative (allative, place)" />
		applicative is restricted to place nouns and is rare in prose
		<Ref k="nakagawa2024" p="198–199" />; Shibatani (1990: 63) notes that the sequence
		<i lang="ain-Latn">o-tumi-osma</i>, with the applicative, is unambiguously incorporated,
		whereas bare <i lang="ain-Latn">tumi osma</i> is ambiguous between a phrase and a compound
		in third-person contexts (see §<Xr
			ch="noun-incorporation-oblique-polysynthesis-debate"
			s="word-boundary"
		/>).
	</p>

	<p>
		A corpus example illustrates the comitative feed in a running text. Nakagawa (2024: 198)
		cites a Chitose narration in which two coordinate clauses apply
		<i lang="ain-Latn">ko-</i> to the comitative participants
		<A w="mun" gl="grass, weeds" /> and <A w="toy" gl="earth, soil" />, incorporating both
		into the verb <A w="tata" gl="chop, mince" />:
	</p>

	<Ex
		m="a=mun-ko-tata a=toy-ko-tata ayne"
		g="4.A=grass-APPL-chop 4.A=earth-APPL-chop CONJ"
		tr="(I) chopped it with grass and chopped it with earth — "
		cite="nakagawa2024:197"
		dial="CHI"
		place="Nakagawa ex. 190"
		note="The ko- applicative encodes the comitative participant ('with'); the comitative postposition tura is dropped. The person prefix a= (4th person transitive agent) sits outside the noun-verb complex in each clause, confirming one-word status. The object of the chopping — the demon's flesh — is recoverable from context and left unexpressed."
	/>

	<p>
		Once the oblique has been applicativized and then incorporated, the resulting verb word is
		structurally identical to an ordinary object-incorporated compound; the derivational history
		is preserved only in the affix order (applicative inside the noun) and in meaning.
		<Ref k="kaiser1998" /> treats the applicative–incorporation interaction as a single system
		on these grounds.
	</p>
</S>

<S t="Adverb incorporation and stacking limits" id="adverb-stacking">
	<p>
		Adverbs incorporate directly into the verb without any applicative prerequisite. The
		mechanism drops the adverbial suffix <i lang="ain-Latn">-no</i> from the basic adverb form
		and places the adverb stem immediately before the verb root
		<Ref k="shibatani1990" p="71–72" />; <Ref k="nakagawa2024" p="484, 492" />. The minimal
		pair for <A w="pirka-no" gl="well, finely" /> illustrates the contrast:
	</p>

	<Ex
		m="pirka-no a=ipere"
		g="well 4.A=feed"
		tr="(I) fed them well."
		constructed
		note="Phrasal form; pirka-no 'well' is an adverb outside the verb word, shown by the person prefix a= sitting on ipere alone."
	/>

	<Ex
		m="a=pirka-ipere"
		g="4.A=well-feed"
		tr="(I) fed them well."
		cite="shibatani1990:72"
		dial="HK"
		note="Incorporated form; -no is dropped and the person prefix a= precedes the entire adverb-verb complex, proving one-word status."
	/>

	<p>
		A noun and an adverb may co-incorporate — Shibatani (1990: 72) cites
		<i lang="ain-Latn">kiraw-riki-kur-roski</i> 'raise the horns high', with the noun
		<i lang="ain-Latn">kiraw</i> 'horn' and the adverb <i lang="ain-Latn">riki</i>
		'high, up' both inside one verb word. The one-noun-at-a-time limit is the productive
		norm: Shibatani (1990: 72) states that two independently incorporable nouns cannot
		ordinarily stack. Nakagawa (2024: 488) records rare exceptions
		(<i lang="ain-Latn">cep-ya-o-kuta</i> 'dump fish onto the shore',
		<i lang="ain-Latn">itak-mak-kus-te</i> 'use hidden words'), which he places at the
		lexicalized fringe of the system rather than as evidence for productive double-NI. The
		quasi-incorporation strategy discussed in §<Xr
			ch="noun-incorporation-oblique-polysynthesis-debate"
			s="markedness-qi"
		/> is a separate, structurally different response to the ceiling on NI — it handles
		cases where NI is grammatically blocked, not cases where noun stacking would otherwise
		be possible.
	</p>
</S>

<S t="The syntactic-vs-lexicalist debate: positions catalogued" id="debate">
	<p>
		Ainu noun incorporation has attracted theoretical attention because it sits uncomfortably
		within any single prior account. Shibatani (1988: 210–211) reviewed three frameworks at
		the 1988 LSJ annual meeting — Relational Grammar, Mithun's semantic account, and Baker's
		syntactic derivation — finding each insufficient on its own; the 1988 source is a
		one-page abstract, and the extended discussion appears in Shibatani (1990: 60–73).
		Subsequent contributions from Satō and Bugaeva have refined the picture further. The
		positions are catalogued below with evidence grades.
	</p>

	<table>
		<thead>
			<tr>
				<th>position</th>
				<th>holder(s)</th>
				<th>core claim</th>
				<th>grade</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Relational Grammar</td>
				<td>Perlmutter &amp; Postal (1984), reviewed in <Ref k="shibatani1988" p="210" /></td>
				<td>only <em>initial</em> grammatical subjects and objects can incorporate</td>
				<td>‹contested› — the grammatical-relation requirement is partly supported, but
					'initial relations' is too restrictive given that applicative-derived objects
					also incorporate</td>
			</tr>
			<tr>
				<td>semantic / Patient-targeting</td>
				<td><Ref k="mithun1984" /></td>
				<td>NI targets Patients on semantic grounds, following a four-type developmental
					hierarchy (I → IV); NI is a lexical operation akin to compounding</td>
				<td>‹contested› — Satō's Type IV (natural-force transitive subject NI) falsifies
					the Patient-only characterization; the lexical-compounding parallel is
					undermined by the near-absence of pure noun-noun compounds in the Ainu lexicon
					‹contested›</td>
			</tr>
			<tr>
				<td>syntactic head-movement</td>
				<td><Ref k="baker1988" /></td>
				<td>NI = N-to-V head-movement regulated by ECP and Case theory; applicative
					formation = P-incorporation; predicts that unaccusative clauses cannot
					host applicative or P-incorporation</td>
				<td>‹contested› — falsified for Ainu by the unaccusative-applicative data (see
					below); the Mirror Principle argument for a syntactic derivation partially
					survives even if Case-theoretic details do not</td>
			</tr>
			<tr>
				<td>hybrid (grammatical relation + semantic role)</td>
				<td><Ref k="shibatani1988" p="210–211" />; <Ref k="shibatani1990" p="60–73" /></td>
				<td>neither semantic role alone nor grammatical relation alone suffices; Ainu NI
					targets the Patient-subject of intransitives and the object of transitives
					(including applicative-derived objects); obliques incorporate only via
					applicative, confirming that grammatical object status is required</td>
				<td>‹contested› — the strongest reading of the accessible data; Satō's
					subsequent revision narrows the semantic component from 'Patient' to 'low
					agentivity'</td>
			</tr>
			<tr>
				<td>two-type NI (lexical + syntactic)</td>
				<td>Shibatani (1992), via <Ref k="satoni2022" p="§1" /></td>
				<td>Ainu may carry both a lexical-component and a syntactic-component NI; the
					two types are not mutually exclusive</td>
				<td>‹speculative› — the 1992 position is reported second-hand via Satō (2022);
					not operationalized against corpus data in the accessible sources</td>
			</tr>
			<tr>
				<td>low-agentivity (not unaccusativity)</td>
				<td><Ref k="sato2008" p="221–227" />; <Ref k="sato2016" p="83–88" />;
					<Ref k="satoni2022" p="§1, §5" /></td>
				<td>because Ainu has natural-force transitive subject NI (Type IV), the
					unaccusative account fails; the defining property is the incorporated noun's
					low degree of agentivity; four types ranked by a markedness calculus</td>
				<td>consensus among the sources consulted for this domain</td>
			</tr>
			<tr>
				<td>NI⊃QI accessibility hierarchy</td>
				<td><Ref k="sato2016" p="88–92" />; <Ref k="satoni2022" p="§6" /></td>
				<td>NI and quasi-incorporation form one accessibility scale; where NI is blocked
					by markedness, quasi-incorporation fills the gap</td>
				<td>‹corpus-suggested› — Satō's Chitose counts support the hierarchy, but the
					frequencies come from one narrator</td>
			</tr>
			<tr>
				<td>Baker-parameter polysynthesis</td>
				<td><Ref k="bugaeva2014" /></td>
				<td>Ainu is polysynthetic in Baker's sense (holophrastic argument encoding)
					but deviates from the Mohawk prototype in word order,
					<i lang="ain-Latn">wh</i>-in-situ, and unrestricted morphological causatives</td>
				<td>‹contested› — the 2014 source is a one-page symposium abstract; full
					argument not published in the accessible corpus</td>
			</tr>
			<tr>
				<td>grammatical constraints &gt; semantic specificity</td>
				<td><Ref k="yoshida2013" p="173" /></td>
				<td>in Chitose data (compared with a Sakhalin sample), grammatical constraints
					outrank the semantic specificity constraint on incorporated nouns</td>
				<td>‹contested› — small sample; corroborates the markedness calculus but does not
					decide between a syntactic and lexicalist mechanism</td>
			</tr>
		</tbody>
	</table>

	<p>
		Baker's Case-theoretic prediction affords the clearest empirical test the debate contains.
		Baker (1988) derives from Case theory that unaccusative clauses cannot undergo applicative
		or P-incorporation, because the internal argument already fills the available Case position
		<Ref k="baker1988" paren />. Ainu falsifies this directly: applicatives attach freely to
		unaccusative bases, yielding objects that can then incorporate. Shibatani (1990: 66) cites
		<i lang="ain-Latn">mokor a=e-wen</i> 'I missed sleeping' and
		<i lang="ain-Latn">sake a=e-niste</i> 'I am strong at wine', both with
		<i lang="ain-Latn">e-</i> on an unaccusative base, as the falsifying data
		<Ref k="shibatani1990" p="66" /> ‹contested›. This result disfavours the specific
		Case-theoretic derivation without settling whether an alternative syntactic mechanism
		or a lexicalist account better describes the system.
	</p>

	<p>
		Shibatani's hybrid position requires reference to both the semantic role (low agentivity)
		and the grammatical position (derived or original object) of the incorporated element.
		Satō (2008: 226; 2022, §1) revises the semantic-role component: natural-force transitive
		subjects also incorporate (Type IV, 1.7% of Chitose tokens), so 'Patient' and 'unaccusative
		subject' are both too narrow. The correct generalisation is the incorporated noun's low degree
		of agentivity — a property shared by patients, natural forces, and possessed body-parts —
		and no other currently defined property predicts all four types jointly
		<Ref k="satoni2022" p="§1" />. Shibatani's grammatical-relation requirement (object or
		patient-subject, including applicative-derived objects) survives the revision intact.
	</p>

	<p>
		Community discussion in the aynu-corpora Discord has noted that Ainu has very few
		pure-noun endocentric or exocentric compounds — constructions built solely from two nouns
		without a verbal head — with nominal formation concentrated on verb stems
		(antitwilight, aynu-corpora Discord, June 2026; <Ref k="aynucorporadiscord" />) ‹contested›.
		Taken at face value, this would contrast Ainu with the kind of free lexical noun-noun
		compounding that Mithun (1984) treats as the prototype of Type I NI
		<Ref k="mithun1984" paren />, lending support to treating Ainu NI as morphologically
		integrated into the verbal system. The observation is a community-proposed lead and has not
		been submitted to systematic quantification across the corpus.
	</p>

	<p>
		A related terminological divide runs through the valency literature and is relevant to the
		syntactic-vs-lexicalist question. The prefix <A w="i-" gl="antipassive / generic object" />
		is analysed as an antipassive on syntactic, semantic, and discourse grounds by Bugaeva
		(2021), and labelled accordingly by Nakagawa (2024: 190–192) and Ijäs (Lesson 9)
		<Ref k="bugaeva2021antip" />; <Ref k="ijas2023" />. Satō (2008: 232–233) treats the same
		prefix as a derivational marker 'people, someone' without invoking the antipassive category
		‹contested›. The antipassive analysis presupposes a syntactic operation demoting a
		grammatical object; the derivational analysis is compatible with a fully lexicalist account
		of the same data. The origin dispute and fuller analysis are in
		<Xr ch="antipassive-detransitive-i" />.
	</p>
</S>

<S t="Satō's markedness calculus and the NI⊃QI hierarchy" id="markedness-qi">
	<p>
		Satō (2016: 88; 2022, §5) assigns a markedness penalty to each NI type by summing
		restriction factors and subtracting rescue factors. The penalty scores differ between
		the 2016 article and the 2022 Handbook chapter in their absolute values, but the rank
		order and the Chitose frequencies — drawn from the late Shirasawa Nabe's corpus, a
		single narrator — are identical across both sources. The table records both sets of
		scores; Satō (2022, §5.7) himself describes them as "tentatively defined"
		<Ref k="satoni2022" p="§5" />; <Ref k="sato2016" p="84–88" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>NI type</th>
				<th>Chitose frequency</th>
				<th>net penalty (2022 / 2016)</th>
				<th>dominant rescue factor</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Object NI</td>
				<td>85.9% (444 tokens)</td>
				<td>0 / 0</td>
				<td>—</td>
			</tr>
			<tr>
				<td>Natural-force intransitive subject NI
					(<i lang="ain-Latn">sir-pirka</i>, <i lang="ain-Latn">me-an</i>)</td>
				<td>6.8% (35)</td>
				<td>5 / 2</td>
				<td>Backgrounding: natural-force noun (−5 / −8)</td>
			</tr>
			<tr>
				<td>Possessor-requiring intransitive subject NI (body-part; possessor stranded)</td>
				<td>5.6% (29)</td>
				<td>6 / 3</td>
				<td>Backgrounding (−5 / −8) + Reflexive interpretation (−14 / −9)</td>
			</tr>
			<tr>
				<td>Natural-force transitive subject NI
					(<i lang="ain-Latn">rir-tursere</i>, <i lang="ain-Latn">apto-kar</i>)</td>
				<td>1.7% (9)</td>
				<td>9 / (varies)</td>
				<td>Backgrounding: natural-force noun</td>
			</tr>
			<tr>
				<td><strong>Possessor-requiring Object NI</strong></td>
				<td><strong>0% (0 tokens)</strong></td>
				<td><strong>≥ 10 (ungrammatical)</strong></td>
				<td><em>no reflexive rescue available for an object position</em></td>
			</tr>
		</tbody>
	</table>

	<p>
		Restriction factors: Subject NI [+10], Possessor Stranding [+15 in Satō 2022 / +10 in
		Satō 2016], Ambiguity [+4 in 2022 / +7 in 2016]. Rescue factors: Backgrounding [−5 in
		2022 / −8 in 2016], Reflexive interpretation [−14 in 2022 / −9 in 2016]. The absolute
		values are tentative; the stable result is the rank order and the zero-frequency gap at
		the bottom ‹corpus-suggested›.
	</p>

	<p>
		The systematic zero at the foot of the table arises because the inflectional possessor
		that body-part nouns require makes the incorporated noun definite and thereby removes the
		reflexive-rescue option. Satō (2022, §4) illustrates the ungrammatical gap with
		<i lang="ain-Latn">*a=i-par-oyki</i> 'I am fed by others' (lit. 'fed at the mouth'):
		<i lang="ain-Latn">i=</i> would supply the possessor for <A w="par" gl="mouth" />,
		but <i lang="ain-Latn">i=</i> on an object creates a definite, non-reflexive reading
		that blocks the rescue <Ref k="satoni2022" p="§4" />.
	</p>

	<p>
		This gap is filled by what Satō terms quasi-incorporation (QI) —
		<i lang="ain-Latn">[O V]</i> units that are tight, idiomatic, and non-compositional
		in meaning but remain transitive: the person index for the main object sits outside
		the QI complex as a whole, whereas in true NI the person index precedes the
		incorporated noun and the result is intransitive <Ref k="nakagawa2024" p="494–498" />;
		<Ref k="satoni2022" p="§6" />. Nakagawa (2024: 494–498) calls the same items
		<i lang="ain-Latn">連動詞</i> (serial verbs / third-class verbs). The
		<Xr ch="noun-incorporation-object" /> chapter lists the QI inventory in full; the example
		below shows the transitive structure that distinguishes it from NI:
	</p>

	<Ex
		id="qi-askeuk"
		m="ku=kor yupi ney pak en=askeuk wa"
		g="1SG.A=have elder.brother ever only 1SG.O=invite CONJ"
		tr="My elder brother always invited me, and …"
		cite="nakagawa2024:497"
		dial="ISH"
		place="Nakagawa ex. 1139, after Sunazawa 1983: 182"
		note="askeuk (lit. 'hand-take') is a QI compound meaning 'invite'; the first-singular-object prefix en= sits outside the entire askeuk complex, showing that the compound stays transitive. Under true NI, the incorporated noun would intransitivize the verb and the outer index would be a subject suffix."
	/>

	<p>
		The NI⊃QI accessibility hierarchy that Satō (2016: 88–92; 2022, §6) derives runs:
		Object NI &gt; Natural-force intransitive subject NI &gt; Possessor-requiring intransitive
		subject NI &gt; Natural-force transitive subject NI &gt; Possessor-requiring Object NI —
		with NI covering the left-hand, accessible portion and QI taking over once NI is
		structurally or semantically blocked. The hierarchy extends Mithun's four-type scale into
		the QI domain and provides a unified account of why certain noun-verb collocations
		lexicalize as NI while others lexicalize as QI
		<Ref k="sato2016" p="88–92" />; <Ref k="satoni2022" p="§6–7" />.
	</p>

	<p>
		A register asymmetry runs across the whole system. Nakagawa (2024: 480) notes that
		incorporation is commoner in verse than in prose or conversation; Ainu rarely
		incorporates two nouns into one verb. The verse preference is consistent with
		observations in Mithun (1984) that NI often develops in rhetorically dense contexts
		<Ref k="mithun1984" paren />, though the Ainu data do not support a diachronic
		claim about direction of change ‹speculative›.
	</p>
</S>

<S t="Third-person undecidability" id="word-boundary">
	<p>
		The person-affix test that defines incorporation fails for third-person contexts.
		Hokkaido Ainu marks third-person A and O with a zero morph: a sequence like
		<i lang="ain-Latn">cep koyki</i> has no surface index to place inside or outside, so the
		test cannot determine whether the sequence is a phrasal <i lang="ain-Latn">cep koyki</i>
		or an incorporated <i lang="ain-Latn">cep-koyki</i>
		<Ref k="nakagawa2024" p="482" />; <Ref k="shibatani1990" p="62" />. For any incorporable
		pair with two third-person arguments, lexicographic representation and interlinear glossing
		must choose between the two analyses without a decisive test.
	</p>

	<p>
		Two secondary diagnostics are sometimes invoked but neither is conclusive in the general
		case. Accent and intonation might separate a compound from a phrase, but Nakagawa (2024:
		482) states that no firm basis for an accentual test has been established. A derivational
		prefix on the nominal-verbal sequence (e.g. an applicative over the whole pair) proves
		one-word status when attested, since derivational morphology cannot straddle two separate
		words; but the prefixed form and the bare form are distinct constructions and the
		diagnostic applies only where the prefixed form independently exists. The open-class-verb
		cases — <i lang="ain-Latn">apto as</i> 'rain fell', <i lang="ain-Latn">upas as</i>,
		<i lang="ain-Latn">rera as</i> — are formally undecidable in the third person, and
		Nakagawa (2024: 493–494) leaves their word-boundary status open.
	</p>

	<p>
		Where the fourth person replaces the third, the test is again decisive. The fourth-person
		subject suffix <i lang="ain-Latn">=an</i> is licensed only on intransitives; its presence
		on a noun-verb sequence is unambiguous evidence of incorporation and intransitivization.
		This diagnostic has been observed in community practice with the pair
		<i lang="ain-Latn">kinakar=an</i> (incorporated, intransitive) beside
		<i lang="ain-Latn">kina a=kar</i> (phrasal, transitive with the fourth-person A prefix
		<i lang="ain-Latn">a=</i>) for the colocation of
		<A w="kina" gl="plant material, vegetables" /> and
		<A w="kar" gl="make, gather" /> (thegodofneet, aynu-corpora Discord, December 2024;
		<Ref k="aynucorporadiscord" />). The observation directly corroborates Nakagawa (2024:
		482–483) and Satō (2022, §2) ‹corpus-confirmed›.
	</p>

	<p>
		The undecidability of third-person cases does not affect the theoretical positions
		catalogued in §<Xr
			ch="noun-incorporation-oblique-polysynthesis-debate"
			s="debate"
		/> — the incorporated forms with first- and fourth-person agreement supply sufficient
		data for the relevant contrasts — but it does place a ceiling on frequency counts
		derived from surface strings. The Chitose percentages in §<Xr
			ch="noun-incorporation-oblique-polysynthesis-debate"
			s="markedness-qi"
		/> are from one narrator; comparable counts for Saru or Horobetsu are not available
		because the undecidability of third-person tokens in other narrators' texts makes
		systematic NI frequency comparison across dialects intractable at present ‹speculative›.
		The typological comparison — Mithun's four-type hierarchy applied to Ainu — is
		introduced in <Xr ch="valency-voice-overview" />;
		subject incorporation and possessor-stranding data are developed in
		<Xr ch="noun-incorporation-subject-possessor-stranding" />;
		the transitivity diagnostics that ground the person-affix test in the wider grammar
		belong to <Xr ch="transitivity-and-valence-classes" />.
	</p>
</S>
