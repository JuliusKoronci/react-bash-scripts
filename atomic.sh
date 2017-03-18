#!/bin/bash
red='\033[0;31m'
green='\033[0;32m'
black='\033[0;30m'
orange='\033[0;33m'

echo -e "${red}Enter Atomic type: e.g: atoms, molecules or organisms name:${black}"
read AtomicType
echo -e "${red}Enter component name:${black}"
read ModuleName

basePath="src/components/${AtomicType}/${ModuleName}"

moduleNameLower=$(echo "$ModuleName" | tr '[:upper:]' '[:lower:]')
moduleNameUpper=$(echo "$ModuleName" | tr '[:lower:]' '[:upper:]')


echo -e "${orange}Creating folder structure"

mkdir -m 777 -p $basePath
echo -e "${green}Folder ${basePath} ${black}created"

mkdir -m 777 -p ${basePath}/__test__
echo -e "${green}Folder ${basePath}/__test__ ${black}created"

cat <<EOT >> $basePath/index.js
export default from './${ModuleName}';
EOT

cat <<EOT >> $basePath/${ModuleName}.js
// @flow
import React, { PropTypes, Component} from 'react';

class ${ModuleName} extends Component {
  static defaultProps = {};
  static propTypes = {};

  state = {};

  render() {
    return(<div>${ModuleName}</div>);
  }
}


export default ${ModuleName};
EOT

echo -e "${green}Component ${ModuleName}.js ${black}created"

cat <<EOT >> $basePath/__test__/${ModuleName}.test.js
import React from 'react';
import ${ModuleName} from '../${ModuleName}';

describe('${ModuleName}', () => {
	it('should exist', () => {
		expect(${ModuleName}).toBeDefined();
	});
});
EOT

echo -e "${green}Test for component ${ModuleName}.js ${black}created"

echo -e "${black} You can start using your module";