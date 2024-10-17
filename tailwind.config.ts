import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					Default: "#FF5168",
					onPrimary: "#FFFFFF",
					container: "#FFDADA",
					onPrimaryContainer: "#40000C",
					0: "#000000",
					10: "#40000C",
					20: "#680019",
					30: "#920027",
					40: "#BE0036",
					50: "#E3294C",
					60: "#FF5168",
					70: "#FF8890",
					80: "#FFB3B6",
					90: "#FFDADA",
					95: "#FFEDEC",
					100: "#FFFFFF",
				},
				neutral: {
					DEFAULT: "#000",
					0: "#000000",
					10: "#191C1D",
					20: "#2E3132",
					30: "#444748",
					40: "#5C5F5F",
					50: "#747878",
					60: "#8E919",
					70: "#A9ACAC",
					80: "#C4C7C7",
					90: "#E1E3E3",
					95: "#EFF1F1",
					100: "#EFF1F1",
				},
			},
		},
	},
	plugins: [],
};
export default config;
