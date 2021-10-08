'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-023d783e.js');
var defineProperty = require('./defineProperty-3cad0327.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-37353731.js');
var web = require('./web-46d746d6.js');
var ButtonIcon = require('./ButtonIcon.js');
var EscapeOutside = require('./EscapeOutside.js');
var RootPortal = require('./RootPortal.js');
var Theme = require('./Theme.js');
var Viewport = require('./Viewport-71f7efe6.js');
var IconCross = require('./IconCross.js');
var springs = require('./springs.js');
var css = require('./css.js');
var constants = require('./constants.js');
var miscellaneous = require('./miscellaneous.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
require('./Button.js');
require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./index-c33eeeef.js');
require('./Layout.js');
require('./breakpoints.js');
require('./getPrototypeOf-55c9e80c.js');
require('./_baseGetTag-6ec23aaa.js');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./keycodes.js');
require('./environment.js');
require('./text-styles.js');
require('./font.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./toConsumableArray-cc0d28a9.js');
require('./Root-07f851a6.js');
require('./IconPropTypes-b9997416.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty.defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var SPACE_AROUND = 4 * constants.GU;

var _StyledAnimatedDiv = _styled__default['default'](web.extendedAnimated.div).withConfig({
  displayName: "Modal___StyledAnimatedDiv",
  componentId: "sc-1ofisn3-0"
})(["position:fixed;top:0;left:0;right:0;bottom:0;background:", ";"], function (p) {
  return p._css;
});

var _StyledAnimatedDiv2 = _styled__default['default'](web.extendedAnimated.div).withConfig({
  displayName: "Modal___StyledAnimatedDiv2",
  componentId: "sc-1ofisn3-1"
})(["position:absolute;z-index:1;top:0;left:0;right:0;bottom:0;display:grid;align-items:center;justify-content:center;overflow:auto;"]);

var _StyledDiv = _styled__default['default']("div").withConfig({
  displayName: "Modal___StyledDiv",
  componentId: "sc-1ofisn3-2"
})(["padding:", "px 0;"], SPACE_AROUND);

var _StyledEscapeOutside = _styled__default['default'](EscapeOutside['default']).withConfig({
  displayName: "Modal___StyledEscapeOutside",
  componentId: "sc-1ofisn3-3"
})(["position:relative;overflow:hidden;min-width:", "px;background:", ";box-shadow:0 10px 28px rgba(0,0,0,0.15);"], function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

var _StyledButtonIcon = _styled__default['default'](ButtonIcon['default']).withConfig({
  displayName: "Modal___StyledButtonIcon",
  componentId: "sc-1ofisn3-4"
})(["position:absolute;z-index:2;top:", "px;right:", "px;"], function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

var _StyledDiv2 = _styled__default['default']("div").withConfig({
  displayName: "Modal___StyledDiv2",
  componentId: "sc-1ofisn3-5"
})(["position:relative;z-index:1;"]);

function Modal(_ref) {
  var children = _ref.children,
      onClose = _ref.onClose,
      onClosed = _ref.onClosed,
      padding = _ref.padding,
      visible = _ref.visible,
      width = _ref.width,
      closeButton = _ref.closeButton,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["children", "onClose", "onClosed", "padding", "visible", "width", "closeButton"]);

  var theme = Theme.useTheme();
  var viewport = Viewport.useViewport();
  return /*#__PURE__*/React__default['default'].createElement(RootPortal['default'], null, /*#__PURE__*/React__default['default'].createElement(web.Transition, {
    native: true,
    items: visible,
    from: {
      opacity: 0,
      scale: 0.98
    },
    enter: {
      opacity: 1,
      scale: 1
    },
    leave: {
      opacity: 0,
      scale: 0.98
    },
    config: _objectSpread(_objectSpread({}, springs.springs.smooth), {}, {
      precision: 0.001
    }),
    onDestroyed: function onDestroyed(destroyed) {
      destroyed && onClosed();
    }
  }, function (show) {
    return show &&
    /* eslint-disable react/prop-types */
    function (_ref2) {
      var opacity = _ref2.opacity,
          scale = _ref2.scale;
      return /*#__PURE__*/React__default['default'].createElement(_StyledAnimatedDiv, _extends._extends_1({
        style: {
          opacity: opacity
        }
      }, props, {
        _css: theme.overlay.alpha(0.9)
      }), /*#__PURE__*/React__default['default'].createElement(_StyledAnimatedDiv2, {
        style: {
          pointerEvents: visible ? 'auto' : 'none',
          transform: scale.interpolate(function (v) {
            return "scale3d(".concat(v, ", ").concat(v, ", 1)");
          })
        }
      }, /*#__PURE__*/React__default['default'].createElement(_StyledDiv, null, /*#__PURE__*/React__default['default'].createElement(_StyledEscapeOutside, {
        role: "alertdialog",
        useCapture: true,
        background: theme.surface,
        onEscapeOutside: onClose,
        style: {
          width: css.cssPx(typeof width === 'function' ? width(viewport) : width),
          borderRadius: "".concat(constants.RADIUS, "px")
        },
        _css2: 360 - SPACE_AROUND * 2,
        _css3: theme.surface
      }, closeButton && /*#__PURE__*/React__default['default'].createElement(_StyledButtonIcon, {
        label: "Close",
        onClick: onClose,
        _css4: 2 * constants.GU,
        _css5: 2 * constants.GU
      }, /*#__PURE__*/React__default['default'].createElement(IconCross['default'], null)), /*#__PURE__*/React__default['default'].createElement(_StyledDiv2, {
        style: {
          padding: css.cssPx(typeof padding === 'function' ? padding(viewport) : padding)
        }
      }, children)))));
    };
  }
  /* eslint-enable react/prop-types */
  ));
}

Modal.propTypes = {
  children: index.propTypes.node.isRequired,
  closeButton: index.propTypes.bool,
  onClose: index.propTypes.func,
  onClosed: index.propTypes.func,
  padding: index.propTypes.oneOfType([index.propTypes.func, index.propTypes.number, index.propTypes.string]),
  visible: index.propTypes.bool.isRequired,
  width: index.propTypes.oneOfType([index.propTypes.func, index.propTypes.number, index.propTypes.string])
};
Modal.defaultProps = {
  closeButton: true,
  onClose: miscellaneous.noop,
  onClosed: miscellaneous.noop,
  padding: 3 * constants.GU,
  width: function width(viewport) {
    return Math.min(viewport.width - SPACE_AROUND * 2, 600);
  }
};

exports.default = Modal;
//# sourceMappingURL=Modal.js.map
