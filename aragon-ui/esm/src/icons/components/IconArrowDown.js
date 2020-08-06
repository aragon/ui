import React$1 from 'react';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties$1 from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import useIconSize from '../icon-size.js';
import IconPropTypes$1 from '../IconPropTypes.js';

function IconArrowDown(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties$1(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return /*#__PURE__*/React$1.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React$1.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M11.434 5.566v12.869a.566.566 0 001.132 0V5.565a.566.566 0 10-1.132 0z"
  }), /*#__PURE__*/React$1.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M12 17.634L7.574 13.21a.565.565 0 10-.8.8l4.826 4.825a.566.566 0 00.8 0l4.826-4.826a.563.563 0 000-.8.566.566 0 00-.8 0L12 17.634z"
  }));
}

IconArrowDown.propTypes = IconPropTypes$1;

export default IconArrowDown;
//# sourceMappingURL=IconArrowDown.js.map
