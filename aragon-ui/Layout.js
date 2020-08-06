'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var slicedToArray = require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-1b94f6bc.js');
var index = require('./index-46d0e707.js');
var defineProperty = require('./defineProperty-3cad0327.js');
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
require('./getPrototypeOf-55c9e80c.js');
var css = require('./css.js');
require('./miscellaneous.js');
require('./environment.js');
var constants = require('./constants.js');
var breakpoints = require('./breakpoints.js');
var _extends = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
require('./_baseGetTag-42b4dd3e.js');
var Viewport = require('./Viewport-abbde113.js');

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
} // Minimum margin around a layouts


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

var LayoutContext = /*#__PURE__*/React__default.createContext({});

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

var _StyledDiv = _styled__default("div").withConfig({
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
  var breakpoints$1 = _ref3.breakpoints,
      children = _ref3.children,
      paddingBottom = _ref3.paddingBottom,
      parentWidth = _ref3.parentWidth,
      props = objectWithoutProperties.objectWithoutProperties(_ref3, ["breakpoints", "children", "paddingBottom", "parentWidth"]);

  var _useViewport = Viewport.useViewport(),
      viewportWidth = _useViewport.width;

  var mergedBreakpoints = React.useMemo(function () {
    return _objectSpread(_objectSpread({}, breakpoints.BREAKPOINTS), breakpoints$1);
  }, [breakpoints$1]); // If the parent width is not passed, use the viewport width.

  var _useMemo = React.useMemo(function () {
    return getLayoutSize(parentWidth === undefined ? viewportWidth : parentWidth, mergedBreakpoints);
  }, [viewportWidth, parentWidth, mergedBreakpoints]),
      _useMemo2 = slicedToArray.slicedToArray(_useMemo, 2),
      layoutName = _useMemo2[0],
      layoutWidth = _useMemo2[1];

  return /*#__PURE__*/React__default.createElement(LayoutContext.Provider, {
    value: {
      layoutWidth: layoutWidth,
      layoutName: layoutName
    }
  }, /*#__PURE__*/React__default.createElement(_StyledDiv, _extends._extends_1({}, props, {
    _css: layoutName === 'small' ? 'auto' : "".concat(layoutWidth, "px"),
    _css2: mergedBreakpoints.min,
    _css3: css.cssPx(paddingBottom)
  }), children));
}

Layout.propTypes = {
  breakpoints: index.propTypes.shape({
    min: index.propTypes.number,
    small: index.propTypes.number,
    medium: index.propTypes.number,
    large: index.propTypes.number
  }),
  children: index.propTypes.node,
  paddingBottom: index.propTypes.oneOfType([index.propTypes.number, index.propTypes.string]),
  parentWidth: index.propTypes.number
};
Layout.defaultProps = {
  breakpoints: {},
  paddingBottom: 3 * constants.GU
}; // Can be used to build an alternative Layout component

Layout.__Context = LayoutContext;

exports.default = Layout;
exports.useLayout = useLayout;
//# sourceMappingURL=Layout.js.map
