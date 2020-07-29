import { _ as _slicedToArray } from './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import React, { useCallback, useState, useRef, useEffect } from 'react';
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
import { noop, identity } from './miscellaneous.js';
import './environment.js';
import './font.js';
import './math-e6d0e93a.js';
import './characters.js';
import './format.js';
import { KEY_ESC } from './keycodes.js';
import './url.js';
import './web3.js';
import './constants.js';
import './breakpoints.js';
import { springs } from './springs.js';
import './text-styles.js';
import './theme-dark.js';
import './theme-light.js';
import { useTheme } from './Theme.js';
import { _ as _extends } from './extends-db4f0c26.js';
import './objectWithoutProperties-234758e1.js';
import './index-422d37c0.js';
import './isObject-3c6ec07e.js';
import './Viewport-cc7debfb.js';
import './Layout.js';
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
import './IconDown.js';
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
import { e as extendedAnimated, T as Transition } from './web-a351a0a1.js';
import './Button.js';
import './ButtonIcon.js';
import './TextInput.js';
import { useArrowKeysFocus } from './useArrowKeysFocus.js';
import { useClickOutside } from './useClickOutside.js';
import './useFocusEnter.js';
import { useFocusLeave } from './useFocusLeave.js';
import './useImageExists.js';
import { useKeyDown } from './useKeyDown.js';
import './useOnBlur.js';
import SearchInput from './SearchInput.js';

var _StyledDiv = _styled("div").withConfig({
  displayName: "AutoComplete___StyledDiv",
  componentId: "bpnxyo-0"
})(["position:relative"]);

function AutoComplete(_ref) {
  var forwardedRef = _ref.forwardedRef,
      _ref$itemButtonStyles = _ref.itemButtonStyles,
      itemButtonStyles = _ref$itemButtonStyles === void 0 ? '' : _ref$itemButtonStyles,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      _ref$onSelect = _ref.onSelect,
      onSelect = _ref$onSelect === void 0 ? noop : _ref$onSelect,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? noop : _ref$onChange,
      placeholder = _ref.placeholder,
      _ref$renderItem = _ref.renderItem,
      renderItem = _ref$renderItem === void 0 ? identity : _ref$renderItem,
      required = _ref.required,
      value = _ref.value,
      wide = _ref.wide;
  var ref = forwardedRef;
  var uniqueItems = new Set(items);

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      opened = _useState2[0],
      setOpened = _useState2[1];

  var wrapRef = useRef();
  var refs = useRef([]);
  var handleClose = useCallback(function () {
    return setOpened(false);
  }, []);
  var handleFocus = useCallback(function () {
    return setOpened(true);
  }, []);
  var handleSelect = useCallback(function (item) {
    onSelect(item);
    setOpened(false);
  }, [onSelect]);
  var handleInputChange = useCallback(function () {
    setOpened(true);
    onChange.apply(void 0, arguments);
  }, [onChange]);

  var _useFocusLeave = useFocusLeave(handleClose, wrapRef),
      handleFocusLeave = _useFocusLeave.handleFocusLeave;

  var _useArrowKeysFocus = useArrowKeysFocus(refs),
      highlightedIndex = _useArrowKeysFocus.highlightedIndex,
      setHighlightedIndex = _useArrowKeysFocus.setHighlightedIndex;

  useClickOutside(handleClose, wrapRef);
  useKeyDown(KEY_ESC, handleClose);
  useEffect(function () {
    setHighlightedIndex(-1);
  }, [opened, items, value, setHighlightedIndex]);
  return /*#__PURE__*/React.createElement(_StyledDiv, {
    ref: wrapRef,
    onBlur: handleFocusLeave
  }, /*#__PURE__*/React.createElement(SearchInput, {
    ref: ref,
    wide: wide,
    placeholder: placeholder,
    required: required,
    onChange: handleInputChange,
    onFocus: handleFocus,
    value: value
  }), /*#__PURE__*/React.createElement(Transition, {
    config: springs.swift,
    items: opened && items.length > 0,
    from: {
      scale: 0.98,
      opacity: 0
    },
    enter: {
      scale: 1,
      opacity: 1
    },
    leave: {
      scale: 1,
      opacity: 0
    },
    native: true
  }, function (show) {
    return show &&
    /* eslint-disable react/prop-types */
    function (_ref2) {
      var scale = _ref2.scale,
          opacity = _ref2.opacity;
      return /*#__PURE__*/React.createElement(Items, {
        style: {
          opacity: opacity,
          transform: scale.interpolate(function (t) {
            return "scale3d(".concat(t, ",").concat(t, ",1)");
          })
        }
      }, Array.from(uniqueItems).map(function (item, index) {
        return /*#__PURE__*/React.createElement(Item, {
          key: item.key || item,
          ref: function ref(node) {
            return refs.current[index] = node;
          },
          index: index,
          item: item,
          itemButtonStyles: itemButtonStyles,
          onHighlight: setHighlightedIndex,
          onSelect: handleSelect,
          selected: index === highlightedIndex
        }, renderItem(item, value));
      }));
    };
  }
  /* eslint-enable react/prop-types */
  ));
}

