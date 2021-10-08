import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import React from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconFlag(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return /*#__PURE__*/React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M18.572 4.88a.67.67 0 00-.755.157c-.006.006-.707.613-2.663.613-1.05 0-1.947-.376-2.897-.773C11.227 4.446 10.162 4 8.847 4c-2.578 0-3.543.931-3.644 1.037A.743.743 0 005 5.55v9.9c0 .301.164.588.433.694a.645.645 0 00.743-.173c.082-.068.808-.621 2.67-.621 1.05 0 1.947.376 2.897.773 1.03.431 2.095.877 3.41.877 2.578 0 3.543-.931 3.644-1.037A.742.742 0 0019 15.45v-9.9a.726.726 0 00-.428-.67zm-.958 10.186c-.337.185-1.091.484-2.46.484-1.05 0-1.947-.376-2.897-.773-1.03-.431-2.095-.877-3.41-.877-1.09 0-1.891.166-2.461.366V5.934c.337-.185 1.091-.484 2.46-.484 1.05 0 1.947.376 2.897.773 1.03.431 2.095.877 3.41.877 1.09 0 1.891-.166 2.461-.366v8.332z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M5.693 14.095a.693.693 0 00-.693.693v5.519a.693.693 0 101.386 0v-5.519a.693.693 0 00-.693-.693z"
  }));
}

IconFlag.propTypes = IconPropTypes;

export default IconFlag;
//# sourceMappingURL=IconFlag.js.map
