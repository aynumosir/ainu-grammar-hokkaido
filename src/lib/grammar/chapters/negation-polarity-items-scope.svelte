<!--
	Negative-Polarity Indefinites and the Scope of Negation (DETAIL chapter, Part XVI).
	Apparatus added with this chapter: bib key `kanazawa1898` (金澤庄三郎 1898 アイヌ語会話辞典,
	Saru; consulted via the NINJAL topic-based digitization — three NPI sentences verified by
	corpus_search) and `haspelmath1997` (typological framework for interrogative-based
	indefinite series). No new gloss atoms. `nurmi2024` is named in the outline as a desired
	negation source but is absent from the corpus and unverifiable; no claim is attributed to it.
-->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The interrogative-based indefinite series" id="series">
	<p>
		Hokkaido Ainu builds its principal indefinite series by adding the additive focus particle
		<i lang="ain-Latn">ka</i> to an
		<Xr ch="interrogative-pro-forms">interrogative pro-form</Xr>:
		<i lang="ain-Latn">nep</i> ‘what’, <i lang="ain-Latn">nen</i> ‘who’,
		<i lang="ain-Latn">hunak</i> / <i lang="ain-Latn">ney</i> ‘where’, and
		<i lang="ain-Latn">hempara</i> ‘when’. Outside the scope of negation the resulting forms are
		existential — <i lang="ain-Latn">nep ka</i> ‘something, anything’,
		<i lang="ain-Latn">nen ka</i> ‘someone, anyone’; within the scope of a negative predicate the
		same forms are read ‘nothing’ and ‘no one’ <Ref k="nakagawa2024" p="323" />. The two readings
		are values of a single form, fixed by the polarity of the clause that contains it.
	</p>

	<table>
		<thead>
			<tr>
				<th>interrogative base</th>
				<th>with <i lang="ain-Latn">ka</i></th>
				<th>non-negative value</th>
				<th>under negation</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">nep</i> ‘what’</td>
				<td><i lang="ain-Latn">nep ka</i></td>
				<td>something, anything</td>
				<td>nothing</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">nen</i> ‘who’</td>
				<td><i lang="ain-Latn">nen ka</i></td>
				<td>someone, anyone</td>
				<td>no one</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">hunak</i>, <i lang="ain-Latn">ney</i> ‘where’</td>
				<td><i lang="ain-Latn">hunak ka</i>, <i lang="ain-Latn">ney ta … ka</i></td>
				<td>somewhere, anywhere</td>
				<td>nowhere</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">hempara</i> ‘when’</td>
				<td><i lang="ain-Latn">hempara ka</i></td>
				<td>sometime, ever</td>
				<td>never</td>
			</tr>
		</tbody>
	</table>

	<p>
		The series is of the cross-linguistically common type whose members derive from interrogatives
		and spread across a graded set of functions — specific and non-specific existential, question,
		conditional, and negation <Ref k="haspelmath1997" paren />. In Ainu the negation function is
		morphologically continuous with the existential one: there is no separate negative pronoun, and
		the ‘nothing’ / ‘no one’ reading arises only when the existential indefinite falls under a
		negator. The affirmative existential use is attested for all four bases
		<Ref k="nakagawa2024" p="323" /> and is especially frequent in interrogative and inferential
		frames, where <i lang="ain-Latn">nen ka</i> introduces a non-specific ‘someone’:
	</p>

	<Ex
		m="nen ka ek"
		g="who even come"
		tr="Someone is coming."
		constructed
		note="Constructed minimal pair to the attested negative in (3): nen ka is the plain existential ‘someone’ in a non-negative clause, the negative-polarity ‘no one’ only under a negator."
	/>

	<p>
		The morphology of the bases and the wider set of interrogative-derived forms belong with
		<Xr ch="interrogative-pro-forms" />; the particle <i lang="ain-Latn">ka</i> as additive and
		scalar focus belongs with <Xr ch="topic-marking-anakne" />. The question pursued here is how
		these forms are licensed under negation, and where the licensing negation takes scope. The
		standard negator itself is described in <Xr ch="negation-somo-standard-clausal" />.
	</p>
