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

function IconWrite(_ref) {
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
    d: "M18.518 5.479a5.029 5.029 0 00-3.58-1.483A5.029 5.029 0 0011.36 5.48l-4.964 4.964a.647.647 0 00-.189.457v6.25c0 .358.29.648.647.648h6.25a.647.647 0 00.459-.19l4.955-4.971A5.028 5.028 0 0020 9.057a5.028 5.028 0 00-1.482-3.578zm-.915 6.243v.001l-4.768 4.781H7.5v-5.336l4.775-4.775A3.743 3.743 0 0114.94 5.29c1.006 0 1.952.391 2.664 1.103a3.744 3.744 0 011.104 2.665 3.744 3.744 0 01-1.104 2.664z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M15.4 8.604a.647.647 0 00-.915 0L4.189 18.9a.647.647 0 00.915.914L15.399 9.52a.647.647 0 000-.915z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M15.678 13.563H9.794a.647.647 0 000 1.293h5.884a.647.647 0 100-1.293z"
  }));
}

IconWrite.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconWrite;
//# sourceMappingURL=IconWrite.js.map
