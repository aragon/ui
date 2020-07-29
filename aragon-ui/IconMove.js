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

function IconMove(_ref) {
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
    d: "M7.31 13.75L5.56 12l1.75-1.75a.646.646 0 10-.914-.913l-2.207 2.206a.646.646 0 000 .914l2.207 2.206a.644.644 0 00.914 0 .646.646 0 000-.914zm7.353-7.355L12.457 4.19a.646.646 0 00-.914 0L9.337 6.395a.646.646 0 10.914.914l1.75-1.749 1.748 1.75a.644.644 0 00.914 0 .646.646 0 000-.915zm0 10.295a.646.646 0 00-.914 0L12 18.44l-1.749-1.75a.646.646 0 10-.914.915l2.206 2.206a.645.645 0 00.914 0l2.206-2.206a.646.646 0 000-.914zm5.147-5.147l-2.205-2.206a.646.646 0 10-.914.914L18.44 12l-1.75 1.75a.646.646 0 00.915.913l2.206-2.206a.646.646 0 000-.914z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M19.354 11.354H4.646a.646.646 0 000 1.292h14.708a.646.646 0 100-1.292z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M12 4a.646.646 0 00-.646.646v14.708a.646.646 0 101.292 0V4.646A.646.646 0 0012 4z"
  }));
}

IconMove.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconMove;
//# sourceMappingURL=IconMove.js.map