</S>

<S t="The licensing predicates" id="licensing">
	<p>
		Any negative predicate in the clause licenses the indefinite series. Three licensers recur:
		standard <i lang="ain-Latn">somo</i> negation, whether preverbal <i lang="ain-Latn">somo</i> V
		or the periphrasis V (<i lang="ain-Latn">ka</i>) <i lang="ain-Latn">somo ki</i> with the formal
		verb <A w="ki" gl="do" />; the negative existential <A w="isam" gl="not exist" />; and the
		negative ability verb <A w="eaykap" gl="cannot" />. In the periphrasis the notional predicate
		and its complement stand before <i lang="ain-Latn">somo ki</i>, and the polarity item falls
		inside the complement that <i lang="ain-Latn">somo</i> negates <Ref k="bugaeva2012" p="496" />;
		<Ref k="nakagawa2024" p="374, 407" />.
	</p>

	<Ex
		m="nep a=nukar ka somo ki korka"
		g="what 4.A=see even NEG do although"
		tr="Although I did not see anything,"
		cite="nakagawa2024:407"
		dial="SAR"
		note="Nakagawa ex. 833. The base nep takes its indefinite reading because it stands in the complement that somo ki negates; the second ka focuses that complement."
	/>

	<p>
		Preverbal <i lang="ain-Latn">somo</i> licenses the same series. In the topical dictionary
		<i lang="ain-Latn">nep ka</i> ‘anything’ falls under <i lang="ain-Latn">somo</i> in a polar
		question:
	</p>

	<Ex
		m="tanpe akkari nep ka somo e=kon rusuy"
		g="this.one beyond what even NEG 2SG.A=have want"
		tr="Do you not want anything more than this?"
		cite="kanazawa1898"
		dial="SAR"
		place="NINJAL topical dictionary, ‘感情’ 010#34"
		note="Kanazawa, 沙流. nep ka ‘anything’ under preverbal somo; the question expects the negative answer ‘nothing’."
	/>

	<p>
		The negative existential <i lang="ain-Latn">isam</i> licenses the series without
		<i lang="ain-Latn">somo</i>; its privative and possessive uses are treated in
		<Xr ch="negation-existential-possessive-isam" />. With <i lang="ain-Latn">nen ka</i> the result
		is ‘no one’, the negative counterpart of the existential ‘someone’ in (1):
	</p>

	<Ex
		m="nen ka isam ru-we"
		g="who even not.exist track-POSS"
		tr="Is no one there?"
		cite="kanazawa1898"
		dial="SAR"
		place="NINJAL topical dictionary, ‘問答’ 062#48"
		note="Kanazawa, 沙流. nen ka under isam yields ‘no one’; the reduced clause-final ru-we marks the polar question (see the evidential frames cross-referenced below)."
	/>

	<Ex
		m="seta ka nep ka isam pe ne a p"
		g="dog even what even not.exist NMLZ COP PFV NMLZ"
		tr="though there were no dogs or anything,"
		cite="nakagawa2024:323"
		dial="SAR"
		note="Nakagawa ex. 529. Two distinct uses of ka in one clause: additive seta ka ‘dogs too’ and the indefinite nep ka ‘anything’, both under isam."
	/>

	<p>
		The negative ability verb <i lang="ain-Latn">eaykap</i> — one of the lexical negatives treated
		in <Xr ch="negation-ability-cognition-predicates" /> — licenses the series in the same way,
		here on both the body-part object and the notional predicate:
	</p>

	<Ex
		m="a=teke-he ka a=epuni ka eaykap pe ne kusu"
		g="4.POSS=hand-POSS even 4.A=raise even cannot NMLZ COP because"
		tr="because I could not even raise my hand,"
		cite="nakagawa2024:323"
		dial="SAR"
		note="Nakagawa ex. 532. The negative-ability predicate eaykap is the licenser; ka marks scalar ‘even’ on each focused constituent."
	/>

	<p>
		The dialectal negators that replace <i lang="ain-Latn">somo</i> in the same structural slot
		license the same forms. Nakagawa's eastern-Hidaka example uses <i lang="ain-Latn">henne</i>, and
		his Shiranuka example the dialectal negator <i lang="ain-Latn">omo</i> with the focus variant
		<i lang="ain-Latn">kay</i> for <i lang="ain-Latn">ka</i> <Ref k="nakagawa2024" p="407–408" />.
	</p>

	<Ex
		m="nep ka menoko payeka siri henne eci=nukar"
		g="what even woman pass.by appearance NEG 2PL.A=see"
		tr="Did you see no sign at all that a woman had passed?"
		cite="nakagawa2024:408"
		dial="SHI"
		place="Okuda (ed.) 1999; Nakagawa ex. 837"
		note="The negator henne licenses the same nep-plus-ka indefinite as standard somo."
	/>

	<Ex
		m="nep kar kay omo an=ki wa okay=an"
		g="what do even NEG 4.A=do CONJ exist.PL=4.S"
		tr="We lived doing no work at all."
		cite="nakagawa2024:408"
		dial="HK"
		place="Shiranuka; Yotsuya 2007: 140; Nakagawa ex. 835"
		note="kay is the Shiranuka focus variant of ka, omo the Shiranuka negator; the indefinite-licensing pattern is invariant across these dialect forms."
	/>

	<p>
		The generalization across these licensers is a scope condition, not a property of the
		indefinite itself: a clause contains one negative predicate, and the
		interrogative-plus-<i lang="ain-Latn">ka</i> phrase receives a negative interpretation when it
		falls within that predicate's scope ‹consensus›. The system therefore has no negative pronouns
		of the English <em>nothing</em> kind, which carry their own negation and can negate a clause
		unaided; the Ainu forms are read negatively only in concert with an overt negator
		‹corpus-suggested›.
	</p>
