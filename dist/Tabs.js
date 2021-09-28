'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var index$1 = require('./index-70e12149.js');
var Layout = require('./Layout.js');
var Bar = require('./Bar.js');
var TabBarLegacy = require('./TabBarLegacy.js');
var TabsFullWidth = require('./TabsFullWidth.js');
var Tab = require('./Tab.js');
var environment = require('./environment.js');
var miscellaneous = require('./miscellaneous.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./Viewport-b495052b.js');
require('./defineProperty-fdbd3c46.js');
require('./isObject-f0a96713.js');
require('./breakpoints.js');
require('./constants.js');
require('./css.js');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./font.js');
require('./web-17920307.js');
require('./objectWithoutPropertiesLoose-34dfcdd4.js');
require('react-dom');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./keycodes.js');
require('./text-styles.js');
require('./useFocusLeave.js');
require('./IconDown.js');
require('./IconPropTypes-435c57cb.js');
require('./springs.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function TabBar({
  items,
  selected,
  onChange
}) {
  return /*#__PURE__*/React__default["default"].createElement("nav", null, /*#__PURE__*/React__default["default"].createElement(_StyledUl, null, items.map((item, i) => /*#__PURE__*/React__default["default"].createElement(Tab["default"], {
    key: i,
    index: i,
    item: item,
    onChange: onChange,
    selected: i === selected
  }))));
}

TabBar.propTypes = {
  items: index.PropTypes.arrayOf(index.PropTypes.node).isRequired,
  selected: index.PropTypes.number,
  onChange: index.PropTypes.func
};
TabBar.defaultProps = {
  selected: 0,
  onChange: miscellaneous.noop
};

function Tabs(props) {
  const {
    layoutName
  } = Layout.useLayout();
  const [insideBar] = index$1.o('Bar');
  const [insideSidePanel] = index$1.o('SidePanel');

  if (insideBar) {
    throw new Error('Tabs cannot be a child of Bar: please use the Tabs component directly.');
  }

  const selected = Math.min(props.items.length - 1, Math.max(0, props.selected));

  if (selected !== props.selected) {
    environment.warnOnce('Tabs:outOfRangeSelected', `Tabs: the selected item doesn’t exist (selected index: ${props.selected}, selection range: 0 to ${props.items.length - 1}). Selecting ${selected} instead.`);
  }

  if (layoutName === 'small') {
    return /*#__PURE__*/React__default["default"].createElement(TabsFullWidth.TabsFullWidth, _extends._extends({}, props, {
      selected: selected
    }));
  }

  return /*#__PURE__*/React__default["default"].createElement(_StyledBar, {
    $_css: insideSidePanel ? `
            border-width: 0 0 1px 0;
            border-radius: 0;
          ` : ''
  }, /*#__PURE__*/React__default["default"].createElement(TabBar, _extends._extends({}, props, {
    selected: selected
  })));
}

Tabs.propTypes = TabBar.propTypes; // TabBar legacy compatibility

function TabBarLegacyCompatibility(props) {
  const [insideAppBar] = index$1.o('AppBar'); // Use a separate component for Tabs in AppBar, to prevent breaking anything.

  if (insideAppBar) {
    return /*#__PURE__*/React__default["default"].createElement(TabBarLegacy["default"], _extends._extends({}, props, {
      inAppBar: true
    }));
  }

  environment.warnOnce('TabBarLegacyCompatibility', 'TabBar is deprecated and was used outside of an AppBar. Please use the Tabs component instead.');
  return /*#__PURE__*/React__default["default"].createElement(Tabs, props);
}

var _StyledUl = _styled__default["default"]("ul").withConfig({
  displayName: "Tabs___StyledUl",
  componentId: "sc-1eu39ev-0"
})(["display:flex"]);

var _StyledBar = _styled__default["default"](Bar["default"]).withConfig({
  displayName: "Tabs___StyledBar",
  componentId: "sc-1eu39ev-1"
})(["overflow:hidden;", ""], p => p.$_css);

exports.TabBarLegacyCompatibility = TabBarLegacyCompatibility;
exports["default"] = Tabs;
//# sourceMappingURL=Tabs.js.map
