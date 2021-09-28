import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { Inside as i } from '../../../node_modules/use-inside/dist/index.js';
import { useLayout } from '../Layout/Layout.js';
import { useTheme } from '../../theme/Theme2.js';
import { GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';

function Header({
  primary,
  secondary,
  children,
  ...props
}) {
  const theme = useTheme();
  const {
    layoutName
  } = useLayout();
  const fullWidth = layoutName === 'small';
  return /*#__PURE__*/React.createElement(i, {
    name: "Header"
  }, /*#__PURE__*/React.createElement(_StyledDiv, _extends({}, props, {
    $_css: fullWidth ? 0 : 3 * GU,
    $_css2: fullWidth ? theme.surface : 'none',
    $_css3: fullWidth ? 2 * GU : 0,
    $_css4: fullWidth ? '0px 2px 3px rgba(0, 0, 0, 0.05)' : 'none'
  }), /*#__PURE__*/React.createElement(_StyledDiv2, {
    $_css5: fullWidth ? 8 * GU : 5 * GU,
    $_css6: fullWidth && !children ? 2 * GU : 0
  }, children || /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(i, {
    name: "Header:primary"
  }, /*#__PURE__*/React.createElement(_StyledDiv3, {
    $_css7: secondary ? 2 * GU : 0
  }, typeof primary === 'string' && primary ? /*#__PURE__*/React.createElement(Header.Title, null, primary) : primary)), /*#__PURE__*/React.createElement(i, {
    name: "Header:secondary"
  }, /*#__PURE__*/React.createElement(_StyledDiv4, null, secondary))))));
}

Header.propTypes = {
  primary: PropTypes.node,
  secondary: PropTypes.node,
  children: PropTypes.node
};

Header.Title = function HeaderTitle({
  children,
  ...props
}) {
  const theme = useTheme();
  const {
    layoutName
  } = useLayout();
  const fullWidth = layoutName === 'small';
  return /*#__PURE__*/React.createElement(_StyledH, _extends({}, props, {
    $_css8: theme.content,
    $_css9: textStyle(fullWidth ? 'title3' : 'title2')
  }), children);
};

Header.Title.propTypes = {
  children: PropTypes.node
};

var _StyledDiv = _styled("div").withConfig({
  displayName: "Header___StyledDiv",
  componentId: "sc-euryjq-0"
})(["padding:", "px 0;background:", ";margin-bottom:", "px;box-shadow:", ";"], p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4);

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "Header___StyledDiv2",
  componentId: "sc-euryjq-1"
})(["display:flex;align-items:center;justify-content:space-between;height:", "px;padding:0 ", "px;"], p => p.$_css5, p => p.$_css6);

var _StyledDiv3 = _styled("div").withConfig({
  displayName: "Header___StyledDiv3",
  componentId: "sc-euryjq-2"
})(["display:flex;min-width:0;flex-shrink:1;flex-grow:1;margin-right:", "px;"], p => p.$_css7);

var _StyledDiv4 = _styled("div").withConfig({
  displayName: "Header___StyledDiv4",
  componentId: "sc-euryjq-3"
})(["flex-shrink:0;"]);

var _StyledH = _styled("h1").withConfig({
  displayName: "Header___StyledH",
  componentId: "sc-euryjq-4"
})(["color:", ";overflow:hidden;text-overflow:ellipsis;white-space:nowrap;", ";"], p => p.$_css8, p => p.$_css9);

export { Header as default };
//# sourceMappingURL=Header.js.map
