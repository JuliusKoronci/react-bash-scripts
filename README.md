# Bash scripts to generate React boilerplate's

Currently there are two scripts module.sh -- you can either use it directly or set up in the scripts section e.g. 
something like
```
"create:module": "sh node_modules/react-bash-helpers/module.sh"
"create:component": "sh node_modules/react-bash-helpers/atomic.sh"
```
The module script generates the following folder structure.

```
src
    modules
        actions
            ${NAME}Actions.js
        components
            .gitingore
        constants
            ${NAME}Constants.js
        containers
            ${NAME}.js
        reducers
            ${NAME}Reducer.js
        index.js

```

The atomic script generates the following folder structure. 
(If type atoms and component name Test is entered).

```
src
    components
        atoms
            index.js
            Test.js
            __test__
                Test.test.js
```


The files are pre-generated with default values, they should work out of the box.

!NOTE: The script is tested only on MAC and created for my personal need but feel free to use :)

File examples:

#####Component:

```
// @flow
import React, { PropTypes, Component} from 'react';

class ${NAME} extends Component {
  static defaultProps = {};
  static propTypes = {};
  
  state = {};
  
  render() {
    return(<div>${NAME}</div>);
  }
}

 
export default ${NAME};

```
#####Dump Component:

```
// @flow
import React, { PropTypes, Component} from 'react';

const ${NAME} = () =>(
<div>${NAME}</div>
);

${NAME}.defaultProps = {};
${NAME}.propTypes = {};
 
export default ${NAME};

```

#####Container Component:

```
// @flow
import React, { PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class $ModuleName extends Component {
  static defaultProps = {};
  static propTypes = {};

  state = {};

  render() {
    return(<div>$ModuleName</div>);
  }
}

function _mapStoreToProps(state, ownProps) {
    return {state};
}
function _mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default connect(_mapStoreToProps, _mapDispatchToProps)($ModuleName);
```

#####Action:

```
import { createAction } from 'redux-actions';

```


#####Constants:

```
import keyMirror from 'keymirror';

const ${moduleNameLower}Actions = keyMirror({
	${moduleNameUpper}_REQUEST: null,
	${moduleNameUpper}_SUCCESS: null,
	${moduleNameUpper}_ERROR: null,
});

export { ${moduleNameLower}Actions };
export default { ${moduleNameLower}Actions };

```

#####Reducers:

```
// @flow
import { ${ModuleName}Actions } from '../constants/${ModuleName}Constants';
import { handleActions } from 'redux-actions';
import updeep from 'updeep';

const _success = {
	next(state, action) {
		return updeep(
			{
				isFetching: false,
				error     : false,
				loaded    : true,
			}, state);
	},
};
const _error = {
	next(state) {
		return updeep(
			{
				isFetching: false,
				error     : true,
			}, state);
	},
};

const _request = {
	next(state, action) {
		return updeep(
			{
				isFetching : true,
				error      : false,
			}, state);
	},
};

const ${moduleNameLower}Reducer = {
	[${moduleNameLower}Actions.${moduleNameUpper}_REQUEST]          : _request,
	[${moduleNameLower}Actions.${moduleNameUpper}_SUCCESS]          : _success,
	[${moduleNameLower}Actions.${moduleNameUpper}_ERROR]            : _error,
};

export default handleActions(${moduleNameLower}Reducer, {
	isFetching : false,
	error      : false,
});

```


####@TODO
 
###### Add boilerplate for container, reducer, action tests
###### Add generators for dump, smart, regular classes, add generators for actions, constants
###### Refactor to use templates
###### Test on linux and windows
###### Add tests for Snapshots
###### Add dependencies into package.json 
###### Find a way to call the scripts global without the need to register npm script for every option 