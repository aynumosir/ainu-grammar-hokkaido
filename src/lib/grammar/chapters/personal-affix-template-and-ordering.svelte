<script lang="ts">
	import { S, Ex, Ref, Xr } from '$lib/grammar/components';
</script>

<S t="The position-class template" id="overview">
	<p>
		The cell values of the personal-index paradigm — which forms exist and what morphological
		alignment each person row exhibits — are established in <Xr ch="person-marking-architecture" />.
		This chapter examines how those indexes are ordered on the verb word: which positions they
		occupy relative to the stem, how that ordering relates to valency-changing morphology, and what
		the positional difference between subject prefixes and subject suffixes entails for the verb's
		internal structure. The chapter covers the personal-affix layer of the verb; the full verb word
		template, including TAM, negation, and nominalization layers, is treated in
		<Xr ch="verb-word-template" />. <Ref k="bugaeva2006" p="3" />
	</p>

	<table>
		<thead>
			<tr>
				<th>position class</th>
				<th>material</th>
				<th>linear position</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>left personal layer</td>
				<td>
					A prefixes: <i lang="ain-Latn">ku=</i>, <i lang="ain-Latn">ci=</i>,
					<i lang="ain-Latn">a=</i>/<i lang="ain-Latn">an=</i>,
					<i lang="ain-Latn">e=</i>, <i lang="ain-Latn">eci=</i>; O prefixes:
					<i lang="ain-Latn">en=</i>, <i lang="ain-Latn">un=</i>,
					<i lang="ain-Latn">i=</i>
				</td>
				<td>before the derived stem</td>
			</tr>
			<tr>
				<td>valency-prefix layer</td>
				<td>
					applicatives <i lang="ain-Latn">e-</i>, <i lang="ain-Latn">ko-</i>,
					<i lang="ain-Latn">o-</i>; antipassive/detransitive
					<i lang="ain-Latn">i-</i>; reflexive <i lang="ain-Latn">yay-</i>,
					<i lang="ain-Latn">si-</i>; reciprocal <i lang="ain-Latn">u-</i>
				</td>
				<td>inside personal prefixes, before the root</td>
			</tr>
			<tr>
				<td>stem</td>
				<td>lexical root; also suppletive and incorporated stems</td>
				<td>template centre</td>
			</tr>
			<tr>
				<td>stem-internal suffix</td>
				<td>
					stem plural <i lang="ain-Latn">-pa</i>; causatives
					<i lang="ain-Latn">-re</i>, <i lang="ain-Latn">-e</i>,
					<i lang="ain-Latn">-ka</i>
				</td>
				<td>after the root, before the right-edge person suffix</td>
			</tr>
			<tr>
				<td>right personal layer</td>
				<td>
					<i lang="ain-Latn">=as</i> (1PL.EXCL.S); <i lang="ain-Latn">=an</i> (4.S)
				</td>
				<td>after the intransitive stem or derived intransitive</td>
			</tr>
			<tr>
				<td>outer number layer</td>
				<td>
					auxiliary <i lang="ain-Latn">pa</i> (Saru, Chitose, Ishikari); auxiliary
					<i lang="ain-Latn">ci</i> (Shizunai)
				</td>
				<td>outside the person-inflected verb</td>
			</tr>
		</tbody>
	</table>

	<p>
		The table is a positional map, not a template in which every slot must be filled. Most verb
		forms contain only the stem and one index; a verb with a third-person subject and third-person
		object shows no overt personal material. The outer number layer is relevant here because it
		supplies an ordering diagnostic for the right edge: material that follows a fully
		person-inflected form belongs outside the personal-affix template, even where earlier
		descriptions treated comparable segments as person markers <Ref k="nakagawa2024" p="151–159" />;
		<Ref k="bugaeva2012" p="471, 481" />; <Ref k="sato2023b" p="39–40" />.
	</p>
</S>

