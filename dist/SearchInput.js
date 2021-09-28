'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var _styled = require('styled-components');
var React = require('react');
var ButtonIcon = require('./ButtonIcon.js');
var TextInput = require('./TextInput.js');
var IconSearch = require('./IconSearch.js');
var Theme = require('./Theme.js');
var IconCross = require('./IconCross.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./index-19b0c963.js');
require('./Button.js');
require('./index-70e12149.js');
require('./Layout.js');
require('./Viewport-b495052b.js');
require('./defineProperty-fdbd3c46.js');
require('./isObject-f0a96713.js');
require('./breakpoints.js');
require('./constants.js');
require('./css.js');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./keycodes.js');
require('./text-styles.js');
require('./font.js');
require('./environment.js');
require('./miscellaneous.js');
require('./IconPropTypes-435c57cb.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const EMPTY = '';
const SearchInput = /*#__PURE__*/React__default["default"].forwardRef(({
  onChange,
  ...props
}, ref) => {
  const theme = Theme.useTheme();
  const fallbackRef = React.useRef();

  const _ref = ref || fallbackRef;

  const handleChange = React.useCallback(ev => {
    const {
      value
    } = ev.currentTarget;
    onChange(value, {
      inputChangeEvent: ev
    });
  }, [onChange]);
  const handleClearClick = React.useCallback(ev => {
    onChange(EMPTY, {
      clearClickEvent: ev
    });

    if (_ref.current) {
      _ref.current.focus();
    }
  }, [onChange, _ref]);
  return /*#__PURE__*/React__default["default"].createElement(TextInput["default"], _extends._extends({
    ref: _ref,
    adornment: (props.value || '') === EMPTY ? /*#__PURE__*/React__default["default"].createElement(_StyledIconSearch, {
      $_css: theme.surfaceIcon
    }) : /*#__PURE__*/React__default["default"].createElement(_StyledButtonIcon, {
      onClick: handleClearClick,
      label: "Clear search input",
      $_css2: theme.surfaceIcon
    }, /*#__PURE__*/React__default["default"].createElement(IconCross["default"], null)),
    adornmentPosition: "end",
    onChange: handleChange
  }, props));
});
SearchInput.propTypes = { ...TextInput["default"].propTypes
};

var _StyledIconSearch = _styled__default["default"](IconSearch["default"]).withConfig({
  displayName: "SearchInput___StyledIconSearch",
  componentId: "sc-13u679s-0"
})(["color:", ";"], p => p.$_css);

var _StyledButtonIcon = _styled__default["default"](ButtonIcon["default"]).withConfig({
  displayName: "SearchInput___StyledButtonIcon",
  componentId: "sc-13u679s-1"
})(["color:", ";"], p => p.$_css2);

exports["default"] = SearchInput;
//# sourceMappingURL=SearchInput.js.map
