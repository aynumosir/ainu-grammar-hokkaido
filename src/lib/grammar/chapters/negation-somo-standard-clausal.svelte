<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Place in the negation system" id="system">
	<p>
		Standard clausal negation in Hokkaido Ainu is carried by the free adverb
		<A w="somo" gl="not" />, placed before the predicate phrase. The verb itself takes no negative
		inflection; the language has no negative conjugation comparable to the Japanese verb-final
		suffix <i lang="ja">ない</i> <Ref k="nakagawa2024" p="365–366, 407" />; <Ref
			k="sato2008"
			p="124"
		/>; <Ref k="bugaeva2012" p="496" />. Nakagawa is explicit that the preverbal position is not a
		negation-specific rule: <i lang="ain-Latn">somo</i> is an adverb, and the general principle that
		a modifier precedes the phrase it modifies puts it, like any other preverbal adverb, in front of
		the verb <Ref k="nakagawa2024" p="366" />. The negator can also stand alone as a one-word reply,
		<i lang="ain-Latn">somo</i> ‘no, that is not so’ <Ref k="nakagawa2024" p="408" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>strategy</th>
				<th>form</th>
				<th>main use</th>
				<th>treated in</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>standard verbal negation</td>
				<td><i lang="ain-Latn">somo</i> V</td>
				<td>negative declarative verbal clause</td>
				<td>this chapter</td>
			</tr>
			<tr>
				<td>periphrastic standard negation</td>
				<td>V (<i lang="ain-Latn">ka</i>) <i lang="ain-Latn">somo ki</i></td>
				<td>ordinary or emphatic verbal negation with the formal verb <i lang="ain-Latn">ki</i></td>
				<td>this chapter</td>
			</tr>
			<tr>
				<td>copular negation</td>
				<td>NP (<i lang="ain-Latn">ka</i>) <i lang="ain-Latn">somo ne</i></td>
				<td>negative predicate-nominal clause</td>
				<td>this chapter; <Xr ch="copula-ne-predicate-nominals" /></td>
			</tr>
			<tr>
				<td>negative existential and privative</td>
				<td><i lang="ain-Latn">isam</i>, <i lang="ain-Latn">sak</i></td>
				<td>‘there is none’, ‘lack, be without’</td>
				<td><Xr ch="negation-existential-possessive-isam" /></td>
			</tr>
			<tr>
				<td>negative ability and cognition</td>
				<td><i lang="ain-Latn">eaykap</i>, <i lang="ain-Latn">eramiskari</i>, and peers</td>
				<td>‘cannot’, ‘have never’, ‘do not understand’</td>
				<td><Xr ch="negation-ability-cognition-predicates" /></td>
			</tr>
			<tr>
				<td>polarity-sensitive indefinites</td>
				<td><i lang="ain-Latn">nep ka</i>, <i lang="ain-Latn">nen ka</i></td>
				<td>‘nothing’, ‘no one’ under negation</td>
				<td><Xr ch="negation-polarity-items-scope" /></td>
			</tr>
			<tr>
				<td>prohibitive</td>
				<td><i lang="ain-Latn">iteki</i> V</td>
				<td>negative directive</td>
				<td><Xr ch="negation-prohibitive-iteki" /></td>
			</tr>
		</tbody>
	</table>

	<p>
		The table separates standard negation from the lexical and directive systems that also yield
		negative meanings, and the split has syntactic consequences. A clause built on
		<A w="isam" gl="not exist" /> or <A w="eaykap" gl="cannot" /> contains a negative predicate that
		indexes its arguments in the ordinary way; a clause with <i lang="ain-Latn">somo</i> keeps the
		positive predicate and places a negative adverb in its scope. Satō formalises the division by
		predicate type: a verbal clause is negated as <i lang="ain-Latn">[subject] V (ka) somo ki</i> or
		with preverbal <i lang="ain-Latn">somo</i> directly before the verb, while a copular clause is
		negated as <i lang="ain-Latn">[subject] [complement] (ka) somo ne</i>, with the negator before
		the <Xr ch="copula-ne-predicate-nominals">copula</Xr> <i lang="ain-Latn">ne</i>
		<Ref k="sato2008" p="22" />. Ijäs presents the same architecture for learners: copular ‘A is
		not B’ is <i lang="ain-Latn">A B somo ne</i>, agreeing with Satō’s paradigm and Nakagawa’s
		ordering description <Ref k="ijas2023" />; <Ref k="sato2008" p="22" />; <Ref
			k="nakagawa2024"
			p="365"
		/>.
	</p>
</S>

