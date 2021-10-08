import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import slicedToArray from '../../../node_modules/@babel/runtime/helpers/slicedToArray.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import _styled from 'styled-components';
import React, { useRef, useState, useCallback } from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import BadgeBase from '../BadgeBase/BadgeBase.js';
import BadgePopoverActionType from '../BadgeBase/BadgePopoverActionType.js';
import EthIdenticon from '../EthIdenticon/EthIdenticon.js';
import IdentityBadgePopover from './IdentityBadgePopover.js';
import { isAddress, shortenAddress } from '../../utils/web3.js';
import { warnOnce } from '../../utils/environment.js';
import { GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';

var _StyledDiv = _styled("div").withConfig({
  displayName: "IdentityBadge___StyledDiv",
  componentId: "q71pax-0"
})(["display:block;margin-right:", "px;", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var IdentityBadge = /*#__PURE__*/React.memo(function IdentityBadge(_ref) {
  var badgeOnly = _ref.badgeOnly,
      compact = _ref.compact,
      connectedAccount = _ref.connectedAccount,
      entity = _ref.entity,
      label = _ref.label,
      labelStyle = _ref.labelStyle,
      networkType = _ref.networkType,
      popoverAction = _ref.popoverAction,
      popoverTitle = _ref.popoverTitle,
      shorten = _ref.shorten,
      customLabel = _ref.customLabel,
      fontSize = _ref.fontSize,
      props = objectWithoutProperties(_ref, ["badgeOnly", "compact", "connectedAccount", "entity", "label", "labelStyle", "networkType", "popoverAction", "popoverTitle", "shorten", "customLabel", "fontSize"]);

  if (customLabel) {
    warnOnce('IdentityBadge:customLabel', 'The “customLabel” prop is deprecated. Please use “label” instead.');
    label = label || customLabel;
  }

  if (fontSize) {
    warnOnce('IdentityBadge:fontSize', 'The “fontSize” prop is deprecated. Please use “labelStyle” to style the label instead.');
  }

  var badgeRef = useRef(null);

  var _useState = useState(false),
      _useState2 = slicedToArray(_useState, 2),
      opened = _useState2[0],
      setOpened = _useState2[1];

  var handleClose = useCallback(function () {
    return setOpened(false);
  }, []);
  var handleOpen = useCallback(function () {
    return setOpened(true);
  }, []);
  var address = isAddress(entity) ? entity : null;
  var displayLabel = label || (address && shorten ? shortenAddress(address) : entity);
  return /*#__PURE__*/React.createElement(BadgeBase, _extends_1({
    badgeRef: badgeRef,
    compact: compact,
    disabled: badgeOnly,
    icon: address && /*#__PURE__*/React.createElement(_StyledDiv, {
      _css: 1 * GU,
      _css2: compact ? "\n                  position: relative;\n                  top: -1px;\n                " : ''
    }, /*#__PURE__*/React.createElement(EthIdenticon, {
      scale: compact ? 0.75 : 1,
      radius: compact ? 2 : 0,
      address: address
    })),
    label: displayLabel,
    labelStyle: "\n        ".concat(!label && address ? textStyle('address1') : '', "\n        ").concat(labelStyle, "\n      "),
    onClick: address ? handleOpen : undefined,
    title: address
  }, props), function (popoverDisabled) {
    return !popoverDisabled && address && /*#__PURE__*/React.createElement(IdentityBadgePopover, {
      address: address,
      connectedAccount: connectedAccount,
      networkType: networkType,
      onClose: handleClose,
      opener: badgeRef.current,
      popoverAction: popoverAction,
      title: popoverTitle,
      visible: opened
    });
  });
});
IdentityBadge.propTypes = {
  badgeOnly: propTypes.bool,
  compact: propTypes.bool,
  connectedAccount: propTypes.bool,
  entity: propTypes.string,
  label: propTypes.string,
  labelStyle: propTypes.string,
  networkType: propTypes.string,
  popoverAction: BadgePopoverActionType,
  popoverTitle: propTypes.node,
  shorten: propTypes.bool,
  // Deprecated
  customLabel: propTypes.string,
  fontSize: propTypes.string
};
IdentityBadge.defaultProps = {
  entity: '',
  labelStyle: '',
  networkType: 'main',
  shorten: true
};

export default IdentityBadge;
//# sourceMappingURL=IdentityBadge.js.map
