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
import { isAddress, tokenIconUrl } from './web3.js';
import { GU } from './constants.js';
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
import './BadgePopoverActionType.js';
import './proptypes-c8a77d05.js';
import './Popover.js';
import './observe.js';
import './index-f0d64c59.js';
import './providers.js';
import './BadgePopoverBase.js';
import TokenBadgePopover from './TokenBadgePopover.js';

var _StyledSpan = _styled("span").withConfig({
  displayName: "TokenBadge___StyledSpan",
  componentId: "sc-7bvdqo-0"
})(["position:relative;top:1px;display:flex;flex-shrink:1;min-width:0;margin-left:", ";"], function (p) {
  return p._css;
});

var TokenBadge = React.memo(function TokenBadge(_ref) {
  var address = _ref.address,
      badgeOnly = _ref.badgeOnly,
      className = _ref.className,
      compact = _ref.compact,
      name = _ref.name,
      networkType = _ref.networkType,
      style = _ref.style,
      symbol = _ref.symbol;
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
  var isValidAddress = isAddress(address);
  var iconSrc = isValidAddress && networkType === 'main' ? tokenIconUrl(address) : null;
  var title = name && symbol ? "".concat(name, " (").concat(symbol, ")") : symbol;

  if (!isValidAddress) {
    warn("TokenBadge: provided invalid address (".concat(address, ")"));
  }

  return /*#__PURE__*/React.createElement(BadgeBase, {
    badgeRef: badgeRef,
    className: className,
    compact: compact,
    disabled: badgeOnly,
    icon: /*#__PURE__*/React.createElement(ImageExists, {
      src: iconSrc
    }, function (_ref2) {
      var exists = _ref2.exists;
      return exists && /*#__PURE__*/React.createElement(Icon, {
        compact: compact,
        src: iconSrc
      });
    }),
    label: /*#__PURE__*/React.createElement(_StyledSpan, {
      _css: compact ? 0 : "".concat(1 * GU, "px")
    }, name && /*#__PURE__*/React.createElement(Name, null, name), /*#__PURE__*/React.createElement(_Symbol, null, name ? "(".concat(symbol, ")") : symbol)),
    onClick: isValidAddress ? handleOpen : undefined,
    style: style,
    title: "".concat(title, " \u2212 ").concat(address || 'No address')
  }, function (popoverDisabled) {
    return !popoverDisabled && address && /*#__PURE__*/React.createElement(TokenBadgePopover, {
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
  address: PropTypes.string,
  badgeOnly: PropTypes.bool,
  className: PropTypes.string,
  compact: PropTypes.bool,
  name: PropTypes.string,
  networkType: PropTypes.string,
  style: PropTypes.object,
  symbol: PropTypes.string.isRequired
};
TokenBadge.defaultProps = {
  address: '',
  name: '',
  networkType: 'main'
};

var _StyledSpan2 = _styled("span").withConfig({
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
      props = _objectWithoutProperties(_ref3, ["compact", "src"]);

  var margin = 1 * GU;
  return /*#__PURE__*/React.createElement(_StyledSpan2, _extends({}, props, {
    _css2: compact ? margin : 0,
    _css3: compact ? 0 : margin,
    _css4: src
  }));
}

Icon.propTypes = {
  compact: PropTypes.bool,
  src: PropTypes.string.isRequired
};
var Name = _styled.span.withConfig({
  displayName: "TokenBadge__Name",
  componentId: "sc-7bvdqo-2"
})(["flex-shrink:1;overflow:hidden;text-overflow:ellipsis;min-width:20%;margin-right:", "px;"], 0.5 * GU);

var _Symbol = _styled.span.withConfig({
  displayName: "TokenBadge___Symbol",
  componentId: "sc-7bvdqo-3"
})(["flex-shrink:0;"]);

export default TokenBadge;
//# sourceMappingURL=TokenBadge.js.map
