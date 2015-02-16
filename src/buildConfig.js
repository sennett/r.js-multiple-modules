({
	"baseUrl": "./",
	modules: [
		{
			"name": "moduleOne/moduleOne"
		},
		{
			"name": "moduleTwo/moduleTwo"
		}
	],
	removeCombined: true,
	dir:"../build",

	mainConfigFile: 'devModuleConfig.js',
	optimize: 'none'
})