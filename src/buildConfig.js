({
	"baseUrl": "./",
	modules: [
		{
			"name": "moduleOne/moduleOne",
			"out": "../build/moduleOne.js"
		}
	],

	dir:"../build",

	mainConfigFile: 'devModuleConfig.js',
	optimize: 'none'
})