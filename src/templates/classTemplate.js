const getTemplate = (name) => {
	return (`// @flow
import React, { PropTypes, Component} from 'react';

class ${name} extends Component {
  static defaultProps = {};
  static propTypes = {};
  
  state = {};
  
  render() {
    return(<div>${name}</div>);
  }
}

 
export default ${name};

`
	);
};

export default getTemplate;
