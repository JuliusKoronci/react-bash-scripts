#!/usr/bin/env node --harmony
'use strict';

require('babel-polyfill');

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

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _createModule = require('./module/createModule');

var _createModule2 = _interopRequireDefault(_createModule);

var _createComponent = require('./component/createComponent');

var _createComponent2 = _interopRequireDefault(_createComponent);

var _createRoute = require('./route/createRoute');

var _createRoute2 = _interopRequireDefault(_createRoute);

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// local libs


var types = [_constants2.default.types.MODULE, _constants2.default.types.COMPONENT, _constants2.default.types.ATOM, _constants2.default.types.MOLECULE, _constants2.default.types.ORGANISM, _constants2.default.types.DUMB, _constants2.default.types.ROUTE, _constants2.default.types.PATH];
console.log(_chalk2.default.green(_figlet2.default.textSync('ReactJS CLI')));

var pjson = require('../package.json');

_commander2.default.version(pjson.version).usage('with or without arguments :)').option('-l, --module    [module]', 'name of your Module').option('-c, --component [component]', 'name of your Component').option('-a, --atom      [atom]', 'name of your Atom').option('-m, --molecule  [molecule]', 'name of your Molecule').option('-o, --organism  [organism]', 'name of your Organism').option('-d, --dumb      [organism]', 'name of your dumb component').option('-r, --route     [route name]', 'url of your route').option('-p, --path      [path]', 'path for the generated structure [module|component]').parse(process.argv);

var parseValues = (0, _co2.default)(regeneratorRuntime.mark(function _callee() {
	var config, counter;
	return regeneratorRuntime.wrap(function _callee$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					config = {};
					counter = 0;


					types.forEach(function (type) {
						config[type] = _commander2.default[type];
						if (!_commander2.default[type]) {
							counter++;
						}
					});

					if (!(counter === types.length || counter === types.length - 1 && config[_constants2.default.types.PATH])) {
						_context.next = 12;
						break;
					}

					_context.next = 6;
					return (0, _coPrompt2.default)('Enter the name of ' + _constants2.default.types.MODULE + ' *: ');

				case 6:
					config[_constants2.default.types.MODULE] = _context.sent;

					if (!config[_constants2.default.types.MODULE] || '' === config[_constants2.default.types.MODULE]) {
						console.log(_chalk2.default.bold.red('The name is required'));
						process.exit(0);
					}

					if (config[_constants2.default.types.PATH]) {
						_context.next = 12;
						break;
					}

					_context.next = 11;
					return (0, _coPrompt2.default)(_chalk2.default.bold.cyan('Optional path, we recommend to leave blank(will default to /src/[modules|components]):'));

				case 11:
					config[_constants2.default.types.PATH] = _context.sent;

				case 12:
					if (!(config[_constants2.default.types.ROUTE] && '' !== config[_constants2.default.types.ROUTE])) {
						_context.next = 19;
						break;
					}

					_context.next = 15;
					return (0, _coPrompt2.default)(_chalk2.default.bold.cyan('Do you want to add a public or secure route? Options [p|s], defaults to p - public route:'));

				case 15:
					config['routeType'] = _context.sent;
					_context.next = 18;
					return (0, _coPrompt2.default)(_chalk2.default.bold.cyan('Enter the URL path of your route, e.g. /contact (firewall path will be automatically prepended):'));

				case 18:
					config['routePath'] = _context.sent;

				case 19:
					return _context.abrupt('return', config);

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
	var component = _ref.component,
	    path = _ref.path,
	    module = _ref.module,
	    atom = _ref.atom,
	    molecule = _ref.molecule,
	    organism = _ref.organism,
	    dumb = _ref.dumb,
	    route = _ref.route,
	    args = _objectWithoutProperties(_ref, ['component', 'path', 'module', 'atom', 'molecule', 'organism', 'dumb', 'route']);

	module && (0, _createModule2.default)(module, path);
	component && (0, _createComponent2.default)(component, path);
	dumb && (0, _createComponent2.default)(dumb, path, undefined, true);
	molecule && (0, _createComponent2.default)(molecule, path, 'molecules');
	atom && (0, _createComponent2.default)(atom, path, 'atoms');
	organism && (0, _createComponent2.default)(organism, path, 'organisms');
	if (route) {
		var routeType = args.routeType,
		    routePath = args.routePath;

		(0, _createRoute2.default)(route, routeType, routePath);
	}

	if (_shelljs2.default.exec('npm run test').code !== 0) {
		_shelljs2.default.echo('Can not run tests. Please run tests manually!');
	}

	console.log(_chalk2.default.bold.green('Get a cofee and enjoy the time you saved :)!'));
	process.exit(0);
};
//# sourceMappingURL=index.js.map