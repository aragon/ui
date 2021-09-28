'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var TextCopy = require('./TextCopy.js');
var EthIdenticon = require('./EthIdenticon.js');
var constants = require('./constants.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./extends-5150c1f4.js');
require('./TextInput.js');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
require('./text-styles.js');
require('./font.js');
require('./ButtonIcon.js');
require('./Button.js');
require('./index-70e12149.js');
require('./Layout.js');
require('./Viewport-b495052b.js');
require('./defineProperty-fdbd3c46.js');
require('./isObject-f0a96713.js');
require('./breakpoints.js');
require('./css.js');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./keycodes.js');
require('./ToastHub.js');
require('./web-17920307.js');
require('./objectWithoutPropertiesLoose-34dfcdd4.js');
require('react-dom');
require('./RootPortal.js');
require('./Root-6628d0a4.js');
require('./components.js');
require('./springs.js');
require('./IconCopy.js');
require('./IconPropTypes-435c57cb.js');
require('./web3-e13b67d7.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const HEIGHT = 5 * constants.GU;
const IDENTICON_SIZE = 6 * constants.GU;
const AddressField = /*#__PURE__*/React__default["default"].forwardRef(function AddressField({
  address,
  autofocus,
  icon,
  onCopy,
  ...props
}, ref) {
  return /*#__PURE__*/React__default["default"].createElement(TextCopy["default"], {
    ref: ref,
    adornment: icon || /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(_StyledEthIdenticon, {
      address: address,
      onCopy: onCopy,
      scale: 2,
      $_css: (HEIGHT - 2) / IDENTICON_SIZE
    })),
    autofocus: autofocus,
    value: address
  });
});
AddressField.propTypes = {
  address: index.PropTypes.string.isRequired,
  autofocus: index.PropTypes.bool,
  icon: index.PropTypes.node,
  onCopy: index.PropTypes.func
};
AddressField.defaultProps = {
  autofocus: true
};

var _StyledEthIdenticon = _styled__default["default"](EthIdenticon["default"]).withConfig({
  displayName: "AddressField___StyledEthIdenticon",
  componentId: "sc-m75adw-0"
})(["transform:scale(", ");transform-origin:50% 50%;"], p => p.$_css);

exports["default"] = AddressField;
//# sourceMappingURL=AddressField.js.map
