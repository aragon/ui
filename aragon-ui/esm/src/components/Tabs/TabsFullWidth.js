import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import slicedToArray from '../../../node_modules/@babel/runtime/helpers/slicedToArray.js';
import _styled from 'styled-components';
import React, { useRef, useState, useCallback } from 'react';
import { animated as extendedAnimated, Transition } from '../../../node_modules/react-spring/web.js';
import { useInside as o } from '../../../node_modules/use-inside/dist/index.js';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';
import { useTheme } from '../../theme/Theme2.js';
import { useFocusLeave } from '../../hooks/useFocusLeave.js';
import IconDown from '../../icons/components/IconDown.js';
import { KEY_ESC } from '../../utils/keycodes.js';
import { GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';
import { springs } from '../../style/springs.js';

/* eslint-disable react/prop-types */

var _StyledDiv = _styled("div").withConfig({
  displayName: "TabsFullWidth___StyledDiv",
  componentId: "sc-1sqpfuf-0"
})(["padding-bottom:", "px;"], function (p) {
  return p._css;
});

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "TabsFullWidth___StyledDiv2",
  componentId: "sc-1sqpfuf-1"
})(["position:relative;display:flex;align-items:center;justify-content:space-between;width:100%;height:", "px;"], function (p) {
  return p._css2;
});

var _StyledButtonBase = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "TabsFullWidth___StyledButtonBase",
  componentId: "sc-1sqpfuf-2"
})(["display:flex;align-items:center;justify-content:space-between;width:100%;height:100%;background:", ";border-style:solid;border-color:", ";border-top-width:", ";border-bottom-width:1px;border-radius:0;", ";&:active{", "}"], function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
});

var _StyledDiv3 = _styled("div").withConfig({
  displayName: "TabsFullWidth___StyledDiv3",
  componentId: "sc-1sqpfuf-3"
})(["padding-left:", "px;"], function (p) {
  return p._css8;
});

var _StyledDiv4 = _styled("div").withConfig({
  displayName: "TabsFullWidth___StyledDiv4",
  componentId: "sc-1sqpfuf-4"
})(["display:flex;align-items:center;justify-content:center;width:", "px;height:100%;color:", ";"], function (p) {
  return p._css9;
}, function (p) {
  return p._css10;
});

var _StyledIconDown = _styled(IconDown).withConfig({
  displayName: "TabsFullWidth___StyledIconDown",
  componentId: "sc-1sqpfuf-5"
})(["transition:transform 150ms ease-in-out;transform:rotate3d(0,0,1,", "deg);color:", ";"], function (p) {
  return p._css11;
}, function (p) {
  return p._css12;
});

var _StyledAnimatedDiv = _styled(extendedAnimated.div).withConfig({
  displayName: "TabsFullWidth___StyledAnimatedDiv",
  componentId: "sc-1sqpfuf-6"
})(["position:absolute;z-index:9;top:", "px;left:0;right:0;border-bottom:1px solid ", ";box-shadow:0px 2px 3px rgba(0,0,0,0.05);background:", ";"], function (p) {
  return p._css13;
}, function (p) {
  return p._css14;
}, function (p) {
  return p._css15;
});

