import { _ as _slicedToArray } from './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import { P as PropTypes } from './index-097535f1.js';
import { _ as _defineProperty } from './defineProperty-a0480c32.js';
import './toConsumableArray-127424c2.js';
import _styled from 'styled-components';
import './getPrototypeOf-b96da1e1.js';
import './color.js';
import './components.js';
import './contains-component.js';
import './css.js';
import './dayjs.min-e57fb69a.js';
import './date.js';
import './miscellaneous.js';
import './environment.js';
import './font.js';
import './math-e6d0e93a.js';
import './characters.js';
import './format.js';
import './keycodes.js';
import './url.js';
import './web3.js';
import { GU } from './constants.js';
import './breakpoints.js';
import { springs } from './springs.js';
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
import './FocusVisible.js';
import './ButtonBase.js';
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
import './objectWithoutPropertiesLoose-9606ad13.js';
import 'react-dom';
import { e as extendedAnimated, T as Transition } from './web-a351a0a1.js';
import Checkbox from './Checkbox.js';
import './Button.js';
import './ButtonIcon.js';
import { ToggleButton } from './ToggleButton.js';
import { OpenedSurfaceBorder } from './OpenedSurfaceBorder.js';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function headingsFromFields(fields, _ref) {
  var hasAnyActions = _ref.hasAnyActions,
      hasAnyExpansion = _ref.hasAnyExpansion,
      selectContent = _ref.selectContent,
      selectable = _ref.selectable;
  var cells = fields.map(function (field, index) {
    return [field.label, field.align === 'end' ? 'right' : 'left'];
  });

  if (hasAnyExpansion || selectable) {
    cells.unshift([selectable ? selectContent : null, 'left']);
  }

  if (hasAnyActions) {
    cells.push([null, 'left']);
  } // Return null if all the fields are empty


  if (cells.every(function (cell) {
    return !cell[0];
  })) {
    return null;
  }

  return cells;
}

function cellsFromEntry(entry, _ref2) {
  var fields = _ref2.fields,
      hasAnyActions = _ref2.hasAnyActions,
      hasAnyExpansion = _ref2.hasAnyExpansion,
      hasExpansion = _ref2.hasExpansion,
      selectContent = _ref2.selectContent,
      selectable = _ref2.selectable,
      toggleChildContent = _ref2.toggleChildContent;
  var cells = entry.entryNodes.map(function (content, index) {
    return [content, fields[index].align, false];
  }); // Checkbox

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

var _StyledTable = _styled("table").withConfig({
  displayName: "TableView___StyledTable",
  componentId: "aczwu3-0"
})(["width:100%;border-spacing:0;border-collapse:separate;"]);

function TableView(_ref3) {
  var alignChildOnField = _ref3.alignChildOnField,
      allSelected = _ref3.allSelected,
      entries = _ref3.entries,
      fields = _ref3.fields,
      hasAnyActions = _ref3.hasAnyActions,
      hasAnyExpansion = _ref3.hasAnyExpansion,
      onSelect = _ref3.onSelect,
      onSelectAll = _ref3.onSelectAll,
      renderSelectionCount = _ref3.renderSelectionCount,
      rowHeight = _ref3.rowHeight,
      selectable = _ref3.selectable,
      selectedCount = _ref3.selectedCount;

  var _useState = useState(-1),
      _useState2 = _slicedToArray(_useState, 2),
      opened = _useState2[0],
      setOpened = _useState2[1];

  var toggleEntry = useCallback(function (index) {
    setOpened(function (opened) {
      return opened === index ? -1 : index;
    });
  }, []);
  var headCells = useMemo(function () {
    return headingsFromFields(fields, {
      hasAnyActions: hasAnyActions,
      hasAnyExpansion: hasAnyExpansion,
      selectContent: /*#__PURE__*/React.createElement(Checkbox, {
        indeterminate: allSelected === 0,
        checked: allSelected > -1,
        onChange: onSelectAll
      }),
      selectable: selectable
    });
  }, [fields, hasAnyActions, hasAnyExpansion, allSelected, onSelectAll, selectable]);
  useEffect(function () {
    setOpened(-1);
  }, [entries, fields]);
  return /*#__PURE__*/React.createElement(_StyledTable, null, headCells && /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement(HeadRow, {
    cells: headCells,
    selectedCount: selectedCount,
    renderSelectionCount: renderSelectionCount
  })), /*#__PURE__*/React.createElement("tbody", null, entries.map(function (entry, index) {
    return /*#__PURE__*/React.createElement(Entry, {
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
    });
  })));
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
  var _useLayout = useLayout(),
      layoutName = _useLayout.layoutName;

  return layoutName === 'small' ? 2 * GU : 3 * GU;
}

