'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-023d783e.js');
var slicedToArray = require('./slicedToArray-a8a77f0e.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-37353731.js');
var index$1 = require('./index-c33eeeef.js');
var Layout = require('./Layout.js');
var Bar = require('./Bar.js');
var TabBarLegacy = require('./TabBarLegacy.js');
var TabsFullWidth = require('./TabsFullWidth.js');
var Tab = require('./Tab.js');
var environment = require('./environment.js');
var miscellaneous = require('./miscellaneous.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./objectWithoutProperties-c6d3675c.js');
require('./defineProperty-3cad0327.js');
require('./Viewport-71f7efe6.js');
require('./getPrototypeOf-55c9e80c.js');
require('./_baseGetTag-6ec23aaa.js');
require('./breakpoints.js');
require('./constants.js');
require('./css.js');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./toConsumableArray-cc0d28a9.js');
require('./font.js');
require('./web-46d746d6.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./keycodes.js');
require('./text-styles.js');
require('./useFocusLeave.js');
require('./IconDown.js');
require('./IconPropTypes-b9997416.js');
require('./springs.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _StyledUl = _styled__default['default']("ul").withConfig({
  displayName: "Tabs___StyledUl",
  componentId: "sc-1eu39ev-0"
})(["display:flex"]);

function TabBar(_ref) {
  var items = _ref.items,
      selected = _ref.selected,
      onChange = _ref.onChange;
  return /*#__PURE__*/React__default['default'].createElement("nav", null, /*#__PURE__*/React__default['default'].createElement(_StyledUl, null, items.map(function (item, i) {
    return /*#__PURE__*/React__default['default'].createElement(Tab['default'], {
      key: i,
      index: i,
      item: item,
      onChange: onChange,
      selected: i === selected
    });
  })));
}

TabBar.propTypes = {
  items: index.propTypes.arrayOf(index.propTypes.node).isRequired,
  selected: index.propTypes.number,
  onChange: index.propTypes.func
};
TabBar.defaultProps = {
  selected: 0,
  onChange: miscellaneous.noop
};

var _StyledBar = _styled__default['default'](Bar['default']).withConfig({
  displayName: "Tabs___StyledBar",
  componentId: "sc-1eu39ev-1"
})(["overflow:hidden;", ""], function (p) {
  return p._css;
});

function Tabs(props) {
  var _useLayout = Layout.useLayout(),
      layoutName = _useLayout.layoutName;

  var _useInside = index$1.o('Bar'),
      _useInside2 = slicedToArray.slicedToArray(_useInside, 1),
      insideBar = _useInside2[0];

  var _useInside3 = index$1.o('SidePanel'),
      _useInside4 = slicedToArray.slicedToArray(_useInside3, 1),
      insideSidePanel = _useInside4[0];

  if (insideBar) {
    throw new Error('Tabs cannot be a child of Bar: please use the Tabs component directly.');
  }

  var selected = Math.min(props.items.length - 1, Math.max(0, props.selected));

  if (selected !== props.selected) {
    environment.warnOnce('Tabs:outOfRangeSelected', "Tabs: the selected item doesn\u2019t exist (selected index: ".concat(props.selected, ", selection range: 0 to ").concat(props.items.length - 1, "). Selecting ").concat(selected, " instead."));
  }

  if (layoutName === 'small') {
    return /*#__PURE__*/React__default['default'].createElement(TabsFullWidth.TabsFullWidth, _extends._extends_1({}, props, {
      selected: selected
    }));
  }

  return /*#__PURE__*/React__default['default'].createElement(_StyledBar, {
    _css: insideSidePanel ? "\n            border-width: 0 0 1px 0;\n            border-radius: 0;\n          " : ''
  }, /*#__PURE__*/React__default['default'].createElement(TabBar, _extends._extends_1({}, props, {
    selected: selected
  })));
}

Tabs.propTypes = TabBar.propTypes; // TabBar legacy compatibility

function TabBarLegacyCompatibility(props) {
  var _useInside5 = index$1.o('AppBar'),
      _useInside6 = slicedToArray.slicedToArray(_useInside5, 1),
      insideAppBar = _useInside6[0]; // Use a separate component for Tabs in AppBar, to prevent breaking anything.


  if (insideAppBar) {
    return /*#__PURE__*/React__default['default'].createElement(TabBarLegacy['default'], _extends._extends_1({}, props, {
      inAppBar: true
    }));
  }

  environment.warnOnce('TabBarLegacyCompatibility', 'TabBar is deprecated and was used outside of an AppBar. Please use the Tabs component instead.');
  return /*#__PURE__*/React__default['default'].createElement(Tabs, props);
}

exports.TabBarLegacyCompatibility = TabBarLegacyCompatibility;
exports.default = Tabs;
//# sourceMappingURL=Tabs.js.map
