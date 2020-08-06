import slicedToArray$1 from '../../../node_modules/@babel/runtime/helpers/slicedToArray.js';
import React$1 from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import _styled$1, { css } from 'styled-components';
import '../../utils/environment.js';
import { RADIUS, GU } from '../../style/constants.js';
import { useTheme } from '../../theme/Theme2.js';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties$1 from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import { useInside as o } from '../../../node_modules/use-inside/dist/index.js';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';

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

var _StyledDiv = _styled$1("div").withConfig({
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
      props = objectWithoutProperties$1(_ref, ["children", "width", "height", "onClick"]);

  var theme = useTheme();

  var _useInside = o('CardLayout'),
      _useInside2 = slicedToArray$1(_useInside, 1),
      insideCardLayout = _useInside2[0];

  var interactive = Boolean(onClick);
  var interactiveProps = interactive ? {
    as: ButtonBaseWithFocus,
    element: 'div',
    focusRingRadius: RADIUS,
    onClick: onClick
  } : {};
  var cssWidth = dimension(insideCardLayout, width, "".concat(DEFAULT_WIDTH, "px"));
  var cssHeight = dimension(insideCardLayout, height, "".concat(DEFAULT_HEIGHT, "px"));
  return /*#__PURE__*/React$1.createElement(_StyledDiv, _extends_1({}, interactiveProps, props, {
    _css: cssWidth,
    _css2: cssHeight,
    _css3: theme.surface,
    _css4: theme.border,
    _css5: interactive ? 'pointer' : 'default',
    _css6: interactive && css(["border:0;box-shadow:0px 1px 3px rgba(0,0,0,0.15);transition-property:transform,box-shadow;transition-duration:50ms;transition-timing-function:ease-in-out;text-align:left;white-space:normal;&:active{transform:translateY(1px);box-shadow:0px 1px 3px rgba(0,0,0,0.08);}"])
  }), children);
}

Card.propTypes = {
  children: propTypes.node,
  height: propTypes.oneOfType([propTypes.string, propTypes.number]),
  width: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onClick: propTypes.func
};

export default Card;
//# sourceMappingURL=Card.js.map
