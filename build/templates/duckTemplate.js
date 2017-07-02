'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _firstToLower = require('../utils/firstToLower');

var getTemplate = function getTemplate(name) {
	return '// @flow\nimport { handleActions } from \'redux-actions\';\nimport { createStandardReducer, baseInitialState } from \'../../../utils/redux\';\nimport { createLoadAction } from \'../../../utils/reduxActions\';\n\nexport const REDUCER_NAME = \'' + (0, _firstToLower.firstLetterToLower)(name) + '\';\n\nexport const URL_KEY = \'' + name + '\';\n\nexport const actions = {\n\tloadExtData: createLoadAction(REDUCER_NAME, URL_KEY),\n};\n\nexport default handleActions(createStandardReducer(REDUCER_NAME), baseInitialState());\n';
};

exports.default = getTemplate;
//# sourceMappingURL=duckTemplate.js.map