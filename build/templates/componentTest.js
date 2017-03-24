"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var getTemplate = function getTemplate(name) {
<<<<<<< HEAD
	return "import React from 'react';\nimport { getLabelMessage } from 'gef-ui-localization';\nimport " + name + " from '../" + name + "';\n\ndescribe('" + name + "', () => {\n\tit('should exist', () => {\n\t\texpect(" + name + ").toBeDefined();\n\t});\n});\n\n";
=======
	return "import React from 'react';\nimport " + name + " from '../" + name + "';\nimport { shallow } from 'enzyme';\n\nconst wrapper = shallow(<" + name + " />);\n\ndescribe('" + name + "', () => {\n\tit('should exist', () => {\n\t\texpect(" + name + ").toBeDefined();\n\t});\n\tit('renders without issues', () => {\n\t\texpect(wrapper.length).toBe(1);\n\t});\n\t\n\t// Test if child component is present\n\t//it('should render one ChildComponent component', () => {\n\t//\texpect(wrapper.find(ChildComponent).length).toBe(1);\n\t//});\n});\n\n";
>>>>>>> npm/cli
};

exports.default = getTemplate;
//# sourceMappingURL=componentTest.js.map