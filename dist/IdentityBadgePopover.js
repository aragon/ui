'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var proptypes = require('./proptypes-2243b0d5.js');
var AddressField = require('./AddressField.js');
var BadgePopoverBase = require('./BadgePopoverBase.js');
var BadgePopoverActionType = require('./BadgePopoverActionType.js');
var Link = require('./Link.js');
var Tag = require('./Tag.js');
var web3 = require('./web3-e13b67d7.js');
var constants = require('./constants.js');
require('./index-19b0c963.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./TextCopy.js');
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
require('./EthIdenticon.js');
require('./Popover.js');
require('./IconCross.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const IdentityBadgePopover = /*#__PURE__*/React__default["default"].memo(function IdentityBadgePopover({
  address,
  connectedAccount,
  networkType,
  onClose,
  opener,
  popoverAction,
  title,
  visible
}) {
  const etherscanUrl = web3.blockExplorerUrl('address', address, {
    networkType
  });
  return /*#__PURE__*/React__default["default"].createElement(BadgePopoverBase["default"], {
    addressField: /*#__PURE__*/React__default["default"].createElement(AddressField["default"], {
      address: address
    }),
    link: etherscanUrl && /*#__PURE__*/React__default["default"].createElement(Link["default"], {
      href: etherscanUrl
    }, "See on Etherscan"),
    onClose: onClose,
    opener: opener,
    popoverAction: popoverAction,
    title: title,
    titleTag: connectedAccount && /*#__PURE__*/React__default["default"].createElement(_StyledTag, {
      title: "This is your Ethereum address",
      $_css: 1 * constants.GU
    }, "you"),
    visible: visible
  });
});
IdentityBadgePopover.propTypes = {
  address: proptypes.PropTypes.string,
  connectedAccount: proptypes.PropTypes.bool,
  networkType: proptypes.PropTypes.string,
  onClose: proptypes.PropTypes.func,
  opener: proptypes.PropTypes._element,
  popoverAction: BadgePopoverActionType["default"],
  title: proptypes.PropTypes.node,
  visible: proptypes.PropTypes.bool
};
IdentityBadgePopover.defaultProps = {
  title: 'Address'
};

var _StyledTag = _styled__default["default"](Tag["default"]).withConfig({
  displayName: "IdentityBadgePopover___StyledTag",
  componentId: "sc-1yeyfty-0"
})(["margin-left:", "px;"], p => p.$_css);

exports["default"] = IdentityBadgePopover;
//# sourceMappingURL=IdentityBadgePopover.js.map
