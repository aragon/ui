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
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
var getPrototypeOf = require('./getPrototypeOf-2a661a20.js');
require('./miscellaneous.js');
require('./environment.js');
require('./font.js');
require('./constants.js');
require('./breakpoints.js');
var springs = require('./springs.js');
require('./text-styles.js');
var _extends$1 = require('./extends-40571110.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
var web = require('./web-d0294535.js');
var taggedTemplateLiteral = require('./taggedTemplateLiteral-227ed122.js');
var LeftIcon = require('./LeftIcon.js');

function _templateObject4() {
  var data = taggedTemplateLiteral._taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  height: 63px;\n  padding: ", ";\n  cursor: pointer;\n  svg {\n    color: hsl(179, 76%, 48%);\n  }\n  :active svg {\n    color: hsl(179, 76%, 63%);\n  }\n  & + ", " {\n    padding-left: 0;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = taggedTemplateLiteral._taggedTemplateLiteral(["\n  display: flex;\n  height: 100%;\n  align-items: center;\n  padding-left: 30px;\n  white-space: nowrap;\n  font-size: 22px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral._taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral._taggedTemplateLiteral(["\n  display: flex;\n  position: relative;\n  height: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty$1._defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = getPrototypeOf._getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = getPrototypeOf._getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return getPrototypeOf._possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var NavigationBar = /*#__PURE__*/function (_React$Component) {
  getPrototypeOf._inherits(NavigationBar, _React$Component);

  var _super = _createSuper(NavigationBar);

  function NavigationBar() {
    var _this;

    getPrototypeOf._classCallCheck(this, NavigationBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty$1._defineProperty(getPrototypeOf._assertThisInitialized(_this), "state", {
      cachedItems: null,
      direction: -1
    });

    return _this;
  }

  getPrototypeOf._createClass(NavigationBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onBack = _this$props.onBack,
          items = _this$props.items,
          compact = _this$props.compact;
      var displayedItems = items.map(function (node, index) {
        return {
          node: node,
          index: index
        };
      }).slice(-1);
      return /*#__PURE__*/React__default.createElement(Container, null, /*#__PURE__*/React__default.createElement(web.Transition, {
        items: displayedItems,
        keys: displayedItems.map( // Use a different key than 0 when there is only one item, so that
        // the “leave” transition of the first item can be executed when a
        // second item is added.
        function (item) {
          return items.length === 1 ? -1 : item.index;
        }),
        config: springs.springs.smooth,
        initial: null,
        from: {
          opacity: 0,
          position: this.state.direction * -1
        },
        enter: {
          opacity: 1,
          position: 0
        },
        leave: {
          opacity: 0,
          position: this.state.direction
        },
        native: true
      }, function (item) {
        return function (styles) {
          return /*#__PURE__*/React__default.createElement(Item, _extends$1._extends({
            label: item.node,
            onBack: onBack,
            displayBack: item.index > 0,
            compact: compact
          }, styles));
        };
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var updatedState = {
        cachedItems: props.items
      };

      if (!state.cachedItems) {
        return updatedState;
      }

      return _objectSpread({}, updatedState, {
        direction: state.cachedItems.length > props.items.length ? 1 : -1
      });
    }
  }]);

  return NavigationBar;
}(React__default.Component);

defineProperty$1._defineProperty(NavigationBar, "propTypes", {
  onBack: index.PropTypes.func,
  items: index.PropTypes.arrayOf(index.PropTypes.node),
  compact: index.PropTypes.bool
});

defineProperty$1._defineProperty(NavigationBar, "defaultProps", {
  onBack: function onBack() {},
  items: [],
  compact: false
});

var Item = function Item(_ref) {
  var opacity = _ref.opacity,
      position = _ref.position,
      displayBack = _ref.displayBack,
      onBack = _ref.onBack,
      label = _ref.label,
      compact = _ref.compact;
  return /*#__PURE__*/React__default.createElement(web.extendedAnimated.span, {
    style: {
      display: 'flex',
      alignItems: 'center',
      opacity: opacity,
      transform: position.interpolate(function (p) {
        return "translate(".concat(p * 20, "px, 0)");
      })
    }
  }, /*#__PURE__*/React__default.createElement(Title, null, displayBack && /*#__PURE__*/React__default.createElement(BackButton, {
    onClick: onBack,
    compact: compact
  }, /*#__PURE__*/React__default.createElement(LeftIcon.default, null)), /*#__PURE__*/React__default.createElement(Label, null, label)));
};

Item.propTypes = {
  compact: index.PropTypes.bool,
  displayBack: index.PropTypes.bool,
  label: index.PropTypes.node,
  onBack: index.PropTypes.func,
  opacity: index.PropTypes.object,
  position: index.PropTypes.object
};
var Container = _styled__default.span(_templateObject());
var Title = _styled__default.span(_templateObject2());
var Label = _styled__default.span(_templateObject3());
var BackButton = _styled__default.span(_templateObject4(), function (p) {
  return p.compact ? '0 16px' : '0 20px 0 30px';
}, Label);

exports.default = NavigationBar;
//# sourceMappingURL=NavigationBar.js.map