<S t="The left personal layer: A and O prefixes" id="left-layer">
	<p>
		When a transitive verb is inflected for a non-third subject, the A index occupies the leftmost
		position in the word: 1SG <i lang="ain-Latn">ku=</i>, 1PL.EXCL
		<i lang="ain-Latn">ci=</i>, 4th/indefinite <i lang="ain-Latn">a=</i> or
		<i lang="ain-Latn">an=</i>, 2SG <i lang="ain-Latn">e=</i>, and 2PL
		<i lang="ain-Latn">eci=</i> all stand before the stem. Object indexes are prefixal across all
		persons: 1SG <i lang="ain-Latn">en=</i>, 1PL.EXCL <i lang="ain-Latn">un=</i>, 4th
		<i lang="ain-Latn">i=</i>, and 2SG/2PL <i lang="ain-Latn">e=</i>/<i lang="ain-Latn">eci=</i>
		stand before the stem when overt <Ref k="nakagawa2024" p="166–170" />; <Ref
			k="bugaeva2012"
			p="471"
		/>.
	</p>

	<Ex
		m="aynu itak k=eramuan wa kusu icen k=eunkeray wa pirka pirka"
		g="Ainu language 1SG.A=understand CONJ because money 1SG.A=receive CONJ good good"
		tr="Because I had learnt Ainu, I was able to receive money, which was very good."
		cite="nakagawa2024:168"
		dial="SAR"
		place="Nakagawa ex. 111"
		note="ku= reduces to k= before a vowel-initial stem. Both transitive predicates place the A index in the left personal layer."
	/>

	<p>
		The left personal layer is outside the valency-prefix layer. Applicatives
		<i lang="ain-Latn">ko-</i>, <i lang="ain-Latn">e-</i>, and <i lang="ain-Latn">o-</i>, the
		reflexive and reciprocal prefixes <i lang="ain-Latn">yay-</i>, <i lang="ain-Latn">si-</i>,
		and <i lang="ain-Latn">u-</i>, and the detransitivising prefix <i lang="ain-Latn">i-</i> all
		attach closer to the root than any personal index. The detransitivising
		<i lang="ain-Latn">i-</i> must be kept apart from the homophonous 4th-person object prefix
		<i lang="ain-Latn">i=</i>: the two occupy different positions, carry different boundary
		symbols, and have distinct etymological histories; the detransitiviser is treated in
		<Xr ch="antipassive-detransitive-i" />. Valency morphology derives a transitive or intransitive
		base from the root, and the personal indexes appear outside that derived base, indexing its
		arguments <Ref k="tamura1972" p="35" />; <Ref k="nakagawa2024" p="196–199" />; <Ref
			k="sato2023b"
			p="40"
		/>.
	</p>

	<p>
		The 4th-person A prefix shows a dialectal split within the left personal layer. Saru and the
		western dialects use <i lang="ain-Latn">a=</i> exclusively; Tokachi, Ishikari, Shiranuka, and
		Samani favour <i lang="ain-Latn">an=</i> under locally varying conditions, and Nakagawa takes
		<i lang="ain-Latn">an=</i> to be the older form <Ref k="nakagawa2024" p="167–168" />. Both
		shapes occupy the same left-edge position ‹consensus›.
	</p>

	<Ex
		m="wen kamuy a=maketa wa a=rayke ru-we ne"
		g="bad god 4.A=defeat CONJ 4.A=kill track-POSS COP"
		tr="The evil kamuy was defeated and killed."
		cite="nakagawa2024:177"
		dial="CHI"
		place="Nakagawa ex. 145"
		note="The prefix a= indexes an indefinite transitive subject; the patient is not subject-promoted. Both predicates place the 4th-person A prefix in the left personal layer."
	/>
</S>

