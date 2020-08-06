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
var textStyles = require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./Theme.js');
var _extends = require('./extends-023d783e.js');
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
var EthIdenticon = require('./EthIdenticon.js');
require('./AddressField.js');
var BadgeBase = require('./BadgeBase.js');
var BadgePopoverActionType = require('./BadgePopoverActionType.js');
require('./Tag.js');
require('./proptypes-b2a781f4.js');
require('./Popover.js');
require('./BadgePopoverBase.js');
var IdentityBadgePopover = require('./IdentityBadgePopover.js');

var _StyledDiv = _styled__default("div").withConfig({
  displayName: "IdentityBadge___StyledDiv",
  componentId: "q71pax-0"
})(["display:block;margin-right:", "px;", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var IdentityBadge = /*#__PURE__*/React__default.memo(function IdentityBadge(_ref) {
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
  return /*#__PURE__*/React__default.createElement(BadgeBase.default, _extends._extends_1({
    badgeRef: badgeRef,
    compact: compact,
    disabled: badgeOnly,
    icon: address && /*#__PURE__*/React__default.createElement(_StyledDiv, {
      _css: 1 * constants.GU,
      _css2: compact ? "\n                  position: relative;\n                  top: -1px;\n                " : ''
    }, /*#__PURE__*/React__default.createElement(EthIdenticon.default, {
      scale: compact ? 0.75 : 1,
      radius: compact ? 2 : 0,
      address: address
    })),
    label: displayLabel,
    labelStyle: "\n        ".concat(!label && address ? textStyles.textStyle('address1') : '', "\n        ").concat(labelStyle, "\n      "),
    onClick: address ? handleOpen : undefined,
    title: address
  }, props), function (popoverDisabled) {
    return !popoverDisabled && address && /*#__PURE__*/React__default.createElement(IdentityBadgePopover.default, {
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
  popoverAction: BadgePopoverActionType.default,
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
