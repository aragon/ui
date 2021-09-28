import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { animated as extendedAnimated, Spring } from '../../../node_modules/react-spring/web.js';
import { useTheme } from '../../theme/Theme2.js';
import { springs } from '../../style/springs.js';

function OpenedSurfaceBorder({
  opened,
  ...props
}) {
  const theme = useTheme();
  return /*#__PURE__*/React.createElement(Spring, {
    native: true,
    from: {
      width: 0
    },
    to: {
      width: Number(opened)
    },
    config: { ...springs.smooth
    }
  }, ({
    width
  }) => /*#__PURE__*/React.createElement(_StyledAnimatedDiv, _extends({
    style: {
      transform: width.interpolate(v => `scale3d(${v}, 1, 1)`)
    }
  }, props, {
    $_css: theme.surfaceOpened
  })));
}

OpenedSurfaceBorder.propTypes = {
  opened: PropTypes.bool
};

var _StyledAnimatedDiv = _styled(extendedAnimated.div).withConfig({
  displayName: "OpenedSurfaceBorder___StyledAnimatedDiv",
  componentId: "sc-19tx70h-0"
})(["position:absolute;top:0;left:0;height:100%;width:3px;background:", ";transform-origin:0 0;"], p => p.$_css);

export { OpenedSurfaceBorder };
//# sourceMappingURL=OpenedSurfaceBorder.js.map
