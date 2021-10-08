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

function IconCaution(_ref) {
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
    d: "M20.807 16.488a.27.27 0 00-.006-.01L14.005 5.132l-.002-.004a2.326 2.326 0 00-1.446-1.06 2.326 2.326 0 00-1.771.272c-.32.195-.593.467-.788.788l-.002.004L3.2 16.478a2.326 2.326 0 00-.24 1.787c.162.604.55 1.109 1.09 1.422A2.347 2.347 0 005.205 20h13.6a2.344 2.344 0 002.002-3.512zm-2.015 2.039H5.21a.87.87 0 01-.741-1.298L11.26 5.891a.871.871 0 01.948-.391.862.862 0 01.535.39l6.791 11.339a.87.87 0 01-.74 1.298z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fill: "currentColor",
    d: "M12 8.898a.737.737 0 00-.736.736v3.21a.737.737 0 101.473 0v-3.21a.737.737 0 00-.736-.736zm.521 6.635a.741.741 0 00-.52-.216.742.742 0 00-.522.216.743.743 0 00-.215.52c0 .195.078.384.215.522a.742.742 0 00.521.216.742.742 0 00.521-.216.741.741 0 00.216-.521.742.742 0 00-.216-.521z"
  }));
}

IconCaution.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconCaution;
//# sourceMappingURL=IconCaution.js.map
