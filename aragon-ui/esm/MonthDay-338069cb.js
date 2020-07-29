import { _ as _slicedToArray } from './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import React, { useState } from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import { P as PropTypes } from './index-097535f1.js';
import './defineProperty-a0480c32.js';
import './toConsumableArray-127424c2.js';
import _styled, { css } from 'styled-components';
import './getPrototypeOf-b96da1e1.js';
import './color.js';
import './components.js';
import './contains-component.js';
import './css.js';
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
import { GU } from './constants.js';
import './breakpoints.js';
import './springs.js';
import { textStyle } from './text-styles.js';
import './theme-dark.js';
import './theme-light.js';
import { useTheme } from './Theme.js';
import { _ as _extends } from './extends-db4f0c26.js';
import { _ as _objectWithoutProperties } from './objectWithoutProperties-234758e1.js';
import ButtonBase from './ButtonBase.js';
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
import IconLeft from './IconLeft.js';
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
import IconRight from './IconRight.js';
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

var HoverIndicator = _styled.span.withConfig({
  displayName: "components__HoverIndicator",
  componentId: "lxakqh-0"
})(["width:100%;height:100%;position:absolute;border-radius:50%;", ""], function (_ref) {
  var theme = _ref.theme,
      selected = _ref.selected;
  return css(["background:", ";border:2px solid ", ";"], selected ? theme.selected : theme.surface, theme.accent);
});

var _StyledButtonBase = _styled(ButtonBase).withConfig({
  displayName: "components___StyledButtonBase",
  componentId: "lxakqh-1"
})(["font-size:9px;padding:5px 4px 0 4px;margin-top:-4px;color:", ";&:hover{color:inherit;}"], function (p) {
  return p._css;
});

var ArrowButton = function ArrowButton(props) {
  var theme = useTheme();
  return /*#__PURE__*/React.createElement(_StyledButtonBase, _extends({
    focusRingRadius: GU * 2
  }, props, {
    _css: theme.hint
  }));
};

var SelectorWrapper = _styled.div.withConfig({
  displayName: "components__SelectorWrapper",
  componentId: "lxakqh-2"
})(["display:flex;align-items:center;justify-content:space-between;margin-bottom:", "px;span{", "}"], 1 * GU, function (_ref2) {
  var small = _ref2.small,
      theme = _ref2.theme;
  return css(["", ";", ""], textStyle(small ? 'label2' : 'body2'), small && css(["color:", ";font-weight:600;"], theme.hint));
}); // eslint-disable-next-line react/prop-types

function Selector(_ref3) {
  var prev = _ref3.prev,
      next = _ref3.next,
      children = _ref3.children,
      small = _ref3.small;
  var theme = useTheme();
  return /*#__PURE__*/React.createElement(SelectorWrapper, {
    small: small,
    theme: theme
  }, /*#__PURE__*/React.createElement(ArrowButton, {
    onClick: prev
  }, /*#__PURE__*/React.createElement(IconLeft, {
    size: "small"
  })), /*#__PURE__*/React.createElement("span", null, children), /*#__PURE__*/React.createElement(ArrowButton, {
    onClick: next
  }, /*#__PURE__*/React.createElement(IconRight, {
    size: "small"
  })));
}

var _StyledDiv = _styled("div").withConfig({
  displayName: "MonthDay___StyledDiv",
  componentId: "ngrxyo-0"
})(["position:relative;display:flex;align-items:center;justify-content:center;width:", "px;height:", "px;border-radius:50%;cursor:pointer;user-select:none;margin-bottom:1px;", ";", " ", " ", " ", " ", " ", " &:after{display:block;content:'';margin-top:100%;}"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
});

var _StyledSpan = _styled("span").withConfig({
  displayName: "MonthDay___StyledSpan",
  componentId: "ngrxyo-1"
})(["", ";"], function (p) {
  return p._css10;
});

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "MonthDay___StyledDiv2",
  componentId: "ngrxyo-2"
})(["position:absolute;bottom:1px;font-size:9px;color:", ";"], function (p) {
  return p._css11;
});

