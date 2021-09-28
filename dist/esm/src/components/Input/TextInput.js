import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React, { useCallback } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { useTheme } from '../../theme/Theme2.js';
import { RADIUS, GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';
import { warnOnce } from '../../utils/environment.js';

const TextInput = /*#__PURE__*/React.forwardRef(({
  autofocus,
  multiline,
  type,
  ...props
}, ref) => {
  const theme = useTheme();
  const handleRef = useCallback(element => {
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
    $_css: 5 * GU,
    $_css2: 1.5 * GU,
    $_css3: theme.surface,
    $_css4: theme.border,
    $_css5: theme.surfaceContent,
    $_css6: textStyle('body3'),
    $_css7: multiline ? `
              height: auto;
              padding: ${1 * GU}px ${1.5 * GU}px;
              resize: vertical;
            ` : '',
    $_css8: theme.selected,
    $_css9: theme.hint,
    $_css10: theme.border,
    $_css11: theme.hint
  }));
});

var _StyledTextInput = _styled(TextInput).withConfig({
  displayName: "TextInput___StyledTextInput",
  componentId: "sc-gngg3n-0"
})(["", ":", "px;"], p => p.$_css13, p => p.$_css14);

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

const WrapperTextInput = /*#__PURE__*/React.forwardRef(({
  adornment,
  adornmentPosition,
  adornmentSettings: {
    width: adornmentWidth = 36,
    padding: adornmentPadding = 4
  },
  ...props
}, ref) => {
  const theme = useTheme();

  if (!adornment) {
    return /*#__PURE__*/React.createElement(TextInput, _extends({
      ref: ref
    }, props));
  }

  return /*#__PURE__*/React.createElement(_StyledDiv, {
    $_css12: props.wide ? '100%' : 'max-content'
  }, /*#__PURE__*/React.createElement(_StyledTextInput, _extends({
    ref: ref
  }, props, {
    $_css13: adornmentPosition === 'end' ? 'padding-right' : 'padding-left',
    $_css14: adornmentWidth - adornmentPadding * 2
  })), /*#__PURE__*/React.createElement(_StyledDiv2, {
    $_css15: adornmentPosition === 'end' ? 'right' : 'left',
    $_css16: adornmentPadding,
    $_css17: theme.surfaceContentSecondary
  }, adornment));
});
WrapperTextInput.propTypes = { ...TextInput.propTypes,
  adornment: PropTypes.node,
  adornmentPosition: PropTypes.oneOf(['start', 'end']),
  adornmentSettings: PropTypes.shape({
    width: PropTypes.number,
    padding: PropTypes.number
  })
};
WrapperTextInput.defaultProps = { ...TextInput.defaultProps,
  adornment: null,
  adornmentPosition: 'start',
  adornmentSettings: {}
}; // <input type=number> (only for compat)

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

var _StyledInput = _styled("input").withConfig({
  displayName: "TextInput___StyledInput",
  componentId: "sc-gngg3n-1"
})(["width:", ";height:", "px;padding:0 ", "px;background:", ";border:1px solid ", ";color:", ";border-radius:", "px;appearance:none;", ";", " &:focus{outline:none;border-color:", ";}&:read-only{color:", ";border-color:", ";}&::placeholder{color:", ";opacity:1;}&:invalid{box-shadow:none;}"], ({
  wide
}) => wide ? '100%' : 'auto', p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5, RADIUS, p => p.$_css6, p => p.$_css7, p => p.$_css8, p => p.$_css9, p => p.$_css10, p => p.$_css11);

var _StyledDiv = _styled("div").withConfig({
  displayName: "TextInput___StyledDiv",
  componentId: "sc-gngg3n-2"
})(["display:inline-flex;position:relative;width:", ";"], p => p.$_css12);

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "TextInput___StyledDiv2",
  componentId: "sc-gngg3n-3"
})(["position:absolute;top:0;bottom:0;height:100%;", ":", "px;display:flex;align-items:center;justify-content:center;color:", ";"], p => p.$_css15, p => p.$_css16, p => p.$_css17);

export { WrapperTextInput as default };
//# sourceMappingURL=TextInput.js.map
