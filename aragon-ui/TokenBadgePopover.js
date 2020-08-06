'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-1b94f6bc.js');
require('./index-46d0e707.js');
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
var web3 = require('./web3-4e58c255.js');
var constants = require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./Theme.js');
require('./extends-023d783e.js');
require('./objectWithoutProperties-c6d3675c.js');
require('./index-f5a9917e.js');
require('./_baseGetTag-42b4dd3e.js');
require('./Viewport-abbde113.js');
require('./Layout.js');
require('./FocusVisible.js');
require('./ButtonBase.js');
require('./IconPropTypes-dd9d2cb1.js');
require('./IconCopy.js');
require('./IconCross.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
require('./web-d0294535.js');
require('./Button.js');
require('./ButtonIcon.js');
var Link = require('./Link.js');
require('./TextInput.js');
require('./ToastHub.js');
require('./Root-fd39454b.js');
require('./RootPortal.js');
require('./TextCopy.js');
require('./EthIdenticon.js');
var AddressField = require('./AddressField.js');
var useImageExists = require('./useImageExists.js');
require('./BadgePopoverActionType.js');
var proptypes = require('./proptypes-b2a781f4.js');
require('./Popover.js');
var BadgePopoverBase = require('./BadgePopoverBase.js');

var TokenBadgePopover = /*#__PURE__*/React__default.memo(function TokenBadgePopover(_ref) {
  var address = _ref.address,
      iconSrc = _ref.iconSrc,
      networkType = _ref.networkType,
      onClose = _ref.onClose,
      opener = _ref.opener,
      title = _ref.title,
      visible = _ref.visible;
  var etherscanUrl = web3.blockExplorerUrl('token', address, {
    networkType: networkType
  });
  return /*#__PURE__*/React__default.createElement(BadgePopoverBase.default, {
    addressField: iconSrc ? /*#__PURE__*/React__default.createElement(useImageExists.ImageExists, {
      src: iconSrc
    }, function (_ref2) {
      var exists = _ref2.exists;
      return /*#__PURE__*/React__default.createElement(AddressField.default, {
        address: address,
        icon: exists ? /*#__PURE__*/React__default.createElement(Icon, {
          src: iconSrc
        }) : null
      });
    }) : /*#__PURE__*/React__default.createElement(AddressField.default, {
      address: address
    }),
    link: etherscanUrl && /*#__PURE__*/React__default.createElement(Link.default, {
      href: etherscanUrl
    }, "See on Etherscan"),
    onClose: onClose,
    opener: opener,
    title: title,
    visible: visible
  });
});
TokenBadgePopover.propTypes = {
  address: proptypes.ExtendedPropTypes.string.isRequired,
  iconSrc: proptypes.ExtendedPropTypes.string,
  networkType: proptypes.ExtendedPropTypes.string,
  onClose: proptypes.ExtendedPropTypes.func,
  opener: proptypes.ExtendedPropTypes._element,
  title: proptypes.ExtendedPropTypes.string.isRequired,
  visible: proptypes.ExtendedPropTypes.bool
};

var _StyledDiv = _styled__default("div").withConfig({
  displayName: "TokenBadgePopover___StyledDiv",
  componentId: "sc-8b2bwa-0"
})(["width:calc(100% - ", "px);height:calc(100% - ", "px);background-size:contain;background-position:50% 50%;background-repeat:no-repeat;background-image:url(", ");"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

function Icon(_ref3) {
  var src = _ref3.src;
  return /*#__PURE__*/React__default.createElement(_StyledDiv, {
    _css: 0.5 * constants.GU,
    _css2: 0.5 * constants.GU,
    _css3: src
  });
}

Icon.propTypes = {
  src: proptypes.ExtendedPropTypes.string.isRequired
};

exports.default = TokenBadgePopover;
//# sourceMappingURL=TokenBadgePopover.js.map
