import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import _styled from 'styled-components';
import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import TextCopy from '../TextCopy/TextCopy.js';
import EthIdenticon from '../EthIdenticon/EthIdenticon.js';
import { GU } from '../../style/constants.js';

var HEIGHT = 5 * GU;
var IDENTICON_SIZE = 6 * GU;

var _StyledEthIdenticon = _styled(EthIdenticon).withConfig({
  displayName: "AddressField___StyledEthIdenticon",
  componentId: "m75adw-0"
})(["transform:scale(", ");transform-origin:50% 50%;"], function (p) {
  return p._css;
});

var AddressField = /*#__PURE__*/React.forwardRef(function AddressField(_ref, ref) {
  var address = _ref.address,
      autofocus = _ref.autofocus,
      icon = _ref.icon,
      onCopy = _ref.onCopy;
      objectWithoutProperties(_ref, ["address", "autofocus", "icon", "onCopy"]);

  return /*#__PURE__*/React.createElement(TextCopy, {
    ref: ref,
    adornment: icon || /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_StyledEthIdenticon, {
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
