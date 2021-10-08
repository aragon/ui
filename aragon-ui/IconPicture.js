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

function IconPicture(_ref) {
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
    d: "M18.017 7.343h-2.329l-1.145-1.718a.646.646 0 00-.537-.288H9.994a.646.646 0 00-.537.288L8.312 7.343H5.983C4.89 7.343 4 8.233 4 9.326v7.354c0 1.093.89 1.983 1.983 1.983h12.034c1.093 0 1.983-.89 1.983-1.983V9.326c0-1.094-.89-1.983-1.983-1.983zm.69 9.337c0 .38-.31.69-.69.69H5.983c-.38 0-.69-.31-.69-.69V9.326c0-.38.31-.69.69-.69h2.674a.646.646 0 00.538-.289L10.34 6.63h3.32l1.145 1.717c.12.18.321.288.538.288h2.674c.38 0 .69.31.69.69v7.355z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fill: "currentColor",
    d: "M12 9.348a3.324 3.324 0 00-3.32 3.32 3.323 3.323 0 003.32 3.32c1.83 0 3.32-1.489 3.32-3.32 0-1.83-1.49-3.32-3.32-3.32zm0 5.348a2.03 2.03 0 01-2.028-2.027A2.03 2.03 0 0112 10.64a2.03 2.03 0 012.028 2.027A2.03 2.03 0 0112 14.697z"
  }));
}

IconPicture.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconPicture;
//# sourceMappingURL=IconPicture.js.map
