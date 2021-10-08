import slicedToArray from '../../../node_modules/@babel/runtime/helpers/slicedToArray.js';
import _styled from 'styled-components';
import React, { useState, useCallback } from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import { animated as extendedAnimated, Spring } from '../../../node_modules/react-spring/web.js';
import reactOnclickout from '../../../node_modules/react-onclickout/index.js';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';
import IconEllipsis from '../../icons/components/IconEllipsis.js';
import IconDown from '../../icons/components/IconDown.js';
import { useTheme } from '../../theme/Theme2.js';
import { springs } from '../../style/springs.js';
import { RADIUS } from '../../style/constants.js';

var BASE_WIDTH = 46;
var BASE_HEIGHT = 32;

var _StyledIconEllipsis = _styled(IconEllipsis).withConfig({
  displayName: "ContextMenu___StyledIconEllipsis",
  componentId: "ris724-0"
})([""]);

var _StyledIconDown = _styled(IconDown).withConfig({
  displayName: "ContextMenu___StyledIconDown",
  componentId: "ris724-1"
})(["color:", ";"], function (p) {
  return p._css7;
});

var _StyledAnimatedDiv = _styled(extendedAnimated.div).withConfig({
  displayName: "ContextMenu___StyledAnimatedDiv",
  componentId: "ris724-2"
})(["z-index:", ";overflow:hidden;position:absolute;top:", "px;right:0;background:", ";border:1px solid ", ";border-radius:3px 0 3px 3px;"], function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
}, function (p) {
  return p._css10;
}, function (p) {
  return p._css11;
});

var _StyledDiv = _styled("div").withConfig({
  displayName: "ContextMenu___StyledDiv",
  componentId: "ris724-3"
})(["z-index:", ";position:absolute;bottom:0;right:1px;height:1px;width:", "px;background:", ";"], function (p) {
  return p._css12;
}, function (p) {
  return p._css13;
}, function (p) {
  return p._css14;
});

function ContextMenu(_ref) {
  var children = _ref.children,
      zIndex = _ref.zIndex,
      disabled = _ref.disabled;
  var theme = useTheme();

  var _useState = useState(false),
      _useState2 = slicedToArray(_useState, 2),
      opened = _useState2[0],
      setOpened = _useState2[1];

  var handleClose = useCallback(function () {
    setOpened(false);
  }, []);
  var handleBaseButtonClick = useCallback(function () {
    setOpened(function (opened) {
      return !opened;
    });
  }, []); // Increase the z-index on an opened menu, to make sure it's above any other
  // context menus below it using the same z-index (e.g. when used in a list)

  var appliedZIndex = opened ? zIndex + 1 : zIndex;
  return /*#__PURE__*/React.createElement(reactOnclickout, {
    onClickOut: handleClose
  }, /*#__PURE__*/React.createElement(Spring, {
    config: springs.smooth,
    to: {
      openProgress: Number(opened)
    },
    native: true
  }, function (_ref2) {
    var openProgress = _ref2.openProgress;
    return /*#__PURE__*/React.createElement(_StyledMain, {
      style: {
        boxShadow: openProgress.interpolate(function (t) {
          return "0 4px 4px rgba(0, 0, 0, ".concat(t * 0.03, ")");
        })
      },
      _css: appliedZIndex
    }, /*#__PURE__*/React.createElement(_StyledButton, {
      onClick: handleBaseButtonClick,
      opened: opened,
      disabled: disabled,
      focusRingRadius: RADIUS,
      _css2: disabled ? theme.disabledContent : opened ? theme.accent : theme.surfaceContent,
      _css3: disabled ? theme.disabled : theme.surface,
      _css4: disabled ? '0' : "1px solid ".concat(theme.border),
      _css5: opened ? theme.surface : theme.border,
      _css6: disabled ? '' : "&:active {\n                  background: ".concat(theme.surfacePressed, ";\n                  border-bottom-color: ").concat(opened ? theme.surfacePressed : theme.border, ";\n                }")
    }, /*#__PURE__*/React.createElement(_StyledIconEllipsis, null), /*#__PURE__*/React.createElement(extendedAnimated.div, {
      style: {
        display: 'flex',
        alignItems: 'center',
        transformOrigin: '50% 50%',
        transform: openProgress.interpolate(function (v) {
          return "rotate(".concat(v * 180, "deg)");
        })
      }
    }, /*#__PURE__*/React.createElement(_StyledIconDown, {
      size: "tiny",
      _css7: disabled ? theme.disabledIcon : theme.surfaceIcon
    }))), opened && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_StyledAnimatedDiv, {
      onClick: handleClose,
      style: {
        opacity: openProgress,
        boxShadow: openProgress.interpolate(function (t) {
          return "0 4px 4px rgba(0, 0, 0, ".concat(t * 0.03, ")");
        })
      },
      _css8: appliedZIndex + 1,
      _css9: BASE_HEIGHT - 1,
      _css10: theme.surface,
      _css11: theme.border
    }, children), /*#__PURE__*/React.createElement(_StyledDiv, {
      _css12: appliedZIndex + 1,
      _css13: BASE_WIDTH - 2,
      _css14: theme.surface
    })));
  }));
}

ContextMenu.propTypes = {
  children: propTypes.node,
  zIndex: propTypes.number,
  disabled: propTypes.bool
};
ContextMenu.defaultProps = {
  zIndex: 0,
  disabled: false
};
var Main = _styled(extendedAnimated.div).withConfig({
  displayName: "ContextMenu__Main",
  componentId: "ris724-4"
})(["position:relative;width:", "px;height:", "px;"], BASE_WIDTH, BASE_HEIGHT);

var _StyledMain = _styled(Main).withConfig({
  displayName: "ContextMenu___StyledMain",
  componentId: "ris724-5"
})(["z-index:", ";"], function (p) {
  return p._css;
});

var Button = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "ContextMenu__Button",
  componentId: "ris724-6"
})(["display:flex;justify-content:center;align-items:center;width:100%;height:", "px;border-radius:", ";box-shadow:", ";"], BASE_HEIGHT, function (_ref3) {
  var opened = _ref3.opened;
  return opened ? "".concat(RADIUS, "px ").concat(RADIUS, "px 0 0") : "".concat(RADIUS, "px");
}, function (_ref4) {
  var disabled = _ref4.disabled;
  return disabled ? 'none' : "0px 1px 3px rgba(0, 0, 0, 0.1)";
});

var _StyledButton = _styled(Button).withConfig({
  displayName: "ContextMenu___StyledButton",
  componentId: "ris724-7"
})(["color:", ";background:", ";border:", ";border-bottom-color:", ";", ""], function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

export default ContextMenu;
//# sourceMappingURL=ContextMenu.js.map
