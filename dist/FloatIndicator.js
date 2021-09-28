'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var web = require('./web-17920307.js');
var index$1 = require('./index-70e12149.js');
var RootPortal = require('./RootPortal.js');
var Viewport = require('./Viewport-b495052b.js');
var ToastHub = require('./ToastHub.js');
var Theme = require('./Theme.js');
var constants = require('./constants.js');
var springs = require('./springs.js');
var textStyles = require('./text-styles.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./objectWithoutPropertiesLoose-34dfcdd4.js');
require('react-dom');
require('./Root-6628d0a4.js');
require('./defineProperty-fdbd3c46.js');
require('./isObject-f0a96713.js');
require('./breakpoints.js');
require('./components.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
require('./font.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const FloatIndicator = /*#__PURE__*/React__default["default"].memo(function FloatIndicator({
  children,
  visible,
  shift,
  ...props
}) {
  const theme = Theme.useTheme();
  const {
    below
  } = Viewport.useViewport();
  const {
    itemsVisible: toastItemsVisible
  } = React.useContext(ToastHub.ToastContext);
  const wide = below('medium');
  const horizontalSpacing = wide ? 2 * constants.GU : 3 * constants.GU;
  const horizontalSpacingEnd = horizontalSpacing + (shift || 0);
  return /*#__PURE__*/React__default["default"].createElement(RootPortal["default"], null, /*#__PURE__*/React__default["default"].createElement(web.Transition, {
    native: true,
    items: toastItemsVisible ? false : visible,
    from: {
      progress: 0
    },
    enter: {
      progress: 1
    },
    leave: {
      progress: 0
    },
    config: springs.springs.smooth
  }, show => show && (({
    progress
  }) => /*#__PURE__*/React__default["default"].createElement(_StyledDiv, {
    $_css: wide ? 2 * constants.GU : 3 * constants.GU,
    $_css2: horizontalSpacingEnd,
    $_css3: horizontalSpacing
  }, /*#__PURE__*/React__default["default"].createElement(_StyledAnimatedDiv, _extends._extends({
    style: {
      pointerEvents: visible ? 'auto' : 'none',
      opacity: progress,
      transform: progress.interpolate(v => `translate3d(0, calc(10px * ${1 - v}), 0)`)
    }
  }, props, {
    $_css4: Number(wide),
    $_css5: 6 * constants.GU,
    $_css6: 1 * constants.GU,
    $_css7: 2 * constants.GU,
    $_css8: textStyles.textStyle('body3'),
    $_css9: theme.floatingContent,
    $_css10: theme.floating,
    $_css11: theme.border
  }), /*#__PURE__*/React__default["default"].createElement(index$1.i, {
    name: "FloatIndicator"
  }, children))))
  /* eslint-enable react/prop-types */
  ));
});
FloatIndicator.propTypes = {
  children: index.PropTypes.node.isRequired,
  shift: index.PropTypes.number,
  visible: index.PropTypes.bool
};
FloatIndicator.defaultProps = {
  shift: 0,
  visible: true
};

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "FloatIndicator___StyledDiv",
  componentId: "sc-1mhu8xn-0"
})(["position:absolute;z-index:1;bottom:", "px;display:flex;justify-content:flex-end;width:100%;padding:0 ", "px 0 ", "px;"], p => p.$_css, p => p.$_css2, p => p.$_css3);

var _StyledAnimatedDiv = _styled__default["default"](web.extendedAnimated.div).withConfig({
  displayName: "FloatIndicator___StyledAnimatedDiv",
  componentId: "sc-1mhu8xn-1"
})(["flex-grow:", ";display:flex;align-items:center;height:", "px;padding:", "px ", "px;", ";white-space:nowrap;color:", ";background:", ";border:1px solid ", ";border-radius:", "px;cursor:default;justify-content:center;"], p => p.$_css4, p => p.$_css5, p => p.$_css6, p => p.$_css7, p => p.$_css8, p => p.$_css9, p => p.$_css10, p => p.$_css11, constants.RADIUS);

exports["default"] = FloatIndicator;
//# sourceMappingURL=FloatIndicator.js.map
