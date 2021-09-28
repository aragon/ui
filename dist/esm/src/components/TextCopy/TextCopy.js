import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React, { useRef, useImperativeHandle, useCallback } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import WrapperTextInput from '../Input/TextInput.js';
import ButtonIcon from '../Button/ButtonIcon.js';
import { useToast } from '../ToastHub/ToastHub.js';
import { useTheme } from '../../theme/Theme2.js';
import IconCopy from '../../icons/components/IconCopy.js';
import { RADIUS, GU } from '../../style/constants.js';
import { warn } from '../../utils/environment.js';
import { textStyle } from '../../style/text-styles.js';
import { noop } from '../../utils/miscellaneous.js';

const HEIGHT = 5 * GU;
const TextCopy = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(function TextCopy({
  adornment,
  autofocus,
  message,
  monospace,
  onCopy,
  value,
  ...props
}, ref) {
  const theme = useTheme();
  const toast = useToast();
  const inputRef = useRef(null); // Allows to focus the component from the outside

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  })); // Select the content on focus

  const handleFocus = useCallback(() => {
    inputRef.current && inputRef.current.select();
  }, []); // If onCopy is set (either to a function or null), Toast is not used.

  const onCopyOrToast = onCopy === undefined ? toast : onCopy || noop;
  const handleCopy = useCallback(() => {
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
  return /*#__PURE__*/React.createElement(_StyledDiv, _extends({}, props, {
    $_css: 52.5 * GU,
    $_css2: adornment ? `${HEIGHT}px` : '0'
  }), adornment && /*#__PURE__*/React.createElement(_StyledDiv2, {
    $_css3: theme.surface,
    $_css4: theme.border
  }, /*#__PURE__*/React.createElement(_StyledDiv3, {
    $_css5: HEIGHT - 2,
    $_css6: HEIGHT - 2
  }, adornment)), /*#__PURE__*/React.createElement(_StyledTextInput, {
    ref: inputRef,
    adornment: /*#__PURE__*/React.createElement(_StyledButtonIcon, {
      onClick: handleCopy,
      label: "Copy",
      $_css7: HEIGHT - 2,
      $_css8: HEIGHT - 2,
      $_css9: theme.surfaceIcon
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
    $_css10: theme.border,
    $_css11: adornment ? `
                  border-top-left-radius: 0;
                  border-bottom-left-radius: 0;
                  border-left: 0;
                ` : '',
    $_css12: textStyle(monospace ? 'address2' : 'body3'),
    $_css13: theme.surfaceContent
  }));
}));
TextCopy.propTypes = {
  adornment: PropTypes.node,
  autofocus: PropTypes.bool,
  message: PropTypes.string,
  monospace: PropTypes.bool,
  onCopy: PropTypes.func,
  value: PropTypes.string
};
TextCopy.defaultProps = {
  autofocus: false,
  message: 'Copied',
  monospace: true
};

var _StyledDiv = _styled("div").withConfig({
  displayName: "TextCopy___StyledDiv",
  componentId: "sc-1dg1uit-0"
})(["position:relative;display:inline-flex;width:", "px;max-width:100%;height:", "px;padding-left:", ";"], p => p.$_css, HEIGHT, p => p.$_css2);

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "TextCopy___StyledDiv2",
  componentId: "sc-1dg1uit-1"
})(["position:absolute;top:0;left:0;overflow:hidden;width:", "px;height:", "px;background:", ";border:1px solid ", ";border-right:0;border-radius:", "px 0.0001px 0.0001px ", "px;"], HEIGHT, HEIGHT, p => p.$_css3, p => p.$_css4, RADIUS, RADIUS);

var _StyledDiv3 = _styled("div").withConfig({
  displayName: "TextCopy___StyledDiv3",
  componentId: "sc-1dg1uit-2"
})(["display:flex;align-items:center;justify-content:center;width:", "px;height:", "px;"], p => p.$_css5, p => p.$_css6);

var _StyledButtonIcon = _styled(ButtonIcon).withConfig({
  displayName: "TextCopy___StyledButtonIcon",
  componentId: "sc-1dg1uit-3"
})(["width:", "px;height:", "px;border-radius:0;color:", ";"], p => p.$_css7, p => p.$_css8, p => p.$_css9);

var _StyledTextInput = _styled(WrapperTextInput).withConfig({
  displayName: "TextCopy___StyledTextInput",
  componentId: "sc-1dg1uit-4"
})(["text-overflow:ellipsis;height:", "px;max-width:100%;border:1px solid ", ";", ";", ";&:read-only{color:", ";text-shadow:none;}"], HEIGHT, p => p.$_css10, p => p.$_css11, p => p.$_css12, p => p.$_css13);

export { TextCopy as default };
//# sourceMappingURL=TextCopy.js.map
