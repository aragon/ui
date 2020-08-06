'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-1b94f6bc.js');
var index = require('./index-46d0e707.js');
require('./defineProperty-3cad0327.js');
require('./toConsumableArray-cc0d28a9.js');
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
require('./getPrototypeOf-55c9e80c.js');
require('./color.js');
require('./css.js');
require('./miscellaneous.js');
var environment = require('./environment.js');
require('./font.js');
require('./keycodes.js');
var constants = require('./constants.js');
require('./breakpoints.js');
require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./Theme.js');
var _extends = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
require('./index-f5a9917e.js');
require('./_baseGetTag-42b4dd3e.js');
require('./Viewport-abbde113.js');
require('./Layout.js');
require('./FocusVisible.js');
var ButtonBase = require('./ButtonBase.js');
var Button = require('./Button.js');

var _StyledButtonBase = _styled__default(ButtonBase.default).withConfig({
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
    return /*#__PURE__*/React__default.createElement(Button.default, _extends._extends_1({
      label: label,
      icon: children,
      display: "icon"
    }, props));
  }

  return /*#__PURE__*/React__default.createElement(_StyledButtonBase, _extends._extends_1({
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
