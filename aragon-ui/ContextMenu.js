'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var slicedToArray = require('./slicedToArray-a8a77f0e.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-37353731.js');
var web = require('./web-46d746d6.js');
var ReactDOM = require('react-dom');
var ButtonBase = require('./ButtonBase.js');
var IconEllipsis = require('./IconEllipsis.js');
var IconDown = require('./IconDown.js');
var Theme = require('./Theme.js');
var springs = require('./springs.js');
var constants = require('./constants.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('./extends-023d783e.js');
require('./objectWithoutProperties-c6d3675c.js');
require('./defineProperty-3cad0327.js');
require('./FocusVisible.js');
require('./getPrototypeOf-55c9e80c.js');
require('./keycodes.js');
require('./css.js');
require('./environment.js');
require('./miscellaneous.js');
require('./text-styles.js');
require('./font.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./toConsumableArray-cc0d28a9.js');
require('./IconPropTypes-b9997416.js');
require('./index-c33eeeef.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

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
      var el = ReactDOM__default['default'].findDOMNode(this);

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
      var el = ReactDOM__default['default'].findDOMNode(this);

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
      return Array.isArray(this.props.children) ? React__default['default'].createElement(
        'div',
        null,
        this.props.children
      ) : React__default['default'].Children.only(this.props.children);
    }
  }]);

  return ClickOutComponent;
}(React__default['default'].Component);

var reactOnclickout = ClickOutComponent;

var BASE_WIDTH = 46;
var BASE_HEIGHT = 32;

var _StyledIconEllipsis = _styled__default['default'](IconEllipsis['default']).withConfig({
  displayName: "ContextMenu___StyledIconEllipsis",
  componentId: "ris724-0"
})([""]);

var _StyledIconDown = _styled__default['default'](IconDown['default']).withConfig({
  displayName: "ContextMenu___StyledIconDown",
  componentId: "ris724-1"
})(["color:", ";"], function (p) {
  return p._css7;
});

var _StyledAnimatedDiv = _styled__default['default'](web.extendedAnimated.div).withConfig({
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

var _StyledDiv = _styled__default['default']("div").withConfig({
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
  var theme = Theme.useTheme();

  var _useState = React.useState(false),
      _useState2 = slicedToArray.slicedToArray(_useState, 2),
      opened = _useState2[0],
      setOpened = _useState2[1];

  var handleClose = React.useCallback(function () {
    setOpened(false);
  }, []);
  var handleBaseButtonClick = React.useCallback(function () {
    setOpened(function (opened) {
      return !opened;
    });
  }, []); // Increase the z-index on an opened menu, to make sure it's above any other
  // context menus below it using the same z-index (e.g. when used in a list)

  var appliedZIndex = opened ? zIndex + 1 : zIndex;
  return /*#__PURE__*/React__default['default'].createElement(reactOnclickout, {
    onClickOut: handleClose
  }, /*#__PURE__*/React__default['default'].createElement(web.Spring, {
    config: springs.springs.smooth,
    to: {
      openProgress: Number(opened)
    },
    native: true
  }, function (_ref2) {
    var openProgress = _ref2.openProgress;
    return /*#__PURE__*/React__default['default'].createElement(_StyledMain, {
      style: {
        boxShadow: openProgress.interpolate(function (t) {
          return "0 4px 4px rgba(0, 0, 0, ".concat(t * 0.03, ")");
        })
      },
      _css: appliedZIndex
    }, /*#__PURE__*/React__default['default'].createElement(_StyledButton, {
      onClick: handleBaseButtonClick,
      opened: opened,
      disabled: disabled,
      focusRingRadius: constants.RADIUS,
      _css2: disabled ? theme.disabledContent : opened ? theme.accent : theme.surfaceContent,
      _css3: disabled ? theme.disabled : theme.surface,
      _css4: disabled ? '0' : "1px solid ".concat(theme.border),
      _css5: opened ? theme.surface : theme.border,
      _css6: disabled ? '' : "&:active {\n                  background: ".concat(theme.surfacePressed, ";\n                  border-bottom-color: ").concat(opened ? theme.surfacePressed : theme.border, ";\n                }")
    }, /*#__PURE__*/React__default['default'].createElement(_StyledIconEllipsis, null), /*#__PURE__*/React__default['default'].createElement(web.extendedAnimated.div, {
      style: {
        display: 'flex',
        alignItems: 'center',
        transformOrigin: '50% 50%',
        transform: openProgress.interpolate(function (v) {
          return "rotate(".concat(v * 180, "deg)");
        })
      }
    }, /*#__PURE__*/React__default['default'].createElement(_StyledIconDown, {
      size: "tiny",
      _css7: disabled ? theme.disabledIcon : theme.surfaceIcon
    }))), opened && /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(_StyledAnimatedDiv, {
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
    }, children), /*#__PURE__*/React__default['default'].createElement(_StyledDiv, {
      _css12: appliedZIndex + 1,
      _css13: BASE_WIDTH - 2,
      _css14: theme.surface
    })));
  }));
}

ContextMenu.propTypes = {
  children: index.propTypes.node,
  zIndex: index.propTypes.number,
  disabled: index.propTypes.bool
};
ContextMenu.defaultProps = {
  zIndex: 0,
  disabled: false
};
var Main = _styled__default['default'](web.extendedAnimated.div).withConfig({
  displayName: "ContextMenu__Main",
  componentId: "ris724-4"
})(["position:relative;width:", "px;height:", "px;"], BASE_WIDTH, BASE_HEIGHT);

var _StyledMain = _styled__default['default'](Main).withConfig({
  displayName: "ContextMenu___StyledMain",
  componentId: "ris724-5"
})(["z-index:", ";"], function (p) {
  return p._css;
});

var Button = _styled__default['default'](ButtonBase['default']).withConfig({
  displayName: "ContextMenu__Button",
  componentId: "ris724-6"
})(["display:flex;justify-content:center;align-items:center;width:100%;height:", "px;border-radius:", ";box-shadow:", ";"], BASE_HEIGHT, function (_ref3) {
  var opened = _ref3.opened;
  return opened ? "".concat(constants.RADIUS, "px ").concat(constants.RADIUS, "px 0 0") : "".concat(constants.RADIUS, "px");
}, function (_ref4) {
  var disabled = _ref4.disabled;
  return disabled ? 'none' : "0px 1px 3px rgba(0, 0, 0, 0.1)";
});

var _StyledButton = _styled__default['default'](Button).withConfig({
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

exports.default = ContextMenu;
//# sourceMappingURL=ContextMenu.js.map
