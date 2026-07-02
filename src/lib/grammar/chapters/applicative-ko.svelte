<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Overview" id="overview">
	<p>
		The prefix <A w="ko-" gl="applicative: toward / together-with" /> adds a participant —
		typically a goal, recipient, addressee, or comitative partner — to the argument frame of the
		verb as a new core object, raising arity by one
		<Ref k="nakagawa2024" p="197–198" />; <Ref k="bugaeva2006" p="186, 188" />. On a one-place
		intransitive base the derived verb is transitive; on a two-place transitive the result is a
		three-place double-object verb. The applied object enters the object slot and may be
		cross-referenced by the object-series person prefix — the operative arity diagnostic
		described in <Xr ch="valency-voice-overview">the valency overview</Xr> and grounded in
		<Xr ch="applicative-system-overview">the applicative system</Xr>.
	</p>
	<p>
		Among the three applicative prefixes of Hokkaido Ainu,
		<i lang="ain-Latn">ko-</i> is the most frequent. Bugaeva's Saru and Chitose corpus
		places the order <i lang="ain-Latn">ko-</i> &gt; <i lang="ain-Latn">e-</i> &gt;
		<i lang="ain-Latn">o-</i> by token frequency; taken together, applicative verbs account
		for roughly one-third of all verbs and up to seven percent of the entire Ainu lexicon
		<Ref k="bugaeva2006" p="188" />. Nakagawa characterizes the applied object as 〜に向かって
		(directed toward) or 〜とともに (together with), two senses that correspond to the
		Goal / Addressee cluster and the Comitative cluster in Bugaeva's role classification
		<Ref k="nakagawa2024" p="197" />.
	</p>
	<Ex
		m="kanto kotor a=ko-hopuni"
		g="sky vicinity 4.A=APPL-fly.up"
		tr="I flew up toward the sky."
		cite="nakagawa2024:194"
		dial="CHI"
		place="Nakagawa ex. 174"
		note="Base hopuni 'fly up' is intransitive; ko-hopuni is transitive with the Goal kanto kotor 'sky-vicinity' as applied object. The fourth-person A prefix a= marks the transitive subject."
	/>
</S>

<S t="Semantic roles of the applied object" id="roles">
	<p>
		Bugaeva's systematic role-by-role classification of <i lang="ain-Latn">ko-</i> tokens in
		her Saru and Chitose sample yields the distribution in Table 1
		<Ref k="bugaeva2006" p="190" />. Each percentage is the share of
		<i lang="ain-Latn">ko-</i> tokens in which the applied object bears that role; the intr/tr
		column records the proportion derived from an intransitive vs transitive base verb.
	</p>

	<table>
		<caption>Table 1. Semantic roles of the <i lang="ain-Latn">ko-</i> applied object (Bugaeva 2006: 190)</caption>
		<thead>
			<tr>
				<th>applied-object role</th>
				<th>% of tokens</th>
				<th>intr base / tr base (%)</th>
				<th>adjunct paraphrase</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Addressee</td>
				<td>20</td>
				<td>75 / 25</td>
				<td>—</td>
			</tr>
			<tr>
				<td>Goal</td>
				<td>19</td>
				<td>95 / 5</td>
				<td>—</td>
			</tr>
			<tr>
				<td>Comitative</td>
				<td>18</td>
				<td>79 / 21</td>
				<td><i lang="ain-Latn">tura</i></td>
			</tr>
			<tr>
				<td>Benefactive</td>
				<td>18</td>
				<td>50 / 50</td>
				<td>—</td>
			</tr>
			<tr>
				<td>Malefactive</td>
				<td>6</td>
				<td>86 / 14</td>
				<td>—</td>
			</tr>
			<tr>
				<td>Recipient</td>
				<td>5</td>
				<td>34 / 66</td>
				<td>—</td>
			</tr>
			<tr>
				<td>Source</td>
				<td>5</td>
				<td>34 / 66</td>
				<td><i lang="ain-Latn">wa</i></td>
			</tr>
			<tr>
				<td>Cause / Range / Purpose / Location</td>
				<td>9</td>
				<td>90 / 10</td>
				<td>—</td>
			</tr>
		</tbody>
	</table>

	<p>
		The four largest categories — Addressee, Goal, Comitative, and Benefactive — account for
		roughly three-quarters of all uses. All four share a common structural denominator: the
		applied object is an entity the action is directed toward or performed alongside. For the
		Comitative role, where the postposition <i lang="ain-Latn">tura</i> 'together with' offers
		a paraphrase, the applicative construction promotes the companion to the object slot and
		makes it indexable by the object person-prefix
		<Ref k="bugaeva2006" p="191" />. For most other roles no regular oblique paraphrase exists
		and the applicative is the only means of encoding the relationship. The Recipient and Source
		categories (5% each) stand out for their predominantly transitive base verbs (66%), a
		profile consistent with transfer and extraction verbs rather than the one-place motion verbs
		that feed the Goal uses (95% intransitive base)
		<Ref k="bugaeva2006" p="190" />.
	</p>
