'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _firstToLower = require('../utils/firstToLower');

var getTemplate = function getTemplate(name) {
	return '// @flow\nimport { handleActions } from \'redux-actions\';\nimport { createStandardReducer, baseInitialState } from \'../../../utils/redux\';\nimport { createLoadAction } from \'../../../utils/reduxActions\';\n\nconst NAME = \'' + (0, _firstToLower.firstLetterToLower)(name) + '\';\n\nconst URL_KEY = \'' + name + '\';\n\nexport const actions = {\n\tloadExtData: createLoadAction(NAME, URL_KEY),\n};\n\nexport default handleActions(createStandardReducer(NAME), baseInitialState());\n';
};

exports.default = getTemplate;
//# sourceMappingURL=duckTemplate.js.map