'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('renders correctly', function () {
  var tree = _reactTestRenderer2.default.create(_react2.default.createElement(_Button2.default, null)).toJSON();
  expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=ButtonSnapshotTest.js.map