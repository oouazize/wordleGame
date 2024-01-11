/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				'grayBlack': '#393e4c',
				'grayWhite': '#fbfcff',
			},
			colors: {
				'grayBlack': '#393e4c',
				'grayWhite': '#fbfcff',
			}
		},
	},
	plugins: [],
};
