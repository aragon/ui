'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var IconEllipsis = require('./IconEllipsis.js');
var Theme = require('./Theme.js');
require('./extends-5150c1f4.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./IconPropTypes-435c57cb.js');
require('./index-70e12149.js');
require('./index-19b0c963.js');
require('./constants.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const PaginationSeparator = /*#__PURE__*/React__default["default"].memo(function PaginationSeparator() {
  const theme = Theme.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(_StyledDiv, null, /*#__PURE__*/React__default["default"].createElement(_StyledIconEllipsis, {
    $_css: theme.surfaceContentSecondary.alpha(0.4)
  }));
});

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "PaginationSeparator___StyledDiv",
  componentId: "sc-f1pytl-0"
})(["display:flex;align-items:center;justify-content:center;"]);

var _StyledIconEllipsis = _styled__default["default"](IconEllipsis["default"]).withConfig({
  displayName: "PaginationSeparator___StyledIconEllipsis",
  componentId: "sc-f1pytl-1"
})(["color:", ";"], p => p.$_css);

exports.PaginationSeparator = PaginationSeparator;
//# sourceMappingURL=PaginationSeparator.js.map
