define(['moduleTwo/dependencyForModuleTwo', 'common/someCommonModule'], function (dep, module) {
	return {
		message: 'loaded module two ' + module.message
	};
});