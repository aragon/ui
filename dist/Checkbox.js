'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var defineProperty = require('./defineProperty-fdbd3c46.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var web = require('./web-17920307.js');
var FocusVisible = require('./FocusVisible.js');
var springs = require('./springs.js');
var Theme = require('./Theme.js');
var constants = require('./constants.js');
var miscellaneous = require('./miscellaneous.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./objectWithoutPropertiesLoose-34dfcdd4.js');
require('react-dom');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./color.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const SIZE = 18;
const CHECKBOX_RADIUS = 2;
const RADIO_BULLET_SIZE = 10;

class Checkbox extends React__default["default"].PureComponent {
  constructor(...args) {
    super(...args);

    defineProperty._defineProperty(this, "_element", /*#__PURE__*/React__default["default"].createRef());

    defineProperty._defineProperty(this, "handleKeyPress", e => {
      e.preventDefault();
    });

    defineProperty._defineProperty(this, "handleClick", e => {
      const {
        onChange,
        checked,
        indeterminate
      } = this.props;
      onChange(indeterminate ? false : !checked);
    });

    defineProperty._defineProperty(this, "focus", () => {
      this._element.current.focus();
    });
  }

  getAriaChecked() {
    const {
      checked,
      indeterminate
    } = this.props;
    if (indeterminate) return 'mixed';
    if (checked) return 'true';
    return 'false';
  }

  renderCheck(visible, Icon) {
    const {
      disabled,
      theme
    } = this.props;
    return /*#__PURE__*/React__default["default"].createElement(web.Spring, {
      from: {
        progress: 0
      },
      to: {
        progress: Number(visible)
      },
      config: springs.springs.instant,
      native: true
    }, ({
      progress
    }) => /*#__PURE__*/React__default["default"].createElement(_StyledAnimatedSpan, {
      style: {
        opacity: progress,
        transform: progress.interpolate(v => `scale(${v})`)
      }
    }, /*#__PURE__*/React__default["default"].createElement(Icon, {
      color: disabled ? theme.selectedDisabled : theme.selected
    })));
  }

  render() {
    const {
      checked,
      disabled,
      indeterminate,
      tabIndex,
      theme,
      variant,
      ...props
    } = this.props;
    return /*#__PURE__*/React__default["default"].createElement(FocusVisible["default"], null, ({
      focusVisible,
      onFocus
    }) => /*#__PURE__*/React__default["default"].createElement(_StyledButton, _extends._extends({
      type: "button",
      ref: this._element,
      role: variant,
      tabIndex: tabIndex,
      "aria-checked": this.getAriaChecked(),
      onClick: this.handleClick,
      onKeyPress: this.handleKeyPress,
      onFocus: onFocus,
      disabled: disabled
    }, props, {
      $_css: 0.5 * constants.GU,
      $_css2: disabled ? theme.controlDisabled : theme.control,
      $_css3: theme.controlBorder,
      $_css4: variant === 'radio' ? '50%' : `${CHECKBOX_RADIUS}px`,
      $_css5: !disabled ? `
                    cursor: pointer;
                    &:active {
                      border-color: ${theme.controlBorderPressed};
                    }
                    &:focus .focus-ring {
                      display: ${focusVisible ? 'block' : 'none'};
                    }
                  ` : ''
    }), variant === 'checkbox' && this.renderCheck(checked && !indeterminate, Check), variant === 'checkbox' && this.renderCheck(indeterminate, Dash), variant === 'radio' && this.renderCheck(checked, Bullet), /*#__PURE__*/React__default["default"].createElement(_StyledSpan, {
      className: "focus-ring",
      $_css6: theme.focus,
      $_css7: variant === 'radio' ? '50%' : `${constants.RADIUS}px`
    })));
  }

}
/* eslint-disable react/prop-types */


defineProperty._defineProperty(Checkbox, "propTypes", {
  checked: index.PropTypes.bool,
  disabled: index.PropTypes.bool,
  indeterminate: index.PropTypes.bool,
  onChange: index.PropTypes.func,
  tabIndex: index.PropTypes.string,
  theme: index.PropTypes.object,
  variant: index.PropTypes.oneOf(['checkbox', 'radio'])
});

defineProperty._defineProperty(Checkbox, "defaultProps", {
  checked: false,
  disabled: false,
  indeterminate: false,
  onChange: miscellaneous.noop,
  tabIndex: '0',
  variant: 'checkbox'
});

const Dash = ({
  color
}) =>
/*#__PURE__*/

/* Use SVG to have subpixels (strokeWidth="1.5") on Chrome */
React__default["default"].createElement("svg", {
  width: "14",
  height: "14",
  viewBox: "0 0 14 14"
}, /*#__PURE__*/React__default["default"].createElement("line", {
  x1: "3",
  y1: "7",
  x2: "11",
  y2: "7",
  stroke: color,
  strokeWidth: "1.5"
}));

const Check = ({
  color
}) => /*#__PURE__*/React__default["default"].createElement("svg", {
  width: "12",
  height: "8",
  viewBox: "0 0 12 8"
}, /*#__PURE__*/React__default["default"].createElement("path", {
  d: `
        M11.059 1.393
        L4.335  7.395
        L0.944  3.260
        L2.104  2.309
        L4.503  5.234
        L10.060 0.274
        L11.059 1.393
        Z
      `,
  fill: color
}));

const Bullet = ({
  color
}) => /*#__PURE__*/React__default["default"].createElement(_StyledSpan2, {
  $_css8: color
});

const CheckBoxWithTheme = /*#__PURE__*/React__default["default"].forwardRef((props, ref) => {
  const theme = Theme.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(Checkbox, _extends._extends({
    theme: theme,
    ref: ref
  }, props));
});

var _StyledAnimatedSpan = _styled__default["default"](web.extendedAnimated.span).withConfig({
  displayName: "Checkbox___StyledAnimatedSpan",
  componentId: "sc-1avgrx5-0"
})(["position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;transform-origin:50% 50%;"]);

var _StyledButton = _styled__default["default"]("button").withConfig({
  displayName: "Checkbox___StyledButton",
  componentId: "sc-1avgrx5-1"
})(["display:inline-flex;position:relative;width:", "px;height:", "px;margin:", "px;padding:0;background:", ";border:1px solid ", ";border-radius:", ";outline:0;&::-moz-focus-inner{border:0;}", ";"], SIZE, SIZE, p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5);

var _StyledSpan = _styled__default["default"]("span").withConfig({
  displayName: "Checkbox___StyledSpan",
  componentId: "sc-1avgrx5-2"
})(["position:absolute;top:-2px;left:-2px;right:-2px;bottom:-2px;border:2px solid ", ";border-radius:", ";display:none;"], p => p.$_css6, p => p.$_css7);

var _StyledSpan2 = _styled__default["default"]("span").withConfig({
  displayName: "Checkbox___StyledSpan2",
  componentId: "sc-1avgrx5-3"
})(["display:block;width:", "px;height:", "px;border-radius:50%;background:", ";"], RADIO_BULLET_SIZE, RADIO_BULLET_SIZE, p => p.$_css8);

exports["default"] = CheckBoxWithTheme;
//# sourceMappingURL=Checkbox.js.map
