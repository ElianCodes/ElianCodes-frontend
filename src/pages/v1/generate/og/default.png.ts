import { renderOgImage } from "@lib/og";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
	return renderOgImage({
		title: "Team DX @Astro",
		description:
			"BeJS & React Brussels ambassador, meetup organizer, speaker and writer.",
		linkText: "https://www.elian.codes",
	});
};
