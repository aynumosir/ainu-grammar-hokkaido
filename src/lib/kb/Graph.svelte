<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import type { GraphData, GraphNode, GraphLink } from './types';
	import { kindColor, KIND_LABEL, REL_LABEL } from './palette';

	let {
		data,
		height = 520,
		hiddenKinds = [] as string[],
		hiddenRels = [] as string[],
		query = '',
		part = 0,
		labels = 'auto'
	}: {
		data: GraphData;
		height?: number;
		hiddenKinds?: string[];
		hiddenRels?: string[];
		query?: string;
		part?: number;
		labels?: 'auto' | 'all' | 'none';
	} = $props();

	let el: HTMLDivElement;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let graph: any = null;
	let dark = $state(false);
	let ready = $state(false);
	let hovered: string | null = null;

	function radius(n: GraphNode): number {
		switch (n.kind) {
			case 'part':
				return 7;
			case 'chapter':
				return n.center ? 9 : 3.2 + Math.sqrt(n.n || 1) / 3.5;
			case 'source':
				return 2.6 + Math.log2(1 + (n.n || 1)) * 0.9;
			case 'section':
				return 2.4 + Math.sqrt(n.n || 1) / 4;
			case 'claim':
				return 2.2 + Math.sqrt(n.n || 1) * 0.9;
			default:
				return 2.6;
		}
	}

	function matches(n: GraphNode): boolean {
		const q = query.trim().toLowerCase();
		return q.length > 0 && n.label.toLowerCase().includes(q);
	}

	function filtered(): GraphData {
		const kinds = new Set(hiddenKinds);
		const rels = new Set(hiddenRels);
		const keep = new Set<string>();
		const nodes = data.nodes.filter((n) => {
			if (kinds.has(n.kind)) return false;
			if (part && n.kind !== 'source' && n.part !== undefined && n.part !== part) return false;
			keep.add(n.id);
			return true;
		});
		const links = data.links.filter((l) => !rels.has(l.rel) && keep.has(idOf(l.source)) && keep.has(idOf(l.target)));
		if (part) {
			// drop sources not linked to a kept chapter
			const linked = new Set(links.flatMap((l) => [idOf(l.source), idOf(l.target)]));
			return { nodes: nodes.filter((n) => n.kind !== 'source' || linked.has(n.id)), links };
		}
		return { nodes, links };
	}
	const idOf = (x: string | { id: string }) => (typeof x === 'string' ? x : x.id);

	function apply() {
		const d = filtered();
		graph.graphData({ nodes: d.nodes.map((n) => ({ ...n })), links: d.links.map((l) => ({ ...l })) });
	}

	function draw(node: GraphNode & { x: number; y: number }, ctx: CanvasRenderingContext2D, scale: number) {
		const r = radius(node);
		const hit = matches(node);
		const q = query.trim().length > 0;
		ctx.beginPath();
		ctx.arc(node.x, node.y, r, 0, 2 * Math.PI);
		ctx.fillStyle = kindColor(node.kind, dark);
		ctx.globalAlpha = q && !hit ? 0.25 : 1;
		ctx.fill();
		ctx.globalAlpha = 1;
		if (hit || node.id === hovered || node.center) {
			ctx.lineWidth = 2 / scale;
			ctx.strokeStyle = dark ? '#e2e8f0' : '#1e293b';
			ctx.stroke();
		}
		const showLabel =
			labels === 'all' ||
			hit ||
			node.id === hovered ||
			node.center ||
			(labels === 'auto' && (node.kind === 'part' || r * scale > 7));
		if (!showLabel) return;
		const size = Math.max(10 / scale, 2.2);
		ctx.font = `${node.kind === 'part' ? '600 ' : ''}${size}px "IBM Plex Sans", system-ui, sans-serif`;
		const text = node.label.length > 48 ? node.label.slice(0, 47) + '…' : node.label;
		const w = ctx.measureText(text).width;
		const x = node.x;
		const y = node.y + r + size * 0.9;
		ctx.fillStyle = dark ? 'rgba(11,17,32,0.82)' : 'rgba(248,250,252,0.85)';
		ctx.fillRect(x - w / 2 - 2 / scale, y - size * 0.85, w + 4 / scale, size * 1.15);
		ctx.fillStyle = dark ? '#e2e8f0' : '#1e293b';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'alphabetic';
		ctx.fillText(text, x, y);
	}

	onMount(() => {
		let ro: ResizeObserver | null = null;
		const mq = window.matchMedia('(prefers-color-scheme: dark)');
		const onScheme = (e: MediaQueryListEvent) => {
			dark = e.matches;
		};
		let cancelled = false;
		void init();
		return () => {
			cancelled = true;
			ro?.disconnect();
			mq.removeEventListener('change', onScheme);
			graph?._destructor?.();
			graph = null;
		};

		async function init() {
		const mod = await import('force-graph');
		if (cancelled) return;
		const ForceGraph = mod.default;
		dark = mq.matches;
		mq.addEventListener('change', onScheme);

		graph = new ForceGraph(el);
		graph
			.width(el.clientWidth)
			.height(height)
			.backgroundColor('rgba(0,0,0,0)')
			.nodeId('id')
			.nodeLabel((n: GraphNode) => {
				const parts = [`${KIND_LABEL[n.kind as keyof typeof KIND_LABEL] ?? n.kind}: ${n.label}`];
				if (n.kind === 'chapter') parts.push(`${n.n} sentences${n.statements ? `, ${n.statements} statements` : ''}`);
				if (n.kind === 'source') parts.push(`${n.n} citations`);
				return parts.join(' · ');
			})
			.nodeCanvasObject(draw)
			.nodePointerAreaPaint((node: GraphNode & { x: number; y: number }, color: string, ctx: CanvasRenderingContext2D) => {
				ctx.beginPath();
				ctx.arc(node.x, node.y, radius(node) + 2, 0, 2 * Math.PI);
				ctx.fillStyle = color;
				ctx.fill();
			})
			.linkColor((l: GraphLink) => {
				const a = l.rel === 'in' ? 0.35 : l.rel === 'xref' ? 0.28 : 0.2;
				return dark ? `rgba(148,163,184,${a})` : `rgba(100,116,139,${a})`;
			})
			.linkWidth((l: GraphLink) => Math.min(3.5, 0.4 + Math.log2(1 + (l.w || 1)) * 0.6))
			.linkLabel((l: GraphLink) => `${REL_LABEL[l.rel] ?? l.rel}${l.w > 1 ? ` ×${l.w}` : ''}`)
			.onNodeHover((n: GraphNode | null) => {
				hovered = n?.id ?? null;
				el.style.cursor = n?.href ? 'pointer' : 'default';
			})
			.onNodeClick((n: GraphNode) => {
				if (!n.href) return;
				if (n.href.startsWith('http')) window.open(n.href, '_blank', 'noopener');
				else goto(n.href);
			})
			.cooldownTicks(160)
			.onEngineStop(() => graph.zoomToFit(300, 30));
		graph.d3Force('charge')?.strength(-60);
		graph.d3Force('link')?.distance((l: GraphLink) => (l.rel === 'in' ? 28 : 46));
		apply();
		ready = true;
		ro = new ResizeObserver(() => graph?.width(el.clientWidth));
		ro.observe(el);
		}
	});

	$effect(() => {
		// read the reactive inputs first so the effect subscribes to them
		void data;
		void hiddenKinds;
		void hiddenRels;
		void part;
		if (!ready || !graph) return;
		apply();
	});
	$effect(() => {
		void query;
		void labels;
		void dark;
		if (!ready || !graph) return;
		graph.nodeCanvasObject(draw); // repaint with the current highlight and scheme
	});
	$effect(() => {
		void height;
		if (!ready || !graph) return;
		graph.height(height);
	});
</script>

<div class="kb-graph" bind:this={el} style:height={`${height}px`} role="img" aria-label="Network of topics, sources and statements"></div>

<style>
	.kb-graph {
		width: 100%;
		overflow: hidden;
		background: var(--color-canvas);
		border: 1px solid var(--color-border);
	}
</style>
