<script lang="ts">
	import { S, Ex, Ref, Xr } from '$lib/grammar/components';
</script>

<S t="Three subject-incorporation patterns" id="overview">
	<p>
		Subject incorporation includes three constructions with different effects on the remaining
		argument frame: a natural phenomenon incorporated into an intransitive predicate, a
		possessor-requiring noun incorporated into a state predicate, and a natural force incorporated
		into a transitive predicate. Satō distinguishes all three from object incorporation <Ref
			k="sato2008"
			p="224–226"
		/>;
		<Ref k="satoni2022" p="§§3.2–3.4" />.
	</p>
	<table>
		<caption>Subject patterns in Satō's classification <Ref k="satoni2022" p="§3" /></caption>
		<thead
			><tr><th>Incorporated relation</th><th>Remaining subject</th><th>Argument count</th></tr
			></thead
		>
		<tbody>
			<tr><td>Natural-phenomenon S</td><td>None</td><td>1 → 0</td></tr>
			<tr
				><td>Possessor-requiring S</td><td>Possessor of the incorporated noun</td><td>1 → 1</td></tr
			>
			<tr><td>Natural-force A</td><td>Participant affected by the force</td><td>2 → 1</td></tr>
		</tbody>
	</table>
	<p>
		“Subject” names the noun's relation in the base construction. Once incorporated, the noun
		belongs to a verbal stem. Satō explicitly cautions that grammatical-relation terms are being
		extended to describe these word-internal relations
		<Ref k="sato2008" p="225" />.
	</p>
</S>

<S t="Natural phenomena and zero-argument predicates" id="natural-s">
	<p>
		The natural-phenomenon type is tightly restricted. Satō's Handbook account identifies
		<i lang="ain-Latn">sir</i> “weather, surroundings” and <i lang="ain-Latn">me</i> “cold” in forms
		such as <i lang="ain-Latn">sir-pirka</i> “the weather is good” and
		<i lang="ain-Latn">me-an</i> “it is cold.” He describes these incorporated stems as lacking the
		corresponding free-noun construction in this use
		<Ref k="satoni2022" p="§3.2" />.
	</p>
	<Ex
		m="sir-pirka"
		g="weather-be.good"
		tr="The weather is good."
		cite="satoni2022:§3.2"
		place="Lexical illustration, example 21"
		note="The source's accent marks are omitted. The English subject ‘the weather’ corresponds to material within the Ainu predicate."
	/>
	<p>
		The resulting zero-argument predicate has no ordinary personal subject to index. This
		construction is related to the environmental predicates described in
		<Xr ch="transitivity-and-valence-classes" />.
	</p>
</S>

<S t="Possessed stems and an external possessor" id="possessor">
	<p>
		A body-part or other possessor-requiring noun can combine with a stative intransitive verb while
		its possessor becomes the subject of the whole compound. Satō illustrates the contrast with
		hands being heavy <Ref k="satoni2022" p="§3.3" />.
	</p>
	<Ex
		m="ku=tek-e pase"
		g="1SG.POSS=hand-POSS heavy"
		tr="My hands are heavy."
		cite="satoni2022:§3.3"
		place="Example 23a"
		note="The person form belongs to the free possessed noun. Accent notation is omitted and person boundaries use =."
	/>
	<Ex
		m="ku=tek-e-pase"
		g="1SG.S=hand-POSS-heavy"
		tr="My hands feel heavy with age."
		cite="satoni2022:§3.3"
		place="Example 23b"
		note="Satō paraphrases the incorporated expression as feeling that one has aged. Ku= indexes the person experiencing the condition as subject of the whole verb."
	/>
	<p>
		The possessed stem occurs inside the verb, but a separate personal possessor is not inserted
		there. Satō calls the noun's form “possessed” for convenience while distinguishing its function
		from an ordinary possessed noun phrase
		<Ref k="sato2008" p="225" />. Nakagawa gives <i lang="ain-Latn">kew-e-ri</i> “be tall” and
		<i lang="ain-Latn">par-o-ruy</i>
		“be talkative,” with the possessed stems of “skeleton” and “mouth.” His
		<i lang="ain-Latn">keweri=an</i>
		“we are tall” shows S marking on the compound <Ref k="nakagawa2024" p="489" />.
	</p>
	<p>
		Satō classifies this construction as Type II in Mithun's framework because an incorporated noun
		has a grammatical relation to a participant outside the verb
		<Ref k="mithun1984" /> (as applied in <Ref k="satoni2022" p="§3.3" />). He calls the remaining
		possessor <em>stranded</em> and uses this dependency in his explanation of the construction's
		restricted distribution. The proposed hierarchy and its numerical weights are discussed in <Xr
			ch="noun-incorporation-oblique-polysynthesis-debate"
		/>.
	</p>
