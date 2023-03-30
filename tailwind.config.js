const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./index.html', './src/**/*.{vue,scss}'],
	darkMode: false, // or 'media' or 'class',
	theme: {
		extend: {
			colors: {
				blue: colors.lightBlue,
			},
		},
	},
};
