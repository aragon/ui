import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import React from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconExternal(_ref) {
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
    d: "M16.902 12.17a.646.646 0 00-.646.647v4.903a.989.989 0 01-.988.987H6.28a.989.989 0 01-.987-.987V8.732c0-.545.443-.988.987-.988h4.903a.646.646 0 100-1.293H6.28A2.283 2.283 0 004 8.731v8.989A2.283 2.283 0 006.28 20h8.988a2.283 2.283 0 002.28-2.28v-4.903a.646.646 0 00-.645-.646zM19.354 4H14.45a.646.646 0 100 1.293h4.256v4.256a.646.646 0 001.293 0V4.646A.646.646 0 0019.354 4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M19.81 4.19a.646.646 0 00-.913 0l-8.988 8.988a.646.646 0 00.914.914l8.988-8.988a.646.646 0 000-.914z"
  }));
}

IconExternal.propTypes = IconPropTypes;

export default IconExternal;
//# sourceMappingURL=IconExternal.js.map
