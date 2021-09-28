'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var ButtonBase = require('./ButtonBase.js');
var Theme = require('./Theme.js');
var constants = require('./constants.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./FocusVisible.js');
require('./defineProperty-fdbd3c46.js');
require('./keycodes.js');
require('./css.js');
require('./text-styles.js');
require('./font.js');
require('./environment.js');
require('./miscellaneous.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ButtonText({
  horizontalPadding,
  ...props
}) {
  const theme = Theme.useTheme();
  const leftPadding = Number(horizontalPadding === 'left' || horizontalPadding === 'both') * constants.GU;
  const rightPadding = Number(horizontalPadding === 'right' || horizontalPadding === 'both') * constants.GU;
  return /*#__PURE__*/React__default["default"].createElement(_StyledButtonBase, _extends._extends({}, props, {
    $_css: 1 * constants.GU,
    $_css2: rightPadding,
    $_css3: 1 * constants.GU,
    $_css4: leftPadding,
    $_css5: theme.link
  }));
}

ButtonText.propTypes = { ...ButtonBase["default"].propTypes,
  horizontalPadding: index.PropTypes.oneOf(['both', 'left', 'right', 'none'])
};
ButtonText.defaultProps = {
  horizontalPadding: 'both'
};

var _StyledButtonBase = _styled__default["default"](ButtonBase["default"]).withConfig({
  displayName: "ButtonText___StyledButtonBase",
  componentId: "sc-i6an1t-0"
})(["padding:", "px ", "px ", "px ", "px;color:", ";font-size:inherit;"], p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5);

exports["default"] = ButtonText;
//# sourceMappingURL=ButtonText.js.map
