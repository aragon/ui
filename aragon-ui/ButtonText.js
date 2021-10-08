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
  displayName: "ButtonText___StyledButtonBase",
  componentId: "i6an1t-0"
})(["padding:", "px ", "px ", "px ", "px;color:", ";font-size:inherit;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

function ButtonText(_ref) {
  var horizontalPadding = _ref.horizontalPadding,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["horizontalPadding"]);

  var theme = Theme.useTheme();
  var leftPadding = Number(horizontalPadding === 'left' || horizontalPadding === 'both') * constants.GU;
  var rightPadding = Number(horizontalPadding === 'right' || horizontalPadding === 'both') * constants.GU;
  return /*#__PURE__*/React__default['default'].createElement(_StyledButtonBase, _extends._extends_1({}, props, {
    _css: 1 * constants.GU,
    _css2: rightPadding,
    _css3: 1 * constants.GU,
    _css4: leftPadding,
    _css5: theme.link
  }));
}

ButtonText.propTypes = _objectSpread(_objectSpread({}, ButtonBase['default'].propTypes), {}, {
  horizontalPadding: index.propTypes.oneOf(['both', 'left', 'right', 'none'])
});
ButtonText.defaultProps = {
  horizontalPadding: 'both'
};

exports.default = ButtonText;
//# sourceMappingURL=ButtonText.js.map
