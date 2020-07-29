'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
var index = require('./index-b0606964.js');
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
var _extends$1 = require('./extends-40571110.js');
var objectWithoutProperties = require('./objectWithoutProperties-35db8ab0.js');

var _StyledDiv = _styled__default("div").withConfig({
  displayName: "ScrollView___StyledDiv",
  componentId: "sc-1hhoqwn-0"
})(["position:relative;z-index:0;height:100%;overflow-x:", ";overflow-y:", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

function ScrollView(_ref) {
  var children = _ref.children,
      horizontal = _ref.horizontal,
      vertical = _ref.vertical,
      props = objectWithoutProperties._objectWithoutProperties(_ref, ["children", "horizontal", "vertical"]);

  return /*#__PURE__*/React__default.createElement(_StyledDiv, _extends$1._extends({}, props, {
    _css: horizontal ? 'auto' : 'hidden',
    _css2: vertical ? 'auto' : 'hidden'
  }), children);
}

ScrollView.propTypes = {
  vertical: index.PropTypes.bool,
  horizontal: index.PropTypes.bool,
  children: index.PropTypes.node
};
ScrollView.defaultProps = {
  vertical: true,
  horizontal: true
};

exports.default = ScrollView;
//# sourceMappingURL=ScrollView.js.map
