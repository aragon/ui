import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import React from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconLayers(_ref) {
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
    d: "M19.643 7.745l-7.354-3.677a.646.646 0 00-.578 0L4.357 7.745a.646.646 0 000 1.156l7.354 3.677a.647.647 0 00.578 0l7.354-3.677a.646.646 0 000-1.156zM12 11.277L6.09 8.323 12 5.37l5.908 2.954L12 11.277zm7.932 4.111a.646.646 0 00-.868-.29L12 18.632 4.935 15.1a.646.646 0 00-.578 1.156l7.354 3.677a.646.646 0 00.578 0l7.354-3.677a.646.646 0 00.289-.867z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M19.932 11.71a.646.646 0 00-.868-.288L12 14.954l-7.065-3.532a.646.646 0 10-.578 1.156l7.354 3.677a.647.647 0 00.578 0l7.354-3.677a.646.646 0 00.289-.867z"
  }));
}

IconLayers.propTypes = IconPropTypes;

export default IconLayers;
//# sourceMappingURL=IconLayers.js.map
