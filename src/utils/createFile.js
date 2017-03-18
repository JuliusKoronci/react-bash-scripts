import shell from 'shelljs';
import chalk from 'chalk';

export default function (content, path) {
	if (!shell.test('-e', path)) {
		console.log(`Creating ${path}`);
		shell.ShellString(content).to(path);
	} else {
		console.log(chalk.bold.red(`File: ${path} already exists`));
		process.exit(0);
	}
}
