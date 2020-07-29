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

function IconWarning(_ref) {
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
    d: "M6.343 17.657A7.948 7.948 0 0012 20a7.948 7.948 0 005.657-2.343A7.947 7.947 0 0020 12a7.948 7.948 0 00-2.343-5.657A7.947 7.947 0 0012 4a7.948 7.948 0 00-5.657 2.343A7.948 7.948 0 004 12c0 2.137.832 4.146 2.343 5.657zM12 5.293A6.715 6.715 0 0118.707 12 6.715 6.715 0 0112 18.707 6.715 6.715 0 015.293 12 6.715 6.715 0 0112 5.293z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M12 12.646c.357 0 .646-.29.646-.646V9.058a.646.646 0 10-1.292 0V12c0 .357.29.646.646.646zm-.457 2.753c.12.12.287.189.457.189a.651.651 0 00.646-.646.651.651 0 00-.189-.458.65.65 0 00-.457-.189.65.65 0 00-.457.19.65.65 0 00-.19.456c0 .17.07.337.19.457z"
  }));
}

IconWarning.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconWarning;
//# sourceMappingURL=IconWarning.js.map
