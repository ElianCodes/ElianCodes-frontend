// Vite+ toolchain config (`vp check`, `vp lint`, `vp fmt`).
// Astro owns the build's Vite config in astro.config.ts; this file only configures the CLI tools.
import { defineConfig } from "vite-plus";

export default defineConfig({
	lint: {
		ignorePatterns: ["dist/**", ".astro/**", ".void/**"],
		options: { typeAware: true, typeCheck: true },
	},
	fmt: {
		useTabs: true,
		ignorePatterns: [
			"dist/**",
			".astro/**",
			".void/**",
			"src/data/**",
			"public/**",
			"CHANGELOG.md",
			"pnpm-lock.yaml",
			".claude/**",
			".void-wrangler.jsonc",
		],
	},
});