var _StyledTh = _styled("th").withConfig({
  displayName: "TableView___StyledTh",
  componentId: "aczwu3-1"
})(["height:", "px;padding:0;padding-left:", "px;padding-right:", "px;text-align:", ";", ";color:", ";border-bottom:1px solid ", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
});

function HeadRow(_ref4) {
  var cells = _ref4.cells,
      selectedCount = _ref4.selectedCount,
      renderSelectionCount = _ref4.renderSelectionCount;
  var theme = useTheme();
  var sidePadding = useSidePadding();
  return /*#__PURE__*/React.createElement("tr", null, cells.map(function (cell, index) {
    var hidden = selectedCount > 0 && index > 1;
    var content = selectedCount > 0 && index === 1 ? renderSelectionCount(selectedCount) : cell[0];
    return !hidden && /*#__PURE__*/React.createElement(_StyledTh, {
      key: index,
      colSpan: selectedCount > 0 && index === 1 ? cells.length - 1 : 1,
      _css: 4 * GU,
      _css2: index === 0 ? sidePadding : 0,
      _css3: index === cells.length - 1 ? sidePadding : 0,
      _css4: cell[1],
      _css5: textStyle('label2'),
      _css6: theme.surfaceContentSecondary,
      _css7: theme.border
    }, content);
  }));
}

