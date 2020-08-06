'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var slicedToArray = require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-1b94f6bc.js');
var index = require('./index-46d0e707.js');
require('./defineProperty-3cad0327.js');
require('./toConsumableArray-cc0d28a9.js');
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
require('./getPrototypeOf-55c9e80c.js');
require('./color.js');
require('./css.js');
var miscellaneous = require('./miscellaneous.js');
var environment = require('./environment.js');
require('./font.js');
require('./keycodes.js');
require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./Theme.js');
var _extends$1 = require('./extends-023d783e.js');
require('./objectWithoutProperties-c6d3675c.js');
var index$1 = require('./index-f5a9917e.js');
require('./_baseGetTag-42b4dd3e.js');
require('./Viewport-abbde113.js');
var Layout = require('./Layout.js');
require('./FocusVisible.js');
require('./ButtonBase.js');
require('./IconPropTypes-dd9d2cb1.js');
require('./IconDown.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
require('./web-d0294535.js');
require('./useFocusLeave.js');
require('./useImageExists.js');
var Bar = require('./Bar.js');
var TabBarLegacy = require('./TabBarLegacy.js');
var TabsFullWidth = require('./TabsFullWidth.js');
var Tab = require('./Tab.js');

var _StyledUl = _styled__default("ul").withConfig({
  displayName: "Tabs___StyledUl",
  componentId: "sc-1eu39ev-0"
})(["display:flex"]);

function TabBar(_ref) {
  var items = _ref.items,
      selected = _ref.selected,
      onChange = _ref.onChange;
  return /*#__PURE__*/React__default.createElement("nav", null, /*#__PURE__*/React__default.createElement(_StyledUl, null, items.map(function (item, i) {
    return /*#__PURE__*/React__default.createElement(Tab.default, {
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

var _StyledBar = _styled__default(Bar.default).withConfig({
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
    return /*#__PURE__*/React__default.createElement(TabsFullWidth.TabsFullWidth, _extends$1._extends_1({}, props, {
      selected: selected
    }));
  }

  return /*#__PURE__*/React__default.createElement(_StyledBar, {
    _css: insideSidePanel ? "\n            border-width: 0 0 1px 0;\n            border-radius: 0;\n          " : ''
  }, /*#__PURE__*/React__default.createElement(TabBar, _extends$1._extends_1({}, props, {
    selected: selected
  })));
}

Tabs.propTypes = TabBar.propTypes; // TabBar legacy compatibility

function TabBarLegacyCompatibility(props) {
  var _useInside5 = index$1.o('AppBar'),
      _useInside6 = slicedToArray.slicedToArray(_useInside5, 1),
      insideAppBar = _useInside6[0]; // Use a separate component for Tabs in AppBar, to prevent breaking anything.


  if (insideAppBar) {
    return /*#__PURE__*/React__default.createElement(TabBarLegacy.default, _extends$1._extends_1({}, props, {
      inAppBar: true
    }));
  }

  environment.warnOnce('TabBarLegacyCompatibility', 'TabBar is deprecated and was used outside of an AppBar. Please use the Tabs component instead.');
  return /*#__PURE__*/React__default.createElement(Tabs, props);
}

exports.TabBarLegacyCompatibility = TabBarLegacyCompatibility;
exports.default = Tabs;
//# sourceMappingURL=Tabs.js.map
