import slicedToArray$1 from '../../../node_modules/@babel/runtime/helpers/slicedToArray.js';
import React$1, { useContext, useMemo } from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import defineProperty$1 from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import _styled$1 from 'styled-components';
import { cssPx } from '../../utils/css.js';
import '../../utils/environment.js';
import { GU } from '../../style/constants.js';
import { BREAKPOINTS } from '../../style/breakpoints.js';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties$1 from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import { useViewport } from '../../providers/Viewport/Viewport.js';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function getSizes(breakpoints) {
  return Object.entries(breakpoints).filter(function (_ref) {
    var _ref2 = slicedToArray$1(_ref, 1),
        name = _ref2[0];

    return name !== 'min';
  }).sort(function (a, b) {
    return a[1] - b[1];
  });
} // Minimum margin around a layouts


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

var LayoutContext = /*#__PURE__*/React$1.createContext({});

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

var _StyledDiv = _styled$1("div").withConfig({
  displayName: "Layout___StyledDiv",
  componentId: "sc-16bvfls-0"
})(["width:", ";min-width:", "px;margin:0 auto;padding-bottom:", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

function Layout(_ref3) {
  var breakpoints = _ref3.breakpoints,
      children = _ref3.children,
      paddingBottom = _ref3.paddingBottom,
      parentWidth = _ref3.parentWidth,
      props = objectWithoutProperties$1(_ref3, ["breakpoints", "children", "paddingBottom", "parentWidth"]);

  var _useViewport = useViewport(),
      viewportWidth = _useViewport.width;

  var mergedBreakpoints = useMemo(function () {
    return _objectSpread(_objectSpread({}, BREAKPOINTS), breakpoints);
  }, [breakpoints]); // If the parent width is not passed, use the viewport width.

  var _useMemo = useMemo(function () {
    return getLayoutSize(parentWidth === undefined ? viewportWidth : parentWidth, mergedBreakpoints);
  }, [viewportWidth, parentWidth, mergedBreakpoints]),
      _useMemo2 = slicedToArray$1(_useMemo, 2),
      layoutName = _useMemo2[0],
      layoutWidth = _useMemo2[1];

  return /*#__PURE__*/React$1.createElement(LayoutContext.Provider, {
    value: {
      layoutWidth: layoutWidth,
      layoutName: layoutName
    }
  }, /*#__PURE__*/React$1.createElement(_StyledDiv, _extends_1({}, props, {
    _css: layoutName === 'small' ? 'auto' : "".concat(layoutWidth, "px"),
    _css2: mergedBreakpoints.min,
    _css3: cssPx(paddingBottom)
  }), children));
}

Layout.propTypes = {
  breakpoints: propTypes.shape({
    min: propTypes.number,
    small: propTypes.number,
    medium: propTypes.number,
    large: propTypes.number
  }),
  children: propTypes.node,
  paddingBottom: propTypes.oneOfType([propTypes.number, propTypes.string]),
  parentWidth: propTypes.number
};
Layout.defaultProps = {
  breakpoints: {},
  paddingBottom: 3 * GU
}; // Can be used to build an alternative Layout component

Layout.__Context = LayoutContext;

export default Layout;
export { useLayout };
//# sourceMappingURL=Layout.js.map
