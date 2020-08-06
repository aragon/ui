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

function IconLayers(_ref) {
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
    d: "M19.643 7.745l-7.354-3.677a.646.646 0 00-.578 0L4.357 7.745a.646.646 0 000 1.156l7.354 3.677a.647.647 0 00.578 0l7.354-3.677a.646.646 0 000-1.156zM12 11.277L6.09 8.323 12 5.37l5.908 2.954L12 11.277zm7.932 4.111a.646.646 0 00-.868-.29L12 18.632 4.935 15.1a.646.646 0 00-.578 1.156l7.354 3.677a.646.646 0 00.578 0l7.354-3.677a.646.646 0 00.289-.867z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M19.932 11.71a.646.646 0 00-.868-.288L12 14.954l-7.065-3.532a.646.646 0 10-.578 1.156l7.354 3.677a.647.647 0 00.578 0l7.354-3.677a.646.646 0 00.289-.867z"
  }));
}

IconLayers.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconLayers;
//# sourceMappingURL=IconLayers.js.map
