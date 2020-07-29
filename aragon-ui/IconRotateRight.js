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

function IconRotateRight(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties._objectWithoutProperties(_ref, ["size"]);

  var sizeValue = IconPropTypes.useIconSize(size);
  return /*#__PURE__*/React__default.createElement("svg", _extends._extends({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__default.createElement("g", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    clipPath: "url(#clip0)"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M18.434 6.286a.565.565 0 00-.565.565v3.295h-3.295a.566.566 0 000 1.131h3.86a.566.566 0 00.566-.565v-3.86a.566.566 0 00-.566-.566z"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M18.822 10.3l-2.973-2.8a6.395 6.395 0 00-2.372-1.493 6.315 6.315 0 00-4.858.258 6.315 6.315 0 00-3.253 3.618 6.315 6.315 0 00.258 4.858 6.315 6.315 0 003.618 3.252 6.334 6.334 0 004.858-.258 6.315 6.315 0 003.253-3.618.565.565 0 10-1.067-.376 5.191 5.191 0 01-2.674 2.974 5.19 5.19 0 01-3.993.212 5.191 5.191 0 01-2.974-2.674 5.19 5.19 0 01-.212-3.994 5.191 5.191 0 012.673-2.974 5.191 5.191 0 013.994-.212 5.258 5.258 0 011.968 1.245l2.979 2.806a.565.565 0 00.775-.824z"
  })), /*#__PURE__*/React__default.createElement("defs", null, /*#__PURE__*/React__default.createElement("clipPath", {
    id: "clip0"
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "#fff",
    d: "M0 0h14v14H0z",
    transform: "translate(5 5)"
  }))));
}

IconRotateRight.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconRotateRight;
//# sourceMappingURL=IconRotateRight.js.map
