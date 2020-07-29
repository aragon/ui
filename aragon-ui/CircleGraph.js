'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-0711941d.js');
require('./unsupportedIterableToArray-68db1d3b.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
var index = require('./index-b0606964.js');
var defineProperty$1 = require('./defineProperty-0921a47c.js');
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
var environment = require('./environment.js');
require('./font.js');
var math = require('./math-f4029164.js');
require('./characters.js');
require('./format.js');
require('./keycodes.js');
require('./url.js');
require('./web3.js');
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
var web = require('./web-d0294535.js');

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty$1._defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var STROKE_WIDTH = 4;
var SIZE_DEFAULT = 80;

function labelDefault(animValue, value) {
  var parts = {
    suffix: '%',
    value: String(Math.floor(animValue * 100))
  };
  var animPercentage = animValue * 100;
  var percentage = value * 100;
  var lessThanOne = percentage > 0 && percentage < 1 && animPercentage > 0 && // We know that the actual percentage is less than 1,
  // so this is to avoid a jump with “1%” without prefix.
  animPercentage < 2;
  return lessThanOne ? _objectSpread({}, parts, {
    prefix: '<',
    value: '1'
  }) : parts;
}

function labelCompat(parts) {
  if (typeof parts === 'string' || typeof parts === 'number' || React__default.isValidElement(parts)) {
    environment.warnOnce('CircleGraph:label:string', 'CircleGraph: the function passed to the label should not ' + 'return a React node anymore: please check the CircleGraph documentation.');
    return {
      value: String(parts)
    };
  }

  return parts;
}

var _StyledDiv = _styled__default("div").withConfig({
  displayName: "CircleGraph___StyledDiv",
  componentId: "sc-2a8gt2-0"
})(["position:relative;display:flex;align-items:center;justify-content center;width:", "px;height:", "px;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var _StyledSvg = _styled__default("svg").withConfig({
  displayName: "CircleGraph___StyledSvg",
  componentId: "sc-2a8gt2-1"
})(["position:absolute;top:0;left:0;"]);

var _StyledAnimatedCircle = _styled__default(web.extendedAnimated.circle).withConfig({
  displayName: "CircleGraph___StyledAnimatedCircle",
  componentId: "sc-2a8gt2-2"
})(["transform:rotate(270deg);transform-origin:50% 50%;"]);

var _StyledDiv2 = _styled__default("div").withConfig({
  displayName: "CircleGraph___StyledDiv2",
  componentId: "sc-2a8gt2-3"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;line-height:1.2;"]);

var _StyledDiv3 = _styled__default("div").withConfig({
  displayName: "CircleGraph___StyledDiv3",
  componentId: "sc-2a8gt2-4"
})(["position:absolute;top:50%;left:0;right:0;transform:translateY(-50%);"]);

var _StyledDiv4 = _styled__default("div").withConfig({
  displayName: "CircleGraph___StyledDiv4",
  componentId: "sc-2a8gt2-5"
})(["display:flex;align-items:baseline;justify-content:center;"]);

var _StyledAnimatedDiv = _styled__default(web.extendedAnimated.div).withConfig({
  displayName: "CircleGraph___StyledAnimatedDiv",
  componentId: "sc-2a8gt2-6"
})(["display:flex;color:", ";"], function (p) {
  return p._css3;
});

var _StyledAnimatedDiv2 = _styled__default(web.extendedAnimated.div).withConfig({
  displayName: "CircleGraph___StyledAnimatedDiv2",
  componentId: "sc-2a8gt2-7"
})(["position:absolute;top:100%;left:0;right:0;display:flex;justify-content:center;color:", ";"], function (p) {
  return p._css4;
});

function CircleGraph(_ref) {
  var color = _ref.color,
      label = _ref.label,
      size = _ref.size,
      strokeWidth = _ref.strokeWidth,
      value = _ref.value;
  var theme = Theme.useTheme();
  var length = Math.PI * 2 * (size - strokeWidth);
  var radius = (size - strokeWidth) / 2;

  if (label === undefined) {
    label = labelDefault;
  }

  var labelPart = React.useCallback(function (name) {
    return function (animValue) {
      if (typeof label !== 'function') {
        return null;
      }

      var cValue = math.clamp(animValue);
      var parts = labelCompat(label(cValue, value));
      return (parts[name] === undefined ? labelDefault(cValue, value)[name] : parts[name]) || '';
    };
  }, [label, value]);
  var colorFn = typeof color === 'function' ? color : function () {
    return color || theme.accent;
  };
  return /*#__PURE__*/React__default.createElement(web.Spring, {
    to: {
      progressValue: value
    },
    native: true
  }, function (_ref2) {
    var progressValue = _ref2.progressValue;
    return /*#__PURE__*/React__default.createElement(_StyledDiv, {
      _css: size,
      _css2: size
    }, /*#__PURE__*/React__default.createElement(_StyledSvg, {
      width: size,
      height: size,
      viewBox: "0 0 ".concat(size, " ").concat(size)
    }, /*#__PURE__*/React__default.createElement("circle", {
      cx: size / 2,
      cy: size / 2,
      r: radius,
      style: {
        strokeWidth: strokeWidth
      },
      fill: "none",
      stroke: theme.border
    }), /*#__PURE__*/React__default.createElement(_StyledAnimatedCircle, {
      cx: size / 2,
      cy: size / 2,
      r: radius,
      fill: "none",
      strokeLinecap: "round",
      strokeDasharray: length,
      strokeWidth: strokeWidth,
      style: {
        stroke: progressValue.interpolate(colorFn),
        strokeDashoffset: progressValue.interpolate(function (t) {
          return length - length * t / 2;
        })
      }
    })), /*#__PURE__*/React__default.createElement(_StyledDiv2, null, typeof label !== 'function' ? label : label && /*#__PURE__*/React__default.createElement(_StyledDiv3, null, /*#__PURE__*/React__default.createElement(_StyledDiv4, null, /*#__PURE__*/React__default.createElement(web.extendedAnimated.div, {
      style: {
        fontSize: "".concat(size * 0.2, "px")
      }
    }, progressValue.interpolate(labelPart('prefix'))), /*#__PURE__*/React__default.createElement(web.extendedAnimated.div, {
      style: {
        fontSize: "".concat(size * 0.25, "px")
      }
    }, progressValue.interpolate(labelPart('value'))), /*#__PURE__*/React__default.createElement(_StyledAnimatedDiv, {
      style: {
        fontSize: "".concat(size * 0.13, "px")
      },
      _css3: theme.surfaceContentSecondary
    }, progressValue.interpolate(labelPart('suffix')))), /*#__PURE__*/React__default.createElement(_StyledAnimatedDiv2, {
      style: {
        fontSize: "".concat(size * 0.1, "px")
      },
      _css4: theme.surfaceContentSecondary
    }, progressValue.interpolate(labelPart('secondary'))))));
  });
}

CircleGraph.propTypes = {
  color: index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.string]),
  label: index.PropTypes.oneOfType([index.PropTypes.node, index.PropTypes.func]),
  size: index.PropTypes.number,
  strokeWidth: index.PropTypes.number,
  value: index.PropTypes.number.isRequired
};
CircleGraph.defaultProps = {
  size: SIZE_DEFAULT,
  strokeWidth: STROKE_WIDTH
};

exports.default = CircleGraph;
//# sourceMappingURL=CircleGraph.js.map
