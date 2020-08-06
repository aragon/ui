'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-1b94f6bc.js');
require('./index-46d0e707.js');
require('./miscellaneous.js');
require('./environment.js');
require('./constants.js');
var _extends$1 = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
require('./index-f5a9917e.js');
var IconPropTypes = require('./IconPropTypes-dd9d2cb1.js');

function IconPrint(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["size"]);

  var sizeValue = IconPropTypes.useIconSize(size);
  return /*#__PURE__*/React__default.createElement("svg", _extends$1._extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M16.412 4H7.588a.646.646 0 00-.646.646v5.148a.646.646 0 001.292 0V5.293h7.532v4.5a.646.646 0 101.293 0V4.647A.646.646 0 0016.412 4z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M17.883 9.148H6.117A2.12 2.12 0 004 11.265v3.676a2.12 2.12 0 002.117 2.117h1.47a.646.646 0 100-1.292h-1.47a.825.825 0 01-.824-.825v-3.676c0-.455.37-.825.824-.825h11.766c.454 0 .824.37.824.825v3.676c0 .455-.37.825-.824.825h-1.47a.646.646 0 100 1.292h1.47A2.12 2.12 0 0020 14.941v-3.676a2.12 2.12 0 00-2.117-2.117z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M16.412 12.824H7.588a.646.646 0 00-.646.647v5.883c0 .357.289.646.646.646h8.824c.357 0 .647-.29.647-.646V13.47a.646.646 0 00-.647-.647zm-.646 5.883H8.234v-4.59h7.532v4.59z"
  }));
}

IconPrint.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconPrint;
//# sourceMappingURL=IconPrint.js.map
