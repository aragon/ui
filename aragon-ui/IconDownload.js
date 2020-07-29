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

function IconDownload(_ref) {
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
    d: "M18.618 15.03a.646.646 0 00-.646.647v2.206c0 .454-.37.824-.824.824H6.852a.825.825 0 01-.824-.824v-2.206a.646.646 0 00-1.293 0v2.206A2.12 2.12 0 006.853 20h10.295a2.12 2.12 0 002.117-2.117v-2.206a.646.646 0 00-.647-.646z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M15.399 11.543a.646.646 0 00-.914 0L12 14.027l-2.484-2.484a.646.646 0 00-.914.914l2.941 2.941a.646.646 0 00.914 0l2.941-2.941a.646.646 0 000-.914z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M12 4a.646.646 0 00-.646.646v10.296a.646.646 0 001.292 0V4.646A.646.646 0 0012 4z"
  }));
}

IconDownload.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconDownload;
//# sourceMappingURL=IconDownload.js.map
