'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var web = require('./web-17920307.js');
var Theme = require('./Theme.js');
var springs = require('./springs.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./objectWithoutPropertiesLoose-34dfcdd4.js');
require('react-dom');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function OpenedSurfaceBorder({
  opened,
  ...props
}) {
  const theme = Theme.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(web.Spring, {
    native: true,
    from: {
      width: 0
    },
    to: {
      width: Number(opened)
    },
    config: { ...springs.springs.smooth
    }
  }, ({
    width
  }) => /*#__PURE__*/React__default["default"].createElement(_StyledAnimatedDiv, _extends._extends({
    style: {
      transform: width.interpolate(v => `scale3d(${v}, 1, 1)`)
    }
  }, props, {
    $_css: theme.surfaceOpened
  })));
}

OpenedSurfaceBorder.propTypes = {
  opened: index.PropTypes.bool
};

var _StyledAnimatedDiv = _styled__default["default"](web.extendedAnimated.div).withConfig({
  displayName: "OpenedSurfaceBorder___StyledAnimatedDiv",
  componentId: "sc-19tx70h-0"
})(["position:absolute;top:0;left:0;height:100%;width:3px;background:", ";transform-origin:0 0;"], p => p.$_css);

exports.OpenedSurfaceBorder = OpenedSurfaceBorder;
//# sourceMappingURL=OpenedSurfaceBorder.js.map
