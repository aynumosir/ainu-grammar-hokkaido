<script lang="ts">
	import { S, Ref, Xr } from '$lib/grammar/components';
	import { abbreviations, dialectLabels } from '$lib/grammar/abbreviations';
	const entries = Object.entries(abbreviations).sort(([a], [b]) => a.localeCompare(b));
</script>

<S t="The tiers of an example" id="tiers">
	<p>
		An interlinear example presents a segmented Ainu expression, an aligned grammatical gloss, and a
		translation. Some examples also show the source spelling or the pronounced form. The gloss
		analyzes the expression; the translation gives its meaning in context. Both can be editorial
		additions to a published source
		<Ref k="comrie2015" p="1–2" />.
	</p>
	<p>
		A source citation identifies the publication and, where supplied, its page or example number. A
		provenance note can name the earlier edition quoted through that source. An example labelled
		constructed is an illustration rather than a documented utterance. Published grammatical
		illustrations, elicited judgments, and recorded speech also differ in provenance; the
		accompanying notes identify those differences where known. See
		<Xr ch="glossing-abbreviations-and-citation" />.
	</p>
</S>

<S t="Boundaries and symbols" id="symbols">
	<table>
		<thead><tr><th>Sign</th><th>Use in this grammar</th></tr></thead>
		<tbody>
			<tr
				><td><code>-</code></td><td
					>A boundary within an analyzed word, including derivational and possessive morphology.</td
				></tr
			>
			<tr
				><td><code>=</code></td><td
					>A convention separating person markers in normalized examples. It leaves the affix–clitic
					analysis open.</td
				></tr
			>
			<tr
				><td><code>.</code></td><td
					>Several gloss elements corresponding to one element in the Ainu line, as in <code
						>exist.SG</code
					>
					or <code>elder.sister</code>.</td
				></tr
			>
			<tr
				><td><code>&gt;</code></td><td
					>Orientation from A to O in a combined person gloss, as in <code>1.A&gt;2.O</code>.</td
				></tr
			>
			<tr
				><td><code>1SG.A</code></td><td
					>First-person singular, in the A role. S and O identify the corresponding intransitive and
					object roles.</td
				></tr
			>
			<tr
				><td><code>*</code></td><td
					>An unacceptable form in a grammatical judgment, or a reconstructed form in historical
					discussion. The surrounding account distinguishes these uses.</td
				></tr
			>
			<tr
				><td><code>?</code></td><td
					>A doubtful judgment or uncertain interpretation, as identified in the accompanying
					account.</td
				></tr
			>
			<tr
				><td><code>…</code></td><td
					>An excerpt or continuation when indicated. Source-specific pause and hesitation signs are
					explained with the passage.</td
				></tr
			>
		</tbody>
	</table>
	<p>
		The boundary and gloss conventions follow the Leipzig framework with the stated local convention
		for person marking
		<Ref k="comrie2015" p="2–6" />. The source tier can retain another notation, such as hyphens
		where the segmented tier uses equals signs. Spaces in that tier need not decide the grammatical
		word analysis.
	</p>
</S>

<S t="Comparing source labels" id="source-labels">
	<p>
		Gloss labels belong to particular analyses. Bugaeva's 2012 abbreviation <code>IND</code>
		corresponds to forms labelled fourth person here; her possessive examples use
		<code>POSS</code>
		<Ref k="bugaeva2012" p="478–479, 499" />. A multi-author volume need not use one uniform
		convention across all chapters.
	</p>
	<p>
		Dal Corso distinguishes subject and object number with labels including <code>SS</code>,
		<code>PS</code>, <code>SO</code>, and <code>PO</code>, and uses <code>4S</code> in examples. His
		evidential labels also express a particular analysis of information sources <Ref
			k="dalcorso2018"
			p="16–17, 304–309"
		/>. A gloss label can therefore be normalized only after identifying what it means in that
		source. For competing evidential analyses, see <Xr ch="evidential-schema-overview" />.
	</p>
</S>

<S t="Gloss abbreviations" id="abbreviations">
	<table>
		<thead><tr><th>Label</th><th>Meaning</th></tr></thead>
		<tbody>
			{#each entries as [tag, meaning]}
				<tr id={`gloss-${tag}`}><td><code>{tag}</code></td><td>{meaning}</td></tr>
			{/each}
		</tbody>
	</table>
</S>

<S t="Dialect labels and locality" id="dialects">
	<p>
		A dialect tag locates the cited material at the level its source supports. A broader regional
		label does not identify a particular consultant. When no tag is given, the example's dialect is
		unspecified; it is not automatically Hokkaido. Additional locality, speaker, and recording
		information can appear in the source note.
	</p>
	<table>
		<thead><tr><th>Tag</th><th>Description</th></tr></thead>
		<tbody>
			{#each Object.entries(dialectLabels) as [tag, meaning]}
				<tr><td><code>{tag}</code></td><td>{meaning}</td></tr>
			{/each}
		</tbody>
	</table>
	<p>
		Some example words link to an external dictionary. Those links help with lookup; the citation
		and annotation establish which meaning and grammatical analysis apply in the passage.
	</p>
</S>
