import slicedToArray$1 from '../../../node_modules/@babel/runtime/helpers/slicedToArray.js';
import React$1, { useState, useRef, useCallback, useEffect } from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import _styled$1 from 'styled-components';
import { unselectable } from '../../utils/css.js';
import { noop, identity } from '../../utils/miscellaneous.js';
import '../../utils/environment.js';
import { KEY_ESC } from '../../utils/keycodes.js';
import { springs as springs$1 } from '../../style/springs.js';
import { useTheme } from '../../theme/Theme2.js';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';
import { animated as extendedAnimated, Transition } from '../../../node_modules/react-spring/web.js';
import { useArrowKeysFocus as useArrowKeysFocus$1 } from '../../hooks/useArrowKeysFocus.js';
import { useClickOutside as useClickOutside$1 } from '../../hooks/useClickOutside.js';
import { useFocusLeave as useFocusLeave$1 } from '../../hooks/useFocusLeave.js';
import '../../hooks/useImageExists.js';
import { useKeyDown as useKeyDown$1 } from '../../hooks/useKeyDown.js';
import SearchInput$1 from '../Input/SearchInput.js';

var _StyledDiv = _styled$1("div").withConfig({
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
      _useState2 = slicedToArray$1(_useState, 2),
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

  var _useFocusLeave = useFocusLeave$1(handleClose, wrapRef),
      handleFocusLeave = _useFocusLeave.handleFocusLeave;

  var _useArrowKeysFocus = useArrowKeysFocus$1(refs),
      highlightedIndex = _useArrowKeysFocus.highlightedIndex,
      setHighlightedIndex = _useArrowKeysFocus.setHighlightedIndex;

  useClickOutside$1(handleClose, wrapRef);
  useKeyDown$1(KEY_ESC, handleClose);
  useEffect(function () {
    setHighlightedIndex(-1);
  }, [opened, items, value, setHighlightedIndex]);
  return /*#__PURE__*/React$1.createElement(_StyledDiv, {
    ref: wrapRef,
    onBlur: handleFocusLeave
  }, /*#__PURE__*/React$1.createElement(SearchInput$1, {
    ref: ref,
    wide: wide,
    placeholder: placeholder,
    required: required,
    onChange: handleInputChange,
    onFocus: handleFocus,
    value: value
  }), /*#__PURE__*/React$1.createElement(Transition, {
    config: springs$1.swift,
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
      return /*#__PURE__*/React$1.createElement(Items, {
        style: {
          opacity: opacity,
          transform: scale.interpolate(function (t) {
            return "scale3d(".concat(t, ",").concat(t, ",1)");
          })
        }
      }, Array.from(uniqueItems).map(function (item, index) {
        return /*#__PURE__*/React$1.createElement(Item, {
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
  forwardedRef: propTypes.object,
  itemButtonStyles: propTypes.string,
  items: propTypes.array.isRequired,
  onSelect: propTypes.func.isRequired,
  onChange: propTypes.func.isRequired,
  placeholder: propTypes.string,
  renderItem: propTypes.func,
  required: propTypes.bool,
  value: propTypes.string,
  wide: propTypes.bool
};
/* eslint-disable react/prop-types */

var _StyledLi = _styled$1("li").withConfig({
  displayName: "AutoComplete___StyledLi",
  componentId: "bpnxyo-1"
})(["overflow:hidden;cursor:pointer;", ";"], function (p) {
  return p._css;
});

var _StyledButtonBase = _styled$1(ButtonBaseWithFocus).withConfig({
  displayName: "AutoComplete___StyledButtonBase",
  componentId: "bpnxyo-2"
})(["text-align:left;padding:4px 8px;width:100%;border-radius:0;border-left:3px solid transparent;cursor:pointer;", ";", ";"], function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

var Item = /*#__PURE__*/React$1.forwardRef(function Item(_ref3, ref) {
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
  return /*#__PURE__*/React$1.createElement(_StyledLi, {
    role: "option",
    _css: unselectable()
  }, /*#__PURE__*/React$1.createElement(_StyledButtonBase, {
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

var _StyledAnimatedUl = _styled$1(extendedAnimated.ul).withConfig({
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
  return /*#__PURE__*/React$1.createElement(_StyledAnimatedUl, _extends_1({
    role: "listbox"
  }, props, {
    _css4: theme.surfaceContent,
    _css5: theme.surface,
    _css6: theme.border
  }));
};
/* eslint-enable react/prop-types */


var AutoCompleteMemo = /*#__PURE__*/React$1.memo(AutoComplete);
var AutoComplete$1 = /*#__PURE__*/React$1.forwardRef(function (props, ref) {
  return /*#__PURE__*/React$1.createElement(AutoCompleteMemo, _extends_1({}, props, {
    forwardedRef: ref
  }));
});

export default AutoComplete$1;
//# sourceMappingURL=AutoComplete.js.map
