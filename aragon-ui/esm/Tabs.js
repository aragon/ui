import { _ as _slicedToArray } from './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import React from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import { P as PropTypes } from './index-097535f1.js';
import './defineProperty-a0480c32.js';
import './toConsumableArray-127424c2.js';
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
import './constants.js';
import './breakpoints.js';
import './springs.js';
import './text-styles.js';
import './theme-dark.js';
import './theme-light.js';
import './Theme.js';
import { _ as _extends } from './extends-db4f0c26.js';
import './objectWithoutProperties-234758e1.js';
import { o } from './index-422d37c0.js';
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
import './web-a351a0a1.js';
import './useArrowKeysFocus.js';
import './useClickOutside.js';
import './useFocusEnter.js';
import './useFocusLeave.js';
import './useImageExists.js';
import './useKeyDown.js';
import './useOnBlur.js';
import Bar from './Bar.js';
import TabBarLegacy from './TabBarLegacy.js';
import { TabsFullWidth } from './TabsFullWidth.js';
import Tab from './Tab.js';

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
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
  selected: PropTypes.number,
  onChange: PropTypes.func
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
      _useInside2 = _slicedToArray(_useInside, 1),
      insideBar = _useInside2[0];

  var _useInside3 = o('SidePanel'),
      _useInside4 = _slicedToArray(_useInside3, 1),
      insideSidePanel = _useInside4[0];

  if (insideBar) {
    throw new Error('Tabs cannot be a child of Bar: please use the Tabs component directly.');
  }

  var selected = Math.min(props.items.length - 1, Math.max(0, props.selected));

  if (selected !== props.selected) {
    warnOnce('Tabs:outOfRangeSelected', "Tabs: the selected item doesn\u2019t exist (selected index: ".concat(props.selected, ", selection range: 0 to ").concat(props.items.length - 1, "). Selecting ").concat(selected, " instead."));
  }

  if (layoutName === 'small') {
    return /*#__PURE__*/React.createElement(TabsFullWidth, _extends({}, props, {
      selected: selected
    }));
  }

  return /*#__PURE__*/React.createElement(_StyledBar, {
    _css: insideSidePanel ? "\n            border-width: 0 0 1px 0;\n            border-radius: 0;\n          " : ''
  }, /*#__PURE__*/React.createElement(TabBar, _extends({}, props, {
    selected: selected
  })));
}

Tabs.propTypes = TabBar.propTypes; // TabBar legacy compatibility

function TabBarLegacyCompatibility(props) {
  var _useInside5 = o('AppBar'),
      _useInside6 = _slicedToArray(_useInside5, 1),
      insideAppBar = _useInside6[0]; // Use a separate component for Tabs in AppBar, to prevent breaking anything.


  if (insideAppBar) {
    return /*#__PURE__*/React.createElement(TabBarLegacy, _extends({}, props, {
      inAppBar: true
    }));
  }

  warnOnce('TabBarLegacyCompatibility', 'TabBar is deprecated and was used outside of an AppBar. Please use the Tabs component instead.');
  return /*#__PURE__*/React.createElement(Tabs, props);
}

export default Tabs;
export { TabBarLegacyCompatibility };
//# sourceMappingURL=Tabs.js.map
