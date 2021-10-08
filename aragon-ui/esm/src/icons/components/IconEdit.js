import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import React from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconEdit(_ref) {
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
    d: "M17.883 13.31a.646.646 0 00-.646.646v3.927c0 .455-.37.825-.825.825H6.117a.825.825 0 01-.824-.825V7.588c0-.455.37-.825.824-.825h3.927a.646.646 0 100-1.292H6.117A2.12 2.12 0 004 7.588v10.295A2.12 2.12 0 006.117 20h10.295a2.12 2.12 0 002.117-2.117v-3.927a.646.646 0 00-.646-.646z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M19.81 7.13l-2.94-2.94a.646.646 0 00-.915 0l-7.354 7.353a.646.646 0 00-.189.457v2.942c0 .357.29.646.646.646H12a.646.646 0 00.457-.19l7.354-7.353a.646.646 0 000-.914zm-8.078 7.165H9.705v-2.027l6.707-6.708 2.028 2.028-6.708 6.707z"
  }));
}

IconEdit.propTypes = IconPropTypes;

export default IconEdit;
//# sourceMappingURL=IconEdit.js.map
