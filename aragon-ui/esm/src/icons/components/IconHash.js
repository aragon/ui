import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import React from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconHash(_ref) {
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
    d: "M18.537 8.902H5.463a.646.646 0 000 1.293h13.074a.646.646 0 000-1.293zm0 4.903H5.463a.646.646 0 100 1.293h13.074a.646.646 0 000-1.293z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M10.437 4.004a.646.646 0 00-.714.571L8.09 19.283a.646.646 0 101.285.142l1.634-14.707a.646.646 0 00-.57-.714zm4.903 0a.646.646 0 00-.714.571l-1.634 14.707a.646.646 0 001.285.143L15.91 4.718a.646.646 0 00-.571-.714z"
  }));
}

IconHash.propTypes = IconPropTypes;

export default IconHash;
//# sourceMappingURL=IconHash.js.map
