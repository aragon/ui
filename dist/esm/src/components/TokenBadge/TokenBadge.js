import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React, { useRef, useState, useCallback } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import BadgeBase from '../BadgeBase/BadgeBase.js';
import TokenBadgePopover from './TokenBadgePopover.js';
import { isAddress, tokenIconUrl } from '../../utils/web3.js';
import { GU } from '../../style/constants.js';
import { warn } from '../../utils/environment.js';
import { ImageExists } from '../../hooks/useImageExists.js';

const TokenBadge = /*#__PURE__*/React.memo(function TokenBadge({
  address,
  badgeOnly,
  className,
  compact,
  name,
  networkType,
  style,
  symbol
}) {
  const badgeRef = useRef(null);
  const [opened, setOpened] = useState(false);
  const handleClose = useCallback(() => setOpened(false), []);
  const handleOpen = useCallback(() => setOpened(true), []);
  const isValidAddress = isAddress(address);
  const iconSrc = isValidAddress && networkType === 'main' ? tokenIconUrl(address) : null;
  const title = name && symbol ? `${name} (${symbol})` : symbol;

  if (!isValidAddress) {
    warn(`TokenBadge: provided invalid address (${address})`);
  }

  return /*#__PURE__*/React.createElement(BadgeBase, {
    badgeRef: badgeRef,
    className: className,
    compact: compact,
    disabled: badgeOnly,
    icon: /*#__PURE__*/React.createElement(ImageExists, {
      src: iconSrc
    }, ({
      exists
    }) => exists && /*#__PURE__*/React.createElement(Icon, {
      compact: compact,
      src: iconSrc
    })),
    label: /*#__PURE__*/React.createElement(_StyledSpan, {
      $_css: compact ? 0 : `${1 * GU}px`
    }, name && /*#__PURE__*/React.createElement(Name, null, name), /*#__PURE__*/React.createElement(Symbol, null, name ? `(${symbol})` : symbol)),
    onClick: isValidAddress ? handleOpen : undefined,
    style: style,
    title: `${title} − ${address || 'No address'}`
  }, popoverDisabled => !popoverDisabled && address && /*#__PURE__*/React.createElement(TokenBadgePopover, {
    address: address,
    iconSrc: iconSrc,
    networkType: networkType,
    onClose: handleClose,
    opener: badgeRef.current,
    title: title,
    visible: opened
  }));
});
TokenBadge.propTypes = {
  address: PropTypes.string,
  badgeOnly: PropTypes.bool,
  className: PropTypes.string,
  compact: PropTypes.bool,
  name: PropTypes.string,
  networkType: PropTypes.string,
  style: PropTypes.object,
  symbol: PropTypes.string.isRequired
};
TokenBadge.defaultProps = {
  address: '',
  name: '',
  networkType: 'main'
};

function Icon({
  compact,
  src,
  ...props
}) {
  const margin = 1 * GU;
  return /*#__PURE__*/React.createElement(_StyledSpan2, _extends({}, props, {
    $_css2: compact ? margin : 0,
    $_css3: compact ? 0 : margin,
    $_css4: src
  }));
}

Icon.propTypes = {
  compact: PropTypes.bool,
  src: PropTypes.string.isRequired
};
const Name = _styled.span.withConfig({
  displayName: "TokenBadge__Name",
  componentId: "sc-7bvdqo-0"
})(["flex-shrink:1;overflow:hidden;text-overflow:ellipsis;min-width:20%;margin-right:", "px;"], 0.5 * GU);
const Symbol = _styled.span.withConfig({
  displayName: "TokenBadge__Symbol",
  componentId: "sc-7bvdqo-1"
})(["flex-shrink:0;"]);

var _StyledSpan = _styled("span").withConfig({
  displayName: "TokenBadge___StyledSpan",
  componentId: "sc-7bvdqo-2"
})(["position:relative;top:1px;display:flex;flex-shrink:1;min-width:0;margin-left:", ";"], p => p.$_css);

var _StyledSpan2 = _styled("span").withConfig({
  displayName: "TokenBadge___StyledSpan2",
  componentId: "sc-7bvdqo-3"
})(["flex-shrink:0;display:block;width:18px;height:18px;margin:0 ", "px 0 ", "px;background-size:contain;background-position:50% 50%;background-repeat:no-repeat;background-image:url(", ");"], p => p.$_css2, p => p.$_css3, p => p.$_css4);

export { TokenBadge as default };
//# sourceMappingURL=TokenBadge.js.map