function TabsFullWidth(_ref) {
  var items = _ref.items,
      selected = _ref.selected,
      onChange = _ref.onChange;
  var theme = useTheme();
  var buttonRef = useRef(null);

  var _useInside = o('SidePanel'),
      _useInside2 = slicedToArray(_useInside, 1),
      insideSidePanel = _useInside2[0];

  var _useState = useState(false),
      _useState2 = slicedToArray(_useState, 2),
      opened = _useState2[0],
      setOpened = _useState2[1];

  var selectedItem = items[selected];
  var dropdownDisabled = items.length === 1;
  var close = useCallback(function () {
    return setOpened(false);
  }, []);
  var focusButton = useCallback(function () {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, []);
  var toggle = useCallback(function () {
    setOpened(function (opened) {
      return !opened;
    });
  }, []);
  var change = useCallback(function (index) {
    close();
    focusButton();

    if (index !== selected) {
      onChange(index);
    }
  }, [selected, onChange, close, focusButton]);

  var _useFocusLeave = useFocusLeave(close),
      handleFocusLeave = _useFocusLeave.handleFocusLeave,
      ref = _useFocusLeave.ref; // close on escape


  var handleMenuKeyDown = useCallback(function (event) {
    if (event.keyCode === KEY_ESC) {
      close();
      focusButton();
    }
  }, [close, focusButton]);
  return /*#__PURE__*/React.createElement(_StyledDiv, {
    ref: ref,
    onBlur: handleFocusLeave,
    _css: 2 * GU
  }, /*#__PURE__*/React.createElement(_StyledDiv2, {
    _css2: 8 * GU
  }, /*#__PURE__*/React.createElement(_StyledButtonBase, {
    ref: buttonRef,
    disabled: dropdownDisabled,
    onClick: toggle,
    _css3: theme.surface,
    _css4: theme.border,
    _css5: insideSidePanel ? '0' : '1px',
    _css6: textStyle('body2'),
    _css7: dropdownDisabled ? '' : "background: ".concat(theme.surfacePressed, ";")
  }, /*#__PURE__*/React.createElement(_StyledDiv3, {
    _css8: 2 * GU
  }, selectedItem), /*#__PURE__*/React.createElement(_StyledDiv4, {
    _css9: 7 * GU,
    _css10: theme.surfaceIcon
  }, /*#__PURE__*/React.createElement(_StyledIconDown, {
    _css11: opened ? 180 : 0,
    _css12: dropdownDisabled ? theme.disabled : theme.surfaceIcon
  }))), /*#__PURE__*/React.createElement(Transition, {
    items: opened,
    config: springs.swift,
    from: {
      y: -1,
      opacity: 0
    },
    enter: {
      y: 0,
      opacity: 1
    },
    leave: {
      y: -1,
      opacity: 0
    },
    native: true
  }, function (opened) {
    return opened && function (_ref2) {
      var opacity = _ref2.opacity,
          y = _ref2.y;
      return /*#__PURE__*/React.createElement(_StyledAnimatedDiv, {
        style: {
          opacity: opacity,
          transform: y.interpolate(function (v) {
            return "translate3d(0, ".concat(v * 4, "px, 0)");
          })
        },
        _css13: 8 * GU,
        _css14: theme.border,
        _css15: theme.surface
      }, /*#__PURE__*/React.createElement(Menu, {
        items: items,
        onChange: change,
        onKeyDown: handleMenuKeyDown
      }));
    };
  })));
}

var _StyledDiv5 = _styled("div").withConfig({
  displayName: "TabsFullWidth___StyledDiv5",
  componentId: "sc-1sqpfuf-7"
})(["display:flex;flex-direction:column;outline:0;"]);

function Menu(_ref3) {
  var items = _ref3.items,
      onChange = _ref3.onChange,
      props = objectWithoutProperties(_ref3, ["items", "onChange"]);

  var handleRef = useCallback(function (element) {
    if (element) {
      element.focus();
    }
  }, []);
  return /*#__PURE__*/React.createElement(_StyledDiv5, _extends_1({
    ref: handleRef,
    tabIndex: "0"
  }, props), items.map(function (item, index) {
    return /*#__PURE__*/React.createElement(MenuItem, {
      key: index,
      item: item,
      index: index,
      onChange: onChange
    });
  }));
}

var _StyledButtonBase2 = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "TabsFullWidth___StyledButtonBase2",
  componentId: "sc-1sqpfuf-8"
})(["height:", "px;padding-left:", "px;text-align:left;", ";&:active{background:", ";}"], function (p) {
  return p._css16;
}, function (p) {
  return p._css17;
}, function (p) {
  return p._css18;
}, function (p) {
  return p._css19;
});

function MenuItem(_ref4) {
  var item = _ref4.item,
      index = _ref4.index,
      onChange = _ref4.onChange;
  var theme = useTheme();
  var change = useCallback(function () {
    onChange(index);
  }, [onChange, index]);
  return /*#__PURE__*/React.createElement(_StyledButtonBase2, {
    onClick: change,
    _css16: 8 * GU,
    _css17: 2 * GU,
    _css18: textStyle('body2'),
    _css19: theme.surfacePressed
  }, item);
}

export { TabsFullWidth };
//# sourceMappingURL=TabsFullWidth.js.map
