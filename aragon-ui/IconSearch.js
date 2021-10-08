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

function IconSearch(_ref) {
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
    d: "M15.565 5.984A6.73 6.73 0 0010.775 4a6.73 6.73 0 00-4.79 1.984A6.73 6.73 0 004 10.774a6.73 6.73 0 001.984 4.79 6.73 6.73 0 004.79 1.985 6.73 6.73 0 004.79-1.984 6.73 6.73 0 001.985-4.79 6.73 6.73 0 00-1.984-4.79zm-4.79 10.272a5.488 5.488 0 01-5.482-5.482 5.488 5.488 0 015.481-5.481 5.488 5.488 0 015.482 5.481 5.488 5.488 0 01-5.482 5.482z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fill: "currentColor",
    d: "M19.81 18.896l-4.248-4.248a.646.646 0 10-.914.914l4.249 4.249a.644.644 0 00.914 0 .646.646 0 000-.915z"
  }));
}

IconSearch.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconSearch;
//# sourceMappingURL=IconSearch.js.map
