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

function IconConnection(_ref) {
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
    d: "M12 9.388a2.385 2.385 0 00-2.382 2.382A2.385 2.385 0 0012 14.152a2.385 2.385 0 002.382-2.382A2.385 2.385 0 0012 9.388zm0 3.31a.929.929 0 010-1.856.929.929 0 010 1.855zm4.022-4.951a.727.727 0 10-1.027 1.029 4.242 4.242 0 01.003 5.992l-.004.004a.727.727 0 001.029 1.028l.004-.004a5.698 5.698 0 00-.005-8.05zm-7.017 7.017a4.21 4.21 0 01-1.242-2.996 4.21 4.21 0 011.243-3 .727.727 0 00-1.029-1.029l-.004.004a5.698 5.698 0 00.005 8.05.725.725 0 001.028 0 .727.727 0 000-1.03z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fill: "currentColor",
    d: "M18.364 5.405a.727.727 0 00-1.028 1.029c2.941 2.942 2.941 7.73 0 10.672a.727.727 0 101.028 1.028A8.943 8.943 0 0021 11.77a8.943 8.943 0 00-2.636-6.365zm-11.7 1.029a.727.727 0 00-1.028-1.029A8.943 8.943 0 003 11.77a8.94 8.94 0 002.636 6.364.724.724 0 001.028 0 .727.727 0 000-1.028c-2.941-2.943-2.941-7.73 0-10.672z"
  }));
}

IconConnection.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconConnection;
//# sourceMappingURL=IconConnection.js.map
