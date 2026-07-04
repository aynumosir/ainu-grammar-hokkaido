<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The 終助詞 class: definition and position" id="class-definition">
	<p>
		Hokkaido Ainu has a closed class of sentence-final particles (終助詞, hereafter SFPs) that
		occupy the outermost position in the finite clause. The distributional test for the class,
		first systematised by <Ref k="fukuda1961" p="§20" />, is that an SFP follows a predicate
		and closes the utterance: nothing may follow within the same clause
		<Ref k="nakagawa2024" p="331" />; <Ref k="sato2008" p="71" />. This positional
		exclusivity distinguishes SFPs from the adverbial particles (副助詞) treated in
		<Xr ch="topic-marking-anakne" /> and <Xr ch="cleft-nominalization-focus" />, which are
		category-preserving and do not close a clause; a 副助詞 attached to a verb phrase must
		be re-verbalised by the light verb <i lang="ain-Latn">ki</i> before a clause-linker may
		attach, while a SFP makes that attachment impossible altogether
		<Ref k="nakagawa2024" p="317, 320" />; <Ref k="fukuda1961" p="§2" />.
	</p>
	<p>
		Two frequency generalizations apply across the class. SFPs are less frequent in Hokkaido
		Ainu than in Japanese: a bare finite predicate routinely ends a sentence, and SFP absence
		signals nothing marked <Ref k="sato2008" p="72" />; <Ref k="nakagawa2024" p="333" />;
		<Ref k="fukuda1961" p="§20" />. Stacking is also restricted: only
		<A w="hani" gl="admonitive final particle" /> freely follows another SFP
		(<i lang="ain-Latn">na hani</i>, <i lang="ain-Latn">yan hani</i>);
		no other combination is freely productive
		<Ref k="sato2008" p="72" />; <Ref k="fukuda1961" p="§28" />; <Ref k="nakagawa2024" p="333" />.
	</p>
	<p>
		The class encodes the speaker's illocutionary intent — command, invitation, question,
		assertion, admonition — and a stratum of discourse tuning that softens, reinforces, or
		appeals for a response from the addressee
		<Ref k="nakagawa2024" p="331" />; <Ref k="sato2008" p="71" />.
	</p>
</S>

