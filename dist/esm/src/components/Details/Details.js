import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React, { useRef, useState, useCallback, useEffect, useMemo } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { animated as extendedAnimated, Spring } from '../../../node_modules/react-spring/web.js';
import { useInside as o } from '../../../node_modules/use-inside/dist/index.js';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';
import { useTheme } from '../../theme/Theme2.js';
import { GU } from '../../style/constants.js';
import { springs } from '../../style/springs.js';
import { textStyle } from '../../style/text-styles.js';
import IconDown from '../../icons/components/IconDown.js';

// In / out example: [0, 0.25, 0.5, 0.75, 1] => [0, 0.5, 1, 0.5, 0]

function interpolateToggleElevation(value, fn) {
  return value.interpolate(v => fn(1 - Math.abs(v * 2 - 1)));
}

function Details({
  children,
  label,
  onToggle,
  opened: openedProp,
  ...props
}) {
  const theme = useTheme();
  const [insideBox] = o('Box');
  const [insideSidePanel] = o('SidePanel');
  const contentRef = useRef(null);
  const contentHeight = useRef(0); // Details supports two modes: managed (internal state),
  // or controlled (external state).

  const [openedManaged, setOpenedManaged] = useState(false);
  const opened = openedProp === undefined ? openedManaged : openedProp;
  const updateHeight = useCallback(() => {
    if (contentRef.current) {
      contentHeight.current = contentRef.current.clientHeight;
    }
  }, []);
  const handleContentRef = useCallback(element => {
    contentRef.current = element;
    updateHeight();
  }, [updateHeight]);
  const handleToggle = useCallback(() => {
    const newOpened = !opened; // Managed state

    if (openedProp === undefined) {
      setOpenedManaged(newOpened);
    } // Useful to notify even in managed mode


    if (onToggle) {
      onToggle(newOpened);
    }
  }, [onToggle, opened, openedProp]); // Animate after the initial render

  const animate = useRef(false);
  useEffect(() => {
    animate.current = true;
  }, []); // Use height: 'auto' when opened

  const [forceHeight, setForceHeight] = useState(false);
  const handleStart = useCallback(() => setForceHeight(true), []);
  const handleRest = useCallback(() => {
    // Note: we need to use the opened from the previous
    // render cycle here, which is why we don’t use a callback.
    setForceHeight(!opened);
  }, [opened]); // Update the height

  useEffect(updateHeight, [opened, updateHeight]);
  const spacingCss = useMemo(() => {
    if (insideSidePanel) {
      return {
        section: `
          margin: ${2 * GU}px ${-3 * GU}px 0;
          padding-bottom: ${3 * GU}px;
        `,
        content: `
          padding: ${2 * GU}px ${3 * GU}px 0;
        `
      };
    }

    if (insideBox) {
      return {
        section: `
          margin: 0 ${-3 * GU}px;
        `,
        content: `
          padding: ${1 * GU}px ${3 * GU}px 0;
        `
      };
    }

    return {
      section: `
        margin: 0;
        padding-bottom: ${3 * GU}px;
      `,
      content: `
        padding: 0;
      `
    };
  }, [insideSidePanel, insideBox]);
  return /*#__PURE__*/React.createElement(Spring, {
    config: springs.smooth,
    from: {
      openProgress: 0
    },
    to: {
      openProgress: Number(opened)
    },
    immediate: !animate,
    onRest: handleRest,
    onStart: handleStart,
    native: true
  }, ({
    openProgress
  }) => /*#__PURE__*/React.createElement(_StyledSection, _extends({}, props, {
    $_css: spacingCss.section
  }), /*#__PURE__*/React.createElement(_StyledButtonBase, {
    onClick: handleToggle,
    $_css2: theme.surfacePressed
  }, /*#__PURE__*/React.createElement(_StyledDiv, {
    $_css3: 3 * GU,
    $_css4: 3 * GU
  }, /*#__PURE__*/React.createElement(extendedAnimated.div, {
    style: {
      transform: interpolateToggleElevation(openProgress, v => `scale3d(${v}, 1, 1)`),
      opacity: interpolateToggleElevation(openProgress, v => v)
    }
  }, /*#__PURE__*/React.createElement(_StyledDiv2, null))), /*#__PURE__*/React.createElement(_StyledH, _extends({}, props, {
    $_css5: 5 * GU,
    $_css6: 3 * GU,
    $_css7: theme.surfaceContentSecondary,
    $_css8: textStyle('label2')
  }), /*#__PURE__*/React.createElement(_StyledDiv3, null, label), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(extendedAnimated.div, {
    style: {
      marginLeft: `${1 * GU}px`,
      transform: openProgress.interpolate(v => `rotate(${(1 - v) * 180}deg)`),
      transformOrigin: '50% calc(50% - 0.5px)'
    }
  }, /*#__PURE__*/React.createElement(_StyledDiv4, null, /*#__PURE__*/React.createElement(IconDown, {
    size: "tiny"
  })))))), /*#__PURE__*/React.createElement(_StyledDiv5, null, /*#__PURE__*/React.createElement(_StyledAnimatedDiv, {
    style: {
      opacity: openProgress,
      height: forceHeight ? openProgress.interpolate(v => `${v * contentHeight.current}px`) : 'auto'
    }
  }, /*#__PURE__*/React.createElement(_StyledDiv6, {
    ref: handleContentRef,
    $_css9: spacingCss.content
  }, /*#__PURE__*/React.createElement("div", null, children))))));
}

