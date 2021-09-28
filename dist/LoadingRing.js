'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var index$1 = require('./index-70e12149.js');
var Theme = require('./Theme.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const spin = _styled.keyframes(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
const SIZE_SMALL = 14;
const SIZE_MEDIUM = 24;
const CONTAINER_SIZE_SMALL = 22;
const CONTAINER_SIZE_MEDIUM = 24;
const BORDER_WIDTH_STRONG = 2.5;
const BORDER_WIDTH_MEDIUM = 1;
let lastInstanceId = 1;
const LoadingRing = /*#__PURE__*/React__default["default"].memo(function LoadingRing({
  paused,
  mode: modeProp,
  ...props
}) {
  const theme = Theme.useTheme();
  const [instanceId] = React.useState(() => `sync-indicator-${lastInstanceId++}`);
  const [insideFloatIndicator] = index$1.o('FloatIndicator');
  const mode = modeProp || (insideFloatIndicator ? 'half-circle' : 'two-parts');
  const containerSize = mode === 'half-circle' ? CONTAINER_SIZE_MEDIUM : CONTAINER_SIZE_SMALL;
  const borderWidth = mode === 'half-circle' ? BORDER_WIDTH_STRONG : BORDER_WIDTH_MEDIUM;
  const size = (mode === 'half-circle' ? SIZE_MEDIUM : SIZE_SMALL) - borderWidth;
  const [gapLength, dashLength] = React.useMemo(() => {
    const length = Math.PI * size; // Both modes display a full circle when paused.

    if (paused) {
      return [0, length];
    }

    if (mode === 'two-parts') {
      return [length / 4, length / 4];
    } // half-circle


    return [length / 2, length / 2];
  }, [mode, size, paused]);
  return /*#__PURE__*/React__default["default"].createElement(_StyledSpan, _extends._extends({}, props, {
    $_css: containerSize,
    $_css2: containerSize
  }), /*#__PURE__*/React__default["default"].createElement("svg", {
    width: size + borderWidth,
    height: size + borderWidth,
    viewBox: `0 0 ${size + borderWidth} ${size + borderWidth}`
  }, /*#__PURE__*/React__default["default"].createElement("linearGradient", {
    id: `${instanceId}-gradient`,
    gradientTransform: "rotate(90)"
  }, /*#__PURE__*/React__default["default"].createElement("stop", {
    offset: "0%",
    stopColor: theme.accentEnd
  }), /*#__PURE__*/React__default["default"].createElement("stop", {
    offset: "100%",
    stopColor: theme.accentStart
  })), insideFloatIndicator && /*#__PURE__*/React__default["default"].createElement("circle", {
    cx: "50%",
    cy: "50%",
    r: size / 2,
    fill: "transparent",
    stroke: theme.floatingContent.alpha(0.3),
    strokeWidth: borderWidth
  }), /*#__PURE__*/React__default["default"].createElement("mask", {
    id: `${instanceId}-mask`
  }, /*#__PURE__*/React__default["default"].createElement(_StyledCircle, {
    cx: "50%",
    cy: "50%",
    r: size / 2,
    fill: "transparent",
    stroke: `url(#${instanceId}-gradient)`,
    strokeWidth: borderWidth,
    strokeDasharray: `${dashLength} ${gapLength}`,
    $_css3: paused ? 'none' : spin
  })), /*#__PURE__*/React__default["default"].createElement("circle", {
    cx: "50%",
    cy: "50%",
    r: size / 2 + borderWidth / 2,
    fill: `url(#${instanceId}-gradient)`,
    mask: `url(#${instanceId}-mask)`
  })));
});
LoadingRing.propTypes = {
  mode: index.PropTypes.oneOf(['two-parts', 'half-circle']),
  paused: index.PropTypes.bool
};
LoadingRing.defaultProps = {
  paused: false
};

var _StyledSpan = _styled__default["default"]("span").withConfig({
  displayName: "LoadingRing___StyledSpan",
  componentId: "sc-iauf6f-0"
})(["position:relative;display:flex;align-items:center;justify-content:center;width:", "px;height:", "px;"], p => p.$_css, p => p.$_css2);

var _StyledCircle = _styled__default["default"]("circle").withConfig({
  displayName: "LoadingRing___StyledCircle",
  componentId: "sc-iauf6f-1"
})(["animation-duration:1s;animation-iteration-count:infinite;animation-timing-function:linear;animation-name:", ";transform-origin:50% 50%;"], p => p.$_css3);

exports["default"] = LoadingRing;
//# sourceMappingURL=LoadingRing.js.map
