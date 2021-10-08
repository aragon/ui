'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var slicedToArray = require('./slicedToArray-a8a77f0e.js');
var _styled = require('styled-components');
var React = require('react');
var index$1 = require('./index-37353731.js');
var index = require('./index-c33eeeef.js');
var Viewport = require('./Viewport-71f7efe6.js');
var ButtonBase = require('./ButtonBase.js');
var Popover = require('./Popover.js');
var Theme = require('./Theme.js');
var IconDown = require('./IconDown.js');
var environment = require('./environment.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
var css = require('./css.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./getPrototypeOf-55c9e80c.js');
require('./defineProperty-3cad0327.js');
require('./_baseGetTag-6ec23aaa.js');
require('./breakpoints.js');
require('./FocusVisible.js');
require('./keycodes.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./toConsumableArray-cc0d28a9.js');
require('./miscellaneous.js');
require('./font.js');
require('./proptypes-316e1def.js');
require('./web-46d746d6.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
require('./RootPortal.js');
require('./Root-07f851a6.js');
require('./springs.js');
require('./components.js');
require('./IconPropTypes-b9997416.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var MIN_WIDTH = 128;

function useDropDown(_ref) {
  var buttonRef = _ref.buttonRef,
      items = _ref.items,
      displayedLabel = _ref.displayedLabel,
      onChange = _ref.onChange;
      _ref.placeholder;
      var selected = _ref.selected;

  var _useState = React.useState(displayedLabel),
      _useState2 = slicedToArray.slicedToArray(_useState, 2),
      selectedLabel = _useState2[0],
      setSelectedLabel = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = slicedToArray.slicedToArray(_useState3, 2),
      opened = _useState4[0],
      setOpened = _useState4[1];

  var close = React.useCallback(function () {
    setOpened(false);

    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [buttonRef]);
  var toggle = React.useCallback(function () {
    return setOpened(function (opened) {
      return !opened;
    });
  }, []);
  var handleItemSelect = React.useCallback(function (index) {
    onChange(index);
    close();
  }, [onChange, close]);
  React.useEffect(function () {
    if (selected === -1 || !items[selected]) {
      if (displayedLabel) {
        setSelectedLabel(displayedLabel);
      }

      return;
    }

    setSelectedLabel(items[selected]);
  }, [items, selected, displayedLabel]);
  return {
    handleItemSelect: handleItemSelect,
    close: close,
    toggle: toggle,
    opened: opened,
    selectedLabel: selectedLabel
  };
}

function useButtonRef(cb) {
  var buttonRef = React.useRef(null);
  var refCallback = React.useCallback(function (el) {
    if (el) {
      cb(el);
    }

    buttonRef.current = el;
  }, [cb]);
  return {
    buttonRef: buttonRef,
    refCallback: refCallback
  };
}

var _StyledButtonBase = _styled__default['default'](ButtonBase['default']).withConfig({
  displayName: "DropDown___StyledButtonBase",
  componentId: "sc-17zpefi-0"
})(["display:", ";justify-content:space-between;align-items:center;height:", "px;padding-left:", "px;padding-right:", "px;width:", ";min-width:", ";background:", ";color:", ";border:", "px solid ", ";", ";", ""], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
}, function (p) {
  return p._css10;
}, function (p) {
  return p._css11;
}, function (p) {
  return p._css12;
});

var _StyledDiv = _styled__default['default']("div").withConfig({
  displayName: "DropDown___StyledDiv",
  componentId: "sc-17zpefi-1"
})(["overflow:hidden;"]);

var _StyledIconDown = _styled__default['default'](IconDown['default']).withConfig({
  displayName: "DropDown___StyledIconDown",
  componentId: "sc-17zpefi-2"
})(["margin-left:", "px;color:", ";"], function (p) {
  return p._css13;
}, function (p) {
  return p._css14;
});

var _StyledDiv2 = _styled__default['default']("div").withConfig({
  displayName: "DropDown___StyledDiv2",
  componentId: "sc-17zpefi-3"
})(["position:absolute;top:-100vh;left:-100vw;opacity:0;visibility:hidden;"]);

var DropDown = /*#__PURE__*/React__default['default'].memo(function DropDown(_ref2) {
  var disabled = _ref2.disabled,
      header = _ref2.header,
      items = _ref2.items,
      onChange = _ref2.onChange,
      placeholder = _ref2.placeholder,
      renderLabel = _ref2.renderLabel,
      selected = _ref2.selected,
      wide = _ref2.wide,
      width = _ref2.width,
      active = _ref2.active,
      label = _ref2.label,
      props = objectWithoutProperties.objectWithoutProperties(_ref2, ["disabled", "header", "items", "onChange", "placeholder", "renderLabel", "selected", "wide", "width", "active", "label"]);

  if (active !== undefined) {
    environment.warnOnce('DropDown:active', 'The “active” prop is deprecated. Please use “selected” to pass the selected index instead.');
  }

  if (label !== undefined) {
    environment.warnOnce('DropDown:label', 'DropDown: the “label” prop is deprecated, please use “placeholder” instead.');
  }

  var theme = Theme.useTheme();

  var _useViewport = Viewport.useViewport(),
      vw = _useViewport.width;

  var _split = (width || '').split('px'),
      _split2 = slicedToArray.slicedToArray(_split, 1),
      _split2$ = _split2[0],
      widthNoPx = _split2$ === void 0 ? MIN_WIDTH : _split2$;

  var _useState5 = React.useState(0),
      _useState6 = slicedToArray.slicedToArray(_useState5, 2),
      buttonWidth = _useState6[0],
      setButtonWidth = _useState6[1];

  var _useState7 = React.useState(true),
      _useState8 = slicedToArray.slicedToArray(_useState7, 2),
      measureWidth = _useState8[0],
      setMeasureWidth = _useState8[1]; // Adjust the button width if the item widths are larger than declared width


  var _useState9 = React.useState(Math.min(widthNoPx, MIN_WIDTH)),
      _useState10 = slicedToArray.slicedToArray(_useState9, 2),
      placeholderMinWidth = _useState10[0],
      setPlaceholderMinWidth = _useState10[1];

  var popoverRefCallback = React.useCallback(function (el) {
    if (!el) {
      return;
    }

    setPlaceholderMinWidth(el.clientWidth);
    setMeasureWidth(false);
  }, []);
  React.useEffect(function () {
    setMeasureWidth(true);
  }, [vw, items]); // Update the button width every time the reference updates

  var _useButtonRef = useButtonRef(function (el) {
    setButtonWidth(el.clientWidth);
  }),
      refCallback = _useButtonRef.refCallback,
      buttonRef = _useButtonRef.buttonRef; // And every time the viewport resizes


  React.useEffect(function () {
    if (!buttonRef.current) {
      return;
    }

    setButtonWidth(buttonRef.current.clientWidth);
  }, [buttonRef, vw]);
  var selectedIndex = React.useMemo(function () {
    if (selected !== undefined) {
      return selected;
    }

    if (active !== undefined) {
      return active;
    }

    return -1;
  }, [active, selected]);

  var _useDropDown = useDropDown({
    buttonRef: buttonRef,
    displayedLabel: placeholder || label,
    items: items,
    onChange: onChange,
    selected: selected
  }),
      handleItemSelect = _useDropDown.handleItemSelect,
      close = _useDropDown.close,
      toggle = _useDropDown.toggle,
      opened = _useDropDown.opened,
      selectedLabel = _useDropDown.selectedLabel;

  var closedWithChanges = !opened && selectedIndex !== -1;
  var Label = renderLabel;
  return /*#__PURE__*/React__default['default'].createElement(index.i, {
    name: "DropDown"
  }, /*#__PURE__*/React__default['default'].createElement(_StyledButtonBase, _extends._extends_1({
    ref: refCallback,
    disabled: disabled,
    onClick: toggle,
    focusRingRadius: constants.RADIUS,
    focusRingSpacing: 1
  }, props, {
    _css: wide ? 'flex' : 'inline-flex',
    _css2: 5 * constants.GU,
    _css3: 2 * constants.GU,
    _css4: 1.5 * constants.GU,
    _css5: width || (wide ? '100%' : 'auto'),
    _css6: wide ? 'auto' : "".concat(placeholderMinWidth, "px"),
    _css7: disabled ? theme.disabled : theme.surface,
    _css8: disabled ? theme.disabledContent : theme.surfaceContent,
    _css9: disabled ? 0 : 1,
    _css10: closedWithChanges ? theme.selected : theme.border,
    _css11: textStyles.textStyle('body2'),
    _css12: disabled ? 'font-weight: 600;' : "\n              &:active {\n                background: ".concat(theme.surfacePressed, ";\n              }\n            ")
  }), /*#__PURE__*/React__default['default'].createElement(_StyledDiv, null, /*#__PURE__*/React__default['default'].createElement(Label, {
    selectedIndex: selectedIndex,
    selectedLabel: selectedLabel
  })), /*#__PURE__*/React__default['default'].createElement(_StyledIconDown, {
    size: "tiny",
    _css13: 1.5 * constants.GU,
    _css14: disabled ? theme.disabledIcon : closedWithChanges ? theme.accent : theme.surfaceIcon
  })), measureWidth && /*#__PURE__*/React__default['default'].createElement(_StyledDiv2, null, /*#__PURE__*/React__default['default'].createElement(PopoverContent, {
    refCallback: popoverRefCallback,
    buttonWidth: buttonWidth,
    header: header,
    items: items
  })), /*#__PURE__*/React__default['default'].createElement(Popover['default'], {
    onClose: close,
    opener: buttonRef.current,
    visible: opened
  }, /*#__PURE__*/React__default['default'].createElement(PopoverContent, {
    buttonWidth: buttonWidth,
    header: header,
    items: items,
    handleItemSelect: handleItemSelect,
    selectedIndex: selectedIndex
  })));
});
DropDown.propTypes = {
  disabled: index$1.propTypes.bool,
  header: index$1.propTypes.node,
  items: index$1.propTypes.arrayOf(index$1.propTypes.node).isRequired,
  onChange: index$1.propTypes.func.isRequired,
  placeholder: index$1.propTypes.node,
  renderLabel: index$1.propTypes.func,
  selected: index$1.propTypes.number,
  wide: index$1.propTypes.bool,
  width: index$1.propTypes.string,
  // deprecated
  active: index$1.propTypes.number,
  label: index$1.propTypes.string
};
DropDown.defaultProps = {
  placeholder: 'Select an item',
  renderLabel: function renderLabel(_ref3) {
    var selectedLabel = _ref3.selectedLabel;
    return selectedLabel;
  },
  wide: false
};

var _StyledDiv3 = _styled__default['default']("div").withConfig({
  displayName: "DropDown___StyledDiv3",
  componentId: "sc-17zpefi-4"
})(["min-width:", "px;color:", ";"], function (p) {
  return p._css15;
}, function (p) {
  return p._css16;
});

var _StyledDiv4 = _styled__default['default']("div").withConfig({
  displayName: "DropDown___StyledDiv4",
  componentId: "sc-17zpefi-5"
})(["padding:", "px ", "px ", "px;", ";", ";"], function (p) {
  return p._css17;
}, function (p) {
  return p._css18;
}, function (p) {
  return p._css19;
}, function (p) {
  return p._css20;
}, css.unselectable);

var _StyledUl = _styled__default['default']("ul").withConfig({
  displayName: "DropDown___StyledUl",
  componentId: "sc-17zpefi-6"
})(["margin:0;padding:0;list-style:none;width:100%;"]);

var PopoverContent = /*#__PURE__*/React__default['default'].memo(function PopoverContent(_ref4) {
  var refCallback = _ref4.refCallback,
      buttonWidth = _ref4.buttonWidth,
      header = _ref4.header,
      items = _ref4.items,
      handleItemSelect = _ref4.handleItemSelect,
      selectedIndex = _ref4.selectedIndex;
  var theme = Theme.useTheme();
  return /*#__PURE__*/React__default['default'].createElement(_StyledDiv3, {
    _css15: buttonWidth,
    _css16: theme.surfaceContentSecondary
  }, header && /*#__PURE__*/React__default['default'].createElement(_StyledDiv4, {
    _css17: 1.5 * constants.GU,
    _css18: 2 * constants.GU,
    _css19: 1.25 * constants.GU,
    _css20: textStyles.textStyle('label2')
  }, header), /*#__PURE__*/React__default['default'].createElement(_StyledUl, {
    ref: refCallback
  }, /*#__PURE__*/React__default['default'].createElement(index.i, {
    name: "DropDown:menu"
  }, items.map(function (item, index) {
    return /*#__PURE__*/React__default['default'].createElement(Item, {
      key: index,
      index: index,
      onSelect: handleItemSelect,
      theme: theme,
      item: item,
      header: header,
      length: items.length,
      selected: selectedIndex
    });
  }))));
});
PopoverContent.propTypes = {
  refCallback: index$1.propTypes.func.isRequired,
  buttonWidth: index$1.propTypes.number.isRequired,
  header: index$1.propTypes.node,
  items: index$1.propTypes.array.isRequired,
  handleItemSelect: index$1.propTypes.func.isRequired,
  selectedIndex: index$1.propTypes.number.isRequired
};
PopoverContent.defaultProps = {
  refCallback: function refCallback() {
    return null;
  },
  handleItemSelect: function handleItemSelect() {
    return null;
  },
  selectedIndex: -1
};

var _StyledButtonBase2 = _styled__default['default'](ButtonBase['default']).withConfig({
  displayName: "DropDown___StyledButtonBase2",
  componentId: "sc-17zpefi-7"
})(["width:100%;text-align:left;padding:", "px ", "px;border-radius:0;color:", ";", ";", " ", " ", " &:active{background:", ";}"], function (p) {
  return p._css21;
}, function (p) {
  return p._css22;
}, function (p) {
  return p._css23;
}, function (p) {
  return p._css24;
}, function (p) {
  return p._css25;
}, function (p) {
  return p._css26;
}, function (p) {
  return p._css27;
}, function (p) {
  return p._css28;
});

var Item = /*#__PURE__*/React__default['default'].memo(function Item(_ref5) {
  var header = _ref5.header,
      index = _ref5.index,
      item = _ref5.item,
      length = _ref5.length,
      onSelect = _ref5.onSelect,
      selected = _ref5.selected,
      theme = _ref5.theme;
  var handleClick = React.useCallback(function () {
    onSelect(index);
  }, [index, onSelect]);
  return /*#__PURE__*/React__default['default'].createElement("li", null, /*#__PURE__*/React__default['default'].createElement(_StyledButtonBase2, {
    onClick: handleClick,
    _css21: 1.25 * constants.GU,
    _css22: 2 * constants.GU,
    _css23: theme.content,
    _css24: textStyles.textStyle('body2'),
    _css25: !header && index === 0 ? "border-top-left-radius: ".concat(constants.RADIUS, "px;") : '',
    _css26: index === length - 1 ? "border-bottom-left-radius: ".concat(constants.RADIUS, "px;") : '',
    _css27: selected === index ? "\n              border-left: 2px solid ".concat(theme.accent, ";\n              background: ").concat(theme.surfaceSelected, ";\n            ") : '',
    _css28: theme.surfacePressed
  }, item));
});
Item.propTypes = {
  header: index$1.propTypes.node,
  index: index$1.propTypes.number.isRequired,
  item: index$1.propTypes.node.isRequired,
  length: index$1.propTypes.number.isRequired,
  onSelect: index$1.propTypes.func.isRequired,
  selected: index$1.propTypes.number.isRequired,
  theme: index$1.propTypes.object.isRequired
};

exports.default = DropDown;
//# sourceMappingURL=DropDown.js.map
