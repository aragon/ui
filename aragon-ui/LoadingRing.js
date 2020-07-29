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
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');
var _extends = require('./extends-40571110.js');
var objectWithoutProperties = require('./objectWithoutProperties-35db8ab0.js');
var index$1 = require('./index-ecc57c9f.js');

var spin = _styled.keyframes(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
var SIZE_SMALL = 14;
var SIZE_MEDIUM = 24;
var CONTAINER_SIZE_SMALL = 22;
var CONTAINER_SIZE_MEDIUM = 24;
var BORDER_WIDTH_STRONG = 2.5;
var BORDER_WIDTH_MEDIUM = 1;
var lastInstanceId = 1;

var _StyledSpan = _styled__default("span").withConfig({
  displayName: "LoadingRing___StyledSpan",
  componentId: "iauf6f-0"
})(["position:relative;display:flex;align-items:center;justify-content:center;width:", "px;height:", "px;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var _StyledCircle = _styled__default("circle").withConfig({
  displayName: "LoadingRing___StyledCircle",
  componentId: "iauf6f-1"
})(["animation-duration:1s;animation-iteration-count:infinite;animation-timing-function:linear;animation-name:", ";transform-origin:50% 50%;"], function (p) {
  return p._css3;
});

var LoadingRing = React__default.memo(function LoadingRing(_ref) {
  var paused = _ref.paused,
      modeProp = _ref.mode,
      props = objectWithoutProperties._objectWithoutProperties(_ref, ["paused", "mode"]);

  var theme = Theme.useTheme();

  var _useState = React.useState(function () {
    return "sync-indicator-".concat(lastInstanceId++);
  }),
      _useState2 = slicedToArray._slicedToArray(_useState, 1),
      instanceId = _useState2[0];

  var _useInside = index$1.o('FloatIndicator'),
      _useInside2 = slicedToArray._slicedToArray(_useInside, 1),
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
      _useMemo2 = slicedToArray._slicedToArray(_useMemo, 2),
      gapLength = _useMemo2[0],
      dashLength = _useMemo2[1];

  return /*#__PURE__*/React__default.createElement(_StyledSpan, _extends._extends({}, props, {
    _css: containerSize,
    _css2: containerSize
  }), /*#__PURE__*/React__default.createElement("svg", {
    width: size + borderWidth,
    height: size + borderWidth,
    viewBox: "0 0 ".concat(size + borderWidth, " ").concat(size + borderWidth)
  }, /*#__PURE__*/React__default.createElement("linearGradient", {
    id: "".concat(instanceId, "-gradient"),
    gradientTransform: "rotate(90)"
  }, /*#__PURE__*/React__default.createElement("stop", {
    offset: "0%",
    stopColor: theme.accentEnd
  }), /*#__PURE__*/React__default.createElement("stop", {
    offset: "100%",
    stopColor: theme.accentStart
  })), insideFloatIndicator && /*#__PURE__*/React__default.createElement("circle", {
    cx: "50%",
    cy: "50%",
    r: size / 2,
    fill: "transparent",
    stroke: theme.floatingContent.alpha(0.3),
    strokeWidth: borderWidth
  }), /*#__PURE__*/React__default.createElement("mask", {
    id: "".concat(instanceId, "-mask")
  }, /*#__PURE__*/React__default.createElement(_StyledCircle, {
    cx: "50%",
    cy: "50%",
    r: size / 2,
    fill: "transparent",
    stroke: "url(#".concat(instanceId, "-gradient)"),
    strokeWidth: borderWidth,
    strokeDasharray: "".concat(dashLength, " ").concat(gapLength),
    _css3: paused ? 'none' : spin
  })), /*#__PURE__*/React__default.createElement("circle", {
    cx: "50%",
    cy: "50%",
    r: size / 2 + borderWidth / 2,
    fill: "url(#".concat(instanceId, "-gradient)"),
    mask: "url(#".concat(instanceId, "-mask)")
  })));
});
LoadingRing.propTypes = {
  mode: index.PropTypes.oneOf(['two-parts', 'half-circle']),
  paused: index.PropTypes.bool
};
LoadingRing.defaultProps = {
  paused: false
};

exports.default = LoadingRing;
//# sourceMappingURL=LoadingRing.js.map
