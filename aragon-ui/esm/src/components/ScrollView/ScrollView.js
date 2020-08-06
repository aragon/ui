import React$1 from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import _styled$1 from 'styled-components';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties$1 from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';

var _StyledDiv = _styled$1("div").withConfig({
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
      props = objectWithoutProperties$1(_ref, ["children", "horizontal", "vertical"]);

  return /*#__PURE__*/React$1.createElement(_StyledDiv, _extends_1({}, props, {
    _css: horizontal ? 'auto' : 'hidden',
    _css2: vertical ? 'auto' : 'hidden'
  }), children);
}

ScrollView.propTypes = {
  vertical: propTypes.bool,
  horizontal: propTypes.bool,
  children: propTypes.node
};
ScrollView.defaultProps = {
  vertical: true,
  horizontal: true
};

export default ScrollView;
//# sourceMappingURL=ScrollView.js.map
