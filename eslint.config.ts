import pluginVue from "eslint-plugin-vue";
import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript";
import pluginVitest from "@vitest/eslint-plugin";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting";
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
	{
		name: "app/files-to-lint",
		files: ["**/*.{ts,mts,tsx,vue}"],
	},

	{
		name: "app/files-to-ignore",
		ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"],
	},
	{ files: ["**/*.{js,mjs,cjs,ts,vue}"] },
	{ languageOptions: { globals: globals.browser } },
	pluginVue.configs["flat/essential"],
	vueTsConfigs.recommended,
	pluginJs.configs.recommended,
	tseslint.configs.recommended,
	eslintConfigPrettier.configs.recommended,
	{
		files: ["**/*.vue"],
		languageOptions: { parserOptions: { parser: tseslint.parser } },
	},
	{
		...pluginVitest.configs.recommended,
		files: ["src/**/__tests__/*"],
	},
	skipFormatting,
);
