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
var springs = require('./springs.js');
var textStyles = require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');
var _extends$1 = require('./extends-40571110.js');
var objectWithoutProperties = require('./objectWithoutProperties-35db8ab0.js');
var index$1 = require('./index-ecc57c9f.js');
require('./FocusVisible.js');
var ButtonBase = require('./ButtonBase.js');
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
var IconDown = require('./IconDown.js');
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

// In / out example: [0, 0.25, 0.5, 0.75, 1] => [0, 0.5, 1, 0.5, 0]

function interpolateToggleElevation(value, fn) {
  return value.interpolate(function (v) {
    return fn(1 - Math.abs(v * 2 - 1));
  });
}

var _StyledSection = _styled__default("section").withConfig({
  displayName: "Details___StyledSection",
  componentId: "b3f99g-0"
})(["", ""], function (p) {
  return p._css;
});

var _StyledButtonBase = _styled__default(ButtonBase.default).withConfig({
  displayName: "Details___StyledButtonBase",
  componentId: "b3f99g-1"
})(["position:relative;width:100%;&:active{background:", ";}"], function (p) {
  return p._css2;
});

var _StyledDiv = _styled__default("div").withConfig({
  displayName: "Details___StyledDiv",
  componentId: "b3f99g-2"
})(["position:absolute;left:", "px;right:", "px;bottom:0;"], function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
});

var _StyledDiv2 = _styled__default("div").withConfig({
  displayName: "Details___StyledDiv2",
  componentId: "b3f99g-3"
})(["height:1px;box-shadow:0 1px 1px rgba(0,0,0,0.1);"]);

var _StyledH = _styled__default("h1").withConfig({
  displayName: "Details___StyledH",
  componentId: "b3f99g-4"
})(["display:flex;justify-content:flex-start;align-items:center;height:", "px;margin-left:", "px;color:", ";", " font-weight:400;"], function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
});

var _StyledDiv3 = _styled__default("div").withConfig({
  displayName: "Details___StyledDiv3",
  componentId: "b3f99g-5"
})(["margin-top:2px;"]);

var _StyledDiv4 = _styled__default("div").withConfig({
  displayName: "Details___StyledDiv4",
  componentId: "b3f99g-6"
})(["display:flex;align-items:center;justify-content:center;"]);

var _StyledDiv5 = _styled__default("div").withConfig({
  displayName: "Details___StyledDiv5",
  componentId: "b3f99g-7"
})(["overflow:hidden"]);

var _StyledAnimatedDiv = _styled__default(web.extendedAnimated.div).withConfig({
  displayName: "Details___StyledAnimatedDiv",
  componentId: "b3f99g-8"
})(["display:flex;flex-direction:column;justify-content:flex-end;"]);

var _StyledDiv6 = _styled__default("div").withConfig({
  displayName: "Details___StyledDiv6",
  componentId: "b3f99g-9"
})(["", ""], function (p) {
  return p._css9;
});

