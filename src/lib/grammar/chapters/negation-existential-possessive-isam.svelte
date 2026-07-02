<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Place in the negation system" id="system">
	<p>
		Hokkaido Ainu negates existence and possession with verbs whose meaning already contains the
		negation, leaving the preverbal adverb <i lang="ain-Latn">somo</i> absent. The negative
		existential is <A w="isam" gl="not exist, be gone" />, the lexical counterpart of the positive
		existentials <A w="an" gl="exist, be located" /> (singular) and <i lang="ain-Latn">oka(y)</i>
		(plural); the privative <A w="sak" gl="lack, be without" /> is the lexical counterpart of
		<A w="kor" gl="have" /> <Ref k="bugaeva2012" p="496" />; <Ref k="nakagawa2024" p="450" />.
		Because the negative resides in the verb, the predicate indexes its arguments in the ordinary way
		and no adverbial negator is added. The standard <i lang="ain-Latn">somo</i> strategy is treated
		in <Xr ch="negation-somo-standard-clausal" />, the positive existential and locational predicates
		in <Xr ch="existential-locational-an-oka" />, and predicative possession with
		<i lang="ain-Latn">kor</i> in <Xr ch="predicative-possession-clauses" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>domain</th>
				<th>positive predicate</th>
				<th>lexical negative</th>
				<th>analytic alternative</th>
				<th>basic syntax</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>existence / location</td>
				<td><i lang="ain-Latn">an</i> SG, <i lang="ain-Latn">oka(y)</i> PL</td>
				<td><i lang="ain-Latn">isam</i> ‘not exist, be gone’</td>
				<td><i lang="ain-Latn">somo an</i></td>
				<td>the absent entity is the sole argument (S)</td>
			</tr>
			<tr>
				<td>have-possession</td>
				<td><i lang="ain-Latn">kor</i> ‘have’</td>
				<td><i lang="ain-Latn">sak</i> ‘lack, be without’</td>
				<td><i lang="ain-Latn">somo kor</i>, reported for southern Hokkaido</td>
				<td>the possessor is subject, the lacked entity its object/complement</td>
			</tr>
		</tbody>
	</table>

	<p>
		<i lang="ain-Latn">isam</i> and <i lang="ain-Latn">sak</i> belong to a wider class of lexical
		negatives that also includes <i lang="ain-Latn">eaykap</i> ‘cannot’,
		<i lang="ain-Latn">eramiskari</i> ‘never, not know by experience’, and
		<i lang="ain-Latn">erampewtek</i> ‘not understand’, all of which carry negative polarity as part
		of their lexical content <Ref k="bugaeva2012" p="496" />; <Ref k="nakagawa2024" p="314–315" />.
		The ability and cognition members of that class are treated in
		<Xr ch="negation-ability-cognition-predicates" />; the present chapter takes the existential and
		possessive members. Ijäs groups the same items as ‘lexically negated verbs’, pairing
		<i lang="ain-Latn">an</i>/<i lang="ain-Latn">oka</i> with <i lang="ain-Latn">isam</i> and
		<i lang="ain-Latn">kor</i> with <i lang="ain-Latn">sak</i> <Ref k="ijas2023" />.
	</p>
</S>

