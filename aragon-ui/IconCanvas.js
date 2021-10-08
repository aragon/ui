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

function IconCanvas(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["size"]);

  var sizeValue = IconPropTypes.useIconSize(size);
  return /*#__PURE__*/React__default['default'].createElement("svg", _extends._extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__default['default'].createElement("g", {
    fill: "currentColor",
    clipPath: "url(#clip0)"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17.005 5H6.995C5.895 5 5 5.895 5 6.995v10.01C5 18.105 5.895 19 6.995 19h10.01c1.1 0 1.995-.895 1.995-1.995V6.995C19 5.895 18.105 5 17.005 5zm.864 12.005a.865.865 0 01-.864.864H6.995a.865.865 0 01-.864-.864V6.995c0-.476.388-.864.864-.864h10.01c.476 0 .864.388.864.864v10.01z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18.434 9.29H5.566a.566.566 0 000 1.13h12.869a.566.566 0 000-1.13z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M9.855 9.29a.566.566 0 00-.565.565v8.58a.566.566 0 001.13 0v-8.58a.566.566 0 00-.565-.565z"
  })), /*#__PURE__*/React__default['default'].createElement("defs", null, /*#__PURE__*/React__default['default'].createElement("clipPath", {
    id: "clip0"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    fill: "#fff",
    d: "M0 0h14v14H0z",
    transform: "translate(5 5)"
  }))));
}

IconCanvas.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconCanvas;
//# sourceMappingURL=IconCanvas.js.map
