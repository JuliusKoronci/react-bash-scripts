'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _isEmpty = require('is-empty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _indexModule = require('../templates/indexModule');

var _indexModule2 = _interopRequireDefault(_indexModule);

var _actionTemplate = require('../templates/actionTemplate');

var _actionTemplate2 = _interopRequireDefault(_actionTemplate);

var _constantsTemplate = require('../templates/constantsTemplate');

var _constantsTemplate2 = _interopRequireDefault(_constantsTemplate);

var _reducerTemplate = require('../templates/reducerTemplate');

var _reducerTemplate2 = _interopRequireDefault(_reducerTemplate);

var _containerTemplate = require('../templates/containerTemplate');

var _containerTemplate2 = _interopRequireDefault(_containerTemplate);

var _createFile = require('../utils/createFile');

var _createFile2 = _interopRequireDefault(_createFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dirs = ['/components', '/constants', '/containers', '/containers/__tests__', '/reducers', '/reducers/__tests__', '/actions', '/actions/__tests__', '/selectors'];

var handle = function handle(moduleName, path) {
	if ((0, _isEmpty2.default)(path)) {
		path = 'src/modules';
	}
	path += '/' + moduleName;
	dirs.forEach(function (directory) {
		console.log('Creating ' + path + directory);
		_shelljs2.default.mkdir('-p', '' + path + directory);
	});

	(0, _createFile2.default)((0, _indexModule2.default)(moduleName), path + '/index.js');
	(0, _createFile2.default)((0, _constantsTemplate2.default)(moduleName), path + '/constants/' + moduleName + 'Constants.js');
	(0, _createFile2.default)((0, _actionTemplate2.default)(moduleName), path + '/actions/' + moduleName + 'Actions.js');
	(0, _createFile2.default)((0, _reducerTemplate2.default)(moduleName), path + '/reducers/' + moduleName + 'Reducer.js');
	(0, _createFile2.default)((0, _containerTemplate2.default)(moduleName), path + '/containers/' + moduleName + '.js');
};

exports.default = handle;
//# sourceMappingURL=createModule.js.map