<S t="The negative existential isam" id="isam-verb">
	<p>
		<i lang="ain-Latn">isam</i> is a one-place intransitive verb. It takes the entity whose absence
		is asserted as its sole argument and indexes it with the ordinary intransitive person set —
		<i lang="ain-Latn">ku=isam</i> ‘I am gone/absent’, <i lang="ain-Latn">e=isam</i> ‘you are
		gone’ — while a third-person subject is zero-marked. Dal Corso notes that
		<i lang="ain-Latn">isam</i> is the only intransitive member of the lexical-negative class
		<Ref k="dalcorso2025neg" p="41" />. Its single argument slot serves as a constituency diagnostic:
		a clause containing two independent noun phrases cannot be a simple
		<i lang="ain-Latn">isam</i> predication, since the verb supplies only one position
		<Ref k="nakagawa2024" />. The Handbook flags one <i lang="ain-Latn">isam</i> clause whose lack of
		an overt personal affix it finds unexpected, against the normal pattern in which the verb does
		index its subject <Ref k="bugaeva2022" />.
	</p>

	<Ex
		m="i=epetturasi p sinep ka isam"
		g="4.O=rival NMLZ one even not.exist"
		tr="There is not even one who can rival me."
		cite="nakagawa2024:450"
		dial="SAR"
		place="Nakagawa ex. 1025"
		note="The negative-polarity phrase sinep ka ‘even one’ is licensed by the negative existential isam; the object prefix i= belongs to epetturasi ‘rival, be a match for’, not to isam."
	/>

	<p>
		<i lang="ain-Latn">isam</i> licenses the same <i lang="ain-Latn">ka</i>-indefinite polarity
		items that occur under <i lang="ain-Latn">somo</i>: <i lang="ain-Latn">nep ka</i> ‘anything’
		reads ‘nothing’ in its scope, and the additive <i lang="ain-Latn">ka</i> may be repeated across
		several indefinites for an exhaustive ‘nothing at all’ <Ref k="nakagawa2024" p="323" />. The
		indefinite series and the scope of negation over it are set out in
		<Xr ch="negation-polarity-items-scope" />.
	</p>

	<Ex
		m="seta ka nep ka isam pe ne a p"
		g="dog even something even not.exist NMLZ COP PFV NMLZ"
		tr="There was not even a dog or anything,"
		cite="nakagawa2024:323"
		dial="SAR"
		place="Nakagawa ex. 529"
		note="Repeated ka ‘even’ over seta ‘dog’ and nep ‘anything’ yields the exhaustive reading under isam; the tail pe ne a p nominalizes the clause and carries the adversative ‘but’."
	/>

	<Ex
		m="k=uni-hi okari anakne nep ka isam"
		g="1SG=home-POSS around TOP something even not.exist"
		tr="There is nothing around my house."
		cite="sato2008"
		dial="HK"
		note="Satō’s negation example. The locative phrase k=uni-hi okari ‘around my house’ fixes the domain of absence, and the absent entity is the ka-indefinite nep ka, subject of isam."
	/>

	<p>
		Two values of <i lang="ain-Latn">isam</i> should be kept apart. The existential value ‘there is
		none’ denies presence in a place or discourse domain; the change-of-state value ‘be gone’
		presents absence as the result of a disappearance, and extends to a person’s death or absence
		<Ref k="bugaeva2012" p="496" />. The second value survives in the auxiliary
		<i lang="ain-Latn">wa isam</i>, where a verb phrase linked by <i lang="ain-Latn">wa</i> leads to
		a state in which the relevant participant or result has disappeared, the source of renderings
		such as ‘V away’ or ‘end up gone’ <Ref k="nakagawa2024" p="450" />. Its aspectual placement among
		the <i lang="ain-Latn">wa</i>-auxiliaries is taken up in
		<Xr ch="phasal-iterative-habitual-aspect" />.
	</p>
</S>

