<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Definition and valency effect" id="definition">
	<p>
		The three prefixes <A w="e-" gl="applicative: about, by means of, at" />,
		<A w="ko-" gl="applicative: toward, together with" />, and
		<A w="o-" gl="applicative: into, toward a place" /> are valency-increasing derivational
		morphemes that promote a semantically peripheral participant to the status of a direct
		object, in the sense established for applicative constructions cross-linguistically
		<Ref k="peterson2007" paren />; <Ref k="bugaeva2006" p="186" />;
		<Ref k="nakagawa2024" p="192" />. In Ainu, object status means appearing as a bare noun
		phrase in the argument frame of a transitive or ditransitive verb; there is no case
		marking by which objecthood can be read off the noun itself, so the test is transitivity
		and the agreement prefix the verb licenses
		<Ref k="bugaevakobayashi2022" p="§2" />; <Ref k="sato2008" p="96" />. Each of the
		three applicatives raises arity by one: an intransitive base (vi, one argument) becomes
		a transitive (vt, two arguments), and a transitive base becomes a ditransitive (vd,
		three arguments) <Ref k="nakagawa2024" p="194" />; <Ref k="bugaeva2006" p="188" />.
		The person-marking diagnostics of
		<Xr ch="valency-voice-overview">the valency system</Xr> expose this arity shift: a
		derived intransitive takes the suffixal S indexes <i lang="ain-Latn">=as</i> and
		<i lang="ain-Latn">=an</i>, while a derived transitive or ditransitive takes the
		prefixal A indexes <i lang="ain-Latn">ci=</i> and <i lang="ain-Latn">a=</i>
		<Ref k="sato2008" p="96" />; <Ref k="nakagawa2024" p="137, 140" />.
	</p>

	<Ex
		m="sirkorkamuy emus e-tuye"
		g="standing.tree sword APPL-cut"
		tr="He cut a standing tree with a sword."
		cite="nakagawa2024:194"
		dial="SAR"
		place="Nakagawa ex. 173, after Monbetsu-chō 1969: 237"
		note="The instrument emus 'sword' is the applied object promoted by e-; tuye 'cut' moves from a two-place transitive to a three-place ditransitive."
	/>

	<p>
		The applied object's semantic range is broader than the canonical benefactive or
		instrumental applicative found in many languages. Bugaeva's corpus study of Chitose and
		Saru applicatives maps the three prefixes onto instruments, locations, goals,
		comitatives, benefactives, malefactives, recipients, sources, themes, content, causes,
		paths, and purposes <Ref k="bugaeva2006" p="187–196" />. Nakagawa's heading
		<span lang="ja">充当接頭辞</span> gives the core paraphrases as 〜について・〜で以て・〜〈場所〉で
		(about / by means of / at a place) for <i lang="ain-Latn">e-</i>, and
		〜に向かって・〜とともに (toward / together with) for <i lang="ain-Latn">ko-</i>, with
		<i lang="ain-Latn">o-</i> restricted to 〜〈場所〉へ (toward a place)
		<Ref k="nakagawa2024" p="194–199" />; <Ref k="sato2008" p="239–245" />.
	</p>
</S>

<S t="The three prefixes at a glance" id="three-prefixes">
	<p>
		The table below gives the core semantic range, arity effect, and most frequent
		applied-object roles in Bugaeva's corpus sample for each prefix; full role distributions
		and corpus examples are in <Xr ch="applicative-e" />, <Xr ch="applicative-ko" />, and
		<Xr ch="applicative-o" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>prefix</th>
				<th>core semantic range</th>
				<th>arity</th>
				<th>most frequent applied-object roles (Bugaeva 2006: 190–191)</th>
				<th>frequency in lexicon</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">e-</i></td>
				<td>about; by means of; at (location); for (purpose)</td>
				<td>+1</td>
				<td>Content 39%, Theme-Patient 17%, Instrument 13%</td>
				<td>second most frequent</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ko-</i></td>
				<td>toward (person/non-place goal); together with</td>
				<td>+1</td>
				<td>Addressee 20%, Goal 19%, Comitative 18%, Benefactive 18%</td>
				<td>most frequent</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">o-</i></td>
				<td>into / toward (place goal only)</td>
				<td>+1</td>
				<td>Goal-into-place 57%, Location 29%</td>
				<td>least frequent; largely verse</td>
			</tr>
		</tbody>
	</table>

	<p>
		The lexical frequency order is
		<i lang="ain-Latn">ko- &gt; e- &gt; o-</i>
		<Ref k="bugaeva2006" p="188" />. <i lang="ain-Latn">o-</i> is rare in prose and
		confined largely to verse; Satō similarly marks it uncommon in his pedagogical treatment
		<Ref k="nakagawa2024" p="199" />; <Ref k="sato2008" p="244" />.
	</p>

	<Ex
		m="kanto kotor a=ko-hopuni"
		g="sky surface 4.A=APPL-fly.up"
		tr="I flew up toward the sky."
		cite="nakagawa2024:194"
		dial="CHI"
		place="Nakagawa ex. 174"
		note="ko- promotes the goal kanto kotor 'sky surface' to object position; hopuni 'fly up (vi)' becomes ko-hopuni 'fly up toward (vt)'."
	/>
