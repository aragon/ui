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

function IconHeart(_ref) {
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
    d: "M18.681 6.314l-.002-.002a4.55 4.55 0 00-6.388-.002v.001h-.001l-.29.287-.288-.286A4.508 4.508 0 008.518 5a4.508 4.508 0 00-3.195 1.312A4.43 4.43 0 004 9.479c0 1.196.47 2.32 1.323 3.166l6.22 6.167a.65.65 0 00.915 0l6.22-6.166a4.456 4.456 0 00.003-6.332zm-.916 5.425L12 17.453l-5.764-5.714a3.162 3.162 0 01-.944-2.26c0-.854.335-1.657.944-2.261a3.23 3.23 0 012.28-.935 3.23 3.23 0 012.28.935l.747.74a.65.65 0 00.914 0l.746-.74.001-.001a3.247 3.247 0 014.558 0l.003.002a3.18 3.18 0 01-.001 4.52z"
  }));
}

IconHeart.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconHeart;
//# sourceMappingURL=IconHeart.js.map
