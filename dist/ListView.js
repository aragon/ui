'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var web = require('./web-17920307.js');
var Checkbox = require('./Checkbox.js');
var ToggleButton = require('./ToggleButton.js');
var OpenedSurfaceBorder = require('./OpenedSurfaceBorder.js');
var Theme = require('./Theme.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
var springs = require('./springs.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./objectWithoutPropertiesLoose-34dfcdd4.js');
require('react-dom');
require('./extends-5150c1f4.js');
require('./defineProperty-fdbd3c46.js');
require('./FocusVisible.js');
require('./miscellaneous.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./color.js');
require('./ButtonIcon.js');
require('./Button.js');
require('./index-70e12149.js');
require('./Layout.js');
require('./Viewport-b495052b.js');
require('./isObject-f0a96713.js');
require('./breakpoints.js');
require('./css.js');
require('./ButtonBase.js');
require('./keycodes.js');
require('./font.js');
require('./IconUp.js');
require('./IconPropTypes-435c57cb.js');
require('./IconDown.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ListView({
  allSelected,
  entries,
  fields,
  hasAnyExpansion,
  onSelect,
  onSelectAll,
  renderSelectionCount,
  selectable,
  rowHeight
}) {
  const theme = Theme.useTheme();
  const [opened, setOpened] = React.useState(-1);
  const toggleEntry = React.useCallback(index => {
    setOpened(opened => opened === index ? -1 : index);
  }, []);
  const sideSpace = selectable || hasAnyExpansion;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, entries.map((entry, index) => {
    const hasExpansion = entry.expansion.content.length > 0;
    return /*#__PURE__*/React__default["default"].createElement(_StyledDiv, {
      key: index,
      $_css: 3 * constants.GU,
      $_css2: (sideSpace ? 6.5 : 3) * constants.GU,
      $_css3: Number(index !== entries.length - 1),
      $_css4: theme.border,
      $_css5: entry.selected ? theme.surfaceSelected : 'none'
    }, /*#__PURE__*/React__default["default"].createElement(OpenedSurfaceBorder.OpenedSurfaceBorder, {
      opened: entry.index === opened
    }), sideSpace && /*#__PURE__*/React__default["default"].createElement(_StyledDiv2, {
      $_css6: 1.5 * constants.GU,
      $_css7: 6.5 * constants.GU
    }, selectable && /*#__PURE__*/React__default["default"].createElement(Select, {
      index: entry.index,
      selected: entry.selected,
      onSelect: onSelect
    }), !selectable && hasExpansion && /*#__PURE__*/React__default["default"].createElement(ToggleButton.ToggleButton, {
      opened: entry.index === opened,
      onClick: () => toggleEntry(entry.index)
    })), entry.actions && /*#__PURE__*/React__default["default"].createElement(_StyledDiv3, {
      $_css8: 2 * constants.GU,
      $_css9: 3 * constants.GU
    }, entry.actions), /*#__PURE__*/React__default["default"].createElement("div", null, entry.entryNodes.map((content, index) => [// field content
    content, // field label
    fields[index].label, // priority number
    fields[index].priority && fields[index].priority || 0]) // sort by priority
    .sort((a, b) => b[2] - a[2]).map(([content, label], index, entryNodes) => /*#__PURE__*/React__default["default"].createElement(_StyledDiv4, {
      key: index,
      $_css10: index === entryNodes.length - 1 ? 2 * constants.GU : 0
    }, /*#__PURE__*/React__default["default"].createElement(_StyledDiv5, {
      $_css11: 2 * constants.GU,
      $_css12: 1 * constants.GU,
      $_css13: theme.surfaceContentSecondary,
      $_css14: textStyles.textStyle('label2')
    }, label), /*#__PURE__*/React__default["default"].createElement("div", null, content)))), hasExpansion && /*#__PURE__*/React__default["default"].createElement(EntryExpansion, {
      expansion: entry.expansion,
      opened: opened === entry.index,
      rowHeight: rowHeight
    }));
  }));
}

ListView.propTypes = {
  allSelected: index.PropTypes.oneOf([-1, 0, 1]).isRequired,
  entries: index.PropTypes.array.isRequired,
  fields: index.PropTypes.array.isRequired,
  hasAnyExpansion: index.PropTypes.bool.isRequired,
  onSelect: index.PropTypes.func.isRequired,
  onSelectAll: index.PropTypes.func.isRequired,
  renderSelectionCount: index.PropTypes.func.isRequired,
  rowHeight: index.PropTypes.number.isRequired,
  selectable: index.PropTypes.bool.isRequired
}; // Disable prop types check for internal components

