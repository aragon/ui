import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import React from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconCheck({
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
    strokeWidth: 0.5,
    d: "M18.834 7.166a.565.565 0 00-.8 0l-8.447 8.466-3.622-3.63a.565.565 0 00-.8 0 .568.568 0 000 .802l4.022 4.03a.563.563 0 00.8 0l8.847-8.866a.568.568 0 000-.802z"
  }));
}

IconCheck.propTypes = IconPropTypes;

export { IconCheck as default };
//# sourceMappingURL=IconCheck.js.map
