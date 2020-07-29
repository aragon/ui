import { _ as _slicedToArray } from './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import React$1, { useState, useCallback } from 'react';
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
import './environment.js';
import './font.js';
import './math-e6d0e93a.js';
import './characters.js';
import './format.js';
import './keycodes.js';
import './url.js';
import './web3.js';
import { RADIUS } from './constants.js';
import './breakpoints.js';
import { springs } from './springs.js';
import './text-styles.js';
import './theme-dark.js';
import './theme-light.js';
import { useTheme } from './Theme.js';
import './extends-db4f0c26.js';
import './objectWithoutProperties-234758e1.js';
import './index-422d37c0.js';
import './FocusVisible.js';
import ButtonBase from './ButtonBase.js';
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
import IconDown from './IconDown.js';
import './IconDownload.js';
import './IconEdit.js';
import IconEllipsis from './IconEllipsis.js';
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
import ReactDOM from 'react-dom';
import { e as extendedAnimated, S as Spring } from './web-a351a0a1.js';
import './_react_commonjs-external-3b63cae6.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ClickOutComponent = function (_React$Component) {
  _inherits(ClickOutComponent, _React$Component);

  function ClickOutComponent() {
    _classCallCheck(this, ClickOutComponent);

    return _possibleConstructorReturn(this, (ClickOutComponent.__proto__ || Object.getPrototypeOf(ClickOutComponent)).call(this));
  }

  _createClass(ClickOutComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;
      var elTouchIsClick = true;
      var documentTouchIsClick = true;
      var el = ReactDOM.findDOMNode(this);

      self.__documentTouchStarted = function (e) {
        el.removeEventListener('click', self.__elementClicked);
        document.removeEventListener('click', self.__documentClicked);
      };

      self.__documentTouchMoved = function (e) {
        documentTouchIsClick = false;
      };

      self.__documentTouchEnded = function (e) {
        if (documentTouchIsClick) self.__documentClicked(e);
        documentTouchIsClick = true;
      };

      self.__documentClicked = function (e) {
        if ((e.__clickedElements || []).indexOf(el) !== -1) return;

        var clickOutHandler = self.onClickOut || self.props.onClickOut;
        if (!clickOutHandler) {
          return console.warn('onClickOut is not defined.');
        }

        clickOutHandler.call(self, e);
      };

      self.__elementTouchMoved = function (e) {
        elTouchIsClick = false;
      };

      self.__elementTouchEnded = function (e) {
        if (elTouchIsClick) self.__elementClicked(e);
        elTouchIsClick = true;
      };

      self.__elementClicked = function (e) {
        e.__clickedElements = e.__clickedElements || [];
        e.__clickedElements.push(el);
      };

      setTimeout(function () {
        if (self.__unmounted) return;
        self.toggleListeners('addEventListener');
      }, 0);
    }
  }, {
    key: 'toggleListeners',
    value: function toggleListeners(listenerMethod) {
      var el = ReactDOM.findDOMNode(this);

      el[listenerMethod]('touchmove', this.__elementTouchMoved);
      el[listenerMethod]('touchend', this.__elementTouchEnded);
      el[listenerMethod]('click', this.__elementClicked);

      document[listenerMethod]('touchstart', this.__documentTouchStarted);
      document[listenerMethod]('touchmove', this.__documentTouchMoved);
      document[listenerMethod]('touchend', this.__documentTouchEnded);
      document[listenerMethod]('click', this.__documentClicked);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.toggleListeners('removeEventListener');
      this.__unmounted = true;
    }
  }, {
    key: 'render',
    value: function render() {
      return Array.isArray(this.props.children) ? React$1.createElement(
        'div',
        null,
        this.props.children
      ) : React$1.Children.only(this.props.children);
    }
  }]);

  return ClickOutComponent;
}(React$1.Component);

var reactOnclickout = ClickOutComponent;

var BASE_WIDTH = 46;
var BASE_HEIGHT = 32;

var _StyledIconEllipsis = _styled(IconEllipsis).withConfig({
  displayName: "ContextMenu___StyledIconEllipsis",
  componentId: "ris724-0"
})([""]);

var _StyledIconDown = _styled(IconDown).withConfig({
  displayName: "ContextMenu___StyledIconDown",
  componentId: "ris724-1"
})(["color:", ";"], function (p) {
  return p._css7;
});

var _StyledAnimatedDiv = _styled(extendedAnimated.div).withConfig({
  displayName: "ContextMenu___StyledAnimatedDiv",
  componentId: "ris724-2"
})(["z-index:", ";overflow:hidden;position:absolute;top:", "px;right:0;background:", ";border:1px solid ", ";border-radius:3px 0 3px 3px;"], function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
}, function (p) {
  return p._css10;
}, function (p) {
  return p._css11;
});

var _StyledDiv = _styled("div").withConfig({
  displayName: "ContextMenu___StyledDiv",
  componentId: "ris724-3"
})(["z-index:", ";position:absolute;bottom:0;right:1px;height:1px;width:", "px;background:", ";"], function (p) {
  return p._css12;
}, function (p) {
  return p._css13;
}, function (p) {
  return p._css14;
});

