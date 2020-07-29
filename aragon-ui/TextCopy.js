'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-0711941d.js');
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
var miscellaneous = require('./miscellaneous.js');
var environment = require('./environment.js');
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
var _extends = require('./extends-40571110.js');
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
var IconCopy = require('./IconCopy.js');
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
var ButtonIcon = require('./ButtonIcon.js');
var TextInput = require('./TextInput.js');
var ToastHub = require('./ToastHub.js');
require('./index-0db71dc1.js');
require('./RootPortal.js');

var HEIGHT = 5 * constants.GU;

var _StyledDiv = _styled__default("div").withConfig({
  displayName: "TextCopy___StyledDiv",
  componentId: "sc-1dg1uit-0"
})(["position:relative;display:inline-flex;width:", "px;max-width:100%;height:", "px;padding-left:", ";"], function (p) {
  return p._css;
}, HEIGHT, function (p) {
  return p._css2;
});

var _StyledDiv2 = _styled__default("div").withConfig({
  displayName: "TextCopy___StyledDiv2",
  componentId: "sc-1dg1uit-1"
})(["position:absolute;top:0;left:0;overflow:hidden;width:", "px;height:", "px;background:", ";border:1px solid ", ";border-right:0;border-radius:", "px 0.0001px 0.0001px ", "px;"], HEIGHT, HEIGHT, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, constants.RADIUS, constants.RADIUS);

var _StyledDiv3 = _styled__default("div").withConfig({
  displayName: "TextCopy___StyledDiv3",
  componentId: "sc-1dg1uit-2"
})(["display:flex;align-items:center;justify-content:center;width:", "px;height:", "px;"], function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

var _StyledButtonIcon = _styled__default(ButtonIcon.default).withConfig({
  displayName: "TextCopy___StyledButtonIcon",
  componentId: "sc-1dg1uit-3"
})(["width:", "px;height:", "px;border-radius:0;color:", ";"], function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
});

var _StyledTextInput = _styled__default(TextInput.default).withConfig({
  displayName: "TextCopy___StyledTextInput",
  componentId: "sc-1dg1uit-4"
})(["text-overflow:ellipsis;height:", "px;max-width:100%;border:1px solid ", ";", ";", ";&:read-only{color:", ";text-shadow:none;}"], HEIGHT, function (p) {
  return p._css10;
}, function (p) {
  return p._css11;
}, function (p) {
  return p._css12;
}, function (p) {
  return p._css13;
});

var TextCopy = React__default.memo(React__default.forwardRef(function TextCopy(_ref, ref) {
  var adornment = _ref.adornment,
      autofocus = _ref.autofocus,
      message = _ref.message,
      monospace = _ref.monospace,
      onCopy = _ref.onCopy,
      value = _ref.value,
      props = objectWithoutProperties._objectWithoutProperties(_ref, ["adornment", "autofocus", "message", "monospace", "onCopy", "value"]);

  var theme = Theme.useTheme();
  var toast = ToastHub.useToast();
  var inputRef = React.useRef(null); // Allows to focus the component from the outside

  React.useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        inputRef.current.focus();
      }
    };
  }); // Select the content on focus

  var handleFocus = React.useCallback(function () {
    inputRef.current && inputRef.current.select();
  }, []); // If onCopy is set (either to a function or null), Toast is not used.

  var onCopyOrToast = onCopy === undefined ? toast : onCopy || miscellaneous.noop;
  var handleCopy = React.useCallback(function () {
    if (inputRef.current) {
      inputRef.current.focus();

      try {
        document.execCommand('copy');
        onCopyOrToast(message);
      } catch (err) {
        environment.warn(err);
      }
    }
  }, [message, onCopyOrToast]);
  return /*#__PURE__*/React__default.createElement(_StyledDiv, _extends._extends({}, props, {
    _css: 52.5 * constants.GU,
    _css2: adornment ? "".concat(HEIGHT, "px") : '0'
  }), adornment && /*#__PURE__*/React__default.createElement(_StyledDiv2, {
    _css3: theme.surface,
    _css4: theme.border
  }, /*#__PURE__*/React__default.createElement(_StyledDiv3, {
    _css5: HEIGHT - 2,
    _css6: HEIGHT - 2
  }, adornment)), /*#__PURE__*/React__default.createElement(_StyledTextInput, {
    ref: inputRef,
    adornment: /*#__PURE__*/React__default.createElement(_StyledButtonIcon, {
      onClick: handleCopy,
      label: "Copy",
      _css7: HEIGHT - 2,
      _css8: HEIGHT - 2,
      _css9: theme.surfaceIcon
    }, /*#__PURE__*/React__default.createElement(IconCopy.default, null)),
    adornmentPosition: "end",
    adornmentSettings: {
      // Keep the button square
      width: HEIGHT - 2,
      padding: 0
    },
    autofocus: autofocus,
    onFocus: handleFocus,
    readOnly: true,
    value: value,
    wide: true,
    _css10: theme.border,
    _css11: adornment ? "\n                  border-top-left-radius: 0;\n                  border-bottom-left-radius: 0;\n                  border-left: 0;\n                " : '',
    _css12: textStyles.textStyle(monospace ? 'address2' : 'body3'),
    _css13: theme.surfaceContent
  }));
}));
TextCopy.propTypes = {
  adornment: index.PropTypes.node,
  autofocus: index.PropTypes.bool,
  message: index.PropTypes.string,
  monospace: index.PropTypes.bool,
  onCopy: index.PropTypes.func,
  value: index.PropTypes.string
};
TextCopy.defaultProps = {
  autofocus: false,
  message: 'Copied',
  monospace: true
};

exports.default = TextCopy;
//# sourceMappingURL=TextCopy.js.map