</S>

<S t="Goal and addressee: relations directed toward a person" id="goal-addressee">
	<p>
		With motion verbs, <i lang="ain-Latn">ko-</i> licenses the physical or spatial goal as the
		new core object. <A w="hopuni" gl="fly up (intransitive)" /> yields
		<A w="ko-hopuni" gl="fly up toward (transitive)" /> (example above) and
		<A w="hosipi" gl="return home (intransitive)" /> yields
		<A w="ko-hosipi" gl="return to (a place or entity) (transitive)" />; in both cases the
		base intransitive takes S-series suffixes while the derived transitive takes A-series
		prefixes.
	</p>
	<Ex
		m="a=kor casi a=ko-hosipi wa"
		g="4.A=have castle 4.A=APPL-return CONJ"
		tr="I returned to my castle."
		cite="nakagawa2024:198"
		dial="CHI"
		place="Nakagawa ex. 185"
		note="The Goal applied object is a=kor casi 'my castle'; base hosipi 'return home' is intransitive, ko-hosipi transitive."
	/>
	<p>
		With speech and emotion verbs the applied object is an Addressee — the person to whom an
		utterance or attitude is directed. The pair
		<A w="ko-yayirayke" gl="be grateful to (someone)" /> versus
		<A w="e-yayirayke" gl="be grateful for (something)" /> makes the semantic split explicit:
		<i lang="ain-Latn">ko-</i> takes the human target of the gratitude (Addressee),
		<i lang="ain-Latn">e-</i> takes the content — the thing one is thankful for — both with the
		same base <A w="yayirayke" gl="give thanks, be grateful" />
		<Ref k="bugaeva2006" p="190" />; <Ref k="nakagawa2024" p="197–198" />. The Saru corpus
		attests <i lang="ain-Latn">ko-yayirayke</i> with a person-deity as applied object:
	</p>
	<Ex
		m="petkorkamuy kamuy katkemat a=ko-yay-irayke hi a=ye a"
		g="river.deity deity woman 4.A=APPL-REFL-be.grateful NMLZ 4.A=say PFV"
		tr="saying that one gave thanks to the river goddess"
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, uwepeker 9; ILCAA materials aa-irc/009#289"
		note="The ko- applied object is petkorkamuy kamuy katkemat 'the river-deity divine woman'; yay-irayke 'show gratitude (reflexive of irayke)' is the base from which ko- derives the Addressee-licensed transitive."
	/>
</S>

