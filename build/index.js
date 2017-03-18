#!/usr/bin/env node --harmony
'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _coPrompt = require('co-prompt');

var _coPrompt2 = _interopRequireDefault(_coPrompt);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _figlet = require('figlet');

var _figlet2 = _interopRequireDefault(_figlet);

var _createModule = require('./module/createModule');

var _createModule2 = _interopRequireDefault(_createModule);

var _createComponent = require('./component/createComponent');

var _createComponent2 = _interopRequireDefault(_createComponent);

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("babel-polyfill");

// local libs


var types = [_constants2.default.types.MODULE, _constants2.default.types.COMPONENT];
console.log(_chalk2.default.green(_figlet2.default.textSync('ReactJS CLI')));

var create = function create(args) {
	console.log(args);
};

_commander2.default.version('0.0.1').usage('<types>').option('-t, --type [type]', 'Type of generated structure [module|component]').option('-n, --moduleName [moduleName]', 'Name of generated structure [module|component]').option('-p, --path [path]', 'Path for the generated structure [module|component]').parse(process.argv);

var parseValues = (0, _co2.default)(regeneratorRuntime.mark(function _callee() {
	var moduleName, type, path;
	return regeneratorRuntime.wrap(function _callee$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					moduleName = _commander2.default.moduleName;
					type = _commander2.default.type;
					path = _commander2.default.path;

					if (type) {
						_context.next = 7;
						break;
					}

					_context.next = 6;
					return (0, _coPrompt2.default)('Type ' + _constants2.default.types.MODULE + '|' + _constants2.default.types.COMPONENT + ' [module]: ');

				case 6:
					type = _context.sent;

				case 7:
					if (!type) {
						type = 'module';
					}
					if (!types.includes(type)) {
						console.log(_chalk2.default.bold.red('Type: ' + type + ' is not supported'));
						process.exit(0);
					}

					if (moduleName) {
						_context.next = 14;
						break;
					}

					_context.next = 12;
					return (0, _coPrompt2.default)('Enter the name of ' + type + ' *: ');

				case 12:
					moduleName = _context.sent;

					if (!moduleName) {
						console.log(_chalk2.default.bold.red('The name is required'));
						process.exit(0);
					}

				case 14:
					if (path) {
						_context.next = 18;
						break;
					}

					_context.next = 17;
					return (0, _coPrompt2.default)('Optional path, we recommend to leave blank(will default to /src/[modules|components]):');

				case 17:
					path = _context.sent;

				case 18:
					console.log(_chalk2.default.bold.cyan('A new ' + type + ' is going to be created'));

					return _context.abrupt('return', {
						type: type,
						moduleName: moduleName,
						path: path
					});

				case 20:
				case 'end':
					return _context.stop();
			}
		}
	}, _callee, this);
})).catch(function (error) {
	console.log(_chalk2.default.bold.red(error.message));
	process.exit(0);
});

parseValues.then(function (values) {
	return handleValues(values);
}).catch(function (error) {
	console.log(_chalk2.default.bold.red(error.message));
	process.exit(0);
});

var handleValues = function handleValues(_ref) {
	var type = _ref.type,
	    path = _ref.path,
	    moduleName = _ref.moduleName;

	switch (type) {
		case _constants2.default.types.MODULE:
			(0, _createModule2.default)(moduleName, path);
			break;
		case _constants2.default.types.COMPONENT:
			(0, _createComponent2.default)(moduleName, path);
			break;
		default:
	}
	console.log(_chalk2.default.bold.green('Get a cofee and enjoy the time you saved :)!'));
	process.exit(0);
};
//# sourceMappingURL=index.js.map