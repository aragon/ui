'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var dayjs_min = require('./dayjs.min-cee6ef8e.js');
var MonthDay = require('./MonthDay-0bca20b0.js');
var date = require('./date.js');
var constants = require('./constants.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./extends-5150c1f4.js');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./defineProperty-fdbd3c46.js');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
require('./keycodes.js');
require('./css.js');
require('./text-styles.js');
require('./font.js');
require('./IconLeft.js');
require('./IconPropTypes-435c57cb.js');
require('./index-70e12149.js');
require('./IconRight.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function DatePicker({
  initialDate,
  onSelect,
  datesRangeStart,
  datesRangeEnd,
  hideYearSelector,
  yearFormat,
  hideMonthSelector,
  monthFormat,
  monthYearFormat,
  hideWeekDays,
  weekDayFormat,
  ...props
}) {
  const [selectedDate, setSelectedDate] = React.useState(initialDate);

  const setDate = ({
    year,
    add
  }) => event => {
    setSelectedDate(dayjs_min.dayjs(selectedDate).startOf('month')[add ? 'add' : 'subtract'](1, year ? 'year' : 'month').toDate());
  };

  const today = dayjs_min.dayjs().startOf('day').toDate();
  const selectedDayjs = dayjs_min.dayjs(selectedDate || today);

  const isSelected = day => {
    if (datesRangeStart || datesRangeEnd) {
      return day.isSame(datesRangeStart, 'day') || day.isSame(datesRangeEnd, 'day');
    }

    return false;
  };

  const isInRange = day => {
    if (datesRangeStart && datesRangeEnd) {
      return day.isAfter(datesRangeStart) && day.isBefore(datesRangeEnd);
    }
  };

  return /*#__PURE__*/React__default["default"].createElement(_StyledDiv, props, !hideYearSelector && /*#__PURE__*/React__default["default"].createElement(MonthDay.Selector, {
    prev: setDate({
      year: true,
      add: false
    }),
    next: setDate({
      year: true,
      add: true
    }),
    small: true
  }, selectedDayjs.format(yearFormat)), !hideMonthSelector && /*#__PURE__*/React__default["default"].createElement(MonthDay.Selector, {
    prev: setDate({
      year: false,
      add: false
    }),
    next: setDate({
      year: false,
      add: true
    })
  }, selectedDayjs.format(!hideYearSelector ? monthFormat : monthYearFormat)), /*#__PURE__*/React__default["default"].createElement(_StyledDiv2, {
    $_css: 31.5 * constants.GU
  }, !hideWeekDays && date.eachDayOfInterval({
    start: selectedDayjs.startOf('week'),
    end: selectedDayjs.endOf('week')
  }).map(day => {
    const dayJs = dayjs_min.dayjs(day);
    return /*#__PURE__*/React__default["default"].createElement(MonthDay.WrappedMonthDay, {
      key: dayJs.format('dd'),
      weekDay: true
    }, dayJs.format(weekDayFormat));
  }), date.eachDayOfInterval({
    start: selectedDayjs.startOf('month').startOf('week'),
    end: selectedDayjs.endOf('month').endOf('week')
  }).map(day => {
    const dayJs = dayjs_min.dayjs(day);
    return /*#__PURE__*/React__default["default"].createElement(MonthDay.WrappedMonthDay, {
      key: dayJs.valueOf(),
      disabled: !selectedDayjs.isSame(dayJs, 'month'),
      selected: isSelected(dayJs),
      inRange: isInRange(dayJs),
      rangeBoundaryBegin: datesRangeStart && datesRangeEnd && dayJs.isSame(datesRangeStart, 'day'),
      rangeBoundaryEnd: datesRangeStart && datesRangeEnd && dayJs.isSame(datesRangeEnd, 'day'),
      today: dayJs.isSame(today, 'day'),
      onClick: () => onSelect(dayJs.toDate())
    }, dayJs.format(props.dayFormat));
  })));
}

DatePicker.propTypes = {
  /**
   * For displaying a selected dates range - start
   */
  datesRangeStart: index.PropTypes.instanceOf(Date),

  /**
   * For displaying a selected dates range - end
   */
  datesRangeEnd: index.PropTypes.instanceOf(Date),

  /**
   * Initial date - calendar will start from here.
   */
  initialDate: index.PropTypes.instanceOf(Date),
  // Events
  onSelect: index.PropTypes.func,
  // Visibility
  hideMonthSelector: index.PropTypes.bool,
  hideWeekDays: index.PropTypes.bool,
  hideYearSelector: index.PropTypes.bool,
  // Formatting
  dayFormat: index.PropTypes.string,
  monthFormat: index.PropTypes.string,
  monthYearFormat: index.PropTypes.string,
  weekDayFormat: index.PropTypes.string,
  yearFormat: index.PropTypes.string
};
DatePicker.defaultProps = {
  onSelect: () => {},
  dayFormat: 'D',
  monthFormat: 'MMMM',
  monthYearFormat: 'MMMM YYYY',
  weekDayFormat: 'ddd',
  yearFormat: 'YYYY'
};

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "DatePicker___StyledDiv",
  componentId: "sc-6xp23y-0"
})(["display:grid;"]);

var _StyledDiv2 = _styled__default["default"]("div").withConfig({
  displayName: "DatePicker___StyledDiv2",
  componentId: "sc-6xp23y-1"
})(["display:grid;grid-template:auto / repeat(7,1fr);width:", "px;"], p => p.$_css);

exports["default"] = DatePicker;
//# sourceMappingURL=DatePicker.js.map