<S t="Preverbal somo" id="preverbal-somo">
	<p>
		With a verbal predicate, <i lang="ain-Latn">somo</i> stands immediately before the person-marked
		verb. Satō states the adjacency as a rule: the negator precedes the verb, and the personal index
		is part of the verb form, so the negator cannot intervene between the index and its stem —
		<i lang="ain-Latn">somo ku=arpa</i> ‘I do not go’, never <i lang="ain-Latn">*ku=somo=arpa</i>
		<Ref k="sato2008" p="124" />; <Ref k="nakagawa2024" p="407" />. Ijäs gives learners the same
		warning against splitting the personal affix from its stem with the negator <Ref k="ijas2023" />.
	</p>

	<Ex
		m="noka-ha poka somo a=nukar"
		g="figure-POSS even NEG 4.A=see"
		tr="One did not even see its figure."
		cite="nakagawa2024:407"
		dial="SAR"
		note="Nakagawa ex. 832. The simple preverbal pattern; the possessed noun noka-ha carries the additive poka ‘even’, a polarity item licensed under somo."
	/>

	<Ex
		m="somo k=arpa wa"
		g="NEG 1SG.S=go.SG FIN"
		tr="I will not go."
		cite="bugaeva2012:496"
		dial="CHI"
		place="Bugaeva ex. 73, siglum NN 28 (Nakagawa Chitose data)"
	/>

	<p>
		For an ordinary verb the bare frame <i lang="ain-Latn">somo</i> V is grammatical but, by Satō’s
		report, used less often than the <i lang="ain-Latn">ka somo ki</i> periphrasis of the next
		section <Ref k="sato2008" p="22" />. A modal or other postverbal element follows the verb in
		its normal place, with the negator still at the front of the predicate:
	</p>

	<Ex
		m="tanto anak somo ek nankor wa"
		g="today TOP NEG come.SG probably FIN"
		tr="He probably will not come today."
		cite="sato2008:22"
		dial="HK"
		note="The negator precedes the verb ek; the dubitative nankor and the final wa stay in their postverbal positions."
	/>

	<p>
		Standard negation here is symmetric in the sense of the typology of negation: the affirmative
		and negative declarative clauses differ only by the added negative morpheme, with no separate
		negative verb form or special negative agreement <Ref k="miestamo2005" paren />; <Ref
			k="takahashi2016"
			p="75"
		/>. Takahashi’s Tokachi weather predicate gives the minimal pair, the affirmative
		<i lang="ain-Latn">ruyanpe ruy</i> ‘it rained’ differing from its negation by
		<i lang="ain-Latn">somo</i> alone:
	</p>

	<Ex
		m="ruyanpe somo ruy"
		g="rain NEG be.intense"
		tr="It did not rain."
		lit="the rain was not intense"
		cite="takahashi2016:75"
		dial="TOK"
		note="Takahashi ex. 11b, against the affirmative ruyanpe ruy ‘it rained’ (ex. 11a); the clauses differ only in somo."
	/>

	<p>
		Preverbal <i lang="ain-Latn">somo</i> also negates the existential-locational predicate
		<A w="an" gl="exist, be located" />, where the positive verb stays available alongside the
		suppletive negative existential <i lang="ain-Latn">isam</i>. Ijäs draws a semantic line between
		the two — <i lang="ain-Latn">isam</i> for outright absence or disappearance,
		<i lang="ain-Latn">somo an</i> where the ‘live, be located’ reading of <i lang="ain-Latn">an</i>
		is to be preserved — but the exact split is her own formulation and is not stated in those terms
		by the read grammars ‹contested› <Ref k="ijas2023" />. The privative paradigm and possessive
		uses of <i lang="ain-Latn">isam</i> are treated in
		<Xr ch="negation-existential-possessive-isam" />.
	</p>
</S>

