"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var getTemplate = function getTemplate(name) {
	var lowerCaseName = name.toLowerCase();
	return "import " + lowerCaseName + "Reducer from './reducers/" + lowerCaseName + "Reducer';\nexport { " + lowerCaseName + "Reducer };\n";
};

exports.default = getTemplate;
//# sourceMappingURL=indexModule.js.map