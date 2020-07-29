import React from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import { P as PropTypes } from './index-097535f1.js';
import _styled from 'styled-components';
import { _ as _extends } from './extends-db4f0c26.js';
import { _ as _objectWithoutProperties } from './objectWithoutProperties-234758e1.js';

var _StyledDiv = _styled("div").withConfig({
  displayName: "ScrollView___StyledDiv",
  componentId: "sc-1hhoqwn-0"
})(["position:relative;z-index:0;height:100%;overflow-x:", ";overflow-y:", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

function ScrollView(_ref) {
  var children = _ref.children,
      horizontal = _ref.horizontal,
      vertical = _ref.vertical,
      props = _objectWithoutProperties(_ref, ["children", "horizontal", "vertical"]);

  return /*#__PURE__*/React.createElement(_StyledDiv, _extends({}, props, {
    _css: horizontal ? 'auto' : 'hidden',
    _css2: vertical ? 'auto' : 'hidden'
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

export default ScrollView;
//# sourceMappingURL=ScrollView.js.map
