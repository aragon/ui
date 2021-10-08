import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import React from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconPrint(_ref) {
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
    d: "M16.412 4H7.588a.646.646 0 00-.646.646v5.148a.646.646 0 001.292 0V5.293h7.532v4.5a.646.646 0 101.293 0V4.647A.646.646 0 0016.412 4z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M17.883 9.148H6.117A2.12 2.12 0 004 11.265v3.676a2.12 2.12 0 002.117 2.117h1.47a.646.646 0 100-1.292h-1.47a.825.825 0 01-.824-.825v-3.676c0-.455.37-.825.824-.825h11.766c.454 0 .824.37.824.825v3.676c0 .455-.37.825-.824.825h-1.47a.646.646 0 100 1.292h1.47A2.12 2.12 0 0020 14.941v-3.676a2.12 2.12 0 00-2.117-2.117z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M16.412 12.824H7.588a.646.646 0 00-.646.647v5.883c0 .357.289.646.646.646h8.824c.357 0 .647-.29.647-.646V13.47a.646.646 0 00-.647-.647zm-.646 5.883H8.234v-4.59h7.532v4.59z"
  }));
}

IconPrint.propTypes = IconPropTypes;

export default IconPrint;
//# sourceMappingURL=IconPrint.js.map
