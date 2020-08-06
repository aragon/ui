'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-1b94f6bc.js');
require('./index-46d0e707.js');
require('./miscellaneous.js');
require('./environment.js');
require('./constants.js');
var _extends$1 = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
require('./index-f5a9917e.js');
var IconPropTypes = require('./IconPropTypes-dd9d2cb1.js');

function IconFilter(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["size"]);

  var sizeValue = IconPropTypes.useIconSize(size);
  return /*#__PURE__*/React__default.createElement("svg", _extends$1._extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M19.94 5.36a.648.648 0 00-.586-.36H4.646c-.251 0-.48.14-.586.36-.106.22-.07.48.093.665l5.73 6.529v4.406a.62.62 0 00.357.557l2.942 1.417a.667.667 0 00.629-.027.618.618 0 00.306-.53v-5.823l5.73-6.53a.605.605 0 00.093-.663zm-6.963 6.564a.61.61 0 00-.153.402v5.044l-1.648-.795v-4.249a.61.61 0 00-.153-.402L6.039 6.246h11.922l-4.984 5.678z"
  }));
}

IconFilter.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconFilter;
//# sourceMappingURL=IconFilter.js.map
