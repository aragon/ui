import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import slicedToArray from '../../../node_modules/@babel/runtime/helpers/slicedToArray.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import _styled from 'styled-components';
import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import { useInside as o, Inside as i } from '../../../node_modules/use-inside/dist/index.js';
import { useTheme } from '../../theme/Theme2.js';
import { useLayout } from '../Layout/Layout.js';
import { RADIUS, GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';
import { warnOnce } from '../../utils/environment.js';

var _StyledDiv = _styled("div").withConfig({
  displayName: "Box___StyledDiv",
  componentId: "sc-54p6u6-0"
})(["position:relative;border-radius:", "px;border-style:solid;border-color:", ";border-width:", ";background:", ";color:", ";& + &{margin-top:", "px;}"], function (p) {
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
});

var _StyledH = _styled("h1").withConfig({
  displayName: "Box___StyledH",
  componentId: "sc-54p6u6-1"
})(["display:flex;align-items:center;height:", "px;padding:0 ", "px;border-bottom:1px solid ", ";color:", ";", ";"], function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
}, function (p) {
  return p._css10;
}, function (p) {
  return p._css11;
});

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "Box___StyledDiv2",
  componentId: "sc-54p6u6-2"
})(["padding:", "px;"], function (p) {
  return p._css12;
});

function Box(_ref) {
  var heading = _ref.heading,
      children = _ref.children,
      padding = _ref.padding,
      props = objectWithoutProperties(_ref, ["heading", "children", "padding"]);

  var theme = useTheme();

  var _useInside = o('Split:primary'),
      _useInside2 = slicedToArray(_useInside, 1),
      insideSplitPrimary = _useInside2[0];

  var _useLayout = useLayout(),
      layoutName = _useLayout.layoutName;

  var fullWidth = layoutName === 'small';
  var defaultPadding = (fullWidth ? 2 : insideSplitPrimary ? 5 : 3) * GU;

  if (padding === true) {
    warnOnce('Box:padding:true', 'Box: setting true on the padding prop is deprecated. Omit it, or set it to undefined instead.');
    padding = defaultPadding;
  }

  if (padding === false) {
    warnOnce('Box:padding:false', 'Box: setting false on the padding prop is deprecated. Use 0.');
    padding = 0;
  }

  var contentPadding = padding === undefined ? defaultPadding : padding;
  return /*#__PURE__*/React.createElement(i, {
    name: "Box"
  }, /*#__PURE__*/React.createElement(_StyledDiv, _extends_1({
    as: heading ? 'section' : 'div'
  }, props, {
    _css: fullWidth ? 0 : RADIUS,
    _css2: theme.border,
    _css3: fullWidth ? '1px 0' : '1px',
    _css4: theme.surface,
    _css5: theme.surfaceContent,
    _css6: 2 * GU
  }), heading && /*#__PURE__*/React.createElement(_StyledH, {
    _css7: 4 * GU,
    _css8: defaultPadding,
    _css9: theme.border,
    _css10: theme.surfaceContentSecondary,
    _css11: textStyle('label2')
  }, /*#__PURE__*/React.createElement(i, {
    name: "Box:heading"
  }, heading)), /*#__PURE__*/React.createElement(_StyledDiv2, {
    _css12: contentPadding
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(i, {
    name: "Box:content"
  }, children)))));
}

Box.propTypes = {
  heading: propTypes.node,
  children: propTypes.node,
  padding: propTypes.oneOfType([propTypes.number, // deprecated
  propTypes.bool])
};

export default Box;
//# sourceMappingURL=Box.js.map