</S>

<S t="Semantic roles of the applied object" id="roles">
	<p>
		Bugaeva's (2006) role classification of the Chitose/Saru corpus sample yields two
		findings that bear on typological interpretation
		<Ref k="bugaeva2006" p="188–196" />. First, the most frequent role added by
		<i lang="ain-Latn">e-</i> is Content (39%), followed by Theme-Patient (17%); only at
		third place do instrument and locative roles appear. Second, 75–96% of
		<i lang="ain-Latn">e-</i> applied objects across roles derive from intransitive bases,
		meaning the applicative is introducing a new core object rather than re-encoding a
		participant that already had an object-like coding
		<Ref k="bugaeva2006" p="190–191" />.
	</p>
	<p>
		These figures reflect a typological property: most Ainu applicatives are
		<em>obligatory</em> rather than promotional. In the canonical promotional type, an
		oblique participant has a postpositional paraphrase that the applicative replaces
		optionally; in Ainu, the majority of applied objects — especially the Content class of
		<i lang="ain-Latn">e-</i> — have no independent postpositional frame, so the
		applicative construction is the only coding available. Bugaeva calls the Content-adding
		use of <i lang="ain-Latn">e-</i> the most productive class and 'very typical in its
		atypicality' precisely because it sits outside the promotional prototype
		<Ref k="bugaeva2006" p="186–187, 191–196" />;
		<Ref k="bugaevakobayashi2022" p="§4.1.1" />. The cross-linguistic placement of Ainu in
		applicative typology, drawing on Bugaeva's 2010 comparative study, is taken up in the
		per-prefix chapters.
	</p>
	<p>
		For <i lang="ain-Latn">ko-</i>, Addressee (20%), Goal (19%), Comitative (18%), and
		Benefactive (18%) together account for three-quarters of applied-object tokens; Source
		and Recipient each contribute 5%, with the remainder across Cause, Range, and Location
		<Ref k="bugaeva2006" p="190" />. The <i lang="ain-Latn">o-</i> distribution is
		narrowest: locative roles (Goal-into-place 57%, Location 29%, Source/Theme 14%) cover
		all attested instances, all paraphrasable by <i lang="ain-Latn">ta</i> /
		<i lang="ain-Latn">un</i> 'at/to' <Ref k="bugaeva2006" p="191" />. The role
		percentages are from a single corpus sample and serve as approximations; no
		pan-Hokkaido frequency study has been conducted ‹corpus-suggested›.
	</p>
</S>