</S>

<S t="The particle ka: indefinite-formation and focus" id="ka">
	<p>
		The particle <i lang="ain-Latn">ka</i> does two jobs in these clauses. It builds the indefinite
		(<i lang="ain-Latn">nep ka</i> ‘anything’), and it focuses the constituent that is negated
		(<i lang="ain-Latn">… ka somo ki</i>, <i lang="ain-Latn">… ka somo ne</i>). The two often
		co-occur, so that a single clause carries <i lang="ain-Latn">ka</i> twice, once on the
		indefinite and once on the focused predicate:
	</p>

	<Ex
		m="nep ka pawci a=omare ka somo ki"
		g="what even poison 4.A=put.in even NEG do"
		tr="I did not put in any poison."
		cite="nakagawa2024:323"
		dial="SAR"
		note="Nakagawa ex. 530. The first ka forms the indefinite nep ka ‘anything’; the second ka focuses the notional predicate a=omare before somo ki."
	/>

	<p>
		Whether <i lang="ain-Latn">ka</i> is present or absent carries no meaning of its own; negative
		clauses simply favour it, because focusing the constituent whose absence is asserted sharpens
		the denial <Ref k="nakagawa2024" p="323, 407" />. Three analyses of this
		<i lang="ain-Latn">ka</i> compete. Satō isolates a distinct ‘negative particle’
		<i lang="ain-Latn">ka</i>, left untranslated in his paradigms, while granting that it is hard to
		separate strictly from the ordinary additive particle <Ref k="sato2008" p="124–125" />. Nakagawa
		and Bugaeva keep it continuous with additive and scalar focus ‘also, even, at all’, the latter
		adding, after Tamura, a nuance of unexpectedness <Ref k="nakagawa2024" p="323, 407" />; <Ref
			k="bugaeva2012"
			p="496"
		/>. Ijäs presents the longer construction as emphatic and broadly exchangeable with plain
		<i lang="ain-Latn">somo</i>, glossing <i lang="ain-Latn">ka</i> ‘also, even, at all’
		<Ref k="ijas2023" />. The disagreement is over how many homophonous particles to recognize for a
		single surface form ‹contested›.
	</p>

	<p>
		The copular negation NP (<i lang="ain-Latn">ka</i>) <i lang="ain-Latn">somo ne</i> uses the same
		focus particle with the copula <i lang="ain-Latn">ne</i> as its host, and Ijäs treats
		<i lang="ain-Latn">ka somo ne</i> as the more emphatic way of saying ‘A is not B’
		<Ref k="sato2008" p="22" />; <Ref k="ijas2023" />:
	</p>

	<Ex
		m="tan pe anak seta ka somo ne wa"
		g="this thing TOP dog even NEG COP FIN"
		tr="This one is not a dog."
		cite="sato2008:22"
		dial="HK"
		note="Satō ex. 6. The focused predicate nominal seta ka is negated by somo before the copula ne; the same ka that builds nep ka here focuses the complement of the copula."
	/>
