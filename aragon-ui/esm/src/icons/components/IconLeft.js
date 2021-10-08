import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import React from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconLeft(_ref) {
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
    d: "M15.777 18.392a.737.737 0 000-1.054L9.834 11.5l5.943-5.838a.737.737 0 000-1.055.77.77 0 00-1.074 0l-6.48 6.365a.737.737 0 000 1.055l6.48 6.365a.77.77 0 001.074 0z"
  }));
}

IconLeft.propTypes = IconPropTypes;

export default IconLeft;
//# sourceMappingURL=IconLeft.js.map
