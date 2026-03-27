import { renderOgImage } from "@lib/og";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
	return renderOgImage({
		title: "Elian Van Cutsem",
		description:
			"Belgian web developer, CTO, DevRel leader, speaker, and community organizer.",
		linkText: "https://www.elian.codes",
	});
};
