import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import React from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconCloudUpload(_ref) {
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
    d: "M8.715 15.292a.679.679 0 00.96 0l2.328-2.327 2.327 2.327a.679.679 0 10.96-.96l-2.807-2.808a.676.676 0 00-.96 0l-2.808 2.808a.679.679 0 000 .96z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M12.003 19a.679.679 0 00.679-.679v-6.317a.679.679 0 00-1.358 0v6.317c0 .375.304.679.679.679z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M19.642 10.999a4.192 4.192 0 00-3.425-1.78h-.383A6.303 6.303 0 008.326 5.2a6.3 6.3 0 00-4.532 7.66 6.322 6.322 0 001.383 2.606.68.68 0 001.017-.9 4.958 4.958 0 01-1.085-2.044 4.941 4.941 0 013.554-6.007 4.941 4.941 0 016.008 3.554c.077.3.348.51.657.51h.888c.92 0 1.785.45 2.315 1.202a2.833 2.833 0 01-.688 3.943.679.679 0 10.782 1.111A4.193 4.193 0 0019.642 11z"
  }));
}

IconCloudUpload.propTypes = IconPropTypes;

export default IconCloudUpload;
//# sourceMappingURL=IconCloudUpload.js.map
