import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import React from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconVote(_ref) {
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
    fillRule: "evenodd",
    d: "M8.023 2.178a.656.656 0 01.898 0l.713.675a1.553 1.553 0 01.458 1.459l-.001.005-.427 1.928h3.849c.829 0 1.543.645 1.543 1.482v1.061a1.845 1.845 0 01-.15.72l-2.03 4.488c-.306.694-1.022 1.156-1.83 1.156H4.992C3.912 15.152 3 14.32 3 13.245V7.727c0-.536.233-1.015.592-1.355l4.43-4.194zM4.49 7.283l-.45-.456.45.456a.61.61 0 00-.198.444v5.518c0 .334.29.64.7.64h6.053a.695.695 0 00.647-.4l2.025-4.477a.594.594 0 00.045-.22v-1.06c0-.097-.093-.216-.25-.216h-4.65a.652.652 0 01-.504-.236.624.624 0 01-.129-.532l.596-2.692a.297.297 0 00-.09-.288l-.264-.25-3.981 3.77z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M15.977 21.822a.656.656 0 01-.898 0l-.713-.675a1.553 1.553 0 01-.457-1.464l.427-1.928h-3.849c-.829 0-1.543-.645-1.543-1.482v-1.061c0-.259.056-.49.14-.696l1.202.466a.6.6 0 00-.049.23v1.06c0 .097.093.216.25.216h4.65c.196 0 .381.087.504.236s.17.345.129.532l-.596 2.692a.297.297 0 00.09.288l.264.25 3.981-3.77.45.457-.45-.456a.61.61 0 00.198-.444v-5.518c0-.334-.29-.64-.7-.64H14.52V8.848h4.489c1.08 0 1.992.832 1.992 1.907v5.518c0 .536-.233 1.015-.592 1.355l-4.43 4.194z",
    clipRule: "evenodd"
  }));
}

IconVote.propTypes = IconPropTypes;

export default IconVote;
//# sourceMappingURL=IconVote.js.map