<S t="isam and the somo strategy" id="somo-interface">
	<p>
		The lexical <i lang="ain-Latn">isam</i> does not displace the positive existential
		<i lang="ain-Latn">an</i>/<i lang="ain-Latn">oka</i>. An existential or locational predicate may
		still be negated analytically by placing <i lang="ain-Latn">somo</i> before
		<i lang="ain-Latn">an</i>, as with any verbal predicate <Ref k="nakagawa2024" p="365–366" />;
		<Ref k="sato2008" p="124" />. The read sources agree that <i lang="ain-Latn">isam</i> is the
		lexical negative of the existential, but they do not quantify when a speaker selects lexical
		<i lang="ain-Latn">isam</i> over analytic <i lang="ain-Latn">somo an</i>.
	</p>

	<p>
		Ijäs proposes a semantic division: <i lang="ain-Latn">isam</i> denotes complete absence or
		disappearance, while <i lang="ain-Latn">somo an</i> is used where <i lang="ain-Latn">an</i>
		keeps its broader value ‘live, be located’, and can additionally mark an absurd or impossible
		existence <Ref k="ijas2023" />. The division is plausible, since <i lang="ain-Latn">an</i>
		independently covers existence, location, and residence and positive predicates are negatable by
		<i lang="ain-Latn">somo</i>; the precise split is her pedagogical formulation and is not stated
		in those terms by Nakagawa, Satō, or Bugaeva ‹speculative›. The <i lang="ain-Latn">somo an</i>
		side of the contrast is treated in <Xr ch="negation-somo-standard-clausal" s="preverbal-somo" />.
	</p>

	<p>
		The same caution applies to the blocking rule. Ijäs presents <i lang="ain-Latn">isam</i> and
		<i lang="ain-Latn">sak</i> as the normal negatives wherever such a paired verb exists, so that
		<i lang="ain-Latn">somo</i> plus the positive counterpart is ‘not usually possible’
		<Ref k="ijas2023" />. Dal Corso reports southern Hokkaido <i lang="ain-Latn">somo kor</i> ‘not
		have’ beside <i lang="ain-Latn">sak</i>, with a pragmatic difference supplied by Nakagawa
		<Ref k="dalcorso2025neg" p="41 n.1" />, and Bugaeva characterizes these verbs only as containing
		negation in their meaning, not as barring <i lang="ain-Latn">somo</i> <Ref k="bugaeva2012" p="496" />.
		The evidence supports a lexical preference; a categorical ban overstates the distribution
		‹contested›.
	</p>
</S>

<S t="Possessive negation: sak" id="possessive-negation">
	<p>
		Possessive negation is distributed over two related constructions. Where the missing entity is
		profiled as absent from a possessor’s sphere, an existential <i lang="ain-Latn">isam</i> clause
		expresses ‘there is no X (for Y)’. Where the possessor is the subject of a privative predicate,
		the verb is <i lang="ain-Latn">sak</i>. Bugaeva identifies <i lang="ain-Latn">sak</i> as the
		lexical negative of <i lang="ain-Latn">kor</i> ‘have’ <Ref k="bugaeva2012" p="496" />, and Ijäs
		gives the same pair <Ref k="ijas2023" />. For positive predicative possession and the
		nominal affiliative alternatives to <i lang="ain-Latn">kor</i>, see
		<Xr ch="predicative-possession-clauses" /> and
		<Xr ch="concept-form-affiliative-form">the possessed form</Xr>.
	</p>

	<p>
		<i lang="ain-Latn">sak</i> is transitive: the possessor is its subject and the lacked thing its
		object, so a nominalized <i lang="ain-Latn">ona sak pe</i> is ‘father-lack NMLZ’, hence ‘one who
		has no father’, with the lacked kin term as the complement of <i lang="ain-Latn">sak</i>
		<Ref k="bugaeva2012" p="496" />. The privative base also enters lexical compounds, such as the
		tabooed snake-name <i lang="ain-Latn">sak-somo-ay-ep</i> recorded by Nakagawa
		<Ref k="nakagawa2024" />.
	</p>

	<Ex
		m="ene an nispa maci-hi ene tamasay ka sak ru-we an hi an"
		g="such exist rich.man wife-POSS such necklace even lack track-POSS exist NMLZ exist"
		tr="The wife of such a wealthy man does not even have a necklace."
		cite="nakagawa2024:323"
		dial="SAR"
		place="Nakagawa ex. 533"
		note="The possessor is the wife (maci-hi); the lacked entity tamasay ka ‘even a necklace’ is the object of privative sak. The tail ru-we an hi an is the situational-evidential frame, handled in the evidential chapters."
	/>

	<Ex
		m="ku=kor pukuro sak no ku=hosipi"
		g="1SG.A=have bag lack ADV 1SG.S=return"
		tr="I went home without my bag."
		cite="ijas2023"
		constructed
		dial="HK"
		note="Ijäs’s constructed example. The lacked entity is the possessive phrase ku=kor pukuro ‘my bag’; sak chains to the main clause with the stative linker no."
	/>

	<p>
		The <i lang="ain-Latn">no</i> of the constructed example reflects a general linkage pattern:
		negative and negative-meaning predicates favour the stative adverbial linker
		<i lang="ain-Latn">no</i> over successive <i lang="ain-Latn">wa</i>. Takahashi gives Tokachi
		evidence that negated subordinate clauses select <i lang="ain-Latn">no</i>, and Nakagawa states
		the rule for stative, negative-meaning, or overtly negated verb phrases <Ref k="takahashi2016" p="75–77" />;
		<Ref k="nakagawa2024" p="340" />. Ijäs extends the observation to lexical negatives such as
		<i lang="ain-Latn">sak</i> and <i lang="ain-Latn">isam</i> <Ref k="ijas2023" />. The
		symmetric/asymmetric typology behind the <i lang="ain-Latn">no</i>-only restriction is set out in
		<Xr ch="negation-somo-standard-clausal" s="typology" />.
	</p>
