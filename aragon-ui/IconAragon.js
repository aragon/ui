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

function IconAragon(_ref) {
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
    fillRule: "evenodd",
    d: "M12 4l.22.068c.595.186 4.982 1.592 8.47 4.433l.31.253-.077.383c-.088.441-.503 2.311-1.594 4.393-.728 1.39-1.617 2.613-2.647 3.627a11.751 11.751 0 01-4.443 2.76l-.24.083-.239-.082a11.739 11.739 0 01-4.442-2.756c-1.03-1.013-1.919-2.23-2.648-3.62-1.097-2.09-1.506-3.96-1.595-4.407L3 8.754l.31-.253c3.487-2.841 7.868-4.247 8.472-4.433L12 4zM4.546 9.268c.168.702.573 2.124 1.386 3.673.672 1.282 1.48 2.384 2.4 3.287A10.33 10.33 0 0012 18.57a10.351 10.351 0 003.67-2.347M4.545 9.268c2.931-2.276 6.445-3.525 7.454-3.854 1.009.33 4.524 1.58 7.454 3.853-.17.7-.577 2.12-1.385 3.664-.673 1.282-1.48 2.389-2.399 3.292",
    clipRule: "evenodd"
  }));
}

IconAragon.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconAragon;
//# sourceMappingURL=IconAragon.js.map
