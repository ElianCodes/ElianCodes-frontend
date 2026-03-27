import type { APIRoute } from "astro";
import { renderOgImage } from "@lib/og";

export const GET: APIRoute = async () => {
	return renderOgImage({
		title: "Team DX @Astro",
		description:
			"BeJS & React Brussels ambassador, meetup organizer, speaker and writer.",
		linkText: "https://www.elian.codes",
	});
};
