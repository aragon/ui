import _styled from 'styled-components';
import React from 'react';
import ExtendedPropTypes from '../../proptypes.js';
import AddressField from '../AddressField/AddressField.js';
import BadgePopoverBase from '../BadgeBase/BadgePopoverBase.js';
import BadgePopoverActionType from '../BadgeBase/BadgePopoverActionType.js';
import Link from '../Link/Link.js';
import Tag from '../Tag/Tag.js';
import { blockExplorerUrl } from '../../utils/web3.js';
import { GU } from '../../style/constants.js';

var _StyledTag = _styled(Tag).withConfig({
  displayName: "IdentityBadgePopover___StyledTag",
  componentId: "sc-1yeyfty-0"
})(["margin-left:", "px;"], function (p) {
  return p._css;
});

var IdentityBadgePopover = /*#__PURE__*/React.memo(function IdentityBadgePopover(_ref) {
  var address = _ref.address,
      connectedAccount = _ref.connectedAccount,
      networkType = _ref.networkType,
      onClose = _ref.onClose,
      opener = _ref.opener,
      popoverAction = _ref.popoverAction,
      title = _ref.title,
      visible = _ref.visible;
  var etherscanUrl = blockExplorerUrl('address', address, {
    networkType: networkType
  });
  return /*#__PURE__*/React.createElement(BadgePopoverBase, {
    addressField: /*#__PURE__*/React.createElement(AddressField, {
      address: address
    }),
    link: etherscanUrl && /*#__PURE__*/React.createElement(Link, {
      href: etherscanUrl
    }, "See on Explorer"),
    onClose: onClose,
    opener: opener,
    popoverAction: popoverAction,
    title: title,
    titleTag: connectedAccount && /*#__PURE__*/React.createElement(_StyledTag, {
      title: "This is your Ethereum address",
      _css: 1 * GU
    }, "you"),
    visible: visible
  });
});
IdentityBadgePopover.propTypes = {
  address: ExtendedPropTypes.string,
  connectedAccount: ExtendedPropTypes.bool,
  networkType: ExtendedPropTypes.string,
  onClose: ExtendedPropTypes.func,
  opener: ExtendedPropTypes._element,
  popoverAction: BadgePopoverActionType,
  title: ExtendedPropTypes.node,
  visible: ExtendedPropTypes.bool
};
IdentityBadgePopover.defaultProps = {
  title: 'Address'
};

export default IdentityBadgePopover;
//# sourceMappingURL=IdentityBadgePopover.js.map
