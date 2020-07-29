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

function IconHome(_ref) {
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
    strokeWidth: 0.4,
    d: "M3.191 10.338l8.533-6.248a.468.468 0 01.552 0l8.533 6.248a.468.468 0 11-.553.754L12 5.047l-8.256 6.045a.465.465 0 01-.654-.1.468.468 0 01.101-.655z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.4,
    d: "M5.452 11.198c.259 0 .468.21.468.468v7.444h3.741v-4.063c0-1.29 1.05-2.34 2.339-2.34 1.29 0 2.339 1.05 2.339 2.34v4.063h3.741v-7.444a.468.468 0 01.935 0v7.912a.468.468 0 01-.467.468H13.87a.467.467 0 01-.468-.468v-4.531c0-.774-.63-1.404-1.403-1.404-.774 0-1.403.63-1.403 1.403v4.532c0 .013 0 .025-.002.036a.467.467 0 01-.466.431H5.452a.468.468 0 01-.467-.467v-7.912c0-.259.209-.468.467-.468z"
  }));
}

IconHome.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconHome;
//# sourceMappingURL=IconHome.js.map
