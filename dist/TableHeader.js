'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var Theme = require('./Theme.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
require('./font.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function TableHeader({
  title,
  align,
  ...props
}) {
  const theme = Theme.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(_StyledTh, _extends._extends({}, props, {
    $_css: align === 'left' ? 2.5 * constants.GU + 1 : 0,
    $_css2: align === 'right' ? 2.5 * constants.GU + 1 : 0,
    $_css3: align,
    $_css4: theme.contentSecondary,
    $_css5: textStyles.textStyle('label2'),
    $_css6: 4 * constants.GU
  }), title);
}

TableHeader.propTypes = {
  title: index.PropTypes.string,
  align: index.PropTypes.string
};
TableHeader.defaultProps = {
  align: 'left'
};

var _StyledTh = _styled__default["default"]("th").withConfig({
  displayName: "TableHeader___StyledTh",
  componentId: "sc-1qxm8cp-0"
})(["padding:0;padding-left:", "px;padding-right:", "px;text-align:", ";white-space:nowrap;color:", ";", ";line-height:", "px;"], p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5, p => p.$_css6);

exports["default"] = TableHeader;
//# sourceMappingURL=TableHeader.js.map
