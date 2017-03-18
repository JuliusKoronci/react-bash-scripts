import shell from 'shelljs';
import indexTemplate from '../templates/index';
import createFile from '../utils/createFile';

const dirs = [
	'/components',
	'/constants',
	'/containers',
	'/reducers',
	'/reducers/__test__',
	'/actions',
	'/actions/__test__',
	'/selectors',
];

const handle = (moduleName, path) => {
	if (!path || '' === path) {
		path = 'src/modules';
	}
	dirs.forEach((directory) => {
		console.log(`Creating ${path}${directory}`);
		shell.mkdir('-p', `${path}${directory}`);
	});

	createFile(indexTemplate(moduleName), `${path}/index.js`);
};

export default handle;
