import shell from 'shelljs';
import isEmpty from 'is-empty';
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
	if (isEmpty(path)) {
		path = 'src/components';
	}
	if (!isEmpty(subDir)) {
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
