'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-023d783e.js');
var slicedToArray = require('./slicedToArray-a8a77f0e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var _styled = require('styled-components');
var React = require('react');
var index$1 = require('./index-37353731.js');
var index = require('./index-c33eeeef.js');
var ButtonBase = require('./ButtonBase.js');
var Theme = require('./Theme.js');
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
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./toConsumableArray-cc0d28a9.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var DEFAULT_WIDTH = 35 * constants.GU;
var DEFAULT_HEIGHT = 40 * constants.GU;

function dimension(insideCardLayout, value, defaultValue) {
  if (insideCardLayout) {
    return '100%';
  }

  if (typeof value === 'number') {
    value = "".concat(value, "px");
  }

  return value === undefined ? defaultValue : value;
}

var _StyledDiv = _styled__default['default']("div").withConfig({
  displayName: "Card___StyledDiv",
  componentId: "sc-13r75gj-0"
})(["position:relative;width:", ";height:", ";background:", ";border:1px solid ", ";border-radius:", "px;cursor:", ";display:flex;flex-direction:column;align-items:center;justify-content:center;", ""], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, constants.RADIUS, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

function Card(_ref) {
  var children = _ref.children,
      width = _ref.width,
      height = _ref.height,
      onClick = _ref.onClick,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["children", "width", "height", "onClick"]);

  var theme = Theme.useTheme();

  var _useInside = index.o('CardLayout'),
      _useInside2 = slicedToArray.slicedToArray(_useInside, 1),
      insideCardLayout = _useInside2[0];

  var interactive = Boolean(onClick);
  var interactiveProps = interactive ? {
    as: ButtonBase['default'],
    element: 'div',
    focusRingRadius: constants.RADIUS,
    onClick: onClick
  } : {};
  var cssWidth = dimension(insideCardLayout, width, "".concat(DEFAULT_WIDTH, "px"));
  var cssHeight = dimension(insideCardLayout, height, "".concat(DEFAULT_HEIGHT, "px"));
  return /*#__PURE__*/React__default['default'].createElement(_StyledDiv, _extends._extends_1({}, interactiveProps, props, {
    _css: cssWidth,
    _css2: cssHeight,
    _css3: theme.surface,
    _css4: theme.border,
    _css5: interactive ? 'pointer' : 'default',
    _css6: interactive && _styled.css(["border:0;box-shadow:0px 1px 3px rgba(0,0,0,0.15);transition-property:transform,box-shadow;transition-duration:50ms;transition-timing-function:ease-in-out;text-align:left;white-space:normal;&:active{transform:translateY(1px);box-shadow:0px 1px 3px rgba(0,0,0,0.08);}"])
  }), children);
}

Card.propTypes = {
  children: index$1.propTypes.node,
  height: index$1.propTypes.oneOfType([index$1.propTypes.string, index$1.propTypes.number]),
  width: index$1.propTypes.oneOfType([index$1.propTypes.string, index$1.propTypes.number]),
  onClick: index$1.propTypes.func
};

exports.default = Card;
//# sourceMappingURL=Card.js.map
