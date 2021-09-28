import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React, { useRef, useState, useCallback } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import BadgeBase from '../BadgeBase/BadgeBase.js';
import BadgePopoverActionType from '../BadgeBase/BadgePopoverActionType.js';
import Tag from '../Tag/Tag.js';
import AppBadgePopover from './AppBadgePopover.js';
import iconDefaultSvg from './assets/app-default.svg.js';
import { isAddress } from '../../utils/web3.js';
import { warn } from '../../utils/environment.js';
import { GU, RADIUS } from '../../style/constants.js';
import { ImageExists } from '../../hooks/useImageExists.js';

const AppBadge = /*#__PURE__*/React.memo(function AppBadge({
  appAddress,
  badgeOnly,
  compact,
  iconSrc,
  identifier,
  label,
  labelStyle,
  networkType,
  popoverAction,
  popoverTitle,
  ...props
}) {
  const badgeRef = useRef(null);
  const [opened, setOpened] = useState(false);
  const handleClose = useCallback(() => setOpened(false), []);
  const handleOpen = useCallback(() => setOpened(true), []);
  const isValidAddress = isAddress(appAddress);

  if (!badgeOnly && !isValidAddress) {
    warn(`AppBadge: provided invalid app address (${appAddress})`);
  }

  popoverTitle = popoverTitle || /*#__PURE__*/React.createElement(_StyledDiv, null, /*#__PURE__*/React.createElement(_StyledSpan, null, label), identifier && /*#__PURE__*/React.createElement(_StyledTag, {
    mode: "identifier",
    $_css: 1 * GU
  }, identifier));
  return /*#__PURE__*/React.createElement(BadgeBase, {
    badgeRef: badgeRef,
    compact: compact,
    disabled: badgeOnly,
    icon: /*#__PURE__*/React.createElement(ImageExists, {
      src: iconSrc
    }, ({
      displayFallback,
      exists
    }) => /*#__PURE__*/React.createElement(Icon, {
      compact: compact,
      src: exists ? iconSrc : iconDefaultSvg
    })),
    label: label,
    labelStyle: labelStyle,
    onClick: isValidAddress ? handleOpen : undefined,
    title: appAddress
  }, popoverDisabled => !popoverDisabled && appAddress && /*#__PURE__*/React.createElement(AppBadgePopover, {
    appAddress: appAddress,
    iconFallbackSrc: iconDefaultSvg,
    iconSrc: iconSrc,
    networkType: networkType,
    onClose: handleClose,
    opener: badgeRef.current,
    popoverAction: popoverAction,
    title: popoverTitle,
    visible: opened
  }));
});
AppBadge.propTypes = {
  appAddress: PropTypes.string,
  badgeOnly: PropTypes.bool,
  compact: PropTypes.bool,
  iconSrc: PropTypes.string,
  identifier: PropTypes.string,
  label: PropTypes.string.isRequired,
  labelStyle: PropTypes.string,
  networkType: PropTypes.string,
  popoverAction: BadgePopoverActionType,
  popoverTitle: PropTypes.node
};

const Icon = ({
  compact,
  src,
  ...props
}) => {
  const size = (compact ? 2.25 : 3) * GU;
  return /*#__PURE__*/React.createElement(_StyledSpan2, _extends({}, props, {
    $_css2: size,
    $_css3: size,
    $_css4: 1 * GU,
    $_css5: compact ? `${RADIUS}px` : 0,
    $_css6: src
  }));
};

Icon.propTypes = {
  compact: PropTypes.bool,
  src: PropTypes.string.isRequired
};

var _StyledDiv = _styled("div").withConfig({
  displayName: "AppBadge___StyledDiv",
  componentId: "sc-5gkmrm-0"
})(["display:grid;align-items:center;grid-template-columns:auto 1fr;"]);

var _StyledSpan = _styled("span").withConfig({
  displayName: "AppBadge___StyledSpan",
  componentId: "sc-5gkmrm-1"
})(["display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"]);

var _StyledTag = _styled(Tag).withConfig({
  displayName: "AppBadge___StyledTag",
  componentId: "sc-5gkmrm-2"
})(["margin-left:", "px;"], p => p.$_css);

var _StyledSpan2 = _styled("span").withConfig({
  displayName: "AppBadge___StyledSpan2",
  componentId: "sc-5gkmrm-3"
})(["flex-shrink:0;width:", "px;height:", "px;margin-right:", "px;border-radius:", ";background-size:contain;background-position:50% 50%;background-repeat:no-repeat;background-image:url(", ");"], p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5, p => p.$_css6);

export { AppBadge as default };
//# sourceMappingURL=AppBadge.js.map
