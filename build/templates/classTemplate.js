"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getTemplate = function getTemplate(name) {
  return "// @flow\nimport React, { Component} from 'react';\nimport PropTypes from 'prop-types';\n\nclass " + name + " extends Component {\n\n  state = {};\n  \n  render() {\n    return(<div>" + name + "</div>);\n  }\n}\n\n" + name + ".defaultProps = {};\n" + name + ".propTypes = {};\n \nexport default " + name + ";\n\n";
};

exports.default = getTemplate;
//# sourceMappingURL=classTemplate.js.map