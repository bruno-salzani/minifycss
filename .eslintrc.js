const debug = process.env.NODE_ENV !== 'production';

module.exports = {
	root: true,

	parser: 'vue-eslint-parser',

	parserOptions: {
		parser: 'babel-eslint',
		sourceType: 'module',
		ecmaFeatures: {
			impliedStrict: true,
		},
	},

	env: {
		node: true,
		es6: true,
	},

	extends: ['eslint:recommended', 'prettier', 'plugin:vue/strongly-recommended', 'prettier/vue'],

	rules: {
		'no-console': !debug ? 'warn' : 'off',
		'no-debugger': !debug ? 'warn' : 'off',
	},
};
