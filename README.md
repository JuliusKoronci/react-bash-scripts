# Node CLI to generate React boilerplate's

Have you find yourself copying the same staff from one file to another over and over. 
Creating lots of boilerplate code, the same folder structure, the same files, 
even the contents almost matches. You spend time on these boring tasks, introduce bugs, typos, 
forget to change a variable name. With React, many of these common task while adding a module, constants, actions, 
reducers, containers, dumb components can be automated. All these files if following best practices have lots of common attributes 
which can be automated.

## What are the benefits
* Most of all you spare time(a hell lot of a time). 
  While creating a new module, you have to create around 11 folders and around 15 files ,
* you introduce consistency in your modules, components. You will know every 
  time where to find your code and how it is structured or named  and a reducer will always have a suffix of Reducer,
* you introduce consistency within your teams, 
* you will have tests even if you are lazy to create them. Many times a simple 
  snapshot test, or a does component exist test is all you need but you are in your moment of laziness and you say 
  "I will do it in the morning ;)",
* you can have project specific configuration. Sometime projects have different best practices, or you want to 
  use a different approach on a new project. Creating a branch or a fork and adjusting your templates 
  is a matter of minutes and you can even use it as documentation. If you return to a project after longer tam, your 
  new code will still conform to the rest of the project,
* you gain documentation of the followed best practices on the project. It may sound silly 
  but on larger projects you agree with the team if you will use ES7, where you put your PropTypes, 3
  if you use a constructor for state etc... It is easy to forget these things, but also easy to just open a template and check :).

## Instalation
```
npm install -g package
```

This will add a react-cli into your terminal, command line and you will be able to call it from your project root.
 
######Available comands:
Type react-cli --help

```
  Options:

    -h, --help                   output usage information
    -V, --version                output the version number
    -l, --module    [module]     name of your Module
    -q, --module    [module]     name of your Module with Ducks
    -c, --component [component]  name of your Component
    -a, --atom      [atom]       name of your Atom
    -m, --molecule  [molecule]   name of your Molecule
    -o, --organism  [organism]   name of your Organism
    -d, --dumb      [organism]   name of your dumb component
    -r, --route     [route]      url of your route
    -p, --path      [path]       path for the generated structure [module|component]

```
I don't recommend setting the path option as the scripts use a commonly accepted approach.

### How does the generated code look like?
The module script generates the following folder structure.

```
src
    modules
        actions
            ${NAME}Actions.js
            __tests__
                ${NAME}Test.js
                ${NAME}SnapshotTest.js
        components
            .gitingore
        constants
            ${NAME}Constants.js
        containers
            ${NAME}.js
            __tests__
                ${NAME}Test.js
                ${NAME}SnapshotTest.js
        reducers
            ${NAME}Reducer.js
            __tests__
                ${NAME}Test.js
                ${NAME}SnapshotTest.js
        index.js

```

The component or atom|molecule|organism|dumb scripts generates the following folder structure. 
(If component or dumb is selected, the atomic structure will be left out).

