import _styled from 'styled-components';
import React, { useState, useCallback, useEffect, useMemo } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import Box from '../Box/Box.js';
import Pagination from '../Pagination/Pagination.js';
import { useLayout } from '../Layout/Layout.js';
import { TableView } from './TableView.js';
import { ListView } from './ListView.js';
import EmptyState from './EmptyState.js';
import { useTheme } from '../../theme/Theme2.js';
import { noop } from '../../utils/miscellaneous.js';
import { GU } from '../../style/constants.js';
import { warnOnce } from '../../utils/environment.js';
import { textStyle } from '../../style/text-styles.js';

function prepareEntries(entries, from, to, selectedIndexes) {
  return entries.slice(from, to).map((entry, index) => {
    const entryIndex = from + index;
    const selected = selectedIndexes.includes(entryIndex);
    return {
      value: entry || null,
      index: entryIndex,
      selected
    };
  });
}

function prepareFields(fields) {
  return fields.map((fieldFromProps, index, fields) => {
    // Convert non-object fields (e.g. a simple string) into objects
    const field = fieldFromProps && fieldFromProps.label ? fieldFromProps : {
      label: fieldFromProps
    }; // Auto align the last column to the end (right)

    if (!field.align) {
      field.align = index === fields.length - 1 && fields.length > 1 ? 'end' : 'start';
    }

    return field;
  });
}

function entryExpansion(content) {
  // Rows
  if (Array.isArray(content) && content.length > 0) {
    return {
      content,
      freeLayout: false
    };
  } // Free layout


  if (content && !Array.isArray(content)) {
    return {
      content: [content],
      freeLayout: true
    };
  } // No expansion


  return {
    content: [],
    freeLayout: false
  };
}

function renderEntries(entries, {
  fields,
  renderEntry,
  renderEntryActions,
  renderEntryExpansion,
  mode
}) {
  return entries.map(entry => {
    const {
      value,
      index,
      selected
    } = entry;
    let entryNodes = renderEntry(value, index, {
      selected,
      mode
    });

    if (!Array.isArray(entryNodes)) {
      entryNodes = [];
    } // Create undefined cells too


    while (entryNodes.length < fields.length) {
      entryNodes.push(null);
    }

    const expansion = entryExpansion(renderEntryExpansion ? renderEntryExpansion(value, index, {
      selected,
      mode
    }) : null);
    const actions = renderEntryActions ? renderEntryActions(value, index, {
      selected,
      mode
    }) : null;
    return {
      actions,
      entryNodes,
      expansion,
      index,
      selected
    };
  });
}

function useSelection(entries, selection, onSelectEntries) {
  // Only used if `selection` is not passed via props. The selection supports
  // both a managed and a controlled mode, to provide a better developer
  // experience out of the box.
  const [selectionManaged, setSelectionManaged] = useState([]);
  const currentSelection = selection === undefined ? selectionManaged : selection;
  const updateSelection = useCallback(newSelection => {
    // Managed state
    if (selection === undefined) {
      setSelectionManaged(newSelection);
    } // Useful to notify, even in managed mode


    onSelectEntries([...newSelection].sort().map(index => entries[index]), newSelection);
  }, [selection, onSelectEntries, entries]);
  const allSelected = useMemo(() => {
    // none selected
    if (currentSelection.length === 0) {
      return -1;
    } // all selected


    if (currentSelection.length === entries.length) {
      return 1;
    } // some selected


    return 0;
  }, [entries, currentSelection]);
  const toggleEntrySelect = useCallback(entryIndex => {
    updateSelection(currentSelection.includes(entryIndex) ? currentSelection.filter(index => index !== entryIndex) : [...currentSelection, entryIndex]);
  }, [updateSelection, currentSelection]);
  const selectAll = useCallback(() => {
    updateSelection(currentSelection.length === 0 ? entries.map((_, index) => index) : []);
  }, [entries, currentSelection, updateSelection]);
  return {
    allSelected,
    selectAll,
    toggleEntrySelect,
    selectedIndexes: currentSelection
  };
}

