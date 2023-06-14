module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: ['plugin:react/recommended', 'standard', 'eslint-config-prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'jest',
		'eslint-plugin-import-helpers',
	],
	rules: {
		'no-unused-vars': 'warn',
		'@typescript-eslint/no-loss-of-precision': 'off',
		'react/react-in-jsx-scope': 'off',
		'space-before-function-paren': 'off',
		'comma-dangle': 'off',
		semi: 'off',
		'no-tabs': 'off',
		indent: 'off',
		'ban-ts-comment': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'import-helpers/order-imports': [
			'error',
			{
				newlinesBetween: 'always',
				groups: ['module', '/^@shared/', ['parent', 'sibling', 'index']],
				alphabetize: { order: 'asc', ignoreCase: true },
			},
		],
	},
	globals: {
		JSX: 'readonly',
	},
};
