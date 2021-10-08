import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import _styled from 'styled-components';
import React, { useMemo } from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import { useTheme } from '../../theme/Theme2.js';
import { RADIUS, GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';

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

var _StyledSection = _styled("section").withConfig({
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
}, RADIUS, function (p) {
  return p._css5;
});

var _StyledH = _styled("h1").withConfig({
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
      props = objectWithoutProperties(_ref, ["children", "mode", "color", "titleColor", "background", "borderColor", "title"]);

  var theme = useTheme(); // Get styles from the current mode

  var modeStyles = useMemo(function () {
    var styles = getModeStyles(theme, mode);
    return styles;
  }, [mode, theme]);
  return /*#__PURE__*/React.createElement(_StyledSection, _extends_1({}, props, {
    _css: color || modeStyles.color,
    _css2: background || modeStyles.background,
    _css3: borderColor || modeStyles.borderColor,
    _css4: 2 * GU,
    _css5: textStyle('body3')
  }), title && /*#__PURE__*/React.createElement(_StyledH, {
    _css6: titleColor || modeStyles.titleColor,
    _css7: textStyle('label2'),
    _css8: 1 * GU
  }, title), children);
}

Info.propTypes = {
  children: propTypes.node,
  title: propTypes.node,
  mode: propTypes.oneOf(['info', 'description', 'warning', 'error']),
  color: propTypes.string,
  titleColor: propTypes.string,
  background: propTypes.string,
  borderColor: propTypes.string
}; // Backward compatibility

function Warning(props) {
  return /*#__PURE__*/React.createElement(Info, _extends_1({
    mode: "warning"
  }, props));
}

Info.Action = Info;
Info.Permissions = Warning;
Info.Alert = Warning;

export default Info;
//# sourceMappingURL=Info.js.map
