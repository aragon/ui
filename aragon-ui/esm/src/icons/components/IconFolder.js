import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import React from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconFolder(_ref) {
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
    d: "M17.883 6.941H11.61l-1.28-1.918a.646.646 0 00-.537-.288H6.117A2.12 2.12 0 004 6.852v10.296a2.12 2.12 0 002.117 2.117h11.766A2.12 2.12 0 0020 17.148v-8.09a2.12 2.12 0 00-2.117-2.117zm.824 10.207c0 .454-.37.824-.824.824H6.117a.825.825 0 01-.824-.824V6.852c0-.454.37-.824.824-.824h3.331l1.279 1.918c.12.18.322.288.538.288h6.618c.454 0 .824.37.824.825v8.089z"
  }));
}

IconFolder.propTypes = IconPropTypes;

export default IconFolder;
//# sourceMappingURL=IconFolder.js.map
