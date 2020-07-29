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

function IconMinimize(_ref) {
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
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M10.57 12.864H6.28a.566.566 0 100 1.132h3.725v3.724a.565.565 0 101.13 0v-4.29a.566.566 0 00-.565-.566zm7.15-2.859h-3.725V6.28a.566.566 0 10-1.13 0v4.29c0 .313.252.566.565.566h4.29a.566.566 0 100-1.131z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M18.834 5.166a.566.566 0 00-.8 0L13.03 10.17a.565.565 0 10.8.8l5.004-5.005a.566.566 0 000-.8zM10.97 13.03a.566.566 0 00-.8 0l-5.004 5.005a.566.566 0 10.8.8l5.004-5.005a.566.566 0 000-.8z"
  }));
}

IconMinimize.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconMinimize;
//# sourceMappingURL=IconMinimize.js.map