</S>

<S t="Scalar minimizers and exhaustive negation" id="scalar">
	<p>
		A small set of scalar items reinforces the negative reading by naming the low endpoint of the
		relevant scale. Numeral-based <i lang="ain-Latn">sinep ka</i> ‘even one’ gives ‘not even one’
		under a negator; <i lang="ain-Latn">oar</i> ‘completely’ sharpens absence to ‘absolutely none’;
		<i lang="ain-Latn">poka</i> and <i lang="ain-Latn">ponno ka</i> add a minimal-degree ‘even a
		little’ <Ref k="nakagawa2024" p="323, 407" />. None of these changes the formal licenser; the
		scalar additive <i lang="ain-Latn">poka</i> under preverbal <i lang="ain-Latn">somo</i> is
		illustrated in <Xr ch="negation-somo-standard-clausal" />.
	</p>

	<Ex
		m="i=epetturasi p sinep ka isam"
		g="4.O=be.equal NMLZ one even not.exist"
		tr="There is not a single one that is my equal."
		cite="nakagawa2024:450"
		dial="SAR"
		note="Nakagawa ex. 1025. The scalar sinep ka ‘even one’ under isam yields ‘not even one’."
	/>

	<Ex
		m="nep ka oar isam"
		g="what even completely not.exist"
		tr="There is nothing at all."
		cite="biratori1969"
		dial="SAR"
		place="Kurokawa Teshime, uwepeker ‘Piratorun nupur ekasi’"
		note="The intensifier oar ‘completely’ reinforces nep ka under isam to ‘absolutely nothing’."
	/>

	<p>
		Exhaustive negation over a list is built by repeating the negated predicate, not by a dedicated
		quantifier. Nakagawa's clause denies each member of the series in turn:
	</p>

	<Ex
		m="tu ipe somo ki re ipe somo ki no"
		g="two eat.a.meal NEG do three eat.a.meal NEG do ADV"
		tr="eating neither two meals nor three meals,"
		cite="nakagawa2024:323"
		dial="SAR"
		note="Nakagawa ex. 531. Repetition of somo ki yields exhaustive denial; the stative linker no closes the negated subordinate clause (see the subordinate-asymmetry section of the standard-negation chapter)."
	/>

	<p>
		The Handbook restates the same pattern with the coordinated
		<i lang="ain-Latn">somo ipe somo wakka ku no an</i> ‘neither eating nor drinking’, after
		Takahashi's analysis of negated subordinate clauses <Ref k="bugaeva2022" />; <Ref
			k="takahashi2016"
			p="75"
		/>. Constructed teaching examples in Ijäs use the same scalar logic, placing
		<i lang="ain-Latn">oar</i> under <i lang="ain-Latn">somo</i> for ‘completely not, absolutely
		not’; these illustrate an attested pattern but are not corpus evidence <Ref k="ijas2023" />. A
		dedicated free-choice paradigm — a distinct ‘anything whatever’ or ‘whoever’ series set apart
		from the existential one — is not described in the sources consulted; the scalar minimizers carry the
		‘even the least’ load that free-choice items carry elsewhere ‹speculative›.
	</p>
