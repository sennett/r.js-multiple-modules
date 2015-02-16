define(['moduleOne/dependencyForModuleOne', 'underscore'], function (dependency, _) {
	_.each(['underscore from moduleOne'], function(message){
		console.log(message);
	});
	return {
		message: 'loaded module one'
	};
});