import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import React from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconMinus(_ref) {
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
    strokeWidth: 0.3,
    d: "M18.434 11.354H5.566c-.313 0-.566.29-.566.646 0 .357.253.646.566.646h12.869c.312 0 .565-.289.565-.646 0-.357-.253-.646-.566-.646z"
  }));
}

IconMinus.propTypes = IconPropTypes;

export default IconMinus;
//# sourceMappingURL=IconMinus.js.map
