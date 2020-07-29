import { _ as _slicedToArray } from './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import React, { useState, useCallback, useEffect, useMemo } from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import { P as PropTypes } from './index-097535f1.js';
import { _ as _defineProperty } from './defineProperty-a0480c32.js';
import { _ as _toConsumableArray } from './toConsumableArray-127424c2.js';
import _styled from 'styled-components';
import './getPrototypeOf-b96da1e1.js';
import './color.js';
import './components.js';
import './contains-component.js';
import './css.js';
import './dayjs.min-e57fb69a.js';
import './date.js';
import { noop } from './miscellaneous.js';
import { warnOnce } from './environment.js';
import './font.js';
import './math-e6d0e93a.js';
import './characters.js';
import './format.js';
import './keycodes.js';
import './url.js';
import './web3.js';
import { GU } from './constants.js';
import './breakpoints.js';
import './springs.js';
import { textStyle } from './text-styles.js';
import './theme-dark.js';
import './theme-light.js';
import { useTheme } from './Theme.js';
import './extends-db4f0c26.js';
import './objectWithoutProperties-234758e1.js';
import './index-422d37c0.js';
import './isObject-3c6ec07e.js';
import './Viewport-cc7debfb.js';
import { useLayout } from './Layout.js';
import Box from './Box.js';
import './FocusVisible.js';
import './ButtonBase.js';
import './PaginationItem.js';
import './IconPropTypes-aab7337d.js';
import './IconAddUser.js';
import './IconAlert.js';
import './IconAlignCenter.js';
import './IconAlignJustify.js';
import './IconAlignLeft.js';
import './IconAlignRight.js';
import './IconAragon.js';
import './IconArrowDown.js';
import './IconArrowLeft.js';
import './IconArrowRight.js';
import './IconArrowUp.js';
import './IconAtSign.js';
import './IconBlock.js';
import './IconBookmark.js';
import './IconCalendar.js';
import './IconCanvas.js';
import './IconCaution.js';
import './IconCenter.js';
import './IconChart.js';
import './IconChat.js';
import './IconCheck.js';
import './IconChip.js';
import './IconCircleCheck.js';
import './IconCircleMinus.js';
import './IconCirclePlus.js';
import './IconClock.js';
import './IconCloudDownload.js';
import './IconCloudUpload.js';
import './IconCoin.js';
import './IconConfiguration.js';
import './IconConnect.js';
import './IconConnection.js';
import './IconConsole.js';
import './IconCopy.js';
import './IconCross.js';
import './IconDashedSquare.js';
import './IconDown.js';
import './IconDownload.js';
import './IconEdit.js';
import './IconEllipsis.js';
import './IconEnter.js';
import './IconEthereum.js';
import './IconExternal.js';
import './IconFile.js';
import './IconFilter.js';
import './IconFlag.js';
import './IconFolder.js';
import './IconGraph2.js';
import './IconGraph.js';
import './IconGrid.js';
import './IconGroup.js';
import './IconHash.js';
import './IconHeart.js';
import './IconHide.js';
import './IconHome.js';
import './IconImage.js';
import './IconInfo.js';
import './IconLabel.js';
import './IconLayers.js';
import './IconLeft.js';
import './IconLink.js';
import './IconLocation.js';
import './IconLock.js';
import './IconMail.js';
import './IconMaximize.js';
import './IconMenu.js';
import './IconMinimize.js';
import './IconMinus.js';
import './IconMove.js';
import './IconNoPicture.js';
import './IconPicture.js';
import './IconPlus.js';
import './IconPower.js';
import './IconPrint.js';
import './IconProhibited.js';
import './IconQuestion.js';
import './IconRefresh.js';
import './IconRemoveUser.js';
import './IconRight.js';
import './IconRotateLeft.js';
import './IconRotateRight.js';
import './IconSearch.js';
import './IconSettings.js';
import './IconShare.js';
import './IconSquareMinus.js';
import './IconSquarePlus.js';
import './IconSquare.js';
import './IconStarFilled.js';
import './IconStar.js';
import './IconSwap.js';
import './IconTarget.js';
import './IconToken.js';
import './IconTrash.js';
import './IconUnlock.js';
import './IconUp.js';
import './IconUpload.js';
import './IconUser.js';
import './IconView.js';
import './IconVote.js';
import './IconWallet.js';
import './IconWarning.js';
import './IconWorld.js';
import './IconWrite.js';
import './IconZoomIn.js';
import './IconZoomOut.js';
import './PaginationSeparator.js';
import Pagination from './Pagination.js';
import './objectWithoutPropertiesLoose-9606ad13.js';
import 'react-dom';
import './web-a351a0a1.js';
import './Checkbox.js';
import './Button.js';
import './ButtonIcon.js';
import './ToggleButton.js';
import './OpenedSurfaceBorder.js';
import { TableView } from './TableView.js';
import { ListView } from './ListView.js';
import './getDisplayName-d5fc7707.js';
import './index-edfeada6.js';
import './LoadingRing.js';
import './Link.js';
import EmptyState from './EmptyState.js';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function prepareEntries(entries, from, to, selectedIndexes) {
  return entries.slice(from, to).map(function (entry, index) {
    var entryIndex = from + index;
    var selected = selectedIndexes.includes(entryIndex);
    return {
      value: entry || null,
      index: entryIndex,
      selected: selected
    };
  });
}

