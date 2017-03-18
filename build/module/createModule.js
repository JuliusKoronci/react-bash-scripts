'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _index = require('../templates/index');

var _index2 = _interopRequireDefault(_index);

var _createFile = require('../utils/createFile');

var _createFile2 = _interopRequireDefault(_createFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dirs = ['/components', '/constants', '/containers', '/reducers', '/reducers/__test__', '/actions', '/actions/__test__', '/selectors'];

var handle = function handle(moduleName, path) {
	if (!path || '' === path) {
		path = 'src/modules';
	}
	dirs.forEach(function (directory) {
		console.log('Creating ' + path + directory);
		_shelljs2.default.mkdir('-p', '' + path + directory);
	});

	(0, _createFile2.default)((0, _index2.default)(moduleName), path + '/index.js');
};

exports.default = handle;
//# sourceMappingURL=createModule.js.map