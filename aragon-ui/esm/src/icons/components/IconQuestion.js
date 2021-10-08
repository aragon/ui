import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import React from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconQuestion(_ref) {
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
    d: "M11.5 4C9.025 4 7 5.966 7 8.369c-.007.462.425.892.9.892.476 0 .907-.43.9-.892 0-1.458 1.198-2.621 2.7-2.621 1.502 0 2.7 1.163 2.7 2.62.01 1.197-.624 1.81-1.51 2.622-.442.406-.933.83-1.35 1.384-.415.554-.74 1.275-.74 2.111-.007.462.425.892.9.892.476 0 .907-.43.9-.892 0-.431.13-.731.394-1.083.263-.351.673-.724 1.134-1.146.92-.845 2.08-1.753 2.072-3.887C16 5.983 13.97 4 11.5 4zm0 12.67c-.663 0-1.2.521-1.2 1.165 0 .643.537 1.165 1.2 1.165.663 0 1.2-.522 1.2-1.165s-.537-1.165-1.2-1.165z"
  }));
}

IconQuestion.propTypes = IconPropTypes;

export default IconQuestion;
//# sourceMappingURL=IconQuestion.js.map
