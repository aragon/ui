import React$1 from 'react';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties$1 from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import useIconSize from '../icon-size.js';
import IconPropTypes$1 from '../IconPropTypes.js';

function IconAlignJustify(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties$1(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return /*#__PURE__*/React$1.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React$1.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M20.273 9.434H3.727a.727.727 0 000 1.455h16.546a.727.727 0 000-1.455zm0-3.676H3.727a.727.727 0 000 1.454h16.546a.727.727 0 100-1.454zm0 7.353H3.727a.727.727 0 100 1.454h16.546a.727.727 0 100-1.454zm0 3.677H3.727a.727.727 0 100 1.454h16.546a.727.727 0 100-1.454z"
  }));
}

IconAlignJustify.propTypes = IconPropTypes$1;

export default IconAlignJustify;
//# sourceMappingURL=IconAlignJustify.js.map
