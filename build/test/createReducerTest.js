'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _isEmpty = require('is-empty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _reducerTest = require('../templates/reducerTest');

var _reducerTest2 = _interopRequireDefault(_reducerTest);

var _createFile = require('../utils/createFile');

var _createFile2 = _interopRequireDefault(_createFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dirs = ['/reducers/__tests__'];

var handle = function handle(moduleName, path) {
	if ((0, _isEmpty2.default)(path)) {
		path = 'src/__tests__';
	}
	dirs.forEach(function (directory) {
		console.log('Creating ' + path + directory);
		_shelljs2.default.mkdir('-p', '' + path + directory);
	});

	(0, _createFile2.default)((0, _reducerTest2.default)(moduleName), path + '/reducers/__tests__/' + moduleName + 'ReducerTest.js');
};

exports.default = handle;
//# sourceMappingURL=createReducerTest.js.map