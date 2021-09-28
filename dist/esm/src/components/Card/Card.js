import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled, { css } from 'styled-components';
import React from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { useInside as o } from '../../../node_modules/use-inside/dist/index.js';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';
import { useTheme } from '../../theme/Theme2.js';
import { RADIUS, GU } from '../../style/constants.js';

const DEFAULT_WIDTH = 35 * GU;
const DEFAULT_HEIGHT = 40 * GU;

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
  const theme = useTheme();
  const [insideCardLayout] = o('CardLayout');
  const interactive = Boolean(onClick);
  const interactiveProps = interactive ? {
    as: ButtonBaseWithFocus,
    element: 'div',
    focusRingRadius: RADIUS,
    onClick
  } : {};
  const cssWidth = dimension(insideCardLayout, width, `${DEFAULT_WIDTH}px`);
  const cssHeight = dimension(insideCardLayout, height, `${DEFAULT_HEIGHT}px`);
  return /*#__PURE__*/React.createElement(_StyledDiv, _extends({}, interactiveProps, props, {
    $_css: cssWidth,
    $_css2: cssHeight,
    $_css3: theme.surface,
    $_css4: theme.border,
    $_css5: interactive ? 'pointer' : 'default',
    $_css6: interactive && css(["border:0;box-shadow:0px 1px 3px rgba(0,0,0,0.15);transition-property:transform,box-shadow;transition-duration:50ms;transition-timing-function:ease-in-out;text-align:left;white-space:normal;&:active{transform:translateY(1px);box-shadow:0px 1px 3px rgba(0,0,0,0.08);}"])
  }), children);
}

Card.propTypes = {
  children: PropTypes.node,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func
};

var _StyledDiv = _styled("div").withConfig({
  displayName: "Card___StyledDiv",
  componentId: "sc-13r75gj-0"
})(["position:relative;width:", ";height:", ";background:", ";border:1px solid ", ";border-radius:", "px;cursor:", ";display:flex;flex-direction:column;align-items:center;justify-content:center;", ""], p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, RADIUS, p => p.$_css5, p => p.$_css6);

export { Card as default };
//# sourceMappingURL=Card.js.map
