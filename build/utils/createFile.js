'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (content, path) {
	if (!_shelljs2.default.test('-e', path)) {
		console.log('Creating ' + path);
		_shelljs2.default.ShellString(content).to(path);
	} else {
		console.log(_chalk2.default.bold.red('File: ' + path + ' already exists'));
		process.exit(0);
	}
};

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=createFile.js.map