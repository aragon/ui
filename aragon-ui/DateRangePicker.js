'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var slicedToArray = require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-1b94f6bc.js');
var index = require('./index-46d0e707.js');
require('./defineProperty-3cad0327.js');
require('./toConsumableArray-cc0d28a9.js');
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
require('./getPrototypeOf-55c9e80c.js');
require('./color.js');
require('./components.js');
require('./css.js');
var dayjs_min = require('./dayjs.min-ac79806e.js');
require('./date.js');
require('./miscellaneous.js');
require('./environment.js');
require('./font.js');
require('./keycodes.js');
var constants = require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');
var _extends = require('./extends-023d783e.js');
require('./objectWithoutProperties-c6d3675c.js');
require('./index-f5a9917e.js');
require('./_baseGetTag-42b4dd3e.js');
var Viewport = require('./Viewport-abbde113.js');
require('./Layout.js');
require('./FocusVisible.js');
require('./ButtonBase.js');
require('./IconPropTypes-dd9d2cb1.js');
require('./IconCalendar.js');
require('./IconLeft.js');
require('./IconRight.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
require('./web-d0294535.js');
var Button = require('./Button.js');
require('./Root-fd39454b.js');
require('./RootPortal.js');
require('./proptypes-b2a781f4.js');
var Popover = require('./Popover.js');
require('./MonthDay-c14d1e4a.js');
var DatePicker = require('./DatePicker.js');
var consts = require('./consts.js');
var Labels = require('./Labels.js');
var utils = require('./utils.js');

var _StyledPopover = _styled__default(Popover.default).withConfig({
  displayName: "DateRangePicker___StyledPopover",
  componentId: "s3s5m9-0"
})(["min-width:", "px;border:0;filter:none;background:none;margin:2px 0 0 0;"], function (p) {
  return p._css;
});

var _StyledDiv = _styled__default("div").withConfig({
  displayName: "DateRangePicker___StyledDiv",
  componentId: "s3s5m9-1"
})(["padding:", "px ", "px ", "px;border:1px solid ", ";border-radius:", "px;background:", ";"], function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, constants.RADIUS, function (p) {
  return p._css6;
});

var _StyledDiv2 = _styled__default("div").withConfig({
  displayName: "DateRangePicker___StyledDiv2",
  componentId: "s3s5m9-2"
})(["display:flex;flex-direction:row;align-items:baseline;"]);

var _StyledDatePicker = _styled__default(DatePicker.default).withConfig({
  displayName: "DateRangePicker___StyledDatePicker",
  componentId: "s3s5m9-3"
})(["margin-left:", "px;"], function (p) {
  return p._css7;
});

var _StyledDiv3 = _styled__default("div").withConfig({
  displayName: "DateRangePicker___StyledDiv3",
  componentId: "s3s5m9-4"
})(["display:flex;align-items:center;justify-content:space-between;margin-top:", "px;", ";"], function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
});

var _StyledButton = _styled__default(Button.default).withConfig({
  displayName: "DateRangePicker___StyledButton",
  componentId: "s3s5m9-5"
})(["margin-left:", "px;"], function (p) {
  return p._css10;
});

