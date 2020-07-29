'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-0711941d.js');
require('./unsupportedIterableToArray-68db1d3b.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
var index = require('./index-b0606964.js');
var defineProperty$1 = require('./defineProperty-0921a47c.js');
var toConsumableArray = require('./toConsumableArray-d8a4a2c3.js');
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
var getPrototypeOf = require('./getPrototypeOf-2a661a20.js');
require('./color.js');
require('./components.js');
require('./contains-component.js');
var css = require('./css.js');
require('./dayjs.min-e07657bf.js');
require('./date.js');
var miscellaneous = require('./miscellaneous.js');
require('./environment.js');
var font = require('./font.js');
require('./math-f4029164.js');
require('./characters.js');
require('./format.js');
require('./keycodes.js');
require('./url.js');
require('./web3.js');
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');

function _createSuper(Derived) { return function () { var Super = getPrototypeOf._getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = getPrototypeOf._getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return getPrototypeOf._possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TabBar = /*#__PURE__*/function (_React$Component) {
  getPrototypeOf._inherits(TabBar, _React$Component);

  var _super = _createSuper(TabBar);

  function TabBar() {
    var _this;

    getPrototypeOf._classCallCheck(this, TabBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty$1._defineProperty(getPrototypeOf._assertThisInitialized(_this), "state", {
      displayFocusRing: false
    });

    defineProperty$1._defineProperty(getPrototypeOf._assertThisInitialized(_this), "_barRef", React__default.createRef());

    defineProperty$1._defineProperty(getPrototypeOf._assertThisInitialized(_this), "handleMouseDown", function () {
      _this.disableFocusRing();
    });

    defineProperty$1._defineProperty(getPrototypeOf._assertThisInitialized(_this), "handleKeydown", function (_ref) {
      var key = _ref.key;

      if (key === 'Enter') {
        _this.selectElement(document.activeElement);

        _this.enableFocusRing();
      }

      if (key === 'Tab') {
        _this.enableFocusRing();
      }
    });

    defineProperty$1._defineProperty(getPrototypeOf._assertThisInitialized(_this), "handleTabMouseDown", function (_ref2) {
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

  getPrototypeOf._createClass(TabBar, [{
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

      var index = toConsumableArray._toConsumableArray(this._barRef.current.childNodes).indexOf(element);

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
      return /*#__PURE__*/React__default.createElement("nav", {
        onMouseDown: this.handleMouseDown
      }, /*#__PURE__*/React__default.createElement(Bar, {
        ref: this._barRef,
        border: !inAppBar
      }, items.map(function (item, i) {
        return /*#__PURE__*/React__default.createElement(Tab, {
          key: i,
          tabIndex: "0",
          selected: i === selected,
          focusRing: displayFocusRing,
          onMouseDown: _this2.handleTabMouseDown
        }, /*#__PURE__*/React__default.createElement(Label, {
          selected: i === selected
        }, item), displayFocusRing && /*#__PURE__*/React__default.createElement(FocusRing, null));
      })));
    }
  }]);

  return TabBar;
}(React__default.Component);
/* eslint-disable react/prop-types */


defineProperty$1._defineProperty(TabBar, "propTypes", {
  items: index.PropTypes.arrayOf(index.PropTypes.node).isRequired,
  selected: index.PropTypes.number,
  onChange: index.PropTypes.func,
  inAppBar: index.PropTypes.bool
});

defineProperty$1._defineProperty(TabBar, "defaultProps", {
  selected: 0,
  onChange: miscellaneous.noop
});

var _StyledUl = _styled__default("ul").withConfig({
  displayName: "TabBarLegacy___StyledUl",
  componentId: "sc-1hufqys-0"
})(["display:flex;border-bottom:", ";"], function (p) {
  return p._css;
});

function Bar(_ref3) {
  var children = _ref3.children,
      border = _ref3.border;
  var theme = Theme.useTheme();
  return /*#__PURE__*/React__default.createElement(_StyledUl, {
    _css: border ? "1px solid ".concat(theme.border) : '0'
  }, children);
}

var _StyledSpan = _styled__default("span").withConfig({
  displayName: "TabBarLegacy___StyledSpan",
  componentId: "sc-1hufqys-1"
})(["display:none;position:absolute;top:-5px;left:-5px;right:-5px;bottom:-5px;border:2px solid ", ";border-radius:2px;"], function (p) {
  return p._css2;
});

function FocusRing(_ref4) {
  var children = _ref4.children;
  var theme = Theme.useTheme();
  return /*#__PURE__*/React__default.createElement(_StyledSpan, {
    className: "TabBarLegacy-FocusRing",
    _css2: theme.accent
  }, children);
}

var _StyledLi = _styled__default("li").withConfig({
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
  return /*#__PURE__*/React__default.createElement(_StyledLi, {
    _css3: font.font({
      weight: selected ? 'bold' : 'normal',
      deprecationNotice: false
    }),
    _css4: css.unselectable()
  }, children);
}

var _StyledSpan2 = _styled__default("span").withConfig({
  displayName: "TabBarLegacy___StyledSpan2",
  componentId: "sc-1hufqys-3"
})(["display:flex;margin-bottom:-1px;padding:5px 0 3px;border-bottom:4px solid ", ";"], function (p) {
  return p._css5;
});

function Label(_ref6) {
  var children = _ref6.children,
      selected = _ref6.selected;
  var theme = Theme.useTheme();
  return /*#__PURE__*/React__default.createElement(_StyledSpan2, {
    _css5: selected ? theme.accent : 'transparent'
  }, children);
}

exports.default = TabBar;
//# sourceMappingURL=TabBarLegacy.js.map
