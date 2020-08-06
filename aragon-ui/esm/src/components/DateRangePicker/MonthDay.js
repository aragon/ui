import slicedToArray$1 from '../../../node_modules/@babel/runtime/helpers/slicedToArray.js';
import React$1, { useState } from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import _styled$1, { css } from 'styled-components';
import { GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';
import { useTheme } from '../../theme/Theme2.js';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties$1 from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';
import { HoverIndicator } from './components.js';

var _StyledDiv = _styled$1("div").withConfig({
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

var _StyledSpan = _styled$1("span").withConfig({
  displayName: "MonthDay___StyledSpan",
  componentId: "ngrxyo-1"
})(["", ";"], function (p) {
  return p._css10;
});

var _StyledDiv2 = _styled$1("div").withConfig({
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
      props = objectWithoutProperties$1(_ref, ["children", "disabled", "inRange", "rangeBoundaryBegin", "rangeBoundaryEnd", "selected", "today", "weekDay"]);

  var theme = useTheme();
  var dimmedSelectedColor = theme.selected.alpha(0.09);

  var _useState = useState(false),
      _useState2 = slicedToArray$1(_useState, 2),
      isHovered = _useState2[0],
      setIsHovered = _useState2[1];

  return /*#__PURE__*/React$1.createElement(_StyledDiv, _extends_1({
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
  }), isHovered ? /*#__PURE__*/React$1.createElement(HoverIndicator, {
    theme: theme,
    selected: selected
  }) : null, /*#__PURE__*/React$1.createElement(_StyledSpan, {
    _css10: textStyle(weekDay ? 'body4' : 'body3')
  }, children), today ? /*#__PURE__*/React$1.createElement(_StyledDiv2, {
    _css11: selected ? theme.surface : theme.selected
  }, "\u25CF") : null);
}

MonthDay.propTypes = {
  children: propTypes.node,
  disabled: propTypes.bool,
  selected: propTypes.bool,
  inRange: propTypes.bool,
  rangeBoundaryBegin: propTypes.bool,
  rangeBoundaryEnd: propTypes.bool,
  today: propTypes.bool,
  weekDay: propTypes.bool
};

var _StyledButtonBase = _styled$1(ButtonBaseWithFocus).withConfig({
  displayName: "MonthDay___StyledButtonBase",
  componentId: "ngrxyo-3"
})(["display:flex;width:", "px;height:", "px;margin:0;"], function (p) {
  return p._css12;
}, function (p) {
  return p._css13;
});

function WrappedMonthDay(_ref2) {
  var onClick = _ref2.onClick,
      props = objectWithoutProperties$1(_ref2, ["onClick"]);

  if (onClick && !props.disabled) {
    return /*#__PURE__*/React$1.createElement(_StyledButtonBase, {
      onClick: onClick,
      _css12: 4.5 * GU,
      _css13: props.weekDay ? 3.5 * GU : 4.5 * GU
    }, /*#__PURE__*/React$1.createElement(MonthDay, props));
  } else {
    return /*#__PURE__*/React$1.createElement(MonthDay, props);
  }
}

export default WrappedMonthDay;
//# sourceMappingURL=MonthDay.js.map
