"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var getTemplate = function getTemplate(name) {
	return "import React from 'react';\nimport { getLabelMessage } from 'gef-ui-localization';\nimport " + name + " from '../" + name + "';\n\ndescribe('" + name + "', () => {\n\tit('should exist', () => {\n\t\texpect(" + name + ").toBeDefined();\n\t});\n});\n\n";
};

exports.default = getTemplate;
//# sourceMappingURL=componentTest.js.map