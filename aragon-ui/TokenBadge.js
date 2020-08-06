'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var slicedToArray = require('./slicedToArray-a8a77f0e.js');
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
var environment = require('./environment.js');
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
var _extends$1 = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
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
require('./Link.js');
require('./TextInput.js');
require('./ToastHub.js');
require('./Root-fd39454b.js');
require('./RootPortal.js');
require('./TextCopy.js');
require('./EthIdenticon.js');
require('./AddressField.js');
var useImageExists = require('./useImageExists.js');
var BadgeBase = require('./BadgeBase.js');
require('./BadgePopoverActionType.js');
require('./proptypes-b2a781f4.js');
require('./Popover.js');
require('./BadgePopoverBase.js');
var TokenBadgePopover = require('./TokenBadgePopover.js');

var _StyledSpan = _styled__default("span").withConfig({
  displayName: "TokenBadge___StyledSpan",
  componentId: "sc-7bvdqo-0"
})(["position:relative;top:1px;display:flex;flex-shrink:1;min-width:0;margin-left:", ";"], function (p) {
  return p._css;
});

var TokenBadge = /*#__PURE__*/React__default.memo(function TokenBadge(_ref) {
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

  return /*#__PURE__*/React__default.createElement(BadgeBase.default, {
    badgeRef: badgeRef,
    className: className,
    compact: compact,
    disabled: badgeOnly,
    icon: /*#__PURE__*/React__default.createElement(useImageExists.ImageExists, {
      src: iconSrc
    }, function (_ref2) {
      var exists = _ref2.exists;
      return exists && /*#__PURE__*/React__default.createElement(Icon, {
        compact: compact,
        src: iconSrc
      });
    }),
    label: /*#__PURE__*/React__default.createElement(_StyledSpan, {
      _css: compact ? 0 : "".concat(1 * constants.GU, "px")
    }, name && /*#__PURE__*/React__default.createElement(Name, null, name), /*#__PURE__*/React__default.createElement(_Symbol, null, name ? "(".concat(symbol, ")") : symbol)),
    onClick: isValidAddress ? handleOpen : undefined,
    style: style,
    title: "".concat(title, " \u2212 ").concat(address || 'No address')
  }, function (popoverDisabled) {
    return !popoverDisabled && address && /*#__PURE__*/React__default.createElement(TokenBadgePopover.default, {
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

var _StyledSpan2 = _styled__default("span").withConfig({
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
  return /*#__PURE__*/React__default.createElement(_StyledSpan2, _extends$1._extends_1({}, props, {
    _css2: compact ? margin : 0,
    _css3: compact ? 0 : margin,
    _css4: src
  }));
}

Icon.propTypes = {
  compact: index.propTypes.bool,
  src: index.propTypes.string.isRequired
};
var Name = _styled__default.span.withConfig({
  displayName: "TokenBadge__Name",
  componentId: "sc-7bvdqo-2"
})(["flex-shrink:1;overflow:hidden;text-overflow:ellipsis;min-width:20%;margin-right:", "px;"], 0.5 * constants.GU);

var _Symbol = _styled__default.span.withConfig({
  displayName: "TokenBadge___Symbol",
  componentId: "sc-7bvdqo-3"
})(["flex-shrink:0;"]);

exports.default = TokenBadge;
//# sourceMappingURL=TokenBadge.js.map
