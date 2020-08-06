import React$1 from 'react';
import _styled$1 from 'styled-components';
import '../../utils/environment.js';
import { blockExplorerUrl } from '../../utils/web3.js';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties$1 from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import Link$1 from '../Link/Link.js';
import AddressField$1 from '../AddressField/AddressField.js';
import { ImageExists } from '../../hooks/useImageExists.js';
import BadgePopoverActionType$1 from '../BadgeBase/BadgePopoverActionType.js';
import ExtendedPropTypes from '../../proptypes.js';
import BadgePopoverBase$1 from '../BadgeBase/BadgePopoverBase.js';

var AppBadgePopover = /*#__PURE__*/React$1.memo(function AppBadgePopover(_ref) {
  var appAddress = _ref.appAddress,
      iconFallbackSrc = _ref.iconFallbackSrc,
      iconSrc = _ref.iconSrc,
      networkType = _ref.networkType,
      onClose = _ref.onClose,
      opener = _ref.opener,
      popoverAction = _ref.popoverAction,
      title = _ref.title,
      visible = _ref.visible;
  var etherscanUrl = blockExplorerUrl('address', appAddress, {
    networkType: networkType
  });
  return /*#__PURE__*/React$1.createElement(BadgePopoverBase$1, {
    addressField: /*#__PURE__*/React$1.createElement(ImageExists, {
      src: iconSrc
    }, function (_ref2) {
      var exists = _ref2.exists,
          displayFallback = _ref2.displayFallback;
      return /*#__PURE__*/React$1.createElement(AddressField$1, {
        address: appAddress,
        icon: /*#__PURE__*/React$1.createElement(Icon, {
          src: exists ? iconSrc : iconFallbackSrc
        })
      });
    }),
    link: etherscanUrl && /*#__PURE__*/React$1.createElement(Link$1, {
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
  appAddress: ExtendedPropTypes.string.isRequired,
  iconFallbackSrc: ExtendedPropTypes.string,
  iconSrc: ExtendedPropTypes.string,
  networkType: ExtendedPropTypes.string,
  onClose: ExtendedPropTypes.func,
  opener: ExtendedPropTypes._element,
  popoverAction: BadgePopoverActionType$1,
  title: ExtendedPropTypes.node.isRequired,
  visible: ExtendedPropTypes.bool
};

var _StyledDiv = _styled$1("div").withConfig({
  displayName: "AppBadgePopover___StyledDiv",
  componentId: "cornse-0"
})(["width:100%;height:100%;background-size:contain;background-position:50% 50%;background-repeat:no-repeat;background-image:url(", ");"], function (p) {
  return p._css;
});

function Icon(_ref3) {
  var src = _ref3.src,
      props = objectWithoutProperties$1(_ref3, ["src"]);

  return /*#__PURE__*/React$1.createElement(_StyledDiv, _extends_1({}, props, {
    _css: src
  }));
}

Icon.propTypes = {
  src: ExtendedPropTypes.string.isRequired
};

export default AppBadgePopover;
//# sourceMappingURL=AppBadgePopover.js.map
