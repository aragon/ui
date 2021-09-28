import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import React from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconMenu({
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
    d: "M19.354 11.301H4.646c-.357 0-.646.313-.646.699 0 .386.29.699.646.699h14.708c.357 0 .646-.313.646-.699 0-.386-.29-.699-.646-.699zm0-5.301H4.646C4.29 6 4 6.313 4 6.699c0 .386.29.699.646.699h14.708c.357 0 .646-.313.646-.7 0-.385-.29-.698-.646-.698zm0 10.602H4.646c-.357 0-.646.313-.646.7 0 .385.29.698.646.698h14.708c.357 0 .646-.313.646-.699 0-.386-.29-.699-.646-.699z"
  }));
}

IconMenu.propTypes = IconPropTypes;

export { IconMenu as default };
//# sourceMappingURL=IconMenu.js.map
