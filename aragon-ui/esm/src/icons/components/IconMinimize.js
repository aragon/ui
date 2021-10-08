import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import React from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconMinimize(_ref) {
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
    d: "M10.57 12.864H6.28a.566.566 0 100 1.132h3.725v3.724a.565.565 0 101.13 0v-4.29a.566.566 0 00-.565-.566zm7.15-2.859h-3.725V6.28a.566.566 0 10-1.13 0v4.29c0 .313.252.566.565.566h4.29a.566.566 0 100-1.131z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M18.834 5.166a.566.566 0 00-.8 0L13.03 10.17a.565.565 0 10.8.8l5.004-5.005a.566.566 0 000-.8zM10.97 13.03a.566.566 0 00-.8 0l-5.004 5.005a.566.566 0 10.8.8l5.004-5.005a.566.566 0 000-.8z"
  }));
}

IconMinimize.propTypes = IconPropTypes;

export default IconMinimize;
//# sourceMappingURL=IconMinimize.js.map