function MonthDay(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      inRange = _ref.inRange,
      rangeBoundaryBegin = _ref.rangeBoundaryBegin,
      rangeBoundaryEnd = _ref.rangeBoundaryEnd,
      selected = _ref.selected,
      today = _ref.today,
      weekDay = _ref.weekDay,
      props = _objectWithoutProperties(_ref, ["children", "disabled", "inRange", "rangeBoundaryBegin", "rangeBoundaryEnd", "selected", "today", "weekDay"]);

  var theme = useTheme();
  var dimmedSelectedColor = theme.selected.alpha(0.09);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isHovered = _useState2[0],
      setIsHovered = _useState2[1];

  return /*#__PURE__*/React.createElement(_StyledDiv, _extends({
    onMouseEnter: function onMouseEnter() {
      return setIsHovered(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsHovered(false);
    }
  }, props, {
    _css: 4.5 * GU,
    _css2: weekDay ? 3.5 * GU : 4.5 * GU,
    _css3: disabled ? "\n                pointer-events: none;\n                opacity: 0;\n              " : '',
    _css4: selected && !disabled ? "\n                &&& {\n                  background: ".concat(theme.selected, ";\n                  color: ").concat(theme.positiveContent, ";\n                }\n              ") : '',
    _css5: inRange && !selected && !disabled ? "\n                background: ".concat(dimmedSelectedColor, ";\n                border-radius: 0;\n              ") : '',
    _css6: (rangeBoundaryBegin || rangeBoundaryEnd) && css(["z-index:1;&:before{content:'';position:absolute;top:0;", ":0;z-index:0;background:", ";width:50%;height:100%;}"], rangeBoundaryBegin ? 'right' : 'left', dimmedSelectedColor),
    _css7: isHovered && css(["> *{z-index:1;}"]),
    _css8: today && css(["color:", ";font-weight:600;"], theme.selected),
    _css9: weekDay && css(["pointer-events:none;color:", ";text-transform:uppercase;"], theme.contentSecondary)
  }), isHovered ? /*#__PURE__*/React.createElement(HoverIndicator, {
    theme: theme,
    selected: selected
  }) : null, /*#__PURE__*/React.createElement(_StyledSpan, {
    _css10: textStyle(weekDay ? 'body4' : 'body3')
  }, children), today ? /*#__PURE__*/React.createElement(_StyledDiv2, {
    _css11: selected ? theme.surface : theme.selected
  }, "\u25CF") : null);
}

MonthDay.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  inRange: PropTypes.bool,
  rangeBoundaryBegin: PropTypes.bool,
  rangeBoundaryEnd: PropTypes.bool,
  today: PropTypes.bool,
  weekDay: PropTypes.bool
};

var _StyledButtonBase$1 = _styled(ButtonBase).withConfig({
  displayName: "MonthDay___StyledButtonBase",
  componentId: "ngrxyo-3"
})(["display:flex;width:", "px;height:", "px;margin:0;"], function (p) {
  return p._css12;
}, function (p) {
  return p._css13;
});

function WrappedMonthDay(_ref2) {
  var onClick = _ref2.onClick,
      props = _objectWithoutProperties(_ref2, ["onClick"]);

  if (onClick && !props.disabled) {
    return /*#__PURE__*/React.createElement(_StyledButtonBase$1, {
      onClick: onClick,
      _css12: 4.5 * GU,
      _css13: props.weekDay ? 3.5 * GU : 4.5 * GU
    }, /*#__PURE__*/React.createElement(MonthDay, props));
  } else {
    return /*#__PURE__*/React.createElement(MonthDay, props);
  }
}

export { WrappedMonthDay as M, Selector as S };
//# sourceMappingURL=MonthDay-338069cb.js.map
