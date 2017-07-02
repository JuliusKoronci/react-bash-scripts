'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _firstToLower = require('../utils/firstToLower');

var getTemplate = function getTemplate(name) {
	var lowerCaseName = (0, _firstToLower.firstLetterToLower)(name);
	return 'import ' + lowerCaseName + 'Reducer, { REDUCER_NAME as ' + lowerCaseName + 'ReducerName } from \'./ducks/' + name + 'Duck\';\nimport ' + name + ' from \'./containers/' + name + '\';\n\nexport { ' + name + ', ' + lowerCaseName + 'Reducer, ' + lowerCaseName + 'ReducerName };\n';
};

exports.default = getTemplate;
//# sourceMappingURL=indexDuckModule.js.map