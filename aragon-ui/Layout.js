'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var slicedToArray = require('./slicedToArray-0711941d.js');
require('./unsupportedIterableToArray-68db1d3b.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
var index = require('./index-b0606964.js');
var defineProperty = require('./defineProperty-0921a47c.js');
require('./toConsumableArray-d8a4a2c3.js');
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
require('./getPrototypeOf-2a661a20.js');
require('./color.js');
require('./components.js');
require('./contains-component.js');
var css = require('./css.js');
require('./dayjs.min-e07657bf.js');
require('./date.js');
require('./miscellaneous.js');
require('./environment.js');
require('./font.js');
require('./math-f4029164.js');
require('./characters.js');
require('./format.js');
require('./keycodes.js');
require('./url.js');
require('./web3.js');
var constants = require('./constants.js');
var breakpoints = require('./breakpoints.js');
require('./springs.js');
require('./text-styles.js');
var _extends = require('./extends-40571110.js');
var objectWithoutProperties = require('./objectWithoutProperties-35db8ab0.js');
require('./isObject-ec755c87.js');
var Viewport = require('./Viewport-15101437.js');

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty._defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function getSizes(breakpoints) {
  return Object.entries(breakpoints).filter(function (_ref) {
    var _ref2 = slicedToArray._slicedToArray(_ref, 1),
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

var LayoutContext = React__default.createContext({});

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
      props = objectWithoutProperties._objectWithoutProperties(_ref3, ["breakpoints", "children", "paddingBottom", "parentWidth"]);

  var _useViewport = Viewport.useViewport(),
      viewportWidth = _useViewport.width;

  var mergedBreakpoints = React.useMemo(function () {
    return _objectSpread({}, breakpoints.BREAKPOINTS, {}, breakpoints$1);
  }, [breakpoints$1]); // If the parent width is not passed, use the viewport width.

  var _useMemo = React.useMemo(function () {
    return getLayoutSize(parentWidth === undefined ? viewportWidth : parentWidth, mergedBreakpoints);
  }, [viewportWidth, parentWidth, mergedBreakpoints]),
      _useMemo2 = slicedToArray._slicedToArray(_useMemo, 2),
      layoutName = _useMemo2[0],
      layoutWidth = _useMemo2[1];

  return /*#__PURE__*/React__default.createElement(LayoutContext.Provider, {
    value: {
      layoutWidth: layoutWidth,
      layoutName: layoutName
    }
  }, /*#__PURE__*/React__default.createElement(_StyledDiv, _extends._extends({}, props, {
    _css: layoutName === 'small' ? 'auto' : "".concat(layoutWidth, "px"),
    _css2: mergedBreakpoints.min,
    _css3: css.cssPx(paddingBottom)
  }), children));
}

Layout.propTypes = {
  breakpoints: index.PropTypes.shape({
    min: index.PropTypes.number,
    small: index.PropTypes.number,
    medium: index.PropTypes.number,
    large: index.PropTypes.number
  }),
  children: index.PropTypes.node,
  paddingBottom: index.PropTypes.oneOfType([index.PropTypes.number, index.PropTypes.string]),
  parentWidth: index.PropTypes.number
};
Layout.defaultProps = {
  breakpoints: {},
  paddingBottom: 3 * constants.GU
}; // Can be used to build an alternative Layout component

Layout.__Context = LayoutContext;

exports.default = Layout;
exports.useLayout = useLayout;
//# sourceMappingURL=Layout.js.map
