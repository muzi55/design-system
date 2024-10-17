import type { Config } from "tailwindcss";
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

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors,
		},
	},
	plugins: [],
};
export default config;
