import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import _styled from 'styled-components';
import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import { Inside as i } from '../../../node_modules/use-inside/dist/index.js';
import { useTheme } from '../../theme/Theme2.js';
import { useLayout } from '../Layout/Layout.js';
import { RADIUS, GU } from '../../style/constants.js';

var BAR_PADDING = 2 * GU;

var _StyledDiv = _styled("div").withConfig({
  displayName: "Bar___StyledDiv",
  componentId: "sc-1tcfrs9-0"
})(["display:flex;justify-content:space-between;width:100%;height:100%;"]);

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "Bar___StyledDiv2",
  componentId: "sc-1tcfrs9-1"
})(["display:flex;align-items:center;height:100%;padding-left:", "px;"], BAR_PADDING);

var _StyledDiv3 = _styled("div").withConfig({
  displayName: "Bar___StyledDiv3",
  componentId: "sc-1tcfrs9-2"
})(["display:flex;align-items:center;height:100%;padding-right:", "px;"], BAR_PADDING);

var _StyledDiv4 = _styled("div").withConfig({
  displayName: "Bar___StyledDiv4",
  componentId: "sc-1tcfrs9-3"
})(["border-radius:", "px;background:", ";border-style:solid;border-color:", ";border-width:", ";height:", "px;margin-bottom:", "px;"], function (p) {
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
});

function Bar(_ref) {
  var children = _ref.children,
      primary = _ref.primary,
      secondary = _ref.secondary,
      props = objectWithoutProperties(_ref, ["children", "primary", "secondary"]);

  var theme = useTheme();

  var _useLayout = useLayout(),
      layoutName = _useLayout.layoutName;

  var fullScreen = layoutName === 'small';
  var content = children || /*#__PURE__*/React.createElement(_StyledDiv, null, /*#__PURE__*/React.createElement(_StyledDiv2, null, /*#__PURE__*/React.createElement(i, {
    name: "Bar:primary"
  }, primary)), /*#__PURE__*/React.createElement(_StyledDiv3, null, /*#__PURE__*/React.createElement(i, {
    name: "Bar:secondary"
  }, secondary)));
  return /*#__PURE__*/React.createElement(i, {
    name: "Bar"
  }, /*#__PURE__*/React.createElement(_StyledDiv4, _extends_1({}, props, {
    _css: fullScreen ? 0 : RADIUS,
    _css2: theme.surface,
    _css3: theme.border,
    _css4: fullScreen ? '1px 0' : '1px',
    _css5: 8 * GU,
    _css6: 2 * GU
  }), content));
}

Bar.propTypes = {
  children: propTypes.node,
  primary: propTypes.node,
  secondary: propTypes.node
};
Bar.PADDING = BAR_PADDING;

export default Bar;
//# sourceMappingURL=Bar.js.map