```
src
    components
        atoms
            index.js
            Button.js
            __test__
                ButtonTest.js
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

### Examples
```
$ react-cli -c Button

  ____                 _      _ ____     ____ _     ___ 
 |  _ \ ___  __ _  ___| |_   | / ___|   / ___| |   |_ _|
 | |_) / _ \/ _` |/ __| __|  | \___ \  | |   | |    | | 
 |  _ <  __/ (_| | (__| || |_| |___) | | |___| |___ | | 
 |_| \_\___|\__,_|\___|\__\___/|____/   \____|_____|___|
                                                        
Creating src/components/Button/__tests__
Creating src/components/Button/index.js
Creating src/components/Button/Button.js
Creating src/components/Button/__tests__/ButtonTest.js
Creating src/components/Button/__tests__/ButtonSnapshotTest.js

> react-generator@0.0.8 test /Users/juliuskoronci/WebstormProjects/ReactBashHelpers
> jest

 PASS  src/components/Button/__tests__/ButtonSnapshotTest.js
 PASS  build/components/organisms/Button/__tests__/ButtonSnapshotTest.js
 PASS  build/components/molecules/Button/__tests__/ButtonSnapshotTest.js
 PASS  build/components/atoms/Button/__tests__/ButtonSnapshotTest.js
 PASS  build/components/Button/__tests__/ButtonSnapshotTest.js
 PASS  src/components/Button/__tests__/ButtonTest.js
 PASS  build/components/atoms/Button/__tests__/ButtonTest.js
 PASS  build/components/organisms/Button/__tests__/ButtonTest.js
 PASS  build/components/molecules/Button/__tests__/ButtonTest.js
 PASS  build/components/Button/__tests__/ButtonTest.js

Snapshot Summary
 › 2 snapshots written in 2 test suites.

Test Suites: 10 passed, 10 total
Tests:       10 passed, 10 total
Snapshots:   2 added, 3 passed, 5 total
Time:        2.211s
Ran all test suites.
Get a cofee and enjoy the time you saved :)!

```
Here is the Button

``` 
// @flow
import React, { PropTypes, Component} from 'react';

class Button extends Component {
  static defaultProps = {};
  static propTypes = {};
  
  state = {};
  
  render() {
    return(<div>Button</div>);
  }
}

 
export default Button;
```
The CLI automatically runs jest for your, so snapshots are created 
and a basic test if component is defined is run;

### Changing templates
If you clone, or fork the repo. You will find a src folder. The logic here is simple:
######The templates folder
 Plain js files with export a function. The function accepts the name received from the CLI and returns a string
 
 --> dumpTemplate.js
 ```
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
```
###### The rest of the folders
 These are representing the login for each generator. The just create files and folders.
 
 --> component/createComponent.js
 ``` 
 import shell from 'shelljs';
 import createFile from '../utils/createFile';
 import indexTemplate from '../templates/indexComponent';
 import classTemplate from '../templates/classTemplate';
 import dumpTemplate from '../templates/dumpTemplate';
 import componentTest from '../templates/componentTest';
 import snapshotTest from '../templates/snapshotTest';
 
 const dirs = [
 	'__tests__'
 ];
 
 const handle = (moduleName, path, subDir = undefined, dumb = false) => {
 	if (!path || '' === path) {
 		path = 'src/components';
 	}
 	if (subDir && '' !== subDir) {
 		path += `/${subDir}`;
 	}
 
 	path += `/${moduleName}`;
 
 	dirs.forEach((directory) => {
 		console.log(`Creating ${path}/${directory}`);
 		shell.mkdir('-p', `${path}/${directory}`);
 	});
 	createFile(indexTemplate(moduleName), `${path}/index.js`);
 	dumb && createFile(dumpTemplate(moduleName), `${path}/${moduleName}.js`);
 	!dumb && createFile(classTemplate(moduleName), `${path}/${moduleName}.js`);
 	createFile(componentTest(moduleName), `${path}/__tests__/${moduleName}Test.js`);
 	createFile(snapshotTest(moduleName), `${path}/__tests__/${moduleName}SnapshotTest.js`);
 };
 
 export default handle;
 ```
 
 After you adjusted the templates, you will need to compile ES6 to ES5, there is already a Babel script ready for you.
 
 ``` 
 npm run babelCompile
 ```
 
 Your new setup is ready to be used. You can adjust the command line 
 name in the package.json file. You can change react-cli to whatever you 
 like until the name is not used on your system. You have more options here, you can either 
 compile and run npm link. This will replace the globally installed version with your local, or 
 change the command name to something project specific and run ***npm install -g***. Or you can add an 
 npm script to run it from your project. As you wish :)
 
####@TODO
I welcome any suggestions, forks or pull requests :)

@TODO Route - this is questionable as there is no accepted approach yet to routes