function deprecatedEmptyStatePropsCompat({
  emptyState,
  statusEmpty,
  statusLoading,
  statusEmptyFilters,
  statusEmptySearch
}) {
  for (const [propName, propValue, emptyStateName, partName] of [['statusEmpty', statusEmpty, 'default', 'title'], ['statusEmptyFilters', statusEmptyFilters, 'empty-filters', 'subtitle'], ['statusEmptySearch', statusEmptySearch, 'empty-search', 'subtitle'], ['statusLoading', statusLoading, 'loading', 'title']]) {
    if (!propValue) {
      continue;
    }

    warnOnce(`DataView:${propName}`, `DataView: the ${propName} prop is now deprecated, please use emptyState instead.`); // Only set the default state title if not set already

    if (!emptyState[emptyStateName] || !emptyState[emptyStateName][partName]) {
      emptyState[emptyStateName] = { ...emptyState[emptyStateName],
        [partName]: propValue
      };
    }
  }

  return emptyState;
}

const DataView = /*#__PURE__*/React.memo(function DataView({
  emptyState,
  entries,
  entriesPerPage,
  fields,
  heading,
  mode,
  onPageChange,
  onSelectEntries,
  onStatusEmptyClear,
  page,
  renderEntry,
  renderEntryActions,
  renderEntryExpansion,
  renderSelectionCount,
  selection,
  status,
  tableRowHeight,
  // deprecated
  renderEntryChild,
  statusEmpty,
  statusEmptyFilters,
  statusEmptySearch,
  statusLoading
}) {
  if (renderEntryChild && !renderEntryExpansion) {
    warnOnce('DataView:renderEntryChild', 'DataView: the renderEntryChild prop has been renamed ' + 'renderEntryExpansion and will be removed in a future version. ' + 'Please use the new name.');
    renderEntryExpansion = renderEntryChild;
  }

  if (renderEntryExpansion && onSelectEntries) {
    warnOnce('DataView: renderEntryExpansion + onSelectEntries', 'A DataView cannot be made selectable with some of its entries ' + 'expandable. Please use only one of renderEntryExpansion or ' + 'onSelectEntries at a time. Ignoring renderEntryExpansion.');
    renderEntryExpansion = undefined;
  }

  emptyState = deprecatedEmptyStatePropsCompat({
    emptyState,
    statusEmpty,
    statusEmptyFilters,
    statusEmptySearch,
    statusLoading
  }); // Only used if `page` is not passed. The pagination supports both a
  // managed and a controlled mode, to provide a better developer experience
  // out of the box.

  const [pageManaged, setPageManaged] = useState(0);
  const handlePageChange = useCallback(newPage => {
    // Managed state
    if (page === undefined) {
      setPageManaged(newPage);
    } // Useful to notify, even in managed mode


    onPageChange(newPage);
  }, [onPageChange, page]); // Reset managed pagination if the entries or the pagination changes.

  useEffect(() => {
    setPageManaged(0);
  }, [entries]);
  const selectedPage = page === undefined ? pageManaged : page;
  const theme = useTheme();
  const {
    layoutName
  } = useLayout();
  const listMode = mode === 'list' || mode !== 'table' && layoutName === 'small';
  const {
    allSelected,
    selectAll,
    toggleEntrySelect,
    selectedIndexes
  } = useSelection(entries, selection, onSelectEntries);
  const hasAnyActions = Boolean(renderEntryActions);
  const hasAnyExpansion = Boolean(renderEntryExpansion);
  const canSelect = Boolean(onSelectEntries); // If entriesPerPage is -1 (or 0): no pagination

  if (entriesPerPage < 1) {
    entriesPerPage = entries.length;
  }

  const pages = Math.ceil(entries.length / entriesPerPage);
  const displayFrom = entriesPerPage * selectedPage;
  const displayTo = displayFrom + entriesPerPage;
  const displayedEntries = prepareEntries(entries, displayFrom, displayTo, selectedIndexes);
  const preparedFields = prepareFields(fields);
  const renderedEntries = renderEntries(displayedEntries, {
    fields,
    renderEntry,
    renderEntryActions,
    renderEntryExpansion,
    mode: listMode ? 'list' : 'table'
  });
  const alignChildOnField = fields.findIndex(field => field && field.childStart);
  const emptyEntries = renderedEntries.length === 0;
  return /*#__PURE__*/React.createElement(Box, {
    padding: 0
  }, heading && /*#__PURE__*/React.createElement(_StyledDiv, {
    $_css: 2 * GU,
    $_css2: layoutName === 'small' ? 2 * GU : 3 * GU
  }, typeof heading === 'string' ? /*#__PURE__*/React.createElement(_StyledH, {
    $_css3: 2 * GU,
    $_css4: textStyle('body2')
  }, heading) : heading), !emptyEntries && (listMode ? /*#__PURE__*/React.createElement(ListView, {
    allSelected: allSelected,
    entries: renderedEntries,
    fields: preparedFields,
    hasAnyExpansion: hasAnyExpansion,
    onSelect: toggleEntrySelect,
    onSelectAll: selectAll,
    renderSelectionCount: renderSelectionCount,
    rowHeight: tableRowHeight,
    selectable: canSelect
  }) : /*#__PURE__*/React.createElement(TableView, {
    alignChildOnField: Math.min(Math.max(-1, alignChildOnField), fields.length - 1),
    allSelected: allSelected,
    entries: renderedEntries,
    fields: preparedFields,
    hasAnyActions: hasAnyActions,
    hasAnyExpansion: hasAnyExpansion,
    onSelect: toggleEntrySelect,
    onSelectAll: selectAll,
    renderSelectionCount: renderSelectionCount,
    rowHeight: tableRowHeight,
    selectable: canSelect,
    selectedCount: selectedIndexes.length
  })), emptyEntries && /*#__PURE__*/React.createElement(EmptyState, {
    status: status,
    configurator: emptyState,
    onStatusEmptyClear: onStatusEmptyClear
  }), pages > 1 && /*#__PURE__*/React.createElement(_StyledDiv2, {
    $_css5: theme.border
  }, /*#__PURE__*/React.createElement(Pagination, {
    pages: pages,
    selected: selectedPage,
    onChange: handlePageChange,
    touchMode: layoutName === 'small'
  })));
});
DataView.propTypes = {
  page: PropTypes.number,
  entries: PropTypes.array.isRequired,
  entriesPerPage: PropTypes.number,
  fields: PropTypes.array.isRequired,
  heading: PropTypes.node,
  mode: PropTypes.oneOf(['adaptive', 'table', 'list']),
  onPageChange: PropTypes.func,
  onSelectEntries: PropTypes.func,
  renderEntry: PropTypes.func.isRequired,
  renderEntryActions: PropTypes.func,
  renderEntryExpansion: PropTypes.func,
  renderSelectionCount: PropTypes.func,
  selection: PropTypes.array,
  tableRowHeight: PropTypes.number,
  status: PropTypes.oneOf(['default', 'empty-filters', 'empty-search', 'loading']),
  onStatusEmptyClear: PropTypes.func,
  emptyState: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  // deprecated
  renderEntryChild: PropTypes.func,
  statusEmpty: PropTypes.node,
  statusLoading: PropTypes.node,
  statusEmptyFilters: PropTypes.node,
  statusEmptySearch: PropTypes.node
};
DataView.defaultProps = {
  emptyState: {},
  entriesPerPage: 10,
  mode: 'adaptive',
  onPageChange: noop,
  renderSelectionCount: count => `${count} items selected`,
  status: 'default',
  tableRowHeight: 8 * GU
};

var _StyledDiv = _styled("div").withConfig({
  displayName: "DataView___StyledDiv",
  componentId: "sc-49otbs-0"
})(["padding:", "px ", "px;"], p => p.$_css, p => p.$_css2);

var _StyledH = _styled("h1").withConfig({
  displayName: "DataView___StyledH",
  componentId: "sc-49otbs-1"
})(["margin-bottom:", "px;", ";"], p => p.$_css3, p => p.$_css4);

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "DataView___StyledDiv2",
  componentId: "sc-49otbs-2"
})(["border-top:1px solid ", ";"], p => p.$_css5);

export { DataView as default };
//# sourceMappingURL=DataView.js.map
