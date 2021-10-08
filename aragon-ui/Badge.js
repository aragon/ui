'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var React = require('react');
var Tag = require('./Tag.js');
var environment = require('./environment.js');
var Theme = require('./Theme.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('styled-components');
require('./index-37353731.js');
require('./css.js');
require('./constants.js');
require('./text-styles.js');
require('./defineProperty-3cad0327.js');
require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./font.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./miscellaneous.js');
require('./color.js');
require('./getPrototypeOf-55c9e80c.js');
require('./toConsumableArray-cc0d28a9.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function deprecationWarning() {
  environment.warnOnce('Badge', '"Badge" and its variants have been deprecated. Please use "Tag" instead.');
}
/* eslint-disable react/prop-types */


function Badge(_ref) {
  var background = _ref.background,
      foreground = _ref.foreground,
      shape = _ref.shape,
      children = _ref.children,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["background", "foreground", "shape", "children"]);

  deprecationWarning();
  return /*#__PURE__*/React__default['default'].createElement(Tag['default'], _extends._extends_1({
    background: background,
    color: foreground,
    size: shape === 'smalldisc' || shape === 'compact' ? 'small' : 'normal'
  }, props), children);
}

function BadgeNumber(_ref2) {
  var background = _ref2.background,
      children = _ref2.children,
      foreground = _ref2.foreground,
      label = _ref2.label;
      _ref2.shape;
      var small = _ref2.small,
      props = objectWithoutProperties.objectWithoutProperties(_ref2, ["background", "children", "foreground", "label", "shape", "small"]);

  deprecationWarning();

  if (!children && typeof label === 'number') {
    return /*#__PURE__*/React__default['default'].createElement(Badge, _extends._extends_1({
      limitDigits: true,
      background: background,
      color: foreground,
      label: label,
      size: small ? 'small' : 'normal'
    }, props));
  }

  return /*#__PURE__*/React__default['default'].createElement(Tag['default'], _extends._extends_1({
    count: true,
    background: background,
    color: foreground
  }, props), children || label);
}

function BadgeInfo(props) {
  return /*#__PURE__*/React__default['default'].createElement(BadgeNumber, props);
}

function BadgeIdentity(props) {
  return /*#__PURE__*/React__default['default'].createElement(Badge, _extends._extends_1({}, props, {
    uppercase: false
  }));
}

function BadgeApp(props) {
  return /*#__PURE__*/React__default['default'].createElement(Badge, _extends._extends_1({}, props, {
    mode: "identifier"
  }));
}

function BadgeNotification(props) {
  var theme = Theme.useTheme();
  return /*#__PURE__*/React__default['default'].createElement(BadgeNumber, _extends._extends_1({
    background: String(theme.positive),
    foreground: String(theme.positiveContent)
  }, props));
}
/* eslint-enable react/prop-types */


Badge.Info = BadgeInfo;
Badge.Notification = BadgeNotification;
Badge.Identity = BadgeIdentity;
Badge.App = BadgeApp;

exports.BadgeNumber = BadgeNumber;
exports.default = Badge;
//# sourceMappingURL=Badge.js.map
