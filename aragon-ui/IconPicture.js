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

function IconPicture(_ref) {
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
    d: "M18.017 7.343h-2.329l-1.145-1.718a.646.646 0 00-.537-.288H9.994a.646.646 0 00-.537.288L8.312 7.343H5.983C4.89 7.343 4 8.233 4 9.326v7.354c0 1.093.89 1.983 1.983 1.983h12.034c1.093 0 1.983-.89 1.983-1.983V9.326c0-1.094-.89-1.983-1.983-1.983zm.69 9.337c0 .38-.31.69-.69.69H5.983c-.38 0-.69-.31-.69-.69V9.326c0-.38.31-.69.69-.69h2.674a.646.646 0 00.538-.289L10.34 6.63h3.32l1.145 1.717c.12.18.321.288.538.288h2.674c.38 0 .69.31.69.69v7.355z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M12 9.348a3.324 3.324 0 00-3.32 3.32 3.323 3.323 0 003.32 3.32c1.83 0 3.32-1.489 3.32-3.32 0-1.83-1.49-3.32-3.32-3.32zm0 5.348a2.03 2.03 0 01-2.028-2.027A2.03 2.03 0 0112 10.64a2.03 2.03 0 012.028 2.027A2.03 2.03 0 0112 14.697z"
  }));
}

IconPicture.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconPicture;
//# sourceMappingURL=IconPicture.js.map
