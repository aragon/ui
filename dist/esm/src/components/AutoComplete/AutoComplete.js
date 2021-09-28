import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { animated as extendedAnimated, Transition } from '../../../node_modules/react-spring/web.js';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';
import SearchInput from '../Input/SearchInput.js';
import { noop, identity } from '../../utils/miscellaneous.js';
import { useArrowKeysFocus } from '../../hooks/useArrowKeysFocus.js';
import { useClickOutside } from '../../hooks/useClickOutside.js';
import { useKeyDown } from '../../hooks/useKeyDown.js';
import { useTheme } from '../../theme/Theme2.js';
import { useFocusLeave } from '../../hooks/useFocusLeave.js';
import { KEY_ESC } from '../../utils/keycodes.js';
import { springs } from '../../style/springs.js';
import { unselectable } from '../../utils/css.js';

function AutoComplete({
  forwardedRef,
  itemButtonStyles = '',
  items = [],
  onSelect = noop,
  onChange = noop,
  placeholder,
  renderItem = identity,
  required,
  value,
  wide
}) {
  const ref = forwardedRef;
  const uniqueItems = new Set(items);
  const [opened, setOpened] = useState(true);
  const wrapRef = useRef();
  const refs = useRef([]);
  const handleClose = useCallback(() => setOpened(false), []);
  const handleFocus = useCallback(() => setOpened(true), []);
  const handleSelect = useCallback(item => {
    onSelect(item);
    setOpened(false);
  }, [onSelect]);
  const handleInputChange = useCallback((...params) => {
    setOpened(true);
    onChange(...params);
  }, [onChange]);
  const {
    handleFocusLeave
  } = useFocusLeave(handleClose, wrapRef);
  const {
    highlightedIndex,
    setHighlightedIndex
  } = useArrowKeysFocus(refs);
  useClickOutside(handleClose, wrapRef);
  useKeyDown(KEY_ESC, handleClose);
  useEffect(() => {
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
  }, show => show && (({
    scale,
    opacity
  }) => /*#__PURE__*/React.createElement(Items, {
    style: {
      opacity,
      transform: scale.interpolate(t => `scale3d(${t},${t},1)`)
    }
  }, Array.from(uniqueItems).map((item, index) => /*#__PURE__*/React.createElement(Item, {
    key: item.key || item,
    ref: node => refs.current[index] = node,
    index: index,
    item: item,
    itemButtonStyles: itemButtonStyles,
    onHighlight: setHighlightedIndex,
    onSelect: handleSelect,
    selected: index === highlightedIndex
  }, renderItem(item, value)))))
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

const Item = /*#__PURE__*/React.forwardRef(function Item({
  children,
  index,
  item,
  itemButtonStyles,
  onHighlight,
  onSelect,
  selected
}, ref) {
  const theme = useTheme();
  const handleClick = useCallback(event => {
    event.preventDefault();
    onSelect(item);
  }, [item, onSelect]);
  const handleFocusOrMouseOver = useCallback(() => {
    onHighlight(index);
  }, [index, onHighlight]);
  return /*#__PURE__*/React.createElement(_StyledLi, {
    role: "option",
    $_css: unselectable()
  }, /*#__PURE__*/React.createElement(_StyledButtonBase, {
    ref: ref,
    onClick: handleClick,
    onFocus: handleFocusOrMouseOver,
    onMouseOver: handleFocusOrMouseOver,
    $_css2: selected ? `
                outline: 2px solid ${theme.accent};
                background: ${theme.surfaceHighlight};
                border-left: 3px solid ${theme.accent};
              ` : '',
    $_css3: itemButtonStyles
  }, children));
});
/* eslint-enable react/prop-types */

/* eslint-disable react/prop-types */

const Items = function Items(props) {
  const theme = useTheme();
  return /*#__PURE__*/React.createElement(_StyledAnimatedUl, _extends({
    role: "listbox"
  }, props, {
    $_css4: theme.surfaceContent,
    $_css5: theme.surface,
    $_css6: theme.border
  }));
};
/* eslint-enable react/prop-types */


const AutoCompleteMemo = /*#__PURE__*/React.memo(AutoComplete);
var AutoComplete$1 = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(AutoCompleteMemo, _extends({}, props, {
  forwardedRef: ref
})));

var _StyledDiv = _styled("div").withConfig({
  displayName: "AutoComplete___StyledDiv",
  componentId: "sc-bpnxyo-0"
})(["position:relative"]);

var _StyledLi = _styled("li").withConfig({
  displayName: "AutoComplete___StyledLi",
  componentId: "sc-bpnxyo-1"
})(["overflow:hidden;cursor:pointer;", ";"], p => p.$_css);

var _StyledButtonBase = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "AutoComplete___StyledButtonBase",
  componentId: "sc-bpnxyo-2"
})(["text-align:left;padding:4px 8px;width:100%;border-radius:0;border-left:3px solid transparent;cursor:pointer;", ";", ";"], p => p.$_css2, p => p.$_css3);

var _StyledAnimatedUl = _styled(extendedAnimated.ul).withConfig({
  displayName: "AutoComplete___StyledAnimatedUl",
  componentId: "sc-bpnxyo-3"
})(["position:absolute;z-index:2;top:100%;width:100%;padding:8px 0;color:", ";background:", ";border:1px solid ", ";box-shadow:0 4px 4px 0 rgba(0,0,0,0.06);border-radius:3px;padding:0;margin:0;list-style:none;& > li:first-child{border-top-left-radius:3px;border-top-right-radius:3px;}& > li:last-child{border-bottom-left-radius:3px;border-bottom-right-radius:3px;}"], p => p.$_css4, p => p.$_css5, p => p.$_css6);

export { AutoComplete$1 as default };
//# sourceMappingURL=AutoComplete.js.map
