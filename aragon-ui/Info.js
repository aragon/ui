'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-37353731.js');
var Theme = require('./Theme.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./defineProperty-3cad0327.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
require('./getPrototypeOf-55c9e80c.js');
require('./toConsumableArray-cc0d28a9.js');
require('./font.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function getModeStyles(theme, mode) {
  if (mode === 'warning') {
    return {
      background: theme.warningSurface,
      borderColor: theme.warning,
      color: theme.warningSurfaceContent,
      titleColor: theme.warningSurfaceContent
    };
  }

  if (mode === 'error') {
    return {
      background: theme.negativeSurface,
      borderColor: theme.negative,
      color: theme.negativeSurfaceContent,
      titleColor: theme.negativeSurfaceContent
    };
  }

  if (mode === 'description') {
    return {
      background: theme.infoSurface,
      borderColor: theme.info,
      color: theme.surfaceContent,
      titleColor: theme.surfaceContentSecondary
    };
  }

  return {
    background: theme.infoSurface,
    borderColor: theme.info,
    color: theme.infoSurfaceContent,
    titleColor: theme.infoSurfaceContent
  };
}

var _StyledSection = _styled__default['default']("section").withConfig({
  displayName: "Info___StyledSection",
  componentId: "sc-1kgnlbm-0"
})(["color:", ";background:", ";border-left:2px solid ", ";padding:", "px;border-radius:", "px;word-wrap:break-word;", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, constants.RADIUS, function (p) {
  return p._css5;
});

var _StyledH = _styled__default['default']("h1").withConfig({
  displayName: "Info___StyledH",
  componentId: "sc-1kgnlbm-1"
})(["display:flex;align-items:center;color:", ";", ";margin-bottom:", "px;"], function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
});

function Info(_ref) {
  var children = _ref.children,
      mode = _ref.mode,
      color = _ref.color,
      titleColor = _ref.titleColor,
      background = _ref.background,
      borderColor = _ref.borderColor,
      title = _ref.title,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["children", "mode", "color", "titleColor", "background", "borderColor", "title"]);

  var theme = Theme.useTheme(); // Get styles from the current mode

  var modeStyles = React.useMemo(function () {
    var styles = getModeStyles(theme, mode);
    return styles;
  }, [mode, theme]);
  return /*#__PURE__*/React__default['default'].createElement(_StyledSection, _extends._extends_1({}, props, {
    _css: color || modeStyles.color,
    _css2: background || modeStyles.background,
    _css3: borderColor || modeStyles.borderColor,
    _css4: 2 * constants.GU,
    _css5: textStyles.textStyle('body3')
  }), title && /*#__PURE__*/React__default['default'].createElement(_StyledH, {
    _css6: titleColor || modeStyles.titleColor,
    _css7: textStyles.textStyle('label2'),
    _css8: 1 * constants.GU
  }, title), children);
}

Info.propTypes = {
  children: index.propTypes.node,
  title: index.propTypes.node,
  mode: index.propTypes.oneOf(['info', 'description', 'warning', 'error']),
  color: index.propTypes.string,
  titleColor: index.propTypes.string,
  background: index.propTypes.string,
  borderColor: index.propTypes.string
}; // Backward compatibility

function Warning(props) {
  return /*#__PURE__*/React__default['default'].createElement(Info, _extends._extends_1({
    mode: "warning"
  }, props));
}

Info.Action = Info;
Info.Permissions = Warning;
Info.Alert = Warning;

exports.default = Info;
//# sourceMappingURL=Info.js.map
