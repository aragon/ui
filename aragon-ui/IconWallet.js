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

function IconWallet(_ref) {
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
    d: "M4 8.577c0-.329.266-.595.595-.595h14.81c.328 0 .595.266.595.595v10.815a.595.595 0 01-.595.595H4.595A.595.595 0 014 19.392V8.577zm1.19.595v9.625h13.62V9.172H5.19z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M13.033 13.862a2.562 2.562 0 012.562-2.562h3.564c.329 0 .595.266.595.595v3.933a.595.595 0 01-.595.595h-3.564a2.562 2.562 0 01-2.562-2.561zm2.562-1.372a1.371 1.371 0 100 2.743h2.969V12.49h-2.97z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M15.821 14.65a.778.778 0 100-1.556.778.778 0 000 1.557zm-.359-8.265c.078-.017.167-.04.25-.06l.05-.013a6.67 6.67 0 01.322-.073c.224-.045.413-.06.559-.04.131.02.196.062.242.123.058.076.146.263.146.686a.595.595 0 001.19 0c0-.568-.115-1.044-.384-1.402a1.514 1.514 0 00-1.024-.585c-.345-.05-.689-.004-.96.05a7.8 7.8 0 00-.438.1 6.18 6.18 0 01-.237.057L4.528 7.953a.595.595 0 00.295 1.153l10.639-2.721z",
    clipRule: "evenodd"
  }));
}

IconWallet.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconWallet;
//# sourceMappingURL=IconWallet.js.map
