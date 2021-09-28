import _styled from 'styled-components';
import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { animated as extendedAnimated, Transition } from '../../../node_modules/react-spring/web.js';
import { useLayout } from '../Layout/Layout.js';
import CheckBoxWithTheme from '../Input/Checkbox.js';
import { ToggleButton } from './ToggleButton.js';
import { OpenedSurfaceBorder } from './OpenedSurfaceBorder.js';
import { useTheme } from '../../theme/Theme2.js';
import { GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';
import { springs } from '../../style/springs.js';

function headingsFromFields(fields, {
  hasAnyActions,
  hasAnyExpansion,
  selectContent,
  selectable
}) {
  const cells = fields.map((field, index) => [field.label, field.align === 'end' ? 'right' : 'left']);

  if (hasAnyExpansion || selectable) {
    cells.unshift([selectable ? selectContent : null, 'left']);
  }

  if (hasAnyActions) {
    cells.push([null, 'left']);
  } // Return null if all the fields are empty


  if (cells.every(cell => !cell[0])) {
    return null;
  }

  return cells;
}

function cellsFromEntry(entry, {
  fields,
  hasAnyActions,
  hasAnyExpansion,
  hasExpansion,
  selectContent,
  selectable,
  toggleChildContent
}) {
  const cells = entry.entryNodes.map((content, index) => [content, fields[index].align, false]); // Checkbox

  if (selectable) {
    cells.unshift([selectContent, 'start', true]);
  } // Toggle child


  if (!selectable && hasAnyExpansion) {
    cells.unshift([hasExpansion && toggleChildContent, 'start', true]);
  } // Actions


  if (hasAnyActions) {
    cells.push([entry.actions, 'end', true]);
  }

  return cells;
}

function TableView({
  alignChildOnField,
  allSelected,
  entries,
  fields,
  hasAnyActions,
  hasAnyExpansion,
  onSelect,
  onSelectAll,
  renderSelectionCount,
  rowHeight,
  selectable,
  selectedCount
}) {
  const [opened, setOpened] = useState(-1);
  const toggleEntry = useCallback(index => {
    setOpened(opened => opened === index ? -1 : index);
  }, []);
  const headCells = useMemo(() => headingsFromFields(fields, {
    hasAnyActions,
    hasAnyExpansion,
    selectContent: /*#__PURE__*/React.createElement(CheckBoxWithTheme, {
      indeterminate: allSelected === 0,
      checked: allSelected > -1,
      onChange: onSelectAll
    }),
    selectable
  }), [fields, hasAnyActions, hasAnyExpansion, allSelected, onSelectAll, selectable]);
  return /*#__PURE__*/React.createElement(_StyledTable, null, headCells && /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement(HeadRow, {
    cells: headCells,
    selectedCount: selectedCount,
    renderSelectionCount: renderSelectionCount
  })), /*#__PURE__*/React.createElement("tbody", null, entries.map((entry, index) => /*#__PURE__*/React.createElement(Entry, {
    key: entry.index,
    alignChildOnField: alignChildOnField,
    entry: entry,
    fields: fields,
    firstRow: index === 0,
    hasAnyActions: hasAnyActions,
    hasAnyExpansion: hasAnyExpansion,
    onSelect: onSelect,
    onToggle: toggleEntry,
    opened: opened === entry.index,
    rowHeight: rowHeight,
    selectable: selectable
  }))));
}

TableView.propTypes = {
  alignChildOnField: PropTypes.number.isRequired,
  allSelected: PropTypes.oneOf([-1, 0, 1]).isRequired,
  entries: PropTypes.array.isRequired,
  fields: PropTypes.array.isRequired,
  hasAnyActions: PropTypes.bool.isRequired,
  hasAnyExpansion: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  onSelectAll: PropTypes.func.isRequired,
  renderSelectionCount: PropTypes.func.isRequired,
  rowHeight: PropTypes.number.isRequired,
  selectable: PropTypes.bool.isRequired,
  selectedCount: PropTypes.number.isRequired
}; // Disable prop types check for internal components

/* eslint-disable react/prop-types */

function useSidePadding() {
  const {
    layoutName
  } = useLayout();
  return layoutName === 'small' ? 2 * GU : 3 * GU;
}

