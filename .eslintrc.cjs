module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:astro/recommended",
		"plugin:jsx-a11y/recommended",
	],
	overrides: [
		{
			extends: [
				"plugin:@typescript-eslint/recommended-requiring-type-checking",
				"plugin:@typescript-eslint/strict",
			],
			files: ["*.astro"],
			parser: "astro-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
				extraFileExtensions: [".astro"],
			},
			rules: {
				"@typescript-eslint/no-unsafe-assignment": "off",
				"@typescript-eslint/no-unsafe-return": "off",
				"@typescript-eslint/no-unsafe-member-access": "off",
			},
		},
		{
			files: ["*.ts"],
			extends: [
				"plugin:@typescript-eslint/recommended-requiring-type-checking",
				"plugin:@typescript-eslint/strict",
			],
			
		},
		{
			files: ["*.json", "*.jsonc"],
			excludedFiles: ["package.json"],
			parser: "jsonc-eslint-parser",
			rules: {
				"jsonc/sort-keys": "error",
			},
			extends: ["plugin:jsonc/recommended-with-json"],
		},
		{
			extends: ["plugin:markdown/recommended"],
			files: ["**/*.md"],
			processor: "markdown/markdown",
		},
		{
			files: ["**/*.{yml,yaml}"],
			parser: "yaml-eslint-parser",
			extends: ["plugin:yml/standard", "plugin:yml/prettier"],
			rules: {
				"yml/file-extension": ["error", { extension: "yml" }],
				"yml/sort-keys": [
					"error",
					{
						order: { type: "asc" },
						pathPattern: "^.*$",
					},
				],
				"yml/sort-sequence-values": [
					"error",
					{
						order: { type: "asc" },
						pathPattern: "^.*$",
					},
				],
			},
		},
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: true,
		tsconfigRootDir: __dirname,
	},
	plugins: [
		"@typescript-eslint",
		"astro",
		"jsx-a11y",
		"simple-import-sort",
		"typescript-sort-keys",
	],
	root: true,
	rules: {
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error",

		// Stylistic concerns that don't interfere with Prettier
		"padding-line-between-statements": "off",
		"@typescript-eslint/padding-line-between-statements": [
			"error",
			{ blankLine: "always", next: "*", prev: "block-like" },
		],
	},
};
