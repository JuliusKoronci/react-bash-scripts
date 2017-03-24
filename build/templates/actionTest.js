"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var getTemplate = function getTemplate(name) {
	var nameToLower = name.toLowerCase();
	var nameToUpper = name.toUpperCase();

	return "import * as actions from '../" + name + "Actions';\nimport { " + nameToLower + "Actions } from '../../constants/" + name + "Constants';\nimport { shallow } from 'enzyme';\n\ndescribe('" + name + "Actions', () => {\n\tit('should create an action to add an error', () => {\n\t\tconst expectedAction = {\n\t\t\ttype: " + nameToLower + "Actions." + nameToUpper + "_ERROR,\n\t\t};\n\t\texpect(actions.load" + name + "Error()).toEqual(expectedAction)\n\t})\n});\n\n";
};

exports.default = getTemplate;
//# sourceMappingURL=actionTest.js.map