function Details(_ref) {
  var children = _ref.children,
      label = _ref.label,
      onToggle = _ref.onToggle,
      openedProp = _ref.opened,
      props = objectWithoutProperties._objectWithoutProperties(_ref, ["children", "label", "onToggle", "opened"]);

  var theme = Theme.useTheme();

  var _useInside = index$1.o('Box'),
      _useInside2 = slicedToArray._slicedToArray(_useInside, 1),
      insideBox = _useInside2[0];

  var _useInside3 = index$1.o('SidePanel'),
      _useInside4 = slicedToArray._slicedToArray(_useInside3, 1),
      insideSidePanel = _useInside4[0];

  var contentRef = React.useRef(null);
  var contentHeight = React.useRef(0); // Details supports two modes: managed (internal state),
  // or controlled (external state).

  var _useState = React.useState(false),
      _useState2 = slicedToArray._slicedToArray(_useState, 2),
      openedManaged = _useState2[0],
      setOpenedManaged = _useState2[1];

  var opened = openedProp === undefined ? openedManaged : openedProp;
  var updateHeight = React.useCallback(function () {
    if (contentRef.current) {
      contentHeight.current = contentRef.current.clientHeight;
    }
  }, []);
  var handleContentRef = React.useCallback(function (element) {
    contentRef.current = element;
    updateHeight();
  }, [updateHeight]);
  var handleToggle = React.useCallback(function () {
    var newOpened = !opened; // Managed state

    if (openedProp === undefined) {
      setOpenedManaged(newOpened);
    } // Useful to notify even in managed mode


    if (onToggle) {
      onToggle(newOpened);
    }
  }, [onToggle, opened, openedProp]); // Animate after the initial render

  var animate = React.useRef(false);
  React.useEffect(function () {
    animate.current = true;
  }, []); // Use height: 'auto' when opened

  var _useState3 = React.useState(false),
      _useState4 = slicedToArray._slicedToArray(_useState3, 2),
      forceHeight = _useState4[0],
      setForceHeight = _useState4[1];

  var handleStart = React.useCallback(function () {
    return setForceHeight(true);
  }, []);
  var handleRest = React.useCallback(function () {
    // Note: we need to use the opened from the previous
    // render cycle here, which is why we don’t use a callback.
    setForceHeight(!opened);
  }, [opened]); // Update the height

  React.useEffect(updateHeight, [opened, updateHeight]);
  var spacingCss = React.useMemo(function () {
    if (insideSidePanel) {
      return {
        section: "\n          margin: ".concat(2 * constants.GU, "px ").concat(-3 * constants.GU, "px 0;\n          padding-bottom: ").concat(3 * constants.GU, "px;\n        "),
        content: "\n          padding: ".concat(2 * constants.GU, "px ").concat(3 * constants.GU, "px 0;\n        ")
      };
    }

    if (insideBox) {
      return {
        section: "\n          margin: 0 ".concat(-3 * constants.GU, "px;\n        "),
        content: "\n          padding: ".concat(1 * constants.GU, "px ").concat(3 * constants.GU, "px 0;\n        ")
      };
    }

    return {
      section: "\n        margin: 0;\n        padding-bottom: ".concat(3 * constants.GU, "px;\n      "),
      content: "\n        padding: 0;\n      "
    };
  }, [insideSidePanel, insideBox]);
  return /*#__PURE__*/React__default.createElement(web.Spring, {
    config: springs.springs.smooth,
    from: {
      openProgress: 0
    },
    to: {
      openProgress: Number(opened)
    },
    immediate: !animate,
    onRest: handleRest,
    onStart: handleStart,
    native: true
  }, function (_ref2) {
    var openProgress = _ref2.openProgress;
    return /*#__PURE__*/React__default.createElement(_StyledSection, _extends$1._extends({}, props, {
      _css: spacingCss.section
    }), /*#__PURE__*/React__default.createElement(_StyledButtonBase, {
      onClick: handleToggle,
      _css2: theme.surfacePressed
    }, /*#__PURE__*/React__default.createElement(_StyledDiv, {
      _css3: 3 * constants.GU,
      _css4: 3 * constants.GU
    }, /*#__PURE__*/React__default.createElement(web.extendedAnimated.div, {
      style: {
        transform: interpolateToggleElevation(openProgress, function (v) {
          return "scale3d(".concat(v, ", 1, 1)");
        }),
        opacity: interpolateToggleElevation(openProgress, function (v) {
          return v;
        })
      }
    }, /*#__PURE__*/React__default.createElement(_StyledDiv2, null))), /*#__PURE__*/React__default.createElement(_StyledH, _extends$1._extends({}, props, {
      _css5: 5 * constants.GU,
      _css6: 3 * constants.GU,
      _css7: theme.surfaceContentSecondary,
      _css8: textStyles.textStyle('label2')
    }), /*#__PURE__*/React__default.createElement(_StyledDiv3, null, label), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(web.extendedAnimated.div, {
      style: {
        marginLeft: "".concat(1 * constants.GU, "px"),
        transform: openProgress.interpolate(function (v) {
          return "rotate(".concat((1 - v) * 180, "deg)");
        }),
        transformOrigin: '50% calc(50% - 0.5px)'
      }
    }, /*#__PURE__*/React__default.createElement(_StyledDiv4, null, /*#__PURE__*/React__default.createElement(IconDown.default, {
      size: "tiny"
    })))))), /*#__PURE__*/React__default.createElement(_StyledDiv5, null, /*#__PURE__*/React__default.createElement(_StyledAnimatedDiv, {
      style: {
        opacity: openProgress,
        height: forceHeight ? openProgress.interpolate(function (v) {
          return "".concat(v * contentHeight.current, "px");
        }) : 'auto'
      }
    }, /*#__PURE__*/React__default.createElement(_StyledDiv6, {
      ref: handleContentRef,
      _css9: spacingCss.content
    }, /*#__PURE__*/React__default.createElement("div", null, children)))));
  });
}

Details.propTypes = {
  children: index.PropTypes.node.isRequired,
  label: index.PropTypes.string.isRequired,
  onToggle: index.PropTypes.func,
  opened: index.PropTypes.bool
};

exports.default = Details;
//# sourceMappingURL=Details.js.map
