const getTemplate = (name) => {
	return (`// @flow
import React, { PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ${name}View from '../components/${name}View';
import { load${name}, load${name}Error } from '../actions/${name}Actions';

class ${name} extends Component {
  static defaultProps = {};
  static propTypes = {};

  render() {
    return(<${name}View />);
  }
}

function _mapStoreToProps(state, ownProps) {
    return {${name}: state.${name}};
}
function _mapDispatchToProps(dispatch) {
    return bindActionCreators({ load${name}, load${name}Error }, dispatch);
}

export default connect(_mapStoreToProps, _mapDispatchToProps)(${name});

`
	);
};

export default getTemplate;
