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
require('./components.js');
require('./css.js');
require('./miscellaneous.js');
require('./environment.js');
require('./font.js');
require('./keycodes.js');
require('./web3-4e58c255.js');
var constants = require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./Theme.js');
require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
require('./index-f5a9917e.js');
require('./_baseGetTag-42b4dd3e.js');
require('./Viewport-abbde113.js');
require('./Layout.js');
require('./FocusVisible.js');
require('./ButtonBase.js');
require('./IconPropTypes-dd9d2cb1.js');
require('./IconCopy.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
require('./web-d0294535.js');
require('./Button.js');
require('./ButtonIcon.js');
require('./TextInput.js');
require('./ToastHub.js');
require('./Root-fd39454b.js');
require('./RootPortal.js');
var TextCopy = require('./TextCopy.js');
var EthIdenticon = require('./EthIdenticon.js');

var HEIGHT = 5 * constants.GU;
var IDENTICON_SIZE = 6 * constants.GU;

var _StyledEthIdenticon = _styled__default(EthIdenticon.default).withConfig({
  displayName: "AddressField___StyledEthIdenticon",
  componentId: "m75adw-0"
})(["transform:scale(", ");transform-origin:50% 50%;"], function (p) {
  return p._css;
});

var AddressField = /*#__PURE__*/React__default.forwardRef(function AddressField(_ref, ref) {
  var address = _ref.address,
      autofocus = _ref.autofocus,
      icon = _ref.icon,
      onCopy = _ref.onCopy,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["address", "autofocus", "icon", "onCopy"]);

  return /*#__PURE__*/React__default.createElement(TextCopy.default, {
    ref: ref,
    adornment: icon || /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(_StyledEthIdenticon, {
      address: address,
      onCopy: onCopy,
      scale: 2,
      _css: (HEIGHT - 2) / IDENTICON_SIZE
    })),
    autofocus: autofocus,
    value: address
  });
});
AddressField.propTypes = {
  address: index.propTypes.string.isRequired,
  autofocus: index.propTypes.bool,
  icon: index.propTypes.node,
  onCopy: index.propTypes.func
};
AddressField.defaultProps = {
  autofocus: true
};

exports.default = AddressField;
//# sourceMappingURL=AddressField.js.map
