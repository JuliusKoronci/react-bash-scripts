"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var getTemplate = function getTemplate(name) {
	return "import React from 'react';\nimport " + name + " from '../" + name + "';\nimport { shallow } from 'enzyme';\nimport configureStore from 'redux-mock-store';\nimport toJson from 'enzyme-to-json';\n\nconst middlewares = [];\nconst mockStore = configureStore(middlewares);\n\n// Initialize mockstore with empty state\nconst initialState = {};\nconst store = mockStore(initialState);\n\nconst wrapper = shallow(<" + name + " store={store} />);\ndescribe('(Component) " + name + "', () => {\n\tit('Should match snapshot', () => {\n\t\texpect(toJson(wrapper)).toMatchSnapshot();\n\t});\n});\n\n";
};

exports.default = getTemplate;
//# sourceMappingURL=snapshotTestContainer.js.map