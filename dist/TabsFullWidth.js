'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var _styled = require('styled-components');
var React = require('react');
var web = require('./web-17920307.js');
var index = require('./index-70e12149.js');
var ButtonBase = require('./ButtonBase.js');
var Theme = require('./Theme.js');
var useFocusLeave = require('./useFocusLeave.js');
var IconDown = require('./IconDown.js');
var keycodes = require('./keycodes.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
var springs = require('./springs.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./objectWithoutPropertiesLoose-34dfcdd4.js');
require('react-dom');
require('./index-19b0c963.js');
require('./FocusVisible.js');
require('./defineProperty-fdbd3c46.js');
require('./css.js');
require('./environment.js');
require('./miscellaneous.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./font.js');
require('./IconPropTypes-435c57cb.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/* eslint-disable react/prop-types */

function TabsFullWidth({
  items,
  selected,
  onChange
}) {
  const theme = Theme.useTheme();
  const buttonRef = React.useRef(null);
  const [insideSidePanel] = index.o('SidePanel');
  const [opened, setOpened] = React.useState(false);
  const selectedItem = items[selected];
  const dropdownDisabled = items.length === 1;
  const close = React.useCallback(() => setOpened(false), []);
  const focusButton = React.useCallback(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, []);
  const toggle = React.useCallback(() => {
    setOpened(opened => !opened);
  }, []);
  const change = React.useCallback(index => {
    close();
    focusButton();

    if (index !== selected) {
      onChange(index);
    }
  }, [selected, onChange, close, focusButton]);
  const {
    handleFocusLeave,
    ref
  } = useFocusLeave.useFocusLeave(close); // close on escape

  const handleMenuKeyDown = React.useCallback(event => {
    if (event.keyCode === keycodes.KEY_ESC) {
      close();
      focusButton();
    }
  }, [close, focusButton]);
  return /*#__PURE__*/React__default["default"].createElement(_StyledDiv, {
    ref: ref,
    onBlur: handleFocusLeave,
    $_css: 2 * constants.GU
  }, /*#__PURE__*/React__default["default"].createElement(_StyledDiv2, {
    $_css2: 8 * constants.GU
  }, /*#__PURE__*/React__default["default"].createElement(_StyledButtonBase, {
    ref: buttonRef,
    disabled: dropdownDisabled,
    onClick: toggle,
    $_css3: theme.surface,
    $_css4: theme.border,
    $_css5: insideSidePanel ? '0' : '1px',
    $_css6: textStyles.textStyle('body2'),
    $_css7: dropdownDisabled ? '' : `background: ${theme.surfacePressed};`
  }, /*#__PURE__*/React__default["default"].createElement(_StyledDiv3, {
    $_css8: 2 * constants.GU
  }, selectedItem), /*#__PURE__*/React__default["default"].createElement(_StyledDiv4, {
    $_css9: 7 * constants.GU,
    $_css10: theme.surfaceIcon
  }, /*#__PURE__*/React__default["default"].createElement(_StyledIconDown, {
    $_css11: opened ? 180 : 0,
    $_css12: dropdownDisabled ? theme.disabled : theme.surfaceIcon
  }))), /*#__PURE__*/React__default["default"].createElement(web.Transition, {
    items: opened,
    config: springs.springs.swift,
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
  }, opened => opened && (({
    opacity,
    y
  }) => /*#__PURE__*/React__default["default"].createElement(_StyledAnimatedDiv, {
    style: {
      opacity: opacity,
      transform: y.interpolate(v => `translate3d(0, ${v * 4}px, 0)`)
    },
    $_css13: 8 * constants.GU,
    $_css14: theme.border,
    $_css15: theme.surface
  }, /*#__PURE__*/React__default["default"].createElement(Menu, {
    items: items,
    onChange: change,
    onKeyDown: handleMenuKeyDown
  }))))));
}

function Menu({
  items,
  onChange,
  ...props
}) {
  const handleRef = React.useCallback(element => {
    if (element) {
      element.focus();
    }
  }, []);
  return /*#__PURE__*/React__default["default"].createElement(_StyledDiv5, _extends._extends({
    ref: handleRef,
    tabIndex: "0"
  }, props), items.map((item, index) => /*#__PURE__*/React__default["default"].createElement(MenuItem, {
    key: index,
    item: item,
    index: index,
    onChange: onChange
  })));
}

function MenuItem({
  item,
  index,
  onChange
}) {
  const theme = Theme.useTheme();
  const change = React.useCallback(() => {
    onChange(index);
  }, [onChange, index]);
  return /*#__PURE__*/React__default["default"].createElement(_StyledButtonBase2, {
    onClick: change,
    $_css16: 8 * constants.GU,
    $_css17: 2 * constants.GU,
    $_css18: textStyles.textStyle('body2'),
    $_css19: theme.surfacePressed
  }, item);
}

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "TabsFullWidth___StyledDiv",
  componentId: "sc-1sqpfuf-0"
})(["padding-bottom:", "px;"], p => p.$_css);

