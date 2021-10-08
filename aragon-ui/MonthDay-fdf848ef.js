'use strict';

var _extends = require('./extends-023d783e.js');
var slicedToArray = require('./slicedToArray-a8a77f0e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-37353731.js');
var ButtonBase = require('./ButtonBase.js');
var Theme = require('./Theme.js');
var IconLeft = require('./IconLeft.js');
var IconRight = require('./IconRight.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var HoverIndicator = _styled__default['default'].span.withConfig({
  displayName: "components__HoverIndicator",
  componentId: "lxakqh-0"
})(["width:100%;height:100%;position:absolute;border-radius:50%;", ""], function (_ref) {
  var theme = _ref.theme,
      selected = _ref.selected;
  return _styled.css(["background:", ";border:2px solid ", ";"], selected ? theme.selected : theme.surface, theme.accent);
});

var _StyledButtonBase$1 = _styled__default['default'](ButtonBase['default']).withConfig({
  displayName: "components___StyledButtonBase",
  componentId: "lxakqh-1"
})(["font-size:9px;padding:5px 4px 0 4px;margin-top:-4px;color:", ";&:hover{color:inherit;}"], function (p) {
  return p._css;
});

var ArrowButton = function ArrowButton(props) {
  var theme = Theme.useTheme();
  return /*#__PURE__*/React__default['default'].createElement(_StyledButtonBase$1, _extends._extends_1({
    focusRingRadius: constants.GU * 2
  }, props, {
    _css: theme.hint
  }));
};

var SelectorWrapper = _styled__default['default'].div.withConfig({
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
  return /*#__PURE__*/React__default['default'].createElement(SelectorWrapper, {
    small: small,
    theme: theme
  }, /*#__PURE__*/React__default['default'].createElement(ArrowButton, {
    onClick: prev
  }, /*#__PURE__*/React__default['default'].createElement(IconLeft['default'], {
    size: "small"
  })), /*#__PURE__*/React__default['default'].createElement("span", null, children), /*#__PURE__*/React__default['default'].createElement(ArrowButton, {
    onClick: next
  }, /*#__PURE__*/React__default['default'].createElement(IconRight['default'], {
    size: "small"
  })));
}

var _StyledDiv = _styled__default['default']("div").withConfig({
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

var _StyledSpan = _styled__default['default']("span").withConfig({
  displayName: "MonthDay___StyledSpan",
  componentId: "ngrxyo-1"
})(["", ";"], function (p) {
  return p._css10;
});

var _StyledDiv2 = _styled__default['default']("div").withConfig({
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
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["children", "disabled", "inRange", "rangeBoundaryBegin", "rangeBoundaryEnd", "selected", "today", "weekDay"]);

  var theme = Theme.useTheme();
  var dimmedSelectedColor = theme.selected.alpha(0.09);

  var _useState = React.useState(false),
      _useState2 = slicedToArray.slicedToArray(_useState, 2),
      isHovered = _useState2[0],
      setIsHovered = _useState2[1];

  return /*#__PURE__*/React__default['default'].createElement(_StyledDiv, _extends._extends_1({
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
  }), isHovered ? /*#__PURE__*/React__default['default'].createElement(HoverIndicator, {
    theme: theme,
    selected: selected
  }) : null, /*#__PURE__*/React__default['default'].createElement(_StyledSpan, {
    _css10: textStyles.textStyle(weekDay ? 'body4' : 'body3')
  }, children), today ? /*#__PURE__*/React__default['default'].createElement(_StyledDiv2, {
    _css11: selected ? theme.surface : theme.selected
  }, "\u25CF") : null);
}

MonthDay.propTypes = {
  children: index.propTypes.node,
  disabled: index.propTypes.bool,
  selected: index.propTypes.bool,
  inRange: index.propTypes.bool,
  rangeBoundaryBegin: index.propTypes.bool,
  rangeBoundaryEnd: index.propTypes.bool,
  today: index.propTypes.bool,
  weekDay: index.propTypes.bool
};

var _StyledButtonBase = _styled__default['default'](ButtonBase['default']).withConfig({
  displayName: "MonthDay___StyledButtonBase",
  componentId: "ngrxyo-3"
})(["display:flex;width:", "px;height:", "px;margin:0;"], function (p) {
  return p._css12;
}, function (p) {
  return p._css13;
});

function WrappedMonthDay(_ref2) {
  var onClick = _ref2.onClick,
      props = objectWithoutProperties.objectWithoutProperties(_ref2, ["onClick"]);

  if (onClick && !props.disabled) {
    return /*#__PURE__*/React__default['default'].createElement(_StyledButtonBase, {
      onClick: onClick,
      _css12: 4.5 * constants.GU,
      _css13: props.weekDay ? 3.5 * constants.GU : 4.5 * constants.GU
    }, /*#__PURE__*/React__default['default'].createElement(MonthDay, props));
  } else {
    return /*#__PURE__*/React__default['default'].createElement(MonthDay, props);
  }
}

WrappedMonthDay.propTypes = {
  children: index.propTypes.node,
  disabled: index.propTypes.bool,
  selected: index.propTypes.bool,
  inRange: index.propTypes.bool,
  rangeBoundaryBegin: index.propTypes.bool,
  rangeBoundaryEnd: index.propTypes.bool,
  today: index.propTypes.bool,
  weekDay: index.propTypes.bool,
  onClick: index.propTypes.func
};

exports.Selector = Selector;
exports.WrappedMonthDay = WrappedMonthDay;
//# sourceMappingURL=MonthDay-fdf848ef.js.map
