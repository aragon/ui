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

function IconAlignCenter(_ref) {
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
    strokeWidth: 0.2,
    d: "M18.068 9.534H5.698a.699.699 0 000 1.398h12.37a.699.699 0 000-1.398zM19.602 6H3.7a.699.699 0 000 1.398h15.903a.699.699 0 100-1.398zm0 7.068H3.7a.699.699 0 000 1.398h15.903a.699.699 0 100-1.398zm-1.534 3.534H5.698a.699.699 0 000 1.398h12.37a.699.699 0 000-1.398z"
  }));
}

IconAlignCenter.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconAlignCenter;
//# sourceMappingURL=IconAlignCenter.js.map
