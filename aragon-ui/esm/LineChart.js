import { _ as _slicedToArray } from './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import React, { useMemo, useCallback, useRef, useState, useEffect } from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import './index-097535f1.js';
import './defineProperty-a0480c32.js';
import { _ as _toConsumableArray } from './toConsumableArray-127424c2.js';
import _styled from 'styled-components';
import './getPrototypeOf-b96da1e1.js';
import './color.js';
import './components.js';
import './contains-component.js';
import { unselectable } from './css.js';
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
import './constants.js';
import './breakpoints.js';
import { springs } from './springs.js';
import './text-styles.js';
import { _ as _extends } from './extends-db4f0c26.js';
import { _ as _objectWithoutProperties } from './objectWithoutProperties-234758e1.js';
import './objectWithoutPropertiesLoose-9606ad13.js';
import 'react-dom';
import { S as Spring } from './web-a351a0a1.js';
import { P as PropTypes } from './proptypes-c8a77d05.js';

var LABELS_HEIGHT = 30;
var WIDTH_DEFAULT = 300;

function useMeasuredWidth() {
  var ref = useRef();

  var _useState = useState(WIDTH_DEFAULT),
      _useState2 = _slicedToArray(_useState, 2),
      measuredWidth = _useState2[0],
      setMeasuredWidth = _useState2[1];

  var onResize = useCallback(function () {
    if (ref.current) {
      setMeasuredWidth(ref.current.clientWidth);
    }
  }, []);
  var onRef = useCallback(function (element) {
    ref.current = element;
    onResize();
  }, [onResize]);
  useEffect(function () {
    window.addEventListener('resize', onResize);
    return function () {
      return window.removeEventListener('resize', onResize);
    };
  }, [onResize]);
  return [measuredWidth, onRef];
}

var _StyledSvg = _styled("svg").withConfig({
  displayName: "LineChart___StyledSvg",
  componentId: "sc-8kiakb-0"
})(["display:block"]);

var _StyledText = _styled("text").withConfig({
  displayName: "LineChart___StyledText",
  componentId: "sc-8kiakb-1"
})(["alignment-baseline:middle;font-size:12px;font-weight:300;", ";"], unselectable);

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
      props = _objectWithoutProperties(_ref, ["animDelay", "borderColor", "color", "dotRadius", "height", "label", "labelColor", "lines", "reset", "springConfig", "total", "width"]);

  var _useMeasuredWidth = useMeasuredWidth(),
      _useMeasuredWidth2 = _slicedToArray(_useMeasuredWidth, 2),
      width = _useMeasuredWidth2[0],
      onSvgRef = _useMeasuredWidth2[1];

  var lines = useMemo(function () {
    return linesProps.map(function (lineOrValues) {
      return Array.isArray(lineOrValues) ? {
        values: lineOrValues
      } : lineOrValues;
    });
  }, [linesProps]); // the count of provided values

  var valuesCount = useMemo(function () {
    // All the values have the same length, so we can use the first one.
    return lines[0] ? lines[0].values.length : 0;
  }, [lines]); // the total amount of values

  var totalCount = useMemo(function () {
    // If no total is provided, the total is the number of provided values.
    return total > 0 && total > valuesCount ? total : valuesCount;
  }, [valuesCount, total]);
  var getX = useCallback(function (index) {
    return width / Math.max(1, totalCount - 1) * index;
  }, [width, totalCount]);
  var getY = useCallback(function (percentage, progress, height) {
    var padding = dotRadius + 2;
    return height - padding - (height - padding * 2) * percentage * progress;
  }, [dotRadius]);
  var getLabelPosition = useCallback(function (index, length) {
    if (index === 0) return 'start';
    if (index === length - 1) return 'end';
    return 'middle';
  }, []);
  var labels = label && totalCount > 0 ? _toConsumableArray(Array(totalCount).keys()).map(label) : null;
  var chartHeight = height - (labels ? LABELS_HEIGHT : 0);
  var rectangle = /*#__PURE__*/React.createElement("rect", {
    width: width,
    height: chartHeight,
    rx: "3",
    ry: "3",
    fill: "#ffffff",
    strokeWidth: "1",
    stroke: borderColor
  });
  return /*#__PURE__*/React.createElement(Spring, {
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
    return /*#__PURE__*/React.createElement(_StyledSvg, _extends({
      ref: onSvgRef,
      viewBox: "0 0 ".concat(width, " ").concat(height),
      width: widthProps || 'auto',
      height: "auto"
    }, props), /*#__PURE__*/React.createElement("mask", {
      id: "chart-mask"
    }, rectangle), rectangle, /*#__PURE__*/React.createElement("g", {
      mask: "url(#chart-mask)"
    }, totalCount > 0 && /*#__PURE__*/React.createElement("path", {
      d: "\n                  ".concat(_toConsumableArray(new Array(totalCount - 1)).reduce(function (path, _, index) {
        return "".concat(path, " M ").concat(getX(index), ",").concat(chartHeight, " l 0,-8");
      }, ''), "\n                "),
      stroke: borderColor,
      strokeWidth: "1"
    }), lines.map(function (line, lineIndex) {
      return /*#__PURE__*/React.createElement("g", {
        key: "line-plot-".concat(line.id || lineIndex)
      }, /*#__PURE__*/React.createElement("path", {
        d: "\n                    M\n                    ".concat(getX(0), ",\n                    ").concat(getY(line.values[0], progress, chartHeight), "\n\n                    ").concat(line.values.slice(1).map(function (val, index) {
          return "L\n                           ".concat(getX((index + 1) * progress), ",\n                           ").concat(getY(val, progress, chartHeight), "\n                          ");
        }).join(''), "\n                  "),
        fill: "transparent",
        stroke: line.color || color(lineIndex, {
          lines: lines
        }),
        strokeWidth: "2"
      }), line.values.slice(1, -1).map(function (val, index) {
        return /*#__PURE__*/React.createElement("circle", {
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
    }), /*#__PURE__*/React.createElement("line", {
      x1: getX(valuesCount - 1) * progress,
      y1: "0",
      x2: getX(valuesCount - 1) * progress,
      y2: chartHeight,
      stroke: "#DAEAEF",
      strokeWidth: "3"
    })), labels && /*#__PURE__*/React.createElement("g", {
      transform: "translate(0,".concat(chartHeight, ")")
    }, labels.map(function (label, index) {
      return /*#__PURE__*/React.createElement(_StyledText, {
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
  springConfig: PropTypes._spring,
  total: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  dotRadius: PropTypes.number,
  animDelay: PropTypes.number,
  borderColor: PropTypes.string,
  labelColor: PropTypes.string,
  reset: PropTypes.bool,
  lines: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({
    id: PropTypes.number,
    values: PropTypes.arrayOf(PropTypes.number).isRequired,
    // numbers between 0 and 1
    color: PropTypes.string // overrides the color() prop if set

  }), // values can also be passed directly
  PropTypes.arrayOf(PropTypes.number)])),
  label: PropTypes.oneOfType([PropTypes.func, PropTypes._null]),
  color: PropTypes.func
};
LineChart.defaultProps = {
  springConfig: springs.lazy,
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

export default LineChart;
//# sourceMappingURL=LineChart.js.map
