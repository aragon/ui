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

function IconTrash(_ref) {
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
    d: "M18.618 6.941H5.382a.646.646 0 000 1.293h13.236a.646.646 0 100-1.293z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M17.148 6.941a.646.646 0 00-.647.647v10.295c0 .454-.37.824-.824.824H8.323a.825.825 0 01-.824-.824V7.588a.646.646 0 00-1.293 0v10.295A2.12 2.12 0 008.323 20h7.354a2.12 2.12 0 002.117-2.117V7.588a.646.646 0 00-.646-.647z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M13.47 4h-2.94a2.12 2.12 0 00-2.118 2.117v1.47a.646.646 0 001.293 0v-1.47c0-.455.37-.824.824-.824h2.942c.454 0 .824.37.824.824v1.47a.646.646 0 001.293 0v-1.47A2.12 2.12 0 0013.47 4zm-2.94 6.618a.646.646 0 00-.647.647v4.412a.646.646 0 101.293 0v-4.412a.646.646 0 00-.647-.647zm2.94 0a.646.646 0 00-.646.647v4.412a.646.646 0 101.293 0v-4.412a.646.646 0 00-.646-.647z"
  }));
}

IconTrash.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconTrash;
//# sourceMappingURL=IconTrash.js.map
