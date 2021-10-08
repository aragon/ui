import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import React from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconToken(_ref) {
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
    fillRule: "evenodd",
    d: "M8.556 16.508c0-1.93 1.542-3.493 3.444-3.493s3.444 1.564 3.444 3.492C15.444 18.438 13.902 20 12 20s-3.444-1.564-3.444-3.492zM12 14.366c-1.166 0-2.112.959-2.112 2.142 0 1.182.946 2.141 2.112 2.141 1.166 0 2.112-.959 2.112-2.142 0-1.182-.946-2.141-2.112-2.141zM3 9.183c0-1.307 1.044-2.366 2.333-2.366 1.288 0 2.333 1.06 2.333 2.366s-1.045 2.366-2.333 2.366C4.044 11.549 3 10.489 3 9.183zm2.333-1.015c-.553 0-1.001.454-1.001 1.015 0 .56.448 1.015 1 1.015.554 0 1.002-.455 1.002-1.015 0-.56-.448-1.015-1.001-1.015zm11.001 1.015c0-1.307 1.045-2.366 2.333-2.366 1.289 0 2.333 1.06 2.333 2.366s-1.044 2.366-2.333 2.366c-1.288 0-2.333-1.06-2.333-2.366zm2.333-1.015c-.553 0-1 .454-1 1.015 0 .56.447 1.015 1 1.015.553 0 1.001-.455 1.001-1.015 0-.56-.448-1.015-1-1.015zm-9-1.802C9.667 5.059 10.711 4 12 4c1.288 0 2.333 1.06 2.333 2.366S13.288 8.73 12 8.73c-1.289 0-2.333-1.059-2.333-2.365zM12 5.35c-.553 0-1 .454-1 1.015 0 .56.447 1.015 1 1.015.553 0 1-.455 1-1.015 0-.56-.447-1.015-1-1.015z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M11.334 13.68V7.775h1.332v5.907h-1.332zm1.723.396l3.907-3.962.942.955-3.907 3.962-.942-.955zm-2.166 0l-3.907-3.962-.942.955 3.907 3.962.942-.955z",
    clipRule: "evenodd"
  }));
}

IconToken.propTypes = IconPropTypes;

export default IconToken;
//# sourceMappingURL=IconToken.js.map
