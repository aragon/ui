'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var proptypes = require('./proptypes-2243b0d5.js');
var Button = require('./Button.js');
var ButtonIcon = require('./ButtonIcon.js');
var Popover = require('./Popover.js');
var BadgePopoverActionType = require('./BadgePopoverActionType.js');
var Theme = require('./Theme.js');
var IconCross = require('./IconCross.js');
var miscellaneous = require('./miscellaneous.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
require('./index-19b0c963.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./extends-5150c1f4.js');
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
require('./environment.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./font.js');
require('./web-17920307.js');
require('./objectWithoutPropertiesLoose-34dfcdd4.js');
require('react-dom');
require('./RootPortal.js');
require('./Root-6628d0a4.js');
require('./components.js');
require('./springs.js');
require('./IconPropTypes-435c57cb.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const BadgePopoverBase = /*#__PURE__*/React__default["default"].memo(function BadgePopoverBase({
  addressField,
  link,
  onClose,
  opener,
  popoverAction,
  title,
  titleTag,
  visible
}) {
  const theme = Theme.useTheme();
  const handlePopoverActionClick = React.useCallback(() => {
    onClose();

    if (popoverAction && popoverAction.onClick) {
      popoverAction.onClick();
    }
  }, [onClose, popoverAction]);
  return /*#__PURE__*/React__default["default"].createElement(Popover["default"], {
    visible: visible,
    opener: opener,
    onClose: onClose
  }, /*#__PURE__*/React__default["default"].createElement(_StyledSection, null, /*#__PURE__*/React__default["default"].createElement(_StyledButtonIcon, {
    label: "Close",
    onClick: onClose,
    $_css: theme.surfaceIcon
  }, /*#__PURE__*/React__default["default"].createElement(IconCross["default"], {
    size: "small"
  })), /*#__PURE__*/React__default["default"].createElement(_StyledHeader, {
    $_css2: 4 * constants.GU,
    $_css3: 2 * constants.GU,
    $_css4: theme.border
  }, /*#__PURE__*/React__default["default"].createElement(_StyledH, {
    $_css5: textStyles.textStyle('label2'),
    $_css6: theme.surfaceContentSecondary
  }, title), titleTag), /*#__PURE__*/React__default["default"].createElement(_StyledDiv, {
    $_css7: 2 * constants.GU
  }, addressField, /*#__PURE__*/React__default["default"].createElement(_StyledDiv2, {
    $_css8: 2 * constants.GU,
    $_css9: link ? `
                  flex-direction: row-reverse;
                  justify-content: space-between;
                ` : ''
  }, link && /*#__PURE__*/React__default["default"].createElement(_StyledP, {
    $_css10: textStyles.textStyle('body3')
  }, link), popoverAction && /*#__PURE__*/React__default["default"].createElement(_StyledButton, {
    size: "medium",
    onClick: handlePopoverActionClick,
    $_css11: 2 * constants.GU,
    $_css12: theme.surfaceContentSecondary
  }, popoverAction.label)))));
});
BadgePopoverBase.propTypes = {
  addressField: proptypes.PropTypes.node.isRequired,
  link: proptypes.PropTypes.node,
  onClose: proptypes.PropTypes.func,
  opener: proptypes.PropTypes._element,
  popoverAction: BadgePopoverActionType["default"],
  title: proptypes.PropTypes.node.isRequired,
  titleTag: proptypes.PropTypes.node,
  visible: proptypes.PropTypes.bool
};
BadgePopoverBase.defaultProps = {
  onClose: miscellaneous.noop
};

var _StyledSection = _styled__default["default"]("section").withConfig({
  displayName: "BadgePopoverBase___StyledSection",
  componentId: "sc-xfkga1-0"
})(["position:relative;max-width:calc(100vw - 20px);min-width:300px;"]);

var _StyledButtonIcon = _styled__default["default"](ButtonIcon["default"]).withConfig({
  displayName: "BadgePopoverBase___StyledButtonIcon",
  componentId: "sc-xfkga1-1"
})(["position:absolute;top:0;right:0;border-radius:0;color:", ";"], p => p.$_css);

var _StyledHeader = _styled__default["default"]("header").withConfig({
  displayName: "BadgePopoverBase___StyledHeader",
  componentId: "sc-xfkga1-2"
})(["display:flex;align-items:center;height:", "px;padding-left:", "px;border-bottom:1px solid ", ";"], p => p.$_css2, p => p.$_css3, p => p.$_css4);

var _StyledH = _styled__default["default"]("h1").withConfig({
  displayName: "BadgePopoverBase___StyledH",
  componentId: "sc-xfkga1-3"
})(["", " font-weight:400;color:", ";"], p => p.$_css5, p => p.$_css6);

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "BadgePopoverBase___StyledDiv",
  componentId: "sc-xfkga1-4"
})(["padding:", "px;"], p => p.$_css7);

var _StyledDiv2 = _styled__default["default"]("div").withConfig({
  displayName: "BadgePopoverBase___StyledDiv2",
  componentId: "sc-xfkga1-5"
})(["display:flex;margin-top:", "px;", ""], p => p.$_css8, p => p.$_css9);

var _StyledP = _styled__default["default"]("p").withConfig({
  displayName: "BadgePopoverBase___StyledP",
  componentId: "sc-xfkga1-6"
})(["", ";"], p => p.$_css10);

var _StyledButton = _styled__default["default"](Button["default"]).withConfig({
  displayName: "BadgePopoverBase___StyledButton",
  componentId: "sc-xfkga1-7"
})(["padding:0 ", "px;color:", ";"], p => p.$_css11, p => p.$_css12);

exports["default"] = BadgePopoverBase;
//# sourceMappingURL=BadgePopoverBase.js.map
