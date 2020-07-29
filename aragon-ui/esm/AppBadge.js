import { _ as _slicedToArray } from './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import React, { useRef, useState, useCallback } from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import { P as PropTypes } from './index-097535f1.js';
import './defineProperty-a0480c32.js';
import './toConsumableArray-127424c2.js';
import _styled from 'styled-components';
import './getPrototypeOf-b96da1e1.js';
import './color.js';
import './components.js';
import './contains-component.js';
import './css.js';
import './dayjs.min-e57fb69a.js';
import './date.js';
import './miscellaneous.js';
import { warn } from './environment.js';
import './font.js';
import './math-e6d0e93a.js';
import './characters.js';
import './format.js';
import './keycodes.js';
import './url.js';
import { isAddress } from './web3.js';
import { GU, RADIUS } from './constants.js';
import './breakpoints.js';
import './springs.js';
import './text-styles.js';
import './theme-dark.js';
import './theme-light.js';
import './Theme.js';
import { _ as _extends } from './extends-db4f0c26.js';
import { _ as _objectWithoutProperties } from './objectWithoutProperties-234758e1.js';
import './index-422d37c0.js';
import './isObject-3c6ec07e.js';
import './Viewport-cc7debfb.js';
import './Layout.js';
import './FocusVisible.js';
import './ButtonBase.js';
import './IconPropTypes-aab7337d.js';
import './IconAddUser.js';
import './IconAlert.js';
import './IconAlignCenter.js';
import './IconAlignJustify.js';
import './IconAlignLeft.js';
import './IconAlignRight.js';
import './IconAragon.js';
import './IconArrowDown.js';
import './IconArrowLeft.js';
import './IconArrowRight.js';
import './IconArrowUp.js';
import './IconAtSign.js';
import './IconBlock.js';
import './IconBookmark.js';
import './IconCalendar.js';
import './IconCanvas.js';
import './IconCaution.js';
import './IconCenter.js';
import './IconChart.js';
import './IconChat.js';
import './IconCheck.js';
import './IconChip.js';
import './IconCircleCheck.js';
import './IconCircleMinus.js';
import './IconCirclePlus.js';
import './IconClock.js';
import './IconCloudDownload.js';
import './IconCloudUpload.js';
import './IconCoin.js';
import './IconConfiguration.js';
import './IconConnect.js';
import './IconConnection.js';
import './IconConsole.js';
import './IconCopy.js';
import './IconCross.js';
import './IconDashedSquare.js';
import './IconDown.js';
import './IconDownload.js';
import './IconEdit.js';
import './IconEllipsis.js';
import './IconEnter.js';
import './IconEthereum.js';
import './IconExternal.js';
import './IconFile.js';
import './IconFilter.js';
import './IconFlag.js';
import './IconFolder.js';
import './IconGraph2.js';
import './IconGraph.js';
import './IconGrid.js';
import './IconGroup.js';
import './IconHash.js';
import './IconHeart.js';
import './IconHide.js';
import './IconHome.js';
import './IconImage.js';
import './IconInfo.js';
import './IconLabel.js';
import './IconLayers.js';
import './IconLeft.js';
import './IconLink.js';
import './IconLocation.js';
import './IconLock.js';
import './IconMail.js';
import './IconMaximize.js';
import './IconMenu.js';
import './IconMinimize.js';
import './IconMinus.js';
import './IconMove.js';
import './IconNoPicture.js';
import './IconPicture.js';
import './IconPlus.js';
import './IconPower.js';
import './IconPrint.js';
import './IconProhibited.js';
import './IconQuestion.js';
import './IconRefresh.js';
import './IconRemoveUser.js';
import './IconRight.js';
import './IconRotateLeft.js';
import './IconRotateRight.js';
import './IconSearch.js';
import './IconSettings.js';
import './IconShare.js';
import './IconSquareMinus.js';
import './IconSquarePlus.js';
import './IconSquare.js';
import './IconStarFilled.js';
import './IconStar.js';
import './IconSwap.js';
import './IconTarget.js';
import './IconToken.js';
import './IconTrash.js';
import './IconUnlock.js';
import './IconUp.js';
import './IconUpload.js';
import './IconUser.js';
import './IconView.js';
import './IconVote.js';
import './IconWallet.js';
import './IconWarning.js';
import './IconWorld.js';
import './IconWrite.js';
import './IconZoomIn.js';
import './IconZoomOut.js';
import './objectWithoutPropertiesLoose-9606ad13.js';
import 'react-dom';
import './web-a351a0a1.js';
import './Button.js';
import './ButtonIcon.js';
import './getDisplayName-d5fc7707.js';
import './index-edfeada6.js';
import './Link.js';
import './TextInput.js';
import './ToastHub.js';
import './index-f754c2df.js';
import './RootPortal.js';
import './TextCopy.js';
import './taggedTemplateLiteral-37fd5203.js';
import './_react_commonjs-external-3b63cae6.js';
import './EthIdenticon.js';
import './AddressField.js';
import './useArrowKeysFocus.js';
import './useClickOutside.js';
import './useFocusEnter.js';
import './useFocusLeave.js';
import { ImageExists } from './useImageExists.js';
import './useKeyDown.js';
import './useOnBlur.js';
import BadgeBase from './BadgeBase.js';
import BadgePopoverActionType from './BadgePopoverActionType.js';
import Tag from './Tag.js';
import './proptypes-c8a77d05.js';
import './Popover.js';
import './observe.js';
import './index-f0d64c59.js';
import './providers.js';
import './BadgePopoverBase.js';
import AppBadgePopover from './AppBadgePopover.js';