</S>

<S t="Diachrony: *sam and the negative-existential cycle" id="diachrony">
	<p>
		Dal Corso’s comparative account of Ainu negation is anchored in a Sakhalin study but makes a
		specific Hokkaido-facing proposal. He reconstructs a negative-existential root
		<i lang="ain-Latn">*sam</i> and analyses Hokkaido <i lang="ain-Latn">isam</i> as the
		<Xr ch="antipassive-detransitive-i">antipassive</Xr> prefix <i lang="ain-Latn">i-</i> on that
		transitive root, with antipassivization yielding the intransitive ‘not exist’; the standard
		negator <i lang="ain-Latn">somo</i> is derived in the same account from
		<i lang="ain-Latn">*samno</i> through final stress and an <i lang="ain-Latn">a</i>/<i
			lang="ain-Latn">o</i> change <Ref k="dalcorso2025neg" p="41–42" />. On this reconstruction a
		single source <i lang="ain-Latn">*sam</i> underlies both the surviving negative existential
		<i lang="ain-Latn">isam</i> and the general clausal negator <i lang="ain-Latn">somo</i>. The read
		Hokkaido reference grammars present no such etymology, so the shared-root analysis is a
		diachronic hypothesis rather than a synchronic fact about Hokkaido clauses ‹speculative›.
	</p>

	<p>
		Ijäs independently reaches essentially the same segmentation, <i lang="ain-Latn">i-</i> plus a
		lost transitive <i lang="ain-Latn">sam*</i> ‘something is not located’, and explicitly labels it
		speculation <Ref k="ijas2023" />. The convergence of her lesson note with Dal Corso’s
		philological argument raises the point from an isolated pedagogical guess to a live scholarly
		proposal. It remains a proposal: for ordinary clause grammar <i lang="ain-Latn">isam</i> behaves
		as a single intransitive negative existential, with no productive alternation involving a free
		<i lang="ain-Latn">sam</i> root ‹speculative›.
	</p>

	<p>
		The reconstruction situates Ainu within two diachronic models that Dal Corso applies to it: the
		Givón negative cycle, by which a negator is periodically renewed, and the Negative Existential
		Cycle, by which a negative existential predicate develops into a general clausal negator and may
		leave existential traces in the result <Ref k="givon1978" paren />; <Ref k="croft1991" paren />;
		<Ref k="dalcorso2025neg" p="41–42" />. The cycle would explain why a negative existential and a
		standard negator are diachronically connected in one account while occupying distinct synchronic
		constructions. Its application to Hokkaido is a historical hypothesis, not a synchronic
		generalization ‹speculative›: in the present-day grammar <i lang="ain-Latn">isam</i> is a verb,
		and <i lang="ain-Latn">somo</i> the preverbal negative adverb of
		<Xr ch="negation-somo-standard-clausal" />.
	</p>
</S>
