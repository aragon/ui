import React$1 from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import defineProperty$1 from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import toConsumableArray$1 from '../../../node_modules/@babel/runtime/helpers/toConsumableArray.js';
import _styled$1 from 'styled-components';
import classCallCheck$1 from '../../../node_modules/@babel/runtime/helpers/classCallCheck.js';
import createClass$1 from '../../../node_modules/@babel/runtime/helpers/createClass.js';
import inherits$1 from '../../../node_modules/@babel/runtime/helpers/inherits.js';
import assertThisInitialized$1 from '../../../node_modules/@babel/runtime/helpers/assertThisInitialized.js';
import possibleConstructorReturn$1 from '../../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js';
import getPrototypeOf$1 from '../../../node_modules/@babel/runtime/helpers/getPrototypeOf.js';
import { unselectable } from '../../utils/css.js';
import dayjs_min$1 from '../../../node_modules/dayjs/dayjs.min.js';
import { formatHtmlDatetime, difference } from '../../utils/date.js';
import { GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';
import { useTheme } from '../../theme/Theme2.js';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import IconClock$1 from '../../icons/components/IconClock.js';
import { Redraw as Redraw$1 } from '../../providers/Redraw/Redraw.js';
import memoize_1 from '../../../node_modules/lodash/memoize.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn$1(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var RENDER_EVERY = 1000;

var formatUnit = function formatUnit(v) {
  return String(v).padStart(2, '0');
};

var formats = {
  yMdhms: 'yMdhms',
  yMdhm: 'yMdhm',
  yMdh: 'yMdh',
  yMd: 'yMd',
  yM: 'yM',
  Mdhms: 'Mdhms',
  Mdhm: 'Mdhm',
  Mdh: 'Mdh',
  Md: 'Md',
  dhms: 'dhms',
  dhm: 'dhm',
  hms: 'hms',
  hm: 'hm',
  ms: 'ms',
  m: 'm',
  s: 's'
};
var unitNames = {
  y: 'years',
  M: 'months',
  d: 'days',
  h: 'hours',
  m: 'minutes',
  s: 'seconds'
};
var getFormat = memoize_1(function (format) {
  return ['y', 'M', 'd', 'h', 'm', 's'].reduce(function (units, symbol) {
    return formats[format].includes(symbol) ? [].concat(toConsumableArray$1(units), [unitNames[symbol]]) : units;
  }, []);
});

function getTime(start, end, format, showEmpty, maxUnits) {
  var date1 = end || new Date();
  var date2 = end ? new Date() : start;
  var totalInSeconds = dayjs_min$1(date1).diff(date2, 'seconds');

  var _difference = difference(date1, date2, {
    keepLeadingZeros: showEmpty,
    maxUnits: maxUnits,
    units: getFormat(format)
  }),
      years = _difference.years,
      months = _difference.months,
      days = _difference.days,
      hours = _difference.hours,
      minutes = _difference.minutes,
      seconds = _difference.seconds;

  return {
    units: [['Y', years], ['M', months], ['D', days], ['H', hours], ['M', minutes], ['S', seconds]],
    totalInSeconds: totalInSeconds
  };
}

var _StyledTime = _styled$1("time").withConfig({
  displayName: "Timer___StyledTime",
  componentId: "sc-58hkwl-0"
})(["display:flex;align-items:center;white-space:nowrap;", ";", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var _StyledSpan = _styled$1("span").withConfig({
  displayName: "Timer___StyledSpan",
  componentId: "sc-58hkwl-1"
})(["display:flex;align-items:center;margin-right:", "px;margin-top:-3px;"], function (p) {
  return p._css3;
});

var _StyledIconTime = _styled$1(IconClock$1).withConfig({
  displayName: "Timer___StyledIconTime",
  componentId: "sc-58hkwl-2"
})(["color:", ";"], function (p) {
  return p._css4;
});

var _StyledSpan2 = _styled$1("span").withConfig({
  displayName: "Timer___StyledSpan2",
  componentId: "sc-58hkwl-3"
})(["", ";color:", ";"], function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

var _StyledSpan3 = _styled$1("span").withConfig({
  displayName: "Timer___StyledSpan3",
  componentId: "sc-58hkwl-4"
})(["color:", ";", ";"], function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
});

var _StyledSpan4 = _styled$1("span").withConfig({
  displayName: "Timer___StyledSpan4",
  componentId: "sc-58hkwl-5"
})(["margin-left:2px;color:", ";"], function (p) {
  return p._css9;
});

var _StyledSpan5 = _styled$1("span").withConfig({
  displayName: "Timer___StyledSpan5",
  componentId: "sc-58hkwl-6"
})(["margin:0 4px;color:", ";font-weight:400;"], function (p) {
  return p._css10;
});

var Timer = /*#__PURE__*/function (_React$Component) {
  inherits$1(Timer, _React$Component);

  var _super = _createSuper(Timer);

  function Timer() {
    var _this;

    classCallCheck$1(this, Timer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty$1(assertThisInitialized$1(_this), "renderTime", function () {
      var _this$props = _this.props,
          start = _this$props.start,
          end = _this$props.end,
          theme = _this$props.theme,
          format = _this$props.format,
          showEmpty = _this$props.showEmpty,
          maxUnits = _this$props.maxUnits;

      var _getTime = getTime(start, end, format, showEmpty, maxUnits),
          totalInSeconds = _getTime.totalInSeconds,
          units = _getTime.units;

      if (totalInSeconds < 0 || Object.is(totalInSeconds, -0)) {
        return /*#__PURE__*/React$1.createElement(_StyledSpan2, {
          _css5: textStyle('body2'),
          _css6: theme.surfaceContentSecondary
        }, end ? 'Time out' : '−');
      }

      var lastUnitIndex = units.reduce(function (lastIndex, unit, index) {
        return unit[1] === null ? lastIndex : index;
      }, 0);
      return /*#__PURE__*/React$1.createElement("span", null, units.map(function (unit, index) {
        var isLast = index === lastUnitIndex;
        var isSeconds = index === units.length - 1; // Only time units (hours, minutes and seconds).
        // Remember to update if ms gets added one day!

        var isTimeUnit = index >= units.length - 3;

        if (unit[1] === null) {
          return null;
        }

        return /*#__PURE__*/React$1.createElement(React$1.Fragment, {
          key: index
        }, /*#__PURE__*/React$1.createElement(_StyledSpan3, {
          _css7: theme.surfaceContent,
          _css8: isSeconds && // Fix the width of the seconds unit so that
          // it doesn’t jump too much.
          "\n                      display: inline-flex;\n                      align-items: baseline;\n                      justify-content: space-between;\n                      min-width: 31px;\n                    "
        }, formatUnit(unit[1]), /*#__PURE__*/React$1.createElement(_StyledSpan4, {
          _css9: theme.surfaceContentSecondary
        }, unit[0])), !isLast &&
        /*#__PURE__*/
        // Separator
        React$1.createElement(_StyledSpan5, {
          _css10: theme.surfaceContentSecondary
        }, isTimeUnit && ':'));
      }));
    });

    return _this;
  }

  createClass$1(Timer, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          end = _this$props2.end,
          start = _this$props2.start,
          showIcon = _this$props2.showIcon,
          theme = _this$props2.theme;
      return /*#__PURE__*/React$1.createElement(_StyledTime, {
        dateTime: formatHtmlDatetime(end || start),
        _css: unselectable(),
        _css2: textStyle('body2')
      }, showIcon && /*#__PURE__*/React$1.createElement(_StyledSpan, {
        _css3: 0.5 * GU
      }, /*#__PURE__*/React$1.createElement(_StyledIconTime, {
        _css4: theme.surfaceIcon
      })), /*#__PURE__*/React$1.createElement(Redraw$1, {
        interval: RENDER_EVERY
      }, this.renderTime));
    }
  }]);

  return Timer;
}(React$1.Component);

defineProperty$1(Timer, "propTypes", {
  end: propTypes.instanceOf(Date),
  format: propTypes.oneOf(Object.keys(formats)),
  maxUnits: propTypes.number,
  showEmpty: propTypes.bool,
  showIcon: propTypes.bool,
  start: propTypes.instanceOf(Date),
  theme: propTypes.object
});

defineProperty$1(Timer, "defaultProps", {
  format: formats.yMdhms,
  maxUnits: -1,
  showEmpty: false,
  showIcon: true
});

var Timer$1 = (function (props) {
  var theme = useTheme();
  return /*#__PURE__*/React$1.createElement(Timer, _extends_1({}, props, {
    theme: theme
  }));
});

export default Timer$1;
//# sourceMappingURL=Timer.js.map
