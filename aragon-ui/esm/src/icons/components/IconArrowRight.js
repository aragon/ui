import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import React from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconArrowRight(_ref) {
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
    d: "M5.566 12.566h12.869a.566.566 0 000-1.132H5.565a.566.566 0 100 1.132z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M17.634 12l-4.426 4.426a.566.566 0 00.8.8l4.826-4.826a.566.566 0 000-.8l-4.826-4.826a.564.564 0 00-.8 0 .566.566 0 000 .8L17.634 12z"
  }));
}

IconArrowRight.propTypes = IconPropTypes;

export default IconArrowRight;
//# sourceMappingURL=IconArrowRight.js.map
