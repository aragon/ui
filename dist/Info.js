'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var Theme = require('./Theme.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
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

function Info({
  children,
  mode,
  color,
  titleColor,
  background,
  borderColor,
  title,
  ...props
}) {
  const theme = Theme.useTheme(); // Get styles from the current mode

  const modeStyles = React.useMemo(() => {
    const styles = getModeStyles(theme, mode);
    return styles;
  }, [mode, theme]);
  return /*#__PURE__*/React__default["default"].createElement(_StyledSection, _extends._extends({}, props, {
    $_css: color || modeStyles.color,
    $_css2: background || modeStyles.background,
    $_css3: borderColor || modeStyles.borderColor,
    $_css4: 2 * constants.GU,
    $_css5: textStyles.textStyle('body3')
  }), title && /*#__PURE__*/React__default["default"].createElement(_StyledH, {
    $_css6: titleColor || modeStyles.titleColor,
    $_css7: textStyles.textStyle('label2'),
    $_css8: 1 * constants.GU
  }, title), children);
}

Info.propTypes = {
  children: index.PropTypes.node,
  title: index.PropTypes.node,
  mode: index.PropTypes.oneOf(['info', 'description', 'warning', 'error']),
  color: index.PropTypes.string,
  titleColor: index.PropTypes.string,
  background: index.PropTypes.string,
  borderColor: index.PropTypes.string
}; // Backward compatibility

function Warning(props) {
  return /*#__PURE__*/React__default["default"].createElement(Info, _extends._extends({
    mode: "warning"
  }, props));
}

Info.Action = Info;
Info.Permissions = Warning;
Info.Alert = Warning;

var _StyledSection = _styled__default["default"]("section").withConfig({
  displayName: "Info___StyledSection",
  componentId: "sc-1kgnlbm-0"
})(["color:", ";background:", ";border-left:2px solid ", ";padding:", "px;border-radius:", "px;word-wrap:break-word;", ";"], p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, constants.RADIUS, p => p.$_css5);

var _StyledH = _styled__default["default"]("h1").withConfig({
  displayName: "Info___StyledH",
  componentId: "sc-1kgnlbm-1"
})(["display:flex;align-items:center;color:", ";", ";margin-bottom:", "px;"], p => p.$_css6, p => p.$_css7, p => p.$_css8);

exports["default"] = Info;
//# sourceMappingURL=Info.js.map
