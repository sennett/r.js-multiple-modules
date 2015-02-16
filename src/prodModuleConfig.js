require.config({
	baseUrl: '/build',
	paths: {
		'myModules/moduleOne': 'moduleOne/moduleOne',
		'myModules/moduleTwo': 'moduleTwo/moduleTwo'
	},
	map: {
		'*': {
			'myModules/moduleOne': 'moduleOne/moduleOne',
			'myModules/moduleTwo': 'moduleTwo/moduleTwo'
		}
	}
});