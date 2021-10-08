'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-023d783e.js');
var slicedToArray = require('./slicedToArray-a8a77f0e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-37353731.js');
var BadgeBase = require('./BadgeBase.js');
var BadgePopoverActionType = require('./BadgePopoverActionType.js');
var Tag = require('./Tag.js');
var AppBadgePopover = require('./AppBadgePopover.js');
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
require('./miscellaneous.js');
require('./EthIdenticon.js');
require('./BadgePopoverBase.js');
require('./Popover.js');
require('./IconCross.js');
require('./Link.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var iconDefaultSvg = "data:image/svg+xml,%3Csvg%20width%3D%2256%22%20height%3D%2256%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M56%200H0v56h56V0z%22%20fill%3D%22url%28%23paint0_linear%29%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M28.363%2010.74L13.04%2019.56v17.645l15.322%208.821%2015.323-8.821V19.56l-15.322-8.82z%22%20fill%3D%22url%28%23paint1_linear%29%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M28.363%2046.027V10.74l15.323%208.821v17.645l-15.323%208.821z%22%20fill%3D%22%2373F0F8%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M13.041%2019.561l15.322-8.822%2015.323%208.822-15.323%208.426-15.322-8.425z%22%20fill%3D%22url%28%23paint2_linear%29%22%2F%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22paint0_linear%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%2256%22%20y2%3D%2253.105%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2333BCE6%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2348E2E5%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22paint1_linear%22%20x1%3D%2214.618%22%20y1%3D%2219.282%22%20x2%3D%2231.423%22%20y2%3D%2243.942%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%232597B7%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2339C5E1%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22paint2_linear%22%20x1%3D%2214.799%22%20y1%3D%2219.363%22%20x2%3D%2243.686%22%20y2%3D%2219.363%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%233DCEE5%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2348E2E6%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var _StyledDiv = _styled__default['default']("div").withConfig({
  displayName: "AppBadge___StyledDiv",
  componentId: "sc-5gkmrm-0"
})(["display:grid;align-items:center;grid-template-columns:auto 1fr;"]);

var _StyledSpan = _styled__default['default']("span").withConfig({
  displayName: "AppBadge___StyledSpan",
  componentId: "sc-5gkmrm-1"
})(["display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"]);

var _StyledTag = _styled__default['default'](Tag['default']).withConfig({
  displayName: "AppBadge___StyledTag",
  componentId: "sc-5gkmrm-2"
})(["margin-left:", "px;"], function (p) {
  return p._css;
});

var AppBadge = /*#__PURE__*/React__default['default'].memo(function AppBadge(_ref) {
  var appAddress = _ref.appAddress,
      badgeOnly = _ref.badgeOnly,
      compact = _ref.compact,
      iconSrc = _ref.iconSrc,
      identifier = _ref.identifier,
      label = _ref.label,
      labelStyle = _ref.labelStyle,
      networkType = _ref.networkType,
      popoverAction = _ref.popoverAction,
      popoverTitle = _ref.popoverTitle;
      objectWithoutProperties.objectWithoutProperties(_ref, ["appAddress", "badgeOnly", "compact", "iconSrc", "identifier", "label", "labelStyle", "networkType", "popoverAction", "popoverTitle"]);

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
  var isValidAddress = web3.isAddress(appAddress);

  if (!badgeOnly && !isValidAddress) {
    environment.warn("AppBadge: provided invalid app address (".concat(appAddress, ")"));
  }

  popoverTitle = popoverTitle || /*#__PURE__*/React__default['default'].createElement(_StyledDiv, null, /*#__PURE__*/React__default['default'].createElement(_StyledSpan, null, label), identifier && /*#__PURE__*/React__default['default'].createElement(_StyledTag, {
    mode: "identifier",
    _css: 1 * constants.GU
  }, identifier));
  return /*#__PURE__*/React__default['default'].createElement(BadgeBase['default'], {
    badgeRef: badgeRef,
    compact: compact,
    disabled: badgeOnly,
    icon: /*#__PURE__*/React__default['default'].createElement(useImageExists.ImageExists, {
      src: iconSrc
    }, function (_ref2) {
      _ref2.displayFallback;
          var exists = _ref2.exists;
      return /*#__PURE__*/React__default['default'].createElement(Icon, {
        compact: compact,
        src: exists ? iconSrc : iconDefaultSvg
      });
    }),
    label: label,
    labelStyle: labelStyle,
    onClick: isValidAddress ? handleOpen : undefined,
    title: appAddress
  }, function (popoverDisabled) {
    return !popoverDisabled && appAddress && /*#__PURE__*/React__default['default'].createElement(AppBadgePopover['default'], {
      appAddress: appAddress,
      iconFallbackSrc: iconDefaultSvg,
      iconSrc: iconSrc,
      networkType: networkType,
      onClose: handleClose,
      opener: badgeRef.current,
      popoverAction: popoverAction,
      title: popoverTitle,
      visible: opened
    });
  });
});
AppBadge.propTypes = {
  appAddress: index.propTypes.string,
  badgeOnly: index.propTypes.bool,
  compact: index.propTypes.bool,
  iconSrc: index.propTypes.string,
  identifier: index.propTypes.string,
  label: index.propTypes.string.isRequired,
  labelStyle: index.propTypes.string,
  networkType: index.propTypes.string,
  popoverAction: BadgePopoverActionType['default'],
  popoverTitle: index.propTypes.node
};

var _StyledSpan2 = _styled__default['default']("span").withConfig({
  displayName: "AppBadge___StyledSpan2",
  componentId: "sc-5gkmrm-3"
})(["flex-shrink:0;width:", "px;height:", "px;margin-right:", "px;border-radius:", ";background-size:contain;background-position:50% 50%;background-repeat:no-repeat;background-image:url(", ");"], function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

var Icon = function Icon(_ref3) {
  var compact = _ref3.compact,
      src = _ref3.src,
      props = objectWithoutProperties.objectWithoutProperties(_ref3, ["compact", "src"]);

  var size = (compact ? 2.25 : 3) * constants.GU;
  return /*#__PURE__*/React__default['default'].createElement(_StyledSpan2, _extends._extends_1({}, props, {
    _css2: size,
    _css3: size,
    _css4: 1 * constants.GU,
    _css5: compact ? "".concat(constants.RADIUS, "px") : 0,
    _css6: src
  }));
};

Icon.propTypes = {
  compact: index.propTypes.bool,
  src: index.propTypes.string.isRequired
};

exports.default = AppBadge;
//# sourceMappingURL=AppBadge.js.map
