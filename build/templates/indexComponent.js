"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var getTemplate = function getTemplate(name) {
	return "import " + name + " from './" + name + "';\nexport default " + name + ";\n\t\t";
};

exports.default = getTemplate;
//# sourceMappingURL=indexComponent.js.map