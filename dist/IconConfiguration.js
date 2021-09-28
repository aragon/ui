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

function IconConfiguration({
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
    fillRule: "evenodd",
    d: "M21 17.318a.69.69 0 01-.69.69h-1.996a.69.69 0 110-1.38h1.997c.38 0 .689.31.689.69zm-6.047 0a.69.69 0 01-.69.69H3.69a.69.69 0 010-1.38h10.575c.38 0 .69.31.69.69zm-8.859-5.245a.69.69 0 01-.69.69H3.69a.69.69 0 110-1.38h1.715a.69.69 0 01.69.69zm14.906 0a.69.69 0 01-.69.69H9.597a.69.69 0 110-1.38H20.31a.69.69 0 01.689.69zm-5.906-5.246a.69.69 0 01-.69.69H3.69a.69.69 0 010-1.38h10.715c.38 0 .69.31.69.69zm5.906 0a.69.69 0 01-.69.69h-1.996a.69.69 0 010-1.38h1.997c.38 0 .689.31.689.69z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M13.912 6.665a2.342 2.342 0 114.684 0 2.342 2.342 0 01-4.684 0zm2.342-.963a.963.963 0 100 1.926.963.963 0 000-1.926zm-2.342 11.454a2.342 2.342 0 114.684 0 2.342 2.342 0 01-4.684 0zm2.342-.963a.963.963 0 100 1.926.963.963 0 000-1.926zM5.123 11.91a2.342 2.342 0 114.684 0 2.342 2.342 0 01-4.684 0zm2.342-.962a.963.963 0 100 1.925.963.963 0 000-1.925z",
    clipRule: "evenodd"
  }));
}

IconConfiguration.propTypes = IconPropTypes.IconPropTypes;

exports["default"] = IconConfiguration;
//# sourceMappingURL=IconConfiguration.js.map
