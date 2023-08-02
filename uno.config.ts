import {
	defineConfig,
	presetIcons,
	presetTypography,
	presetWind,
} from "unocss";

export default defineConfig({
	presets: [
		presetWind(),
		presetIcons({
			collections: {
				logos: () =>
					import("@iconify-json/logos/icons.json").then((i) => i.default),
				uil: () =>
					import("@iconify-json/uil/icons.json").then((i) => i.default),
			},
		}),
		presetTypography(),
	],
	// safelist: getSafeList(),
});
