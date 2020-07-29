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

function IconConfiguration(_ref) {
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
    fillRule: "evenodd",
    d: "M21 17.318a.69.69 0 01-.69.69h-1.996a.69.69 0 110-1.38h1.997c.38 0 .689.31.689.69zm-6.047 0a.69.69 0 01-.69.69H3.69a.69.69 0 010-1.38h10.575c.38 0 .69.31.69.69zm-8.859-5.245a.69.69 0 01-.69.69H3.69a.69.69 0 110-1.38h1.715a.69.69 0 01.69.69zm14.906 0a.69.69 0 01-.69.69H9.597a.69.69 0 110-1.38H20.31a.69.69 0 01.689.69zm-5.906-5.246a.69.69 0 01-.69.69H3.69a.69.69 0 010-1.38h10.715c.38 0 .69.31.69.69zm5.906 0a.69.69 0 01-.69.69h-1.996a.69.69 0 010-1.38h1.997c.38 0 .689.31.689.69z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M13.912 6.665a2.342 2.342 0 114.684 0 2.342 2.342 0 01-4.684 0zm2.342-.963a.963.963 0 100 1.926.963.963 0 000-1.926zm-2.342 11.454a2.342 2.342 0 114.684 0 2.342 2.342 0 01-4.684 0zm2.342-.963a.963.963 0 100 1.926.963.963 0 000-1.926zM5.123 11.91a2.342 2.342 0 114.684 0 2.342 2.342 0 01-4.684 0zm2.342-.962a.963.963 0 100 1.925.963.963 0 000-1.925z",
    clipRule: "evenodd"
  }));
}

IconConfiguration.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconConfiguration;
//# sourceMappingURL=IconConfiguration.js.map
