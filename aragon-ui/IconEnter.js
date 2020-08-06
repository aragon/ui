'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-1b94f6bc.js');
require('./index-46d0e707.js');
require('./miscellaneous.js');
require('./environment.js');
require('./constants.js');
var _extends$1 = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
require('./index-f5a9917e.js');
var IconPropTypes = require('./IconPropTypes-dd9d2cb1.js');

function IconEnter(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["size"]);

  var sizeValue = IconPropTypes.useIconSize(size);
  return /*#__PURE__*/React__default.createElement("svg", _extends$1._extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 22 18"
  }, props), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M20.935 8.16H1.839a.84.84 0 000 1.68h19.096a.84.84 0 100-1.68z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M3.026 9l6.568-6.567a.84.84 0 10-1.187-1.187l-7.16 7.16a.84.84 0 000 1.187l7.16 7.161a.836.836 0 001.187 0 .84.84 0 000-1.187L3.026 9z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M21.128 2.064a.835.835 0 00-.838.832v6.162c0 .46.376.832.838.832a.835.835 0 00.839-.832V2.896a.835.835 0 00-.838-.832z"
  }));
}

IconEnter.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconEnter;
//# sourceMappingURL=IconEnter.js.map
