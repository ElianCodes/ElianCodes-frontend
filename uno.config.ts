import { defineConfig, presetTypography, presetWind } from "unocss";
import presetIcons from "@unocss/preset-icons/browser";

export default defineConfig({
	presets: [
		presetWind(),
		presetIcons({
			collections: {
				logos: () =>
					import("@iconify-json/logos/icons.json").then(
						// biome-ignore lint/suspicious/noExplicitAny: 🤷‍♂️
						(i) => i.default as any,
					),
				uil: () =>
					// biome-ignore lint/suspicious/noExplicitAny: 🤷‍♂️
					import("@iconify-json/uil/icons.json").then((i) => i.default as any),
			},
		}),
		presetTypography(),
	],
});
