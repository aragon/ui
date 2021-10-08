'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-023d783e.js');
var toConsumableArray = require('./toConsumableArray-cc0d28a9.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var slicedToArray = require('./slicedToArray-a8a77f0e.js');
var _styled = require('styled-components');
var React = require('react');
var web = require('./web-46d746d6.js');
var proptypes = require('./proptypes-316e1def.js');
var css = require('./css.js');
var springs = require('./springs.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
require('./defineProperty-3cad0327.js');
require('./index-37353731.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var LABELS_HEIGHT = 30;
var WIDTH_DEFAULT = 300;

function useMeasuredWidth() {
  var ref = React.useRef();

  var _useState = React.useState(WIDTH_DEFAULT),
      _useState2 = slicedToArray.slicedToArray(_useState, 2),
      measuredWidth = _useState2[0],
      setMeasuredWidth = _useState2[1];

  var onResize = React.useCallback(function () {
    if (ref.current) {
      setMeasuredWidth(ref.current.clientWidth);
    }
  }, []);
  var onRef = React.useCallback(function (element) {
    ref.current = element;
    onResize();
  }, [onResize]);
  React.useEffect(function () {
    window.addEventListener('resize', onResize);
    return function () {
      return window.removeEventListener('resize', onResize);
    };
  }, [onResize]);
  return [measuredWidth, onRef];
}

var _StyledSvg = _styled__default['default']("svg").withConfig({
  displayName: "LineChart___StyledSvg",
  componentId: "sc-8kiakb-0"
})(["display:block"]);

var _StyledText = _styled__default['default']("text").withConfig({
  displayName: "LineChart___StyledText",
  componentId: "sc-8kiakb-1"
})(["alignment-baseline:middle;font-size:12px;font-weight:300;", ";"], css.unselectable);

function LineChart(_ref) {
  var animDelay = _ref.animDelay,
      borderColor = _ref.borderColor,
      color = _ref.color,
      dotRadius = _ref.dotRadius,
      height = _ref.height,
      label = _ref.label,
      labelColor = _ref.labelColor,
      linesProps = _ref.lines,
      reset = _ref.reset,
      springConfig = _ref.springConfig,
      total = _ref.total,
      widthProps = _ref.width,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["animDelay", "borderColor", "color", "dotRadius", "height", "label", "labelColor", "lines", "reset", "springConfig", "total", "width"]);

  var _useMeasuredWidth = useMeasuredWidth(),
      _useMeasuredWidth2 = slicedToArray.slicedToArray(_useMeasuredWidth, 2),
      width = _useMeasuredWidth2[0],
      onSvgRef = _useMeasuredWidth2[1];

  var lines = React.useMemo(function () {
    return linesProps.map(function (lineOrValues) {
      return Array.isArray(lineOrValues) ? {
        values: lineOrValues
      } : lineOrValues;
    });
  }, [linesProps]); // the count of provided values

  var valuesCount = React.useMemo(function () {
    // All the values have the same length, so we can use the first one.
    return lines[0] ? lines[0].values.length : 0;
  }, [lines]); // the total amount of values

  var totalCount = React.useMemo(function () {
    // If no total is provided, the total is the number of provided values.
    return total > 0 && total > valuesCount ? total : valuesCount;
  }, [valuesCount, total]);
  var getX = React.useCallback(function (index) {
    return width / Math.max(1, totalCount - 1) * index;
  }, [width, totalCount]);
  var getY = React.useCallback(function (percentage, progress, height) {
    var padding = dotRadius + 2;
    return height - padding - (height - padding * 2) * percentage * progress;
  }, [dotRadius]);
  var getLabelPosition = React.useCallback(function (index, length) {
    if (index === 0) return 'start';
    if (index === length - 1) return 'end';
    return 'middle';
  }, []);
  var labels = label && totalCount > 0 ? toConsumableArray.toConsumableArray(Array(totalCount).keys()).map(label) : null;
  var chartHeight = height - (labels ? LABELS_HEIGHT : 0);
  var rectangle = /*#__PURE__*/React__default['default'].createElement("rect", {
    width: width,
    height: chartHeight,
    rx: "3",
    ry: "3",
    fill: "#ffffff",
    strokeWidth: "1",
    stroke: borderColor
  });
  return /*#__PURE__*/React__default['default'].createElement(web.Spring, {
    from: {
      progress: 0
    },
    to: {
      progress: 1
    },
    config: springConfig,
    delay: animDelay,
    reset: reset
  }, function (_ref2) {
    var progress = _ref2.progress;
    return /*#__PURE__*/React__default['default'].createElement(_StyledSvg, _extends._extends_1({
      ref: onSvgRef,
      viewBox: "0 0 ".concat(width, " ").concat(height),
      width: widthProps || 'auto',
      height: "auto"
    }, props), /*#__PURE__*/React__default['default'].createElement("mask", {
      id: "chart-mask"
    }, rectangle), rectangle, /*#__PURE__*/React__default['default'].createElement("g", {
      mask: "url(#chart-mask)"
    }, totalCount > 0 && /*#__PURE__*/React__default['default'].createElement("path", {
      d: "\n                  ".concat(toConsumableArray.toConsumableArray(new Array(totalCount - 1)).reduce(function (path, _, index) {
        return "".concat(path, " M ").concat(getX(index), ",").concat(chartHeight, " l 0,-8");
      }, ''), "\n                "),
      stroke: borderColor,
      strokeWidth: "1"
    }), lines.map(function (line, lineIndex) {
      return /*#__PURE__*/React__default['default'].createElement("g", {
        key: "line-plot-".concat(line.id || lineIndex)
      }, /*#__PURE__*/React__default['default'].createElement("path", {
        d: "\n                    M\n                    ".concat(getX(0), ",\n                    ").concat(getY(line.values[0], progress, chartHeight), "\n\n                    ").concat(line.values.slice(1).map(function (val, index) {
          return "L\n                           ".concat(getX((index + 1) * progress), ",\n                           ").concat(getY(val, progress, chartHeight), "\n                          ");
        }).join(''), "\n                  "),
        fill: "transparent",
        stroke: line.color || color(lineIndex, {
          lines: lines
        }),
        strokeWidth: "2"
      }), line.values.slice(1, -1).map(function (val, index) {
        return /*#__PURE__*/React__default['default'].createElement("circle", {
          key: index,
          cx: getX(index + 1) * progress,
          cy: getY(val, progress, chartHeight),
          r: dotRadius,
          fill: "white",
          stroke: line.color || color(lineIndex, {
            lines: lines
          }),
          strokeWidth: "1"
        });
      }));
    }), /*#__PURE__*/React__default['default'].createElement("line", {
      x1: getX(valuesCount - 1) * progress,
      y1: "0",
      x2: getX(valuesCount - 1) * progress,
      y2: chartHeight,
      stroke: "#DAEAEF",
      strokeWidth: "3"
    })), labels && /*#__PURE__*/React__default['default'].createElement("g", {
      transform: "translate(0,".concat(chartHeight, ")")
    }, labels.map(function (label, index) {
      return /*#__PURE__*/React__default['default'].createElement(_StyledText, {
        key: index,
        x: getX(index),
        y: LABELS_HEIGHT / 2,
        textAnchor: getLabelPosition(index, labels.length),
        fill: labelColor
      }, label);
    })));
  });
}

LineChart.propTypes = {
  springConfig: proptypes.ExtendedPropTypes._spring,
  total: proptypes.ExtendedPropTypes.number,
  width: proptypes.ExtendedPropTypes.number,
  height: proptypes.ExtendedPropTypes.number,
  dotRadius: proptypes.ExtendedPropTypes.number,
  animDelay: proptypes.ExtendedPropTypes.number,
  borderColor: proptypes.ExtendedPropTypes.string,
  labelColor: proptypes.ExtendedPropTypes.string,
  reset: proptypes.ExtendedPropTypes.bool,
  lines: proptypes.ExtendedPropTypes.arrayOf(proptypes.ExtendedPropTypes.oneOfType([proptypes.ExtendedPropTypes.shape({
    id: proptypes.ExtendedPropTypes.number,
    values: proptypes.ExtendedPropTypes.arrayOf(proptypes.ExtendedPropTypes.number).isRequired,
    // numbers between 0 and 1
    color: proptypes.ExtendedPropTypes.string // overrides the color() prop if set

  }), // values can also be passed directly
  proptypes.ExtendedPropTypes.arrayOf(proptypes.ExtendedPropTypes.number)])),
  label: proptypes.ExtendedPropTypes.oneOfType([proptypes.ExtendedPropTypes.func, proptypes.ExtendedPropTypes._null]),
  color: proptypes.ExtendedPropTypes.func
};
LineChart.defaultProps = {
  springConfig: springs.springs.lazy,
  total: -1,
  height: 200,
  dotRadius: 7 / 2,
  animDelay: 500,
  reset: false,
  borderColor: 'rgba(209, 209, 209, 0.5)',
  labelColor: '#6d777b',
  lines: [],
  label: function label(index) {
    return index + 1;
  },
  color: function color(index, _ref3) {
    var lines = _ref3.lines;
    return "hsl(".concat((index * (360 / lines.length) + 40) % 360, ", 60%, 70%)");
  }
};

exports.default = LineChart;
//# sourceMappingURL=LineChart.js.map
