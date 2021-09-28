'use strict';

var _extends = require('./extends-5150c1f4.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var ButtonBase = require('./ButtonBase.js');
var Theme = require('./Theme.js');
var IconLeft = require('./IconLeft.js');
var IconRight = require('./IconRight.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const HoverIndicator = _styled__default["default"].span.withConfig({
  displayName: "components__HoverIndicator",
  componentId: "sc-lxakqh-0"
})(["width:100%;height:100%;position:absolute;border-radius:50%;", ""], ({
  theme,
  selected
}) => _styled.css(["background:", ";border:2px solid ", ";"], selected ? theme.selected : theme.surface, theme.accent));

const ArrowButton = props => {
  const theme = Theme.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(_StyledButtonBase$1, _extends._extends({
    focusRingRadius: constants.GU * 2
  }, props, {
    $_css: theme.hint
  }));
};

const SelectorWrapper = _styled__default["default"].div.withConfig({
  displayName: "components__SelectorWrapper",
  componentId: "sc-lxakqh-1"
})(["display:flex;align-items:center;justify-content:space-between;margin-bottom:", "px;span{", "}"], 1 * constants.GU, ({
  small,
  theme
}) => _styled.css(["", ";", ""], textStyles.textStyle(small ? 'label2' : 'body2'), small && _styled.css(["color:", ";font-weight:600;"], theme.hint))); // eslint-disable-next-line react/prop-types

function Selector({
  prev,
  next,
  children,
  small
}) {
  const theme = Theme.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(SelectorWrapper, {
    small: small,
    theme: theme
  }, /*#__PURE__*/React__default["default"].createElement(ArrowButton, {
    onClick: prev
  }, /*#__PURE__*/React__default["default"].createElement(IconLeft["default"], {
    size: "small"
  })), /*#__PURE__*/React__default["default"].createElement("span", null, children), /*#__PURE__*/React__default["default"].createElement(ArrowButton, {
    onClick: next
  }, /*#__PURE__*/React__default["default"].createElement(IconRight["default"], {
    size: "small"
  })));
}

var _StyledButtonBase$1 = _styled__default["default"](ButtonBase["default"]).withConfig({
  displayName: "components___StyledButtonBase",
  componentId: "sc-lxakqh-2"
})(["font-size:9px;padding:5px 4px 0 4px;margin-top:-4px;color:", ";&:hover{color:inherit;}"], p => p.$_css);

function MonthDay({
  children,
  disabled,
  inRange,
  rangeBoundaryBegin,
  rangeBoundaryEnd,
  selected,
  today,
  weekDay,
  ...props
}) {
  const theme = Theme.useTheme();
  const dimmedSelectedColor = theme.selected.alpha(0.09);
  const [isHovered, setIsHovered] = React.useState(false);
  return /*#__PURE__*/React__default["default"].createElement(_StyledDiv, _extends._extends({
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false)
  }, props, {
    $_css: 4.5 * constants.GU,
    $_css2: weekDay ? 3.5 * constants.GU : 4.5 * constants.GU,
    $_css3: disabled ? `
                pointer-events: none;
                opacity: 0;
              ` : '',
    $_css4: selected && !disabled ? `
                &&& {
                  background: ${theme.selected};
                  color: ${theme.positiveContent};
                }
              ` : '',
    $_css5: inRange && !selected && !disabled ? `
                background: ${dimmedSelectedColor};
                border-radius: 0;
              ` : '',
    $_css6: (rangeBoundaryBegin || rangeBoundaryEnd) && _styled.css(["z-index:1;&:before{content:'';position:absolute;top:0;", ":0;z-index:0;background:", ";width:50%;height:100%;}"], rangeBoundaryBegin ? 'right' : 'left', dimmedSelectedColor),
    $_css7: isHovered && _styled.css(["> *{z-index:1;}"]),
    $_css8: today && _styled.css(["color:", ";font-weight:600;"], theme.selected),
    $_css9: weekDay && _styled.css(["pointer-events:none;color:", ";text-transform:uppercase;"], theme.contentSecondary)
  }), isHovered ? /*#__PURE__*/React__default["default"].createElement(HoverIndicator, {
    theme: theme,
    selected: selected
  }) : null, /*#__PURE__*/React__default["default"].createElement(_StyledSpan, {
    $_css10: textStyles.textStyle(weekDay ? 'body4' : 'body3')
  }, children), today ? /*#__PURE__*/React__default["default"].createElement(_StyledDiv2, {
    $_css11: selected ? theme.surface : theme.selected
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

function WrappedMonthDay({
  onClick,
  ...props
}) {
  if (onClick && !props.disabled) {
    return /*#__PURE__*/React__default["default"].createElement(_StyledButtonBase, {
      onClick: onClick,
      $_css12: 4.5 * constants.GU,
      $_css13: props.weekDay ? 3.5 * constants.GU : 4.5 * constants.GU
    }, /*#__PURE__*/React__default["default"].createElement(MonthDay, props));
  } else {
    return /*#__PURE__*/React__default["default"].createElement(MonthDay, props);
  }
}

WrappedMonthDay.propTypes = {
  children: index.PropTypes.node,
  disabled: index.PropTypes.bool,
  selected: index.PropTypes.bool,
  inRange: index.PropTypes.bool,
  rangeBoundaryBegin: index.PropTypes.bool,
  rangeBoundaryEnd: index.PropTypes.bool,
  today: index.PropTypes.bool,
  weekDay: index.PropTypes.bool,
  onClick: index.PropTypes.func
};

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "MonthDay___StyledDiv",
  componentId: "sc-ngrxyo-0"
})(["position:relative;display:flex;align-items:center;justify-content:center;width:", "px;height:", "px;border-radius:50%;cursor:pointer;user-select:none;margin-bottom:1px;", ";", " ", " ", " ", " ", " ", " &:after{display:block;content:'';margin-top:100%;}"], p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5, p => p.$_css6, p => p.$_css7, p => p.$_css8, p => p.$_css9);

var _StyledSpan = _styled__default["default"]("span").withConfig({
  displayName: "MonthDay___StyledSpan",
  componentId: "sc-ngrxyo-1"
})(["", ";"], p => p.$_css10);

var _StyledDiv2 = _styled__default["default"]("div").withConfig({
  displayName: "MonthDay___StyledDiv2",
  componentId: "sc-ngrxyo-2"
})(["position:absolute;bottom:1px;font-size:9px;color:", ";"], p => p.$_css11);

var _StyledButtonBase = _styled__default["default"](ButtonBase["default"]).withConfig({
  displayName: "MonthDay___StyledButtonBase",
  componentId: "sc-ngrxyo-3"
})(["display:flex;width:", "px;height:", "px;margin:0;"], p => p.$_css12, p => p.$_css13);

exports.Selector = Selector;
exports.WrappedMonthDay = WrappedMonthDay;
//# sourceMappingURL=MonthDay-0bca20b0.js.map
