'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (name, type, path) {
	if ((0, _isEmpty2.default)(type)) {
		type = 'p';
	}
	if ((0, _isEmpty2.default)(name) || (0, _isEmpty2.default)(path)) {
		console.log(_chalk2.default.bold.red('Path and name can not be empty, route will be ignored!'));
		return false;
	}
	var config = {};
	var absPath = process.cwd();
	try {
		console.log('yeeh');
	} catch (error) {
		console.log('Creating src/config directory}');
		_shelljs2.default.mkdir('-p', 'src/config');
		(0, _createFile2.default)((0, _defaultRouteConfigTemplate2.default)(), 'src/config/routeConfig.js');
	}
};

var _isEmpty = require('is-empty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _createFile = require('../utils/createFile');

var _createFile2 = _interopRequireDefault(_createFile);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _defaultRouteConfigTemplate = require('../templates/defaultRouteConfigTemplate');

var _defaultRouteConfigTemplate2 = _interopRequireDefault(_defaultRouteConfigTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=createRoute.js.map