import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import classCallCheck from '../../../node_modules/@babel/runtime/helpers/classCallCheck.js';
import createClass from '../../../node_modules/@babel/runtime/helpers/createClass.js';
import assertThisInitialized from '../../../node_modules/@babel/runtime/helpers/assertThisInitialized.js';
import inherits from '../../../node_modules/@babel/runtime/helpers/inherits.js';
import possibleConstructorReturn from '../../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js';
import getPrototypeOf from '../../../node_modules/@babel/runtime/helpers/getPrototypeOf.js';
import defineProperty from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import _styled from 'styled-components';
import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import { animated as extendedAnimated, Spring } from '../../../node_modules/react-spring/web.js';
import FocusVisible from '../FocusVisible/FocusVisible.js';
import { useTheme } from '../../theme/Theme2.js';
import { springs } from '../../style/springs.js';
import { GU, RADIUS } from '../../style/constants.js';
import { noop } from '../../utils/miscellaneous.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var SIZE = 18;
var CHECKBOX_RADIUS = 2;
var RADIO_BULLET_SIZE = 10;

var _StyledAnimatedSpan = _styled(extendedAnimated.span).withConfig({
  displayName: "Checkbox___StyledAnimatedSpan",
  componentId: "sc-1avgrx5-0"
})(["position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;transform-origin:50% 50%;"]);

var _StyledButton = _styled("button").withConfig({
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

var _StyledSpan = _styled("span").withConfig({
  displayName: "Checkbox___StyledSpan",
  componentId: "sc-1avgrx5-2"
})(["position:absolute;top:-2px;left:-2px;right:-2px;bottom:-2px;border:2px solid ", ";border-radius:", ";display:none;"], function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
});

var Checkbox = /*#__PURE__*/function (_React$PureComponent) {
  inherits(Checkbox, _React$PureComponent);

  var _super = _createSuper(Checkbox);

  function Checkbox() {
    var _this;

    classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty(assertThisInitialized(_this), "_element", /*#__PURE__*/React.createRef());

    defineProperty(assertThisInitialized(_this), "handleKeyPress", function (e) {
      e.preventDefault();
    });

    defineProperty(assertThisInitialized(_this), "handleClick", function (e) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          checked = _this$props.checked,
          indeterminate = _this$props.indeterminate;
      onChange(indeterminate ? false : !checked);
    });

    defineProperty(assertThisInitialized(_this), "focus", function () {
      _this._element.current.focus();
    });

    return _this;
  }

  createClass(Checkbox, [{
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
      return /*#__PURE__*/React.createElement(Spring, {
        from: {
          progress: 0
        },
        to: {
          progress: Number(visible)
        },
        config: springs.instant,
        native: true
      }, function (_ref) {
        var progress = _ref.progress;
        return /*#__PURE__*/React.createElement(_StyledAnimatedSpan, {
          style: {
            opacity: progress,
            transform: progress.interpolate(function (v) {
              return "scale(".concat(v, ")");
            })
          }
        }, /*#__PURE__*/React.createElement(Icon, {
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
          props = objectWithoutProperties(_this$props4, ["checked", "disabled", "indeterminate", "tabIndex", "theme", "variant"]);

      return /*#__PURE__*/React.createElement(FocusVisible, null, function (_ref2) {
        var focusVisible = _ref2.focusVisible,
            onFocus = _ref2.onFocus;
        return /*#__PURE__*/React.createElement(_StyledButton, _extends_1({
          type: "button",
          ref: _this2._element,
          role: variant,
          tabIndex: tabIndex,
          "aria-checked": _this2.getAriaChecked(),
          onClick: _this2.handleClick,
          onKeyPress: _this2.handleKeyPress,
          onFocus: onFocus,
          disabled: disabled
        }, props, {
          _css: 0.5 * GU,
          _css2: disabled ? theme.controlDisabled : theme.control,
          _css3: theme.controlBorder,
          _css4: variant === 'radio' ? '50%' : "".concat(CHECKBOX_RADIUS, "px"),
          _css5: !disabled ? "\n                    cursor: pointer;\n                    &:active {\n                      border-color: ".concat(theme.controlBorderPressed, ";\n                    }\n                    &:focus .focus-ring {\n                      display: ").concat(focusVisible ? 'block' : 'none', ";\n                    }\n                  ") : ''
        }), variant === 'checkbox' && _this2.renderCheck(checked && !indeterminate, Check), variant === 'checkbox' && _this2.renderCheck(indeterminate, Dash), variant === 'radio' && _this2.renderCheck(checked, Bullet), /*#__PURE__*/React.createElement(_StyledSpan, {
          className: "focus-ring",
          _css6: theme.focus,
          _css7: variant === 'radio' ? '50%' : "".concat(RADIUS, "px")
        }));
      });
    }
  }]);

  return Checkbox;
}(React.PureComponent);
/* eslint-disable react/prop-types */


defineProperty(Checkbox, "propTypes", {
  checked: propTypes.bool,
  disabled: propTypes.bool,
  indeterminate: propTypes.bool,
  onChange: propTypes.func,
  tabIndex: propTypes.string,
  theme: propTypes.object,
  variant: propTypes.oneOf(['checkbox', 'radio'])
});

defineProperty(Checkbox, "defaultProps", {
  checked: false,
  disabled: false,
  indeterminate: false,
  onChange: noop,
  tabIndex: '0',
  variant: 'checkbox'
});

var Dash = function Dash(_ref3) {
  var color = _ref3.color;
  return (
    /*#__PURE__*/

    /* Use SVG to have subpixels (strokeWidth="1.5") on Chrome */
    React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 14 14"
    }, /*#__PURE__*/React.createElement("line", {
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
  return /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "8",
    viewBox: "0 0 12 8"
  }, /*#__PURE__*/React.createElement("path", {
    d: "\n        M11.059 1.393\n        L4.335  7.395\n        L0.944  3.260\n        L2.104  2.309\n        L4.503  5.234\n        L10.060 0.274\n        L11.059 1.393\n        Z\n      ",
    fill: color
  }));
};

var _StyledSpan2 = _styled("span").withConfig({
  displayName: "Checkbox___StyledSpan2",
  componentId: "sc-1avgrx5-3"
})(["display:block;width:", "px;height:", "px;border-radius:50%;background:", ";"], RADIO_BULLET_SIZE, RADIO_BULLET_SIZE, function (p) {
  return p._css8;
});

var Bullet = function Bullet(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement(_StyledSpan2, {
    _css8: color
  });
};

var CheckBoxWithTheme = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var theme = useTheme();
  return /*#__PURE__*/React.createElement(Checkbox, _extends_1({
    theme: theme,
    ref: ref
  }, props));
});

export default CheckBoxWithTheme;
//# sourceMappingURL=Checkbox.js.map
