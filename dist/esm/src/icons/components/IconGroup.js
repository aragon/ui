import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import React from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconGroup({
  size,
  ...props
}) {
  const sizeValue = useIconSize(size);
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M2.68 18.35h11.76c-.125-1.148-.582-1.865-1.121-2.313-.657-.546-1.518-.762-2.286-.762H6.068c-1.476 0-2.304.616-2.785 1.348-.358.544-.538 1.18-.603 1.727zm-.483-2.442c.717-1.091 1.951-1.933 3.871-1.933h4.966c.982 0 2.166.271 3.117 1.063.974.81 1.624 2.098 1.624 3.962a.65.65 0 01-.65.65H2.003a.65.65 0 01-.65-.623c-.033-.828.152-2.066.844-3.119zM5.49 9.664a3.11 3.11 0 116.223 0 3.11 3.11 0 01-6.222 0zm3.112-1.81a1.81 1.81 0 100 3.621 1.81 1.81 0 000-3.622zm4.415 3.568a.65.65 0 01.65-.65h3.409c.981 0 2.166.271 3.117 1.062.973.81 1.624 2.099 1.624 3.963a.65.65 0 01-.65.65h-4.493a.65.65 0 110-1.3h3.809c-.125-1.148-.582-1.865-1.121-2.313-.657-.546-1.518-.762-2.286-.762h-3.41a.65.65 0 01-.65-.65zM11.662 6.46a3.11 3.11 0 116.222.001 3.11 3.11 0 01-6.222 0zm3.111-1.81a1.811 1.811 0 100 3.622 1.811 1.811 0 000-3.622z",
    clipRule: "evenodd"
  }));
}

IconGroup.propTypes = IconPropTypes;

export { IconGroup as default };
//# sourceMappingURL=IconGroup.js.map
