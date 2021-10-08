import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import classCallCheck from '../../../node_modules/@babel/runtime/helpers/classCallCheck.js';
import createClass from '../../../node_modules/@babel/runtime/helpers/createClass.js';
import assertThisInitialized from '../../../node_modules/@babel/runtime/helpers/assertThisInitialized.js';
import inherits from '../../../node_modules/@babel/runtime/helpers/inherits.js';
import possibleConstructorReturn from '../../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js';
import getPrototypeOf from '../../../node_modules/@babel/runtime/helpers/getPrototypeOf.js';
import defineProperty from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import _styled from 'styled-components';
import { Transition, animated as extendedAnimated } from '../../../node_modules/react-spring/web.js';
import LeftIcon from './LeftIcon.js';
import { springs } from '../../style/springs.js';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var NavigationBar = /*#__PURE__*/function (_React$Component) {
  inherits(NavigationBar, _React$Component);

  var _super = _createSuper(NavigationBar);

  function NavigationBar() {
    var _this;

    classCallCheck(this, NavigationBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty(assertThisInitialized(_this), "state", {
      cachedItems: null,
      direction: -1
    });

    return _this;
  }

  createClass(NavigationBar, [{
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
          return /*#__PURE__*/React.createElement(Item, _extends_1({
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

      return _objectSpread(_objectSpread({}, updatedState), {}, {
        direction: state.cachedItems.length > props.items.length ? 1 : -1
      });
    }
  }]);

  return NavigationBar;
}(React.Component);

defineProperty(NavigationBar, "propTypes", {
  onBack: propTypes.func,
  items: propTypes.arrayOf(propTypes.node),
  compact: propTypes.bool
});

defineProperty(NavigationBar, "defaultProps", {
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
  compact: propTypes.bool,
  displayBack: propTypes.bool,
  label: propTypes.node,
  onBack: propTypes.func,
  opacity: propTypes.object,
  position: propTypes.object
};
var Container = _styled.span.withConfig({
  displayName: "NavigationBar__Container",
  componentId: "pd4tzi-0"
})(["display:flex;position:relative;height:100%;"]);
var Title = _styled.span.withConfig({
  displayName: "NavigationBar__Title",
  componentId: "pd4tzi-1"
})(["display:flex;align-items:center;position:absolute;left:0;top:0;bottom:0;"]);
var Label = _styled.span.withConfig({
  displayName: "NavigationBar__Label",
  componentId: "pd4tzi-2"
})(["display:flex;height:100%;align-items:center;padding-left:30px;white-space:nowrap;font-size:22px;"]);
var BackButton = _styled.span.withConfig({
  displayName: "NavigationBar__BackButton",
  componentId: "pd4tzi-3"
})(["display:flex;align-items:center;height:63px;padding:", ";cursor:pointer;svg{color:hsl(179,76%,48%);}:active svg{color:hsl(179,76%,63%);}& + ", "{padding-left:0;}"], function (p) {
  return p.compact ? '0 16px' : '0 20px 0 30px';
}, Label);

export default NavigationBar;
//# sourceMappingURL=NavigationBar.js.map
