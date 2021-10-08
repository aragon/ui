import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import React from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconGrid(_ref) {
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
    d: "M9.549 4H5.463C4.657 4 4 4.657 4 5.463V9.55c0 .807.657 1.463 1.463 1.463H9.55c.807 0 1.463-.656 1.463-1.463V5.463A1.466 1.466 0 009.55 4zm.17 5.549a.17.17 0 01-.17.17H5.463a.171.171 0 01-.17-.17V5.463a.17.17 0 01.17-.17H9.55a.17.17 0 01.17.17V9.55zM18.537 4H14.45c-.807 0-1.463.657-1.463 1.463V9.55c0 .807.656 1.463 1.463 1.463h4.086c.807 0 1.463-.656 1.463-1.463V5.463A1.463 1.463 0 0018.537 4zm.17 5.549a.17.17 0 01-.17.17H14.45a.171.171 0 01-.17-.17V5.463a.17.17 0 01.17-.17h4.086a.17.17 0 01.17.17V9.55zm-.17 3.439H14.45c-.807 0-1.463.656-1.463 1.463v4.086c0 .807.656 1.463 1.463 1.463h4.086c.807 0 1.463-.657 1.463-1.463V14.45c0-.807-.656-1.463-1.463-1.463zm.17 5.549a.17.17 0 01-.17.17H14.45a.17.17 0 01-.17-.17V14.45a.17.17 0 01.17-.17h4.086a.17.17 0 01.17.17v4.086zm-9.158-5.549H5.463c-.806 0-1.463.656-1.463 1.463v4.086C4 19.343 4.657 20 5.463 20H9.55c.807 0 1.463-.657 1.463-1.463V14.45c0-.807-.656-1.463-1.463-1.463zm.17 5.549a.17.17 0 01-.17.17H5.463a.17.17 0 01-.17-.17V14.45a.17.17 0 01.17-.17H9.55a.17.17 0 01.17.17v4.086z"
  }));
}

IconGrid.propTypes = IconPropTypes;

export default IconGrid;
//# sourceMappingURL=IconGrid.js.map
