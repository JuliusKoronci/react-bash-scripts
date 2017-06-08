'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var firstLetterToLower = exports.firstLetterToLower = function firstLetterToLower(text) {
	var arr = [].concat(_toConsumableArray(text));
	var firstToLower = arr.map(function (item, i) {
		if (i === 0) {
			return item.toLowerCase();
		}

		return item;
	});

	return firstToLower.join('');
};
//# sourceMappingURL=firstToLower.js.map