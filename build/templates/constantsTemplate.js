"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var getTemplate = function getTemplate(name) {
	var nameLower = name.toLowerCase();
	var nameUpper = name.toUpperCase();

	return "// @flow\n\nconst " + nameLower + "Actions = {\n\t" + nameUpper + "_REQUEST: '" + nameUpper + "_REQUEST',\n\t" + nameUpper + "_SUCCESS: '" + nameUpper + "_SUCCESS',\n\t" + nameUpper + "_SUCCESS_LOADMORE: '" + nameUpper + "_SUCCESS_LOADMORE',\n\t" + nameUpper + "_ERROR: '" + nameUpper + "_ERROR',\n};\n\nexport { " + nameLower + "Actions };\nexport default " + nameLower + "Actions;\n";
};

exports.default = getTemplate;
//# sourceMappingURL=constantsTemplate.js.map