module.exports = {
	"presets": [
		["@babel/preset-env", {"targets": {"node": "current"}}],
		"@babel/typescript",
		"@vue/babel-preset-jsx"
	],
	"plugins": [
		"@babel/proposal-numeric-separator",
		[
			"@babel/proposal-decorators",
			{
				"legacy": true
			}
		],
		["@babel/proposal-class-properties", { "loose": false }],
		"@babel/proposal-object-rest-spread"
	]
}