var iconDefaultSvg = "data:image/svg+xml,%3Csvg%20width%3D%2256%22%20height%3D%2256%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M56%200H0v56h56V0z%22%20fill%3D%22url%28%23paint0_linear%29%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M28.363%2010.74L13.04%2019.56v17.645l15.322%208.821%2015.323-8.821V19.56l-15.322-8.82z%22%20fill%3D%22url%28%23paint1_linear%29%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M28.363%2046.027V10.74l15.323%208.821v17.645l-15.323%208.821z%22%20fill%3D%22%2373F0F8%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M13.041%2019.561l15.322-8.822%2015.323%208.822-15.323%208.426-15.322-8.425z%22%20fill%3D%22url%28%23paint2_linear%29%22%2F%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22paint0_linear%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%2256%22%20y2%3D%2253.105%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2333BCE6%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2348E2E5%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22paint1_linear%22%20x1%3D%2214.618%22%20y1%3D%2219.282%22%20x2%3D%2231.423%22%20y2%3D%2243.942%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%232597B7%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2339C5E1%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22paint2_linear%22%20x1%3D%2214.799%22%20y1%3D%2219.363%22%20x2%3D%2243.686%22%20y2%3D%2219.363%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%233DCEE5%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2348E2E6%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var _StyledDiv = _styled("div").withConfig({
  displayName: "AppBadge___StyledDiv",
  componentId: "sc-5gkmrm-0"
})(["display:grid;align-items:center;grid-template-columns:auto 1fr;"]);

var _StyledSpan = _styled("span").withConfig({
  displayName: "AppBadge___StyledSpan",
  componentId: "sc-5gkmrm-1"
})(["display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"]);

var _StyledTag = _styled(Tag).withConfig({
  displayName: "AppBadge___StyledTag",
  componentId: "sc-5gkmrm-2"
})(["margin-left:", "px;"], function (p) {
  return p._css;
});

var AppBadge = React.memo(function AppBadge(_ref) {
  var appAddress = _ref.appAddress,
      badgeOnly = _ref.badgeOnly,
      compact = _ref.compact,
      iconSrc = _ref.iconSrc,
      identifier = _ref.identifier,
      label = _ref.label,
      labelStyle = _ref.labelStyle,
      networkType = _ref.networkType,
      popoverAction = _ref.popoverAction,
      popoverTitle = _ref.popoverTitle,
      props = _objectWithoutProperties(_ref, ["appAddress", "badgeOnly", "compact", "iconSrc", "identifier", "label", "labelStyle", "networkType", "popoverAction", "popoverTitle"]);

  var badgeRef = useRef(null);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      opened = _useState2[0],
      setOpened = _useState2[1];

  var handleClose = useCallback(function () {
    return setOpened(false);
  }, []);
  var handleOpen = useCallback(function () {
    return setOpened(true);
  }, []);
  var isValidAddress = isAddress(appAddress);

  if (!badgeOnly && !isValidAddress) {
    warn("AppBadge: provided invalid app address (".concat(appAddress, ")"));
  }

  popoverTitle = popoverTitle || /*#__PURE__*/React.createElement(_StyledDiv, null, /*#__PURE__*/React.createElement(_StyledSpan, null, label), identifier && /*#__PURE__*/React.createElement(_StyledTag, {
    mode: "identifier",
    _css: 1 * GU
  }, identifier));
  return /*#__PURE__*/React.createElement(BadgeBase, {
    badgeRef: badgeRef,
    compact: compact,
    disabled: badgeOnly,
    icon: /*#__PURE__*/React.createElement(ImageExists, {
      src: iconSrc
    }, function (_ref2) {
      var displayFallback = _ref2.displayFallback,
          exists = _ref2.exists;
      return /*#__PURE__*/React.createElement(Icon, {
        compact: compact,
        src: exists ? iconSrc : iconDefaultSvg
      });
    }),
    label: label,
    labelStyle: labelStyle,
    onClick: isValidAddress ? handleOpen : undefined,
    title: appAddress
  }, function (popoverDisabled) {
    return !popoverDisabled && appAddress && /*#__PURE__*/React.createElement(AppBadgePopover, {
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
  appAddress: PropTypes.string,
  badgeOnly: PropTypes.bool,
  compact: PropTypes.bool,
  iconSrc: PropTypes.string,
  identifier: PropTypes.string,
  label: PropTypes.string.isRequired,
  labelStyle: PropTypes.string,
  networkType: PropTypes.string,
  popoverAction: BadgePopoverActionType,
  popoverTitle: PropTypes.node
};

var _StyledSpan2 = _styled("span").withConfig({
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
      props = _objectWithoutProperties(_ref3, ["compact", "src"]);

  var size = (compact ? 2.25 : 3) * GU;
  return /*#__PURE__*/React.createElement(_StyledSpan2, _extends({}, props, {
    _css2: size,
    _css3: size,
    _css4: 1 * GU,
    _css5: compact ? "".concat(RADIUS, "px") : 0,
    _css6: src
  }));
};

Icon.propTypes = {
  compact: PropTypes.bool,
  src: PropTypes.string.isRequired
};

export default AppBadge;
//# sourceMappingURL=AppBadge.js.map
