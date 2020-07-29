'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-0711941d.js');
require('./unsupportedIterableToArray-68db1d3b.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
var index = require('./index-b0606964.js');
var defineProperty = require('./defineProperty-0921a47c.js');
require('./toConsumableArray-d8a4a2c3.js');
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
var getPrototypeOf = require('./getPrototypeOf-2a661a20.js');
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
var _extends = require('./extends-40571110.js');
var objectWithoutProperties = require('./objectWithoutProperties-35db8ab0.js');
var FocusVisible = require('./FocusVisible.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
var web = require('./web-d0294535.js');

function _createSuper(Derived) { return function () { var Super = getPrototypeOf._getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = getPrototypeOf._getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return getPrototypeOf._possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var SIZE = 18;
var CHECKBOX_RADIUS = 2;
var RADIO_BULLET_SIZE = 10;

var _StyledAnimatedSpan = _styled__default(web.extendedAnimated.span).withConfig({
  displayName: "Checkbox___StyledAnimatedSpan",
  componentId: "sc-1avgrx5-0"
})(["position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;transform-origin:50% 50%;"]);

var _StyledButton = _styled__default("button").withConfig({
  displayName: "Checkbox___StyledButton",
  componentId: "sc-1avgrx5-1"
})(["display:inline-flex;position:relative;width:", "px;height:", "px;margin:", "px;padding:0;background:", ";border:1px solid ", ";border-radius:", ";outline:0;&::-moz-focus-inner{border:0;}", ";"], SIZE, SIZE, function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

var _StyledSpan = _styled__default("span").withConfig({
  displayName: "Checkbox___StyledSpan",
  componentId: "sc-1avgrx5-2"
})(["position:absolute;top:-2px;left:-2px;right:-2px;bottom:-2px;border:2px solid ", ";border-radius:", ";display:none;"], function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
});

var Checkbox = /*#__PURE__*/function (_React$PureComponent) {
  getPrototypeOf._inherits(Checkbox, _React$PureComponent);

  var _super = _createSuper(Checkbox);

  function Checkbox() {
    var _this;

    getPrototypeOf._classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty._defineProperty(getPrototypeOf._assertThisInitialized(_this), "_element", React__default.createRef());

    defineProperty._defineProperty(getPrototypeOf._assertThisInitialized(_this), "handleClick", function () {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          checked = _this$props.checked,
          indeterminate = _this$props.indeterminate;
      onChange(indeterminate ? false : !checked);
    });

    defineProperty._defineProperty(getPrototypeOf._assertThisInitialized(_this), "focus", function () {
      _this._element.current.focus();
    });

    return _this;
  }

  getPrototypeOf._createClass(Checkbox, [{
    key: "getAriaChecked",
    value: function getAriaChecked() {
      var _this$props2 = this.props,
          checked = _this$props2.checked,
          indeterminate = _this$props2.indeterminate;
      if (indeterminate) return 'mixed';
      if (checked) return 'true';
      return 'false';
    }
  }, {
    key: "renderCheck",
    value: function renderCheck(visible, Icon) {
      var _this$props3 = this.props,
          disabled = _this$props3.disabled,
          theme = _this$props3.theme;
      return /*#__PURE__*/React__default.createElement(web.Spring, {
        from: {
          progress: 0
        },
        to: {
          progress: Number(visible)
        },
        config: springs.springs.instant,
        native: true
      }, function (_ref) {
        var progress = _ref.progress;
        return /*#__PURE__*/React__default.createElement(_StyledAnimatedSpan, {
          style: {
            opacity: progress,
            transform: progress.interpolate(function (v) {
              return "scale(".concat(v, ")");
            })
          }
        }, /*#__PURE__*/React__default.createElement(Icon, {
          color: disabled ? theme.selectedDisabled : theme.selected
        }));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          checked = _this$props4.checked,
          disabled = _this$props4.disabled,
          indeterminate = _this$props4.indeterminate,
          tabIndex = _this$props4.tabIndex,
          theme = _this$props4.theme,
          variant = _this$props4.variant,
          props = objectWithoutProperties._objectWithoutProperties(_this$props4, ["checked", "disabled", "indeterminate", "tabIndex", "theme", "variant"]);

      return /*#__PURE__*/React__default.createElement(FocusVisible.default, null, function (_ref2) {
        var focusVisible = _ref2.focusVisible,
            onFocus = _ref2.onFocus;
        return /*#__PURE__*/React__default.createElement(_StyledButton, _extends._extends({
          type: "button",
          ref: _this2._element,
          role: variant,
          tabIndex: tabIndex,
          "aria-checked": _this2.getAriaChecked(),
          onClick: _this2.handleClick,
          onFocus: onFocus,
          disabled: disabled
        }, props, {
          _css: 0.5 * constants.GU,
          _css2: disabled ? theme.controlDisabled : theme.control,
          _css3: theme.controlBorder,
          _css4: variant === 'radio' ? '50%' : "".concat(CHECKBOX_RADIUS, "px"),
          _css5: !disabled ? "\n                    cursor: pointer;\n                    &:active {\n                      border-color: ".concat(theme.controlBorderPressed, ";\n                    }\n                    &:focus .focus-ring {\n                      display: ").concat(focusVisible ? 'block' : 'none', ";\n                    }\n                  ") : ''
        }), variant === 'checkbox' && _this2.renderCheck(checked && !indeterminate, Check), variant === 'checkbox' && _this2.renderCheck(indeterminate, Dash), variant === 'radio' && _this2.renderCheck(checked, Bullet), /*#__PURE__*/React__default.createElement(_StyledSpan, {
          className: "focus-ring",
          _css6: theme.focus,
          _css7: variant === 'radio' ? '50%' : "".concat(constants.RADIUS, "px")
        }));
      });
    }
  }]);

  return Checkbox;
}(React__default.PureComponent);
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

var Dash = function Dash(_ref3) {
  var color = _ref3.color;
  return (
    /*#__PURE__*/

    /* Use SVG to have subpixels (strokeWidth="1.5") on Chrome */
    React__default.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 14 14"
    }, /*#__PURE__*/React__default.createElement("line", {
      x1: "3",
      y1: "7",
      x2: "11",
      y2: "7",
      stroke: color,
      strokeWidth: "1.5"
    }))
  );
};

var Check = function Check(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React__default.createElement("svg", {
    width: "12",
    height: "8",
    viewBox: "0 0 12 8"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "\n        M11.059 1.393\n        L4.335  7.395\n        L0.944  3.260\n        L2.104  2.309\n        L4.503  5.234\n        L10.060 0.274\n        L11.059 1.393\n        Z\n      ",
    fill: color
  }));
};

var _StyledSpan2 = _styled__default("span").withConfig({
  displayName: "Checkbox___StyledSpan2",
  componentId: "sc-1avgrx5-3"
})(["display:block;width:", "px;height:", "px;border-radius:50%;background:", ";"], RADIO_BULLET_SIZE, RADIO_BULLET_SIZE, function (p) {
  return p._css8;
});

var Bullet = function Bullet(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React__default.createElement(_StyledSpan2, {
    _css8: color
  });
};

var CheckBoxWithTheme = React__default.forwardRef(function (props, ref) {
  var theme = Theme.useTheme();
  return /*#__PURE__*/React__default.createElement(Checkbox, _extends._extends({
    theme: theme,
    ref: ref
  }, props));
});

exports.default = CheckBoxWithTheme;
//# sourceMappingURL=Checkbox.js.map
