import _styled from 'styled-components';
import React from 'react';
import PropTypes from '../../proptypes.js';
import AddressField from '../AddressField/AddressField.js';
import BadgePopoverBase from '../BadgeBase/BadgePopoverBase.js';
import Link from '../Link/Link.js';
import { blockExplorerUrl } from '../../utils/web3.js';
import { ImageExists } from '../../hooks/useImageExists.js';
import { GU } from '../../style/constants.js';

const TokenBadgePopover = /*#__PURE__*/React.memo(function TokenBadgePopover({
  address,
  iconSrc,
  networkType,
  onClose,
  opener,
  title,
  visible
}) {
  const etherscanUrl = blockExplorerUrl('token', address, {
    networkType
  });
  return /*#__PURE__*/React.createElement(BadgePopoverBase, {
    addressField: iconSrc ? /*#__PURE__*/React.createElement(ImageExists, {
      src: iconSrc
    }, ({
      exists
    }) => /*#__PURE__*/React.createElement(AddressField, {
      address: address,
      icon: exists ? /*#__PURE__*/React.createElement(Icon, {
        src: iconSrc
      }) : null
    })) : /*#__PURE__*/React.createElement(AddressField, {
      address: address
    }),
    link: etherscanUrl && /*#__PURE__*/React.createElement(Link, {
      href: etherscanUrl
    }, "See on Etherscan"),
    onClose: onClose,
    opener: opener,
    title: title,
    visible: visible
  });
});
TokenBadgePopover.propTypes = {
  address: PropTypes.string.isRequired,
  iconSrc: PropTypes.string,
  networkType: PropTypes.string,
  onClose: PropTypes.func,
  opener: PropTypes._element,
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool
};

function Icon({
  src
}) {
  return /*#__PURE__*/React.createElement(_StyledDiv, {
    $_css: 0.5 * GU,
    $_css2: 0.5 * GU,
    $_css3: src
  });
}

Icon.propTypes = {
  src: PropTypes.string.isRequired
};

var _StyledDiv = _styled("div").withConfig({
  displayName: "TokenBadgePopover___StyledDiv",
  componentId: "sc-8b2bwa-0"
})(["width:calc(100% - ", "px);height:calc(100% - ", "px);background-size:contain;background-position:50% 50%;background-repeat:no-repeat;background-image:url(", ");"], p => p.$_css, p => p.$_css2, p => p.$_css3);

export { TokenBadgePopover as default };
//# sourceMappingURL=TokenBadgePopover.js.map
