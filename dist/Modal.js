'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var web = require('./web-17920307.js');
var ButtonIcon = require('./ButtonIcon.js');
var EscapeOutside = require('./EscapeOutside.js');
var RootPortal = require('./RootPortal.js');
var Theme = require('./Theme.js');
var Viewport = require('./Viewport-b495052b.js');
var IconCross = require('./IconCross.js');
var constants = require('./constants.js');
var springs = require('./springs.js');
var css = require('./css.js');
var miscellaneous = require('./miscellaneous.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./objectWithoutPropertiesLoose-34dfcdd4.js');
require('react-dom');
require('./Button.js');
require('./index-70e12149.js');
require('./Layout.js');
require('./breakpoints.js');
require('./defineProperty-fdbd3c46.js');
require('./isObject-f0a96713.js');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./keycodes.js');
require('./text-styles.js');
require('./font.js');
require('./environment.js');
require('./Root-6628d0a4.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./IconPropTypes-435c57cb.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const SPACE_AROUND = 4 * constants.GU;

function Modal({
  children,
  onClose,
  onClosed,
  padding,
  visible,
  width,
  closeButton,
  ...props
}) {
  const theme = Theme.useTheme();
  const viewport = Viewport.useViewport();
  return /*#__PURE__*/React__default["default"].createElement(RootPortal["default"], null, /*#__PURE__*/React__default["default"].createElement(web.Transition, {
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
    config: { ...springs.springs.smooth,
      precision: 0.001
    },
    onDestroyed: destroyed => {
      destroyed && onClosed();
    }
  }, show => show && (({
    opacity,
    scale
  }) => /*#__PURE__*/React__default["default"].createElement(_StyledAnimatedDiv, _extends._extends({
    style: {
      opacity
    }
  }, props, {
    $_css: theme.overlay.alpha(0.9)
  }), /*#__PURE__*/React__default["default"].createElement(_StyledAnimatedDiv2, {
    style: {
      pointerEvents: visible ? 'auto' : 'none',
      transform: scale.interpolate(v => `scale3d(${v}, ${v}, 1)`)
    }
  }, /*#__PURE__*/React__default["default"].createElement(_StyledDiv, null, /*#__PURE__*/React__default["default"].createElement(_StyledEscapeOutside, {
    role: "alertdialog",
    useCapture: true,
    background: theme.surface,
    onEscapeOutside: onClose,
    style: {
      width: css.cssPx(typeof width === 'function' ? width(viewport) : width),
      borderRadius: `${constants.RADIUS}px`
    },
    $_css2: 360 - SPACE_AROUND * 2,
    $_css3: theme.surface
  }, closeButton && /*#__PURE__*/React__default["default"].createElement(_StyledButtonIcon, {
    label: "Close",
    onClick: onClose,
    $_css4: 2 * constants.GU,
    $_css5: 2 * constants.GU
  }, /*#__PURE__*/React__default["default"].createElement(IconCross["default"], null)), /*#__PURE__*/React__default["default"].createElement(_StyledDiv2, {
    style: {
      padding: css.cssPx(typeof padding === 'function' ? padding(viewport) : padding)
    }
  }, children))))))
  /* eslint-enable react/prop-types */
  ));
}

Modal.propTypes = {
  children: index.PropTypes.node.isRequired,
  closeButton: index.PropTypes.bool,
  onClose: index.PropTypes.func,
  onClosed: index.PropTypes.func,
  padding: index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.number, index.PropTypes.string]),
  visible: index.PropTypes.bool.isRequired,
  width: index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.number, index.PropTypes.string])
};
Modal.defaultProps = {
  closeButton: true,
  onClose: miscellaneous.noop,
  onClosed: miscellaneous.noop,
  padding: 3 * constants.GU,
  width: viewport => Math.min(viewport.width - SPACE_AROUND * 2, 600)
};

var _StyledAnimatedDiv = _styled__default["default"](web.extendedAnimated.div).withConfig({
  displayName: "Modal___StyledAnimatedDiv",
  componentId: "sc-1ofisn3-0"
})(["position:fixed;top:0;left:0;right:0;bottom:0;background:", ";"], p => p.$_css);

var _StyledAnimatedDiv2 = _styled__default["default"](web.extendedAnimated.div).withConfig({
  displayName: "Modal___StyledAnimatedDiv2",
  componentId: "sc-1ofisn3-1"
})(["position:absolute;z-index:1;top:0;left:0;right:0;bottom:0;display:grid;align-items:center;justify-content:center;overflow:auto;"]);

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "Modal___StyledDiv",
  componentId: "sc-1ofisn3-2"
})(["padding:", "px 0;"], SPACE_AROUND);

var _StyledEscapeOutside = _styled__default["default"](EscapeOutside["default"]).withConfig({
  displayName: "Modal___StyledEscapeOutside",
  componentId: "sc-1ofisn3-3"
})(["position:relative;overflow:hidden;min-width:", "px;background:", ";box-shadow:0 10px 28px rgba(0,0,0,0.15);"], p => p.$_css2, p => p.$_css3);

var _StyledButtonIcon = _styled__default["default"](ButtonIcon["default"]).withConfig({
  displayName: "Modal___StyledButtonIcon",
  componentId: "sc-1ofisn3-4"
})(["position:absolute;z-index:2;top:", "px;right:", "px;"], p => p.$_css4, p => p.$_css5);

var _StyledDiv2 = _styled__default["default"]("div").withConfig({
  displayName: "Modal___StyledDiv2",
  componentId: "sc-1ofisn3-5"
})(["position:relative;z-index:1;"]);

exports["default"] = Modal;
//# sourceMappingURL=Modal.js.map
