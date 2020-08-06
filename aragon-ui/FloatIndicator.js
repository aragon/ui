'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-1b94f6bc.js');
var index = require('./index-46d0e707.js');
require('./defineProperty-3cad0327.js');
require('./toConsumableArray-cc0d28a9.js');
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
require('./getPrototypeOf-55c9e80c.js');
require('./color.js');
require('./components.js');
require('./miscellaneous.js');
require('./environment.js');
require('./font.js');
var constants = require('./constants.js');
require('./breakpoints.js');
var springs = require('./springs.js');
var textStyles = require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');
var _extends = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var index$1 = require('./index-f5a9917e.js');
require('./_baseGetTag-42b4dd3e.js');
var Viewport = require('./Viewport-abbde113.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
var web = require('./web-d0294535.js');
var ToastHub = require('./ToastHub.js');
require('./Root-fd39454b.js');
var RootPortal = require('./RootPortal.js');

var _StyledDiv = _styled__default("div").withConfig({
  displayName: "FloatIndicator___StyledDiv",
  componentId: "sc-1mhu8xn-0"
})(["position:absolute;z-index:1;bottom:", "px;display:flex;justify-content:flex-end;width:100%;padding:0 ", "px 0 ", "px;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

var _StyledAnimatedDiv = _styled__default(web.extendedAnimated.div).withConfig({
  displayName: "FloatIndicator___StyledAnimatedDiv",
  componentId: "sc-1mhu8xn-1"
})(["flex-grow:", ";display:flex;align-items:center;height:", "px;padding:", "px ", "px;", ";white-space:nowrap;color:", ";background:", ";border:1px solid ", ";border-radius:", "px;cursor:default;justify-content:center;"], function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
}, function (p) {
  return p._css10;
}, function (p) {
  return p._css11;
}, constants.RADIUS);

var FloatIndicator = /*#__PURE__*/React__default.memo(function FloatIndicator(_ref) {
  var children = _ref.children,
      visible = _ref.visible,
      shift = _ref.shift,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["children", "visible", "shift"]);

  var theme = Theme.useTheme();

  var _useViewport = Viewport.useViewport(),
      below = _useViewport.below;

  var _useContext = React.useContext(ToastHub.ToastContext),
      toastItemsVisible = _useContext.itemsVisible;

  var wide = below('medium');
  var horizontalSpacing = wide ? 2 * constants.GU : 3 * constants.GU;
  var horizontalSpacingEnd = horizontalSpacing + (shift || 0);
  return /*#__PURE__*/React__default.createElement(RootPortal.default, null, /*#__PURE__*/React__default.createElement(web.Transition, {
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
  }, function (show) {
    return show &&
    /* eslint-disable react/prop-types */
    function (_ref2) {
      var progress = _ref2.progress;
      return /*#__PURE__*/React__default.createElement(_StyledDiv, {
        _css: wide ? 2 * constants.GU : 3 * constants.GU,
        _css2: horizontalSpacingEnd,
        _css3: horizontalSpacing
      }, /*#__PURE__*/React__default.createElement(_StyledAnimatedDiv, _extends._extends_1({
        style: {
          pointerEvents: visible ? 'auto' : 'none',
          opacity: progress,
          transform: progress.interpolate(function (v) {
            return "translate3d(0, calc(10px * ".concat(1 - v, "), 0)");
          })
        }
      }, props, {
        _css4: Number(wide),
        _css5: 6 * constants.GU,
        _css6: 1 * constants.GU,
        _css7: 2 * constants.GU,
        _css8: textStyles.textStyle('body3'),
        _css9: theme.floatingContent,
        _css10: theme.floating,
        _css11: theme.border
      }), /*#__PURE__*/React__default.createElement(index$1.i, {
        name: "FloatIndicator"
      }, children)));
    };
  }
  /* eslint-enable react/prop-types */
  ));
});
FloatIndicator.propTypes = {
  children: index.propTypes.node.isRequired,
  shift: index.propTypes.number,
  visible: index.propTypes.bool
};
FloatIndicator.defaultProps = {
  shift: 0,
  visible: true
};

exports.default = FloatIndicator;
//# sourceMappingURL=FloatIndicator.js.map
