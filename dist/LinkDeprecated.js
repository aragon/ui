'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var React = require('react');
var Link = require('./Link.js');
var environment = require('./environment.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('styled-components');
require('./index-19b0c963.js');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./defineProperty-fdbd3c46.js');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./keycodes.js');
require('./css.js');
require('./constants.js');
require('./text-styles.js');
require('./font.js');
require('./miscellaneous.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ExternalLink(props) {
  environment.warnOnce('ExternalLink', 'ExternalLink is deprecated. Please use Link instead.');
  return /*#__PURE__*/React__default["default"].createElement(Link["default"], _extends._extends({
    external: true
  }, props));
}

function SafeLink(props) {
  environment.warnOnce('SafeLink', 'SafeLink is deprecated. Please use Link instead.');
  return /*#__PURE__*/React__default["default"].createElement(Link["default"], props);
}

exports.ExternalLink = ExternalLink;
exports.SafeLink = SafeLink;
//# sourceMappingURL=LinkDeprecated.js.map
