'use strict';

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
require('./dayjs.min-e07657bf.js');
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
var textStyles = require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');
var _extends$1 = require('./extends-40571110.js');
var objectWithoutProperties = require('./objectWithoutProperties-35db8ab0.js');
var ButtonBase = require('./ButtonBase.js');
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
var IconLeft = require('./IconLeft.js');
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
var IconRight = require('./IconRight.js');
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

var HoverIndicator = _styled__default.span.withConfig({
  displayName: "components__HoverIndicator",
  componentId: "lxakqh-0"
})(["width:100%;height:100%;position:absolute;border-radius:50%;", ""], function (_ref) {
  var theme = _ref.theme,
      selected = _ref.selected;
  return _styled.css(["background:", ";border:2px solid ", ";"], selected ? theme.selected : theme.surface, theme.accent);
});

var _StyledButtonBase = _styled__default(ButtonBase.default).withConfig({
  displayName: "components___StyledButtonBase",
  componentId: "lxakqh-1"
})(["font-size:9px;padding:5px 4px 0 4px;margin-top:-4px;color:", ";&:hover{color:inherit;}"], function (p) {
  return p._css;
});

var ArrowButton = function ArrowButton(props) {
  var theme = Theme.useTheme();
  return /*#__PURE__*/React__default.createElement(_StyledButtonBase, _extends$1._extends({
    focusRingRadius: constants.GU * 2
  }, props, {
    _css: theme.hint
  }));
};

var SelectorWrapper = _styled__default.div.withConfig({
  displayName: "components__SelectorWrapper",
  componentId: "lxakqh-2"
})(["display:flex;align-items:center;justify-content:space-between;margin-bottom:", "px;span{", "}"], 1 * constants.GU, function (_ref2) {
  var small = _ref2.small,
      theme = _ref2.theme;
  return _styled.css(["", ";", ""], textStyles.textStyle(small ? 'label2' : 'body2'), small && _styled.css(["color:", ";font-weight:600;"], theme.hint));
}); // eslint-disable-next-line react/prop-types

function Selector(_ref3) {
  var prev = _ref3.prev,
      next = _ref3.next,
      children = _ref3.children,
      small = _ref3.small;
  var theme = Theme.useTheme();
  return /*#__PURE__*/React__default.createElement(SelectorWrapper, {
    small: small,
    theme: theme
  }, /*#__PURE__*/React__default.createElement(ArrowButton, {
    onClick: prev
  }, /*#__PURE__*/React__default.createElement(IconLeft.default, {
    size: "small"
  })), /*#__PURE__*/React__default.createElement("span", null, children), /*#__PURE__*/React__default.createElement(ArrowButton, {
    onClick: next
  }, /*#__PURE__*/React__default.createElement(IconRight.default, {
    size: "small"
  })));
}

var _StyledDiv = _styled__default("div").withConfig({
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

var _StyledSpan = _styled__default("span").withConfig({
  displayName: "MonthDay___StyledSpan",
  componentId: "ngrxyo-1"
})(["", ";"], function (p) {
  return p._css10;
});

var _StyledDiv2 = _styled__default("div").withConfig({
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
      props = objectWithoutProperties._objectWithoutProperties(_ref, ["children", "disabled", "inRange", "rangeBoundaryBegin", "rangeBoundaryEnd", "selected", "today", "weekDay"]);

  var theme = Theme.useTheme();
  var dimmedSelectedColor = theme.selected.alpha(0.09);

  var _useState = React.useState(false),
      _useState2 = slicedToArray._slicedToArray(_useState, 2),
      isHovered = _useState2[0],
      setIsHovered = _useState2[1];

  return /*#__PURE__*/React__default.createElement(_StyledDiv, _extends$1._extends({
    onMouseEnter: function onMouseEnter() {
      return setIsHovered(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsHovered(false);
    }
  }, props, {
    _css: 4.5 * constants.GU,
    _css2: weekDay ? 3.5 * constants.GU : 4.5 * constants.GU,
    _css3: disabled ? "\n                pointer-events: none;\n                opacity: 0;\n              " : '',
    _css4: selected && !disabled ? "\n                &&& {\n                  background: ".concat(theme.selected, ";\n                  color: ").concat(theme.positiveContent, ";\n                }\n              ") : '',
    _css5: inRange && !selected && !disabled ? "\n                background: ".concat(dimmedSelectedColor, ";\n                border-radius: 0;\n              ") : '',
    _css6: (rangeBoundaryBegin || rangeBoundaryEnd) && _styled.css(["z-index:1;&:before{content:'';position:absolute;top:0;", ":0;z-index:0;background:", ";width:50%;height:100%;}"], rangeBoundaryBegin ? 'right' : 'left', dimmedSelectedColor),
    _css7: isHovered && _styled.css(["> *{z-index:1;}"]),
    _css8: today && _styled.css(["color:", ";font-weight:600;"], theme.selected),
    _css9: weekDay && _styled.css(["pointer-events:none;color:", ";text-transform:uppercase;"], theme.contentSecondary)
  }), isHovered ? /*#__PURE__*/React__default.createElement(HoverIndicator, {
    theme: theme,
    selected: selected
  }) : null, /*#__PURE__*/React__default.createElement(_StyledSpan, {
    _css10: textStyles.textStyle(weekDay ? 'body4' : 'body3')
  }, children), today ? /*#__PURE__*/React__default.createElement(_StyledDiv2, {
    _css11: selected ? theme.surface : theme.selected
  }, "\u25CF") : null);
}

MonthDay.propTypes = {
  children: index.PropTypes.node,
  disabled: index.PropTypes.bool,
  selected: index.PropTypes.bool,
  inRange: index.PropTypes.bool,
  rangeBoundaryBegin: index.PropTypes.bool,
  rangeBoundaryEnd: index.PropTypes.bool,
  today: index.PropTypes.bool,
  weekDay: index.PropTypes.bool
};

var _StyledButtonBase$1 = _styled__default(ButtonBase.default).withConfig({
  displayName: "MonthDay___StyledButtonBase",
  componentId: "ngrxyo-3"
})(["display:flex;width:", "px;height:", "px;margin:0;"], function (p) {
  return p._css12;
}, function (p) {
  return p._css13;
});

function WrappedMonthDay(_ref2) {
  var onClick = _ref2.onClick,
      props = objectWithoutProperties._objectWithoutProperties(_ref2, ["onClick"]);

  if (onClick && !props.disabled) {
    return /*#__PURE__*/React__default.createElement(_StyledButtonBase$1, {
      onClick: onClick,
      _css12: 4.5 * constants.GU,
      _css13: props.weekDay ? 3.5 * constants.GU : 4.5 * constants.GU
    }, /*#__PURE__*/React__default.createElement(MonthDay, props));
  } else {
    return /*#__PURE__*/React__default.createElement(MonthDay, props);
  }
}

exports.MonthDay = WrappedMonthDay;
exports.Selector = Selector;
//# sourceMappingURL=MonthDay-ddc3ab43.js.map
