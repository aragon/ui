'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var slicedToArray = require('./slicedToArray-0711941d.js');
require('./unsupportedIterableToArray-68db1d3b.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
require('./index-b0606964.js');
require('./defineProperty-0921a47c.js');
var toConsumableArray = require('./toConsumableArray-d8a4a2c3.js');
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
require('./getPrototypeOf-2a661a20.js');
require('./color.js');
require('./components.js');
require('./contains-component.js');
var css = require('./css.js');
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
require('./constants.js');
require('./breakpoints.js');
var springs = require('./springs.js');
require('./text-styles.js');
var _extends$1 = require('./extends-40571110.js');
var objectWithoutProperties = require('./objectWithoutProperties-35db8ab0.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
var web = require('./web-d0294535.js');
var proptypes = require('./proptypes-5b34673d.js');

var LABELS_HEIGHT = 30;
var WIDTH_DEFAULT = 300;

function useMeasuredWidth() {
  var ref = React.useRef();

  var _useState = React.useState(WIDTH_DEFAULT),
      _useState2 = slicedToArray._slicedToArray(_useState, 2),
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

var _StyledSvg = _styled__default("svg").withConfig({
  displayName: "LineChart___StyledSvg",
  componentId: "sc-8kiakb-0"
})(["display:block"]);

var _StyledText = _styled__default("text").withConfig({
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
      props = objectWithoutProperties._objectWithoutProperties(_ref, ["animDelay", "borderColor", "color", "dotRadius", "height", "label", "labelColor", "lines", "reset", "springConfig", "total", "width"]);

  var _useMeasuredWidth = useMeasuredWidth(),
      _useMeasuredWidth2 = slicedToArray._slicedToArray(_useMeasuredWidth, 2),
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
  var labels = label && totalCount > 0 ? toConsumableArray._toConsumableArray(Array(totalCount).keys()).map(label) : null;
  var chartHeight = height - (labels ? LABELS_HEIGHT : 0);
  var rectangle = /*#__PURE__*/React__default.createElement("rect", {
    width: width,
    height: chartHeight,
    rx: "3",
    ry: "3",
    fill: "#ffffff",
    strokeWidth: "1",
    stroke: borderColor
  });
  return /*#__PURE__*/React__default.createElement(web.Spring, {
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
    return /*#__PURE__*/React__default.createElement(_StyledSvg, _extends$1._extends({
      ref: onSvgRef,
      viewBox: "0 0 ".concat(width, " ").concat(height),
      width: widthProps || 'auto',
      height: "auto"
    }, props), /*#__PURE__*/React__default.createElement("mask", {
      id: "chart-mask"
    }, rectangle), rectangle, /*#__PURE__*/React__default.createElement("g", {
      mask: "url(#chart-mask)"
    }, totalCount > 0 && /*#__PURE__*/React__default.createElement("path", {
      d: "\n                  ".concat(toConsumableArray._toConsumableArray(new Array(totalCount - 1)).reduce(function (path, _, index) {
        return "".concat(path, " M ").concat(getX(index), ",").concat(chartHeight, " l 0,-8");
      }, ''), "\n                "),
      stroke: borderColor,
      strokeWidth: "1"
    }), lines.map(function (line, lineIndex) {
      return /*#__PURE__*/React__default.createElement("g", {
        key: "line-plot-".concat(line.id || lineIndex)
      }, /*#__PURE__*/React__default.createElement("path", {
        d: "\n                    M\n                    ".concat(getX(0), ",\n                    ").concat(getY(line.values[0], progress, chartHeight), "\n\n                    ").concat(line.values.slice(1).map(function (val, index) {
          return "L\n                           ".concat(getX((index + 1) * progress), ",\n                           ").concat(getY(val, progress, chartHeight), "\n                          ");
        }).join(''), "\n                  "),
        fill: "transparent",
        stroke: line.color || color(lineIndex, {
          lines: lines
        }),
        strokeWidth: "2"
      }), line.values.slice(1, -1).map(function (val, index) {
        return /*#__PURE__*/React__default.createElement("circle", {
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
    }), /*#__PURE__*/React__default.createElement("line", {
      x1: getX(valuesCount - 1) * progress,
      y1: "0",
      x2: getX(valuesCount - 1) * progress,
      y2: chartHeight,
      stroke: "#DAEAEF",
      strokeWidth: "3"
    })), labels && /*#__PURE__*/React__default.createElement("g", {
      transform: "translate(0,".concat(chartHeight, ")")
    }, labels.map(function (label, index) {
      return /*#__PURE__*/React__default.createElement(_StyledText, {
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
  springConfig: proptypes.PropTypes._spring,
  total: proptypes.PropTypes.number,
  width: proptypes.PropTypes.number,
  height: proptypes.PropTypes.number,
  dotRadius: proptypes.PropTypes.number,
  animDelay: proptypes.PropTypes.number,
  borderColor: proptypes.PropTypes.string,
  labelColor: proptypes.PropTypes.string,
  reset: proptypes.PropTypes.bool,
  lines: proptypes.PropTypes.arrayOf(proptypes.PropTypes.oneOfType([proptypes.PropTypes.shape({
    id: proptypes.PropTypes.number,
    values: proptypes.PropTypes.arrayOf(proptypes.PropTypes.number).isRequired,
    // numbers between 0 and 1
    color: proptypes.PropTypes.string // overrides the color() prop if set

  }), // values can also be passed directly
  proptypes.PropTypes.arrayOf(proptypes.PropTypes.number)])),
  label: proptypes.PropTypes.oneOfType([proptypes.PropTypes.func, proptypes.PropTypes._null]),
  color: proptypes.PropTypes.func
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