</S>

<S t="Natural-force actors and affected subjects" id="natural-a">
	<p>
		A natural force can also be incorporated as the actor of a transitive base. The affected
		participant then becomes the subject of the resulting intransitive verb. Satō's comparison makes
		the change from O to S marking explicit
		<Ref k="satoni2022" p="§3.4" />.
	</p>
	<Ex
		m="koy en=yanke"
		g="wave 1SG.O=raise"
		tr="The wave raises me."
		cite="satoni2022:§3.4"
		place="Example 24a"
	/>
	<Ex
		m="ku=koy-yanke"
		g="1SG.S=wave-raise"
		tr="I am raised by the wave."
		cite="satoni2022:§3.4"
		place="Example 24b"
		note="The affected participant is indexed as S because the derived verb is one-place. This is Satō's source comparison."
	/>
	<p>
		Nakagawa gives a Chitose narrative example with <i lang="ain-Latn">rittursere=an</i>, analyzing
		the verb as <i lang="ain-Latn">rir</i> “wave” plus
		<i lang="ain-Latn">turse</i> “fall” and causative <i lang="ain-Latn">-re</i>. The source retains
		the surface consonant sequence <i lang="ain-Latn">ritt-</i>
		<Ref k="nakagawa2024" p="490, example 1119" />.
	</p>
	<Ex
		m="rittursere=an kor mom=an"
		g="wave.roll=4.S CONJ drift=4.S"
		tr="I was rolled by the waves and carried along."
		cite="nakagawa2024:490"
		dial="CHI"
		place="Opening of example 1119"
		note="A continuous excerpt before ruwe ene an hi ne hine. Rittursere is left unsegmented in the glossed line to preserve the source's surface form."
	/>
	<p>
		His Saru example of being affected by rain, snow and wind has a mortar as its first-person
		narrator. The patient-like meaning still takes S marking because the compound is intransitive <Ref
			k="nakagawa2024"
			p="490, example 1121, citing Chiba University 2015:190"
		/>. Semantic affectedness does not create a separate lexical alignment rule.
	</p>
</S>

<S t="Restrictions and competing explanations" id="restrictions">
	<p>
		These natural-force examples differ from the ordinary agentive subjects usually excluded from
		incorporation. Earlier blanket exclusions of transitive subjects do not describe the full range
		documented by Satō and Nakagawa
		<Ref k="shibatani1990" p="62–63" />;
		<Ref k="sato2008" p="224–226" />; <Ref k="nakagawa2024" p="489–490" />.
	</p>
	<p>
		Satō's Handbook chapter reviews an unaccusative account associated with Kobayashi and argues
		that it does not adequately predict the small number of intransitive-subject combinations or the
		natural-force transitive pattern. Low agentivity gives a broader semantic characterization, with
		specificity and lexical restrictions also relevant ‹contested› <Ref k="satoni2022" p="§1" />.
		Neither label establishes that arbitrary low-agentivity nouns and verbs can combine.
	</p>
</S>
