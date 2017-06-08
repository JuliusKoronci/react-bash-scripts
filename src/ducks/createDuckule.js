import shell from 'shelljs';
import isEmpty from 'is-empty';
import indexDuckModule from '../templates/indexDuckModule';
import duckTemplate from '../templates/duckTemplate';
import createComponent from '../component/createComponent';
import snapshotTestContainer from '../templates/snapshotTestContainer';
import createFile from '../utils/createFile';
import containerDuckTemplate from '../templates/containerDuckTemplate';

const dirs = ['/components', '/containers', '/containers/__tests__', '/ducks', '/selectors'];

const handle = (moduleName, path) => {
	if (isEmpty(path)) {
		path = 'src/modules';
	}
	path += `/${moduleName}`;
	dirs.forEach((directory) => {
		console.log(`Creating ${path}${directory}`);
		shell.mkdir('-p', `${path}${directory}`);
	});

	createFile(indexDuckModule(moduleName), `${path}/index.js`);
	createFile(duckTemplate(moduleName), `${path}/ducks/${moduleName}Duck.js`);
	createFile(containerDuckTemplate(moduleName), `${path}/containers/${moduleName}.js`);
	createComponent(`${moduleName}`, `${path}/components`);
	createFile(snapshotTestContainer(moduleName), `${path}/containers/__tests__/${moduleName}SnapshotTest.js`);
};

export default handle;
