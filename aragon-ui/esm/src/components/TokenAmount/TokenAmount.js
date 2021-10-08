import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import _styled from 'styled-components';
import React from 'react';
import ExtendedPropTypes from '../../proptypes.js';
import { UseTokenProvider, useToken } from '../../../node_modules/use-token/dist/index.js';
import r from '../../../node_modules/token-amount/dist/index.js';
import { useTheme } from '../../theme/Theme2.js';
import { useImageExists } from '../../hooks/useImageExists.js';
import { isAddress } from '../../utils/web3.js';
import { GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';

var _StyledDiv = _styled("div").withConfig({
  displayName: "TokenAmount___StyledDiv",
  componentId: "sc-1ui2my8-0"
})(["display:flex;align-items:center;"]);

var _StyledSpan = _styled("span").withConfig({
  displayName: "TokenAmount___StyledSpan",
  componentId: "sc-1ui2my8-1"
})(["margin-right:", "px;", ";line-height:1;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var TokenAmount = /*#__PURE__*/React.memo(function TokenAmount(_ref) {
  var address = _ref.address,
      amount = _ref.amount,
      chainId = _ref.chainId,
      decimals = _ref.decimals,
      digits = _ref.digits,
      iconUrl = _ref.iconUrl,
      size = _ref.size,
      symbol = _ref.symbol,
      props = objectWithoutProperties(_ref, ["address", "amount", "chainId", "decimals", "digits", "iconUrl", "size", "symbol"]);

  var isValidAddress = isAddress(address);

  if (!isValidAddress && !symbol) {
    throw new Error('TokenAmount: you need to provide a valid address or a symbol');
  }

  return /*#__PURE__*/React.createElement(UseTokenProvider, null, /*#__PURE__*/React.createElement(_StyledDiv, props, /*#__PURE__*/React.createElement(Icon, {
    address: address,
    chainId: chainId,
    iconUrl: iconUrl,
    size: size
  }), amount && /*#__PURE__*/React.createElement(_StyledSpan, {
    _css: size === 'large' ? 0.5 * GU : 0.25 * GU,
    _css2: textStyle(size === 'large' ? 'title2' : 'body2')
  }, r.format(amount, decimals, {
    digits: digits
  })), /*#__PURE__*/React.createElement(_Symbol, {
    address: address,
    size: size,
    symbol: symbol
  })));
});

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "TokenAmount___StyledDiv2",
  componentId: "sc-1ui2my8-2"
})(["display:flex;width:", "px;height:", "px;margin-right:", "px;"], function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

var _StyledDiv3 = _styled("div").withConfig({
  displayName: "TokenAmount___StyledDiv3",
  componentId: "sc-1ui2my8-3"
})(["flex:1;border-radius:100%;border:2px solid ", ";"], function (p) {
  return p._css6;
});

var Icon = function Icon(_ref2) {
  var address = _ref2.address,
      chainId = _ref2.chainId,
      iconUrl = _ref2.iconUrl,
      size = _ref2.size;
  var theme = useTheme();
  var token = useToken(chainId === 1 ? address : '');

  var _useImageExists = useImageExists(iconUrl || token.iconUrl),
      exists = _useImageExists.exists;

  return /*#__PURE__*/React.createElement(_StyledDiv2, {
    _css3: 3 * GU,
    _css4: 3 * GU,
    _css5: size === 'large' ? 1 * GU : 0.75 * GU
  }, exists ? /*#__PURE__*/React.createElement("img", {
    alt: "",
    width: "100%",
    src: iconUrl || token.iconUrl
  }) : /*#__PURE__*/React.createElement(_StyledDiv3, {
    _css6: theme.border
  }));
};

var _StyledSpan2 = _styled("span").withConfig({
  displayName: "TokenAmount___StyledSpan2",
  componentId: "sc-1ui2my8-4"
})(["color:", ";", ";line-height:1;", " ", ""], function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
}, function (p) {
  return p._css10;
});

var _Symbol = function _Symbol2(_ref3) {
  var address = _ref3.address,
      size = _ref3.size,
      symbol = _ref3.symbol;
  var token = useToken(address);
  var theme = useTheme();
  return /*#__PURE__*/React.createElement(_StyledSpan2, {
    _css7: theme.surfaceContentSecondary,
    _css8: textStyle('body2'),
    _css9: size === 'large' ? "align-self: flex-end;" : '',
    _css10: size === 'large' ? "transform: translateY(-1px);" : ''
  }, symbol || token.symbol);
};

Icon.propTypes = {
  address: ExtendedPropTypes.string,
  chainId: ExtendedPropTypes.number,
  iconUrl: ExtendedPropTypes.string,
  size: ExtendedPropTypes.oneOf(['large', 'medium'])
};
_Symbol.propTypes = {
  address: ExtendedPropTypes.string,
  size: ExtendedPropTypes.oneOf(['large', 'medium']),
  symbol: ExtendedPropTypes.string
};
TokenAmount.propTypes = {
  address: ExtendedPropTypes.string,
  amount: ExtendedPropTypes._bigIntish.isRequired,
  chainId: ExtendedPropTypes.number,
  decimals: ExtendedPropTypes.number.isRequired,
  digits: ExtendedPropTypes.number,
  iconUrl: ExtendedPropTypes.string,
  size: ExtendedPropTypes.oneOf(['large', 'medium']),
  symbol: ExtendedPropTypes.string
};
TokenAmount.defaultProps = {
  chainId: 1,
  digits: 2,
  size: 'medium'
};

export default TokenAmount;
//# sourceMappingURL=TokenAmount.js.map
