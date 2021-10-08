import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import React from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconDownload(_ref) {
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
    d: "M18.618 15.03a.646.646 0 00-.646.647v2.206c0 .454-.37.824-.824.824H6.852a.825.825 0 01-.824-.824v-2.206a.646.646 0 00-1.293 0v2.206A2.12 2.12 0 006.853 20h10.295a2.12 2.12 0 002.117-2.117v-2.206a.646.646 0 00-.647-.646z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M15.399 11.543a.646.646 0 00-.914 0L12 14.027l-2.484-2.484a.646.646 0 00-.914.914l2.941 2.941a.646.646 0 00.914 0l2.941-2.941a.646.646 0 000-.914z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M12 4a.646.646 0 00-.646.646v10.296a.646.646 0 001.292 0V4.646A.646.646 0 0012 4z"
  }));
}

IconDownload.propTypes = IconPropTypes;

export default IconDownload;
//# sourceMappingURL=IconDownload.js.map
