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

function IconCopy(_ref) {
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
    strokeWidth: 0.1,
    d: "M6.437 20.505h8.807a1.99 1.99 0 001.988-1.988v-.352a.579.579 0 00-1.157 0v.352c0 .458-.373.83-.83.83H6.436a.832.832 0 01-.83-.83V9.006c0-.458.373-.831.83-.831h.353a.579.579 0 000-1.157h-.353A1.99 1.99 0 004.45 9.006v9.511a1.99 1.99 0 001.987 1.988z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.1,
    d: "M10.665 16.277h7.398a1.99 1.99 0 001.987-1.987V5.483a1.99 1.99 0 00-1.987-1.988h-7.398a1.99 1.99 0 00-1.988 1.988v8.807a1.99 1.99 0 001.988 1.987zm-.83-10.794a.83.83 0 01.83-.83h7.398c.457 0 .83.372.83.83v8.807c0 .458-.373.83-.83.83h-7.398a.832.832 0 01-.83-.83V5.483z"
  }));
}

IconCopy.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconCopy;
//# sourceMappingURL=IconCopy.js.map
