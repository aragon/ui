import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import React from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconRotateLeft(_ref) {
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
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M9.425 10.142H6.131V6.847a.565.565 0 00-1.131 0v3.86c0 .313.253.566.565.566h3.86a.565.565 0 100-1.131z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M18.636 9.888a6.314 6.314 0 00-3.25-3.62 6.314 6.314 0 00-4.857-.262 6.395 6.395 0 00-2.372 1.49l-2.979 2.8a.566.566 0 00.775.823l2.985-2.805a5.257 5.257 0 011.967-1.242 5.23 5.23 0 016.664 3.192 5.23 5.23 0 01-3.192 6.664 5.23 5.23 0 01-6.663-3.192.565.565 0 00-1.067.376 6.314 6.314 0 003.249 3.62 6.332 6.332 0 004.857.262 6.314 6.314 0 003.62-3.249 6.314 6.314 0 00.262-4.857z"
  }));
}

IconRotateLeft.propTypes = IconPropTypes;

export default IconRotateLeft;
//# sourceMappingURL=IconRotateLeft.js.map
