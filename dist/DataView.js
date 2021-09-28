'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var Box = require('./Box.js');
var Pagination = require('./Pagination.js');
var Layout = require('./Layout.js');
var TableView = require('./TableView.js');
var ListView = require('./ListView.js');
var EmptyState = require('./EmptyState.js');
var Theme = require('./Theme.js');
var miscellaneous = require('./miscellaneous.js');
var constants = require('./constants.js');
var environment = require('./environment.js');
var textStyles = require('./text-styles.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./extends-5150c1f4.js');
require('./index-70e12149.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./Viewport-b495052b.js');
require('./defineProperty-fdbd3c46.js');
require('./isObject-f0a96713.js');
require('./breakpoints.js');
require('./css.js');
require('./font.js');
require('./PaginationItem.js');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./keycodes.js');
require('./PaginationSeparator.js');
require('./IconEllipsis.js');
require('./IconPropTypes-435c57cb.js');
require('./web-17920307.js');
require('./objectWithoutPropertiesLoose-34dfcdd4.js');
require('react-dom');
require('./Checkbox.js');
require('./springs.js');
require('./ToggleButton.js');
require('./ButtonIcon.js');
require('./Button.js');
require('./IconUp.js');
require('./IconDown.js');
require('./OpenedSurfaceBorder.js');
require('./LoadingRing.js');
require('./Link.js');
require('./PublicUrl-dfca81a5.js');
require('./getDisplayName-7f913e84.js');
require('./url.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  const [selectionManaged, setSelectionManaged] = React.useState([]);
  const currentSelection = selection === undefined ? selectionManaged : selection;
  const updateSelection = React.useCallback(newSelection => {
    // Managed state
    if (selection === undefined) {
      setSelectionManaged(newSelection);
    } // Useful to notify, even in managed mode


    onSelectEntries([...newSelection].sort().map(index => entries[index]), newSelection);
  }, [selection, onSelectEntries, entries]);
  const allSelected = React.useMemo(() => {
    // none selected
    if (currentSelection.length === 0) {
      return -1;
    } // all selected


    if (currentSelection.length === entries.length) {
      return 1;
    } // some selected


    return 0;
  }, [entries, currentSelection]);
  const toggleEntrySelect = React.useCallback(entryIndex => {
    updateSelection(currentSelection.includes(entryIndex) ? currentSelection.filter(index => index !== entryIndex) : [...currentSelection, entryIndex]);
  }, [updateSelection, currentSelection]);
  const selectAll = React.useCallback(() => {
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

    environment.warnOnce(`DataView:${propName}`, `DataView: the ${propName} prop is now deprecated, please use emptyState instead.`); // Only set the default state title if not set already

    if (!emptyState[emptyStateName] || !emptyState[emptyStateName][partName]) {
      emptyState[emptyStateName] = { ...emptyState[emptyStateName],
        [partName]: propValue
      };
    }
  }

  return emptyState;
}

const DataView = /*#__PURE__*/React__default["default"].memo(function DataView({
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
    environment.warnOnce('DataView:renderEntryChild', 'DataView: the renderEntryChild prop has been renamed ' + 'renderEntryExpansion and will be removed in a future version. ' + 'Please use the new name.');
    renderEntryExpansion = renderEntryChild;
  }

  if (renderEntryExpansion && onSelectEntries) {
    environment.warnOnce('DataView: renderEntryExpansion + onSelectEntries', 'A DataView cannot be made selectable with some of its entries ' + 'expandable. Please use only one of renderEntryExpansion or ' + 'onSelectEntries at a time. Ignoring renderEntryExpansion.');
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

  const [pageManaged, setPageManaged] = React.useState(0);
  const handlePageChange = React.useCallback(newPage => {
    // Managed state
    if (page === undefined) {
      setPageManaged(newPage);
    } // Useful to notify, even in managed mode


    onPageChange(newPage);
  }, [onPageChange, page]); // Reset managed pagination if the entries or the pagination changes.

  React.useEffect(() => {
    setPageManaged(0);
  }, [entries]);
  const selectedPage = page === undefined ? pageManaged : page;
  const theme = Theme.useTheme();
  const {
    layoutName
  } = Layout.useLayout();
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
  return /*#__PURE__*/React__default["default"].createElement(Box["default"], {
    padding: 0
  }, heading && /*#__PURE__*/React__default["default"].createElement(_StyledDiv, {
    $_css: 2 * constants.GU,
    $_css2: layoutName === 'small' ? 2 * constants.GU : 3 * constants.GU
  }, typeof heading === 'string' ? /*#__PURE__*/React__default["default"].createElement(_StyledH, {
    $_css3: 2 * constants.GU,
    $_css4: textStyles.textStyle('body2')
  }, heading) : heading), !emptyEntries && (listMode ? /*#__PURE__*/React__default["default"].createElement(ListView.ListView, {
    allSelected: allSelected,
    entries: renderedEntries,
    fields: preparedFields,
    hasAnyExpansion: hasAnyExpansion,
    onSelect: toggleEntrySelect,
    onSelectAll: selectAll,
    renderSelectionCount: renderSelectionCount,
    rowHeight: tableRowHeight,
    selectable: canSelect
  }) : /*#__PURE__*/React__default["default"].createElement(TableView.TableView, {
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
  })), emptyEntries && /*#__PURE__*/React__default["default"].createElement(EmptyState["default"], {
    status: status,
    configurator: emptyState,
    onStatusEmptyClear: onStatusEmptyClear
  }), pages > 1 && /*#__PURE__*/React__default["default"].createElement(_StyledDiv2, {
    $_css5: theme.border
  }, /*#__PURE__*/React__default["default"].createElement(Pagination["default"], {
    pages: pages,
    selected: selectedPage,
    onChange: handlePageChange,
    touchMode: layoutName === 'small'
  })));
});
DataView.propTypes = {
  page: index.PropTypes.number,
  entries: index.PropTypes.array.isRequired,
  entriesPerPage: index.PropTypes.number,
  fields: index.PropTypes.array.isRequired,
  heading: index.PropTypes.node,
  mode: index.PropTypes.oneOf(['adaptive', 'table', 'list']),
  onPageChange: index.PropTypes.func,
  onSelectEntries: index.PropTypes.func,
  renderEntry: index.PropTypes.func.isRequired,
  renderEntryActions: index.PropTypes.func,
  renderEntryExpansion: index.PropTypes.func,
  renderSelectionCount: index.PropTypes.func,
  selection: index.PropTypes.array,
  tableRowHeight: index.PropTypes.number,
  status: index.PropTypes.oneOf(['default', 'empty-filters', 'empty-search', 'loading']),
  onStatusEmptyClear: index.PropTypes.func,
  emptyState: index.PropTypes.oneOfType([index.PropTypes.func, index.PropTypes.object]),
  // deprecated
  renderEntryChild: index.PropTypes.func,
  statusEmpty: index.PropTypes.node,
  statusLoading: index.PropTypes.node,
  statusEmptyFilters: index.PropTypes.node,
  statusEmptySearch: index.PropTypes.node
};
DataView.defaultProps = {
  emptyState: {},
  entriesPerPage: 10,
  mode: 'adaptive',
  onPageChange: miscellaneous.noop,
  renderSelectionCount: count => `${count} items selected`,
  status: 'default',
  tableRowHeight: 8 * constants.GU
};

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "DataView___StyledDiv",
  componentId: "sc-49otbs-0"
})(["padding:", "px ", "px;"], p => p.$_css, p => p.$_css2);

var _StyledH = _styled__default["default"]("h1").withConfig({
  displayName: "DataView___StyledH",
  componentId: "sc-49otbs-1"
})(["margin-bottom:", "px;", ";"], p => p.$_css3, p => p.$_css4);

var _StyledDiv2 = _styled__default["default"]("div").withConfig({
  displayName: "DataView___StyledDiv2",
  componentId: "sc-49otbs-2"
})(["border-top:1px solid ", ";"], p => p.$_css5);

exports["default"] = DataView;
//# sourceMappingURL=DataView.js.map
