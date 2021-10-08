'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var IconEllipsis = require('./IconEllipsis.js');
var Theme = require('./Theme.js');
require('./extends-023d783e.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./objectWithoutProperties-c6d3675c.js');
require('./IconPropTypes-b9997416.js');
require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./index-c33eeeef.js');
require('./index-37353731.js');
require('./constants.js');
require('./defineProperty-3cad0327.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
require('./getPrototypeOf-55c9e80c.js');
require('./toConsumableArray-cc0d28a9.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _StyledDiv = _styled__default['default']("div").withConfig({
  displayName: "PaginationSeparator___StyledDiv",
  componentId: "f1pytl-0"
})(["display:flex;align-items:center;justify-content:center;"]);

var _StyledIconEllipsis = _styled__default['default'](IconEllipsis['default']).withConfig({
  displayName: "PaginationSeparator___StyledIconEllipsis",
  componentId: "f1pytl-1"
})(["color:", ";"], function (p) {
  return p._css;
});

var PaginationSeparator = /*#__PURE__*/React__default['default'].memo(function PaginationSeparator() {
  var theme = Theme.useTheme();
  return /*#__PURE__*/React__default['default'].createElement(_StyledDiv, null, /*#__PURE__*/React__default['default'].createElement(_StyledIconEllipsis, {
    _css: theme.surfaceContentSecondary.alpha(0.4)
  }));
});

exports.PaginationSeparator = PaginationSeparator;
//# sourceMappingURL=PaginationSeparator.js.map
