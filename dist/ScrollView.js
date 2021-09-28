'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
require('./_commonjsHelpers-1b94f6bc.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ScrollView({
  children,
  horizontal,
  vertical,
  ...props
}) {
  return /*#__PURE__*/React__default["default"].createElement(_StyledDiv, _extends._extends({}, props, {
    $_css: horizontal ? 'auto' : 'hidden',
    $_css2: vertical ? 'auto' : 'hidden'
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

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "ScrollView___StyledDiv",
  componentId: "sc-1hhoqwn-0"
})(["position:relative;z-index:0;height:100%;overflow-x:", ";overflow-y:", ";"], p => p.$_css, p => p.$_css2);

exports["default"] = ScrollView;
//# sourceMappingURL=ScrollView.js.map
