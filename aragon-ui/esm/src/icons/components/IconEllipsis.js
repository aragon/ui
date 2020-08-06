import React$1 from 'react';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties$1 from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import useIconSize from '../icon-size.js';
import IconPropTypes$1 from '../IconPropTypes.js';

function IconEllipsis(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties$1(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return /*#__PURE__*/React$1.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React$1.createElement("circle", {
    cx: 6,
    cy: 12,
    r: 1,
    fill: "currentColor"
  }), /*#__PURE__*/React$1.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 1,
    fill: "currentColor"
  }), /*#__PURE__*/React$1.createElement("circle", {
    cx: 18,
    cy: 12,
    r: 1,
    fill: "currentColor"
  }));
}

IconEllipsis.propTypes = IconPropTypes$1;

export default IconEllipsis;
//# sourceMappingURL=IconEllipsis.js.map
