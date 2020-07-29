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

function IconCaution(_ref) {
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
    d: "M20.807 16.488a.27.27 0 00-.006-.01L14.005 5.132l-.002-.004a2.326 2.326 0 00-1.446-1.06 2.326 2.326 0 00-1.771.272c-.32.195-.593.467-.788.788l-.002.004L3.2 16.478a2.326 2.326 0 00-.24 1.787c.162.604.55 1.109 1.09 1.422A2.347 2.347 0 005.205 20h13.6a2.344 2.344 0 002.002-3.512zm-2.015 2.039H5.21a.87.87 0 01-.741-1.298L11.26 5.891a.871.871 0 01.948-.391.862.862 0 01.535.39l6.791 11.339a.87.87 0 01-.74 1.298z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M12 8.898a.737.737 0 00-.736.736v3.21a.737.737 0 101.473 0v-3.21a.737.737 0 00-.736-.736zm.521 6.635a.741.741 0 00-.52-.216.742.742 0 00-.522.216.743.743 0 00-.215.52c0 .195.078.384.215.522a.742.742 0 00.521.216.742.742 0 00.521-.216.741.741 0 00.216-.521.742.742 0 00-.216-.521z"
  }));
}

IconCaution.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconCaution;
//# sourceMappingURL=IconCaution.js.map
