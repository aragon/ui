'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var React = require('react');
var Tag = require('./Tag.js');
var environment = require('./environment.js');
var Theme = require('./Theme.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('styled-components');
require('./index-19b0c963.js');
require('./css.js');
require('./constants.js');
require('./text-styles.js');
require('./font.js');
require('./miscellaneous.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function deprecationWarning() {
  environment.warnOnce('Badge', '"Badge" and its variants have been deprecated. Please use "Tag" instead.');
}
/* eslint-disable react/prop-types */


function Badge({
  background,
  foreground,
  shape,
  children,
  ...props
}) {
  deprecationWarning();
  return /*#__PURE__*/React__default["default"].createElement(Tag["default"], _extends._extends({
    background: background,
    color: foreground,
    size: shape === 'smalldisc' || shape === 'compact' ? 'small' : 'normal'
  }, props), children);
}

function BadgeNumber({
  background,
  children,
  foreground,
  label,
  shape,
  small,
  ...props
}) {
  deprecationWarning();

  if (!children && typeof label === 'number') {
    return /*#__PURE__*/React__default["default"].createElement(Badge, _extends._extends({
      limitDigits: true,
      background: background,
      color: foreground,
      label: label,
      size: small ? 'small' : 'normal'
    }, props));
  }

  return /*#__PURE__*/React__default["default"].createElement(Tag["default"], _extends._extends({
    count: true,
    background: background,
    color: foreground
  }, props), children || label);
}

function BadgeInfo(props) {
  return /*#__PURE__*/React__default["default"].createElement(BadgeNumber, props);
}

function BadgeIdentity(props) {
  return /*#__PURE__*/React__default["default"].createElement(Badge, _extends._extends({}, props, {
    uppercase: false
  }));
}

function BadgeApp(props) {
  return /*#__PURE__*/React__default["default"].createElement(Badge, _extends._extends({}, props, {
    mode: "identifier"
  }));
}

function BadgeNotification(props) {
  const theme = Theme.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(BadgeNumber, _extends._extends({
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
exports["default"] = Badge;
//# sourceMappingURL=Badge.js.map
