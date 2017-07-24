"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var getTemplate = function getTemplate(name) {
	return "// @flow\nimport React, { Component} from 'react';\nimport PropTypes from 'prop-types';\nimport { connect } from 'react-redux';\nimport { bindActionCreators } from 'redux';\nimport " + name + "View from '../components/" + name + "';\nimport {} from '../actions/" + name + "Actions';\n\nexport class " + name + " extends Component {\n\tstatic defaultProps: Object;\n\tstatic propTypes: Object;\n\t\n\tstate = {};\n\n\trender() {\n\t\treturn (\n\t\t\t<" + name + "View />\n\t\t);\n\t}\n}\n\n\n" + name + ".defaultProps = {};\n" + name + ".propTypes = {};\n\nfunction mapStoreToProps(state, ownProps) {\n\treturn {};\n}\nfunction mapDispatchToProps(dispatch) {\n\treturn bindActionCreators({}, dispatch);\n}\n\nexport default connect(mapStoreToProps, mapDispatchToProps)(" + name + ");\n\n";
};

exports.default = getTemplate;
//# sourceMappingURL=containerTemplate.js.map