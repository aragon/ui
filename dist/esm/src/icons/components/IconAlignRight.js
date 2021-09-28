import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import React from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconAlignRight({
  size,
  ...props
}) {
  const sizeValue = useIconSize(size);
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M20.068 9.534H7.698a.699.699 0 000 1.398h12.37a.699.699 0 000-1.398zM19.952 6H4.048a.699.699 0 000 1.398h15.904a.699.699 0 000-1.398zm0 7.068H4.048a.699.699 0 000 1.398h15.904a.699.699 0 000-1.398zm.116 3.534H7.698a.699.699 0 000 1.398h12.37a.699.699 0 000-1.398z"
  }));
}

IconAlignRight.propTypes = IconPropTypes;

export { IconAlignRight as default };
//# sourceMappingURL=IconAlignRight.js.map
