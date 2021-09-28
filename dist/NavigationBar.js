'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var defineProperty = require('./defineProperty-fdbd3c46.js');
var React = require('react');
var index = require('./index-19b0c963.js');
var _styled = require('styled-components');
var web = require('./web-17920307.js');
var LeftIcon = require('./LeftIcon.js');
var springs = require('./springs.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./objectWithoutPropertiesLoose-34dfcdd4.js');
require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);

class NavigationBar extends React__default["default"].Component {
  constructor(...args) {
    super(...args);

    defineProperty._defineProperty(this, "state", {
      cachedItems: null,
      direction: -1
    });
  }

  static getDerivedStateFromProps(props, state) {
    const updatedState = {
      cachedItems: props.items
    };

    if (!state.cachedItems) {
      return updatedState;
    }

    return { ...updatedState,
      direction: state.cachedItems.length > props.items.length ? 1 : -1
    };
  }

  render() {
    const {
      onBack,
      items,
      compact
    } = this.props;
    const displayedItems = items.map((node, index) => ({
      node,
      index
    })).slice(-1);
    return /*#__PURE__*/React__default["default"].createElement(Container, null, /*#__PURE__*/React__default["default"].createElement(web.Transition, {
      items: displayedItems,
      keys: displayedItems.map( // Use a different key than 0 when there is only one item, so that
      // the “leave” transition of the first item can be executed when a
      // second item is added.
      item => items.length === 1 ? -1 : item.index),
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
    }, item => styles => /*#__PURE__*/React__default["default"].createElement(Item, _extends._extends({
      label: item.node,
      onBack: onBack,
      displayBack: item.index > 0,
      compact: compact
    }, styles))));
  }

}

defineProperty._defineProperty(NavigationBar, "propTypes", {
  onBack: index.PropTypes.func,
  items: index.PropTypes.arrayOf(index.PropTypes.node),
  compact: index.PropTypes.bool
});

defineProperty._defineProperty(NavigationBar, "defaultProps", {
  onBack: () => {},
  items: [],
  compact: false
});

const Item = ({
  opacity,
  position,
  displayBack,
  onBack,
  label,
  compact
}) => /*#__PURE__*/React__default["default"].createElement(web.extendedAnimated.span, {
  style: {
    display: 'flex',
    alignItems: 'center',
    opacity,
    transform: position.interpolate(p => `translate(${p * 20}px, 0)`)
  }
}, /*#__PURE__*/React__default["default"].createElement(Title, null, displayBack && /*#__PURE__*/React__default["default"].createElement(BackButton, {
  onClick: onBack,
  compact: compact
}, /*#__PURE__*/React__default["default"].createElement(LeftIcon["default"], null)), /*#__PURE__*/React__default["default"].createElement(Label, null, label)));

Item.propTypes = {
  compact: index.PropTypes.bool,
  displayBack: index.PropTypes.bool,
  label: index.PropTypes.node,
  onBack: index.PropTypes.func,
  opacity: index.PropTypes.object,
  position: index.PropTypes.object
};
const Container = _styled__default["default"].span.withConfig({
  displayName: "NavigationBar__Container",
  componentId: "sc-pd4tzi-0"
})(["display:flex;position:relative;height:100%;"]);
const Title = _styled__default["default"].span.withConfig({
  displayName: "NavigationBar__Title",
  componentId: "sc-pd4tzi-1"
})(["display:flex;align-items:center;position:absolute;left:0;top:0;bottom:0;"]);
const Label = _styled__default["default"].span.withConfig({
  displayName: "NavigationBar__Label",
  componentId: "sc-pd4tzi-2"
})(["display:flex;height:100%;align-items:center;padding-left:30px;white-space:nowrap;font-size:22px;"]);
const BackButton = _styled__default["default"].span.withConfig({
  displayName: "NavigationBar__BackButton",
  componentId: "sc-pd4tzi-3"
})(["display:flex;align-items:center;height:63px;padding:", ";cursor:pointer;svg{color:hsl(179,76%,48%);}:active svg{color:hsl(179,76%,63%);}& + ", "{padding-left:0;}"], p => p.compact ? '0 16px' : '0 20px 0 30px', Label);

exports["default"] = NavigationBar;
//# sourceMappingURL=NavigationBar.js.map
