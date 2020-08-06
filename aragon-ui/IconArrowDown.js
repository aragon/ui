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

function IconArrowDown(_ref) {
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
    d: "M11.434 5.566v12.869a.566.566 0 001.132 0V5.565a.566.566 0 10-1.132 0z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M12 17.634L7.574 13.21a.565.565 0 10-.8.8l4.826 4.825a.566.566 0 00.8 0l4.826-4.826a.563.563 0 000-.8.566.566 0 00-.8 0L12 17.634z"
  }));
}

IconArrowDown.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconArrowDown;
//# sourceMappingURL=IconArrowDown.js.map
