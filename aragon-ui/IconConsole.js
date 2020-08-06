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

function IconConsole(_ref) {
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
    stroke: "currentColor",
    strokeWidth: 0.8,
    d: "M4.884 4.819h0a.777.777 0 000 1.201L8.373 9l-3.489 2.98h0a.777.777 0 000 1.201.952.952 0 001.214 0l4.193-3.58s0 0 0 0A.79.79 0 0010.575 9a.79.79 0 00-.284-.6s0 0 0 0L6.098 4.818h0a.952.952 0 00-1.214 0zm13.801 8.887h-7.16a.676.676 0 00-.55.3.953.953 0 00-.165.547c0 .196.055.39.165.546a.675.675 0 00.55.301h7.16c.253 0 .44-.146.55-.3a.952.952 0 00.165-.547.953.953 0 00-.165-.546.676.676 0 00-.55-.301z"
  }));
}

IconConsole.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconConsole;
//# sourceMappingURL=IconConsole.js.map
