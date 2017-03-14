#!/bin/bash
red='\033[0;31m'
green='\033[0;32m'
black='\033[0;30m'
orange='\033[0;33m'

echo -e "${red}Enter module name:${black}"
read ModuleName
basePath="src/modules/${ModuleName}"

moduleNameLower=$(echo "$ModuleName" | tr '[:upper:]' '[:lower:]')
moduleNameUpper=$(echo "$ModuleName" | tr '[:lower:]' '[:upper:]')


echo -e "${orange}Creating folder structure"

mkdir -m 777 -p $basePath
echo -e "${green}Folder ${basePath} ${black}created"

mkdir -p $basePath/actions
echo "import { createAction } from 'redux-actions';" > $basePath/actions/${ModuleName}Actions.js
echo -e "${green}$basePath/actions/${ModuleName}Actions.js ${black}created"

mkdir -p $basePath/components
touch $basePath/components/.gitignore
echo -e "${green}$basePath/components ${black}created"

mkdir -p $basePath/constants
cat <<EOT >> $basePath/constants/${ModuleName}Constants.js
import keyMirror from 'keymirror';

const ${moduleNameLower}Actions = keyMirror({
	${moduleNameUpper}_REQUEST: null,
	${moduleNameUpper}_SUCCESS: null,
	${moduleNameUpper}_ERROR: null,
});

export { ${moduleNameLower}Actions };
export default { ${moduleNameLower}Actions };

EOT
echo -e "${green}$basePath/constants/${ModuleName}Constants.js  ${black}created"

mkdir -p $basePath/containers
cat <<EOT >> $basePath/containers/$ModuleName.js
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
EOT
echo -e "${green}$basePath/containers/$ModuleName.js ${black}created"


mkdir -p $basePath/reducers
cat <<EOT >> $basePath/reducers/${moduleNameLower}Reducer.js
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
	[${ModuleName}Actions.${moduleNameUpper}_REQUEST]          : _request,
	[${ModuleName}Actions.${moduleNameUpper}_SUCCESS]          : _success,
	[${ModuleName}Actions.${moduleNameUpper}_ERROR]            : _error,
};

export default handleActions(${moduleNameLower}Reducer, {
	isFetching : false,
	error      : false,
});

EOT

echo -e "${green}$basePath/reducers/${moduleNameLower}Reducer.js ${black}created"

cat <<EOT >> $basePath/index.js
import ${moduleNameLower}Reducer from './reducers/${moduleNameLower}Reducer';

export { ${moduleNameLower}Reducer };
EOT

echo -e "${black} You can start using your module"