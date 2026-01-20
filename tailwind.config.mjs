/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#003366', // Azul Mariano
					light: '#004a94',
					dark: '#001a33',
				},
				background: {
					light: '#f6f7f8',
					dark: '#101c22',
				}
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
