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

function IconImage(_ref) {
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
    d: "M17.005 5H6.995C5.895 5 5 5.895 5 6.995v10.01C5 18.105 5.895 19 6.995 19h10.01c1.1 0 1.995-.895 1.995-1.995V6.995C19 5.895 18.105 5 17.005 5zm.864 12.005a.865.865 0 01-.864.864H6.995a.865.865 0 01-.864-.864V6.995c0-.476.388-.864.864-.864h10.01c.476 0 .864.388.864.864v10.01z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fill: "currentColor",
    d: "M18.834 13.745L15.26 10.17a.566.566 0 00-.8 0l-7.864 7.865a.566.566 0 00.8.8l7.464-7.465 3.175 3.175a.566.566 0 00.8-.8zM9.498 7.86A1.64 1.64 0 007.86 9.498a1.64 1.64 0 001.638 1.638 1.64 1.64 0 001.638-1.638A1.64 1.64 0 009.498 7.86zm0 2.145a.507.507 0 110-1.015.507.507 0 010 1.015z"
  }));
}

IconImage.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconImage;
//# sourceMappingURL=IconImage.js.map
