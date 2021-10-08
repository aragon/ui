'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-023d783e.js');
var slicedToArray = require('./slicedToArray-a8a77f0e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var _styled = require('styled-components');
var React = require('react');
var index$1 = require('./index-37353731.js');
var index = require('./index-c33eeeef.js');
var Bar = require('./Bar.js');
var ButtonBase = require('./ButtonBase.js');
var Layout = require('./Layout.js');
var Theme = require('./Theme.js');
var IconArrowLeft = require('./IconArrowLeft.js');
var constants = require('./constants.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./defineProperty-3cad0327.js');
require('./FocusVisible.js');
require('./getPrototypeOf-55c9e80c.js');
require('./keycodes.js');
require('./css.js');
require('./environment.js');
require('./miscellaneous.js');
require('./text-styles.js');
require('./font.js');
require('./Viewport-71f7efe6.js');
require('./_baseGetTag-6ec23aaa.js');
require('./breakpoints.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./toConsumableArray-cc0d28a9.js');
require('./IconPropTypes-b9997416.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _StyledButtonBase = _styled__default['default'](ButtonBase['default']).withConfig({
  displayName: "BackButton___StyledButtonBase",
  componentId: "ebowg7-0"
})(["display:inline-flex;align-items:center;border-radius:", "px 0 0 ", "px;height:100%;margin-left:", "px;padding:0 ", "px 0 ", "px;border-right:1px solid ", ";color:", ";background:", ";&:active{background:", ";}"], constants.RADIUS, constants.RADIUS, function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
});

var _StyledSpan = _styled__default['default']("span").withConfig({
  displayName: "BackButton___StyledSpan",
  componentId: "ebowg7-1"
})(["position:relative;top:2px;color:", ";"], function (p) {
  return p._css8;
});

var _StyledSpan2 = _styled__default['default']("span").withConfig({
  displayName: "BackButton___StyledSpan2",
  componentId: "ebowg7-2"
})(["padding-left:", "px;font-size:16px;font-weight:600;"], function (p) {
  return p._css9;
});

function BackButton(_ref) {
  var label = _ref.label,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["label"]);

  var theme = Theme.useTheme();

  var _useInside = index.o('Bar:primary'),
      _useInside2 = slicedToArray.slicedToArray(_useInside, 1),
      insideBarPrimary = _useInside2[0];

  var _useLayout = Layout.useLayout(),
      layoutName = _useLayout.layoutName;

  var compact = layoutName === 'small';
  var horizontalPadding = (compact ? 2 : 3) * constants.GU;
  return /*#__PURE__*/React__default['default'].createElement(_StyledButtonBase, _extends._extends_1({
    focusRingRadius: constants.RADIUS,
    focusRingSpacing: 1
  }, props, {
    _css: insideBarPrimary ? -Bar['default'].PADDING : 0,
    _css2: horizontalPadding,
    _css3: horizontalPadding - 4,
    _css4: theme.border,
    _css5: theme.surfaceContent,
    _css6: theme.surfaceInteractive,
    _css7: theme.surfaceHighlight
  }), /*#__PURE__*/React__default['default'].createElement(_StyledSpan, {
    _css8: theme.accent
  }, /*#__PURE__*/React__default['default'].createElement(IconArrowLeft['default'], null)), /*#__PURE__*/React__default['default'].createElement(_StyledSpan2, {
    _css9: 1 * constants.GU
  }, label));
}

BackButton.propTypes = {
  label: index$1.propTypes.string
};
BackButton.defaultProps = {
  label: 'Back'
};

exports.default = BackButton;
//# sourceMappingURL=BackButton.js.map
