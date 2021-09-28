import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import React from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconArrowLeft({
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
    d: "M18.434 11.434H5.566a.566.566 0 000 1.132h12.869a.565.565 0 100-1.132z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M6.366 12l4.426-4.426a.565.565 0 10-.8-.8L5.166 11.6a.566.566 0 000 .8l4.826 4.826a.564.564 0 00.8 0 .565.565 0 000-.8L6.366 12z"
  }));
}

IconArrowLeft.propTypes = IconPropTypes;

export { IconArrowLeft as default };
//# sourceMappingURL=IconArrowLeft.js.map