<S t="Comitative and benefactive uses" id="comitative-benefactive">
	<p>
		When the applied object is a comitative participant — one who acts jointly with the subject
		— <i lang="ain-Latn">ko-</i> corresponds to the postpositional adjunct
		<i lang="ain-Latn">tura</i> 'together with'. The applicative construction promotes the
		companion to an indexable object position, which the adjunct cannot do. This function
		interacts productively with noun incorporation: when the comitative applied object is
		incorporated, it merges with <i lang="ain-Latn">ko-</i> inside the verb word, and the verb
		returns to intransitive arity. Nakagawa gives a Chitose example in which two comitative
		participants are incorporated in parallel constructions:
	</p>
	<Ex
		m="a=mun-ko-tata a=toy-ko-tata ayne"
		g="4.A=garbage-APPL-chop 4.A=earth-APPL-chop then"
		tr="I chopped it up together with garbage, then together with earth, and …"
		cite="nakagawa2024:198"
		dial="CHI"
		place="Nakagawa ex. 190"
		note="The comitative applied objects mun 'garbage' and toy 'earth' are incorporated between the person prefix and ko-; each incorporated form is transitive (4.A prefix a=), confirming the arity increase from the intransitive base tata."
	/>
	<p>
		Benefactive uses (18%) cover contexts in which the applied object's interests are served
		by the action, with an approximately even split across intransitive and transitive base
		verbs. At their boundary the Malefactive category (6%) shades into adversative uses: the
		applied object is the entity against whose interest the action runs, most commonly derived
		from intransitive bases (86%), consistent with the pattern of adding a new human object to
		a one-place activity verb
		<Ref k="bugaeva2006" p="190" />.
	</p>
</S>

<S t="The ko-/o- contrast" id="ko-o-contrast">
	<p>
		Both <i lang="ain-Latn">ko-</i> and <A w="o-" gl="applicative: into / toward a place" />
		can encode a directional Goal, and the primary distributional division concerns the
		applied object's reference type: <i lang="ain-Latn">o-</i> takes place nouns,
		<i lang="ain-Latn">ko-</i> takes persons, animals, and more abstract directional targets
		<Ref k="nakagawa2024" p="198–199" />. Nakagawa provides a near-minimal pair with the
		same intransitive base <A w="ek" gl="come (singular)" />:
	</p>
	<Ex
		m="tumi o-ek"
		g="war APPL-come.SG"
		tr="War came to my village."
		cite="nakagawa2024:199"
		dial="CHI"
		place="Nakagawa ex. 192"
		note="o- applied object is a place noun (the village, contextually understood); o-ek is transitive."
	/>
	<Ex
		m="tumi ko-ek"
		g="war APPL-come.SG"
		tr="War came against my sister."
		cite="nakagawa2024:199"
		dial="CHI"
		place="Nakagawa ex. 193"
		note="ko- applied object is a person (the sister, contextually understood); ko-ek is transitive."
	/>
	<p>
		The <i lang="ain-Latn">o-</i> applicative is restricted to place-denoting applied objects;
		<i lang="ain-Latn">ko-</i> extends to persons and, as the opening
		<i lang="ain-Latn">kohopuni</i> example shows, to spatial targets that function as
		directional goals without being named place nouns in the strict sense
		(<i lang="ain-Latn">kanto kotor</i> 'sky-vicinity'). The
		<i lang="ain-Latn">o-</i> applicative is considerably rarer across Hokkaido dialects and
		is largely confined to verse register <Ref k="nakagawa2024" p="199" />; its distribution
		and relationship to the spatial noun <i lang="ain-Latn">o(r)-</i> are treated in
		<Xr ch="applicative-o" />.
	</p>
</S>