function HeadRow({
  cells,
  selectedCount,
  renderSelectionCount
}) {
  const theme = useTheme();
  const sidePadding = useSidePadding();
  return /*#__PURE__*/React.createElement("tr", null, cells.map((cell, index) => {
    const hidden = selectedCount > 0 && index > 1;
    const content = selectedCount > 0 && index === 1 ? renderSelectionCount(selectedCount) : cell[0];
    return !hidden && /*#__PURE__*/React.createElement(_StyledTh, {
      key: index,
      colSpan: selectedCount > 0 && index === 1 ? cells.length - 1 : 1,
      $_css: 4 * GU,
      $_css2: index === 0 ? sidePadding : 0,
      $_css3: index === cells.length - 1 ? sidePadding : 0,
      $_css4: cell[1],
      $_css5: textStyle('label2'),
      $_css6: theme.surfaceContentSecondary,
      $_css7: theme.border
    }, content);
  }));
}

const Entry = /*#__PURE__*/React.memo(function Entry({
  alignChildOnField,
  entry,
  fields,
  firstRow,
  hasAnyActions,
  hasAnyExpansion,
  onSelect,
  onToggle,
  opened,
  rowHeight,
  selectable
}) {
  const hasExpansion = entry.expansion.content.length > 0;
  const entryIndex = entry.index;
  const handleToggle = useCallback(() => {
    onToggle(entryIndex);
  }, [entryIndex, onToggle]);
  const handleSelectChange = useCallback(check => {
    onSelect(entryIndex, check);
  }, [entryIndex, onSelect]);
  const cells = cellsFromEntry(entry, {
    fields,
    hasAnyActions,
    hasAnyExpansion,
    hasExpansion,
    selectable,
    toggleChildContent: hasAnyExpansion ? /*#__PURE__*/React.createElement(Toggle, {
      opened: opened,
      onToggle: handleToggle
    }) : null,
    selectContent: selectable ? /*#__PURE__*/React.createElement(CheckBoxWithTheme, {
      onChange: handleSelectChange,
      checked: entry.selected
    }) : null
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(EntryRow, {
    cells: cells,
    firstRow: firstRow,
    rowHeight: rowHeight,
    selected: entry.selected
  }), hasExpansion && /*#__PURE__*/React.createElement(EntryExpansion, {
    alignChildOnCell: alignChildOnField + 1,
    cellsCount: cells.length,
    expansion: entry.expansion,
    opened: opened,
    rowHeight: rowHeight
  }));
});

function EntryRow({
  firstRow,
  cells,
  selected,
  rowHeight,
  mode
}) {
  const theme = useTheme();
  const sidePadding = useSidePadding();
  return /*#__PURE__*/React.createElement(_StyledTr, {
    $_css8: selected ? theme.surfaceSelected : 'none'
  }, cells.map(([content, align, compact], index, cells) => {
    const first = index === 0;
    const last = index === cells.length - 1;
    return /*#__PURE__*/React.createElement(_StyledTd, {
      key: index,
      $_css9: compact ? '1px' // For some reason Blink tends to make 0 grow but not 1px
      : 'auto',
      $_css10: rowHeight,
      $_css11: first || compact ? sidePadding : 0,
      $_css12: !first && (align !== 'end' || last) || compact ? sidePadding : 0,
      $_css13: firstRow ? '0' : `1px solid ${theme.border}`
    }, /*#__PURE__*/React.createElement(_StyledDiv, {
      $_css14: `flex-${align}`
    }, content));
  }));
}

function EntryExpansion({
  alignChildOnCell,
  cellsCount,
  expansion,
  opened,
  rowHeight
}) {
  const theme = useTheme(); // Handles the height of the expansion in free layout mode

  const [freeLayoutContentHeight, setFreeLayoutContentHeight] = useState(0); // We don't want to memoize this callback because we need to query for a new height
  // and cover updates when entries get re-ordered

  const handleFreeLayoutContentRef = element => {
    if (element) {
      setFreeLayoutContentHeight(element.getBoundingClientRect().height);
    }
  };

  const contentHeight = expansion.freeLayout ? freeLayoutContentHeight : rowHeight * expansion.content.length;
  return /*#__PURE__*/React.createElement(Transition, {
    native: true,
    unique: true,
    items: opened,
    from: {
      height: 0
    },
    enter: {
      height: contentHeight
    },
    update: {
      height: contentHeight
    },
    leave: {
      height: 0
    },
    config: { ...springs.smooth,
      precision: 0.1
    }
  }, show => show && (({
    height
  }) => /*#__PURE__*/React.createElement(_StyledTr2, {
    $_css15: theme.surfaceUnder
  }, alignChildOnCell > 0 && /*#__PURE__*/React.createElement("td", {
    colSpan: alignChildOnCell
  }, /*#__PURE__*/React.createElement(OpenedSurfaceBorder, {
    opened: opened
  }), /*#__PURE__*/React.createElement(_StyledAnimatedDiv, {
    style: {
      height: height.interpolate(h => h !== contentHeight ? `${h}px` : 'auto')
    }
  }, expansion.content.map((child, i) => /*#__PURE__*/React.createElement(_StyledDiv2, {
    key: i,
    $_css16: expansion.freeLayout ? 'auto' : `${rowHeight}px`,
    $_css17: theme.border
  })))), /*#__PURE__*/React.createElement("td", {
    colSpan: alignChildOnCell === -1 ? cellsCount : cellsCount - alignChildOnCell
  }, alignChildOnCell === 0 && /*#__PURE__*/React.createElement(OpenedSurfaceBorder, {
    opened: opened
  }), /*#__PURE__*/React.createElement(_StyledAnimatedDiv2, {
    style: {
      height: height.interpolate(h => h !== contentHeight ? `${h}px` : 'auto')
    }
  }, expansion.content.map((child, i) => /*#__PURE__*/React.createElement(_StyledDiv3, {
    key: i,
    ref: expansion.freeLayout ? handleFreeLayoutContentRef : null,
    $_css18: expansion.freeLayout ? 'auto' : `${rowHeight}px`,
    $_css19: alignChildOnCell < 1 ? 3 * GU : 0,
    $_css20: 3 * GU,
    $_css21: theme.border
  }, child)))))));
}

const Toggle = /*#__PURE__*/React.memo(function Toggle({
  opened,
  onToggle
}) {
  return /*#__PURE__*/React.createElement(_StyledDiv4, null, /*#__PURE__*/React.createElement(OpenedSurfaceBorder, {
    opened: opened
  }), /*#__PURE__*/React.createElement(ToggleButton, {
    opened: opened,
    onClick: onToggle
  }));
});

var _StyledTable = _styled("table").withConfig({
  displayName: "TableView___StyledTable",
  componentId: "sc-aczwu3-0"
})(["width:100%;border-spacing:0;border-collapse:separate;"]);

var _StyledTh = _styled("th").withConfig({
  displayName: "TableView___StyledTh",
  componentId: "sc-aczwu3-1"
})(["height:", "px;padding:0;padding-left:", "px;padding-right:", "px;text-align:", ";", ";color:", ";border-bottom:1px solid ", ";"], p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5, p => p.$_css6, p => p.$_css7);

var _StyledTr = _styled("tr").withConfig({
  displayName: "TableView___StyledTr",
  componentId: "sc-aczwu3-2"
})(["transition:background 150ms ease-in-out;background:", ";"], p => p.$_css8);

var _StyledTd = _styled("td").withConfig({
  displayName: "TableView___StyledTd",
  componentId: "sc-aczwu3-3"
})(["position:relative;width:", ";height:", "px;padding-top:0;padding-bottom:0;padding-left:", "px;padding-right:", "px;border-top:", ";"], p => p.$_css9, p => p.$_css10, p => p.$_css11, p => p.$_css12, p => p.$_css13);

var _StyledDiv = _styled("div").withConfig({
  displayName: "TableView___StyledDiv",
  componentId: "sc-aczwu3-4"
})(["display:flex;width:100%;justify-content:", ";"], p => p.$_css14);

var _StyledTr2 = _styled("tr").withConfig({
  displayName: "TableView___StyledTr2",
  componentId: "sc-aczwu3-5"
})(["td{position:relative;padding:0;box-shadow:inset 0 6px 4px -4px rgba(0,0,0,0.16);background:", ";}"], p => p.$_css15);

var _StyledAnimatedDiv = _styled(extendedAnimated.div).withConfig({
  displayName: "TableView___StyledAnimatedDiv",
  componentId: "sc-aczwu3-6"
})(["overflow:hidden"]);

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "TableView___StyledDiv2",
  componentId: "sc-aczwu3-7"
})(["height:", ";border-top:1px solid ", ";"], p => p.$_css16, p => p.$_css17);

var _StyledAnimatedDiv2 = _styled(extendedAnimated.div).withConfig({
  displayName: "TableView___StyledAnimatedDiv2",
  componentId: "sc-aczwu3-8"
})(["overflow:hidden"]);

var _StyledDiv3 = _styled("div").withConfig({
  displayName: "TableView___StyledDiv3",
  componentId: "sc-aczwu3-9"
})(["display:flex;align-items:center;height:", ";padding-left:", "px;padding-right:", "px;border-top:1px solid ", ";"], p => p.$_css18, p => p.$_css19, p => p.$_css20, p => p.$_css21);

var _StyledDiv4 = _styled("div").withConfig({
  displayName: "TableView___StyledDiv4",
  componentId: "sc-aczwu3-10"
})(["width:100%;height:100%;"]);

export { TableView };
//# sourceMappingURL=TableView.js.map
