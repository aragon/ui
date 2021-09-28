'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var Viewport = require('./Viewport-b495052b.js');
var constants = require('./constants.js');
var css = require('./css.js');
var breakpoints = require('./breakpoints.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./defineProperty-fdbd3c46.js');
require('./isObject-f0a96713.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function getSizes(breakpoints) {
  return Object.entries(breakpoints).filter(([name]) => name !== 'min').sort((a, b) => a[1] - b[1]);
}

const breakpointsType = index.PropTypes.shape({
  min: index.PropTypes.number,
  small: index.PropTypes.number,
  medium: index.PropTypes.number,
  large: index.PropTypes.number
}); // Minimum margin around a layout

const MIN_MARGIN = 3 * constants.GU;

function getLayoutSize(parentWidth, breakpoints) {
  const sizes = getSizes(breakpoints);
  let index = sizes.length;

  while (index--) {
    if (parentWidth >= sizes[index][1]) {
      return [sizes[index][0], sizes[index][1] - (index === 0 ? 0 : MIN_MARGIN * 2)];
    }
  }

  return sizes[0];
}

function useMergeBreakpoints(breakpoints$1) {
  const breakpointsAsString = JSON.stringify(breakpoints$1); // Only compute once by comparing values rather than object references in dependency array
  // eslint-disable-next-line react-hooks/exhaustive-deps

  return React.useMemo(() => ({ ...breakpoints.BREAKPOINTS,
    ...breakpoints$1
  }), [breakpointsAsString]);
}

const LayoutContext = /*#__PURE__*/React__default["default"].createContext({});

function useLayout() {
  const {
    layoutWidth,
    layoutName
  } = React.useContext(LayoutContext);
  return {
    layoutName,
    layoutWidth,
    // deprecated
    name: layoutName,
    width: layoutWidth
  };
}

function Layout({
  breakpoints,
  children,
  paddingBottom,
  parentWidth,
  ...props
}) {
  const mergedBreakpoints = useMergeBreakpoints(breakpoints);
  return /*#__PURE__*/React__default["default"].createElement(LayoutProvider, {
    parentWidth: parentWidth,
    breakpoints: breakpoints
  }, /*#__PURE__*/React__default["default"].createElement(LayoutWidthLimiter, _extends._extends({
    minWidth: mergedBreakpoints.min,
    paddingBottom: paddingBottom
  }, props), children));
}

Layout.propTypes = {
  breakpoints: breakpointsType,
  children: index.PropTypes.node,
  paddingBottom: index.PropTypes.oneOfType([index.PropTypes.number, index.PropTypes.string]),
  parentWidth: index.PropTypes.number
};
Layout.defaultProps = {
  breakpoints: {},
  paddingBottom: 3 * constants.GU
};

function LayoutProvider({
  breakpoints,
  children,
  parentWidth
}) {
  const {
    width: viewportWidth
  } = Viewport.useViewport();
  const mergedBreakpoints = useMergeBreakpoints(breakpoints); // If the parent width is not passed, use the viewport width.

  const [layoutName, layoutWidth] = React.useMemo(() => getLayoutSize(parentWidth === undefined ? viewportWidth : parentWidth, mergedBreakpoints), [viewportWidth, parentWidth, mergedBreakpoints]);
  return /*#__PURE__*/React__default["default"].createElement(LayoutContext.Provider, {
    value: {
      layoutWidth,
      layoutName
    }
  }, children);
}

LayoutProvider.propTypes = {
  breakpoints: breakpointsType,
  children: index.PropTypes.node,
  parentWidth: index.PropTypes.number
};
LayoutProvider.defaultProps = {
  breakpoints: {}
};
/* eslint-disable react/prop-types */

function LayoutWidthLimiter({
  children,
  minWidth,
  paddingBottom,
  ...props
}) {
  const {
    layoutName,
    layoutWidth
  } = useLayout();
  return /*#__PURE__*/React__default["default"].createElement(_StyledDiv, _extends._extends({}, props, {
    $_css: layoutName === 'small' ? 'auto' : `${layoutWidth}px`,
    $_css2: minWidth,
    $_css3: css.cssPx(paddingBottom)
  }), children);
}

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "Layout___StyledDiv",
  componentId: "sc-16bvfls-0"
})(["width:", ";min-width:", "px;margin:0 auto;padding-bottom:", ";"], p => p.$_css, p => p.$_css2, p => p.$_css3);

exports.LayoutProvider = LayoutProvider;
exports["default"] = Layout;
exports.useLayout = useLayout;
//# sourceMappingURL=Layout.js.map
