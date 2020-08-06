'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-1b94f6bc.js');
require('./index-46d0e707.js');
require('./miscellaneous.js');
require('./environment.js');
require('./constants.js');
var _extends$1 = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
require('./index-f5a9917e.js');
var IconPropTypes = require('./IconPropTypes-dd9d2cb1.js');

function IconFolder(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["size"]);

  var sizeValue = IconPropTypes.useIconSize(size);
  return /*#__PURE__*/React__default.createElement("svg", _extends$1._extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M17.883 6.941H11.61l-1.28-1.918a.646.646 0 00-.537-.288H6.117A2.12 2.12 0 004 6.852v10.296a2.12 2.12 0 002.117 2.117h11.766A2.12 2.12 0 0020 17.148v-8.09a2.12 2.12 0 00-2.117-2.117zm.824 10.207c0 .454-.37.824-.824.824H6.117a.825.825 0 01-.824-.824V6.852c0-.454.37-.824.824-.824h3.331l1.279 1.918c.12.18.322.288.538.288h6.618c.454 0 .824.37.824.825v8.089z"
  }));
}

IconFolder.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconFolder;
//# sourceMappingURL=IconFolder.js.map
