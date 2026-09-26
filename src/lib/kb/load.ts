/**
 * Read a compiled knowledge-base projection (static/kb/…json) from server code.
 *
 * On Cloudflare the static files are served by the Workers assets layer, which sits
 * in front of the worker; a relative fetch from a server load would come back to the
 * app itself. The ASSETS binding reaches the files directly. In the dev server the
 * binding comes from the platform proxy, which accepts a URL string but not a Request.
 */
type AssetsBinding = { fetch: (input: string) => Promise<Response> };
type PlatformLike = { env?: { ASSETS?: AssetsBinding } } | undefined;

export async function kbJson<T>(
	path: string,
	url: URL,
	fetchFn: typeof fetch,
	platform: PlatformLike
): Promise<T | null> {
	const target = new URL(path, url.origin);
	const assets = platform?.env?.ASSETS;
	const res = assets ? await assets.fetch(target.toString()) : await fetchFn(target.toString());
	if (!res.ok) return null;
	if (!(res.headers.get('content-type') ?? '').includes('json')) return null;
	return (await res.json()) as T;
}
