module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
	},
	plugins: ['vue', '@typescript-eslint'],
	extends: [
		'@vue/typescript',
		"plugin:@typescript-eslint/recommended",
		"plugin:vue/essential",
		"standard",
		"plugin:vue/base"

	],
	parserOptions: {
		parser: "@typescript-eslint/parser",
	},
	rules: {
		'linebreak-style': [ 'error', ( process.platform === 'win32' ? 'windows' : 'unix' ) ],
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		indent: ["error", "tab"],
		'indent-legacy': [
			'error',
			'tab',
			{
				SwitchCase: 1,
			},
		],
		'no-tabs': 0,
		semi: [ 'error', 'always' ],
		'comma-dangle': [ 'error', 'always-multiline' ],
		'space-before-function-paren': [ 'error', 'never' ],
		'space-in-parens': [ 'error', 'always' ],
		'no-multi-spaces': [
			'error',
			{
				exceptions: {
					VariableDeclarator: true,
					ImportDeclaration: true,
					ExportNamedDeclaration: true,
				},
			},
		],
		'eol-last': 'off',
		'no-multiple-empty-lines': [
			'error',
			{
				max: 2,
				maxEOF: 1,
				maxBOF: 0,
			},
		],
		curly: [ 'error', 'multi-line' ],
		quotes: 'off',
		'no-trailing-spaces': [
			'error',
			{
				ignoreComments: true,
				skipBlankLines: true,
			},
		],
		'arrow-parens': [ 'error', 'as-needed' ],
		'template-curly-spacing': [ 'error', 'always' ],
		'array-bracket-spacing': [ 'error', 'always' ],
		'object-curly-spacing': [ 'error', 'always' ],
		'lines-between-class-members': 'off',
		'no-new': 'off',
		'@typescript-eslint/semi': ['error'],
		'@typescript-eslint/indent': ['error', 'tab'],
		'@typescript-eslint/explicit-function-return-type': 0
	},
	overrides: [
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)',
			],
			env: {
				jest: true,
			},
		},
	],
};
