'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var index$1 = require('./index-70e12149.js');
var ButtonBase = require('./ButtonBase.js');
var Theme = require('./Theme.js');
var constants = require('./constants.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./FocusVisible.js');
require('./defineProperty-fdbd3c46.js');
require('./keycodes.js');
require('./css.js');
require('./text-styles.js');
require('./font.js');
require('./environment.js');
require('./miscellaneous.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const DEFAULT_WIDTH = 35 * constants.GU;
const DEFAULT_HEIGHT = 40 * constants.GU;

function dimension(insideCardLayout, value, defaultValue) {
  if (insideCardLayout) {
    return '100%';
  }

  if (typeof value === 'number') {
    value = `${value}px`;
  }

  return value === undefined ? defaultValue : value;
}

function Card({
  children,
  width,
  height,
  onClick,
  ...props
}) {
  const theme = Theme.useTheme();
  const [insideCardLayout] = index$1.o('CardLayout');
  const interactive = Boolean(onClick);
  const interactiveProps = interactive ? {
    as: ButtonBase["default"],
    element: 'div',
    focusRingRadius: constants.RADIUS,
    onClick
  } : {};
  const cssWidth = dimension(insideCardLayout, width, `${DEFAULT_WIDTH}px`);
  const cssHeight = dimension(insideCardLayout, height, `${DEFAULT_HEIGHT}px`);
  return /*#__PURE__*/React__default["default"].createElement(_StyledDiv, _extends._extends({}, interactiveProps, props, {
    $_css: cssWidth,
    $_css2: cssHeight,
    $_css3: theme.surface,
    $_css4: theme.border,
    $_css5: interactive ? 'pointer' : 'default',
    $_css6: interactive && _styled.css(["border:0;box-shadow:0px 1px 3px rgba(0,0,0,0.15);transition-property:transform,box-shadow;transition-duration:50ms;transition-timing-function:ease-in-out;text-align:left;white-space:normal;&:active{transform:translateY(1px);box-shadow:0px 1px 3px rgba(0,0,0,0.08);}"])
  }), children);
}

Card.propTypes = {
  children: index.PropTypes.node,
  height: index.PropTypes.oneOfType([index.PropTypes.string, index.PropTypes.number]),
  width: index.PropTypes.oneOfType([index.PropTypes.string, index.PropTypes.number]),
  onClick: index.PropTypes.func
};

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "Card___StyledDiv",
  componentId: "sc-13r75gj-0"
})(["position:relative;width:", ";height:", ";background:", ";border:1px solid ", ";border-radius:", "px;cursor:", ";display:flex;flex-direction:column;align-items:center;justify-content:center;", ""], p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, constants.RADIUS, p => p.$_css5, p => p.$_css6);

exports["default"] = Card;
//# sourceMappingURL=Card.js.map
