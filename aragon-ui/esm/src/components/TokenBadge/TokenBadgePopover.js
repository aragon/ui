import _styled from 'styled-components';
import React from 'react';
import ExtendedPropTypes from '../../proptypes.js';
import AddressField from '../AddressField/AddressField.js';
import BadgePopoverBase from '../BadgeBase/BadgePopoverBase.js';
import Link from '../Link/Link.js';
import { blockExplorerUrl } from '../../utils/web3.js';
import { ImageExists } from '../../hooks/useImageExists.js';
import { GU } from '../../style/constants.js';

var TokenBadgePopover = /*#__PURE__*/React.memo(function TokenBadgePopover(_ref) {
  var address = _ref.address,
      iconSrc = _ref.iconSrc,
      networkType = _ref.networkType,
      onClose = _ref.onClose,
      opener = _ref.opener,
      title = _ref.title,
      visible = _ref.visible;
  var etherscanUrl = blockExplorerUrl('token', address, {
    networkType: networkType
  });
  return /*#__PURE__*/React.createElement(BadgePopoverBase, {
    addressField: iconSrc ? /*#__PURE__*/React.createElement(ImageExists, {
      src: iconSrc
    }, function (_ref2) {
      var exists = _ref2.exists;
      return /*#__PURE__*/React.createElement(AddressField, {
        address: address,
        icon: exists ? /*#__PURE__*/React.createElement(Icon, {
          src: iconSrc
        }) : null
      });
    }) : /*#__PURE__*/React.createElement(AddressField, {
      address: address
    }),
    link: etherscanUrl && /*#__PURE__*/React.createElement(Link, {
      href: etherscanUrl
    }, "See on Explorer"),
    onClose: onClose,
    opener: opener,
    title: title,
    visible: visible
  });
});
TokenBadgePopover.propTypes = {
  address: ExtendedPropTypes.string.isRequired,
  iconSrc: ExtendedPropTypes.string,
  networkType: ExtendedPropTypes.string,
  onClose: ExtendedPropTypes.func,
  opener: ExtendedPropTypes._element,
  title: ExtendedPropTypes.string.isRequired,
  visible: ExtendedPropTypes.bool
};

var _StyledDiv = _styled("div").withConfig({
  displayName: "TokenBadgePopover___StyledDiv",
  componentId: "sc-8b2bwa-0"
})(["width:calc(100% - ", "px);height:calc(100% - ", "px);background-size:contain;background-position:50% 50%;background-repeat:no-repeat;background-image:url(", ");"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

function Icon(_ref3) {
  var src = _ref3.src;
  return /*#__PURE__*/React.createElement(_StyledDiv, {
    _css: 0.5 * GU,
    _css2: 0.5 * GU,
    _css3: src
  });
}

Icon.propTypes = {
  src: ExtendedPropTypes.string.isRequired
};

export default TokenBadgePopover;
//# sourceMappingURL=TokenBadgePopover.js.map
