'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var proptypes = require('./proptypes-316e1def.js');
var AddressField = require('./AddressField.js');
var BadgePopoverBase = require('./BadgePopoverBase.js');
var BadgePopoverActionType = require('./BadgePopoverActionType.js');
var Link = require('./Link.js');
var Tag = require('./Tag.js');
var web3 = require('./web3-4ef44cda.js');
var constants = require('./constants.js');
require('./defineProperty-3cad0327.js');
require('./index-37353731.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./objectWithoutProperties-c6d3675c.js');
require('./TextCopy.js');
require('./extends-023d783e.js');
require('./TextInput.js');
require('./Theme.js');
require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
require('./getPrototypeOf-55c9e80c.js');
require('./toConsumableArray-cc0d28a9.js');
require('./text-styles.js');
require('./font.js');
require('./ButtonIcon.js');
require('./Button.js');
require('./index-c33eeeef.js');
require('./Layout.js');
require('./Viewport-71f7efe6.js');
require('./_baseGetTag-6ec23aaa.js');
require('./breakpoints.js');
require('./css.js');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./keycodes.js');
require('./ToastHub.js');
require('./web-46d746d6.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
require('./RootPortal.js');
require('./Root-07f851a6.js');
require('./components.js');
require('./springs.js');
require('./IconCopy.js');
require('./IconPropTypes-b9997416.js');
require('./EthIdenticon.js');
require('./Popover.js');
require('./IconCross.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _StyledTag = _styled__default['default'](Tag['default']).withConfig({
  displayName: "IdentityBadgePopover___StyledTag",
  componentId: "sc-1yeyfty-0"
})(["margin-left:", "px;"], function (p) {
  return p._css;
});

var IdentityBadgePopover = /*#__PURE__*/React__default['default'].memo(function IdentityBadgePopover(_ref) {
  var address = _ref.address,
      connectedAccount = _ref.connectedAccount,
      networkType = _ref.networkType,
      onClose = _ref.onClose,
      opener = _ref.opener,
      popoverAction = _ref.popoverAction,
      title = _ref.title,
      visible = _ref.visible;
  var etherscanUrl = web3.blockExplorerUrl('address', address, {
    networkType: networkType
  });
  return /*#__PURE__*/React__default['default'].createElement(BadgePopoverBase['default'], {
    addressField: /*#__PURE__*/React__default['default'].createElement(AddressField['default'], {
      address: address
    }),
    link: etherscanUrl && /*#__PURE__*/React__default['default'].createElement(Link['default'], {
      href: etherscanUrl
    }, "See on Explorer"),
    onClose: onClose,
    opener: opener,
    popoverAction: popoverAction,
    title: title,
    titleTag: connectedAccount && /*#__PURE__*/React__default['default'].createElement(_StyledTag, {
      title: "This is your Ethereum address",
      _css: 1 * constants.GU
    }, "you"),
    visible: visible
  });
});
IdentityBadgePopover.propTypes = {
  address: proptypes.ExtendedPropTypes.string,
  connectedAccount: proptypes.ExtendedPropTypes.bool,
  networkType: proptypes.ExtendedPropTypes.string,
  onClose: proptypes.ExtendedPropTypes.func,
  opener: proptypes.ExtendedPropTypes._element,
  popoverAction: BadgePopoverActionType['default'],
  title: proptypes.ExtendedPropTypes.node,
  visible: proptypes.ExtendedPropTypes.bool
};
IdentityBadgePopover.defaultProps = {
  title: 'Address'
};

exports.default = IdentityBadgePopover;
//# sourceMappingURL=IdentityBadgePopover.js.map
