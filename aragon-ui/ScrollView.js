'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-37353731.js');
require('./_commonjsHelpers-1b94f6bc.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _StyledDiv = _styled__default['default']("div").withConfig({
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
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["children", "horizontal", "vertical"]);

  return /*#__PURE__*/React__default['default'].createElement(_StyledDiv, _extends._extends_1({}, props, {
    _css: horizontal ? 'auto' : 'hidden',
    _css2: vertical ? 'auto' : 'hidden'
  }), children);
}

ScrollView.propTypes = {
  vertical: index.propTypes.bool,
  horizontal: index.propTypes.bool,
  children: index.propTypes.node
};
ScrollView.defaultProps = {
  vertical: true,
  horizontal: true
};

exports.default = ScrollView;
//# sourceMappingURL=ScrollView.js.map
