const formantCore = require('formantCore');

const components = formantCore.App.componentTypes;
const componentsAndValidators = require('src/_buildTools/_UIpackages')(null, { UIpackage: '%%UIpackage%%' })
const componentLib = componentsAndValidators.packageList;
const validators = componentsAndValidators.validatorList;
formantCore.validators = {};

for (let type in componentLib) {
	if (typeof componentLib[type] === 'string')
		components[type] = require(componentLib[type]);
}
for (let type in validators) {
	formantCore.validators[type] = require(validators[type]);
}
const dependancyInjector = require('src/secondaryAppLauncher/dependancyInjector');

module.exports = formantCore;