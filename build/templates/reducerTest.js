"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var getTemplate = function getTemplate(name) {
	var nameLower = name.toLowerCase();
	var nameUpper = name.toUpperCase();
	return "// @flow\nimport " + nameLower + "Reducer, { initialState } from '../" + name + "Reducer';\nimport { " + nameLower + "Actions } from '../../constants/" + name + "Constants';\n\ndescribe('" + nameLower + "Reducer', () => {\n\tit('return initial state', () => {\n\t\texpect(" + nameLower + "Reducer(undefined, { type: 'unknown' })).toEqual(initialState);\n\t});\n\tit('set error to true if error dispatched', () => {\n\t\texpect(" + nameLower + "Reducer(undefined, { type: " + nameLower + "Actions." + nameUpper + "_ERROR }).error === true).toBeTruthy();\n\t});\n\tit('set loading to false if error dispatched', () => {\n\t\texpect(" + nameLower + "Reducer(undefined, { type: " + nameLower + "Actions." + nameUpper + "_ERROR }).isFetching === false).toBeTruthy();\n\t});\n\tit('set loading to true if request dispatched', () => {\n\t\texpect(" + nameLower + "Reducer(undefined, {\n\t\t\t\ttype: " + nameLower + "Actions." + nameUpper + "_REQUEST,\n\t\t\t}).isFetching === true).toBeTruthy();\n\t});\n\tit('set loaded to true if loadMore dispatched', () => {\n\t\texpect(" + nameLower + "Reducer(undefined, { \n\t\t\ttype: " + nameLower + "Actions." + nameUpper + "_SUCCESS_LOADMORE,\n\t\t\tpayload: initialState." + name + ",\n\t\t}).loaded === true).toBeTruthy();\n\t});\n\tit('set loaded to true if success dispatched', () => {\n\t\texpect(" + nameLower + "Reducer(undefined, { \n\t\t\ttype: " + nameLower + "Actions." + nameUpper + "_SUCCESS,\n\t\t\tpayload: initialState." + name + ",\n\t\t }).loaded === true).toBeTruthy();\n\t});\n\tit('results should match payload if success dispatched with payload', () => {\n\t\tlet payload = {\n\t\t\t...initialState,\n\t\t\t" + name + ": {\n\t\t\t\t...initialState." + name + ",\n\t\t\t\tdata: [\n\t\t\t\t\t{\n\t\t\t\t\t\ttest: 'test'\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t};\n\t\texpect(" + nameLower + "Reducer(initialState, {\n\t\t\ttype: " + nameLower + "Actions." + nameUpper + "_SUCCESS,\n\t\t\tpayload: payload." + name + "\n\t\t})." + name + ").toEqual(payload." + name + ");\n\t});\n});\n";
};

exports.default = getTemplate;
//# sourceMappingURL=reducerTest.js.map