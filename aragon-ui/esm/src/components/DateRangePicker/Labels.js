import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import _styled from 'styled-components';
import React, { forwardRef } from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import { INPUT_BORDER, START_DATE, END_DATE } from './consts.js';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';
import IconCalendar from '../../icons/components/IconCalendar.js';
import { useTheme } from '../../theme/Theme2.js';
import { RADIUS, GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';

var _StyledDiv = _styled("div").withConfig({
  displayName: "Labels___StyledDiv",
  componentId: "sc-1is9uv6-0"
})(["position:relative;width:", "px;display:flex;justify-content:space-between;align-items:center;padding:7px 6px;border:", "px solid ", ";border-radius:", "px;background:", ";overflow:hidden;cursor:pointer;&:active{border-color:", ";}&:focus{outline:none;}"], function (p) {
  return p._css;
}, INPUT_BORDER, function (p) {
  return p._css2;
}, RADIUS, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
});

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "Labels___StyledDiv2",
  componentId: "sc-1is9uv6-1"
})(["display:flex;flex:1;justify-content:space-around;align-items:center;"]);

var _StyledDiv3 = _styled("div").withConfig({
  displayName: "Labels___StyledDiv3",
  componentId: "sc-1is9uv6-2"
})(["color:", ";text-align:center;", ""], function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

var _StyledDiv4 = _styled("div").withConfig({
  displayName: "Labels___StyledDiv4",
  componentId: "sc-1is9uv6-3"
})(["color:", ";font-size:13px;"], function (p) {
  return p._css7;
});

var _StyledDiv5 = _styled("div").withConfig({
  displayName: "Labels___StyledDiv5",
  componentId: "sc-1is9uv6-4"
})(["color:", ";text-align:center;", ""], function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
});

var _StyledDiv6 = _styled("div").withConfig({
  displayName: "Labels___StyledDiv6",
  componentId: "sc-1is9uv6-5"
})(["display:flex;padding:0 4px 0 10px;"]);

var _StyledIconCalendar = _styled(IconCalendar).withConfig({
  displayName: "Labels___StyledIconCalendar",
  componentId: "sc-1is9uv6-6"
})(["color:", ";"], function (p) {
  return p._css10;
});

var Labels = /*#__PURE__*/forwardRef(function Labels(_ref, ref) {
  var enabled = _ref.enabled,
      startText = _ref.startText,
      endText = _ref.endText,
      hasSetDates = _ref.hasSetDates,
      onClick = _ref.onClick,
      props = objectWithoutProperties(_ref, ["enabled", "startText", "endText", "hasSetDates", "onClick"]);

  var theme = useTheme();
  var hasNoStart = startText === START_DATE;
  var hasNoEnd = endText === END_DATE;
  return /*#__PURE__*/React.createElement(ButtonBaseWithFocus, {
    focusRingRadius: RADIUS,
    ref: ref,
    onClick: onClick
  }, /*#__PURE__*/React.createElement(_StyledDiv, _extends_1({}, props, {
    _css: 27.5 * GU,
    _css2: hasSetDates ? theme.accent : theme.border,
    _css3: theme.surface,
    _css4: theme.controlBorderPressed
  }), /*#__PURE__*/React.createElement(_StyledDiv2, null, /*#__PURE__*/React.createElement(_StyledDiv3, {
    _css5: hasNoStart ? theme.hint : 'inherit',
    _css6: textStyle(hasNoStart ? 'body2' : 'body3')
  }, startText), /*#__PURE__*/React.createElement(_StyledDiv4, {
    _css7: theme.hint.alpha(0.3)
  }, "|"), /*#__PURE__*/React.createElement(_StyledDiv5, {
    _css8: hasNoEnd ? theme.hint : 'inherit',
    _css9: textStyle(hasNoEnd ? 'body2' : 'body3')
  }, endText)), /*#__PURE__*/React.createElement(_StyledDiv6, null, /*#__PURE__*/React.createElement(_StyledIconCalendar, {
    _css10: enabled ? theme.accent : theme.surfaceIcon
  }))));
});
Labels.propTypes = {
  enabled: propTypes.bool,
  hasSetDates: propTypes.bool,
  onClick: propTypes.func,
  startText: propTypes.string.isRequired,
  endText: propTypes.string.isRequired
};

export default Labels;
//# sourceMappingURL=Labels.js.map
