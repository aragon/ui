import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import slicedToArray from '../../../node_modules/@babel/runtime/helpers/slicedToArray.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import _styled from 'styled-components';
import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import { useInside as o } from '../../../node_modules/use-inside/dist/index.js';
import Bar from '../Bar/Bar.js';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';
import { useLayout } from '../Layout/Layout.js';
import { useTheme } from '../../theme/Theme2.js';
import IconArrowLeft from '../../icons/components/IconArrowLeft.js';
import { RADIUS, GU } from '../../style/constants.js';

var _StyledButtonBase = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "BackButton___StyledButtonBase",
  componentId: "ebowg7-0"
})(["display:inline-flex;align-items:center;border-radius:", "px 0 0 ", "px;height:100%;margin-left:", "px;padding:0 ", "px 0 ", "px;border-right:1px solid ", ";color:", ";background:", ";&:active{background:", ";}"], RADIUS, RADIUS, function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
});

var _StyledSpan = _styled("span").withConfig({
  displayName: "BackButton___StyledSpan",
  componentId: "ebowg7-1"
})(["position:relative;top:2px;color:", ";"], function (p) {
  return p._css8;
});

var _StyledSpan2 = _styled("span").withConfig({
  displayName: "BackButton___StyledSpan2",
  componentId: "ebowg7-2"
})(["padding-left:", "px;font-size:16px;font-weight:600;"], function (p) {
  return p._css9;
});

function BackButton(_ref) {
  var label = _ref.label,
      props = objectWithoutProperties(_ref, ["label"]);

  var theme = useTheme();

  var _useInside = o('Bar:primary'),
      _useInside2 = slicedToArray(_useInside, 1),
      insideBarPrimary = _useInside2[0];

  var _useLayout = useLayout(),
      layoutName = _useLayout.layoutName;

  var compact = layoutName === 'small';
  var horizontalPadding = (compact ? 2 : 3) * GU;
  return /*#__PURE__*/React.createElement(_StyledButtonBase, _extends_1({
    focusRingRadius: RADIUS,
    focusRingSpacing: 1
  }, props, {
    _css: insideBarPrimary ? -Bar.PADDING : 0,
    _css2: horizontalPadding,
    _css3: horizontalPadding - 4,
    _css4: theme.border,
    _css5: theme.surfaceContent,
    _css6: theme.surfaceInteractive,
    _css7: theme.surfaceHighlight
  }), /*#__PURE__*/React.createElement(_StyledSpan, {
    _css8: theme.accent
  }, /*#__PURE__*/React.createElement(IconArrowLeft, null)), /*#__PURE__*/React.createElement(_StyledSpan2, {
    _css9: 1 * GU
  }, label));
}

BackButton.propTypes = {
  label: propTypes.string
};
BackButton.defaultProps = {
  label: 'Back'
};

export default BackButton;
//# sourceMappingURL=BackButton.js.map
