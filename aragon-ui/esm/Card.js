import { _ as _slicedToArray } from './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import React from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import { P as PropTypes } from './index-097535f1.js';
import './defineProperty-a0480c32.js';
import './toConsumableArray-127424c2.js';
import _styled, { css } from 'styled-components';
import './getPrototypeOf-b96da1e1.js';
import './color.js';
import './components.js';
import './contains-component.js';
import './css.js';
import './dayjs.min-e57fb69a.js';
import './date.js';
import './miscellaneous.js';
import './environment.js';
import './font.js';
import './math-e6d0e93a.js';
import './characters.js';
import './format.js';
import './keycodes.js';
import './url.js';
import './web3.js';
import { RADIUS, GU } from './constants.js';
import './breakpoints.js';
import './springs.js';
import './text-styles.js';
import './theme-dark.js';
import './theme-light.js';
import { useTheme } from './Theme.js';
import { _ as _extends } from './extends-db4f0c26.js';
import { _ as _objectWithoutProperties } from './objectWithoutProperties-234758e1.js';
import { o } from './index-422d37c0.js';
import './FocusVisible.js';
import ButtonBase from './ButtonBase.js';

var DEFAULT_WIDTH = 35 * GU;
var DEFAULT_HEIGHT = 40 * GU;

function dimension(insideCardLayout, value, defaultValue) {
  if (insideCardLayout) {
    return '100%';
  }

  if (typeof value === 'number') {
    value = "".concat(value, "px");
  }

  return value === undefined ? defaultValue : value;
}

var _StyledDiv = _styled("div").withConfig({
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
}, RADIUS, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

function Card(_ref) {
  var children = _ref.children,
      width = _ref.width,
      height = _ref.height,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ["children", "width", "height", "onClick"]);

  var theme = useTheme();

  var _useInside = o('CardLayout'),
      _useInside2 = _slicedToArray(_useInside, 1),
      insideCardLayout = _useInside2[0];

  var interactive = Boolean(onClick);
  var interactiveProps = interactive ? {
    as: ButtonBase,
    element: 'div',
    focusRingRadius: RADIUS,
    onClick: onClick
  } : {};
  var cssWidth = dimension(insideCardLayout, width, "".concat(DEFAULT_WIDTH, "px"));
  var cssHeight = dimension(insideCardLayout, height, "".concat(DEFAULT_HEIGHT, "px"));
  return /*#__PURE__*/React.createElement(_StyledDiv, _extends({}, interactiveProps, props, {
    _css: cssWidth,
    _css2: cssHeight,
    _css3: theme.surface,
    _css4: theme.border,
    _css5: interactive ? 'pointer' : 'default',
    _css6: interactive && css(["border:0;box-shadow:0px 1px 3px rgba(0,0,0,0.15);transition-property:transform,box-shadow;transition-duration:50ms;transition-timing-function:ease-in-out;text-align:left;white-space:normal;&:active{transform:translateY(1px);box-shadow:0px 1px 3px rgba(0,0,0,0.08);}"])
  }), children);
}

Card.propTypes = {
  children: PropTypes.node,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func
};

export default Card;
//# sourceMappingURL=Card.js.map
