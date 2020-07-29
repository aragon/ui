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

function IconMenu(_ref) {
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
    strokeWidth: 0.2,
    d: "M19.354 11.301H4.646c-.357 0-.646.313-.646.699 0 .386.29.699.646.699h14.708c.357 0 .646-.313.646-.699 0-.386-.29-.699-.646-.699zm0-5.301H4.646C4.29 6 4 6.313 4 6.699c0 .386.29.699.646.699h14.708c.357 0 .646-.313.646-.7 0-.385-.29-.698-.646-.698zm0 10.602H4.646c-.357 0-.646.313-.646.7 0 .385.29.698.646.698h14.708c.357 0 .646-.313.646-.699 0-.386-.29-.699-.646-.699z"
  }));
}

IconMenu.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconMenu;
//# sourceMappingURL=IconMenu.js.map
