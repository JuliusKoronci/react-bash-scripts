"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var getTemplate = function getTemplate(name) {
	return "import React from 'react';\nimport " + name + " from '../" + name + "';\nimport { shallow } from 'enzyme';\nimport toJson from 'enzyme-to-json';\n\nconst wrapper = shallow(<" + name + " />);\ndescribe('(Component) " + name + "', () => {\n\tit('Should match snapshot', () => {\n\t\texpect(toJson(wrapper)).toMatchSnapshot();\n\t});\n});\n\n";
};

exports.default = getTemplate;
//# sourceMappingURL=snapshotTest.js.map