import { _ as _slicedToArray } from './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import React, { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import { P as PropTypes } from './index-097535f1.js';
import './defineProperty-a0480c32.js';
import './toConsumableArray-127424c2.js';
import _styled from 'styled-components';
import './getPrototypeOf-b96da1e1.js';
import './color.js';
import './components.js';
import './contains-component.js';
import { unselectable } from './css.js';
import './dayjs.min-e57fb69a.js';
import './date.js';
import './miscellaneous.js';
import { warnOnce } from './environment.js';
import './font.js';
import './math-e6d0e93a.js';
import './characters.js';
import './format.js';
import './keycodes.js';
import './url.js';
import './web3.js';
import { RADIUS, GU } from './constants.js';
import './breakpoints.js';
import './springs.js';
import { textStyle } from './text-styles.js';
import './theme-dark.js';
import './theme-light.js';
import { useTheme } from './Theme.js';
import { _ as _extends } from './extends-db4f0c26.js';
import { _ as _objectWithoutProperties } from './objectWithoutProperties-234758e1.js';
import { i } from './index-422d37c0.js';
import './isObject-3c6ec07e.js';
import { u as useViewport } from './Viewport-cc7debfb.js';
import './FocusVisible.js';
import ButtonBase from './ButtonBase.js';
import './IconPropTypes-aab7337d.js';
import './IconAddUser.js';
import './IconAlert.js';
import './IconAlignCenter.js';
import './IconAlignJustify.js';
import './IconAlignLeft.js';
import './IconAlignRight.js';
import './IconAragon.js';
import './IconArrowDown.js';
import './IconArrowLeft.js';
import './IconArrowRight.js';
import './IconArrowUp.js';
import './IconAtSign.js';
import './IconBlock.js';
import './IconBookmark.js';
import './IconCalendar.js';
import './IconCanvas.js';
import './IconCaution.js';
import './IconCenter.js';
import './IconChart.js';
import './IconChat.js';
import './IconCheck.js';
import './IconChip.js';
import './IconCircleCheck.js';
import './IconCircleMinus.js';
import './IconCirclePlus.js';
import './IconClock.js';
import './IconCloudDownload.js';
import './IconCloudUpload.js';
import './IconCoin.js';
import './IconConfiguration.js';
import './IconConnect.js';
import './IconConnection.js';
import './IconConsole.js';
import './IconCopy.js';
import './IconCross.js';
import './IconDashedSquare.js';
import IconDown from './IconDown.js';
import './IconDownload.js';
import './IconEdit.js';
import './IconEllipsis.js';
import './IconEnter.js';
import './IconEthereum.js';
import './IconExternal.js';
import './IconFile.js';
import './IconFilter.js';
import './IconFlag.js';
import './IconFolder.js';
import './IconGraph2.js';
import './IconGraph.js';
import './IconGrid.js';
import './IconGroup.js';
import './IconHash.js';
import './IconHeart.js';
import './IconHide.js';
import './IconHome.js';
import './IconImage.js';
import './IconInfo.js';
import './IconLabel.js';
import './IconLayers.js';
import './IconLeft.js';
import './IconLink.js';
import './IconLocation.js';
import './IconLock.js';
import './IconMail.js';
import './IconMaximize.js';
import './IconMenu.js';
import './IconMinimize.js';
import './IconMinus.js';
import './IconMove.js';
import './IconNoPicture.js';
import './IconPicture.js';
import './IconPlus.js';
import './IconPower.js';
import './IconPrint.js';
import './IconProhibited.js';
import './IconQuestion.js';
import './IconRefresh.js';
import './IconRemoveUser.js';
import './IconRight.js';
import './IconRotateLeft.js';
import './IconRotateRight.js';
import './IconSearch.js';
import './IconSettings.js';
import './IconShare.js';
import './IconSquareMinus.js';
import './IconSquarePlus.js';
import './IconSquare.js';
import './IconStarFilled.js';
import './IconStar.js';
import './IconSwap.js';
import './IconTarget.js';
import './IconToken.js';
import './IconTrash.js';
import './IconUnlock.js';
import './IconUp.js';
import './IconUpload.js';
import './IconUser.js';
import './IconView.js';
import './IconVote.js';
import './IconWallet.js';
import './IconWarning.js';
import './IconWorld.js';
import './IconWrite.js';
import './IconZoomIn.js';
import './IconZoomOut.js';
import './objectWithoutPropertiesLoose-9606ad13.js';
import 'react-dom';
import './web-a351a0a1.js';
import './getDisplayName-d5fc7707.js';
import './index-edfeada6.js';
import './index-f754c2df.js';
import './RootPortal.js';
import './proptypes-c8a77d05.js';
import Popover from './Popover.js';
import './observe.js';
import './index-f0d64c59.js';
import './providers.js';

