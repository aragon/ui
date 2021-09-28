import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _defineProperty from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import React from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import _styled from 'styled-components';
import Blockies from '../../../node_modules/react-blockies/dist/main.js';
import { isAddress } from '../../utils/web3.js';
import { stylingProps } from '../../utils/components.js';

const PX_RATIO = typeof devicePixelRatio === 'undefined' ? 2 : devicePixelRatio;
const BLOCKIES_SQUARES = 8; // commonly used to represent Ethereum addresses

const BASE_SCALE = 3;

class EthIdenticon extends React.Component {
  render() {
    const {
      address,
      scale,
      radius,
      soften
    } = this.props;
    const blockiesScale = scale * BASE_SCALE;
    return isAddress(address) ? /*#__PURE__*/React.createElement(Main, _extends({
      size: BLOCKIES_SQUARES * blockiesScale,
      radius: radius
    }, stylingProps(this)), /*#__PURE__*/React.createElement(BlockiesScaling, {
      size: BLOCKIES_SQUARES * blockiesScale * PX_RATIO
    }, /*#__PURE__*/React.createElement(BlockiesOpacity, {
      soften: soften
    }, /*#__PURE__*/React.createElement(Blockies, {
      seed: address.toLowerCase(),
      size: BLOCKIES_SQUARES,
      scale: blockiesScale * PX_RATIO
    })))) : null;
  }

}
/*
 * `vertical-align` prevents the inline parent to have an incorrect height.
 *
 * See
 * - https://bugzilla.mozilla.org/show_bug.cgi?id=491549#c9
 * - https://bugzilla.mozilla.org/show_bug.cgi?id=737757#c1
 */


_defineProperty(EthIdenticon, "propTypes", {
  address: PropTypes.string.isRequired,
  scale: PropTypes.number,
  radius: PropTypes.number,
  soften: PropTypes.number
});

_defineProperty(EthIdenticon, "defaultProps", {
  scale: 1,
  radius: 0,
  soften: 0.3
});

const Main = _styled.div.withConfig({
  displayName: "EthIdenticon__Main",
  componentId: "sc-1h8gagr-0"
})(["display:inline-flex;vertical-align:middle;overflow:hidden;width:", "px;height:", "px;border-radius:", "px;mask-image:linear-gradient(red,red);"], p => p.size, p => p.size, p => p.radius);
const BlockiesOpacity = _styled.div.withConfig({
  displayName: "EthIdenticon__BlockiesOpacity",
  componentId: "sc-1h8gagr-1"
})(["opacity:", ";"], p => 1 - p.soften);
const BlockiesScaling = _styled.div.withConfig({
  displayName: "EthIdenticon__BlockiesScaling",
  componentId: "sc-1h8gagr-2"
})(["display:flex;width:", "px;height:", "px;background:#fff;transform:scale(", ",", ");transform-origin:0 0;"], p => p.size, p => p.size, 1 / PX_RATIO, 1 / PX_RATIO);

export { EthIdenticon as default };
//# sourceMappingURL=EthIdenticon.js.map