<S t="The right personal layer: =as and =an" id="right-layer">
	<p>
		Two subject indexes appear at the right edge of the inflected verb: 1PL.EXCL
		<i lang="ain-Latn">=as</i> and 4th/indefinite <i lang="ain-Latn">=an</i>. Both mark S on
		intransitive verbs and follow any stem-internal suffix. Their transitive-subject counterparts,
		<i lang="ain-Latn">ci=</i> and <i lang="ain-Latn">a=</i>/<i lang="ain-Latn">an=</i>, stand in
		the left personal layer. This side-switch — suffix on an intransitive S, prefix on a transitive
		A — is the positional basis on which Bugaeva calls these two rows tripartite: each keeps A, S,
		and O formally and positionally distinct <Ref k="nakagawa2024" p="166–167" />; <Ref
			k="bugaeva2012"
			p="472"
		/>; <Ref k="bugaeva2008" p="32" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>person row</th>
				<th>S: intransitive (right-edge suffix)</th>
				<th>A: transitive (left-edge prefix)</th>
				<th>O (left-edge prefix)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1PL.EXCL</td>
				<td>stem<i lang="ain-Latn">=as</i></td>
				<td><i lang="ain-Latn">ci=</i>stem</td>
				<td><i lang="ain-Latn">un=</i>stem</td>
			</tr>
			<tr>
				<td>4 / INDEF</td>
				<td>stem<i lang="ain-Latn">=an</i></td>
				<td>
					<i lang="ain-Latn">a=</i>stem (or <i lang="ain-Latn">an=</i>stem, dialectal)
				</td>
				<td><i lang="ain-Latn">i=</i>stem</td>
			</tr>
		</tbody>
	</table>

	<Ex
		m="kuruma an wa ci=o tek arki=as"
		g="car exist CONJ 1PL.EXCL.A=board then come.PL=1PL.EXCL.S"
		tr="There was a car, and we boarded it and came."
		cite="takahashi2015:206"
		dial="TOK"
		place="Takahashi ex. 2"
		note="The same exclusive group is A on the transitive o, marked by the prefix ci=, and S on the intransitive plural arki, marked by the suffix =as — both positions filled within a single clause chain."
	/>

	<Ex
		m="eani hem paye=an ro"
		g="2SG even go.PL=4.S HORT"
		tr="You too, let us go!"
		cite="nakagawa2024:175"
		dial="CHI"
		place="Nakagawa ex. 138"
		note="The 4th-person S suffix =an attaches to the intransitive plural stem paye. In this inclusive/hortative use the addressee is part of the referent; the hortative particle ro follows the fully inflected verb."
	/>

	<p>
		All other persons keep their subject index on the left. First singular
		<i lang="ain-Latn">ku=</i> marks both S and A as a prefix, opposed to the object
		<i lang="ain-Latn">en=</i>. Second-person <i lang="ain-Latn">e=</i> and
		<i lang="ain-Latn">eci=</i> are neutral — the same form serves A, S, and O — and always
		prefixal. Third person is zero in all roles. The portmanteau function of
		<i lang="ain-Latn">eci=</i> for a first-person A acting on a second-person O is a separate
		rule and is developed in <Xr ch="eci-portmanteau-and-second-plural" />. The right personal
		layer is the exclusive domain of the two side-switching rows ‹consensus›.
	</p>
</S>

<S t="Ordering with valency morphology and number suffixes" id="valency-number-order">
	<p>
		Valency-changing material and the stem-forming plural occupy positions between the root and any
		right-edge person suffix. The causatives <i lang="ain-Latn">-re</i>,
		<i lang="ain-Latn">-e</i>, and <i lang="ain-Latn">-ka</i>, and the stem-forming plural
		<i lang="ain-Latn">-pa</i>, all follow the root and precede <i lang="ain-Latn">=as</i> or
		<i lang="ain-Latn">=an</i>. A causativised intransitive, for example, yields a derived stem to
		which the right-edge person suffix then attaches: the personal layer is outside the valency
		layer in both directions <Ref k="nakagawa2024" p="196–199" />; <Ref k="sato2023b" p="40" />.
	</p>

	<p>
		The clearest ordering diagnostic for the right edge comes from Nakagawa's minimal pair with
		<i lang="ain-Latn">iki</i> 'do'. Hokkaido has a stem-forming plural suffix
		<i lang="ain-Latn">-pa</i> that attaches to the root, and in Saru, Chitose, and Ishikari an
		outer plural auxiliary <i lang="ain-Latn">pa</i> that follows the person-inflected form. The
		pair contrasts their positions directly:
	</p>

	<Ex
		m="nenpoka iki=an pa wa siknu=an wa"
		g="somehow do=4.S PL CONJ live=4.S CONJ"
		tr="Somehow we managed to do it, and went on living."
		cite="nakagawa2024:159"
		dial="SAR"
		place="Nakagawa ex. 87"
		note="The outer auxiliary pa follows the fully person-inflected form iki=an. It is outside the right personal layer."
	/>

	<Ex
		m="irwak sinne sorekusu iki-pa=an"
		g="sibling one.like in.that.way do-PL=4.S"
		tr="We lived like siblings."
		cite="nakagawa2024:159"
		dial="SAR"
		place="Nakagawa ex. 88"
		note="The stem-forming plural suffix -pa precedes the person suffix =an, inside the right personal layer. The contrast with the preceding example places stem -pa inside and auxiliary pa outside."
	/>

	<p>
		Sakaguchi formalises the inside/outside distinction as a clitic diagnostic: a marker is a
		clitic when it attaches to the fully person-inflected form, an affix when it attaches to the
		root. He applies this to Sakhalin Ainu, where the verbal plural
		<i lang="ain-Latn">=hci</i> appears outside the inflected verb and the root-attaching plural
		suffix <i lang="ain-Latn">-pa</i> inside it <Ref k="sakaguchi2024" p="12, 77–85, 163" />. His
		criterion bears on the Hokkaido outer <i lang="ain-Latn">pa</i> by extension from a
		Sakhalin-focused analysis ‹contested›. The verbal number system, the
		<i lang="ain-Latn">pa</i>/<i lang="ain-Latn">ci</i> auxiliary alternation across dialects, and
		the interaction with suppletive stems are treated in <Xr ch="person-number-interactions" /> and
		<Xr ch="suppletive-verbal-number" />.
	</p>
