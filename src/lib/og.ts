import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { Resvg, type ResvgRenderOptions } from "@resvg/resvg-js";
import satori from "satori";
import { html as toReactElement } from "satori-html";

const width = 1200;
const height = 630;
const fontPath = join(process.cwd(), "public", "fonts", "outfit.ttf");
const fontData = await readFile(fontPath);

interface OgImageOptions {
	title: string;
	description?: string | null;
	linkText?: string | null;
}

function buildMarkup({ title, description, linkText }: OgImageOptions) {
	return toReactElement(`
  <div style="background-color: white; display: flex; flex-direction: column; height: 100%; padding: 3rem; width: 100%">
    <div style="display:flex; height: 100%; width: 100%; background-color: white; border: 6px solid black; border-radius: 0.5rem; padding: 2rem; filter: drop-shadow(6px 6px 0 rgb(0 0 0 / 1));">
      <div style="display: flex; flex-direction: column; justify-content: space-between; width: 100%">
        <div style="display: flex; justify-content: space-between; gap: 2rem;">
          <div style="display: flex; flex-direction: column; gap: 0.75rem; flex: 1;">
            <p style="font-size: 46px;">ElianCodes</p>
            <p style="font-size: 40px; line-height: 1.2;">${title}</p>
          </div>
          <img src="https://www.elian.codes/assets/img/elian.jpg" width="200px" height="200px" style="border: 3px solid black; border-radius: 0.5rem; object-fit: cover;" />
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          ${
						description
							? `<p style="font-size: 24px; line-height: 1.35;">${description}</p>`
							: ""
					}
          ${linkText ? `<p style="font-size: 28px;">${linkText}</p>` : ""}
        </div>
      </div>
    </div>
  </div>
  `);
}

export async function renderOgImage(options: OgImageOptions) {
	const svg = await satori(buildMarkup(options), {
		fonts: [
			{
				name: "Outfit",
				data: fontData,
				style: "normal",
				weight: 400,
			},
		],
		height,
		width,
	});

	const opts: ResvgRenderOptions = {
		fitTo: {
			mode: "width",
			value: width,
		},
	};

	const resvg = new Resvg(svg, opts);
	const pngData = resvg.render();
	const bytes = new Uint8Array(pngData.asPng());

	return new Response(new Blob([bytes], { type: "image/png" }), {
		headers: {
			"content-type": "image/png",
			"cache-control": "public, max-age=31536000, immutable",
		},
	});
}