/* eslint-disable react/prop-types */

function EntryExpansion({
  expansion,
  opened,
  rowHeight
}) {
  const theme = Theme.useTheme(); // Handles the height of the expansion in free layout mode

  const [freeLayoutContentHeight, setFreeLayoutContentHeight] = React.useState(0);
  const handleFreeLayoutContentRef = React.useCallback(element => {
    if (element) {
      setFreeLayoutContentHeight(element.getBoundingClientRect().height);
    }
  }, []);
  const height = expansion.freeLayout ? freeLayoutContentHeight : rowHeight * expansion.content.length;
  return /*#__PURE__*/React__default["default"].createElement(web.Transition, {
    native: true,
    items: opened,
    from: {
      height: 0
    },
    enter: {
      height
    },
    update: {
      height
    },
    leave: {
      height: 0
    },
    config: { ...springs.springs.smooth,
      precision: 0.1
    }
  }, show => show && (({
    height
  }) => /*#__PURE__*/React__default["default"].createElement(_StyledAnimatedDiv, {
    style: {
      height: height.interpolate(v => `${v}px`)
    },
    $_css15: theme.surfaceUnder,
    $_css16: -6.5 * constants.GU,
    $_css17: -3 * constants.GU,
    $_css18: 6.5 * constants.GU
  }, expansion.content.map((child, i) => /*#__PURE__*/React__default["default"].createElement(_StyledDiv6, {
    key: i,
    ref: expansion.freeLayout ? handleFreeLayoutContentRef : null,
    $_css19: expansion.freeLayout ? 'auto' : `${rowHeight}px`,
    $_css20: 3 * constants.GU
  }, child)))));
}

function Select({
  index,
  selected,
  onSelect
}) {
  const change = React.useCallback(check => {
    onSelect(index, check);
  }, [index, onSelect]);
  return /*#__PURE__*/React__default["default"].createElement(Checkbox["default"], {
    onChange: change,
    checked: selected
  });
}

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "ListView___StyledDiv",
  componentId: "sc-1wnrej-0"
})(["position:relative;padding:0;padding-right:", "px;padding-left:", "px;border-bottom:", "px solid ", ";transition:background 150ms ease-in-out;background:", ";"], p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5);

var _StyledDiv2 = _styled__default["default"]("div").withConfig({
  displayName: "ListView___StyledDiv2",
  componentId: "sc-1wnrej-1"
})(["position:absolute;top:", "px;left:0;display:flex;justify-content:center;width:", "px;"], p => p.$_css6, p => p.$_css7);

var _StyledDiv3 = _styled__default["default"]("div").withConfig({
  displayName: "ListView___StyledDiv3",
  componentId: "sc-1wnrej-2"
})(["position:absolute;top:", "px;right:", "px;"], p => p.$_css8, p => p.$_css9);

var _StyledDiv4 = _styled__default["default"]("div").withConfig({
  displayName: "ListView___StyledDiv4",
  componentId: "sc-1wnrej-3"
})(["display:flex;flex-direction:column;padding-bottom:", "px;"], p => p.$_css10);

var _StyledDiv5 = _styled__default["default"]("div").withConfig({
  displayName: "ListView___StyledDiv5",
  componentId: "sc-1wnrej-4"
})(["display:flex;align-items:center;margin:", "px 0 ", "px;color:", ";", ";"], p => p.$_css11, p => p.$_css12, p => p.$_css13, p => p.$_css14);

var _StyledAnimatedDiv = _styled__default["default"](web.extendedAnimated.div).withConfig({
  displayName: "ListView___StyledAnimatedDiv",
  componentId: "sc-1wnrej-5"
})(["overflow:hidden;background:", ";margin-left:", "px;margin-right:", "px;padding-left:", "px;box-shadow:inset 0 6px 4px -4px rgba(0,0,0,0.16);"], p => p.$_css15, p => p.$_css16, p => p.$_css17, p => p.$_css18);

var _StyledDiv6 = _styled__default["default"]("div").withConfig({
  displayName: "ListView___StyledDiv6",
  componentId: "sc-1wnrej-6"
})(["display:flex;align-items:center;height:", ";padding-right:", "px;"], p => p.$_css19, p => p.$_css20);

exports.ListView = ListView;
//# sourceMappingURL=ListView.js.map
