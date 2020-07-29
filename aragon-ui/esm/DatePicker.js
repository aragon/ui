import { _ as _slicedToArray } from './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import React, { useState } from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import { P as PropTypes } from './index-097535f1.js';
import './defineProperty-a0480c32.js';
import './toConsumableArray-127424c2.js';
import _styled from 'styled-components';
import './getPrototypeOf-b96da1e1.js';
import './color.js';
import './components.js';
import './contains-component.js';
import './css.js';
import { d as dayjs } from './dayjs.min-e57fb69a.js';
import { eachDayOfInterval } from './date.js';
import './miscellaneous.js';
import './environment.js';
import './font.js';
import './math-e6d0e93a.js';
import './characters.js';
import './format.js';
import './keycodes.js';
import './url.js';
import './web3.js';
import { GU } from './constants.js';
import './breakpoints.js';
import './springs.js';
import './text-styles.js';
import './theme-dark.js';
import './theme-light.js';
import './Theme.js';
import './extends-db4f0c26.js';
import { _ as _objectWithoutProperties } from './objectWithoutProperties-234758e1.js';
import './index-422d37c0.js';
import './FocusVisible.js';
import './ButtonBase.js';
import './IconPropTypes-aab7337d.js';
import './IconAddUser.js';
import './IconAlert.js';
import './IconAlignCenter.js';
import './IconAlignJustify.js';
import './IconAlignLeft.js';
import './IconAlignRight.js';
import './IconAragon.js';
import './IconArrowDown.js';
import './IconArrowLeft.js';
import './IconArrowRight.js';
import './IconArrowUp.js';
import './IconAtSign.js';
import './IconBlock.js';
import './IconBookmark.js';
import './IconCalendar.js';
import './IconCanvas.js';
import './IconCaution.js';
import './IconCenter.js';
import './IconChart.js';
import './IconChat.js';
import './IconCheck.js';
import './IconChip.js';
import './IconCircleCheck.js';
import './IconCircleMinus.js';
import './IconCirclePlus.js';
import './IconClock.js';
import './IconCloudDownload.js';
import './IconCloudUpload.js';
import './IconCoin.js';
import './IconConfiguration.js';
import './IconConnect.js';
import './IconConnection.js';
import './IconConsole.js';
import './IconCopy.js';
import './IconCross.js';
import './IconDashedSquare.js';
import './IconDown.js';
import './IconDownload.js';
import './IconEdit.js';
import './IconEllipsis.js';
import './IconEnter.js';
import './IconEthereum.js';
import './IconExternal.js';
import './IconFile.js';
import './IconFilter.js';
import './IconFlag.js';
import './IconFolder.js';
import './IconGraph2.js';
import './IconGraph.js';
import './IconGrid.js';
import './IconGroup.js';
import './IconHash.js';
import './IconHeart.js';
import './IconHide.js';
import './IconHome.js';
import './IconImage.js';
import './IconInfo.js';
import './IconLabel.js';
import './IconLayers.js';
import './IconLeft.js';
import './IconLink.js';
import './IconLocation.js';
import './IconLock.js';
import './IconMail.js';
import './IconMaximize.js';
import './IconMenu.js';
import './IconMinimize.js';
import './IconMinus.js';
import './IconMove.js';
import './IconNoPicture.js';
import './IconPicture.js';
import './IconPlus.js';
import './IconPower.js';
import './IconPrint.js';
import './IconProhibited.js';
import './IconQuestion.js';
import './IconRefresh.js';
import './IconRemoveUser.js';
import './IconRight.js';
import './IconRotateLeft.js';
import './IconRotateRight.js';
import './IconSearch.js';
import './IconSettings.js';
import './IconShare.js';
import './IconSquareMinus.js';
import './IconSquarePlus.js';
import './IconSquare.js';
import './IconStarFilled.js';
import './IconStar.js';
import './IconSwap.js';
import './IconTarget.js';
import './IconToken.js';
import './IconTrash.js';
import './IconUnlock.js';
import './IconUp.js';
import './IconUpload.js';
import './IconUser.js';
import './IconView.js';
import './IconVote.js';
import './IconWallet.js';
import './IconWarning.js';
import './IconWorld.js';
import './IconWrite.js';
import './IconZoomIn.js';
import './IconZoomOut.js';
import { S as Selector, M as MonthDay } from './MonthDay-338069cb.js';

