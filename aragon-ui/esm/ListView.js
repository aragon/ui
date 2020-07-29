import { _ as _slicedToArray } from './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import React, { useState, useCallback } from 'react';
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
import './Layout.js';
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

var _StyledDiv = _styled("div").withConfig({
  displayName: "ListView___StyledDiv",
  componentId: "sc-1wnrej-0"
})(["position:relative;padding:0;padding-right:", "px;padding-left:", "px;border-bottom:", "px solid ", ";transition:background 150ms ease-in-out;background:", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "ListView___StyledDiv2",
  componentId: "sc-1wnrej-1"
})(["position:absolute;top:", "px;left:0;display:flex;justify-content:center;width:", "px;"], function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
});

var _StyledDiv3 = _styled("div").withConfig({
  displayName: "ListView___StyledDiv3",
  componentId: "sc-1wnrej-2"
})(["position:absolute;top:", "px;right:", "px;"], function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
});

var _StyledDiv4 = _styled("div").withConfig({
  displayName: "ListView___StyledDiv4",
  componentId: "sc-1wnrej-3"
})(["display:flex;flex-direction:column;padding-bottom:", "px;"], function (p) {
  return p._css10;
});

var _StyledDiv5 = _styled("div").withConfig({
  displayName: "ListView___StyledDiv5",
  componentId: "sc-1wnrej-4"
})(["display:flex;align-items:center;margin:", "px 0 ", "px;color:", ";", ";"], function (p) {
  return p._css11;
}, function (p) {
  return p._css12;
}, function (p) {
  return p._css13;
}, function (p) {
  return p._css14;
});

function ListView(_ref) {
  var allSelected = _ref.allSelected,
      entries = _ref.entries,
      fields = _ref.fields,
      hasAnyExpansion = _ref.hasAnyExpansion,
      onSelect = _ref.onSelect,
      onSelectAll = _ref.onSelectAll,
      renderSelectionCount = _ref.renderSelectionCount,
      selectable = _ref.selectable,
      rowHeight = _ref.rowHeight;
  var theme = useTheme();

  var _useState = useState(-1),
      _useState2 = _slicedToArray(_useState, 2),
      opened = _useState2[0],
      setOpened = _useState2[1];

  var toggleEntry = useCallback(function (index) {
    setOpened(function (opened) {
      return opened === index ? -1 : index;
    });
  }, []);
  var sideSpace = selectable || hasAnyExpansion;
  return /*#__PURE__*/React.createElement(React.Fragment, null, entries.map(function (entry, index) {
    var hasExpansion = entry.expansion.content.length > 0;
    return /*#__PURE__*/React.createElement(_StyledDiv, {
      key: index,
      _css: 3 * GU,
      _css2: (sideSpace ? 6.5 : 3) * GU,
      _css3: Number(index !== entries.length - 1),
      _css4: theme.border,
      _css5: entry.selected ? theme.surfaceSelected : 'none'
    }, /*#__PURE__*/React.createElement(OpenedSurfaceBorder, {
      opened: entry.index === opened
    }), sideSpace && /*#__PURE__*/React.createElement(_StyledDiv2, {
      _css6: 1.5 * GU,
      _css7: 6.5 * GU
    }, selectable && /*#__PURE__*/React.createElement(Select, {
      index: entry.index,
      selected: entry.selected,
      onSelect: onSelect
    }), !selectable && hasExpansion && /*#__PURE__*/React.createElement(ToggleButton, {
      opened: entry.index === opened,
      onClick: function onClick() {
        return toggleEntry(entry.index);
      }
    })), entry.actions && /*#__PURE__*/React.createElement(_StyledDiv3, {
      _css8: 2 * GU,
      _css9: 3 * GU
    }, entry.actions), /*#__PURE__*/React.createElement("div", null, entry.entryNodes.map(function (content, index) {
      return [// field content
      content, // field label
      fields[index].label, // priority number
      fields[index].priority && fields[index].priority || 0];
    }) // sort by priority
    .sort(function (a, b) {
      return b[2] - a[2];
    }).map(function (_ref2, index, entryNodes) {
      var _ref3 = _slicedToArray(_ref2, 2),
          content = _ref3[0],
          label = _ref3[1];

      return /*#__PURE__*/React.createElement(_StyledDiv4, {
        key: index,
        _css10: index === entryNodes.length - 1 ? 2 * GU : 0
      }, /*#__PURE__*/React.createElement(_StyledDiv5, {
        _css11: 2 * GU,
        _css12: 1 * GU,
        _css13: theme.surfaceContentSecondary,
        _css14: textStyle('label2')
      }, label), /*#__PURE__*/React.createElement("div", null, content));
    })), hasExpansion && /*#__PURE__*/React.createElement(EntryExpansion, {
      expansion: entry.expansion,
      opened: opened === entry.index,
      rowHeight: rowHeight
    }));
  }));
}

ListView.propTypes = {
  allSelected: PropTypes.oneOf([-1, 0, 1]).isRequired,
  entries: PropTypes.array.isRequired,
  fields: PropTypes.array.isRequired,
  hasAnyExpansion: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  onSelectAll: PropTypes.func.isRequired,
  renderSelectionCount: PropTypes.func.isRequired,
  rowHeight: PropTypes.number.isRequired,
  selectable: PropTypes.bool.isRequired
}; // Disable prop types check for internal components

/* eslint-disable react/prop-types */

var _StyledAnimatedDiv = _styled(extendedAnimated.div).withConfig({
  displayName: "ListView___StyledAnimatedDiv",
  componentId: "sc-1wnrej-5"
})(["overflow:hidden;background:", ";margin-left:", "px;margin-right:", "px;padding-left:", "px;box-shadow:inset 0 6px 4px -4px rgba(0,0,0,0.16);"], function (p) {
  return p._css15;
}, function (p) {
  return p._css16;
}, function (p) {
  return p._css17;
}, function (p) {
  return p._css18;
});

var _StyledDiv6 = _styled("div").withConfig({
  displayName: "ListView___StyledDiv6",
  componentId: "sc-1wnrej-6"
})(["display:flex;align-items:center;height:", ";padding-right:", "px;"], function (p) {
  return p._css19;
}, function (p) {
  return p._css20;
});

function EntryExpansion(_ref4) {
  var expansion = _ref4.expansion,
      opened = _ref4.opened,
      rowHeight = _ref4.rowHeight;
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
    return show && function (_ref5) {
      var height = _ref5.height;
      return /*#__PURE__*/React.createElement(_StyledAnimatedDiv, {
        style: {
          height: height.interpolate(function (v) {
            return "".concat(v, "px");
          })
        },
        _css15: theme.surfaceUnder,
        _css16: -6.5 * GU,
        _css17: -3 * GU,
        _css18: 6.5 * GU
      }, expansion.content.map(function (child, i) {
        return /*#__PURE__*/React.createElement(_StyledDiv6, {
          key: i,
          ref: expansion.freeLayout ? handleFreeLayoutContentRef : null,
          _css19: expansion.freeLayout ? 'auto' : "".concat(rowHeight, "px"),
          _css20: 3 * GU
        }, child);
      }));
    };
  });
}

function Select(_ref6) {
  var index = _ref6.index,
      selected = _ref6.selected,
      onSelect = _ref6.onSelect;
  var change = useCallback(function (check) {
    onSelect(index, check);
  }, [index, onSelect]);
  return /*#__PURE__*/React.createElement(Checkbox, {
    onChange: change,
    checked: selected
  });
}

export { ListView };
//# sourceMappingURL=ListView.js.map