function prepareFields(fields) {
  return fields.map(function (fieldFromProps, index, fields) {
    // Convert non-object fields (e.g. a simple string) into objects
    var field = fieldFromProps && fieldFromProps.label ? fieldFromProps : {
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
      content: content,
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

function renderEntries(entries, _ref) {
  var fields = _ref.fields,
      renderEntry = _ref.renderEntry,
      renderEntryActions = _ref.renderEntryActions,
      renderEntryExpansion = _ref.renderEntryExpansion,
      mode = _ref.mode;
  return entries.map(function (entry) {
    var value = entry.value,
        index = entry.index,
        selected = entry.selected;
    var entryNodes = renderEntry(value, index, {
      selected: selected,
      mode: mode
    });

    if (!Array.isArray(entryNodes)) {
      entryNodes = [];
    } // Create undefined cells too


    while (entryNodes.length < fields.length) {
      entryNodes.push(null);
    }

    var expansion = entryExpansion(renderEntryExpansion ? renderEntryExpansion(value, index, {
      selected: selected,
      mode: mode
    }) : null);
    var actions = renderEntryActions ? renderEntryActions(value, index, {
      selected: selected,
      mode: mode
    }) : null;
    return {
      actions: actions,
      entryNodes: entryNodes,
      expansion: expansion,
      index: index,
      selected: selected
    };
  });
}

function useSelection(entries, selection, onSelectEntries) {
  // Only used if `selection` is not passed via props. The selection supports
  // both a managed and a controlled mode, to provide a better developer
  // experience out of the box.
  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      selectionManaged = _useState2[0],
      setSelectionManaged = _useState2[1];

  var currentSelection = selection === undefined ? selectionManaged : selection;
  var updateSelection = useCallback(function (newSelection) {
    // Managed state
    if (selection === undefined) {
      setSelectionManaged(newSelection);
    } // Useful to notify, even in managed mode


    onSelectEntries(_toConsumableArray(newSelection).sort().map(function (index) {
      return entries[index];
    }), newSelection);
  }, [selection, onSelectEntries, entries]);
  var allSelected = useMemo(function () {
    // none selected
    if (currentSelection.length === 0) {
      return -1;
    } // all selected


    if (currentSelection.length === entries.length) {
      return 1;
    } // some selected


    return 0;
  }, [entries, currentSelection]);
  var toggleEntrySelect = useCallback(function (entryIndex) {
    updateSelection(currentSelection.includes(entryIndex) ? currentSelection.filter(function (index) {
      return index !== entryIndex;
    }) : [].concat(_toConsumableArray(currentSelection), [entryIndex]));
  }, [updateSelection, currentSelection]);
  var selectAll = useCallback(function () {
    updateSelection(currentSelection.length === 0 ? entries.map(function (_, index) {
      return index;
    }) : []);
  }, [entries, currentSelection, updateSelection]);
  return {
    allSelected: allSelected,
    selectAll: selectAll,
    toggleEntrySelect: toggleEntrySelect,
    selectedIndexes: currentSelection
  };
}

function deprecatedEmptyStatePropsCompat(_ref2) {
  var emptyState = _ref2.emptyState,
      statusEmpty = _ref2.statusEmpty,
      statusLoading = _ref2.statusLoading,
      statusEmptyFilters = _ref2.statusEmptyFilters,
      statusEmptySearch = _ref2.statusEmptySearch;

  for (var _i = 0, _arr = [['statusEmpty', statusEmpty, 'default', 'title'], ['statusEmptyFilters', statusEmptyFilters, 'empty-filters', 'subtitle'], ['statusEmptySearch', statusEmptySearch, 'empty-search', 'subtitle'], ['statusLoading', statusLoading, 'loading', 'title']]; _i < _arr.length; _i++) {
    var _arr$_i = _slicedToArray(_arr[_i], 4),
        propName = _arr$_i[0],
        propValue = _arr$_i[1],
        emptyStateName = _arr$_i[2],
        partName = _arr$_i[3];

    if (!propValue) {
      continue;
    }

    warnOnce("DataView:".concat(propName), "DataView: the ".concat(propName, " prop is now deprecated, please use emptyState instead.")); // Only set the default state title if not set already

    if (!emptyState[emptyStateName] || !emptyState[emptyStateName][partName]) {
      emptyState[emptyStateName] = _objectSpread({}, emptyState[emptyStateName], _defineProperty({}, partName, propValue));
    }
  }

  return emptyState;
}

var _StyledDiv = _styled("div").withConfig({
  displayName: "DataView___StyledDiv",
  componentId: "sc-49otbs-0"
})(["padding:", "px ", "px;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var _StyledH = _styled("h1").withConfig({
  displayName: "DataView___StyledH",
  componentId: "sc-49otbs-1"
})(["margin-bottom:", "px;", ";"], function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
});

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "DataView___StyledDiv2",
  componentId: "sc-49otbs-2"
})(["border-top:1px solid ", ";"], function (p) {
  return p._css5;
});

var DataView = React.memo(function DataView(_ref3) {
  var emptyState = _ref3.emptyState,
      entries = _ref3.entries,
      entriesPerPage = _ref3.entriesPerPage,
      fields = _ref3.fields,
      heading = _ref3.heading,
      mode = _ref3.mode,
      onPageChange = _ref3.onPageChange,
      onSelectEntries = _ref3.onSelectEntries,
      onStatusEmptyClear = _ref3.onStatusEmptyClear,
      page = _ref3.page,
      renderEntry = _ref3.renderEntry,
      renderEntryActions = _ref3.renderEntryActions,
      renderEntryExpansion = _ref3.renderEntryExpansion,
      renderSelectionCount = _ref3.renderSelectionCount,
      selection = _ref3.selection,
      status = _ref3.status,
      tableRowHeight = _ref3.tableRowHeight,
      renderEntryChild = _ref3.renderEntryChild,
      statusEmpty = _ref3.statusEmpty,
      statusEmptyFilters = _ref3.statusEmptyFilters,
      statusEmptySearch = _ref3.statusEmptySearch,
      statusLoading = _ref3.statusLoading;

  if (renderEntryChild && !renderEntryExpansion) {
    warnOnce('DataView:renderEntryChild', 'DataView: the renderEntryChild prop has been renamed ' + 'renderEntryExpansion and will be removed in a future version. ' + 'Please use the new name.');
    renderEntryExpansion = renderEntryChild;
  }

  if (renderEntryExpansion && onSelectEntries) {
    warnOnce('DataView: renderEntryExpansion + onSelectEntries', 'A DataView cannot be made selectable with some of its entries ' + 'expandable. Please use only one of renderEntryExpansion or ' + 'onSelectEntries at a time. Ignoring renderEntryExpansion.');
    renderEntryExpansion = undefined;
  }

  emptyState = deprecatedEmptyStatePropsCompat({
    emptyState: emptyState,
    statusEmpty: statusEmpty,
    statusEmptyFilters: statusEmptyFilters,
    statusEmptySearch: statusEmptySearch,
    statusLoading: statusLoading
  }); // Only used if `page` is not passed. The pagination supports both a
  // managed and a controlled mode, to provide a better developer experience
  // out of the box.

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      pageManaged = _useState4[0],
      setPageManaged = _useState4[1];

  var handlePageChange = useCallback(function (newPage) {
    // Managed state
    if (page === undefined) {
      setPageManaged(newPage);
    } // Useful to notify, even in managed mode


    onPageChange(newPage);
  }, [onPageChange, page]); // Reset managed pagination if the entries or the pagination changes.

  useEffect(function () {
    setPageManaged(0);
  }, [entries]);
  var selectedPage = page === undefined ? pageManaged : page;
  var theme = useTheme();

  var _useLayout = useLayout(),
      layoutName = _useLayout.layoutName;

  var listMode = mode === 'list' || mode !== 'table' && layoutName === 'small';

  var _useSelection = useSelection(entries, selection, onSelectEntries),
      allSelected = _useSelection.allSelected,
      selectAll = _useSelection.selectAll,
      toggleEntrySelect = _useSelection.toggleEntrySelect,
      selectedIndexes = _useSelection.selectedIndexes;

  var hasAnyActions = Boolean(renderEntryActions);
  var hasAnyExpansion = Boolean(renderEntryExpansion);
  var canSelect = Boolean(onSelectEntries); // If entriesPerPage is -1 (or 0): no pagination

  if (entriesPerPage < 1) {
    entriesPerPage = entries.length;
  }

  var pages = Math.ceil(entries.length / entriesPerPage);
  var displayFrom = entriesPerPage * selectedPage;
  var displayTo = displayFrom + entriesPerPage;
  var displayedEntries = prepareEntries(entries, displayFrom, displayTo, selectedIndexes);
  var preparedFields = prepareFields(fields);
  var renderedEntries = renderEntries(displayedEntries, {
    fields: fields,
    renderEntry: renderEntry,
    renderEntryActions: renderEntryActions,
    renderEntryExpansion: renderEntryExpansion,
    mode: listMode ? 'list' : 'table'
  });
  var alignChildOnField = fields.findIndex(function (field) {
    return field && field.childStart;
  });
  var emptyEntries = renderedEntries.length === 0;
  return /*#__PURE__*/React.createElement(Box, {
    padding: 0
  }, heading && /*#__PURE__*/React.createElement(_StyledDiv, {
    _css: 2 * GU,
    _css2: layoutName === 'small' ? 2 * GU : 3 * GU
  }, typeof heading === 'string' ? /*#__PURE__*/React.createElement(_StyledH, {
    _css3: 2 * GU,
    _css4: textStyle('body2')
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
    _css5: theme.border
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
  renderSelectionCount: function renderSelectionCount(count) {
    return "".concat(count, " items selected");
  },
  status: 'default',
  tableRowHeight: 8 * GU
};

export default DataView;
//# sourceMappingURL=DataView.js.map
