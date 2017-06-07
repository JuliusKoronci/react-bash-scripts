"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var getTemplate = function getTemplate(name) {
	return "// @flow\nimport React, { Component} from 'react';\nimport PropTypes from 'prop-types';\n\nclass " + name + " extends Component {\n\n\tstate = {};\n \n\trender() {\n\t\treturn(<div>" + name + "</div>);\n\t}\n}\n\n" + name + ".defaultProps = {};\n" + name + ".propTypes = {};\n\nexport default " + name + ";\n\n";
};

exports.default = getTemplate;
//# sourceMappingURL=classTemplate.js.map