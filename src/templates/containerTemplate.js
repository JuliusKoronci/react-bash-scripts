const getTemplate = (name) => {
	return (`// @flow
import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ${name}View from '../components/${name}';
import {} from '../actions/${name}Actions';

export class ${name} extends Component {
	static defaultProps: Object;
	static propTypes: Object;
	
	state = {};

	render() {
		return (
			<${name}View />
		);
	}
}


${name}.defaultProps = {};
${name}.propTypes = {};

function mapStoreToProps(state, ownProps) {
	return {};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({}, dispatch);
}

export default connect(mapStoreToProps, mapDispatchToProps)(${name});

`);
};

export default getTemplate;
