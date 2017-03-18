"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getTemplate = function getTemplate(name) {
  return "// @flow\nimport React, { PropTypes, Component} from 'react';\n\nclass " + name + " extends Component {\n  static defaultProps = {};\n  static propTypes = {};\n  \n  state = {};\n  \n  render() {\n    return(<div>" + name + "</div>);\n  }\n}\n\n \nexport default " + name + ";\n\n";
};

exports.default = getTemplate;
//# sourceMappingURL=classTemplate.js.map