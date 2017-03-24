"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var getTemplate = function getTemplate(name) {
	var nameLower = name.toLowerCase();
	var nameUpper = name.toUpperCase();
	return "// @flow\nimport { " + nameLower + "Actions } from '../constants/" + name + "Constants';\nimport { handleActions } from 'redux-actions';\nimport updeep from 'updeep';\n\nconst _success = {\n\tnext(state, action) {\n\t\treturn updeep(\n\t\t\t{\n\t\t\t\tisFetching: false,\n\t\t\t\terror     : false,\n\t\t\t\tloaded    : true,\n\t\t\t\t" + name + "   : action.payload,\n\t\t\t}, state);\n\t},\n};\nconst _loadMore = {\n\tnext(state, action) {\n\t\tconst prevData = state." + name + ".data;\n\t\treturn updeep(\n\t\t\t{\n\t\t\t\tisFetching: false,\n\t\t\t\terror: false,\n\t\t\t\tloaded: true,\n\t\t\t\t" + name + ": {\n\t\t\t\t\tdata: [\n\t\t\t\t\t\t...prevData,\n\t\t\t\t\t\t...action.payload.data,\n\t\t\t\t\t],\n\t\t\t\t\tpageMetaData: action.payload.pageMetaData,\n\t\t\t\t}\n\t\t\t}, state);\n\t},\n};\nconst _error = {\n\tthrow(state) {\n\t\treturn updeep(\n\t\t\t{\n\t\t\t\tisFetching: false,\n\t\t\t\terror     : true,\n\t\t\t}, state);\n\t},\n};\n\nconst _request = {\n\tnext(state, action) {\n\t\treturn updeep(\n\t\t\t{\n\t\t\t\tisFetching : true,\n\t\t\t\terror      : false,\n\t\t\t\tloaded     : false,\n\t\t\t}, state);\n\t},\n};\n\nconst " + nameLower + "Reducer = {\n\t[" + nameLower + "Actions." + nameUpper + "_REQUEST]          : _request,\n\t[" + nameLower + "Actions." + nameUpper + "_SUCCESS]          : _success,\n\t[" + nameLower + "Actions." + nameUpper + "_ERROR]            : _error,\n\t[" + nameLower + "Actions." + nameUpper + "_SUCCESS_LOADMORE]: _loadMore,\n};\n\nexport default handleActions(" + nameLower + "Reducer, {\n\tisFetching : false,\n\terror      : false,\n\tloaded     : false,\n\t" + name + "    : {\n\t\t\"data\": [],\n\t\t\"pageMetaData\": {\n\t\t\t\"size\": 1,\n\t\t\t\"page\": 1,\n\t\t\t\"moreRows\": false,\n\t\t},\n\t},\n});\n\n";
};

exports.default = getTemplate;
//# sourceMappingURL=reducerTemplate.js.map