</S>

<S t="The scope of negation" id="scope">
	<p>
		The licensing condition is a scope condition: the indefinite is interpreted within the scope of
		the negative predicate of its clause, and the negator's scope is the whole verb phrase that
		contains the indefinite <Ref k="nakagawa2024" p="323" /> ‹corpus-suggested›. The clearest scope
		evidence comes from the interaction with the
		<Xr ch="evidential-schema-overview">nominalization-plus-copula evidential</Xr>. A clause closed
		by a formal noun plus <i lang="ain-Latn">ne</i> is negated by negating the verb phrase
		<em>inside</em> the nominalization; the negator and the indefinite it licenses sit in the
		embedded proposition, and the evidential frame stays outside the negation
		<Ref k="nakagawa2024" p="393" />.
	</p>

	<Ex
		m="sinep ka a=isamka ka somo ki ru-we ne kusu"
		g="one even 4.A=lose even NEG do track-POSS COP because"
		tr="since I did not lose even a single one,"
		cite="nakagawa2024:393"
		dial="SAR"
		note="Nakagawa ex. 779. The scalar sinep ka and the negation somo ki sit inside the proposition over which ru-we ne predicates evidential status; the evidential is not in the scope of somo."
	/>

	<p>
		The mirror-image order locates the boundary. With <i lang="ain-Latn">ruwe somo ne</i> the
		negator falls on the copula of the formal-noun predicate, and the clause is no longer plain
		propositional negation but a rhetorical or convictional assertion, close to ‘was it not the case
		that …?’ <Ref k="nakagawa2024" p="393" />. This high-scope copular negation does not license the
		indefinite series; the polarity items <i lang="ain-Latn">nep ka</i> and
		<i lang="ain-Latn">sinep ka</i> are licensed only in the lower, negated proposition. The
		evidential's own negation belongs with the nonverbal-predicate apparatus of
		<Xr ch="nonverbal-predicate-tam-negation" />, and the inferential frame itself with
		<Xr ch="ruwe-ne-inferential" />.
	</p>

	<p>
		Within the embedded proposition the placement of <i lang="ain-Latn">somo</i> can in principle
		leave the scope underdetermined — whether it negates the notional verb or only the existential
		that hosts the evidential — and Dal Corso's evidentiality study reports both readings for the
		relevant configurations <Ref k="dalcorso2018" p="128" />. The read Hokkaido grammars describe the
		scope facts but settle no constituency analysis that would adjudicate such ambiguities
		‹contested›.
	</p>
</S>

<S t="Boundaries and open questions" id="limits">
	<p>
		The sources settle the basic pattern: interrogative-plus-<i lang="ain-Latn">ka</i> forms are
		existential outside negation and negative within it, and they are licensed alike by standard
		<i lang="ain-Latn">somo</i>, by dialectal negators such as <i lang="ain-Latn">henne</i> and
		<i lang="ain-Latn">omo</i>, and by lexical negatives such as <i lang="ain-Latn">isam</i> and
		<i lang="ain-Latn">eaykap</i> ‹consensus›. They do not provide a quantified corpus study of the
		individual indefinite types, or a formal account of the scope ambiguities in evidential and
		nominalized clauses; the corpus tools available here count lemmas, not the multi-word
		<i lang="ain-Latn">[interrogative] ka … somo</i> configurations, so no per-construction frequency
		is asserted ‹corpus-suggested›.
	</p>

	<p>
		The remaining analytic boundary is with ordinary focus. Because the same
		<i lang="ain-Latn">ka</i> marks addition, scalar focus, and the indefinite series, a single
		negative clause routinely shows the particle twice — once forming an indefinite, once focusing
		the negated predicate — and the grammars agree on the surface distribution while disagreeing on
		how many particles to posit ‹contested›. The general account of the particle, including its
		positive uses, is the necessary counterpart, given with
		<Xr ch="topic-marking-anakne">the focus and additive particle</Xr>.
	</p>
</S>
