'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var React = require('react');
var IconPropTypes = require('./IconPropTypes-b9997416.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./index-c33eeeef.js');
require('./index-37353731.js');
require('./constants.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function IconCalendar(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["size"]);

  var sizeValue = IconPropTypes.useIconSize(size);
  return /*#__PURE__*/React__default['default'].createElement("svg", _extends._extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__default['default'].createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4 6.193c0-.33.267-.597.597-.597h14.806c.33 0 .597.267.597.597v12.161c0 .33-.267.598-.597.598H4.597A.597.597 0 014 18.354V6.194zm1.193.597v10.967h13.613V6.79H5.194z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4 6.193c0-.33.267-.597.597-.597h14.806c.33 0 .597.267.597.597v3.722c0 .33-.267.597-.597.597H4.597A.597.597 0 014 9.915V6.193zm1.193.597v2.527h13.613V6.79H5.194z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M7.783 4c.33 0 .597.267.597.597v2.527a.597.597 0 11-1.194 0V4.597c0-.33.267-.597.597-.597zm8.499 0c.33 0 .597.267.597.597v2.527a.597.597 0 11-1.194 0V4.597c0-.33.267-.597.597-.597z",
    clipRule: "evenodd"
  }));
}

IconCalendar.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconCalendar;
//# sourceMappingURL=IconCalendar.js.map
