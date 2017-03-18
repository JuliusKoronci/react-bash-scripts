const getTemplate = (name) => {
	return (`// @flow
import React, { PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ${name} extends Component {
  static defaultProps = {};
  static propTypes = {};

  state = {};

  render() {
    return(<div>${name}</div>);
  }
}

function _mapStoreToProps(state, ownProps) {
    return {state};
}
function _mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default connect(_mapStoreToProps, _mapDispatchToProps)(${name});

`
	);
};

export default getTemplate;