<S t="The prefix e-: four subtypes" id="e-prefix">
	<p>
		Nakagawa distinguishes four subtypes of <i lang="ain-Latn">e-</i> by the relationship
		between the applied object and its postpositional paraphrase, where one exists
		<Ref k="nakagawa2024" p="195" />. The classification is reproduced here because it
		identifies which uses are promotional (subtypes 1–2) and which are obligatory
		(subtypes 3–4); full analysis and corpus examples are in <Xr ch="applicative-e" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>subtype</th>
				<th>applied-object role</th>
				<th>postpositional paraphrase</th>
				<th>example</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>(1)</td>
				<td>Instrument</td>
				<td>replaceable by <i lang="ain-Latn">ani</i> 'with, by means of'</td>
				<td>
					<i lang="ain-Latn">emus e-tuye</i>
					(≈ <i lang="ain-Latn">emus ani tuye</i>)
				</td>
			</tr>
			<tr>
				<td>(2)</td>
				<td>Purpose</td>
				<td>replaceable by <i lang="ain-Latn">kusu</i> 'for, in order to'</td>
				<td>
					<i lang="ain-Latn">turepta e-arpa</i>
					(≈ <i lang="ain-Latn">turepta kusu arpa</i>)
				</td>
			</tr>
			<tr>
				<td>(3)</td>
				<td>Content / Theme (non-replaceable)</td>
				<td>no independent postpositional frame</td>
				<td>
					<i lang="ain-Latn">nep e-simpay</i> 'worry <em>about</em> something'
				</td>
			</tr>
			<tr>
				<td>(4)</td>
				<td>Location (place required)</td>
				<td>
					replaceable by <i lang="ain-Latn">ta</i> / <i lang="ain-Latn">un</i> /
					<i lang="ain-Latn">peka</i>
				</td>
				<td>
					<i lang="ain-Latn">to teksama e-an</i>
					(≈ <i lang="ain-Latn">to teksama ta an</i>)
				</td>
			</tr>
		</tbody>
	</table>

	<p>
		Subtype (3) is where <i lang="ain-Latn">e-</i> functions as a non-causative
		transitivizer adding a core Theme or Content object with no other syntactic route.
		The derivation <A w="ikka" gl="steal (vi)" /> → <i lang="ain-Latn">e-ikka</i> 'steal
		something (vt)' → <i lang="ain-Latn">ko-e-ikka</i> 'steal something from someone (vd)'
		illustrates the Content-adding step followed by a second applicative layer
		<Ref k="bugaeva2006" p="191" />.
	</p>
	<p>
		A community-proposed etymology for
		<A w="eykaun" gl="surpass, excel" /> illustrates the Content / Theme-adding function in
		a compound form: the verb may derive from <i lang="ain-Latn">e-</i> applicativizing the
		locative predicate <i lang="ain-Latn">ka un</i> 'be above' →
		<i lang="ain-Latn">eykaun</i> 'surpass something', with a parallel
		<i lang="ain-Latn">-u</i> transitivizer yielding the doublet
		<i lang="ain-Latn">kaunu</i> (nukopoli, aynu-corpora Discord 2024)
		<Ref k="aynucorporadiscord" />. The proposal is consistent with the range of
		<i lang="ain-Latn">e-</i>'s Content / Theme uses, but the lexical history has not been
		established in the peer-reviewed literature ‹speculative›.
	</p>
</S>

<S t="The prefix ko- and the contrast with o-" id="ko-o">
	<p>
		<i lang="ain-Latn">ko-</i> covers the roles associated with an animate or non-spatial
		goal: Addressee, Goal, Comitative, Benefactive, Malefactive, Recipient, and Source are
		all represented in Bugaeva's sample <Ref k="bugaeva2006" p="190" />;
		<Ref k="nakagawa2024" p="197–198" />. The diagnostic contrast with
		<i lang="ain-Latn">o-</i> is the type of goal argument:
		<i lang="ain-Latn">ko-</i> preferentially takes person or animal goals, while
		<i lang="ain-Latn">o-</i> is restricted to place nouns
		<Ref k="nakagawa2024" p="198–199" />; <Ref k="bugaeva2006" p="191" />. The following
		Chitose minimal pair, with the same base verb <A w="ek" gl="come (singular)" />,
		demonstrates the distinction:
	</p>

	<Ex
		m="tumi o-ek"
		g="war APPL-come"
		tr="War came to the village."
		cite="nakagawa2024:199"
		dial="CHI"
		place="Nakagawa ex. 192"
		note="o- applied object = a place (village, contextually supplied); o- is paraphrasable by ta/un 'to (a place)'."
	/>

	<Ex
		m="tumi ko-ek"
		g="war APPL-come"
		tr="War came to [my] sister."
		cite="nakagawa2024:199"
		dial="CHI"
		place="Nakagawa ex. 193"
		note="ko- applied object = a person (the sister); ko- is required for animate goals."
	/>

	<p>
		The comitative reading of <i lang="ain-Latn">ko-</i> ('together with') is transparent
		when the applied object is incorporated into the verb word:
	</p>

	<Ex
		m="a=mun-ko-tata a=toy-ko-tata ayne"
		g="4.A=weed-APPL-chop 4.A=earth-APPL-chop then"
		tr="I chopped it together with the weeds, together with the soil, and then …"
		cite="nakagawa2024:198"
		dial="CHI"
		place="Nakagawa ex. 190"
		note="mun 'weeds' and toy 'earth' are incorporated applied objects with comitative reading; the actual patient (the monster's flesh) is contextually implicit."
	/>

	<p>
		A community-proposed analysis of <A w="sirkokunne" gl="pass the night" /> illustrates a
		less common behavior: the form <i lang="ain-Latn">ku=sir-ko-peker</i> may represent
		<i lang="ain-Latn">ko-</i> inserted inside the compound intransitive
		<i lang="ain-Latn">sir-peker</i> 'the sky brightens', with the applied object (first
		person 'I') raised to subject of the whole derived verb, yielding 'I pass the night'
		(nukopoli, aynu-corpora Discord 2024) <Ref k="aynucorporadiscord" />. This
		object-to-subject raising analysis is not directly addressed in the accessible
		peer-reviewed sources and is offered as a community-proposed reading of an opaque form
		‹speculative›.
	</p>
