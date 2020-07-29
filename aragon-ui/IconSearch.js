'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-0711941d.js');
require('./unsupportedIterableToArray-68db1d3b.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
require('./index-b0606964.js');
require('./defineProperty-0921a47c.js');
require('styled-components');
require('./miscellaneous.js');
require('./environment.js');
require('./font.js');
require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
require('./text-styles.js');
var _extends = require('./extends-40571110.js');
var objectWithoutProperties = require('./objectWithoutProperties-35db8ab0.js');
require('./index-ecc57c9f.js');
var IconPropTypes = require('./IconPropTypes-56de5759.js');

function IconSearch(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties._objectWithoutProperties(_ref, ["size"]);

  var sizeValue = IconPropTypes.useIconSize(size);
  return /*#__PURE__*/React__default.createElement("svg", _extends._extends({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M15.565 5.984A6.73 6.73 0 0010.775 4a6.73 6.73 0 00-4.79 1.984A6.73 6.73 0 004 10.774a6.73 6.73 0 001.984 4.79 6.73 6.73 0 004.79 1.985 6.73 6.73 0 004.79-1.984 6.73 6.73 0 001.985-4.79 6.73 6.73 0 00-1.984-4.79zm-4.79 10.272a5.488 5.488 0 01-5.482-5.482 5.488 5.488 0 015.481-5.481 5.488 5.488 0 015.482 5.481 5.488 5.488 0 01-5.482 5.482z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M19.81 18.896l-4.248-4.248a.646.646 0 10-.914.914l4.249 4.249a.644.644 0 00.914 0 .646.646 0 000-.915z"
  }));
}

IconSearch.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconSearch;
//# sourceMappingURL=IconSearch.js.map
