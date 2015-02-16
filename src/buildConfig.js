({
	"baseUrl": "./",
	modules: [
		{
			"name": "moduleOne/moduleOne",
			"out": "../build/moduleOneBundle.js"
		}
	],

	dir:"../build",

	mainConfigFile: 'devModuleConfig.js',
	optimize: 'none'
})