function DateRangePicker(_ref) {
  var format = _ref.format,
      endDateProp = _ref.endDate,
      onChange = _ref.onChange,
      startDateProp = _ref.startDate;
  var theme = Theme.useTheme();
  var labelsRef = React.useRef();

  var _useState = React.useState(false),
      _useState2 = slicedToArray.slicedToArray(_useState, 2),
      showPicker = _useState2[0],
      setShowPicker = _useState2[1];

  var _useState3 = React.useState(startDateProp),
      _useState4 = slicedToArray.slicedToArray(_useState3, 2),
      startDate = _useState4[0],
      setStartDate = _useState4[1];

  var _useState5 = React.useState(endDateProp),
      _useState6 = slicedToArray.slicedToArray(_useState5, 2),
      endDate = _useState6[0],
      setEndDate = _useState6[1]; // on closing the picked, reset state


  React.useEffect(function () {
    if (!showPicker) {
      setStartDate(startDateProp);
      setEndDate(endDateProp);
    }
  }, [endDateProp, startDateProp, showPicker]);
  var handlePopoverClose = React.useCallback(function () {
    return setShowPicker(false);
  }, []);
  var handleLabelsClick = React.useCallback(function () {
    setShowPicker(function (show) {
      return !show;
    });
  }, []);
  var handleDateClick = React.useCallback(function (date) {
    var result = utils.handleDateSelect({
      date: date,
      startDate: startDate,
      endDate: endDate
    });
    result.startDate !== undefined && setStartDate(result.startDate);
    result.endDate !== undefined && setEndDate(result.endDate);
  }, [startDate, endDate]);
  var handleApply = React.useCallback(function () {
    setShowPicker(false);

    if (startDate && endDate) {
      onChange({
        start: dayjs_min.dayjs_min(startDate).startOf('day').toDate(),
        end: dayjs_min.dayjs_min(endDate).endOf('day').toDate()
      });
    }
  }, [endDate, onChange, startDate]);
  var handleClear = React.useCallback(function () {
    setStartDate(null);
    setEndDate(null);
    setShowPicker(false);
    onChange({
      start: null,
      end: null
    });
  }, [onChange]);
  var labelProps = React.useMemo(function () {
    var _startDate = showPicker ? startDate : startDateProp;

    var _endDate = showPicker ? endDate : endDateProp;

    return {
      startText: _startDate ? dayjs_min.dayjs_min(_startDate).format(format) : consts.START_DATE,
      endText: _endDate ? dayjs_min.dayjs_min(_endDate).format(format) : consts.END_DATE
    };
  }, [endDate, endDateProp, format, showPicker, startDate, startDateProp]);
  var compactMode = Viewport.useViewport().below('medium');
  var displayMonthBeforeOnLeft = React.useMemo(function () {
    // If both dates are in the same month, use the right calendar
    // for it, and display month before on the left calendar.
    var propsDatesInSameMonth = startDateProp && endDateProp && dayjs_min.dayjs_min(startDateProp).isSame(dayjs_min.dayjs_min(endDateProp), 'month');
    return !compactMode && (propsDatesInSameMonth || !startDateProp);
  }, [compactMode, endDateProp, startDateProp]);
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Labels.default, _extends._extends_1({
    ref: labelsRef,
    enabled: showPicker,
    hasSetDates: Boolean(startDateProp && endDateProp),
    onClick: handleLabelsClick
  }, labelProps)), /*#__PURE__*/React__default.createElement(_StyledPopover, {
    closeOnOpenerFocus: true,
    onClose: handlePopoverClose,
    opener: labelsRef.current,
    placement: "bottom-start",
    visible: showPicker,
    _css: 37.5 * constants.GU + 2
  }, /*#__PURE__*/React__default.createElement(_StyledDiv, {
    _css2: 2.5 * constants.GU,
    _css3: 3 * constants.GU,
    _css4: 3 * constants.GU,
    _css5: theme.border,
    _css6: theme.surface
  }, /*#__PURE__*/React__default.createElement(_StyledDiv2, null, /*#__PURE__*/React__default.createElement(DatePicker.default, {
    datesRangeEnd: endDate,
    datesRangeStart: startDate,
    initialDate: dayjs_min.dayjs_min(startDateProp || undefined).subtract(displayMonthBeforeOnLeft ? 1 : 0, 'month').toDate(),
    onSelect: handleDateClick
  }), !compactMode && /*#__PURE__*/React__default.createElement(_StyledDatePicker, {
    datesRangeEnd: endDate,
    datesRangeStart: startDate,
    initialDate: dayjs_min.dayjs_min(endDateProp || undefined).toDate(),
    onSelect: handleDateClick,
    _css7: 1 * constants.GU
  })), /*#__PURE__*/React__default.createElement(_StyledDiv3, {
    _css8: constants.GU * 2.25,
    _css9: compactMode ? '' : "\n                    max-width: 247px;\n                    margin-left: auto;\n                  "
  }, /*#__PURE__*/React__default.createElement(Button.default, {
    onClick: handleClear,
    size: "small",
    wide: true
  }, "Reset"), /*#__PURE__*/React__default.createElement(_StyledButton, {
    disabled: !startDate || !endDate,
    mode: "strong",
    onClick: handleApply,
    size: "small",
    wide: true,
    _css10: 1.5 * constants.GU
  }, "Apply")))));
}

DateRangePicker.propTypes = {
  endDate: index.propTypes.instanceOf(Date),
  format: index.propTypes.string,
  onChange: index.propTypes.func,
  startDate: index.propTypes.instanceOf(Date)
};
DateRangePicker.defaultProps = {
  format: 'MM/DD/YYYY',
  onChange: function onChange() {}
};

exports.default = DateRangePicker;
//# sourceMappingURL=DateRangePicker.js.map
