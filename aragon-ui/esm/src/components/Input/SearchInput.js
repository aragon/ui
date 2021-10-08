import defineProperty from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import _styled from 'styled-components';
import React, { useRef, useCallback } from 'react';
import ButtonIcon from '../Button/ButtonIcon.js';
import WrapperTextInput from './TextInput.js';
import IconSearch from '../../icons/components/IconSearch.js';
import { useTheme } from '../../theme/Theme2.js';
import IconCross from '../../icons/components/IconCross.js';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var EMPTY = '';

var _StyledIconSearch = _styled(IconSearch).withConfig({
  displayName: "SearchInput___StyledIconSearch",
  componentId: "sc-13u679s-0"
})(["color:", ";"], function (p) {
  return p._css;
});

var _StyledButtonIcon = _styled(ButtonIcon).withConfig({
  displayName: "SearchInput___StyledButtonIcon",
  componentId: "sc-13u679s-1"
})(["color:", ";"], function (p) {
  return p._css2;
});

var SearchInput = /*#__PURE__*/React.forwardRef(function (_ref2, ref) {
  var onChange = _ref2.onChange,
      props = objectWithoutProperties(_ref2, ["onChange"]);

  var theme = useTheme();
  var fallbackRef = useRef();

  var _ref = ref || fallbackRef;

  var handleChange = useCallback(function (ev) {
    var value = ev.currentTarget.value;
    onChange(value, {
      inputChangeEvent: ev
    });
  }, [onChange]);
  var handleClearClick = useCallback(function (ev) {
    onChange(EMPTY, {
      clearClickEvent: ev
    });

    if (_ref.current) {
      _ref.current.focus();
    }
  }, [onChange, _ref]);
  return /*#__PURE__*/React.createElement(WrapperTextInput, _extends_1({
    ref: _ref,
    adornment: (props.value || '') === EMPTY ? /*#__PURE__*/React.createElement(_StyledIconSearch, {
      _css: theme.surfaceIcon
    }) : /*#__PURE__*/React.createElement(_StyledButtonIcon, {
      onClick: handleClearClick,
      label: "Clear search input",
      _css2: theme.surfaceIcon
    }, /*#__PURE__*/React.createElement(IconCross, null)),
    adornmentPosition: "end",
    onChange: handleChange
  }, props));
});
SearchInput.propTypes = _objectSpread({}, WrapperTextInput.propTypes);

export default SearchInput;
//# sourceMappingURL=SearchInput.js.map
