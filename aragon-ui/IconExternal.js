'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-0711941d.js');
require('./unsupportedIterableToArray-68db1d3b.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
require('./index-b0606964.js');
require('./defineProperty-0921a47c.js');
require('styled-components');
require('./miscellaneous.js');
require('./environment.js');
require('./font.js');
require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
require('./text-styles.js');
var _extends = require('./extends-40571110.js');
var objectWithoutProperties = require('./objectWithoutProperties-35db8ab0.js');
require('./index-ecc57c9f.js');
var IconPropTypes = require('./IconPropTypes-56de5759.js');

function IconExternal(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties._objectWithoutProperties(_ref, ["size"]);

  var sizeValue = IconPropTypes.useIconSize(size);
  return /*#__PURE__*/React__default.createElement("svg", _extends._extends({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M16.902 12.17a.646.646 0 00-.646.647v4.903a.989.989 0 01-.988.987H6.28a.989.989 0 01-.987-.987V8.732c0-.545.443-.988.987-.988h4.903a.646.646 0 100-1.293H6.28A2.283 2.283 0 004 8.731v8.989A2.283 2.283 0 006.28 20h8.988a2.283 2.283 0 002.28-2.28v-4.903a.646.646 0 00-.645-.646zM19.354 4H14.45a.646.646 0 100 1.293h4.256v4.256a.646.646 0 001.293 0V4.646A.646.646 0 0019.354 4z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M19.81 4.19a.646.646 0 00-.913 0l-8.988 8.988a.646.646 0 00.914.914l8.988-8.988a.646.646 0 000-.914z"
  }));
}

IconExternal.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconExternal;
//# sourceMappingURL=IconExternal.js.map
