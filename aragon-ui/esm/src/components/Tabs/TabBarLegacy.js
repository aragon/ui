import toConsumableArray from '../../../node_modules/@babel/runtime/helpers/toConsumableArray.js';
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
import { useTheme } from '../../theme/Theme2.js';
import { font } from '../../utils/font.js';
import { noop } from '../../utils/miscellaneous.js';
import { unselectable } from '../../utils/css.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TabBar = /*#__PURE__*/function (_React$Component) {
  inherits(TabBar, _React$Component);

  var _super = _createSuper(TabBar);

  function TabBar() {
    var _this;

    classCallCheck(this, TabBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty(assertThisInitialized(_this), "state", {
      displayFocusRing: false
    });

    defineProperty(assertThisInitialized(_this), "_barRef", /*#__PURE__*/React.createRef());

    defineProperty(assertThisInitialized(_this), "handleMouseDown", function () {
      _this.disableFocusRing();
    });

    defineProperty(assertThisInitialized(_this), "handleKeydown", function (_ref) {
      var key = _ref.key;

      if (key === 'Enter') {
        _this.selectElement(document.activeElement);

        _this.enableFocusRing();
      }

      if (key === 'Tab') {
        _this.enableFocusRing();
      }
    });

    defineProperty(assertThisInitialized(_this), "handleTabMouseDown", function (_ref2) {
      var currentTarget = _ref2.currentTarget;

      // We would usually avoid using the DOM when possible, and prefer using a
      // separate component (`Tab`) to keep the `index` in a prop, then pass it
      // using an event prop. But since `this.selectElement()` is needed (so we
      // can pass `document.activeElement` to it for the keyboard), and we have
      // `e.currentTarget` in the event object, we might as well use it for the
      // pointer device too.
      _this.selectElement(currentTarget);
    });

    return _this;
  }

  createClass(TabBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', this.handleKeydown);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeydown);
    }
  }, {
    key: "enableFocusRing",
    value: function enableFocusRing() {
      this.setState({
        displayFocusRing: true
      });
    }
  }, {
    key: "disableFocusRing",
    value: function disableFocusRing() {
      this.setState({
        displayFocusRing: false
      });
    }
  }, {
    key: "selectElement",
    value: function selectElement(element) {
      var onChange = this.props.onChange;

      if (!element || !this._barRef.current) {
        return;
      }

      var index = toConsumableArray(this._barRef.current.childNodes).indexOf(element);

      if (index === -1) {
        return;
      }

      onChange(index);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var displayFocusRing = this.state.displayFocusRing;
      var _this$props = this.props,
          items = _this$props.items,
          selected = _this$props.selected,
          inAppBar = _this$props.inAppBar;
      return /*#__PURE__*/React.createElement("nav", {
        onMouseDown: this.handleMouseDown
      }, /*#__PURE__*/React.createElement(Bar, {
        ref: this._barRef,
        border: !inAppBar
      }, items.map(function (item, i) {
        return /*#__PURE__*/React.createElement(Tab, {
          key: i,
          tabIndex: "0",
          selected: i === selected,
          focusRing: displayFocusRing,
          onMouseDown: _this2.handleTabMouseDown
        }, /*#__PURE__*/React.createElement(Label, {
          selected: i === selected
        }, item), displayFocusRing && /*#__PURE__*/React.createElement(FocusRing, null));
      })));
    }
  }]);

  return TabBar;
}(React.Component);
/* eslint-disable react/prop-types */


defineProperty(TabBar, "propTypes", {
  items: propTypes.arrayOf(propTypes.node).isRequired,
  selected: propTypes.number,
  onChange: propTypes.func,
  inAppBar: propTypes.bool
});

defineProperty(TabBar, "defaultProps", {
  selected: 0,
  onChange: noop
});

var _StyledUl = _styled("ul").withConfig({
  displayName: "TabBarLegacy___StyledUl",
  componentId: "sc-1hufqys-0"
})(["display:flex;border-bottom:", ";"], function (p) {
  return p._css;
});

function Bar(_ref3) {
  var children = _ref3.children,
      border = _ref3.border;
  var theme = useTheme();
  return /*#__PURE__*/React.createElement(_StyledUl, {
    _css: border ? "1px solid ".concat(theme.border) : '0'
  }, children);
}

var _StyledSpan = _styled("span").withConfig({
  displayName: "TabBarLegacy___StyledSpan",
  componentId: "sc-1hufqys-1"
})(["display:none;position:absolute;top:-5px;left:-5px;right:-5px;bottom:-5px;border:2px solid ", ";border-radius:2px;"], function (p) {
  return p._css2;
});

function FocusRing(_ref4) {
  var children = _ref4.children;
  var theme = useTheme();
  return /*#__PURE__*/React.createElement(_StyledSpan, {
    className: "TabBarLegacy-FocusRing",
    _css2: theme.accent
  }, children);
}

var _StyledLi = _styled("li").withConfig({
  displayName: "TabBarLegacy___StyledLi",
  componentId: "sc-1hufqys-2"
})(["position:relative;list-style:none;padding:0 30px;cursor:pointer;", ";", ";&:focus{outline:0;.TabBarLegacy-FocusRing{display:block;}}"], function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
});

function Tab(_ref5) {
  var children = _ref5.children,
      selected = _ref5.selected;
  return /*#__PURE__*/React.createElement(_StyledLi, {
    _css3: font({
      weight: selected ? 'bold' : 'normal',
      deprecationNotice: false
    }),
    _css4: unselectable()
  }, children);
}

var _StyledSpan2 = _styled("span").withConfig({
  displayName: "TabBarLegacy___StyledSpan2",
  componentId: "sc-1hufqys-3"
})(["display:flex;margin-bottom:-1px;padding:5px 0 3px;border-bottom:4px solid ", ";"], function (p) {
  return p._css5;
});

function Label(_ref6) {
  var children = _ref6.children,
      selected = _ref6.selected;
  var theme = useTheme();
  return /*#__PURE__*/React.createElement(_StyledSpan2, {
    _css5: selected ? theme.accent : 'transparent'
  }, children);
}

export default TabBar;
//# sourceMappingURL=TabBarLegacy.js.map
