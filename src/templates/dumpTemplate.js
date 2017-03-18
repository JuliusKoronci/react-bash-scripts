const getTemplate = (name) => {
	return (`// @flow
import React, { PropTypes, Component} from 'react';

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
