import isEmpty from 'is-empty';
import shell from 'shelljs';
import createFile from '../utils/createFile';
import chalk from 'chalk';
import defaultRouteConfigTemplate from '../templates/defaultRouteConfigTemplate';

export default function (name, type, path) {
	if (isEmpty(type)) {
		type = 'p';
	}
	if (isEmpty(name) || isEmpty(path)) {
		console.log(chalk.bold.red('Path and name can not be empty, route will be ignored!'));
		return false;
	}
	let config = {};
	const absPath = process.cwd();
	try {
		console.log('yeeh');
	} catch (error) {
		console.log(`Creating src/config directory}`);
		shell.mkdir('-p', `src/config`);
		createFile(defaultRouteConfigTemplate(), 'src/config/routeConfig.js');

	}
}
