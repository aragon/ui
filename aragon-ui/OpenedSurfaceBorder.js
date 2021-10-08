'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-023d783e.js');
var defineProperty = require('./defineProperty-3cad0327.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-37353731.js');
var web = require('./web-46d746d6.js');
var Theme = require('./Theme.js');
var springs = require('./springs.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
require('./getPrototypeOf-55c9e80c.js');
require('./toConsumableArray-cc0d28a9.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty.defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _StyledAnimatedDiv = _styled__default['default'](web.extendedAnimated.div).withConfig({
  displayName: "OpenedSurfaceBorder___StyledAnimatedDiv",
  componentId: "sc-19tx70h-0"
})(["position:absolute;top:0;left:0;height:100%;width:3px;background:", ";transform-origin:0 0;"], function (p) {
  return p._css;
});

function OpenedSurfaceBorder(_ref) {
  var opened = _ref.opened,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["opened"]);

  var theme = Theme.useTheme();
  return /*#__PURE__*/React__default['default'].createElement(web.Spring, {
    native: true,
    from: {
      width: 0
    },
    to: {
      width: Number(opened)
    },
    config: _objectSpread({}, springs.springs.smooth)
  }, function (_ref2) {
    var width = _ref2.width;
    return /*#__PURE__*/React__default['default'].createElement(_StyledAnimatedDiv, _extends._extends_1({
      style: {
        transform: width.interpolate(function (v) {
          return "scale3d(".concat(v, ", 1, 1)");
        })
      }
    }, props, {
      _css: theme.surfaceOpened
    }));
  });
}

OpenedSurfaceBorder.propTypes = {
  opened: index.propTypes.bool
};

exports.OpenedSurfaceBorder = OpenedSurfaceBorder;
//# sourceMappingURL=OpenedSurfaceBorder.js.map
