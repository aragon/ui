import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React, { useRef, useCallback } from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';
import AutoComplete from './AutoComplete.js';
import { useTheme } from '../../theme/Theme2.js';
import { RADIUS } from '../../style/constants.js';
import { noop, identity } from '../../utils/miscellaneous.js';

var _StyledButtonBase = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "AutoCompleteSelected___StyledButtonBase",
  componentId: "sc-15vq9oz-0"
})(["height:40px;width:100%;text-align:left;background:", ";cursor:pointer;border:1px solid ", ";padding:4px 8px;", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

function AutoCompleteSelected(_ref) {
  var forwardedRef = _ref.forwardedRef,
      itemButtonStyles = _ref.itemButtonStyles,
      items = _ref.items,
      onChange = _ref.onChange,
      onSelect = _ref.onSelect,
      _ref$onSelectedClick = _ref.onSelectedClick,
      onSelectedClick = _ref$onSelectedClick === void 0 ? noop : _ref$onSelectedClick,
      placeholder = _ref.placeholder,
      renderItem = _ref.renderItem,
      required = _ref.required,
      _ref$renderSelected = _ref.renderSelected,
      renderSelected = _ref$renderSelected === void 0 ? identity : _ref$renderSelected,
      selected = _ref.selected,
      _ref$selectedButtonSt = _ref.selectedButtonStyles,
      selectedButtonStyles = _ref$selectedButtonSt === void 0 ? '' : _ref$selectedButtonSt,
      value = _ref.value,
      wide = _ref.wide;
  var theme = useTheme();
  var ref = forwardedRef;
  var selectedRef = useRef();
  var handleSelect = useCallback(function (selected) {
    onSelect(selected);
    setTimeout(function () {
      selectedRef.current.focus();
    }, 0);
  }, [onSelect]);
  var handleSelectedClick = useCallback(function () {
    onSelectedClick();
    setTimeout(function () {
      if (ref && ref.current) {
        ref.current.select();
        ref.current.focus();
      }
    }, 0);
  }, [ref, onSelectedClick]);

  if (selected) {
    return /*#__PURE__*/React.createElement(_StyledButtonBase, {
      onClick: handleSelectedClick,
      ref: selectedRef,
      focusRingRadius: RADIUS,
      focusRingSpacing: 1,
      _css: theme.surface,
      _css2: theme.border,
      _css3: selectedButtonStyles
    }, renderSelected(selected));
  }

  return /*#__PURE__*/React.createElement(AutoComplete, {
    itemButtonStyles: itemButtonStyles,
    items: items,
    onChange: onChange,
    onSelect: handleSelect,
    placeholder: placeholder,
    ref: ref,
    renderItem: renderItem,
    required: required,
    value: value,
    wide: wide
  });
}

AutoCompleteSelected.propTypes = {
  forwardedRef: propTypes.object,
  itemButtonStyles: propTypes.string,
  items: propTypes.array.isRequired,
  onChange: propTypes.func.isRequired,
  onSelect: propTypes.func.isRequired,
  onSelectedClick: propTypes.func,
  placeholder: propTypes.string,
  renderItem: propTypes.func,
  renderSelected: propTypes.func,
  required: propTypes.bool,
  selected: propTypes.object,
  selectedButtonStyles: propTypes.string,
  value: propTypes.string,
  wide: propTypes.bool
};
var AutoCompleteSelectedMemo = /*#__PURE__*/React.memo(AutoCompleteSelected);
var AutoCompleteSelected$1 = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(AutoCompleteSelectedMemo, _extends_1({}, props, {
    forwardedRef: ref
  }));
});

export default AutoCompleteSelected$1;
//# sourceMappingURL=AutoCompleteSelected.js.map
