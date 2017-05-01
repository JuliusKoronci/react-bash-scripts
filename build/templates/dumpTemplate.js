"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var getTemplate = function getTemplate(name) {
	return "// @flow\nimport React from 'react';\nimport PropTypes from 'prop-types';\n\nconst " + name + " = () =>(\n<div>" + name + "</div>\n);\n\n" + name + ".defaultProps = {};\n" + name + ".propTypes = {};\n \nexport default " + name + ";\n\n";
};

exports.default = getTemplate;
//# sourceMappingURL=dumpTemplate.js.map