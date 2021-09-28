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

function IconUpload({
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
    d: "M18.618 15.03a.646.646 0 00-.646.647v2.206c0 .454-.37.824-.824.824H6.852a.825.825 0 01-.824-.824v-2.206a.646.646 0 00-1.293 0v2.206A2.12 2.12 0 006.853 20h10.295a2.12 2.12 0 002.117-2.117v-2.206a.646.646 0 00-.647-.646zM8.602 8.045a.646.646 0 00.914 0L12 5.56l2.485 2.485a.646.646 0 00.914-.914l-2.942-2.942a.646.646 0 00-.914 0L8.602 7.131a.646.646 0 000 .914z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    fill: "currentColor",
    d: "M12 15.588c.357 0 .646-.29.646-.646V4.646a.646.646 0 00-1.292 0v10.296c0 .356.289.646.646.646z"
  }));
}

IconUpload.propTypes = IconPropTypes.IconPropTypes;

exports["default"] = IconUpload;
//# sourceMappingURL=IconUpload.js.map
