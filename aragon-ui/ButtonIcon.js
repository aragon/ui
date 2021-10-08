'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-37353731.js');
var Button = require('./Button.js');
var ButtonBase = require('./ButtonBase.js');
var environment = require('./environment.js');
var constants = require('./constants.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./index-c33eeeef.js');
require('./Layout.js');
require('./defineProperty-3cad0327.js');
require('./Viewport-71f7efe6.js');
require('./getPrototypeOf-55c9e80c.js');
require('./_baseGetTag-6ec23aaa.js');
require('./breakpoints.js');
require('./css.js');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./toConsumableArray-cc0d28a9.js');
require('./text-styles.js');
require('./font.js');
require('./FocusVisible.js');
require('./keycodes.js');
require('./miscellaneous.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _StyledButtonBase = _styled__default['default'](ButtonBase['default']).withConfig({
  displayName: "ButtonIcon___StyledButtonBase",
  componentId: "sc-1e3i514-0"
})(["display:inline-flex;justify-content:center;align-items:center;width:", "px;height:", "px;&:active{background:rgba(220,234,239,0.3);}"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

function ButtonIcon(_ref) {
  var label = _ref.label,
      children = _ref.children,
      mode = _ref.mode,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["label", "children", "mode"]);

  if (mode !== undefined) {
    environment.warnOnce('ButtonIcon:mode', 'ButtonIcon: the mode prop is deprecated. Please use Button with the icon prop instead.');
  }

  if (mode === 'button') {
    return /*#__PURE__*/React__default['default'].createElement(Button['default'], _extends._extends_1({
      label: label,
      icon: children,
      display: "icon"
    }, props));
  }

  return /*#__PURE__*/React__default['default'].createElement(_StyledButtonBase, _extends._extends_1({
    title: label
  }, props, {
    _css: 4 * constants.GU,
    _css2: 4 * constants.GU
  }), children);
}

ButtonIcon.propTypes = {
  label: index.propTypes.string.isRequired,
  children: index.propTypes.node.isRequired,
  // deprecated
  mode: index.propTypes.oneOf(['button'])
};

exports.default = ButtonIcon;
//# sourceMappingURL=ButtonIcon.js.map
