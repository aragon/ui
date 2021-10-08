'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var React = require('react');
var IconPropTypes = require('./IconPropTypes-b9997416.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./index-c33eeeef.js');
require('./index-37353731.js');
require('./constants.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function IconSquarePlus(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["size"]);

  var sizeValue = IconPropTypes.useIconSize(size);
  return /*#__PURE__*/React__default['default'].createElement("svg", _extends._extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__default['default'].createElement("path", {
    fill: "currentColor",
    d: "M17.72 4H6.28A2.283 2.283 0 004 6.28v11.44A2.283 2.283 0 006.28 20h11.44A2.283 2.283 0 0020 17.72V6.28A2.283 2.283 0 0017.72 4zm.987 13.72a.99.99 0 01-.988.987H6.28a.989.989 0 01-.987-.988V6.28c0-.544.443-.987.987-.987h11.44c.544 0 .987.443.987.987v11.44z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fill: "currentColor",
    d: "M12 8.085a.646.646 0 00-.646.647v6.536a.646.646 0 101.292 0V8.732A.646.646 0 0012 8.085z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fill: "currentColor",
    d: "M15.268 11.354H8.732a.646.646 0 100 1.292h6.536a.646.646 0 100-1.292z"
  }));
}

IconSquarePlus.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconSquarePlus;
//# sourceMappingURL=IconSquarePlus.js.map
