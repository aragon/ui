import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import React from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconDown({
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
    d: "M18.785 8.782a.725.725 0 00-1.038 0L12 14.632l-5.746-5.85a.725.725 0 00-1.039 0 .757.757 0 000 1.057l6.266 6.38a.726.726 0 001.038 0l6.266-6.38a.757.757 0 000-1.057z"
  }));
}

IconDown.propTypes = IconPropTypes;

export { IconDown as default };
//# sourceMappingURL=IconDown.js.map
