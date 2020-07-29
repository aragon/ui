'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var slicedToArray = require('./slicedToArray-0711941d.js');
require('./unsupportedIterableToArray-68db1d3b.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
var index = require('./index-b0606964.js');
require('./defineProperty-0921a47c.js');
require('./toConsumableArray-d8a4a2c3.js');
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
require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./Theme.js');
var _extends$1 = require('./extends-40571110.js');
require('./objectWithoutProperties-35db8ab0.js');
var index$1 = require('./index-ecc57c9f.js');
require('./isObject-ec755c87.js');
require('./Viewport-15101437.js');
var Layout = require('./Layout.js');
require('./FocusVisible.js');
require('./ButtonBase.js');
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
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
require('./web-d0294535.js');
require('./useArrowKeysFocus.js');
require('./useClickOutside.js');
require('./useFocusEnter.js');
require('./useFocusLeave.js');
require('./useImageExists.js');
require('./useKeyDown.js');
require('./useOnBlur.js');
var Bar = require('./Bar.js');
var TabBarLegacy = require('./TabBarLegacy.js');
var TabsFullWidth = require('./TabsFullWidth.js');
var Tab = require('./Tab.js');

var _StyledUl = _styled__default("ul").withConfig({
  displayName: "Tabs___StyledUl",
  componentId: "sc-1eu39ev-0"
})(["display:flex"]);

function TabBar(_ref) {
  var items = _ref.items,
      selected = _ref.selected,
      onChange = _ref.onChange;
  return /*#__PURE__*/React__default.createElement("nav", null, /*#__PURE__*/React__default.createElement(_StyledUl, null, items.map(function (item, i) {
    return /*#__PURE__*/React__default.createElement(Tab.default, {
      key: i,
      index: i,
      item: item,
      onChange: onChange,
      selected: i === selected
    });
  })));
}

TabBar.propTypes = {
  items: index.PropTypes.arrayOf(index.PropTypes.node).isRequired,
  selected: index.PropTypes.number,
  onChange: index.PropTypes.func
};
TabBar.defaultProps = {
  selected: 0,
  onChange: miscellaneous.noop
};

var _StyledBar = _styled__default(Bar.default).withConfig({
  displayName: "Tabs___StyledBar",
  componentId: "sc-1eu39ev-1"
})(["overflow:hidden;", ""], function (p) {
  return p._css;
});

function Tabs(props) {
  var _useLayout = Layout.useLayout(),
      layoutName = _useLayout.layoutName;

  var _useInside = index$1.o('Bar'),
      _useInside2 = slicedToArray._slicedToArray(_useInside, 1),
      insideBar = _useInside2[0];

  var _useInside3 = index$1.o('SidePanel'),
      _useInside4 = slicedToArray._slicedToArray(_useInside3, 1),
      insideSidePanel = _useInside4[0];

  if (insideBar) {
    throw new Error('Tabs cannot be a child of Bar: please use the Tabs component directly.');
  }

  var selected = Math.min(props.items.length - 1, Math.max(0, props.selected));

  if (selected !== props.selected) {
    environment.warnOnce('Tabs:outOfRangeSelected', "Tabs: the selected item doesn\u2019t exist (selected index: ".concat(props.selected, ", selection range: 0 to ").concat(props.items.length - 1, "). Selecting ").concat(selected, " instead."));
  }

  if (layoutName === 'small') {
    return /*#__PURE__*/React__default.createElement(TabsFullWidth.TabsFullWidth, _extends$1._extends({}, props, {
      selected: selected
    }));
  }

  return /*#__PURE__*/React__default.createElement(_StyledBar, {
    _css: insideSidePanel ? "\n            border-width: 0 0 1px 0;\n            border-radius: 0;\n          " : ''
  }, /*#__PURE__*/React__default.createElement(TabBar, _extends$1._extends({}, props, {
    selected: selected
  })));
}

Tabs.propTypes = TabBar.propTypes; // TabBar legacy compatibility

function TabBarLegacyCompatibility(props) {
  var _useInside5 = index$1.o('AppBar'),
      _useInside6 = slicedToArray._slicedToArray(_useInside5, 1),
      insideAppBar = _useInside6[0]; // Use a separate component for Tabs in AppBar, to prevent breaking anything.


  if (insideAppBar) {
    return /*#__PURE__*/React__default.createElement(TabBarLegacy.default, _extends$1._extends({}, props, {
      inAppBar: true
    }));
  }

  environment.warnOnce('TabBarLegacyCompatibility', 'TabBar is deprecated and was used outside of an AppBar. Please use the Tabs component instead.');
  return /*#__PURE__*/React__default.createElement(Tabs, props);
}

exports.TabBarLegacyCompatibility = TabBarLegacyCompatibility;
exports.default = Tabs;
//# sourceMappingURL=Tabs.js.map
