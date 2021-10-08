import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import React from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconArrowUp(_ref) {
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
    d: "M12.566 18.434V5.566a.566.566 0 00-1.132 0v12.869a.566.566 0 101.132 0z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M12 6.366l4.426 4.426a.566.566 0 00.8-.8L12.4 5.166a.566.566 0 00-.8 0L6.774 9.992a.564.564 0 000 .8c.221.22.58.22.8 0L12 6.366z"
  }));
}

IconArrowUp.propTypes = IconPropTypes;

export default IconArrowUp;
//# sourceMappingURL=IconArrowUp.js.map
