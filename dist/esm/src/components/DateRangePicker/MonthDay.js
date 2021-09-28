import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled, { css } from 'styled-components';
import React, { useState } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';
import { HoverIndicator } from './components.js';
import { useTheme } from '../../theme/Theme2.js';
import { GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';

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
  const theme = useTheme();
  const dimmedSelectedColor = theme.selected.alpha(0.09);
  const [isHovered, setIsHovered] = useState(false);
  return /*#__PURE__*/React.createElement(_StyledDiv, _extends({
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false)
  }, props, {
    $_css: 4.5 * GU,
    $_css2: weekDay ? 3.5 * GU : 4.5 * GU,
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
    $_css6: (rangeBoundaryBegin || rangeBoundaryEnd) && css(["z-index:1;&:before{content:'';position:absolute;top:0;", ":0;z-index:0;background:", ";width:50%;height:100%;}"], rangeBoundaryBegin ? 'right' : 'left', dimmedSelectedColor),
    $_css7: isHovered && css(["> *{z-index:1;}"]),
    $_css8: today && css(["color:", ";font-weight:600;"], theme.selected),
    $_css9: weekDay && css(["pointer-events:none;color:", ";text-transform:uppercase;"], theme.contentSecondary)
  }), isHovered ? /*#__PURE__*/React.createElement(HoverIndicator, {
    theme: theme,
    selected: selected
  }) : null, /*#__PURE__*/React.createElement(_StyledSpan, {
    $_css10: textStyle(weekDay ? 'body4' : 'body3')
  }, children), today ? /*#__PURE__*/React.createElement(_StyledDiv2, {
    $_css11: selected ? theme.surface : theme.selected
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

function WrappedMonthDay({
  onClick,
  ...props
}) {
  if (onClick && !props.disabled) {
    return /*#__PURE__*/React.createElement(_StyledButtonBase, {
      onClick: onClick,
      $_css12: 4.5 * GU,
      $_css13: props.weekDay ? 3.5 * GU : 4.5 * GU
    }, /*#__PURE__*/React.createElement(MonthDay, props));
  } else {
    return /*#__PURE__*/React.createElement(MonthDay, props);
  }
}

WrappedMonthDay.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  inRange: PropTypes.bool,
  rangeBoundaryBegin: PropTypes.bool,
  rangeBoundaryEnd: PropTypes.bool,
  today: PropTypes.bool,
  weekDay: PropTypes.bool,
  onClick: PropTypes.func
};

var _StyledDiv = _styled("div").withConfig({
  displayName: "MonthDay___StyledDiv",
  componentId: "sc-ngrxyo-0"
})(["position:relative;display:flex;align-items:center;justify-content:center;width:", "px;height:", "px;border-radius:50%;cursor:pointer;user-select:none;margin-bottom:1px;", ";", " ", " ", " ", " ", " ", " &:after{display:block;content:'';margin-top:100%;}"], p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5, p => p.$_css6, p => p.$_css7, p => p.$_css8, p => p.$_css9);

var _StyledSpan = _styled("span").withConfig({
  displayName: "MonthDay___StyledSpan",
  componentId: "sc-ngrxyo-1"
})(["", ";"], p => p.$_css10);

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "MonthDay___StyledDiv2",
  componentId: "sc-ngrxyo-2"
})(["position:absolute;bottom:1px;font-size:9px;color:", ";"], p => p.$_css11);

var _StyledButtonBase = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "MonthDay___StyledButtonBase",
  componentId: "sc-ngrxyo-3"
})(["display:flex;width:", "px;height:", "px;margin:0;"], p => p.$_css12, p => p.$_css13);

export { WrappedMonthDay as default };
//# sourceMappingURL=MonthDay.js.map
