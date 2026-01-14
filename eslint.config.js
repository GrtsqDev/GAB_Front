const { defineConfig } = require('eslint/config')
const expoConfig = require('eslint-config-expo/flat')
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended')

module.exports = defineConfig([
	expoConfig,
	eslintPluginPrettierRecommended,
	{
		ignores: ['dist/*', 'node_modules/*', '.expo/*'],
		rules: {
			'@typescript-eslint/no-unused-vars': 'warn',
			'@typescript-eslint/no-explicit-any': 'warn',
			'sort-imports': 'off',
			'import/order': 'off',
			'simple-import-sort/imports': 'off',
			'simple-import-sort/exports': 'off'
		}
	}
])
