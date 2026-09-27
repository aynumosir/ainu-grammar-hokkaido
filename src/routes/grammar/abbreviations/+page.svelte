<script lang="ts">
	import { abbreviations, dialectLabels } from '$lib/grammar/abbreviations';
	import { BOOK_TITLE } from '$lib/consts';

	const entries = Object.entries(abbreviations).sort(([a], [b]) => a.localeCompare(b));
</script>

<svelte:head>
	<title>Abbreviations and conventions — {BOOK_TITLE}</title>
	<meta
		name="description"
		content="Gloss abbreviations, transcription conventions, and dialect tags used in the grammar of Hokkaido Ainu."
	/>
</svelte:head>

<article class="grammar-chapter">
	<h1><span class="ch-num">Back matter</span>Abbreviations and conventions</h1>

	<h2>Interlinear glossing</h2>
	<p>
		Examples align an Ainu expression with grammatical glosses and a translation. A hyphen separates
		analyzed morphemes. An equals sign separates person markers in the grammar's normalized
		notation; it does not settle whether they are affixes or clitics. A period joins gloss elements
		corresponding to one Ainu element, as in <code>exist.SG</code> or <code>elder.sister</code>.
	</p>
	<p>
		Source spellings can retain different conventions. Citations and notes identify published
		examples and their provenance; constructed illustrations are labelled. Dialect tags appear where
		supplied, and an absent tag leaves the dialect unspecified. Some example words link to an
		external dictionary for lookup.
	</p>
	<p>
		An asterisk marks an unacceptable form in grammatical discussion or a reconstructed form in
		historical discussion. A question mark indicates a doubtful judgment or interpretation. See the
		<a href="/grammar/abbreviations-glossing-symbols">full notation guide</a>
		for the tier structure and differences between source labels.
	</p>

	<h2>Gloss abbreviations</h2>
	<table>
		<thead>
			<tr><th>Abbreviation</th><th>Meaning</th></tr>
		</thead>
		<tbody>
			{#each entries as [tag, def]}
				<tr id={`abbr-${tag}`}>
					<td><span class="tag">{tag}</span></td>
					<td>{def}</td>
				</tr>
			{/each}
		</tbody>
	</table>

	<h2>Dialect tags</h2>
	<table>
		<thead>
			<tr><th>Tag</th><th>Meaning</th></tr>
		</thead>
		<tbody>
			{#each Object.entries(dialectLabels) as [tag, def]}
				<tr>
					<td><span class="tag">{tag}</span></td>
					<td>{def}</td>
				</tr>
			{/each}
		</tbody>
	</table>

	<h2>Other conventions</h2>
	<ul>
		<li>
			Ainu forms are cited in the romanisation set out in the chapter on orthography; phonemic
			representations appear between slashes and phonetic ones in square brackets.
		</li>
		<li>
			In a combined person gloss, <code>&gt;</code> runs from A to O, as in <code>1.A&gt;2.O</code>.
		</li>
		<li>
			A section number attached to a source citation locates that source's section. Links to
			chapters and sections of this grammar open the corresponding discussion.
		</li>
	</ul>

	<nav class="ch-nav" aria-label="Chapter navigation">
		<span><a href="/grammar">← Contents</a></span>
		<span><a href="/grammar/references">References →</a></span>
	</nav>
</article>

<style>
	.tag {
		font-variant-caps: all-small-caps;
		letter-spacing: 0.04em;
	}
</style>
