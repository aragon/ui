'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var slicedToArray = require('./slicedToArray-0711941d.js');
require('./unsupportedIterableToArray-68db1d3b.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
var index = require('./index-b0606964.js');
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
require('./miscellaneous.js');
var environment = require('./environment.js');
require('./font.js');
require('./math-f4029164.js');
require('./characters.js');
require('./format.js');
require('./keycodes.js');
require('./url.js');
var web3 = require('./web3.js');
var constants = require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./Theme.js');
var _extends$1 = require('./extends-40571110.js');
var objectWithoutProperties = require('./objectWithoutProperties-35db8ab0.js');
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
require('./IconCross.js');
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
require('./Button.js');
require('./ButtonIcon.js');
require('./getDisplayName-7ab6d318.js');
require('./index-bc84a358.js');
require('./Link.js');
require('./TextInput.js');
require('./ToastHub.js');
require('./index-0db71dc1.js');
require('./RootPortal.js');
require('./TextCopy.js');
require('./taggedTemplateLiteral-227ed122.js');
require('./_react_commonjs-external-bf8fc71c.js');
require('./EthIdenticon.js');
require('./AddressField.js');
require('./useArrowKeysFocus.js');
require('./useClickOutside.js');
require('./useFocusEnter.js');
require('./useFocusLeave.js');
var useImageExists = require('./useImageExists.js');
require('./useKeyDown.js');
require('./useOnBlur.js');
var BadgeBase = require('./BadgeBase.js');
require('./BadgePopoverActionType.js');
require('./proptypes-5b34673d.js');
require('./Popover.js');
require('./observe.js');
require('./index-030bfca8.js');
require('./providers.js');
require('./BadgePopoverBase.js');
var TokenBadgePopover = require('./TokenBadgePopover.js');

var _StyledSpan = _styled__default("span").withConfig({
  displayName: "TokenBadge___StyledSpan",
  componentId: "sc-7bvdqo-0"
})(["position:relative;top:1px;display:flex;flex-shrink:1;min-width:0;margin-left:", ";"], function (p) {
  return p._css;
});

var TokenBadge = React__default.memo(function TokenBadge(_ref) {
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
      _useState2 = slicedToArray._slicedToArray(_useState, 2),
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
  address: index.PropTypes.string,
  badgeOnly: index.PropTypes.bool,
  className: index.PropTypes.string,
  compact: index.PropTypes.bool,
  name: index.PropTypes.string,
  networkType: index.PropTypes.string,
  style: index.PropTypes.object,
  symbol: index.PropTypes.string.isRequired
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
      props = objectWithoutProperties._objectWithoutProperties(_ref3, ["compact", "src"]);

  var margin = 1 * constants.GU;
  return /*#__PURE__*/React__default.createElement(_StyledSpan2, _extends$1._extends({}, props, {
    _css2: compact ? margin : 0,
    _css3: compact ? 0 : margin,
    _css4: src
  }));
}

Icon.propTypes = {
  compact: index.PropTypes.bool,
  src: index.PropTypes.string.isRequired
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
