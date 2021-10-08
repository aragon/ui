'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var toConsumableArray = require('./toConsumableArray-cc0d28a9.js');
var getPrototypeOf = require('./getPrototypeOf-55c9e80c.js');
var defineProperty = require('./defineProperty-3cad0327.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-37353731.js');
var Theme = require('./Theme.js');
var font = require('./font.js');
var miscellaneous = require('./miscellaneous.js');
var css = require('./css.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./slicedToArray-a8a77f0e.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./color.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf.getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf.getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return getPrototypeOf.possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TabBar = /*#__PURE__*/function (_React$Component) {
  getPrototypeOf.inherits(TabBar, _React$Component);

  var _super = _createSuper(TabBar);

  function TabBar() {
    var _this;

    getPrototypeOf.classCallCheck(this, TabBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty.defineProperty(getPrototypeOf.assertThisInitialized(_this), "state", {
      displayFocusRing: false
    });

    defineProperty.defineProperty(getPrototypeOf.assertThisInitialized(_this), "_barRef", /*#__PURE__*/React__default['default'].createRef());

    defineProperty.defineProperty(getPrototypeOf.assertThisInitialized(_this), "handleMouseDown", function () {
      _this.disableFocusRing();
    });

    defineProperty.defineProperty(getPrototypeOf.assertThisInitialized(_this), "handleKeydown", function (_ref) {
      var key = _ref.key;

      if (key === 'Enter') {
        _this.selectElement(document.activeElement);

        _this.enableFocusRing();
      }

      if (key === 'Tab') {
        _this.enableFocusRing();
      }
    });

    defineProperty.defineProperty(getPrototypeOf.assertThisInitialized(_this), "handleTabMouseDown", function (_ref2) {
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

  getPrototypeOf.createClass(TabBar, [{
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

      var index = toConsumableArray.toConsumableArray(this._barRef.current.childNodes).indexOf(element);

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
      return /*#__PURE__*/React__default['default'].createElement("nav", {
        onMouseDown: this.handleMouseDown
      }, /*#__PURE__*/React__default['default'].createElement(Bar, {
        ref: this._barRef,
        border: !inAppBar
      }, items.map(function (item, i) {
        return /*#__PURE__*/React__default['default'].createElement(Tab, {
          key: i,
          tabIndex: "0",
          selected: i === selected,
          focusRing: displayFocusRing,
          onMouseDown: _this2.handleTabMouseDown
        }, /*#__PURE__*/React__default['default'].createElement(Label, {
          selected: i === selected
        }, item), displayFocusRing && /*#__PURE__*/React__default['default'].createElement(FocusRing, null));
      })));
    }
  }]);

  return TabBar;
}(React__default['default'].Component);
/* eslint-disable react/prop-types */


defineProperty.defineProperty(TabBar, "propTypes", {
  items: index.propTypes.arrayOf(index.propTypes.node).isRequired,
  selected: index.propTypes.number,
  onChange: index.propTypes.func,
  inAppBar: index.propTypes.bool
});

defineProperty.defineProperty(TabBar, "defaultProps", {
  selected: 0,
  onChange: miscellaneous.noop
});

var _StyledUl = _styled__default['default']("ul").withConfig({
  displayName: "TabBarLegacy___StyledUl",
  componentId: "sc-1hufqys-0"
})(["display:flex;border-bottom:", ";"], function (p) {
  return p._css;
});

function Bar(_ref3) {
  var children = _ref3.children,
      border = _ref3.border;
  var theme = Theme.useTheme();
  return /*#__PURE__*/React__default['default'].createElement(_StyledUl, {
    _css: border ? "1px solid ".concat(theme.border) : '0'
  }, children);
}

var _StyledSpan = _styled__default['default']("span").withConfig({
  displayName: "TabBarLegacy___StyledSpan",
  componentId: "sc-1hufqys-1"
})(["display:none;position:absolute;top:-5px;left:-5px;right:-5px;bottom:-5px;border:2px solid ", ";border-radius:2px;"], function (p) {
  return p._css2;
});

function FocusRing(_ref4) {
  var children = _ref4.children;
  var theme = Theme.useTheme();
  return /*#__PURE__*/React__default['default'].createElement(_StyledSpan, {
    className: "TabBarLegacy-FocusRing",
    _css2: theme.accent
  }, children);
}

var _StyledLi = _styled__default['default']("li").withConfig({
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
  return /*#__PURE__*/React__default['default'].createElement(_StyledLi, {
    _css3: font.font({
      weight: selected ? 'bold' : 'normal',
      deprecationNotice: false
    }),
    _css4: css.unselectable()
  }, children);
}

var _StyledSpan2 = _styled__default['default']("span").withConfig({
  displayName: "TabBarLegacy___StyledSpan2",
  componentId: "sc-1hufqys-3"
})(["display:flex;margin-bottom:-1px;padding:5px 0 3px;border-bottom:4px solid ", ";"], function (p) {
  return p._css5;
});

function Label(_ref6) {
  var children = _ref6.children,
      selected = _ref6.selected;
  var theme = Theme.useTheme();
  return /*#__PURE__*/React__default['default'].createElement(_StyledSpan2, {
    _css5: selected ? theme.accent : 'transparent'
  }, children);
}

exports.default = TabBar;
//# sourceMappingURL=TabBarLegacy.js.map
