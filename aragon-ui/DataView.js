'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var slicedToArray = require('./slicedToArray-0711941d.js');
require('./unsupportedIterableToArray-68db1d3b.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
var index = require('./index-b0606964.js');
var defineProperty = require('./defineProperty-0921a47c.js');
var toConsumableArray = require('./toConsumableArray-d8a4a2c3.js');
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
require('./getPrototypeOf-2a661a20.js');
require('./color.js');
require('./components.js');
require('./contains-component.js');
require('./css.js');
require('./dayjs.min-e07657bf.js');
require('./date.js');
var miscellaneous = require('./miscellaneous.js');
var environment = require('./environment.js');
require('./font.js');
require('./math-f4029164.js');
require('./characters.js');
require('./format.js');
require('./keycodes.js');
require('./url.js');
require('./web3.js');
var constants = require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
var textStyles = require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');
require('./extends-40571110.js');
require('./objectWithoutProperties-35db8ab0.js');
require('./index-ecc57c9f.js');
require('./isObject-ec755c87.js');
require('./Viewport-15101437.js');
var Layout = require('./Layout.js');
var Box = require('./Box.js');
require('./FocusVisible.js');
require('./ButtonBase.js');
require('./PaginationItem.js');
require('./IconPropTypes-56de5759.js');
require('./IconAddUser.js');
require('./IconAlert.js');
require('./IconAlignCenter.js');
require('./IconAlignJustify.js');
require('./IconAlignLeft.js');
require('./IconAlignRight.js');
require('./IconAragon.js');
require('./IconArrowDown.js');
require('./IconArrowLeft.js');
require('./IconArrowRight.js');
require('./IconArrowUp.js');
require('./IconAtSign.js');
require('./IconBlock.js');
require('./IconBookmark.js');
require('./IconCalendar.js');
require('./IconCanvas.js');
require('./IconCaution.js');
require('./IconCenter.js');
require('./IconChart.js');
require('./IconChat.js');
require('./IconCheck.js');
require('./IconChip.js');
require('./IconCircleCheck.js');
require('./IconCircleMinus.js');
require('./IconCirclePlus.js');
require('./IconClock.js');
require('./IconCloudDownload.js');
require('./IconCloudUpload.js');
require('./IconCoin.js');
require('./IconConfiguration.js');
require('./IconConnect.js');
require('./IconConnection.js');
require('./IconConsole.js');
require('./IconCopy.js');
require('./IconCross.js');
require('./IconDashedSquare.js');
require('./IconDown.js');
require('./IconDownload.js');
require('./IconEdit.js');
require('./IconEllipsis.js');
require('./IconEnter.js');
require('./IconEthereum.js');
require('./IconExternal.js');
require('./IconFile.js');
require('./IconFilter.js');
require('./IconFlag.js');
require('./IconFolder.js');
require('./IconGraph2.js');
require('./IconGraph.js');
require('./IconGrid.js');
require('./IconGroup.js');
require('./IconHash.js');
require('./IconHeart.js');
require('./IconHide.js');
require('./IconHome.js');
require('./IconImage.js');
require('./IconInfo.js');
require('./IconLabel.js');
require('./IconLayers.js');
require('./IconLeft.js');
require('./IconLink.js');
require('./IconLocation.js');
require('./IconLock.js');
require('./IconMail.js');
require('./IconMaximize.js');
require('./IconMenu.js');
require('./IconMinimize.js');
require('./IconMinus.js');
require('./IconMove.js');
require('./IconNoPicture.js');
require('./IconPicture.js');
require('./IconPlus.js');
require('./IconPower.js');
require('./IconPrint.js');
require('./IconProhibited.js');
require('./IconQuestion.js');
require('./IconRefresh.js');
require('./IconRemoveUser.js');
require('./IconRight.js');
require('./IconRotateLeft.js');
require('./IconRotateRight.js');
require('./IconSearch.js');
require('./IconSettings.js');
require('./IconShare.js');
require('./IconSquareMinus.js');
require('./IconSquarePlus.js');
require('./IconSquare.js');
require('./IconStarFilled.js');
require('./IconStar.js');
require('./IconSwap.js');
require('./IconTarget.js');
require('./IconToken.js');
require('./IconTrash.js');
require('./IconUnlock.js');
require('./IconUp.js');
require('./IconUpload.js');
require('./IconUser.js');
require('./IconView.js');
require('./IconVote.js');
require('./IconWallet.js');
require('./IconWarning.js');
require('./IconWorld.js');
require('./IconWrite.js');
require('./IconZoomIn.js');
require('./IconZoomOut.js');
require('./PaginationSeparator.js');
var Pagination = require('./Pagination.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
require('./web-d0294535.js');
require('./Checkbox.js');
require('./Button.js');
require('./ButtonIcon.js');
require('./ToggleButton.js');
require('./OpenedSurfaceBorder.js');
var TableView = require('./TableView.js');
var ListView = require('./ListView.js');
require('./getDisplayName-7ab6d318.js');
require('./index-bc84a358.js');
require('./LoadingRing.js');
require('./Link.js');
var EmptyState = require('./EmptyState.js');

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty._defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
  var _useState = React.useState([]),
      _useState2 = slicedToArray._slicedToArray(_useState, 2),
      selectionManaged = _useState2[0],
      setSelectionManaged = _useState2[1];

  var currentSelection = selection === undefined ? selectionManaged : selection;
  var updateSelection = React.useCallback(function (newSelection) {
    // Managed state
    if (selection === undefined) {
      setSelectionManaged(newSelection);
    } // Useful to notify, even in managed mode


    onSelectEntries(toConsumableArray._toConsumableArray(newSelection).sort().map(function (index) {
      return entries[index];
    }), newSelection);
  }, [selection, onSelectEntries, entries]);
  var allSelected = React.useMemo(function () {
    // none selected
    if (currentSelection.length === 0) {
      return -1;
    } // all selected


    if (currentSelection.length === entries.length) {
      return 1;
    } // some selected


    return 0;
  }, [entries, currentSelection]);
  var toggleEntrySelect = React.useCallback(function (entryIndex) {
    updateSelection(currentSelection.includes(entryIndex) ? currentSelection.filter(function (index) {
      return index !== entryIndex;
    }) : [].concat(toConsumableArray._toConsumableArray(currentSelection), [entryIndex]));
  }, [updateSelection, currentSelection]);
  var selectAll = React.useCallback(function () {
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
    var _arr$_i = slicedToArray._slicedToArray(_arr[_i], 4),
        propName = _arr$_i[0],
        propValue = _arr$_i[1],
        emptyStateName = _arr$_i[2],
        partName = _arr$_i[3];

    if (!propValue) {
      continue;
    }

    environment.warnOnce("DataView:".concat(propName), "DataView: the ".concat(propName, " prop is now deprecated, please use emptyState instead.")); // Only set the default state title if not set already

    if (!emptyState[emptyStateName] || !emptyState[emptyStateName][partName]) {
      emptyState[emptyStateName] = _objectSpread({}, emptyState[emptyStateName], defineProperty._defineProperty({}, partName, propValue));
    }
  }

  return emptyState;
}

var _StyledDiv = _styled__default("div").withConfig({
  displayName: "DataView___StyledDiv",
  componentId: "sc-49otbs-0"
})(["padding:", "px ", "px;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var _StyledH = _styled__default("h1").withConfig({
  displayName: "DataView___StyledH",
  componentId: "sc-49otbs-1"
})(["margin-bottom:", "px;", ";"], function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
});

var _StyledDiv2 = _styled__default("div").withConfig({
  displayName: "DataView___StyledDiv2",
  componentId: "sc-49otbs-2"
})(["border-top:1px solid ", ";"], function (p) {
  return p._css5;
});

var DataView = React__default.memo(function DataView(_ref3) {
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
    environment.warnOnce('DataView:renderEntryChild', 'DataView: the renderEntryChild prop has been renamed ' + 'renderEntryExpansion and will be removed in a future version. ' + 'Please use the new name.');
    renderEntryExpansion = renderEntryChild;
  }

  if (renderEntryExpansion && onSelectEntries) {
    environment.warnOnce('DataView: renderEntryExpansion + onSelectEntries', 'A DataView cannot be made selectable with some of its entries ' + 'expandable. Please use only one of renderEntryExpansion or ' + 'onSelectEntries at a time. Ignoring renderEntryExpansion.');
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

  var _useState3 = React.useState(0),
      _useState4 = slicedToArray._slicedToArray(_useState3, 2),
      pageManaged = _useState4[0],
      setPageManaged = _useState4[1];

  var handlePageChange = React.useCallback(function (newPage) {
    // Managed state
    if (page === undefined) {
      setPageManaged(newPage);
    } // Useful to notify, even in managed mode


    onPageChange(newPage);
  }, [onPageChange, page]); // Reset managed pagination if the entries or the pagination changes.

  React.useEffect(function () {
    setPageManaged(0);
  }, [entries]);
  var selectedPage = page === undefined ? pageManaged : page;
  var theme = Theme.useTheme();

  var _useLayout = Layout.useLayout(),
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
  return /*#__PURE__*/React__default.createElement(Box.default, {
    padding: 0
  }, heading && /*#__PURE__*/React__default.createElement(_StyledDiv, {
    _css: 2 * constants.GU,
    _css2: layoutName === 'small' ? 2 * constants.GU : 3 * constants.GU
  }, typeof heading === 'string' ? /*#__PURE__*/React__default.createElement(_StyledH, {
    _css3: 2 * constants.GU,
    _css4: textStyles.textStyle('body2')
  }, heading) : heading), !emptyEntries && (listMode ? /*#__PURE__*/React__default.createElement(ListView.ListView, {
    allSelected: allSelected,
    entries: renderedEntries,
    fields: preparedFields,
    hasAnyExpansion: hasAnyExpansion,
    onSelect: toggleEntrySelect,
    onSelectAll: selectAll,
    renderSelectionCount: renderSelectionCount,
    rowHeight: tableRowHeight,
    selectable: canSelect
  }) : /*#__PURE__*/React__default.createElement(TableView.TableView, {
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
  })), emptyEntries && /*#__PURE__*/React__default.createElement(EmptyState.default, {
    status: status,
    configurator: emptyState,
    onStatusEmptyClear: onStatusEmptyClear
  }), pages > 1 && /*#__PURE__*/React__default.createElement(_StyledDiv2, {
    _css5: theme.border
  }, /*#__PURE__*/React__default.createElement(Pagination.default, {
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
  renderSelectionCount: function renderSelectionCount(count) {
    return "".concat(count, " items selected");
  },
  status: 'default',
  tableRowHeight: 8 * constants.GU
};

exports.default = DataView;
//# sourceMappingURL=DataView.js.map
