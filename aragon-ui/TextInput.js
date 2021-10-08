'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('./defineProperty-3cad0327.js');
var _extends = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-37353731.js');
var Theme = require('./Theme.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
var environment = require('./environment.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./getPrototypeOf-55c9e80c.js');
require('./toConsumableArray-cc0d28a9.js');
require('./font.js');
require('./miscellaneous.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty.defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _StyledInput = _styled__default['default']("input").withConfig({
  displayName: "TextInput___StyledInput",
  componentId: "gngg3n-0"
})(["width:", ";height:", "px;padding:0 ", "px;background:", ";border:1px solid ", ";color:", ";border-radius:", "px;appearance:none;", ";", " &:focus{outline:none;border-color:", ";}&:read-only{color:", ";border-color:", ";}&::placeholder{color:", ";opacity:1;}&:invalid{box-shadow:none;}"], function (_ref) {
  var wide = _ref.wide;
  return wide ? '100%' : 'auto';
}, function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, constants.RADIUS, function (p) {
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
});

var TextInput = /*#__PURE__*/React__default['default'].forwardRef(function (_ref2, ref) {
  var autofocus = _ref2.autofocus,
      multiline = _ref2.multiline,
      type = _ref2.type,
      props = objectWithoutProperties.objectWithoutProperties(_ref2, ["autofocus", "multiline", "type"]);

  var theme = Theme.useTheme();
  var handleRef = React.useCallback(function (element) {
    if (ref) {
      ref.current = element;
    }

    if (autofocus && element) {
      element.focus();
    }
  }, [autofocus, ref]);
  return /*#__PURE__*/React__default['default'].createElement(_StyledInput, _extends._extends_1({
    ref: handleRef,
    as: multiline ? 'textarea' : 'input',
    type: multiline ? undefined : type
  }, props, {
    _css: 5 * constants.GU,
    _css2: 1.5 * constants.GU,
    _css3: theme.surface,
    _css4: theme.border,
    _css5: theme.surfaceContent,
    _css6: textStyles.textStyle('body3'),
    _css7: multiline ? "\n              height: auto;\n              padding: ".concat(1 * constants.GU, "px ").concat(1.5 * constants.GU, "px;\n              resize: vertical;\n            ") : '',
    _css8: theme.selected,
    _css9: theme.hint,
    _css10: theme.border,
    _css11: theme.hint
  }));
});

var _StyledTextInput = _styled__default['default'](TextInput).withConfig({
  displayName: "TextInput___StyledTextInput",
  componentId: "gngg3n-1"
})(["", ":", "px;"], function (p) {
  return p._css13;
}, function (p) {
  return p._css14;
});

TextInput.propTypes = {
  autofocus: index.propTypes.bool,
  multiline: index.propTypes.bool,
  required: index.propTypes.bool,
  type: index.propTypes.string
};
TextInput.defaultProps = {
  autofocus: false,
  multiline: false,
  required: false,
  type: 'text'
}; // Text input wrapped to allow adornments

var _StyledDiv = _styled__default['default']("div").withConfig({
  displayName: "TextInput___StyledDiv",
  componentId: "gngg3n-2"
})(["display:inline-flex;position:relative;width:", ";"], function (p) {
  return p._css12;
});

var _StyledDiv2 = _styled__default['default']("div").withConfig({
  displayName: "TextInput___StyledDiv2",
  componentId: "gngg3n-3"
})(["position:absolute;top:0;bottom:0;height:100%;", ":", "px;display:flex;align-items:center;justify-content:center;color:", ";"], function (p) {
  return p._css15;
}, function (p) {
  return p._css16;
}, function (p) {
  return p._css17;
});

var WrapperTextInput = /*#__PURE__*/React__default['default'].forwardRef(function (_ref3, ref) {
  var adornment = _ref3.adornment,
      adornmentPosition = _ref3.adornmentPosition,
      _ref3$adornmentSettin = _ref3.adornmentSettings,
      _ref3$adornmentSettin2 = _ref3$adornmentSettin.width,
      adornmentWidth = _ref3$adornmentSettin2 === void 0 ? 36 : _ref3$adornmentSettin2,
      _ref3$adornmentSettin3 = _ref3$adornmentSettin.padding,
      adornmentPadding = _ref3$adornmentSettin3 === void 0 ? 4 : _ref3$adornmentSettin3,
      props = objectWithoutProperties.objectWithoutProperties(_ref3, ["adornment", "adornmentPosition", "adornmentSettings"]);

  var theme = Theme.useTheme();

  if (!adornment) {
    return /*#__PURE__*/React__default['default'].createElement(TextInput, _extends._extends_1({
      ref: ref
    }, props));
  }

  return /*#__PURE__*/React__default['default'].createElement(_StyledDiv, {
    _css12: props.wide ? '100%' : 'max-content'
  }, /*#__PURE__*/React__default['default'].createElement(_StyledTextInput, _extends._extends_1({
    ref: ref
  }, props, {
    _css13: adornmentPosition === 'end' ? 'padding-right' : 'padding-left',
    _css14: adornmentWidth - adornmentPadding * 2
  })), /*#__PURE__*/React__default['default'].createElement(_StyledDiv2, {
    _css15: adornmentPosition === 'end' ? 'right' : 'left',
    _css16: adornmentPadding,
    _css17: theme.surfaceContentSecondary
  }, adornment));
});
WrapperTextInput.propTypes = _objectSpread(_objectSpread({}, TextInput.propTypes), {}, {
  adornment: index.propTypes.node,
  adornmentPosition: index.propTypes.oneOf(['start', 'end']),
  adornmentSettings: index.propTypes.shape({
    width: index.propTypes.number,
    padding: index.propTypes.number
  })
});
WrapperTextInput.defaultProps = _objectSpread(_objectSpread({}, TextInput.defaultProps), {}, {
  adornment: null,
  adornmentPosition: 'start',
  adornmentSettings: {}
}); // <input type=number> (only for compat)

function TextInputNumber(props) {
  environment.warnOnce('TextInputNumber', 'TextInputNumber is deprecated. Please use TextInput instead.');
  return /*#__PURE__*/React__default['default'].createElement(TextInput, _extends._extends_1({
    type: "number"
  }, props));
} // Multiline input (textarea element)


function TextInputMultiline(props) {
  return /*#__PURE__*/React__default['default'].createElement(TextInput, _extends._extends_1({
    multiline: true
  }, props));
}

TextInputMultiline.propTypes = {
  required: index.propTypes.bool
};
TextInputMultiline.defaultProps = {
  required: false
};
WrapperTextInput.Number = TextInputNumber;
WrapperTextInput.Multiline = TextInputMultiline;

exports.default = WrapperTextInput;
//# sourceMappingURL=TextInput.js.map
