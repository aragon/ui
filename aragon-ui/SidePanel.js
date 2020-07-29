'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var slicedToArray = require('./slicedToArray-0711941d.js');
require('./unsupportedIterableToArray-68db1d3b.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
var index = require('./index-b0606964.js');
var defineProperty$1 = require('./defineProperty-0921a47c.js');
require('./toConsumableArray-d8a4a2c3.js');
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
require('./getPrototypeOf-2a661a20.js');
require('./color.js');
require('./components.js');
require('./contains-component.js');
var css = require('./css.js');
require('./dayjs.min-e07657bf.js');
require('./date.js');
require('./miscellaneous.js');
var environment = require('./environment.js');
require('./font.js');
require('./math-f4029164.js');
require('./characters.js');
require('./format.js');
var keycodes = require('./keycodes.js');
require('./url.js');
require('./web3.js');
var constants = require('./constants.js');
require('./breakpoints.js');
var springs = require('./springs.js');
var textStyles = require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');
var _extends$1 = require('./extends-40571110.js');
var objectWithoutProperties = require('./objectWithoutProperties-35db8ab0.js');
var index$1 = require('./index-ecc57c9f.js');
require('./isObject-ec755c87.js');
var Viewport = require('./Viewport-15101437.js');
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
var web = require('./web-d0294535.js');
require('./Button.js');
var ButtonIcon = require('./ButtonIcon.js');
require('./index-0db71dc1.js');
var RootPortal = require('./RootPortal.js');

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty$1._defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var CONTENT_PADDING = 3 * constants.GU; // The closing position of the panel, on the right side of the viewport.
// It takes into consideration the shadow of the panel.

var CLOSING_POSITION = 5 * constants.GU;
var SidePanelContext = React__default.createContext(null);

var _StyledDiv = _styled__default("div").withConfig({
  displayName: "SidePanel___StyledDiv",
  componentId: "sc-1kjx6mk-0"
})(["position:absolute;z-index:1;top:0;left:0;right:0;bottom:0;pointer-events:", ";overflow:hidden;"], function (p) {
  return p._css;
});

var _StyledAnimatedDiv = _styled__default(web.extendedAnimated.div).withConfig({
  displayName: "SidePanel___StyledAnimatedDiv",
  componentId: "sc-1kjx6mk-1"
})(["position:absolute;top:0;left:0;right:0;bottom:0;background:", ";"], function (p) {
  return p._css2;
});

var _StyledHeader = _styled__default("header").withConfig({
  displayName: "SidePanel___StyledHeader",
  componentId: "sc-1kjx6mk-2"
})(["display:flex;flex-direction:column;justify-content:center;flex-shrink:0;position:relative;height:", "px;padding-left:", "px;border-bottom:1px solid ", ";", ";"], function (p) {
  return p._css3;
}, CONTENT_PADDING, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

var _StyledH = _styled__default("h1").withConfig({
  displayName: "SidePanel___StyledH",
  componentId: "sc-1kjx6mk-3"
})(["color:", ";", ";"], function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
});

var _StyledButtonIcon = _styled__default(ButtonIcon.default).withConfig({
  displayName: "SidePanel___StyledButtonIcon",
  componentId: "sc-1kjx6mk-4"
})(["position:absolute;", ""], function (p) {
  return p._css8;
});

var _StyledDiv2 = _styled__default("div").withConfig({
  displayName: "SidePanel___StyledDiv2",
  componentId: "sc-1kjx6mk-5"
})(["overflow-y:auto;height:100%;display:flex;flex-direction:column;"]);

var _StyledDiv3 = _styled__default("div").withConfig({
  displayName: "SidePanel___StyledDiv3",
  componentId: "sc-1kjx6mk-6"
})(["min-height:0;flex-grow:1;flex-shrink:0;display:flex;flex-direction:column;width:100%;padding-right:", "px;padding-left:", "px;padding-bottom:", "px;"], CONTENT_PADDING, CONTENT_PADDING, CONTENT_PADDING);

function SidePanel(_ref2) {
  var blocking = _ref2.blocking,
      children = _ref2.children,
      opened = _ref2.opened,
      onClose = _ref2.onClose,
      onTransitionEnd = _ref2.onTransitionEnd,
      title = _ref2.title;
  var theme = Theme.useTheme();

  var _useViewport = Viewport.useViewport(),
      below = _useViewport.below;

  var compact = below('medium');
  var close = React.useCallback(function () {
    if (!blocking) {
      onClose();
    }
  }, [blocking, onClose]);
  var handleEscape = React.useCallback(function (event) {
    if (event.keyCode === keycodes.KEY_ESC && opened) {
      close();
    }
  }, [opened, close]);

  var _useState = React.useState(opened ? 'opened' : 'closed'),
      _useState2 = slicedToArray._slicedToArray(_useState, 2),
      status = _useState2[0],
      setStatus = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = slicedToArray._slicedToArray(_useState3, 2),
      readyToFocus = _useState4[0],
      setReadyToFocus = _useState4[1];

  var handleTransitionRest = React.useCallback(function () {
    onTransitionEnd(opened);
    setStatus(opened ? 'opened' : 'closed');
  }, [opened, onTransitionEnd]);
  var handleTransitionStart = React.useCallback(function () {
    setStatus(opened ? 'opening' : 'closing');
  }, [opened]);
  var handleTransitionFrame = React.useCallback(function (item, _, _ref3) {
    var progress = _ref3.progress;

    if (progress > 0.5 && !readyToFocus) {
      setReadyToFocus(true);
    } else if (progress < 0.5 && readyToFocus) {
      setReadyToFocus(false);
    }
  }, [readyToFocus]);
  var handleTransitionDestroyed = React.useCallback(function () {
    setReadyToFocus(false);
  }, []);
  React.useEffect(function () {
    document.addEventListener('keydown', handleEscape);
    return function () {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [handleEscape]);
  return /*#__PURE__*/React__default.createElement(RootPortal.default, null, /*#__PURE__*/React__default.createElement(index$1.i, {
    name: "SidePanel"
  }, /*#__PURE__*/React__default.createElement(web.Transition, {
    items: opened,
    config: _objectSpread({}, springs.springs.lazy, {
      precision: 0.001
    }),
    from: {
      progress: 0
    },
    enter: {
      progress: Number(opened)
    },
    leave: {
      progress: 0
    },
    onRest: handleTransitionRest,
    onStart: handleTransitionStart,
    onFrame: handleTransitionFrame,
    onDestroyed: handleTransitionDestroyed,
    unique: true,
    native: true
  }, function (opened) {
    return opened && function (_ref4) {
      var progress = _ref4.progress;
      return /*#__PURE__*/React__default.createElement(_StyledDiv, {
        _css: status !== 'closing' ? 'auto' : 'none'
      }, /*#__PURE__*/React__default.createElement(_StyledAnimatedDiv, {
        onClick: close,
        style: {
          opacity: progress,
          pointerEvents: status !== 'closing' ? 'auto' : 'none'
        },
        _css2: theme.overlay.alpha(0.9)
      }), /*#__PURE__*/React__default.createElement(Panel, {
        compact: compact,
        style: {
          transform: progress.interpolate(function (v) {
            return "\n                          translate3d(\n                            calc(\n                              ".concat(100 * (1 - v), "% +\n                              ").concat(CLOSING_POSITION * (1 - v), "px\n                            ), 0, 0\n                          )\n                        ");
          })
        }
      }, /*#__PURE__*/React__default.createElement(_StyledHeader, {
        _css3: 8 * constants.GU,
        _css4: theme.border,
        _css5: css.unselectable()
      }, /*#__PURE__*/React__default.createElement(_StyledH, {
        _css6: theme.surfaceContent,
        _css7: textStyles.textStyle('body1')
      }, title), !blocking && /*#__PURE__*/React__default.createElement(_StyledButtonIcon, {
        label: "Close",
        onClick: close,
        _css8: !compact ? "\n                              top: ".concat(2 * constants.GU, "px;\n                              right: ").concat(2 * constants.GU, "px;\n                            ") : "\n                              top: 0;\n                              right: 0;\n                              height: ".concat(8 * constants.GU, "px;\n                              width: ").concat(8 * constants.GU, "px;\n                            ")
      }, /*#__PURE__*/React__default.createElement(IconCross.default, {
        color: theme.surfaceIcon
      }))), /*#__PURE__*/React__default.createElement(_StyledDiv2, null, /*#__PURE__*/React__default.createElement(_StyledDiv3, null, /*#__PURE__*/React__default.createElement(SidePanelContext.Provider, {
        value: {
          status: status,
          readyToFocus: readyToFocus
        }
      }, children)))));
    };
  })));
}

SidePanel.propTypes = {
  blocking: index.PropTypes.bool,
  children: index.PropTypes.node.isRequired,
  opened: index.PropTypes.bool,
  onClose: index.PropTypes.func,
  onTransitionEnd: index.PropTypes.func,
  title: index.PropTypes.node.isRequired
};
SidePanel.defaultProps = {
  opened: true,
  blocking: false,
  onClose: function onClose() {},
  onTransitionEnd: function onTransitionEnd() {}
};

var _StyledAnimatedAside = _styled__default(web.extendedAnimated.aside).withConfig({
  displayName: "SidePanel___StyledAnimatedAside",
  componentId: "sc-1kjx6mk-7"
})(["position:absolute;top:0;right:0;display:flex;flex-direction:column;width:100%;height:100%;background:", ";box-shadow:-2px 0px 4px rgba(0,0,0,0.1);", ""], function (p) {
  return p._css9;
}, function (p) {
  return p._css10;
});

var Panel = React__default.memo(function Panel(_ref5) {
  var compact = _ref5.compact,
      props = objectWithoutProperties._objectWithoutProperties(_ref5, ["compact"]);

  var theme = Theme.useTheme();
  return /*#__PURE__*/React__default.createElement(_StyledAnimatedAside, _extends$1._extends({}, props, {
    _css9: theme.surface,
    _css10: !compact ? 'max-width: 450px;' : ''
  }));
});
Panel.propTypes = {
  compact: index.PropTypes.bool
};

function useSidePanel() {
  var value = React.useContext(SidePanelContext);

  if (value === null) {
    throw new Error('useSidePanel() was used outside of the SidePanel render tree, ' + 'which has to be declared at an upper level!');
  }

  return value;
}

function useSidePanelFocusOnReady(ref) {
  var _useSidePanel = useSidePanel(),
      readyToFocus = _useSidePanel.readyToFocus;

  var fallbackRef = React.useRef();

  var _ref = ref || fallbackRef;

  React.useEffect(function () {
    if (readyToFocus && _ref.current) {
      if (_ref.current.focus) {
        _ref.current.focus();
      } else {
        environment.warn('useSidePanelFocusOnReady(): the focus() method wasn’t available on ' + 'the passed ref.');
      }
    }
  }, [readyToFocus, _ref]);
  return _ref;
} // Used for spacing in SidePanelSplit and SidePanelSeparator


SidePanel.HORIZONTAL_PADDING = CONTENT_PADDING;

exports.default = SidePanel;
exports.useSidePanel = useSidePanel;
exports.useSidePanelFocusOnReady = useSidePanelFocusOnReady;
//# sourceMappingURL=SidePanel.js.map
