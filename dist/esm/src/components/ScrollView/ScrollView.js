import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';

function ScrollView({
  children,
  horizontal,
  vertical,
  ...props
}) {
  return /*#__PURE__*/React.createElement(_StyledDiv, _extends({}, props, {
    $_css: horizontal ? 'auto' : 'hidden',
    $_css2: vertical ? 'auto' : 'hidden'
  }), children);
}

ScrollView.propTypes = {
  vertical: PropTypes.bool,
  horizontal: PropTypes.bool,
  children: PropTypes.node
};
ScrollView.defaultProps = {
  vertical: true,
  horizontal: true
};

var _StyledDiv = _styled("div").withConfig({
  displayName: "ScrollView___StyledDiv",
  componentId: "sc-1hhoqwn-0"
})(["position:relative;z-index:0;height:100%;overflow-x:", ";overflow-y:", ";"], p => p.$_css, p => p.$_css2);

export { ScrollView as default };
//# sourceMappingURL=ScrollView.js.map
