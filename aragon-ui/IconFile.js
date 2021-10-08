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

function IconFile(_ref) {
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
    d: "M18.34 9.337l-5.148-5.148A.646.646 0 0012.735 4H7.588A2.12 2.12 0 005.47 6.117v11.766A2.12 2.12 0 007.588 20h8.824a2.12 2.12 0 002.117-2.117v-8.09a.646.646 0 00-.19-.456zm-1.103 8.546c0 .454-.37.824-.825.824H7.588a.825.825 0 01-.825-.824V6.117c0-.455.37-.824.825-.824h4.88l4.768 4.769v7.82z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fill: "currentColor",
    d: "M17.883 9.148h-4.501V4.646a.646.646 0 00-1.293 0v5.148c0 .357.29.646.646.646h5.148a.646.646 0 100-1.292z"
  }));
}

IconFile.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconFile;
//# sourceMappingURL=IconFile.js.map
