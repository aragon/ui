import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import React from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconWarning(_ref) {
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
    d: "M6.343 17.657A7.948 7.948 0 0012 20a7.948 7.948 0 005.657-2.343A7.947 7.947 0 0020 12a7.948 7.948 0 00-2.343-5.657A7.947 7.947 0 0012 4a7.948 7.948 0 00-5.657 2.343A7.948 7.948 0 004 12c0 2.137.832 4.146 2.343 5.657zM12 5.293A6.715 6.715 0 0118.707 12 6.715 6.715 0 0112 18.707 6.715 6.715 0 015.293 12 6.715 6.715 0 0112 5.293z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M12 12.646c.357 0 .646-.29.646-.646V9.058a.646.646 0 10-1.292 0V12c0 .357.29.646.646.646zm-.457 2.753c.12.12.287.189.457.189a.651.651 0 00.646-.646.651.651 0 00-.189-.458.65.65 0 00-.457-.189.65.65 0 00-.457.19.65.65 0 00-.19.456c0 .17.07.337.19.457z"
  }));
}

IconWarning.propTypes = IconPropTypes;

export default IconWarning;
//# sourceMappingURL=IconWarning.js.map
