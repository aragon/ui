import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React, { useRef, useCallback } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';
import AutoComplete from './AutoComplete.js';
import { useTheme } from '../../theme/Theme2.js';
import { noop, identity } from '../../utils/miscellaneous.js';
import { RADIUS } from '../../style/constants.js';

function AutoCompleteSelected({
  forwardedRef,
  itemButtonStyles,
  items,
  onChange,
  onSelect,
  onSelectedClick = noop,
  placeholder,
  renderItem,
  required,
  renderSelected = identity,
  selected,
  selectedButtonStyles = '',
  value,
  wide
}) {
  const theme = useTheme();
  const ref = forwardedRef;
  const selectedRef = useRef();
  const handleSelect = useCallback(selected => {
    onSelect(selected);
    setTimeout(() => {
      selectedRef.current.focus();
    }, 0);
  }, [onSelect]);
  const handleSelectedClick = useCallback(() => {
    onSelectedClick();
    setTimeout(() => {
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
      $_css: theme.surface,
      $_css2: theme.border,
      $_css3: selectedButtonStyles
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
  forwardedRef: PropTypes.object,
  itemButtonStyles: PropTypes.string,
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  onSelectedClick: PropTypes.func,
  placeholder: PropTypes.string,
  renderItem: PropTypes.func,
  renderSelected: PropTypes.func,
  required: PropTypes.bool,
  selected: PropTypes.object,
  selectedButtonStyles: PropTypes.string,
  value: PropTypes.string,
  wide: PropTypes.bool
};
const AutoCompleteSelectedMemo = /*#__PURE__*/React.memo(AutoCompleteSelected);
var AutoCompleteSelected$1 = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(AutoCompleteSelectedMemo, _extends({}, props, {
  forwardedRef: ref
})));

var _StyledButtonBase = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "AutoCompleteSelected___StyledButtonBase",
  componentId: "sc-15vq9oz-0"
})(["height:40px;width:100%;text-align:left;background:", ";cursor:pointer;border:1px solid ", ";padding:4px 8px;", ";"], p => p.$_css, p => p.$_css2, p => p.$_css3);

export { AutoCompleteSelected$1 as default };
//# sourceMappingURL=AutoCompleteSelected.js.map
