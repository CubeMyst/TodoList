/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['/index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				anton: "'Anton', sans-serif",
				inter: "'Inter', sans-serif",
			},
		},
	},
	plugins: [require("daisyui")],
};
