import React$1 from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import defineProperty$1 from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import _styled$1 from 'styled-components';
import classCallCheck$1 from '../../../node_modules/@babel/runtime/helpers/classCallCheck.js';
import createClass$1 from '../../../node_modules/@babel/runtime/helpers/createClass.js';
import inherits$1 from '../../../node_modules/@babel/runtime/helpers/inherits.js';
import possibleConstructorReturn$1 from '../../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js';
import getPrototypeOf$1 from '../../../node_modules/@babel/runtime/helpers/getPrototypeOf.js';
import { stylingProps } from '../../utils/components.js';
import { isAddress } from '../../utils/web3.js';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import Blockies from '../../../node_modules/react-blockies/dist/main.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn$1(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var PX_RATIO = typeof devicePixelRatio === 'undefined' ? 2 : devicePixelRatio;
var BLOCKIES_SQUARES = 8; // commonly used to represent Ethereum addresses

var BASE_SCALE = 3;

var EthIdenticon = /*#__PURE__*/function (_React$Component) {
  inherits$1(EthIdenticon, _React$Component);

  var _super = _createSuper(EthIdenticon);

  function EthIdenticon() {
    classCallCheck$1(this, EthIdenticon);

    return _super.apply(this, arguments);
  }

  createClass$1(EthIdenticon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          address = _this$props.address,
          scale = _this$props.scale,
          radius = _this$props.radius,
          soften = _this$props.soften;
      var blockiesScale = scale * BASE_SCALE;
      return isAddress(address) ? /*#__PURE__*/React$1.createElement(Main, _extends_1({
        size: BLOCKIES_SQUARES * blockiesScale,
        radius: radius
      }, stylingProps(this)), /*#__PURE__*/React$1.createElement(BlockiesScaling, {
        size: BLOCKIES_SQUARES * blockiesScale * PX_RATIO
      }, /*#__PURE__*/React$1.createElement(BlockiesOpacity, {
        soften: soften
      }, /*#__PURE__*/React$1.createElement(Blockies, {
        seed: address.toLowerCase(),
        size: BLOCKIES_SQUARES,
        scale: blockiesScale * PX_RATIO
      })))) : null;
    }
  }]);

  return EthIdenticon;
}(React$1.Component);
/*
 * `vertical-align` prevents the inline parent to have an incorrect height.
 *
 * See
 * - https://bugzilla.mozilla.org/show_bug.cgi?id=491549#c9
 * - https://bugzilla.mozilla.org/show_bug.cgi?id=737757#c1
 */


defineProperty$1(EthIdenticon, "propTypes", {
  address: propTypes.string.isRequired,
  scale: propTypes.number,
  radius: propTypes.number,
  soften: propTypes.number
});

defineProperty$1(EthIdenticon, "defaultProps", {
  scale: 1,
  radius: 0,
  soften: 0.3
});

var Main = _styled$1.div.withConfig({
  displayName: "EthIdenticon__Main",
  componentId: "sc-1h8gagr-0"
})(["display:inline-flex;vertical-align:middle;overflow:hidden;width:", "px;height:", "px;border-radius:", "px;mask-image:linear-gradient(red,red);"], function (p) {
  return p.size;
}, function (p) {
  return p.size;
}, function (p) {
  return p.radius;
});
var BlockiesOpacity = _styled$1.div.withConfig({
  displayName: "EthIdenticon__BlockiesOpacity",
  componentId: "sc-1h8gagr-1"
})(["opacity:", ";"], function (p) {
  return 1 - p.soften;
});
var BlockiesScaling = _styled$1.div.withConfig({
  displayName: "EthIdenticon__BlockiesScaling",
  componentId: "sc-1h8gagr-2"
})(["display:flex;width:", "px;height:", "px;background:#fff;transform:scale(", ",", ");transform-origin:0 0;"], function (p) {
  return p.size;
}, function (p) {
  return p.size;
}, 1 / PX_RATIO, 1 / PX_RATIO);

export default EthIdenticon;
//# sourceMappingURL=EthIdenticon.js.map
