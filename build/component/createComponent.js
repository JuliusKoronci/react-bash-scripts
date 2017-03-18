'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _createFile = require('../utils/createFile');

var _createFile2 = _interopRequireDefault(_createFile);

var _indexComponent = require('../templates/indexComponent');

var _indexComponent2 = _interopRequireDefault(_indexComponent);

var _classTemplate = require('../templates/classTemplate');

var _classTemplate2 = _interopRequireDefault(_classTemplate);

var _dumpTemplate = require('../templates/dumpTemplate');

var _dumpTemplate2 = _interopRequireDefault(_dumpTemplate);

var _componentTest = require('../templates/componentTest');

var _componentTest2 = _interopRequireDefault(_componentTest);

var _snapshotTest = require('../templates/snapshotTest');

var _snapshotTest2 = _interopRequireDefault(_snapshotTest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dirs = ['__tests__'];

var handle = function handle(moduleName, path) {
	var subDir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
	var dumb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	if (!path || '' === path) {
		path = 'src/components';
	}
	if (subDir && '' !== subDir) {
		path += '/' + subDir;
	}

	path += '/' + moduleName;

	dirs.forEach(function (directory) {
		console.log('Creating ' + path + '/' + directory);
		_shelljs2.default.mkdir('-p', path + '/' + directory);
	});
	(0, _createFile2.default)((0, _indexComponent2.default)(moduleName), path + '/index.js');
	dumb && (0, _createFile2.default)((0, _dumpTemplate2.default)(moduleName), path + '/' + moduleName + '.js');
	!dumb && (0, _createFile2.default)((0, _classTemplate2.default)(moduleName), path + '/' + moduleName + '.js');
	(0, _createFile2.default)((0, _componentTest2.default)(moduleName), path + '/__tests__/' + moduleName + 'Test.js');
	(0, _createFile2.default)((0, _snapshotTest2.default)(moduleName), path + '/__tests__/' + moduleName + 'SnapshotTest.js');
};

exports.default = handle;
//# sourceMappingURL=createComponent.js.map