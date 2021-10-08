import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import slicedToArray from '../../../node_modules/@babel/runtime/helpers/slicedToArray.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import _styled from 'styled-components';
import React, { useRef, useState, useCallback, useEffect, useMemo } from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
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
  return value.interpolate(function (v) {
    return fn(1 - Math.abs(v * 2 - 1));
  });
}

var _StyledSection = _styled("section").withConfig({
  displayName: "Details___StyledSection",
  componentId: "b3f99g-0"
})(["", ""], function (p) {
  return p._css;
});

var _StyledButtonBase = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "Details___StyledButtonBase",
  componentId: "b3f99g-1"
})(["position:relative;width:100%;&:active{background:", ";}"], function (p) {
  return p._css2;
});

var _StyledDiv = _styled("div").withConfig({
  displayName: "Details___StyledDiv",
  componentId: "b3f99g-2"
})(["position:absolute;left:", "px;right:", "px;bottom:0;"], function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
});

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "Details___StyledDiv2",
  componentId: "b3f99g-3"
})(["height:1px;box-shadow:0 1px 1px rgba(0,0,0,0.1);"]);

var _StyledH = _styled("h1").withConfig({
  displayName: "Details___StyledH",
  componentId: "b3f99g-4"
})(["display:flex;justify-content:flex-start;align-items:center;height:", "px;margin-left:", "px;color:", ";", " font-weight:400;"], function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
});

var _StyledDiv3 = _styled("div").withConfig({
  displayName: "Details___StyledDiv3",
  componentId: "b3f99g-5"
})(["margin-top:2px;"]);

var _StyledDiv4 = _styled("div").withConfig({
  displayName: "Details___StyledDiv4",
  componentId: "b3f99g-6"
})(["display:flex;align-items:center;justify-content:center;"]);

var _StyledDiv5 = _styled("div").withConfig({
  displayName: "Details___StyledDiv5",
  componentId: "b3f99g-7"
})(["overflow:hidden"]);

var _StyledAnimatedDiv = _styled(extendedAnimated.div).withConfig({
  displayName: "Details___StyledAnimatedDiv",
  componentId: "b3f99g-8"
})(["display:flex;flex-direction:column;justify-content:flex-end;"]);

var _StyledDiv6 = _styled("div").withConfig({
  displayName: "Details___StyledDiv6",
  componentId: "b3f99g-9"
})(["", ""], function (p) {
  return p._css9;
});

