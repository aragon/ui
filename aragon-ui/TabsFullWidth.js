'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var slicedToArray = require('./slicedToArray-a8a77f0e.js');
var _styled = require('styled-components');
var React = require('react');
var web = require('./web-46d746d6.js');
var index = require('./index-c33eeeef.js');
var ButtonBase = require('./ButtonBase.js');
var Theme = require('./Theme.js');
var useFocusLeave = require('./useFocusLeave.js');
var IconDown = require('./IconDown.js');
var keycodes = require('./keycodes.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
var springs = require('./springs.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
require('./index-37353731.js');
require('./defineProperty-3cad0327.js');
require('./FocusVisible.js');
require('./getPrototypeOf-55c9e80c.js');
require('./css.js');
require('./environment.js');
require('./miscellaneous.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./toConsumableArray-cc0d28a9.js');
require('./font.js');
require('./IconPropTypes-b9997416.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/* eslint-disable react/prop-types */

var _StyledDiv = _styled__default['default']("div").withConfig({
  displayName: "TabsFullWidth___StyledDiv",
  componentId: "sc-1sqpfuf-0"
})(["padding-bottom:", "px;"], function (p) {
  return p._css;
});

var _StyledDiv2 = _styled__default['default']("div").withConfig({
  displayName: "TabsFullWidth___StyledDiv2",
  componentId: "sc-1sqpfuf-1"
})(["position:relative;display:flex;align-items:center;justify-content:space-between;width:100%;height:", "px;"], function (p) {
  return p._css2;
});

var _StyledButtonBase = _styled__default['default'](ButtonBase['default']).withConfig({
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

var _StyledDiv3 = _styled__default['default']("div").withConfig({
  displayName: "TabsFullWidth___StyledDiv3",
  componentId: "sc-1sqpfuf-3"
})(["padding-left:", "px;"], function (p) {
  return p._css8;
});

var _StyledDiv4 = _styled__default['default']("div").withConfig({
  displayName: "TabsFullWidth___StyledDiv4",
  componentId: "sc-1sqpfuf-4"
})(["display:flex;align-items:center;justify-content:center;width:", "px;height:100%;color:", ";"], function (p) {
  return p._css9;
}, function (p) {
  return p._css10;
});

var _StyledIconDown = _styled__default['default'](IconDown['default']).withConfig({
  displayName: "TabsFullWidth___StyledIconDown",
  componentId: "sc-1sqpfuf-5"
})(["transition:transform 150ms ease-in-out;transform:rotate3d(0,0,1,", "deg);color:", ";"], function (p) {
  return p._css11;
}, function (p) {
  return p._css12;
});

var _StyledAnimatedDiv = _styled__default['default'](web.extendedAnimated.div).withConfig({
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
  var theme = Theme.useTheme();
  var buttonRef = React.useRef(null);

  var _useInside = index.o('SidePanel'),
      _useInside2 = slicedToArray.slicedToArray(_useInside, 1),
      insideSidePanel = _useInside2[0];

  var _useState = React.useState(false),
      _useState2 = slicedToArray.slicedToArray(_useState, 2),
      opened = _useState2[0],
      setOpened = _useState2[1];

  var selectedItem = items[selected];
  var dropdownDisabled = items.length === 1;
  var close = React.useCallback(function () {
    return setOpened(false);
  }, []);
  var focusButton = React.useCallback(function () {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, []);
  var toggle = React.useCallback(function () {
    setOpened(function (opened) {
      return !opened;
    });
  }, []);
  var change = React.useCallback(function (index) {
    close();
    focusButton();

    if (index !== selected) {
      onChange(index);
    }
  }, [selected, onChange, close, focusButton]);

  var _useFocusLeave = useFocusLeave.useFocusLeave(close),
      handleFocusLeave = _useFocusLeave.handleFocusLeave,
      ref = _useFocusLeave.ref; // close on escape


  var handleMenuKeyDown = React.useCallback(function (event) {
    if (event.keyCode === keycodes.KEY_ESC) {
      close();
      focusButton();
    }
  }, [close, focusButton]);
  return /*#__PURE__*/React__default['default'].createElement(_StyledDiv, {
    ref: ref,
    onBlur: handleFocusLeave,
    _css: 2 * constants.GU
  }, /*#__PURE__*/React__default['default'].createElement(_StyledDiv2, {
    _css2: 8 * constants.GU
  }, /*#__PURE__*/React__default['default'].createElement(_StyledButtonBase, {
    ref: buttonRef,
    disabled: dropdownDisabled,
    onClick: toggle,
    _css3: theme.surface,
    _css4: theme.border,
    _css5: insideSidePanel ? '0' : '1px',
    _css6: textStyles.textStyle('body2'),
    _css7: dropdownDisabled ? '' : "background: ".concat(theme.surfacePressed, ";")
  }, /*#__PURE__*/React__default['default'].createElement(_StyledDiv3, {
    _css8: 2 * constants.GU
  }, selectedItem), /*#__PURE__*/React__default['default'].createElement(_StyledDiv4, {
    _css9: 7 * constants.GU,
    _css10: theme.surfaceIcon
  }, /*#__PURE__*/React__default['default'].createElement(_StyledIconDown, {
    _css11: opened ? 180 : 0,
    _css12: dropdownDisabled ? theme.disabled : theme.surfaceIcon
  }))), /*#__PURE__*/React__default['default'].createElement(web.Transition, {
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
  }, function (opened) {
    return opened && function (_ref2) {
      var opacity = _ref2.opacity,
          y = _ref2.y;
      return /*#__PURE__*/React__default['default'].createElement(_StyledAnimatedDiv, {
        style: {
          opacity: opacity,
          transform: y.interpolate(function (v) {
            return "translate3d(0, ".concat(v * 4, "px, 0)");
          })
        },
        _css13: 8 * constants.GU,
        _css14: theme.border,
        _css15: theme.surface
      }, /*#__PURE__*/React__default['default'].createElement(Menu, {
        items: items,
        onChange: change,
        onKeyDown: handleMenuKeyDown
      }));
    };
  })));
}

var _StyledDiv5 = _styled__default['default']("div").withConfig({
  displayName: "TabsFullWidth___StyledDiv5",
  componentId: "sc-1sqpfuf-7"
})(["display:flex;flex-direction:column;outline:0;"]);

function Menu(_ref3) {
  var items = _ref3.items,
      onChange = _ref3.onChange,
      props = objectWithoutProperties.objectWithoutProperties(_ref3, ["items", "onChange"]);

  var handleRef = React.useCallback(function (element) {
    if (element) {
      element.focus();
    }
  }, []);
  return /*#__PURE__*/React__default['default'].createElement(_StyledDiv5, _extends._extends_1({
    ref: handleRef,
    tabIndex: "0"
  }, props), items.map(function (item, index) {
    return /*#__PURE__*/React__default['default'].createElement(MenuItem, {
      key: index,
      item: item,
      index: index,
      onChange: onChange
    });
  }));
}

var _StyledButtonBase2 = _styled__default['default'](ButtonBase['default']).withConfig({
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
  var theme = Theme.useTheme();
  var change = React.useCallback(function () {
    onChange(index);
  }, [onChange, index]);
  return /*#__PURE__*/React__default['default'].createElement(_StyledButtonBase2, {
    onClick: change,
    _css16: 8 * constants.GU,
    _css17: 2 * constants.GU,
    _css18: textStyles.textStyle('body2'),
    _css19: theme.surfacePressed
  }, item);
}

exports.TabsFullWidth = TabsFullWidth;
//# sourceMappingURL=TabsFullWidth.js.map
