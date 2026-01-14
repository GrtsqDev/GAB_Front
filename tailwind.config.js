/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
	presets: [require('nativewind/preset')],
	theme: {
		extend: {
			colors: {
				primary: '#5771FF',
				primaryDark: '#6935FD',
				bgPrimary: '#FFFFFF',
				bgSecondary: '#F6F7FA',
				textPrimary: '#333333',
				textWhite: '#FFFFFF',
				border: '#E5E7EB'
			}
		}
	},
	plugins: []
}