</S>

<S t="The two-index ceiling" id="two-index-ceiling">
	<p>
		A finite verb hosts at most one subject index and one object index. No additional personal
		prefix or suffix is possible regardless of how many semantic participants the predicate
		involves. The restriction is most visible in three-place predicates: with
		<i lang="ain-Latn">kore</i> 'give', recipient and theme cannot each receive an overt index.
		When both are third person, neither is indexed and both surface as bare noun phrases <Ref
			k="nakagawa2024"
			p="363–365"
		/>; <Ref k="sato2023b" p="39, 47" />.
	</p>

	<Ex
		m="topenpe hekattar ku=kore"
		g="sweets children 1SG.A=give"
		tr="I gave the children sweets."
		cite="nakagawa2024:127"
		dial="SAR"
		place="Nakagawa ex. 11a"
		note="Both non-subject participants are third-person bare noun phrases; only the 1SG.A subject is indexed. The ceiling prevents a separate object index for either recipient or theme."
	/>

	<p>
		When a non-third participant is present with a three-place predicate, the object index is
		assigned to the human recipient. Satō analyses this as a secundative pattern, treating the
		recipient as the selected undergoer of the indexing slot; Nakagawa frames the same verbs as
		three-place predicates with two bare object phrases that may occur in varying word order, and
		neither obligatorily indexed when both are third person <Ref k="sato2008" p="147" />; <Ref
			k="sato2023b"
			p="40, 47"
		/>; <Ref k="sato2025a" p="368–371" />; <Ref k="nakagawa2024" p="363–365" /> ‹contested›.
		Object-indexing rules and the recipient-vs-theme selection are developed in
		<Xr ch="object-indexing-monotransitive" />.
	</p>

	<p>
		The ceiling also determines how reflexive and reciprocal derivations interact with personal
		marking. Once <i lang="ain-Latn">yay-</i>, <i lang="ain-Latn">si-</i>, or
		<i lang="ain-Latn">u-</i> occupies the internal argument position as part of a derived stem,
		the verb is indexed according to its derived valence; a separate object index for the same
		participant would exceed the cap and is ungrammatical <Ref k="tamura1972" p="35" />; <Ref
			k="nakagawa2024"
			p="183, 196–199"
		/>. Satō uses this two-index restriction to argue that a zero third-person index must be posited
		in the paradigm, so that the cap is stateable uniformly, in disagreement with Nakagawa's earlier
		position that third person has no affix <Ref k="sato2023b" p="39" />; <Ref
			k="sato2025a"
			p="369"
		/>; <Ref k="nakagawa2024" p="169" /> ‹contested›.
	</p>
</S>

