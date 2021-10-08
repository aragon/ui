'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var slicedToArray = require('./slicedToArray-a8a77f0e.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-37353731.js');
var BadgeBase = require('./BadgeBase.js');
var TokenBadgePopover = require('./TokenBadgePopover.js');
var web3 = require('./web3-4ef44cda.js');
var environment = require('./environment.js');
var useImageExists = require('./useImageExists.js');
var constants = require('./constants.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./index-c33eeeef.js');
require('./ButtonBase.js');
require('./defineProperty-3cad0327.js');
require('./FocusVisible.js');
require('./getPrototypeOf-55c9e80c.js');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./toConsumableArray-cc0d28a9.js');
require('./keycodes.js');
require('./css.js');
require('./text-styles.js');
require('./font.js');
require('./miscellaneous.js');
require('./proptypes-316e1def.js');
require('./AddressField.js');
require('./TextCopy.js');
require('./TextInput.js');
require('./ButtonIcon.js');
require('./Button.js');
require('./Layout.js');
require('./Viewport-71f7efe6.js');
require('./_baseGetTag-6ec23aaa.js');
require('./breakpoints.js');
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
require('./BadgePopoverBase.js');
require('./Popover.js');
require('./BadgePopoverActionType.js');
require('./IconCross.js');
require('./Link.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _StyledSpan = _styled__default['default']("span").withConfig({
  displayName: "TokenBadge___StyledSpan",
  componentId: "sc-7bvdqo-0"
})(["position:relative;top:1px;display:flex;flex-shrink:1;min-width:0;margin-left:", ";"], function (p) {
  return p._css;
});

var TokenBadge = /*#__PURE__*/React__default['default'].memo(function TokenBadge(_ref) {
  var address = _ref.address,
      badgeOnly = _ref.badgeOnly,
      className = _ref.className,
      compact = _ref.compact,
      name = _ref.name,
      networkType = _ref.networkType,
      style = _ref.style,
      symbol = _ref.symbol;
  var badgeRef = React.useRef(null);

  var _useState = React.useState(false),
      _useState2 = slicedToArray.slicedToArray(_useState, 2),
      opened = _useState2[0],
      setOpened = _useState2[1];

  var handleClose = React.useCallback(function () {
    return setOpened(false);
  }, []);
  var handleOpen = React.useCallback(function () {
    return setOpened(true);
  }, []);
  var isValidAddress = web3.isAddress(address);
  var iconSrc = isValidAddress && networkType === 'main' ? web3.tokenIconUrl(address) : null;
  var title = name && symbol ? "".concat(name, " (").concat(symbol, ")") : symbol;

  if (!isValidAddress) {
    environment.warn("TokenBadge: provided invalid address (".concat(address, ")"));
  }

  return /*#__PURE__*/React__default['default'].createElement(BadgeBase['default'], {
    badgeRef: badgeRef,
    className: className,
    compact: compact,
    disabled: badgeOnly,
    icon: /*#__PURE__*/React__default['default'].createElement(useImageExists.ImageExists, {
      src: iconSrc
    }, function (_ref2) {
      var exists = _ref2.exists;
      return exists && /*#__PURE__*/React__default['default'].createElement(Icon, {
        compact: compact,
        src: iconSrc
      });
    }),
    label: /*#__PURE__*/React__default['default'].createElement(_StyledSpan, {
      _css: compact ? 0 : "".concat(1 * constants.GU, "px")
    }, name && /*#__PURE__*/React__default['default'].createElement(Name, null, name), /*#__PURE__*/React__default['default'].createElement(_Symbol, null, name ? "(".concat(symbol, ")") : symbol)),
    onClick: isValidAddress ? handleOpen : undefined,
    style: style,
    title: "".concat(title, " \u2212 ").concat(address || 'No address')
  }, function (popoverDisabled) {
    return !popoverDisabled && address && /*#__PURE__*/React__default['default'].createElement(TokenBadgePopover['default'], {
      address: address,
      iconSrc: iconSrc,
      networkType: networkType,
      onClose: handleClose,
      opener: badgeRef.current,
      title: title,
      visible: opened
    });
  });
});
TokenBadge.propTypes = {
  address: index.propTypes.string,
  badgeOnly: index.propTypes.bool,
  className: index.propTypes.string,
  compact: index.propTypes.bool,
  name: index.propTypes.string,
  networkType: index.propTypes.string,
  style: index.propTypes.object,
  symbol: index.propTypes.string.isRequired
};
TokenBadge.defaultProps = {
  address: '',
  name: '',
  networkType: 'main'
};

var _StyledSpan2 = _styled__default['default']("span").withConfig({
  displayName: "TokenBadge___StyledSpan2",
  componentId: "sc-7bvdqo-1"
})(["flex-shrink:0;display:block;width:18px;height:18px;margin:0 ", "px 0 ", "px;background-size:contain;background-position:50% 50%;background-repeat:no-repeat;background-image:url(", ");"], function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
});

function Icon(_ref3) {
  var compact = _ref3.compact,
      src = _ref3.src,
      props = objectWithoutProperties.objectWithoutProperties(_ref3, ["compact", "src"]);

  var margin = 1 * constants.GU;
  return /*#__PURE__*/React__default['default'].createElement(_StyledSpan2, _extends._extends_1({}, props, {
    _css2: compact ? margin : 0,
    _css3: compact ? 0 : margin,
    _css4: src
  }));
}

Icon.propTypes = {
  compact: index.propTypes.bool,
  src: index.propTypes.string.isRequired
};
var Name = _styled__default['default'].span.withConfig({
  displayName: "TokenBadge__Name",
  componentId: "sc-7bvdqo-2"
})(["flex-shrink:1;overflow:hidden;text-overflow:ellipsis;min-width:20%;margin-right:", "px;"], 0.5 * constants.GU);

var _Symbol = _styled__default['default'].span.withConfig({
  displayName: "TokenBadge___Symbol",
  componentId: "sc-7bvdqo-3"
})(["flex-shrink:0;"]);

exports.default = TokenBadge;
//# sourceMappingURL=TokenBadge.js.map
