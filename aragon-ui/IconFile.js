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

function IconFile(_ref) {
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
    d: "M18.34 9.337l-5.148-5.148A.646.646 0 0012.735 4H7.588A2.12 2.12 0 005.47 6.117v11.766A2.12 2.12 0 007.588 20h8.824a2.12 2.12 0 002.117-2.117v-8.09a.646.646 0 00-.19-.456zm-1.103 8.546c0 .454-.37.824-.825.824H7.588a.825.825 0 01-.825-.824V6.117c0-.455.37-.824.825-.824h4.88l4.768 4.769v7.82z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M17.883 9.148h-4.501V4.646a.646.646 0 00-1.293 0v5.148c0 .357.29.646.646.646h5.148a.646.646 0 100-1.292z"
  }));
}

IconFile.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconFile;
//# sourceMappingURL=IconFile.js.map
