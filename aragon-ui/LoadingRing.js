'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-023d783e.js');
var slicedToArray = require('./slicedToArray-a8a77f0e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var _styled = require('styled-components');
var React = require('react');
var index$1 = require('./index-37353731.js');
var index = require('./index-c33eeeef.js');
var Theme = require('./Theme.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./defineProperty-3cad0327.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
require('./getPrototypeOf-55c9e80c.js');
require('./toConsumableArray-cc0d28a9.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var spin = _styled.keyframes(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
var SIZE_SMALL = 14;
var SIZE_MEDIUM = 24;
var CONTAINER_SIZE_SMALL = 22;
var CONTAINER_SIZE_MEDIUM = 24;
var BORDER_WIDTH_STRONG = 2.5;
var BORDER_WIDTH_MEDIUM = 1;
var lastInstanceId = 1;

var _StyledSpan = _styled__default['default']("span").withConfig({
  displayName: "LoadingRing___StyledSpan",
  componentId: "iauf6f-0"
})(["position:relative;display:flex;align-items:center;justify-content:center;width:", "px;height:", "px;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var _StyledCircle = _styled__default['default']("circle").withConfig({
  displayName: "LoadingRing___StyledCircle",
  componentId: "iauf6f-1"
})(["animation-duration:1s;animation-iteration-count:infinite;animation-timing-function:linear;animation-name:", ";transform-origin:50% 50%;"], function (p) {
  return p._css3;
});

var LoadingRing = /*#__PURE__*/React__default['default'].memo(function LoadingRing(_ref) {
  var paused = _ref.paused,
      modeProp = _ref.mode,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["paused", "mode"]);

  var theme = Theme.useTheme();

  var _useState = React.useState(function () {
    return "sync-indicator-".concat(lastInstanceId++);
  }),
      _useState2 = slicedToArray.slicedToArray(_useState, 1),
      instanceId = _useState2[0];

  var _useInside = index.o('FloatIndicator'),
      _useInside2 = slicedToArray.slicedToArray(_useInside, 1),
      insideFloatIndicator = _useInside2[0];

  var mode = modeProp || (insideFloatIndicator ? 'half-circle' : 'two-parts');
  var containerSize = mode === 'half-circle' ? CONTAINER_SIZE_MEDIUM : CONTAINER_SIZE_SMALL;
  var borderWidth = mode === 'half-circle' ? BORDER_WIDTH_STRONG : BORDER_WIDTH_MEDIUM;
  var size = (mode === 'half-circle' ? SIZE_MEDIUM : SIZE_SMALL) - borderWidth;

  var _useMemo = React.useMemo(function () {
    var length = Math.PI * size; // Both modes display a full circle when paused.

    if (paused) {
      return [0, length];
    }

    if (mode === 'two-parts') {
      return [length / 4, length / 4];
    } // half-circle


    return [length / 2, length / 2];
  }, [mode, size, paused]),
      _useMemo2 = slicedToArray.slicedToArray(_useMemo, 2),
      gapLength = _useMemo2[0],
      dashLength = _useMemo2[1];

  return /*#__PURE__*/React__default['default'].createElement(_StyledSpan, _extends._extends_1({}, props, {
    _css: containerSize,
    _css2: containerSize
  }), /*#__PURE__*/React__default['default'].createElement("svg", {
    width: size + borderWidth,
    height: size + borderWidth,
    viewBox: "0 0 ".concat(size + borderWidth, " ").concat(size + borderWidth)
  }, /*#__PURE__*/React__default['default'].createElement("linearGradient", {
    id: "".concat(instanceId, "-gradient"),
    gradientTransform: "rotate(90)"
  }, /*#__PURE__*/React__default['default'].createElement("stop", {
    offset: "0%",
    stopColor: theme.accentEnd
  }), /*#__PURE__*/React__default['default'].createElement("stop", {
    offset: "100%",
    stopColor: theme.accentStart
  })), insideFloatIndicator && /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "50%",
    cy: "50%",
    r: size / 2,
    fill: "transparent",
    stroke: theme.floatingContent.alpha(0.3),
    strokeWidth: borderWidth
  }), /*#__PURE__*/React__default['default'].createElement("mask", {
    id: "".concat(instanceId, "-mask")
  }, /*#__PURE__*/React__default['default'].createElement(_StyledCircle, {
    cx: "50%",
    cy: "50%",
    r: size / 2,
    fill: "transparent",
    stroke: "url(#".concat(instanceId, "-gradient)"),
    strokeWidth: borderWidth,
    strokeDasharray: "".concat(dashLength, " ").concat(gapLength),
    _css3: paused ? 'none' : spin
  })), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "50%",
    cy: "50%",
    r: size / 2 + borderWidth / 2,
    fill: "url(#".concat(instanceId, "-gradient)"),
    mask: "url(#".concat(instanceId, "-mask)")
  })));
});
LoadingRing.propTypes = {
  mode: index$1.propTypes.oneOf(['two-parts', 'half-circle']),
  paused: index$1.propTypes.bool
};
LoadingRing.defaultProps = {
  paused: false
};

exports.default = LoadingRing;
//# sourceMappingURL=LoadingRing.js.map
