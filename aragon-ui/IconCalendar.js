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

function IconCalendar(_ref) {
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
    fillRule: "evenodd",
    d: "M4 6.193c0-.33.267-.597.597-.597h14.806c.33 0 .597.267.597.597v12.161c0 .33-.267.598-.597.598H4.597A.597.597 0 014 18.354V6.194zm1.193.597v10.967h13.613V6.79H5.194z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4 6.193c0-.33.267-.597.597-.597h14.806c.33 0 .597.267.597.597v3.722c0 .33-.267.597-.597.597H4.597A.597.597 0 014 9.915V6.193zm1.193.597v2.527h13.613V6.79H5.194z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M7.783 4c.33 0 .597.267.597.597v2.527a.597.597 0 11-1.194 0V4.597c0-.33.267-.597.597-.597zm8.499 0c.33 0 .597.267.597.597v2.527a.597.597 0 11-1.194 0V4.597c0-.33.267-.597.597-.597z",
    clipRule: "evenodd"
  }));
}

IconCalendar.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconCalendar;
//# sourceMappingURL=IconCalendar.js.map
