<script lang="ts">
	import stats from '../data/mdb-applicative-stats.json';
	let { prefix }: { prefix: 'e-' | 'ko-' | 'o-' } = $props();
	const block = $derived(stats.prefixes.find((p) => p.prefix === prefix)!);
	const labels: Record<string, string> = {
		content: 'Content', theme: 'Theme', instrument: 'Instrument', cause: 'Cause',
		location: 'Location', range: 'Range', purpose: 'Purpose', manner: 'Manner',
		path: 'Path', addressee: 'Addressee', goal: 'Goal', 'place-goal': 'Place goal',
		comitative: 'Comitative', benefactive: 'Benefactive', malefactive: 'Malefactive',
		recipient: 'Recipient', source: 'Source', other: 'Other'
	};
</script>

<table>
	<caption>
		MDB annotated inventory: <i lang="ain-Latn">{prefix}</i>
		({block.denominator} distinct verb lemmas)
	</caption>
	<thead>
		<tr>
			<th scope="col">Applied-object role</th>
			<th scope="col">Verb lemmas</th>
			<th scope="col">Share (%)</th>
			<th scope="col">Annotation confidence: high / medium / low</th>
		</tr>
	</thead>
	<tbody>
		{#each block.roles as row}
			<tr>
				<th scope="row">{labels[row.role]}</th>
				<td>{row.count} / {block.denominator}</td>
				<td>{row.percent.toFixed(1)}</td>
				<td>{row.confidence.high} / {row.confidence.medium} / {row.confidence.low}</td>
			</tr>
		{/each}
	</tbody>
</table>
