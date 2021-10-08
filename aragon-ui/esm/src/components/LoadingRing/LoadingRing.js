import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import slicedToArray from '../../../node_modules/@babel/runtime/helpers/slicedToArray.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import _styled, { keyframes } from 'styled-components';
import React, { useState, useMemo } from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import { useInside as o } from '../../../node_modules/use-inside/dist/index.js';
import { useTheme } from '../../theme/Theme2.js';

var spin = keyframes(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
var SIZE_SMALL = 14;
var SIZE_MEDIUM = 24;
var CONTAINER_SIZE_SMALL = 22;
var CONTAINER_SIZE_MEDIUM = 24;
var BORDER_WIDTH_STRONG = 2.5;
var BORDER_WIDTH_MEDIUM = 1;
var lastInstanceId = 1;

var _StyledSpan = _styled("span").withConfig({
  displayName: "LoadingRing___StyledSpan",
  componentId: "iauf6f-0"
})(["position:relative;display:flex;align-items:center;justify-content:center;width:", "px;height:", "px;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var _StyledCircle = _styled("circle").withConfig({
  displayName: "LoadingRing___StyledCircle",
  componentId: "iauf6f-1"
})(["animation-duration:1s;animation-iteration-count:infinite;animation-timing-function:linear;animation-name:", ";transform-origin:50% 50%;"], function (p) {
  return p._css3;
});

var LoadingRing = /*#__PURE__*/React.memo(function LoadingRing(_ref) {
  var paused = _ref.paused,
      modeProp = _ref.mode,
      props = objectWithoutProperties(_ref, ["paused", "mode"]);

  var theme = useTheme();

  var _useState = useState(function () {
    return "sync-indicator-".concat(lastInstanceId++);
  }),
      _useState2 = slicedToArray(_useState, 1),
      instanceId = _useState2[0];

  var _useInside = o('FloatIndicator'),
      _useInside2 = slicedToArray(_useInside, 1),
      insideFloatIndicator = _useInside2[0];

  var mode = modeProp || (insideFloatIndicator ? 'half-circle' : 'two-parts');
  var containerSize = mode === 'half-circle' ? CONTAINER_SIZE_MEDIUM : CONTAINER_SIZE_SMALL;
  var borderWidth = mode === 'half-circle' ? BORDER_WIDTH_STRONG : BORDER_WIDTH_MEDIUM;
  var size = (mode === 'half-circle' ? SIZE_MEDIUM : SIZE_SMALL) - borderWidth;

  var _useMemo = useMemo(function () {
    var length = Math.PI * size; // Both modes display a full circle when paused.

    if (paused) {
      return [0, length];
    }

    if (mode === 'two-parts') {
      return [length / 4, length / 4];
    } // half-circle


    return [length / 2, length / 2];
  }, [mode, size, paused]),
      _useMemo2 = slicedToArray(_useMemo, 2),
      gapLength = _useMemo2[0],
      dashLength = _useMemo2[1];

  return /*#__PURE__*/React.createElement(_StyledSpan, _extends_1({}, props, {
    _css: containerSize,
    _css2: containerSize
  }), /*#__PURE__*/React.createElement("svg", {
    width: size + borderWidth,
    height: size + borderWidth,
    viewBox: "0 0 ".concat(size + borderWidth, " ").concat(size + borderWidth)
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "".concat(instanceId, "-gradient"),
    gradientTransform: "rotate(90)"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: theme.accentEnd
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: theme.accentStart
  })), insideFloatIndicator && /*#__PURE__*/React.createElement("circle", {
    cx: "50%",
    cy: "50%",
    r: size / 2,
    fill: "transparent",
    stroke: theme.floatingContent.alpha(0.3),
    strokeWidth: borderWidth
  }), /*#__PURE__*/React.createElement("mask", {
    id: "".concat(instanceId, "-mask")
  }, /*#__PURE__*/React.createElement(_StyledCircle, {
    cx: "50%",
    cy: "50%",
    r: size / 2,
    fill: "transparent",
    stroke: "url(#".concat(instanceId, "-gradient)"),
    strokeWidth: borderWidth,
    strokeDasharray: "".concat(dashLength, " ").concat(gapLength),
    _css3: paused ? 'none' : spin
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "50%",
    cy: "50%",
    r: size / 2 + borderWidth / 2,
    fill: "url(#".concat(instanceId, "-gradient)"),
    mask: "url(#".concat(instanceId, "-mask)")
  })));
});
LoadingRing.propTypes = {
  mode: propTypes.oneOf(['two-parts', 'half-circle']),
  paused: propTypes.bool
};
LoadingRing.defaultProps = {
  paused: false
};

export default LoadingRing;
//# sourceMappingURL=LoadingRing.js.map
