import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import React from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconUpload(_ref) {
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
    d: "M18.618 15.03a.646.646 0 00-.646.647v2.206c0 .454-.37.824-.824.824H6.852a.825.825 0 01-.824-.824v-2.206a.646.646 0 00-1.293 0v2.206A2.12 2.12 0 006.853 20h10.295a2.12 2.12 0 002.117-2.117v-2.206a.646.646 0 00-.647-.646zM8.602 8.045a.646.646 0 00.914 0L12 5.56l2.485 2.485a.646.646 0 00.914-.914l-2.942-2.942a.646.646 0 00-.914 0L8.602 7.131a.646.646 0 000 .914z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M12 15.588c.357 0 .646-.29.646-.646V4.646a.646.646 0 00-1.292 0v10.296c0 .356.289.646.646.646z"
  }));
}

IconUpload.propTypes = IconPropTypes;

export default IconUpload;
//# sourceMappingURL=IconUpload.js.map