var _StyledDiv = _styled("div").withConfig({
  displayName: "DatePicker___StyledDiv",
  componentId: "sc-6xp23y-0"
})(["display:grid;"]);

var _StyledDiv2 = _styled("div").withConfig({
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
      props = _objectWithoutProperties(_ref, ["initialDate", "onSelect", "datesRangeStart", "datesRangeEnd", "hideYearSelector", "yearFormat", "hideMonthSelector", "monthFormat", "monthYearFormat", "hideWeekDays", "weekDayFormat"]);

  var _useState = useState(initialDate),
      _useState2 = _slicedToArray(_useState, 2),
      selectedDate = _useState2[0],
      setSelectedDate = _useState2[1];

  var setDate = function setDate(_ref2) {
    var year = _ref2.year,
        add = _ref2.add;
    return function (event) {
      setSelectedDate(dayjs(selectedDate).startOf('month')[add ? 'add' : 'subtract'](1, year ? 'year' : 'month').toDate());
    };
  };

  var today = dayjs().startOf('day').toDate();
  var selectedDayjs = dayjs(selectedDate || today);

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

  return /*#__PURE__*/React.createElement(_StyledDiv, props, !hideYearSelector && /*#__PURE__*/React.createElement(Selector, {
    prev: setDate({
      year: true,
      add: false
    }),
    next: setDate({
      year: true,
      add: true
    }),
    small: true
  }, selectedDayjs.format(yearFormat)), !hideMonthSelector && /*#__PURE__*/React.createElement(Selector, {
    prev: setDate({
      year: false,
      add: false
    }),
    next: setDate({
      year: false,
      add: true
    })
  }, selectedDayjs.format(!hideYearSelector ? monthFormat : monthYearFormat)), /*#__PURE__*/React.createElement(_StyledDiv2, {
    _css: 31.5 * GU
  }, !hideWeekDays && eachDayOfInterval({
    start: selectedDayjs.startOf('week'),
    end: selectedDayjs.endOf('week')
  }).map(function (day) {
    var dayJs = dayjs(day);
    return /*#__PURE__*/React.createElement(MonthDay, {
      key: dayJs.format('dd'),
      weekDay: true
    }, dayJs.format(weekDayFormat));
  }), eachDayOfInterval({
    start: selectedDayjs.startOf('month').startOf('week'),
    end: selectedDayjs.endOf('month').endOf('week')
  }).map(function (day) {
    var dayJs = dayjs(day);
    return /*#__PURE__*/React.createElement(MonthDay, {
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
  datesRangeStart: PropTypes.instanceOf(Date),

  /**
   * For displaying a selected dates range - end
   */
  datesRangeEnd: PropTypes.instanceOf(Date),

  /**
   * Initial date - calendar will start from here.
   */
  initialDate: PropTypes.instanceOf(Date),
  // Events
  onSelect: PropTypes.func,
  // Visibility
  hideMonthSelector: PropTypes.bool,
  hideWeekDays: PropTypes.bool,
  hideYearSelector: PropTypes.bool,
  // Formatting
  dayFormat: PropTypes.string,
  monthFormat: PropTypes.string,
  monthYearFormat: PropTypes.string,
  weekDayFormat: PropTypes.string,
  yearFormat: PropTypes.string
};
DatePicker.defaultProps = {
  onSelect: function onSelect() {},
  dayFormat: 'D',
  monthFormat: 'MMMM',
  monthYearFormat: 'MMMM YYYY',
  weekDayFormat: 'ddd',
  yearFormat: 'YYYY'
};

export default DatePicker;
//# sourceMappingURL=DatePicker.js.map
