#!/usr/bin/env node --harmony
// @flow
require("babel-polyfill");

import program from 'commander';
import co from 'co';
import prompt from 'co-prompt';
import chalk from 'chalk';
import figlet from 'figlet';

// local libs
import createModule from './module/createModule';
import createComponent from './component/createComponent';
import constants from './constants';

const types = [constants.types.MODULE, constants.types.COMPONENT];
console.log(
	chalk.green(
		figlet.textSync('ReactJS CLI')
	)
);

const create = (args) => {
	console.log(args);
};

program
	.version('0.0.1')
	.usage('<types>')
	.option('-t, --type [type]', 'Type of generated structure [module|component]')
	.option('-n, --moduleName [moduleName]', 'Name of generated structure [module|component]')
	.option('-p, --path [path]', 'Path for the generated structure [module|component]')
	.parse(process.argv);


const parseValues = co(function *() {
	let moduleName: string = program.moduleName;
	let type: string = program.type;
	let path: string = program.path;
	if (!type) {
		type = yield prompt(`Type ${constants.types.MODULE}|${constants.types.COMPONENT} [module]: `);
	}
	if (!type) {
		type = 'module';
	}
	if (!types.includes(type)) {
		console.log(chalk.bold.red(`Type: ${type} is not supported`));
		process.exit(0);
	}
	if (!moduleName) {
		moduleName = yield prompt(`Enter the name of ${type} *: `);
		if (!moduleName) {
			console.log(chalk.bold.red(`The name is required`));
			process.exit(0);
		}
	}
	if (!path) {
		path = yield prompt(`Optional path, we recommend to leave blank(will default to /src/[modules|components]):`);
	}
	console.log(chalk.bold.cyan(`A new ${type} is going to be created`));

	return {
		type,
		moduleName,
		path
	};
}).catch((error) => {
	console.log(chalk.bold.red(error.message));
	process.exit(0);
});

parseValues.then((values) => handleValues(values))
	.catch((error) => {
		console.log(chalk.bold.red(error.message));
		process.exit(0);
	});

const handleValues = ({ type, path, moduleName }) => {
	switch (type) {
		case constants.types.MODULE:
			createModule(moduleName, path);
			break;
		case constants.types.COMPONENT:
			createComponent(moduleName, path);
			break;
		default:
	}
	console.log(chalk.bold.green('Get a cofee and enjoy the time you saved :)!'));
	process.exit(0);
};
