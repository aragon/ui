import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import React from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconPower(_ref) {
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
    d: "M17.658 7.155a.712.712 0 00-1.007 1.007 6.533 6.533 0 011.925 4.65 6.533 6.533 0 01-1.927 4.65A6.555 6.555 0 0112 19.384a6.557 6.557 0 01-4.65-1.924 6.584 6.584 0 010-9.298.712.712 0 10-1.008-1.007A7.948 7.948 0 004 12.811a7.95 7.95 0 002.342 5.656A7.948 7.948 0 0012 20.81a7.948 7.948 0 005.656-2.342A7.947 7.947 0 0020 12.812a7.948 7.948 0 00-2.342-5.657z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M12.004 3.189a.712.712 0 00-.712.712v8.098a.712.712 0 001.424 0V3.9a.712.712 0 00-.712-.712z"
  }));
}

IconPower.propTypes = IconPropTypes;

export default IconPower;
//# sourceMappingURL=IconPower.js.map
