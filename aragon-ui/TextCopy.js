'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-37353731.js');
var TextInput = require('./TextInput.js');
var ButtonIcon = require('./ButtonIcon.js');
var ToastHub = require('./ToastHub.js');
var Theme = require('./Theme.js');
var IconCopy = require('./IconCopy.js');
var constants = require('./constants.js');
var environment = require('./environment.js');
var textStyles = require('./text-styles.js');
var miscellaneous = require('./miscellaneous.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./defineProperty-3cad0327.js');
require('./Button.js');
require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./index-c33eeeef.js');
require('./Layout.js');
require('./Viewport-71f7efe6.js');
require('./getPrototypeOf-55c9e80c.js');
require('./_baseGetTag-6ec23aaa.js');
require('./breakpoints.js');
require('./css.js');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./keycodes.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./toConsumableArray-cc0d28a9.js');
require('./font.js');
require('./web-46d746d6.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
require('./RootPortal.js');
require('./Root-07f851a6.js');
require('./components.js');
require('./springs.js');
require('./IconPropTypes-b9997416.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var HEIGHT = 5 * constants.GU;

var _StyledDiv = _styled__default['default']("div").withConfig({
  displayName: "TextCopy___StyledDiv",
  componentId: "sc-1dg1uit-0"
})(["position:relative;display:inline-flex;width:", "px;max-width:100%;height:", "px;padding-left:", ";"], function (p) {
  return p._css;
}, HEIGHT, function (p) {
  return p._css2;
});

var _StyledDiv2 = _styled__default['default']("div").withConfig({
  displayName: "TextCopy___StyledDiv2",
  componentId: "sc-1dg1uit-1"
})(["position:absolute;top:0;left:0;overflow:hidden;width:", "px;height:", "px;background:", ";border:1px solid ", ";border-right:0;border-radius:", "px 0.0001px 0.0001px ", "px;"], HEIGHT, HEIGHT, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, constants.RADIUS, constants.RADIUS);

var _StyledDiv3 = _styled__default['default']("div").withConfig({
  displayName: "TextCopy___StyledDiv3",
  componentId: "sc-1dg1uit-2"
})(["display:flex;align-items:center;justify-content:center;width:", "px;height:", "px;"], function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

var _StyledButtonIcon = _styled__default['default'](ButtonIcon['default']).withConfig({
  displayName: "TextCopy___StyledButtonIcon",
  componentId: "sc-1dg1uit-3"
})(["width:", "px;height:", "px;border-radius:0;color:", ";"], function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
});

var _StyledTextInput = _styled__default['default'](TextInput['default']).withConfig({
  displayName: "TextCopy___StyledTextInput",
  componentId: "sc-1dg1uit-4"
})(["text-overflow:ellipsis;height:", "px;max-width:100%;border:1px solid ", ";", ";", ";&:read-only{color:", ";text-shadow:none;}"], HEIGHT, function (p) {
  return p._css10;
}, function (p) {
  return p._css11;
}, function (p) {
  return p._css12;
}, function (p) {
  return p._css13;
});

var TextCopy = /*#__PURE__*/React__default['default'].memo( /*#__PURE__*/React__default['default'].forwardRef(function TextCopy(_ref, ref) {
  var adornment = _ref.adornment,
      autofocus = _ref.autofocus,
      message = _ref.message,
      monospace = _ref.monospace,
      onCopy = _ref.onCopy,
      value = _ref.value,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["adornment", "autofocus", "message", "monospace", "onCopy", "value"]);

  var theme = Theme.useTheme();
  var toast = ToastHub.useToast();
  var inputRef = React.useRef(null); // Allows to focus the component from the outside

  React.useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        inputRef.current.focus();
      }
    };
  }); // Select the content on focus

  var handleFocus = React.useCallback(function () {
    inputRef.current && inputRef.current.select();
  }, []); // If onCopy is set (either to a function or null), Toast is not used.

  var onCopyOrToast = onCopy === undefined ? toast : onCopy || miscellaneous.noop;
  var handleCopy = React.useCallback(function () {
    if (inputRef.current) {
      inputRef.current.focus();

      try {
        document.execCommand('copy');
        onCopyOrToast(message);
      } catch (err) {
        environment.warn(err);
      }
    }
  }, [message, onCopyOrToast]);
  return /*#__PURE__*/React__default['default'].createElement(_StyledDiv, _extends._extends_1({}, props, {
    _css: 52.5 * constants.GU,
    _css2: adornment ? "".concat(HEIGHT, "px") : '0'
  }), adornment && /*#__PURE__*/React__default['default'].createElement(_StyledDiv2, {
    _css3: theme.surface,
    _css4: theme.border
  }, /*#__PURE__*/React__default['default'].createElement(_StyledDiv3, {
    _css5: HEIGHT - 2,
    _css6: HEIGHT - 2
  }, adornment)), /*#__PURE__*/React__default['default'].createElement(_StyledTextInput, {
    ref: inputRef,
    adornment: /*#__PURE__*/React__default['default'].createElement(_StyledButtonIcon, {
      onClick: handleCopy,
      label: "Copy",
      _css7: HEIGHT - 2,
      _css8: HEIGHT - 2,
      _css9: theme.surfaceIcon
    }, /*#__PURE__*/React__default['default'].createElement(IconCopy['default'], null)),
    adornmentPosition: "end",
    adornmentSettings: {
      // Keep the button square
      width: HEIGHT - 2,
      padding: 0
    },
    autofocus: autofocus,
    onFocus: handleFocus,
    readOnly: true,
    value: value,
    wide: true,
    _css10: theme.border,
    _css11: adornment ? "\n                  border-top-left-radius: 0;\n                  border-bottom-left-radius: 0;\n                  border-left: 0;\n                " : '',
    _css12: textStyles.textStyle(monospace ? 'address2' : 'body3'),
    _css13: theme.surfaceContent
  }));
}));
TextCopy.propTypes = {
  adornment: index.propTypes.node,
  autofocus: index.propTypes.bool,
  message: index.propTypes.string,
  monospace: index.propTypes.bool,
  onCopy: index.propTypes.func,
  value: index.propTypes.string
};
TextCopy.defaultProps = {
  autofocus: false,
  message: 'Copied',
  monospace: true
};

exports.default = TextCopy;
//# sourceMappingURL=TextCopy.js.map
