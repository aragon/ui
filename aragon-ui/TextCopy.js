'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-1b94f6bc.js');
var index = require('./index-46d0e707.js');
require('./defineProperty-3cad0327.js');
require('./toConsumableArray-cc0d28a9.js');
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
require('./getPrototypeOf-55c9e80c.js');
require('./color.js');
require('./components.js');
require('./css.js');
var miscellaneous = require('./miscellaneous.js');
var environment = require('./environment.js');
require('./font.js');
require('./keycodes.js');
var constants = require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
var textStyles = require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');
var _extends$1 = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
require('./index-f5a9917e.js');
require('./_baseGetTag-42b4dd3e.js');
require('./Viewport-abbde113.js');
require('./Layout.js');
require('./FocusVisible.js');
require('./ButtonBase.js');
require('./IconPropTypes-dd9d2cb1.js');
var IconCopy = require('./IconCopy.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
require('./web-d0294535.js');
require('./Button.js');
var ButtonIcon = require('./ButtonIcon.js');
var TextInput = require('./TextInput.js');
var ToastHub = require('./ToastHub.js');
require('./Root-fd39454b.js');
require('./RootPortal.js');

var HEIGHT = 5 * constants.GU;

var _StyledDiv = _styled__default("div").withConfig({
  displayName: "TextCopy___StyledDiv",
  componentId: "sc-1dg1uit-0"
})(["position:relative;display:inline-flex;width:", "px;max-width:100%;height:", "px;padding-left:", ";"], function (p) {
  return p._css;
}, HEIGHT, function (p) {
  return p._css2;
});

var _StyledDiv2 = _styled__default("div").withConfig({
  displayName: "TextCopy___StyledDiv2",
  componentId: "sc-1dg1uit-1"
})(["position:absolute;top:0;left:0;overflow:hidden;width:", "px;height:", "px;background:", ";border:1px solid ", ";border-right:0;border-radius:", "px 0.0001px 0.0001px ", "px;"], HEIGHT, HEIGHT, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, constants.RADIUS, constants.RADIUS);

var _StyledDiv3 = _styled__default("div").withConfig({
  displayName: "TextCopy___StyledDiv3",
  componentId: "sc-1dg1uit-2"
})(["display:flex;align-items:center;justify-content:center;width:", "px;height:", "px;"], function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

var _StyledButtonIcon = _styled__default(ButtonIcon.default).withConfig({
  displayName: "TextCopy___StyledButtonIcon",
  componentId: "sc-1dg1uit-3"
})(["width:", "px;height:", "px;border-radius:0;color:", ";"], function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
});

var _StyledTextInput = _styled__default(TextInput.default).withConfig({
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

var TextCopy = /*#__PURE__*/React__default.memo( /*#__PURE__*/React__default.forwardRef(function TextCopy(_ref, ref) {
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
  return /*#__PURE__*/React__default.createElement(_StyledDiv, _extends$1._extends_1({}, props, {
    _css: 52.5 * constants.GU,
    _css2: adornment ? "".concat(HEIGHT, "px") : '0'
  }), adornment && /*#__PURE__*/React__default.createElement(_StyledDiv2, {
    _css3: theme.surface,
    _css4: theme.border
  }, /*#__PURE__*/React__default.createElement(_StyledDiv3, {
    _css5: HEIGHT - 2,
    _css6: HEIGHT - 2
  }, adornment)), /*#__PURE__*/React__default.createElement(_StyledTextInput, {
    ref: inputRef,
    adornment: /*#__PURE__*/React__default.createElement(_StyledButtonIcon, {
      onClick: handleCopy,
      label: "Copy",
      _css7: HEIGHT - 2,
      _css8: HEIGHT - 2,
      _css9: theme.surfaceIcon
    }, /*#__PURE__*/React__default.createElement(IconCopy.default, null)),
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
