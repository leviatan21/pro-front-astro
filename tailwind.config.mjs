/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      fontFamily: {
        Urbanist: ['Urbanist Display', 'system-ui'],
        WorkSans: ['Work Sans Display', 'system-ui'],
       },
    },
	},
	plugins: [],
}
