'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-1b94f6bc.js');
require('./index-46d0e707.js');
require('./defineProperty-3cad0327.js');
require('./toConsumableArray-cc0d28a9.js');
require('styled-components');
require('./getPrototypeOf-55c9e80c.js');
require('./color.js');
require('./css.js');
require('./miscellaneous.js');
var environment = require('./environment.js');
require('./font.js');
require('./keycodes.js');
require('./constants.js');
require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./Theme.js');
var _extends$1 = require('./extends-023d783e.js');
require('./objectWithoutProperties-c6d3675c.js');
require('./FocusVisible.js');
require('./ButtonBase.js');
var Link = require('./Link.js');

function ExternalLink(props) {
  environment.warnOnce('ExternalLink', 'ExternalLink is deprecated. Please use Link instead.');
  return /*#__PURE__*/React__default.createElement(Link.default, _extends$1._extends_1({
    external: true
  }, props));
}

function SafeLink(props) {
  environment.warnOnce('SafeLink', 'SafeLink is deprecated. Please use Link instead.');
  return /*#__PURE__*/React__default.createElement(Link.default, props);
}

exports.ExternalLink = ExternalLink;
exports.SafeLink = SafeLink;
//# sourceMappingURL=LinkDeprecated.js.map
