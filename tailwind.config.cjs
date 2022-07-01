/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],

	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/colors/themes')['[data-theme=lofi]'],
					accent: '#10ECB7',
					'accent-focus': '#10ECB7',
					'accent-content': '#000',
					success: '#10ECB7',
					'success-focus': '#10ECB7',
					'success-content': '#000',
					warning: '#f9dc5c',
					'warning-focus': '#f9dc5c',
					'warning-content': '#000',
					error: '#ff6052'
				}
			}
		]
	}
};
