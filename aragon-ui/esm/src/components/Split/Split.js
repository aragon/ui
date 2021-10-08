import _styled from 'styled-components';
import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import { Inside as i } from '../../../node_modules/use-inside/dist/index.js';
import { useLayout } from '../Layout/Layout.js';
import { GU } from '../../style/constants.js';

var _StyledDiv = _styled("div").withConfig({
  displayName: "Split___StyledDiv",
  componentId: "sc-19nz0vo-0"
})(["flex-grow:1;margin-left:", "px;padding-top:", "px;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "Split___StyledDiv2",
  componentId: "sc-19nz0vo-1"
})(["flex-shrink:0;flex-grow:0;width:", ";margin-left:", "px;padding-top:", "px;"], function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

var _StyledDiv3 = _styled("div").withConfig({
  displayName: "Split___StyledDiv3",
  componentId: "sc-19nz0vo-2"
})(["display:", ";padding-bottom:", "px;width:100%;"], function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
});

function Split(_ref) {
  var primary = _ref.primary,
      secondary = _ref.secondary,
      invert = _ref.invert;

  var _useLayout = useLayout(),
      layout = _useLayout.name;

  var oneColumn = layout === 'small' || layout === 'medium';
  var inverted = !oneColumn && invert === 'horizontal' || oneColumn && invert === 'vertical';
  var primaryContent = /*#__PURE__*/React.createElement(i, {
    name: "Split:primary"
  }, /*#__PURE__*/React.createElement(_StyledDiv, {
    _css: !oneColumn && inverted ? 2 * GU : 0,
    _css2: oneColumn && inverted ? 2 * GU : 0
  }, primary));
  var secondaryContent = /*#__PURE__*/React.createElement(i, {
    name: "Split:secondary"
  }, /*#__PURE__*/React.createElement(_StyledDiv2, {
    _css3: oneColumn ? '100%' : "".concat(33 * GU, "px"),
    _css4: !oneColumn && !inverted ? 2 * GU : 0,
    _css5: oneColumn && !inverted ? 2 * GU : 0
  }, secondary));
  return /*#__PURE__*/React.createElement(i, {
    name: "Split"
  }, /*#__PURE__*/React.createElement(_StyledDiv3, {
    _css6: oneColumn ? 'block' : 'flex',
    _css7: 3 * GU
  }, inverted ? secondaryContent : primaryContent, inverted ? primaryContent : secondaryContent));
}

Split.propTypes = {
  invert: propTypes.oneOf(['none', 'horizontal', 'vertical']),
  primary: propTypes.node,
  secondary: propTypes.node
};
Split.defaultProps = {
  invert: 'none'
};

export default Split;
export { Split };
//# sourceMappingURL=Split.js.map
