import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React, { useMemo } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
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
  const theme = useTheme(); // Get styles from the current mode

  const modeStyles = useMemo(() => {
    const styles = getModeStyles(theme, mode);
    return styles;
  }, [mode, theme]);
  return /*#__PURE__*/React.createElement(_StyledSection, _extends({}, props, {
    $_css: color || modeStyles.color,
    $_css2: background || modeStyles.background,
    $_css3: borderColor || modeStyles.borderColor,
    $_css4: 2 * GU,
    $_css5: textStyle('body3')
  }), title && /*#__PURE__*/React.createElement(_StyledH, {
    $_css6: titleColor || modeStyles.titleColor,
    $_css7: textStyle('label2'),
    $_css8: 1 * GU
  }, title), children);
}

Info.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node,
  mode: PropTypes.oneOf(['info', 'description', 'warning', 'error']),
  color: PropTypes.string,
  titleColor: PropTypes.string,
  background: PropTypes.string,
  borderColor: PropTypes.string
}; // Backward compatibility

function Warning(props) {
  return /*#__PURE__*/React.createElement(Info, _extends({
    mode: "warning"
  }, props));
}

Info.Action = Info;
Info.Permissions = Warning;
Info.Alert = Warning;

var _StyledSection = _styled("section").withConfig({
  displayName: "Info___StyledSection",
  componentId: "sc-1kgnlbm-0"
})(["color:", ";background:", ";border-left:2px solid ", ";padding:", "px;border-radius:", "px;word-wrap:break-word;", ";"], p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, RADIUS, p => p.$_css5);

var _StyledH = _styled("h1").withConfig({
  displayName: "Info___StyledH",
  componentId: "sc-1kgnlbm-1"
})(["display:flex;align-items:center;color:", ";", ";margin-bottom:", "px;"], p => p.$_css6, p => p.$_css7, p => p.$_css8);

export { Info as default };
//# sourceMappingURL=Info.js.map
