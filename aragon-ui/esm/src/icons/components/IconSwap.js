import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import React from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconSwap(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return /*#__PURE__*/React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 22 21"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M21.399 12l-3.033-3.034a.566.566 0 00-.8.8l2.633 2.633-2.633 2.634a.566.566 0 00.8.8l3.033-3.034a.565.565 0 000-.8zm-16.166-.967L2.6 8.399l2.633-2.633a.566.566 0 10-.8-.8L1.4 8a.566.566 0 000 .8l3.033 3.033a.566.566 0 00.8-.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M21.564 12.4a.566.566 0 00-.565-.566H9.921a.566.566 0 000 1.131H21a.566.566 0 00.566-.566zm-8.121-4a.565.565 0 00-.566-.566H1.8a.566.566 0 100 1.131h11.077a.565.565 0 00.566-.565z"
  }));
}

IconSwap.propTypes = IconPropTypes;

export default IconSwap;
//# sourceMappingURL=IconSwap.js.map
