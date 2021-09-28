'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('./defineProperty-fdbd3c46.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var Theme = require('./Theme.js');
var font = require('./font.js');
var miscellaneous = require('./miscellaneous.js');
var css = require('./css.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./color.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

class TabBar extends React__default["default"].Component {
  constructor(...args) {
    super(...args);

    defineProperty._defineProperty(this, "state", {
      displayFocusRing: false
    });

    defineProperty._defineProperty(this, "_barRef", /*#__PURE__*/React__default["default"].createRef());

    defineProperty._defineProperty(this, "handleMouseDown", () => {
      this.disableFocusRing();
    });

    defineProperty._defineProperty(this, "handleKeydown", ({
      key
    }) => {
      if (key === 'Enter') {
        this.selectElement(document.activeElement);
        this.enableFocusRing();
      }

      if (key === 'Tab') {
        this.enableFocusRing();
      }
    });

    defineProperty._defineProperty(this, "handleTabMouseDown", ({
      currentTarget
    }) => {
      // We would usually avoid using the DOM when possible, and prefer using a
      // separate component (`Tab`) to keep the `index` in a prop, then pass it
      // using an event prop. But since `this.selectElement()` is needed (so we
      // can pass `document.activeElement` to it for the keyboard), and we have
      // `e.currentTarget` in the event object, we might as well use it for the
      // pointer device too.
      this.selectElement(currentTarget);
    });
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  enableFocusRing() {
    this.setState({
      displayFocusRing: true
    });
  }

  disableFocusRing() {
    this.setState({
      displayFocusRing: false
    });
  }

  selectElement(element) {
    const {
      onChange
    } = this.props;

    if (!element || !this._barRef.current) {
      return;
    }

    const index = [...this._barRef.current.childNodes].indexOf(element);

    if (index === -1) {
      return;
    }

    onChange(index);
  }

  render() {
    const {
      displayFocusRing
    } = this.state;
    const {
      items,
      selected,
      inAppBar
    } = this.props;
    return /*#__PURE__*/React__default["default"].createElement("nav", {
      onMouseDown: this.handleMouseDown
    }, /*#__PURE__*/React__default["default"].createElement(Bar, {
      ref: this._barRef,
      border: !inAppBar
    }, items.map((item, i) => /*#__PURE__*/React__default["default"].createElement(Tab, {
      key: i,
      tabIndex: "0",
      selected: i === selected,
      focusRing: displayFocusRing,
      onMouseDown: this.handleTabMouseDown
    }, /*#__PURE__*/React__default["default"].createElement(Label, {
      selected: i === selected
    }, item), displayFocusRing && /*#__PURE__*/React__default["default"].createElement(FocusRing, null)))));
  }

}
/* eslint-disable react/prop-types */


defineProperty._defineProperty(TabBar, "propTypes", {
  items: index.PropTypes.arrayOf(index.PropTypes.node).isRequired,
  selected: index.PropTypes.number,
  onChange: index.PropTypes.func,
  inAppBar: index.PropTypes.bool
});

defineProperty._defineProperty(TabBar, "defaultProps", {
  selected: 0,
  onChange: miscellaneous.noop
});

function Bar({
  children,
  border
}) {
  const theme = Theme.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(_StyledUl, {
    $_css: border ? `1px solid ${theme.border}` : '0'
  }, children);
}

function FocusRing({
  children
}) {
  const theme = Theme.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(_StyledSpan, {
    className: "TabBarLegacy-FocusRing",
    $_css2: theme.accent
  }, children);
}

function Tab({
  children,
  selected
}) {
  return /*#__PURE__*/React__default["default"].createElement(_StyledLi, {
    $_css3: font.font({
      weight: selected ? 'bold' : 'normal',
      deprecationNotice: false
    }),
    $_css4: css.unselectable()
  }, children);
}

function Label({
  children,
  selected
}) {
  const theme = Theme.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(_StyledSpan2, {
    $_css5: selected ? theme.accent : 'transparent'
  }, children);
}

var _StyledUl = _styled__default["default"]("ul").withConfig({
  displayName: "TabBarLegacy___StyledUl",
  componentId: "sc-1hufqys-0"
})(["display:flex;border-bottom:", ";"], p => p.$_css);

var _StyledSpan = _styled__default["default"]("span").withConfig({
  displayName: "TabBarLegacy___StyledSpan",
  componentId: "sc-1hufqys-1"
})(["display:none;position:absolute;top:-5px;left:-5px;right:-5px;bottom:-5px;border:2px solid ", ";border-radius:2px;"], p => p.$_css2);

var _StyledLi = _styled__default["default"]("li").withConfig({
  displayName: "TabBarLegacy___StyledLi",
  componentId: "sc-1hufqys-2"
})(["position:relative;list-style:none;padding:0 30px;cursor:pointer;", ";", ";&:focus{outline:0;.TabBarLegacy-FocusRing{display:block;}}"], p => p.$_css3, p => p.$_css4);

var _StyledSpan2 = _styled__default["default"]("span").withConfig({
  displayName: "TabBarLegacy___StyledSpan2",
  componentId: "sc-1hufqys-3"
})(["display:flex;margin-bottom:-1px;padding:5px 0 3px;border-bottom:4px solid ", ";"], p => p.$_css5);

exports["default"] = TabBar;
//# sourceMappingURL=TabBarLegacy.js.map
