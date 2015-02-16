define(['underscore', 'common/someCommonModule'], function (_, commonModule) {
	_.each(['underscore from moduleOne dep'], function(message){
		console.log(message);
	});
	console.log('common bundle from module one dep: ' + commonModule.message);
	return {};
});