import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React, { useCallback, useState, useEffect, useContext, useRef } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { animated as extendedAnimated, Transition } from '../../../node_modules/react-spring/web.js';
import { Inside as i } from '../../../node_modules/use-inside/dist/index.js';
import ButtonIcon from '../Button/ButtonIcon.js';
import { useViewport } from '../../providers/Viewport/Viewport.js';
import RootPortal from '../RootPortal/RootPortal.js';
import { useTheme } from '../../theme/Theme2.js';
import IconCross from '../../icons/components/IconCross.js';
import { GU } from '../../style/constants.js';
import { KEY_ESC } from '../../utils/keycodes.js';
import { springs } from '../../style/springs.js';
import { unselectable } from '../../utils/css.js';
import { textStyle } from '../../style/text-styles.js';
import { warn } from '../../utils/environment.js';

const CONTENT_PADDING = 3 * GU; // The closing position of the panel, on the right side of the viewport.
// It takes into consideration the shadow of the panel.

const CLOSING_POSITION = 5 * GU;
const SidePanelContext = /*#__PURE__*/React.createContext(null);

function SidePanel({
  blocking,
  children,
  opened,
  onClose,
  onTransitionEnd,
  title
}) {
  const theme = useTheme();
  const {
    below
  } = useViewport();
  const compact = below('medium');
  const close = useCallback(() => {
    if (!blocking) {
      onClose();
    }
  }, [blocking, onClose]);
  const handleEscape = useCallback(event => {
    if (event.keyCode === KEY_ESC && opened) {
      close();
    }
  }, [opened, close]);
  const [status, setStatus] = useState(opened ? 'opened' : 'closed');
  const [readyToFocus, setReadyToFocus] = useState(false);
  const handleTransitionRest = useCallback(() => {
    onTransitionEnd(opened);
    setStatus(opened ? 'opened' : 'closed');
  }, [opened, onTransitionEnd]);
  const handleTransitionStart = useCallback(() => {
    setStatus(opened ? 'opening' : 'closing');
  }, [opened]);
  const handleTransitionFrame = useCallback((item, _, {
    progress
  }) => {
    if (progress > 0.5 && !readyToFocus) {
      setReadyToFocus(true);
    } else if (progress < 0.5 && readyToFocus) {
      setReadyToFocus(false);
    }
  }, [readyToFocus]);
  const handleTransitionDestroyed = useCallback(() => {
    setReadyToFocus(false);
  }, []);
  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [handleEscape]);
  return /*#__PURE__*/React.createElement(RootPortal, null, /*#__PURE__*/React.createElement(i, {
    name: "SidePanel"
  }, /*#__PURE__*/React.createElement(Transition, {
    items: opened,
    config: { ...springs.lazy,
      precision: 0.001
    },
    from: {
      progress: 0
    },
    enter: {
      progress: Number(opened)
    },
    leave: {
      progress: 0
    },
    onRest: handleTransitionRest,
    onStart: handleTransitionStart,
    onFrame: handleTransitionFrame,
    onDestroyed: handleTransitionDestroyed,
    unique: true,
    native: true
  }, opened => opened && (({
    progress
  }) => /*#__PURE__*/React.createElement(_StyledDiv, {
    $_css: status !== 'closing' ? 'auto' : 'none'
  }, /*#__PURE__*/React.createElement(_StyledAnimatedDiv, {
    onClick: close,
    style: {
      opacity: progress,
      pointerEvents: status !== 'closing' ? 'auto' : 'none'
    },
    $_css2: theme.overlay.alpha(0.9)
  }), /*#__PURE__*/React.createElement(Panel, {
    compact: compact,
    style: {
      transform: progress.interpolate(v => `
                          translate3d(
                            calc(
                              ${100 * (1 - v)}% +
                              ${CLOSING_POSITION * (1 - v)}px
                            ), 0, 0
                          )
                        `)
    }
  }, /*#__PURE__*/React.createElement(_StyledHeader, {
    $_css3: 8 * GU,
    $_css4: theme.border,
    $_css5: unselectable()
  }, /*#__PURE__*/React.createElement(_StyledH, {
    $_css6: theme.surfaceContent,
    $_css7: textStyle('body1')
  }, title), !blocking && /*#__PURE__*/React.createElement(_StyledButtonIcon, {
    label: "Close",
    onClick: close,
    $_css8: !compact ? `
                              top: ${2 * GU}px;
                              right: ${2 * GU}px;
                            ` : `
                              top: 0;
                              right: 0;
                              height: ${8 * GU}px;
                              width: ${8 * GU}px;
                            `
  }, /*#__PURE__*/React.createElement(IconCross, {
    color: theme.surfaceIcon
  }))), /*#__PURE__*/React.createElement(_StyledDiv2, null, /*#__PURE__*/React.createElement(_StyledDiv3, null, /*#__PURE__*/React.createElement(SidePanelContext.Provider, {
    value: {
      status,
      readyToFocus
    }
  }, children)))))))));
}

