const getTemplate = (name) => {
	return (`// @flow
import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ${name}View from '../components/${name}';
import baseSelector from '../../../utils/baseSelector';
import { actions, REDUCER_NAME } from '../ducks/${name}Duck';

export class ${name} extends Component {
	static defaultProps: Object;
	
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
	return {
		// Loading the default reducer state into the container [partnerContactsAll]
		// this should make life easier if reducer name changes --> cause one single place and constant
		[REDUCER_NAME]: baseSelector.listByKey(state, REDUCER_NAME),
	};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		...actions,
	}, dispatch);
}

export default connect(mapStoreToProps, mapDispatchToProps)(${name});

`);
};

export default getTemplate;
