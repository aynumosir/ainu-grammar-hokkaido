<script lang="ts">
	import { KINDS, KIND_LABEL, kindColor } from './palette';

	let {
		counts,
		hidden = $bindable([] as string[])
	}: { counts: Record<string, number>; hidden?: string[] } = $props();

	function toggle(kind: string) {
		hidden = hidden.includes(kind) ? hidden.filter((k) => k !== kind) : [...hidden, kind];
	}
	// colours resolve per scheme through CSS custom properties set inline below
</script>

<ul class="legend" aria-label="Record kinds">
	{#each KINDS as kind (kind)}
		{#if counts[kind]}
			<li>
				<button
					type="button"
					class="legend-item"
					class:off={hidden.includes(kind)}
					aria-pressed={!hidden.includes(kind)}
					onclick={() => toggle(kind)}>
					<span class="swatch" style:--light={kindColor(kind, false)} style:--dark={kindColor(kind, true)}></span>
					<span class="name">{KIND_LABEL[kind]}</span>
					<span class="count">{counts[kind]}</span>
				</button>
			</li>
		{/if}
	{/each}
</ul>

<style>
	.legend {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 2px;
	}
	.legend-item {
		display: grid;
		grid-template-columns: 12px 1fr auto;
		align-items: center;
		gap: 8px;
		width: 100%;
		padding: 4px 6px;
		border: 0;
		background: transparent;
		color: var(--color-fg);
		font: inherit;
		font-size: 0.875rem;
		text-align: left;
		cursor: pointer;
	}
	.legend-item:hover {
		background: var(--color-surface-hover);
	}
	.legend-item:focus-visible {
		outline: 2px solid var(--color-accent);
		outline-offset: 1px;
	}
	.legend-item.off {
		color: var(--color-muted);
	}
	.legend-item.off .swatch {
		opacity: 0.25;
	}
	.swatch {
		width: 12px;
		height: 12px;
		background: var(--light);
	}
	@media (prefers-color-scheme: dark) {
		.swatch {
			background: var(--dark);
		}
	}
	.count {
		color: var(--color-muted);
		font-variant-numeric: tabular-nums;
	}
</style>
