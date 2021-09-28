import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React, { useContext } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { animated as extendedAnimated, Transition } from '../../../node_modules/react-spring/web.js';
import { Inside as i } from '../../../node_modules/use-inside/dist/index.js';
import RootPortal from '../RootPortal/RootPortal.js';
import { useViewport } from '../../providers/Viewport/Viewport.js';
import { ToastContext } from '../ToastHub/ToastHub.js';
import { useTheme } from '../../theme/Theme2.js';
import { RADIUS, GU } from '../../style/constants.js';
import { springs } from '../../style/springs.js';
import { textStyle } from '../../style/text-styles.js';

const FloatIndicator = /*#__PURE__*/React.memo(function FloatIndicator({
  children,
  visible,
  shift,
  ...props
}) {
  const theme = useTheme();
  const {
    below
  } = useViewport();
  const {
    itemsVisible: toastItemsVisible
  } = useContext(ToastContext);
  const wide = below('medium');
  const horizontalSpacing = wide ? 2 * GU : 3 * GU;
  const horizontalSpacingEnd = horizontalSpacing + (shift || 0);
  return /*#__PURE__*/React.createElement(RootPortal, null, /*#__PURE__*/React.createElement(Transition, {
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
    config: springs.smooth
  }, show => show && (({
    progress
  }) => /*#__PURE__*/React.createElement(_StyledDiv, {
    $_css: wide ? 2 * GU : 3 * GU,
    $_css2: horizontalSpacingEnd,
    $_css3: horizontalSpacing
  }, /*#__PURE__*/React.createElement(_StyledAnimatedDiv, _extends({
    style: {
      pointerEvents: visible ? 'auto' : 'none',
      opacity: progress,
      transform: progress.interpolate(v => `translate3d(0, calc(10px * ${1 - v}), 0)`)
    }
  }, props, {
    $_css4: Number(wide),
    $_css5: 6 * GU,
    $_css6: 1 * GU,
    $_css7: 2 * GU,
    $_css8: textStyle('body3'),
    $_css9: theme.floatingContent,
    $_css10: theme.floating,
    $_css11: theme.border
  }), /*#__PURE__*/React.createElement(i, {
    name: "FloatIndicator"
  }, children))))
  /* eslint-enable react/prop-types */
  ));
});
FloatIndicator.propTypes = {
  children: PropTypes.node.isRequired,
  shift: PropTypes.number,
  visible: PropTypes.bool
};
FloatIndicator.defaultProps = {
  shift: 0,
  visible: true
};

var _StyledDiv = _styled("div").withConfig({
  displayName: "FloatIndicator___StyledDiv",
  componentId: "sc-1mhu8xn-0"
})(["position:absolute;z-index:1;bottom:", "px;display:flex;justify-content:flex-end;width:100%;padding:0 ", "px 0 ", "px;"], p => p.$_css, p => p.$_css2, p => p.$_css3);

var _StyledAnimatedDiv = _styled(extendedAnimated.div).withConfig({
  displayName: "FloatIndicator___StyledAnimatedDiv",
  componentId: "sc-1mhu8xn-1"
})(["flex-grow:", ";display:flex;align-items:center;height:", "px;padding:", "px ", "px;", ";white-space:nowrap;color:", ";background:", ";border:1px solid ", ";border-radius:", "px;cursor:default;justify-content:center;"], p => p.$_css4, p => p.$_css5, p => p.$_css6, p => p.$_css7, p => p.$_css8, p => p.$_css9, p => p.$_css10, p => p.$_css11, RADIUS);

export { FloatIndicator as default };
//# sourceMappingURL=FloatIndicator.js.map