<S t="Clitic and affix status of the personal indexes" id="boundary-status">
	<p>
		The boundary symbol <i lang="ain-Latn">=</i> used throughout this grammar at personal-index
		junctions is a notational convenience, not a settled morphological claim. Nakagawa employs
		<i lang="ain-Latn">=</i> for all person markers as a convenience mark explicitly decoupled
		from phonology and syllable structure <Ref k="nakagawa2024" p="49" />. Tamura and Satō write
		the same markers with hyphens. Bugaeva grades the indexes into three classes on prosodic and
		separability grounds <Ref k="bugaeva2012" p="472–473" />:
	</p>

	<table>
		<thead>
			<tr>
				<th>grade</th>
				<th>forms</th>
				<th>diagnostic</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>word-like</td>
				<td><i lang="ain-Latn">=an</i>, <i lang="ain-Latn">=as</i></td>
				<td>
					may be separated from the stem by intervening particles; form autonomous
					prosodic units
				</td>
			</tr>
			<tr>
				<td>clitic-like</td>
				<td><i lang="ain-Latn">a=</i>, <i lang="ain-Latn">eci=</i></td>
				<td>inseparable; do not shift the verb's accent kernel</td>
			</tr>
			<tr>
				<td>full prefix</td>
				<td>
					<i lang="ain-Latn">ku=</i>, <i lang="ain-Latn">ci=</i>,
					<i lang="ain-Latn">e=</i>, <i lang="ain-Latn">en=</i>,
					<i lang="ain-Latn">un=</i>, <i lang="ain-Latn">i=</i>
				</td>
				<td>inseparable and shift the accent kernel</td>
			</tr>
		</tbody>
	</table>

	<p>
		Nakagawa arrives at a comparable assessment of <i lang="ain-Latn">=an</i> through a different
		route. His 分離人称 (separated-person) data show <i lang="ain-Latn">=an</i> detached from its
		verb by the additive particle <i lang="ain-Latn">ka</i> or the topic marker
		<i lang="ain-Latn">anak</i> — a separability property he characterises as clitic or 倚辞 status,
		possibly tracing the form to the existential verb <i lang="ain-Latn">an</i> 'exist' <Ref
			k="nakagawa2024"
			p="183"
		/>:
	</p>

	<Ex
		m="tane iperusuy ka =an sinki ka =an kor"
		g="now hungry even 4.S tired even 4.S while"
		tr="Now, being hungry and also tired, …"
		cite="nakagawa2024:183"
		dial="CHI"
		place="Nakagawa ex. 161"
		note="The particle ka intervenes between each intransitive stem and its =an, demonstrating the separability that distinguishes =an from the full prefixes and that Nakagawa cites for its clitic characterisation."
	/>

	<p>
		Sakaguchi's 2024 thesis on Sakhalin Ainu draws a formal distinction between affix boundaries
		(<i lang="ain-Latn">-</i>, root-attaching) and clitic boundaries (<i lang="ain-Latn">=</i>,
		attaching to the fully person-inflected form). Under his analysis the 4th-person
		<i lang="ain-Latn">=an</i>/<i lang="ain-Latn">an=</i> is classified as highly autonomous and
		clitic-like, while 1PL.EXCL <i lang="ain-Latn">-as</i> is treated as a root-attaching affix —
		a verdict that parts from Bugaeva, who places <i lang="ain-Latn">=as</i> in the same word-like
		class as <i lang="ain-Latn">=an</i> <Ref k="sakaguchi2024" p="ix, 62–64, 77–85, 101, 163" />;
		<Ref k="bugaeva2012" p="472–473" /> ‹contested›. Sakaguchi's systematic diagnostics were
		developed for Sakhalin material; the only explicitly Hokkaido application in that work is the
		clitic status of the outer verbal plural <i lang="ain-Latn">pa</i> in Saru, Chitose, and
		Ishikari, derived from Nakagawa's inside/outside ordering criterion. A dedicated clitic/affix
		study of Hokkaido person-marking at comparable rigour has not been produced; the Hokkaido
		boundary gradation rests on Bugaeva's prosodic classification and Nakagawa's separability data
		‹contested›. The boundary analysis is taken further in
		<Xr ch="alignment-hierarchical-and-the-debate" />.
	</p>
</S>

<S t="The Ijäs learner template" id="ijas">
	<p>
		Ijäs's online pedagogical grammar presents the same left-right ordering for L2 learners,
		grouping person indexes as the verb's obligatory argument positions and treating noun phrases
		as optional outer constituents <Ref k="ijas2023" />. The framing correctly reflects the
		head-marking character of the system: the verb carries the obligatory participant indexes while
		the independent pronouns are optional <Ref k="sato2025a" p="361" />; <Ref
			k="nichols1986"
			paren
		/>. Her examples are constructed teaching forms, not corpus attestations, and she writes
		personal-index boundaries with hyphens as a pedagogical convention.
	</p>

	<Ex
		m="ku=hosipi"
		g="1SG.S=return"
		tr="I return."
		cite="ijas2023"
		constructed
		dial="SAR"
		note="Constructed following Ijäs lesson 2. She writes ku-hosipi; this grammar uses = for the personal-index boundary. The form shows 1SG.S on an intransitive stem in the left personal layer."
	/>

	<Ex
		m="kunneywa wakka e=ku"
		g="morning water 2SG.A=drink"
		tr="You drink water in the morning."
		cite="ijas2023"
		constructed
		dial="SAR"
		note="Constructed following Ijäs lesson 3. The object is third person with no overt index; e= occupies the left personal layer as 2SG.A. She writes e-ku."
	/>

	<p>
		Two features of the Ijäs presentation are pedagogical conventions rather than grammatical
		generalisations. Her word-order guidance for ditransitives treats the indirect object as
		occupying a fixed position between subject and direct object — a useful classroom rule that
		does not correspond to a syntactic constraint; Nakagawa's data on three-place predicates allow
		the two bare object phrases to appear in varying orders <Ref k="nakagawa2024" p="363–365" />.
		The zero-marking of third-person transitive arguments in her examples is factually accurate but
		theoretically neutral: it is compatible with Nakagawa's position that there is no third-person
		affix and with Satō's posit of a zero index required by the two-index ceiling <Ref
			k="nakagawa2024"
			p="169"
		/>; <Ref k="sato2023b" p="39" />; <Ref k="sato2025a" p="369" /> ‹contested›.
	</p>
</S>
