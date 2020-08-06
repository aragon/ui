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

function IconMenu(_ref) {
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
    d: "M19.354 11.301H4.646c-.357 0-.646.313-.646.699 0 .386.29.699.646.699h14.708c.357 0 .646-.313.646-.699 0-.386-.29-.699-.646-.699zm0-5.301H4.646C4.29 6 4 6.313 4 6.699c0 .386.29.699.646.699h14.708c.357 0 .646-.313.646-.7 0-.385-.29-.698-.646-.698zm0 10.602H4.646c-.357 0-.646.313-.646.7 0 .385.29.698.646.698h14.708c.357 0 .646-.313.646-.699 0-.386-.29-.699-.646-.699z"
  }));
}

IconMenu.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconMenu;
//# sourceMappingURL=IconMenu.js.map