<S t="The somo ki periphrasis" id="somo-ki">
	<p>
		The second verbal frame places the notional predicate before <i lang="ain-Latn">somo ki</i>,
		with optional <i lang="ain-Latn">ka</i> between them: V (<i lang="ain-Latn">ka</i>)
		<i lang="ain-Latn">somo ki</i>. Bugaeva gives the compositional analysis: it is the verb
		<A w="ki" gl="do" /> that <i lang="ain-Latn">somo</i> formally negates, while the notional verb
		functions as an object-like complement of <i lang="ain-Latn">ki</i>; the notional verb keeps its
		person marking and <i lang="ain-Latn">ki</i> carries none <Ref k="bugaeva2012" p="496" />.
		Nakagawa treats the same string as one use of the formal verb <i lang="ain-Latn">ki</i>, which
		supplies a verbal host so that conjunctions and clause-final material can attach <Ref
			k="nakagawa2024"
			p="374, 407"
		/>. Ijäs’s pedagogical account agrees, describing <i lang="ain-Latn">ki</i> as a dummy ‘do’ verb
		filling the slot that <i lang="ain-Latn">somo</i> cannot occupy on its own <Ref k="ijas2023" />.
		Against this, Satō’s description of Chitose, as reported by Takahashi, analyses
		<i lang="ain-Latn">somo ki</i> as a single auxiliary rather than as <i lang="ain-Latn">ki</i>
		negated over a complement; the internal constituency of the periphrasis is therefore genuinely
		disputed ‹contested› <Ref k="sato2008" p="86" />; <Ref k="takahashi2016" p="74" />. Refsing
		records the construction for Shizunai as well <Ref k="refsing1986" p="214–215" />.
	</p>

	<Ex
		m="nep a=nukar ka somo ki korka"
		g="something 4.A=see even NEG do although"
		tr="Although I did not see anything,"
		cite="nakagawa2024:407"
		dial="SAR"
		note="Nakagawa ex. 833. The periphrasis with ka; the indefinite nep ka ‘anything’ is licensed under the negation."
	/>

	<Ex
		m="eci=yayeymontasa somo ki yakka"
		g="2PL.S=take.revenge NEG do even.if"
		tr="Even if you do not take revenge,"
		cite="nakagawa2024:407"
		dial="SAR"
		note="Nakagawa ex. 834. The same periphrasis without ka; yayeymontasa is intransitive, so eci= indexes the 2PL subject."
	/>

	<p>
		Nakagawa finds no clear semantic contrast between the preverbal frame and the
		<i lang="ain-Latn">somo ki</i> frame, and likewise no special meaning in the presence or absence
		of <i lang="ain-Latn">ka</i> <Ref k="nakagawa2024" p="374, 407" />; Ijäs treats the longer
		construction as broadly exchangeable with plain <i lang="ain-Latn">somo</i> <Ref k="ijas2023" />.
		When <i lang="ain-Latn">ka</i> is present it brackets the notional predicate as the focused
		complement of <i lang="ain-Latn">ki</i>:
	</p>

	<Ex
		m="ku=iruska ka somo ki wa"
		g="1SG.S=be.angry even NEG do FIN"
		tr="I am not angry."
		cite="bugaeva2012:496"
		dial="SAR"
		place="Bugaeva ex. 74, siglum T2 239 (Tamura 2000: 239)"
		note="The bracketed [ku=iruska ka] is the object-like complement that ki formally negates."
	/>

	<p>
		Ijäs additionally suggests that the postverbal <i lang="ain-Latn">ka somo ki</i> arose as a
		calque on Japanese verb-final negation, with preverbal <i lang="ain-Latn">somo</i> as the older
		Ainu pattern. No read Hokkaido source supports a contact origin, and Dal Corso’s diachronic
		account of Ainu negation derives the periphrastic forms internally, so the contact hypothesis is
		best left as her own conjecture ‹speculative› <Ref k="ijas2023" />; <Ref
			k="dalcorso2025neg"
			p="41–42"
		/>.
	</p>
</S>

<S t="Copular negation and the particle ka" id="copular-negation">
	<p>
		A predicate-nominal clause is negated by placing <i lang="ain-Latn">somo</i> before the copula
		<i lang="ain-Latn">ne</i>, optionally with <i lang="ain-Latn">ka</i>: NP
		(<i lang="ain-Latn">ka</i>) <i lang="ain-Latn">somo ne</i> <Ref k="sato2008" p="22" />; <Ref
			k="nakagawa2024"
			p="365"
		/>. Satō notes that the alternative <i lang="ain-Latn">ne ka somo ki</i>, expected if
		<i lang="ain-Latn">ne</i> is fed through the ordinary <i lang="ain-Latn">somo ki</i> frame as a
		verb, is scarcely attested; the productive negator of the copular clause is
		<i lang="ain-Latn">somo ne</i> or <i lang="ain-Latn">ka somo ne</i> <Ref k="sato2008" p="22" />.
	</p>

	<Ex
		m="tan pe anak seta ka somo ne wa"
		g="this thing TOP dog even NEG COP FIN"
		tr="This one is not a dog."
		cite="sato2008:22"
		dial="HK"
		note="Satō ex. 6. Copular ka somo ne; somo precedes the copula ne, with ka on the complement seta."
	/>

	<p>
		The particle <i lang="ain-Latn">ka</i> in <i lang="ain-Latn">ka somo ki</i> and
		<i lang="ain-Latn">ka somo ne</i> is the ordinary additive and focus particle ‘also, even, at
		all’, here attached to the negated constituent. Nakagawa observes that negative clauses favour
		<i lang="ain-Latn">ka</i> — adding focus to the element whose absence is asserted sharpens the
		negation — while its presence carries no meaning of its own <Ref k="nakagawa2024" p="323, 407" />.
		Satō isolates a distinct ‘negative particle’ <i lang="ain-Latn">ka</i>, left untranslated in his
		paradigms, while granting that it is hard to separate strictly from the additive particle; for
		Bugaeva, following Tamura, the same <i lang="ain-Latn">ka</i> focuses the complement with a
		nuance of unexpectedness <Ref k="sato2008" p="124–125" />; <Ref k="bugaeva2012" p="496" />. The
		divergence is one of analysis and terminology over a single form ‹contested›. Ijäs presents
		<i lang="ain-Latn">ka somo ne</i> as the more emphatic equative negation, glossing
		<i lang="ain-Latn">ka</i> ‘also, even, at all’ <Ref k="ijas2023" />.
	</p>

	<p>
		The same <i lang="ain-Latn">ka</i> builds the negative-polarity indefinites
		<i lang="ain-Latn">nep ka</i> ‘anything, and under negation nothing’ and
		<i lang="ain-Latn">nen ka</i> ‘anyone, no one’, whose licensing depends on the scope of the
		negator over the whole clause; that interaction is treated in
		<Xr ch="negation-polarity-items-scope" />.
	</p>
