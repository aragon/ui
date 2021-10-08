import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import slicedToArray from '../../../node_modules/@babel/runtime/helpers/slicedToArray.js';
import _styled from 'styled-components';
import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import dayjs_min from '../../../node_modules/dayjs/dayjs.min.js';
import ButtonWithRef from '../Button/Button.js';
import { useViewport } from '../../providers/Viewport/Viewport.js';
import DatePicker from './DatePicker.js';
import Labels from './Labels.js';
import { START_DATE, END_DATE } from './consts.js';
import { handleDateSelect } from './utils.js';
import Popover from '../Popover/Popover.js';
import { useTheme } from '../../theme/Theme2.js';
import { RADIUS, GU } from '../../style/constants.js';

var _StyledPopover = _styled(Popover).withConfig({
  displayName: "DateRangePicker___StyledPopover",
  componentId: "s3s5m9-0"
})(["min-width:", "px;border:0;filter:none;background:none;margin:2px 0 0 0;"], function (p) {
  return p._css;
});

var _StyledDiv = _styled("div").withConfig({
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
}, RADIUS, function (p) {
  return p._css6;
});

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "DateRangePicker___StyledDiv2",
  componentId: "s3s5m9-2"
})(["display:flex;flex-direction:row;align-items:baseline;"]);

var _StyledDatePicker = _styled(DatePicker).withConfig({
  displayName: "DateRangePicker___StyledDatePicker",
  componentId: "s3s5m9-3"
})(["margin-left:", "px;"], function (p) {
  return p._css7;
});

var _StyledDiv3 = _styled("div").withConfig({
  displayName: "DateRangePicker___StyledDiv3",
  componentId: "s3s5m9-4"
})(["display:flex;align-items:center;justify-content:space-between;margin-top:", "px;", ";"], function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
});

var _StyledButton = _styled(ButtonWithRef).withConfig({
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
  var theme = useTheme();
  var labelsRef = useRef();

  var _useState = useState(false),
      _useState2 = slicedToArray(_useState, 2),
      showPicker = _useState2[0],
      setShowPicker = _useState2[1];

  var _useState3 = useState(startDateProp),
      _useState4 = slicedToArray(_useState3, 2),
      startDate = _useState4[0],
      setStartDate = _useState4[1];

  var _useState5 = useState(endDateProp),
      _useState6 = slicedToArray(_useState5, 2),
      endDate = _useState6[0],
      setEndDate = _useState6[1]; // on closing the picked, reset state


  useEffect(function () {
    if (!showPicker) {
      setStartDate(startDateProp);
      setEndDate(endDateProp);
    }
  }, [endDateProp, startDateProp, showPicker]);
  var handlePopoverClose = useCallback(function () {
    return setShowPicker(false);
  }, []);
  var handleLabelsClick = useCallback(function () {
    setShowPicker(function (show) {
      return !show;
    });
  }, []);
  var handleDateClick = useCallback(function (date) {
    var result = handleDateSelect({
      date: date,
      startDate: startDate,
      endDate: endDate
    });
    result.startDate !== undefined && setStartDate(result.startDate);
    result.endDate !== undefined && setEndDate(result.endDate);
  }, [startDate, endDate]);
  var handleApply = useCallback(function () {
    setShowPicker(false);

    if (startDate && endDate) {
      onChange({
        start: dayjs_min(startDate).startOf('day').toDate(),
        end: dayjs_min(endDate).endOf('day').toDate()
      });
    }
  }, [endDate, onChange, startDate]);
  var handleClear = useCallback(function () {
    setStartDate(null);
    setEndDate(null);
    setShowPicker(false);
    onChange({
      start: null,
      end: null
    });
  }, [onChange]);
  var labelProps = useMemo(function () {
    var _startDate = showPicker ? startDate : startDateProp;

    var _endDate = showPicker ? endDate : endDateProp;

    return {
      startText: _startDate ? dayjs_min(_startDate).format(format) : START_DATE,
      endText: _endDate ? dayjs_min(_endDate).format(format) : END_DATE
    };
  }, [endDate, endDateProp, format, showPicker, startDate, startDateProp]);
  var compactMode = useViewport().below('medium');
  var displayMonthBeforeOnLeft = useMemo(function () {
    // If both dates are in the same month, use the right calendar
    // for it, and display month before on the left calendar.
    var propsDatesInSameMonth = startDateProp && endDateProp && dayjs_min(startDateProp).isSame(dayjs_min(endDateProp), 'month');
    return !compactMode && (propsDatesInSameMonth || !startDateProp);
  }, [compactMode, endDateProp, startDateProp]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Labels, _extends_1({
    ref: labelsRef,
    enabled: showPicker,
    hasSetDates: Boolean(startDateProp && endDateProp),
    onClick: handleLabelsClick
  }, labelProps)), /*#__PURE__*/React.createElement(_StyledPopover, {
    closeOnOpenerFocus: true,
    onClose: handlePopoverClose,
    opener: labelsRef.current,
    placement: "bottom-start",
    visible: showPicker,
    _css: 37.5 * GU + 2
  }, /*#__PURE__*/React.createElement(_StyledDiv, {
    _css2: 2.5 * GU,
    _css3: 3 * GU,
    _css4: 3 * GU,
    _css5: theme.border,
    _css6: theme.surface
  }, /*#__PURE__*/React.createElement(_StyledDiv2, null, /*#__PURE__*/React.createElement(DatePicker, {
    datesRangeEnd: endDate,
    datesRangeStart: startDate,
    initialDate: dayjs_min(startDateProp || undefined).subtract(displayMonthBeforeOnLeft ? 1 : 0, 'month').toDate(),
    onSelect: handleDateClick
  }), !compactMode && /*#__PURE__*/React.createElement(_StyledDatePicker, {
    datesRangeEnd: endDate,
    datesRangeStart: startDate,
    initialDate: dayjs_min(endDateProp || undefined).toDate(),
    onSelect: handleDateClick,
    _css7: 1 * GU
  })), /*#__PURE__*/React.createElement(_StyledDiv3, {
    _css8: GU * 2.25,
    _css9: compactMode ? '' : "\n                    max-width: 247px;\n                    margin-left: auto;\n                  "
  }, /*#__PURE__*/React.createElement(ButtonWithRef, {
    onClick: handleClear,
    size: "small",
    wide: true
  }, "Reset"), /*#__PURE__*/React.createElement(_StyledButton, {
    disabled: !startDate || !endDate,
    mode: "strong",
    onClick: handleApply,
    size: "small",
    wide: true,
    _css10: 1.5 * GU
  }, "Apply")))));
}

DateRangePicker.propTypes = {
  endDate: propTypes.instanceOf(Date),
  format: propTypes.string,
  onChange: propTypes.func,
  startDate: propTypes.instanceOf(Date)
};
DateRangePicker.defaultProps = {
  format: 'MM/DD/YYYY',
  onChange: function onChange() {}
};

export default DateRangePicker;
//# sourceMappingURL=DateRangePicker.js.map
