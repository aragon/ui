'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var web = require('./web-17920307.js');
var FocusVisible = require('./FocusVisible.js');
var Theme = require('./Theme.js');
var constants = require('./constants.js');
var springs = require('./springs.js');
var miscellaneous = require('./miscellaneous.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./objectWithoutPropertiesLoose-34dfcdd4.js');
require('react-dom');
require('./defineProperty-fdbd3c46.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./color.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const BORDER = 1;
const WRAPPER_WIDTH = 5 * constants.GU;
const WRAPPER_HEIGHT = 2.25 * constants.GU;

function Switch({
  checked,
  disabled,
  onChange
}) {
  const theme = Theme.useTheme();
  const [isFocused, setIsFocused] = React.useState(false);
  const handleChange = disabled ? miscellaneous.noop : () => onChange(!checked);
  return /*#__PURE__*/React__default["default"].createElement(FocusVisible["default"], null, ({
    focusVisible,
    onFocus
  }) => /*#__PURE__*/React__default["default"].createElement(_StyledSpan, {
    onClick: e => {
      e.preventDefault();
      handleChange();
    },
    $_css: theme.border,
    $_css2: disabled ? theme.controlBorder : checked ? theme.selected : theme.control,
    $_css3: disabled ? 'default' : 'pointer',
    $_css4: disabled ? '' : `
                  &:active {
                    border-color: ${theme.controlBorderPressed};
                  }
                `,
    $_css5: isFocused && focusVisible ? `
                  &:after {
                    content: '';
                    position: absolute;
                    left: ${-BORDER * 2}px;
                    top: ${-BORDER * 2}px;
                    width: ${WRAPPER_WIDTH + BORDER * 2}px;
                    height: ${WRAPPER_HEIGHT + BORDER * 2}px;
                    border-radius: ${WRAPPER_HEIGHT}px;
                    border: 2px solid ${theme.focus};
                  }
                ` : ''
  }, /*#__PURE__*/React__default["default"].createElement(_StyledInput, {
    type: "checkbox",
    onFocus: () => {
      setIsFocused(true);
      onFocus();
    },
    onBlur: () => setIsFocused(false),
    checked: checked,
    disabled: disabled,
    onChange: handleChange
  }), /*#__PURE__*/React__default["default"].createElement(web.Spring, {
    to: {
      progress: checked ? WRAPPER_WIDTH - WRAPPER_HEIGHT + BORDER : BORDER
    },
    config: springs.springs.smooth,
    native: true
  }, ({
    progress
  }) => /*#__PURE__*/React__default["default"].createElement(_StyledAnimatedSpan, {
    style: {
      transform: progress.interpolate(v => `translate3d(${v}px, 0, 0)`)
    },
    $_css6: WRAPPER_HEIGHT - BORDER * 4,
    $_css7: WRAPPER_HEIGHT - BORDER * 4,
    $_css8: WRAPPER_HEIGHT - BORDER * 4,
    $_css9: theme.controlSurface,
    $_css10: disabled ? 'none' : '0px 1px 3px rgba(0, 0, 0, 0.15)'
  }))));
}

Switch.propTypes = {
  checked: index.PropTypes.bool,
  disabled: index.PropTypes.bool,
  onChange: index.PropTypes.func
};
Switch.defaultProps = {
  checked: false,
  disabled: false,
  onChange: miscellaneous.noop
};

var _StyledSpan = _styled__default["default"]("span").withConfig({
  displayName: "Switch___StyledSpan",
  componentId: "sc-1f0jw9z-0"
})(["position:relative;display:inline-block;width:", "px;height:", "px;border:", "px solid ", ";border-radius:", "px;background-color:", ";cursor:", ";", " ", ";"], WRAPPER_WIDTH, WRAPPER_HEIGHT, BORDER, p => p.$_css, WRAPPER_HEIGHT, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5);

var _StyledInput = _styled__default["default"]("input").withConfig({
  displayName: "Switch___StyledInput",
  componentId: "sc-1f0jw9z-1"
})(["opacity:0;pointer-events:none;"]);

var _StyledAnimatedSpan = _styled__default["default"](web.extendedAnimated.span).withConfig({
  displayName: "Switch___StyledAnimatedSpan",
  componentId: "sc-1f0jw9z-2"
})(["position:absolute;left:0;z-index:1;top:", "px;width:", "px;height:", "px;border-radius:", "px;background-color:", ";box-shadow:", ";"], BORDER, p => p.$_css6, p => p.$_css7, p => p.$_css8, p => p.$_css9, p => p.$_css10);

exports["default"] = Switch;
//# sourceMappingURL=Switch.js.map
