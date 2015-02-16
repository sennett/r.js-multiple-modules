require.config({
	baseUrl: '/build',
	paths: {
		'myModules/moduleOne': 'moduleOne/moduleOne',
		'myModules/moduleTwo': 'moduleTwo/moduleTwo',
		'underscore': [
			'//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore-min',
			'underscore'
		]
	},
	map: {
		'*': {
			'myModules/moduleOne': 'moduleOne/moduleOne',
			'myModules/moduleTwo': 'moduleTwo/moduleTwo'
		}
	}
});