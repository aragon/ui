import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import React from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconCopy(_ref) {
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
    strokeWidth: 0.1,
    d: "M6.437 20.505h8.807a1.99 1.99 0 001.988-1.988v-.352a.579.579 0 00-1.157 0v.352c0 .458-.373.83-.83.83H6.436a.832.832 0 01-.83-.83V9.006c0-.458.373-.831.83-.831h.353a.579.579 0 000-1.157h-.353A1.99 1.99 0 004.45 9.006v9.511a1.99 1.99 0 001.987 1.988z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.1,
    d: "M10.665 16.277h7.398a1.99 1.99 0 001.987-1.987V5.483a1.99 1.99 0 00-1.987-1.988h-7.398a1.99 1.99 0 00-1.988 1.988v8.807a1.99 1.99 0 001.988 1.987zm-.83-10.794a.83.83 0 01.83-.83h7.398c.457 0 .83.372.83.83v8.807c0 .458-.373.83-.83.83h-7.398a.832.832 0 01-.83-.83V5.483z"
  }));
}

IconCopy.propTypes = IconPropTypes;

export default IconCopy;
//# sourceMappingURL=IconCopy.js.map
