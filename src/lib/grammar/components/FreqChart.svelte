<script module lang="ts">
	// Per-instance unique-id seed. Incremented deterministically in render order
	// on both the server and the client, so SSR/hydration ids match.
	let uidCounter = 0;
</script>

<script lang="ts">
	/**
	 * FreqChart — a small, dependency-free grouped horizontal bar chart for
	 * comparing frequency counts across several series (e.g. our corpus vs. a
	 * published count). Hand-rolled with CSS bars and the project's semantic
	 * tokens; dark-mode-ready, reduced-motion aware, and accessible (a toggle
	 * between absolute counts and % share, focusable bars that announce exact
	 * values, and a visually-hidden data-table fallback).
	 */

	interface Series {
		/** Stable key used to read the value out of each datum. */
		key: string;
		/** Legend label shown to the reader. */
		label: string;
	}
	interface Datum {
		/** Category label (one bar group). */
		label: string;
		/** One numeric value per series key. */
		values: Record<string, number>;
	}

	let {
		title,
		note,
		series,
		data,
		labelLang
	}: {
		/** Chart title (also its accessible name). */
		title: string;
		/** Optional caveat shown under the plot and used as the description. */
		note?: string;
		/** The series to compare, in legend order. */
		series: Series[];
		/** One row per category. */
		data: Datum[];
		/** Optional BCP-47 tag applied to the category labels, e.g. 'ain-Latn'. */
		labelLang?: string;
	} = $props();

	let mode = $state<'count' | 'percent'>('count');

	const uid = `freqchart-${++uidCounter}`;
	const titleId = `${uid}-title`;
	const noteId = `${uid}-note`;

	const nf = new Intl.NumberFormat('en-US');

	// Token-backed fill classes, cycled across series. Listed as literals so
	// Tailwind's content scan generates them.
	const FILLS = ['bg-accent', 'bg-muted', 'bg-fg', 'bg-faint'];

	const totals = $derived(
		Object.fromEntries(
			series.map((s): [string, number] => [
				s.key,
				data.reduce((sum, d) => sum + (d.values[s.key] ?? 0), 0)
			])
		)
	);
	const maxCount = $derived(
		Math.max(0, ...data.flatMap((d) => series.map((s) => d.values[s.key] ?? 0)))
	);

	function share(d: Datum, s: Series): number {
		const total = totals[s.key] ?? 0;
		return total ? ((d.values[s.key] ?? 0) / total) * 100 : 0;
	}
	function barWidth(d: Datum, s: Series): number {
		if (mode === 'percent') return share(d, s);
		return maxCount ? ((d.values[s.key] ?? 0) / maxCount) * 100 : 0;
	}
	function valueLabel(d: Datum, s: Series): string {
		return mode === 'percent' ? `${share(d, s).toFixed(1)}%` : nf.format(d.values[s.key] ?? 0);
	}
	function describe(d: Datum, s: Series): string {
		return `${d.label}, ${s.label}: ${nf.format(d.values[s.key] ?? 0)} (${share(d, s).toFixed(1)}% of ${s.label})`;
	}
</script>

<figure
	class="freqchart bg-surface text-fg border border-hairline"
	aria-labelledby={titleId}
	aria-describedby={note ? noteId : undefined}
