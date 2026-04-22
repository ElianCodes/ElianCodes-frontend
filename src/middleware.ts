import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
	const accept = context.request.headers.get("Accept") ?? "";

	if (!accept.includes("text/markdown")) {
		return next();
	}

	const url = new URL(context.request.url);
	const path = url.pathname.replace(/\/$/, "") || "/";

	// Homepage → serve llms-full.txt
	if (path === "/" || path === "") {
		const llmsUrl = new URL("/llms-full.txt", url);
		const res = await fetch(llmsUrl.toString());
		const content = await res.text();
		return new Response(content, {
			headers: {
				"Content-Type": "text/markdown; charset=utf-8",
				"Vary": "Accept",
			},
		});
	}

	// Blog posts → serve raw markdown via static endpoint
	const blogMatch = path.match(/^\/blog\/([^/]+)$/);
	if (blogMatch) {
		const slug = blogMatch[1];
		const mdUrl = new URL(`/blog/${slug}.md`, url);
		const res = await fetch(mdUrl.toString());
		if (res.ok) {
			const content = await res.text();
			return new Response(content, {
				headers: {
					"Content-Type": "text/markdown; charset=utf-8",
					"Vary": "Accept",
				},
			});
		}
	}

	return next();
});