<S t="The illocutionary inventory" id="inventory">
	<p>
		The Saru–Chitose baseline inventory is given below; dialect variants are noted where
		documented <Ref k="nakagawa2024" p="331–337" />; <Ref k="sato2008" p="71–75" />;
		<Ref k="fukuda1961" p="§20–33" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>SFP</th>
				<th>illocutionary value</th>
				<th>host / notes</th>
				<th>dialect</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">yan</i></td>
				<td>plural/polite imperative</td>
				<td>plural verb stem required; C-final → <i lang="ain-Latn">an</i></td>
				<td>pan-HA</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ya</i> (imper.)</td>
				<td>sg-addressee polite command</td>
				<td>imperative; homophonous with Q <i lang="ain-Latn">ya</i></td>
				<td>‹ISH› only</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ya</i> / <i lang="ain-Latn">a</i></td>
				<td>polar question</td>
				<td><i lang="ain-Latn">a</i> post-consonant; <i lang="ain-Latn">ya</i> also COMP 'whether'</td>
				<td>pan-HA</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ro</i> / <i lang="ain-Latn">rok</i> / <i lang="ain-Latn">no</i></td>
				<td>hortative (seeks addressee's assent)</td>
				<td>any person, freq. 4th-pl; see debate below</td>
				<td><i lang="ain-Latn">rok</i> ‹TOK› (Shiranuka 白糠); <i lang="ain-Latn">no</i> (Urakawa 浦河, Samani 様似)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">so</i></td>
				<td>deliberative / self-directed volition</td>
				<td>declarative VP; not addressed to interlocutor</td>
				<td>pan-HA</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">wa</i></td>
				<td>soft assertive (談話調整)</td>
				<td>declarative only; never Q or imperative</td>
				<td>pan-HA; ≠ sequential connective <i lang="ain-Latn">wa</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">na</i></td>
				<td>assertive-appeal (demands attention/response)</td>
				<td>declarative or command; also connective before commands</td>
				<td>pan-HA</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">un</i></td>
				<td>soft address / affirmation</td>
				<td>VP, noun, adverb; <i lang="ain-Latn">an un</i> = polite dubitative</td>
				<td>pan-HA</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">hani</i></td>
				<td>admonitive ('won't you; please do')</td>
				<td>stacks after <i lang="ain-Latn">na</i>, <i lang="ain-Latn">yan</i></td>
				<td>pan-HA; <i lang="ain-Latn">yan hani</i> → <i lang="ain-Latn">yanani</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">oka</i></td>
				<td>counterfactual wish</td>
				<td>concord with emphatic <i lang="ain-Latn">ta</i>; optional</td>
				<td>pan-HA</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">nek</i></td>
				<td>emphatic assertion</td>
				<td>concord with <i lang="ain-Latn">tas(i)</i> / <i lang="ain-Latn">esta(p)</i>; mainly 雅語</td>
				<td>pan-HA; ≠ copula <i lang="ain-Latn">ne</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">yo</i></td>
				<td>emotive reminiscence (strong affect)</td>
				<td>after nominalizer <i lang="ain-Latn">p/pe</i> or <i lang="ain-Latn">hi</i></td>
				<td>pan-HA</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">tapan</i></td>
				<td>formal register (ございます調)</td>
				<td>replaces <i lang="ain-Latn">ne/an/un</i> after <i lang="ain-Latn">ruwe/hawe/siri</i></td>
				<td>pan-HA</td>
			</tr>
		</tbody>
	</table>

	<S t="Imperative and hortative: yan, ya, ro, so" id="imperative-hortative">
		<p>
			The polite imperative <A w="yan" gl="come up from water; polite imperative particle" />
			requires the <strong>plural</strong> verb stem even when the addressee is one person:
			<i lang="ain-Latn">arki yan</i> 'please come' uses the suppletive plural stem
			<i lang="ain-Latn">arki</i>, not singular <i lang="ain-Latn">ek</i>
			<Ref k="nakagawa2024" p="332" />; <Ref k="fukuda1961" p="§26" />.
			Imperative predicates take no subject person-index;
			<i lang="ain-Latn">*a=arki yan</i> is ungrammatical
			<Ref k="fukuda1961" p="§26" /> — the full morphological constraint is set out in
			<Xr ch="imperative-and-prohibitive" />. When the stem ends in a consonant,
			<i lang="ain-Latn">yan</i> reduces to <i lang="ain-Latn">an</i>. Ijäs's pedagogical
			grammar title <i lang="ain-Latn">a-eyaypakasnu ro</i> 'let us learn [it]'
			<Ref k="ijas2023" /> illustrates the hortative in natural use (see below).
		</p>
		<p>
			Ishikari has a distinct singular-addressee command <i lang="ain-Latn">ya</i> —
			formally identical to the Q-particle but functionally opposed to it
			<Ref k="nakagawa2024" p="332" />; <Ref k="fukuda1961" p="§26" />.
			The two <i lang="ain-Latn">ya</i>s are disambiguated by the predicate type that precedes them
			(imperative vs. declarative) and by dialect; the Q-particle treatment is in
			the section on boundary cases below.
		</p>

		<Ex
			m="kanna suy arki yan hani"
			g="again again come.PL IMP ADM"
			tr="Do come again, won't you."
			cite="sato2008:74"
			dial="CHI"
			note="The plural suppletive stem arki is required by yan even for a single addressee. hani stacks after yan to add the gentle admonitive 'won't you / I hope you will'. The cluster yan hani contracts to yanani in the Chitose speech-stream (Nakagawa 2024: 333)."
		/>

		<p>
			The hortative <A w="ro" gl="hortative particle" /> (‹TOK› Shiranuka <i lang="ain-Latn">rok</i>;
			Urakawa/Samani <i lang="ain-Latn">no</i>) seeks the addressee's assent for a proposed joint
			action <Ref k="nakagawa2024" p="333" />; <Ref k="sato2008" p="73" />;
			<Ref k="fukuda1961" p="§23" />. An earlier analysis held that
			<i lang="ain-Latn">ro</i> is a "first-plural-inclusive command particle",
			a claim advanced in <Ref k="kindaichi1936" p="§215" /> and repeated in
			<Ref k="chiri1942" p="§118" />. <Ref k="fukuda1961" p="§23" /> rejects this: the particle
			is attested after first-singular, second-person, and third-person predicates, not only
			after the fourth-person (inclusive) plural; the frequent co-occurrence with the fourth
			person reflects the hortative meaning 'let us …', not a morphosyntactic person
			restriction <Ref k="fukuda1961" p="§23" />; <Ref k="nakagawa2024" p="333" /> ‹contested›.
			Further discussion is in <Xr ch="hortative-and-optative" />.
		</p>

		<Ex
			m="paye=an ro"
			g="go.PL=4.S HORT"
			tr="Let us go."
			constructed
			note="The fourth-person intransitive suffix =an on the plural suppletive stem paye; ro adds hortative force. Constructed for illustration; functionally equivalent expressions with ro are documented in Nakagawa 2024: 333."
		/>

		<p>
			The deliberative <A w="so" gl="deliberative sentence-final particle" /> converts a
			predicate into a self-addressed musing — consideration of an action for one's own benefit,
			not aimed at an interlocutor <Ref k="nakagawa2024" p="334" />; <Ref k="sato2008" p="74" />;
			<Ref k="fukuda1961" p="§22" />.
		</p>

		<Ex
			m="ek=an so"
			g="come=4.S DEL"
			tr="Should I come too, I wonder."
			constructed
			note="The fourth-person S suffix =an on the singular stem ek; so converts the predicate into a soliloquy deliberation. Nakagawa 2024: 334 gives the meaning as 独語の意志 (self-directed volition)."
		/>
	</S>

	<S t="Assertive and softening: na, wa, un" id="assertive-softening">
		<p>
			The assertive-appeal particle <A w="na" gl="assertive sentence-final particle" /> rouses
			the hearer's attention and implies a response — verbal or behavioural — is expected
			<Ref k="nakagawa2024" p="332" />; <Ref k="sato2008" p="73" />; <Ref k="fukuda1961" p="§27" />.
			It attaches to declarative and command predicates alike and is among the most frequent
			SFPs in the Saru and Chitose corpus.
		</p>

		<Ex
			m="pirka huton poronno an na"
			g="good cushion many exist FIN"
			tr="There are plenty of fine cushions here, you know."
			cite="nakagawa2024:332"
			dial="CHI"
			note="Nakagawa ex. 583. na follows the existential predicate and signals that the speaker expects the hearer to act on the information (sit down, use the cushions). The existential an is a 3rd-person (zero-marked) predication."
		/>

		<p>
			The softening particle <A w="wa" gl="soft assertive sentence-final particle" /> adds a
			mild conversational tone to a declarative, serving the function Nakagawa calls 談話調整
			(discourse tuning) <Ref k="nakagawa2024" p="334" />; <Ref k="sato2008" p="74–75" />;
			<Ref k="fukuda1961" p="§21" />. It is restricted to declarative predicates: neither
			questions nor imperatives take it. In answers and in-dialogue assertions,
			<i lang="ain-Latn">wa</i> is particularly frequent, pulling blunt propositions toward
			a gentler register:
		</p>

		<Ex
			m="wen huci ka somo ne wa"
			g="bad old.woman even NEG COP SOFT"
			tr="She is no pauper of an old woman."
			cite="nakagawa2024:334"
			dial="CHI"
			note="Nakagawa ex. 582, first clause of a pair (the second is pirka huci ne wa 'she is a fine old woman'). wa softens the emphatic negation ka somo ne; the exchange is in dialogue. Fukuda 1961: §21 notes that the particle carries a feel comparable to the Tokyo-female / Hokkaido-unisex Japanese「わ」, without claiming it is female-restricted in Ainu — see §register-gender."
		/>

		<p>
			The soft-address particle <A w="un" gl="soft address / affirmation particle" /> conveys
			gentle appeal or mild affirmation and is unusual in the inventory for attaching to nouns
			and adverbs as well as to VPs
			<Ref k="nakagawa2024" p="332–333" />; <Ref k="sato2008" p="74" />;
			<Ref k="fukuda1961" p="§30" />. The sequence <i lang="ain-Latn">an un</i>
			(existential + <i lang="ain-Latn">un</i>) serves as a polite dubitative. In the
			affirmative-answer frame of the evidential tail (§evidential-frame below),
			<i lang="ain-Latn">un</i> follows the formal noun directly:
			<i lang="ain-Latn">ku=nu ruwe un</i> 'yes, I heard it'
			<Ref k="nakagawa2024" p="396" />.
		</p>
	</S>

	<S t="Admonitive and stacking: hani" id="admonitive-stacking">
		<p>
			The admonitive <A w="hani" gl="admonitive final particle" /> adds gentle urging to
			commands and admonitions — a 'won't you; I hope you will' coloring
			<Ref k="nakagawa2024" p="333" />; <Ref k="sato2008" p="72" />;
			<Ref k="fukuda1961" p="§28" />. Its structural property is free stacking after
			<i lang="ain-Latn">na</i> or <i lang="ain-Latn">yan</i>, yielding bipartite clusters
			<i lang="ain-Latn">na hani</i> and <i lang="ain-Latn">yan hani</i>; the latter
			contracts to <i lang="ain-Latn">yanani</i> in Chitose. Crucially,
			<i lang="ain-Latn">hani</i> is not restricted to imperatives, as the following shows:
		</p>

		<Ex
			m="k=onaha or-o ta ku=teskar kusu ne na hani"
			g="1SG.POSS=father place-POSS LOC 1SG.A=report PURP COP FIN ADM"
			tr="I am going to report this to my father, you know."
			cite="sato2008:72"
			dial="CHI"
			note="Satō ex. = Nakagawa 2024: 333. na hani on a purposive declarative; neither clause is an imperative, demonstrating that hani attaches regardless of illocutionary mode. or-o is the possessed form (or-POSS) of the relational noun or 'place, location of'."
		/>

		<p>
			Members of the Discord-based aynu-corpora community have proposed that
			<i lang="ain-Latn">hani</i> derives from the motion verb
			<i lang="ain-Latn">hanke</i> 'approach, come near' by grammaticalization into a
			command particle, parallel to the proposed path of
			<i lang="ain-Latn">yan</i> from a lexical verb meaning 'come up from the water'
			(antitwilight, aynu-corpora Discord 2024-11-18;
			<Ref k="aynucorporadiscord" />) ‹speculative›. Both etymologies are plausible given
			the cross-linguistically common motion-verb-to-imperative cline, but neither has been
			established in the primary literature; the proposals are leads for diachronic work.
		</p>
	</S>

	<S t="Kakari-musubi concord: oka, nek" id="kakari-musubi">
		<p>
			Three pairs in the Ainu particle inventory exhibit a concord relationship structurally
			parallel to Japanese 係り結び: an emphatic adverbial particle (副助詞) inside the clause
			licenses or requires a specific SFP at sentence end. The 係助詞 label for the emphatic
			members of these pairs was introduced by <Ref k="chiri1942" p="§118" /> (via
			<Ref k="fukuda1961" p="§11" />) and is endorsed by
			<Ref k="nakagawa2024" p="330" />; <Ref k="sato2008" p="73" />.
		</p>

		<table>
			<thead>
				<tr>
					<th>emphatic 副助詞</th>
					<th>concordant SFP</th>
					<th>illocutionary reading</th>
					<th>sources</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><i lang="ain-Latn">ta</i> 'こそ (wish)'</td>
					<td><i lang="ain-Latn">oka</i> (optional in Saru)</td>
					<td>counterfactual wish '〜だったらなあ'</td>
					<td>Nk 330; Fk §12/§25; St 73</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">tas(i)</i> 'まさに〜こそ'</td>
					<td><i lang="ain-Latn">nek</i> (optional in Saru)</td>
					<td>assured assertion '〜のだよ (indeed it is)'</td>
					<td>Nk 330; Fk §14/§24; St 73</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">esta</i>‹SHI› / <i lang="ain-Latn">estap</i>‹TOK›</td>
					<td><i lang="ain-Latn">ne</i></td>
					<td>assertion 'こそ〜だ'</td>
					<td>Nk 330</td>
				</tr>
			</tbody>
		</table>

		<p>
			In Saru the concordant SFP is optional — the closing particle "is not necessarily
			present" <Ref k="fukuda1961" p="§11" /> — which raises the question of whether the
			concord is a productive grammatical constraint or a set of conventionalized collocations.
			The sources consulted do not settle this ‹contested›.
		</p>

		<Ex
			m="cikap ta ku=ne oka"
			g="bird EMPH 1SG.S=COP FIN"
			tr="If only I were a bird!"
			cite="nakagawa2024:330"
			dial="SAR"
			note="Nakagawa ex. 560 (= Tamura 1988b: 33; the Fukuda 1961: §12.2 citation gives the form with oka explicit). The emphatic ta triggers the counterfactual wish reading; the concordant oka is here present but may be omitted in Saru. The couplet continues rera ta ku=ne ('if only I were the wind!')."
		/>

		<Ex
			m="newaanpe patek tasi a=eranak nek"
			g="that only EMPH 4.A=be.troubled FIN"
			tr="About that alone am I truly troubled."
			cite="nakagawa2024:334"
			dial="SAR"
			note="Nakagawa ex. 594 (source: Chiba University Ainu materials 2015: 160). The emphatic tasi triggers the concordant nek; patek 'only' restricts scope. The 4th-person A prefix a= tracks the narrator/speaker in the oral-literature register."
		/>

		<p>
			<Ref k="sato2008" p="65–66" /> identifies a structurally more opaque intensification
			construction in oral-literary register: a bare concept-form noun
			(<i lang="ain-Latn">hum</i> 'sound', <i lang="ain-Latn">ru</i> 'trace') followed by
			the particle <i lang="ain-Latn">konna</i>/<i lang="ain-Latn">kan</i> and a verb
			ending in the concord suffix <i lang="ain-Latn">-natara</i>,
			<i lang="ain-Latn">-atki</i>, or <i lang="ain-Latn">-rototke</i>:
		</p>

		<Ex
			m="ek hum konna kewrototke"
			g="come sound EMPH resonate.mightily"
			tr="The sound of his coming thundered on."
			cite="sato2008:66"
			dial="HK"
			note="Satō ex. (oral-literature register). The bare concept form hum (not possessed humi) appears before konna. Satō classifies konna/kan provisionally as a 強調の助詞 (emphatic 副助詞) but flags its grammatical status as 'unclear'; the appearance of the concept form rather than the possessed form before konna is unexplained — the same nouns take possessed forms when functioning as formal-noun evidential heads. See formal-defective-nouns for the possessed/concept-form alternation."
		/>

		<p>
			The formal noun / possessed-form puzzle that the <i lang="ain-Latn">konna</i>
			construction poses is discussed in <Xr ch="formal-defective-nouns" />; the
			construction is also adjacent to the kakari-musubi debate in
			<Ref k="sato2008" p="65–66" /> ‹contested›. Whether any of these three concord pairs
			constitute a productive focus-concord (like Japanese 係り結び) or merely a set of
			frozen collocations remains an open descriptive question
			<Ref k="nakagawa2024" p="330" />; <Ref k="fukuda1961" p="§11" /> ‹contested›.
		</p>
	</S>

	<S t="Register-marked forms: yo and tapan" id="register-marked">
		<p>
			The emotive particle <A w="yo" gl="emotive sentence-final particle" /> attaches after
			a clausal nominalizer (<i lang="ain-Latn">p/pe</i> or <i lang="ain-Latn">hi</i>) and
			signals strong affective involvement — reminiscence, wonder, or pathos
			<Ref k="sato2008" p="75" />. Its position after the nominalizer, rather than directly
			after the verb, makes it one of the few SFPs whose attachment site is lexically
			conditioned. See <Xr ch="nominalization-p-pe" /> for the nominalizer inventory.
		</p>
		<p>
			The formal-register marker <i lang="ain-Latn">tapan</i> replaces
			<i lang="ain-Latn">ne</i>, <i lang="ain-Latn">an</i>, or <i lang="ain-Latn">un</i>
			after the evidential formal nouns <i lang="ain-Latn">ruwe</i>,
			<i lang="ain-Latn">hawe</i>, and <i lang="ain-Latn">siri</i>, yielding the
			ございます-register frame <i lang="ain-Latn">ruwe tapan</i>
			<Ref k="fukuda1961" p="§33" />. It is the one SFP that enters the evidential tail
			proper (the predicator slot of the formal noun) rather than stacking outside it.
		</p>
	</S>
</S>

<S t="Ordering and stacking at the clause edge" id="ordering-stacking">
	<p>
		The general clause-final ordering runs: verb stem → TAM auxiliaries →
		evidential tail (<i lang="ain-Latn">ruwe/hawe/siri/humi</i> +
		<i lang="ain-Latn">ne</i>/<i lang="ain-Latn">an</i>) → SFP. The ordering is confirmed
		by the grammaticality of <i lang="ain-Latn">… ruwe ne na</i> and the ungrammaticality
		of <i lang="ain-Latn">*… na ruwe ne</i>
		<Ref k="nakagawa2024" p="393" />; <Ref k="fukuda1961" p="§20" />.
		The two exceptions within this slot are <i lang="ain-Latn">un</i> and
		<i lang="ain-Latn">tapan</i>, which intrude into the evidential predicator position itself
		(<i lang="ain-Latn">ruwe un</i>, <i lang="ain-Latn">ruwe tapan</i>) rather than
		stacking outside it — see <Xr ch="evidential-schema-overview" /> and
		<Xr ch="ruwe-ne-inferential" />.
	</p>
	<p>
		Within the outer SFP slot, only <i lang="ain-Latn">hani</i> freely follows another SFP
		<Ref k="fukuda1961" p="§28" />. No other combination of two SFPs is freely attested in
		the sources consulted; longer stacks have not been systematically studied in the Hokkaido
		corpus ‹corpus-suggested›. <i lang="ain-Latn">tapan</i> does not add to the outer SFP
		slot: it occupies the predicator position of the formal noun and is not a stacking
		particle in the same sense.
	</p>
</S>

<S t="Boundaries: SFP, connective, and the evidential tail" id="boundaries">
	<S t="na as clause-boundary connective" id="na-connective">
		<p>
			When <i lang="ain-Latn">na</i> immediately precedes a command clause, it functions as a
			clause-boundary signal rather than a sentence-closing SFP:
			<i lang="ain-Latn">… na</i> [command] reads 'since … / because … [do X]', where
			<i lang="ain-Latn">na</i> provides the motivating ground for the instruction
			<Ref k="nakagawa2024" p="332" />; <Ref k="fukuda1961" p="§27" />. The following
			corpus instance shows <i lang="ain-Latn">na</i> closing a declarative clause
			inside a direct quote, where the SFP value is foregrounded by the
			<i lang="ain-Latn">sekor hawean</i> framing:
		</p>

		<Ex
			m="an epitta paye=an kusu ne na"
			g="one throughout go.PL=4.S PURP COP FIN"
			tr="I plan to go [there] travelling the whole night."
			cite="ilcaa1976"
			dial="SAR"
			place="Kawakami Matsuko, 'isoytak dokowa 2', ILCAA Ainu materials (Saru)"
			note="na closes the quoted declarative clause inside sekor hawean '(she) said'. The sequence kusu ne na (purpose + copula + na) is common in discourse: the assertive-appeal force of na urges the hearer to acknowledge the speaker's stated intention."
		/>

		<p>
			The ambiguity between the SFP and connective readings is resolved by whether a further
			clause follows: sentence-final <i lang="ain-Latn">na</i> ends the utterance, while the
			connective <i lang="ain-Latn">na</i> always precedes something else. The connective
			function is treated fully in <Xr ch="clause-linkage-overview" /> and
			<Xr ch="conjunctions-discourse-connectives" />.
		</p>
	</S>

	<S t="ya/a as Q-particle vs. complementizer" id="ya-boundary">
		<p>
			The Q-particle <A w="ya" gl="question particle; complementizer 'whether'" /> /
			<A w="a" gl="post-consonant question particle" /> closes a polar question as a
			SFP <Ref k="nakagawa2024" p="332–333" />; <Ref k="fukuda1961" p="§29" />. The same
			<i lang="ain-Latn">ya</i> (but not <i lang="ain-Latn">a</i>) also nominalizes a
			clause as an embedded polar question ('whether …'), functioning as a complementizer;
			in that use it is not a SFP because the clause it heads is embedded
			<Ref k="nakagawa2024" p="333" />; <Ref k="sato2008" p="74" />. The category of
			<i lang="ain-Latn">ya</i>/<i lang="ain-Latn">a</i> is therefore function-dependent:
			SFP in main clauses, COMP in embedded indirect questions ‹contested›
			<Ref k="fukuda1961" p="§29/§31" />; <Ref k="nakagawa2024" p="333" />.
		</p>
		<p>
			The Q-副助詞 <A w="he" gl="polar question focus particle" /> and the Q-SFPs
			<i lang="ain-Latn">ya</i>/<i lang="ain-Latn">a</i> occupy distinct positions:
			<i lang="ain-Latn">he</i> attaches to the constituent in doubt and can appear
			mid-clause, while <i lang="ain-Latn">ya</i>/<i lang="ain-Latn">a</i> are
			clause-final <Ref k="nakagawa2024" p="323–324" />; <Ref k="fukuda1961" p="§8/§31" />.
			The full interrogative strategy — the polar vs. content split, wh-in-situ, and
			the <i lang="ain-Latn">ne</i>/<i lang="ain-Latn">an</i>/<i lang="ain-Latn">∅</i>
			alternation on the evidential tail — is in
			<Xr ch="interrogative-strategies-question-particles" />.
		</p>
	</S>

	<S t="wa as SFP vs. sequential connective" id="wa-boundary">
		<p>
			The SFP <i lang="ain-Latn">wa</i> (soft assertive, §assertive-softening) is formally
			identical to the sequential clause-linker <i lang="ain-Latn">wa</i> (CONJ 'and then,
			having done X') treated in <Xr ch="sequential-wa-and-clause-chaining" />.
			They are distinguished by position: the linker always precedes another predicate, the
			SFP ends the utterance. In many Hokkaido dialects the <i lang="ain-Latn">wa</i> morpheme
			surfaces phonologically as <i lang="ain-Latn">ma</i>
			(nukopoli, aynu-corpora Discord 2024-07-09, asserted;
			<Ref k="aynucorporadiscord" />). Whether this phonological shift applies equally to
			both the connective and the SFP, or whether only one of the two undergoes it in a given
			dialect, is not documented in the sources consulted ‹speculative›.
		</p>
		<p>
			The community discussion has also proposed a morphological analysis of
			<i lang="ain-Latn">newa</i> 'and' as <i lang="ain-Latn">ne</i> + <i lang="ain-Latn">wa</i>
			(copula + sequential linker) and <i lang="ain-Latn">neya</i> 'or' as
			<i lang="ain-Latn">ne</i> + <i lang="ain-Latn">ya</i> (copula + Q-SFP)
			(aomidori_cs_ and nukopoli, aynu-corpora Discord 2023-12-12;
			<Ref k="aynucorporadiscord" />) ‹contested›. If correct, the SFP
			<i lang="ain-Latn">ya</i> would participate directly in the formation of a common
			NP-coordinator — but the analysis remains community-proposed and the morphological
			reanalysis of these particles has not been verified in the primary literature.
		</p>
	</S>

	<S t="The evidential tail as sentence-type switch" id="sfp-evidential-frame">
		<p>
			The evidential formal nouns (<i lang="ain-Latn">ruwe</i>, <i lang="ain-Latn">hawe</i>,
			<i lang="ain-Latn">siri</i>, <i lang="ain-Latn">humi</i>) that anchor the
			nominalization-plus-copula evidential construction (see
			<Xr ch="evidential-schema-overview" /> and <Xr ch="ruwe-ne-inferential" />) also host
			a sentence-type switch: the predicator following the formal noun — copula
			<i lang="ain-Latn">ne</i>, existential <i lang="ain-Latn">an</i>, or zero —
			signals declarative, content-question, or polar-question force respectively
			<Ref k="sato2008" p="136–137" />; <Ref k="nakagawa2024" p="394–395" />.
		</p>

		<table>
			<thead>
				<tr>
					<th>sentence type</th>
					<th>evidential-tail predicator</th>
					<th>example</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>declarative</td>
					<td><i lang="ain-Latn">ruwe ne</i> (COP)</td>
					<td><i lang="ain-Latn">sirpirka ruwe ne</i> 'the weather is fine (recognized fact)'</td>
				</tr>
				<tr>
					<td>content (wh) question</td>
					<td><i lang="ain-Latn">ruwe an</i> (existential)</td>
					<td><i lang="ain-Latn">hemanta ne kusu ene siran hi an</i> 'why is it like this?'</td>
				</tr>
				<tr>
					<td>polar (yes/no) question</td>
					<td>bare <i lang="ain-Latn">ruwe</i> (verb omitted)</td>
					<td><i lang="ain-Latn">e=eraman ruwe</i> 'did you understand?'</td>
				</tr>
				<tr>
					<td>affirmative answer</td>
					<td><i lang="ain-Latn">ruwe un</i> (SFP <i lang="ain-Latn">un</i>)</td>
					<td><i lang="ain-Latn">ku=nu ruwe un</i> 'yes, I heard it' (Nakagawa 2024: 396)</td>
				</tr>
				<tr>
					<td>formal assertion</td>
					<td><i lang="ain-Latn">ruwe tapan</i> (SFP <i lang="ain-Latn">tapan</i> replaces COP)</td>
					<td>ceremonial/ございます-register; Fukuda 1961: §33</td>
				</tr>
			</tbody>
		</table>

		<p>
			<Ref k="sato2008" p="137" /> proposes that in a declarative the copula predicates the
			subject's nature; in a content question the existential asserts that the subject exists
			while its nature is questioned; in a polar question even existence is at issue, so the
			verb is omitted. The <i lang="ain-Latn">un</i> and <i lang="ain-Latn">tapan</i>
			entries in the table are the two SFPs that enter this predicator slot.
			The outer SFPs (<i lang="ain-Latn">na</i>, <i lang="ain-Latn">wa</i>,
			<i lang="ain-Latn">hani</i>, …) stack outside the evidential frame:
			<i lang="ain-Latn">ruwe ne na</i> is grammatical;
			<i lang="ain-Latn">*na ruwe ne</i> is not
			<Ref k="nakagawa2024" p="393" />.
		</p>

		<Ex
			m="tane pirka ru-we he an"
			g="now good track-POSS Q exist"
			tr="Is it all right now?"
			cite="ilcaa1976"
			dial="SHI"
			place="Oda Suteno, 'reyep kamuy', ILCAA Ainu materials (Shizunai)"
			note="Nakagawa 2024: 304, ex. (corpus Shizunai). The bare formal noun ru-we (no copula) combines with the Q-副助詞 he and the existential an, realising the reduced polar-Q frame ruwe he an (Nakagawa 2024: 409e). This illustrates the sentence-type switch at the evidential tail: copula ne (declarative) is replaced by existential an and the Q-particle he."
		/>
	</S>

	<S t="sekor is not a sentence-final particle" id="sekor-boundary">
		<p>
			The quotative <A w="sekor" gl="quotative marker" /> is sometimes encountered in
			clause-final position of a quoted clause, preceding a speech verb
			(<i lang="ain-Latn">sekor hawean</i> 'said, …'). It is not a SFP: it functions
			as a quotative adverb/particle (QUOT) that heads the quoted clause as an adverbial,
			not as a particle that closes a main clause <Ref k="nakagawa2024" p="470" />;
			<Ref k="bugaeva2008" p="35–36" />. The etymological analysis
			<i lang="ain-Latn">sekor</i> &lt; <i lang="ain-Latn">se</i> 'make a sound' +
			<i lang="ain-Latn">kor</i> 'while' (nukopoli, aynu-corpora Discord 2024-11-09;
			<Ref k="aynucorporadiscord" />, asserted, corroborated by Nakagawa 2024: 470)
			underscores its adverbial origin: it is 'saying while', not a clause-closing
			illocutionary marker. The full syntactic and typological treatment of
			<i lang="ain-Latn">sekor</i> is in <Xr ch="quotative-complementation-sekor" /> and
			<Xr ch="logophoric-narration-and-reported-discourse" />.
		</p>
	</S>
</S>

<S t="Register, genre, and the gender question" id="register-gender">
	<p>
		SFPs in Hokkaido Ainu are not conditioned by the speaker's biological sex.
		<Ref k="sato2008" p="72" /> states this explicitly: "Ainu final particles are in
		principle used by both sexes; there is no particle specific to men or women" —
		a direct contrast with Japanese, where particles are gender-indexed.
		<Ref k="fukuda1961" p="§21" /> noted that the SFP <i lang="ain-Latn">wa</i> carries
		a <em>feel</em> similar to the Tokyo-female / Hokkaido-unisex Japanese「わ」, but did
		not claim the Ainu particle is female-restricted. The two descriptions converge: HA
		SFPs are gender-neutral <Ref k="nakagawa2024" p="331" /> ‹consensus›.
	</p>
	<p>
		A register observation does correlate with speaker sex, but at the level of the
		<em>evidential</em> tail, not the SFP class. Community discussion in the aynu-corpora
		Discord identifies <i lang="ain-Latn">ruwe ne</i> as "used for objective fact,
		frequent in folktales/legends, favoured by men, like
		<span lang="ja">のだ</span>, and doing scene-shift and summary work"
		(nukopoli, aynu-corpora Discord 2024-11-09; <Ref k="aynucorporadiscord" />) ‹corpus-suggested›.
		This skew belongs to the evidential-nominal layer, not to the SFP layer; it does not
		contradict Satō's gender-neutrality claim for SFPs, which operates at a different
		level of the clause. The sociolinguistic conditions behind the
		<i lang="ain-Latn">ruwe ne</i> frequency pattern, and register differences in
		evidential and particle use across genres, are treated in
		<Xr ch="narrative-tam-evidential-patterning-by-genre" /> and
		<Xr ch="gendered-register-speech" />.
	</p>
	<p>
		Mirative meaning in Hokkaido Ainu is carried by the perfective auxiliary
		<i lang="ain-Latn">aan</i>/<i lang="ain-Latn">anan</i>, not by a dedicated SFP
		<Ref k="nakagawa2024" p="393" />; <Ref k="dalcorso2018" p="336" />. When
		<i lang="ain-Latn">ruwe ne</i> appears in surprising contexts the surprise comes from
		the discourse frame, not from the formal noun itself. The mirativity–evidentiality
		interface is in <Xr ch="mirativity-scope-grammaticalization" />.
	</p>
	<p>
		The Shizunai dialect materials in <Ref k="refsing1986" /> contain an SFP inventory
		that likely includes forms not in the Saru–Chitose baseline described above; the
		Refsing treatment (pp.253, 265–267) was not re-read for this chapter and the
		Shizunai inventory has not been compiled at Fukuda's level of rigour. Whether a
		form glossable as <i lang="ain-Latn">awa</i> belongs to the Shizunai SFP inventory
		is one unsettled gap; the present description is limited to the Saru–Chitose core
		supplemented by documented dialect variants ‹speculative›.
	</p>
</S>
