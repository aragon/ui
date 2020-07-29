import './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import React, { useCallback } from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import { P as PropTypes } from './index-097535f1.js';
import { _ as _defineProperty } from './defineProperty-a0480c32.js';
import './toConsumableArray-127424c2.js';
import _styled from 'styled-components';
import './getPrototypeOf-b96da1e1.js';
import './color.js';
import './components.js';
import './contains-component.js';
import './css.js';
import './dayjs.min-e57fb69a.js';
import './date.js';
import './miscellaneous.js';
import { warnOnce } from './environment.js';
import './font.js';
import './math-e6d0e93a.js';
import './characters.js';
import './format.js';
import './keycodes.js';
import './url.js';
import './web3.js';
import { RADIUS, GU } from './constants.js';
import './breakpoints.js';
import './springs.js';
import { textStyle } from './text-styles.js';
import './theme-dark.js';
import './theme-light.js';
import { useTheme } from './Theme.js';
import { _ as _extends } from './extends-db4f0c26.js';
import { _ as _objectWithoutProperties } from './objectWithoutProperties-234758e1.js';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _StyledInput = _styled("input").withConfig({
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
}, RADIUS, function (p) {
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

var TextInput = React.forwardRef(function (_ref2, ref) {
  var autofocus = _ref2.autofocus,
      multiline = _ref2.multiline,
      type = _ref2.type,
      props = _objectWithoutProperties(_ref2, ["autofocus", "multiline", "type"]);

  var theme = useTheme();
  var handleRef = useCallback(function (element) {
    if (ref) {
      ref.current = element;
    }

    if (autofocus && element) {
      element.focus();
    }
  }, [autofocus, ref]);
  return /*#__PURE__*/React.createElement(_StyledInput, _extends({
    ref: handleRef,
    as: multiline ? 'textarea' : 'input',
    type: multiline ? undefined : type
  }, props, {
    _css: 5 * GU,
    _css2: 1.5 * GU,
    _css3: theme.surface,
    _css4: theme.border,
    _css5: theme.surfaceContent,
    _css6: textStyle('body3'),
    _css7: multiline ? "\n              height: auto;\n              padding: ".concat(1 * GU, "px ").concat(1.5 * GU, "px;\n              resize: vertical;\n            ") : '',
    _css8: theme.selected,
    _css9: theme.hint,
    _css10: theme.border,
    _css11: theme.hint
  }));
});

var _StyledTextInput = _styled(TextInput).withConfig({
  displayName: "TextInput___StyledTextInput",
  componentId: "gngg3n-1"
})(["", ":", "px;"], function (p) {
  return p._css13;
}, function (p) {
  return p._css14;
});

TextInput.propTypes = {
  autofocus: PropTypes.bool,
  multiline: PropTypes.bool,
  required: PropTypes.bool,
  type: PropTypes.string
};
TextInput.defaultProps = {
  autofocus: false,
  multiline: false,
  required: false,
  type: 'text'
}; // Text input wrapped to allow adornments

var _StyledDiv = _styled("div").withConfig({
  displayName: "TextInput___StyledDiv",
  componentId: "gngg3n-2"
})(["display:inline-flex;position:relative;width:", ";"], function (p) {
  return p._css12;
});

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "TextInput___StyledDiv2",
  componentId: "gngg3n-3"
})(["position:absolute;top:0;bottom:0;height:100%;", ":", "px;display:flex;align-items:center;justify-content:center;color:", ";"], function (p) {
  return p._css15;
}, function (p) {
  return p._css16;
}, function (p) {
  return p._css17;
});

var WrapperTextInput = React.forwardRef(function (_ref3, ref) {
  var adornment = _ref3.adornment,
      adornmentPosition = _ref3.adornmentPosition,
      _ref3$adornmentSettin = _ref3.adornmentSettings,
      _ref3$adornmentSettin2 = _ref3$adornmentSettin.width,
      adornmentWidth = _ref3$adornmentSettin2 === void 0 ? 36 : _ref3$adornmentSettin2,
      _ref3$adornmentSettin3 = _ref3$adornmentSettin.padding,
      adornmentPadding = _ref3$adornmentSettin3 === void 0 ? 4 : _ref3$adornmentSettin3,
      props = _objectWithoutProperties(_ref3, ["adornment", "adornmentPosition", "adornmentSettings"]);

  var theme = useTheme();

  if (!adornment) {
    return /*#__PURE__*/React.createElement(TextInput, _extends({
      ref: ref
    }, props));
  }

  return /*#__PURE__*/React.createElement(_StyledDiv, {
    _css12: props.wide ? '100%' : 'max-content'
  }, /*#__PURE__*/React.createElement(_StyledTextInput, _extends({
    ref: ref
  }, props, {
    _css13: adornmentPosition === 'end' ? 'padding-right' : 'padding-left',
    _css14: adornmentWidth - adornmentPadding * 2
  })), /*#__PURE__*/React.createElement(_StyledDiv2, {
    _css15: adornmentPosition === 'end' ? 'right' : 'left',
    _css16: adornmentPadding,
    _css17: theme.surfaceContentSecondary
  }, adornment));
});
WrapperTextInput.propTypes = _objectSpread({}, TextInput.propTypes, {
  adornment: PropTypes.node,
  adornmentPosition: PropTypes.oneOf(['start', 'end']),
  adornmentSettings: PropTypes.shape({
    width: PropTypes.number,
    padding: PropTypes.number
  })
});
WrapperTextInput.defaultProps = _objectSpread({}, TextInput.defaultProps, {
  adornment: null,
  adornmentPosition: 'start',
  adornmentSettings: {}
}); // <input type=number> (only for compat)

function TextInputNumber(props) {
  warnOnce('TextInputNumber', 'TextInputNumber is deprecated. Please use TextInput instead.');
  return /*#__PURE__*/React.createElement(TextInput, _extends({
    type: "number"
  }, props));
} // Multiline input (textarea element)


function TextInputMultiline(props) {
  return /*#__PURE__*/React.createElement(TextInput, _extends({
    multiline: true
  }, props));
}

TextInputMultiline.propTypes = {
  required: PropTypes.bool
};
TextInputMultiline.defaultProps = {
  required: false
};
WrapperTextInput.Number = TextInputNumber;
WrapperTextInput.Multiline = TextInputMultiline;

export default WrapperTextInput;
//# sourceMappingURL=TextInput.js.map
