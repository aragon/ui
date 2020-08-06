import React$1 from 'react';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties$1 from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import useIconSize from '../icon-size.js';
import IconPropTypes$1 from '../IconPropTypes.js';

function IconMinus(_ref) {
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
    strokeWidth: 0.3,
    d: "M18.434 11.354H5.566c-.313 0-.566.29-.566.646 0 .357.253.646.566.646h12.869c.312 0 .565-.289.565-.646 0-.357-.253-.646-.566-.646z"
  }));
}

IconMinus.propTypes = IconPropTypes$1;

export default IconMinus;
//# sourceMappingURL=IconMinus.js.map