</S>

<S t="Negation under the evidential predicate" id="evidential-scope">
	<p>
		A clause closed by a formal noun plus <i lang="ain-Latn">ne</i> — the
		<Xr ch="evidential-schema-overview">evidential</Xr> frames
		<i lang="ain-Latn">ruwe ne</i>, <i lang="ain-Latn">hawe ne</i>,
		<i lang="ain-Latn">siri ne</i>, <i lang="ain-Latn">humi ne</i> — is negated by negating the
		verb phrase inside the nominalization, leaving the evidential frame itself in place. Nakagawa
		states the rule directly: the negative counterpart of such a clause makes the verb phrase before
		the formal noun negative, so the negation scopes below the evidential <Ref
			k="nakagawa2024"
			p="393"
		/>.
	</p>

	<Ex
		m="sinep ka a=isamka ka somo ki ru-we ne kusu"
		g="one even 4.A=lose even NEG do track-POSS COP because"
		tr="Since I did not lose even a single one,"
		cite="nakagawa2024:393"
		dial="SAR"
		note="Nakagawa ex. 779. The negated predicate a=isamka ka somo ki sits inside the evidential ru-we ne; the evidential itself is outside the scope of somo."
	/>

	<p>
		A surface-similar sequence in which the negator falls on the copula of the evidential,
		<i lang="ain-Latn">ruwe somo ne</i>, is not ordinary clausal negation but a rhetorical or
		convictional construction, close to ‘was it not the case that …?’ <Ref k="nakagawa2024" p="393" />.
		The contrast — propositional negation inside the evidential against the high-scope rhetorical
		frame on the copula — belongs with the evidential paradigm in
		<Xr ch="evidential-schema-overview" />.
	</p>
</S>

<S t="Symmetry and subordinate asymmetry" id="typology">
	<p>
		In main declarative clauses, verbal and copular alike, <i lang="ain-Latn">somo</i> negation is
		symmetric: the negative clause retains the predicate architecture of the affirmative and adds
		the negative adverb before the predicate <Ref k="miestamo2005" paren />; <Ref
			k="takahashi2016"
			p="75"
		/>. Subordinate clauses behave differently. Hokkaido temporal adverbial clauses link with
		several conjunctive particles — <i lang="ain-Latn">wa</i> for a successive event,
		<i lang="ain-Latn">no</i> for a stative one — but a negated adverbial clause selects only
		<i lang="ain-Latn">no</i>, and the successive <i lang="ain-Latn">wa</i> is blocked <Ref
			k="takahashi2016"
			p="75–77"
		/>.
	</p>

	<Ex
		m="somo ipe no mokor"
		g="NEG eat.a.meal ADV sleep"
		tr="He went to sleep without eating."
		cite="bugaeva2022; takahashi2016:76"
		dial="HK"
		note="The parallel with the successive linker, *somo ipe wa mokor, is ungrammatical: a negated event links only with the stative no."
	/>

	<p>
		The restriction is uncontroversial as a fact ‹consensus›; its explanation is the live
		contribution. Following Tamura’s analysis that the negation of an action is construed as a
		static state rather than as an event, Takahashi and the Handbook treat the
		<i lang="ain-Latn">no</i>-only pattern as an asymmetry driven by aspect, with the choice of
		linker depending on polarity <Ref k="takahashi2016" p="76" />; <Ref k="bugaeva2022" />.
		Nakagawa’s account of <i lang="ain-Latn">no</i> gives the same conditioning from the affirmative
		side: <i lang="ain-Latn">no</i> links a preceding phrase that is stative, negative in meaning,
		or an action verb accompanied by a negative element <Ref k="nakagawa2024" p="340" />. Whether
		the dependency is best modelled as aspect government, as reduced transitivity, or pragmatically
		remains open in the literature ‹contested›.
	</p>
