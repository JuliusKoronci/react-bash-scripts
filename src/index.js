#!/usr/bin/env node --harmony
// @flow
import "babel-polyfill";

import program from 'commander';
import co from 'co';
import prompt from 'co-prompt';
import chalk from 'chalk';
import figlet from 'figlet';
import shell from 'shelljs';

// local libs
import createModule from './module/createModule';
import createComponent from './component/createComponent';
import createRoute from './route/createRoute';
import constants from './constants';

const types = [
	constants.types.MODULE,
	constants.types.COMPONENT,
	constants.types.ATOM,
	constants.types.MOLECULE,
	constants.types.ORGANISM,
	constants.types.DUMB,
	constants.types.ROUTE,
	constants.types.PATH,
];
console.log(
	chalk.green(
		figlet.textSync('ReactJS CLI')
	)
);

const pjson = require('../package.json');

program
	.version(pjson.version)
	.usage('with or without arguments :)')
	.option('-l, --module    [module]', 'name of your Module')
	.option('-c, --component [component]', 'name of your Component')
	.option('-a, --atom      [atom]', 'name of your Atom')
	.option('-m, --molecule  [molecule]', 'name of your Molecule')
	.option('-o, --organism  [organism]', 'name of your Organism')
	.option('-d, --dumb      [organism]', 'name of your dumb component')
	.option('-r, --route     [route name]', 'url of your route')
	.option('-p, --path      [path]', 'path for the generated structure [module|component]')
	.parse(process.argv);


const parseValues = co(function *() {
	const config = {};
	let counter = 0;

	types.forEach((type) => {
		config[type] = program[type];
		if (!program[type]) {
			counter++;
		}
	});

	if (counter === types.length || (counter === types.length - 1 && config[constants.types.PATH])) {
		// if no arguments or only path provided run prompts
		config[constants.types.MODULE] = yield prompt(`Enter the name of ${constants.types.MODULE} *: `);
		if (!config[constants.types.MODULE] || '' === config[constants.types.MODULE]) {
			console.log(chalk.bold.red(`The name is required`));
			process.exit(0);
		}
		if (!config[constants.types.PATH]) {
			config[constants.types.PATH] = yield prompt(chalk.bold.cyan(`Optional path, we recommend to leave blank(will default to /src/[modules|components]):`));
		}
	}

	if (config[constants.types.ROUTE] && '' !== config[constants.types.ROUTE]) {
		config['routeType'] = yield prompt(chalk.bold.cyan(`Do you want to add a public or secure route? Options [p|s], defaults to p - public route:`));
		config['routePath'] = yield prompt(chalk.bold.cyan(`Enter the URL path of your route, e.g. /contact (firewall path will be automatically prepended):`));
	}

	return config;
}).catch((error) => {
	console.log(chalk.bold.red(error.message));
	process.exit(0);
});

parseValues.then((values) => handleValues(values))
	.catch((error) => {
		console.log(chalk.bold.red(error.message));
		process.exit(0);
	});

const handleValues = ({ component, path, module, atom, molecule, organism, dumb, route, ...args }) => {

	module && createModule(module, path);
	component && createComponent(component, path);
	dumb && createComponent(dumb, path, undefined, true);
	molecule && createComponent(molecule, path, 'molecules');
	atom && createComponent(atom, path, 'atoms');
	organism && createComponent(organism, path, 'organisms');
	if (route) {
		const { routeType, routePath } = args;
		createRoute(route, routeType, routePath);
	}

	if (shell.exec('npm run test').code !== 0) {
		shell.echo('Can not run tests. Please run tests manually!');
	}

	console.log(chalk.bold.green('Get a cofee and enjoy the time you saved :)!'));
	process.exit(0);
};
