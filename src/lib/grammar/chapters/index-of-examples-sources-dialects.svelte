<script lang="ts">
	import { S, Xr } from '$lib/grammar/components';
	import apparatus from '$lib/grammar/data/apparatus.json';
	import { bibliography } from '$lib/grammar/bibliography';
	import { chapterNumber } from '$lib/grammar/toc';
	const constructed = apparatus.examples.filter((example) => example.constructed).length;
	function exampleLink(index: number) {
		const example = apparatus.examples[index];
		return `/grammar/${example.chapter}${example.id ? `#${example.id}` : ''}`;
	}
</script>

<S t="What the counts represent" id="scope">
	<p>
		This index covers {apparatus.totalExamples} displayed example occurrences in chapters 1–174, including
		{constructed} labelled constructed. An occurrence is an example displayed in a chapter: the same published
		sentence can appear more than once. These are counts of the grammar's examples, not frequencies in
		an Ainu corpus.
	</p>
	<p>
		Source totals can overlap when an example cites several works. Sources mentioned only in
		explanatory prose are outside these counts. The <Xr ch="consolidated-references-bibliography" />
		provides the wider reference collection.
	</p>
	<p>
		Links identify a chapter and its local example number. Where a passage has a named anchor, the
		link opens it directly; otherwise, it opens the chapter containing that numbered example. Source
		locators and provenance notes remain attached to each example.
	</p>
</S>

{#snippet exampleList(indices: number[])}
	<ul class="example-list">
		{#each indices as index}
			{@const example = apparatus.examples[index]}
			<li>
				<a href={exampleLink(index)}
					>Chapter {chapterNumber(example.chapter)}, example ({example.number})</a
				>
				{#if example.constructed}
					— constructed{/if}
				{#if example.citations.length > 0}
					— {#each example.citations as citation, i}{#if i > 0};
						{/if}{bibliography[citation.key].citeAuthor}
						{bibliography[citation.key].year}{citation.locator
							? `: ${citation.locator}`
							: ''}{/each}
				{/if}
				{#if example.place}<span class="provenance">{example.place}</span>{/if}
			</li>
		{/each}
	</ul>
{/snippet}

<S t="Examples by cited source" id="sources">
	{#each apparatus.sources as source}
		<details>
			<summary
				>{bibliography[source.key].citeAuthor}
				{bibliography[source.key].year} — {source.count} occurrences{source.constructedCount
					? ` (${source.constructedCount} constructed)`
					: ''}</summary
			>
			<p><a href={`/grammar/references#${source.key}`}>{bibliography[source.key].title}</a></p>
			{@render exampleList(source.exampleIndices)}
		</details>
	{/each}
</S>

<S t="Examples by dialect label" id="dialects">
	<p>
		The groups reproduce the labels attached to the examples. Hokkaido without a more specific
		dialect is distinct from an unspecified dialect. A regional tag can cover several speakers or
		localities, and a teaching dialogue has a different provenance from an individually attributed
		recorded utterance.
	</p>
	{#each apparatus.dialects as dialect}
		<details>
			<summary>{dialect.label} — {dialect.count} occurrences</summary>
			{@render exampleList(dialect.exampleIndices)}
		</details>
	{/each}
</S>

<style>
	details {
		margin: 0.6rem 0;
	}
	summary {
		cursor: pointer;
	}
	.example-list {
		padding-left: 1.5rem;
	}
	.example-list li {
		margin-bottom: 0.5rem;
	}
	.provenance {
		display: block;
		font-size: 0.9em;
	}
</style>
