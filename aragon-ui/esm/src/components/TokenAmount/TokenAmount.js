import React$1 from 'react';
import _styled$1 from 'styled-components';
import '../../utils/environment.js';
import { isAddress } from '../../utils/web3.js';
import { GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';
import { useTheme } from '../../theme/Theme2.js';
import objectWithoutProperties$1 from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import { useImageExists as useImageExists$1 } from '../../hooks/useImageExists.js';
import ExtendedPropTypes from '../../proptypes.js';
import { UseTokenProvider, useToken } from '../../../node_modules/use-token/dist/index.js';
import r from '../../../node_modules/token-amount/dist/index.js';

var _StyledDiv = _styled$1("div").withConfig({
  displayName: "TokenAmount___StyledDiv",
  componentId: "sc-1ui2my8-0"
})(["display:flex;align-items:center;"]);

var _StyledSpan = _styled$1("span").withConfig({
  displayName: "TokenAmount___StyledSpan",
  componentId: "sc-1ui2my8-1"
})(["padding-right:", "px;", ";line-height:1;", ""], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

var TokenAmount = /*#__PURE__*/React$1.memo(function TokenAmount(_ref) {
  var address = _ref.address,
      amount = _ref.amount,
      chainId = _ref.chainId,
      decimals = _ref.decimals,
      digits = _ref.digits,
      iconUrl = _ref.iconUrl,
      size = _ref.size,
      symbol = _ref.symbol,
      props = objectWithoutProperties$1(_ref, ["address", "amount", "chainId", "decimals", "digits", "iconUrl", "size", "symbol"]);

  var isValidAddress = isAddress(address);

  if (!isValidAddress && !symbol) {
    throw new Error('TokenAmount: you need to provide a valid address or a symbol');
  }

  return /*#__PURE__*/React$1.createElement(UseTokenProvider, null, /*#__PURE__*/React$1.createElement(_StyledDiv, props, /*#__PURE__*/React$1.createElement(Icon, {
    address: address,
    chainId: chainId,
    iconUrl: iconUrl,
    size: size
  }), amount && /*#__PURE__*/React$1.createElement(_StyledSpan, {
    _css: size === 'large' ? 0.5 * GU : 0.25 * GU,
    _css2: textStyle(size === 'large' ? 'title2' : 'body2'),
    _css3: size === 'large' ? "transform: translateY(2px);" : ''
  }, r.format(amount, decimals, {
    digits: digits
  })), /*#__PURE__*/React$1.createElement(_Symbol, {
    address: address,
    size: size,
    symbol: symbol
  })));
});

var _StyledImg = _styled$1("img").withConfig({
  displayName: "TokenAmount___StyledImg",
  componentId: "sc-1ui2my8-2"
})(["padding-right:", "px;"], function (p) {
  return p._css4;
});

var Icon = function Icon(_ref2) {
  var address = _ref2.address,
      chainId = _ref2.chainId,
      iconUrl = _ref2.iconUrl,
      size = _ref2.size;
  var token = useToken(chainId === 1 ? address : '');

  var _useImageExists = useImageExists$1(iconUrl || token.iconUrl),
      exists = _useImageExists.exists;

  return exists && /*#__PURE__*/React$1.createElement(_StyledImg, {
    alt: "",
    height: 3 * GU,
    src: iconUrl || token.iconUrl,
    _css4: size === 'large' ? 1 * GU : 0.5 * GU
  });
};

var _StyledSpan2 = _styled$1("span").withConfig({
  displayName: "TokenAmount___StyledSpan2",
  componentId: "sc-1ui2my8-3"
})(["color:", ";", ";line-height:1;", " ", ""], function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
});

var _Symbol = function _Symbol2(_ref3) {
  var address = _ref3.address,
      size = _ref3.size,
      symbol = _ref3.symbol;
  var token = useToken(address);
  var theme = useTheme();
  return /*#__PURE__*/React$1.createElement(_StyledSpan2, {
    _css5: theme.surfaceContentSecondary,
    _css6: textStyle('body2'),
    _css7: size === 'large' ? "align-self: flex-end;" : '',
    _css8: size === 'large' ? "transform: translateY(-1px);" : ''
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
