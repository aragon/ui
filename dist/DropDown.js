'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var index$1 = require('./index-70e12149.js');
var Viewport = require('./Viewport-b495052b.js');
var ButtonBase = require('./ButtonBase.js');
var Popover = require('./Popover.js');
var Theme = require('./Theme.js');
var IconDown = require('./IconDown.js');
var css = require('./css.js');
var environment = require('./environment.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./defineProperty-fdbd3c46.js');
require('./isObject-f0a96713.js');
require('./breakpoints.js');
require('./FocusVisible.js');
require('./keycodes.js');
require('./proptypes-2243b0d5.js');
require('./web-17920307.js');
require('./objectWithoutPropertiesLoose-34dfcdd4.js');
require('react-dom');
require('./RootPortal.js');
require('./Root-6628d0a4.js');
require('./components.js');
require('./miscellaneous.js');
require('./springs.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./IconPropTypes-435c57cb.js');
require('./font.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const MIN_WIDTH = 128;

function useDropDown({
  buttonRef,
  items,
  displayedLabel,
  onChange,
  placeholder,
  selected
}) {
  const [selectedLabel, setSelectedLabel] = React.useState(displayedLabel);
  const [opened, setOpened] = React.useState(false);
  const close = React.useCallback(() => {
    setOpened(false);

    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [buttonRef]);
  const toggle = React.useCallback(() => setOpened(opened => !opened), []);
  const handleItemSelect = React.useCallback(index => {
    onChange(index);
    close();
  }, [onChange, close]);
  React.useEffect(() => {
    if (selected === -1 || !items[selected]) {
      if (displayedLabel) {
        setSelectedLabel(displayedLabel);
      }

      return;
    }

    setSelectedLabel(items[selected]);
  }, [items, selected, displayedLabel]);
  return {
    handleItemSelect,
    close,
    toggle,
    opened,
    selectedLabel
  };
}

function useButtonRef(cb) {
  const buttonRef = React.useRef(null);
  const refCallback = React.useCallback(el => {
    if (el) {
      cb(el);
    }

    buttonRef.current = el;
  }, [cb]);
  return {
    buttonRef,
    refCallback
  };
}

const DropDown = /*#__PURE__*/React__default["default"].memo(function DropDown({
  disabled,
  header,
  items,
  onChange,
  placeholder,
  renderLabel,
  selected,
  wide,
  width,
  // deprecated
  active,
  label,
  // rest
  ...props
}) {
  if (active !== undefined) {
    environment.warnOnce('DropDown:active', 'The “active” prop is deprecated. Please use “selected” to pass the selected index instead.');
  }

  if (label !== undefined) {
    environment.warnOnce('DropDown:label', 'DropDown: the “label” prop is deprecated, please use “placeholder” instead.');
  }

  const theme = Theme.useTheme();
  const {
    width: vw
  } = Viewport.useViewport();
  const [widthNoPx = MIN_WIDTH] = (width || '').split('px');
  const [buttonWidth, setButtonWidth] = React.useState(0);
  const [measureWidth, setMeasureWidth] = React.useState(true); // Adjust the button width if the item widths are larger than declared width

  const [placeholderMinWidth, setPlaceholderMinWidth] = React.useState(Math.min(widthNoPx, MIN_WIDTH));
  const popoverRefCallback = React.useCallback(el => {
    if (!el) {
      return;
    }

    setPlaceholderMinWidth(el.clientWidth);
    setMeasureWidth(false);
  }, []);
  React.useEffect(() => {
    setMeasureWidth(true);
  }, [vw, items]); // Update the button width every time the reference updates

  const {
    refCallback,
    buttonRef
  } = useButtonRef(el => {
    setButtonWidth(el.clientWidth);
  }); // And every time the viewport resizes

  React.useEffect(() => {
    if (!buttonRef.current) {
      return;
    }

    setButtonWidth(buttonRef.current.clientWidth);
  }, [buttonRef, vw]);
  const selectedIndex = React.useMemo(() => {
    if (selected !== undefined) {
      return selected;
    }

    if (active !== undefined) {
      return active;
    }

    return -1;
  }, [active, selected]);
  const {
    handleItemSelect,
    close,
    toggle,
    opened,
    selectedLabel
  } = useDropDown({
    buttonRef,
    displayedLabel: placeholder || label,
    items,
    onChange,
    selected
  });
  const closedWithChanges = !opened && selectedIndex !== -1;
  const Label = renderLabel;
  return /*#__PURE__*/React__default["default"].createElement(index$1.i, {
    name: "DropDown"
  }, /*#__PURE__*/React__default["default"].createElement(_StyledButtonBase, _extends._extends({
    ref: refCallback,
    disabled: disabled,
    onClick: toggle,
    focusRingRadius: constants.RADIUS,
    focusRingSpacing: 1
  }, props, {
    $_css: wide ? 'flex' : 'inline-flex',
    $_css2: 5 * constants.GU,
    $_css3: 2 * constants.GU,
    $_css4: 1.5 * constants.GU,
    $_css5: width || (wide ? '100%' : 'auto'),
    $_css6: wide ? 'auto' : `${placeholderMinWidth}px`,
    $_css7: disabled ? theme.disabled : theme.surface,
    $_css8: disabled ? theme.disabledContent : theme.surfaceContent,
    $_css9: disabled ? 0 : 1,
    $_css10: closedWithChanges ? theme.selected : theme.border,
    $_css11: textStyles.textStyle('body2'),
    $_css12: disabled ? 'font-weight: 600;' : `
              &:active {
                background: ${theme.surfacePressed};
              }
            `
  }), /*#__PURE__*/React__default["default"].createElement(_StyledDiv, null, /*#__PURE__*/React__default["default"].createElement(Label, {
    selectedIndex: selectedIndex,
    selectedLabel: selectedLabel
  })), /*#__PURE__*/React__default["default"].createElement(_StyledIconDown, {
    size: "tiny",
    $_css13: 1.5 * constants.GU,
    $_css14: disabled ? theme.disabledIcon : closedWithChanges ? theme.accent : theme.surfaceIcon
  })), measureWidth && /*#__PURE__*/React__default["default"].createElement(_StyledDiv2, null, /*#__PURE__*/React__default["default"].createElement(PopoverContent, {
    refCallback: popoverRefCallback,
    buttonWidth: buttonWidth,
    header: header,
    items: items
  })), /*#__PURE__*/React__default["default"].createElement(Popover["default"], {
    onClose: close,
    opener: buttonRef.current,
    visible: opened
  }, /*#__PURE__*/React__default["default"].createElement(PopoverContent, {
    buttonWidth: buttonWidth,
    header: header,
    items: items,
    handleItemSelect: handleItemSelect,
    selectedIndex: selectedIndex
  })));
});
DropDown.propTypes = {
  disabled: index.PropTypes.bool,
  header: index.PropTypes.node,
  items: index.PropTypes.arrayOf(index.PropTypes.node).isRequired,
  onChange: index.PropTypes.func.isRequired,
  placeholder: index.PropTypes.node,
  renderLabel: index.PropTypes.func,
  selected: index.PropTypes.number,
  wide: index.PropTypes.bool,
  width: index.PropTypes.string,
  // deprecated
  active: index.PropTypes.number,
  label: index.PropTypes.string
};
DropDown.defaultProps = {
  placeholder: 'Select an item',
  renderLabel: ({
    selectedLabel
  }) => selectedLabel,
  wide: false
};
const PopoverContent = /*#__PURE__*/React__default["default"].memo(function PopoverContent({
  refCallback,
  buttonWidth,
  header,
  items,
  handleItemSelect,
  selectedIndex
}) {
  const theme = Theme.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(_StyledDiv3, {
    $_css15: buttonWidth,
    $_css16: theme.surfaceContentSecondary
  }, header && /*#__PURE__*/React__default["default"].createElement(_StyledDiv4, {
    $_css17: 1.5 * constants.GU,
    $_css18: 2 * constants.GU,
    $_css19: 1.25 * constants.GU,
    $_css20: textStyles.textStyle('label2')
  }, header), /*#__PURE__*/React__default["default"].createElement(_StyledUl, {
    ref: refCallback
  }, /*#__PURE__*/React__default["default"].createElement(index$1.i, {
    name: "DropDown:menu"
  }, items.map((item, index) => {
    return /*#__PURE__*/React__default["default"].createElement(Item, {
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
  refCallback: index.PropTypes.func.isRequired,
  buttonWidth: index.PropTypes.number.isRequired,
  header: index.PropTypes.node,
  items: index.PropTypes.array.isRequired,
  handleItemSelect: index.PropTypes.func.isRequired,
  selectedIndex: index.PropTypes.number.isRequired
};
PopoverContent.defaultProps = {
  refCallback: () => null,
  handleItemSelect: () => null,
  selectedIndex: -1
};
const Item = /*#__PURE__*/React__default["default"].memo(function Item({
  header,
  index,
  item,
  length,
  onSelect,
  selected,
  theme
}) {
  const handleClick = React.useCallback(() => {
    onSelect(index);
  }, [index, onSelect]);
  return /*#__PURE__*/React__default["default"].createElement("li", null, /*#__PURE__*/React__default["default"].createElement(_StyledButtonBase2, {
    onClick: handleClick,
    $_css21: 1.25 * constants.GU,
    $_css22: 2 * constants.GU,
    $_css23: theme.content,
    $_css24: textStyles.textStyle('body2'),
    $_css25: !header && index === 0 ? `border-top-left-radius: ${constants.RADIUS}px;` : '',
    $_css26: index === length - 1 ? `border-bottom-left-radius: ${constants.RADIUS}px;` : '',
    $_css27: selected === index ? `
              border-left: 2px solid ${theme.accent};
              background: ${theme.surfaceSelected};
            ` : '',
    $_css28: theme.surfacePressed
  }, item));
});
Item.propTypes = {
  header: index.PropTypes.node,
  index: index.PropTypes.number.isRequired,
  item: index.PropTypes.node.isRequired,
  length: index.PropTypes.number.isRequired,
  onSelect: index.PropTypes.func.isRequired,
  selected: index.PropTypes.number.isRequired,
  theme: index.PropTypes.object.isRequired
};

var _StyledButtonBase = _styled__default["default"](ButtonBase["default"]).withConfig({
  displayName: "DropDown___StyledButtonBase",
  componentId: "sc-17zpefi-0"
})(["display:", ";justify-content:space-between;align-items:center;height:", "px;padding-left:", "px;padding-right:", "px;width:", ";min-width:", ";background:", ";color:", ";border:", "px solid ", ";", ";", ""], p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5, p => p.$_css6, p => p.$_css7, p => p.$_css8, p => p.$_css9, p => p.$_css10, p => p.$_css11, p => p.$_css12);

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "DropDown___StyledDiv",
  componentId: "sc-17zpefi-1"
})(["overflow:hidden;"]);

var _StyledIconDown = _styled__default["default"](IconDown["default"]).withConfig({
  displayName: "DropDown___StyledIconDown",
  componentId: "sc-17zpefi-2"
})(["margin-left:", "px;color:", ";"], p => p.$_css13, p => p.$_css14);

var _StyledDiv2 = _styled__default["default"]("div").withConfig({
  displayName: "DropDown___StyledDiv2",
  componentId: "sc-17zpefi-3"
})(["position:absolute;top:-100vh;left:-100vw;opacity:0;visibility:hidden;"]);

var _StyledDiv3 = _styled__default["default"]("div").withConfig({
  displayName: "DropDown___StyledDiv3",
  componentId: "sc-17zpefi-4"
})(["min-width:", "px;color:", ";"], p => p.$_css15, p => p.$_css16);

var _StyledDiv4 = _styled__default["default"]("div").withConfig({
  displayName: "DropDown___StyledDiv4",
  componentId: "sc-17zpefi-5"
})(["padding:", "px ", "px ", "px;", ";", ";"], p => p.$_css17, p => p.$_css18, p => p.$_css19, p => p.$_css20, css.unselectable);

var _StyledUl = _styled__default["default"]("ul").withConfig({
  displayName: "DropDown___StyledUl",
  componentId: "sc-17zpefi-6"
})(["margin:0;padding:0;list-style:none;width:100%;"]);

var _StyledButtonBase2 = _styled__default["default"](ButtonBase["default"]).withConfig({
  displayName: "DropDown___StyledButtonBase2",
  componentId: "sc-17zpefi-7"
})(["width:100%;text-align:left;padding:", "px ", "px;border-radius:0;color:", ";", ";", " ", " ", " &:active{background:", ";}"], p => p.$_css21, p => p.$_css22, p => p.$_css23, p => p.$_css24, p => p.$_css25, p => p.$_css26, p => p.$_css27, p => p.$_css28);

exports["default"] = DropDown;
//# sourceMappingURL=DropDown.js.map