AutoComplete.propTypes = {
  forwardedRef: PropTypes.object,
  itemButtonStyles: PropTypes.string,
  items: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  renderItem: PropTypes.func,
  required: PropTypes.bool,
  value: PropTypes.string,
  wide: PropTypes.bool
};
/* eslint-disable react/prop-types */

var _StyledLi = _styled("li").withConfig({
  displayName: "AutoComplete___StyledLi",
  componentId: "bpnxyo-1"
})(["overflow:hidden;cursor:pointer;", ";"], function (p) {
  return p._css;
});

var _StyledButtonBase = _styled(ButtonBase).withConfig({
  displayName: "AutoComplete___StyledButtonBase",
  componentId: "bpnxyo-2"
})(["text-align:left;padding:4px 8px;width:100%;border-radius:0;border-left:3px solid transparent;cursor:pointer;", ";", ";"], function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

var Item = React.forwardRef(function Item(_ref3, ref) {
  var children = _ref3.children,
      index = _ref3.index,
      item = _ref3.item,
      itemButtonStyles = _ref3.itemButtonStyles,
      onHighlight = _ref3.onHighlight,
      onSelect = _ref3.onSelect,
      selected = _ref3.selected;
  var theme = useTheme();
  var handleClick = useCallback(function (event) {
    event.preventDefault();
    onSelect(item);
  }, [item, onSelect]);
  var handleFocusOrMouseOver = useCallback(function () {
    onHighlight(index);
  }, [index, onHighlight]);
  return /*#__PURE__*/React.createElement(_StyledLi, {
    role: "option",
    _css: unselectable()
  }, /*#__PURE__*/React.createElement(_StyledButtonBase, {
    ref: ref,
    onClick: handleClick,
    onFocus: handleFocusOrMouseOver,
    onMouseOver: handleFocusOrMouseOver,
    _css2: selected ? "\n                outline: 2px solid ".concat(theme.accent, ";\n                background: ").concat(theme.surfaceHighlight, ";\n                border-left: 3px solid ").concat(theme.accent, ";\n              ") : '',
    _css3: itemButtonStyles
  }, children));
});
/* eslint-enable react/prop-types */

/* eslint-disable react/prop-types */

var _StyledAnimatedUl = _styled(extendedAnimated.ul).withConfig({
  displayName: "AutoComplete___StyledAnimatedUl",
  componentId: "bpnxyo-3"
})(["position:absolute;z-index:2;top:100%;width:100%;padding:8px 0;color:", ";background:", ";border:1px solid ", ";box-shadow:0 4px 4px 0 rgba(0,0,0,0.06);border-radius:3px;padding:0;margin:0;list-style:none;& > li:first-child{border-top-left-radius:3px;border-top-right-radius:3px;}& > li:last-child{border-bottom-left-radius:3px;border-bottom-right-radius:3px;}"], function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

var Items = function Items(props) {
  var theme = useTheme();
  return /*#__PURE__*/React.createElement(_StyledAnimatedUl, _extends({
    role: "listbox"
  }, props, {
    _css4: theme.surfaceContent,
    _css5: theme.surface,
    _css6: theme.border
  }));
};
/* eslint-enable react/prop-types */


var AutoCompleteMemo = React.memo(AutoComplete);
var AutoComplete$1 = React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(AutoCompleteMemo, _extends({}, props, {
    forwardedRef: ref
  }));
});

export default AutoComplete$1;
//# sourceMappingURL=AutoComplete.js.map
