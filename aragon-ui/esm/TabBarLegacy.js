import './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import React from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import { P as PropTypes } from './index-097535f1.js';
import { _ as _defineProperty } from './defineProperty-a0480c32.js';
import { _ as _toConsumableArray } from './toConsumableArray-127424c2.js';
import _styled from 'styled-components';
import { _ as _inherits, a as _createClass, b as _classCallCheck, e as _assertThisInitialized, c as _getPrototypeOf, d as _possibleConstructorReturn } from './getPrototypeOf-b96da1e1.js';
import './color.js';
import './components.js';
import './contains-component.js';
import { unselectable } from './css.js';
import './dayjs.min-e57fb69a.js';
import './date.js';
import { noop } from './miscellaneous.js';
import './environment.js';
import { font } from './font.js';
import './math-e6d0e93a.js';
import './characters.js';
import './format.js';
import './keycodes.js';
import './url.js';
import './web3.js';
import './theme-dark.js';
import './theme-light.js';
import { useTheme } from './Theme.js';

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TabBar = /*#__PURE__*/function (_React$Component) {
  _inherits(TabBar, _React$Component);

  var _super = _createSuper(TabBar);

  function TabBar() {
    var _this;

    _classCallCheck(this, TabBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      displayFocusRing: false
    });

    _defineProperty(_assertThisInitialized(_this), "_barRef", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "handleMouseDown", function () {
      _this.disableFocusRing();
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeydown", function (_ref) {
      var key = _ref.key;

      if (key === 'Enter') {
        _this.selectElement(document.activeElement);

        _this.enableFocusRing();
      }

      if (key === 'Tab') {
        _this.enableFocusRing();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleTabMouseDown", function (_ref2) {
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

  _createClass(TabBar, [{
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

      var index = _toConsumableArray(this._barRef.current.childNodes).indexOf(element);

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


_defineProperty(TabBar, "propTypes", {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
  selected: PropTypes.number,
  onChange: PropTypes.func,
  inAppBar: PropTypes.bool
});

_defineProperty(TabBar, "defaultProps", {
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