<S t="ko- in the derivational chain and with e-" id="derivational-chain">
	<p>
		Because <i lang="ain-Latn">ko-</i> raises arity by one, it feeds and is fed by other
		valency operations in a regular derivational calculus. The chain built on
		<A w="ruska" gl="be angry about something (transitive)" /> illustrates eight consecutive
		derivations: <i lang="ain-Latn">ruska</i> (vt, +2) →
		<i lang="ain-Latn">ko-ruska</i> (vd, +3; adds a person-target of anger) →
		<i lang="ain-Latn">yay-ko-ruska</i> (vt, +2; reflexive fills the object slot) →
		<i lang="ain-Latn">i-ruska</i> (vi, +1; antipassive) →
		<i lang="ain-Latn">ko-i-ruska</i> (vt, +2;
		<i lang="ain-Latn">ko-</i> re-applicativizes the antipassivized verb) →
		<i lang="ain-Latn">si-ko-i-ruska</i> (vi, +1) →
		<i lang="ain-Latn">i-ruska-re</i> (vt) →
		<i lang="ain-Latn">ko-i-ruska-re</i> (vd)
		<Ref k="sato2023b" p="40" /> (citing <Ref k="bugaevakobayashi2022" p="§4.1.1" />).
		The step <i lang="ain-Latn">i-ruska</i> → <i lang="ain-Latn">ko-i-ruska</i> is
		particularly revealing: <i lang="ain-Latn">ko-</i> restores a goal participant that the
		antipassive <i lang="ain-Latn">i-</i> had absorbed, returning the verb to transitive; the
		A-series prefix confirms the derived transitivity:
	</p>
	<Ex
		m="ku=ko-i-ruska"
		g="1SG.A=APPL-ANTIP-be.angry"
		tr="I am angry at (someone)."
		constructed
		note="ko- applicativizes i-ruska 'be angry (intransitive after antipassive)', adding a person-goal as the new object; 1SG.A prefix ku= confirms transitivity. See also the antipassive chapter."
	/>
	<p>
		<i lang="ain-Latn">ko-</i> also stacks with the <Xr ch="applicative-e">e- applicative</Xr>.
		When both prefixes appear on the same verb, <i lang="ain-Latn">e-</i> adds its Content or
		Instrument applied object and <i lang="ain-Latn">ko-</i> adds its Addressee or Recipient
		applied object; the orders <i lang="ain-Latn">ko-e-</i> and
		<i lang="ain-Latn">e-ko-</i> are both attested with no reported semantic difference
		<Ref k="bugaevakobayashi2022" p="§4.1.1" />; <Ref k="bugaeva2006" p="188" />. The speech
		verb <A w="isoytak" gl="narrate, tell stories" /> is the standard illustration:
		<i lang="ain-Latn">e-ko-isoytak</i> is a three-place frame in which
		<i lang="ain-Latn">e-</i> encodes the topic narrated and
		<i lang="ain-Latn">ko-</i> the listener:
	</p>
	<Ex
		m="ku=e-ko-isoytak"
		g="1SG.A=APPL-APPL-narrate"
		tr="I narrate to (someone) about (something)."
		constructed
		cite="bugaeva2006:188"
		note="e- adds the content/topic (first applied object), ko- adds the addressee/listener (second applied object); with the 1SG.A prefix ku= and both applied objects as free NPs, the verb is three-place."
	/>
	<p>
		A sequential applicativisation of the same type underlies
		<A w="ko-e-ikka" gl="steal something from someone" />: base
		<i lang="ain-Latn">ikka</i> 'steal (vi)' → <i lang="ain-Latn">e-ikka</i> 'steal
		something (vt, <i lang="ain-Latn">e-</i> adds the stolen item)' →
		<i lang="ain-Latn">ko-e-ikka</i> 'steal something from someone (vd,
		<i lang="ain-Latn">ko-</i> adds the Source)'
		<Ref k="bugaeva2006" p="191" />. Here the
		<i lang="ain-Latn">ko-</i> applied object bears the Source role (the person stolen from),
		one of the Table 1 categories in which the transitive base (64%) predominates, as this
		chain confirms.
	</p>
	<p>
		The learner grammar of <Ref k="ijas2023" /> includes
		<i lang="ain-Latn">ekoyayirayke</i> among its ditransitive examples (Lesson 3). The form
		parses as <i lang="ain-Latn">e-ko-yay-irayke</i>: <i lang="ain-Latn">e-</i> adds the
		thing one is grateful for, <i lang="ain-Latn">ko-</i> adds the person being thanked, and
		<i lang="ain-Latn">yay-</i> is the direct-reflexive prefix on the base
		<i lang="ain-Latn">irayke</i> 'thank'. Ijäs's VD label captures the three-place output
		but does not expose the derivational layering; her example sentences are constructed and
		the morphological decomposition is spelled out here following
		<Ref k="bugaevakobayashi2022" p="§4.1.1" />. For the
		<i lang="ain-Latn">i-</i>-containing members of the chain, see
		<Xr ch="antipassive-detransitive-i" />.
	</p>
