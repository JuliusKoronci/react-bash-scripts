"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var getTemplate = function getTemplate(name) {
	var nameLower = name.toLowerCase();
	var nameUpper = name.toUpperCase();
	return "// @flow\nimport { " + nameLower + "Actions } from '../constants/" + name + "Constants';\n\n\nexport const initialState = {\n};\n\nconst " + nameLower + "Reducer = (state: Object = initialState, action: Object) => {\n\tswitch (action.type) {\n\t\tdefault:\n\t\t\treturn state;\n\t}\n};\n\nexport default " + nameLower + "Reducer;\n\n";
};

exports.default = getTemplate;
//# sourceMappingURL=reducerTemplate.js.map