>
	<figcaption class="cap">
		<span id={titleId} class="cap-title">{title}</span>
		<div class="modes" role="group" aria-label="Display mode">
			<button
				type="button"
				class="mode-btn"
				aria-pressed={mode === 'count'}
				onclick={() => (mode = 'count')}>Counts</button
			>
			<button
				type="button"
				class="mode-btn"
				aria-pressed={mode === 'percent'}
				onclick={() => (mode = 'percent')}>% share</button
			>
		</div>
	</figcaption>

	<!-- The visual chart is a hover-inspectable redundancy of the data table
	     below; it is hidden from assistive tech, which reads the table instead. -->
	<div class="visual" aria-hidden="true">
		<ul class="legend text-muted">
			{#each series as s, si (s.key)}
				<li>
					<span class="swatch {FILLS[si % FILLS.length]}"></span>{s.label}
				</li>
			{/each}
		</ul>

		<div class="plot">
			{#each data as d (d.label)}
				<div class="group">
					<div class="cat" lang={labelLang}>{d.label}</div>
					<div class="lines">
						{#each series as s, si (s.key)}
							<div class="barline" title={describe(d, s)}>
								<div class="track border border-hairline">
									<div
										class="fill {FILLS[si % FILLS.length]}"
										style:width="{barWidth(d, s)}%"
									></div>
								</div>
								<span class="val font-mono text-fg">{valueLabel(d, s)}</span>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>

	{#if note}
		<p id={noteId} class="note text-muted">{note}</p>
	{/if}

	<table class="sr-only">
		<caption>{title} — counts and percentage share by form</caption>
		<thead>
			<tr>
				<th scope="col">Form</th>
				{#each series as s (s.key)}
					<th scope="col">{s.label} (count)</th>
					<th scope="col">{s.label} (% share)</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each data as d (d.label)}
				<tr>
					<th scope="row" lang={labelLang}>{d.label}</th>
					{#each series as s (s.key)}
						<td>{nf.format(d.values[s.key] ?? 0)}</td>
						<td>{share(d, s).toFixed(1)}%</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</figure>

<style>
	.freqchart {
		/* Spacing aligned with tables and example blocks. Sits flat (no shadow)
		   because it lives inside an article card; elevation is reserved for
		   chrome/popovers. */
		margin: var(--space-6) 0;
		padding: 1rem 1.1rem 1.15rem;
		font-family: var(--font-sans);
		box-shadow: none;
	}

	.cap {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 0.9rem;
		align-items: baseline;
		justify-content: space-between;
		margin-bottom: 0.8rem;
	}

	.cap-title {
		font-size: 0.95rem;
		font-weight: 600;
	}

	.modes {
		display: inline-flex;
	}

	.mode-btn {
		font-family: var(--font-mono);
		font-size: 0.72rem;
		line-height: 1;
		padding: 0.28rem 0.6rem;
		background: transparent;
		color: var(--color-muted);
		border: 1px solid var(--color-border);
		cursor: pointer;
	}

	.mode-btn + .mode-btn {
		border-left: none;
	}

	.mode-btn[aria-pressed='true'] {
		background: var(--color-accent);
		color: var(--color-accent-contrast);
		border-color: var(--color-accent);
	}

	.legend {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem 1rem;
		list-style: none;
		margin: 0 0 0.75rem;
		padding: 0;
		font-size: 0.78rem;
	}

	.legend li {
		display: flex;
		align-items: center;
		gap: 0.4rem;
	}

	.swatch {
		display: inline-block;
		width: 0.8rem;
		height: 0.8rem;
		flex: none;
	}

	.plot {
		display: flex;
		flex-direction: column;
	}

	.group {
		display: grid;
		grid-template-columns: minmax(4rem, 7rem) 1fr;
		gap: 0 0.7rem;
		align-items: center;
		padding: 0.4rem 0;
		border-top: 1px solid var(--color-border);
	}

	.group:first-child {
		border-top: none;
	}

	.cat {
		font-size: 0.82rem;
		font-family: var(--font-mono);
	}

	.lines {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
		min-width: 0;
	}

	.barline {
		display: flex;
		align-items: center;
		gap: 0.55rem;
	}

	.track {
		position: relative;
		flex: 1;
		height: 0.95rem;
		min-width: 0;
		background: var(--color-surface-subtle);
		overflow: hidden;
	}

	.fill {
		height: 100%;
		min-width: 1px;
		transition: width 0.4s ease;
	}

	.val {
		flex: none;
		min-width: 3.4rem;
		text-align: right;
		font-size: 0.76rem;
		font-variant-numeric: tabular-nums;
	}

	.barline:hover .val {
		color: var(--color-accent);
		font-weight: 600;
	}

	.barline:hover .track {
		outline: 1px solid var(--color-accent);
		outline-offset: 1px;
	}

	.note {
		margin: 0.85rem 0 0;
		font-size: 0.78rem;
		line-height: 1.55;
	}

	@media (prefers-reduced-motion: reduce) {
		.fill {
			transition: none;
		}
	}
</style>
