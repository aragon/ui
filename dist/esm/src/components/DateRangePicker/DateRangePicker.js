import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import dayjs from '../../../node_modules/dayjs/dayjs.min.js';
import ButtonWithRef from '../Button/Button.js';
import { useViewport } from '../../providers/Viewport/Viewport.js';
import DatePicker from './DatePicker.js';
import Labels from './Labels.js';
import { START_DATE, END_DATE } from './consts.js';
import { handleDateSelect } from './utils.js';
import Popover from '../Popover/Popover.js';
import { useTheme } from '../../theme/Theme2.js';
import { RADIUS, GU } from '../../style/constants.js';

function DateRangePicker({
  format,
  endDate: endDateProp,
  onChange,
  startDate: startDateProp
}) {
  const theme = useTheme();
  const labelsRef = useRef();
  const [showPicker, setShowPicker] = useState(false);
  const [startDate, setStartDate] = useState(startDateProp);
  const [endDate, setEndDate] = useState(endDateProp); // on closing the picked, reset state

  useEffect(() => {
    if (!showPicker) {
      setStartDate(startDateProp);
      setEndDate(endDateProp);
    }
  }, [endDateProp, startDateProp, showPicker]);
  const handlePopoverClose = useCallback(() => setShowPicker(false), []);
  const handleLabelsClick = useCallback(() => {
    setShowPicker(show => !show);
  }, []);
  const handleDateClick = useCallback(date => {
    const result = handleDateSelect({
      date,
      startDate,
      endDate
    });
    result.startDate !== undefined && setStartDate(result.startDate);
    result.endDate !== undefined && setEndDate(result.endDate);
  }, [startDate, endDate]);
  const handleApply = useCallback(() => {
    setShowPicker(false);

    if (startDate && endDate) {
      onChange({
        start: dayjs(startDate).startOf('day').toDate(),
        end: dayjs(endDate).endOf('day').toDate()
      });
    }
  }, [endDate, onChange, startDate]);
  const handleClear = useCallback(() => {
    setStartDate(null);
    setEndDate(null);
    setShowPicker(false);
    onChange({
      start: null,
      end: null
    });
  }, [onChange]);
  const labelProps = useMemo(() => {
    const _startDate = showPicker ? startDate : startDateProp;

    const _endDate = showPicker ? endDate : endDateProp;

    return {
      startText: _startDate ? dayjs(_startDate).format(format) : START_DATE,
      endText: _endDate ? dayjs(_endDate).format(format) : END_DATE
    };
  }, [endDate, endDateProp, format, showPicker, startDate, startDateProp]);
  const compactMode = useViewport().below('medium');
  const displayMonthBeforeOnLeft = useMemo(() => {
    // If both dates are in the same month, use the right calendar
    // for it, and display month before on the left calendar.
    const propsDatesInSameMonth = startDateProp && endDateProp && dayjs(startDateProp).isSame(dayjs(endDateProp), 'month');
    return !compactMode && (propsDatesInSameMonth || !startDateProp);
  }, [compactMode, endDateProp, startDateProp]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Labels, _extends({
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
    $_css: 37.5 * GU + 2
  }, /*#__PURE__*/React.createElement(_StyledDiv, {
    $_css2: 2.5 * GU,
    $_css3: 3 * GU,
    $_css4: 3 * GU,
    $_css5: theme.border,
    $_css6: theme.surface
  }, /*#__PURE__*/React.createElement(_StyledDiv2, null, /*#__PURE__*/React.createElement(DatePicker, {
    datesRangeEnd: endDate,
    datesRangeStart: startDate,
    initialDate: dayjs(startDateProp || undefined).subtract(displayMonthBeforeOnLeft ? 1 : 0, 'month').toDate(),
    onSelect: handleDateClick
  }), !compactMode && /*#__PURE__*/React.createElement(_StyledDatePicker, {
    datesRangeEnd: endDate,
    datesRangeStart: startDate,
    initialDate: dayjs(endDateProp || undefined).toDate(),
    onSelect: handleDateClick,
    $_css7: 1 * GU
  })), /*#__PURE__*/React.createElement(_StyledDiv3, {
    $_css8: GU * 2.25,
    $_css9: compactMode ? '' : `
                    max-width: 247px;
                    margin-left: auto;
                  `
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
    $_css10: 1.5 * GU
  }, "Apply")))));
}

DateRangePicker.propTypes = {
  endDate: PropTypes.instanceOf(Date),
  format: PropTypes.string,
  onChange: PropTypes.func,
  startDate: PropTypes.instanceOf(Date)
};
DateRangePicker.defaultProps = {
  format: 'MM/DD/YYYY',
  onChange: () => {}
};

var _StyledPopover = _styled(Popover).withConfig({
  displayName: "DateRangePicker___StyledPopover",
  componentId: "sc-s3s5m9-0"
})(["min-width:", "px;border:0;filter:none;background:none;margin:2px 0 0 0;"], p => p.$_css);

var _StyledDiv = _styled("div").withConfig({
  displayName: "DateRangePicker___StyledDiv",
  componentId: "sc-s3s5m9-1"
})(["padding:", "px ", "px ", "px;border:1px solid ", ";border-radius:", "px;background:", ";"], p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5, RADIUS, p => p.$_css6);

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "DateRangePicker___StyledDiv2",
  componentId: "sc-s3s5m9-2"
})(["display:flex;flex-direction:row;align-items:baseline;"]);

var _StyledDatePicker = _styled(DatePicker).withConfig({
  displayName: "DateRangePicker___StyledDatePicker",
  componentId: "sc-s3s5m9-3"
})(["margin-left:", "px;"], p => p.$_css7);

var _StyledDiv3 = _styled("div").withConfig({
  displayName: "DateRangePicker___StyledDiv3",
  componentId: "sc-s3s5m9-4"
})(["display:flex;align-items:center;justify-content:space-between;margin-top:", "px;", ";"], p => p.$_css8, p => p.$_css9);

var _StyledButton = _styled(ButtonWithRef).withConfig({
  displayName: "DateRangePicker___StyledButton",
  componentId: "sc-s3s5m9-5"
})(["margin-left:", "px;"], p => p.$_css10);

export { DateRangePicker as default };
//# sourceMappingURL=DateRangePicker.js.map
