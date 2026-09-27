<script lang="ts">
	import { S, Xr } from '$lib/grammar/components';
	import apparatus from '$lib/grammar/data/apparatus.json';
	import { chapterBySlug, chapterNumber } from '$lib/grammar/toc';
</script>

<S t="Finding a discussion" id="using-index">
	<p>
		This index lists chapter and section titles alphabetically. A title can lead to several
		discussions; a link to a section opens the relevant part of that chapter. Titles describe the
		subject of a discussion and can include an analysis compared with alternatives.
	</p>
	<p>
		For definitions, see <Xr ch="glossary-grammatical-terms" />. For Ainu forms and constructions,
		use
		<Xr ch="index-of-grammatical-morphemes" />; for example provenance, use <Xr
			ch="index-of-examples-sources-dialects"
		/>.
	</p>
</S>

<S t="Chapter and section topics" id="topics">
	<dl class="topics">
		{#each apparatus.subjects as entry}
			<dt>{entry.term}</dt>
			<dd>
				{#each entry.targets as target, i}
					{#if i > 0};
					{/if}
					<a href={`/grammar/${target.chapter}${target.section ? `#${target.section}` : ''}`}>
						{chapterNumber(target.chapter)}. {chapterBySlug(target.chapter)?.title}{target.section
							? ' (section)'
							: ''}
					</a>
				{/each}
			</dd>
		{/each}
	</dl>
</S>

<style>
	.topics dt {
		margin-top: 0.8rem;
		font-weight: 600;
	}
	.topics dd {
		margin-left: 1.2rem;
	}
</style>
