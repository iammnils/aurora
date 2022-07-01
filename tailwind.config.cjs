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
					info: '#4361ee',
					'info-focus': '#4361ee',
					'info-content': '#fff',
					success: '#14ddac',
					'success-focus': '#14ddac',
					'success-content': '#fff',
					warning: '#fdc500',
					'warning-focus': '#fdc500',
					'warning-content': '#000',
					error: '#ff6052',
					'error-focus': '#ff6052'
				}
			}
		]
	}
};
