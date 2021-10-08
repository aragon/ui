import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import React from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconAlignLeft(_ref) {
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
    d: "M16.418 9.534H4.048a.699.699 0 000 1.398h12.37a.699.699 0 100-1.398zM19.952 6H4.048a.699.699 0 000 1.398h15.904a.699.699 0 000-1.398zm0 7.068H4.048a.699.699 0 000 1.398h15.904a.699.699 0 000-1.398zm-3.534 3.534H4.048a.699.699 0 000 1.398h12.37a.699.699 0 100-1.398z"
  }));
}

IconAlignLeft.propTypes = IconPropTypes;

export default IconAlignLeft;
//# sourceMappingURL=IconAlignLeft.js.map