function ContextMenu(_ref) {
  var children = _ref.children,
      zIndex = _ref.zIndex,
      disabled = _ref.disabled;
  var theme = useTheme();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      opened = _useState2[0],
      setOpened = _useState2[1];

  var handleClose = useCallback(function () {
    setOpened(false);
  }, []);
  var handleBaseButtonClick = useCallback(function () {
    setOpened(function (opened) {
      return !opened;
    });
  }, []); // Increase the z-index on an opened menu, to make sure it's above any other
  // context menus below it using the same z-index (e.g. when used in a list)

  var appliedZIndex = opened ? zIndex + 1 : zIndex;
  return /*#__PURE__*/React$1.createElement(reactOnclickout, {
    onClickOut: handleClose
  }, /*#__PURE__*/React$1.createElement(Spring, {
    config: springs.smooth,
    to: {
      openProgress: Number(opened)
    },
    native: true
  }, function (_ref2) {
    var openProgress = _ref2.openProgress;
    return /*#__PURE__*/React$1.createElement(_StyledMain, {
      style: {
        boxShadow: openProgress.interpolate(function (t) {
          return "0 4px 4px rgba(0, 0, 0, ".concat(t * 0.03, ")");
        })
      },
      _css: appliedZIndex
    }, /*#__PURE__*/React$1.createElement(_StyledButton, {
      onClick: handleBaseButtonClick,
      opened: opened,
      disabled: disabled,
      focusRingRadius: RADIUS,
      _css2: disabled ? theme.disabledContent : opened ? theme.accent : theme.surfaceContent,
      _css3: disabled ? theme.disabled : theme.surface,
      _css4: disabled ? '0' : "1px solid ".concat(theme.border),
      _css5: opened ? theme.surface : theme.border,
      _css6: disabled ? '' : "&:active {\n                  background: ".concat(theme.surfacePressed, ";\n                  border-bottom-color: ").concat(opened ? theme.surfacePressed : theme.border, ";\n                }")
    }, /*#__PURE__*/React$1.createElement(_StyledIconEllipsis, null), /*#__PURE__*/React$1.createElement(extendedAnimated.div, {
      style: {
        display: 'flex',
        alignItems: 'center',
        transformOrigin: '50% 50%',
        transform: openProgress.interpolate(function (v) {
          return "rotate(".concat(v * 180, "deg)");
        })
      }
    }, /*#__PURE__*/React$1.createElement(_StyledIconDown, {
      size: "tiny",
      _css7: disabled ? theme.disabledIcon : theme.surfaceIcon
    }))), opened && /*#__PURE__*/React$1.createElement(React$1.Fragment, null, /*#__PURE__*/React$1.createElement(_StyledAnimatedDiv, {
      onClick: handleClose,
      style: {
        opacity: openProgress,
        boxShadow: openProgress.interpolate(function (t) {
          return "0 4px 4px rgba(0, 0, 0, ".concat(t * 0.03, ")");
        })
      },
      _css8: appliedZIndex + 1,
      _css9: BASE_HEIGHT - 1,
      _css10: theme.surface,
      _css11: theme.border
    }, children), /*#__PURE__*/React$1.createElement(_StyledDiv, {
      _css12: appliedZIndex + 1,
      _css13: BASE_WIDTH - 2,
      _css14: theme.surface
    })));
  }));
}

ContextMenu.propTypes = {
  children: PropTypes.node,
  zIndex: PropTypes.number,
  disabled: PropTypes.bool
};
ContextMenu.defaultProps = {
  zIndex: 0,
  disabled: false
};
var Main = _styled(extendedAnimated.div).withConfig({
  displayName: "ContextMenu__Main",
  componentId: "ris724-4"
})(["position:relative;width:", "px;height:", "px;"], BASE_WIDTH, BASE_HEIGHT);

var _StyledMain = _styled(Main).withConfig({
  displayName: "ContextMenu___StyledMain",
  componentId: "ris724-5"
})(["z-index:", ";"], function (p) {
  return p._css;
});

var Button = _styled(ButtonBase).withConfig({
  displayName: "ContextMenu__Button",
  componentId: "ris724-6"
})(["display:flex;justify-content:center;align-items:center;width:100%;height:", "px;border-radius:", ";box-shadow:", ";"], BASE_HEIGHT, function (_ref3) {
  var opened = _ref3.opened;
  return opened ? "".concat(RADIUS, "px ").concat(RADIUS, "px 0 0") : "".concat(RADIUS, "px");
}, function (_ref4) {
  var disabled = _ref4.disabled;
  return disabled ? 'none' : "0px 1px 3px rgba(0, 0, 0, 0.1)";
});

var _StyledButton = _styled(Button).withConfig({
  displayName: "ContextMenu___StyledButton",
  componentId: "ris724-7"
})(["color:", ";background:", ";border:", ";border-bottom-color:", ";", ""], function (p) {
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

export default ContextMenu;
//# sourceMappingURL=ContextMenu.js.map
