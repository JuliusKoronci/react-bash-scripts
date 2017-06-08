'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _firstToLower = require('../utils/firstToLower');

var getTemplate = function getTemplate(name) {
	var lowerCaseName = (0, _firstToLower.firstLetterToLower)(name);
	return 'import ' + lowerCaseName + 'Reducer from \'./ducks/' + name + 'Duck\';\nimport ' + name + ' from \'./containers/' + name + '\';\n\nexport { ' + name + ' };\nexport { ' + lowerCaseName + 'Reducer };\n';
};

exports.default = getTemplate;
//# sourceMappingURL=indexDuckModule.js.map