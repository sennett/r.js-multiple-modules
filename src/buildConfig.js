({
	"baseUrl": "./",
	modules: [
		{
			"name": "moduleOne/moduleOne",
			exclude:[
				'underscore',
				'common/someCommonModule'
			]
		},
		{
			"name": "moduleTwo/moduleTwo",
			exclude:[
				'underscore',
				'common/someCommonModule'
			]
		}
	],
	removeCombined: true,
	dir:"../build",

	mainConfigFile: 'devModuleConfig.js',
	optimize: 'none'
})