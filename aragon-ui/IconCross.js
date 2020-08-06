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

function IconCross(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["size"]);

  var sizeValue = IconPropTypes.useIconSize(size);
  return /*#__PURE__*/React__default.createElement("svg", _extends$1._extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.5,
    d: "M17.858 6.142a.485.485 0 00-.685 0L6.142 17.172a.485.485 0 10.686.686l11.03-11.03a.485.485 0 000-.686z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.5,
    d: "M17.858 17.173l-5.515-5.516-5.516-5.515a.485.485 0 10-.685.685l11.03 11.031a.483.483 0 00.686 0 .485.485 0 000-.685z"
  }));
}

IconCross.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconCross;
//# sourceMappingURL=IconCross.js.map
