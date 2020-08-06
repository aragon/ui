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

function IconUnlock(_ref) {
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
    d: "M17.669 10.48H6.332A2.334 2.334 0 004 12.812v5.668a2.334 2.334 0 002.332 2.332h11.337A2.334 2.334 0 0020 18.48v-5.668a2.334 2.334 0 00-2.331-2.332zm.907 8c0 .5-.407.908-.907.908H6.332a.909.909 0 01-.908-.908v-5.668c0-.5.407-.908.908-.908h11.337c.5 0 .907.407.907.908v5.668z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M16.666 6.813a4.774 4.774 0 00-1.655-2.74A4.773 4.773 0 0012 3h-.005A4.73 4.73 0 008.63 4.398a4.73 4.73 0 00-1.39 3.367v3.239a.712.712 0 101.423 0v-3.24c0-.891.345-1.73.975-2.36a3.315 3.315 0 012.359-.98H12a3.347 3.347 0 013.27 2.673.712.712 0 101.396-.284z"
  }));
}

IconUnlock.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconUnlock;
//# sourceMappingURL=IconUnlock.js.map
