import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import _styled from 'styled-components';
import React, { useRef, useImperativeHandle, useCallback } from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import WrapperTextInput from '../Input/TextInput.js';
import ButtonIcon from '../Button/ButtonIcon.js';
import { useToast } from '../ToastHub/ToastHub.js';
import { useTheme } from '../../theme/Theme2.js';
import IconCopy from '../../icons/components/IconCopy.js';
import { RADIUS, GU } from '../../style/constants.js';
import { warn } from '../../utils/environment.js';
import { textStyle } from '../../style/text-styles.js';
import { noop } from '../../utils/miscellaneous.js';

var HEIGHT = 5 * GU;

var _StyledDiv = _styled("div").withConfig({
  displayName: "TextCopy___StyledDiv",
  componentId: "sc-1dg1uit-0"
})(["position:relative;display:inline-flex;width:", "px;max-width:100%;height:", "px;padding-left:", ";"], function (p) {
  return p._css;
}, HEIGHT, function (p) {
  return p._css2;
});

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "TextCopy___StyledDiv2",
  componentId: "sc-1dg1uit-1"
})(["position:absolute;top:0;left:0;overflow:hidden;width:", "px;height:", "px;background:", ";border:1px solid ", ";border-right:0;border-radius:", "px 0.0001px 0.0001px ", "px;"], HEIGHT, HEIGHT, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, RADIUS, RADIUS);

var _StyledDiv3 = _styled("div").withConfig({
  displayName: "TextCopy___StyledDiv3",
  componentId: "sc-1dg1uit-2"
})(["display:flex;align-items:center;justify-content:center;width:", "px;height:", "px;"], function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

var _StyledButtonIcon = _styled(ButtonIcon).withConfig({
  displayName: "TextCopy___StyledButtonIcon",
  componentId: "sc-1dg1uit-3"
})(["width:", "px;height:", "px;border-radius:0;color:", ";"], function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
});

var _StyledTextInput = _styled(WrapperTextInput).withConfig({
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

var TextCopy = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(function TextCopy(_ref, ref) {
  var adornment = _ref.adornment,
      autofocus = _ref.autofocus,
      message = _ref.message,
      monospace = _ref.monospace,
      onCopy = _ref.onCopy,
      value = _ref.value,
      props = objectWithoutProperties(_ref, ["adornment", "autofocus", "message", "monospace", "onCopy", "value"]);

  var theme = useTheme();
  var toast = useToast();
  var inputRef = useRef(null); // Allows to focus the component from the outside

  useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        inputRef.current.focus();
      }
    };
  }); // Select the content on focus

  var handleFocus = useCallback(function () {
    inputRef.current && inputRef.current.select();
  }, []); // If onCopy is set (either to a function or null), Toast is not used.

  var onCopyOrToast = onCopy === undefined ? toast : onCopy || noop;
  var handleCopy = useCallback(function () {
    if (inputRef.current) {
      inputRef.current.focus();

      try {
        document.execCommand('copy');
        onCopyOrToast(message);
      } catch (err) {
        warn(err);
      }
    }
  }, [message, onCopyOrToast]);
  return /*#__PURE__*/React.createElement(_StyledDiv, _extends_1({}, props, {
    _css: 52.5 * GU,
    _css2: adornment ? "".concat(HEIGHT, "px") : '0'
  }), adornment && /*#__PURE__*/React.createElement(_StyledDiv2, {
    _css3: theme.surface,
    _css4: theme.border
  }, /*#__PURE__*/React.createElement(_StyledDiv3, {
    _css5: HEIGHT - 2,
    _css6: HEIGHT - 2
  }, adornment)), /*#__PURE__*/React.createElement(_StyledTextInput, {
    ref: inputRef,
    adornment: /*#__PURE__*/React.createElement(_StyledButtonIcon, {
      onClick: handleCopy,
      label: "Copy",
      _css7: HEIGHT - 2,
      _css8: HEIGHT - 2,
      _css9: theme.surfaceIcon
    }, /*#__PURE__*/React.createElement(IconCopy, null)),
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
    _css12: textStyle(monospace ? 'address2' : 'body3'),
    _css13: theme.surfaceContent
  }));
}));
TextCopy.propTypes = {
  adornment: propTypes.node,
  autofocus: propTypes.bool,
  message: propTypes.string,
  monospace: propTypes.bool,
  onCopy: propTypes.func,
  value: propTypes.string
};
TextCopy.defaultProps = {
  autofocus: false,
  message: 'Copied',
  monospace: true
};

export default TextCopy;
//# sourceMappingURL=TextCopy.js.map
