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

function IconFlag(_ref) {
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
    d: "M18.572 4.88a.67.67 0 00-.755.157c-.006.006-.707.613-2.663.613-1.05 0-1.947-.376-2.897-.773C11.227 4.446 10.162 4 8.847 4c-2.578 0-3.543.931-3.644 1.037A.743.743 0 005 5.55v9.9c0 .301.164.588.433.694a.645.645 0 00.743-.173c.082-.068.808-.621 2.67-.621 1.05 0 1.947.376 2.897.773 1.03.431 2.095.877 3.41.877 2.578 0 3.543-.931 3.644-1.037A.742.742 0 0019 15.45v-9.9a.726.726 0 00-.428-.67zm-.958 10.186c-.337.185-1.091.484-2.46.484-1.05 0-1.947-.376-2.897-.773-1.03-.431-2.095-.877-3.41-.877-1.09 0-1.891.166-2.461.366V5.934c.337-.185 1.091-.484 2.46-.484 1.05 0 1.947.376 2.897.773 1.03.431 2.095.877 3.41.877 1.09 0 1.891-.166 2.461-.366v8.332z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M5.693 14.095a.693.693 0 00-.693.693v5.519a.693.693 0 101.386 0v-5.519a.693.693 0 00-.693-.693z"
  }));
}

IconFlag.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconFlag;
//# sourceMappingURL=IconFlag.js.map
