({
	"baseUrl": "./",
	modules: [
		{
			"name": "moduleOne/moduleOne",
			exclude:['underscore']
		},
		{
			"name": "moduleTwo/moduleTwo",
			exclude:['underscore']
		}
	],
	removeCombined: true,
	dir:"../build",

	mainConfigFile: 'devModuleConfig.js',
	optimize: 'none'
})