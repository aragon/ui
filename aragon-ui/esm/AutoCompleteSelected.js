import './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import React, { useRef, useCallback } from 'react';
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
import { noop, identity } from './miscellaneous.js';
import './environment.js';
import './font.js';
import './math-e6d0e93a.js';
import './characters.js';
import './format.js';
import './keycodes.js';
import './url.js';
import './web3.js';
import { RADIUS } from './constants.js';
import './breakpoints.js';
import './springs.js';
import './text-styles.js';
import './theme-dark.js';
import './theme-light.js';
import { useTheme } from './Theme.js';
import { _ as _extends } from './extends-db4f0c26.js';
import './objectWithoutProperties-234758e1.js';
import './index-422d37c0.js';
import './isObject-3c6ec07e.js';
import './Viewport-cc7debfb.js';
import './Layout.js';
import './FocusVisible.js';
import ButtonBase from './ButtonBase.js';
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
import './Button.js';
import './ButtonIcon.js';
import './TextInput.js';
import './useArrowKeysFocus.js';
import './useClickOutside.js';
import './useFocusEnter.js';
import './useFocusLeave.js';
import './useImageExists.js';
import './useKeyDown.js';
import './useOnBlur.js';
import './SearchInput.js';
import AutoComplete from './AutoComplete.js';

var _StyledButtonBase = _styled(ButtonBase).withConfig({
  displayName: "AutoCompleteSelected___StyledButtonBase",
  componentId: "sc-15vq9oz-0"
})(["height:40px;width:100%;text-align:left;background:", ";cursor:pointer;border:1px solid ", ";padding:4px 8px;", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

function AutoCompleteSelected(_ref) {
  var forwardedRef = _ref.forwardedRef,
      itemButtonStyles = _ref.itemButtonStyles,
      items = _ref.items,
      onChange = _ref.onChange,
      onSelect = _ref.onSelect,
      _ref$onSelectedClick = _ref.onSelectedClick,
      onSelectedClick = _ref$onSelectedClick === void 0 ? noop : _ref$onSelectedClick,
      placeholder = _ref.placeholder,
      renderItem = _ref.renderItem,
      required = _ref.required,
      _ref$renderSelected = _ref.renderSelected,
      renderSelected = _ref$renderSelected === void 0 ? identity : _ref$renderSelected,
      selected = _ref.selected,
      _ref$selectedButtonSt = _ref.selectedButtonStyles,
      selectedButtonStyles = _ref$selectedButtonSt === void 0 ? '' : _ref$selectedButtonSt,
      value = _ref.value,
      wide = _ref.wide;
  var theme = useTheme();
  var ref = forwardedRef;
  var selectedRef = useRef();
  var handleSelect = useCallback(function (selected) {
    onSelect(selected);
    setTimeout(function () {
      selectedRef.current.focus();
    }, 0);
  }, [onSelect]);
  var handleSelectedClick = useCallback(function () {
    onSelectedClick();
    setTimeout(function () {
      if (ref && ref.current) {
        ref.current.select();
        ref.current.focus();
      }
    }, 0);
  }, [ref, onSelectedClick]);

  if (selected) {
    return /*#__PURE__*/React.createElement(_StyledButtonBase, {
      onClick: handleSelectedClick,
      ref: selectedRef,
      focusRingRadius: RADIUS,
      focusRingSpacing: 1,
      _css: theme.surface,
      _css2: theme.border,
      _css3: selectedButtonStyles
    }, renderSelected(selected));
  }

  return /*#__PURE__*/React.createElement(AutoComplete, {
    itemButtonStyles: itemButtonStyles,
    items: items,
    onChange: onChange,
    onSelect: handleSelect,
    placeholder: placeholder,
    ref: ref,
    renderItem: renderItem,
    required: required,
    value: value,
    wide: wide
  });
}

AutoCompleteSelected.propTypes = {
  forwardedRef: PropTypes.object,
  itemButtonStyles: PropTypes.string,
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  onSelectedClick: PropTypes.func,
  placeholder: PropTypes.string,
  renderItem: PropTypes.func,
  renderSelected: PropTypes.func,
  required: PropTypes.bool,
  selected: PropTypes.object,
  selectedButtonStyles: PropTypes.string,
  value: PropTypes.string,
  wide: PropTypes.bool
};
var AutoCompleteSelectedMemo = React.memo(AutoCompleteSelected);
var AutoCompleteSelected$1 = React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(AutoCompleteSelectedMemo, _extends({}, props, {
    forwardedRef: ref
  }));
});

export default AutoCompleteSelected$1;
//# sourceMappingURL=AutoCompleteSelected.js.map