</S>

<S t="Lexicalization and less transparent ko- forms" id="lexicalization">
	<p>
		Many verb stems containing <i lang="ain-Latn">ko-</i> have undergone lexicalization, with
		internal structure that ranges from fully transparent to opaque. The form
		<A w="kosirepa" gl="arrive at, reach" /> has been proposed as
		<i lang="ain-Latn">ko-</i> + <i lang="ain-Latn">sirepa</i>, where
		<i lang="ain-Latn">sirepa</i> itself decomposes as <i lang="ain-Latn">sir-epa</i>
		(environment + <i lang="ain-Latn">e-</i>applicative + root <i lang="ain-Latn">pa</i>
		'go'), giving an original sense of directed motion toward one's surroundings
		<Ref k="aynucorporadiscord" /> (nukopoli, aynu-corpora Discord, 2023-12-14) ‹contested›.
		The Chitose compound <i lang="ain-Latn">kotan-kosirepa=an</i> 'one arrives at the village'
		incorporates <i lang="ain-Latn">kotan</i> 'village' as the
		<i lang="ain-Latn">ko-</i> applied object; the fourth-person S-series suffix
		<i lang="ain-Latn">=an</i> proves that the incorporation has reduced arity back to one
		place. The phrasal counterpart <i lang="ain-Latn">kotan a=kosirepa</i> keeps
		<i lang="ain-Latn">kotan</i> as a separate transitive object under the A-series prefix
		<i lang="ain-Latn">a=</i>, and together the two forms supply the person-affix word-hood
		diagnostic <Ref k="aynucorporadiscord" /> (nukopoli, aynu-corpora Discord, 2023-12-14)
		‹contested›.
	</p>
	<p>
		A community-proposed etymology identifies
		<A w="kopan" gl="dislike, find distasteful" /> as
		<i lang="ain-Latn">ko-</i> + <i lang="ain-Latn">pan</i>, with
		<i lang="ain-Latn">pan</i> a deverbal form of <i lang="ain-Latn">pa</i> 'mouth'; the
		semantic drift toward 'distasteful, taboo' is then tied to the later
		<i lang="ain-Latn">ko-kopan</i> and the related <i lang="ain-Latn">sir-pan</i>
		<Ref k="aynucorporadiscord" /> (nukopoli, aynu-corpora Discord, 2024-11-11) ‹speculative›.
		The synchronic meaning of <i lang="ain-Latn">kopan</i> 'dislike' does not transparently
		reflect the proposed compositional structure, and the analysis remains unverified against
		the primary lexicographic literature.
	</p>
	<p>
		A grammatically more consequential pattern involves <i lang="ain-Latn">ko-</i> appearing
		within a natural-force verb stem. The Chitose form
		<i lang="ain-Latn">ku=sir-ko-peker</i> 'I stayed up until dawn' has been parsed as an
		instance of <i lang="ain-Latn">ko-</i> interpolated into the otherwise closed
		<i lang="ain-Latn">sir-peker</i> compound (weather-brighten), with its applied object
		(the speaker, indexed by <i lang="ain-Latn">ku=</i>) raised to clause subject
		<Ref k="aynucorporadiscord" /> (nukopoli, citing Satō, aynu-corpora Discord, 2024-12-05)
		‹contested›. Parallel formations <i lang="ain-Latn">maw-ko-wen</i> and
		<i lang="ain-Latn">kur-ko-tunas</i> are proposed under the same structural type. If the
		analysis is correct, <i lang="ain-Latn">ko-</i> here operates inside a lexicalized
		natural-force compound rather than prefixing to it as a whole — a pattern that would
		distinguish this use from ordinary derivational stacking and that is not addressed in the
		primary grammatical literature.
	</p>
</S>
