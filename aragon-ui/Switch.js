'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var slicedToArray = require('./slicedToArray-a8a77f0e.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-37353731.js');
var web = require('./web-46d746d6.js');
var FocusVisible = require('./FocusVisible.js');
var Theme = require('./Theme.js');
var springs = require('./springs.js');
var miscellaneous = require('./miscellaneous.js');
var constants = require('./constants.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
require('./getPrototypeOf-55c9e80c.js');
require('./defineProperty-3cad0327.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./color.js');
require('./toConsumableArray-cc0d28a9.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var BORDER = 1;
var WRAPPER_WIDTH = 5 * constants.GU;
var WRAPPER_HEIGHT = 2.25 * constants.GU;

var _StyledSpan = _styled__default['default']("span").withConfig({
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

var _StyledInput = _styled__default['default']("input").withConfig({
  displayName: "Switch___StyledInput",
  componentId: "sc-1f0jw9z-1"
})(["opacity:0;pointer-events:none;"]);

var _StyledAnimatedSpan = _styled__default['default'](web.extendedAnimated.span).withConfig({
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
  var theme = Theme.useTheme();

  var _useState = React.useState(false),
      _useState2 = slicedToArray.slicedToArray(_useState, 2),
      isFocused = _useState2[0],
      setIsFocused = _useState2[1];

  var handleChange = disabled ? miscellaneous.noop : function () {
    return onChange(!checked);
  };
  return /*#__PURE__*/React__default['default'].createElement(FocusVisible['default'], null, function (_ref2) {
    var focusVisible = _ref2.focusVisible,
        _onFocus = _ref2.onFocus;
    return /*#__PURE__*/React__default['default'].createElement(_StyledSpan, {
      onClick: function onClick(e) {
        e.preventDefault();
        handleChange();
      },
      _css: theme.border,
      _css2: disabled ? theme.controlBorder : checked ? theme.selected : theme.control,
      _css3: disabled ? 'default' : 'pointer',
      _css4: disabled ? '' : "\n                  &:active {\n                    border-color: ".concat(theme.controlBorderPressed, ";\n                  }\n                "),
      _css5: isFocused && focusVisible ? "\n                  &:after {\n                    content: '';\n                    position: absolute;\n                    left: ".concat(-BORDER * 2, "px;\n                    top: ").concat(-BORDER * 2, "px;\n                    width: ").concat(WRAPPER_WIDTH + BORDER * 2, "px;\n                    height: ").concat(WRAPPER_HEIGHT + BORDER * 2, "px;\n                    border-radius: ").concat(WRAPPER_HEIGHT, "px;\n                    border: 2px solid ").concat(theme.focus, ";\n                  }\n                ") : ''
    }, /*#__PURE__*/React__default['default'].createElement(_StyledInput, {
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
    }), /*#__PURE__*/React__default['default'].createElement(web.Spring, {
      to: {
        progress: checked ? WRAPPER_WIDTH - WRAPPER_HEIGHT + BORDER : BORDER
      },
      config: springs.springs.smooth,
      native: true
    }, function (_ref3) {
      var progress = _ref3.progress;
      return /*#__PURE__*/React__default['default'].createElement(_StyledAnimatedSpan, {
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
  checked: index.propTypes.bool,
  disabled: index.propTypes.bool,
  onChange: index.propTypes.func
};
Switch.defaultProps = {
  checked: false,
  disabled: false,
  onChange: miscellaneous.noop
};

exports.default = Switch;
//# sourceMappingURL=Switch.js.map