var Entry = React.memo(function Entry(_ref5) {
  var alignChildOnField = _ref5.alignChildOnField,
      entry = _ref5.entry,
      fields = _ref5.fields,
      firstRow = _ref5.firstRow,
      hasAnyActions = _ref5.hasAnyActions,
      hasAnyExpansion = _ref5.hasAnyExpansion,
      onSelect = _ref5.onSelect,
      onToggle = _ref5.onToggle,
      opened = _ref5.opened,
      rowHeight = _ref5.rowHeight,
      selectable = _ref5.selectable;
  var hasExpansion = entry.expansion.content.length > 0;
  var entryIndex = entry.index;
  var handleToggle = useCallback(function () {
    onToggle(entryIndex);
  }, [entryIndex, onToggle]);
  var handleSelectChange = useCallback(function (check) {
    onSelect(entryIndex, check);
  }, [entryIndex, onSelect]);
  var cells = cellsFromEntry(entry, {
    fields: fields,
    hasAnyActions: hasAnyActions,
    hasAnyExpansion: hasAnyExpansion,
    hasExpansion: hasExpansion,
    selectable: selectable,
    toggleChildContent: hasAnyExpansion ? /*#__PURE__*/React.createElement(Toggle, {
      opened: opened,
      onToggle: handleToggle
    }) : null,
    selectContent: selectable ? /*#__PURE__*/React.createElement(Checkbox, {
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

var _StyledTr = _styled("tr").withConfig({
  displayName: "TableView___StyledTr",
  componentId: "aczwu3-2"
})(["transition:background 150ms ease-in-out;background:", ";"], function (p) {
  return p._css8;
});

var _StyledTd = _styled("td").withConfig({
  displayName: "TableView___StyledTd",
  componentId: "aczwu3-3"
})(["position:relative;width:", ";height:", "px;padding-top:0;padding-bottom:0;padding-left:", "px;padding-right:", "px;border-top:", ";"], function (p) {
  return p._css9;
}, function (p) {
  return p._css10;
}, function (p) {
  return p._css11;
}, function (p) {
  return p._css12;
}, function (p) {
  return p._css13;
});

var _StyledDiv = _styled("div").withConfig({
  displayName: "TableView___StyledDiv",
  componentId: "aczwu3-4"
})(["display:flex;width:100%;justify-content:", ";"], function (p) {
  return p._css14;
});

function EntryRow(_ref6) {
  var firstRow = _ref6.firstRow,
      cells = _ref6.cells,
      selected = _ref6.selected,
      rowHeight = _ref6.rowHeight,
      mode = _ref6.mode;
  var theme = useTheme();
  var sidePadding = useSidePadding();
  return /*#__PURE__*/React.createElement(_StyledTr, {
    _css8: selected ? theme.surfaceSelected : 'none'
  }, cells.map(function (_ref7, index, cells) {
    var _ref8 = _slicedToArray(_ref7, 3),
        content = _ref8[0],
        align = _ref8[1],
        compact = _ref8[2];

    var first = index === 0;
    var last = index === cells.length - 1;
    return /*#__PURE__*/React.createElement(_StyledTd, {
      key: index,
      _css9: compact ? '1px' // For some reason Blink tends to make 0 grow but not 1px
      : 'auto',
      _css10: rowHeight,
      _css11: first || compact ? sidePadding : 0,
      _css12: !first && (align !== 'end' || last) || compact ? sidePadding : 0,
      _css13: firstRow ? '0' : "1px solid ".concat(theme.border)
    }, /*#__PURE__*/React.createElement(_StyledDiv, {
      _css14: "flex-".concat(align)
    }, content));
  }));
}

var _StyledTr2 = _styled("tr").withConfig({
  displayName: "TableView___StyledTr2",
  componentId: "aczwu3-5"
})(["td{position:relative;padding:0;box-shadow:inset 0 6px 4px -4px rgba(0,0,0,0.16);background:", ";}"], function (p) {
  return p._css15;
});

var _StyledAnimatedDiv = _styled(extendedAnimated.div).withConfig({
  displayName: "TableView___StyledAnimatedDiv",
  componentId: "aczwu3-6"
})(["overflow:hidden"]);

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "TableView___StyledDiv2",
  componentId: "aczwu3-7"
})(["height:", ";border-top:1px solid ", ";"], function (p) {
  return p._css16;
}, function (p) {
  return p._css17;
});

var _StyledAnimatedDiv2 = _styled(extendedAnimated.div).withConfig({
  displayName: "TableView___StyledAnimatedDiv2",
  componentId: "aczwu3-8"
})(["overflow:hidden"]);

var _StyledDiv3 = _styled("div").withConfig({
  displayName: "TableView___StyledDiv3",
  componentId: "aczwu3-9"
})(["display:flex;align-items:center;height:", ";padding-left:", "px;padding-right:", "px;border-top:1px solid ", ";"], function (p) {
  return p._css18;
}, function (p) {
  return p._css19;
}, function (p) {
  return p._css20;
}, function (p) {
  return p._css21;
});

function EntryExpansion(_ref9) {
  var alignChildOnCell = _ref9.alignChildOnCell,
      cellsCount = _ref9.cellsCount,
      expansion = _ref9.expansion,
      opened = _ref9.opened,
      rowHeight = _ref9.rowHeight;
  var theme = useTheme(); // Handles the height of the expansion in free layout mode

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      freeLayoutContentHeight = _useState4[0],
      setFreeLayoutContentHeight = _useState4[1];

  var handleFreeLayoutContentRef = useCallback(function (element) {
    if (element) {
      setFreeLayoutContentHeight(element.getBoundingClientRect().height);
    }
  }, []);
  var height = expansion.freeLayout ? freeLayoutContentHeight : rowHeight * expansion.content.length;
  return /*#__PURE__*/React.createElement(Transition, {
    native: true,
    unique: true,
    items: opened,
    from: {
      height: 0
    },
    enter: {
      height: height
    },
    update: {
      height: height
    },
    leave: {
      height: 0
    },
    config: _objectSpread({}, springs.smooth, {
      precision: 0.1
    })
  }, function (show) {
    return show && function (_ref10) {
      var height = _ref10.height;
      return /*#__PURE__*/React.createElement(_StyledTr2, {
        _css15: theme.surfaceUnder
      }, alignChildOnCell > 0 && /*#__PURE__*/React.createElement("td", {
        colSpan: alignChildOnCell
      }, /*#__PURE__*/React.createElement(OpenedSurfaceBorder, {
        opened: opened
      }), /*#__PURE__*/React.createElement(_StyledAnimatedDiv, {
        style: {
          height: height
        }
      }, expansion.content.map(function (child, i) {
        return /*#__PURE__*/React.createElement(_StyledDiv2, {
          key: i,
          _css16: expansion.freeLayout ? 'auto' : "".concat(rowHeight, "px"),
          _css17: theme.border
        });
      }))), /*#__PURE__*/React.createElement("td", {
        colSpan: alignChildOnCell === -1 ? cellsCount : cellsCount - alignChildOnCell
      }, alignChildOnCell === 0 && /*#__PURE__*/React.createElement(OpenedSurfaceBorder, {
        opened: opened
      }), /*#__PURE__*/React.createElement(_StyledAnimatedDiv2, {
        style: {
          height: height
        }
      }, expansion.content.map(function (child, i) {
        return /*#__PURE__*/React.createElement(_StyledDiv3, {
          key: i,
          ref: expansion.freeLayout ? handleFreeLayoutContentRef : null,
          _css18: expansion.freeLayout ? 'auto' : "".concat(rowHeight, "px"),
          _css19: alignChildOnCell < 1 ? 3 * GU : 0,
          _css20: 3 * GU,
          _css21: theme.border
        }, child);
      }))));
    };
  });
}

var _StyledDiv4 = _styled("div").withConfig({
  displayName: "TableView___StyledDiv4",
  componentId: "aczwu3-10"
})(["width:100%;height:100%;"]);

var Toggle = React.memo(function Toggle(_ref11) {
  var opened = _ref11.opened,
      onToggle = _ref11.onToggle;
  return /*#__PURE__*/React.createElement(_StyledDiv4, null, /*#__PURE__*/React.createElement(OpenedSurfaceBorder, {
    opened: opened
  }), /*#__PURE__*/React.createElement(ToggleButton, {
    opened: opened,
    onClick: onToggle
  }));
});

export { TableView };
//# sourceMappingURL=TableView.js.map
