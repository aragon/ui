'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var slicedToArray = require('./slicedToArray-a8a77f0e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-37353731.js');
var dayjs_min = require('./dayjs.min-ac79806e.js');
var MonthDay = require('./MonthDay-fdf848ef.js');
var date = require('./date.js');
var constants = require('./constants.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./extends-023d783e.js');
require('./ButtonBase.js');
require('./defineProperty-3cad0327.js');
require('./FocusVisible.js');
require('./getPrototypeOf-55c9e80c.js');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
require('./toConsumableArray-cc0d28a9.js');
require('./keycodes.js');
require('./css.js');
require('./text-styles.js');
require('./font.js');
require('./IconLeft.js');
require('./IconPropTypes-b9997416.js');
require('./index-c33eeeef.js');
require('./IconRight.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _StyledDiv = _styled__default['default']("div").withConfig({
  displayName: "DatePicker___StyledDiv",
  componentId: "sc-6xp23y-0"
})(["display:grid;"]);

var _StyledDiv2 = _styled__default['default']("div").withConfig({
  displayName: "DatePicker___StyledDiv2",
  componentId: "sc-6xp23y-1"
})(["display:grid;grid-template:auto / repeat(7,1fr);width:", "px;"], function (p) {
  return p._css;
});

function DatePicker(_ref) {
  var initialDate = _ref.initialDate,
      onSelect = _ref.onSelect,
      datesRangeStart = _ref.datesRangeStart,
      datesRangeEnd = _ref.datesRangeEnd,
      hideYearSelector = _ref.hideYearSelector,
      yearFormat = _ref.yearFormat,
      hideMonthSelector = _ref.hideMonthSelector,
      monthFormat = _ref.monthFormat,
      monthYearFormat = _ref.monthYearFormat,
      hideWeekDays = _ref.hideWeekDays,
      weekDayFormat = _ref.weekDayFormat,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["initialDate", "onSelect", "datesRangeStart", "datesRangeEnd", "hideYearSelector", "yearFormat", "hideMonthSelector", "monthFormat", "monthYearFormat", "hideWeekDays", "weekDayFormat"]);

  var _useState = React.useState(initialDate),
      _useState2 = slicedToArray.slicedToArray(_useState, 2),
      selectedDate = _useState2[0],
      setSelectedDate = _useState2[1];

  var setDate = function setDate(_ref2) {
    var year = _ref2.year,
        add = _ref2.add;
    return function (event) {
      setSelectedDate(dayjs_min.dayjs_min(selectedDate).startOf('month')[add ? 'add' : 'subtract'](1, year ? 'year' : 'month').toDate());
    };
  };

  var today = dayjs_min.dayjs_min().startOf('day').toDate();
  var selectedDayjs = dayjs_min.dayjs_min(selectedDate || today);

  var isSelected = function isSelected(day) {
    if (datesRangeStart || datesRangeEnd) {
      return day.isSame(datesRangeStart, 'day') || day.isSame(datesRangeEnd, 'day');
    }

    return false;
  };

  var isInRange = function isInRange(day) {
    if (datesRangeStart && datesRangeEnd) {
      return day.isAfter(datesRangeStart) && day.isBefore(datesRangeEnd);
    }
  };

  return /*#__PURE__*/React__default['default'].createElement(_StyledDiv, props, !hideYearSelector && /*#__PURE__*/React__default['default'].createElement(MonthDay.Selector, {
    prev: setDate({
      year: true,
      add: false
    }),
    next: setDate({
      year: true,
      add: true
    }),
    small: true
  }, selectedDayjs.format(yearFormat)), !hideMonthSelector && /*#__PURE__*/React__default['default'].createElement(MonthDay.Selector, {
    prev: setDate({
      year: false,
      add: false
    }),
    next: setDate({
      year: false,
      add: true
    })
  }, selectedDayjs.format(!hideYearSelector ? monthFormat : monthYearFormat)), /*#__PURE__*/React__default['default'].createElement(_StyledDiv2, {
    _css: 31.5 * constants.GU
  }, !hideWeekDays && date.eachDayOfInterval({
    start: selectedDayjs.startOf('week'),
    end: selectedDayjs.endOf('week')
  }).map(function (day) {
    var dayJs = dayjs_min.dayjs_min(day);
    return /*#__PURE__*/React__default['default'].createElement(MonthDay.WrappedMonthDay, {
      key: dayJs.format('dd'),
      weekDay: true
    }, dayJs.format(weekDayFormat));
  }), date.eachDayOfInterval({
    start: selectedDayjs.startOf('month').startOf('week'),
    end: selectedDayjs.endOf('month').endOf('week')
  }).map(function (day) {
    var dayJs = dayjs_min.dayjs_min(day);
    return /*#__PURE__*/React__default['default'].createElement(MonthDay.WrappedMonthDay, {
      key: dayJs.valueOf(),
      disabled: !selectedDayjs.isSame(dayJs, 'month'),
      selected: isSelected(dayJs),
      inRange: isInRange(dayJs),
      rangeBoundaryBegin: datesRangeStart && datesRangeEnd && dayJs.isSame(datesRangeStart, 'day'),
      rangeBoundaryEnd: datesRangeStart && datesRangeEnd && dayJs.isSame(datesRangeEnd, 'day'),
      today: dayJs.isSame(today, 'day'),
      onClick: function onClick() {
        return onSelect(dayJs.toDate());
      }
    }, dayJs.format(props.dayFormat));
  })));
}

DatePicker.propTypes = {
  /**
   * For displaying a selected dates range - start
   */
  datesRangeStart: index.propTypes.instanceOf(Date),

  /**
   * For displaying a selected dates range - end
   */
  datesRangeEnd: index.propTypes.instanceOf(Date),

  /**
   * Initial date - calendar will start from here.
   */
  initialDate: index.propTypes.instanceOf(Date),
  // Events
  onSelect: index.propTypes.func,
  // Visibility
  hideMonthSelector: index.propTypes.bool,
  hideWeekDays: index.propTypes.bool,
  hideYearSelector: index.propTypes.bool,
  // Formatting
  dayFormat: index.propTypes.string,
  monthFormat: index.propTypes.string,
  monthYearFormat: index.propTypes.string,
  weekDayFormat: index.propTypes.string,
  yearFormat: index.propTypes.string
};
DatePicker.defaultProps = {
  onSelect: function onSelect() {},
  dayFormat: 'D',
  monthFormat: 'MMMM',
  monthYearFormat: 'MMMM YYYY',
  weekDayFormat: 'ddd',
  yearFormat: 'YYYY'
};

exports.default = DatePicker;
//# sourceMappingURL=DatePicker.js.map
