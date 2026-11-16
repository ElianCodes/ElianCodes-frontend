import type { APIRoute } from "astro";
import { renderOg } from "../../../../lib/og";

export const GET: APIRoute = () =>
	renderOg({
		title: "Elian Van Cutsem",
		eyebrow: "whoami",
		footer: "Speaker · engineer · internet troublemaker",
	});
