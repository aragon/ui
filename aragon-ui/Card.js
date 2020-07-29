'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var slicedToArray = require('./slicedToArray-0711941d.js');
require('./unsupportedIterableToArray-68db1d3b.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
var index = require('./index-b0606964.js');
require('./defineProperty-0921a47c.js');
require('./toConsumableArray-d8a4a2c3.js');
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
require('./getPrototypeOf-2a661a20.js');
require('./color.js');
require('./components.js');
require('./contains-component.js');
require('./css.js');
require('./dayjs.min-e07657bf.js');
require('./date.js');
require('./miscellaneous.js');
require('./environment.js');
require('./font.js');
require('./math-f4029164.js');
require('./characters.js');
require('./format.js');
require('./keycodes.js');
require('./url.js');
require('./web3.js');
var constants = require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');
var _extends$1 = require('./extends-40571110.js');
var objectWithoutProperties = require('./objectWithoutProperties-35db8ab0.js');
var index$1 = require('./index-ecc57c9f.js');
require('./FocusVisible.js');
var ButtonBase = require('./ButtonBase.js');

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

var _StyledDiv = _styled__default("div").withConfig({
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
      props = objectWithoutProperties._objectWithoutProperties(_ref, ["children", "width", "height", "onClick"]);

  var theme = Theme.useTheme();

  var _useInside = index$1.o('CardLayout'),
      _useInside2 = slicedToArray._slicedToArray(_useInside, 1),
      insideCardLayout = _useInside2[0];

  var interactive = Boolean(onClick);
  var interactiveProps = interactive ? {
    as: ButtonBase.default,
    element: 'div',
    focusRingRadius: constants.RADIUS,
    onClick: onClick
  } : {};
  var cssWidth = dimension(insideCardLayout, width, "".concat(DEFAULT_WIDTH, "px"));
  var cssHeight = dimension(insideCardLayout, height, "".concat(DEFAULT_HEIGHT, "px"));
  return /*#__PURE__*/React__default.createElement(_StyledDiv, _extends$1._extends({}, interactiveProps, props, {
    _css: cssWidth,
    _css2: cssHeight,
    _css3: theme.surface,
    _css4: theme.border,
    _css5: interactive ? 'pointer' : 'default',
    _css6: interactive && _styled.css(["border:0;box-shadow:0px 1px 3px rgba(0,0,0,0.15);transition-property:transform,box-shadow;transition-duration:50ms;transition-timing-function:ease-in-out;text-align:left;white-space:normal;&:active{transform:translateY(1px);box-shadow:0px 1px 3px rgba(0,0,0,0.08);}"])
  }), children);
}

Card.propTypes = {
  children: index.PropTypes.node,
  height: index.PropTypes.oneOfType([index.PropTypes.string, index.PropTypes.number]),
  width: index.PropTypes.oneOfType([index.PropTypes.string, index.PropTypes.number]),
  onClick: index.PropTypes.func
};

exports.default = Card;
//# sourceMappingURL=Card.js.map
