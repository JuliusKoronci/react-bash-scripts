'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _isEmpty = require('is-empty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _indexDuckModule = require('../templates/indexDuckModule');

var _indexDuckModule2 = _interopRequireDefault(_indexDuckModule);

var _duckTemplate = require('../templates/duckTemplate');

var _duckTemplate2 = _interopRequireDefault(_duckTemplate);

var _createComponent = require('../component/createComponent');

var _createComponent2 = _interopRequireDefault(_createComponent);

var _snapshotTestContainer = require('../templates/snapshotTestContainer');

var _snapshotTestContainer2 = _interopRequireDefault(_snapshotTestContainer);

var _createFile = require('../utils/createFile');

var _createFile2 = _interopRequireDefault(_createFile);

var _containerDuckTemplate = require('../templates/containerDuckTemplate');

var _containerDuckTemplate2 = _interopRequireDefault(_containerDuckTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dirs = ['/components', '/containers', '/containers/__tests__', '/ducks', '/selectors'];

var handle = function handle(moduleName, path) {
	if ((0, _isEmpty2.default)(path)) {
		path = 'src/modules';
	}
	path += '/' + moduleName;
	dirs.forEach(function (directory) {
		console.log('Creating ' + path + directory);
		_shelljs2.default.mkdir('-p', '' + path + directory);
	});

	(0, _createFile2.default)((0, _indexDuckModule2.default)(moduleName), path + '/index.js');
	(0, _createFile2.default)((0, _duckTemplate2.default)(moduleName), path + '/ducks/' + moduleName + 'Duck.js');
	(0, _createFile2.default)((0, _containerDuckTemplate2.default)(moduleName), path + '/containers/' + moduleName + '.js');
	(0, _createComponent2.default)('' + moduleName, path + '/components');
	(0, _createFile2.default)((0, _snapshotTestContainer2.default)(moduleName), path + '/containers/__tests__/' + moduleName + 'SnapshotTest.js');
};

exports.default = handle;
//# sourceMappingURL=createDuckule.js.map