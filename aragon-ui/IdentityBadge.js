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
var EthIdenticon = require('./EthIdenticon.js');
var IdentityBadgePopover = require('./IdentityBadgePopover.js');
var web3 = require('./web3-4ef44cda.js');
var environment = require('./environment.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
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
require('./miscellaneous.js');
require('./font.js');
require('./components.js');
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
require('./springs.js');
require('./IconCopy.js');
require('./IconPropTypes-b9997416.js');
require('./BadgePopoverBase.js');
require('./Popover.js');
require('./IconCross.js');
require('./Link.js');
require('./Tag.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _StyledDiv = _styled__default['default']("div").withConfig({
  displayName: "IdentityBadge___StyledDiv",
  componentId: "q71pax-0"
})(["display:block;margin-right:", "px;", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var IdentityBadge = /*#__PURE__*/React__default['default'].memo(function IdentityBadge(_ref) {
  var badgeOnly = _ref.badgeOnly,
      compact = _ref.compact,
      connectedAccount = _ref.connectedAccount,
      entity = _ref.entity,
      label = _ref.label,
      labelStyle = _ref.labelStyle,
      networkType = _ref.networkType,
      popoverAction = _ref.popoverAction,
      popoverTitle = _ref.popoverTitle,
      shorten = _ref.shorten,
      customLabel = _ref.customLabel,
      fontSize = _ref.fontSize,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["badgeOnly", "compact", "connectedAccount", "entity", "label", "labelStyle", "networkType", "popoverAction", "popoverTitle", "shorten", "customLabel", "fontSize"]);

  if (customLabel) {
    environment.warnOnce('IdentityBadge:customLabel', 'The “customLabel” prop is deprecated. Please use “label” instead.');
    label = label || customLabel;
  }

  if (fontSize) {
    environment.warnOnce('IdentityBadge:fontSize', 'The “fontSize” prop is deprecated. Please use “labelStyle” to style the label instead.');
  }

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
  var address = web3.isAddress(entity) ? entity : null;
  var displayLabel = label || (address && shorten ? web3.shortenAddress(address) : entity);
  return /*#__PURE__*/React__default['default'].createElement(BadgeBase['default'], _extends._extends_1({
    badgeRef: badgeRef,
    compact: compact,
    disabled: badgeOnly,
    icon: address && /*#__PURE__*/React__default['default'].createElement(_StyledDiv, {
      _css: 1 * constants.GU,
      _css2: compact ? "\n                  position: relative;\n                  top: -1px;\n                " : ''
    }, /*#__PURE__*/React__default['default'].createElement(EthIdenticon['default'], {
      scale: compact ? 0.75 : 1,
      radius: compact ? 2 : 0,
      address: address
    })),
    label: displayLabel,
    labelStyle: "\n        ".concat(!label && address ? textStyles.textStyle('address1') : '', "\n        ").concat(labelStyle, "\n      "),
    onClick: address ? handleOpen : undefined,
    title: address
  }, props), function (popoverDisabled) {
    return !popoverDisabled && address && /*#__PURE__*/React__default['default'].createElement(IdentityBadgePopover['default'], {
      address: address,
      connectedAccount: connectedAccount,
      networkType: networkType,
      onClose: handleClose,
      opener: badgeRef.current,
      popoverAction: popoverAction,
      title: popoverTitle,
      visible: opened
    });
  });
});
IdentityBadge.propTypes = {
  badgeOnly: index.propTypes.bool,
  compact: index.propTypes.bool,
  connectedAccount: index.propTypes.bool,
  entity: index.propTypes.string,
  label: index.propTypes.string,
  labelStyle: index.propTypes.string,
  networkType: index.propTypes.string,
  popoverAction: BadgePopoverActionType['default'],
  popoverTitle: index.propTypes.node,
  shorten: index.propTypes.bool,
  // Deprecated
  customLabel: index.propTypes.string,
  fontSize: index.propTypes.string
};
IdentityBadge.defaultProps = {
  entity: '',
  labelStyle: '',
  networkType: 'main',
  shorten: true
};

exports.default = IdentityBadge;
//# sourceMappingURL=IdentityBadge.js.map
