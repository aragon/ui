'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var slicedToArray = require('./slicedToArray-0711941d.js');
require('./unsupportedIterableToArray-68db1d3b.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
var index = require('./index-b0606964.js');
require('./defineProperty-0921a47c.js');
require('./toConsumableArray-d8a4a2c3.js');
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
require('./getPrototypeOf-2a661a20.js');
require('./color.js');
require('./components.js');
require('./contains-component.js');
require('./css.js');
require('./dayjs.min-e07657bf.js');
require('./date.js');
var miscellaneous = require('./miscellaneous.js');
require('./environment.js');
require('./font.js');
require('./math-f4029164.js');
require('./characters.js');
require('./format.js');
require('./keycodes.js');
require('./url.js');
require('./web3.js');
var constants = require('./constants.js');
require('./breakpoints.js');
var springs = require('./springs.js');
require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');
var FocusVisible = require('./FocusVisible.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
var web = require('./web-d0294535.js');

var BORDER = 1;
var WRAPPER_WIDTH = 5 * constants.GU;
var WRAPPER_HEIGHT = 2.25 * constants.GU;

var _StyledSpan = _styled__default("span").withConfig({
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

var _StyledInput = _styled__default("input").withConfig({
  displayName: "Switch___StyledInput",
  componentId: "sc-1f0jw9z-1"
})(["opacity:0;pointer-events:none;"]);

var _StyledAnimatedSpan = _styled__default(web.extendedAnimated.span).withConfig({
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
      _useState2 = slicedToArray._slicedToArray(_useState, 2),
      isFocused = _useState2[0],
      setIsFocused = _useState2[1];

  var handleChange = disabled ? miscellaneous.noop : function () {
    return onChange(!checked);
  };
  return /*#__PURE__*/React__default.createElement(FocusVisible.default, null, function (_ref2) {
    var focusVisible = _ref2.focusVisible,
        _onFocus = _ref2.onFocus;
    return /*#__PURE__*/React__default.createElement(_StyledSpan, {
      onClick: function onClick(e) {
        e.preventDefault();
        handleChange();
      },
      _css: theme.border,
      _css2: disabled ? theme.controlBorder : checked ? theme.selected : theme.control,
      _css3: disabled ? 'default' : 'pointer',
      _css4: disabled ? '' : "\n                  &:active {\n                    border-color: ".concat(theme.controlBorderPressed, ";\n                  }\n                "),
      _css5: isFocused && focusVisible ? "\n                  &:after {\n                    content: '';\n                    position: absolute;\n                    left: ".concat(-BORDER * 2, "px;\n                    top: ").concat(-BORDER * 2, "px;\n                    width: ").concat(WRAPPER_WIDTH + BORDER * 2, "px;\n                    height: ").concat(WRAPPER_HEIGHT + BORDER * 2, "px;\n                    border-radius: ").concat(WRAPPER_HEIGHT, "px;\n                    border: 2px solid ").concat(theme.focus, ";\n                  }\n                ") : ''
    }, /*#__PURE__*/React__default.createElement(_StyledInput, {
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
    }), /*#__PURE__*/React__default.createElement(web.Spring, {
      to: {
        progress: checked ? WRAPPER_WIDTH - WRAPPER_HEIGHT + BORDER : BORDER
      },
      config: springs.springs.smooth,
      native: true
    }, function (_ref3) {
      var progress = _ref3.progress;
      return /*#__PURE__*/React__default.createElement(_StyledAnimatedSpan, {
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
  checked: index.PropTypes.bool,
  disabled: index.PropTypes.bool,
  onChange: index.PropTypes.func
};
Switch.defaultProps = {
  checked: false,
  disabled: false,
  onChange: miscellaneous.noop
};

exports.default = Switch;
//# sourceMappingURL=Switch.js.map
