"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getTemplate = function getTemplate(name) {
  return "import React from 'react';\nimport " + name + " from '../" + name + "';\nimport renderer from 'react-test-renderer';\n\nit('renders correctly', () => {\n  const tree = renderer.create(\n    <" + name + " />\n  ).toJSON();\n  expect(tree).toMatchSnapshot();\n});\n\n";
};

exports.default = getTemplate;
//# sourceMappingURL=snapshotTest.js.map