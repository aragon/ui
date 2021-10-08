'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var defineProperty = require('./defineProperty-3cad0327.js');
var slicedToArray = require('./slicedToArray-a8a77f0e.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-37353731.js');
var Viewport = require('./Viewport-71f7efe6.js');
var constants = require('./constants.js');
var css = require('./css.js');
var breakpoints = require('./breakpoints.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./getPrototypeOf-55c9e80c.js');
require('./_baseGetTag-6ec23aaa.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty.defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function getSizes(breakpoints) {
  return Object.entries(breakpoints).filter(function (_ref) {
    var _ref2 = slicedToArray.slicedToArray(_ref, 1),
        name = _ref2[0];

    return name !== 'min';
  }).sort(function (a, b) {
    return a[1] - b[1];
  });
}

var breakpointsType = index.propTypes.shape({
  min: index.propTypes.number,
  small: index.propTypes.number,
  medium: index.propTypes.number,
  large: index.propTypes.number
}); // Minimum margin around a layout

var MIN_MARGIN = 3 * constants.GU;

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

function useMergeBreakpoints(breakpoints$1) {
  var breakpointsAsString = JSON.stringify(breakpoints$1); // Only compute once by comparing values rather than object references in dependency array
  // eslint-disable-next-line react-hooks/exhaustive-deps

  return React.useMemo(function () {
    return _objectSpread(_objectSpread({}, breakpoints.BREAKPOINTS), breakpoints$1);
  }, [breakpointsAsString]);
}

var LayoutContext = /*#__PURE__*/React__default['default'].createContext({});

function useLayout() {
  var _useContext = React.useContext(LayoutContext),
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
      props = objectWithoutProperties.objectWithoutProperties(_ref3, ["breakpoints", "children", "paddingBottom", "parentWidth"]);

  var mergedBreakpoints = useMergeBreakpoints(breakpoints);
  return /*#__PURE__*/React__default['default'].createElement(LayoutProvider, {
    parentWidth: parentWidth,
    breakpoints: breakpoints
  }, /*#__PURE__*/React__default['default'].createElement(LayoutWidthLimiter, _extends._extends_1({
    minWidth: mergedBreakpoints.min,
    paddingBottom: paddingBottom
  }, props), children));
}

Layout.propTypes = {
  breakpoints: breakpointsType,
  children: index.propTypes.node,
  paddingBottom: index.propTypes.oneOfType([index.propTypes.number, index.propTypes.string]),
  parentWidth: index.propTypes.number
};
Layout.defaultProps = {
  breakpoints: {},
  paddingBottom: 3 * constants.GU
};

function LayoutProvider(_ref4) {
  var breakpoints = _ref4.breakpoints,
      children = _ref4.children,
      parentWidth = _ref4.parentWidth;

  var _useViewport = Viewport.useViewport(),
      viewportWidth = _useViewport.width;

  var mergedBreakpoints = useMergeBreakpoints(breakpoints); // If the parent width is not passed, use the viewport width.

  var _useMemo = React.useMemo(function () {
    return getLayoutSize(parentWidth === undefined ? viewportWidth : parentWidth, mergedBreakpoints);
  }, [viewportWidth, parentWidth, mergedBreakpoints]),
      _useMemo2 = slicedToArray.slicedToArray(_useMemo, 2),
      layoutName = _useMemo2[0],
      layoutWidth = _useMemo2[1];

  return /*#__PURE__*/React__default['default'].createElement(LayoutContext.Provider, {
    value: {
      layoutWidth: layoutWidth,
      layoutName: layoutName
    }
  }, children);
}

LayoutProvider.propTypes = {
  breakpoints: breakpointsType,
  children: index.propTypes.node,
  parentWidth: index.propTypes.number
};
LayoutProvider.defaultProps = {
  breakpoints: {}
};
/* eslint-disable react/prop-types */

var _StyledDiv = _styled__default['default']("div").withConfig({
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
      props = objectWithoutProperties.objectWithoutProperties(_ref5, ["children", "minWidth", "paddingBottom"]);

  var _useLayout = useLayout(),
      layoutName = _useLayout.layoutName,
      layoutWidth = _useLayout.layoutWidth;

  return /*#__PURE__*/React__default['default'].createElement(_StyledDiv, _extends._extends_1({}, props, {
    _css: layoutName === 'small' ? 'auto' : "".concat(layoutWidth, "px"),
    _css2: minWidth,
    _css3: css.cssPx(paddingBottom)
  }), children);
}

exports.LayoutProvider = LayoutProvider;
exports.default = Layout;
exports.useLayout = useLayout;
//# sourceMappingURL=Layout.js.map
