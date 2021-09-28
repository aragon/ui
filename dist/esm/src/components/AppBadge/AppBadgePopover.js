import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React from 'react';
import PropTypes from '../../proptypes.js';
import AddressField from '../AddressField/AddressField.js';
import BadgePopoverBase from '../BadgeBase/BadgePopoverBase.js';
import BadgePopoverActionType from '../BadgeBase/BadgePopoverActionType.js';
import Link from '../Link/Link.js';
import { blockExplorerUrl } from '../../utils/web3.js';
import { ImageExists } from '../../hooks/useImageExists.js';

const AppBadgePopover = /*#__PURE__*/React.memo(function AppBadgePopover({
  appAddress,
  iconFallbackSrc,
  iconSrc,
  networkType,
  onClose,
  opener,
  popoverAction,
  title,
  visible
}) {
  const etherscanUrl = blockExplorerUrl('address', appAddress, {
    networkType
  });
  return /*#__PURE__*/React.createElement(BadgePopoverBase, {
    addressField: /*#__PURE__*/React.createElement(ImageExists, {
      src: iconSrc
    }, ({
      exists,
      displayFallback
    }) => /*#__PURE__*/React.createElement(AddressField, {
      address: appAddress,
      icon: /*#__PURE__*/React.createElement(Icon, {
        src: exists ? iconSrc : iconFallbackSrc
      })
    })),
    link: etherscanUrl && /*#__PURE__*/React.createElement(Link, {
      href: etherscanUrl
    }, "See on Etherscan"),
    onClose: onClose,
    opener: opener,
    popoverAction: popoverAction,
    title: title,
    visible: visible
  });
});
AppBadgePopover.propTypes = {
  appAddress: PropTypes.string.isRequired,
  iconFallbackSrc: PropTypes.string,
  iconSrc: PropTypes.string,
  networkType: PropTypes.string,
  onClose: PropTypes.func,
  opener: PropTypes._element,
  popoverAction: BadgePopoverActionType,
  title: PropTypes.node.isRequired,
  visible: PropTypes.bool
};

function Icon({
  src,
  ...props
}) {
  return /*#__PURE__*/React.createElement(_StyledDiv, _extends({}, props, {
    $_css: src
  }));
}

Icon.propTypes = {
  src: PropTypes.string.isRequired
};

var _StyledDiv = _styled("div").withConfig({
  displayName: "AppBadgePopover___StyledDiv",
  componentId: "sc-cornse-0"
})(["width:100%;height:100%;background-size:contain;background-position:50% 50%;background-repeat:no-repeat;background-image:url(", ");"], p => p.$_css);

export { AppBadgePopover as default };
//# sourceMappingURL=AppBadgePopover.js.map
