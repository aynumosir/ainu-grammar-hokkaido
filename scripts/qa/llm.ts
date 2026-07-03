/**
 * llm.ts — minimal OpenRouter client for the QA campaign.
 * Reads OPENROUTER_API_KEY from .env (bun loads it automatically).
 * Tracks cumulative cost from response.usage against the models table.
 */

export interface LlmUsage {
	calls: number;
	promptTokens: number;
	completionTokens: number;
	costUsd: number;
}

/** $ per 1M tokens (prompt, completion) — keep in sync with chosen models. */
export const PRICES: Record<string, [number, number]> = {
	'qwen/qwen3-235b-a22b-2507': [0.09, 0.1],
	'deepseek/deepseek-v4-flash': [0.09, 0.18],
	'google/gemini-2.5-flash-lite': [0.1, 0.4],
	'z-ai/glm-4.7': [0.4, 1.75],
	'moonshotai/kimi-k2.5': [0.375, 2.025],
	'google/gemini-2.5-flash': [0.3, 2.5],
	'qwen/qwen3-next-80b-a3b-instruct:free': [0, 0],
};

export const usage: LlmUsage = { calls: 0, promptTokens: 0, completionTokens: 0, costUsd: 0 };

export async function chat(
	model: string,
	system: string,
	user: string,
	opts: { maxTokens?: number; temperature?: number; retries?: number } = {},
): Promise<string> {
	const key = process.env.OPENROUTER_API_KEY;
	if (!key) throw new Error('OPENROUTER_API_KEY not set');
	const retries = opts.retries ?? 3;
	let lastErr: unknown;
	for (let attempt = 0; attempt <= retries; attempt++) {
		try {
			const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${key}`,
					'Content-Type': 'application/json',
					'HTTP-Referer': 'https://grammar.aynu.org',
					'X-Title': 'ainu-grammar QA',
				},
				body: JSON.stringify({
					model,
					messages: [
						{ role: 'system', content: system },
						{ role: 'user', content: user },
					],
					max_tokens: opts.maxTokens ?? 8000,
					temperature: opts.temperature ?? 0.1,
				}),
			});
			if (!res.ok) {
				const body = await res.text();
				// 429/5xx → retry with backoff; 4xx other → throw
				if (res.status === 429 || res.status >= 500) throw new Error(`retryable ${res.status}: ${body.slice(0, 200)}`);
				throw Object.assign(new Error(`HTTP ${res.status}: ${body.slice(0, 300)}`), { fatal: true });
			}
			const data = (await res.json()) as any;
			const msg = data.choices?.[0]?.message?.content;
			if (!msg) throw new Error(`empty completion: ${JSON.stringify(data).slice(0, 300)}`);
			usage.calls++;
			const u = data.usage ?? {};
			usage.promptTokens += u.prompt_tokens ?? 0;
			usage.completionTokens += u.completion_tokens ?? 0;
			const [pi, po] = PRICES[model] ?? [0, 0];
			usage.costUsd += ((u.prompt_tokens ?? 0) * pi + (u.completion_tokens ?? 0) * po) / 1e6;
			return msg;
		} catch (e: any) {
			lastErr = e;
			if (e.fatal) throw e;
			await new Promise((r) => setTimeout(r, 2000 * (attempt + 1) ** 2));
		}
	}
	throw lastErr;
}

/** Tolerant JSON-array extractor for model output. */
export function extractJsonArray(text: string): any[] {
	// strip code fences
	const stripped = text.replace(/```(?:json)?/g, '');
	const start = stripped.indexOf('[');
	const end = stripped.lastIndexOf(']');
	if (start === -1 || end === -1 || end < start) throw new Error('no JSON array in output');
	return JSON.parse(stripped.slice(start, end + 1));
}
