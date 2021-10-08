import defineProperty from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import _styled from 'styled-components';
import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';
import { useTheme } from '../../theme/Theme2.js';
import { GU } from '../../style/constants.js';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _StyledButtonBase = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "ButtonText___StyledButtonBase",
  componentId: "i6an1t-0"
})(["padding:", "px ", "px ", "px ", "px;color:", ";font-size:inherit;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

function ButtonText(_ref) {
  var horizontalPadding = _ref.horizontalPadding,
      props = objectWithoutProperties(_ref, ["horizontalPadding"]);

  var theme = useTheme();
  var leftPadding = Number(horizontalPadding === 'left' || horizontalPadding === 'both') * GU;
  var rightPadding = Number(horizontalPadding === 'right' || horizontalPadding === 'both') * GU;
  return /*#__PURE__*/React.createElement(_StyledButtonBase, _extends_1({}, props, {
    _css: 1 * GU,
    _css2: rightPadding,
    _css3: 1 * GU,
    _css4: leftPadding,
    _css5: theme.link
  }));
}

ButtonText.propTypes = _objectSpread(_objectSpread({}, ButtonBaseWithFocus.propTypes), {}, {
  horizontalPadding: propTypes.oneOf(['both', 'left', 'right', 'none'])
});
ButtonText.defaultProps = {
  horizontalPadding: 'both'
};

export default ButtonText;
//# sourceMappingURL=ButtonText.js.map
