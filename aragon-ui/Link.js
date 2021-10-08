'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('./defineProperty-3cad0327.js');
var _extends = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-37353731.js');
var ButtonBase = require('./ButtonBase.js');
var Theme = require('./Theme.js');
var constants = require('./constants.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./FocusVisible.js');
require('./getPrototypeOf-55c9e80c.js');
require('./keycodes.js');
require('./css.js');
require('./environment.js');
require('./miscellaneous.js');
require('./text-styles.js');
require('./font.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./toConsumableArray-cc0d28a9.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty.defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _StyledButtonBase = _styled__default['default'](ButtonBase['default']).withConfig({
  displayName: "Link___StyledButtonBase",
  componentId: "sc-57j27s-0"
})(["color:", ";text-decoration:", ";font-size:inherit;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

function Link(_ref) {
  var onClick = _ref.onClick,
      href = _ref.href,
      external = _ref.external,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["onClick", "href", "external"]);

  var theme = Theme.useTheme(); // `external` defaults to `true` if `href` is present, `false` otherwise.

  if (external === undefined) {
    external = Boolean(href);
  }

  return /*#__PURE__*/React__default['default'].createElement(_StyledButtonBase, _extends._extends_1({
    href: href,
    onClick: onClick,
    external: external,
    focusRingSpacing: [6, 2],
    focusRingRadius: constants.RADIUS
  }, props, {
    _css: theme.link,
    _css2: external ? 'underline' : 'none'
  }));
}

Link.propTypes = _objectSpread(_objectSpread({}, ButtonBase['default'].propTypes), {}, {
  href: index.propTypes.string,
  onClick: index.propTypes.func,
  external: index.propTypes.bool
});

exports.default = Link;
//# sourceMappingURL=Link.js.map
