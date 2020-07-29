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

function IconUser(_ref) {
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
    d: "M12 14c-4.806 0-8.571 2.227-8.571 5.07v.875a.694.694 0 101.388 0v-.875c0-1.996 3.29-3.682 7.183-3.682s7.183 1.686 7.183 3.682v.875a.694.694 0 101.388 0v-.875C20.57 16.227 16.806 14 12 14zm4.187-6.42a4.166 4.166 0 00-1.183-2.351 4.192 4.192 0 00-3.582-1.183A4.2 4.2 0 007.889 8.81a4.167 4.167 0 001.65 2.754 4.164 4.164 0 003.115.78 4.2 4.2 0 003.534-4.764zm-3.737 3.39a2.788 2.788 0 01-2.084-.522A2.788 2.788 0 019.26 8.607a2.81 2.81 0 013.189-3.189 2.79 2.79 0 012.365 2.365 2.81 2.81 0 01-2.365 3.188z"
  }));
}

IconUser.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconUser;
//# sourceMappingURL=IconUser.js.map
