import React$1 from 'react';
import _styled$1 from 'styled-components';
import '../../utils/environment.js';
import { blockExplorerUrl } from '../../utils/web3.js';
import { GU } from '../../style/constants.js';
import Link$1 from '../Link/Link.js';
import AddressField$1 from '../AddressField/AddressField.js';
import BadgePopoverActionType$1 from '../BadgeBase/BadgePopoverActionType.js';
import Tag$1 from '../Tag/Tag.js';
import ExtendedPropTypes from '../../proptypes.js';
import BadgePopoverBase$1 from '../BadgeBase/BadgePopoverBase.js';

var _StyledTag = _styled$1(Tag$1).withConfig({
  displayName: "IdentityBadgePopover___StyledTag",
  componentId: "sc-1yeyfty-0"
})(["margin-left:", "px;"], function (p) {
  return p._css;
});

var IdentityBadgePopover = /*#__PURE__*/React$1.memo(function IdentityBadgePopover(_ref) {
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
  return /*#__PURE__*/React$1.createElement(BadgePopoverBase$1, {
    addressField: /*#__PURE__*/React$1.createElement(AddressField$1, {
      address: address
    }),
    link: etherscanUrl && /*#__PURE__*/React$1.createElement(Link$1, {
      href: etherscanUrl
    }, "See on Etherscan"),
    onClose: onClose,
    opener: opener,
    popoverAction: popoverAction,
    title: title,
    titleTag: connectedAccount && /*#__PURE__*/React$1.createElement(_StyledTag, {
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
  popoverAction: BadgePopoverActionType$1,
  title: ExtendedPropTypes.node,
  visible: ExtendedPropTypes.bool
};
IdentityBadgePopover.defaultProps = {
  title: 'Address'
};

export default IdentityBadgePopover;
//# sourceMappingURL=IdentityBadgePopover.js.map
