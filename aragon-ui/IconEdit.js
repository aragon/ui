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

function IconEdit(_ref) {
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
    d: "M17.883 13.31a.646.646 0 00-.646.646v3.927c0 .455-.37.825-.825.825H6.117a.825.825 0 01-.824-.825V7.588c0-.455.37-.825.824-.825h3.927a.646.646 0 100-1.292H6.117A2.12 2.12 0 004 7.588v10.295A2.12 2.12 0 006.117 20h10.295a2.12 2.12 0 002.117-2.117v-3.927a.646.646 0 00-.646-.646z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M19.81 7.13l-2.94-2.94a.646.646 0 00-.915 0l-7.354 7.353a.646.646 0 00-.189.457v2.942c0 .357.29.646.646.646H12a.646.646 0 00.457-.19l7.354-7.353a.646.646 0 000-.914zm-8.078 7.165H9.705v-2.027l6.707-6.708 2.028 2.028-6.708 6.707z"
  }));
}

IconEdit.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconEdit;
//# sourceMappingURL=IconEdit.js.map
