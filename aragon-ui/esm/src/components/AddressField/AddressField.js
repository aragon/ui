import React$1 from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import _styled$1 from 'styled-components';
import '../../utils/environment.js';
import { GU } from '../../style/constants.js';
import objectWithoutProperties$1 from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import TextCopy$1 from '../TextCopy/TextCopy.js';
import EthIdenticon$1 from '../EthIdenticon/EthIdenticon.js';

var HEIGHT = 5 * GU;
var IDENTICON_SIZE = 6 * GU;

var _StyledEthIdenticon = _styled$1(EthIdenticon$1).withConfig({
  displayName: "AddressField___StyledEthIdenticon",
  componentId: "m75adw-0"
})(["transform:scale(", ");transform-origin:50% 50%;"], function (p) {
  return p._css;
});

var AddressField = /*#__PURE__*/React$1.forwardRef(function AddressField(_ref, ref) {
  var address = _ref.address,
      autofocus = _ref.autofocus,
      icon = _ref.icon,
      onCopy = _ref.onCopy,
      props = objectWithoutProperties$1(_ref, ["address", "autofocus", "icon", "onCopy"]);

  return /*#__PURE__*/React$1.createElement(TextCopy$1, {
    ref: ref,
    adornment: icon || /*#__PURE__*/React$1.createElement("div", null, /*#__PURE__*/React$1.createElement(_StyledEthIdenticon, {
      address: address,
      onCopy: onCopy,
      scale: 2,
      _css: (HEIGHT - 2) / IDENTICON_SIZE
    })),
    autofocus: autofocus,
    value: address
  });
});
AddressField.propTypes = {
  address: propTypes.string.isRequired,
  autofocus: propTypes.bool,
  icon: propTypes.node,
  onCopy: propTypes.func
};
AddressField.defaultProps = {
  autofocus: true
};

export default AddressField;
//# sourceMappingURL=AddressField.js.map
