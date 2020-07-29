'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-0711941d.js');
require('./unsupportedIterableToArray-68db1d3b.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
var index = require('./index-b0606964.js');
var defineProperty = require('./defineProperty-0921a47c.js');
require('./toConsumableArray-d8a4a2c3.js');
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
require('./getPrototypeOf-2a661a20.js');
require('./color.js');
require('./components.js');
require('./contains-component.js');
require('./css.js');
require('./dayjs.min-e07657bf.js');
require('./date.js');
require('./miscellaneous.js');
var environment = require('./environment.js');
require('./font.js');
require('./math-f4029164.js');
require('./characters.js');
require('./format.js');
require('./keycodes.js');
require('./url.js');
require('./web3.js');
var constants = require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
var textStyles = require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');
var _extends = require('./extends-40571110.js');
var objectWithoutProperties = require('./objectWithoutProperties-35db8ab0.js');

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty._defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _StyledInput = _styled__default("input").withConfig({
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

var TextInput = React__default.forwardRef(function (_ref2, ref) {
  var autofocus = _ref2.autofocus,
      multiline = _ref2.multiline,
      type = _ref2.type,
      props = objectWithoutProperties._objectWithoutProperties(_ref2, ["autofocus", "multiline", "type"]);

  var theme = Theme.useTheme();
  var handleRef = React.useCallback(function (element) {
    if (ref) {
      ref.current = element;
    }

    if (autofocus && element) {
      element.focus();
    }
  }, [autofocus, ref]);
  return /*#__PURE__*/React__default.createElement(_StyledInput, _extends._extends({
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

var _StyledTextInput = _styled__default(TextInput).withConfig({
  displayName: "TextInput___StyledTextInput",
  componentId: "gngg3n-1"
})(["", ":", "px;"], function (p) {
  return p._css13;
}, function (p) {
  return p._css14;
});

TextInput.propTypes = {
  autofocus: index.PropTypes.bool,
  multiline: index.PropTypes.bool,
  required: index.PropTypes.bool,
  type: index.PropTypes.string
};
TextInput.defaultProps = {
  autofocus: false,
  multiline: false,
  required: false,
  type: 'text'
}; // Text input wrapped to allow adornments

var _StyledDiv = _styled__default("div").withConfig({
  displayName: "TextInput___StyledDiv",
  componentId: "gngg3n-2"
})(["display:inline-flex;position:relative;width:", ";"], function (p) {
  return p._css12;
});

var _StyledDiv2 = _styled__default("div").withConfig({
  displayName: "TextInput___StyledDiv2",
  componentId: "gngg3n-3"
})(["position:absolute;top:0;bottom:0;height:100%;", ":", "px;display:flex;align-items:center;justify-content:center;color:", ";"], function (p) {
  return p._css15;
}, function (p) {
  return p._css16;
}, function (p) {
  return p._css17;
});

var WrapperTextInput = React__default.forwardRef(function (_ref3, ref) {
  var adornment = _ref3.adornment,
      adornmentPosition = _ref3.adornmentPosition,
      _ref3$adornmentSettin = _ref3.adornmentSettings,
      _ref3$adornmentSettin2 = _ref3$adornmentSettin.width,
      adornmentWidth = _ref3$adornmentSettin2 === void 0 ? 36 : _ref3$adornmentSettin2,
      _ref3$adornmentSettin3 = _ref3$adornmentSettin.padding,
      adornmentPadding = _ref3$adornmentSettin3 === void 0 ? 4 : _ref3$adornmentSettin3,
      props = objectWithoutProperties._objectWithoutProperties(_ref3, ["adornment", "adornmentPosition", "adornmentSettings"]);

  var theme = Theme.useTheme();

  if (!adornment) {
    return /*#__PURE__*/React__default.createElement(TextInput, _extends._extends({
      ref: ref
    }, props));
  }

  return /*#__PURE__*/React__default.createElement(_StyledDiv, {
    _css12: props.wide ? '100%' : 'max-content'
  }, /*#__PURE__*/React__default.createElement(_StyledTextInput, _extends._extends({
    ref: ref
  }, props, {
    _css13: adornmentPosition === 'end' ? 'padding-right' : 'padding-left',
    _css14: adornmentWidth - adornmentPadding * 2
  })), /*#__PURE__*/React__default.createElement(_StyledDiv2, {
    _css15: adornmentPosition === 'end' ? 'right' : 'left',
    _css16: adornmentPadding,
    _css17: theme.surfaceContentSecondary
  }, adornment));
});
WrapperTextInput.propTypes = _objectSpread({}, TextInput.propTypes, {
  adornment: index.PropTypes.node,
  adornmentPosition: index.PropTypes.oneOf(['start', 'end']),
  adornmentSettings: index.PropTypes.shape({
    width: index.PropTypes.number,
    padding: index.PropTypes.number
  })
});
WrapperTextInput.defaultProps = _objectSpread({}, TextInput.defaultProps, {
  adornment: null,
  adornmentPosition: 'start',
  adornmentSettings: {}
}); // <input type=number> (only for compat)

function TextInputNumber(props) {
  environment.warnOnce('TextInputNumber', 'TextInputNumber is deprecated. Please use TextInput instead.');
  return /*#__PURE__*/React__default.createElement(TextInput, _extends._extends({
    type: "number"
  }, props));
} // Multiline input (textarea element)


function TextInputMultiline(props) {
  return /*#__PURE__*/React__default.createElement(TextInput, _extends._extends({
    multiline: true
  }, props));
}

TextInputMultiline.propTypes = {
  required: index.PropTypes.bool
};
TextInputMultiline.defaultProps = {
  required: false
};
WrapperTextInput.Number = TextInputNumber;
WrapperTextInput.Multiline = TextInputMultiline;

exports.default = WrapperTextInput;
//# sourceMappingURL=TextInput.js.map
