import { _ as _slicedToArray } from './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import React, { useState } from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import { P as PropTypes } from './index-097535f1.js';
import './defineProperty-a0480c32.js';
import './toConsumableArray-127424c2.js';
import _styled from 'styled-components';
import './getPrototypeOf-b96da1e1.js';
import './color.js';
import './components.js';
import './contains-component.js';
import './css.js';
import './dayjs.min-e57fb69a.js';
import './date.js';
import { noop } from './miscellaneous.js';
import './environment.js';
import './font.js';
import './math-e6d0e93a.js';
import './characters.js';
import './format.js';
import './keycodes.js';
import './url.js';
import './web3.js';
import { GU } from './constants.js';
import './breakpoints.js';
import { springs } from './springs.js';
import './text-styles.js';
import './theme-dark.js';
import './theme-light.js';
import { useTheme } from './Theme.js';
import FocusVisible from './FocusVisible.js';
import './objectWithoutPropertiesLoose-9606ad13.js';
import 'react-dom';
import { e as extendedAnimated, S as Spring } from './web-a351a0a1.js';

var BORDER = 1;
var WRAPPER_WIDTH = 5 * GU;
var WRAPPER_HEIGHT = 2.25 * GU;

var _StyledSpan = _styled("span").withConfig({
  displayName: "Switch___StyledSpan",
  componentId: "sc-1f0jw9z-0"
})(["position:relative;display:inline-block;width:", "px;height:", "px;border:", "px solid ", ";border-radius:", "px;background-color:", ";cursor:", ";", " ", ";"], WRAPPER_WIDTH, WRAPPER_HEIGHT, BORDER, function (p) {
  return p._css;
}, WRAPPER_HEIGHT, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

var _StyledInput = _styled("input").withConfig({
  displayName: "Switch___StyledInput",
  componentId: "sc-1f0jw9z-1"
})(["opacity:0;pointer-events:none;"]);

var _StyledAnimatedSpan = _styled(extendedAnimated.span).withConfig({
  displayName: "Switch___StyledAnimatedSpan",
  componentId: "sc-1f0jw9z-2"
})(["position:absolute;left:0;z-index:1;top:", "px;width:", "px;height:", "px;border-radius:", "px;background-color:", ";box-shadow:", ";"], BORDER, function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
}, function (p) {
  return p._css10;
});

function Switch(_ref) {
  var checked = _ref.checked,
      disabled = _ref.disabled,
      onChange = _ref.onChange;
  var theme = useTheme();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isFocused = _useState2[0],
      setIsFocused = _useState2[1];

  var handleChange = disabled ? noop : function () {
    return onChange(!checked);
  };
  return /*#__PURE__*/React.createElement(FocusVisible, null, function (_ref2) {
    var focusVisible = _ref2.focusVisible,
        _onFocus = _ref2.onFocus;
    return /*#__PURE__*/React.createElement(_StyledSpan, {
      onClick: function onClick(e) {
        e.preventDefault();
        handleChange();
      },
      _css: theme.border,
      _css2: disabled ? theme.controlBorder : checked ? theme.selected : theme.control,
      _css3: disabled ? 'default' : 'pointer',
      _css4: disabled ? '' : "\n                  &:active {\n                    border-color: ".concat(theme.controlBorderPressed, ";\n                  }\n                "),
      _css5: isFocused && focusVisible ? "\n                  &:after {\n                    content: '';\n                    position: absolute;\n                    left: ".concat(-BORDER * 2, "px;\n                    top: ").concat(-BORDER * 2, "px;\n                    width: ").concat(WRAPPER_WIDTH + BORDER * 2, "px;\n                    height: ").concat(WRAPPER_HEIGHT + BORDER * 2, "px;\n                    border-radius: ").concat(WRAPPER_HEIGHT, "px;\n                    border: 2px solid ").concat(theme.focus, ";\n                  }\n                ") : ''
    }, /*#__PURE__*/React.createElement(_StyledInput, {
      type: "checkbox",
      onFocus: function onFocus() {
        setIsFocused(true);

        _onFocus();
      },
      onBlur: function onBlur() {
        return setIsFocused(false);
      },
      checked: checked,
      disabled: disabled,
      onChange: handleChange
    }), /*#__PURE__*/React.createElement(Spring, {
      to: {
        progress: checked ? WRAPPER_WIDTH - WRAPPER_HEIGHT + BORDER : BORDER
      },
      config: springs.smooth,
      native: true
    }, function (_ref3) {
      var progress = _ref3.progress;
      return /*#__PURE__*/React.createElement(_StyledAnimatedSpan, {
        style: {
          transform: progress.interpolate(function (v) {
            return "translate3d(".concat(v, "px, 0, 0)");
          })
        },
        _css6: WRAPPER_HEIGHT - BORDER * 4,
        _css7: WRAPPER_HEIGHT - BORDER * 4,
        _css8: WRAPPER_HEIGHT - BORDER * 4,
        _css9: theme.controlSurface,
        _css10: disabled ? 'none' : '0px 1px 3px rgba(0, 0, 0, 0.15)'
      });
    }));
  });
}

Switch.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};
Switch.defaultProps = {
  checked: false,
  disabled: false,
  onChange: noop
};

export default Switch;
//# sourceMappingURL=Switch.js.map
