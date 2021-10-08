import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import React from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconNoPicture(_ref) {
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
    d: "M19.81 18.897L5.105 4.189a.646.646 0 10-.914.914l14.707 14.708a.644.644 0 00.914 0 .646.646 0 000-.914z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M18.017 17.37H5.983c-.38 0-.69-.31-.69-.69V9.326c0-.381.31-.69.69-.69H7.99a.646.646 0 000-1.293H5.983C4.89 7.343 4 8.233 4 9.326v7.354c0 1.093.89 1.983 1.983 1.983h12.034a.646.646 0 100-1.293zm0-10.027h-2.329l-1.145-1.718a.646.646 0 00-.537-.288H9.994a.646.646 0 000 1.293h3.666l1.145 1.717c.12.18.321.288.537.288h2.675c.38 0 .69.31.69.69v6.245a.646.646 0 101.293 0V9.326c0-1.094-.89-1.983-1.983-1.983z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M14.558 13.66a.646.646 0 00-.899.168 2.03 2.03 0 01-2.818.528 2.03 2.03 0 010-3.347.646.646 0 00-.73-1.067 3.324 3.324 0 000 5.48 3.32 3.32 0 004.615-.865.646.646 0 00-.168-.898z"
  }));
}

IconNoPicture.propTypes = IconPropTypes;

export default IconNoPicture;
//# sourceMappingURL=IconNoPicture.js.map
