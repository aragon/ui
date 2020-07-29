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

function IconBookmark(_ref) {
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
    d: "M16.085 4h-8.17a2.283 2.283 0 00-2.28 2.28v13.074a.646.646 0 001.021.526L12 16.063l5.344 3.817a.646.646 0 001.022-.526V6.28A2.283 2.283 0 0016.086 4zm.988 14.098l-4.697-3.356a.646.646 0 00-.752 0l-4.697 3.356V6.28c0-.544.443-.987.988-.987h8.17c.545 0 .988.443.988.987v11.818z"
  }));
}

IconBookmark.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconBookmark;
//# sourceMappingURL=IconBookmark.js.map
