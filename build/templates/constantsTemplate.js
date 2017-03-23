"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var getTemplate = function getTemplate(name) {
	var nameLower = name.toLowerCase();
	var nameUpper = name.toUpperCase();

	return "// @flow\nimport keyMirror from 'keymirror';\n\nconst " + nameLower + "Actions = keyMirror({\n\t" + nameUpper + "_REQUEST: null,\n\t" + nameUpper + "_SUCCESS: null,\n\t" + nameUpper + "_SUCCESS_LOADMORE: null,\n\t" + nameUpper + "_ERROR: null,\n});\n\nexport { " + nameLower + "Actions };\nexport default { " + nameLower + "Actions };\n";
};

exports.default = getTemplate;
//# sourceMappingURL=constantsTemplate.js.map