import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import slicedToArray from '../../../node_modules/@babel/runtime/helpers/slicedToArray.js';
import _styled from 'styled-components';
import React, { useRef, useState, useCallback } from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import BadgeBase from '../BadgeBase/BadgeBase.js';
import TokenBadgePopover from './TokenBadgePopover.js';
import { isAddress, tokenIconUrl } from '../../utils/web3.js';
import { warn } from '../../utils/environment.js';
import { ImageExists } from '../../hooks/useImageExists.js';
import { GU } from '../../style/constants.js';

var _StyledSpan = _styled("span").withConfig({
  displayName: "TokenBadge___StyledSpan",
  componentId: "sc-7bvdqo-0"
})(["position:relative;top:1px;display:flex;flex-shrink:1;min-width:0;margin-left:", ";"], function (p) {
  return p._css;
});

var TokenBadge = /*#__PURE__*/React.memo(function TokenBadge(_ref) {
  var address = _ref.address,
      badgeOnly = _ref.badgeOnly,
      className = _ref.className,
      compact = _ref.compact,
      name = _ref.name,
      networkType = _ref.networkType,
      style = _ref.style,
      symbol = _ref.symbol;
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
  var isValidAddress = isAddress(address);
  var iconSrc = isValidAddress && networkType === 'main' ? tokenIconUrl(address) : null;
  var title = name && symbol ? "".concat(name, " (").concat(symbol, ")") : symbol;

  if (!isValidAddress) {
    warn("TokenBadge: provided invalid address (".concat(address, ")"));
  }

  return /*#__PURE__*/React.createElement(BadgeBase, {
    badgeRef: badgeRef,
    className: className,
    compact: compact,
    disabled: badgeOnly,
    icon: /*#__PURE__*/React.createElement(ImageExists, {
      src: iconSrc
    }, function (_ref2) {
      var exists = _ref2.exists;
      return exists && /*#__PURE__*/React.createElement(Icon, {
        compact: compact,
        src: iconSrc
      });
    }),
    label: /*#__PURE__*/React.createElement(_StyledSpan, {
      _css: compact ? 0 : "".concat(1 * GU, "px")
    }, name && /*#__PURE__*/React.createElement(Name, null, name), /*#__PURE__*/React.createElement(_Symbol, null, name ? "(".concat(symbol, ")") : symbol)),
    onClick: isValidAddress ? handleOpen : undefined,
    style: style,
    title: "".concat(title, " \u2212 ").concat(address || 'No address')
  }, function (popoverDisabled) {
    return !popoverDisabled && address && /*#__PURE__*/React.createElement(TokenBadgePopover, {
      address: address,
      iconSrc: iconSrc,
      networkType: networkType,
      onClose: handleClose,
      opener: badgeRef.current,
      title: title,
      visible: opened
    });
  });
});
TokenBadge.propTypes = {
  address: propTypes.string,
  badgeOnly: propTypes.bool,
  className: propTypes.string,
  compact: propTypes.bool,
  name: propTypes.string,
  networkType: propTypes.string,
  style: propTypes.object,
  symbol: propTypes.string.isRequired
};
TokenBadge.defaultProps = {
  address: '',
  name: '',
  networkType: 'main'
};

var _StyledSpan2 = _styled("span").withConfig({
  displayName: "TokenBadge___StyledSpan2",
  componentId: "sc-7bvdqo-1"
})(["flex-shrink:0;display:block;width:18px;height:18px;margin:0 ", "px 0 ", "px;background-size:contain;background-position:50% 50%;background-repeat:no-repeat;background-image:url(", ");"], function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
});

function Icon(_ref3) {
  var compact = _ref3.compact,
      src = _ref3.src,
      props = objectWithoutProperties(_ref3, ["compact", "src"]);

  var margin = 1 * GU;
  return /*#__PURE__*/React.createElement(_StyledSpan2, _extends_1({}, props, {
    _css2: compact ? margin : 0,
    _css3: compact ? 0 : margin,
    _css4: src
  }));
}

Icon.propTypes = {
  compact: propTypes.bool,
  src: propTypes.string.isRequired
};
var Name = _styled.span.withConfig({
  displayName: "TokenBadge__Name",
  componentId: "sc-7bvdqo-2"
})(["flex-shrink:1;overflow:hidden;text-overflow:ellipsis;min-width:20%;margin-right:", "px;"], 0.5 * GU);

var _Symbol = _styled.span.withConfig({
  displayName: "TokenBadge___Symbol",
  componentId: "sc-7bvdqo-3"
})(["flex-shrink:0;"]);

export default TokenBadge;
//# sourceMappingURL=TokenBadge.js.map
