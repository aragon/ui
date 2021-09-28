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

function IconDownload({
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
    d: "M18.618 15.03a.646.646 0 00-.646.647v2.206c0 .454-.37.824-.824.824H6.852a.825.825 0 01-.824-.824v-2.206a.646.646 0 00-1.293 0v2.206A2.12 2.12 0 006.853 20h10.295a2.12 2.12 0 002.117-2.117v-2.206a.646.646 0 00-.647-.646z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    fill: "currentColor",
    d: "M15.399 11.543a.646.646 0 00-.914 0L12 14.027l-2.484-2.484a.646.646 0 00-.914.914l2.941 2.941a.646.646 0 00.914 0l2.941-2.941a.646.646 0 000-.914z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    fill: "currentColor",
    d: "M12 4a.646.646 0 00-.646.646v10.296a.646.646 0 001.292 0V4.646A.646.646 0 0012 4z"
  }));
}

IconDownload.propTypes = IconPropTypes.IconPropTypes;

exports["default"] = IconDownload;
//# sourceMappingURL=IconDownload.js.map
