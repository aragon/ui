import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import defineProperty from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import slicedToArray from '../../../node_modules/@babel/runtime/helpers/slicedToArray.js';
import _styled from 'styled-components';
import React, { useContext, useMemo } from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import { useViewport } from '../../providers/Viewport/Viewport.js';
import { GU } from '../../style/constants.js';
import { cssPx } from '../../utils/css.js';
import { BREAKPOINTS } from '../../style/breakpoints.js';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function getSizes(breakpoints) {
  return Object.entries(breakpoints).filter(function (_ref) {
    var _ref2 = slicedToArray(_ref, 1),
        name = _ref2[0];

    return name !== 'min';
  }).sort(function (a, b) {
    return a[1] - b[1];
  });
}

var breakpointsType = propTypes.shape({
  min: propTypes.number,
  small: propTypes.number,
  medium: propTypes.number,
  large: propTypes.number
}); // Minimum margin around a layout

var MIN_MARGIN = 3 * GU;

function getLayoutSize(parentWidth, breakpoints) {
  var sizes = getSizes(breakpoints);
  var index = sizes.length;

  while (index--) {
    if (parentWidth >= sizes[index][1]) {
      return [sizes[index][0], sizes[index][1] - (index === 0 ? 0 : MIN_MARGIN * 2)];
    }
  }

  return sizes[0];
}

function useMergeBreakpoints(breakpoints) {
  var breakpointsAsString = JSON.stringify(breakpoints); // Only compute once by comparing values rather than object references in dependency array
  // eslint-disable-next-line react-hooks/exhaustive-deps

  return useMemo(function () {
    return _objectSpread(_objectSpread({}, BREAKPOINTS), breakpoints);
  }, [breakpointsAsString]);
}

var LayoutContext = /*#__PURE__*/React.createContext({});

function useLayout() {
  var _useContext = useContext(LayoutContext),
      layoutWidth = _useContext.layoutWidth,
      layoutName = _useContext.layoutName;

  return {
    layoutName: layoutName,
    layoutWidth: layoutWidth,
    // deprecated
    name: layoutName,
    width: layoutWidth
  };
}

function Layout(_ref3) {
  var breakpoints = _ref3.breakpoints,
      children = _ref3.children,
      paddingBottom = _ref3.paddingBottom,
      parentWidth = _ref3.parentWidth,
      props = objectWithoutProperties(_ref3, ["breakpoints", "children", "paddingBottom", "parentWidth"]);

  var mergedBreakpoints = useMergeBreakpoints(breakpoints);
  return /*#__PURE__*/React.createElement(LayoutProvider, {
    parentWidth: parentWidth,
    breakpoints: breakpoints
  }, /*#__PURE__*/React.createElement(LayoutWidthLimiter, _extends_1({
    minWidth: mergedBreakpoints.min,
    paddingBottom: paddingBottom
  }, props), children));
}

Layout.propTypes = {
  breakpoints: breakpointsType,
  children: propTypes.node,
  paddingBottom: propTypes.oneOfType([propTypes.number, propTypes.string]),
  parentWidth: propTypes.number
};
Layout.defaultProps = {
  breakpoints: {},
  paddingBottom: 3 * GU
};

function LayoutProvider(_ref4) {
  var breakpoints = _ref4.breakpoints,
      children = _ref4.children,
      parentWidth = _ref4.parentWidth;

  var _useViewport = useViewport(),
      viewportWidth = _useViewport.width;

  var mergedBreakpoints = useMergeBreakpoints(breakpoints); // If the parent width is not passed, use the viewport width.

  var _useMemo = useMemo(function () {
    return getLayoutSize(parentWidth === undefined ? viewportWidth : parentWidth, mergedBreakpoints);
  }, [viewportWidth, parentWidth, mergedBreakpoints]),
      _useMemo2 = slicedToArray(_useMemo, 2),
      layoutName = _useMemo2[0],
      layoutWidth = _useMemo2[1];

  return /*#__PURE__*/React.createElement(LayoutContext.Provider, {
    value: {
      layoutWidth: layoutWidth,
      layoutName: layoutName
    }
  }, children);
}

LayoutProvider.propTypes = {
  breakpoints: breakpointsType,
  children: propTypes.node,
  parentWidth: propTypes.number
};
LayoutProvider.defaultProps = {
  breakpoints: {}
};
/* eslint-disable react/prop-types */

var _StyledDiv = _styled("div").withConfig({
  displayName: "Layout___StyledDiv",
  componentId: "sc-16bvfls-0"
})(["width:", ";min-width:", "px;margin:0 auto;padding-bottom:", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

function LayoutWidthLimiter(_ref5) {
  var children = _ref5.children,
      minWidth = _ref5.minWidth,
      paddingBottom = _ref5.paddingBottom,
      props = objectWithoutProperties(_ref5, ["children", "minWidth", "paddingBottom"]);

  var _useLayout = useLayout(),
      layoutName = _useLayout.layoutName,
      layoutWidth = _useLayout.layoutWidth;

  return /*#__PURE__*/React.createElement(_StyledDiv, _extends_1({}, props, {
    _css: layoutName === 'small' ? 'auto' : "".concat(layoutWidth, "px"),
    _css2: minWidth,
    _css3: cssPx(paddingBottom)
  }), children);
}

export default Layout;
export { LayoutProvider, useLayout };
//# sourceMappingURL=Layout.js.map
