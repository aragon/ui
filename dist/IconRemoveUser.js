'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var React = require('react');
var IconPropTypes = require('./IconPropTypes-435c57cb.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./index-70e12149.js');
require('./index-19b0c963.js');
require('./constants.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function IconRemoveUser({
  size,
  ...props
}) {
  const sizeValue = IconPropTypes.useIconSize(size);
  return /*#__PURE__*/React__default["default"].createElement("svg", _extends._extends({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__default["default"].createElement("path", {
    fill: "currentColor",
    d: "M15.644 14.614c-1.382-.77-3.21-1.194-5.148-1.194-1.938 0-3.766.424-5.148 1.194C3.834 15.457 3 16.627 3 17.908v.752a.727.727 0 101.454 0v-.752c0-.72.584-1.457 1.601-2.023 1.17-.652 2.747-1.01 4.44-1.01 1.695 0 3.272.358 4.442 1.01 1.017.566 1.6 1.304 1.6 2.023v.752a.727.727 0 001.455 0v-.752c0-1.281-.834-2.45-2.348-3.294zM14.223 7.55a3.709 3.709 0 00-1.053-2.093 3.733 3.733 0 00-3.19-1.054 3.74 3.74 0 00-3.147 4.243 3.711 3.711 0 001.47 2.453 3.707 3.707 0 002.773.694 3.74 3.74 0 003.147-4.243zm-3.36 2.805a2.266 2.266 0 01-1.694-.424 2.266 2.266 0 01-.897-1.498 2.284 2.284 0 012.59-2.591 2.268 2.268 0 011.923 1.922 2.284 2.284 0 01-1.922 2.59zm9.41.057H15.76a.727.727 0 100 1.454h4.513a.727.727 0 000-1.454z"
  }));
}

IconRemoveUser.propTypes = IconPropTypes.IconPropTypes;

exports["default"] = IconRemoveUser;
//# sourceMappingURL=IconRemoveUser.js.map
