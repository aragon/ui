import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import React from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconAlignJustify({
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
    d: "M20.273 9.434H3.727a.727.727 0 000 1.455h16.546a.727.727 0 000-1.455zm0-3.676H3.727a.727.727 0 000 1.454h16.546a.727.727 0 100-1.454zm0 7.353H3.727a.727.727 0 100 1.454h16.546a.727.727 0 100-1.454zm0 3.677H3.727a.727.727 0 100 1.454h16.546a.727.727 0 100-1.454z"
  }));
}

IconAlignJustify.propTypes = IconPropTypes;

export { IconAlignJustify as default };
//# sourceMappingURL=IconAlignJustify.js.map
