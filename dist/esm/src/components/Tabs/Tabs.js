import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { useInside as o } from '../../../node_modules/use-inside/dist/index.js';
import { useLayout } from '../Layout/Layout.js';
import Bar from '../Bar/Bar.js';
import TabBar$1 from './TabBarLegacy.js';
import { TabsFullWidth } from './TabsFullWidth.js';
import Tab from './Tab.js';
import { warnOnce } from '../../utils/environment.js';
import { noop } from '../../utils/miscellaneous.js';

function TabBar({
  items,
  selected,
  onChange
}) {
  return /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement(_StyledUl, null, items.map((item, i) => /*#__PURE__*/React.createElement(Tab, {
    key: i,
    index: i,
    item: item,
    onChange: onChange,
    selected: i === selected
  }))));
}

TabBar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
  selected: PropTypes.number,
  onChange: PropTypes.func
};
TabBar.defaultProps = {
  selected: 0,
  onChange: noop
};

function Tabs(props) {
  const {
    layoutName
  } = useLayout();
  const [insideBar] = o('Bar');
  const [insideSidePanel] = o('SidePanel');

  if (insideBar) {
    throw new Error('Tabs cannot be a child of Bar: please use the Tabs component directly.');
  }

  const selected = Math.min(props.items.length - 1, Math.max(0, props.selected));

  if (selected !== props.selected) {
    warnOnce('Tabs:outOfRangeSelected', `Tabs: the selected item doesn’t exist (selected index: ${props.selected}, selection range: 0 to ${props.items.length - 1}). Selecting ${selected} instead.`);
  }

  if (layoutName === 'small') {
    return /*#__PURE__*/React.createElement(TabsFullWidth, _extends({}, props, {
      selected: selected
    }));
  }

  return /*#__PURE__*/React.createElement(_StyledBar, {
    $_css: insideSidePanel ? `
            border-width: 0 0 1px 0;
            border-radius: 0;
          ` : ''
  }, /*#__PURE__*/React.createElement(TabBar, _extends({}, props, {
    selected: selected
  })));
}

Tabs.propTypes = TabBar.propTypes; // TabBar legacy compatibility

function TabBarLegacyCompatibility(props) {
  const [insideAppBar] = o('AppBar'); // Use a separate component for Tabs in AppBar, to prevent breaking anything.

  if (insideAppBar) {
    return /*#__PURE__*/React.createElement(TabBar$1, _extends({}, props, {
      inAppBar: true
    }));
  }

  warnOnce('TabBarLegacyCompatibility', 'TabBar is deprecated and was used outside of an AppBar. Please use the Tabs component instead.');
  return /*#__PURE__*/React.createElement(Tabs, props);
}

var _StyledUl = _styled("ul").withConfig({
  displayName: "Tabs___StyledUl",
  componentId: "sc-1eu39ev-0"
})(["display:flex"]);

var _StyledBar = _styled(Bar).withConfig({
  displayName: "Tabs___StyledBar",
  componentId: "sc-1eu39ev-1"
})(["overflow:hidden;", ""], p => p.$_css);

export { TabBarLegacyCompatibility, Tabs as default };
//# sourceMappingURL=Tabs.js.map