function Details(_ref) {
  var children = _ref.children,
      label = _ref.label,
      onToggle = _ref.onToggle,
      openedProp = _ref.opened,
      props = objectWithoutProperties(_ref, ["children", "label", "onToggle", "opened"]);

  var theme = useTheme();

  var _useInside = o('Box'),
      _useInside2 = slicedToArray(_useInside, 1),
      insideBox = _useInside2[0];

  var _useInside3 = o('SidePanel'),
      _useInside4 = slicedToArray(_useInside3, 1),
      insideSidePanel = _useInside4[0];

  var contentRef = useRef(null);
  var contentHeight = useRef(0); // Details supports two modes: managed (internal state),
  // or controlled (external state).

  var _useState = useState(false),
      _useState2 = slicedToArray(_useState, 2),
      openedManaged = _useState2[0],
      setOpenedManaged = _useState2[1];

  var opened = openedProp === undefined ? openedManaged : openedProp;
  var updateHeight = useCallback(function () {
    if (contentRef.current) {
      contentHeight.current = contentRef.current.clientHeight;
    }
  }, []);
  var handleContentRef = useCallback(function (element) {
    contentRef.current = element;
    updateHeight();
  }, [updateHeight]);
  var handleToggle = useCallback(function () {
    var newOpened = !opened; // Managed state

    if (openedProp === undefined) {
      setOpenedManaged(newOpened);
    } // Useful to notify even in managed mode


    if (onToggle) {
      onToggle(newOpened);
    }
  }, [onToggle, opened, openedProp]); // Animate after the initial render

  var animate = useRef(false);
  useEffect(function () {
    animate.current = true;
  }, []); // Use height: 'auto' when opened

  var _useState3 = useState(false),
      _useState4 = slicedToArray(_useState3, 2),
      forceHeight = _useState4[0],
      setForceHeight = _useState4[1];

  var handleStart = useCallback(function () {
    return setForceHeight(true);
  }, []);
  var handleRest = useCallback(function () {
    // Note: we need to use the opened from the previous
    // render cycle here, which is why we don’t use a callback.
    setForceHeight(!opened);
  }, [opened]); // Update the height

  useEffect(updateHeight, [opened, updateHeight]);
  var spacingCss = useMemo(function () {
    if (insideSidePanel) {
      return {
        section: "\n          margin: ".concat(2 * GU, "px ").concat(-3 * GU, "px 0;\n          padding-bottom: ").concat(3 * GU, "px;\n        "),
        content: "\n          padding: ".concat(2 * GU, "px ").concat(3 * GU, "px 0;\n        ")
      };
    }

    if (insideBox) {
      return {
        section: "\n          margin: 0 ".concat(-3 * GU, "px;\n        "),
        content: "\n          padding: ".concat(1 * GU, "px ").concat(3 * GU, "px 0;\n        ")
      };
    }

    return {
      section: "\n        margin: 0;\n        padding-bottom: ".concat(3 * GU, "px;\n      "),
      content: "\n        padding: 0;\n      "
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
  }, function (_ref2) {
    var openProgress = _ref2.openProgress;
    return /*#__PURE__*/React.createElement(_StyledSection, _extends_1({}, props, {
      _css: spacingCss.section
    }), /*#__PURE__*/React.createElement(_StyledButtonBase, {
      onClick: handleToggle,
      _css2: theme.surfacePressed
    }, /*#__PURE__*/React.createElement(_StyledDiv, {
      _css3: 3 * GU,
      _css4: 3 * GU
    }, /*#__PURE__*/React.createElement(extendedAnimated.div, {
      style: {
        transform: interpolateToggleElevation(openProgress, function (v) {
          return "scale3d(".concat(v, ", 1, 1)");
        }),
        opacity: interpolateToggleElevation(openProgress, function (v) {
          return v;
        })
      }
    }, /*#__PURE__*/React.createElement(_StyledDiv2, null))), /*#__PURE__*/React.createElement(_StyledH, _extends_1({}, props, {
      _css5: 5 * GU,
      _css6: 3 * GU,
      _css7: theme.surfaceContentSecondary,
      _css8: textStyle('label2')
    }), /*#__PURE__*/React.createElement(_StyledDiv3, null, label), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(extendedAnimated.div, {
      style: {
        marginLeft: "".concat(1 * GU, "px"),
        transform: openProgress.interpolate(function (v) {
          return "rotate(".concat((1 - v) * 180, "deg)");
        }),
        transformOrigin: '50% calc(50% - 0.5px)'
      }
    }, /*#__PURE__*/React.createElement(_StyledDiv4, null, /*#__PURE__*/React.createElement(IconDown, {
      size: "tiny"
    })))))), /*#__PURE__*/React.createElement(_StyledDiv5, null, /*#__PURE__*/React.createElement(_StyledAnimatedDiv, {
      style: {
        opacity: openProgress,
        height: forceHeight ? openProgress.interpolate(function (v) {
          return "".concat(v * contentHeight.current, "px");
        }) : 'auto'
      }
    }, /*#__PURE__*/React.createElement(_StyledDiv6, {
      ref: handleContentRef,
      _css9: spacingCss.content
    }, /*#__PURE__*/React.createElement("div", null, children)))));
  });
}

Details.propTypes = {
  children: propTypes.node.isRequired,
  label: propTypes.string.isRequired,
  onToggle: propTypes.func,
  opened: propTypes.bool
};

export default Details;
//# sourceMappingURL=Details.js.map
