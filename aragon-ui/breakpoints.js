'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
var constants = require('./constants.js');

var BREAKPOINTS = {
  min: 360,
  small: 360,
  medium: 96 * constants.GU,
  large: 144 * constants.GU
}; // CSS breakpoints

var breakpoint = function breakpoint(name, styles) {
  return _styled.css(["@media (min-width:", "px){", ";}"], BREAKPOINTS[name], styles);
};

exports.BREAKPOINTS = BREAKPOINTS;
exports.breakpoint = breakpoint;
//# sourceMappingURL=breakpoints.js.map