var MIN_WIDTH = 128;

function useDropDown(_ref) {
  var buttonRef = _ref.buttonRef,
      items = _ref.items,
      displayedLabel = _ref.displayedLabel,
      onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      selected = _ref.selected;

  var _useState = useState(displayedLabel),
      _useState2 = _slicedToArray(_useState, 2),
      selectedLabel = _useState2[0],
      setSelectedLabel = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      opened = _useState4[0],
      setOpened = _useState4[1];

  var close = useCallback(function () {
    setOpened(false);

    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [buttonRef]);
  var toggle = useCallback(function () {
    return setOpened(function (opened) {
      return !opened;
    });
  }, []);
  var handleItemSelect = useCallback(function (index) {
    onChange(index);
    close();
  }, [onChange, close]);
  useEffect(function () {
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
  var buttonRef = useRef(null);
  var refCallback = useCallback(function (el) {
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

var _StyledButtonBase = _styled(ButtonBase).withConfig({
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

var _StyledDiv = _styled("div").withConfig({
  displayName: "DropDown___StyledDiv",
  componentId: "sc-17zpefi-1"
})(["overflow:hidden;"]);

var _StyledIconDown = _styled(IconDown).withConfig({
  displayName: "DropDown___StyledIconDown",
  componentId: "sc-17zpefi-2"
})(["margin-left:", "px;color:", ";"], function (p) {
  return p._css13;
}, function (p) {
  return p._css14;
});

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "DropDown___StyledDiv2",
  componentId: "sc-17zpefi-3"
})(["position:absolute;top:-100vh;left:-100vw;opacity:0;visibility:hidden;"]);

var DropDown = React.memo(function DropDown(_ref2) {
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
      props = _objectWithoutProperties(_ref2, ["disabled", "header", "items", "onChange", "placeholder", "renderLabel", "selected", "wide", "width", "active", "label"]);

  if (active !== undefined) {
    warnOnce('DropDown:active', 'The “active” prop is deprecated. Please use “selected” to pass the selected index instead.');
  }

  if (label !== undefined) {
    warnOnce('DropDown:label', 'DropDown: the “label” prop is deprecated, please use “placeholder” instead.');
  }

  var theme = useTheme();

  var _useViewport = useViewport(),
      vw = _useViewport.width;

  var _split = (width || '').split('px'),
      _split2 = _slicedToArray(_split, 1),
      _split2$ = _split2[0],
      widthNoPx = _split2$ === void 0 ? MIN_WIDTH : _split2$;

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      buttonWidth = _useState6[0],
      setButtonWidth = _useState6[1];

  var _useState7 = useState(true),
      _useState8 = _slicedToArray(_useState7, 2),
      measureWidth = _useState8[0],
      setMeasureWidth = _useState8[1]; // Adjust the button width if the item widths are larger than declared width


  var _useState9 = useState(Math.min(widthNoPx, MIN_WIDTH)),
      _useState10 = _slicedToArray(_useState9, 2),
      placeholderMinWidth = _useState10[0],
      setPlaceholderMinWidth = _useState10[1];

  var popoverRefCallback = useCallback(function (el) {
    if (!el) {
      return;
    }

    setPlaceholderMinWidth(el.clientWidth);
    setMeasureWidth(false);
  }, []);
  useEffect(function () {
    setMeasureWidth(true);
  }, [vw, items]); // Update the button width every time the reference updates

  var _useButtonRef = useButtonRef(function (el) {
    setButtonWidth(el.clientWidth);
  }),
      refCallback = _useButtonRef.refCallback,
      buttonRef = _useButtonRef.buttonRef; // And every time the viewport resizes


  useEffect(function () {
    if (!buttonRef.current) {
      return;
    }

    setButtonWidth(buttonRef.current.clientWidth);
  }, [buttonRef, vw]);
  var selectedIndex = useMemo(function () {
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
  return /*#__PURE__*/React.createElement(i, {
    name: "DropDown"
  }, /*#__PURE__*/React.createElement(_StyledButtonBase, _extends({
    ref: refCallback,
    disabled: disabled,
    onClick: toggle,
    focusRingRadius: RADIUS,
    focusRingSpacing: 1
  }, props, {
    _css: wide ? 'flex' : 'inline-flex',
    _css2: 5 * GU,
    _css3: 2 * GU,
    _css4: 1.5 * GU,
    _css5: width || (wide ? '100%' : 'auto'),
    _css6: wide ? 'auto' : "".concat(placeholderMinWidth, "px"),
    _css7: disabled ? theme.disabled : theme.surface,
    _css8: disabled ? theme.disabledContent : theme.surfaceContent,
    _css9: disabled ? 0 : 1,
    _css10: closedWithChanges ? theme.selected : theme.border,
    _css11: textStyle('body2'),
    _css12: disabled ? 'font-weight: 600;' : "\n              &:active {\n                background: ".concat(theme.surfacePressed, ";\n              }\n            ")
  }), /*#__PURE__*/React.createElement(_StyledDiv, null, /*#__PURE__*/React.createElement(Label, {
    selectedIndex: selectedIndex,
    selectedLabel: selectedLabel
  })), /*#__PURE__*/React.createElement(_StyledIconDown, {
    size: "tiny",
    _css13: 1.5 * GU,
    _css14: disabled ? theme.disabledIcon : closedWithChanges ? theme.accent : theme.surfaceIcon
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
  renderLabel: function renderLabel(_ref3) {
    var selectedLabel = _ref3.selectedLabel;
    return selectedLabel;
  },
  wide: false
};

var _StyledDiv3 = _styled("div").withConfig({
  displayName: "DropDown___StyledDiv3",
  componentId: "sc-17zpefi-4"
})(["min-width:", "px;color:", ";"], function (p) {
  return p._css15;
}, function (p) {
  return p._css16;
});

var _StyledDiv4 = _styled("div").withConfig({
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
}, unselectable);

var _StyledUl = _styled("ul").withConfig({
  displayName: "DropDown___StyledUl",
  componentId: "sc-17zpefi-6"
})(["margin:0;padding:0;list-style:none;width:100%;"]);

var PopoverContent = React.memo(function PopoverContent(_ref4) {
  var refCallback = _ref4.refCallback,
      buttonWidth = _ref4.buttonWidth,
      header = _ref4.header,
      items = _ref4.items,
      handleItemSelect = _ref4.handleItemSelect,
      selectedIndex = _ref4.selectedIndex;
  var theme = useTheme();
  return /*#__PURE__*/React.createElement(_StyledDiv3, {
    _css15: buttonWidth,
    _css16: theme.surfaceContentSecondary
  }, header && /*#__PURE__*/React.createElement(_StyledDiv4, {
    _css17: 1.5 * GU,
    _css18: 2 * GU,
    _css19: 1.25 * GU,
    _css20: textStyle('label2')
  }, header), /*#__PURE__*/React.createElement(_StyledUl, {
    ref: refCallback
  }, /*#__PURE__*/React.createElement(i, {
    name: "DropDown:menu"
  }, items.map(function (item, index) {
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
  refCallback: function refCallback() {
    return null;
  },
  handleItemSelect: function handleItemSelect() {
    return null;
  },
  selectedIndex: -1
};

var _StyledButtonBase2 = _styled(ButtonBase).withConfig({
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

var Item = React.memo(function Item(_ref5) {
  var header = _ref5.header,
      index = _ref5.index,
      item = _ref5.item,
      length = _ref5.length,
      onSelect = _ref5.onSelect,
      selected = _ref5.selected,
      theme = _ref5.theme;
  var handleClick = useCallback(function () {
    onSelect(index);
  }, [index, onSelect]);
  return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_StyledButtonBase2, {
    onClick: handleClick,
    _css21: 1.25 * GU,
    _css22: 2 * GU,
    _css23: theme.content,
    _css24: textStyle('body2'),
    _css25: !header && index === 0 ? "border-top-left-radius: ".concat(RADIUS, "px;") : '',
    _css26: index === length - 1 ? "border-bottom-left-radius: ".concat(RADIUS, "px;") : '',
    _css27: selected === index ? "\n              border-left: 2px solid ".concat(theme.accent, ";\n              background: ").concat(theme.surfaceSelected, ";\n            ") : '',
    _css28: theme.surfacePressed
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

export default DropDown;
//# sourceMappingURL=DropDown.js.map
