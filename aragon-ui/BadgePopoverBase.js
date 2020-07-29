'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-0711941d.js');
require('./unsupportedIterableToArray-68db1d3b.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
require('./index-b0606964.js');
require('./defineProperty-0921a47c.js');
require('./toConsumableArray-d8a4a2c3.js');
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
require('./getPrototypeOf-2a661a20.js');
require('./color.js');
require('./components.js');
require('./contains-component.js');
require('./css.js');
require('./dayjs.min-e07657bf.js');
require('./date.js');
var miscellaneous = require('./miscellaneous.js');
require('./environment.js');
require('./font.js');
require('./math-f4029164.js');
require('./characters.js');
require('./format.js');
require('./keycodes.js');
require('./url.js');
require('./web3.js');
var constants = require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
var textStyles = require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');
require('./extends-40571110.js');
require('./objectWithoutProperties-35db8ab0.js');
require('./index-ecc57c9f.js');
require('./isObject-ec755c87.js');
require('./Viewport-15101437.js');
require('./Layout.js');
require('./FocusVisible.js');
require('./ButtonBase.js');
require('./IconPropTypes-56de5759.js');
require('./IconAddUser.js');
require('./IconAlert.js');
require('./IconAlignCenter.js');
require('./IconAlignJustify.js');
require('./IconAlignLeft.js');
require('./IconAlignRight.js');
require('./IconAragon.js');
require('./IconArrowDown.js');
require('./IconArrowLeft.js');
require('./IconArrowRight.js');
require('./IconArrowUp.js');
require('./IconAtSign.js');
require('./IconBlock.js');
require('./IconBookmark.js');
require('./IconCalendar.js');
require('./IconCanvas.js');
require('./IconCaution.js');
require('./IconCenter.js');
require('./IconChart.js');
require('./IconChat.js');
require('./IconCheck.js');
require('./IconChip.js');
require('./IconCircleCheck.js');
require('./IconCircleMinus.js');
require('./IconCirclePlus.js');
require('./IconClock.js');
require('./IconCloudDownload.js');
require('./IconCloudUpload.js');
require('./IconCoin.js');
require('./IconConfiguration.js');
require('./IconConnect.js');
require('./IconConnection.js');
require('./IconConsole.js');
require('./IconCopy.js');
var IconCross = require('./IconCross.js');
require('./IconDashedSquare.js');
require('./IconDown.js');
require('./IconDownload.js');
require('./IconEdit.js');
require('./IconEllipsis.js');
require('./IconEnter.js');
require('./IconEthereum.js');
require('./IconExternal.js');
require('./IconFile.js');
require('./IconFilter.js');
require('./IconFlag.js');
require('./IconFolder.js');
require('./IconGraph2.js');
require('./IconGraph.js');
require('./IconGrid.js');
require('./IconGroup.js');
require('./IconHash.js');
require('./IconHeart.js');
require('./IconHide.js');
require('./IconHome.js');
require('./IconImage.js');
require('./IconInfo.js');
require('./IconLabel.js');
require('./IconLayers.js');
require('./IconLeft.js');
require('./IconLink.js');
require('./IconLocation.js');
require('./IconLock.js');
require('./IconMail.js');
require('./IconMaximize.js');
require('./IconMenu.js');
require('./IconMinimize.js');
require('./IconMinus.js');
require('./IconMove.js');
require('./IconNoPicture.js');
require('./IconPicture.js');
require('./IconPlus.js');
require('./IconPower.js');
require('./IconPrint.js');
require('./IconProhibited.js');
require('./IconQuestion.js');
require('./IconRefresh.js');
require('./IconRemoveUser.js');
require('./IconRight.js');
require('./IconRotateLeft.js');
require('./IconRotateRight.js');
require('./IconSearch.js');
require('./IconSettings.js');
require('./IconShare.js');
require('./IconSquareMinus.js');
require('./IconSquarePlus.js');
require('./IconSquare.js');
require('./IconStarFilled.js');
require('./IconStar.js');
require('./IconSwap.js');
require('./IconTarget.js');
require('./IconToken.js');
require('./IconTrash.js');
require('./IconUnlock.js');
require('./IconUp.js');
require('./IconUpload.js');
require('./IconUser.js');
require('./IconView.js');
require('./IconVote.js');
require('./IconWallet.js');
require('./IconWarning.js');
require('./IconWorld.js');
require('./IconWrite.js');
require('./IconZoomIn.js');
require('./IconZoomOut.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
require('./web-d0294535.js');
var Button = require('./Button.js');
var ButtonIcon = require('./ButtonIcon.js');
require('./getDisplayName-7ab6d318.js');
require('./index-bc84a358.js');
require('./index-0db71dc1.js');
require('./RootPortal.js');
var BadgePopoverActionType = require('./BadgePopoverActionType.js');
var proptypes = require('./proptypes-5b34673d.js');
var Popover = require('./Popover.js');
require('./observe.js');
require('./index-030bfca8.js');
require('./providers.js');

var _StyledSection = _styled__default("section").withConfig({
  displayName: "BadgePopoverBase___StyledSection",
  componentId: "xfkga1-0"
})(["position:relative;max-width:calc(100vw - 20px);min-width:300px;"]);

var _StyledButtonIcon = _styled__default(ButtonIcon.default).withConfig({
  displayName: "BadgePopoverBase___StyledButtonIcon",
  componentId: "xfkga1-1"
})(["position:absolute;top:0;right:0;border-radius:0;color:", ";"], function (p) {
  return p._css;
});

var _StyledHeader = _styled__default("header").withConfig({
  displayName: "BadgePopoverBase___StyledHeader",
  componentId: "xfkga1-2"
})(["display:flex;align-items:center;height:", "px;padding-left:", "px;border-bottom:1px solid ", ";"], function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
});

var _StyledH = _styled__default("h1").withConfig({
  displayName: "BadgePopoverBase___StyledH",
  componentId: "xfkga1-3"
})(["", " font-weight:400;color:", ";"], function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

var _StyledDiv = _styled__default("div").withConfig({
  displayName: "BadgePopoverBase___StyledDiv",
  componentId: "xfkga1-4"
})(["padding:", "px;"], function (p) {
  return p._css7;
});

var _StyledDiv2 = _styled__default("div").withConfig({
  displayName: "BadgePopoverBase___StyledDiv2",
  componentId: "xfkga1-5"
})(["display:flex;margin-top:", "px;", ""], function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
});

var _StyledP = _styled__default("p").withConfig({
  displayName: "BadgePopoverBase___StyledP",
  componentId: "xfkga1-6"
})(["", ";"], function (p) {
  return p._css10;
});

var _StyledButton = _styled__default(Button.default).withConfig({
  displayName: "BadgePopoverBase___StyledButton",
  componentId: "xfkga1-7"
})(["padding:0 ", "px;color:", ";"], function (p) {
  return p._css11;
}, function (p) {
  return p._css12;
});

var BadgePopoverBase = React__default.memo(function BadgePopoverBase(_ref) {
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
  return /*#__PURE__*/React__default.createElement(Popover.default, {
    visible: visible,
    opener: opener,
    onClose: onClose
  }, /*#__PURE__*/React__default.createElement(_StyledSection, null, /*#__PURE__*/React__default.createElement(_StyledButtonIcon, {
    label: "Close",
    onClick: onClose,
    _css: theme.surfaceIcon
  }, /*#__PURE__*/React__default.createElement(IconCross.default, {
    size: "small"
  })), /*#__PURE__*/React__default.createElement(_StyledHeader, {
    _css2: 4 * constants.GU,
    _css3: 2 * constants.GU,
    _css4: theme.border
  }, /*#__PURE__*/React__default.createElement(_StyledH, {
    _css5: textStyles.textStyle('label2'),
    _css6: theme.surfaceContentSecondary
  }, title), titleTag), /*#__PURE__*/React__default.createElement(_StyledDiv, {
    _css7: 2 * constants.GU
  }, addressField, /*#__PURE__*/React__default.createElement(_StyledDiv2, {
    _css8: 2 * constants.GU,
    _css9: link ? "\n                  flex-direction: row-reverse;\n                  justify-content: space-between;\n                " : ''
  }, link && /*#__PURE__*/React__default.createElement(_StyledP, {
    _css10: textStyles.textStyle('body3')
  }, link), popoverAction && /*#__PURE__*/React__default.createElement(_StyledButton, {
    size: "medium",
    onClick: handlePopoverActionClick,
    _css11: 2 * constants.GU,
    _css12: theme.surfaceContentSecondary
  }, popoverAction.label)))));
});
BadgePopoverBase.propTypes = {
  addressField: proptypes.PropTypes.node.isRequired,
  link: proptypes.PropTypes.node,
  onClose: proptypes.PropTypes.func,
  opener: proptypes.PropTypes._element,
  popoverAction: BadgePopoverActionType.default,
  title: proptypes.PropTypes.node.isRequired,
  titleTag: proptypes.PropTypes.node,
  visible: proptypes.PropTypes.bool
};
BadgePopoverBase.defaultProps = {
  onClose: miscellaneous.noop
};

exports.default = BadgePopoverBase;
//# sourceMappingURL=BadgePopoverBase.js.map
