import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import slicedToArray from '../../../node_modules/@babel/runtime/helpers/slicedToArray.js';
import _styled from 'styled-components';
import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import { useInside as o } from '../../../node_modules/use-inside/dist/index.js';
import { useLayout } from '../Layout/Layout.js';
import Bar from '../Bar/Bar.js';
import TabBar$1 from './TabBarLegacy.js';
import { TabsFullWidth } from './TabsFullWidth.js';
import Tab from './Tab.js';
import { warnOnce } from '../../utils/environment.js';
import { noop } from '../../utils/miscellaneous.js';

var _StyledUl = _styled("ul").withConfig({
  displayName: "Tabs___StyledUl",
  componentId: "sc-1eu39ev-0"
})(["display:flex"]);

function TabBar(_ref) {
  var items = _ref.items,
      selected = _ref.selected,
      onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement(_StyledUl, null, items.map(function (item, i) {
    return /*#__PURE__*/React.createElement(Tab, {
      key: i,
      index: i,
      item: item,
      onChange: onChange,
      selected: i === selected
    });
  })));
}

TabBar.propTypes = {
  items: propTypes.arrayOf(propTypes.node).isRequired,
  selected: propTypes.number,
  onChange: propTypes.func
};
TabBar.defaultProps = {
  selected: 0,
  onChange: noop
};

var _StyledBar = _styled(Bar).withConfig({
  displayName: "Tabs___StyledBar",
  componentId: "sc-1eu39ev-1"
})(["overflow:hidden;", ""], function (p) {
  return p._css;
});

function Tabs(props) {
  var _useLayout = useLayout(),
      layoutName = _useLayout.layoutName;

  var _useInside = o('Bar'),
      _useInside2 = slicedToArray(_useInside, 1),
      insideBar = _useInside2[0];

  var _useInside3 = o('SidePanel'),
      _useInside4 = slicedToArray(_useInside3, 1),
      insideSidePanel = _useInside4[0];

  if (insideBar) {
    throw new Error('Tabs cannot be a child of Bar: please use the Tabs component directly.');
  }

  var selected = Math.min(props.items.length - 1, Math.max(0, props.selected));

  if (selected !== props.selected) {
    warnOnce('Tabs:outOfRangeSelected', "Tabs: the selected item doesn\u2019t exist (selected index: ".concat(props.selected, ", selection range: 0 to ").concat(props.items.length - 1, "). Selecting ").concat(selected, " instead."));
  }

  if (layoutName === 'small') {
    return /*#__PURE__*/React.createElement(TabsFullWidth, _extends_1({}, props, {
      selected: selected
    }));
  }

  return /*#__PURE__*/React.createElement(_StyledBar, {
    _css: insideSidePanel ? "\n            border-width: 0 0 1px 0;\n            border-radius: 0;\n          " : ''
  }, /*#__PURE__*/React.createElement(TabBar, _extends_1({}, props, {
    selected: selected
  })));
}

Tabs.propTypes = TabBar.propTypes; // TabBar legacy compatibility

function TabBarLegacyCompatibility(props) {
  var _useInside5 = o('AppBar'),
      _useInside6 = slicedToArray(_useInside5, 1),
      insideAppBar = _useInside6[0]; // Use a separate component for Tabs in AppBar, to prevent breaking anything.


  if (insideAppBar) {
    return /*#__PURE__*/React.createElement(TabBar$1, _extends_1({}, props, {
      inAppBar: true
    }));
  }

  warnOnce('TabBarLegacyCompatibility', 'TabBar is deprecated and was used outside of an AppBar. Please use the Tabs component instead.');
  return /*#__PURE__*/React.createElement(Tabs, props);
}

export default Tabs;
export { TabBarLegacyCompatibility };
//# sourceMappingURL=Tabs.js.map
