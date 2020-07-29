import './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import React from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import { P as PropTypes } from './index-097535f1.js';
import { _ as _defineProperty } from './defineProperty-a0480c32.js';
import _styled from 'styled-components';
import { _ as _inherits, a as _createClass, b as _classCallCheck, e as _assertThisInitialized, c as _getPrototypeOf, d as _possibleConstructorReturn } from './getPrototypeOf-b96da1e1.js';
import './miscellaneous.js';
import './environment.js';
import './font.js';
import './constants.js';
import './breakpoints.js';
import { springs } from './springs.js';
import './text-styles.js';
import { _ as _extends } from './extends-db4f0c26.js';
import './objectWithoutPropertiesLoose-9606ad13.js';
import 'react-dom';
import { T as Transition, e as extendedAnimated } from './web-a351a0a1.js';
import { _ as _taggedTemplateLiteral } from './taggedTemplateLiteral-37fd5203.js';
import LeftIcon from './LeftIcon.js';

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  height: 63px;\n  padding: ", ";\n  cursor: pointer;\n  svg {\n    color: hsl(179, 76%, 48%);\n  }\n  :active svg {\n    color: hsl(179, 76%, 63%);\n  }\n  & + ", " {\n    padding-left: 0;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  height: 100%;\n  align-items: center;\n  padding-left: 30px;\n  white-space: nowrap;\n  font-size: 22px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  position: relative;\n  height: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var NavigationBar = /*#__PURE__*/function (_React$Component) {
  _inherits(NavigationBar, _React$Component);

  var _super = _createSuper(NavigationBar);

  function NavigationBar() {
    var _this;

    _classCallCheck(this, NavigationBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      cachedItems: null,
      direction: -1
    });

    return _this;
  }

  _createClass(NavigationBar, [{
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
      return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Transition, {
        items: displayedItems,
        keys: displayedItems.map( // Use a different key than 0 when there is only one item, so that
        // the “leave” transition of the first item can be executed when a
        // second item is added.
        function (item) {
          return items.length === 1 ? -1 : item.index;
        }),
        config: springs.smooth,
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
          return /*#__PURE__*/React.createElement(Item, _extends({
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
}(React.Component);

_defineProperty(NavigationBar, "propTypes", {
  onBack: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.node),
  compact: PropTypes.bool
});

_defineProperty(NavigationBar, "defaultProps", {
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
  return /*#__PURE__*/React.createElement(extendedAnimated.span, {
    style: {
      display: 'flex',
      alignItems: 'center',
      opacity: opacity,
      transform: position.interpolate(function (p) {
        return "translate(".concat(p * 20, "px, 0)");
      })
    }
  }, /*#__PURE__*/React.createElement(Title, null, displayBack && /*#__PURE__*/React.createElement(BackButton, {
    onClick: onBack,
    compact: compact
  }, /*#__PURE__*/React.createElement(LeftIcon, null)), /*#__PURE__*/React.createElement(Label, null, label)));
};

Item.propTypes = {
  compact: PropTypes.bool,
  displayBack: PropTypes.bool,
  label: PropTypes.node,
  onBack: PropTypes.func,
  opacity: PropTypes.object,
  position: PropTypes.object
};
var Container = _styled.span(_templateObject());
var Title = _styled.span(_templateObject2());
var Label = _styled.span(_templateObject3());
var BackButton = _styled.span(_templateObject4(), function (p) {
  return p.compact ? '0 16px' : '0 20px 0 30px';
}, Label);

export default NavigationBar;
//# sourceMappingURL=NavigationBar.js.map
