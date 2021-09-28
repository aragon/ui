import _styled from 'styled-components';
import React from 'react';
import PropTypes from '../../proptypes.js';
import AddressField from '../AddressField/AddressField.js';
import BadgePopoverBase from '../BadgeBase/BadgePopoverBase.js';
import BadgePopoverActionType from '../BadgeBase/BadgePopoverActionType.js';
import Link from '../Link/Link.js';
import Tag from '../Tag/Tag.js';
import { blockExplorerUrl } from '../../utils/web3.js';
import { GU } from '../../style/constants.js';

const IdentityBadgePopover = /*#__PURE__*/React.memo(function IdentityBadgePopover({
  address,
  connectedAccount,
  networkType,
  onClose,
  opener,
  popoverAction,
  title,
  visible
}) {
  const etherscanUrl = blockExplorerUrl('address', address, {
    networkType
  });
  return /*#__PURE__*/React.createElement(BadgePopoverBase, {
    addressField: /*#__PURE__*/React.createElement(AddressField, {
      address: address
    }),
    link: etherscanUrl && /*#__PURE__*/React.createElement(Link, {
      href: etherscanUrl
    }, "See on Etherscan"),
    onClose: onClose,
    opener: opener,
    popoverAction: popoverAction,
    title: title,
    titleTag: connectedAccount && /*#__PURE__*/React.createElement(_StyledTag, {
      title: "This is your Ethereum address",
      $_css: 1 * GU
    }, "you"),
    visible: visible
  });
});
IdentityBadgePopover.propTypes = {
  address: PropTypes.string,
  connectedAccount: PropTypes.bool,
  networkType: PropTypes.string,
  onClose: PropTypes.func,
  opener: PropTypes._element,
  popoverAction: BadgePopoverActionType,
  title: PropTypes.node,
  visible: PropTypes.bool
};
IdentityBadgePopover.defaultProps = {
  title: 'Address'
};

var _StyledTag = _styled(Tag).withConfig({
  displayName: "IdentityBadgePopover___StyledTag",
  componentId: "sc-1yeyfty-0"
})(["margin-left:", "px;"], p => p.$_css);

export { IdentityBadgePopover as default };
//# sourceMappingURL=IdentityBadgePopover.js.map
