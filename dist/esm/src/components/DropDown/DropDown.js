import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React, { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { Inside as i } from '../../../node_modules/use-inside/dist/index.js';
import { useViewport } from '../../providers/Viewport/Viewport.js';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';
import Popover from '../Popover/Popover.js';
import { useTheme } from '../../theme/Theme2.js';
import IconDown from '../../icons/components/IconDown.js';
import { unselectable } from '../../utils/css.js';
import { warnOnce } from '../../utils/environment.js';
import { RADIUS, GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';

const MIN_WIDTH = 128;

function useDropDown({
  buttonRef,
  items,
  displayedLabel,
  onChange,
  placeholder,
  selected
}) {
  const [selectedLabel, setSelectedLabel] = useState(displayedLabel);
  const [opened, setOpened] = useState(false);
  const close = useCallback(() => {
    setOpened(false);

    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [buttonRef]);
  const toggle = useCallback(() => setOpened(opened => !opened), []);
  const handleItemSelect = useCallback(index => {
    onChange(index);
    close();
  }, [onChange, close]);
  useEffect(() => {
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
  const buttonRef = useRef(null);
  const refCallback = useCallback(el => {
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

const DropDown = /*#__PURE__*/React.memo(function DropDown({
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
    warnOnce('DropDown:active', 'The “active” prop is deprecated. Please use “selected” to pass the selected index instead.');
  }

  if (label !== undefined) {
    warnOnce('DropDown:label', 'DropDown: the “label” prop is deprecated, please use “placeholder” instead.');
  }

  const theme = useTheme();
  const {
    width: vw
  } = useViewport();
  const [widthNoPx = MIN_WIDTH] = (width || '').split('px');
  const [buttonWidth, setButtonWidth] = useState(0);
  const [measureWidth, setMeasureWidth] = useState(true); // Adjust the button width if the item widths are larger than declared width

  const [placeholderMinWidth, setPlaceholderMinWidth] = useState(Math.min(widthNoPx, MIN_WIDTH));
  const popoverRefCallback = useCallback(el => {
    if (!el) {
      return;
    }

    setPlaceholderMinWidth(el.clientWidth);
    setMeasureWidth(false);
  }, []);
  useEffect(() => {
    setMeasureWidth(true);
  }, [vw, items]); // Update the button width every time the reference updates

  const {
    refCallback,
    buttonRef
  } = useButtonRef(el => {
    setButtonWidth(el.clientWidth);
  }); // And every time the viewport resizes

  useEffect(() => {
    if (!buttonRef.current) {
      return;
    }

    setButtonWidth(buttonRef.current.clientWidth);
  }, [buttonRef, vw]);
  const selectedIndex = useMemo(() => {
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
  return /*#__PURE__*/React.createElement(i, {
    name: "DropDown"
  }, /*#__PURE__*/React.createElement(_StyledButtonBase, _extends({
    ref: refCallback,
    disabled: disabled,
    onClick: toggle,
    focusRingRadius: RADIUS,
    focusRingSpacing: 1
  }, props, {
    $_css: wide ? 'flex' : 'inline-flex',
    $_css2: 5 * GU,
    $_css3: 2 * GU,
    $_css4: 1.5 * GU,
    $_css5: width || (wide ? '100%' : 'auto'),
    $_css6: wide ? 'auto' : `${placeholderMinWidth}px`,
    $_css7: disabled ? theme.disabled : theme.surface,
    $_css8: disabled ? theme.disabledContent : theme.surfaceContent,
    $_css9: disabled ? 0 : 1,
    $_css10: closedWithChanges ? theme.selected : theme.border,
    $_css11: textStyle('body2'),
    $_css12: disabled ? 'font-weight: 600;' : `
              &:active {
                background: ${theme.surfacePressed};
              }
            `
  }), /*#__PURE__*/React.createElement(_StyledDiv, null, /*#__PURE__*/React.createElement(Label, {
    selectedIndex: selectedIndex,
    selectedLabel: selectedLabel
  })), /*#__PURE__*/React.createElement(_StyledIconDown, {
    size: "tiny",
    $_css13: 1.5 * GU,
    $_css14: disabled ? theme.disabledIcon : closedWithChanges ? theme.accent : theme.surfaceIcon
  })), measureWidth && /*#__PURE__*/React.createElement(_StyledDiv2, null, /*#__PURE__*/React.createElement(PopoverContent, {
    refCallback: popoverRefCallback,
    buttonWidth: buttonWidth,
    header: header,
    items: items
  })), /*#__PURE__*/React.createElement(Popover, {
    onClose: close,
    opener: buttonRef.current,
    visible: opened
  }, /*#__PURE__*/React.createElement(PopoverContent, {
    buttonWidth: buttonWidth,
    header: header,
    items: items,
    handleItemSelect: handleItemSelect,
    selectedIndex: selectedIndex
  })));
});
DropDown.propTypes = {
  disabled: PropTypes.bool,
  header: PropTypes.node,
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.node,
  renderLabel: PropTypes.func,
  selected: PropTypes.number,
  wide: PropTypes.bool,
  width: PropTypes.string,
  // deprecated
  active: PropTypes.number,
  label: PropTypes.string
};
DropDown.defaultProps = {
  placeholder: 'Select an item',
  renderLabel: ({
    selectedLabel
  }) => selectedLabel,
  wide: false
};
const PopoverContent = /*#__PURE__*/React.memo(function PopoverContent({
  refCallback,
  buttonWidth,
  header,
  items,
  handleItemSelect,
  selectedIndex
}) {
  const theme = useTheme();
  return /*#__PURE__*/React.createElement(_StyledDiv3, {
    $_css15: buttonWidth,
    $_css16: theme.surfaceContentSecondary
  }, header && /*#__PURE__*/React.createElement(_StyledDiv4, {
    $_css17: 1.5 * GU,
    $_css18: 2 * GU,
    $_css19: 1.25 * GU,
    $_css20: textStyle('label2')
  }, header), /*#__PURE__*/React.createElement(_StyledUl, {
    ref: refCallback
  }, /*#__PURE__*/React.createElement(i, {
    name: "DropDown:menu"
  }, items.map((item, index) => {
    return /*#__PURE__*/React.createElement(Item, {
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
  refCallback: PropTypes.func.isRequired,
  buttonWidth: PropTypes.number.isRequired,
  header: PropTypes.node,
  items: PropTypes.array.isRequired,
  handleItemSelect: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number.isRequired
};
PopoverContent.defaultProps = {
  refCallback: () => null,
  handleItemSelect: () => null,
  selectedIndex: -1
};
const Item = /*#__PURE__*/React.memo(function Item({
  header,
  index,
  item,
  length,
  onSelect,
  selected,
  theme
}) {
  const handleClick = useCallback(() => {
    onSelect(index);
  }, [index, onSelect]);
  return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_StyledButtonBase2, {
    onClick: handleClick,
    $_css21: 1.25 * GU,
    $_css22: 2 * GU,
    $_css23: theme.content,
    $_css24: textStyle('body2'),
    $_css25: !header && index === 0 ? `border-top-left-radius: ${RADIUS}px;` : '',
    $_css26: index === length - 1 ? `border-bottom-left-radius: ${RADIUS}px;` : '',
    $_css27: selected === index ? `
              border-left: 2px solid ${theme.accent};
              background: ${theme.surfaceSelected};
            ` : '',
    $_css28: theme.surfacePressed
  }, item));
});
Item.propTypes = {
  header: PropTypes.node,
  index: PropTypes.number.isRequired,
  item: PropTypes.node.isRequired,
  length: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired
};

var _StyledButtonBase = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "DropDown___StyledButtonBase",
  componentId: "sc-17zpefi-0"
})(["display:", ";justify-content:space-between;align-items:center;height:", "px;padding-left:", "px;padding-right:", "px;width:", ";min-width:", ";background:", ";color:", ";border:", "px solid ", ";", ";", ""], p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5, p => p.$_css6, p => p.$_css7, p => p.$_css8, p => p.$_css9, p => p.$_css10, p => p.$_css11, p => p.$_css12);

var _StyledDiv = _styled("div").withConfig({
  displayName: "DropDown___StyledDiv",
  componentId: "sc-17zpefi-1"
})(["overflow:hidden;"]);

var _StyledIconDown = _styled(IconDown).withConfig({
  displayName: "DropDown___StyledIconDown",
  componentId: "sc-17zpefi-2"
})(["margin-left:", "px;color:", ";"], p => p.$_css13, p => p.$_css14);

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "DropDown___StyledDiv2",
  componentId: "sc-17zpefi-3"
})(["position:absolute;top:-100vh;left:-100vw;opacity:0;visibility:hidden;"]);

var _StyledDiv3 = _styled("div").withConfig({
  displayName: "DropDown___StyledDiv3",
  componentId: "sc-17zpefi-4"
})(["min-width:", "px;color:", ";"], p => p.$_css15, p => p.$_css16);

var _StyledDiv4 = _styled("div").withConfig({
  displayName: "DropDown___StyledDiv4",
  componentId: "sc-17zpefi-5"
})(["padding:", "px ", "px ", "px;", ";", ";"], p => p.$_css17, p => p.$_css18, p => p.$_css19, p => p.$_css20, unselectable);

var _StyledUl = _styled("ul").withConfig({
  displayName: "DropDown___StyledUl",
  componentId: "sc-17zpefi-6"
})(["margin:0;padding:0;list-style:none;width:100%;"]);

var _StyledButtonBase2 = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "DropDown___StyledButtonBase2",
  componentId: "sc-17zpefi-7"
})(["width:100%;text-align:left;padding:", "px ", "px;border-radius:0;color:", ";", ";", " ", " ", " &:active{background:", ";}"], p => p.$_css21, p => p.$_css22, p => p.$_css23, p => p.$_css24, p => p.$_css25, p => p.$_css26, p => p.$_css27, p => p.$_css28);

export { DropDown as default };
//# sourceMappingURL=DropDown.js.map