</S>

<S t="Boundaries and open questions" id="boundaries">
	<p>
		Several negative meanings adjacent to <i lang="ain-Latn">somo</i> have their own predicate
		architecture. The negative existential <i lang="ain-Latn">isam</i> and the privative
		<A w="sak" gl="lack" /> express absence and lack with ordinary verbal syntax; the ability and
		cognition negatives <i lang="ain-Latn">eaykap</i>, <i lang="ain-Latn">koyaykus</i>,
		<i lang="ain-Latn">eramiskari</i>, and <i lang="ain-Latn">erampewtek</i> form a lexical-negative
		class; and the prohibitive <A w="iteki" gl="don't" /> belongs to directive mood <Ref
			k="nakagawa2024"
			p="314–315, 424–425, 450"
		/>; <Ref k="bugaeva2012" p="496–497" />. These are routed to
		<Xr ch="negation-existential-possessive-isam" />,
		<Xr ch="negation-ability-cognition-predicates" />, and
		<Xr ch="negation-prohibitive-iteki" />. Ijäs’s claim that the existence of a lexical negative
		normally bars <i lang="ain-Latn">somo</i> plus the corresponding positive verb states the
		tendency too strongly: Dal Corso records southern Hokkaido <i lang="ain-Latn">somo kor</i> ‘not
		have’ beside privative <i lang="ain-Latn">sak</i>, and the read grammars describe lexicalized
		meanings and preferences rather than categorical blocking ‹contested› <Ref k="ijas2023" />; <Ref
			k="dalcorso2025neg"
			p="41"
		/>.
	</p>

	<p>
		Dal Corso’s Sakhalin-focused comparative work links <i lang="ain-Latn">somo</i> and
		<i lang="ain-Latn">isam</i> to an older negative-existential root
		<i lang="ain-Latn">*sam</i>, deriving <i lang="ain-Latn">somo</i> from a form like
		<i lang="ain-Latn">*samno</i> and <i lang="ain-Latn">isam</i> from antipassive
		<i lang="ain-Latn">i-</i> on that root; Ijäs reaches the same speculation for
		<i lang="ain-Latn">isam</i>, marking it as conjectural <Ref k="dalcorso2025neg" p="41–42" />;
		<Ref k="ijas2023" />. The read Hokkaido grammars state no such etymology, so the shared-root
		proposal stands as a specific historical hypothesis, not as settled synchronic analysis
		‹speculative›.
	</p>

	<p>
		The standard negator varies dialectally. <i lang="ain-Latn">somo</i> covers most of Hokkaido;
		the eastern Pacific coast and parts of the east use other free negators in the same structural
		slot, and the eastern dialects also have a rare suffix <i lang="ain-Latn">-ko</i> that derives a
		rhetorical negative adverb from a stative intransitive — a genuinely morphological negative in
		an otherwise periphrastic system <Ref k="nakagawa2024" p="407–408" />; <Ref
			k="takahashi2016"
			p="73"
		/>; <Ref k="dalcorso2025neg" p="41" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>negator</th>
				<th>approximate distribution</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">somo</i></td>
				<td>most of Hokkaido (north, south, west, and central-east)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">omo</i>, <i lang="ain-Latn">homo</i></td>
				<td>eastern Pacific coast (Shiranuka, Kushiro)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">henne</i></td>
				<td>eastern Hidaka and Shizunai</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">senne</i>, <i lang="ain-Latn">sen</i></td>
				<td>Horobetsu and Yakumo</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">sien</i></td>
				<td>Tokachi</td>
			</tr>
		</tbody>
	</table>

	<p>
		The microdistribution is assembled from scattered dialect reports rather than from a full
		conditioning study, and no rule is given for which negator a transitional locality selects
		‹contested› <Ref k="nakagawa2024" p="407–408" />; <Ref k="dalcorso2025neg" p="41" />. The wider
		dialect classification is treated in <Xr ch="hokkaido-dialect-classification-and-dialectometry" />.
	</p>
</S>
