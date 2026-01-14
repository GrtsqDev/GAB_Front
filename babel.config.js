module.exports = function (api) {
	api.cache(true)
	return {
		presets: [
			'babel-preset-expo',
			['nativewind/babel', { tailwindcssPath: './tailwind.config.js' }]
		],
		plugins: [
			[
				'babel-plugin-root-import',
				{
					rootPathSuffix: 'src/',
					rootPathPrefix: '@/'
				}
			],
			'react-native-reanimated/plugin'
		]
	}
}
