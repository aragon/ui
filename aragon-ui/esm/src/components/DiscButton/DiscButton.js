import React$1 from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import _styled$1 from 'styled-components';
import '../../utils/environment.js';
import { GU } from '../../style/constants.js';
import { useTheme } from '../../theme/Theme2.js';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties$1 from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';

var _StyledButtonBase = _styled$1(ButtonBaseWithFocus).withConfig({
  displayName: "DiscButton___StyledButtonBase",
  componentId: "sc-1ay99f2-0"
})(["display:flex;align-items:center;justify-content:center;width:", "px;height:", "px;background:", ";color:", ";border-radius:50%;box-shadow:0 1px 3px rgba(0,0,0,0.25);transition-property:transform,box-shadow;transition-duration:50ms;transition-timing-function:ease-in-out;&:active{transform:translateY(1px);box-shadow:0px 1px 3px rgba(0,0,0,0.125);}"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
});

var DiscButton = /*#__PURE__*/React$1.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      description = _ref.description,
      size = _ref.size,
      props = objectWithoutProperties$1(_ref, ["children", "description", "size"]);

  var theme = useTheme();
  return /*#__PURE__*/React$1.createElement(_StyledButtonBase, _extends_1({
    ref: ref,
    focusRingSpacing: 4,
    focusRingRadius: size,
    title: description
  }, props, {
    _css: size,
    _css2: size,
    _css3: theme.help,
    _css4: theme.helpContent
  }), children);
});
DiscButton.propTypes = {
  children: propTypes.node.isRequired,
  description: propTypes.string.isRequired,
  size: propTypes.number
};
DiscButton.defaultProps = {
  size: 5 * GU
};

export default DiscButton;
//# sourceMappingURL=DiscButton.js.map
