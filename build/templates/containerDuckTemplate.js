"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var getTemplate = function getTemplate(name) {
	return "// @flow\nimport React, { Component} from 'react';\nimport PropTypes from 'prop-types';\nimport { connect } from 'react-redux';\nimport { bindActionCreators } from 'redux';\nimport " + name + "View from '../components/" + name + "';\nimport baseSelector from '../../../utils/baseSelector';\nimport { actions, REDUCER_NAME } from '../ducks/" + name + "Duck';\n\nexport class " + name + " extends Component {\n\tstatic defaultProps: Object;\n\t\n\tstate = {};\n\n\trender() {\n\t\treturn (\n\t\t\t<" + name + "View />\n\t\t);\n\t}\n}\n\n\n" + name + ".defaultProps = {};\n" + name + ".propTypes = {};\n\nfunction mapStoreToProps(state, ownProps) {\n\treturn {\n\t\t// Loading the default reducer state into the container [partnerContactsAll]\n\t\t// this should make life easier if reducer name changes --> cause one single place and constant\n\t\t[REDUCER_NAME]: baseSelector.listByKey(state, REDUCER_NAME),\n\t};\n}\nfunction mapDispatchToProps(dispatch) {\n\treturn bindActionCreators({\n\t\t...actions,\n\t}, dispatch);\n}\n\nexport default connect(mapStoreToProps, mapDispatchToProps)(" + name + ");\n\n";
};

exports.default = getTemplate;
//# sourceMappingURL=containerDuckTemplate.js.map