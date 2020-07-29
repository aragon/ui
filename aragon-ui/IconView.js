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

function IconView(_ref) {
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
    d: "M20.923 11.675c-.033-.066-.816-1.617-2.282-3.18-.87-.93-1.805-1.672-2.776-2.208-1.24-.684-2.54-1.03-3.865-1.03-1.325 0-2.626.346-3.865 1.03-.971.536-1.905 1.278-2.776 2.207-1.466 1.564-2.25 3.116-2.282 3.18a.727.727 0 000 .651c.032.066.816 1.617 2.282 3.18.87.93 1.805 1.672 2.776 2.208 1.24.684 2.54 1.03 3.865 1.03 1.325 0 2.625-.346 3.865-1.03.971-.536 1.905-1.278 2.776-2.207 1.466-1.564 2.25-3.116 2.282-3.18a.728.728 0 000-.651zM12 17.29c-1.964 0-3.833-.926-5.555-2.752A14.138 14.138 0 014.557 12C5.249 10.802 7.916 6.71 12 6.71c1.964 0 3.833.926 5.554 2.752A14.137 14.137 0 0119.444 12c-.694 1.198-3.36 5.29-7.444 5.29z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M12 9.017A2.987 2.987 0 009.017 12 2.987 2.987 0 0012 14.983 2.987 2.987 0 0014.983 12 2.987 2.987 0 0012 9.017zm0 4.512A1.53 1.53 0 0110.471 12c0-.843.686-1.53 1.53-1.53a1.53 1.53 0 010 3.058z"
  }));
}

IconView.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconView;
//# sourceMappingURL=IconView.js.map
