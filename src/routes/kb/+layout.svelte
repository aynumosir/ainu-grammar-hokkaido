<script lang="ts">
	let { children } = $props();
</script>

<div class="kb-shell">
	{@render children()}
</div>

<style>
	.kb-shell {
		max-width: 76rem;
		margin: 0 auto;
		padding: var(--space-6) var(--space-4) var(--space-12);
		font-family: var(--font-sans);
	}
	.kb-shell :global(h1) {
		font-size: var(--step-3);
		line-height: 1.2;
		margin: 0 0 var(--space-2);
		text-wrap: balance;
	}
	.kb-shell :global(h2) {
		font-size: var(--step-2);
		line-height: 1.25;
		margin: var(--space-8) 0 var(--space-3);
	}
	.kb-shell :global(h3) {
		font-size: var(--step-1);
		margin: var(--space-6) 0 var(--space-2);
	}
	.kb-shell :global(p) {
		margin: 0 0 var(--space-3);
		max-width: 70ch;
	}
	.kb-shell :global(a) {
		color: var(--color-accent);
		text-decoration: underline;
		text-underline-offset: 0.15em;
	}
	.kb-shell :global(table) {
		width: 100%;
		border-collapse: collapse;
		font-size: var(--step--1);
		font-variant-numeric: tabular-nums;
	}
	.kb-shell :global(th),
	.kb-shell :global(td) {
		text-align: left;
		vertical-align: top;
		padding: 6px 8px;
		border-bottom: 1px solid var(--color-border);
	}
	.kb-shell :global(th) {
		font-weight: 600;
		color: var(--color-muted);
		font-size: 0.75rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		background: var(--color-surface-subtle);
	}
	.kb-shell :global(td.num),
	.kb-shell :global(th.num) {
		text-align: right;
	}
	.kb-shell :global(.table-wrap) {
		overflow-x: auto;
		border: 1px solid var(--color-border);
		background: var(--color-surface);
		margin: 0 0 var(--space-4);
	}
	.kb-shell :global(.kicker) {
		font-size: 0.75rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-muted);
		margin: 0 0 var(--space-2);
	}
	.kb-shell :global(.chip) {
		display: inline-block;
		font-size: 0.75rem;
		line-height: 1.3;
		padding: 1px 6px;
		margin: 0 4px 2px 0;
		border: 1px solid var(--color-border-strong);
		color: var(--color-fg);
		text-decoration: none;
		font-family: var(--font-mono);
	}
	.kb-shell :global(.chip:hover) {
		background: var(--color-surface-hover);
	}
	.kb-shell :global(.chip.grade) {
		border-color: transparent;
		background: var(--color-accent-soft);
		font-family: var(--font-sans);
	}
	.kb-shell :global(.chip.status) {
		border-color: transparent;
		background: var(--color-surface-subtle);
		font-family: var(--font-sans);
		color: var(--color-muted);
	}
	.kb-shell :global(.stats) {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-4) var(--space-8);
		margin: var(--space-4) 0 var(--space-6);
		padding: var(--space-3) 0;
		border-top: 1px solid var(--color-border);
		border-bottom: 1px solid var(--color-border);
	}
	.kb-shell :global(.stat) {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}
	.kb-shell :global(.stat .v) {
		font-size: var(--step-2);
		font-variant-numeric: tabular-nums;
		line-height: 1.1;
	}
	.kb-shell :global(.stat .k) {
		font-size: 0.75rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--color-muted);
	}
	.kb-shell :global(.muted) {
		color: var(--color-muted);
	}
	.kb-shell :global(td .q) {
		font-family: var(--font-serif);
		font-size: 0.85rem;
		margin-top: 2px;
	}
	.kb-shell :global(.ain) {
		font-family: var(--font-mono);
	}
</style>
