import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { animated as extendedAnimated, Transition } from '../../../node_modules/react-spring/web.js';
import ButtonIcon from '../Button/ButtonIcon.js';
import EscapeOutside from '../EscapeOutside/EscapeOutside.js';
import RootPortal from '../RootPortal/RootPortal.js';
import { useTheme } from '../../theme/Theme2.js';
import { useViewport } from '../../providers/Viewport/Viewport.js';
import IconCross from '../../icons/components/IconCross.js';
import { GU, RADIUS } from '../../style/constants.js';
import { springs } from '../../style/springs.js';
import { cssPx } from '../../utils/css.js';
import { noop } from '../../utils/miscellaneous.js';

const SPACE_AROUND = 4 * GU;

function Modal({
  children,
  onClose,
  onClosed,
  padding,
  visible,
  width,
  closeButton,
  ...props
}) {
  const theme = useTheme();
  const viewport = useViewport();
  return /*#__PURE__*/React.createElement(RootPortal, null, /*#__PURE__*/React.createElement(Transition, {
    native: true,
    items: visible,
    from: {
      opacity: 0,
      scale: 0.98
    },
    enter: {
      opacity: 1,
      scale: 1
    },
    leave: {
      opacity: 0,
      scale: 0.98
    },
    config: { ...springs.smooth,
      precision: 0.001
    },
    onDestroyed: destroyed => {
      destroyed && onClosed();
    }
  }, show => show && (({
    opacity,
    scale
  }) => /*#__PURE__*/React.createElement(_StyledAnimatedDiv, _extends({
    style: {
      opacity
    }
  }, props, {
    $_css: theme.overlay.alpha(0.9)
  }), /*#__PURE__*/React.createElement(_StyledAnimatedDiv2, {
    style: {
      pointerEvents: visible ? 'auto' : 'none',
      transform: scale.interpolate(v => `scale3d(${v}, ${v}, 1)`)
    }
  }, /*#__PURE__*/React.createElement(_StyledDiv, null, /*#__PURE__*/React.createElement(_StyledEscapeOutside, {
    role: "alertdialog",
    useCapture: true,
    background: theme.surface,
    onEscapeOutside: onClose,
    style: {
      width: cssPx(typeof width === 'function' ? width(viewport) : width),
      borderRadius: `${RADIUS}px`
    },
    $_css2: 360 - SPACE_AROUND * 2,
    $_css3: theme.surface
  }, closeButton && /*#__PURE__*/React.createElement(_StyledButtonIcon, {
    label: "Close",
    onClick: onClose,
    $_css4: 2 * GU,
    $_css5: 2 * GU
  }, /*#__PURE__*/React.createElement(IconCross, null)), /*#__PURE__*/React.createElement(_StyledDiv2, {
    style: {
      padding: cssPx(typeof padding === 'function' ? padding(viewport) : padding)
    }
  }, children))))))
  /* eslint-enable react/prop-types */
  ));
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeButton: PropTypes.bool,
  onClose: PropTypes.func,
  onClosed: PropTypes.func,
  padding: PropTypes.oneOfType([PropTypes.func, PropTypes.number, PropTypes.string]),
  visible: PropTypes.bool.isRequired,
  width: PropTypes.oneOfType([PropTypes.func, PropTypes.number, PropTypes.string])
};
Modal.defaultProps = {
  closeButton: true,
  onClose: noop,
  onClosed: noop,
  padding: 3 * GU,
  width: viewport => Math.min(viewport.width - SPACE_AROUND * 2, 600)
};

var _StyledAnimatedDiv = _styled(extendedAnimated.div).withConfig({
  displayName: "Modal___StyledAnimatedDiv",
  componentId: "sc-1ofisn3-0"
})(["position:fixed;top:0;left:0;right:0;bottom:0;background:", ";"], p => p.$_css);

var _StyledAnimatedDiv2 = _styled(extendedAnimated.div).withConfig({
  displayName: "Modal___StyledAnimatedDiv2",
  componentId: "sc-1ofisn3-1"
})(["position:absolute;z-index:1;top:0;left:0;right:0;bottom:0;display:grid;align-items:center;justify-content:center;overflow:auto;"]);

var _StyledDiv = _styled("div").withConfig({
  displayName: "Modal___StyledDiv",
  componentId: "sc-1ofisn3-2"
})(["padding:", "px 0;"], SPACE_AROUND);

var _StyledEscapeOutside = _styled(EscapeOutside).withConfig({
  displayName: "Modal___StyledEscapeOutside",
  componentId: "sc-1ofisn3-3"
})(["position:relative;overflow:hidden;min-width:", "px;background:", ";box-shadow:0 10px 28px rgba(0,0,0,0.15);"], p => p.$_css2, p => p.$_css3);

var _StyledButtonIcon = _styled(ButtonIcon).withConfig({
  displayName: "Modal___StyledButtonIcon",
  componentId: "sc-1ofisn3-4"
})(["position:absolute;z-index:2;top:", "px;right:", "px;"], p => p.$_css4, p => p.$_css5);

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "Modal___StyledDiv2",
  componentId: "sc-1ofisn3-5"
})(["position:relative;z-index:1;"]);

export { Modal as default };
//# sourceMappingURL=Modal.js.map
