import shell from 'shelljs';
import isEmpty from 'is-empty';
import indexTemplate from '../templates/indexModule';
import actionTemplate from '../templates/actionTemplate';
import constantsTemplate from '../templates/constantsTemplate';
import reducerTemplate from '../templates/reducerTemplate';
import containerTemplate from '../templates/containerTemplate';
import createComponent from '../component/createComponent';
import actionTest from '../templates/actionTest';
import snapshotTest from '../templates/snapshotTest';
import createFile from '../utils/createFile';

const dirs = [
	'/components',
	'/constants',
	'/containers',
	'/containers/__tests__',
	'/reducers',
	'/reducers/__tests__',
	'/actions',
	'/actions/__tests__',
	'/selectors',
];

const handle = (moduleName, path) => {
	if (isEmpty(path)) {
		path = 'src/modules';
	}
	path += `/${moduleName}`;
	dirs.forEach((directory) => {
		console.log(`Creating ${path}${directory}`);
		shell.mkdir('-p', `${path}${directory}`);
	});

	createFile(indexTemplate(moduleName), `${path}/index.js`);
	createFile(constantsTemplate(moduleName), `${path}/constants/${moduleName}Constants.js`);
	createFile(actionTemplate(moduleName), `${path}/actions/${moduleName}Actions.js`);
	createFile(actionTest(moduleName), `${path}/actions/__tests__/${moduleName}ActionsTest.js`);
	createFile(reducerTemplate(moduleName), `${path}/reducers/${moduleName}Reducer.js`);
	createFile(containerTemplate(moduleName), `${path}/containers/${moduleName}.js`);
	createComponent(`${moduleName}View`,`${path}/components`);
	createFile(snapshotTest(moduleName), `${path}/containers/__tests__/${moduleName}SnapshotTest.js`);
};

export default handle;
