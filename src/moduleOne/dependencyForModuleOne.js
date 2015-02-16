define(['underscore'], function (_) {
	_.each(['underscore from moduleOne dep'], function(message){
		console.log(message);
	});
	return {};
});