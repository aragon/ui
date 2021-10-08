'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('./defineProperty-3cad0327.js');
var _extends = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var _styled = require('styled-components');
var React = require('react');
var ButtonIcon = require('./ButtonIcon.js');
var TextInput = require('./TextInput.js');
var IconSearch = require('./IconSearch.js');
var Theme = require('./Theme.js');
var IconCross = require('./IconCross.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./index-37353731.js');
require('./Button.js');
require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./index-c33eeeef.js');
require('./Layout.js');
require('./Viewport-71f7efe6.js');
require('./getPrototypeOf-55c9e80c.js');
require('./_baseGetTag-6ec23aaa.js');
require('./breakpoints.js');
require('./constants.js');
require('./css.js');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./keycodes.js');
require('./environment.js');
require('./miscellaneous.js');
require('./text-styles.js');
require('./font.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./toConsumableArray-cc0d28a9.js');
require('./IconPropTypes-b9997416.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty.defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var EMPTY = '';

var _StyledIconSearch = _styled__default['default'](IconSearch['default']).withConfig({
  displayName: "SearchInput___StyledIconSearch",
  componentId: "sc-13u679s-0"
})(["color:", ";"], function (p) {
  return p._css;
});

var _StyledButtonIcon = _styled__default['default'](ButtonIcon['default']).withConfig({
  displayName: "SearchInput___StyledButtonIcon",
  componentId: "sc-13u679s-1"
})(["color:", ";"], function (p) {
  return p._css2;
});

var SearchInput = /*#__PURE__*/React__default['default'].forwardRef(function (_ref2, ref) {
  var onChange = _ref2.onChange,
      props = objectWithoutProperties.objectWithoutProperties(_ref2, ["onChange"]);

  var theme = Theme.useTheme();
  var fallbackRef = React.useRef();

  var _ref = ref || fallbackRef;

  var handleChange = React.useCallback(function (ev) {
    var value = ev.currentTarget.value;
    onChange(value, {
      inputChangeEvent: ev
    });
  }, [onChange]);
  var handleClearClick = React.useCallback(function (ev) {
    onChange(EMPTY, {
      clearClickEvent: ev
    });

    if (_ref.current) {
      _ref.current.focus();
    }
  }, [onChange, _ref]);
  return /*#__PURE__*/React__default['default'].createElement(TextInput['default'], _extends._extends_1({
    ref: _ref,
    adornment: (props.value || '') === EMPTY ? /*#__PURE__*/React__default['default'].createElement(_StyledIconSearch, {
      _css: theme.surfaceIcon
    }) : /*#__PURE__*/React__default['default'].createElement(_StyledButtonIcon, {
      onClick: handleClearClick,
      label: "Clear search input",
      _css2: theme.surfaceIcon
    }, /*#__PURE__*/React__default['default'].createElement(IconCross['default'], null)),
    adornmentPosition: "end",
    onChange: handleChange
  }, props));
});
SearchInput.propTypes = _objectSpread({}, TextInput['default'].propTypes);

exports.default = SearchInput;
//# sourceMappingURL=SearchInput.js.map
