import _styled from 'styled-components';
import React, { useCallback } from 'react';
import ExtendedPropTypes from '../../proptypes.js';
import ButtonWithRef from '../Button/Button.js';
import ButtonIcon from '../Button/ButtonIcon.js';
import Popover from '../Popover/Popover.js';
import BadgePopoverActionType from './BadgePopoverActionType.js';
import { useTheme } from '../../theme/Theme2.js';
import IconCross from '../../icons/components/IconCross.js';
import { GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';
import { noop } from '../../utils/miscellaneous.js';

var _StyledSection = _styled("section").withConfig({
  displayName: "BadgePopoverBase___StyledSection",
  componentId: "xfkga1-0"
})(["position:relative;max-width:calc(100vw - 20px);min-width:300px;"]);

var _StyledButtonIcon = _styled(ButtonIcon).withConfig({
  displayName: "BadgePopoverBase___StyledButtonIcon",
  componentId: "xfkga1-1"
})(["position:absolute;top:0;right:0;border-radius:0;color:", ";"], function (p) {
  return p._css;
});

var _StyledHeader = _styled("header").withConfig({
  displayName: "BadgePopoverBase___StyledHeader",
  componentId: "xfkga1-2"
})(["display:flex;align-items:center;height:", "px;padding-left:", "px;border-bottom:1px solid ", ";"], function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
});

var _StyledH = _styled("h1").withConfig({
  displayName: "BadgePopoverBase___StyledH",
  componentId: "xfkga1-3"
})(["", " font-weight:400;color:", ";"], function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

var _StyledDiv = _styled("div").withConfig({
  displayName: "BadgePopoverBase___StyledDiv",
  componentId: "xfkga1-4"
})(["padding:", "px;"], function (p) {
  return p._css7;
});

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "BadgePopoverBase___StyledDiv2",
  componentId: "xfkga1-5"
})(["display:flex;margin-top:", "px;", ""], function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
});

var _StyledP = _styled("p").withConfig({
  displayName: "BadgePopoverBase___StyledP",
  componentId: "xfkga1-6"
})(["", ";"], function (p) {
  return p._css10;
});

var _StyledButton = _styled(ButtonWithRef).withConfig({
  displayName: "BadgePopoverBase___StyledButton",
  componentId: "xfkga1-7"
})(["padding:0 ", "px;color:", ";"], function (p) {
  return p._css11;
}, function (p) {
  return p._css12;
});

var BadgePopoverBase = /*#__PURE__*/React.memo(function BadgePopoverBase(_ref) {
  var addressField = _ref.addressField,
      link = _ref.link,
      onClose = _ref.onClose,
      opener = _ref.opener,
      popoverAction = _ref.popoverAction,
      title = _ref.title,
      titleTag = _ref.titleTag,
      visible = _ref.visible;
  var theme = useTheme();
  var handlePopoverActionClick = useCallback(function () {
    onClose();

    if (popoverAction && popoverAction.onClick) {
      popoverAction.onClick();
    }
  }, [onClose, popoverAction]);
  return /*#__PURE__*/React.createElement(Popover, {
    visible: visible,
    opener: opener,
    onClose: onClose
  }, /*#__PURE__*/React.createElement(_StyledSection, null, /*#__PURE__*/React.createElement(_StyledButtonIcon, {
    label: "Close",
    onClick: onClose,
    _css: theme.surfaceIcon
  }, /*#__PURE__*/React.createElement(IconCross, {
    size: "small"
  })), /*#__PURE__*/React.createElement(_StyledHeader, {
    _css2: 4 * GU,
    _css3: 2 * GU,
    _css4: theme.border
  }, /*#__PURE__*/React.createElement(_StyledH, {
    _css5: textStyle('label2'),
    _css6: theme.surfaceContentSecondary
  }, title), titleTag), /*#__PURE__*/React.createElement(_StyledDiv, {
    _css7: 2 * GU
  }, addressField, /*#__PURE__*/React.createElement(_StyledDiv2, {
    _css8: 2 * GU,
    _css9: link ? "\n                  flex-direction: row-reverse;\n                  justify-content: space-between;\n                " : ''
  }, link && /*#__PURE__*/React.createElement(_StyledP, {
    _css10: textStyle('body3')
  }, link), popoverAction && /*#__PURE__*/React.createElement(_StyledButton, {
    size: "medium",
    onClick: handlePopoverActionClick,
    _css11: 2 * GU,
    _css12: theme.surfaceContentSecondary
  }, popoverAction.label)))));
});
BadgePopoverBase.propTypes = {
  addressField: ExtendedPropTypes.node.isRequired,
  link: ExtendedPropTypes.node,
  onClose: ExtendedPropTypes.func,
  opener: ExtendedPropTypes._element,
  popoverAction: BadgePopoverActionType,
  title: ExtendedPropTypes.node.isRequired,
  titleTag: ExtendedPropTypes.node,
  visible: ExtendedPropTypes.bool
};
BadgePopoverBase.defaultProps = {
  onClose: noop
};

export default BadgePopoverBase;
//# sourceMappingURL=BadgePopoverBase.js.map
