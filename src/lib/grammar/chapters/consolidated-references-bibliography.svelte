<script lang="ts">
	import { S, Xr } from '$lib/grammar/components';
	import { bibliography } from '$lib/grammar/bibliography';
	import apparatus from '$lib/grammar/data/apparatus.json';
	const regionNames: Record<string, string> = {
		hokkaido: 'Hokkaido Ainu',
		sakhalin: 'Sakhalin Ainu',
		kuril: 'Kuril Ainu',
		general: 'Comparative, historical, and methodological works'
	};
</script>

<S t="Using the bibliography" id="using-references">
	<p>
		The bibliography groups primary materials, grammatical studies, and comparative works by their
		principal subject. Some entries provide background or comparative reading rather than examples.
		A work's regional grouping does not determine the dialect of every passage quoted from it.
	</p>
	<p>
		Original titles are retained alongside translations where available. Full titles distinguish
		works published by the same author in the same year. An entry marked reported is known through
		another publication; the chapter's citation or example note identifies that intermediary. For a
		recorded performance, the teller, recorder, editor, and publication can be different sources of
		attribution.
	</p>
	<p>
		To find where an example is used, follow
		<Xr ch="index-of-examples-sources-dialects" />. That index counts displayed examples, while this
		bibliography also includes works cited in the explanatory prose.
	</p>
</S>

<S t="Bibliography" id="bibliography">
	{#each apparatus.references as group}
		<h3>{regionNames[group.region] ?? group.region}</h3>
		<ul class="references">
			{#each group.keys as key}
				{@const entry = bibliography[key]}
				<li id={key}>
					{entry.author}. {entry.year}.
					<cite lang={entry.lang ?? 'en'}>
						{#if entry.url}<a href={entry.url}>{entry.title}</a>{:else}{entry.title}{/if}
					</cite>.
					{#if entry.titleTr}[{entry.titleTr}].{/if}
					{#if entry.editor}In {entry.editor} (ed.).{/if}
					{#if entry.container}<i>{entry.container}</i>.{/if}
					{#if entry.pages}{entry.pages}.{/if}
					{#if entry.place || entry.publisher}{[entry.place, entry.publisher]
							.filter(Boolean)
							.join(': ')}.{/if}
					{#if entry.note}{entry.note}{/if}
					{#if entry.reported}<span class="reported-badge">reported</span>{/if}
				</li>
			{/each}
		</ul>
	{/each}
</S>

<style>
	.references {
		list-style: none;
		padding: 0;
	}
	.references li {
		margin: 0 0 1rem;
		padding-left: 1.4rem;
		text-indent: -1.4rem;
		overflow-wrap: anywhere;
	}
</style>
