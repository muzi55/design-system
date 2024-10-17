import type { Config } from "tailwindcss";
interface FontSizeConfig {
	lineHeight: string;
	fontWeight: string;
}
interface FontSize {
	[key: string]: [string, FontSizeConfig];
}

const colors = {
	primary: {
		Default: "var(--primary-40)",
		onPrimary: "var(--primary-100)",
		container: "var(--primary-90)",
		onPrimaryContainer: "var(--primary-10)",
		0: "var(--primary-0)",
		10: "var(--primary-10)",
		20: "var(--primary-20)",
		30: "var(--primary-30)",
		40: "var(--primary-40)",
		50: "var(--primary-50)",
		60: "var(--primary-60)",
		70: "var(--primary-70)",
		80: "var(--primary-80)",
		90: "var(--primary-90)",
		95: "var(--primary-95)",
		100: "var(--primary-100)",
	},
	neutral: {
		DEFAULT: "var(--neutral-0)",
		0: "var(--neutral-0)",
		10: "var(--neutral-10)",
		20: "var(--neutral-20)",
		30: "var(--neutral-30)",
		40: "var(--neutral-40)",
		50: "var(--neutral-50)",
		60: "var(--neutral-60)",
		70: "var(--neutral-70)",
		80: "var(--neutral-80)",
		90: "var(--neutral-90)",
		95: "var(--neutral-95)",
		100: "var(--neutral-100)",
	},
};
const fontSize: FontSize = {
	display: [
		"3.75rem",
		{
			lineHeight: "1.2",
			fontWeight: "700",
		},
	],
	h1: [
		"3rem",
		{
			lineHeight: "1.2",
			fontWeight: "700",
		},
	],
	h2: [
		"2.25rem",
		{
			lineHeight: "1.2",
			fontWeight: "700",
		},
	],
	h3: [
		"1.5rem",
		{
			lineHeight: "1.5",
			fontWeight: "700",
		},
	],
	h4: [
		"1.3125rem",
		{
			lineHeight: "1.5",
			fontWeight: "700",
		},
	],
	body: [
		"1rem",
		{
			lineHeight: "1.75",
			fontWeight: "400",
		},
	],
	bodyBold: [
		"1rem",
		{
			lineHeight: "1.75",
			fontWeight: "700",
		},
	],
	label: [
		"0.875rem",
		{
			lineHeight: "1.5",
			fontWeight: "400",
		},
	],
	labelBold: [
		"0.875rem",
		{
			lineHeight: "1.5",
			fontWeight: "700",
		},
	],
};

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors,
			fontSize,
		},
	},
	plugins: [],
};
export default config;
