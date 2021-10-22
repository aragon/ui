'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var proptypes = require('./proptypes-316e1def.js');
var AddressField = require('./AddressField.js');
var BadgePopoverBase = require('./BadgePopoverBase.js');
var Link = require('./Link.js');
var web3 = require('./web3-4ef44cda.js');
var useImageExists = require('./useImageExists.js');
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
require('./BadgePopoverActionType.js');
require('./IconCross.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var TokenBadgePopover = /*#__PURE__*/React__default['default'].memo(function TokenBadgePopover(_ref) {
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
  return /*#__PURE__*/React__default['default'].createElement(BadgePopoverBase['default'], {
    addressField: iconSrc ? /*#__PURE__*/React__default['default'].createElement(useImageExists.ImageExists, {
      src: iconSrc
    }, function (_ref2) {
      var exists = _ref2.exists;
      return /*#__PURE__*/React__default['default'].createElement(AddressField['default'], {
        address: address,
        icon: exists ? /*#__PURE__*/React__default['default'].createElement(Icon, {
          src: iconSrc
        }) : null
      });
    }) : /*#__PURE__*/React__default['default'].createElement(AddressField['default'], {
      address: address
    }),
    link: etherscanUrl && /*#__PURE__*/React__default['default'].createElement(Link['default'], {
      href: etherscanUrl
    }, "See on Explorer"),
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

var _StyledDiv = _styled__default['default']("div").withConfig({
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
  return /*#__PURE__*/React__default['default'].createElement(_StyledDiv, {
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