</S>

<S t="Stacking, productivity, and the feeding relation" id="stacking-productivity">
	<p>
		Two applicatives may combine on a single verb. The most attested pairing is
		<i lang="ain-Latn">ko-e-</i> or <i lang="ain-Latn">e-ko-</i>, where each prefix
		encodes an independent applied object: <i lang="ain-Latn">e-ko-isoytak</i> 'tell
		stories about something (<i lang="ain-Latn">e-</i>) to someone
		(<i lang="ain-Latn">ko-</i>)'. Bugaeva and Kobayashi report no visible semantic
		difference between the two prefix orders in this combination, and Nakagawa gives
		<i lang="ain-Latn">e-yay-e-isoytak</i> as a further expansion that inserts the
		reflexive <i lang="ain-Latn">yay-</i> between the two applicatives, treating the whole
		as one word <Ref k="bugaevakobayashi2022" p="§4.1.1" />;
		<Ref k="nakagawa2024" p="211" />. The arity ceiling on double applicatives follows from
		the two-person-affix cap: a verb may carry at most one subject index and one object
		index, so a third applied object is unindexable without compensatory
		intransitivization <Ref k="bugaevakobayashi2022" p="§2" />;
		<Ref k="sato2023b" p="39" />. The Handbook illustrates the compensatory strategy in
		<i lang="ain-Latn">yay-ipe-e-ko-sunke</i> 'eat meagre meals', where three
		applied-object positions are successively reduced — one object incorporated
		(<i lang="ain-Latn">ipe</i> 'food'), one reflexivized (<i lang="ain-Latn">yay-</i>)
		<Ref k="bugaevakobayashi2022" p="§4.1.1" />. The full range of applicative–reflexive
		and applicative–causative stacking is in
		<Xr ch="applicative-stacking-relativization-feeding" />.
	</p>
	<p>
		Across the lexicon, the applicatives are pervasive: Bugaeva estimates roughly one-third
		of all verbs are applicative-derived, amounting to up to 7% of the entire Ainu lexicon,
		and characterizes them as 'productive, ubiquitous, and versatile'
		<Ref k="bugaeva2006" p="188" />. The prefixes attach to almost every verb class,
		with the exception of meteorological, bodily-process, and certain change-of-state verbs
		at one extreme of the transitivity hierarchy and effective-action verbs at the other
		<Ref k="bugaevakobayashi2022" p="§4.1.1" />. Ijäs's learner grammar surveys transitive
		and derived forms but does not extend to the applicative prefixes in the banked lessons;
		the pedagogical description is in Satō's Lesson 31
		<Ref k="ijas2023" />; <Ref k="sato2008" p="239–245" />.
	</p>
	<p>
		A further structural consequence of the applicative system is its role in enabling noun
		incorporation. Oblique nouns — instruments and locations — cannot incorporate directly:
		an applicative must first promote them to object status, and only the derived object
		then incorporates into the verb word
		<Ref k="shibatani1990" p="62, 66" />; <Ref k="nakagawa2024" p="484" />. A verb-noun
		sequence bearing an applicative prefix is therefore a reliable sign that incorporation
		has occurred: <i lang="ain-Latn">o-tumi-osma</i> (with <i lang="ain-Latn">o-</i>) is
		unambiguously incorporated, while bare <i lang="ain-Latn">tumi osma</i> is ambiguous
		<Ref k="shibatani1990" p="63" />. When incorporation takes place, the applicative
		carries the postpositional meaning that would otherwise be expressed by a separate
		postposition: <i lang="ain-Latn">at-e-uk</i> 'catch with a net'
		(= <i lang="ain-Latn">at ani uk</i>), <i lang="ain-Latn">pira-ko-hokus-te</i>
		'fall toward a cliff' (= <i lang="ain-Latn">pira or un hokuste</i>)
		<Ref k="nakagawa2024" p="484" />. Shibatani (1990) demonstrates that Baker's
		Case-theoretic prediction — that unaccusative bases are blocked from applicative
		formation — is falsified in Ainu, which does applicativize unaccusatives
		<Ref k="shibatani1990" p="66" />; <Ref k="baker1988" paren />. Kaiser (1998) examines
		the morphological properties of this interaction in detail
		<Ref k="kaiser1998" />; the treatment is continued in
		<Xr ch="applicative-stacking-relativization-feeding" /> and
		<Xr ch="noun-incorporation-object" />.
	</p>
