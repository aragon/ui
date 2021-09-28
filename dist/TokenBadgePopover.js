'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var proptypes = require('./proptypes-2243b0d5.js');
var AddressField = require('./AddressField.js');
var BadgePopoverBase = require('./BadgePopoverBase.js');
var Link = require('./Link.js');
var web3 = require('./web3-e13b67d7.js');
var useImageExists = require('./useImageExists.js');
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
require('./BadgePopoverActionType.js');
require('./IconCross.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const TokenBadgePopover = /*#__PURE__*/React__default["default"].memo(function TokenBadgePopover({
  address,
  iconSrc,
  networkType,
  onClose,
  opener,
  title,
  visible
}) {
  const etherscanUrl = web3.blockExplorerUrl('token', address, {
    networkType
  });
  return /*#__PURE__*/React__default["default"].createElement(BadgePopoverBase["default"], {
    addressField: iconSrc ? /*#__PURE__*/React__default["default"].createElement(useImageExists.ImageExists, {
      src: iconSrc
    }, ({
      exists
    }) => /*#__PURE__*/React__default["default"].createElement(AddressField["default"], {
      address: address,
      icon: exists ? /*#__PURE__*/React__default["default"].createElement(Icon, {
        src: iconSrc
      }) : null
    })) : /*#__PURE__*/React__default["default"].createElement(AddressField["default"], {
      address: address
    }),
    link: etherscanUrl && /*#__PURE__*/React__default["default"].createElement(Link["default"], {
      href: etherscanUrl
    }, "See on Etherscan"),
    onClose: onClose,
    opener: opener,
    title: title,
    visible: visible
  });
});
TokenBadgePopover.propTypes = {
  address: proptypes.PropTypes.string.isRequired,
  iconSrc: proptypes.PropTypes.string,
  networkType: proptypes.PropTypes.string,
  onClose: proptypes.PropTypes.func,
  opener: proptypes.PropTypes._element,
  title: proptypes.PropTypes.string.isRequired,
  visible: proptypes.PropTypes.bool
};

function Icon({
  src
}) {
  return /*#__PURE__*/React__default["default"].createElement(_StyledDiv, {
    $_css: 0.5 * constants.GU,
    $_css2: 0.5 * constants.GU,
    $_css3: src
  });
}

Icon.propTypes = {
  src: proptypes.PropTypes.string.isRequired
};

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "TokenBadgePopover___StyledDiv",
  componentId: "sc-8b2bwa-0"
})(["width:calc(100% - ", "px);height:calc(100% - ", "px);background-size:contain;background-position:50% 50%;background-repeat:no-repeat;background-image:url(", ");"], p => p.$_css, p => p.$_css2, p => p.$_css3);

exports["default"] = TokenBadgePopover;
//# sourceMappingURL=TokenBadgePopover.js.map
