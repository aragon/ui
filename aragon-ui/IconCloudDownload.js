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

function IconCloudDownload(_ref) {
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
    d: "M15.29 15.034a.68.68 0 00-.96 0l-2.327 2.327-2.327-2.328a.68.68 0 00-.96.96l2.807 2.808a.677.677 0 00.96 0l2.807-2.807a.68.68 0 000-.96z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fill: "currentColor",
    d: "M12.003 11.325a.679.679 0 00-.68.68v6.316a.679.679 0 001.359 0v-6.317a.679.679 0 00-.68-.679z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fill: "currentColor",
    d: "M19.642 10.999a4.192 4.192 0 00-3.425-1.78h-.383A6.303 6.303 0 008.326 5.2a6.3 6.3 0 00-4.532 7.66 6.322 6.322 0 001.383 2.606.68.68 0 001.017-.9 4.958 4.958 0 01-1.085-2.044 4.941 4.941 0 013.554-6.007 4.941 4.941 0 016.008 3.554c.077.3.348.51.657.51h.888c.92 0 1.785.45 2.315 1.202a2.833 2.833 0 01-.688 3.943.679.679 0 10.782 1.111A4.193 4.193 0 0019.642 11z"
  }));
}

IconCloudDownload.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconCloudDownload;
//# sourceMappingURL=IconCloudDownload.js.map
