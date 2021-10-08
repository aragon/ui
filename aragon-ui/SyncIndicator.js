'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-37353731.js');
var FloatIndicator = require('./FloatIndicator.js');
var LoadingRing = require('./LoadingRing.js');
var constants = require('./constants.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./web-46d746d6.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
require('./index-c33eeeef.js');
require('./RootPortal.js');
require('./Root-07f851a6.js');
require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./Viewport-71f7efe6.js');
require('./getPrototypeOf-55c9e80c.js');
require('./defineProperty-3cad0327.js');
require('./_baseGetTag-6ec23aaa.js');
require('./breakpoints.js');
require('./ToastHub.js');
require('./toConsumableArray-cc0d28a9.js');
require('./components.js');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
require('./springs.js');
require('./text-styles.js');
require('./font.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _StyledDiv = _styled__default['default']("div").withConfig({
  displayName: "SyncIndicator___StyledDiv",
  componentId: "sc-19m50aw-0"
})(["margin-left:", "px;"], function (p) {
  return p._css;
});

var _StyledSpan = _styled__default['default']("span").withConfig({
  displayName: "SyncIndicator___StyledSpan",
  componentId: "sc-19m50aw-1"
})(["white-space:nowrap"]);

function SyncIndicator(_ref) {
  var children = _ref.children,
      label = _ref.label,
      shift = _ref.shift,
      visible = _ref.visible,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["children", "label", "shift", "visible"]);

  return /*#__PURE__*/React__default['default'].createElement(FloatIndicator['default'], _extends._extends_1({
    visible: visible,
    shift: shift
  }, props), /*#__PURE__*/React__default['default'].createElement(LoadingRing['default'], null), /*#__PURE__*/React__default['default'].createElement(_StyledDiv, {
    _css: 1.5 * constants.GU
  }, children || /*#__PURE__*/React__default['default'].createElement(_StyledSpan, null, label, " \uD83D\uDE4F")));
}

SyncIndicator.propTypes = {
  children: index.propTypes.node,
  label: index.propTypes.node,
  shift: index.propTypes.number,
  visible: index.propTypes.bool
};
SyncIndicator.defaultProps = {
  label: 'Syncing data…'
};

exports.default = SyncIndicator;
//# sourceMappingURL=SyncIndicator.js.map
