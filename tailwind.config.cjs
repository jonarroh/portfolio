/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'custom-purple': '#8F2C9A',
				'custom-orange': '#C14B39'
			}
		}
	},
	plugins: []
};