var _StyledDiv2 = _styled__default["default"]("div").withConfig({
  displayName: "TabsFullWidth___StyledDiv2",
  componentId: "sc-1sqpfuf-1"
})(["position:relative;display:flex;align-items:center;justify-content:space-between;width:100%;height:", "px;"], p => p.$_css2);

var _StyledButtonBase = _styled__default["default"](ButtonBase["default"]).withConfig({
  displayName: "TabsFullWidth___StyledButtonBase",
  componentId: "sc-1sqpfuf-2"
})(["display:flex;align-items:center;justify-content:space-between;width:100%;height:100%;background:", ";border-style:solid;border-color:", ";border-top-width:", ";border-bottom-width:1px;border-radius:0;", ";&:active{", "}"], p => p.$_css3, p => p.$_css4, p => p.$_css5, p => p.$_css6, p => p.$_css7);

var _StyledDiv3 = _styled__default["default"]("div").withConfig({
  displayName: "TabsFullWidth___StyledDiv3",
  componentId: "sc-1sqpfuf-3"
})(["padding-left:", "px;"], p => p.$_css8);

var _StyledDiv4 = _styled__default["default"]("div").withConfig({
  displayName: "TabsFullWidth___StyledDiv4",
  componentId: "sc-1sqpfuf-4"
})(["display:flex;align-items:center;justify-content:center;width:", "px;height:100%;color:", ";"], p => p.$_css9, p => p.$_css10);

var _StyledIconDown = _styled__default["default"](IconDown["default"]).withConfig({
  displayName: "TabsFullWidth___StyledIconDown",
  componentId: "sc-1sqpfuf-5"
})(["transition:transform 150ms ease-in-out;transform:rotate3d(0,0,1,", "deg);color:", ";"], p => p.$_css11, p => p.$_css12);

var _StyledAnimatedDiv = _styled__default["default"](web.extendedAnimated.div).withConfig({
  displayName: "TabsFullWidth___StyledAnimatedDiv",
  componentId: "sc-1sqpfuf-6"
})(["position:absolute;z-index:9;top:", "px;left:0;right:0;border-bottom:1px solid ", ";box-shadow:0px 2px 3px rgba(0,0,0,0.05);background:", ";"], p => p.$_css13, p => p.$_css14, p => p.$_css15);

var _StyledDiv5 = _styled__default["default"]("div").withConfig({
  displayName: "TabsFullWidth___StyledDiv5",
  componentId: "sc-1sqpfuf-7"
})(["display:flex;flex-direction:column;outline:0;"]);

var _StyledButtonBase2 = _styled__default["default"](ButtonBase["default"]).withConfig({
  displayName: "TabsFullWidth___StyledButtonBase2",
  componentId: "sc-1sqpfuf-8"
})(["height:", "px;padding-left:", "px;text-align:left;", ";&:active{background:", ";}"], p => p.$_css16, p => p.$_css17, p => p.$_css18, p => p.$_css19);

exports.TabsFullWidth = TabsFullWidth;
//# sourceMappingURL=TabsFullWidth.js.map
