"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var getTemplate = function getTemplate(name) {
	var nameToLower = name.toLowerCase();
	var nameToUpper = name.toUpperCase();

	return "// @flow\nimport { createAction } from 'redux-actions';\n\nimport { " + nameToLower + "Actions } from '../constants/" + name + "Constants';\nimport { getData } from 'gef-ui-middleware-api';\n\n\nexport const load" + name + " = (id) => getData({\n\tendpoint: ({ urls }) => `${urls." + name + "}/${id}`,\n\tactions: {\n\t\tonRequest: createAction(" + nameToLower + "Actions." + nameToUpper + "_REQUEST),\n\t\tonSuccess: createAction(" + nameToLower + "Actions." + nameToUpper + "_SUCCESS, (response) => response.json),\n\t\tonError: createAction(" + nameToLower + "Actions." + nameToUpper + "_ERROR),\n\t},\n});\n\nexport const loadMore" + name + " = (id, page) => getData({\n\tendpoint: ({ urls }) => `${urls." + name + "}/${id}?page=${page}`,\n\tactions: {\n\t\tonRequest: createAction(" + nameToLower + "Actions." + nameToUpper + "_REQUEST),\n\t\tonSuccess: createAction(" + nameToLower + "Actions." + nameToUpper + "_SUCCESS_LOADMORE, (response) => response.json),\n\t\tonError: createAction(" + nameToLower + "Actions." + nameToUpper + "_ERROR),\n\t},\n});\n\nexport const load" + name + "Error = () => {\n\treturn {\n\t\ttype: " + nameToLower + "Actions." + nameToUpper + "_ERROR\n\t}\n};\n";
};

exports.default = getTemplate;
//# sourceMappingURL=actionTemplate.js.map