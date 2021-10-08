'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var defineProperty = require('./defineProperty-3cad0327.js');
var slicedToArray = require('./slicedToArray-a8a77f0e.js');
var _styled = require('styled-components');
var React = require('react');
var index$1 = require('./index-37353731.js');
var web = require('./web-46d746d6.js');
var index = require('./index-c33eeeef.js');
var ButtonIcon = require('./ButtonIcon.js');
var Viewport = require('./Viewport-71f7efe6.js');
var RootPortal = require('./RootPortal.js');
var Theme = require('./Theme.js');
var IconCross = require('./IconCross.js');
var keycodes = require('./keycodes.js');
var springs = require('./springs.js');
var constants = require('./constants.js');
var css = require('./css.js');
var textStyles = require('./text-styles.js');
var environment = require('./environment.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
require('./Button.js');
require('./Layout.js');
require('./breakpoints.js');
require('./getPrototypeOf-55c9e80c.js');
require('./_baseGetTag-6ec23aaa.js');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./toConsumableArray-cc0d28a9.js');
require('./miscellaneous.js');
require('./font.js');
require('./Root-07f851a6.js');
require('./IconPropTypes-b9997416.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty.defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var CONTENT_PADDING = 3 * constants.GU; // The closing position of the panel, on the right side of the viewport.
// It takes into consideration the shadow of the panel.

var CLOSING_POSITION = 5 * constants.GU;
var SidePanelContext = /*#__PURE__*/React__default['default'].createContext(null);

var _StyledDiv = _styled__default['default']("div").withConfig({
  displayName: "SidePanel___StyledDiv",
  componentId: "sc-1kjx6mk-0"
})(["position:absolute;z-index:1;top:0;left:0;right:0;bottom:0;pointer-events:", ";overflow:hidden;"], function (p) {
  return p._css;
});

var _StyledAnimatedDiv = _styled__default['default'](web.extendedAnimated.div).withConfig({
  displayName: "SidePanel___StyledAnimatedDiv",
  componentId: "sc-1kjx6mk-1"
})(["position:absolute;top:0;left:0;right:0;bottom:0;background:", ";"], function (p) {
  return p._css2;
});

var _StyledHeader = _styled__default['default']("header").withConfig({
  displayName: "SidePanel___StyledHeader",
  componentId: "sc-1kjx6mk-2"
})(["display:flex;flex-direction:column;justify-content:center;flex-shrink:0;position:relative;height:", "px;padding-left:", "px;border-bottom:1px solid ", ";", ";"], function (p) {
  return p._css3;
}, CONTENT_PADDING, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

var _StyledH = _styled__default['default']("h1").withConfig({
  displayName: "SidePanel___StyledH",
  componentId: "sc-1kjx6mk-3"
})(["color:", ";", ";"], function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
});

var _StyledButtonIcon = _styled__default['default'](ButtonIcon['default']).withConfig({
  displayName: "SidePanel___StyledButtonIcon",
  componentId: "sc-1kjx6mk-4"
})(["position:absolute;", ""], function (p) {
  return p._css8;
});

var _StyledDiv2 = _styled__default['default']("div").withConfig({
  displayName: "SidePanel___StyledDiv2",
  componentId: "sc-1kjx6mk-5"
})(["overflow-y:auto;height:100%;display:flex;flex-direction:column;"]);

var _StyledDiv3 = _styled__default['default']("div").withConfig({
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
      _useState2 = slicedToArray.slicedToArray(_useState, 2),
      status = _useState2[0],
      setStatus = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = slicedToArray.slicedToArray(_useState3, 2),
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
  return /*#__PURE__*/React__default['default'].createElement(RootPortal['default'], null, /*#__PURE__*/React__default['default'].createElement(index.i, {
    name: "SidePanel"
  }, /*#__PURE__*/React__default['default'].createElement(web.Transition, {
    items: opened,
    config: _objectSpread(_objectSpread({}, springs.springs.lazy), {}, {
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
      return /*#__PURE__*/React__default['default'].createElement(_StyledDiv, {
        _css: status !== 'closing' ? 'auto' : 'none'
      }, /*#__PURE__*/React__default['default'].createElement(_StyledAnimatedDiv, {
        onClick: close,
        style: {
          opacity: progress,
          pointerEvents: status !== 'closing' ? 'auto' : 'none'
        },
        _css2: theme.overlay.alpha(0.9)
      }), /*#__PURE__*/React__default['default'].createElement(Panel, {
        compact: compact,
        style: {
          transform: progress.interpolate(function (v) {
            return "\n                          translate3d(\n                            calc(\n                              ".concat(100 * (1 - v), "% +\n                              ").concat(CLOSING_POSITION * (1 - v), "px\n                            ), 0, 0\n                          )\n                        ");
          })
        }
      }, /*#__PURE__*/React__default['default'].createElement(_StyledHeader, {
        _css3: 8 * constants.GU,
        _css4: theme.border,
        _css5: css.unselectable()
      }, /*#__PURE__*/React__default['default'].createElement(_StyledH, {
        _css6: theme.surfaceContent,
        _css7: textStyles.textStyle('body1')
      }, title), !blocking && /*#__PURE__*/React__default['default'].createElement(_StyledButtonIcon, {
        label: "Close",
        onClick: close,
        _css8: !compact ? "\n                              top: ".concat(2 * constants.GU, "px;\n                              right: ").concat(2 * constants.GU, "px;\n                            ") : "\n                              top: 0;\n                              right: 0;\n                              height: ".concat(8 * constants.GU, "px;\n                              width: ").concat(8 * constants.GU, "px;\n                            ")
      }, /*#__PURE__*/React__default['default'].createElement(IconCross['default'], {
        color: theme.surfaceIcon
      }))), /*#__PURE__*/React__default['default'].createElement(_StyledDiv2, null, /*#__PURE__*/React__default['default'].createElement(_StyledDiv3, null, /*#__PURE__*/React__default['default'].createElement(SidePanelContext.Provider, {
        value: {
          status: status,
          readyToFocus: readyToFocus
        }
      }, children)))));
    };
  })));
}

SidePanel.propTypes = {
  blocking: index$1.propTypes.bool,
  children: index$1.propTypes.node.isRequired,
  opened: index$1.propTypes.bool,
  onClose: index$1.propTypes.func,
  onTransitionEnd: index$1.propTypes.func,
  title: index$1.propTypes.node.isRequired
};
SidePanel.defaultProps = {
  opened: true,
  blocking: false,
  onClose: function onClose() {},
  onTransitionEnd: function onTransitionEnd() {}
};

var _StyledAnimatedAside = _styled__default['default'](web.extendedAnimated.aside).withConfig({
  displayName: "SidePanel___StyledAnimatedAside",
  componentId: "sc-1kjx6mk-7"
})(["position:absolute;top:0;right:0;display:flex;flex-direction:column;width:100%;height:100%;background:", ";box-shadow:-2px 0px 4px rgba(0,0,0,0.1);", ""], function (p) {
  return p._css9;
}, function (p) {
  return p._css10;
});

var Panel = /*#__PURE__*/React__default['default'].memo(function Panel(_ref5) {
  var compact = _ref5.compact,
      props = objectWithoutProperties.objectWithoutProperties(_ref5, ["compact"]);

  var theme = Theme.useTheme();
  return /*#__PURE__*/React__default['default'].createElement(_StyledAnimatedAside, _extends._extends_1({}, props, {
    _css9: theme.surface,
    _css10: !compact ? 'max-width: 450px;' : ''
  }));
});
Panel.propTypes = {
  compact: index$1.propTypes.bool
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
