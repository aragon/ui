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

function IconRotateLeft(_ref) {
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
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M9.425 10.142H6.131V6.847a.565.565 0 00-1.131 0v3.86c0 .313.253.566.565.566h3.86a.565.565 0 100-1.131z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M18.636 9.888a6.314 6.314 0 00-3.25-3.62 6.314 6.314 0 00-4.857-.262 6.395 6.395 0 00-2.372 1.49l-2.979 2.8a.566.566 0 00.775.823l2.985-2.805a5.257 5.257 0 011.967-1.242 5.23 5.23 0 016.664 3.192 5.23 5.23 0 01-3.192 6.664 5.23 5.23 0 01-6.663-3.192.565.565 0 00-1.067.376 6.314 6.314 0 003.249 3.62 6.332 6.332 0 004.857.262 6.314 6.314 0 003.62-3.249 6.314 6.314 0 00.262-4.857z"
  }));
}

IconRotateLeft.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconRotateLeft;
//# sourceMappingURL=IconRotateLeft.js.map
