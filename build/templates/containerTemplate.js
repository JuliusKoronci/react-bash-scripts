"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getTemplate = function getTemplate(name) {
  return "// @flow\nimport React, { PropTypes, Component} from 'react';\nimport {connect} from 'react-redux';\nimport {bindActionCreators} from 'redux';\nimport " + name + "View from '../components/" + name + "View';\n\nclass " + name + " extends Component {\n  static defaultProps = {};\n  static propTypes = {};\n\n  render() {\n    return(<" + name + "View />);\n  }\n}\n\nfunction _mapStoreToProps(state, ownProps) {\n    return {state};\n}\nfunction _mapDispatchToProps(dispatch) {\n    return bindActionCreators({}, dispatch);\n}\n\nexport default connect(_mapStoreToProps, _mapDispatchToProps)(" + name + ");\n\n";
};

exports.default = getTemplate;
//# sourceMappingURL=containerTemplate.js.map