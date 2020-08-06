'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-1b94f6bc.js');
var index = require('./index-46d0e707.js');
var defineProperty = require('./defineProperty-3cad0327.js');
require('./toConsumableArray-cc0d28a9.js');
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
require('./getPrototypeOf-55c9e80c.js');
require('./color.js');
require('./css.js');
require('./miscellaneous.js');
require('./environment.js');
require('./font.js');
require('./keycodes.js');
var constants = require('./constants.js');
require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');
var _extends = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
require('./FocusVisible.js');
var ButtonBase = require('./ButtonBase.js');

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty.defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _StyledButtonBase = _styled__default(ButtonBase.default).withConfig({
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
  return /*#__PURE__*/React__default.createElement(_StyledButtonBase, _extends._extends_1({}, props, {
    _css: 1 * constants.GU,
    _css2: rightPadding,
    _css3: 1 * constants.GU,
    _css4: leftPadding,
    _css5: theme.link
  }));
}

ButtonText.propTypes = _objectSpread(_objectSpread({}, ButtonBase.default.propTypes), {}, {
  horizontalPadding: index.propTypes.oneOf(['both', 'left', 'right', 'none'])
});
ButtonText.defaultProps = {
  horizontalPadding: 'both'
};

exports.default = ButtonText;
//# sourceMappingURL=ButtonText.js.map
