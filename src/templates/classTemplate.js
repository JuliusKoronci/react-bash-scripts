const getTemplate = (name) => {
	return (`// @flow
import React, { Component} from 'react';
import PropTypes from 'prop-types';

class ${name} extends Component {

	state = {};
 
	render() {
		return (<div>${name}</div>);
	}
}

${name}.defaultProps = {};
${name}.propTypes = {};

export default ${name};

`
	);
};

export default getTemplate;
