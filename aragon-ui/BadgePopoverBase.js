'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var proptypes = require('./proptypes-316e1def.js');
var Button = require('./Button.js');
var ButtonIcon = require('./ButtonIcon.js');
var Popover = require('./Popover.js');
var BadgePopoverActionType = require('./BadgePopoverActionType.js');
var Theme = require('./Theme.js');
var IconCross = require('./IconCross.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
var miscellaneous = require('./miscellaneous.js');
require('./defineProperty-3cad0327.js');
require('./index-37353731.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./extends-023d783e.js');
require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./objectWithoutProperties-c6d3675c.js');
require('./index-c33eeeef.js');
require('./Layout.js');
require('./Viewport-71f7efe6.js');
require('./getPrototypeOf-55c9e80c.js');
require('./_baseGetTag-6ec23aaa.js');
require('./breakpoints.js');
require('./css.js');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./keycodes.js');
require('./environment.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./toConsumableArray-cc0d28a9.js');
require('./font.js');
require('./web-46d746d6.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
require('./RootPortal.js');
require('./Root-07f851a6.js');
require('./springs.js');
require('./components.js');
require('./IconPropTypes-b9997416.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _StyledSection = _styled__default['default']("section").withConfig({
  displayName: "BadgePopoverBase___StyledSection",
  componentId: "xfkga1-0"
})(["position:relative;max-width:calc(100vw - 20px);min-width:300px;"]);

var _StyledButtonIcon = _styled__default['default'](ButtonIcon['default']).withConfig({
  displayName: "BadgePopoverBase___StyledButtonIcon",
  componentId: "xfkga1-1"
})(["position:absolute;top:0;right:0;border-radius:0;color:", ";"], function (p) {
  return p._css;
});

var _StyledHeader = _styled__default['default']("header").withConfig({
  displayName: "BadgePopoverBase___StyledHeader",
  componentId: "xfkga1-2"
})(["display:flex;align-items:center;height:", "px;padding-left:", "px;border-bottom:1px solid ", ";"], function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
});

var _StyledH = _styled__default['default']("h1").withConfig({
  displayName: "BadgePopoverBase___StyledH",
  componentId: "xfkga1-3"
})(["", " font-weight:400;color:", ";"], function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

var _StyledDiv = _styled__default['default']("div").withConfig({
  displayName: "BadgePopoverBase___StyledDiv",
  componentId: "xfkga1-4"
})(["padding:", "px;"], function (p) {
  return p._css7;
});

var _StyledDiv2 = _styled__default['default']("div").withConfig({
  displayName: "BadgePopoverBase___StyledDiv2",
  componentId: "xfkga1-5"
})(["display:flex;margin-top:", "px;", ""], function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
});

var _StyledP = _styled__default['default']("p").withConfig({
  displayName: "BadgePopoverBase___StyledP",
  componentId: "xfkga1-6"
})(["", ";"], function (p) {
  return p._css10;
});

var _StyledButton = _styled__default['default'](Button['default']).withConfig({
  displayName: "BadgePopoverBase___StyledButton",
  componentId: "xfkga1-7"
})(["padding:0 ", "px;color:", ";"], function (p) {
  return p._css11;
}, function (p) {
  return p._css12;
});

var BadgePopoverBase = /*#__PURE__*/React__default['default'].memo(function BadgePopoverBase(_ref) {
  var addressField = _ref.addressField,
      link = _ref.link,
      onClose = _ref.onClose,
      opener = _ref.opener,
      popoverAction = _ref.popoverAction,
      title = _ref.title,
      titleTag = _ref.titleTag,
      visible = _ref.visible;
  var theme = Theme.useTheme();
  var handlePopoverActionClick = React.useCallback(function () {
    onClose();

    if (popoverAction && popoverAction.onClick) {
      popoverAction.onClick();
    }
  }, [onClose, popoverAction]);
  return /*#__PURE__*/React__default['default'].createElement(Popover['default'], {
    visible: visible,
    opener: opener,
    onClose: onClose
  }, /*#__PURE__*/React__default['default'].createElement(_StyledSection, null, /*#__PURE__*/React__default['default'].createElement(_StyledButtonIcon, {
    label: "Close",
    onClick: onClose,
    _css: theme.surfaceIcon
  }, /*#__PURE__*/React__default['default'].createElement(IconCross['default'], {
    size: "small"
  })), /*#__PURE__*/React__default['default'].createElement(_StyledHeader, {
    _css2: 4 * constants.GU,
    _css3: 2 * constants.GU,
    _css4: theme.border
  }, /*#__PURE__*/React__default['default'].createElement(_StyledH, {
    _css5: textStyles.textStyle('label2'),
    _css6: theme.surfaceContentSecondary
  }, title), titleTag), /*#__PURE__*/React__default['default'].createElement(_StyledDiv, {
    _css7: 2 * constants.GU
  }, addressField, /*#__PURE__*/React__default['default'].createElement(_StyledDiv2, {
    _css8: 2 * constants.GU,
    _css9: link ? "\n                  flex-direction: row-reverse;\n                  justify-content: space-between;\n                " : ''
  }, link && /*#__PURE__*/React__default['default'].createElement(_StyledP, {
    _css10: textStyles.textStyle('body3')
  }, link), popoverAction && /*#__PURE__*/React__default['default'].createElement(_StyledButton, {
    size: "medium",
    onClick: handlePopoverActionClick,
    _css11: 2 * constants.GU,
    _css12: theme.surfaceContentSecondary
  }, popoverAction.label)))));
});
BadgePopoverBase.propTypes = {
  addressField: proptypes.ExtendedPropTypes.node.isRequired,
  link: proptypes.ExtendedPropTypes.node,
  onClose: proptypes.ExtendedPropTypes.func,
  opener: proptypes.ExtendedPropTypes._element,
  popoverAction: BadgePopoverActionType['default'],
  title: proptypes.ExtendedPropTypes.node.isRequired,
  titleTag: proptypes.ExtendedPropTypes.node,
  visible: proptypes.ExtendedPropTypes.bool
};
BadgePopoverBase.defaultProps = {
  onClose: miscellaneous.noop
};

exports.default = BadgePopoverBase;
//# sourceMappingURL=BadgePopoverBase.js.map
