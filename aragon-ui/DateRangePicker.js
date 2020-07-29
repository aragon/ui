'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var slicedToArray = require('./slicedToArray-0711941d.js');
require('./unsupportedIterableToArray-68db1d3b.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
var index = require('./index-b0606964.js');
require('./defineProperty-0921a47c.js');
require('./toConsumableArray-d8a4a2c3.js');
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
require('./getPrototypeOf-2a661a20.js');
require('./color.js');
require('./components.js');
require('./contains-component.js');
require('./css.js');
var dayjs_min = require('./dayjs.min-e07657bf.js');
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
var constants = require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');
var _extends$1 = require('./extends-40571110.js');
require('./objectWithoutProperties-35db8ab0.js');
require('./index-ecc57c9f.js');
require('./isObject-ec755c87.js');
var Viewport = require('./Viewport-15101437.js');
require('./Layout.js');
require('./FocusVisible.js');
require('./ButtonBase.js');
require('./IconPropTypes-56de5759.js');
require('./IconAddUser.js');
require('./IconAlert.js');
require('./IconAlignCenter.js');
require('./IconAlignJustify.js');
require('./IconAlignLeft.js');
require('./IconAlignRight.js');
require('./IconAragon.js');
require('./IconArrowDown.js');
require('./IconArrowLeft.js');
require('./IconArrowRight.js');
require('./IconArrowUp.js');
require('./IconAtSign.js');
require('./IconBlock.js');
require('./IconBookmark.js');
require('./IconCalendar.js');
require('./IconCanvas.js');
require('./IconCaution.js');
require('./IconCenter.js');
require('./IconChart.js');
require('./IconChat.js');
require('./IconCheck.js');
require('./IconChip.js');
require('./IconCircleCheck.js');
require('./IconCircleMinus.js');
require('./IconCirclePlus.js');
require('./IconClock.js');
require('./IconCloudDownload.js');
require('./IconCloudUpload.js');
require('./IconCoin.js');
require('./IconConfiguration.js');
require('./IconConnect.js');
require('./IconConnection.js');
require('./IconConsole.js');
require('./IconCopy.js');
require('./IconCross.js');
require('./IconDashedSquare.js');
require('./IconDown.js');
require('./IconDownload.js');
require('./IconEdit.js');
require('./IconEllipsis.js');
require('./IconEnter.js');
require('./IconEthereum.js');
require('./IconExternal.js');
require('./IconFile.js');
require('./IconFilter.js');
require('./IconFlag.js');
require('./IconFolder.js');
require('./IconGraph2.js');
require('./IconGraph.js');
require('./IconGrid.js');
require('./IconGroup.js');
require('./IconHash.js');
require('./IconHeart.js');
require('./IconHide.js');
require('./IconHome.js');
require('./IconImage.js');
require('./IconInfo.js');
require('./IconLabel.js');
require('./IconLayers.js');
require('./IconLeft.js');
require('./IconLink.js');
require('./IconLocation.js');
require('./IconLock.js');
require('./IconMail.js');
require('./IconMaximize.js');
require('./IconMenu.js');
require('./IconMinimize.js');
require('./IconMinus.js');
require('./IconMove.js');
require('./IconNoPicture.js');
require('./IconPicture.js');
require('./IconPlus.js');
require('./IconPower.js');
require('./IconPrint.js');
require('./IconProhibited.js');
require('./IconQuestion.js');
require('./IconRefresh.js');
require('./IconRemoveUser.js');
require('./IconRight.js');
require('./IconRotateLeft.js');
require('./IconRotateRight.js');
require('./IconSearch.js');
require('./IconSettings.js');
require('./IconShare.js');
require('./IconSquareMinus.js');
require('./IconSquarePlus.js');
require('./IconSquare.js');
require('./IconStarFilled.js');
require('./IconStar.js');
require('./IconSwap.js');
require('./IconTarget.js');
require('./IconToken.js');
require('./IconTrash.js');
require('./IconUnlock.js');
require('./IconUp.js');
require('./IconUpload.js');
require('./IconUser.js');
require('./IconView.js');
require('./IconVote.js');
require('./IconWallet.js');
require('./IconWarning.js');
require('./IconWorld.js');
require('./IconWrite.js');
require('./IconZoomIn.js');
require('./IconZoomOut.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
require('./web-d0294535.js');
var Button = require('./Button.js');
require('./getDisplayName-7ab6d318.js');
require('./index-bc84a358.js');
require('./index-0db71dc1.js');
require('./RootPortal.js');
require('./proptypes-5b34673d.js');
var Popover = require('./Popover.js');
require('./observe.js');
require('./index-030bfca8.js');
require('./providers.js');
require('./MonthDay-ddc3ab43.js');
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
      _useState2 = slicedToArray._slicedToArray(_useState, 2),
      showPicker = _useState2[0],
      setShowPicker = _useState2[1];

  var _useState3 = React.useState(startDateProp),
      _useState4 = slicedToArray._slicedToArray(_useState3, 2),
      startDate = _useState4[0],
      setStartDate = _useState4[1];

  var _useState5 = React.useState(endDateProp),
      _useState6 = slicedToArray._slicedToArray(_useState5, 2),
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
        start: dayjs_min.dayjs(startDate).startOf('day').toDate(),
        end: dayjs_min.dayjs(endDate).endOf('day').toDate()
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
      startText: _startDate ? dayjs_min.dayjs(_startDate).format(format) : consts.START_DATE,
      endText: _endDate ? dayjs_min.dayjs(_endDate).format(format) : consts.END_DATE
    };
  }, [endDate, endDateProp, format, showPicker, startDate, startDateProp]);
  var compactMode = Viewport.useViewport().below('medium');
  var displayMonthBeforeOnLeft = React.useMemo(function () {
    // If both dates are in the same month, use the right calendar
    // for it, and display month before on the left calendar.
    var propsDatesInSameMonth = startDateProp && endDateProp && dayjs_min.dayjs(startDateProp).isSame(dayjs_min.dayjs(endDateProp), 'month');
    return !compactMode && (propsDatesInSameMonth || !startDateProp);
  }, [compactMode, endDateProp, startDateProp]);
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Labels.default, _extends$1._extends({
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
    initialDate: dayjs_min.dayjs(startDateProp || undefined).subtract(displayMonthBeforeOnLeft ? 1 : 0, 'month').toDate(),
    onSelect: handleDateClick
  }), !compactMode && /*#__PURE__*/React__default.createElement(_StyledDatePicker, {
    datesRangeEnd: endDate,
    datesRangeStart: startDate,
    initialDate: dayjs_min.dayjs(endDateProp || undefined).toDate(),
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
  endDate: index.PropTypes.instanceOf(Date),
  format: index.PropTypes.string,
  onChange: index.PropTypes.func,
  startDate: index.PropTypes.instanceOf(Date)
};
DateRangePicker.defaultProps = {
  format: 'MM/DD/YYYY',
  onChange: function onChange() {}
};

exports.default = DateRangePicker;
//# sourceMappingURL=DateRangePicker.js.map