</S>

<S t="Homophonous prefixes and the arity computation" id="homophony">
	<p>
		Three surface forms shared with the applicative prefixes carry different arity values and
		require disambiguation by context and argument counting. Applicative
		<i lang="ain-Latn">e-</i> (+1) has two homophonous companions: the affiliative
		<i lang="ain-Latn">e-</i> 'the head/end of' (arity 0), which fills a part slot on the
		object while requiring a separate possessor, leaving net arity unchanged; and the
		second-person subject index <i lang="ain-Latn">e=</i>, a person affix rather than a
		derivational prefix <Ref k="nakagawa2024" p="192–193" />;
		<Ref k="bugaevakobayashi2022" p="§4.3.3" />. The lexical body-region prefix
		<i lang="ain-Latn">he-</i> 'head' (arity −1) provides a further contrast, filling the
		object slot with the subject's own head region. The Chitose pair
		<i lang="ain-Latn">he-puni</i> 'lift one's own head (vi, −1)' against
		<i lang="ain-Latn">e-puni</i> 'lift someone's head (vt, +1)' separates applicative
		from lexical prefix by the person-suffix test <Ref k="nakagawa2024" p="193" />.
		Applicative <i lang="ain-Latn">o-</i> (+1) has a parallel affiliative twin
		<i lang="ain-Latn">o-</i> 'the bottom/base of' (arity 0). None of these can be glossed
		without first computing the arity. The full homophony set is in
		<Xr ch="valency-voice-overview" />; the affiliative morphology is in
		<Xr ch="concept-form-affiliative-form" />.
	</p>
</S>

<S t="Terminological background" id="terminology">
	<p>
		The applicative category was recognized early in Ainu grammaticology. Kindaichi and
		Chiri (1936) named it <span lang="ja">充当相</span> (applicative voice); Nakagawa notes
		alongside it Chiri's earlier label <span lang="ja">格の関係を表わす接頭辞</span>
		(prefixes expressing case relations) <Ref k="kindaichi1936" />;
		<Ref k="nakagawa2024" p="192–193" />. The typological rarity of productive applicatives
		as a grammatical system in Eurasian languages — closest parallels in certain Caucasian
		languages and Burushaski — was already remarked upon in this early literature and
		confirmed by Bugaeva's later cross-linguistic survey <Ref k="bugaeva2006" p="185" />;
		<Ref k="bugaeva2010" />. The modern English term 'applicative' and the object-promotion
		analysis of <i lang="ain-Latn">e-</i>, <i lang="ain-Latn">ko-</i>, and
		<i lang="ain-Latn">o-</i> are established in Bugaeva (2006, 2010) and consolidated in
		the Handbook <Ref k="bugaeva2006" />; <Ref k="bugaeva2010" />;
		<Ref k="bugaevakobayashi2022" p="§4.1.1" />. Nakagawa's own term
		<span lang="ja">充当接頭辞</span> follows the same analysis
		<Ref k="nakagawa2024" p="192" />.
	</p>
	<p>
		Baker's (1988) P-incorporation theory treats applicative formation as
		preposition/postposition incorporation into the verb, promoting its complement to object;
		Shibatani (1990) applies this framing to the Ainu data, and its most direct analytical
		consequence is the feeding-relation account above
		<Ref k="shibatani1990" p="65–66" />; <Ref k="baker1988" paren />. The older
		'case-relation prefix' terminology and the 'preverb' framing encountered for cognate
		categories in some other languages do not figure as active analytical positions in the
		recent Ainu literature: Bugaeva (2006), the Handbook, Nakagawa (2024), and Satō (2008)
		adopt the applicative analysis consistently, and the terminological variation reflects a
		historical shift in descriptive vocabulary rather than a substantive analytical
		disagreement among the current sources
		<Ref k="bugaeva2006" p="185–186" />; <Ref k="nakagawa2024" p="192–193" /> ‹consensus›.
	</p>
</S>
