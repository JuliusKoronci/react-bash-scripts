const getTemplate = (name) => {
	return (`// @flow
import React from 'react';
import PropTypes from 'prop-types';

const ${name} = () =>(
<div>${name}</div>
);

${name}.defaultProps = {};
${name}.propTypes = {};
 
export default ${name};

`
	);
};

export default getTemplate;
