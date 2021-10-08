'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-023d783e.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-37353731.js');
var ButtonBase = require('./ButtonBase.js');
var AutoComplete = require('./AutoComplete.js');
var Theme = require('./Theme.js');
var constants = require('./constants.js');
var miscellaneous = require('./miscellaneous.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./objectWithoutProperties-c6d3675c.js');
require('./defineProperty-3cad0327.js');
require('./FocusVisible.js');
require('./getPrototypeOf-55c9e80c.js');
require('./keycodes.js');
require('./css.js');
require('./environment.js');
require('./text-styles.js');
require('./font.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./toConsumableArray-cc0d28a9.js');
require('./web-46d746d6.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
require('./SearchInput.js');
require('./ButtonIcon.js');
require('./Button.js');
require('./index-c33eeeef.js');
require('./Layout.js');
require('./Viewport-71f7efe6.js');
require('./_baseGetTag-6ec23aaa.js');
require('./breakpoints.js');
require('./TextInput.js');
require('./IconSearch.js');
require('./IconPropTypes-b9997416.js');
require('./IconCross.js');
require('./useArrowKeysFocus.js');
require('./useClickOutside.js');
require('./useKeyDown.js');
require('./useFocusLeave.js');
require('./springs.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _StyledButtonBase = _styled__default['default'](ButtonBase['default']).withConfig({
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
      onSelectedClick = _ref$onSelectedClick === void 0 ? miscellaneous.noop : _ref$onSelectedClick,
      placeholder = _ref.placeholder,
      renderItem = _ref.renderItem,
      required = _ref.required,
      _ref$renderSelected = _ref.renderSelected,
      renderSelected = _ref$renderSelected === void 0 ? miscellaneous.identity : _ref$renderSelected,
      selected = _ref.selected,
      _ref$selectedButtonSt = _ref.selectedButtonStyles,
      selectedButtonStyles = _ref$selectedButtonSt === void 0 ? '' : _ref$selectedButtonSt,
      value = _ref.value,
      wide = _ref.wide;
  var theme = Theme.useTheme();
  var ref = forwardedRef;
  var selectedRef = React.useRef();
  var handleSelect = React.useCallback(function (selected) {
    onSelect(selected);
    setTimeout(function () {
      selectedRef.current.focus();
    }, 0);
  }, [onSelect]);
  var handleSelectedClick = React.useCallback(function () {
    onSelectedClick();
    setTimeout(function () {
      if (ref && ref.current) {
        ref.current.select();
        ref.current.focus();
      }
    }, 0);
  }, [ref, onSelectedClick]);

  if (selected) {
    return /*#__PURE__*/React__default['default'].createElement(_StyledButtonBase, {
      onClick: handleSelectedClick,
      ref: selectedRef,
      focusRingRadius: constants.RADIUS,
      focusRingSpacing: 1,
      _css: theme.surface,
      _css2: theme.border,
      _css3: selectedButtonStyles
    }, renderSelected(selected));
  }

  return /*#__PURE__*/React__default['default'].createElement(AutoComplete['default'], {
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
  forwardedRef: index.propTypes.object,
  itemButtonStyles: index.propTypes.string,
  items: index.propTypes.array.isRequired,
  onChange: index.propTypes.func.isRequired,
  onSelect: index.propTypes.func.isRequired,
  onSelectedClick: index.propTypes.func,
  placeholder: index.propTypes.string,
  renderItem: index.propTypes.func,
  renderSelected: index.propTypes.func,
  required: index.propTypes.bool,
  selected: index.propTypes.object,
  selectedButtonStyles: index.propTypes.string,
  value: index.propTypes.string,
  wide: index.propTypes.bool
};
var AutoCompleteSelectedMemo = /*#__PURE__*/React__default['default'].memo(AutoCompleteSelected);
var AutoCompleteSelected$1 = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  return /*#__PURE__*/React__default['default'].createElement(AutoCompleteSelectedMemo, _extends._extends_1({}, props, {
    forwardedRef: ref
  }));
});

exports.default = AutoCompleteSelected$1;
//# sourceMappingURL=AutoCompleteSelected.js.map
