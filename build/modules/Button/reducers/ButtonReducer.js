'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _buttonReducer;

var _ButtonConstants = require('../constants/ButtonConstants');

var _reduxActions = require('redux-actions');

var _updeep = require('updeep');

var _updeep2 = _interopRequireDefault(_updeep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _success = {
	next: function next(state, action) {
		return (0, _updeep2.default)({
			isFetching: false,
			error: false,
			loaded: true
		}, state);
	}
};
var _error = {
	next: function next(state) {
		return (0, _updeep2.default)({
			isFetching: false,
			error: true
		}, state);
	}
};

var _request = {
	next: function next(state, action) {
		return (0, _updeep2.default)({
			isFetching: true,
			error: false
		}, state);
	}
};

var buttonReducer = (_buttonReducer = {}, _defineProperty(_buttonReducer, buttonActions.BUTTON_REQUEST, _request), _defineProperty(_buttonReducer, buttonActions.BUTTON_SUCCESS, _success), _defineProperty(_buttonReducer, buttonActions.BUTTON_ERROR, _error), _buttonReducer);

exports.default = (0, _reduxActions.handleActions)(buttonReducer, {
	isFetching: false,
	error: false
});
//# sourceMappingURL=ButtonReducer.js.map