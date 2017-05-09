"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var getTemplate = function getTemplate(name) {
	var nameToLower = name.toLowerCase();
	var nameToUpper = name.toUpperCase();

	return "// @flow\nimport { " + nameToLower + "Actions } from '../constants/" + name + "Constants';\n";
};

exports.default = getTemplate;
//# sourceMappingURL=actionTemplate.js.map