Details.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  onToggle: PropTypes.func,
  opened: PropTypes.bool
};

var _StyledSection = _styled("section").withConfig({
  displayName: "Details___StyledSection",
  componentId: "sc-b3f99g-0"
})(["", ""], p => p.$_css);

var _StyledButtonBase = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "Details___StyledButtonBase",
  componentId: "sc-b3f99g-1"
})(["position:relative;width:100%;&:active{background:", ";}"], p => p.$_css2);

var _StyledDiv = _styled("div").withConfig({
  displayName: "Details___StyledDiv",
  componentId: "sc-b3f99g-2"
})(["position:absolute;left:", "px;right:", "px;bottom:0;"], p => p.$_css3, p => p.$_css4);

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "Details___StyledDiv2",
  componentId: "sc-b3f99g-3"
})(["height:1px;box-shadow:0 1px 1px rgba(0,0,0,0.1);"]);

var _StyledH = _styled("h1").withConfig({
  displayName: "Details___StyledH",
  componentId: "sc-b3f99g-4"
})(["display:flex;justify-content:flex-start;align-items:center;height:", "px;margin-left:", "px;color:", ";", " font-weight:400;"], p => p.$_css5, p => p.$_css6, p => p.$_css7, p => p.$_css8);

var _StyledDiv3 = _styled("div").withConfig({
  displayName: "Details___StyledDiv3",
  componentId: "sc-b3f99g-5"
})(["margin-top:2px;"]);

var _StyledDiv4 = _styled("div").withConfig({
  displayName: "Details___StyledDiv4",
  componentId: "sc-b3f99g-6"
})(["display:flex;align-items:center;justify-content:center;"]);

var _StyledDiv5 = _styled("div").withConfig({
  displayName: "Details___StyledDiv5",
  componentId: "sc-b3f99g-7"
})(["overflow:hidden"]);

var _StyledAnimatedDiv = _styled(extendedAnimated.div).withConfig({
  displayName: "Details___StyledAnimatedDiv",
  componentId: "sc-b3f99g-8"
})(["display:flex;flex-direction:column;justify-content:flex-end;"]);

var _StyledDiv6 = _styled("div").withConfig({
  displayName: "Details___StyledDiv6",
  componentId: "sc-b3f99g-9"
})(["", ""], p => p.$_css9);

export { Details as default };
//# sourceMappingURL=Details.js.map