SidePanel.propTypes = {
  blocking: PropTypes.bool,
  children: PropTypes.node.isRequired,
  opened: PropTypes.bool,
  onClose: PropTypes.func,
  onTransitionEnd: PropTypes.func,
  title: PropTypes.node.isRequired
};
SidePanel.defaultProps = {
  opened: true,
  blocking: false,
  onClose: () => {},
  onTransitionEnd: () => {}
};
const Panel = /*#__PURE__*/React.memo(function Panel({
  compact,
  ...props
}) {
  const theme = useTheme();
  return /*#__PURE__*/React.createElement(_StyledAnimatedAside, _extends({}, props, {
    $_css9: theme.surface,
    $_css10: !compact ? 'max-width: 450px;' : ''
  }));
});
Panel.propTypes = {
  compact: PropTypes.bool
};

function useSidePanel() {
  const value = useContext(SidePanelContext);

  if (value === null) {
    throw new Error('useSidePanel() was used outside of the SidePanel render tree, ' + 'which has to be declared at an upper level!');
  }

  return value;
}

function useSidePanelFocusOnReady(ref) {
  const {
    readyToFocus
  } = useSidePanel();
  const fallbackRef = useRef();

  const _ref = ref || fallbackRef;

  useEffect(() => {
    if (readyToFocus && _ref.current) {
      if (_ref.current.focus) {
        _ref.current.focus();
      } else {
        warn('useSidePanelFocusOnReady(): the focus() method wasn’t available on ' + 'the passed ref.');
      }
    }
  }, [readyToFocus, _ref]);
  return _ref;
} // Used for spacing in SidePanelSplit and SidePanelSeparator


SidePanel.HORIZONTAL_PADDING = CONTENT_PADDING;

var _StyledDiv = _styled("div").withConfig({
  displayName: "SidePanel___StyledDiv",
  componentId: "sc-1kjx6mk-0"
})(["position:absolute;z-index:1;top:0;left:0;right:0;bottom:0;pointer-events:", ";overflow:hidden;"], p => p.$_css);

var _StyledAnimatedDiv = _styled(extendedAnimated.div).withConfig({
  displayName: "SidePanel___StyledAnimatedDiv",
  componentId: "sc-1kjx6mk-1"
})(["position:absolute;top:0;left:0;right:0;bottom:0;background:", ";"], p => p.$_css2);

var _StyledHeader = _styled("header").withConfig({
  displayName: "SidePanel___StyledHeader",
  componentId: "sc-1kjx6mk-2"
})(["display:flex;flex-direction:column;justify-content:center;flex-shrink:0;position:relative;height:", "px;padding-left:", "px;border-bottom:1px solid ", ";", ";"], p => p.$_css3, CONTENT_PADDING, p => p.$_css4, p => p.$_css5);

var _StyledH = _styled("h1").withConfig({
  displayName: "SidePanel___StyledH",
  componentId: "sc-1kjx6mk-3"
})(["color:", ";", ";"], p => p.$_css6, p => p.$_css7);

var _StyledButtonIcon = _styled(ButtonIcon).withConfig({
  displayName: "SidePanel___StyledButtonIcon",
  componentId: "sc-1kjx6mk-4"
})(["position:absolute;", ""], p => p.$_css8);

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "SidePanel___StyledDiv2",
  componentId: "sc-1kjx6mk-5"
})(["overflow-y:auto;height:100%;display:flex;flex-direction:column;"]);

var _StyledDiv3 = _styled("div").withConfig({
  displayName: "SidePanel___StyledDiv3",
  componentId: "sc-1kjx6mk-6"
})(["min-height:0;flex-grow:1;flex-shrink:0;display:flex;flex-direction:column;width:100%;padding-right:", "px;padding-left:", "px;padding-bottom:", "px;"], CONTENT_PADDING, CONTENT_PADDING, CONTENT_PADDING);

var _StyledAnimatedAside = _styled(extendedAnimated.aside).withConfig({
  displayName: "SidePanel___StyledAnimatedAside",
  componentId: "sc-1kjx6mk-7"
})(["position:absolute;top:0;right:0;display:flex;flex-direction:column;width:100%;height:100%;background:", ";box-shadow:-2px 0px 4px rgba(0,0,0,0.1);", ""], p => p.$_css9, p => p.$_css10);

export { SidePanel as default, useSidePanel, useSidePanelFocusOnReady };
//# sourceMappingURL=SidePanel.js.map
