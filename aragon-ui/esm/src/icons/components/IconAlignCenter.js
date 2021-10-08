import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import React from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconAlignCenter(_ref) {
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
    d: "M18.068 9.534H5.698a.699.699 0 000 1.398h12.37a.699.699 0 000-1.398zM19.602 6H3.7a.699.699 0 000 1.398h15.903a.699.699 0 100-1.398zm0 7.068H3.7a.699.699 0 000 1.398h15.903a.699.699 0 100-1.398zm-1.534 3.534H5.698a.699.699 0 000 1.398h12.37a.699.699 0 000-1.398z"
  }));
}

IconAlignCenter.propTypes = IconPropTypes;

export default IconAlignCenter;
//# sourceMappingURL=IconAlignCenter.js.map
